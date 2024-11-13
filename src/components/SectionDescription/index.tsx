"use client"

import styles from "./style.module.scss";

interface sectionDescriptionProps {
  textColor?: string,
  children: React.ReactNode
}

export default function SectionDescription({ textColor="#858585", children }: sectionDescriptionProps) {
  return <span className={styles.section_description} style={{ color: textColor }}>
    {children}
  </span>
}
