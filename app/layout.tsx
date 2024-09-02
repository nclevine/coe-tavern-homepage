import './globals.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { getBasicInfo } from '../lib/contentful';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basicInfo = await getBasicInfo();
  
  const address = basicInfo?.fields.address as string;
  const phoneNumber = basicInfo?.fields.phoneNumber as string;

  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer address={address} phoneNumber={phoneNumber} />
      </body>
    </html>
  );
}
