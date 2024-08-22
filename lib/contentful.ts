import { createClient, Entry, EntryCollection } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getFoodMenuItems(): Promise<Entry<any>[]> {
  const foodEntries: EntryCollection<any> = await client.getEntries({
    content_type: 'foodMenuItem',
    order: ['fields.category', 'fields.order'],
  });

  return foodEntries.items;
}

export async function getDrinkMenuItems(): Promise<Entry<any>[]> {
  const drinkEntries: EntryCollection<any> = await client.getEntries({
    content_type: 'drinkMenuItem',
    order: ['fields.category', 'fields.order'],
  });

  return drinkEntries.items;
}

export async function getMenuCategories(): Promise<Entry<any>[]> {
  const categoryEntries: EntryCollection<any> = await client.getEntries({
    content_type: 'menuCategory',
  });

  return categoryEntries.items;
}
