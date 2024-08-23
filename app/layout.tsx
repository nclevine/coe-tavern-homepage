import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coe Tavern",
  description: "Coe Tavern in Jackson Hole, Wyoming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  );
}
