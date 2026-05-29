'use client';

import { useState } from 'react';

const MAP_SRC =
  'https://www.google.com/maps?q=B%C3%A1saskersbryggja+6,+900+Vestmannaeyjar,+Iceland&z=16&output=embed';

/**
 * Click-to-load map. Shows a lightweight placeholder and only loads the Google
 * Maps iframe (and its JS) when the user asks for it — keeping Maps off the
 * initial page load.
 */
export function MapEmbed({
  title,
  label = 'Show map',
  address,
}: {
  title: string;
  label?: string;
  address?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-alpine/20">
      {loaded ? (
        <iframe
          title={title}
          src={MAP_SRC}
          width="100%"
          height="100%"
          className="min-h-[280px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`${label}: ${title}`}
          className="group flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 bg-alpine/5 transition hover:bg-alpine/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine"
        >
          <svg className="h-10 w-10 text-alpine" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {address && <span className="px-4 text-center text-sm text-alpine-dark">{address}</span>}
          <span className="rounded-lg bg-alpine px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-alpine-light">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
