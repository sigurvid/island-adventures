import type { Metadata } from 'next';
import Link from 'next/link';
import { CustomTripForm } from '@/components/CustomTripForm';
import { MapEmbed } from '@/components/MapEmbed';
import { customTripFormIs } from '@/content/is/custom-trip-form';
import { isContactCopy, isContactMetadata } from '@/content/is/contact';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { ...isContactMetadata, alternates: alternates('/contact/', true) };

export default function IcelandicContactPage() {
  const c = isContactCopy;
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">{c.title}</h1>
      <p className="mt-4 text-gray-600">
        {c.introBefore}
        <a href="mailto:booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">
          booking@islandadventures.is
        </a>
        {c.introAfter}
      </p>

      <section className="mt-10" aria-labelledby="meeting-heading-is">
        <h2 id="meeting-heading-is" className="section-heading mb-2">
          {c.meetingHeading}
        </h2>
        <p className="text-gray-600">{c.meetingBody}</p>
        <MapEmbed title={c.iframeTitle} label="Sýna kort" address="Básaskersbryggja 6, 900 Vestmannaeyjar" />
      </section>

      <section id="custom" className="mt-14">
        <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" copy={customTripFormIs} />
      </section>

      <div className="mt-12">
        <Link href={c.backHref} className="text-alpine font-medium underline hover:text-alpine-light">
          {c.backHome}
        </Link>
      </div>
    </article>
  );
}
