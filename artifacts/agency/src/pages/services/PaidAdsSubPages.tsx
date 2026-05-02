import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_PAID = [
  { label: "Google Ads Overview", href: "/google-ads-management" },
  { label: "Paid Social (Meta & TikTok)", href: "/paid-social-service" },
  { label: "Local Service Ads", href: "/local-service-ads" },
  { label: "Local SEO Service", href: "/local-seo-service" },
];

/* ── GOOGLE SEARCH CAMPAIGNS ── */
const searchData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "Google Search Campaigns",
  headline: "Search campaigns built for revenue,",
  italic: "not impressions.",
  subhead: "Google Search is the highest-intent advertising channel that exists. We build campaigns structured around revenue — intent-layered keyword architecture, RSA copy testing, and negative keyword management that keeps your budget on the searches that convert.",
  stats: [{ value: "4.2x", label: "Avg ROAS" }, { value: "-38%", label: "CPA vs. prior agency" }, { value: "$0", label: "% of spend fees" }],
  deliverables: [
    { title: "Intent-Layered Keyword Strategy", body: "Keywords organised by intent tier: high-intent transactional, mid-intent research, and branded. Each tier managed with separate bid strategies and separate budgets." },
    { title: "RSA Copy Development", body: "15 headlines and 4 descriptions per ad group, systematically tested for CTR and conversion rate. We write and iterate until you're above benchmark." },
    { title: "Negative Keyword Management", body: "We build negative keyword lists before launch — not reactively. Query mining reviews every 2 weeks add new negatives that prevent budget bleed." },
    { title: "Conversion Tracking Setup", body: "Goal tracking verified for every conversion type: form fills, calls, chats, and purchases. Without verified tracking, optimisation is guesswork." },
  ],
  process: [
    { title: "Account Audit", body: "Full review of existing structure, quality scores, keyword coverage, negative lists, and wasted spend. New accounts skip to strategy." },
    { title: "Build", body: "Campaign architecture, keyword groupings, RSA copy, extensions, negative lists, and conversion tracking verified before a dollar is spent." },
    { title: "Optimise", body: "Daily optimisation in the first 2 weeks. Weekly thereafter — query mining, bid adjustments, copy testing, and Quality Score improvement." },
  ],
  faq: [
    { q: "What budget do you need to run Google Search campaigns?", a: "We require a minimum of $3,000/month in ad spend to generate enough conversion data for meaningful optimisation. Below that, results are slow and margins are tight for both parties." },
    { q: "How quickly will I see results?", a: "First 2–4 weeks: data gathering. Weeks 4–8: CPA optimisation begins. Most clients see ROAS improvement vs. their previous agency within 60 days." },
  ],
  related: RELATED_PAID,
  cta: "Your search budget is probably being wasted on the wrong queries.",
};

/* ── LOCAL SERVICE ADS ── */
const lsaData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "Local Service Ads (Google Guaranteed)",
  headline: "Google Guaranteed — the most trusted ad format",
  italic: "for local service businesses.",
  subhead: "Local Service Ads appear above everything — above regular Google Ads, above the map pack, above organic results. They carry the Google Guaranteed badge and you pay per lead, not per click. We handle the full verification, optimisation, and management process.",
  stats: [{ value: "Pos. 0", label: "Above all other ads" }, { value: "Per lead", label: "Pay model — not per click" }, { value: "Google", label: "Guaranteed badge" }],
  deliverables: [
    { title: "LSA Verification & Setup", body: "Full Google Guaranteed verification process: business licence, insurance, background checks, and Google's vetting. We guide you through every step." },
    { title: "Profile Optimisation", body: "Business categories, service areas, photos, reviews imported from GBP, and budget configuration — all optimised for the highest-quality leads." },
    { title: "Lead Management", body: "We review every lead, dispute invalid ones, and feed data back into Google's system to improve lead quality over time." },
    { title: "Budget & Bid Management", body: "Weekly budget reviews based on lead volume and cost-per-lead targets. We adjust bids by service category and geographic zone." },
  ],
  process: [
    { title: "Eligibility & Verification", body: "We confirm your business is eligible for LSAs in your category and location, then guide you through Google's verification process end-to-end." },
    { title: "Profile Build & Launch", body: "Categories, services, service areas, photos, and budget configured. We launch with a conservative budget and scale based on lead quality data." },
    { title: "Lead Review & Optimise", body: "Every lead reviewed. Invalid leads disputed. Feedback signals improve lead quality. Budget scaled as CPL targets are met." },
  ],
  faq: [
    { q: "Which businesses are eligible for Google Local Service Ads?", a: "LSAs are available for most local service categories: HVAC, plumbing, electrical, roofing, locksmith, pet grooming, legal, financial planning, and more. We'll confirm eligibility for your specific category before starting." },
    { q: "How much does a Local Service Ad lead cost?", a: "CPL varies by category and market. In the GTA, LSA leads typically range from $18–$65 depending on your service type. We track your exact CPL and optimise the lead quality over time." },
  ],
  related: RELATED_PAID,
  cta: "The Google Guaranteed badge is the highest-trust position in local search.",
};

