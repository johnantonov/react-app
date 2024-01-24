'use client'
import { FunctionComponent, useContext, useState } from 'react'
import css from './Quiz.module.css'
import { QuizFooter } from './QuizFooter'
import img1 from '../../../public/quiz/3_1.jpg'
import Image from 'next/image'
import createActiveClass from '@/helpers/CreateActiveClass'
import { QuizContext } from '@/contexts/QuizContext'
import { useQuizLogic } from '@/helpers/QuizHook'

export const Third: FunctionComponent = () => {

  const { answer, inputHandler } = useQuizLogic(3)
  const questionState = useContext(QuizContext).third

 return (
  <div className='container'>
  <h2 className={css.quiz__title}>Сколько отделений хотите в шкафу?</h2>
    <div className={css.quiz__flex}>
      <Image src={img1} alt='' />
      <div className={css.quiz__second}>
        <label htmlFor="q3_1" className={css.second__label + createActiveClass('1 отделение', questionState, css)}>
          <div className={css.a1}>
            <input onClick={() => {inputHandler('1 отделение')}} className={css.first__question} type="radio" name="q2" id="q3_1" value="1 отделение"/>
            <h5>1 отделение</h5>
          </div>
        </label>
        <label htmlFor="q3_2" className={css.second__label + createActiveClass('2 отделения', questionState, css)}>
          <div className={css.a2}>
            <input onClick={() => {inputHandler('2 отделения')}} className={css.first__question} type="radio" name="q2" id="q3_2" value="2 отделения"/>
            <h5>2 отделения</h5>
          </div>
        </label>
        <label htmlFor="q3_3" className={css.second__label + createActiveClass('3 отделения', questionState, css)}>
          <div className={css.a3}>
            <input onClick={() => {inputHandler('3 отделения')}} className={css.first__question} type="radio" name="q2" id="q3_3" value="3 отделения"/>
            <h5>3 отделения </h5>
          </div>
        </label>
        <label htmlFor="q3_4" className={css.second__label + createActiveClass('4 отделения', questionState, css)}>
          <div className={css.a3}>
            <input onClick={() => {inputHandler('4 отделения')}} className={css.first__question} type="radio" name="q2" id="q3_4" value="4 отделения"/>
            <h5>4 отделения</h5>
          </div>
        </label>
        <label htmlFor="q3_5" className={css.second__label + createActiveClass('Пока не знаю, нужна консультация', questionState, css)}>
          <div className={css.a3}>
            <input onClick={() => {inputHandler('Пока не знаю, нужна консультация')}} className={css.first__question} type="radio" name="q2" id="q3_5" value="Пока не знаю, нужна консультация"/>
            <h5>Пока не знаю, нужна консультация</h5>
          </div>
        </label>
      </div>
    </div>

  </div>
 )
}