'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'island-adventures-cookie-consent';

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === 'accepted' || stored === 'declined' ? true : false);
    } catch {
      setAccepted(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // ignore
    }
    setAccepted(true);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {
      // ignore
    }
    setAccepted(true);
  };

  if (!mounted || accepted !== false) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-20 left-4 right-4 z-40 max-w-lg rounded-xl border border-alpine/20 bg-white p-4 shadow-xl md:left-6 md:bottom-24"
    >
      <p className="text-sm text-gray-700">
        We use cookies only when you enable analytics. By continuing you accept our{' '}
        <Link href="/privacy" className="font-medium text-alpine underline hover:text-alpine-light">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="btn-primary text-sm py-2 px-4"
          aria-label="Accept cookies"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={decline}
          className="btn-secondary text-sm py-2 px-4"
          aria-label="Decline cookies"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
