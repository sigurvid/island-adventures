# How to continue — Island Adventures

Use this when you come back to the project.

---

## 1. Open the project

- Open the folder in Cursor (or your editor): `c:\users\zero_\island-adventures`
- If you use a terminal, `cd` into that folder

---

## 2. Install and run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## 3. What’s already done

- **Homepage:** Hero carousel (hero.jpg, hero2.jpg, hero3.jpg), tour cards (1h, 2h, private, custom), Bókun booking widget, contact + custom trip form section
- **Tours:** 1-hour, 2-hour, private, and **custom** landing pages with photos, description, and (on custom) the “Request a custom trip” form
- **Contact page:** Meeting point (Básaskersbryggja 6), Google Maps embed, custom trip form
- **FAQ:** Aligned with terms (cancellation, weather, gear, meeting point, travel insurance)
- **Terms & Cancellation:** Full policy (24h cancellation, weather, no-shows, participation, liability)
- **Custom trip form:** Sends via `/api/custom-trip`; requires Resend (or SendGrid) and `.env.local` for live email
- **Email:** booking@islandadventures.is used everywhere; address Básaskersbryggja 6, 900 Vestmannaeyjar
- **Images:** In `public/images/` (hero, tour-1h, tour-2h, tour-private, tour-custom, etc.)

---

## 4. Important files

| Purpose | File(s) |
|--------|--------|
| Hero images | `src/app/page.tsx` → `HERO_IMAGES` |
| Tour cards (homepage) | `src/app/page.tsx` → `TOUR_CARDS` |
| Bókun embed | `src/app/layout.tsx` (script), `src/app/page.tsx` (widget div in “Book now”) |
| Custom trip form | `src/components/CustomTripForm.tsx` |
| Custom trip API | `src/app/api/custom-trip/route.ts` |
| Email / address (footer, legal) | `src/components/Footer.tsx` → `legalPlaceholders` |
| FAQ content | `src/app/faq/page.tsx` → `FAQ_ITEMS` |
| Terms text | `src/app/terms/page.tsx` |
| Tour page content | `src/app/tours/one-hour/page.tsx`, `two-hour`, `private`, `custom` |
| SEO / schema | `src/components/JsonLd.tsx` |

---

## 5. Environment (custom trip emails)

- Copy `.env.example` to `.env.local` (don’t commit `.env.local`)
- In `.env.local` set: `RESEND_API_KEY`, `NEXT_PUBLIC_TO_EMAIL`, `NEXT_PUBLIC_FROM_EMAIL`
- See **README.md** → “Custom trip form” for full steps

---

## 6. Build for production / static export

```bash
npm run build
```

Output is in the `out/` folder. For **static export**, the custom trip form will only work if you deploy somewhere that runs the Next.js API (e.g. Vercel). Otherwise the form shows the “email us” fallback.

---

## 7. Optional next steps (from NEXT_STEPS_AND_DEV_PROMPT.md)

- 4-person minimum: already in Terms and FAQ
- Restrict booking copy (1h only, May–June; “contact us” for 2h and July–Sept): partially in place on the book section
- Add more images to any carousel: edit the `IMAGES` or `HERO_IMAGES` arrays in the relevant file
- Before launch: set `SITE_URL` in `src/components/JsonLd.tsx`, fill licensing/kennitala in Footer if still placeholders

---

## 8. Quick reference

- **Change hero photos:** `src/app/page.tsx` → `HERO_IMAGES`
- **Change tour photos:** Each tour page has an `IMAGES` array at the top
- **Change booking email:** Search for `booking@islandadventures.is` and update; also `.env.local` for the API
- **Change address:** `Footer.tsx` → `legalAddress`; also contact page, terms, FAQ, JsonLd
