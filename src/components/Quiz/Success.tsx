import { MainSale_Form } from '../MainSale/MainSale_Form';
import css from './Quiz.module.css'

export const Success = () => {
  return <div className={css.quiz__success}>
    <p className={css.success__title}>Ваша <span>скидка</span> составляет: 30р</p>
    <p>Введите ваш номер телефона, чтобы мы могли прислать вам скидку и 3D дизайн-проект бесплатно. Если данных будет не достаточно, специалист свяжется с вами для уточнения.</p>
    <MainSale_Form section='modalContainer'/>
  </div>
};