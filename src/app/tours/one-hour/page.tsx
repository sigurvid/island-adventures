import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: '1-Hour RIB Tour',
  description:
    'One-hour RIB boat tour from Vestmannaeyjar: sea caves, cliffs and birdlife. 15,000 ISK adult, 9,000 ISK child. Book online. May–October.',
  openGraph: {
    title: '1-Hour RIB Tour | Island Adventures',
    description: 'One-hour RIB boat tour from Vestmannaeyjar: sea caves, cliffs and birdlife. 15,000 ISK adult, 9,000 ISK child.',
  },
};

/** Add or remove image paths to change the tour page gallery. */
const IMAGES = [
  { src: '/images/tour-1h.jpg', alt: '1-hour RIB tour Vestmannaeyjar' },
  { src: '/images/tour-1h2.jpg', alt: '1-hour RIB tour Vestmannaeyjar' },
  { src: '/images/tour-1h3.jpg', alt: '1-hour RIB tour Vestmannaeyjar' },
  // Add more images here, e.g.:
  // { src: '/images/tour-1h-2.jpg', alt: 'Description of the photo' },
  // { src: '/images/tour-1h-3.jpg', alt: 'Another shot from the 1-hour tour' },
];

export default function OneHourTourPage() {
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
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">1-hour RIB tour</h1>
      <p className="mt-2 text-alpine font-semibold">
        15,000 ISK per adult · 9,000 ISK per child
      </p>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          Hop aboard for a scenic 1-hour boat tour along Heimaey’s dramatic coastline, where volcanic cliffs, hidden coves, and sea-carved caves create nonstop photo moments right from the harbour. As we cruise the island’s rugged shoreline, you’ll get a clear view across the water toward Elliðaey and the tiny cabin often nicknamed “the loneliest house in the world”.
        </p>
        <p>
          We’ll also pass one of Vestmannaeyjar’s most famous natural landmarks, Elephant Rock — the remarkable basalt formation shaped like a giant elephant dipping its trunk into the Atlantic. Along the way, keep an eye out for seabirds soaring over the cliffs and, if we’re lucky, seals in the surf. It’s the perfect short trip for big scenery, iconic sights, and a true taste of the Westman Islands.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/#book" className="btn-primary">
          Check availability & book
        </Link>
        <Link href="/tours/two-hour" className="btn-secondary">
          See 2-hour tour
        </Link>
      </div>
      <p className="mt-4 text-gray-600">For a private 1- or 2-hour charter (same tour, your group only) or luxury trips (tailored itineraries, catering, celebrations, etc.) — <Link href="/tours/custom" className="text-alpine font-medium underline hover:text-alpine-light">see luxury trips</Link>.</p>
      <div className="prose-inline mt-10 space-y-4 text-gray-700">
        <p>Sightings of specific wildlife (e.g. puffins) are not guaranteed and depend on season and conditions. Tours are weather-dependent; see our FAQ and Terms for cancellation and meeting point details.</p>
      </div>
      <p className="mt-8">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
