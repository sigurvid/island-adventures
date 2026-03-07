'use client';

import Link from 'next/link';

export function StickyBookNow() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center md:left-auto md:right-6 md:bottom-6">
      <Link
        href="/#book"
        className="btn-primary shadow-lg ring-2 ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded-full px-6 py-3 text-sm font-bold sm:text-base"
        aria-label="Scroll to booking and check availability"
      >
        Book Now
      </Link>
    </div>
  );
}
