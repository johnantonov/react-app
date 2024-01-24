import { FunctionComponent, useContext, useState } from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import css from './Quiz.module.css'
import { QuizContext } from "@/contexts/QuizContext";


export const QuizFooter: FunctionComponent = () => {
  let { changePage, page, openModal } = useContext(QuizContext);

  function nextPage() {
    changePage(page + 1);
  }

  function prevPage() {
    changePage(page - 1);
  }

  return (
    <div className={css.quiz__footer  + ' container'}>
      <p className={css.footer__text}>
        Ваша скидка: {(page - 1) * 15}
      </p>
      <div className={css.footer__close}>
        <MainButton handler={() => openModal(false)} text="Закрыть" width={169} color="inherit"/>
      </div>
      <div className={css.footer__back}>
        { page !== 1 ? 
          <MainButton handler={() => prevPage()} text="Назад" width={169} color="var(--MainButtonColor)"/> 
        : null}
      </div>
      <div className={css.footer__next}>
        <MainButton handler={() => nextPage()} text="Далее" width={169} color="var(--MainButtonColor)"/>
      </div>
    </div>
  )
};