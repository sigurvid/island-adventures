import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { isOneHourCopy, isOneHourImages, isOneHourMetadata } from '@/content/is/tour-one-hour';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { ...isOneHourMetadata, alternates: alternates('/tours/one-hour/', true) };

export default function IcelandicOneHourTourPage() {
  const c = isOneHourCopy;
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="overflow-hidden rounded-xl bg-gray-200">
        <ImageCarousel
          images={isOneHourImages}
          intervalMs={10000}
          aspectClass="aspect-[2/1]"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold text-alpine-dark sm:text-4xl">{c.title}</h1>
      <p className="mt-2 font-semibold text-alpine">{c.priceLine}</p>
      <div className="mt-6 space-y-4 text-gray-700">
        {c.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href={c.ctaBookHref} className="btn-primary">
          {c.ctaBook}
        </Link>
        <Link href={c.ctaSecondaryHref} className="btn-secondary">
          {c.ctaSecondary}
        </Link>
      </div>
      <p className="mt-4 text-gray-600">
        {c.crossSellBefore}
        <Link href={c.crossSellHref} className="font-medium text-alpine underline hover:text-alpine-light">
          {c.crossSellLink}
        </Link>
        {c.crossSellAfter}
      </p>
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
