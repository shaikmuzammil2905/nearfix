import fs from 'fs';
import { CATEGORIES } from '../src/data/categories.ts';

const domain = 'https://sincet20services.com';
const currentDate = new Date().toISOString().split('T')[0];

const mainPages = [
  '',
  '/categories',
  '/services',
  '/about',
  '/business-information',
  '/contact',
  '/request-service',
  '/list-your-business'
];

let urls: string[] = [];

// Main pages
mainPages.forEach(page => {
  urls.push(`  <url>
    <loc>${domain}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`);
});

// Categories & Services
CATEGORIES.forEach(cat => {
  urls.push(`  <url>
    <loc>${domain}/categories/${cat.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

  cat.services.forEach(serv => {
    urls.push(`  <url>
    <loc>${domain}/services/${serv.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('sitemap.xml created successfully with ' + urls.length + ' URLs');

const robots = `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robots);
console.log('robots.txt created successfully');
