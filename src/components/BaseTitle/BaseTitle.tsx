import { ReactNode } from 'react';
import css from './BaseTitle.module.css'

export const BaseTitle = ({children}: {children: ReactNode}) => {
  return (
    <h2 className={css.section__title}>{children}</h2>
  )
};