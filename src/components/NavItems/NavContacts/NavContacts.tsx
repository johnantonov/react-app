import Link from "next/link";
import css from './NavContacts.module.css'
import { FunctionComponent } from "react";

interface Contacts {
  tel: number;
  sch: string;
  fz: number;
};

export const NavContacts: FunctionComponent<Contacts> = (
  props: Contacts
  ) => {
  return (
    <div className={css.navContacts} style={{fontSize: props.fz}}>
      <Link className={css.navContacts__tel} href={'tel:+'+ props.tel}>+{props.tel}</Link>
      <p className={css.navContacts__schedule}>{ props.sch }</p>
    </div>
  )
};