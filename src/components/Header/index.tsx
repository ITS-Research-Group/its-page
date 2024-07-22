import { useState } from 'react';
import styles from './style.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWithButton}>
        <img src="/logo-its.svg" alt="Logo ITS" />

        <button className={styles.menuButton} onClick={toggleMenu}>
          <img
            className={`${styles.icon} ${menuOpen ? styles.rotateIn : styles.rotateOut}`}
            src={'/menu-show.svg'}
            alt=""
          />
        </button>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">mission</a>
          </li>
          <li>
            <a href="#services">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
