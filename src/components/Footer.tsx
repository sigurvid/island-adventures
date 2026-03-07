import Link from 'next/link';

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
  licensingInfo: '[Icelandic Tourist Board day tour provider license ID / regulator info]',
};

export function Footer() {
  return (
    <footer className="border-t border-alpine/15 bg-alpine-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Island Adventures
            </h3>
            <p className="mt-2 text-sm text-white/80">
              RIB boat tours from Vestmannaeyjar (Westman Islands), Iceland. May–October.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="text-sm font-medium text-white underline hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                Book a tour
              </Link>
              <Link
                href="/tours/custom"
                className="text-sm font-medium text-white underline hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                Custom trips
              </Link>
              <a
                href="mailto:booking@islandadventures.is"
                className="text-sm font-medium text-white underline hover:text-white/90"
              >
                Email us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link href="/faq" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded">
                  Terms & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Company & Legal
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
              <span className="block pt-2 text-white/70">{legalPlaceholders.licensingInfo}</span>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Island Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
