import styles from './style.module.css';

export default function Footer() {
  return (
    <footer>
      <address className={styles.address}>
        <div>
          <img src="/insta-icon.svg" alt="" />
          <p>@its.projeto</p>
        </div>
        <div>
          <img src="/whats-icon.svg" alt="" />
          <p>(xx) xxxxx-xxxx</p>
        </div>
        <div>
          <img src="/email-icon.svg" alt="" />
          <p>its@ufca.edu.br</p>
        </div>
      </address>
    </footer>
  );
}
