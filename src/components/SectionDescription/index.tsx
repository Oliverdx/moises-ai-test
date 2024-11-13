"use client"

import styles from "./style.module.scss";

export default function SectionDescription({children} :{children:React.ReactNode}) {
  return <span className={styles.section_description}>
    {children}
  </span>
}
