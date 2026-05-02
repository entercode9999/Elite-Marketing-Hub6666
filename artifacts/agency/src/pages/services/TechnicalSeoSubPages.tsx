import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_TECH = [
  { label: "Technical SEO Overview", href: "/technical-seo-service" },
  { label: "Content Marketing", href: "/content-marketing-service" },
  { label: "Local SEO Service", href: "/local-seo-service" },
  { label: "Web Design & CRO", href: "/custom-web-design-service" },
];

/* ── CORE WEB VITALS ── */
const cwvData: SubServiceData = {
  parentLabel: "Technical SEO", parentHref: "/technical-seo-service",
  label: "Core Web Vitals Optimisation",
  headline: "Green across LCP, CLS, and INP —",
  italic: "on every page template.",
  subhead: "Core Web Vitals are a confirmed Google ranking factor — and more importantly, they directly affect user experience and conversion rate. A slow page with a poor CLS score loses users before they read your headline. We fix the specific code-level issues causing your scores, not the surface-level ones.",
  stats: [{ value: "< 2s", label: "LCP target" }, { value: "< 0.1", label: "CLS target" }, { value: "< 200ms", label: "INP target" }],
  deliverables: [
    { title: "Page-Level CWV Audit", body: "LCP, CLS, and INP measured for every major page template on your site using real field data (CrUX) and lab data (Lighthouse). Issues mapped by template." },
    { title: "Image Optimisation", body: "Next-gen image formats (WebP, AVIF), proper sizing, lazy loading implementation, and explicit dimension attributes that eliminate layout shift." },
    { title: "Render-Blocking Resource Elimination", body: "JavaScript and CSS render-blocking issues identified and resolved. Third-party script deferral strategy that reduces LCP without breaking functionality." },
    { title: "Layout Shift Fixes", body: "Every element contributing to CLS identified — ads, embeds, dynamic content, fonts — and fixed with explicit sizing or loading strategy changes." },
  ],
  process: [
    { title: "Audit", body: "Full CWV audit using PageSpeed Insights, CrUX dashboard, and WebPageTest. Issues documented by page template, severity, and estimated fix effort." },
    { title: "Fix", body: "Fixes implemented in priority order — highest-traffic pages first. We implement directly or provide annotated instructions for your development team." },
    { title: "Verify", body: "Post-fix verification crawl. PageSpeed Insights scores re-checked. CrUX data monitored for 28-day improvement confirmation." },
  ],
  faq: [
    { q: "Will improving CWV actually improve my rankings?", a: "Core Web Vitals are a confirmed ranking signal in Google's Page Experience update. Improving from failing to passing CWV contributes to ranking improvement, though it's one of many signals." },
    { q: "Can you fix CWV without access to our codebase?", a: "Some fixes (image optimisation, CDN configuration) can be done at the server level. Most code-level fixes require development access. We provide precise implementation instructions if we can't implement directly." },
  ],
  related: RELATED_TECH,
  cta: "Every second of LCP costs you conversions. Here's the exact fix list.",
};

/* ── CRAWL BUDGET ── */
const crawlData: SubServiceData = {
  parentLabel: "Technical SEO", parentHref: "/technical-seo-service",
  label: "Crawl Budget Management",
  headline: "Make Googlebot spend its budget on",
  italic: "your highest-value pages.",
  subhead: "Crawl budget is finite — especially on large sites. If Googlebot is spending its allocated crawl budget on paginated archives, internal search results, and thin product variants, your important pages aren't being crawled frequently enough to rank competitively. We fix that.",
  stats: [{ value: "+40%", label: "Avg crawl efficiency gain" }, { value: "Log file", label: "Analysis included" }, { value: "10k+", label: "Page site speciality" }],
  deliverables: [
    { title: "Log File Analysis", body: "Server log analysis showing exactly how Googlebot is crawling your site: which pages it visits, how often, and which pages it's ignoring." },
    { title: "Crawl Waste Identification", body: "Identification of all URL categories consuming crawl budget without returning ranking value: paginated pages, faceted navigation, internal search, duplicate content." },
    { title: "Robots.txt & Noindex Strategy", body: "Robots.txt optimisation and noindex directives applied to low-value URLs — directing Googlebot toward your highest-priority content." },
    { title: "Sitemap Optimisation", body: "XML sitemap cleaned to include only indexable, canonical, 200-status URLs. Sitemap priority and changefreq values configured accurately." },
  ],
  process: [
    { title: "Log File Analysis", body: "Server logs obtained and analysed for Googlebot behaviour patterns. Crawl frequency and coverage compared against your important page set." },
    { title: "Prioritise & Fix", body: "Low-value URL categories identified and blocked or noindexed. Sitemap cleaned. Internal link structure updated to direct more equity to priority pages." },
    { title: "Monitor", body: "Post-fix crawl frequency monitoring via GSC. Log file re-analysis at 60 days to confirm improved crawl efficiency on target pages." },
  ],
  faq: [
    { q: "My site only has 500 pages — do I need crawl budget management?", a: "Probably not. Crawl budget management is primarily a concern for sites with 10,000+ pages, high rates of duplicate content, or sites experiencing indexation lag." },
    { q: "How do I get access to server logs?", a: "Your hosting provider or server admin can export log files. We provide exact instructions for your hosting environment. Some platforms (like Cloudflare) have built-in log access." },
  ],
  related: RELATED_TECH,
  cta: "If Googlebot isn't finding your best pages, they won't rank.",
};

