import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: 'Private RIB Charters',
  description:
    'The same 1-hour or 2-hour RIB tours as our scheduled trips — just for your group. Vestmannaeyjar sea caves, cliffs and wildlife. By inquiry.',
  openGraph: {
    title: 'Private RIB Charters | Island Adventures',
    description: 'Same 1-hour or 2-hour RIB tours as scheduled — just for your group. Vestmannaeyjar.',
  },
};

/** Add or remove image paths to change the tour page gallery. */
const IMAGES = [
  { src: '/images/tour-private.jpg', alt: 'Private RIB charter Vestmannaeyjar' },
];

export default function PrivateTourPage() {
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
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">Private charters</h1>
      <p className="mt-4 text-lg text-gray-600">
        The same 1-hour or 2-hour RIB tours as our scheduled trips — just for your group only. Same sea caves, cliffs and wildlife; you choose the time. Perfect for families and small groups who want the boat to themselves.
      </p>
      <p className="mt-4 text-gray-600">Private charters are not bookable online. We offer them only when you contact us directly.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact#custom" className="btn-primary">
          Contact us to arrange a private charter
        </Link>
        <Link href="/#book" className="btn-secondary">
          Book a 1-hour or 2-hour tour instead
        </Link>
      </div>
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
