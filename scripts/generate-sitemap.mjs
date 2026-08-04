// Generuje public/sitemap.xml z aktualna data w lastmod. Uruchamiane przez `npm run deploy`.
import { writeFileSync } from 'node:fs';

const SITE_URL = 'https://bartosz-malec.pl/';
const OUTPUT = new URL('../public/sitemap.xml', import.meta.url);

// Format W3C Datetime (YYYY-MM-DD) wymagany przez protokol sitemap. UTC, zeby
// data nie zalezala od strefy czasowej maszyny wykonujacej deploy.
const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

writeFileSync(OUTPUT, sitemap);
console.log(`sitemap.xml: ${SITE_URL} (lastmod ${lastmod})`);