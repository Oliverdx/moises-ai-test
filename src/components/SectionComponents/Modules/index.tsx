"use client"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import SectionDescription from "@/components/SectionDescription";
import Module from "@/components/Module";

import { SlideArrowRight } from '@/icons/SlideArrowRight';
import { SlideArrowLeft } from '@/icons/SlideArrowLeft';

import { sectionCardContent } from "@/types/sections";

// Import Swiper styles
import 'swiper/css';

import styles from "./style.module.scss";


export default function Modules(sectionData: sectionCardContent) {

  return <section className={styles.modulesSection}>
    <Swiper
      className={styles.modulesCards}
      spaceBetween={25}
      modules={[Navigation]}// This is the line I needed to add
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      allowSlideNext
      breakpoints={{
        1240: {
          slidesPerView: 3,
        },
        1019: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 5
        }
      }}
    >
      <div className={styles.modulesWrapper}>
        <div className={styles.modulesWrapper_titleContainer}>
          <h2>{sectionData.title}</h2>
          <SectionDescription textColor="#FFF">
            {sectionData.description}
          </SectionDescription>
        </div>
        <div className={styles.modulesWrapper_controller} data-component-name="swiper-nav" role="presentation">
          <button className='swiper-button-prev'>
            <SlideArrowLeft />
          </button>
          <button className='swiper-button-next' role="presentation">
            <SlideArrowRight />
          </button>
        </div>
      </div>
      <div>
        {sectionData.cards.map(card =>
          <SwiperSlide
            key={card.id}
          >
            <Module content={card} />
          </SwiperSlide>
        )}
      </div>
    </Swiper>
  </section>
}
