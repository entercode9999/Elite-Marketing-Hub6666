/**
 * prerender-meta.mjs
 *
 * Post-build step: generates one index.html per city×service route with
 * the correct <title>, <meta name="description">, and <link rel="canonical">
 * already in the static HTML — so Google sees unique meta on every page
 * without waiting for JavaScript to execute.
 *
 * Runs in ~1s (pure file I/O, no headless browser).
 * Triggered by the build script: "vite build && node scripts/prerender-meta.mjs"
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dir, "..", "dist", "public");
const BASE = "https://outlierdigital.ca";

/* ── Province abbreviations ──────────────────────────────────────── */
const PA = {
  Ontario: "ON",
  "British Columbia": "BC",
  Alberta: "AB",
  Quebec: "QC",
  Manitoba: "MB",
  Saskatchewan: "SK",
  "Nova Scotia": "NS",
  "New Brunswick": "NB",
  "Prince Edward Island": "PE",
  "Newfoundland and Labrador": "NL",
};

/* ── All 64 city slugs → { name, province } ─────────────────────── */
const CITIES = {
  // Greater Toronto Area
  toronto:        { name: "Toronto",         province: "Ontario" },
  mississauga:    { name: "Mississauga",     province: "Ontario" },
  brampton:       { name: "Brampton",        province: "Ontario" },
  markham:        { name: "Markham",         province: "Ontario" },
  vaughan:        { name: "Vaughan",         province: "Ontario" },
  "north-york":   { name: "North York",      province: "Ontario" },
  scarborough:    { name: "Scarborough",     province: "Ontario" },
  etobicoke:      { name: "Etobicoke",       province: "Ontario" },
  "richmond-hill":{ name: "Richmond Hill",  province: "Ontario" },
  oakville:       { name: "Oakville",        province: "Ontario" },
  burlington:     { name: "Burlington",      province: "Ontario" },
  pickering:      { name: "Pickering",       province: "Ontario" },
  ajax:           { name: "Ajax",            province: "Ontario" },
  whitby:         { name: "Whitby",          province: "Ontario" },
  oshawa:         { name: "Oshawa",          province: "Ontario" },
  milton:         { name: "Milton",          province: "Ontario" },
  newmarket:      { name: "Newmarket",       province: "Ontario" },
  aurora:         { name: "Aurora",          province: "Ontario" },
  "halton-hills": { name: "Halton Hills",   province: "Ontario" },
  // Ontario
  hamilton:           { name: "Hamilton",        province: "Ontario" },
  kitchener:          { name: "Kitchener",       province: "Ontario" },
  waterloo:           { name: "Waterloo",        province: "Ontario" },
  cambridge:          { name: "Cambridge",       province: "Ontario" },
  guelph:             { name: "Guelph",          province: "Ontario" },
  "london-ontario":   { name: "London",          province: "Ontario" },
  london:             { name: "London",          province: "Ontario" },
  ottawa:             { name: "Ottawa",          province: "Ontario" },
  barrie:             { name: "Barrie",          province: "Ontario" },
  kingston:           { name: "Kingston",        province: "Ontario" },
  peterborough:       { name: "Peterborough",    province: "Ontario" },
  brantford:          { name: "Brantford",       province: "Ontario" },
  "st-catharines":    { name: "St. Catharines",  province: "Ontario" },
  "niagara-falls":    { name: "Niagara Falls",   province: "Ontario" },
  windsor:            { name: "Windsor",         province: "Ontario" },
  belleville:         { name: "Belleville",      province: "Ontario" },
  "greater-sudbury":  { name: "Greater Sudbury", province: "Ontario" },
  "thunder-bay":      { name: "Thunder Bay",     province: "Ontario" },
  "sault-ste-marie":  { name: "Sault Ste. Marie",province: "Ontario" },
  "north-bay":        { name: "North Bay",       province: "Ontario" },
  orangeville:        { name: "Orangeville",     province: "Ontario" },
  // British Columbia
  vancouver:    { name: "Vancouver",   province: "British Columbia" },
  surrey:       { name: "Surrey",      province: "British Columbia" },
  burnaby:      { name: "Burnaby",     province: "British Columbia" },
  victoria:     { name: "Victoria",    province: "British Columbia" },
  kelowna:      { name: "Kelowna",     province: "British Columbia" },
  abbotsford:   { name: "Abbotsford", province: "British Columbia" },
  coquitlam:    { name: "Coquitlam",  province: "British Columbia" },
  "richmond-bc":{ name: "Richmond",   province: "British Columbia" },
  // Alberta
  calgary:    { name: "Calgary",    province: "Alberta" },
  edmonton:   { name: "Edmonton",   province: "Alberta" },
  "red-deer": { name: "Red Deer",   province: "Alberta" },
  lethbridge: { name: "Lethbridge", province: "Alberta" },
  airdrie:    { name: "Airdrie",    province: "Alberta" },
  // Quebec
  montreal:     { name: "Montreal",     province: "Quebec" },
  "quebec-city":{ name: "Quebec City",  province: "Quebec" },
  laval:        { name: "Laval",        province: "Quebec" },
  longueuil:    { name: "Longueuil",    province: "Quebec" },
  gatineau:     { name: "Gatineau",     province: "Quebec" },
  // Prairies
  winnipeg:  { name: "Winnipeg",  province: "Manitoba"     },
  saskatoon: { name: "Saskatoon", province: "Saskatchewan" },
  regina:    { name: "Regina",    province: "Saskatchewan" },
  // Atlantic
  halifax:     { name: "Halifax",     province: "Nova Scotia"   },
  moncton:     { name: "Moncton",     province: "New Brunswick" },
  fredericton: { name: "Fredericton", province: "New Brunswick" },
};

