import Link from 'next/link';
import Image from 'next/image';
import { ImageCarousel } from '@/components/ImageCarousel';

export type TourCardProps = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  /** Single image path (use imageSrcs for multiple) */
  imageSrc?: string;
  /** Multiple image paths for carousel; takes precedence over imageSrc */
  imageSrcs?: string[];
  imageAlt: string;
  fromPrice?: string;
  ctaLabel?: string;
  /** If set, primary CTA goes here (e.g. /contact#custom for inquiry-only tours). Otherwise goes to /#book */
  ctaHref?: string;
};

export function TourCard({
  slug,
  title,
  description,
  duration,
  imageSrc,
  imageSrcs,
  imageAlt,
  fromPrice,
  ctaLabel = 'Book',
  ctaHref = '/#book',
}: TourCardProps) {
  const images = imageSrcs?.length
    ? imageSrcs.map((src) => ({ src, alt: imageAlt }))
    : imageSrc
      ? [{ src: imageSrc, alt: imageAlt }]
      : [];

  return (
    <article className="overflow-hidden rounded-xl border border-alpine/15 bg-white shadow-sm transition hover:shadow-md">
      <Link href={slug} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded-xl">
        <div className="relative aspect-[4/3] bg-gray-200">
          {images.length > 1 ? (
            <ImageCarousel
              images={images}
              intervalMs={10000}
              aspectClass="aspect-[4/3]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : images.length === 1 ? (
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : null}
          <span className="absolute top-3 left-3 z-10 rounded-full bg-alpine/90 px-3 py-1 text-xs font-medium text-white">
            {duration}
          </span>
        </div>
      </Link>
      <div className="p-4 sm:p-5">
        <h2 className="text-lg font-bold text-alpine-dark">
          <Link href={slug} className="hover:text-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine rounded">
            {title}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
        {fromPrice && (
          <p className="mt-2 text-sm font-semibold text-alpine">
            {fromPrice.startsWith('By ') ? fromPrice : `From ${fromPrice}`}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={ctaHref} className="btn-primary text-sm py-2 px-4">
            {ctaLabel}
          </Link>
          <Link href={slug} className="btn-secondary text-sm py-2 px-4">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
