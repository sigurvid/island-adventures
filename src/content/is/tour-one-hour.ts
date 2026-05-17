/** 1 klst. ferð — texti, myndir og lýsingar fyrir `/is/tours/one-hour/`. Breyttu hér. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isOneHourMetadata: Metadata = {
  title: '1 klst. RIB-ferð',
  description:
    '1 klukkustunda RIB-bátaför frá Vestmannaeyjum: sjávarhellar, klettar og fuglalíf. 15.000 kr. fullorðinn, 9.000 kr. barn. Bókaðu á netinu. Maí–október.',
  openGraph: {
    title: '1 klst. RIB-ferð | Island Adventures',
    description:
      '1 klukkustunda RIB-bátaför frá Vestmannaeyjum: sjávarhellar, klettar og fuglalíf. 15.000 kr. fullorðinn, 9.000 kr. barn.',
  },
};

export const isOneHourImages = [
  { src: '/images/tour-1h.jpg', alt: '1 klst. RIB-ferð Vestmannaeyjar' },
  { src: '/images/tour-1h2.jpg', alt: '1 klst. RIB-ferð Vestmannaeyjar' },
  { src: '/images/tour-1h3.jpg', alt: '1 klst. RIB-ferð Vestmannaeyjar' },
];

export const isOneHourCopy = {
  title: '1 klukkustunda RIB-ferð',
  priceLine: '15.000 kr. á fullorðinn · 9.000 kr. á barn',
  paragraphs: [
    'Farðu í stutta en magnaða skoðunarferð meðfram strandsíðu Heimaeyjar, þar sem eldstöðklettir, fallegir firðir og sjávarhellar sem sjórinn hefur undið að skapa óslítandi ljósmyndatökublikk rétt úr höfninni. Á leiðinni blasir vel við Elliðaey og litla kofann sem oft er kallaður „einmana húsið í heiminum“.',
    'Við körum einnig fram ein af þekktustu náttúrumerkjum Vestmannaeyja — Fílaklettinn, þá einstöku basaltskörpun sem líkist risavaxnum fíl sem lykur snorklum sínum í Atlantshafið. Athugið fugla yfir klettunum og ef okkur er gefist séust selir í sjónum. Ferðin er tilvalin fyrir þá sem vilja mikla náttúru á skemmri tíma.',
  ],
  ctaBook: 'Athugaðu lausa tíma og bókaðu',
  ctaBookHref: IS.hashBook,
  ctaSecondary: 'Sjá 2 klst. ferð',
  ctaSecondaryHref: IS.tours.twoHour,
  crossSellBefore:
    'Fyrir einka 1 eða 2 klst. skip leigu (sami ferð og á áætlun, aðeins þinn hópur) eða sérferðir (sérsniðnar leiðir, veitingar, mögnuð brúðkaupsferð eða einmana/partý o.fl.) — ',
  crossSellLink: 'sjá sérferðir',
  crossSellHref: IS.tours.custom,
  crossSellAfter: '.',
  disclaimerLead:
    'Óákveðnar skoðanir á tilteknu villtum dýrum (t.d. lunda) eru ekki tryggðar og ráðast af árstíð og aðstæðum. Ferðir eru háðar veðri; sjá ',
  disclaimerTrail: ' fyrir afbokanir og fundarstað.',
  disclaimerFaqHref: IS.faq,
  disclaimerTermsHref: IS.terms,
  disclaimerFaqLabel: 'algengar spurningar',
  disclaimerTermsLabel: 'skilmála',
  disclaimerBetween: ' og ',
  backHome: '← Til baka á forsíðu',
  backHref: IS.home,
};
