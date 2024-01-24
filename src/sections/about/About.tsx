import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import css from './About.module.css'
import { BaseText } from '@/components/BaseText/BaseText';
import { AboutCard } from '@/components/AboutCard/AboutCard';
import card1 from '../../../public/about/1.svg'
import card2 from '../../../public/about/2.svg'
import card3 from '../../../public/about/3.svg'
import card4 from '../../../public/about/4.svg'
import card5 from '../../../public/about/5.svg'
import card6 from '../../../public/about/6.svg'
import { FunctionComponent } from 'react';

export const About: FunctionComponent = () => {
  return (
    <section id='about' className='container'>
      <div className={css.about}>
        <BaseTitle>О нас</BaseTitle>
        <BaseText>
          Мы рады видеть вас на нашем сайте, здесь представлены примеры наших работ и мебель, которую мы можем изготовить, в том числе по вашим индивидуальным запросам.
          Мы поможем сделать вашу квартиру, дом или офис более комфортным, функциональным и привлекательным. В производстве мебели мы используем лучшие материалы и современное оборудование, чтобы создавать по-настоящему красивую, удобную и качественную мебель.
        </BaseText>
        <div className={css.about__why}>
          <BaseTitle>Почему более 14 лет клиенты выбирают нас:</BaseTitle>
          <ul className={css.about__list}>
            <li className={css.about__item}><AboutCard img={card1}>Рассрочки</AboutCard></li>
            <li className={css.about__item}><AboutCard img={card2}>Заводские цены</AboutCard></li>
            <li className={css.aboutItem__explain}>Возможность рассрочки от нашей компании с 0% переплат!</li>
            <li className={css.about__item + ' ' + css.about__item_3}><AboutCard img={card3}>Оперативные сроки</AboutCard></li>
            <li className={css.about__item}><AboutCard img={card4}>Акции, скидки, бонусы</AboutCard></li>
            <li className={css.about__item}><AboutCard img={card5}>Европейское качество</AboutCard></li>
            <li className={css.about__item}><AboutCard img={card6}>Бесплатная 3d визуализация</AboutCard></li>
          </ul>
          <p className={css.aboutItem__explain}>Возможность рассрочки от нашей компании с 0% переплат!</p>
          
        </div>
      </div>

    </section>
  )
};