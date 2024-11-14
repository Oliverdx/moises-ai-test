"use client"
import { useState } from "react";


import { link } from "@types/global";

import styles from "./style.module.scss";
import { Logo } from "@icons/Logo.tsx";
import Link from "next/link";

const Header = ({ links }: { links: Array<link> }) => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const loginLink = links.find(link => link.link === "/login");

  const toggleMenu = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = !mobileOpen ? "hidden" : "";

    setMobileOpen(!mobileOpen);
  }

  const renderLink = (id: number, link: string, title: string | JSX.Element, openNewWindow: boolean) =>
    <li key={id}>
      <a
        href={link || "#"}
        target={openNewWindow ? "_blank" : "_self"}
      >{title}</a>
    </li>

  return <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Link href="/" title="Homepage">
          <Logo />
        </Link>
      </div>

      <div className={`${styles.hamburgerMenu} ${mobileOpen ? styles.menuOpen : ""}`} onClick={() => toggleMenu()}>
        <span></span>
      </div>

      <div className={`${styles.menu} ${mobileOpen ? styles.menuOpen : ""}`}>
        <nav className={styles.menuWrapper} aria-label="Main menu">
          <ul>
            {links?.map(link => {
              if (link.title.toLowerCase() !== "login")
                return renderLink(link.id, link.link, link.title, link.openNewWindow)
            })}
          </ul>
        </nav>

        {loginLink && <div className={styles.loginWrapper}>
          <a
            href={loginLink.link}
            target={loginLink.openNewWindow ? "_blank" : "_self"}
          >
            {loginLink.title}
          </a>
        </div>}
      </div>
    </div>
  </header>
};

export default Header;
