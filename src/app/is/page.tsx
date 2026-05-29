import Link from 'next/link';
import type { Metadata } from 'next';
import { TourCard } from '@/components/TourCard';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CustomTripForm } from '@/components/CustomTripForm';
import { customTripFormIs } from '@/content/is/custom-trip-form';
import {
  isHomeCopy,
  isHomeHeroImages,
  isHomeMetadata,
  isHomeTourCards,
} from '@/content/is/home';
import { LocalBusinessJsonLd, TourJsonLd } from '@/components/JsonLd';
import { BokunWidget } from '@/components/BokunWidget';
import { MapEmbed } from '@/components/MapEmbed';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { ...isHomeMetadata, alternates: alternates('/', true) };

export default function IcelandicHomePage() {
  const c = isHomeCopy;

  return (
    <>
      <LocalBusinessJsonLd />
      <TourJsonLd />
      <section
        className="relative flex min-h-[70vh] flex-col justify-end bg-alpine-dark text-white"
        aria-label={c.heroAriaLabel}
      >
        <ImageCarousel
          images={[...isHomeHeroImages]}
          variant="hero"
          intervalMs={10000}
          heroBackgroundPosition="center 40%"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_3px_14px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl">
            {c.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
            {c.heroSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/is/#book" className="btn-primary bg-white text-alpine hover:bg-white/90">
              {c.heroCtaBook}
            </Link>
            <Link
              href="/is/tours/custom/"
              className="btn-secondary border-white text-white hover:bg-white hover:text-alpine"
            >
              {c.heroCtaCustom}
            </Link>
          </div>
        </div>
      </section>

      <section id="tours" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">{c.toursHeading}</h2>
          <p className="mb-8 text-gray-600">{c.toursIntro}</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {isHomeTourCards.map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="border-t border-alpine/10 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">{c.bookHeading}</h2>
          <p className="mb-4 text-gray-600">{c.bookP1}</p>
          <p className="mb-4 text-gray-600">
            {c.bookP2BeforeMailto}
            <a href="mailto:booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">
              {c.bookP2MailtoText}
            </a>
            {c.bookP2AfterMailto}
          </p>
          <p className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {c.bookCalloutBefore}
            <strong>{c.bookCalloutStrong1}</strong>
            {c.bookCalloutMiddle}
            <strong>{c.bookCalloutStrong2}</strong>
            {c.bookCalloutAfter}
            <Link href={c.bookCalloutHref} className="font-medium underline hover:text-alpine">
              {c.bookCalloutLink}
            </Link>
            {c.bookCalloutEnd}
          </p>
          <BokunWidget noscriptText={c.noscriptBook} />
          <p className="mt-6 text-sm text-gray-500">
            {c.bookFooterBefore}
            <Link href="/is/tours/custom/" className="text-alpine font-medium underline hover:text-alpine-light">
              {c.bookFooterCustomLink}
            </Link>
            {c.bookFooterMiddle}
            <Link href="/is/contact/" className="text-alpine font-medium underline hover:text-alpine-light">
              {c.bookFooterContactLink}
            </Link>
            {c.bookFooterAfter}
          </p>
        </div>
      </section>

      <section id="highlights" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">{c.highlightsHeading}</h2>
          <p className="mb-8 text-gray-600">{c.highlightsIntro}</p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">{c.highlight1Title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.highlight1Body}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">{c.highlight2Title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.highlight2Body}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-alpine-dark">{c.highlight3Title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.highlight3Body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-alpine/10 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">{c.safetyHeading}</h2>
          <div className="prose-inline grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-alpine-dark">{c.safetyProvidedTitle}</h3>
              <p className="mt-1 text-sm">{c.safetyProvidedBody}</p>
            </div>
            <div>
              <h3 className="font-semibold text-alpine-dark">{c.safetyWearTitle}</h3>
              <p className="mt-1 text-sm">{c.safetyWearBody}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            {c.safetyLegalBefore}
            <Link href="/is/faq/" className="text-alpine font-medium underline">
              {c.safetyFaqLink}
            </Link>
            {c.safetyLegalMiddle}
            <Link href="/is/terms/" className="text-alpine font-medium underline">
              {c.safetyTermsLink}
            </Link>
            {c.safetyLegalAfter}
          </p>
          <div className="mt-8 rounded-xl border border-alpine/15 bg-gray-50 p-6">
            <h3 className="font-semibold text-alpine-dark">{c.guidesHeading}</h3>
            <p className="mt-2 text-gray-700">{c.guidesBody}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-alpine/10 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="section-heading">{c.faqTeaserHeading}</h2>
          <p className="mt-2 text-gray-600">{c.faqTeaserSub}</p>
          <Link href="/is/faq/" className="btn-primary mt-4">
            {c.faqTeaserCta}
          </Link>
        </div>
      </section>

      <section id="contact" className="border-t border-alpine/10 bg-gray-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-heading mb-2">{c.contactHeading}</h2>
          <p className="mb-8 text-gray-600">
            {c.contactIntroBefore}
            <a href="mailto:booking@islandadventures.is" className="text-alpine font-medium underline hover:text-alpine-light">
              booking@islandadventures.is
            </a>
            {c.contactIntroAfter}
          </p>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-alpine-dark">{c.meetingHeading}</h3>
              <p className="mt-1 text-sm text-gray-600">{c.meetingBody}</p>
              <MapEmbed title={c.iframeTitle} label="Sýna kort" address="Básaskersbryggja 6, 900 Vestmannaeyjar" />
            </div>
            <div id="custom">
              <CustomTripForm apiEndpoint="/api/custom-trip" fallbackEmail="booking@islandadventures.is" copy={customTripFormIs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
