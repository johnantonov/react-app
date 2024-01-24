'use client'
import { FunctionComponent } from 'react';
import css from './Comments.module.css'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { reviews } from '@/data/reviews';
import 'swiper/css/navigation';
import "swiper/css";
import 'swiper/css/pagination';

interface SwiperStyles {
  '--swiper-navigation-color': string;
  '--swiper-navigation-sides-offset': string;
  '--swiper-navigation-size': string;
  '--swiper-navigation-top-offset': string;
  '--swiper-pagination-color': string;
  '--swiper-pagination-bullet-inactive-opacity': string;
}

export const Comments: FunctionComponent = () => {

  const swiperStyles: SwiperStyles = {
    '--swiper-navigation-color': '#000',
    '--swiper-navigation-sides-offset': '20px',
    '--swiper-navigation-size': '20px',
    '--swiper-navigation-top-offset': '45%',
    '--swiper-pagination-color': '#AF9678',
    '--swiper-pagination-bullet-inactive-opacity': '0.2',
  };

 return (
  <section id='comments' className={'container'}>
    <div className={css.comments}>
      <BaseTitle>Отзывы</BaseTitle>

      <Swiper
        style={swiperStyles as React.CSSProperties}
        className={css.comments__slider}
        navigation={{
          nextEl: '.comments__next',
          prevEl: '.comments__prev'
        }}
        pagination={true}  
        slidesPerView={1}
        modules={[Navigation, Pagination]}
      >
        {reviews.map(el => (
          <SwiperSlide key={el.key} className={css.comments__slide}>
            <p className={css.comments__nickname}>{ el.nickname }</p>
            <p className={css.comments__text}>{ el.text }</p>
          </SwiperSlide> 
        ))}
      </Swiper>
      <button className={'comments__prev ' + css.comments__btn_1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
          <path d="M17.1414 0L0 18L17.1414 36L20 33.0004L5.71313 18L20 2.99965L17.1414 0Z" fill="#937A60"/>
        </svg>
      </button>
      <button className={'comments__next ' + css.comments__btn_2}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
          <path d="M2.85859 36L20 18L2.85859 -1.49855e-06L2.88498e-06 2.99964L14.2869 18L2.62237e-07 33.0004L2.85859 36Z" fill="#937A60"/>
        </svg>
      </button>
    </div>
  </section>
 )
};
