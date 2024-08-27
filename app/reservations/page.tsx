import ResyWidget from '../components/ResyWidget/ResyWidget';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coe Tavern | Reservations',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function ReservationsPage() {
  return (
    <div>
      <h1>Reservations</h1>
      <p>Book a table at Coe Tavern through Resy:</p>
      <ResyWidget />
    </div>
  );
}
