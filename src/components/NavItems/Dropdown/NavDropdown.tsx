'use client'
import css from './NavDropdown.module.css'
import { NavList } from '../NavList/NavList';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export const NavDropdown: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };
    if (isOpened) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpened]);

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpened(!isOpened)} className={css.dropbtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4.5 12V10.5H30V12H4.5ZM30 18V19.5H4.5V18H30ZM4.5 25.5H30V27H4.5V25.5Z" fill="white"/>
        </svg>
      </button>

      {isOpened && <div className={css.list}>
        <NavList />
      </div>}
    </div>
  )
};