/* ── STRUCTURED DATA ── */
const schemaData: SubServiceData = {
  parentLabel: "Technical SEO", parentHref: "/technical-seo-service",
  label: "Structured Data & Schema Markup",
  headline: "Rich snippets that earn more clicks —",
  italic: "before you outrank anyone.",
  subhead: "Schema markup tells Google exactly what your content is — and earns rich results (star ratings, FAQs, how-to steps, product prices) that dramatically increase CTR from the same ranking position. A position #3 result with star ratings often outperforms position #1 without them.",
  stats: [{ value: "12+", label: "Schema types implemented" }, { value: "+22%", label: "Avg CTR lift" }, { value: "4–6 wks", label: "Rich results eligibility" }],
  deliverables: [
    { title: "LocalBusiness & Service Schema", body: "For local businesses: LocalBusiness, GeoCoordinates, opening hours, price range, and Service schema — the foundation for map pack and knowledge panel enhancement." },
    { title: "FAQ & HowTo Schema", body: "FAQ schema on service and informational pages for PAA box inclusion. HowTo schema on process-oriented content for rich step results." },
    { title: "Article & BreadcrumbList", body: "Article schema on all blog content with author, date, and publisher properties. BreadcrumbList on every paginated content type." },
    { title: "Product & Review Schema", body: "For eCommerce and review pages: Product schema with price, availability, and aggregate rating. Review schema for testimonial pages." },
  ],
  process: [
    { title: "Schema Audit", body: "Audit of all existing schema for errors, missing properties, and rich result eligibility. GSC Rich Results report reviewed." },
    { title: "Implement", body: "Schema implemented via JSON-LD in the page head — the recommended format. Validated in Google's Rich Results Test before deployment." },
    { title: "Monitor", body: "GSC Rich Results report monitored for new impressions and click data. Schema updated when Google adds new eligible result types." },
  ],
  faq: [
    { q: "Does schema markup help with rankings or just CTR?", a: "Both. Schema provides direct CTR improvements through rich results. It also helps Google understand your content more accurately, which correlates with ranking improvements — especially for local and eCommerce." },
    { q: "Which schema type will make the biggest impact for my business?", a: "For local service businesses: LocalBusiness + FAQ. For eCommerce: Product + Review. For content sites: Article + FAQ + HowTo. We prioritise the types with the highest rich result eligibility for your content." },
  ],
  related: RELATED_TECH,
  cta: "Rich results earn clicks at positions your competitors haven't reached yet.",
};

