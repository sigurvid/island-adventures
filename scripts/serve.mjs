// Static server for the exported `out/` dir that mirrors the production
// LiteSpeed/.htaccess behavior: trailing-slash dir index + security headers.
// Usage: node scripts/serve.mjs [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'out');
const PORT = Number(process.argv[2]) || 4321;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
};

const SECURITY = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(self), camera=(), microphone=()',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://widgets.bokun.io https://*.bokun.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://widgets.bokun.io https://www.google.com; connect-src 'self' https://*.bokun.io; font-src 'self' data:",
};

async function tryFile(p) {
  try { const s = await stat(p); return s.isFile() ? p : null; } catch { return null; }
}

const server = createServer(async (req, res) => {
  const setHeaders = () => { for (const [k, v] of Object.entries(SECURITY)) res.setHeader(k, v); };
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);

    // Exact file (has extension)?
    if (path.extname(pathname)) {
      const filePath = path.join(ROOT, pathname);
      const found = await tryFile(filePath);
      if (found) {
        setHeaders();
        const ext = path.extname(found).toLowerCase();
        res.setHeader('Content-Type', TYPES[ext] || 'application/octet-stream');
        if (/\.(?:js|css|woff2?|jpg|jpeg|png|webp|avif|svg|ico)$/.test(ext)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        res.end(await readFile(found));
        return;
      }
    }

    // Directory path: enforce trailing slash, serve index.html
    if (!pathname.endsWith('/')) {
      // if it's a known directory, redirect to slash (mirrors .htaccess)
      const asDir = path.join(ROOT, pathname);
      try { if ((await stat(asDir)).isDirectory()) { setHeaders(); res.statusCode = 301; res.setHeader('Location', pathname + '/'); res.end(); return; } } catch {}
    }
    const indexPath = path.join(ROOT, pathname, 'index.html');
    const idx = await tryFile(indexPath);
    if (idx) {
      setHeaders();
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(await readFile(idx));
      return;
    }

    setHeaders();
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const nf = await tryFile(path.join(ROOT, '404.html'));
    res.end(nf ? await readFile(nf) : 'Not found');
  } catch (e) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(PORT, () => console.log(`serving out/ on http://localhost:${PORT}`));
