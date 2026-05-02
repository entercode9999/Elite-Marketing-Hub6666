import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_LOCAL = [
  { label: "Local SEO Overview", href: "/local-seo-service" },
  { label: "Mississauga Local SEO", href: "/mississauga/local-seo-service" },
  { label: "Toronto Local SEO", href: "/toronto/local-seo-service" },
  { label: "Google Ads Management", href: "/google-ads-management" },
];

/* ── GBP OPTIMISATION ── */
const gbpData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Google Business Profile Optimisation",
  headline: "Your GBP is your most powerful local marketing channel.",
  italic: "We build it to perform.",
  subhead: "Most businesses treat Google Business Profile as a one-time setup. We manage it as an active marketing channel — weekly posts, Q&A, seasonal attributes, photo strategy, and review responses that collectively signal ongoing relevance to Google.",
  stats: [{ value: "+4.2x", label: "Avg profile view lift" }, { value: "4.9★", label: "Avg rating maintained" }, { value: "30%", label: "Avg click-through rate" }],
  deliverables: [
    { title: "Full GBP Audit & Rebuild", body: "Category selection, service configuration, attributes, service areas, Q&A seeding, and photo library strategy — built from scratch if needed." },
    { title: "Weekly Posting Schedule", body: "7 posts/month covering offers, updates, events, and service highlights. Each post optimised for keyword relevance in your primary service categories." },
    { title: "Seasonal Attribute Management", body: "Attributes updated quarterly for hours, accessibility, payment methods, and seasonal services. A signal most competitors miss entirely." },
    { title: "Review Response Strategy", body: "Every review responded to in your brand voice within 24 hours. Positive responses amplify the signal; negative responses protect your reputation." },
  ],
  process: [
    { title: "Audit & Competitive Gap", body: "We audit your GBP against every business in your map pack and identify every attribute, category, or signal gap that's costing you position." },
    { title: "Full Rebuild", body: "We rebuild the profile with correct service-area configuration, complete category stack, all relevant attributes, Q&A populated, and photos organised by query relevance." },
    { title: "Active Management", body: "Weekly posts, monthly attribute reviews, and ongoing Q&A monitoring. We treat GBP like your most important content channel — because it is." },
  ],
  faq: [
    { q: "How long before GBP changes affect my rankings?", a: "GBP changes can produce map pack movement within 2–4 weeks for competitive signals like category changes. Full compound effects from weekly posting typically become measurable in 8–12 weeks." },
    { q: "Do I need a physical address?", a: "No. A service-area GBP without a physical address can rank in the map pack. We configure your service radius correctly and work around any proximity limitations." },
  ],
  related: RELATED_LOCAL,
  cta: "The map pack moves every week. Here's how to stay in it.",
};

/* ── CITATION AUDIT & BUILD ── */
const citationData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Citation Audit & Build",
  headline: "Fix your NAP data across 45+ directories.",
  italic: "Win the map pack.",
  subhead: "Inconsistent Name, Address, Phone data across directories is one of the top suppressors of map pack rankings. We audit every citation, correct every inconsistency, and build new listings in the directories your competitors are using that you aren't.",
  stats: [{ value: "45+", label: "Directories audited" }, { value: "3 wks", label: "Avg cleanup timeline" }, { value: "+28%", label: "Avg map pack movement" }],
  deliverables: [
    { title: "Full Citation Audit", body: "We crawl 45+ Canadian directories and compare your NAP data across all of them. Every inconsistency is documented before we touch anything." },
    { title: "Competitive Gap Analysis", body: "We identify which directories your top map pack competitors are listed in that you aren't — and build those listings first." },
    { title: "Citation Cleanup", body: "Corrections submitted across all major and local directories. We handle the submission process and verify each fix with a screenshot record." },
    { title: "New Citation Build", body: "15–20 new high-authority directory listings in your first engagement. Prioritised by domain authority and geographic relevance." },
  ],
  process: [
    { title: "Full Citation Audit", body: "Automated + manual review of your NAP data across 45+ Canadian directories. Competitor comparison across every priority query." },
    { title: "Fix + Build", body: "Corrections submitted systematically with verification screenshots. New listings built in directories your competitors are using that you aren't." },
    { title: "Monitor", body: "Monthly re-audit to catch new inconsistencies before they compound. Automatic alerts when new citations appear with incorrect data." },
  ],
  faq: [
    { q: "Why do citation inconsistencies hurt rankings?", a: "Google cross-references your business data across multiple sources to verify legitimacy. Inconsistent NAP data signals unreliability and suppresses your map pack position — even if everything else is correct." },
    { q: "How long does citation cleanup take?", a: "Most directories process corrections within 2–4 weeks. The full citation graph is clean in approximately 6–8 weeks. Map pack movement typically begins at 4–6 weeks." },
  ],
  related: RELATED_LOCAL,
  cta: "Your NAP data is probably wrong in 12+ places. Let's find them.",
};

