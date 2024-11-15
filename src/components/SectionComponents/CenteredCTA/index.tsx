import SectionDescription from "@/components/SectionDescription";

import { sectionCTAContent } from "@/types/sections";

import styles from "./style.module.scss"
import Button from "@/components/Button";
import { useLanguage } from "@/context/LanguageContext";


export default function CenteredCTA(sectionData: sectionCTAContent) {

  const { language } = useLanguage();

  return <section className={styles.CTAWrapper}>
    <h2 className={`${language === "pt" ? styles.translated : ""}`}>{sectionData.title}</h2>
    <SectionDescription>{sectionData.description}</SectionDescription>
    <Button
      {...sectionData.buttons[0]}
    />
  </section>
}
