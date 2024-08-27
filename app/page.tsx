import styles from "./page.module.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coe Tavern',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function Home() {
  return (
    <main className={styles.main}>
    </main>
  );
}
