import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CustomTripForm } from '@/components/CustomTripForm';

export const metadata: Metadata = {
  title: 'Custom Trips',
  description:
    'Tailored RIB experiences from Vestmannaeyjar: luxury trips with catering, hen and stag parties, longer or custom itineraries. Tell us what you have in mind.',
  openGraph: {
    title: 'Custom Trips | Island Adventures',
    description: 'Tailored RIB experiences: luxury with catering, hen/stag parties, longer or custom itineraries. Vestmannaeyjar.',
  },
};

/** Add or remove image paths to change the tour page gallery. */
const IMAGES = [
  { src: '/images/tour-custom.jpg', alt: 'Custom RIB trip Westman Islands' },
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
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">Custom trips</h1>
      <p className="mt-4 text-lg text-gray-600">
        Whatever you have in mind: luxury trips with catering, hen and stag parties, longer or tailored itineraries — we can cater to it all. Unlike private charters (same 1h/2h tour, your group only), custom trips are built around you. Tell us your ideas and we’ll help you plan something unique.
      </p>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          From a special celebration with food and drinks on the water to a full-day exploration of the Westman Islands, or a bespoke route designed around your interests — we work with you to create the trip you want. No two custom trips are the same.
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
