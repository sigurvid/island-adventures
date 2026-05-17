/** Sérferðir — texti og myndir fyrir `/is/tours/custom/`. Breyttu hér. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isCustomMetadata: Metadata = {
  title: 'Sérferðir',
  description:
    'Sérsniðnar RIB-upplifanir frá Vestmannaeyjum: lúxus með veitingum, mögnuð brúðkaupsferð eða einmana/partý, lengri eða sérsniðnar leiðir. Segðu okkur frá hugmyndum þínum.',
  openGraph: {
    title: 'Sérferðir | Island Adventures',
    description:
      'Sérsniðnar RIB-upplifanir: lúxus með veitingum, mögnuð brúðkaupsferð eða einmana/partý, lengri leiðir. Vestmannaeyjar.',
  },
};

export const isCustomImages = [{ src: '/images/tour-custom.jpg', alt: 'Sérútbúin RIB-ferð Vestmannaeyjar' }];

export const isCustomCopy = {
  title: 'Sérferðir',
  lead:
    'Hvað sem þér dettur í hug: lúxusferðir með veitingum, mögnuð brúðkaupsferð eða einmana/partý, lengri eða sérsniðnar leiðir — við getum séð um það allt. Ólíkt einkaferðum (sami 1/2 klst. ferð, bara þinn hópur) eru sérferðir hannaðar kringum þig. Segðu okkur hugmyndir og við hjálpum þér að skipulegja eitthvað einstakt.',
  body:
    'Frá sérstökum samkomunum með mat og drykk á sjónum yfir heildags skoðun í Vestmannaeyjum að sérsniðinni leið eftir áhuga — við vinnum með þér að skapa ferðina sem þú vilt. Engar tvær sérferðir eru eins.',
  ctaBook: 'Bóka 1 eða 2 klst. á áætlun',
  ctaBookHref: IS.hashBook,
  ctaPrivate: 'Einkaferðir (sami ferð, þinn hópur)',
  ctaPrivateHref: IS.tours.private,
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
