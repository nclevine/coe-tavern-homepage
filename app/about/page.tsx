import type { Metadata } from 'next';
import styles from './page.module.css';
import Mapbox from '../components/Mapbox/Mapbox';

export const metadata: Metadata = {
  title: 'Coe Tavern | About',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function AboutPage() {
    return (
      <div className={styles.about}>
        <Mapbox />
      </div>
    );
  }
  