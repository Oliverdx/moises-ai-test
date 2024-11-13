import { link } from "@/types/global";

import styles from "./style.module.scss";

const Header = ({links}: {links: Array<link>}) => {

  const renderLink = (id: number, link: string, title: string) =>
  <li key={id}>
    <a href={link}>{title}</a>
  </li>
  
  return <nav className={styles.header}>
    <ul>
      {renderLink(0, '/', 'Developer')}
      {links?.map(link => renderLink(link.id, link.link, link.title))}
    </ul>
  </nav>
};

export default Header;
