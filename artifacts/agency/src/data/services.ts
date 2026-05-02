export type ServiceVariant = "light" | "dark";

export interface ServiceDeliverable {
  title: string;
  body: string;
  outcome?: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface PricingTier {
  tier: string;
  range: string;
  note?: string;
}

export interface ServiceContent {
  slug: string;
  variant: ServiceVariant;
  meta: { title: string; description: string };
  h1: string;
  subheadline: string;
  heroCta: string;
  heroStats: { value: string; label: string }[];
  modules?: { icon: string; title: string; body: string }[];
  deliverables: ServiceDeliverable[];
  process: ServiceStep[];
  whoFor: { headline: string; body: string }[];
  proof: { client: string; headline: string; body: string; metric: string; metricLabel: string };
  whyDifferent: { title: string; body: string }[];
  pricing: { intro: string; tiers: PricingTier[]; note?: string };
  faq: { q: string; a: string }[];
  closing: string;
  closingCta: string;
  parentHub: { name: string; url: string };
}

export const services: Record<string, ServiceContent> = {
  "local-seo-service": {
    slug: "local-seo-service",
    variant: "light",
    meta: {
      title: "Local SEO Service | Map Pack Rankings & Google Business Profile Optimisation",
      description:
        "Local SEO that puts your business in the map pack and keeps it there. Google Business Profile, citations, reviews, and local content for Canadian businesses.",
    },
    h1: "Local SEO Service",
    subheadline:
      "Most local businesses are invisible in the map pack not because of weak services — because their Google Business Profile is incomplete, their citations are inconsistent, and their competitors have more reviews. All three are fixable. We fix all three.",
    heroCta: "Get a Free Local SEO Audit",
    heroStats: [
      { value: "+312%", label: "Average lead growth" },
      { value: "30–90 days", label: "First movement" },
      { value: "#1–3", label: "Map pack target" },
      { value: "40+", label: "Avg. citations corrected" },
    ],
    deliverables: [
      {
        title: "Google Business Profile optimisation",
        body: "Complete GBP setup or remediation: all service categories selected, keyword-relevant business description written, service areas defined at city and neighbourhood level, photo strategy implemented, Q&A section populated, review response cadence established. Ongoing: weekly posts, monthly photo updates, attribute management.",
        outcome: "A GBP profile that Google trusts and surfaces — not one that's technically claimed but functionally incomplete.",
      },
      {
        title: "Local citation audit and build",
        body: "Full audit of your existing NAP (name, address, phone) data across directories — identifying inconsistencies that suppress local rankings. Corrections submitted to all major Canadian directories. New citations built across relevant industry-specific and local directories.",
        outcome: "Consistent business data everywhere Google looks for local prominence signals.",
      },
      {
        title: "Review generation system",
        body: "A structured process for consistently generating Google reviews from genuine customers — request timing, messaging templates, follow-up sequences. Review response management included.",
        outcome: "Steady review velocity rather than bursts, which Google's local algorithm treats as a more reliable prominence signal.",
      },
      {
        title: "Local landing pages",
        body: "Location-specific pages for every city or neighbourhood you serve — written with genuinely unique content, local market context, and local keyword targeting. Not template pages with city names swapped.",
        outcome: "Organic local rankings for service-plus-city queries beyond your primary location.",
      },
      {
        title: "Local link building",
        body: "Links from city-relevant sources — local business associations, neighbourhood directories, local news coverage, community sponsorships. Links that reinforce map pack prominence and local organic rankings simultaneously.",
        outcome: "Local authority signals that reinforce map pack prominence and local organic rankings simultaneously.",
      },
      {
        title: "Monthly reporting",
        body: "Map pack position tracking for primary service keywords across every target city. GBP insight metrics. Review velocity and rating trends. Citation growth. Plain language — not a dashboard of metrics that don't connect to leads.",
        outcome: "You always know where you stand and what's moving.",
      },
    ],
    process: [
      {
        title: "Local audit",
        body: "GBP completeness and accuracy review. NAP consistency check across 40+ directories. Review volume and velocity analysis versus top map pack competitors. Local landing page inventory.",
      },
      {
        title: "GBP + citations",
        body: "GBP remediated or built from scratch. Citation inconsistencies corrected across all major directories. This phase typically produces the fastest visible movement — GBP improvements recrawl within days to weeks.",
      },
      {
        title: "Pages + schema",
        body: "Local landing pages written for every target geography. Internal linking from service pages to location pages established. Schema markup implemented on all location pages.",
      },
      {
        title: "Reviews + links",
        body: "Review generation process launched with your team. Local link outreach begins. Both operate continuously — not as a one-time campaign.",
      },
      {
        title: "Compound",
        body: "Monthly GBP post schedule maintained. Map pack positions tracked weekly. New citation opportunities identified as the business adds service areas. Review responses managed.",
      },
    ],
    whoFor: [
      {
        headline: "Service businesses competing in a defined geographic area",
        body: "Plumbers, dentists, lawyers, HVAC companies, real estate agents, clinics, contractors. If your customers are local and they're finding you through Google, local SEO is where your budget compounds fastest.",
      },
      {
        headline: "Businesses present in the map pack but not in the top three",
        body: "Positions four through ten in the local results get a fraction of the clicks that positions one through three get. Moving from position six to position two is a meaningful lead volume change, not a vanity metric.",
      },
      {
        headline: "Businesses with multiple service locations or cities",
        body: "A single GBP with a single location can only rank prominently in proximity to that address. Businesses serving Mississauga, Brampton, Vaughan, and Markham from a Toronto office need a multi-location strategy.",
      },
    ],
    proof: {
      client: "Apex Dental Group — Etobicoke",
      headline: "From outside the top 10 to map pack #2.",
      body: "A dental clinic in Etobicoke was ranking outside the top 10 despite being a 12-year-old practice with strong reviews. GBP had never been fully optimised — no service categories beyond 'dentist,' no photo updates in two years, and NAP data inconsistent across 14 directories. After six weeks of GBP remediation and citation correction, the clinic entered the map pack at position four. After a further three months, it reached position two and maintained it.",
      metric: "+86%",
      metricLabel: "New patient enquiries",
    },
    whyDifferent: [
      {
        title: "We treat GBP as an active marketing channel.",
        body: "Weekly posts, monthly photo updates, Q&A management, attribute updates as Google adds new fields. A GBP profile that isn't actively maintained loses ground to competitors who are.",
      },
      {
        title: "We correct citations before building new ones.",
        body: "Building new citations on top of inconsistent existing data amplifies the inconsistency problem. We audit and correct first — the order matters.",
      },
      {
        title: "We build local pages with genuine local content.",
        body: "A page that says 'We provide [service] in [city]' repeated across 20 cities is a thin-content liability, not a ranking asset. Every location page we build has unique local context.",
      },
      {
        title: "We track map pack positions, not just organic rankings.",
        body: "Most SEO reporting focuses on organic keyword rankings. For local businesses, map pack position is the number that connects directly to phone calls and walk-ins. We report on what matters.",
      },
    ],
    pricing: {
      intro: "Local SEO is priced by the number of target locations and competitive intensity of the market.",
      tiers: [
        { tier: "Single location, low-to-medium competition", range: "$800–$1,400/month" },
        { tier: "Single location, high competition (Toronto core)", range: "$1,400–$2,200/month" },
        { tier: "Multi-location (2–5 locations)", range: "$1,800–$3,500/month" },
        { tier: "Multi-location (5+ locations)", range: "By scope" },
      ],
      note: "All engagements are month-to-month. Local SEO is a compounding investment — the first 90 days build the foundation, months 3–12 compound the returns.",
    },
    faq: [
      {
        q: "How long before local SEO produces map pack movement?",
        a: "GBP optimisation and citation correction produce the fastest results — initial movement within 30–90 days in most markets. Review velocity and local content compound over 3–6 months. Highly competitive markets (personal injury law, dentistry in downtown Toronto) take longer.",
      },
      {
        q: "Does my business need a physical address to rank in the map pack?",
        a: "Yes. Google requires a verifiable physical address for GBP listings. Service-area businesses without a storefront can qualify, but proximity weighting still applies — a business with an address in North York won't rank as prominently for searches in Scarborough as one with an address there.",
      },
      {
        q: "How important are Google reviews for local rankings?",
        a: "Very. Review quantity, recency, and rating all contribute to local prominence signals. A business with 8 reviews competing against one with 80 is at a structural disadvantage regardless of GBP completeness. Review generation is not optional — it's ongoing.",
      },
      {
        q: "Can you help us rank in multiple GTA cities from one location?",
        a: "Yes, partially. Local landing pages and service area designation in GBP extend your visibility into surrounding cities. But map pack proximity weighting means a single location won't rank as prominently in a city 30km away as a business physically located there.",
      },
      {
        q: "What's the difference between local SEO and regular SEO?",
        a: "Local SEO targets geographically bounded searches using signals that standard organic SEO doesn't address: GBP, citations, proximity, and review prominence. Most service businesses need both operating simultaneously, not as alternatives.",
      },
    ],
    closing:
      "A local SEO audit takes less than a week to complete and tells you exactly where your map pack visibility is being suppressed and what it would take to move. That's the right starting point before committing to a monthly programme.",
    closingCta: "Get Your Free Local SEO Audit",
    parentHub: { name: "Local SEO", url: "/local-seo" },
  },

  "google-ads-management": {
    slug: "google-ads-management",
    variant: "dark",
    meta: {
      title: "Google Ads Management | Managed PPC Campaigns for Canadian Businesses",
      description:
        "Google Ads management that reduces wasted spend, improves Quality Scores, and generates measurable leads. Transparent reporting. No long-term contracts.",
    },
    h1: "Google Ads Management",
    subheadline:
      "Most Google Ads accounts waste 30–40% of their budget on clicks that were never going to convert. We audit, rebuild, and manage campaigns around the metric that actually matters: cost per qualified lead.",
    heroCta: "Get a Free Account Audit",
    heroStats: [
      { value: "-38%", label: "Avg. CPA reduction" },
      { value: "60 days", label: "Optimisation window" },
      { value: "4.7k", label: "Keywords managed" },
    ],
    modules: [
      {
        icon: "target",
        title: "Campaign architecture",
        body: "Search campaigns structured around tightly themed ad groups — one intent per group. Broad match terms that drain budget replaced with exact and phrase match targeting.",
      },
      {
        icon: "pen",
        title: "Ad copy testing",
        body: "Minimum two ad variants per ad group, tested against each other for CTR and conversion rate simultaneously. Headlines written around specific search intent.",
      },
      {
        icon: "globe",
        title: "Landing page alignment",
        body: "Every ad group maps to a landing page that matches the search intent precisely. We flag misalignments and either build or brief your team to fix them.",
      },
      {
        icon: "zap",
        title: "Bid strategy",
        body: "Manual CPC where conversion data is too thin for smart bidding. Target CPA once volume is sufficient. Budget pacing monitored weekly.",
      },
      {
        icon: "bar-chart",
        title: "Conversion tracking",
        body: "Phone calls, form submissions, bookings, and purchases tracked separately. GA4 and GTM configured correctly before any campaign goes live.",
      },
      {
        icon: "file",
        title: "Monthly reporting",
        body: "Plain-language reporting showing cost per lead by campaign, Quality Score changes, impression share, and budget efficiency — not a dashboard of metrics that don't connect to revenue.",
      },
    ],
    deliverables: [
      {
        title: "Campaign architecture and keyword strategy",
        body: "Search campaigns structured around tightly themed ad groups. Broad match terms that drain budget replaced with exact and phrase match targeting supported by a negative keyword list built from actual search term reports.",
        outcome: "Your budget reaches the searches most likely to convert, not the ones that merely mention related words.",
      },
      {
        title: "Ad copy development and testing",
        body: "Minimum two ad variants per ad group, tested against each other for click-through rate and conversion rate. Headlines written around the specific search intent of each ad group.",
        outcome: "Higher Quality Scores, lower cost per click, better ad position without increasing bids.",
      },
      {
        title: "Bid strategy and budget management",
        body: "Manual CPC where conversion data is too thin. Target CPA once volume is sufficient. Budget pacing monitored weekly — campaigns that exhaust budget by midday stop generating leads for the rest of the day.",
        outcome: "Your budget works the full day, on the right queries.",
      },
      {
        title: "Conversion tracking configuration",
        body: "Phone calls, form submissions, bookings, and purchases tracked separately — not bundled into a single 'conversion' metric. GA4 and GTM configured correctly before any campaign goes live.",
        outcome: "You know exactly which campaigns and keywords are producing revenue — not just clicks.",
      },
    ],
    process: [
      {
        title: "Account audit or build",
        body: "If you have an existing account, we audit it: identifying wasted spend, structural problems, Quality Score drag, and conversion tracking gaps. If starting fresh, we build from keyword research up.",
      },
      {
        title: "Keyword research and intent mapping",
        body: "We research the specific queries your ideal customers use at different stages of their decision. High-intent transactional keywords get priority budget. Informational keywords may be excluded or moved to separate campaigns.",
      },
      {
        title: "Campaign structure build",
        body: "Campaigns organised by service line. Ad groups tightly themed — each targeting one specific intent. Negative keyword lists built from competitor account data and search term patterns.",
      },
      {
        title: "Ad copy and extension setup",
        body: "Responsive Search Ads written with headlines that speak to each ad group's specific intent. Ad extensions configured — sitelinks, callout extensions, call extensions for mobile users.",
      },
      {
        title: "Conversion tracking and baseline",
        body: "All conversion actions configured and verified before launch. Baseline cost per lead established in the first 30 days — the reference point for every optimisation decision that follows.",
      },
      {
        title: "Ongoing optimisation",
        body: "Weekly: search term reports reviewed, new negative keywords added, underperforming ads paused. Monthly: bid adjustments, Quality Score analysis. Quarterly: full account review.",
      },
    ],
    whoFor: [
      {
        headline: "The average client or job value is meaningful",
        body: "At $5 cost per click and a 5% conversion rate, you're paying $100 per lead. If your average client value is $500, that's viable economics. If it's $50, it isn't. We tell you this honestly in the audit before you commit.",
      },
      {
        headline: "You need leads while organic rankings develop",
        body: "SEO takes months. Google Ads delivers from day one. For businesses launching, entering new markets, or recovering from organic traffic loss, managed paid search fills the gap while long-term organic authority builds.",
      },
      {
        headline: "You're currently running ads without conversion tracking",
        body: "If you're spending on Google Ads and measuring success by clicks or impressions rather than leads and revenue, you're flying blind. This is the most common and most fixable problem in Canadian SMB Google Ads accounts.",
      },
    ],
    proof: {
      client: "HVAC Company — GTA",
      headline: "From $210 to $94 cost per lead. Same budget.",
      body: "An HVAC company in the GTA running $2,400/month in ad spend with a loosely structured broad-match campaign was generating leads at $210 each. After restructuring to tightly themed ad groups, adding 340 negative keywords from search term reports, and aligning landing pages to ad group intent — cost per lead dropped to $94 within 60 days.",
      metric: "-55%",
      metricLabel: "Cost per lead reduction",
    },
    whyDifferent: [
      {
        title: "We separate ad spend from management fees transparently.",
        body: "Your ad budget goes directly to Google, billed to your card or your account. Our management fee is separate and itemised. You always know exactly what you're paying for.",
      },
      {
        title: "We don't take a percentage of ad spend as our fee.",
        body: "Percentage-of-spend models create an incentive to increase your budget regardless of whether higher spend produces proportionally better results. Our fee is fixed per account complexity.",
      },
      {
        title: "We configure conversion tracking before any campaign goes live.",
        body: "Accounts without conversion tracking cannot be optimised toward leads — only toward clicks. We treat this as the first and non-negotiable step.",
      },
      {
        title: "We provide search term level reporting.",
        body: "Not just which keywords your ads showed for — which actual searches triggered your ads and what those searches cost. This is the single most important report in any Google Ads account.",
      },
    ],
    pricing: {
      intro: "Google Ads management pricing has two components that are always kept separate:",
      tiers: [
        { tier: "Starter (1–2 campaigns, single service line)", range: "$600–$900/month" },
        { tier: "Growth (3–5 campaigns, multiple service lines)", range: "$900–$1,500/month" },
        { tier: "Scale (6+ campaigns, multi-location, e-commerce)", range: "$1,500–$2,500/month" },
      ],
      note: "No setup fees buried in month one. No long-term contracts. Ad spend goes directly to Google — always separate from management fees.",
    },
    faq: [
      {
        q: "How long before Google Ads produces leads?",
        a: "Ads go live within 48–72 hours of campaign launch after conversion tracking is confirmed. Initial leads typically appear within the first week. The first 30–60 days are a calibration period — performance typically improves meaningfully between months 2 and 4.",
      },
      {
        q: "Do I own my Google Ads account?",
        a: "Yes, always. The account is created under your Google login or transferred to your ownership from day one. If you end the engagement, you keep the account, historical data, conversion tracking setup, and campaign history.",
      },
      {
        q: "What reporting do I receive?",
        a: "Monthly written report covering: cost per lead by campaign, Quality Score by ad group, top-performing and underperforming search terms, budget pacing, and recommended next actions. You also have direct access to your Google Ads account at all times.",
      },
      {
        q: "Can you manage Google Ads alongside our SEO?",
        a: "Yes — and the two inform each other. Keyword performance data from paid search identifies which terms to prioritise for organic content. Running both from the same agency means this data sharing happens automatically.",
      },
    ],
    closing:
      "The fastest way to assess whether your current Google Ads account has room for improvement is a free audit. We review your account structure, conversion tracking, search term reports, and Quality Scores and return a plain-language summary.",
    closingCta: "Book a Free Google Ads Audit",
    parentHub: { name: "PPC & Google Ads", url: "/ppc-google-ads" },
  },

  "technical-seo-service": {
    slug: "technical-seo-service",
    variant: "light",
    meta: {
      title: "Technical SEO Service | Site Audits, Core Web Vitals & Crawl Optimisation",
      description:
        "Technical SEO service for Canadian businesses — full site audits, Core Web Vitals fixes, crawlability, schema markup, and indexation. Delivered with clear documentation.",
    },
    h1: "Technical SEO Service",
    subheadline:
      "Content and links produce limited results on a technically broken site. Technical SEO removes the ceiling that prevents everything else from performing — and unlike most SEO work, the results are measurable within weeks, not months.",
    heroCta: "Get a Free Technical Audit",
    heroStats: [
      { value: "4–8 weeks", label: "Measurable results" },
      { value: "80+", label: "Target PageSpeed score" },
      { value: "40+", label: "Audit checkpoints" },
      { value: "100%", label: "Documented fixes" },
    ],
    deliverables: [
      {
        title: "Full technical site audit",
        body: "A structured audit covering every major technical ranking factor: Core Web Vitals, mobile usability, crawlability, indexation status, duplicate content, canonical configuration, internal link structure, site architecture, schema markup, HTTPS, and robots.txt. Delivered as a prioritised issue list — critical issues first, with clear explanation of what each issue is, why it matters, and what fixing it produces.",
        outcome: "You know exactly what's limiting your site's performance and in what order to address it.",
      },
      {
        title: "Core Web Vitals optimisation",
        body: "Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift measured, diagnosed, and improved. Image compression and lazy loading, render-blocking resource elimination, server response time optimisation. Scores measured in Google PageSpeed Insights before and after, with target mobile scores above 80.",
        outcome: "Pages that meet Google's performance thresholds and load at the speed that keeps visitors engaged.",
      },
      {
        title: "Crawl and indexation audit",
        body: "Google Search Console data reviewed for crawl errors, coverage warnings, and indexation issues. Pages that should be indexed but aren't — identified and fixed. Pages that are indexed but shouldn't be — excluded. XML sitemap audited for accuracy and resubmitted.",
        outcome: "Google crawls your important pages efficiently and indexes them correctly.",
      },
      {
        title: "Schema markup implementation",
        body: "LocalBusiness, Service, FAQPage, BreadcrumbList, and Organisation schema implemented across relevant pages. Tested in Google's Rich Results Test before completion.",
        outcome: "Google has machine-readable context about your business, enabling rich results that improve click-through rate.",
      },
      {
        title: "Internal link audit and restructuring",
        body: "Orphaned pages identified and connected. Link equity mapped from high-authority pages to target pages. Navigation structure reviewed — important pages should be reachable within three clicks from the homepage.",
        outcome: "Google understands which pages are most important on your site, and authority flows toward the pages you want to rank.",
      },
      {
        title: "Technical documentation",
        body: "Every issue identified, every fix implemented, and the reasoning behind each decision documented in a format your development team can reference and build on.",
        outcome: "Your team understands what was done and why, and can maintain technical health going forward.",
      },
    ],
    process: [
      {
        title: "Crawl and data collection",
        body: "We crawl your site using Screaming Frog and pull data from Google Search Console, GA4, and PageSpeed Insights simultaneously. This produces the raw dataset the audit is built on — not a template checklist but an analysis of your specific site.",
      },
      {
        title: "Issue prioritisation and audit delivery",
        body: "Issues ranked by impact: critical (actively preventing pages from ranking), high (significantly limiting performance), medium (reducing efficiency), and low (minor improvements). Delivered as a structured document with screenshots and fix instructions.",
      },
      {
        title: "Fix implementation",
        body: "Implementation handled by our technical team or handed to yours with detailed fix documentation. We don't deliver audits and disappear — we implement or provide implementation-ready documentation.",
      },
      {
        title: "Validation and re-crawl",
        body: "Every fix validated after implementation. A re-crawl confirms issues resolved and identifies any new issues surfaced during the remediation process.",
      },
      {
        title: "Ongoing monitoring",
        body: "Monthly GSC review for new crawl errors, indexation changes, and Core Web Vitals regressions. Technical health maintained as the site grows — not reset each time a new audit is commissioned.",
      },
    ],
    whoFor: [
      {
        headline: "Sites that have content and links but rankings haven't moved",
        body: "Technical problems create a ceiling on what content and links can achieve. If you've published consistently and built authority but rankings aren't reflecting it, technical issues are likely the constraint.",
      },
      {
        headline: "Sites that have recently migrated, redesigned, or changed CMS",
        body: "Migrations and redesigns introduce technical issues at scale: broken redirect chains, URL changes without redirects, canonical errors, and indexation gaps. A post-migration technical audit identifies and resolves these before they compound.",
      },
      {
        headline: "Sites with slow load times or poor Core Web Vitals scores",
        body: "Google uses Core Web Vitals as a ranking signal. More importantly, slow sites lose visitors before they convert. Technical SEO addresses both the ranking signal and the user experience simultaneously.",
      },
    ],
    proof: {
      client: "Professional Services Firm — Toronto",
      headline: "Rankings recovered within 8 weeks of technical remediation.",
      body: "A professional services firm had published 120 articles and acquired 40 quality backlinks over 18 months — but rankings had plateaued at page 3. A technical audit identified the constraint: 60% of their content was being treated as duplicate due to URL parameter issues, their mobile PageSpeed score was 28, and 34 pages were indexed but returning soft 404 responses. After 6 weeks of remediation, rankings moved to page 1 for 14 target keywords.",
      metric: "+340%",
      metricLabel: "Organic traffic increase",
    },
    whyDifferent: [
      {
        title: "We audit before we prescribe.",
        body: "We don't apply a standard checklist to every site. We crawl, collect, and analyse your specific site's actual technical state before making any recommendations.",
      },
      {
        title: "We document everything.",
        body: "Every fix implemented is documented with the reasoning. Your team can maintain technical health without starting from scratch on every subsequent audit.",
      },
      {
        title: "We fix, not just report.",
        body: "Most technical SEO audits are delivered as reports that sit unimplemented. We implement fixes or provide implementation-ready documentation — not 80-page PDFs that require a developer to reverse-engineer.",
      },
      {
        title: "We integrate with your ongoing SEO work.",
        body: "Technical SEO isn't a one-time project — it's ongoing monitoring as the site grows. We flag new issues monthly rather than requiring you to commission a new audit each time.",
      },
    ],
    pricing: {
      intro: "Technical SEO is priced by site size and complexity.",
      tiers: [
        { tier: "Audit only (up to 500 pages)", range: "$1,200–$2,500 one-time" },
        { tier: "Audit + implementation (up to 500 pages)", range: "$3,000–$6,000 one-time" },
        { tier: "Large site (500–5,000 pages)", range: "$4,000–$12,000" },
        { tier: "Ongoing technical monitoring", range: "$600–$1,200/month" },
      ],
      note: "All engagements include full documentation. Implementation-only engagements available when your team has an existing audit.",
    },
    faq: [
      {
        q: "How long does a technical SEO audit take?",
        a: "Audit delivery takes 7–10 business days from crawl to final report. Implementation timeline depends on issue volume and site complexity — most implementation projects complete within 4–8 weeks.",
      },
      {
        q: "Do I need ongoing technical SEO or is it a one-time project?",
        a: "Technical SEO has a project component (fixing existing issues) and an ongoing component (monitoring as the site evolves). A site that's technically clean today will accumulate new issues over time as content is added, pages are changed, and Google's crawl finds new edge cases.",
      },
      {
        q: "Can technical SEO alone improve rankings?",
        a: "Yes — in cases where technical issues are the primary ranking constraint. A site that's being incorrectly indexed, has severe speed issues, or has major duplicate content problems will see ranking improvements from technical fixes alone. Technical SEO removes the ceiling; content and links then build toward it.",
      },
    ],
    closing:
      "A technical SEO audit produces a prioritised list of issues that are suppressing your rankings — with clear fix instructions. That's the right starting point regardless of whether you proceed with managed work.",
    closingCta: "Get a Free Technical Audit",
    parentHub: { name: "SEO Services", url: "/seo-services" },
  },

  "content-marketing-service": {
    slug: "content-marketing-service",
    variant: "light",
    meta: {
      title: "Content Marketing Service | SEO Content Strategy & Creation for Canadian Businesses",
      description:
        "Content marketing that builds organic rankings, earns authority, and generates leads — not content produced for its own sake. Strategy-first, SEO-built, outcome-measured.",
    },
    h1: "Content Marketing Service",
    subheadline:
      "A Google Ad generates leads while you pay for it. A well-optimised piece of content generates leads for years after you publish it. Content marketing is the only digital marketing investment whose cost per lead decreases over time rather than increasing with competition.",
    heroCta: "Book a Free Content Strategy Session",
    heroStats: [
      { value: "3–6 months", label: "To first rankings" },
      { value: "Years", label: "Asset lifespan" },
      { value: "↓ CPL", label: "Cost trend over time" },
      { value: "All channels", label: "Amplifies everything" },
    ],
    deliverables: [
      {
        title: "Content strategy and topic cluster mapping",
        body: "Every piece of content mapped to a specific keyword target, search intent, and place in your site's topical authority structure before writing begins. Hub pages, supporting content, FAQ pages, and city-specific variations — all planned as a connected system.",
        outcome: "Content that compounds — each piece reinforcing the authority of related pieces, rather than existing in isolation.",
      },
      {
        title: "SEO-optimised blog and article writing",
        body: "Long-form content targeting specific search queries your ideal customers are making during their research phase. Structured for Google's quality systems and internally linked to your service pages. Not AI-generated and lightly edited — researched, expert, specific.",
        outcome: "Pages that rank for research-phase queries, build trust, and route engaged visitors toward your services.",
      },
      {
        title: "Service and landing page copy",
        body: "The content that lives on your service pages, city pages, and campaign landing pages. Written to rank for service-intent queries while earning the trust of visitors who arrive. Conversion content and SEO content simultaneously.",
        outcome: "Service pages that rank for the queries that bring the right visitors, and convert them at a higher rate when they arrive.",
      },
      {
        title: "Case studies and proof content",
        body: "Documented outcomes from real client engagements — written as narratives that demonstrate capability with specificity. The problem, the approach, the result, in enough detail that a prospective client can see themselves in the story.",
        outcome: "Content that converts sceptical visitors more effectively than any generic credibility claim.",
      },
      {
        title: "FAQ and educational content",
        body: "Content that answers the specific questions your target customers ask before, during, and after a buying decision. Structured for featured snippet eligibility and AI Overview citation. Internally linked to relevant service pages.",
        outcome: "Traffic from long-tail informational searches, improved topical authority, and a trust foundation that makes service page conversion easier.",
      },
    ],
    process: [
      {
        title: "Content audit and gap analysis",
        body: "If you have existing content, we audit it: what's ranking, what's earning traffic, what's cannibalising other pages, and what's thin or outdated. Gap analysis identifies topics your competitors are covering that you aren't.",
      },
      {
        title: "Keyword research and topic cluster mapping",
        body: "Every content topic mapped to a search query with confirmed volume and commercial relevance. Topics organised into clusters — hub pages supported by related articles — so content builds topical authority rather than existing in isolation.",
      },
      {
        title: "Content brief development",
        body: "Detailed briefs for every piece: target keyword, search intent, required word count, heading structure, internal links, competitor content to differentiate from. Briefs precise enough that every writer produces strategically aligned content.",
      },
      {
        title: "Writing and editing",
        body: "Content written to brief. Every piece reviewed for SEO compliance, factual accuracy, brand voice consistency, and genuine usefulness. We don't publish content that wouldn't be useful to a real reader.",
      },
      {
        title: "Publishing and optimisation",
        body: "Content published with full on-page SEO: keyword-optimised titles and meta descriptions, proper heading structure, internal links to service pages, schema markup, and image optimisation.",
      },
    ],
    whoFor: [
      {
        headline: "You rely on Google for leads but publish little or nothing",
        body: "Organic search rankings are built on content. A site with five service pages and no supporting content competes against sites with deep topic coverage on every relevant query. The gap widens over time.",
      },
      {
        headline: "Your sales cycle involves research before a decision",
        body: "B2B services, legal, financial, healthcare, home improvement, and professional services all involve buyers who research before contacting anyone. Content that answers their questions positions your business as the credible option before the first conversation.",
      },
      {
        headline: "You want to reduce dependence on paid advertising over time",
        body: "Content compounds. Each published piece adds to a cumulative asset base that generates organic traffic independently of ad spend. Businesses with strong content libraries reach a point where organic traffic covers a meaningful portion of lead volume.",
      },
    ],
    proof: {
      client: "B2B SaaS — Toronto",
      headline: "Organic became the largest revenue channel in 14 months.",
      body: "A Toronto-based SaaS company was spending $18,000/month on Google Ads with no organic content strategy. After a 14-month content programme targeting 140 high-intent keywords across topic clusters, organic search overtook paid as the largest lead source — at a fraction of the per-lead cost. The content asset base continues generating leads without ongoing spend.",
      metric: "+580%",
      metricLabel: "Organic lead volume",
    },
    whyDifferent: [
      {
        title: "Strategy before a single word is written.",
        body: "Every piece of content we produce is mapped to a keyword target, an intent, and a place in the topical authority structure before writing begins. Random publishing produces random results.",
      },
      {
        title: "No AI-generated content published without expert review.",
        body: "AI tools are part of our research and brief-building process. The content published under your brand is written and reviewed by humans with domain expertise — not AI output lightly edited for grammar.",
      },
      {
        title: "Content connected to conversion, not just traffic.",
        body: "Every piece is internally linked to relevant service pages. Traffic that can't find your services doesn't convert. We build the navigation path from informational content to the action you want visitors to take.",
      },
      {
        title: "We update as well as create.",
        body: "Content that's 18 months old and no longer ranking is a lost asset. Our content management includes regular audits of existing content and updates to pages that have declined — not just a backlog of new publications.",
      },
    ],
    pricing: {
      intro: "Content marketing is priced by volume and content type:",
      tiers: [
        { tier: "Starter (4 posts/month + strategy)", range: "$1,800–$2,800/month" },
        { tier: "Growth (8 posts/month + landing pages)", range: "$3,500–$5,500/month" },
        { tier: "Authority (12+ pieces/month, full programme)", range: "$6,000–$10,000/month" },
        { tier: "One-off content projects", range: "By scope" },
      ],
      note: "All programmes include keyword research, content strategy, briefs, writing, editing, on-page SEO, and monthly performance reporting.",
    },
    faq: [
      {
        q: "How long does content marketing take to produce results?",
        a: "For SEO content: typically 3–6 months before meaningful ranking movement, 6–12 months before significant traffic contribution. For conversion content (service pages, landing pages): results are visible immediately on launch, since they affect conversion rate rather than requiring ranking accumulation.",
      },
      {
        q: "What's the difference between content marketing and copywriting?",
        a: "Copywriting is persuasive writing designed to produce an immediate action — ad copy, landing page copy. Content marketing is educational material designed to build trust and authority over time. Both involve writing; they serve different functions in the buyer's journey.",
      },
      {
        q: "How much content does a business need to publish?",
        a: "Enough to cover your topic area more comprehensively than your competitors. In practice, most Canadian service businesses in mid-competition markets need 6–8 pieces per month for 12 months to reach meaningful organic traffic. Volume matters less than strategic coverage of the right topics.",
      },
    ],
    closing:
      "A content strategy session produces a prioritised topic cluster map, keyword research, and a publishing roadmap for the first 90 days — whether you proceed with managed work or implement internally.",
    closingCta: "Book a Free Content Strategy Session",
    parentHub: { name: "Content Marketing", url: "/content-marketing" },
  },
};

export function getService(slug: string): ServiceContent | undefined {
  return services[slug];
}
