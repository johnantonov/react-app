'use client'
import { MainButton } from "@/components/Buttons/MainButton/MainButton";
import css from './Hero.module.css'
import { FunctionComponent, useContext } from "react";
import { BaseTitle } from "@/components/BaseTitle/BaseTitle";
import img from '../../../public/hero/hero2.jpg'
import Image from "next/image";
import { QuizContext } from "@/contexts/QuizContext";
import { ModalContainer } from "@/components/Quiz/ModalContainer";

export const HeroSecond: FunctionComponent = () => {
  let { opened, openModal } = useContext(QuizContext) 

  return (
  <section id="hero2" className={'container ' + css.hero__container_2}>
    <Image src={img} alt="" className={css.hero__img_2 + ' ' + css.hero__img_992} layout="responsive"/>
    <div className={css.hero + ' ' + css.hero_2}>
      <BaseTitle>Узнайте стоимость мебели</BaseTitle>
      <div className={css.hero__info + ' ' + css.hero__info_2}>
      <Image src={img} alt="" className={css.hero__img_2} layout="responsive"/>
        <p className={css.hero__subtitle + ' ' + css.hero__subtitle_2}>Ответь на вопросы, получи скидку и бесплатный дизайн проект</p>
      </div>
      <MainButton handler={() => openModal(true)} width={263} text="Пройти тест" color="var(--MainButtonColor)"/>
    </div>
    {opened && <ModalContainer />}
  </section>
  )
};