/* ── Service title + meta templates (mirrors CityServicePage.tsx) ── */
const SERVICES = {
  "seo-services": {
    title: "SEO Services in [City], [PA] | Outlier",
    meta:  "SEO services in [City], [PA]. Outlier builds organic visibility that compounds month over month — more traffic, more qualified leads. Free SEO audit.",
  },
  "local-seo": {
    title: "Local SEO in [City], [PA] | Outlier",
    meta:  "Local SEO in [City], [PA]. Google Map pack top 3 is where the calls are. Outlier optimises your GBP and local search presence. Free local SEO audit.",
  },
  "google-ads": {
    title: "Google Ads Management in [City], [PA] | Outlier",
    meta:  "Google Ads in [City], [PA]. Outlier's certified team lowers CPA, maximises ROAS, and tracks every conversion. No wasted spend. Free Google Ads audit.",
  },
  "paid-social": {
    title: "Paid Social Advertising in [City], [PA] | Outlier",
    meta:  "[City] paid social advertising — Meta, TikTok & LinkedIn campaigns from Outlier that create demand and drive measurable ROI. Free audit.",
  },
  "content-marketing": {
    title: "Content Marketing in [City], [PA] | Outlier",
    meta:  "[City] content marketing from Outlier. SEO-optimised content that ranks on Google, attracts buyers, and compounds in value month after month. Free strategy session.",
  },
  "email-marketing": {
    title: "Email Marketing in [City], [PA] | Outlier",
    meta:  "Email marketing in [City], [PA]. $36:1 average ROI. Outlier builds automations and campaigns that convert your list into revenue. Owned channel. Free audit.",
  },
  "digital-marketing": {
    title: "Digital Marketing Agency in [City], [PA] | Outlier",
    meta:  "Digital marketing agency in [City], [PA]. SEO, Google Ads, social, and email integrated into one accountable strategy. Measurable ROI. Free consultation.",
  },
  "web-design": {
    title: "Web Design & Development in [City], [PA] | Outlier",
    meta:  "Web design in [City], [PA]. Custom, conversion-optimised websites built for speed, SEO, and measurable growth. Outlier. Free consultation.",
  },
  "social-ads": {
    title: "Social Media Advertising in [City], [PA] | Outlier",
    meta:  "Social media advertising in [City], [PA]. Outlier builds Meta, TikTok & LinkedIn campaigns that reach your ideal customer and drive measurable ROI. Free audit.",
  },
};

