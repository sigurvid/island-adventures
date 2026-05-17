/** Einkaferðir — texti og myndir fyrir `/is/tours/private/`. Breyttu hér. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isPrivateMetadata: Metadata = {
  title: 'Einka RIB-skip',
  description:
    'Sömu 1 og 2 klst. RIB-ferðir og á áætlun — aðeins fyrir þinn hóp. Sjávarhellar, klettar og fuglalíf frá Vestmannaeyjum. Samkvæmt fyrirspurn.',
  openGraph: {
    title: 'Einka RIB-skip | Island Adventures',
    description:
      'Sömu 1 og 2 klst. RIB-ferðir og á áætlun — aðeins fyrir þinn hóp. Vestmannaeyjar.',
  },
};

export const isPrivateImages = [{ src: '/images/tour-private.jpg', alt: 'Einka RIB-ferð Vestmannaeyjar' }];

export const isPrivateCopy = {
  title: 'Einkaferðir',
  lead:
    'Sömu 1 og 2 klst. RIB-ferðir og á áætlunarfórðum okkar — aðeins fyrir þinn hóp. Sami sjávarhellar, klettar og fuglalíf; þú velur tímann. Tilvalið fyrir fjölskyldur og litla hópa sem vilja bátinn í sér.',
  note: 'Einkaferðir eru ekki seldar á netinu. Við bjóðum þær aðeins þegar þú hafar beint sambands við okkur.',
  ctaPrimary: 'Hafðu samband til að panta einkaferð',
  ctaPrimaryHref: IS.contactCustom,
  ctaSecondary: 'Bóka 1 eða 2 klst. á áætlun',
  ctaSecondaryHref: IS.hashBook,
  disclaimerLead:
    'Óákveðnar skoðanir á tilteknu villtum dýrum eru ekki tryggðar. Ferðir eru háðar veðri; sjá ',
  disclaimerTrail: ' fyrir afbokanir og fundarstað.',
  disclaimerFaqHref: IS.faq,
  disclaimerTermsHref: IS.terms,
  disclaimerFaqLabel: 'algengar spurningar',
  disclaimerTermsLabel: 'skilmála',
  disclaimerBetween: ' og ',
  backHome: '← Til baka á forsíðu',
  backHref: IS.home,
};
