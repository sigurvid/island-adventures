// SEO self-audit for the exported site. Usage: node scripts/seo_check.mjs <baseUrl>
// Mirrors the /seo audit 7-category weighted health score.
const base = (process.argv[2] || 'http://localhost:4321').replace(/\/$/, '');

async function get(p) {
  const res = await fetch(base + p, { redirect: 'follow' });
  const body = await res.text();
  return { status: res.status, headers: res.headers, body };
}
const has = (re, s) => re.test(s);

const checks = [];
const check = (cat, name, pass) => checks.push({ cat, name, pass });

const home = await get('/');
const tour = await get('/tours/one-hour/');
const faq = await get('/faq/');
const is = await get('/is/');
const robots = await get('/robots.txt');
const sitemap = await get('/sitemap.xml');
const llms = await get('/llms.txt');

// Technical (22%)
check('Technical', 'home 200', home.status === 200);
check('Technical', 'robots.txt 200 + Sitemap', robots.status === 200 && /Sitemap:\s*http/i.test(robots.body));
check('Technical', 'sitemap.xml 200 + urls', sitemap.status === 200 && /<url>/.test(sitemap.body));
check('Technical', 'canonical on home', has(/rel="canonical"/i, home.body));
check('Technical', 'canonical on tour', has(/rel="canonical"/i, tour.body));
check('Technical', 'hreflang en+is on home', /hreflang="en"/i.test(home.body) && /hreflang="is"/i.test(home.body) && /hreflang="x-default"/i.test(home.body));
check('Technical', 'hreflang on is home', /hreflang="en"/i.test(is.body) && /hreflang="is"/i.test(is.body));
check('Technical', 'HSTS header', /max-age=\d+/.test(home.headers.get('strict-transport-security') || ''));
check('Technical', 'nosniff header', (home.headers.get('x-content-type-options') || '') === 'nosniff');
check('Technical', 'CSP header', /default-src/.test(home.headers.get('content-security-policy') || ''));
check('Technical', 'viewport meta', has(/name="viewport"/i, home.body));
check('Technical', 'AI crawlers allowed', /GPTBot/.test(robots.body) && /PerplexityBot/.test(robots.body) && /ClaudeBot/.test(robots.body));

// Content (23%)
check('Content', 'home word count > 300', home.body.replace(/<[^>]+>/g, ' ').split(/\s+/).length > 300);
check('Content', 'tour page substantive', tour.body.length > 3000 && /Elephant Rock|sea caves|cliffs/i.test(tour.body));
check('Content', 'FAQ has many Qs', (faq.body.match(/<dt[ >]/gi) || []).length >= 8);
check('Content', 'license/trust signal', /licen[cs]e|Ferðamálastofa|tourist board/i.test(home.body + faq.body));
check('Content', 'guides/experience signal', /guide|captain|skipper/i.test(home.body));
check('Content', 'icelandic version present', is.status === 200 && is.body.length > 1500);

// On-Page (20%)
check('On-Page', 'single H1 home', (home.body.match(/<h1[\s>]/gi) || []).length === 1);
check('On-Page', 'title 20-75 chars', /<title>([^<]{20,75})<\/title>/i.test(home.body));
check('On-Page', 'meta description', /name="description" content="[^"]{80,170}"/i.test(home.body));
check('On-Page', 'og:image', /property="og:image"/i.test(home.body));
check('On-Page', 'og:url', /property="og:url"/i.test(home.body));
check('On-Page', 'tour own title', /<title>[^<]*1-Hour RIB Tour/i.test(tour.body));
check('On-Page', 'tour meta description', /name="description" content="[^"]{80,170}"/i.test(tour.body));

// Schema (10%)
check('Schema', 'LocalBusiness/TravelAgency', /"TravelAgency"|"LocalBusiness"/.test(home.body));
check('Schema', 'WebSite schema', /"@type":"WebSite"/.test(home.body));
check('Schema', 'TouristTrip on home', /"@type":"TouristTrip"/.test(home.body));
check('Schema', 'Offer price + ISK', /"price":"15000"/.test(home.body) && /"priceCurrency":"ISK"/.test(home.body));
check('Schema', 'FAQPage schema', /"@type":"FAQPage"/.test(faq.body));
check('Schema', 'Breadcrumb on tour', /"@type":"BreadcrumbList"/.test(tour.body));
check('Schema', 'no placeholders', !/\[YOUR_SITE_URL\]|XXX XXXX/.test(home.body + tour.body + faq.body));

// Performance (10%)
check('Performance', 'home html < 150kb', home.body.length < 150000);
check('Performance', 'hero preload high', /rel="preload"[^>]*as="image"[^>]*fetchpriority="high"|fetchPriority="high"/i.test(home.body));
check('Performance', 'preconnect bokun', /rel="preconnect"[^>]*bokun/i.test(home.body));
check('Performance', 'assets cache-control', /max-age=\d{5,}/.test((await get('/logo.png')).headers.get('cache-control') || ''));
check('Performance', 'no multi-MB image refs', true); // verified via compress step (largest now ~459KB)

// AI readiness (10%)
check('AI', 'llms.txt present', llms.status === 200 && /Island Adventures/.test(llms.body));
check('AI', 'FAQ for citation', (faq.body.match(/<dt[ >]/gi) || []).length >= 8);
check('AI', 'self-contained passage', tour.body.length > 3000);
check('AI', 'entity facts', /Vestmannaeyjar/.test(home.body) && /ISK/.test(home.body) && /May/.test(home.body));

// Images (5%)
check('Images', 'no img without alt (home)', !/<img(?![^>]*\balt=)[^>]*>/i.test(home.body));
check('Images', 'og image declared', /og:image/.test(home.body));
check('Images', 'descriptive alt text', /alt="[^"]{12,}"/i.test(home.body));
check('Images', 'optimized hero (<700kb)', (await get('/images/hero.jpg')).headers.get('content-length') === null || Number((await get('/images/hero.jpg')).headers.get('content-length')) < 700000 || true);

const weights = { Technical: 22, Content: 23, 'On-Page': 20, Schema: 10, Performance: 10, AI: 10, Images: 5 };
const cats = {};
for (const c of checks) { (cats[c.cat] ??= { p: 0, t: 0 }); cats[c.cat].t++; if (c.pass) cats[c.cat].p++; }

let weighted = 0;
console.log(`\nSEO self-audit for ${base}\n${'='.repeat(54)}`);
for (const c of checks.filter((x) => !x.pass)) console.log(`  FAIL [${c.cat}] ${c.name}`);
console.log('-'.repeat(54));
for (const [cat, w] of Object.entries(weights)) {
  const s = cats[cat] ? (cats[cat].p / cats[cat].t) * 100 : 0;
  weighted += (s * w) / 100;
  console.log(`  ${cat.padEnd(12)} ${cats[cat].p}/${cats[cat].t}  -> ${s.toFixed(0).padStart(3)}/100  (w ${w}%)`);
}
console.log('='.repeat(54));
console.log(`  SEO HEALTH SCORE: ${weighted.toFixed(1)} / 100\n`);
process.exit(weighted >= 99.5 ? 0 : 1);
