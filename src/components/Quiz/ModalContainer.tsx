'use client'
import { FunctionComponent, useContext } from "react";
import css from './Quiz.module.css'
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { QuizContext } from "@/contexts/QuizContext";
import { QuizFooter } from "./QuizFooter";
import { Success } from "./Success";

export const ModalContainer: FunctionComponent = () => {
  let { changePage, page, completed } = useContext(QuizContext)

  return (
    <dialog id="modalContainer" className={css.modalBg} style={{display: 'block'}}>
      <div id="portal-root-modalContainer"></div>
      {completed ? <Success /> : null}
      <div className={css.modal + ' ' + (completed ? css.success__outside : null)}
        onClick={completed ? () => changePage(5) : () => {}}  
      >
        { page === 1 ? <First /> 
          : page === 2 ? <Second /> : <Third />    
        }
        <QuizFooter />
      </div>
    </dialog>
  )
}