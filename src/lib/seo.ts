import type { Metadata } from 'next';

export const SITE_URL = 'https://www.islandadventures.is';

export const OG_IMAGE = {
  url: '/images/hero.jpg',
  width: 1200,
  height: 630,
  alt: 'RIB boat tour at the Westman Islands, Iceland',
};

/** OpenGraph block for a page: keeps the social image and sets the page URL. */
export function og(path: string) {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return { url: clean, images: [OG_IMAGE] };
}

export const business = {
  name: 'Island Adventures',
  legalName: 'Eyjasund EHF',
  telephone: '+354 865 5700',
  email: 'booking@islandadventures.is',
  street: 'Básaskersbryggja 6',
  locality: 'Vestmannaeyjar',
  postalCode: '900',
  countryCode: 'IS',
  countryName: 'Iceland',
  geo: { lat: 63.4385, lng: -20.2706 },
  seasonFrom: '2026-05-01',
  seasonThrough: '2026-10-31',
  license: 'Ferðamálastofa Authorized Day Tour Provider 2026-045',
  priceRange: '9,000 ISK – 22,000 ISK',
} as const;

/**
 * Build canonical + hreflang alternates for a page.
 * Pass the locale-agnostic path (e.g. "/faq/"). For Icelandic pages pass isIcelandic=true.
 * Trailing slashes are enforced to match next.config trailingSlash:true.
 */
export function alternates(path: string, isIcelandic = false): Metadata['alternates'] {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  const enUrl = clean;
  const isUrl = clean === '/' ? '/is/' : `/is${clean}`;
  const canonical = isIcelandic ? isUrl : enUrl;
  return {
    canonical,
    languages: {
      en: enUrl,
      is: isUrl,
      'x-default': enUrl,
    },
  };
}
