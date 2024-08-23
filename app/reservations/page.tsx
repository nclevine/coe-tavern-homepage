import Script from 'next/script';

export default function ReservationsPage() {
  return (
    <div>
      <h1>Reservations</h1>
      <p>Book a table at Coe Tavern through Resy:</p>

      <div
        className="resy-widget"
        data-resy-widget="coe-tavern"
        data-resy-height="600"
        data-resy-width="100%"
      ></div>

      <Script
        src="https://widget.resy.com/embed.js"
        strategy="afterInteractive" // Loads the script after the page is interactive
      />
    </div>
  );
}
