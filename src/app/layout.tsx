import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { StickyBookNow } from '@/components/StickyBookNow';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { WebSiteJsonLd } from '@/components/JsonLd';
import { SITE_URL, OG_IMAGE } from '@/lib/seo';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Island Adventures | RIB Boat Tours — Vestmannaeyjar, Iceland',
    template: '%s | Island Adventures',
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  description:
    'RIB boat tours of the Westman Islands, Iceland: sea caves, cliffs and wildlife. 1-hour and 2-hour tours, private charters and luxury trips. May to October.',
  keywords: ['RIB boat', 'Vestmannaeyjar', 'Westman Islands', 'Iceland', 'boat tour', 'sea caves', 'wildlife'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Island Adventures',
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
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
      <head>
        <link rel="preconnect" href="https://widgets.bokun.io" crossOrigin="" />
        <link rel="preload" as="image" href="/images/hero.jpg" fetchPriority="high" />
        <WebSiteJsonLd />
      </head>
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
