"use client"

import { module } from "@/types/generic"

import styles from "./style.module.scss";
import { ArrowUp } from "@/icons/ArrowUp";

export default function Module({content} : {content: module}) {

  return <div className={styles.moduleWrapper}>
    <h3 className={styles.cardTitle}>
      {content.title}
    </h3>
    <p className={styles.moduleDescription}>
      {content.description}
    </p>
    <a href={content?.button?.url} className={styles.moduleLink}>
      {content?.button?.text}
      <ArrowUp />
    </a>
  </div>
}

