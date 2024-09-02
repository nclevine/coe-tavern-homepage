"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface HomeContentProps {
  topImage: string;
  bottomImage: string;
  cta: string;
}

export default function HomeContent({ topImage, bottomImage, cta }: HomeContentProps) {
  return (
    <div className={styles.home}>
      <motion.div
        className={styles.topImageWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <Image
          className={styles.topImage}
          src={topImage}
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        className={styles.homeText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <div className={styles.mainDescription}>
          <h1>{cta}</h1>
        </div>
        <div className={styles.hoursReservations}>
          <a href="https://resy.com/cities/jackson-wy-united-states/venues/coe-tavern" target="_blank">
            <button>
              <h1>Reserve a table</h1>
            </button>
          </a>
        </div>
      </motion.div>
      <motion.div
        className={styles.bottomImageWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <Image
          className={styles.bottomImage}
          src={bottomImage}
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
      </motion.div>
    </div>
  );
}
