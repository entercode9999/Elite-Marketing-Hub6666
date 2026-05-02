import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_WEB = [
  { label: "Web Design Overview", href: "/custom-web-design-service" },
  { label: "eCommerce Development", href: "/ecommerce-development" },
  { label: "Technical SEO", href: "/technical-seo-service" },
  { label: "Google Ads Management", href: "/google-ads-management" },
];

/* ── CRO ── */
const croData: SubServiceData = {
  parentLabel: "Web Design & CRO", parentHref: "/custom-web-design-service",
  label: "Conversion Rate Optimisation",
  headline: "More revenue from the traffic you already have.",
  italic: "Without buying more clicks.",
  subhead: "CRO is the highest-ROI investment a business with existing traffic can make. Instead of paying for more visitors, we fix the funnel that's already losing them. A 2% CVR improvement on 10,000 monthly visitors outperforms $5,000 in additional ad spend.",
  stats: [{ value: "+28%", label: "Avg CVR lift" }, { value: "A/B", label: "Test-driven framework" }, { value: "90 days", label: "First sprint results" }],
  deliverables: [
    { title: "CRO Audit & Heatmap Analysis", body: "We use Hotjar or Clarity heatmaps, session recordings, and GA4 funnel data to identify exactly where users drop off and why." },
    { title: "Hypothesis Development", body: "Each test is built on a clear hypothesis derived from data — not gut instinct. We document what we're testing, why, and what success looks like." },
    { title: "A/B & Multivariate Testing", body: "Tests run using Google Optimize or Optimizely. We test headlines, CTAs, form layouts, page hierarchy, and trust signals — one variable at a time for clear data." },
    { title: "Landing Page Optimisation", body: "Your highest-traffic landing pages redesigned and tested for conversion. Each iteration informed by the previous test's data." },
  ],
  process: [
    { title: "Audit", body: "Full funnel analysis: heatmaps, session recordings, GA4 goal tracking, and form analytics. We identify the top 5 highest-ROI fix opportunities." },
    { title: "Prioritise & Test", body: "Tests prioritised by potential impact × confidence × ease (PIE framework). Run for statistical significance — not time." },
    { title: "Implement & Compound", body: "Winning variants become the new control. We continuously cycle through new tests as the funnel improves. CRO is never finished." },
  ],
  faq: [
    { q: "How much traffic do I need for CRO to work?", a: "For A/B testing to reach statistical significance, we need at least 1,000 monthly visitors to the page being tested. Below that, we focus on qualitative improvements." },
    { q: "How long does CRO take to show results?", a: "Most tests run 3–6 weeks to reach significance. You'll see the first results within 30–60 days, with compounding improvements over a 6–12 month sprint cycle." },
  ],
  related: RELATED_WEB,
  cta: "Every 1% CVR improvement pays for this service multiple times over.",
};

/* ── WEBSITE REDESIGN ── */
const redesignData: SubServiceData = {
  parentLabel: "Web Design & CRO", parentHref: "/custom-web-design-service",
  label: "Website Redesign (No SEO Loss)",
  headline: "Redesign your site without losing",
  italic: "a single ranking.",
  subhead: "Website redesigns are the most common cause of catastrophic SEO traffic drops. We manage the full redesign process with a structured pre-launch SEO checklist, URL mapping, redirect implementation, and post-launch monitoring — so your ranking history transfers completely to the new site.",
  stats: [{ value: "0%", label: "Avg traffic drop" }, { value: "Full", label: "Redirect mapping included" }, { value: "Pre/post", label: "Rank tracking" }],
  deliverables: [
    { title: "Pre-Redesign SEO Audit", body: "Complete crawl of your existing site before any design work begins. All ranking pages, canonical URLs, structured data, and internal links documented." },
    { title: "URL Mapping & Redirect Plan", body: "Every existing URL mapped to its new equivalent. 301 redirect implementation plan built before launch — not after you've noticed a ranking drop." },
    { title: "Technical SEO Transfer Checklist", body: "30-point technical checklist covering meta data, schema, canonical tags, robots.txt, sitemap, and hreflang — verified on staging before launch." },
    { title: "Post-Launch Monitoring", body: "60-day post-launch crawl monitoring with weekly rank tracking. Any indexation issues are caught and resolved within days, not months." },
  ],
  process: [
    { title: "Pre-Launch Audit", body: "Full site crawl, ranking page inventory, and URL structure documentation. Redirect mapping built in a spreadsheet signed off before any code changes." },
    { title: "Staging Review", body: "Complete technical SEO audit on the staging site before go-live. We check every item on our 30-point checklist and block launch until all are resolved." },
    { title: "Launch + Monitor", body: "Coordinated launch with immediate GSC monitoring. Daily crawl checks in the first week. Weekly rank tracking for 60 days post-launch." },
  ],
  faq: [
    { q: "Why do website redesigns cause traffic drops?", a: "Because URLs change without proper redirects, meta data is lost, structured data is removed, internal links break, and canonical tags are misconfigured. Any one of these tanks rankings. We prevent all of them." },
    { q: "Can you work with any web development team?", a: "Yes. We work with your existing development agency or team as the SEO partner. We provide the pre-launch checklist, review the staging site, and monitor post-launch." },
  ],
  related: RELATED_WEB,
  cta: "Your redesign should make you more visible — not less.",
};

