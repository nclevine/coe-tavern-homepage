"use client";

import { motion } from 'framer-motion';
import ResyWidget from '../components/ResyWidget/ResyWidget';
import styles from './page.module.css';

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

type ReservationsPageContentProps = {
  hours: string;
};

export default function ReservationsPageContent({ hours }: ReservationsPageContentProps) {
  return (
    <div className={styles.reservations}>
      <motion.h1
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <span>Reservations</span>
      </motion.h1>
      <motion.div
        className={styles.resyWidgetWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <ResyWidget />
      </motion.div>
      <motion.h3
        className={styles.instructions}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        Tables available {hours}
      </motion.h3>
    </div>
  );
}
