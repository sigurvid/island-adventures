import type { Metadata } from 'next';
import Link from 'next/link';
import { alternates, og } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Island Adventures. How we collect, use and protect your data.',
  alternates: alternates('/privacy/'),
  openGraph: og('/privacy/'),
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 7 March 2026</p>

      <div className="prose-inline mt-8 space-y-6 text-gray-700">
        <p>
          <strong>1. Controller</strong><br />
          Eyjasund ehf, Básaskersbryggja 6, info@islandadventures.is, 865 5700. . 661021-1520
        </p>
        <p>
          <strong>2. What we collect</strong><br />
          name, email, phone, booking details when you book or contact us; IP and basic usage if analytics are enabled.
        </p>
        <p>
          <strong>3. Purpose</strong><br />
          to process bookings, answer inquiries, send confirmations and necessary follow-ups; with consent, analytics to improve the site.
        </p>
        <p>
          <strong>4. Legal basis</strong><br />
          contract for bookings; consent for marketing/analytics where applicable; legitimate interest for replying to inquiries.
        </p>
        <p>
          <strong>5. Retention</strong><br />
          We  will retain your data until you delete it or request it to be deleted. Or for a maximum of 1 buisness year after the last interaction with us.
        </p>
        <p>
          <strong>6. Sharing</strong><br />
          booking data shared with Bókun; no sale of data.
        </p>
        <p>
          <strong>7. Your rights</strong><br />
          right to access, rectify, erase, restrict, port, object; right to complain to the Icelandic Data Protection Authority (Persónuvernd) or relevant supervisory authority.
        </p>
        <p>
          <strong>8. Cookies</strong><br />
          we use only essential cookies; if analytics are enabled, we use [X] and you can withdraw consent via cookie banner/settings.
        </p>
        <p>
          <strong>9. Changes</strong><br />
          We may update this policy; the “Last updated” date will be revised. Continued use after changes constitutes acceptance.
        </p>
      </div>

      <p className="mt-10">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
