"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

  const navLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <motion.div
          className={styles.logoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/" legacyBehavior>
            <a className={styles.logoLinkWrapper}>
              <div className={styles.desktopLogoWrapper}>
                <DesktopLogo className={styles.desktopLogo} />
              </div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className={styles.hamburger}
          onClick={toggleMenu}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <span className={`${styles.line} ${isMenuOpen ? styles.lineTop : ''}`}></span>
          <span className={`${styles.line} ${isMenuOpen ? styles.lineBottom : ''}`}></span>
        </motion.div>

        <div className={`${styles.navLinksContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.navLinks}>
            <motion.li
              className={styles.navLink}
              onClick={closeMenu}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={navLinkVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Link href="/" legacyBehavior>
                <a className={styles.logoLinkWrapper}>
                  <div className={styles.mobileLogoWrapper}>
                    <MobileLogo className={styles.mobileLogo} />
                  </div>
                </a>
              </Link>
            </motion.li>
            <motion.li
              className={styles.navLink}
              onClick={closeMenu}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={navLinkVariants}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
              <Link href="/menu">Menu</Link>
            </motion.li>
            <motion.li
              className={styles.navLink}
              onClick={closeMenu}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={navLinkVariants}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            >
              <Link href="/reservations">Reservations</Link>
            </motion.li>
            <motion.li
              className={styles.navLink}
              onClick={closeMenu}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={navLinkVariants}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            >
              <Link href="/about">About</Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
