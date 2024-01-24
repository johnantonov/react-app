import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import css from './Production.module.css'
import { FunctionComponent } from 'react';

export const Production: FunctionComponent = () => {

  return (
    <section className='container'>
      <div className={css.production}>
        <BaseTitle>Производство</BaseTitle>
        <div className={css.production__main}>
          <ul className={css.production__list}>
            <li className={css.production__item}>
              <p className={css.production__num}><span>1</span></p>
              <p className={css.production__text}>Минимальный опыт работы наших монтажников — 10 лет</p>
            </li>
            <li className={css.production__item}>
              <p className={css.production__num}><span>2</span></p>
              <p className={css.production__text}>Любые размеры, цвет, дизайн и фурнитура</p>
            </li>
            <li className={css.production__item}>
              <p className={css.production__num}><span>3</span></p>
              <p className={css.production__text}>Установка в удобные для Вас день и время</p>
            </li>
            <li className={css.production__item}>
              <p className={css.production__num}><span>4</span></p>
              <p className={css.production__text}>Сроки изготовления 5-15 дней</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};