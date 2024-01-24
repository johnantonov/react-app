import { MainSale } from "@/components/MainSale/MainSale"
import { NavContacts } from "@/components/NavItems/NavContacts/NavContacts"
import { NavSocials } from "@/components/NavItems/NavSocials/NavSocials"
import css from "./Header.module.css"
import { NavDropdown } from "@/components/NavItems/Dropdown/NavDropdown"
import Link from "next/link"
import { NavList } from "@/components/NavItems/NavList/NavList"
import { FunctionComponent } from "react"

export const Header: FunctionComponent = () => {
  return (
    <header id="header" className={css.header}>
      <div id="portal-root-header"></div>
      <nav className={ ' container_h'}>
        <ul className={css.header__nav}>
          <li className={css.nav__dropdown}>
            <NavDropdown />
          </li>
          <li>
            <Link href={'/'} className={css.header__logo}>MADESHKAF</Link>
          </li>
          <li>
            <div className={css.header__navlist}><NavList /></div>
          </li>
          <li>
            <div className={css.header__navcontacts}><NavContacts fz={24} tel={375259199290} sch="Пн-Вс 9:00-21:00"/></div>
          </li>
          <li className={css.navsocials_1440}>
            <NavSocials />
          </li>
        </ul>
      </nav>
        <div className={css.header__sale + ' container'}>
          <h1 className={css.header__h1}>Шкафы на заказ</h1>
          <MainSale />
        </div>
      <nav className={css.header__socials + ' container'}>
        <NavSocials />
        <NavContacts fz={16} tel={375259199290} sch="Пн-Вс 9:00-21:00"/>
      </nav>
    </header>
  )
}