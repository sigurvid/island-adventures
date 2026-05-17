/**
 * Icelandic locale URL prefixes — use these when linking inside Icelandic pages.
 * Edit paths here only if you change the `/is` route structure.
 */
export const IS = {
  home: '/is/',
  faq: '/is/faq/',
  terms: '/is/terms/',
  privacy: '/is/privacy/',
  contact: '/is/contact/',
  tours: {
    oneHour: '/is/tours/one-hour/',
    twoHour: '/is/tours/two-hour/',
    private: '/is/tours/private/',
    custom: '/is/tours/custom/',
  },
  hashBook: '/is/#book',
  hashCustom: '/is/#custom',
  contactCustom: '/is/contact/#custom',
} as const;
