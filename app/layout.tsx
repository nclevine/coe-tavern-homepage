import './globals.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import { getBasicInfo } from '../lib/contentful';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch the basic info content from Contentful
  const basicInfo = await getBasicInfo();
  
  // Extract address and phoneNumber fields
  const address = basicInfo?.fields.address as string;
  const phoneNumber = basicInfo?.fields.phoneNumber as string;

  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <BackToTop />
        <Footer address={address} phoneNumber={phoneNumber} />
      </body>
    </html>
  );
}
