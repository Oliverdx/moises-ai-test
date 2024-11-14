import SectionDescription from "@components/SectionDescription";

import { sectionCTAContent } from "@types/sections";

import styles from "./style.module.scss"
import Button from "@components/Button";


export default function CenteredCTA(sectionData: sectionCTAContent) {

  return <section className={styles.CTAWrapper}>
    <h2>{sectionData.title}</h2>
    <SectionDescription>{sectionData.description}</SectionDescription>
    <Button
      {...sectionData.buttons[0]}
    />
  </section>
}
