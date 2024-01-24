import { FunctionComponent } from 'react'
import css from './BuyInfo.module.css'

interface Info { 
  material: string;  
  door: string;
  size: string;
};


export const BuyInfo: FunctionComponent<Info> = ({
  material, door, size
}) => {

  return (
    <div className={css.buy__info}>
      <p>Материал: {material}</p>
      <p>Вставка на дверях: {door}</p>
      <p>Размер: {size}</p>
  </div>
  )
};