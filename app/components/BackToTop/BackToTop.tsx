"use client"

import { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';
import ArrowIcon from '../SVG/arrowIcon.svg';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (document.body.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.body.addEventListener('scroll', toggleVisibility);
    return () => {
      document.body.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowIcon className={styles.icon} />
    </button>
  );
}