/* ── REVIEW GENERATION ── */
const reviewData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Review Generation System",
  headline: "Consistent review velocity is a ranking signal.",
  italic: "Build it systematically.",
  subhead: "A single review burst is noise. A consistent velocity of 4–8 reviews per month is a signal Google rewards. We build the automated request flows, response systems, and velocity strategy that keeps your review count growing every month — not just after a campaign.",
  stats: [{ value: "+58", label: "Avg net reviews/engagement" }, { value: "4.9★", label: "Avg rating achieved" }, { value: "90%", label: "Review response rate" }],
  deliverables: [
    { title: "Automated Request Flows", body: "SMS and email sequences triggered after service completion. Timing and messaging tested for maximum response rate in your specific vertical." },
    { title: "Review Response System", body: "Every review responded to within 24 hours in your brand voice. Positive responses are keyword-optimised. Negative responses are de-escalated professionally." },
    { title: "Platform Diversification", body: "We build review velocity across Google, Facebook, and industry-specific platforms (HomeStars, RateMDs, AvvoCA) — not just Google." },
    { title: "Monthly Velocity Reporting", body: "Review count, average rating, velocity vs. pack competitors, and sentiment analysis — delivered monthly with the strategy adjustment for next month." },
  ],
  process: [
    { title: "Audit & Setup", body: "Review velocity audit across all platforms vs. your map pack competitors. Request flow setup with your CRM or booking system integration." },
    { title: "Launch & Calibrate", body: "First 30 days: monitor response rates by channel, time-of-send, and message variant. Optimise for your specific customer base." },
    { title: "Compound & Manage", body: "Ongoing management of the request flow, response queue, and monthly velocity reporting. Strategy updates based on what your competitors are doing." },
  ],
  faq: [
    { q: "Is this compliant with Google's guidelines?", a: "Yes. We use post-service request flows with no incentivisation — exactly what Google's guidelines permit. We never purchase reviews or use anything that could trigger a penalty." },
    { q: "What if we receive a negative review?", a: "We respond promptly and professionally to neutralise the impact. A well-handled negative review often builds more trust than a positive one. We manage the entire response process." },
  ],
  related: RELATED_LOCAL,
  cta: "Your competitors are generating reviews automatically. Here's how.",
};

/* ── LOCAL LANDING PAGES ── */
const landingPagesData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Local Landing Pages",
  headline: "A page for every city and neighbourhood.",
  italic: "Authority in every market.",
  subhead: "Google's local algorithm rewards geographic specificity. A page targeting 'dental Streetsville' outperforms a general 'dental Toronto' page in Streetsville. We build city-specific and neighbourhood-level landing pages structured to rank — not thin pages that get penalised.",
  stats: [{ value: "12–18", label: "Pages avg per engagement" }, { value: "#1–3", label: "Map pack target per page" }, { value: "+47%", label: "Avg local traffic lift" }],
  deliverables: [
    { title: "City-Level Pages", body: "Pages targeting your primary city markets — each with unique content, LocalBusiness schema, and internal linking to your service pages." },
    { title: "Neighbourhood Pages", body: "Sub-city pages targeting individual neighbourhoods where your customers are searching. 600–900 words of genuine geographic content per page." },
    { title: "LocalBusiness Schema", body: "Structured data markup on every page — LocalBusiness, Service, FAQ, and BreadcrumbList. Rich result eligibility from day one." },
    { title: "Internal Link Mesh", body: "A systematic internal linking structure connecting your local pages to each other and to your main service pages — passing authority throughout the cluster." },
  ],
  process: [
    { title: "Keyword Map", body: "We map every city × service keyword combination in your market, prioritised by search volume and competition level." },
    { title: "Template + Content", body: "Page template designed for local intent. Each page gets unique content referencing real local landmarks, areas, and community context." },
    { title: "Launch + Monitor", body: "Pages published and submitted to Google Search Console. Rank tracking for every page from week one. Monthly updates based on search data." },
  ],
  faq: [
    { q: "Won't multiple city pages be considered duplicate content?", a: "Not if they're done correctly. Each page has unique city-specific content, different headings, local context, and distinct internal linking. We write real content, not spun templates." },
    { q: "How many pages should I have?", a: "It depends on your market coverage. Most clients serving 5–10 GTA markets need 15–30 pages. Multi-location businesses serving all of Ontario may need 60–100." },
  ],
  related: RELATED_LOCAL,
  cta: "Every city you serve deserves its own page.",
};

