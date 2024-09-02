"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import FoodDrinkMenu from '../components/FoodDrinkMenu/FoodDrinkMenu';
import styles from './page.module.css';
import { OrganizedMenuItems } from '../../lib/contentful';

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

type MenuPageContentProps = {
  foodItems: OrganizedMenuItems;
  drinkItems: OrganizedMenuItems;
  bottomImage: string;
};

export default function MenuPageContent({ foodItems, drinkItems, bottomImage }: MenuPageContentProps) {
  return (
    <div>
      <motion.h1
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        layout
      >
        <span>Menu</span>
      </motion.h1>
      <FoodDrinkMenu foodItems={foodItems} drinkItems={drinkItems} />
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
