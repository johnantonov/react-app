'use client'
import css from './page.module.css'
import { products } from '@/data/products'
import { categories } from '@/data/filters'
import { Product } from '../components/product/Product'
import { BreadNav } from '@/components/NavItems/BreadNav/BreadNav'
import { EmptyButton } from '@/components/Buttons/EmptyButton/EmptyButton'
import { useState } from 'react'

export default function Page({ params }: {
  params: { category: number } 
}) {


  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const handlePriceFilter = (filterType: string | null) => {
    setPriceFilter(filterType);
  };
  const filteredProducts = products.slice().sort((a: any, b: any) => {
    if (priceFilter === 'asc') {
      return a.price - b.price;
    } else if (priceFilter === 'desc') {
      return b.price - a.price;
    } else {
      return 0; 
    }
  });

  const links = [
    {link: '/#catalogue', text: 'Каталог'},
    {link: params.category.toString(), text: categories[params.category]},
  ];

  return (
    <main id='cataloguePage' className={"container"}>
      <BreadNav links={links}/>

      <section className=''>
        <div>
          <EmptyButton handler={() => handlePriceFilter('asc')} color={priceFilter === 'asc' ? 'var(--MainButtonColor)' : ''} text='По возрастанию' width={220}/>
          <EmptyButton handler={() => handlePriceFilter('desc')} color={priceFilter === 'desc' ? 'var(--MainButtonColor)' : ''} text='По убыванию' width={220}/>
          <EmptyButton handler={() => handlePriceFilter(null)} color={priceFilter === null ? 'var(--MainButtonColor)' : ''} text='Без фильтрации' width={220}/>
        </div>
        
        <ul className={css.catalogue__list}>
          {filteredProducts.map((el) => 
           <Product key={el.key} img={el.img} title={el.title} price={el.price} itemKey={el.key}/>
          )}
        </ul>
      </section>
    </main>
  )
}