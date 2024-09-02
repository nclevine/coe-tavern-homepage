import { getAboutPageContent, getBasicInfo } from '../../lib/contentful';
import AboutPageContent from './AboutPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coe Tavern | About',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default async function AboutPage() {
  const aboutPageContent = await getAboutPageContent();
  const basicInfo = await getBasicInfo();

  const topImage = `https:${(aboutPageContent?.fields.topImage as any)?.fields?.file?.url as string}`;
  const bottomImage = `https:${(aboutPageContent?.fields.bottomImage as any)?.fields?.file?.url as string}`;
  const storyHeader = aboutPageContent?.fields.storyHeader as string;
  const storyText = aboutPageContent?.fields.storyText as string;
  const address = basicInfo?.fields.address as string;
  const hours = basicInfo?.fields.hours as string;

  return (
    <AboutPageContent
      topImage={topImage}
      bottomImage={bottomImage}
      storyHeader={storyHeader}
      storyText={storyText}
      address={address}
      hours={hours}
    />
  );
}
