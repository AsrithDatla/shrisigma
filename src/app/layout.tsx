import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyIcons from '@/components/StickyIcons';
import BackToTop from '@/components/BackToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shri Sigma | Top Multispeciality Hospital in Madhapur, Hyderabad',
  description: 'Looking for the best multispeciality hospitals in Madhapur, Hyderabad? Explore top facilities with experienced specialists and world-class healthcare services.',
  keywords: 'Best Multispecialty Hospital in Madhapur, Best Multispeciality Hospital in Hyderabad, Best Hospital in Madhapur, Best Hospital in Hyderabad, Best Multispeciality Hospital in Hitech city, Best Multispeciality Hospital in Jubilee Hills, Best Hospital in Durgam cheruvu, Best Multispeciality Hospital Near me, Best Hospital in Gachibowli',
  alternates: {
    canonical: 'https://shrisigmahospitals.com',
  },
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
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyIcons />
        <BackToTop />
      </body>
    </html>
  );
}