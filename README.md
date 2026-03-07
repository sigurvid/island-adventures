# Island Adventures — Marketing & Booking Website

Production-ready, mobile-first marketing and booking site for an Iceland RIB boat tour operator (Vestmannaeyjar). Next.js App Router, TypeScript, Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Bókun booking widgets

1. **Where to get the embed code**  
   Log in to your [Bókun](https://www.bokun.io/) dashboard → **Products** → select the product (e.g. 1-hour tour) → **Widget / Embed** (or equivalent). Copy the generated embed snippet (script + div or iframe).

2. **Where to paste it in this project**  
   Only the **1-hour** and **2-hour** tours are bookable online. In `src/app/page.tsx`, in the “Book now” section (`id="book"`), you’ll find two placeholder blocks:
   - `id="bokun-one-hour"`
   - `id="bokun-two-hour"`
   Replace the placeholder content inside each `<BookingWidget>` with the corresponding Bókun widget markup, or inject the script once in `src/app/layout.tsx` and ensure the script targets these div IDs if Bókun uses ID-based injection. Private and custom tours are not sold online — contact only.

3. **Reusable component**  
   `src/components/BookingWidget.tsx` wraps each product area. You can pass custom content as `children` or leave the default placeholder and replace the inner div with the Bókun-generated markup.

## Images

- **Hero and tour images**  
  Put your photos in `public/images/` and reference them in the code:
  - Hero: use `url('/images/hero.jpg')` in the hero section in `src/app/page.tsx` (replace the current `placeholder.svg` background).
  - Tour cards and tour pages: set `imageSrc` in `src/app/page.tsx` (e.g. `tour-1h.jpg`, `tour-2h.jpg`, `tour-private.jpg`, `tour-custom.jpg`) and in each tour page under `src/app/tours/`.

- **Logo**  
  The provided logo is at `public/logo.png`. To change it, replace that file and keep the same path.

## Custom trip form

The “Request a custom trip” form sends submissions via the `/api/custom-trip` API, which can email you using **Resend** or **SendGrid**. If the API isn’t configured, the form shows an error and a link to email you directly.

**Important:** The email API only runs when the site is deployed with a **Node.js server** (e.g. Vercel, Netlify, or `npm run dev`). If you use **static export** and upload the `out/` folder via FTP, there is no server — the form will show the “email us directly” fallback.

### Step-by-step: Configure email (Resend — recommended)

1. **Sign up at Resend**  
   Go to [resend.com](https://resend.com) and create an account.

2. **Get an API key**  
   In the dashboard go to **API Keys** → **Create API Key**. Name it (e.g. “Island Adventures”), copy the key (it starts with `re_`). You won’t see it again, so store it somewhere safe.

3. **Verify your domain (or use test mode)**  
   - **Production:** In Resend, go to **Domains** → **Add Domain** and add your site’s domain (e.g. `yourdomain.com`). Add the DNS records they show. Once verified, you can send from addresses like `noreply@yourdomain.com`.  
   - **Testing:** Resend lets you send to your own email from `onboarding@resend.dev` without verifying a domain. Use that as the “from” address while testing.

4. **Create your env file**  
   In the project root, copy the example file and open it:
   ```bash
   copy .env.example .env.local
   ```
   (On Mac/Linux: `cp .env.example .env.local`.)

5. **Fill in `.env.local`**  
   Set these variables (no quotes needed; replace with your real values):
   ```env
   RESEND_API_KEY=re_your_actual_key_here
   NEXT_PUBLIC_TO_EMAIL=you@yourdomain.com
   NEXT_PUBLIC_FROM_EMAIL=Island Adventures <noreply@yourdomain.com>
   ```
   - **To:** the address that should receive custom trip requests.  
   - **From:** must be a verified domain in Resend (or use `onboarding@resend.dev` for testing).  
   You can use `CUSTOM_TRIP_TO_EMAIL` and `CUSTOM_TRIP_FROM_EMAIL` instead of the `NEXT_PUBLIC_*` ones if you prefer to keep them server-only.

6. **Restart the dev server**  
   Stop the running app (Ctrl+C) and run `npm run dev` again so Next.js loads the new env vars.

7. **Test the form**  
   Open the site, go to the contact page or the custom trip section on the homepage, fill out the form and submit. You should see “Thanks! We’ll be in touch soon.” and receive the email at `NEXT_PUBLIC_TO_EMAIL`. If you get “Something went wrong”, check the browser Network tab for the `/api/custom-trip` response and the terminal for errors.

8. **Production (e.g. Vercel)**  
   In your host’s dashboard, add the same variables as **Environment Variables** (e.g. Vercel: Project → Settings → Environment Variables). Redeploy so the API uses them.

### Alternative: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com), create an API key (with “Mail Send” permission).
2. In `.env.local` set:
   ```env
   SENDGRID_API_KEY=SG.your_actual_key
   NEXT_PUBLIC_FROM_EMAIL=Island Adventures <noreply@yourdomain.com>
   NEXT_PUBLIC_TO_EMAIL=you@yourdomain.com
   ```
3. Verify your domain or sender in SendGrid as required by their dashboard.
4. Restart dev server and test as above.

## Before launch — business & legal

Fill in all placeholders:

1. **Footer “Company & Legal”** (`src/components/Footer.tsx`): legal company name, legal address, kennitala, VAT number, email, phone, Icelandic Tourist Board / regulator licensing info.
2. **Safety & FAQ** (`src/app/faq/page.tsx` and homepage “Safety & what to bring”): weather/cancellation policy, what gear is provided, what to wear, meeting point, “arrive X minutes early”, minimum age, health restrictions (pregnancy, back/neck), waiver if applicable.
3. **Privacy Policy** (`src/app/privacy/page.tsx`): controller, what you collect, purpose, legal basis, retention, sharing, rights, cookies, last updated date.
4. **Terms & Cancellation** (`src/app/terms/page.tsx`): booking, cancellation by guest and by operator, no-shows, participation/health, liability, complaints, last updated date.
5. **Contact:** Replace `[YOUR-EMAIL]` and `[YOUR-CUSTOM-INQUIRY-EMAIL]` everywhere (footer, contact page, homepage).
6. **TripAdvisor:** Add your TripAdvisor page URL and paste the review widget code in the “What guests say” section on the homepage.
7. **Map:** Add your meeting point map embed (e.g. Google Maps iframe) on the homepage and contact page where indicated.
8. **JSON-LD** (`src/components/JsonLd.tsx`): set `SITE_URL` and address/phone/email so LocalBusiness and tour structured data are correct for SEO.

## Optional: cookie consent

The cookie banner (`src/components/CookieBanner.tsx`) is shown until the user accepts or declines. It’s off by default; when you enable analytics, wire the “Accept” action to load your analytics script and update the banner copy if needed.

## Build

```bash
npm run build
```

This produces a **static export** in the `out/` folder: plain HTML, CSS, and JS files with no server required.

## Uploading via FTP (like a normal HTML site)

This project is built with Next.js, but it’s configured for **static export**. You don’t run a server on your host — you build once on your computer and upload the result, similar to uploading HTML files.

1. **On your computer:** run `npm run build`.
2. **Result:** a folder named `out/` appears in the project. It contains:
   - `index.html` (homepage)
   - `contact.html`, `faq.html`, `privacy.html`, `terms.html`
   - `tours/one-hour.html`, `tours/two-hour.html`, `tours/private.html`
   - `_next/` (CSS and JavaScript)
   - `images/`, `logo.png`, etc.

3. **Upload:** Using your usual FTP client (FileZilla, WinSCP, or whatever you use):
   - Connect to your web host.
   - Go to the folder where your site should live (often `public_html` or `www`).
   - **Upload the *contents* of the `out/` folder** (all the files and folders inside `out/`, not the `out` folder itself) into that directory.

4. **Result:** Your site will work like a normal static website. No Node.js or special server needed on the host. The “Book now” and “Contact us” links, Bókun widgets (once you paste them in), and the custom-trip mailto form will all work.

**If your site will live in a subfolder** (e.g. `example.com/island/`), set `basePath: '/island'` in `next.config.js`, then rebuild and upload again.

**Note:** If you see a security warning for Next.js, run `npm install next@latest` and re-test.

## Tech summary

- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS.
- **Accessibility:** Semantic HTML, focus states, labels, contrast; WCAG-oriented.
- **SEO:** Title/description and OpenGraph per page; JSON-LD for LocalBusiness and tour pages.
- **Performance:** Responsive images, minimal JS, lazy-load where appropriate.
