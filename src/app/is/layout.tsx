import type { Metadata } from 'next';

/** Default metadata for `/is/`; individual pages override `title` / `description` via exports. */
export const metadata: Metadata = {
  title: {
    default: 'Island Adventures — RIB-bátafærðir Vestmannaeyjar',
    template: '%s | Island Adventures',
  },
  description:
    'RIB-bátafærðir frá Vestmannaeyjum: sjávarhellar, klettar og fuglalíf. Bókaðu ferð maí–október.',
  openGraph: {
    locale: 'is_IS',
    siteName: 'Island Adventures',
  },
};

export default function IcelandicSectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="is">{children}</div>;
}
