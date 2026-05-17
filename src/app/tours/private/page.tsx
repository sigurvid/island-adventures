import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: 'Private RIB Charters',
  description:
    'Private RIB charters from Vestmannaeyjar for teams, stag and hen groups, and celebrations — same 1-hour or 2-hour coastal adventure, your boat only. By inquiry.',
  openGraph: {
    title: 'Private RIB Charters | Island Adventures',
    description: 'Private RIB charters for teams and groups — same epic tour, your pace. Vestmannaeyjar.',
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
        Treat your team to something they will actually remember: the same high-energy 1-hour or 2-hour RIB route as our scheduled tours — sea caves, cliffs and wildlife — but with the boat reserved for your company, your stag or hen crew, or your whole group. You pick the vibe; we handle safety, gear and a captain who knows every corner of the islands.
      </p>
      <p className="mt-4 text-gray-600">
        Private charters are not bookable online. Tell us your dates, headcount and occasion and we’ll put together a quote and a departure window that works for you.
      </p>
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
