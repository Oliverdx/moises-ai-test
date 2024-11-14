"use client"

import Slider from 'react-infinite-logo-slider'

import { sectionBrands } from "@/types/sections";

import styles from "./style.module.scss";
import Image from 'next/image';

export default function Brands(sectionData: sectionBrands) {

  const { brands } = sectionData;

  return <section className={styles.brandsWrapper}>
    <Slider
      width="128px"
      duration={70}
      pauseOnHover={false}
      blurBorders={false} // Isn't working properly, making the blur with vanilla CSS
    >
      {brands.map(brand => <Slider.Slide key={brand.id}>
        <Image alt={brand.title} src={brand.url} width={128} height={40} />
      </Slider.Slide>)}
    </Slider>
  </section>
}
