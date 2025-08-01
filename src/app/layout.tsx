import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyIcons from '@/components/StickyIcons';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shri Sigma | Top Multispeciality Hospital in Madhapur, Hyderabad',
  description: 'Looking for the best multispeciality hospitals in Madhapur, Hyderabad? Explore top facilities with experienced specialists and world-class healthcare services.',
  keywords: 'Best Multispecialty Hospital in Madhapur, Best Multispeciality Hospital in Hyderabad, Best Hospital in Madhapur, Best Hospital in Hyderabad, Best Multispeciality Hospital in Hitech city, Best Multispeciality Hospital in Jubilee Hills, Best Hospital in Durgam cheruvu, Best Multispeciality Hospital Near me, Best Hospital in Gachibowli',
  canonical: 'https://shrisigmahospitals.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/fav.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyIcons />
      </body>
    </html>
  );
}