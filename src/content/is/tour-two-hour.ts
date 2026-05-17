/** 2 klst. ferð — texti og myndir fyrir `/is/tours/two-hour/`. Breyttu hér. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isTwoHourMetadata: Metadata = {
  title: '2 klst. RIB-ferð',
  description:
    '2 klukkustunda RIB-bátaför frá Vestmannaeyjum: meiri sjávarhellar, lengri strandsíða og fuglalíf. 22.000 kr. fullorðinn, 12.000 kr. barn. Maí–október.',
  openGraph: {
    title: '2 klst. RIB-ferð | Island Adventures',
    description:
      '2 klukkustunda RIB-bátaför frá Vestmannaeyjar: meiri hellar og strandsíða. 22.000 kr. fullorðinn, 12.000 kr. barn.',
  },
};

export const isTwoHourImages = [
  { src: '/images/tour-2h.jpg', alt: '2 klst. RIB-ferð Vestmannaeyjar' },
  { src: '/images/tour-2h2.jpg', alt: '2 klst. RIB-ferð Vestmannaeyjar' },
];

export const isTwoHourCopy = {
  title: '2 klukkustunda RIB-ferð',
  priceLine: '22.000 kr. á fullorðinn · 12.000 kr. á barn',
  paragraphs: [
    'Þetta er „fulla upplifunin“ í Vestmannaeyjum. Á 2 klst. kringluleiðangri förum við allan hringinn um Heimaey og skoðum stórbrotnustu sjávarhellana, brattar klettalínur og eldstaðstrandlengjuna þar sem Atlantshafsgolufar hafa mótað landslagið í þúsundir ára.',
    'Í góðu skilyrðum förum við enn lengra suður að Súlnaskeri, einu meginstórmerkjunum við eyjarnar, og — ef aðstæður leyfa — út að Surtsey, hinu fræga unga eldfjalli sem myndaðist á sextíunda áratugnum. Ekki má ganga í land á Surtsey en útsýni af sjó er sjaldgæfur og minnisstæður viðburður.',
    'Búist við miklum ljósmyndatökum, fjölbreyttu fuglalífi og tilfinningu fyrir afli Norður-Atlantshafsins — ferðin er fyrir þá sem vilja „vow“-útgáfuna af Vestmannaeyjum.',
  ],
  ctaPrimary: 'Óska eftir 2 klst. ferð',
  ctaPrimaryHref: IS.hashCustom,
  ctaSecondary: 'Sjá 1 klst. ferð',
  ctaSecondaryHref: IS.tours.oneHour,
  formHint:
    'Til að bóka 2 klst. ferð núna skaltu nota fyrirspurnareyðublaðið neðst á forsíðu. Þar getur þú líka óskað eftir einkaskipi og sérferðum (sérsniðnar leiðir, veitingar, mögnuð brúðkaupsferð eða einmana/partý o.fl.). ',
  formHintLink: 'Fara í eyðublað',
  formHintHref: IS.hashCustom,
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
