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
const BASE = "https://outliermarketing.ca";

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

function injectMeta(baseHtml, title, description, canonical) {
  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);

  // Replace meta description (handles both /> and > endings, name or content first)
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${esc(description)}" />`
  );

  // Inject canonical just before </head>
  html = html.replace(
    "</head>",
    `  <link rel="canonical" href="${canonical}" />\n</head>`
  );

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

console.log(`✓ Prerendered ${count} pages in ${Date.now() - start}ms`);
