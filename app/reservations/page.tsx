import { getBasicInfo } from '../../lib/contentful';
import ReservationsPageContent from './ReservationsPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coe Tavern | Reservations',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default async function ReservationsPage() {
  const basicInfo = await getBasicInfo();

  const hours = basicInfo?.fields.hours as string;

  return <ReservationsPageContent hours={hours} />;
}
