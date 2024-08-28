"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './ResyWidget.module.css';

// Extend the window object
declare global {
  interface Window {
    resyWidget: {
      addButton: (element: HTMLElement, options: { venueId: number; apiKey: string; replace: boolean }) => void;
    };
  }
}

export default function ResyWidget() {
  const apiKey = process.env.NEXT_PUBLIC_RESY_API_KEY as string;

  useEffect(() => {
    const buttonElement = document.getElementById('resyButton-cAEML1OPduh7DOFpeI5Hw');
    if (window.resyWidget && buttonElement) {
      window.resyWidget.addButton(buttonElement, {
        venueId: 82593,
        apiKey,
        replace: true,
      });
    }
  }, [apiKey]);

  return (
    <div className={styles.widget}>
      <a href="https://resy.com/cities/jackson-wy-united-states/venues/coe-tavern" id="resyButton-cAEML1OPduh7DOFpeI5Hw">
        Book your Coe Tavern reservation on Resy
      </a>
      <Script
        src="https://widgets.resy.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const buttonElement = document.getElementById('resyButton-cAEML1OPduh7DOFpeI5Hw');
          if (window.resyWidget && buttonElement) {
            window.resyWidget.addButton(buttonElement, {
              venueId: 82593,
              apiKey,
              replace: true,
            });
          }
        }}
      />
    </div>
  );
}
