import type { Metadata } from 'next';
import Link from 'next/link';
import { isTermsCopy, isTermsMetadata, isTermsSections } from '@/content/is/terms';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { ...isTermsMetadata, alternates: alternates('/terms/', true) };

export default function IcelandicTermsPage() {
  const c = isTermsCopy;
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-alpine-dark sm:text-4xl">{c.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{c.lastUpdated}</p>

      <div className="prose-inline mt-8 space-y-6 text-gray-700">
        {isTermsSections.map((s) => (
          <p key={s.heading}>
            <strong>{s.heading}</strong>
            <br />
            {s.body}
          </p>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-600">{c.contactFooter}</p>

      <p className="mt-10">
        <Link href={c.backHref} className="text-alpine font-medium underline hover:text-alpine-light">
          {c.backHome}
        </Link>
      </p>
    </article>
  );
}