/* ── Helpers ─────────────────────────────────────────────────────── */
function esc(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function fill(tpl, cityName, pa) {
  return tpl.replace(/\[City\]/g, cityName).replace(/\[PA\]/g, pa);
}

const OG_IMAGE = "https://outlierdigital.ca/opengraph.jpg";
const SITE_NAME = "Outlier Digital Marketing";

function injectMeta(baseHtml, title, description, canonical) {
  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${esc(description)}" />`
  );

  // Inject canonical + Open Graph + Twitter Card before </head>
  const inject = [
    `  <link rel="canonical" href="${canonical}" />`,
    `  <meta property="og:title" content="${esc(title)}" />`,
    `  <meta property="og:description" content="${esc(description)}" />`,
    `  <meta property="og:url" content="${canonical}" />`,
    `  <meta property="og:type" content="website" />`,
    `  <meta property="og:image" content="${OG_IMAGE}" />`,
    `  <meta property="og:image:width" content="1200" />`,
    `  <meta property="og:image:height" content="630" />`,
    `  <meta property="og:site_name" content="${SITE_NAME}" />`,
    `  <meta property="og:locale" content="en_CA" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${esc(title)}" />`,
    `  <meta name="twitter:description" content="${esc(description)}" />`,
    `  <meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join("\n");

  html = html.replace("</head>", `${inject}\n</head>`);

  return html;
}

/* ── Main ────────────────────────────────────────────────────────── */
const baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");
const start = Date.now();
let count = 0;

for (const [citySlug, city] of Object.entries(CITIES)) {
  const pa = PA[city.province] ?? city.province;

  for (const [serviceSlug, svc] of Object.entries(SERVICES)) {
    const title       = fill(svc.title, city.name, pa);
    const description = fill(svc.meta,  city.name, pa);
    const canonical   = `${BASE}/${citySlug}/${serviceSlug}`;

    const html = injectMeta(baseHtml, title, description, canonical);

    const dir = join(distDir, citySlug, serviceSlug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html, "utf-8");
    count++;
  }
}

/* ── City × service × industry pages ─────────────────────────────── */
const INDUSTRY_PAGES = [
  {
    path: "toronto/local-seo/real-estate",
    title: "Local SEO for Real Estate Agents in Toronto, ON | Outlier",
    meta:  "Local SEO for Toronto real estate agents and brokerages. Map pack visibility, neighbourhood content architecture, and review strategy that generates consistent client enquiries. Free audit.",
  },
  {
    path: "toronto/seo-services/legal",
    title: "SEO for Law Firms in Toronto, ON | Outlier",
    meta:  "SEO for Toronto law firms. Practice area landing pages, GBP optimisation, LSO-compliant content, and authority building that generates organic client enquiries. Free law firm SEO audit.",
  },
  {
    path: "toronto/seo-services/dental",
    title: "SEO for Dental Clinics in Toronto, ON | Outlier",
    meta:  "SEO for Toronto dental clinics. Treatment-specific landing pages, GBP optimisation, RCDSO-compliant content, and authority building that fills appointment books. Free dental SEO audit.",
  },
  {
    path: "toronto/local-seo/healthcare",
    title: "Local SEO for Healthcare Clinics in Toronto, ON | Outlier",
    meta:  "Local SEO for Toronto healthcare clinics. GBP optimisation, neighbourhood pages, PHIPA-compliant review strategy, and patient acquisition through organic search. Free healthcare SEO audit.",
  },
];

for (const page of INDUSTRY_PAGES) {
  const canonical = `${BASE}/${page.path}`;
  const html = injectMeta(baseHtml, page.title, page.meta, canonical);
  const dir = join(distDir, ...page.path.split("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  count++;
}

console.log(`✓ Prerendered ${count} pages in ${Date.now() - start}ms`);

/* ── XML sitemap ───────────────────────────────────────────────── */
const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/our-work",
  "/insights",
  "/careers",
  "/privacy",
  "/terms",
  "/accessibility",
  "/sitemap",
  "/pricing",
  "/free-audit",
  "/book-call",
  "/testimonials",
  "/cities",
  "/custom-web-design-service",
  "/website-development-service",
  "/wordpress-development-service",
  "/joomla-development-service",
  "/drupal-development-service",
  "/laravel-web-development",
  "/ecommerce-development",
  "/magento-development",
  "/shopify-development",
  "/shopify-plus-development",
  "/headless-commerce-service",
  "/adobe-commerce-development",
  "/magento-2-development",
  "/magento-2-migration",
  "/magento-2-support",
  "/hyva-theme-development",
  "/hyva-enterprise-solutions",
  "/seo-services",
  "/technical-seo-service",
  "/ai-seo-service",
  "/digital-marketing",
  "/content-marketing-service",
  "/ai-chatbot-service",
  "/social-media-advertising",
  "/local-seo-service",
  "/google-ads-management",
  "/gbp-optimisation",
  "/citation-audit",
  "/review-generation",
  "/local-landing-pages",
  "/local-link-building",
  "/local-seo-reporting",
  "/google-search-campaigns",
  "/local-service-ads",
  "/performance-max",
  "/paid-social-service",
  "/display-retargeting",
  "/youtube-ads-service",
  "/cro-service",
  "/website-redesign-service",
  "/landing-page-design",
  "/ui-ux-design",
  "/blog-writing-service",
  "/topical-authority-service",
  "/email-marketing-service",
  "/social-media-service",
  "/video-script-service",
  "/core-web-vitals-service",
  "/crawl-budget-service",
  "/structured-data-service",
  "/redirect-audit-service",
  "/international-seo-service",
  "/ai-workflow-service",
  "/ai-integration-service",
  "/custom-ai-service",
  "/app-development-service",
  "/ai-lead-capture-service",
  "/dental-marketing",
  "/legal-marketing",
  "/home-services-marketing",
  "/real-estate-marketing",
  "/ecommerce-marketing",
  "/auto-marketing",
  "/saas-marketing",
  "/fitness-marketing",
  "/restaurant-marketing",
  "/b2b-marketing",
  "/b2c-marketing",
  "/d2c-marketing",
  "/food-beverage-marketing",
  "/education-marketing",
  "/transportation-marketing",
  "/healthcare-marketing",
  "/travel-marketing",
  "/fashion-marketing",
  "/entertainment-marketing",
  "/technology-marketing",
  "/small-business-marketing",
  "/construction-marketing",
  "/law-marketing",
  "/sports-fitness-marketing",
  "/toronto/local-seo-service",
  "/mississauga/local-seo-service",
  "/ottawa/local-seo-service",
];

const INSIGHT_PATHS = [
  "/insights/local-seo-2025",
  "/insights/ai-overviews-2025",
  "/insights/true-cost-bad-website",
  "/insights/ppc-budget-waste-7-mistakes",
  "/insights/topical-authority-playbook",
  "/insights/meridian-dental-map-pack",
  "/insights/gta-home-pros-google-ads",
  "/insights/citation-audit-framework",
];

const CASE_STUDY_PATHS = [
  "/our-work/toronto-limo-co",
  "/our-work/meridian-dental",
  "/our-work/gta-home-pros",
  "/our-work/axiom-law",
  "/our-work/northview-kitchens",
  "/our-work/purecycle-fitness",
  "/our-work/bluesky-roofing",
];

const sitemapUrls = new Set([
  ...STATIC_PATHS,
  ...INSIGHT_PATHS,
  ...CASE_STUDY_PATHS,
  ...INDUSTRY_PAGES.map((page) => `/${page.path}`),
]);

for (const citySlug of Object.keys(CITIES)) {
  for (const serviceSlug of Object.keys(SERVICES)) {
    sitemapUrls.add(`/${citySlug}/${serviceSlug}`);
  }
}

function priorityForPath(path) {
  if (path === "/") return "1.0";
  if (["/contact", "/free-audit", "/book-call", "/cities"].includes(path)) return "0.9";
  if (path.includes("/seo-services") || path.includes("/local-seo") || path.includes("/google-ads")) return "0.8";
  if (path.startsWith("/privacy") || path.startsWith("/terms") || path.startsWith("/accessibility")) return "0.3";
  return "0.7";
}

function changefreqForPath(path) {
  if (path === "/" || path === "/insights" || path === "/cities") return "weekly";
  if (path.startsWith("/privacy") || path.startsWith("/terms") || path.startsWith("/accessibility")) return "yearly";
  return "monthly";
}

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...Array.from(sitemapUrls).sort((a, b) => a.localeCompare(b)).map((path) => {
    const loc = path === "/" ? `${BASE}/` : `${BASE}${path}`;
    return `  <url><loc>${loc}</loc><changefreq>${changefreqForPath(path)}</changefreq><priority>${priorityForPath(path)}</priority></url>`;
  }),
  '</urlset>',
  '',
].join("\n");

writeFileSync(join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
writeFileSync(join(__dir, "..", "public", "sitemap.xml"), sitemapXml, "utf-8");
console.log(`✓ Wrote sitemap.xml with ${sitemapUrls.size} URLs`);
