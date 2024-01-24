'use client'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import css from './Materials.module.css'
import { ToggleMaterials } from '@/components/ToggleMaterials/ToggleMaterials';
import { CSSProperties, FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { MaterialsContext, MaterialsContextProvider } from '@/contexts/MaterialContext';
import Image, { StaticImageData } from 'next/image';
import { data, data2 } from '../../data/materials'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";

interface Slide {
  img: StaticImageData;
  title: string;
  key: number;
}

export const Materials: FunctionComponent = () => {
  const { activeButton } = useContext(MaterialsContext);
  const [materials, setMaterials] = useState<Slide[]>([]);

  useEffect(() => {
    // При изменении toggleState меняем данные в зависимости от активной кнопки
    setMaterials(activeButton === 'Материалы' ? data : data2);
  }, [activeButton]);

  function renderSlider(materials: Slide[]) {
    return materials.map(el => (
        <SwiperSlide key={el.key} className={css.materials__slide}>
          <Image 
            className={css.materials__img}
            src={el.img}
            alt={el.title}
          />
          <div className={css.materials__img}></div>
          <p>{el.title}</p>
        </SwiperSlide> 
    ))
  }

  return (
    <section id='materials' className='container'>
        <div className={css.materials}>
          <BaseTitle>Современные материалы</BaseTitle>

          <div className={css.materials__toggle}>
            <ToggleMaterials />
          </div>

          <Swiper 
            style={{
              '--swiper-navigation-color': '#000',
              '--swiper-navigation-sides-offset': '20px',
              '--swiper-navigation-size': '20px',
              '--swiper-navigation-top-offset': '45%',
            } as CSSProperties}
            className={css.materials__slider}
            navigation={true && {
              nextEl: '.materials__next',
              prevEl: '.materials__prev'
            }}  
            slidesPerView={1}
    
            modules={[Navigation]}
            breakpoints={{
              769: {
                slidesPerView: 2,
              },
              978: {
                slidesPerView: 3,
              },
            }}
          >
            {renderSlider(materials)}
          </Swiper>
            <button className={'materials__prev ' + css.materials__btn_1}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
                <path d="M17.1414 0L0 18L17.1414 36L20 33.0004L5.71313 18L20 2.99965L17.1414 0Z" fill="#4C3433"/>
              </svg>
            </button>
            <button className={'materials__next ' + css.materials__btn_2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" fill="none">
                <path d="M2.85859 36L20 18L2.85859 -1.49855e-06L2.88498e-06 2.99964L14.2869 18L2.62237e-07 33.0004L2.85859 36Z" fill="#4C3433"/>
              </svg>
            </button>
        </div>
      </section>
  )
};

