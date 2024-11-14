import { link } from "@/types/global";

import styles from "./style.module.scss";
import { Logo } from "@/icons/Logo";

const Header = ({links}: {links: Array<link>}) => {

  const renderLink = (id: number, link: string, title: string | JSX.Element) =>
  <li key={id}>
    <a href={link}>{title}</a>
  </li>
  
  return <header className={styles.header}>
    <nav className={styles.headerWrapper}>
      <ul>
        {renderLink(0, '/', <Logo />)}
        {links?.map(link => renderLink(link.id, link.link, link.title))}
      </ul>
    </nav>
  </header>
};

export default Header;
