import { useState } from 'react';
import styles from './style.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            <a onClick={() => scrollToSection('mission')}>mission</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
