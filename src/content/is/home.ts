/**
 * Icelandic homepage copy and tour cards — edit this file to change the `/is/` page text.
 * Image paths live here too; hero and card galleries use the same files as the English site.
 */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isHomeMetadata: Metadata = {
  title: 'RIB-bátafærðir — Vestmannaeyjar',
  description:
    'Kannaðu Vestmannaeyjar í RIB-bát. Sjávarhellar, klettar og fuglalíf. 1 og 2 klst. ferðir, einkaferðir og sérferðir. Bókaðu ævintýrið maí–október.',
  openGraph: {
    title: 'Island Adventures | RIB-bátafærðir Vestmannaeyjar',
    description:
      'RIB-bátafærðir frá Vestmannaeyjum: hellar, klettar og fuglalíf. Bókaðu 1 klst. á netinu; 2 klst., einka- og sérferðir með fyrirspurn.',
    locale: 'is_IS',
  },
};

export const isHomeHeroImages = [
  {
    src: '/images/hero.jpg',
    alt: 'RIB-bátar við Vestmannaeyjar',
    backgroundPosition: 'center 72%',
  },
  { src: '/images/hero2.jpg', alt: 'RIB-bátar við Vestmannaeyjar' },
  { src: '/images/hero3.jpg', alt: 'RIB-bátar við Vestmannaeyjar' },
] as const;

export const isHomeTourCards = [
  {
    slug: IS.tours.oneHour,
    title: '1 klukkustundar RIB-ferð',
    description:
      'Stutt en stórbrotin ferð meðfram ströndinni: hellar, klettar og fuglalíf. Tilvalin fyrsta kynning við eyjarnar.',
    duration: '1 klst.',
    imageSrcs: ['/images/tour-1h.jpg'],
    imageAlt: 'RIB-bátur á sjó við Vestmannaeyjar',
    fromPrice: '15.000 kr. fullorðinn, 9.000 kr. barn',
    pricePrefix: 'Frá ',
    detailsLabel: 'Nánar',
    ctaLabel: 'Bóka',
  },
  {
    slug: IS.tours.twoHour,
    title: '2 klukkustunda RIB-ferð',
    description:
      'Ítarlegri skoðun: fleiri sjávarhellar, lengri strandsíða og meiri tími á sjónum. Vinsælasta valkosturinn.',
    duration: '2 klst.',
    imageSrcs: ['/images/tour-2h.jpg'],
    imageAlt: '2 klst. RIB-ferð meðfram klettum Vestmannaeyja',
    fromPrice: '22.000 kr. fullorðinn, 12.000 kr. barn',
    pricePrefix: 'Frá ',
    detailsLabel: 'Nánar',
    ctaLabel: 'Óska eftir 2 klst. ferð',
    ctaHref: IS.hashCustom,
  },
  {
    slug: IS.tours.private,
    title: 'Einkaferðir',
    description:
      'Sami 1 eða 2 klst. RIB-leiðangur og náttúrusýn og á áætlunarfórðum — aðeins fyrir þinn hóp. Þú velur tímann. Einungis með fyrirvara.',
    duration: '1 eða 2 klst.',
    imageSrcs: ['/images/tour-private.jpg'],
    imageAlt: 'Einka RIB-leiðangur Vestmannaeyjar',
    fromPrice: 'Samkvæmt fyrirspurn',
    detailsLabel: 'Nánar',
    ctaLabel: 'Hafa samband',
    ctaHref: IS.contactCustom,
  },
  {
    slug: IS.tours.custom,
    title: 'Sérferðir',
    description:
      'Lúxusferðir með veitingum, mögnuð brúðkaupsferð eða einmana/partý, lengri ferðir eða sérsniðnar leiðir — við lögum að þínum óskum. Ólíkt einkaferðum (sami 1/2 klst. ferð, bara þinn hópur) eru sérferðir hannaðar kringum þig. Hafðu samband.',
    duration: 'Eftir samkomulagi',
    imageSrcs: ['/images/tour-custom.jpg'],
    imageAlt: 'Sérútbúin RIB-ferð Vestmannaeyjar',
    fromPrice: 'Samkvæmt fyrirspurn',
    detailsLabel: 'Nánar',
    ctaLabel: 'Óska eftir sérferð',
    ctaHref: `${IS.tours.custom}#request`,
  },
];

