import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo-its.svg" alt="Logo ITS" />

      <nav>
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
