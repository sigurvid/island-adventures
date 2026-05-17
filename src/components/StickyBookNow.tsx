'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function StickyBookNow() {
  const pathname = usePathname();
  const isIS = pathname?.startsWith('/is');
  const href = isIS ? '/is#book' : '/#book';
  const label = isIS ? 'Bóka núna' : 'Book Now';
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center md:left-auto md:right-6 md:bottom-6">
      <Link
        href={href}
        className="btn-primary shadow-lg ring-2 ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded-full px-6 py-3 text-sm font-bold sm:text-base"
        aria-label={isIS ? 'Fara í bókun og athuga lausa tíma' : 'Scroll to booking and check availability'}
      >
        {label}
      </Link>
    </div>
  );
}
