import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import { alternates, og, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions: weather, gear, meeting point, age limits and health restrictions for Island Adventures RIB tours.',
  alternates: alternates('/faq/'),
  openGraph: og('/faq/'),
};

const FAQ_ITEMS = [
  {
    q: 'Is there a minimum number of people for a tour?',
    a: 'Our scheduled 1-hour and 2-hour tours have a minimum of 4 persons. If the minimum is not met, we will cancel the tour and offer you a full refund or an alternative date (subject to availability), in line with our cancellation policy. Private charters and luxury trips are not subject to this minimum.',
  },
  {
    q: 'What if the weather is bad?',
    a: 'Tours are weather-dependent. If we cancel due to weather or safety, we will offer you a new date or a full refund. The captain has the final say on whether the tour goes ahead. See our Terms & Cancellation for full details.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'If you cancel at least 1 week (7 days) before the trip, you get a full refund. If you cancel between 1 week and 72 hours before departure, we refund 50% of the tour price. Cancellations with less than 72 hours to go are non-refundable. Cancellations must be sent in writing (e.g. email to booking@islandadventures.is). We recommend travel insurance for illness or other unforeseen circumstances.',
  },
  {
    q: 'What if I miss the tour or arrive late?',
    a: 'There is no refund for no-shows or late arrival. Please arrive at least 15 minutes before departure. If you miss the tour, the full price remains charged.',
  },
  {
    q: 'What do you provide?',
    a: 'We provide a float suit and a life vest (and any other required safety gear). The tour price includes the trip as described and use of this equipment.',
  },
  {
    q: 'What should I wear?',
    a: 'Please bring warm, comfortable clothing, a hat, gloves, and comfortable shoes. Conditions on the water can be cold and changeable.',
  },
  {
    q: 'Where do we meet and when should we arrive?',
    a: 'We meet at Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland. Please arrive at least 15 minutes before the scheduled departure time.',
  },
  {
    q: 'Is there a minimum age?',
    a: 'Minimum age is 6 years. Children must be able to reach the floor of the boat comfortably while seated and follow safety instructions.',
  },
  {
    q: 'Are there health restrictions?',
    a: 'RIB tours can be bumpy. They are not suitable if you are pregnant or have recent or existing back or neck injuries. If you have a health condition that may be affected, please consult a doctor and contact us before booking.',
  },
  {
    q: 'What is your policy on alcohol consumption?',
    a: 'We reserve the right to refuse participation to anyone who is visibly intoxicated or unfit to take part safely.',
  },
  {
    q: 'Do I need to sign a waiver?',
    a: 'Yes. A participation waiver will be provided at the meeting point and must be signed before departure.',
  },
  {
    q: 'Are wildlife sightings guaranteed?',
    a: 'No. Sightings of specific species (e.g. puffins, whales) depend on season and conditions and are not guaranteed.',
  },
  {
    q: 'Do you recommend travel insurance?',
    a: 'Yes. We recommend travel insurance that includes medical and cancellation cover, in case of illness or other unforeseen circumstances.',
  },
];

export default function FAQPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <FaqJsonLd items={FAQ_ITEMS.map((i) => ({ q: i.q, a: i.a }))} id={`${SITE_URL}/faq/#faq`} />
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">FAQ</h1>
      <p className="mt-2 text-gray-600">
        Weather, gear, meeting point, age limits and more. Full details are in our{' '}
        <Link href="/terms" className="text-alpine font-medium underline hover:text-alpine-light">
          Terms & Cancellation Policy
        </Link>.
      </p>
      <dl className="mt-10 space-y-8">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <dt className="text-lg font-semibold text-alpine-dark">{item.q}</dt>
            <dd className="mt-2 text-gray-700">{item.a}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/#book" className="btn-primary">
          Book a tour
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact us
        </Link>
        <Link href="/terms" className="btn-secondary">
          Terms & Cancellation
        </Link>
      </div>
    </article>
  );
}