/* ── LANDING PAGE DESIGN ── */
const landingPageDesignData: SubServiceData = {
  parentLabel: "Web Design & CRO", parentHref: "/custom-web-design-service",
  label: "Landing Page Design",
  headline: "Landing pages built to convert,",
  italic: "not just look good.",
  subhead: "A dedicated landing page matched to a specific ad campaign outperforms a homepage by 300–400% on conversion rate. We design campaign-specific landing pages with the headline alignment, trust signals, form placement, and mobile optimisation that Google Ads and paid social campaigns need.",
  stats: [{ value: "+41%", label: "Avg CVR vs. homepage" }, { value: "< 2s", label: "Load time target" }, { value: "Mobile-first", label: "Design approach" }],
  deliverables: [
    { title: "Message Match Design", body: "Landing page headline and subhead matched to the exact ad copy users clicked. Message match is the #1 factor in post-click conversion and Quality Score." },
    { title: "Trust Signal Hierarchy", body: "Reviews, certifications, logos, guarantees, and social proof placed in the exact positions where they reduce friction — not where they look good." },
    { title: "Form & CTA Optimisation", body: "Form field minimisation, CTA copy testing, and button placement optimised for your conversion action. We test multi-step forms for high-intent campaigns." },
    { title: "Mobile-First Responsive Build", body: "Built mobile-first and tested on real devices. Over 60% of paid ad clicks are from mobile — a desktop-optimised landing page loses them immediately." },
  ],
  process: [
    { title: "Brief & Strategy", body: "Campaign objective, target audience, and primary conversion action defined. Competitor landing page analysis completed before any design begins." },
    { title: "Design & Build", body: "Wireframe reviewed and approved. Development on your existing CMS or a standalone platform. Full copy written and reviewed before launch." },
    { title: "Test & Iterate", body: "Post-launch A/B testing on headline, CTA, and form layout. Conversion data reviewed weekly with recommendations." },
  ],
  faq: [
    { q: "Should every ad campaign have its own landing page?", a: "Yes — every campaign with a distinct offer, audience, or intent level should have its own dedicated landing page. Sending all traffic to your homepage costs you 30–50% in conversion rate." },
    { q: "What platform do you build landing pages on?", a: "We can build on Webflow, WordPress, Unbounce, or your existing CMS. We recommend the platform that best integrates with your existing tracking and CRM stack." },
  ],
  related: RELATED_WEB,
  cta: "Your ad spend deserves a page that converts — not your homepage.",
};

/* ── UI/UX DESIGN ── */
const uiuxData: SubServiceData = {
  parentLabel: "Web Design & CRO", parentHref: "/custom-web-design-service",
  label: "UI/UX Design & Prototyping",
  headline: "Interfaces that reduce friction",
  italic: "and increase conversion.",
  subhead: "Design that's beautiful but confusing costs you revenue. We apply conversion-focused UX principles — information hierarchy, progressive disclosure, cognitive load reduction — to create interfaces that users understand intuitively and convert through naturally.",
  stats: [{ value: "95+", label: "Lighthouse UX score" }, { value: "< 3 clicks", label: "Max conversion depth" }, { value: "Figma", label: "Prototype → dev handoff" }],
  deliverables: [
    { title: "UX Audit", body: "A systematic review of your existing UI for conversion friction points: unclear CTAs, confusing navigation, excessive form fields, and poor information hierarchy." },
    { title: "Wireframe & Prototype", body: "Low-fidelity wireframes for structural feedback, followed by high-fidelity interactive Figma prototypes for stakeholder approval before any development work." },
    { title: "User Flow Mapping", body: "Every user journey mapped from entry point to conversion — with the specific friction points at each step identified and addressed in the design." },
    { title: "Design System Creation", body: "Component library in Figma with all UI elements, colour tokens, typography, and spacing — so future updates are consistent and fast to build." },
  ],
  process: [
    { title: "Audit & Research", body: "UX audit of your existing product or site. Competitor benchmarking. Heatmap and session recording analysis for data-driven improvement hypotheses." },
    { title: "Wireframe + Prototype", body: "Low-fi wireframes for structural review. High-fi prototype for stakeholder approval. User testing with 5-person sessions if required." },
    { title: "Handoff + Support", body: "Full design system handoff to your development team with annotated Figma files and a dev QA review session post-implementation." },
  ],
  faq: [
    { q: "Do you do the development or just the design?", a: "We do both — design and development. Or design only with handoff to your existing team. We're flexible based on your in-house capabilities." },
    { q: "What's included in the design system?", a: "Colour palette, typography scale, spacing system, component library (buttons, forms, cards, navigation), and dark/light mode variants if applicable." },
  ],
  related: RELATED_WEB,
  cta: "Every friction point in your interface is a conversion you're losing.",
};

export function CROPage() { return <SubServicePage data={croData} />; }
export function WebsiteRedesignPage() { return <SubServicePage data={redesignData} />; }
export function LandingPageDesignPage() { return <SubServicePage data={landingPageDesignData} />; }
export function UIUXDesignPage() { return <SubServicePage data={uiuxData} />; }
