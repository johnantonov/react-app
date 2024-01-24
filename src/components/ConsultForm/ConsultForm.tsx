'use client'
import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import css from './ConsultForm.module.css'
import Thanks from "../Thanks/Thanks";

export const ConsultForm: FunctionComponent = () => {
  const [telError, setTelError] = useState<Boolean | undefined>(undefined);
  const [emailError, setEmailError] = useState<Boolean | undefined>(undefined);
  const [thanks, setThanks] = useState(false);
  const [loading, setLoading] = useState(false);

  function phoneValidate(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const isNumeric = /^\+?\d+$/.test(inputValue);
    const isPhoneValid = (inputValue.startsWith('+375') && inputValue.length === 13) || (inputValue.startsWith('+7') && inputValue.length === 12);

    if (isNumeric && isPhoneValid) {
      setTelError(false);
    } else {
      setTelError(true);
    }
  };

  function emailValidate(event: ChangeEvent<HTMLInputElement>) {
    const isEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(event.target.value);
  
    if (isEmail) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (telError || telError === undefined || emailError || emailError === undefined) {
      telError === undefined ? setTelError(true) : null
      emailError === undefined ? setEmailError(true) : null
      return
    } else {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tel: e.currentTarget.tel.value,
            email: e.currentTarget.email.value,
            comm: e.currentTarget.comm.value,
          }),
        });
        
        if (response.ok) {
          setThanks(true);
          setLoading(false);
        } else {
          console.error('Ошибка при отправке данных на сервер:', response.statusText);
        }
      } catch (error: any) {
        console.error('Ошибка при выполнении запроса:', error.message);
      }
    }
  }
  return (
    <div className={css.ConsultForm}>
      {thanks && <Thanks onClose={() => {setThanks(false)}} text={'Ваша заявка принята'} sectionId="contacts"/>}
      <h3 className={css.form__title}>Заказать консультацию</h3>
      <form onSubmit={(e) => submitHandler(e)} action="" className={css.form}>
        <input onInput={(e: ChangeEvent<HTMLInputElement>) => phoneValidate(e)} className={css.form__tel + ' ' + (telError ? css.form__error : ' ')} type="tel" name="tel" id="#formTel" placeholder='Номер телефона'/>
        <input onInput={(e: ChangeEvent<HTMLInputElement>) => emailValidate(e)} className={emailError ? css.form__error : ' '} type="email" name="email" id="#formEmail" placeholder='Email'/>
        <textarea name="comm" id="formComm" placeholder='Комментарии'></textarea>
        <input className={'form__submit ' + css.form__sbmt} type="submit" value={loading ? 'Загрузка...' : "Заказать"}/>
      </form>
    </div>
  )
};