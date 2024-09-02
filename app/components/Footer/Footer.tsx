import styles from './Footer.module.css';
import Instagram from '../SVG/instagram.svg';

type FooterProps = {
  address: string;
  phoneNumber: string;
};

export default function Footer({ address, phoneNumber }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p className={styles.address}>{address}</p>
        <p className={styles.phone}>
          <a href={`tel:+1${phoneNumber.replace(/[^0-9]/g, '')}`}>{phoneNumber}</a>
        </p>
      </div>
      <div className={styles.instagram}>
        <a href="https://www.instagram.com/coetavernjh/" target="_blank" rel="noopener noreferrer">
          <Instagram className={styles.instagramLogo} />
        </a>
      </div>
    </footer>
  );
}
