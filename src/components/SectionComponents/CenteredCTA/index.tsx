"use client"
import { usePathname } from 'next/navigation'

import SectionDescription from "@/components/SectionDescription";
import Button from "@/components/Button";

import { sectionCTAContent } from "@/types/sections";

import styles from "./style.module.scss"

export default function CenteredCTA(sectionData: sectionCTAContent) {

  const pathname = usePathname();
  const language = pathname.replace('/', '');

  return <section className={styles.CTAWrapper}>
    <h2 className={`${language === "pt" ? styles.translated : ""}`}>{sectionData.title}</h2>
    <SectionDescription>{sectionData.description}</SectionDescription>
    <Button
      {...sectionData.buttons[0]}
    />
  </section>
}
