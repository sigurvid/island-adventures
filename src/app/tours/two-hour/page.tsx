import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { alternates, og } from '@/lib/seo';

export const metadata: Metadata = {
  title: '2-Hour RIB Tour',
  description:
    'Two-hour RIB boat tour from Vestmannaeyjar: more sea caves, longer coastline and wildlife. 22,000 ISK adult, 12,000 ISK child. Book online. May–October.',
  alternates: alternates('/tours/two-hour/'),
  openGraph: { ...og('/tours/two-hour/'), title: '2-Hour RIB Tour | Island Adventures', description: 'Two-hour RIB boat tour from Vestmannaeyjar: more sea caves and coastline. 22,000 ISK adult, 12,000 ISK child.' },
};

/** Add or remove image paths to change the tour page gallery. */
const IMAGES = [
  { src: '/images/tour-2h.jpg', alt: '2-hour RIB tour Vestmannaeyjar' },
  { src: '/images/tour-2h2.jpg', alt: '2-hour RIB tour Vestmannaeyjar' },
];

export default function TwoHourTourPage() {
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
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">2-hour RIB tour</h1>
      <p className="mt-2 text-alpine font-semibold">
        22,000 ISK per adult · 12,000 ISK per child
      </p>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          This is the full Westman Islands experience. On our 2-hour circle tour we take you all the way around Heimaey, exploring the island’s most spectacular sea caves, sheer cliffs, and rugged volcanic coast — where the ocean has carved and sculpted the landscape for thousands of years.
        </p>
        <p>
          In good conditions we’ll venture even farther south toward Súlnasker, one of the most striking skerries in the archipelago, and — conditions permitting — continue out toward Surtsey, the world-famous young volcanic island created in the 1960s. Surtsey is strictly protected and landing is not allowed, but viewing it from the sea is a rare and memorable sight.
        </p>
        <p>
          Expect epic photo opportunities, loads of birdlife, and a real sense of the power of the North Atlantic — this tour is made for travelers who want the “wow” version of Vestmannaeyjar.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/#custom" className="btn-primary">
          Request a 2-hour tour
        </Link>
        <Link href="/tours/one-hour" className="btn-secondary">
          See 1-hour tour
        </Link>
      </div>
      <p className="mt-4 text-gray-600">
        To book a 2-hour tour right now, please use the request form at the bottom of the homepage. You can also use it for private charters and luxury trips (tailored itineraries, catering, celebrations, etc.).
        {' '}
        <Link href="/#custom" className="text-alpine font-medium underline hover:text-alpine-light">
          Go to request form
        </Link>
        .
      </p>
      <div className="prose-inline mt-10 space-y-4 text-gray-700">
        <p>Sightings of specific wildlife are not guaranteed and depend on season and conditions. Tours are weather-dependent; see our FAQ and Terms for cancellation and meeting point details.</p>
      </div>
      <p className="mt-8">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
