import { ChangeEvent, FormEvent, FunctionComponent, useContext, useEffect, useState } from 'react';
import css from './MainSale.module.css';
import { QuizContext } from '@/contexts/QuizContext';
import Thanks from '../Thanks/Thanks';

interface Id {
  section: string
}


export const MainSale_Form: FunctionComponent<Id> = ({
  section
}) => {
  const [error, setError] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [loading, setLoading] = useState(false)
  const { openModal, changePage, changeData } = useContext(QuizContext);
  const answers = useContext(QuizContext);

  function inputHandler(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const isNumeric = /^\+?\d+$/.test(inputValue);
    const isPhoneValid = (inputValue.startsWith('+375') && inputValue.length === 13) || (inputValue.startsWith('+7') && inputValue.length === 12);

    if (isNumeric && isPhoneValid) {
      setError(false);
      changeData('phone', inputValue);
    } else {
      setError(true);
    }
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    setLoading(true)
    e.preventDefault();
    if (!error && e.currentTarget.tel.value) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(answers),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(response => {
        if (response.ok) {
          setLoading(false);
          setThanks(true);
          const form: any = document.getElementById('mainSaleForm');
          form.reset();
        } else {
          setLoading(false);
          setError(true);
        }
      });
      setThanks(true);
      const form: any = document.getElementById('mainSaleForm');
      form.reset();
    } else {
      setError(true);
    }
  }


  return (
    <>
      {thanks ? <Thanks onClose={() => {setThanks(false); openModal(false); changePage(5)}} text={'Ваша заявка принята'} sectionId={section}/> : null}
      <form id="mainSaleForm" onSubmit={(e) => submitHandler(e)} action="" className={css.MainSale_Form}>
        <input
          className={css.form__input + ' ' + (error ? css.form__error : ' ')}
          onInput={(e: ChangeEvent<HTMLInputElement>) => inputHandler(e)}
          type="tel"
          placeholder="Введите номер телефона"
          name='tel'
        />
        <input className={'form__submit'} type="submit" value={loading ? "Загрузка..." : "Получить скидку"} />
      </form>
    </>
  );
};