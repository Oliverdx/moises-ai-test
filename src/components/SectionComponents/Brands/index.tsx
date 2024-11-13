"use client"

import Slider from 'react-infinite-logo-slider'

import { sectionBrands } from "@/types/sections";

import styles from "./style.module.scss";

export default function Brands(sectionData: sectionBrands) {

  const { brands } = sectionData;

  return <section className={styles.brandsWrapper}>
    <Slider
      width="128px"
      duration={70}
      pauseOnHover={false}
      blurBorders={false} // Isn't working properly, making the blur with vanilla CSS
    >
      {brands.map(brand => <img key={brand.id} alt={brand.title} src={brand.url} />)}
    </Slider>
  </section>
}
