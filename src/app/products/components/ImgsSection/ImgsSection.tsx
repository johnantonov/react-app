import { FunctionComponent } from 'react'
import css from './ImgsSection.module.css'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Imgs {
  main: StaticImport;
  first: StaticImport;
  second: StaticImport;
  third: StaticImport;
};

export const ImgsSection: FunctionComponent<Imgs> = ({
  main, first, second, third
}) => {
  return (
    <>
      <div className={css.imgs}>
        <div className={css.img}>
          <Image src={main} alt="" layout='responsive'/>
          <div className={css.littleImgs}>
            <Image src={first} alt='' layout='responsive' />
            <Image src={second} alt='' layout='responsive'/>
            <Image src={third} alt='' layout='responsive'/>
          </div>
        </div>
      </div>
    </>
  )
}