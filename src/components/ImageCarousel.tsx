'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export type CarouselImage = {
  src: string;
  alt: string;
  /** Hero only: overrides global `heroBackgroundPosition` for this slide (e.g. `center 72%` to show less sky). */
  backgroundPosition?: string;
};

/** Darkens only the lower part of the hero so the photo stays bright above the headline. */
function HeroBottomScrim() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2]"
      style={{
        background:
          'linear-gradient(to top, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.42) 18%, rgba(15, 23, 42, 0.14) 38%, transparent 52%, transparent 100%)',
      }}
      aria-hidden
    />
  );
}

type ImageCarouselProps = {
  images: CarouselImage[];
  /** Auto-advance interval in ms. 0 or undefined = no auto. Respects prefers-reduced-motion. */
  intervalMs?: number;
  className?: string;
  /** Next/Image sizes attribute for the visible slide */
  sizes?: string;
  /** Slide aspect ratio class (e.g. "aspect-[4/3]", "aspect-video"). Default "aspect-[4/3]" */
  aspectClass?: string;
  /** Optional: show as background-style hero (no Image component, use bg-cover divs). Use when images must fill viewport. */
  variant?: 'default' | 'hero';
  /** Background position for hero (e.g. `center 38%`). Tweak so boats/cliffs sit mostly above the bottom text band. */
  heroBackgroundPosition?: string;
};

export function ImageCarousel({
  images,
  intervalMs = 10000,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 1024px',
  aspectClass = 'aspect-[4/3]',
  variant = 'default',
  heroBackgroundPosition = 'center 38%',
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (images.length <= 1 || !intervalMs || reducedMotion) return;
    const id = setInterval(() => go(1), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, reducedMotion, go]);

  if (!images.length) return null;
  if (images.length === 1) {
    const img = images[0];
    if (variant === 'hero') {
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`} role="img" aria-label={img.alt}>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${img.src})`, backgroundPosition: img.backgroundPosition ?? heroBackgroundPosition }}
          />
          <HeroBottomScrim />
        </div>
      );
    }
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <Image src={img.src} alt={img.alt} fill className="object-cover object-center" sizes={sizes} priority />
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        role="region"
        aria-label="Hero gallery"
        aria-live="polite"
      >
        {images.map((img, i) => (
          <div
            key={img.src + i}
            className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundPosition: img.backgroundPosition ?? heroBackgroundPosition,
              opacity: i === index ? 1 : 0,
              zIndex: i === index ? 1 : 0,
            }}
            aria-hidden={i !== index}
          />
        ))}
        <HeroBottomScrim />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectClass} ${className}`}
      role="region"
      aria-label="Image gallery"
      aria-live="polite"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      }}
      tabIndex={0}
    >
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={img.src + i} className="relative h-full min-w-full shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes={sizes}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
