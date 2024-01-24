'use client'
import { FunctionComponent } from 'react';
import css from './MainButton.module.css'

interface ButtonInfo {
  text: string;
  color?: string;
  width: number;
  handler: Function;
};

export const MainButton: FunctionComponent<ButtonInfo> = (
  { text, color, width, handler }
) => {
  return (
    <button onClick={() => handler()} className={css.MainBtn} style={{ backgroundColor: color, width: width }}>
      { text }
    </button>
  )
};