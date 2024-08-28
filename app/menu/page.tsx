import { getFoodMenuItems, getDrinkMenuItems } from '../../lib/contentful';
import type { Metadata } from 'next';
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
      <h1>Our Menu</h1>
      <FoodDrinkMenu foodItems={foodItems} drinkItems={drinkItems} />
    </div>
  );
}
