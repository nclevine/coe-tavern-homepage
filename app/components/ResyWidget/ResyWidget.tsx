"use client";

import { useEffect } from 'react';
import Script from 'next/script';

// Extend the window object
declare global {
  interface Window {
    resyWidget: {
      addButton: (element: HTMLElement, options: { venueId: number; apiKey: string; replace: boolean }) => void;
    };
  }
}

export default function ResyWidget() {
  useEffect(() => {
    const buttonElement = document.getElementById('resyButton-cAEML1OPduh7DOFpeI5Hw');
    if (window.resyWidget && buttonElement) {
      window.resyWidget.addButton(buttonElement, {
        venueId: 82593,
        apiKey: 'ev01DJ6j4g2aN8J2PUSQOdsCthGoD5Ud',
        replace: true,
      });
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
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
              apiKey: 'ev01DJ6j4g2aN8J2PUSQOdsCthGoD5Ud',
              replace: true,
            });
          }
        }}
      />
    </div>
  );
}
