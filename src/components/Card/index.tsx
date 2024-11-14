"use client"

import { card } from "@/types/generic"

import styles from "./style.module.scss"

import { OffloadDevice } from "@/icons/OffloadDevice"
import { MusicControl } from "@/icons/MusicControl"
import { PlayOnRepeat } from "@/icons/PlayOnRepeat"
import { Lock } from "@/icons/Lock"
import { Rocket } from "@/icons/Rocket"
import { Flash } from "@/icons/Flash"

export default function Card({content} : {content: card}) {

  const CardIconMap: { [key: string]: JSX.Element} = {
    "offload-device": <OffloadDevice />,
    "music-control": <MusicControl />,
    "play-on-repeat": <PlayOnRepeat />,
    "lock": <Lock />,
    "rocket": <Rocket />,
    "flash": <Flash />,
  }

  return <div className={styles.cardWrapper}>
    {CardIconMap[content?.icon || "" ]}
    <h3 className={styles.cardTitle}>
      {content.title}
    </h3>
    <p className={styles.cardDescription}>
      {content.description}
    </p>
  </div>
}

