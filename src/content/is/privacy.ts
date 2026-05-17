/** Icelandic privacy policy — edit this file only. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isPrivacyMetadata: Metadata = {
  title: 'Persónuverndarstefna',
  description:
    'Persónuverndarstefna Island Adventures. Hvernig við söfnum, notum og verndum gögn þín.',
};

export const isPrivacyCopy = {
  title: 'Persónuverndarstefna',
  lastUpdated: 'Síðast uppfært: [DATE]',
  backHome: '← Til baka á forsíðu',
  backHref: IS.home,
  sections: [
    {
      heading: '1. Ábyrgðaraðili',
      body:
        'Eyjasund ehf, Básaskersbryggja 6, info@islandadventures.is, sími 865 5700. Kennitala 661021-1520.',
    },
    {
      heading: '2. Hvað við safnum',
      body:
        'Nafn, netfang, sími og bókunarupplýsingar þegar þú bókar eða hafar sambands; IP og einfaldar notkunarmælingar ef greining er virk.',
    },
    {
      heading: '3. Tilgangur',
      body:
        'Að vinna úr bókunum, svara fyrirspurnum, senda staðfestinar og nauðsynleg eftirfylgni; með samþykki, greiningu til að bæta vefinn.',
    },
    {
      heading: '4. Réttlæti för vinnslu',
      body:
        'Samningur vegna bókana; samþykki fyrir markaðs-/greiningarviðvikum þar sem við á; lögmætur hagsmunur við að svara fyrirspurnum.',
    },
    {
      heading: '5. Geymslutími',
      body:
        'Við geymum gögn þar til þú biður um eyðingu eða í allt að eitt viðskiptaár frá síðustu samskiptum við okkur.',
    },
    {
      heading: '6. Miðlun',
      body: 'Bókunargögn eru miðluð til Bókunar (Bókun); við seljum ekki gögn.',
    },
    {
      heading: '7. Réttindi þín',
      body:
        'Réttur til aðgangs, leiðréttingar, eyðingar, takmarkunar, flytjandi og andmæla; kvörtun til Persónuverndar eða viðeigandi eftirlitsaðila.',
    },
    {
      heading: '8. Vafrakökur',
      body:
        'Við notum nauðsynlegar vafrakökur; ef greining er virk er það tilgreint í kökuborða og þú getur dregið samþykki þitt til baka.',
    },
    {
      heading: '9. Breytingar',
      body:
        'Við getum uppfært þessa stefnu; dagsetning „síðast uppfært“ verður uppfærð. Áframhaldandi notkun eftir breytingar telst samþykki.',
    },
  ] as const,
};
