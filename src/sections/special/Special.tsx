'use client'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import css from './Special.module.css';
import { specials } from '@/data/specials';
import { SpecialCard } from '@/components/SpecialCard/SpecialCard';
import { FunctionComponent, createRef, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import showCard from './showCard';
import { UpButton } from '@/components/Buttons/UpButton/UpButton';

export const Special: FunctionComponent = () => {
  const is768px = useMediaQuery({ maxWidth: 768 });
  const is1600px = useMediaQuery({ minWidth: 1600 })
  const [is768pxState, setIs768pxState] = useState(false);
  const [is1600pxState, setIs1600pxState] = useState(false);
  const [MoreClicked, setMoreClicked] = useState(false)

  useEffect(() => {
    setIs768pxState(is768px);
    setIs1600pxState(is1600px);
  }, [is768px, is1600px]);

  return (
    <section className='container' id='Special'>
      <div className={css.special}>
        <BaseTitle>Специальные предложения</BaseTitle>
        <ul className={css.special__list}>
          {specials.map(el => {
            return (
              <li key={el.key} 
                className={
                  is768pxState && el.key > 3 ? 'hideCardsMore' : '' +
                  is1600pxState && el.key > 7 ? 'hideCardsMore' : '' +
                  !is768pxState && !is1600pxState && el.key > 5 ? 'hideCardsMore' : '' 
                }>
                <SpecialCard
                  className={is768pxState ? css.hideCardsMore : ''}
                  title={el.title}
                  mainPrice={el.mainPrice}
                  price={el.price}
                  point={el.point}
                  img={el.img}
                  cardKey={el.key}
                />
              </li>
            );
          })}
        </ul>
        <button 
          className={'more'} 
          onClick={() => {
            setMoreClicked(true)
            let AllRemoved;
            if (is768pxState) {
              AllRemoved = showCard(2)
            } else if (is1600pxState) {
              AllRemoved = showCard(4)
            } else {
              AllRemoved = showCard(3)
            }
            const btn = document.querySelector('.more') 
            AllRemoved ? btn?.classList.add('disabled') : null
          }}
        >
          Смотреть ещё
        </button>
          {MoreClicked === true && <UpButton sectionID={'Special'} className={css.special__up}/>}
      </div>
    </section>
  );
};