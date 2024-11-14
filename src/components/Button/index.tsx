"use client";

import { useRouter } from "next/navigation";

import styles from "./style.module.scss"


import { ArrowRight } from "@icons/ArrowRight";
import { button } from "@types/generic";

export default function Button(buttonProps: button){
  
  const router = useRouter();

  const {
    text,
    appearance = "",
    url,
    endIcon = ""
  } = buttonProps;

  const endIconsMap: { [key: string]: React.ReactNode } = {
    "arrow-right": <ArrowRight />
  }

  const buttonAction = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Add SEO tracks here

    if(url.indexOf('http') > 0)
      return router.push(url)

    return router.replace(url)
  }

  return <a href={url} onClick={buttonAction} className={styles[appearance]}>
    {text}
    {endIconsMap[endIcon]}
  </a>
}
