import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { StickyBookNow } from '@/components/StickyBookNow';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Island Adventures | RIB Boat Tours — Vestmannaeyjar, Iceland',
    template: '%s | Island Adventures',
  },
  description:
    'Explore the Westman Islands by RIB boat. Sea caves, cliffs & wildlife. 1-hour & 2-hour tours, private charters & custom trips. Book your adventure May–October.',
  keywords: ['RIB boat', 'Vestmannaeyjar', 'Westman Islands', 'Iceland', 'boat tour', 'sea caves', 'wildlife'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Island Adventures',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Script
          src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=ce638209-9fde-496b-95b4-c57690eb5091"
          strategy="afterInteractive"
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyBookNow />
        <CookieBanner />
      </body>
    </html>
  );
}
