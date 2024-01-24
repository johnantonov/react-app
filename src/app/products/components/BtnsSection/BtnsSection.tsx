import { FunctionComponent } from 'react';
import css from './BtnsSection.module.css'
import { formatPrice } from '@/helpers/formatPrice';
import { MainButton } from '@/components/Buttons/MainButton/MainButton';
import { useMediaQuery } from 'react-responsive';

interface BtnsSectionsProps {
  price: number | string;
}

export const BtnsSections: FunctionComponent<BtnsSectionsProps> = ({ price }) => {

  const is500px = useMediaQuery({maxWidth: 500});

  return (
    <>
      <div className={css.btns}>
        <p className={css.price}>Цена: {formatPrice(price)}</p>
        <MainButton handler={() => {}} text="Заказать" width={206} color="var(--MainButtonColor)"/>
      </div>
      <div className={css.count}>
        <p>Рассчитайте стоимость по своим размерам </p>
        <MainButton handler={() => {}} text="Рассчитать стоимость " width={is500px ? 260 : 330} color="var(--MainButtonColor)"/>
      </div>
    </>
  )
};
