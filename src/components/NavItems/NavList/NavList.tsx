import Link from "next/link";
import css from './NavList.module.css'
import { FunctionComponent } from "react";

export const NavList: FunctionComponent = () => {
  return (
    <ul className={css.NavList}>
      <li><Link className={css.NavItem} href={'/#about'}>О нас</Link></li>
      <li><Link className={css.NavItem} href={'/#catalogue'}>Каталог</Link></li>
      <li><Link className={css.NavItem} href={'/#materials'}>Материалы</Link></li>
      <li><Link className={css.NavItem} href={'/#hero2'}>Рассчитать стоимость</Link></li>
      <li><Link className={css.NavItem} href={'/#comments'}>Отзывы</Link></li>
      <li><Link className={css.NavItem} href={'/#contacts'}>Контакты</Link></li>
    </ul>
  )
};
