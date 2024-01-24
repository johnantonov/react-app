import { FunctionComponent } from 'react'
import css from './SpecialCard.module.css'
import Image, { StaticImageData } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PromotionBadge } from '../PromotionBadge/PromotionBadge';
import { formatPrice } from '../../helpers/formatPrice';
import Link from 'next/link';

interface CardInfo {
  title: string;
  mainPrice?: number | string;
  price: number | string;
  point: string;
  img: StaticImport;
  className?: string;
  cardKey: number;
}
export const SpecialCard: FunctionComponent<CardInfo> = ({
  title, mainPrice, price, point, img, className, cardKey
}) => {

  const productsFrom = 'specials';

  return (
    <Link href={`/products/${productsFrom}/${cardKey}#product`} >
      <div className={css.card + " " + className}>
        <div className={css.badgeWrapper}>
          <PromotionBadge color='#000' textColor='#fff'>{ point }</PromotionBadge>
        </div>
        <Image src={img} alt={title} className={css.img} layout='responsive'/>
        <div className={css.info}>
          <div className={css.mainPrice}>{ formatPrice(mainPrice)  }</div>
          <h5 className={css.title}>{ title }</h5>
          <p className={css.price}>{ formatPrice(price) }</p>
        </div>
      </div>
    </Link>
  )
};