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
          Eyjasund EHF (“Island Adventures”), Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland. Kennitala: 661021-1520. Email: booking@islandadventures.is. Phone: +354 865 5700.
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
          We keep your personal data only as long as needed for the purposes above. Booking and payment records are retained for as long as required by Icelandic accounting and tax law (currently seven years). Enquiry and contact data is deleted within a reasonable period after the matter is closed, and earlier on request where we are not legally required to keep it.
        </p>
        {/* TODO (legal — needs your facts): confirm where Bókun and Resend store/process data. If outside the EEA, disclose the international transfer and the safeguard used (e.g. Standard Contractual Clauses). */}
        <p>
          <strong>6. Sharing</strong><br />
          We share booking data with our booking provider (Bókun) to process your reservation, and details you submit through our forms with our email provider (Resend) to deliver those messages. We do not sell your data.
        </p>
        <p>
          <strong>7. Your rights</strong><br />
          right to access, rectify, erase, restrict, port, object; right to complain to the Icelandic Data Protection Authority (Persónuvernd) or relevant supervisory authority. To exercise any of these rights, contact us at booking@islandadventures.is.
        </p>
        {/* TODO (legal — needs your facts): name the specific analytics tool (e.g. Google Analytics 4) and make sure it matches the cookie banner. */}
        <p>
          <strong>8. Cookies</strong><br />
          We use only essential cookies by default. If you enable analytics, we use a website-analytics tool to understand how the site is used; you can withdraw consent at any time via the cookie banner or settings.
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
