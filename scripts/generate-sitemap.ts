import fs from 'fs';
import { CATEGORIES } from '../src/data/categories.ts';
import { TOUR_PACKAGES } from '../src/data/tourPackages.ts';
import { DESTINATIONS } from '../src/data/destinations.ts';

const domain = 'https://sincet20services.com';
const currentDate = new Date().toISOString().split('T')[0];

const mainPages = [
  '',
  '/categories',
  '/services',
  '/tour-packages',
  '/travel-services/hotel-booking',
  '/travel-services/camping-tent-booking',
  '/travel-services/taxi-car-rental',
  '/professional-services/gst-business-services',
  '/professional-services/itr-tax-filing',
  '/professional-services/rta-rto-services',
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
    <priority>${page === '' ? '1.0' : '0.9'}</priority>
  </url>`);
});

// Tour Packages
TOUR_PACKAGES.forEach(pkg => {
  urls.push(`  <url>
    <loc>${domain}/tour-packages/${pkg.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`);
});

// Destination Guides
DESTINATIONS.forEach(dest => {
  urls.push(`  <url>
    <loc>${domain}/destinations/${dest.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
