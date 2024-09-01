import styles from "./page.module.css";
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coe Tavern',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.topImageWrapper}>
        <Image
          className={styles.topImage}
          src='/coe-tavern-exterior.jpg'
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.homeText}>
        <div className={styles.mainDescription}>
          <h1>Modern classics, history, & casual elegance in the heart of Jackson, Wyoming</h1>
        </div>
        <div className={styles.hoursReservations}>
          <a href="https://resy.com/cities/jackson-wy-united-states/venues/coe-tavern" target="_blank">
            <button>
              <h1>Reserve a table</h1>
            </button>
          </a>
        </div>
      </div>
      <div className={styles.bottomImageWrapper}>
        <Image
          className={styles.bottomImage}
          src='/coe-tavern-interior-wall.jpg'
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
