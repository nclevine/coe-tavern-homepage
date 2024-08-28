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
  console.log(drinkItems);
  return (
    <div className={styles.foodDrinkMenu}>
      <div className={styles.menuToggles}>
        <div className={`${styles.menuToggle} ${showingFood ? styles.toggleSelected : ''}`} onClick={showFood}>
          Food
        </div>
        <div className={`${styles.menuToggle} ${!showingFood ? styles.toggleSelected : ''}`} onClick={showDrinks}>
          Drinks
        </div>
      </div>
      <div className={styles.menuWrapper}>
        {showingFood ? (
          <div className={styles.foodMenu}>
            <div className={styles.menuPanel}>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Starters
                </h2>
                <ul className={styles.menuCategoryList}>
                  {foodItems.starters.map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Salads
                </h2>
                <ul className={styles.menuCategoryList}>
                  {foodItems.salads.map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.menuPanel}>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Mains
                </h2>
                <ul className={styles.menuCategoryList}>
                  {foodItems.mains.map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Sides
                </h2>
                <ul className={styles.menuCategoryList}>
                  {foodItems.sides.map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.drinkMenu}>
            <div className={styles.menuPanel}>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Cocktails
                </h2>
                <ul className={styles.menuCategoryList}>
                  {drinkItems.cocktails.map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Beer
                </h2>
                <h3 className={styles.menuCategorySubtitle}>
                  Draft
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['draft beers'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
                <h3 className={styles.menuCategorySubtitle}>
                  Bottled
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['bottled beers'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.menuPanel}>
              <div className={styles.menuCategory}>
                <h2 className={styles.menuCategoryTitle}>
                  Wine by the glass
                </h2>
                <h3 className={styles.menuCategorySubtitle}>
                  White
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['white wine glasses'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
                <h3 className={styles.menuCategorySubtitle}>
                  Rosé
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['rose wine glasses'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
              <div className={`${styles.menuCategory} ${styles.mobileNoTopPadding}`}>
                <h2 className={`${styles.menuCategoryTitle} ${styles.mobileDisplayNone}`}>
                  &nbsp;
                </h2>
                <h3 className={styles.menuCategorySubtitle}>
                  Red
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['red wine glasses'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.menuPanel}>
              <div className={`${styles.menuCategory} ${styles.alwaysFullWidth}`}>
                <h2 className={styles.menuCategoryTitle}>
                  Wine by the bottle
                </h2>
                <h3 className={styles.menuCategorySubtitle}>
                  White
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['white wine bottles'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
                <h3 className={styles.menuCategorySubtitle}>
                  Red
                </h3>
                <ul className={styles.menuCategoryList}>
                  {drinkItems['red wine bottles'].map((item: Entry<any>) => (
                    <MenuItem
                      key={item.sys.id}
                      title={item.fields.title as string}
                      description={item.fields.description as string}
                      price={formatPrice(item)}
                    />
                  ))}
                </ul>
              </div>
            </div>
            {/* {Object.keys(drinkItems).map(category => (
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
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
}
