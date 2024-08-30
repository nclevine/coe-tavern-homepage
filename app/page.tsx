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
      <h1 className={styles.homeHeader}>Modern classics,<br/>&nbsp;&nbsp;&nbsp;history,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;& casual elegance</h1>
      <div className={styles.homeBackground}>
        <Image
          className={styles.homeBackgroundImage}
          src='/coe-tavern-interior-wall.jpg'
          alt='Coe Tavern'
          width={1000}
          height={1000}
        />
        <div className={styles.homeBackgroundOverlay}></div>
      </div>
    </div>
  );
}
