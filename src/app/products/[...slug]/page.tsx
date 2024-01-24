'use client'
import css from './page.module.css'
import { MainButton } from "@/components/Buttons/MainButton/MainButton"
import { specials } from "@/data/specials"
import { products } from '@/data/products'
import { formatPrice } from "@/helpers/formatPrice"
import Image from "next/image"
import Link from "next/link"
import img1 from '../../../../public/products/1.jpg'
import img2 from '../../../../public/products/2.jpg'
import img3 from '../../../../public/products/3.jpg'
import { categories } from '@/data/filters'
import { BreadNav } from '@/components/NavItems/BreadNav/BreadNav'
import { BtnsSections } from '../components/BtnsSection/BtnsSection'
import { BuyInfo } from '../components/Info/BuyInfo'
import { ImgsSection } from '../components/ImgsSection/ImgsSection'

export default function Page({ params }: {
  params: { slug: [string, number] } 
}){
  
  const category = specials[params.slug[1]].type

  const allItems = {
    products: products,
    specials: specials,
  }

  let renderItems;

  switch (params.slug[0]) {
    case "specials":
      renderItems = allItems.specials;
      break;
    case "all":
      renderItems = allItems.products;
      break;
    default:
      throw new Error("Неизвестный параметр slug")
  };

  const links = [
    {link: '/#catalogue', text: 'Каталог'},
    {link: '/catalogue/' + category.toString(), text: categories[category]},
    {link: params.slug[1].toString(), text: renderItems[params.slug[1]].title},
  ];


  return (
    <section id='product' className={"container"}>
      <div className={css.product}>
        
        <BreadNav links={links}/>
        
        <div className={css.main}>
          <div className={css.main__info}>
            <h2 className={css.title}>{renderItems[params.slug[1]].title}</h2>
            <p className={css.text_1 + ' ' + css.text}>{renderItems[params.slug[1]].text}</p>
            <div className={css.buy + ' ' + css.buy_tablet}>
              <BuyInfo material={renderItems[params.slug[1]].material} door={renderItems[params.slug[1]].door} size={renderItems[params.slug[1]].size}/>
              <BtnsSections price={renderItems[params.slug[1]].price}/>
            </div>
          </div>
          <ImgsSection main={renderItems[params.slug[1]].img} first={img1} second={img2} third={img3} />
          <p className={css.text_2 + ' ' + css.text}>{renderItems[params.slug[1]].text}</p>
        </div>
        <div className={css.buy + ' ' + css.buy_phone}>
          <BuyInfo material={renderItems[params.slug[1]].material} door={renderItems[params.slug[1]].door} size={renderItems[params.slug[1]].size}/>
          <BtnsSections price={renderItems[params.slug[1]].price}/>
          </div>
      </div>
    </section>
  )
}