import HomeContent from './HomeContent';
import type { Metadata } from 'next';
import { getHomepageContent } from '../lib/contentful';

export const metadata: Metadata = {
  title: 'Coe Tavern',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const homepageContent = await getHomepageContent();

  const topImage = `https:${(homepageContent?.fields.topImage as any)?.fields?.file?.url as string}`;
  const bottomImage = `https:${(homepageContent?.fields.bottomImage as any)?.fields?.file?.url as string}`;
  const cta = homepageContent?.fields.cta as string;

  return <HomeContent topImage={topImage} bottomImage={bottomImage} cta={cta} />;
}
