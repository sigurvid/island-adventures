import type { Metadata } from 'next';
import Link from 'next/link';
import { alternates, og } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms & Cancellation Policy',
  description: 'Terms of service and cancellation policy for Island Adventures RIB boat tours.',
  alternates: alternates('/terms/'),
  openGraph: og('/terms/'),
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">Terms & Cancellation Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: 7 March 2026</p>

      <div className="prose-inline mt-8 space-y-6 text-gray-700">
        <p>
          <strong>1. Agreement</strong><br />
          By booking a tour with Eyjasund EHF – Island Adventures (“we”, “us”, “Island Adventures”), you agree to these terms and our Privacy Policy. Our RIB boat tours operate from Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland.
        </p>
        <p>
          <strong>2. Booking & payment</strong><br />
          A booking is confirmed when payment has been received. Prices are in Icelandic krónur (ISK) unless otherwise stated. The price includes the tour as described (e.g. 1-hour or 2-hour RIB tour), use of a float suit and life vest, and any safety equipment we provide. Any other items not listed are not included. We reserve the right to correct pricing errors.
        </p>
        <p>
          <strong>2a. Minimum group size (scheduled tours)</strong><br />
          Our scheduled 1-hour and 2-hour tours have a <strong>minimum of 4 persons</strong>. If the minimum is not met, we will cancel the tour and offer you a full refund or an alternative date (subject to availability), in line with our cancellation policy. Private charters and luxury trips are not subject to this minimum.
        </p>
        <p>
          <strong>3. Cancellation by you</strong><br />
          If you cancel at least <strong>1 week (7 days)</strong> before the scheduled departure time, you are entitled to a full refund. If you cancel between 1 week and <strong>72 hours</strong> before departure, we will refund <strong>50%</strong> of the tour price. Cancellations made with less than 72 hours before departure are <strong>non-refundable</strong>. All cancellations must be sent to us in writing (e.g. by email to booking@islandadventures.is). We recommend that you take out travel insurance to cover illness or other unforeseen circumstances that prevent you from travelling.
        </p>
        <p>
          <strong>4. Cancellation or changes by us (weather & safety)</strong><br />
          Tours are weather-dependent. We may cancel, postpone, or change a tour due to weather, sea conditions, or safety. The captain has the final decision on whether a tour goes ahead. If we cancel your tour, we will offer you a new date or a full refund. We will notify you by email and/or phone as soon as practicable. We are not liable for any other costs you may incur (e.g. travel or accommodation) if we cancel.
        </p>
        <p>
          <strong>5. No-shows and late arrival</strong><br />
          There is no refund for no-shows or if you arrive too late to join the departure. Please arrive at least 15 minutes before the scheduled departure time at Básaskersbryggja 6, 900 Vestmannaeyjar. If you miss the tour for any reason, the full tour price remains charged.
        </p>
        <p>
          <strong>6. Participation, age & health</strong><br />
          You must be able to follow safety instructions and sit securely in the boat. Minimum age is 6 years, and children must be able to reach the floor of the boat comfortably while seated. RIB tours can be bumpy and are not suitable for anyone who is pregnant or has recent or existing back or neck injuries. If you have a health condition that may be affected, please consult a doctor and contact us before booking. We may require you to sign a participation waiver at the meeting point before departure. We reserve the right to refuse participation if we reasonably believe it would be unsafe (e.g. intoxication or unsuitable fitness).
        </p>
        <p>
          <strong>7. Liability</strong><br />
          We carry appropriate insurance for our operations. Participation in our tours is at your own risk to the extent permitted by applicable law. We are not liable for loss or damage arising from circumstances beyond our control (e.g. weather, force majeure, or your failure to follow instructions). We are not liable for indirect or consequential loss. We strongly recommend that you have travel insurance, including for medical and cancellation cover.
        </p>
        <p>
          <strong>8. Complaints</strong><br />
          If you have a complaint, please contact us first at booking@islandadventures.is or at the address below. We will try to resolve the matter promptly. You may also contact the Icelandic Tourist Board or the relevant regulator if you are not satisfied with our response.
        </p>
        <p>
          <strong>9. Changes to these terms</strong><br />
          We may update these terms from time to time. The “Last updated” date at the top will be revised when we do. Your booking is governed by the terms in effect at the time you made the booking.
        </p>
      </div>

      <p className="mt-10 text-sm text-gray-600">
        <strong>Contact:</strong> Eyjasund EHF – Island Adventures, Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland. Email: booking@islandadventures.is.
      </p>

      <p className="mt-10">
        <Link href="/" className="text-alpine font-medium underline hover:text-alpine-light">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
