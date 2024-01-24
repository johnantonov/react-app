import { ReactNode, ReactSVG } from 'react';
import css from './AboutCard.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface CardInfo {
  children: ReactNode;
  img: StaticImport;
};

export const AboutCard = (Props: CardInfo) => {
  return (
    <div className={css.AboutCard}>
      <Image src={Props.img} alt='' className={css.AboutCard__img}/>
      <p className={css.AboutCard__text}> {Props.children} </p>
    </div>
  )
};