import { FunctionComponent } from 'react';
import css from './Subscribe.module.css'
import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import { SubscribeForm } from '@/components/SubscribeForm/SubscribeForm';

export const Subscribe: FunctionComponent = () => {
  return (
    <section id='subscribe' className={css.subscribe}>
      <div className={'container'}>
      <div id="portal-root-subscribe"></div>
        <BaseTitle>Акции</BaseTitle>
        <p className={css.subscribe__subtitle}>Узнай первым об акциях и скидках</p>
        <SubscribeForm />
        <div>
          <svg className={css.subscribe__decor} xmlns="http://www.w3.org/2000/svg" width="384" height="157" viewBox="0 0 384 157" fill="none">
            <g filter="url(#filter0_f_35_1692)">
              <path d="M66.1521 65.9721L318.5 72.4999L263.829 91.6777L65.3503 81.2869L66.1521 65.9721Z" fill="white" fillOpacity="0.35"/>
            </g>
            <defs>
              <filter id="filter0_f_35_1692" x="0.350342" y="0.972046" width="383.15" height="155.706" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="32.5" result="effect1_foregroundBlur_35_1692"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
};