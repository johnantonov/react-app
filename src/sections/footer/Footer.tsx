'use client'
import Link from 'next/link';
import css from './Footer.module.css';
import { NavList } from '@/components/NavItems/NavList/NavList';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FunctionComponent } from 'react';


const apiKey = '04e300a7-8ce3-4c3e-8f4f-3cc10bd20f37';

const  map = {
  center: [53.9078288014148, 27.60920982653025],
  zoom: 15,
  controls: ["zoomControl", "fullscreenControl"]
};


export const Footer: FunctionComponent = () => {
  return (
    <footer className={css.footer}>
      <div className={'container ' + css.footer__wrapper}>
        <Link href={'/'} className={css.footer__logo + ' ' + css.footer__logo_d}>MADESHKAF</Link>
        <div className={css.footer__geo}>
          <Link href={'/'} className={css.footer__logo + ' ' + css.footer__logo_m}>MADESHKAF</Link>
          <YMaps query={{ apikey: apiKey}}>
            <Map defaultState={map} modules={["control.ZoomControl", "control.FullscreenControl"]}>
              <Placemark geometry={[53.9078288014148, 27.60920982653025]} />
          </Map>
          </YMaps>
        </div>
        <div className={css.footer__list}>
          <NavList />
        </div>
      </div>
    </footer>
  )
};