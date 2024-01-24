'use client'
import { FunctionComponent, useContext, useState } from 'react'
import css from './Quiz.module.css'
import img1 from '../../../public/quiz/2_2.jpg'
import Image from 'next/image'
import { QuizContext } from '@/contexts/QuizContext'
import createActiveClass from '@/helpers/CreateActiveClass'
import { useQuizLogic } from '@/helpers/QuizHook'



export const Second: FunctionComponent = () => {
  
  const { answer, inputHandler } = useQuizLogic(2)
  const questionState = useContext(QuizContext).second

  return (
    <div className={'container'}>
      <h2 className={css.quiz__title}>Знаете ли вы размеры желаемого шкафа-купе?</h2>
      <div className={css.quiz__flex}>
        <Image src={img1} alt='' />
        <div className={css.quiz__second}>
          <label htmlFor="q2_1" className={css.second__label + createActiveClass('Знаю, могу сообщить', questionState, css)}>
            <div className={css.a1}>
              <input onClick={() => {inputHandler('Знаю, могу сообщить')}} className={css.first__question} type="radio" name="q2" id="q2_1" value="Знаю, могу сообщить"/>
              <h5>Знаю, могу сообщить</h5>
            </div>
          </label>
          <label htmlFor="q2_2" className={css.second__label + createActiveClass('Знаю, могу прислать эскизы с размерами', questionState, css)}>
            <div className={css.a2}>
              <input onClick={() => {inputHandler('Знаю, могу прислать эскизы с размерами')}} className={css.first__question} type="radio" name="q2" id="q2_2" value="Знаю, могу прислать эскизы с размерами"/>
              <h5>Знаю, могу прислать эскизы с размерами</h5>
            </div>
          </label>
          <label htmlFor="q2_3" className={css.second__label + createActiveClass('Не знаю, нужно сделать замеры', questionState, css)}>
            <div className={css.a3}>
              <input onClick={() => {inputHandler('Не знаю, нужно сделать замеры')}} className={css.first__question} type="radio" name="q2" id="q2_3" value="Не знаю, нужно сделать замеры"/>
              <h5>Не знаю, нужно сделать замеры</h5>
            </div>
          </label>
        </div>
      </div>


    </div>
 )
}