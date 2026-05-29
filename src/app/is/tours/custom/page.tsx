import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CustomTripForm } from '@/components/CustomTripForm';
import { customTripFormIs } from '@/content/is/custom-trip-form';
import { isCustomCopy, isCustomImages, isCustomMetadata } from '@/content/is/tour-custom';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { ...isCustomMetadata, alternates: alternates('/tours/custom/', true) };

export default function IcelandicCustomTourPage() {
  const c = isCustomCopy;
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="overflow-hidden rounded-xl bg-gray-200">
        <ImageCarousel
          images={isCustomImages}
          intervalMs={10000}
          aspectClass="aspect-[2/1]"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">{c.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{c.lead}</p>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>{c.body}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href={c.ctaBookHref} className="btn-secondary">
          {c.ctaBook}
        </Link>
        <Link href={c.ctaPrivateHref} className="btn-secondary">
          {c.ctaPrivate}
        </Link>
      </div>

      <section id="request" className="mt-14 border-t border-alpine/10 pt-10">
        <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" copy={customTripFormIs} />
      </section>

      <div className="prose-inline mt-10 space-y-4 text-gray-700">
        <p>
          {c.disclaimerLead}
          <Link href={c.disclaimerFaqHref} className="font-medium text-alpine underline hover:text-alpine-light">
            {c.disclaimerFaqLabel}
          </Link>
          {c.disclaimerBetween}
          <Link href={c.disclaimerTermsHref} className="font-medium text-alpine underline hover:text-alpine-light">
            {c.disclaimerTermsLabel}
          </Link>
          {c.disclaimerTrail}
        </p>
      </div>
      <p className="mt-8">
        <Link href={c.backHref} className="font-medium text-alpine underline hover:text-alpine-light">
          {c.backHome}
        </Link>
      </p>
    </article>
  );
}
