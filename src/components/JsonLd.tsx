import { SITE_URL, business } from '@/lib/seo';

function Ld({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.street,
  addressLocality: business.locality,
  postalCode: business.postalCode,
  addressCountry: business.countryCode,
};

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness', 'TouristAttraction'],
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    legalName: business.legalName,
    description:
      'RIB boat tours from Vestmannaeyjar (Westman Islands), Iceland. 1-hour and 2-hour tours, private charters and luxury trips. May–October.',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/hero.jpg`,
    telephone: business.telephone,
    email: business.email,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    areaServed: { '@type': 'Place', name: 'Vestmannaeyjar (Westman Islands), Iceland' },
    availableLanguage: ['en', 'is'],
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
      `${business.street}, ${business.postalCode} ${business.locality}, ${business.countryName}`
    )}`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
      validFrom: business.seasonFrom,
      validThrough: business.seasonThrough,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: business.license,
    },
    priceRange: business.priceRange,
    currenciesAccepted: 'ISK',
    paymentAccepted: 'Cash, Credit Card',
  };
  return <Ld data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: business.name,
    description: 'RIB boat tours in Vestmannaeyjar (Westman Islands), Iceland',
    inLanguage: ['en', 'is'],
    publisher: { '@id': `${SITE_URL}/#business` },
  };
  return <Ld data={data} />;
}

type Offer = { name: string; price: string };
type TourItem = {
  slug: string;
  name: string;
  description: string;
  duration?: string;
  offers?: Offer[];
  image: string;
};

const TOURS: TourItem[] = [
  {
    slug: 'one-hour',
    name: '1-Hour RIB Boat Tour — Westman Islands',
    description:
      'A 1-hour RIB boat tour from Vestmannaeyjar past Heimaey’s volcanic cliffs, sea caves, Elephant Rock and birdlife. Float suit and life vest provided.',
    duration: 'PT1H',
    offers: [
      { name: 'Adult', price: '15000' },
      { name: 'Child', price: '9000' },
    ],
    image: `${SITE_URL}/images/tour-1h.jpg`,
  },
  {
    slug: 'two-hour',
    name: '2-Hour RIB Boat Tour — Westman Islands',
    description:
      'An extended 2-hour RIB boat tour with more sea caves and coastline around the Westman Islands archipelago. Float suit and life vest provided.',
    duration: 'PT2H',
    offers: [
      { name: 'Adult', price: '22000' },
      { name: 'Child', price: '12000' },
    ],
    image: `${SITE_URL}/images/tour-2h.jpg`,
  },
  {
    slug: 'private',
    name: 'Private RIB Charter — Westman Islands',
    description:
      'A private 1-hour or 2-hour RIB charter around the Westman Islands for your own group. Flexible route. By inquiry.',
    duration: 'PT1H',
    image: `${SITE_URL}/images/tour-private.jpg`,
  },
  {
    slug: 'custom',
    name: 'Luxury Bespoke RIB Trip — Westman Islands',
    description:
      'Tailored luxury RIB experiences around the Westman Islands: catering, celebrations and bespoke itineraries. By request.',
    image: `${SITE_URL}/images/tour-custom.jpg`,
  },
];

export function TourJsonLd() {
  const items = TOURS.map((tour) => {
    const offers = tour.offers
      ? tour.offers.map((o) => ({
          '@type': 'Offer',
          name: o.name,
          price: o.price,
          priceCurrency: 'ISK',
          availability: 'https://schema.org/InStock',
          validFrom: business.seasonFrom,
          validThrough: business.seasonThrough,
          url: `${SITE_URL}/tours/${tour.slug}/`,
        }))
      : {
          '@type': 'Offer',
          priceCurrency: 'ISK',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/tours/${tour.slug}/`,
          description: 'By inquiry — contact for a quote',
        };
    return {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      '@id': `${SITE_URL}/tours/${tour.slug}/#trip`,
      name: tour.name,
      description: tour.description,
      url: `${SITE_URL}/tours/${tour.slug}/`,
      image: tour.image,
      ...(tour.duration ? { duration: tour.duration } : {}),
      availableLanguage: ['en', 'is'],
      touristType: 'Adventure tourists',
      provider: { '@id': `${SITE_URL}/#business` },
      itinerary: { '@type': 'Place', name: 'Vestmannaeyjar (Westman Islands)', address: postalAddress },
      offers,
    };
  });
  return (
    <>
      {items.map((item, i) => (
        <Ld key={i} data={item} />
      ))}
    </>
  );
}

export function FaqJsonLd({ items, id }: { items: { q: string; a: string }[]; id?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(id ? { '@id': id } : {}),
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return <Ld data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return <Ld data={data} />;
}
