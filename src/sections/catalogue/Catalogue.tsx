import { BaseTitle } from '@/components/BaseTitle/BaseTitle';
import css from './Catalogue.module.css'
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { categories } from '@/data/filters'


export const Catalogue: FunctionComponent = () => {
 return (
  <section id='catalogue' className='container'>
    <div className={css.catalogue}>
      <div className={css.catalogue__header}>
        <BaseTitle>Каталог</BaseTitle>
      </div>
      <ul className={css.catalogue__list}>
        {categories.map((category, index) => (
          <li key={index} id={css[`catalogue${index + 1}`]}>
            <Link href={`/catalogue/${index}/`}>
              {category}
            </Link>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  </section>
 )
};