export const isHomeCopy = {
  heroAriaLabel: 'Velkomin',
  heroTitle: 'RIB-bátafærðir frá Vestmannaeyjum',
  heroSubtitle:
    'Sjávarhellar, klettar og fuglalíf. 1 og 2 klukkustunda ferðir, einkaferðir og sérferðir. Maí–október.',
  heroCtaBook: 'Athugaðu lausa tíma',
  heroCtaCustom: 'Sérferðir',

  toursHeading: 'Veldu ferðina þína',
  toursIntro:
    'Bókaðu 1 klst. ferðina á netinu hér að neðan. Fyrir 2 klst. ferðir (og dagsetningar í júlí–september) tökum við nú fyrirspurnir — notaðu eyðublaðið.',

  bookHeading: 'Bóka núna',
  bookP1:
    'Netbókun er opin fyrir 1 klst. ferðir í maí og júní aðeins að svo stöddu. Veldu dagsetningu hér að neðan til að sjá rauntíma framboð og bóka öruggt í gegnum Bókun.',
  bookP2BeforeMailto: 'Við bætum við dögum í júlí, ágúst og september fljótlega. Fyrir 2 klst. ferðir, einkaferðir eða sérferðir, vinsamlegast ',
  bookP2MailtoText: 'hafðu samband',
  bookP2AfterMailto: '.',
  bookCalloutBefore: 'Viltu ',
  bookCalloutStrong1: '2 klst. ferð',
  bookCalloutMiddle: ' eða dagsetningu í ',
  bookCalloutStrong2: 'júlí–september',
  bookCalloutAfter: '? ',
  bookCalloutLink: 'Hafðu samband',
  bookCalloutEnd: ' — við hjálpum þér.',
  bookCalloutHref: IS.contactCustom,
  noscriptBook: 'Virkjaðu JavaScript í vafranum til að bóka.',
  bookFooterBefore: 'Áhugi á einkaferð eða sérferð? ',
  bookFooterCustomLink: 'Óska eftir sérferð',
  bookFooterMiddle: ' eða ',
  bookFooterContactLink: 'hafðu samband',
  bookFooterAfter: ' — við seljum þær ekki á netinu, aðeins með beinu sambandi.',

  highlightsHeading: 'Þetta sjáið þið',
  highlightsIntro:
    'Sjávarhellar, mikilfenglegir klettar og fuglalíf. Óákveðnar skoðanir á tilteknum tegundum (t.d. lunda) eru ekki tryggðar og ráðast af árstíð og veðurskilyrðum.',
  highlight1Title: 'Sjávarhellar og klettar',
  highlight1Body: 'Kannaðu strandmyndanir og skjólsæl vík við eyjarnar.',
  highlight2Title: 'Villt dýralíf',
  highlight2Body: 'Sjófuglar og sjávardýr sjást oft; tegundir breytast eftir árstíðum.',
  highlight3Title: 'Vestmannaeyjar',
  highlight3Body: 'Stórkostleg útsýni yfir eyjaklasann af sjónum.',

  safetyHeading: 'Öryggi og bakpoki',
  safetyProvidedTitle: 'Útbúnaður frá okkur',
  safetyProvidedBody: 'Við útbúum þér flothressingu og lífvörð (og annan viðeigandi öryggisbúnað).',
  safetyWearTitle: 'Klæðnaður',
  safetyWearBody: 'Komdu í hlýjum og þægilegum fatnaði, hötti, vettlingum og þægilegum skóm.',
  safetyLegalBefore: 'Ferðir eru háðar veðri og sjóástandi. Sjá ',
  safetyFaqLink: 'algengar spurningar',
  safetyLegalMiddle: ' og ',
  safetyTermsLink: 'skilmála og afbakanir',
  safetyLegalAfter: ' fyrir frekari upplýsingar og fundarstað.',

  guidesHeading: 'Leiðsögumenn þínir',
  guidesBody:
    'Leiðsögumenn okkar eru fróðir, gestrisnir og öryggisöruggir. Þeir segja skemmtilegar sögur og gefa raunverulega innsýn í heim eyjanna. Skipstjórarnir hafa margra ára reynslu og viðeigandi réttindi til að tryggja bæði minnisstæða og örugga ferð.',

  faqTeaserHeading: 'Spurningar?',
  faqTeaserSub: 'Veður, búnaður, fundarstaður, aldurstakmarkanir og fleira.',
  faqTeaserCta: 'Skoða algengar spurningar',

  contactHeading: 'Hafa samband',
  contactIntroBefore:
    'Sendu okkur tölvupóst hvenær sem er: ',
  contactIntroAfter:
    '. Fyrir sérferðir — lúxus með veitingum, mögnuð brúðkaupsferð eða einmana/partý eða eitthvað annað — notaðu eyðublaðið hér að neðan.',

  meetingHeading: 'Fundarstaður og kort',
  meetingBody:
    'Básaskersbryggja 6, 900 Vestmannaeyjar. Komdu að minnsta kosti 15 mínútum fyrir brottför.',
  iframeTitle: 'Fundarstaður Island Adventures — Básaskersbryggja 6, Vestmannaeyjar',
} as const;
