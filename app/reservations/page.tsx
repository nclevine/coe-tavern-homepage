import styles from './page.module.css'
import ResyWidget from '../components/ResyWidget/ResyWidget';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coe Tavern | Reservations',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function ReservationsPage() {
  return (
    <div className={styles.reservations}>
      <h1 className={styles.header}><span>Reservations</span></h1>
      <ResyWidget />
      <h3 className={styles.instructions}>Tables available Tuesday to Saturday, 5pm - 9pm</h3>
      {/* <div className={styles.reservationsBackground}>
        <Image
          className={styles.reservationsBackgroundImage}
          src='/coe-tavern-interior-night.jpg'
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
        <div className={styles.reservationsBackgroundOverlay}></div>
      </div> */}
    </div>
  );
}
