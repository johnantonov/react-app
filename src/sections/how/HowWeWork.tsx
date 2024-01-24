import { FunctionComponent } from 'react';
import css from './HowWeWork.module.css'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';

export const HowWeWork: FunctionComponent = () => {
 
  return  (
    <section className={'container'}>
      <div className={css.how}>
        <BaseTitle>Как мы работаем</BaseTitle>
      
        <ul className={css.how__list}>
          <li>
            <div className={css.how__item + ' ' + css.how__comming}>
              <p>Заказать выезд дизайнера</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="24" viewBox="0 0 53 24" fill="none"><path d="M52.0482 13.0607C52.634 12.4749 52.634 11.5251 52.0482 10.9393L42.5023 1.3934C41.9165 0.807611 40.9667 0.807611 40.3809 1.3934C39.7952 1.97919 39.7952 2.92893 40.3809 3.51472L48.8662 12L40.3809 20.4853C39.7952 21.0711 39.7952 22.0208 40.3809 22.6066C40.9667 23.1924 41.9165 23.1924 42.5023 22.6066L52.0482 13.0607ZM0.987549 13.5H50.9875V10.5H0.987549V13.5Z" fill="black"/></svg>
            </div>
          </li>
          <li><div className={css.how__item + ' ' + css.how__measure}>
            <p>Обмер</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="82" viewBox="0 0 24 82" fill="none"><path d="M10.9393 81.0607C11.5251 81.6464 12.4749 81.6464 13.0607 81.0607L22.6066 71.5147C23.1924 70.9289 23.1924 69.9792 22.6066 69.3934C22.0208 68.8076 21.0711 68.8076 20.4853 69.3934L12 77.8787L3.51472 69.3934C2.92893 68.8076 1.97919 68.8076 1.3934 69.3934C0.807611 69.9792 0.807611 70.9289 1.3934 71.5147L10.9393 81.0607ZM10.5 0L10.5 80H13.5L13.5 0L10.5 0Z" fill="black"/></svg>
          </div></li>
          <li><div className={css.how__item + ' ' + css.how__project}>
            <p>Построение проекта</p>
          </div></li>
          <li>
            <div className={css.how__item + ' ' + css.how__contract}>
              <p>Оформление договора</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24" fill="none"><path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM52 10.5L2 10.5V13.5L52 13.5V10.5Z" fill="black"/></svg>
            </div>
          </li>
          <li>
            <svg className={css.contract__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="82" viewBox="0 0 24 82" fill="none"><path d="M10.9393 81.0607C11.5251 81.6464 12.4749 81.6464 13.0607 81.0607L22.6066 71.5147C23.1924 70.9289 23.1924 69.9792 22.6066 69.3934C22.0208 68.8076 21.0711 68.8076 20.4853 69.3934L12 77.8787L3.51472 69.3934C2.92893 68.8076 1.97919 68.8076 1.3934 69.3934C0.807611 69.9792 0.807611 70.9289 1.3934 71.5147L10.9393 81.0607ZM10.5 0L10.5 80H13.5L13.5 0L10.5 0Z" fill="black"/></svg>
            <div className={css.how__item + ' ' + css.how__prod}>
              <p>Производство</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="24" viewBox="0 0 130 24" fill="none"><path d="M129.061 13.0607C129.646 12.4749 129.646 11.5251 129.061 10.9393L119.515 1.3934C118.929 0.807611 117.979 0.807611 117.393 1.3934C116.808 1.97919 116.808 2.92893 117.393 3.51472L125.879 12L117.393 20.4853C116.808 21.0711 116.808 22.0208 117.393 22.6066C117.979 23.1924 118.929 23.1924 119.515 22.6066L129.061 13.0607ZM0 13.5H128V10.5H0V13.5Z" fill="black"/></svg>
            </div>
          </li>
          <li>
            <div className={css.how__item + ' ' + css.how__build}>
              <p>Установка</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
};