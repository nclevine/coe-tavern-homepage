import { getFoodMenuItems, getDrinkMenuItems } from '../../lib/contentful';
import type { Metadata } from 'next';

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

      <section>
        <h2>Food</h2>
        <ul>
          {foodItems.map(item => (
            <li key={item.sys.id}>{item.fields.title as string}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Drinks</h2>
        <ul>
          {drinkItems.map(item => (
            <li key={item.sys.id}>{item.fields.title as string}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
