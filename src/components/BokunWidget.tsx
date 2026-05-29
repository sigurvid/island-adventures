'use client';

import Script from 'next/script';

const LOADER_SRC =
  'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=ce638209-9fde-496b-95b4-c57690eb5091';
const WIDGET_SRC =
  'https://widgets.bokun.io/online-sales/ce638209-9fde-496b-95b4-c57690eb5091/experience-calendar/1170125';

/**
 * Bókun booking calendar. The loader script is mounted ONLY on pages that use
 * this component (the two home pages) and loaded with `lazyOnload` so it stays
 * off the critical path — this is the main third-party JS on the site.
 * The reserved min-height limits layout shift (CLS) while the widget loads.
 */
export function BokunWidget({ noscriptText = 'Please enable JavaScript in your browser to book.' }: { noscriptText?: string }) {
  return (
    <div className="rounded-xl border border-alpine/20 bg-white p-4 shadow-sm sm:p-6">
      <Script src={LOADER_SRC} strategy="lazyOnload" />
      <div className="bokunWidget min-h-[640px]" data-src={WIDGET_SRC} />
      <noscript>{noscriptText}</noscript>
    </div>
  );
}
