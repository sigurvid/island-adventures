'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export type CarouselImage = { src: string; alt: string };

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
};

export function ImageCarousel({
  images,
  intervalMs = 10000,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 1024px',
  aspectClass = 'aspect-[4/3]',
  variant = 'default',
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
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
          style={{ backgroundImage: `url(${img.src})` }}
          role="img"
          aria-label={img.alt}
        />
      );
    }
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={sizes} priority />
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        role="region"
        aria-label="Hero gallery"
      >
        {images.map((img, i) => (
          <div
            key={img.src + i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url(${img.src})`,
              opacity: i === index ? 1 : 0,
              zIndex: i === index ? 1 : 0,
            }}
            aria-hidden={i !== index}
          />
        ))}
        <div className="absolute inset-0 bg-gray-900/60 bg-blend-darken" aria-hidden />
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-alpine shadow hover:bg-white focus:outline focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-alpine shadow hover:bg-white focus:outline focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectClass} ${className}`}
      role="region"
      aria-label="Image gallery"
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
          <div key={img.src + i} className="relative h-full min-w-full flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes={sizes}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-alpine shadow hover:bg-white focus:outline focus:ring-2 focus:ring-alpine"
        aria-label="Previous image"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-alpine shadow hover:bg-white focus:outline focus:ring-2 focus:ring-alpine"
        aria-label="Next image"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-alpine' : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
