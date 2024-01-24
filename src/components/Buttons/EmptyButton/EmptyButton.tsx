'use client'
import { FunctionComponent } from 'react';
import css from './EmptyButton.module.css'

interface ButtonInfo {
  text: string;
  color?: string;
  width: number;
  handler: Function;
};

export const EmptyButton: FunctionComponent<ButtonInfo> = (
  { text, color, width, handler }
) => {
  return (
    <button onClick={() => handler()} className={css.EmptyButton} style={{ backgroundColor: color, width: width }}>
      { text }
    </button>
  )
};