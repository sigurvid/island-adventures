import type { Metadata } from 'next';
import Link from 'next/link';
import { CustomTripForm } from '@/components/CustomTripForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Island Adventures for RIB boat tours, luxury trips and inquiries. Vestmannaeyjar, Iceland.',
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">Contact</h1>
      <p className="mt-4 text-gray-600">
        Questions or luxury trip requests? We can arrange experiences with catering, hen and stag parties, and everything in between. Email us at{' '}
        <a href="mailto:booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">
          booking@islandadventures.is
        </a>{' '}
        or use the form below.
      </p>

      <section className="mt-10" aria-labelledby="meeting-heading">
        <h2 id="meeting-heading" className="section-heading mb-2">Meeting point & map</h2>
        <p className="text-gray-600">
          Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland. Please arrive at least 15 minutes before departure.
        </p>
        <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-alpine/20">
          <iframe
            title="Island Adventures meeting point — Básaskersbryggja 6, Vestmannaeyjar"
            src="https://www.google.com/maps?q=B%C3%A1saskersbryggja+6,+900+Vestmannaeyjar,+Iceland&z=16&output=embed"
            width="100%"
            height="100%"
            className="min-h-[280px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="custom" className="mt-14">
        {/* Use apiEndpoint="/api/custom-trip" once RESEND_API_KEY or SENDGRID_API_KEY and email env vars are set */}
        <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" />
      </section>

      <div className="mt-12">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </div>
    </article>
  );
}
