import { sectionHeroVideo } from "@/types/sections";

import styles from "./style.module.scss"

export default function HeroBanner(sectionData: sectionHeroVideo) {

  return <section 
    className={styles.herovideo_container}
    data-section-name={sectionData?.__component.replace(".", "_")}
    style={{
      background: `url(${sectionData?.background?.url}) no-repeat left / cover`, 
      height: sectionData?.background?.height
      }}
    >
    <h1 className={styles.herovideo_title}>{sectionData.title}</h1>
    <span className={styles.herovideo_description}>{sectionData?.description}</span>
  </section>
}
