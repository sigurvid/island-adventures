import type { Metadata } from 'next';
import Link from 'next/link';
import { isFaqCopy, isFaqItems, isFaqMetadata } from '@/content/is/faq';
import { FaqJsonLd } from '@/components/JsonLd';
import { alternates, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = { ...isFaqMetadata, alternates: alternates('/faq/', true) };

export default function IcelandicFAQPage() {
  const c = isFaqCopy;
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <FaqJsonLd items={isFaqItems.map((i) => ({ q: i.q, a: i.a }))} id={`${SITE_URL}/is/faq/#faq`} />
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">{c.title}</h1>
      <p className="mt-2 text-gray-600">
        {c.introBefore}
        <Link href={c.introHref} className="text-alpine font-medium underline hover:text-alpine-light">
          {c.introLink}
        </Link>
        {c.introAfter}
      </p>
      <dl className="mt-10 space-y-8">
        {isFaqItems.map((item, i) => (
          <div key={i}>
            <dt className="text-lg font-semibold text-alpine-dark">{item.q}</dt>
            <dd className="mt-2 text-gray-700">{item.a}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/is/#book" className="btn-primary">
          {c.btnBook}
        </Link>
        <Link href="/is/contact/" className="btn-secondary">
          {c.btnContact}
        </Link>
        <Link href="/is/terms/" className="btn-secondary">
          {c.btnTerms}
        </Link>
      </div>
    </article>
  );
}
