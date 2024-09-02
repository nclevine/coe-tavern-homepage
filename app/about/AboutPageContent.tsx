"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './page.module.css';

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface AboutPageContentProps {
  topImage: string;
  bottomImage: string;
  storyHeader: string;
  storyText: any; // Assuming this is rich text content
  address: string;
  hours: string;
}

export default function AboutPageContent({
  topImage,
  bottomImage,
  storyHeader,
  storyText,
  address,
  hours,
}: AboutPageContentProps) {
  return (
    <div className={styles.about}>
      <motion.h1
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <span>About Coe Tavern</span>
      </motion.h1>
      <motion.div
        className={styles.locationHours}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <div className={styles.locationHoursText}>
          <h3>Location</h3>
          <p>{address}</p>
          <h3>Hours</h3>
          <p>{hours}</p>
        </div>
        <div className={styles.topImageWrapper}>
          <Image
            className={styles.topImage}
            src={topImage}
            alt="Coe Tavern"
            width={1000}
            height={1000}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.history}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <div className={styles.historyImage}>
          <Image
            src={bottomImage}
            alt="Original Coe Cabin"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.historyText}>
          <h3>{storyHeader}</h3>
          {documentToReactComponents(storyText)}
        </div>
      </motion.div>
    </div>
  );
}
