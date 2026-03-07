import Link from 'next/link';
import { TourCard } from '@/components/TourCard';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CustomTripForm } from '@/components/CustomTripForm';
import { LocalBusinessJsonLd, TourJsonLd } from '@/components/JsonLd';

/** Hero images: add or remove paths to change the hero carousel. */
const HERO_IMAGES: { src: string; alt: string }[] = [
  { src: '/images/hero.jpg', alt: 'RIB boat tours Vestmannaeyjar' },
  { src: '/images/hero2.jpg', alt: 'RIB boat tours Vestmannaeyjar' },
  { src: '/images/hero3.jpg', alt: 'RIB boat tours Vestmannaeyjar' },
];

const TOUR_CARDS = [
  {
    slug: '/tours/one-hour',
    title: '1-hour RIB tour',
    description:
      'A compact adventure along the coast: cliffs, caves and birdlife. Ideal for a first taste of the islands.',
    duration: '1 hour',
    imageSrcs: ['/images/tour-1h.jpg'],
    imageAlt: 'RIB boat on the water near Vestmannaeyjar',
    fromPrice: '15,000 ISK adult, 9,000 ISK child',
    ctaLabel: 'Book',
  },
  {
    slug: '/tours/two-hour',
    title: '2-hour RIB tour',
    description:
      'Deeper exploration: more sea caves, longer coastline and more time on the water. Our most popular option.',
    duration: '2 hours',
    imageSrcs: ['/images/tour-2h.jpg'],
    imageAlt: '2-hour RIB tour along Westman Islands cliffs',
    fromPrice: '22,000 ISK adult, 12,000 ISK child',
    ctaLabel: 'Book',
  },
  {
    slug: '/tours/private',
    title: 'Private charters',
    description:
      'The same 1-hour or 2-hour RIB tours as our scheduled trips — just for your group only. Same sea caves, cliffs and wildlife; you choose the time. Available by direct inquiry only.',
    duration: '1h or 2h',
    imageSrcs: ['/images/tour-private.jpg'],
    imageAlt: 'Private RIB charter Vestmannaeyjar',
    fromPrice: 'By inquiry',
    ctaLabel: 'Contact us',
    ctaHref: '/contact#custom',
  },
  {
    slug: '/tours/custom',
    title: 'Custom trips',
    description:
      'Whatever you have in mind: luxury trips with catering, hen and stag parties, longer or tailored itineraries — we can cater to it all. Unlike private charters (same 1h/2h tour, your group only), custom trips are built around you. Contact us to plan something unique.',
    duration: 'On request',
    imageSrcs: ['/images/tour-custom.jpg'],
    imageAlt: 'Custom RIB trip Westman Islands',
    ctaLabel: 'Request a custom trip',
    ctaHref: '/tours/custom#request',
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <TourJsonLd />

      {/* 1) Hero */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end bg-alpine-dark text-white"
        aria-label="Welcome"
      >
        <ImageCarousel images={HERO_IMAGES} variant="hero" intervalMs={10000} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            RIB boat tours from the Westman Islands
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Sea caves, cliffs and wildlife. 1-hour and 2-hour tours, private charters and custom trips. May–October.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/#book" className="btn-primary bg-white text-alpine hover:bg-white/90">
              Check availability
            </Link>
            <Link href="/tours/custom" className="btn-secondary border-white text-white hover:bg-white hover:text-alpine">
              Custom trips
            </Link>
          </div>
        </div>
      </section>

      {/* 2) Tour cards */}
      <section id="tours" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">Choose your tour</h2>
          <p className="mb-8 text-gray-600">Book our 1-hour or 2-hour tours online below. Private charters and custom trips are available by contacting us directly — not sold on this site or elsewhere online.</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TOUR_CARDS.map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 3) Bókun booking area */}
      <section id="book" className="border-t border-alpine/10 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">Book now</h2>
          <p className="mb-4 text-gray-600">
            Online booking is open for May and June 1-hour tours only at this time. Choose a date below to see live availability and book securely through Bókun.
          </p>
          <p className="mb-4 text-gray-600">
            We’ll add July, August, and September dates shortly. For 2h trips, private charters or custom trips, please <a href="mailto:Booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">contact us</a>.
          </p>
          <p className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Want a <strong>2-hour tour</strong> or a date in <strong>July–September</strong>? <Link href="/contact#custom" className="font-medium underline hover:text-alpine">Contact us</Link> — we’ll get you sorted.
          </p>
          <div className="rounded-xl border border-alpine/20 bg-white p-4 shadow-sm sm:p-6">
            <div
              className="bokunWidget"
              data-src="https://widgets.bokun.io/online-sales/ce638209-9fde-496b-95b4-c57690eb5091/experience-calendar/1170125"
            />
            <noscript>Please enable JavaScript in your browser to book.</noscript>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Interested in a private charter or custom trip? <Link href="/tours/custom" className="text-alpine font-medium underline hover:text-alpine-light">Request a custom trip</Link> or <Link href="/contact" className="text-alpine font-medium underline hover:text-alpine-light">contact us</Link> — we don’t sell those online, only by direct contact.
          </p>
        </div>
      </section>

      {/* 4) Highlights */}
      <section id="highlights" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">What you’ll see</h2>
          <p className="mb-8 text-gray-600">
            Sea caves, dramatic cliffs and rich birdlife. Sightings of specific wildlife (e.g. puffins) are not guaranteed and depend on season and conditions.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">Sea caves & cliffs</h3>
              <p className="mt-2 text-sm text-gray-600">Explore coastal formations and sheltered bays around the islands.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">Wildlife</h3>
              <p className="mt-2 text-sm text-gray-600">Seabirds and marine life are often seen; exact species vary by season.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">Vestmannaeyjar</h3>
              <p className="mt-2 text-sm text-gray-600">Stunning views of the archipelago from the water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Safety & What to bring */}
      <section className="border-t border-alpine/10 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">Safety & what to bring</h2>
          <div className="prose-inline grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-alpine-dark">Provided</h3>
              <p className="mt-1 text-sm">We provide a float suit and a life vest (and any other required safety gear).</p>
            </div>
            <div>
              <h3 className="font-semibold text-alpine-dark">What to wear</h3>
              <p className="mt-1 text-sm">Please bring warm clothing, a hat, gloves, and comfortable shoes.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Tours are weather-dependent. See our <Link href="/faq" className="text-alpine font-medium underline">FAQ</Link> and <Link href="/terms" className="text-alpine font-medium underline">Terms & Cancellation</Link> for cancellation and meeting point details.
          </p>
          <div className="mt-8 rounded-xl border border-alpine/15 bg-gray-50 p-6">
            <h3 className="font-semibold text-alpine-dark">Your guides</h3>
            <p className="mt-2 text-gray-700">
              Our guides are knowledgeable, welcoming, and safety-focused. They’re great at bringing each tour to life with clear storytelling and genuine local insight. Our captains have years of experience and the qualifications to keep your trip both memorable and safe.
            </p>
          </div>
        </div>
      </section>

      {/* 6) FAQ teaser */}
      <section className="border-t border-alpine/10 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="section-heading">Questions?</h2>
          <p className="mt-2 text-gray-600">Weather, gear, meeting point, age limits and more.</p>
          <Link href="/faq" className="btn-primary mt-4">
            View FAQ
          </Link>
        </div>
      </section>

      {/* 8) Contact + map + custom form */}
      <section id="contact" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">Contact</h2>
          <p className="mb-8 text-gray-600">
            Email us anytime: <a href="mailto:booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">booking@islandadventures.is</a>. For custom trips — luxury trips with catering, hen and stag parties, or anything in between — use the form below.
          </p>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-alpine-dark">Meeting point & map</h3>
              <p className="mt-1 text-sm text-gray-600">Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland. Please arrive at least 15 minutes before departure.</p>
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
            </div>
            <div id="custom">
              <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