/* ── LOCAL LINK BUILDING ── */
const linkBuildingData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Local Link Building",
  headline: "Proximity-first links that move",
  italic: "local rankings.",
  subhead: "National links help domain authority. Local links move map pack positions. We build editorial links from local directories, community organisations, chambers of commerce, and local press — the exact link types that correlate with map pack position in your specific market.",
  stats: [{ value: "15–20", label: "Local links/month" }, { value: "DA 30+", label: "Average link authority" }, { value: "93%", label: "Link retention rate" }],
  deliverables: [
    { title: "Local Directory Links", body: "Editorial listings in high-authority local directories beyond the standard citation tier — neighbourhood-specific directories, BIA listings, and community sites." },
    { title: "Chamber & Association Links", body: "Membership and editorial links from chambers of commerce, local BIAs, and relevant professional associations. Real editorial links with local authority." },
    { title: "Local Press Outreach", body: "Story pitching to local newspapers, community blogs, and neighbourhood associations. Links from local news sites carry disproportionate weight in map pack algorithms." },
    { title: "Sponsorship Link Strategy", body: "Local sponsorships of events, sports leagues, and community initiatives — structured to earn real editorial links, not just logo placements." },
  ],
  process: [
    { title: "Link Gap Analysis", body: "We compare your link profile against every business in your map pack and identify every local link source they have that you don't." },
    { title: "Outreach & Build", body: "Systematic outreach to local link opportunities — directories, chambers, associations, press, and sponsorships — personalised and not templated." },
    { title: "Monitor & Maintain", body: "Monthly link report with new links earned, link retention monitoring, and identification of lost links that need to be recovered." },
  ],
  faq: [
    { q: "Why focus on local links specifically?", a: "Google's local algorithm weights links from geographically relevant sources more heavily for map pack rankings. A link from a Mississauga community blog moves your Mississauga map pack position more than a national link." },
    { q: "What types of businesses can you build links for?", a: "Any local service business. We've built local link profiles for dental, legal, HVAC, auto, real estate, physiotherapy, and restaurant clients across the GTA." },
  ],
  related: RELATED_LOCAL,
  cta: "Your map pack competitors have links you don't. Let's close the gap.",
};

/* ── LOCAL SEO REPORTING ── */
const reportingData: SubServiceData = {
  parentLabel: "Local SEO", parentHref: "/local-seo-service",
  label: "Monthly Pack Reporting",
  headline: "Know exactly where you stand —",
  italic: "against the pack, not yourself.",
  subhead: "Most agency reports show your own rankings vs. last month. We show your rankings vs. every business in your map pack — so you can see whether you're gaining or losing ground on the businesses that actually matter.",
  stats: [{ value: "Weekly", label: "Rank tracking frequency" }, { value: "15+", label: "Keywords tracked avg" }, { value: "Pack-level", label: "Competitor benchmarking" }],
  deliverables: [
    { title: "Pack-Level Rank Tracking", body: "Weekly rank tracking across all your priority city × service keyword combinations — showing your position vs. every business currently in the pack." },
    { title: "GBP Performance Report", body: "Monthly GBP insights: profile views, direction requests, call clicks, and photo views — vs. your previous month and vs. pack competitors." },
    { title: "Review Velocity Report", body: "Review count, rating, and velocity vs. pack competitors. We show you exactly how many reviews you need to exceed the pack leader's velocity." },
    { title: "Monthly Strategy Note", body: "A written analysis of what moved, what didn't, and what we're changing next month — not just a dashboard you're left to interpret yourself." },
  ],
  process: [
    { title: "Baseline Setup", body: "Keyword set defined, rank tracking configured, pack competitor profiles identified, and GBP performance baseline established in the first week." },
    { title: "Weekly Tracking", body: "Automated rank tracking across all keywords with weekly snapshots. Alerts when significant pack position changes occur." },
    { title: "Monthly Report + Call", body: "Full report delivered with a 30-minute strategy call to walk through what moved, competitive intelligence from the pack, and next-month priorities." },
  ],
  faq: [
    { q: "What keywords do you track?", a: "We track every priority city × service combination in your market — typically 15–30 keywords for a single-location business, up to 100+ for multi-location clients." },
    { q: "How often are reports delivered?", a: "Monthly reports with weekly rank data included. Significant ranking changes trigger an immediate alert outside of the regular reporting cycle." },
  ],
  related: RELATED_LOCAL,
  cta: "Stop guessing. Start knowing your exact pack position every week.",
};

export function GBPOptimisationPage() { return <SubServicePage data={gbpData} />; }
export function CitationAuditPage() { return <SubServicePage data={citationData} />; }
export function ReviewGenerationPage() { return <SubServicePage data={reviewData} />; }
export function LocalLandingPagesPage() { return <SubServicePage data={landingPagesData} />; }
export function LocalLinkBuildingPage() { return <SubServicePage data={linkBuildingData} />; }
export function LocalSeoReportingPage() { return <SubServicePage data={reportingData} />; }
