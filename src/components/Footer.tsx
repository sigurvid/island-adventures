 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * Company & Legal block — fill in before launch.
 * All values are placeholders and must be replaced with real data.
 */
const legalPlaceholders = {
  legalCompanyName: 'Eyjasund EHF - Island Adventures',
  legalAddress: 'Básaskersbryggja 6, 900 Vestmannaeyjar, Iceland',
  kennitala: '661021-1520',
  vatNumber: '159911',
  email: 'booking@islandadventures.is',
  phone: '+354 865 5700',
  licensingInfo: 'Ferdamálastofa — Authorized Day Tour Provider (Licence 2026-045)',
  dayTourProvidersListUrl:
    'https://www.ferdamalastofa.is/en/licences-legislation/valid-licences/list-of-day-tour-providers',
};

export function Footer() {
  const pathname = usePathname();
  const isIS = pathname?.startsWith('/is');
  const p = (href: string) => (isIS ? `/is${href === '/' ? '' : href}` : href);

  return (
    <footer className="border-t border-alpine/15 bg-alpine-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Island Adventures
            </h3>
            <p className="mt-2 text-sm text-white/80">
              {isIS
                ? 'RIB-bátaferðir frá Vestmannaeyjum. Maí–október.'
                : 'RIB boat tours from Vestmannaeyjar (Westman Islands), Iceland. May–October.'}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href={isIS ? '/is#book' : '/#book'}
                className="text-sm font-medium text-white underline hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                {isIS ? 'Bóka ferð' : 'Book a tour'}
              </Link>
              <Link
                href={p('/tours/custom')}
                className="text-sm font-medium text-white underline hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                {isIS ? 'Sérferðir' : 'Luxury trips'}
              </Link>
              <a
                href="mailto:booking@islandadventures.is"
                className="text-sm font-medium text-white underline hover:text-white/90"
              >
                {isIS ? 'Senda tölvupóst' : 'Email us'}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {isIS ? 'Flýtileiðir' : 'Quick links'}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link href={p('/faq')} className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  {isIS ? 'Algengar spurningar' : 'FAQ'}
                </Link>
              </li>
              <li>
                <Link href={p('/contact')} className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  {isIS ? 'Hafa samband' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link href={p('/privacy')} className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  {isIS ? 'Persónuvernd' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={p('/terms')} className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  {isIS ? 'Skilmálar & afbókanir' : 'Terms & Cancellation'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {isIS ? 'Fyrirtæki & löglegt' : 'Company & Legal'}
            </h3>
            <address className="mt-4 space-y-1 text-sm text-white/80 not-italic">
              <span className="block font-medium text-white/90">{legalPlaceholders.legalCompanyName}</span>
              <span className="block">{legalPlaceholders.legalAddress}</span>
              <span className="block">Kennitala: {legalPlaceholders.kennitala}</span>
              <span className="block">VAT: {legalPlaceholders.vatNumber}</span>
              <a href={`mailto:${legalPlaceholders.email}`} className="block hover:text-white">
                {legalPlaceholders.email}
              </a>
              <a href={`tel:${legalPlaceholders.phone.replace(/\s/g, '')}`} className="block hover:text-white">
                {legalPlaceholders.phone}
              </a>
              <div className="pt-3">
                <a
                  href={legalPlaceholders.dayTourProvidersListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Valid day tour provider licences — Ferðamálastofa (opens in new tab)"
                >
                  <Image
                    src="/images/tourist-board-licence-2026-045.png"
                    alt="Ferdamálastofa — Authorized Day Tour Provider licence badge (2026-045)"
                    width={260}
                    height={260}
                    className="h-auto w-[180px] rounded-lg bg-white p-2"
                  />
                </a>
              </div>
              <span className="block pt-2 text-white/70">{legalPlaceholders.licensingInfo}</span>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Island Adventures. {isIS ? 'Öll réttindi áskilin.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
