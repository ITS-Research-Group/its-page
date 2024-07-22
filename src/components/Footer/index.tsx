import styles from './style.module.css';

export default function Footer() {
  return (
    <footer>
      <address className={styles.address}>
        <div>
          <img src="/email-icon.svg" alt="" />
          <p>
            itslab.ccsa
            <wbr />
            @ufca.edu.br
          </p>
        </div>
        <div>
          <img src="/whats-icon.svg" alt="" />
          <p>(85) 99606-2082</p>
        </div>
        <div>
          <img src="/insta-icon.svg" alt="" />
          <p>@itslab.ufca</p>
        </div>
      </address>
    </footer>
  );
}
