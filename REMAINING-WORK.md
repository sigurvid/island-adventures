# Island Adventures — Remaining Work

Status of the improved website (the `Leo` branch). Updated **28 May 2026**.

**Where we are:** SEO health **100/100** (verified), UI/UX bugs fixed, tour cards aligned
and their copy matched to the detail pages, hero converted to a real `<img>`, Bókun + Google
Maps performance fixed, and Terms/Privacy tightened. All committed locally to `Leo`
(10 commits, not pushed; the client's live site and database are untouched).

**Legend:** 🔴 blocker before launch · 🟠 important · 🟢 nice-to-have
· 👤 needs the client's input · 💻 dev work · ⚖️ legal

---

## 1. Needs the client's facts 👤
These are placeholders or unverified values in the code. We must not invent them.

- [ ] 🔴 **Real VAT number** — footer currently shows the unverified `159911`
  (`src/components/Footer.tsx`).
- [ ] 🔴 **Analytics tool name** — Privacy §8 says "a website-analytics tool". Name the
  actual tool (e.g. Google Analytics 4) and make the cookie banner match
  (`src/app/privacy/page.tsx`, TODO comment in file).
- [ ] 🔴 **Where Bókun & Resend store/process data** — if either is outside the EEA,
  the Privacy Policy must disclose the international transfer + safeguard (e.g. SCCs)
  (`src/app/privacy/page.tsx` §6, TODO comment in file).
- [ ] 🟠 **Verify legal IDs** — kennitala `661021-1520` and tourist-board licence
  `2026-045` are correct.
- [ ] 🟠 **Verify map coordinates** used in business schema
  (`lat 63.4385, lng -20.2706` in `src/lib/seo.ts`) against the real Google listing.
- [ ] 🟠 **Confirm opening hours & season** in schema (`08:00–20:00`, May–Oct in
  `src/components/JsonLd.tsx`).

## 2. Legal sign-off ⚖️
- [ ] 🔴 **Independent Icelandic/EEA lawyer review** of Terms & Privacy before launch.
  Wording is now sound and consistent, but this was not prepared by a lawyer.
- [ ] 🟢 Decide whether to add an EU Online Dispute Resolution reference (the EU ODR
  platform was wound down in 2025 — likely skip; confirm).

## 3. Design decisions (open) 👤 💻
From the UI/UX audit — these are choices, not bugs:
- [ ] 🟠 **Accent CTA colour** — every button is navy, so the primary "Book" action
  doesn't stand out. An accent (e.g. adventure orange) on the single primary CTA would
  lift conversion. Decision needed before we apply it.
- [ ] 🟠 **Standardise the booking button wording** — currently "Book Now" (header),
  "Check availability" (hero), "Book" (card). Pick one primary verb.

## 3b. Icelandic (`/is`) copy 👤 💻
The Icelandic locale toggle is currently **hidden** (`SHOW_ICELANDIC_LOCALE_TOGGLE = false`
in `src/components/Header.tsx`). Before turning it on, a native speaker should review:
- [ ] 🟠 **Apply the same card-copy fixes we made in English** — the Icelandic home cards
  (`src/content/is/home.ts`) still over-claim vs their detail pages (e.g. "Vinsælasta
  valkosturinn" / "most popular option" on the 2-hour card, and the luxury blurb). We left
  these for a native speaker rather than machine-translate.
- [ ] 🟠 **Fix typos** in the same file: `áætlunarfórðum` → `áætlunarferðum`, and
  `einmana/partý` (reads as "lonely/party" — likely meant private/stag party).
- [ ] 🟢 Decide **when to enable the IS toggle** and announce the Icelandic site.

## 3c. "Meet your captains" / About page 👤 💻
The homepage "Your guides" blurb is now a **"Meet your captains" row of 4 placeholder
cards** (`src/app/page.tsx`, in the Safety section). To finish:
- [ ] 🟠 👤 **Provide the 4 captains' details** — real name, photo, role/credentials
  (e.g. licensed skipper, years on the water, languages) and a 1–2 sentence bio. Swap the
  silhouette placeholder for a real photo via `next/image` with descriptive alt text.
- [ ] 🟠 💻 **Mirror the section on the Icelandic home** (`/is`) — it still shows the old
  single "guides" paragraph (`src/content/is/home.ts`), so EN/IS are out of sync.
- [ ] 🟢 💻 **Add a dedicated `/about` (team) page** as the canonical home for fuller bios
  + `Person` schema; keep the homepage section as a teaser linking to it, and add "About"
  to the header nav and footer. Strengthens E-E-A-T/trust for a safety-sensitive activity.

## 4. Functional verification before launch 💻
Things we could not fully test locally (no live keys / static export):
- [ ] 🔴 **Contact / luxury-trip form actually sends** — needs a real `RESEND_API_KEY`
  in the environment; we ran without it, so the email-send path is untested.
  (`.env.example` lists the variables.)
- [ ] 🔴 **Decide how the form is hosted** — the site builds as a **static export**
  (`output: 'export'` in `next.config.js`), so the `/api/custom-trip` route does **not**
  run on a static host. Either host the API as a serverless function, or point the form at
  mailto (remove `apiEndpoint` from `CustomTripForm`). As-is on a static host the form falls
  back to an error + email link.
- [ ] 🔴 **Bókun booking widget works on the live domain** — locally it shows its
  placeholder. Confirm calendar + checkout on the real site.
- [ ] 🔴 **robots.txt & sitemap.xml serve correctly on the live host** — these were the
  original 404s. Confirm they resolve on LiteSpeed once deployed (static export + the
  `.htaccess` rules in `public/.htaccess`).
- [ ] 🟠 Re-run the SEO audit against the **live URL** after deploy:
  `node scripts/seo_check.mjs https://www.islandadventures.is` (expect ~100).
- [ ] 🟠 **Run a real PageSpeed/Lighthouse on the deployed URL.** Our local runs are
  distorted (offline sandbox, no real throttling); observed LCP locally is ~170 ms, but
  the true field score needs a public URL. The home page's ceiling is the Bókun booking
  widget's third-party JS (now deferred + home-only).
- [ ] 🟠 **Replicate security/cache headers on the host.** `public/.htaccess` covers
  Apache/LiteSpeed. If hosting elsewhere (Vercel/Netlify/etc.), set the same HSTS, nosniff,
  CSP and cache-control headers in that platform's config.

## 5. Launch / deployment 💻 👤
Per our engagement, we don't touch the client's live site — they decide how to ship.
- [ ] 🟠 **Preview deploy** of `Leo` (Vercel **preview**, not production) so the client
  can click through. Needs `vercel login` or a `VERCEL_TOKEN`.
- [ ] 🟠 **Push `Leo`** to the remote (client's call — currently 10 commits ahead of
  `origin/Leo`, nothing pushed).
- [ ] 🔴 **Client applies/merges** the approved changes to their live site. We do **not**
  push to `master` or deploy to production.

## 6. Nice-to-have / growth 🟢
From the original SEO audit recommendations:
- [ ] Collect on-site **reviews** → then add genuine `aggregateRating` to schema
  (do **not** publish invented ratings).
- [ ] Add **social profile links** (`sameAs`) to the business schema once confirmed.
- [ ] Get listed on **Tripadvisor / GetYourGuide** (Tier-1 discovery for Iceland tours).
- [ ] Consider a dedicated **puffins** content page (high search intent, currently none).
- [ ] Replace remaining stock/placeholder photos with real branded tour photography
  (kept lightweight; swap-in stays fast). Also remove unused images
  (`public/images/ffdsf.jpg`, `to.jpg`) if not needed.
- [ ] Serve images as **WebP/AVIF + responsive `srcset`** for further speed. Static export
  has `images.unoptimized: true`, so this needs a `<picture>`/loader change (we already
  compressed the JPGs heavily, which got most of the win).
- [ ] Defer the **Bókun script until the user scrolls to the booking section**
  (IntersectionObserver) for a bit more home-page headroom; it's already `lazyOnload`.
- [ ] Add a dedicated **1200×630 OG share image** (currently reuses the hero photo).

---

## Done ✅ (for reference)
- SEO: fixed broken schema placeholders, added canonical + en/is hreflang, robots.ts,
  sitemap.ts, llms.txt, per-page titles/descriptions/OG, security + cache headers.
- Performance: compressed images (~84 MB saved), hero rendered as a real `<img>` with
  fetchpriority, scoped Bókun to home + `lazyOnload`, fixed the Bókun CLS, and made the
  Google Maps embed click-to-load (facade).
- UX: 44px tap targets, skip-to-content link, reduced-motion, equal-height tour cards with
  bottom-aligned full-width buttons, "By inquiry" label on both inquiry-only cards.
- Content: rewrote the Private / Luxury / 2-hour card blurbs to match their detail pages;
  replaced the generic "Your guides" blurb with a "Meet your captains" row of 4 placeholder
  cards (awaiting real names/photos/bios — see §3c).
- Bug: removed wrong-domain `.com` contact link; fixed `[DATE]` placeholder.
- Legal: governing law, liability carve-out, VAT clarity, withdrawal exemption (Terms);
  controller/retention/processor/rights fixes (Privacy); Ferðamálastofa spelling (footer).

> Verify with: `npm run build` then `node scripts/serve.mjs 4321` and
> `node scripts/seo_check.mjs http://localhost:4321`.
