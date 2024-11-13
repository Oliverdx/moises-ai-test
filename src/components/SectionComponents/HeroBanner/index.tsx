import Button from "@/components/Button";

import styles from "./style.module.scss";

import { sectionHeroVideo } from "@/types/sections";
import { button } from "@/types/generic";

import { PlayButton } from "@/icons/Playbutton";
import { SoundWaves } from "@/icons/Soundwaves";
import SectionDescription from "@/components/SectionDescription";


export default function HeroBanner(sectionData: sectionHeroVideo) {

  const { __component, background, title, description, buttons } = sectionData;

  return <section
    className={styles.herovideo_container}
    data-section-name={__component.replace(".", "_")}
    style={{
      background: `url(${background?.url}) no-repeat left / cover`,
    }}
  >
    <h1 className={styles.herovideo_title}>{title}</h1>
    <SectionDescription>{description}</SectionDescription>

    <div className={styles.herovideo_demo}>
      <span className={styles.herovideo_demo_smallDesc}>Try Now</span>
      <div className={styles.herovideo_demo_audioWrapper}>
        <PlayButton className={styles.herovideo_demo_playBtn} />
        <SoundWaves className={styles.herovideo_demo_soundwaves} />
        <span className={styles.herovideo_demo_text}>
          Upload your own track
        </span>
      </div>
    </div>

    <div className={styles.herovideo_ctaBtns}>
      {buttons.map((btn: button) =>
        <Button key={btn.id} {...btn} />
      )}
    </div>
  </section>
}
