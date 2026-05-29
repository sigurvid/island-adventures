import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CustomTripForm } from '@/components/CustomTripForm';
import { alternates, og } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Luxury trips',
  description:
    'Tailored luxury RIB experiences from Vestmannaeyjar: catering, celebrations, longer or bespoke itineraries. Tell us what you have in mind.',
  alternates: alternates('/tours/custom/'),
  openGraph: { ...og('/tours/custom/'), title: 'Luxury trips | Island Adventures', description: 'Tailored luxury RIB experiences: catering, celebrations, longer or bespoke itineraries. Vestmannaeyjar.' },
};

/** Add or remove image paths to change the tour page gallery. */
const IMAGES = [
  { src: '/images/tour-custom.jpg', alt: 'Luxury RIB experience Westman Islands' },
];

export default function CustomTripPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="overflow-hidden rounded-xl bg-gray-200">
        <ImageCarousel
          images={IMAGES}
          intervalMs={10000}
          aspectClass="aspect-[2/1]"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">Luxury trips</h1>
      <p className="mt-4 text-lg text-gray-600">
        Whatever you have in mind — catering on the water, a standout company outing, a stag or hen weekend upgrade, or a longer bespoke route — we build the trip around you. Unlike private charters (our classic 1-hour or 2-hour tour, your group only), luxury trips are tailored itineraries. Tell us your ideas and we’ll help you plan something unique.
      </p>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          From a special celebration with food and drinks on the water to a full-day exploration of the Westman Islands, or a bespoke route designed around your interests — we work with you to create the trip you want. No two luxury trips are the same.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/#book" className="btn-secondary">
          Book a 1-hour or 2-hour tour instead
        </Link>
        <Link href="/tours/private" className="btn-secondary">
          Private charters (same tour, your group only)
        </Link>
      </div>

      <section id="request" className="mt-14 border-t border-alpine/10 pt-10">
        <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" />
      </section>

      <div className="prose-inline mt-10 space-y-4 text-gray-700">
        <p>Sightings of specific wildlife are not guaranteed. Tours are weather-dependent; see our FAQ and Terms for cancellation and meeting point details.</p>
      </div>
      <p className="mt-8">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
