'use client'
import { MainButton } from "@/components/Buttons/MainButton/MainButton";
import css from './Hero.module.css'
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { BaseTitle } from "@/components/BaseTitle/BaseTitle";
import { QuizContext } from "@/contexts/QuizContext";
import { ModalContainer } from "@/components/Quiz/ModalContainer";

export const Hero: FunctionComponent = () => {
  let { opened, openModal } = useContext(QuizContext) 

  return (
  <section className={'container'}>
    <div className={css.hero}>
      <div className={css.hero__img}>
        <div className={css.hero__decor}></div>
        <div className={css.hero__decor_2}></div>
      </div>
      <div className={css.hero__info}>
        <BaseTitle>Узнайте стоимость мебели</BaseTitle>
        <p className={css.hero__subtitle}>Ответь на вопросы, получи скидку и бесплатный дизайн проект</p>
        <MainButton handler={() => openModal(true)} width={263} text="Пройти тест" color="var(--MainButtonColor)"/>
      </div>
    </div>
    {opened && <ModalContainer />}
  </section>
  )
};