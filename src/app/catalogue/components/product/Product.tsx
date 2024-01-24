'use client'
import { FunctionComponent } from 'react';
import css from './Product.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/helpers/formatPrice';

interface ProductInfo {
  img: StaticImport;
  title: string;
  price: number | string;
  itemKey: number;
}

export const Product: FunctionComponent<ProductInfo> = ({
  img, title, price, itemKey,
}) => {

  const productsFrom = 'all';

  return (
    <li id='products' className={css.card}>
      <Link className={css.link} href={`/products/${productsFrom}/${itemKey}#product`}>
        <Image layout='responsive' className={css.img} src={img} alt={title} />
        <div className={css.info}>
          <h5 className={css.title}>{title}</h5>
          <p className={css.price}>{formatPrice(price)}</p>
        </div>
      </Link>
    </li>
  )
};
