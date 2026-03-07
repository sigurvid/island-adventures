'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#tours', label: 'Tours' },
  { href: '/#book', label: 'Book' },
  { href: '/#highlights', label: 'Highlights' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-alpine/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300 ${
        scrolled ? 'md:py-2' : 'md:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-0">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded"
          aria-label="Island Adventures home"
        >
          <Image
            src="/logo.png"
            alt="Island Adventures — RIB boat tours Vestmannaeyjar"
            width={160}
            height={64}
            className={`w-auto object-contain transition-all duration-300 h-10 sm:h-12 md:h-14 ${
              scrolled ? 'md:h-10' : 'md:h-14'
            }`}
            style={{ background: 'transparent' }}
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium text-alpine-dark hover:text-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded transition-all duration-300 ${
                scrolled ? 'text-sm' : 'text-base'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#book"
            className={`btn-primary transition-all duration-300 ${scrolled ? 'text-sm py-2 px-4' : 'text-base py-2.5 px-5'}`}
          >
            Book Now
          </Link>
          <Link
            href="/tours/custom"
            className={`font-medium text-alpine-dark hover:text-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded transition-all duration-300 ${
              scrolled ? 'text-sm' : 'text-base'
            }`}
          >
            Custom Tours
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link href="/#book" className="btn-primary text-sm py-2 px-4">
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-alpine/20 text-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-alpine/10 bg-white ${menuOpen ? 'block' : 'hidden'}`}
        role="region"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-alpine-dark hover:bg-alpine/5 hover:text-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tours/custom"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-alpine-dark hover:bg-alpine/5 hover:text-alpine"
          >
            Custom Tours
          </Link>
        </nav>
      </div>
    </header>
  );
}
