'use client'
import { FunctionComponent } from 'react'
import css from './Contacts.module.css'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import { NavSocials } from '@/components/NavItems/NavSocials/NavSocials';
import { ConsultForm } from '@/components/ConsultForm/ConsultForm';

export const Contacts: FunctionComponent = () => {
  return (
    <section id="contacts" className='container'>
      <div id="portal-root-contacts"></div>
      <div className={css.contacts}>
        <BaseTitle>Контакты</BaseTitle>
        <div className={css.contacts__main}>
          <div className={css.contacts__bg}>
            <ConsultForm />
          </div>
          <div className={css.contacts__info}>
            <ul className={css.contacts__list}>
              <li>
                <h5 className={css.contacts__point}>Адрес офиса:</h5>
                <p className={css.contacts__text}>г.Минск ул П Бровки 45 </p>
              </li>
              <li>
                <h5 className={css.contacts__point}>Номер телефона:</h5>
                <a className={css.contacts__text} href="tel:375259199290">+375-25-919-92-90 </a>
              </li>
              <li>
                <h5 className={css.contacts__point}>Email:</h5>
                <a className={css.contacts__text} href="mailto:info@gmail.com">info@gmail.com</a>
              </li>
              <li>
                <h5 className={css.contacts__point}>Режим работы:</h5>
                <p className={css.contacts__text}>пн-вс 9:00-21:00</p>
              </li>
            </ul>
            <NavSocials color='#AF9678'/>
          </div>
        </div>
      </div>
    </section>
  )
};
