"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import MobileLogo from '../SVG/mobileLogo.svg';
import DesktopLogo from '../SVG/desktopLogo.svg';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logoWrapper}>
          <Link href="/" legacyBehavior>
            <a className={styles.logoLinkWrapper}>
              {/* <div className={styles.mobileLogoWrapper}>
                <MobileLogo className={styles.mobileLogo} />
              </div> */}
              <div className={styles.desktopLogoWrapper}>
                <DesktopLogo className={styles.desktopLogo} />
              </div>
            </a>
          </Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.line} ${isMenuOpen ? styles.lineTop : ''}`}></span>
          <span className={`${styles.line} ${isMenuOpen ? styles.lineBottom : ''}`}></span>
        </div>

        <div className={`${styles.navLinksContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink} onClick={closeMenu}>
              <Link href="/" legacyBehavior>
                <a className={styles.logoLinkWrapper}>
                  <div className={styles.mobileLogoWrapper}>
                    <MobileLogo className={styles.mobileLogo} />
                  </div>
                </a>
              </Link>
            </li>
            <li className={styles.navLink} onClick={closeMenu}><Link href="/menu">Menu</Link></li>
            <li className={styles.navLink} onClick={closeMenu}><Link href="/reservations">Reservations</Link></li>
            <li className={styles.navLink} onClick={closeMenu}><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
