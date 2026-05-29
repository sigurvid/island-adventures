// Recompress oversized JPGs in public/images in place (keeps filenames).
// Run: node scripts/compress-images.mjs
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'public', 'images');
const MAX_W = 2000;      // cap width
const QUALITY = 80;      // mozjpeg quality
const THRESHOLD = 300 * 1024; // only touch files > 300 KB

const files = await readdir(DIR);
let savedTotal = 0;

for (const f of files) {
  if (!/\.(jpe?g)$/i.test(f)) continue;
  const fp = path.join(DIR, f);
  const before = (await stat(fp)).size;
  if (before <= THRESHOLD) {
    console.log(`skip  ${f} (${(before / 1024).toFixed(0)} KB)`);
    continue;
  }
  const tmp = fp + '.tmp';
  await sharp(fp)
    .rotate()
    .resize({ width: MAX_W, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(fp);
    await rename(tmp, fp);
    savedTotal += before - after;
    console.log(`done  ${f}: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024).toFixed(0)} KB`);
  } else {
    await unlink(tmp);
    console.log(`keep  ${f} (recompress not smaller)`);
  }
}
console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(1)} MB`);
