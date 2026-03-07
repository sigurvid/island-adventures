const SITE_URL = '[YOUR_SITE_URL]'; // e.g. https://www.islandadventures.is

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Island Adventures',
    description: 'RIB boat tours from Vestmannaeyjar (Westman Islands), Iceland. 1-hour and 2-hour tours, private charters and custom trips. May–October.',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vestmannaeyjar',
      addressCountry: 'IS',
      streetAddress: 'Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 63.4427,
      longitude: -20.2734,
    },
    telephone: '[+354 XXX XXXX]',
    email: 'booking@islandadventures.is',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
      validFrom: '2025-05-01',
      validThrough: '2025-10-31',
    },
    priceRange: '9,000 ISK – 22,000 ISK',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type TourJsonLdItem = {
  name: string;
  description: string;
  url: string;
  duration?: string;
};

const TOURS: TourJsonLdItem[] = [
  { name: '1-hour RIB tour', description: 'Coastal RIB tour: cliffs, caves and birdlife.', url: `${SITE_URL}/tours/one-hour`, duration: 'PT1H' },
  { name: '2-hour RIB tour', description: 'Extended RIB tour with more sea caves and coastline.', url: `${SITE_URL}/tours/two-hour`, duration: 'PT2H' },
  { name: 'Private RIB charter', description: 'Same 1-hour or 2-hour RIB tour as scheduled trips — just for your group.', url: `${SITE_URL}/tours/private`, duration: 'PT1H' },
  { name: 'Custom trips', description: 'Tailored RIB experiences: luxury with catering, hen/stag parties, longer or custom itineraries.', url: `${SITE_URL}/tours/custom` },
];

export function TourJsonLd() {
  const items = TOURS.map((tour) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.description,
    url: tour.url,
    ...(tour.duration && { duration: tour.duration }),
  }));

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
