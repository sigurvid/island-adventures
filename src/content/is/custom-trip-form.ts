import type { CustomTripFormCopy } from '@/components/CustomTripForm';

/** Icelandic strings for the custom-trip request form — edit this file only. */
export const customTripFormIs: CustomTripFormCopy = {
  heading: 'Óska eftir sérferð',
  intro:
    'Segðu okkur frá dagsetningum, fjölda í hóp og því sem þú vilt sjá. Þú getur líka notað þetta eyðublað til að fyrirspurna um 2 klst. ferðir. Við svörum fljótt.',
  labels: {
    name: 'Nafn',
    email: 'Netfang',
    phone: 'Sími',
    preferredDate: 'Óskudagsetning',
    groupSize: 'Fjöldi í hóp',
    interests: 'Áhugamál (t.d. hellar, lundi, ljósmyndun)',
    notes: 'Athugasemdir',
  },
  placeholders: {
    phone: 't.d. 3541234567 eða +3541234567',
    groupSize: 't.d. 6 fullorðnir, 2 börn',
  },
  validation: {
    nameRequired: 'Nafn er nauðsynlegt',
    emailRequired: 'Netfang er nauðsynlegt',
    emailInvalid: 'Sláðu inn gilt netfang',
    phoneRequired: 'Símanúmer er nauðsynlegt',
    phoneInvalid: 'Símanúmer má aðeins innihalda tölustafi og valfrjálst + í upphafi',
    preferredDateRequired: 'Óskudagsetning er nauðsynleg',
    preferredDateUnavailable:
      'Þessi dagsetning er ekki tiltæk fyrir sérferðir. Veldu aðra dagsetningu.',
    groupSizeRequired: 'Fjöldi í hóp er nauðsynlegur',
  },
  mailto: {
    subject: 'Sérferð — Island Adventures',
    bodyLines: {
      name: 'Nafn',
      email: 'Netfang',
      phone: 'Sími',
      preferredDate: 'Óskudagsetning',
      groupSize: 'Fjöldi',
      interests: 'Áhugamál',
      notes: 'Athugasemdir',
    },
  },
  success: 'Takk! Við höfum samband fljótlega.',
  errorGeneric: 'Eitthvað fór úrskeiðis. ',
  errorEmailPrompt: 'Vinsamlegast sendu okkur tölvupóst á',
  errorOr: 'eða',
  submitSending: 'Sendi…',
  submitMailto: 'Opna tölvupóst til að senda',
  submitSend: 'Senda fyrirspurn',
};
