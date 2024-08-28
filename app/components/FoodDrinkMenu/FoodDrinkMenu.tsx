"use client";

import { useState } from "react";
import { Entry } from 'contentful';
import { OrganizedMenuItems } from '../../../lib/contentful';
import MenuItem from './MenuItem';
import styles from './FoodDrinkMenu.module.css';

type FoodDrinkMenuProps = {
  foodItems: OrganizedMenuItems;
  drinkItems: OrganizedMenuItems;
};

export default function FoodDrinkMenu({ foodItems, drinkItems }: FoodDrinkMenuProps) {
  const [showingFood, setShowingFood] = useState(true);

  const showFood = () => {
    setShowingFood(true);
  };

  const showDrinks = () => {
    setShowingFood(false);
  };

  const formatPrice = (item: Entry<any>): string => {
    return item.fields.isMarketPrice ? 'MP' : `$${item.fields.price}`;
  };

  return (
    <div className={styles.foodDrinkMenu}>
      <div className={styles.menuToggles}>
        <div className={styles.menuToggle} onClick={showFood}>
          Food
        </div>
        <div className={styles.menuToggle} onClick={showDrinks}>
          Drinks
        </div>
      </div>
      <div className={styles.menuWrapper}>
        {showingFood ? (
          <div className={styles.foodMenu}>
            <h2>Food Menu</h2>
            {Object.keys(foodItems).map(category => (
              <div key={category}>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul>
                  {foodItems[category].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.drinksMenu}>
            <h2>Drink Menu</h2>
            {Object.keys(drinkItems).map(category => (
              <div key={category}>
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul>
                  {drinkItems[category].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
