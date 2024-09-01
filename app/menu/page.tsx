import { getFoodMenuItems, getDrinkMenuItems } from '../../lib/contentful';
import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import FoodDrinkMenu from '../components/FoodDrinkMenu/FoodDrinkMenu';

export const metadata: Metadata = {
  title: 'Coe Tavern | Menu',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};


export default async function MenuPage() {
  const foodItems = await getFoodMenuItems();
  const drinkItems = await getDrinkMenuItems();

  return (
    <div>
      <h1 className={styles.header}><span>Menu</span></h1>
      <FoodDrinkMenu foodItems={foodItems} drinkItems={drinkItems} />
      <div className={styles.bottomImageWrapper}>
        <Image
          className={styles.bottomImage}
          src='/coe-tavern-interior-night.jpg'
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
