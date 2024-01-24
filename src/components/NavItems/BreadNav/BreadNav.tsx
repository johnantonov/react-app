import { FunctionComponent } from 'react'
import css from './BreadNav.module.css'
import Link from 'next/link'

interface HREF {
    link: string;
    text: string;
};

export const BreadNav = ({links}: {links: HREF[]} ) => {

  return (
    <nav className={css.nav}>
      <Link href={'/'} className={css.link}>Главная / </Link>
      {links.map((el, index) => {
        return <Link key={index} className={css.link} href={`${el.link}`}>{el.text} / </Link>
      })}
    </nav>
  )
}