/* ── PERFORMANCE MAX ── */
const pmaxData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "Performance Max Campaigns",
  headline: "Performance Max managed with a strategy,",
  italic: "not a hope.",
  subhead: "Performance Max gives Google AI control over placements and bidding — which works well when managed correctly, and wastes budget when it isn't. We build PMAX campaigns with the right asset signals, audience inputs, and negative lists that keep Google's AI working for you.",
  stats: [{ value: "-12%", label: "Avg CPA reduction vs. Search-only" }, { value: "All", label: "Google placements covered" }, { value: "Smart", label: "Bidding with strategy" }],
  deliverables: [
    { title: "Asset Group Strategy", body: "Multiple asset groups built for different audience signals and intent levels. Not one asset group with mixed audiences — which is the most common PMAX mistake." },
    { title: "Audience Signal Inputs", body: "Customer match lists, remarketing audiences, and in-market segments fed in as signals — not left to Google to discover on its own." },
    { title: "Negative Keyword List", body: "PMAX shares campaign-level negatives with your Search campaigns. We build and maintain the negative list that prevents brand cannibalisation." },
    { title: "Placement Exclusions", body: "Content exclusions and placement blocklists to prevent ad spend on low-quality sites and apps that PMAX would otherwise target automatically." },
  ],
  process: [
    { title: "Audit Existing PMAX", body: "If you're already running PMAX, we audit asset group structure, audience inputs, and whether it's cannibalising your Search campaigns." },
    { title: "Build", body: "Asset groups built by audience tier, signals loaded, negative lists applied, and conversion tracking verified before launch." },
    { title: "Monitor & Optimise", body: "Weekly impression share and conversion data review. Asset rotation analysis. Audience signal updates based on who's actually converting." },
  ],
  faq: [
    { q: "Should I run Performance Max alongside Search campaigns?", a: "Yes — but with a clear separation of intent. PMAX handles top-of-funnel and cross-channel reach. Search handles high-intent bottom-funnel queries. Without this separation, they compete against each other and both perform worse." },
    { q: "Performance Max reporting is limited — how do you optimise it?", a: "We use insights reports, auction data, and Search campaign cannibalisation signals to infer PMAX performance and adjust asset mix and audience signals accordingly." },
  ],
  related: RELATED_PAID,
  cta: "PMAX works when it's managed. Most agencies just let it run.",
};

/* ── PAID SOCIAL ── */
const paidSocialData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "Paid Social — Meta & TikTok",
  headline: "Meta and TikTok ads that build audiences",
  italic: "and drive real revenue.",
  subhead: "Social advertising isn't just awareness — it's a revenue channel when the creative, targeting, and funnel are aligned. We manage Meta and TikTok campaigns with a performance-first approach: full-funnel creative testing, audience architecture, and ROAS-focused optimisation.",
  stats: [{ value: "3.8x", label: "Avg blended ROAS" }, { value: "$6–12", label: "CPM target range" }, { value: "3+", label: "Creative formats tested" }],
  deliverables: [
    { title: "Audience Architecture", body: "Cold, warm, and hot audience segmentation. Lookalike audiences built from your best customer data. Retargeting windows configured for your sales cycle." },
    { title: "Creative Development", body: "Static, video, and carousel formats developed and tested. We brief your creative team or work with our in-house designers to produce ad-ready assets." },
    { title: "Full-Funnel Campaign Structure", body: "Separate campaigns for awareness (TOF), consideration (MOF), and conversion (BOF). Each layer has different creative, targeting, and bidding strategy." },
    { title: "Weekly Creative Testing", body: "New creative variants tested every week. Winning formats scaled, losing formats paused. Creative fatigue monitored and addressed before performance drops." },
  ],
  process: [
    { title: "Audit & Strategy", body: "Existing account audit (if any) and full audience and creative strategy built before launch. Pixel installation and event tracking verified." },
    { title: "Build & Launch", body: "Campaign structure built, audiences loaded, creative launched, and conversion tracking confirmed. First 2 weeks monitored daily." },
    { title: "Optimise & Scale", body: "Weekly creative rotation, audience refinement, budget scaling based on ROAS data, and monthly strategy updates." },
  ],
  faq: [
    { q: "Meta or TikTok — which should I start with?", a: "For most B2C service businesses and eCommerce, start with Meta. TikTok works exceptionally well for brands with product-demonstration creative and a younger demographic. We recommend both once Meta campaigns are profitable." },
    { q: "Do you produce the creative or do I?", a: "We can do either. We provide creative briefs with specifications and direction, and either produce assets ourselves or work with your team. You need at least 3–5 creative variants per launch." },
  ],
  related: RELATED_PAID,
  cta: "Social advertising that pays for itself — not just builds awareness.",
};

