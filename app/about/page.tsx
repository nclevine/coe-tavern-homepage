import type { Metadata } from 'next';
import Image from 'next/image'
import styles from './page.module.css';
import Mapbox from '../components/Mapbox/Mapbox';

export const metadata: Metadata = {
  title: 'Coe Tavern | About',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function AboutPage() {
    return (
      <div className={styles.about}>
        <h1 className={styles.header}><span>About Coe Tavern</span></h1>
        <div className={styles.locationHours}>
          <div className={styles.locationHoursText}>
            <h3>Location</h3>
            <p>85 S. King Street, in the heart of Jackson, Wyoming</p>
            <h3>Hours</h3>
            <p>Tuesday to Saturday, 5pm - 9pm</p>
          </div>
          <div className={styles.map}>
            <Mapbox />
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.historyImage}>
            <Image
              src='/coe-tavern-original-building.jpg'
              alt='Original Coe Cabin'
              width={500}
              height={500}
            />
          </div>
          <div className={styles.historyText}>
            <h3>Coe History</h3>
            <p>The Coe cabin was originally built in 1915 by Martha and Clarence Dow and soon thereafter became residence to the local blacksmith Ed Coe and his wife Emily. After 40 years the home was bought by preservationist John Holland to secure its place in Jackson Hole history. During the renovation, every single log in the dining room walls was stamped and meticulously recorded to document its original location, so that they could be put together exactly as originally seated. The restaurant interiors are designed by Nona Yehia of GYDE Architects, Christian Burch of local design store Mountain Dandy, and Adam Connor of Remedy Design and Build. Refined yet casual; elevated yet accessible—a cozy, chic dinner party.</p>
          </div>
        </div>
      </div>
    );
  }
  