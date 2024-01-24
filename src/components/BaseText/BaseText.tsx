import { ReactNode } from 'react';
import css from './BaseText.module.css'

export const BaseText = ({children}: {children: ReactNode}) => {
 return (
  <p className={css.basetext}>
    { children }
  </p>
 )
};