# Island Adventures — Next steps & developer brief

## 1. Next steps (prioritised)

### Phase A — Booking & messaging (do first)
- **1h only, May–June:** Show only the 1-hour tour as bookable online for May and June. Use Bókun widget only for that product in that window.
- **2h & July–September:** Do not offer 2-hour online booking yet. Clearly encourage customers to contact you for 2-hour trips and for any bookings in July–September (e.g. “Contact us for 2-hour tours and for July–September dates”).
- **Custom trips copy:** Update custom-trip/private messaging to mention: luxury trips with arranged catering, hen/stag parties, and everything in between.
- **4-person minimum:** Add to both **Terms & Conditions** and **FAQ** that scheduled tours (1h and 2h — i.e. all tours other than private and custom) have a **4 person minimum**. If the minimum is not met, the tour is cancelled (and refund/alternative date per your existing policy). Private and custom tours are excluded from this minimum.
- **Custom trip form error:** When “Send request” fails, the form already shows a mailto to the fallback email; it now also shows **booking@islandadventures.com** so users can email that address directly. No further change needed unless you want a different backup email.

### Phase B — Photo galleries
- **Where:** Every page that currently has photos: hero on homepage, tour cards on homepage, and each tour page (1h, 2h, private).
- **Behaviour:** Support multiple images per area; images should auto-rotate (carousel/slider) with the option for users to scroll through them manually (dots, arrows, or swipe).
- **Assets:** You provide the images; dev adds a simple gallery/carousel component and wires it to hero, tour cards, and tour pages.

### Phase C — Content & launch prep
- Replace any remaining placeholders: emails, meeting point, map embed, FAQ, safety, Privacy, Terms, JSON-LD (SITE_URL, address, phone, price range).
- Add logo (`public/logo.png`) if not already present.
- Optional: TripAdvisor widget and review link.

---

## 2. Prompt for your web developer

Copy and paste the following to your developer.

---

**Project:** Island Adventures — marketing/booking site for RIB boat tours (Vestmannaeyjar, Iceland). Next.js 14, TypeScript, Tailwind, static export.

**Business rules to implement:**

1. **Booking availability**
   - **1-hour tours:** We are only selling 1-hour trips through May and June for now. The “Book now” section should show the Bókun booking widget only for the 1-hour product, and only for this period (or make it clear that online booking is for 1h, May–June).
   - **2-hour tours and July–September:** We do not want 2-hour tours or July–September dates bookable online yet. Instead, show clear copy that encourages customers to contact us for 2-hour trips and for any bookings in July–September (e.g. “Want a 2-hour tour or a date in July–September? Contact us — we’ll get you sorted.”). Link to the contact page and/or the custom trip form.

2. **Custom trips**
   - Update the custom trips (and any private/charter) messaging to reflect that we can cater to: luxury trips with arranged catering, hen/stag parties, and everything in between. This can be on the homepage (custom/private tour cards and “Contact” section), the Contact page, and any tour page that mentions private/custom.

3. **Photo galleries**
   - Every page that currently has photos should support multiple images that:
     - Change automatically (auto-rotating carousel/slider).
     - Can be scrolled through manually (e.g. arrows, dots, or swipe on mobile).
   - Apply this to:
     - **Homepage:** hero section (one or more hero images).
     - **Homepage:** tour cards (each card can have multiple images that rotate).
     - **Tour pages:** 1-hour, 2-hour, and private tour pages (each has an image area that should be a gallery with auto-rotate and manual scroll).
   - We will supply the image files; the implementation should allow adding/removing images per section (e.g. via config or a simple list of image paths). Prefer a lightweight, accessible solution (keyboard, reduced motion if possible).

4. **Custom trip form — error state**
   - When the “Send request” for a custom trip fails (e.g. network or server error), the error message should include a clickable mailto link to **booking@islandadventures.com** so users can email us directly. (This is already implemented: the error block shows the form’s fallback email and `booking@islandadventures.com`.)

5. **4-person minimum (Terms & FAQ)**
   - Add to **Terms & Conditions** and **FAQ** that scheduled tours (1-hour and 2-hour — i.e. all tours other than private and custom) have a **4 person minimum**. If the minimum is not met, the tour is cancelled (refund or alternative date as per our cancellation policy). Private and custom tours are not subject to this minimum. Wording should be clear so customers see this before booking.

**Technical notes:**
- Site is static export (`output: 'export'`). Custom trip form uses mailto when no API is available; if we later use an API (e.g. Resend) on a Node host, the same error behaviour should keep the booking@ mailto visible.
- Prefer not to add heavy dependencies for the galleries; a small carousel component or a few lines of state + CSS is fine.

Please confirm back: (1) how you’ll restrict 1h vs 2h and May–June vs July–September in the UI, (2) where you’ll add the new custom-trip/private copy, (3) which gallery/carousel approach you’ll use and on which pages, and (4) that the 4-person minimum for scheduled tours is added to both Terms and FAQ.

---

*End of developer prompt*
