import styles from './Footer.module.css';
import Instagram from '../SVG/instagram.svg'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <p className={styles.address}>85 S King St, Jackson, WY 83001</p>
          <p className={styles.phone}><a href="tel:+13072015026">(307) 201-5026</a></p>
        </div>
        <div className={styles.instagram}>
          <a href="https://www.instagram.com/coetavernjh/" target="_blank" rel="noopener noreferrer">
            <Instagram className={styles.instagramLogo} />
          </a>
        </div>
      </footer>
    );
  }
  