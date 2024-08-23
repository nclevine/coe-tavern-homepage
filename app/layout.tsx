import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Coe Tavern',
  description: 'Coe Tavern in Jackson Hole, Wyoming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
