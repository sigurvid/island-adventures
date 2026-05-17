/** Icelandic contact page — edit this file only. */
import type { Metadata } from 'next';
import { IS } from './paths';

export const isContactMetadata: Metadata = {
  title: 'Hafa samband',
  description:
    'Hafðu samband við Island Adventures vegna RIB-ferða, sérferða og fyrirspurna. Vestmannaeyjar.',
};

export const isContactCopy = {
  title: 'Hafa samband',
  introBefore:
    'Spurningar eða fyrirspurn um sérferðir? Við getum skipulagt lúxusferðir með veitingum, mögnuð brúðkaupsferð eða einmana/partý og fleira. Sendu tölvupóst á ',
  introAfter: ' eða notaðu eyðublaðið hér að neðan.',
  meetingHeading: 'Fundarstaður og kort',
  meetingBody:
    'Básaskersbryggja 6, 900 Vestmannaeyjar. Komdu að minnsta kosti 15 mínútum fyrir brottför.',
  iframeTitle: 'Fundarstaður Island Adventures — Básaskersbryggja 6, Vestmannaeyjar',
  backHome: '← Til baka á forsíðu',
  backHref: IS.home,
};
