"use client"

import { footerProps, SocialType } from "@/types/global";

import styles from "./style.module.scss";

import { Dot } from "@/icons/Dot";
import { WebsiteLogo } from "@/icons/WebsiteLogo"
import { Facebook } from "@/icons/Facebook";
import { Instagram } from "@/icons/Instagram";
import { Twitter } from "@/icons/Twitter";
import { Youtube } from "@/icons/Youtube";
import { TikTok } from "@/icons/TikTok";
import { Linkedin } from "@/icons/Linkedin";
import { useRouter, usePathname } from "next/navigation";

export default function Footer({
  copyright,
  footerMenu,
  helpText,
  social
}: footerProps) {

  const router = useRouter();
  const pathName = usePathname();

  const socialIconsMap = {
    "facebook": <Facebook />,
    "instagram": <Instagram />,
    "twitter": <Twitter />,
    "youTube": <Youtube />,
    "tikTok": <TikTok />,
    "linkedIn": <Linkedin />
  }

  const handleLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(`/${event.target.value}`);
  }

  return <footer className={styles.footerWrapper}>
    <section className={styles.footerContainer}>
      <section className={styles.footerTop}>
        <div className={styles.footerTop_rightSide}>
          <WebsiteLogo />
          <p>{helpText}</p>

          <select
            className={styles.footerTop_languageSelector}
            aria-label="Select a language"
            onChange={handleLocale}
            value={pathName.replace('/', '')}
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>

          <div className={styles.footerTop_social}>
            {Object.keys(social).map((socialName) => (
              <a
                href={social[socialName as keyof SocialType]}
                key={socialName}
                target="_blank"
              >
                {socialIconsMap[socialName as keyof SocialType]}
              </a>
            ))}
          </div>
        </div>
        <nav className={styles.footerTop_leftSide}>
          {footerMenu.map(menu =>
            <div key={menu.id}>
              <h3>{menu.title}</h3>
              <ul>
                {menu.dropdown.map(subItem =>
                  <li key={`${subItem.id}-${subItem.title}`}>
                    <a href={subItem.link}>{subItem.title}</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </nav>
      </section>
      <section className={styles.footerBottom}>
        <p className={styles.copyright}>{copyright}</p>
        <p>Status <span> <Dot /> All systems are normal</span></p>
      </section>
    </section>
  </footer>
};
