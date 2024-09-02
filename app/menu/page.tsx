import { getFoodMenuItems, getDrinkMenuItems, getMenuImage } from '../../lib/contentful';
import type { Metadata } from 'next';
import MenuPageContent from './MenuPageContent';

export const metadata: Metadata = {
  title: 'Coe Tavern | Menu',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default async function MenuPage() {
  const foodItems = await getFoodMenuItems();
  const drinkItems = await getDrinkMenuItems();
  const menuImage = await getMenuImage();

  const bottomImage = `https:${(menuImage?.fields.bottomImage as any)?.fields?.file?.url as string}`;

  return (
    <MenuPageContent foodItems={foodItems} drinkItems={drinkItems} bottomImage={bottomImage} />
  );
}
