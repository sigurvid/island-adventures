import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const PATHS = [
  '/',
  '/tours/one-hour/',
  '/tours/two-hour/',
  '/tours/private/',
  '/tours/custom/',
  '/faq/',
  '/contact/',
  '/terms/',
  '/privacy/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const p of PATHS) {
    const en = `${SITE_URL}${p}`;
    const is = p === '/' ? `${SITE_URL}/is/` : `${SITE_URL}/is${p}`;
    entries.push({
      url: en,
      lastModified: now,
      changeFrequency: p === '/' ? 'weekly' : 'monthly',
      priority: p === '/' ? 1 : 0.8,
      alternates: { languages: { en, is } },
    });
    entries.push({
      url: is,
      lastModified: now,
      changeFrequency: p === '/' ? 'weekly' : 'monthly',
      priority: p === '/' ? 0.9 : 0.7,
      alternates: { languages: { en, is } },
    });
  }
  return entries;
}
