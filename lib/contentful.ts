import { createClient, Entry, EntryCollection } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export interface OrganizedMenuItems {
  [key: string]: Entry<any>[];
}

const getCategoryName = (item: Entry<any>): string | undefined => {
  const category = item.fields.category as any; // Using `any` to simplify type handling
  return category?.fields?.categoryName?.toLowerCase();
};

export async function getFoodMenuItems(): Promise<OrganizedMenuItems> {
  const foodEntries: EntryCollection<any> = await client.getEntries({
    content_type: 'foodMenuItem',
  });

  const organizedFoodItems: OrganizedMenuItems = {
    starters: [],
    salads: [],
    mains: [],
    sides: [],
  };

  // Organize and sort food items by category
  foodEntries.items.forEach(item => {
    const categoryName = getCategoryName(item);
    if (categoryName && organizedFoodItems[categoryName]) {
      organizedFoodItems[categoryName].push(item);
    }
  });

  // Sort each category by 'order' property
  for (const category in organizedFoodItems) {
    organizedFoodItems[category].sort((a, b) => (a.fields.order as number) - (b.fields.order as number));
  }

  return organizedFoodItems;
}

export async function getDrinkMenuItems(): Promise<OrganizedMenuItems> {
  const drinkEntries: EntryCollection<any> = await client.getEntries({
    content_type: 'drinkMenuItem',
  });

  const organizedDrinkItems: OrganizedMenuItems = {
    'red wine bottles': [],
    'white wine bottles': [],
    'red wine glasses': [],
    'white wine glasses': [],
    'rose wine glasses': [],
    cocktails: [],
    'draft beers': [],
    'bottled beers': [],
  };

  // Organize and sort drink items by category
  drinkEntries.items.forEach(item => {
    const categoryName = getCategoryName(item);
    if (categoryName && organizedDrinkItems[categoryName]) {
      organizedDrinkItems[categoryName].push(item);
    }
  });

  // Sort each category by 'order' property
  for (const category in organizedDrinkItems) {
    organizedDrinkItems[category].sort((a, b) => (a.fields.order as number) - (b.fields.order as number));
  }

  return organizedDrinkItems;
}
