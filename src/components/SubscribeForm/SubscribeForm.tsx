'use client'
import { ChangeEvent, FormEvent, FormEventHandler, FunctionComponent, useState } from 'react';
import css from './SubscribeForm.module.css'
import Thanks from '../Thanks/Thanks';

export const SubscribeForm: FunctionComponent = () => {
  const phoneNumberOrEmailRegExp = /^(\+7\d{10}|\+375\d{9}$|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(true)
  const [openThanks, setOpenThanks] = useState(false)


  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setValue(inputValue)

    const isValid = phoneNumberOrEmailRegExp.test(inputValue)
    setValid(isValid);
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (valid && e.currentTarget.info.value) {
      setOpenThanks(true)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({value}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const form: any = document.getElementById('subscribeForm')
      form.reset()
    } else {
      setValid(false)
    }
  }

  function closeThanks() {
    setOpenThanks(false);
  }

 return (
  <>
    {openThanks && <Thanks onClose={closeThanks} text='Ваша подписка принята' sectionId='subscribe'/>}
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => submitHandler(e)} action="" className={css.form} id='subscribeForm'>
      <input onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler(e)} className={css.form__input + ' ' + (!valid ? css.error : ' ')} type="text" name='info' placeholder='номер телефона или email'/>
      <input className={css.form__sbmt} type="submit" value="Подписаться" />
    </form>
  </>
 );
};