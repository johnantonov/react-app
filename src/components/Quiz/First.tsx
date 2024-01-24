'use client'
import { FunctionComponent, useContext, useState } from 'react'
import Image from 'next/image'
import { QuizContext } from '@/contexts/QuizContext'
import createActiveClass from '@/helpers/CreateActiveClass'
import css from './Quiz.module.css'
import img1 from '../../../public/quiz/1_1.jpg'
import img2 from '../../../public/quiz/1_2.jpg'
import img3 from '../../../public/quiz/1_3.jpg'
import img4 from '../../../public/quiz/1_4.png'
import { useQuizLogic } from '@/helpers/QuizHook'


export const First: FunctionComponent = () => {

  const { answer, inputHandler } = useQuizLogic(1)
  const questionState = useContext(QuizContext).first


 return (
  <div className={'container'}>
    <div className={css.quiz__container}>
      <h2 className={css.quiz__title}>Какой тип шкафа вам нужен?</h2>
      <div className={css.quiz__first}>
        <label className={css.first__label + createActiveClass("Корпусный шкаф", questionState, css)} htmlFor="q1_1">
          <div className={css.a1}>
            <input onClick={() => inputHandler("Корпусный шкаф")} className={css.first__question} type="radio" name="q1" id="q1_1" value="Корпусный шкаф"/>
            <Image className={css.first__img} src={img1} alt='' layout='responsive'/>
            <h5>Корпусный шкаф</h5>
          </div>
        </label>
        <label className={css.first__label + createActiveClass("Встроенный шкаф", questionState, css)} htmlFor="q1_2">
          <div className={css.a2}>
            <input onClick={() => inputHandler("Встроенный шкаф")} className={css.first__question} type="radio" name="q1" id="q1_2" value="Встроенный шкаф"/>
            <Image className={css.first__img} src={img2} alt='' layout='responsive'/>
            <h5>Встроенный шкаф</h5>
          </div>
        </label>
        <label className={css.first__label + createActiveClass("Угловой шкаф", questionState, css)} htmlFor="q1_3">
          <div className={css.a3}>
            <input onClick={() => inputHandler("Угловой шкаф")} className={css.first__question} type="radio" name="q1" id="q1_3" value="Угловой шкаф"/>
            <Image className={css.first__img} src={img3} alt='' layout='responsive'/>
            <h5>Угловой шкаф</h5>
          </div>
        </label>
        <label className={css.first__label + createActiveClass("Нужен совет мастера", questionState, css)} htmlFor="q1_4">
          <div className={css.a4}>
            <input onClick={() => inputHandler("Нужен совет мастера")} className={css.first__question} type="radio" name="q1" id="q1_4" value="Нужен совет мастера"/>
            <Image className={css.first__img} src={img4} alt='' layout='responsive'/>
            <h5>Нужен совет мастера</h5>
          </div>
        </label>
      </div>

      

    </div>
  </div>
 )
}