'use client'
import { useState, useEffect } from 'react';
import { MainSale_Form } from "./MainSale_Form";
import css from "./MainSale.module.css";

export const MainSale = () => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получаем время окончания таймера из localStorage
        const endDateString = localStorage.getItem('endDate');

        if (endDateString) {
          const endDate: any = new Date(endDateString);

          // Запускаем таймер
          const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance: any = endDate - now;

            if (distance >= 0) {
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              setTimer({ days, hours, minutes, seconds });
            } else {
              // Таймер достиг нуля, останавливаем его и выполняем дополнительные действия
              clearInterval(intervalId);
              setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
          }, 1000);
        } else {
          // Если время окончания таймера не сохранено, устанавливаем начальное время (31 минута)
          const endDate = new Date();
          endDate.setMinutes(endDate.getMinutes() + 31);

          // Сохраняем время окончания таймера в localStorage
          localStorage.setItem('endDate', endDate.toISOString());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании компонента

  return (
    <div>
      <p className={css.MainSale__title}>По заявке с сайта скидка 10% каждому покупателю</p>
      <p className={css.MainSale__subtitle}>До конца скидки осталось:</p>
      <div className={css.MainSale__timer}>
        <div>
          <span className={css.MainSale__number}>{timer.days}</span>
          <span className={css.MainSale__text}>Дни</span>
        </div>
        <div>
          <span className={css.MainSale__number}>{timer.hours}</span>
          <span className={css.MainSale__text}>Часы</span>
        </div>
        <div>
          <span className={css.MainSale__number}>{timer.minutes}</span>
          <span className={css.MainSale__text}>Мин</span>
        </div>
        <div>
          <span className={css.MainSale__number}>{timer.seconds}</span>
          <span className={css.MainSale__text}>Сек</span>
        </div>
      </div>
      <MainSale_Form section='header'/>
    </div>
  );
};