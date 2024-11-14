import { sectionCardContent } from "@/types/sections";

import SectionDescription from "@/components/SectionDescription";
import Card from "@/components/Card";

import { card } from "@/types/generic";

import styles from "./style.module.scss"

export default function CardContent(sectionData: sectionCardContent) {

  const {
    preTitle,
    title,
    description
  } = sectionData;

  return <section className={styles.cardContentWrapper}>
    <span className={styles.preTitle}>{preTitle}</span>
    <h2>{title}</h2>
    <SectionDescription>{description}</SectionDescription>

    <div className={styles.cardsWrapper}>
      {sectionData.cards.map((card: card) =>
        <Card key={card.id} content={card} />
      )}
    </div>

  </section>
}