/* ── DISPLAY & RETARGETING ── */
const displayData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "Display & Retargeting",
  headline: "Stay top of mind across every site",
  italic: "your prospects visit.",
  subhead: "Display retargeting keeps your brand visible to users who've already shown intent — visited your site, watched a video, or engaged with a search ad — as they browse the web. We build the audience segments, creative, and frequency caps that convert awareness into action.",
  stats: [{ value: "+71%", label: "Avg brand recall lift" }, { value: "$2–5", label: "CPM target range" }, { value: "90 day", label: "Retargeting window" }],
  deliverables: [
    { title: "Audience Segmentation", body: "Visitors segmented by pages visited, time on site, and depth of engagement. High-intent visitors (contact page, pricing page) get separate campaigns with higher bids." },
    { title: "Creative in Every Size", body: "Responsive display ads and fixed-size creative in all standard IAB sizes. We produce or brief assets for every display placement Google serves." },
    { title: "Frequency Management", body: "Frequency caps set per user per week — preventing the ad fatigue that makes retargeting feel intrusive rather than helpful." },
    { title: "Placement Exclusions", body: "Category exclusions and site-level blocklists to prevent display spend on low-quality inventory, gambling sites, and content that doesn't reflect your brand." },
  ],
  process: [
    { title: "Audience Build", body: "Audience segments created in Google Ads, connected to GA4 for behaviour data, and cross-referenced with your CRM data for customer match suppression." },
    { title: "Creative + Launch", body: "Responsive display creative uploaded, fixed-size variants added, campaign settings configured, and frequency caps applied before launch." },
    { title: "Optimise", body: "Weekly placement review, audience performance analysis, and creative rotation. Monthly strategy update on window length and segmentation." },
  ],
  faq: [
    { q: "Does display retargeting work for service businesses?", a: "Yes — especially for longer-cycle service decisions like home renovation, legal services, and B2B. It keeps your brand present during the decision window." },
    { q: "How many visitors do I need for retargeting to work?", a: "We recommend a minimum of 1,000 unique site visitors per month for retargeting audiences to be large enough to be statistically useful." },
  ],
  related: RELATED_PAID,
  cta: "Your prospects visit your site and then forget you. Retargeting fixes that.",
};

/* ── YOUTUBE PRE-ROLL ── */
const youtubeData: SubServiceData = {
  parentLabel: "Google Ads", parentHref: "/google-ads-management",
  label: "YouTube Pre-Roll Ads",
  headline: "Video ads that interrupt with purpose —",
  italic: "and keep watching.",
  subhead: "YouTube pre-roll is the most underused paid channel in local and B2B marketing. We produce the targeting strategy, creative brief, and campaign structure that makes video advertising a performance channel — not just a brand awareness exercise.",
  stats: [{ value: "45%", label: "Avg view-through rate" }, { value: "$0.03–0.08", label: "CPV target" }, { value: "Skippable", label: "+ non-skip formats" }],
  deliverables: [
    { title: "Audience + Targeting Strategy", body: "In-market audiences, custom intent audiences built from competitor keywords, and remarketing audiences from your site visitors — layered for maximum relevance." },
    { title: "Creative Brief", body: "A detailed creative brief for your video production team covering the hook (first 5 seconds), core message, CTA, and technical specs for both skippable and non-skippable formats." },
    { title: "Campaign Structure", body: "Separate campaigns for skippable TrueView, non-skippable bumpers, and YouTube Shorts. Each format serves a different funnel stage." },
    { title: "View-Through & Conversion Tracking", body: "YouTube view-through conversion tracking configured so you can measure the full revenue impact of video ads on users who watched but didn't immediately click." },
  ],
  process: [
    { title: "Strategy & Creative Brief", body: "Targeting strategy built and creative brief written. We review your existing video assets or brief your production team for new creative." },
    { title: "Build & Launch", body: "Campaign built with audience targeting, creative uploaded, conversion tracking verified, and budget configured with conservative initial caps." },
    { title: "Optimise", body: "VTR and conversion data reviewed weekly. Audience expansion tested. Budget scaled as CPV and ROAS targets are confirmed." },
  ],
  faq: [
    { q: "Do I need to produce a video to run YouTube ads?", a: "Yes. You need at minimum a 15-second non-skippable or a 30-second skippable video. We provide the creative brief. Your production team or a video production vendor creates the asset." },
    { q: "Is YouTube advertising worth it for local businesses?", a: "For service businesses with $5,000+/month in total ad budget and a strong offer, YouTube pre-roll builds brand recognition that lowers CPA across all other channels." },
  ],
  related: RELATED_PAID,
  cta: "YouTube is the most trusted video platform your prospects use daily.",
};

export function GoogleSearchPage() { return <SubServicePage data={searchData} />; }
export function LocalServiceAdsPage() { return <SubServicePage data={lsaData} />; }
export function PerformanceMaxPage() { return <SubServicePage data={pmaxData} />; }
export function PaidSocialPage() { return <SubServicePage data={paidSocialData} />; }
export function DisplayRetargetingPage() { return <SubServicePage data={displayData} />; }
export function YouTubeAdsPage() { return <SubServicePage data={youtubeData} />; }