/* ── REDIRECT AUDIT ── */
const redirectData: SubServiceData = {
  parentLabel: "Technical SEO", parentHref: "/technical-seo-service",
  label: "Redirect Audit & Fixes",
  headline: "Eliminate chains. Preserve every point",
  italic: "of your link equity.",
  subhead: "Every redirect hop costs you PageRank. A redirect chain (A→B→C→D) can bleed up to 15% of link equity at each hop. And redirect loops cause Googlebot to stop crawling entirely. We audit, map, and fix every redirect on your site with clean, direct 301s.",
  stats: [{ value: "100%", label: "Chain elimination" }, { value: "Full", label: "URL mapping" }, { value: "301", label: "Verified implementation" }],
  deliverables: [
    { title: "Full Redirect Chain Audit", body: "We crawl every URL on your site and map every redirect, chain, and loop. Every path from any URL to its final destination documented." },
    { title: "URL Mapping Spreadsheet", body: "A complete map of every redirect — current path, chain hops, final destination, and correct direct 301 — reviewed and approved before any changes are made." },
    { title: "301 Implementation", body: "Clean, direct 301 redirects implemented for every chain. Redirect loops broken. Implementation verified with a post-fix crawl before sign-off." },
    { title: "Post-Fix Monitoring", body: "45-day post-implementation crawl monitoring to catch any new redirects added by content updates, CMS changes, or platform migrations." },
  ],
  process: [
    { title: "Crawl & Document", body: "Full site crawl with redirect chain mapping. Every URL's redirect path documented in a spreadsheet with chain length and final destination." },
    { title: "Map & Approve", body: "Correct destination for every redirected URL determined and added to the mapping spreadsheet. Client approval before any live changes." },
    { title: "Implement & Verify", body: "Direct 301s implemented. Post-implementation crawl confirms zero chains remain. GSC crawl stats monitored for confirmation." },
  ],
  faq: [
    { q: "How many redirect chains is too many?", a: "Even a single 3-hop chain (A→B→C→final) is losing you PageRank on every link pointing to URL A. If you have links from high-authority sites pointing to redirected URLs, fixing those chains can produce measurable ranking improvements within weeks." },
    { q: "Do you fix redirects on all CMS platforms?", a: "Yes — WordPress, Shopify, Webflow, Squarespace, and custom platforms. The implementation method varies by platform, but we handle all of them." },
  ],
  related: RELATED_TECH,
  cta: "Every redirect chain is bleeding the link equity you worked to earn.",
};

/* ── INTERNATIONAL SEO ── */
const intlData: SubServiceData = {
  parentLabel: "Technical SEO", parentHref: "/technical-seo-service",
  label: "International SEO & Hreflang",
  headline: "Hreflang done right — so each market",
  italic: "gets the right page.",
  subhead: "International SEO errors are catastrophic for multi-language or multi-country sites. A single missing hreflang tag causes duplicate content across markets. We implement hreflang correctly — with the x-default, canonical, and sitemap integration that Google's algorithm requires.",
  stats: [{ value: "25+", label: "Language pairs supported" }, { value: "ccTLD", label: "+ subdirectory strategy" }, { value: "Geo-targeting", label: "GSC configuration" }],
  deliverables: [
    { title: "Hreflang Implementation", body: "Self-referencing hreflang tags for every language and region variant. x-default configuration for users in uncovered markets. Implemented via HTML head and XML sitemap." },
    { title: "URL Structure Strategy", body: "ccTLD vs. subdirectory vs. subdomain analysis based on your market expansion priorities, domain authority, and server configuration." },
    { title: "Geo-Targeting Configuration", body: "Google Search Console geo-targeting settings configured for each country property. Bing Webmaster Tools international targeting configured in parallel." },
    { title: "Duplicate Content Audit", body: "Cross-market duplicate content identified and resolved with correct canonical tags, hreflang, and content differentiation where required." },
  ],
  process: [
    { title: "Audit", body: "Existing hreflang implementation audited for errors, missing tags, and broken return tags. Duplicate content across markets mapped." },
    { title: "Strategy", body: "URL structure decision (ccTLD / subdirectory / subdomain), hreflang tag set built, and canonical strategy for cross-market content documented." },
    { title: "Implement & Verify", body: "Hreflang implemented in HTML head and XML sitemap. GSC geo-targeting configured. Post-implementation crawl confirms zero hreflang errors." },
  ],
  faq: [
    { q: "What's the most common hreflang mistake?", a: "Missing return tags. If page A in English has a hreflang pointing to page B in French, page B must have a hreflang pointing back to page A. If the return tag is missing, Google ignores both." },
    { q: "ccTLD or subdirectory — which is better?", a: "ccTLDs (example.ca, example.co.uk) provide the strongest geo-targeting signals but require building separate domain authority. Subdirectories (example.com/ca/) share authority and are easier to manage. For most businesses, subdirectories are the practical choice." },
  ],
  related: RELATED_TECH,
  cta: "International SEO done wrong creates more problems than it solves.",
};

export function CoreWebVitalsPage() { return <SubServicePage data={cwvData} />; }
export function CrawlBudgetPage() { return <SubServicePage data={crawlData} />; }
export function StructuredDataPage() { return <SubServicePage data={schemaData} />; }
export function RedirectAuditPage() { return <SubServicePage data={redirectData} />; }
export function InternationalSeoPage() { return <SubServicePage data={intlData} />; }
