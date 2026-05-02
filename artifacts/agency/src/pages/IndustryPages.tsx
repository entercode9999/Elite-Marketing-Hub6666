import { IndustryPage, type IndustryData } from "@/pages/IndustryPage";

/* ── SHARED INDUSTRY LIST ── */
const ALL_INDUSTRIES = [
  { name: "Dental & Medical", href: "/dental-marketing" },
  { name: "Legal Services", href: "/legal-marketing" },
  { name: "Home Services", href: "/home-services-marketing" },
  { name: "Real Estate", href: "/real-estate-marketing" },
  { name: "eCommerce", href: "/ecommerce-marketing" },
  { name: "Auto & Trades", href: "/auto-marketing" },
  { name: "SaaS & Tech", href: "/saas-marketing" },
  { name: "Fitness & Wellness", href: "/fitness-marketing" },
  { name: "Restaurants", href: "/restaurant-marketing" },
];

const withoutSelf = (slug: string) => ALL_INDUSTRIES.filter((i) => i.href !== slug);

/* ─────────────────────────────── DENTAL ─────────────────────────────── */
const dentalData: IndustryData = {
  industry: "Dental & Medical", slug: "dental-marketing",
  headline: "Fill chairs. Build the waitlist.",
  italic: "Own your market.",
  subhead: "Multi-location dental practices, orthodontists, MedSpas, and physio clinics. We build patient acquisition systems that produce consistent bookings — not seasonal spikes. Local SEO, Google Ads, and GBP optimisation tuned for regulated healthcare marketing.",
  image: "/industry-dental.png",
  stats: [{ value: "+86%", label: "New patient enquiries avg" }, { value: "#1", label: "Map pack avg in 12 wks" }, { value: "+58", label: "Net new reviews avg" }],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for every clinic location. City × service page architecture for every treatment type you offer.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for high-intent dental queries. Implants, Invisalign, emergency dentistry — each with its own campaign and landing page.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Automated post-appointment review request flows. 4.9-star maintained, response velocity that signals active practice.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "City-specific and treatment-specific pages targeting every relevant local query in your market.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "GBP Optimisation", body: "Full Google Business Profile optimisation with healthcare-specific categories, photos, Q&A, and weekly posting.", href: "/gbp-optimisation", color: "#7c3aed" },
    { title: "Paid Social", body: "Instagram and Facebook campaigns for aesthetic treatments — Invisalign, whitening, veneers — targeting the right demographic in your catchment area.", href: "/paid-social-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Dental Practice · Toronto Annex",
    headline: "From #8 to #1 map pack in 18 weeks. +312% new patient enquiries.",
    body: "A multi-chair dental practice invisible in their own neighbourhood. We rebuilt GBP, fixed 52 citation inconsistencies, published landing pages for Annex, Roncesvalles, and Bloor West Village, and ran a review velocity programme. In 18 weeks: #1 in the Annex pack, 87 net new reviews, +312% new patient enquiries.",
    metrics: [{ value: "+312%", label: "New patients" }, { value: "#1", label: "Annex pack" }, { value: "+87", label: "Net reviews" }],
  },
  challenges: [
    { title: "Regulated advertising restrictions", body: "Healthcare marketing in Canada restricts certain claims and testimonial formats. We operate within RCDSO and CPSO guidelines — no risk of compliance issues." },
    { title: "Multi-location consistency", body: "Dental groups with 3–10 locations need consistent GBP, NAP, and citation data across all locations. Inconsistency suppresses every location's rankings." },
    { title: "High review sensitivity", body: "A single 1-star review can drop a dental practice's rating below the pack threshold. Review velocity and response strategy are critical." },
  ],
  otherIndustries: withoutSelf("/dental-marketing"),
  cta: "Dental patients search for you locally. Let's make sure they find you first.",
};

/* ─────────────────────────────── LEGAL ─────────────────────────────── */
const legalData: IndustryData = {
  industry: "Legal Services", slug: "legal-marketing",
  headline: "High-value cases start with",
  italic: "being found first.",
  subhead: "Personal injury, family law, corporate, immigration. Legal SEO has a long compounding runway — the authority you build today dominates for years. We build the content, citations, and link equity that put you at the top of every high-intent query in your practice area.",
  image: "/industry-legal.png",
  stats: [{ value: "$200+", label: "Target CPL achieved" }, { value: "+189%", label: "Qualified lead growth" }, { value: "12 mo", label: "Compound timeline" }],
  services: [
    { title: "Local SEO", body: "Practice area × city landing pages for every query your prospective clients are using to find legal help in your market.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Content Marketing", body: "Legal content authority clusters that build trust, rank for informational queries, and funnel readers toward your consultation CTA.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "High-intent search campaigns for practice area keywords. Tightly controlled ad groups prevent budget waste on non-convertible queries.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Reputation Management", body: "Review generation and management for legal practices — building the trusted social proof that converts initial contact into retained clients.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Practice area and city-specific landing pages targeting the exact queries your prospective clients use when they need legal help immediately.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure: author pages, credentials schema, legal disclaimers, and site speed — all required for Google to treat a legal site as authoritative.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Personal Injury Firm · Toronto",
    headline: "CPA reduced 52%. Qualified lead volume doubled in 60 days.",
    body: "A personal injury firm spending $8,000/month on Google Ads with a $340 average CPL. We rebuilt the account with intent layering, negative keyword architecture, and dedicated landing pages per practice area. CPL dropped to $163. Qualified monthly leads doubled within 60 days.",
    metrics: [{ value: "-52%", label: "Cost per lead" }, { value: "+2x", label: "Qualified leads" }, { value: "+189%", label: "Total lead volume" }],
  },
  challenges: [
    { title: "LSUC advertising rules", body: "Legal advertising in Ontario is governed by the Law Society of Ontario. We understand what claims, superlatives, and testimonial formats are and aren't permitted." },
    { title: "Extremely high CPCs", body: "Legal keywords cost $15–$60+ per click in Google Ads. Without intent-layered negative keyword architecture, budgets evaporate on non-converting queries." },
    { title: "Long conversion cycles", body: "Legal clients research for weeks before contacting. Content marketing and retargeting build the brand recognition that wins them when they're ready to decide." },
  ],
  otherIndustries: withoutSelf("/legal-marketing"),
  cta: "The firm that ranks #1 for your practice area is getting clients you should have.",
};

/* ─────────────────────────────── HOME SERVICES ─────────────────────────────── */
const homeServicesData: IndustryData = {
  industry: "Home Services", slug: "home-services-marketing",
  headline: "More service calls.",
  italic: "Fewer slow weeks.",
  subhead: "HVAC, plumbing, electrical, roofing, landscaping, pest control. High-intent searches with excellent unit economics. Our most active local SEO vertical — we know every citation directory, every map pack variable, every seasonal adjustment that moves the needle.",
  image: "/case-study-home.png",
  stats: [{ value: "+241%", label: "Lead volume avg" }, { value: "#2", label: "Map pack avg in 14 wks" }, { value: "30–90", label: "Days to first movement" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for every service × city combination in your coverage area. Built for emergency queries — the highest-intent searches in your category.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Local Service Ads", body: "Google Guaranteed placement above everything else. Pay per lead. We handle the full verification and ongoing management.", href: "/local-service-ads", color: "#ea4335" },
    { title: "Google Ads", body: "Search campaigns for service-intent keywords — 'emergency HVAC', 'same-day plumber', 'roof repair near me' — with landing pages matched to each.", href: "/google-ads-management", color: "#f59e0b" },
    { title: "GBP Optimisation", body: "Seasonal attribute updates, weekly posting, and review velocity — the active GBP management that sustains map pack position through slow seasons.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Review Generation", body: "Post-service automated review requests. Home services depend heavily on review count and velocity for map pack position.", href: "/review-generation", color: "#7c3aed" },
    { title: "Local Landing Pages", body: "Service × neighbourhood pages for every sub-market you cover — targeting the proximity signals that determine which calls go to you vs. the competitor two blocks closer.", href: "/local-landing-pages", color: "#0891b2" },
  ],
  caseStudy: {
    label: "HVAC Company · Mississauga",
    headline: "Outside top 10 to map pack #2 in 14 weeks. +241% service calls.",
    body: "An HVAC contractor invisible in Cooksville, Streetsville, and Erin Mills. We rebuilt GBP service areas, corrected 38 citation inconsistencies, launched neighbourhood landing pages, and deployed a review generation system. 14 weeks: #2 Cooksville pack, +241% inbound service calls.",
    metrics: [{ value: "+241%", label: "Service calls" }, { value: "#2", label: "Map pack" }, { value: "+58", label: "Net reviews" }],
  },
  challenges: [
    { title: "Seasonal demand swings", body: "HVAC, roofing, and landscaping have hard seasonality. We maintain map pack position through the off-season so you're #1 when demand spikes." },
    { title: "Proximity competition", body: "Home services are won or lost within a 3–5km radius. Your map pack position is determined by proximity, review count, and citation strength — we optimise all three." },
    { title: "Emergency query dominance", body: "Emergency service queries ('24h plumber near me') convert at 3–5x the rate of general service queries. We build the landing pages and bids that capture them." },
  ],
  otherIndustries: withoutSelf("/home-services-marketing"),
  cta: "Home services is our most active local SEO vertical. We know your market.",
};

/* ─────────────────────────────── REAL ESTATE ─────────────────────────────── */
const realEstateData: IndustryData = {
  industry: "Real Estate", slug: "real-estate-marketing",
  headline: "Listings, leads, and seller appointments —",
  italic: "predictably.",
  subhead: "Boutique brokerages, independent agents, property managers. Neighbourhood-specific local SEO and paid campaigns that deliver qualified buyer and seller leads — not general traffic. We've built predictable pipelines for GTA, Mississauga, and Ottawa-area brokerages.",
  image: "/case-study-realestate.png",
  stats: [{ value: "+247%", label: "Listings year-over-year" }, { value: "$2.4M", label: "Revenue attributed" }, { value: "90 days", label: "To first qualified leads" }],
  services: [
    { title: "Local SEO", body: "Neighbourhood-specific pages targeting buyer and seller queries in your market areas. Hyperlocal content that ranks for the exact searches active buyers use.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Content Marketing", body: "Neighbourhood guides, market reports, and buyer/seller educational content that builds authority and ranks for research-phase queries.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Paid Social", body: "Facebook and Instagram listing campaigns targeting in-market buyers in your specific neighbourhoods. Retargeting for property viewers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for buyer and seller intent keywords — 'homes for sale Leslieville', 'sell my house Toronto' — with neighbourhood-specific landing pages.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Landing Page Design", body: "Dedicated landing pages for listing campaigns, seller valuation tools, and buyer registration — each one optimised for its specific conversion goal.", href: "/landing-page-design", color: "#22c55e" },
    { title: "Email Marketing", body: "Automated nurture sequences for buyer and seller leads. Market update broadcasts that keep your database engaged between transactions.", href: "/email-marketing-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Boutique Brokerage · Toronto",
    headline: "Cold leads to predictable pipeline. +247% listings in 12 months.",
    body: "A 6-agent boutique brokerage entirely dependent on referrals. We built neighbourhood content for 18 Toronto sub-markets, ran listing-specific paid social campaigns, and deployed a seller lead capture and nurture system. In 12 months: +247% listings YoY, $2.4M in attributed revenue.",
    metrics: [{ value: "+247%", label: "Listings YoY" }, { value: "$2.4M", label: "Revenue" }, { value: "+190%", label: "Lead volume" }],
  },
  challenges: [
    { title: "RECO advertising compliance", body: "Real estate advertising in Ontario is regulated by RECO. We understand the required disclosures, prohibited claims, and team/brokerage attribution rules." },
    { title: "Hyperlocal search intent", body: "Real estate buyers search by exact neighbourhood — not city. A page targeting 'homes for sale Toronto' competes with 200 sites. A page targeting 'homes for sale Leslieville' is winnable." },
    { title: "Long lead-to-transaction cycles", body: "Buyers research for months. A nurture strategy that stays in contact through the research phase is what wins the appointment when they're ready." },
  ],
  otherIndustries: withoutSelf("/real-estate-marketing"),
  cta: "Real estate marketing that generates listings — not just website visits.",
};

/* ─────────────────────────────── ECOMMERCE ─────────────────────────────── */
const ecommerceData: IndustryData = {
  industry: "eCommerce & Retail", slug: "ecommerce-marketing",
  headline: "More revenue from every visitor.",
  italic: "Without buying more traffic.",
  subhead: "Shopify and WooCommerce brands growing profitably. CRO, paid social, lifecycle email, and SEO working as a unified system. We don't just drive traffic — we engineer the full purchase path from first touch to repeat buyer.",
  image: "/industry-ecommerce.png",
  stats: [{ value: "7.2x", label: "Blended ROAS avg" }, { value: "+38%", label: "Avg CVR lift" }, { value: "$0", label: "% of spend fees" }],
  services: [
    { title: "Google Shopping & PMAX", body: "Shopping campaigns with precise product feed optimisation, custom labels, and PMAX asset groups structured by product category and margin.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Paid Social (Meta & TikTok)", body: "Full-funnel Meta and TikTok campaigns: cold audience creative, dynamic product ads for warm audiences, and retention campaigns for past buyers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "Conversion rate optimisation for your product pages, cart, and checkout — the highest ROI investment for any eCommerce store with existing traffic.", href: "/cro-service", color: "#22c55e" },
    { title: "Lifecycle Email", body: "Welcome sequences, abandoned cart flows, post-purchase upsells, and win-back campaigns — the email stack that converts browsers into repeat buyers.", href: "/email-marketing-service", color: "#7c3aed" },
    { title: "SEO", body: "Category page and product page SEO for organic traffic that compounds over time. Technical SEO and content strategy for eCommerce.", href: "/technical-seo-service", color: "#1a56ff" },
    { title: "eCommerce Development", body: "Shopify and WooCommerce builds optimised for conversion: page speed, mobile UX, and checkout flow built around your specific product and customer.", href: "/ecommerce-development", color: "#0891b2" },
  ],
  caseStudy: {
    label: "DTC Brand · Shopify",
    headline: "7.2x blended ROAS. +38% CVR. $2.4M in 12-month revenue.",
    body: "A Shopify brand with strong products but inefficient ad spend and a leaking checkout funnel. We rebuilt the Meta campaign structure, optimised the Shopify checkout (3-step to 1-step), launched a lifecycle email stack, and added Google Shopping. In 12 months: 7.2x blended ROAS, +38% CVR, $2.4M total revenue.",
    metrics: [{ value: "7.2x", label: "Blended ROAS" }, { value: "+38%", label: "CVR lift" }, { value: "$2.4M", label: "Revenue" }],
  },
  challenges: [
    { title: "Attribution complexity", body: "eCommerce attribution across Google, Meta, TikTok, and email requires careful MTA setup. We use GA4 + triple-whale attribution to see the real contribution of each channel." },
    { title: "Ad creative fatigue", body: "Meta and TikTok creative fatigues in 2–3 weeks. We build creative testing systems that rotate new concepts continuously — so performance doesn't degrade." },
    { title: "Checkout abandonment", body: "The average eCommerce checkout abandonment rate is 70%. A 10% improvement in checkout completion outperforms doubling your ad budget." },
  ],
  otherIndustries: withoutSelf("/ecommerce-marketing"),
  cta: "eCommerce growth is a system — ads, email, CRO working together.",
};

/* ─────────────────────────────── AUTO & TRADES ─────────────────────────────── */
const autoData: IndustryData = {
  industry: "Auto & Trades", slug: "auto-marketing",
  headline: "Map pack visibility in your",
  italic: "most competitive local market.",
  subhead: "Dealerships, auto body shops, mechanics, electricians, plumbers. Competitive local markets where map pack position directly determines call volume. We've moved clients from outside the top 10 to #1 in under 14 weeks.",
  image: "/case-study-home.png",
  stats: [{ value: "#2", label: "Map pack in 14 weeks" }, { value: "+241%", label: "Inbound calls avg" }, { value: "+58", label: "Net reviews avg" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for your specific trade and location. Auto and trades are our most-competed local SEO vertical — we know every variable.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management for auto and trades businesses — seasonal services, photo strategy, and weekly posting that sustains rankings.", href: "/gbp-optimisation", color: "#ea4335" },
    { title: "Google Ads", body: "Search and Local Service Ads for trade-intent queries. Separate campaigns for each service type with intent-layered bid strategy.", href: "/google-ads-management", color: "#f59e0b" },
    { title: "Review Management", body: "Post-service review generation and response management. Review velocity is the #1 differentiator in crowded auto and trades map packs.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Service × neighbourhood pages that win the proximity battle against the competitor two blocks closer.", href: "/local-landing-pages", color: "#7c3aed" },
    { title: "Citation Audit", body: "NAP consistency across 45+ directories — the citation graph that underlies map pack position in every auto and trades market.", href: "/citation-audit", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Auto Body Shop · Cooksville, Mississauga",
    headline: "From #11 to #2 map pack in 14 weeks. +241% inbound calls.",
    body: "Starting outside the top 10 for all Cooksville auto repair queries. We rebuilt GBP, corrected 38 citation inconsistencies, published neighbourhood landing pages, and launched review generation. 14 weeks: #2 in the Cooksville pack, +241% inbound calls, +58 net reviews.",
    metrics: [{ value: "+241%", label: "Inbound calls" }, { value: "#2", label: "Map pack" }, { value: "14 wks", label: "Timeline" }],
  },
  challenges: [
    { title: "Saturated map packs", body: "Auto and trades map packs are the most competitive local search categories in any GTA market. Winning requires getting every signal right — GBP, citations, reviews, and content." },
    { title: "Proximity disadvantage", body: "Customers call the nearest business. If your GBP service area isn't configured correctly, you're invisible in your own neighbourhood." },
    { title: "Review velocity matters most", body: "In auto and trades map packs, the business with the most recent and consistent reviews almost always wins. We build the velocity system that keeps you ahead." },
  ],
  otherIndustries: withoutSelf("/auto-marketing"),
  cta: "Auto and trades map packs are winnable. We've done it 40+ times.",
};

/* ─────────────────────────────── SAAS ─────────────────────────────── */
const saasData: IndustryData = {
  industry: "SaaS & Technology", slug: "saas-marketing",
  headline: "Demo bookings. MQL growth.",
  italic: "Pipeline you can forecast.",
  subhead: "B2B SaaS, fintech, HR tech, vertical SaaS. Account-based plays, PLG funnel optimisation, and content strategies that build topical authority in your niche. We understand the difference between website traffic and pipeline.",
  image: "/case-study-saas.png",
  stats: [{ value: "+315%", label: "Qualified lead volume" }, { value: "8x", label: "Content ROI avg" }, { value: "14 mo", label: "Compound timeline" }],
  services: [
    { title: "Content Marketing", body: "Topical authority clusters that rank for every high-intent B2B query in your category. Bottom-funnel content that converts researchers into demo requests.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Intent-layered search campaigns targeting demo and trial intent. Competitor keywords and category queries managed separately for budget efficiency.", href: "/google-ads-management", color: "#ea4335" },
    { title: "CRO", body: "SaaS-specific conversion optimisation: demo request flow, free trial sign-up, and onboarding funnel — all optimised for activation, not just sign-ups.", href: "/cro-service", color: "#22c55e" },
    { title: "Technical SEO", body: "JavaScript SEO for React/Next.js SaaS products, Core Web Vitals, structured data, and the technical infrastructure that scales with your content.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "Paid Social", body: "LinkedIn advertising for ABM plays targeting specific ICP companies, job titles, and company sizes. Meta retargeting for warm prospects.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Trial-to-paid nurture sequences, feature announcement campaigns, and re-engagement flows for churned trials — built for SaaS growth metrics.", href: "/email-marketing-service", color: "#1a56ff" },
  ],
  caseStudy: {
    label: "B2B SaaS · FinTech vertical",
    headline: "+315% qualified leads in 14 months. Content ROI: 8x.",
    body: "A B2B fintech SaaS with strong product-market fit but no organic presence. We built a 40-article topical authority cluster around their core category, ran demo-intent Google Ads, and deployed a trial nurture email sequence. In 14 months: +315% qualified leads, 8x content ROI.",
    metrics: [{ value: "+315%", label: "Qualified leads" }, { value: "8x", label: "Content ROI" }, { value: "+800%", label: "Organic traffic" }],
  },
  challenges: [
    { title: "Long B2B sales cycles", body: "B2B SaaS buyers research for weeks or months. Content marketing that builds authority during the research phase wins the demo call when they're ready to decide." },
    { title: "ICP-fit lead quality", body: "Volume is easy to generate. ICP-fit leads require negative keywords, audience exclusions, and landing page copy written specifically for your target buyer persona." },
    { title: "PLG vs. sales-led tension", body: "PLG funnels need CRO optimised for activation, not just sign-up. Sales-led funnels need demo conversion optimisation. We build for your actual go-to-market motion." },
  ],
  otherIndustries: withoutSelf("/saas-marketing"),
  cta: "SaaS marketing that drives pipeline — not just signups.",
};

/* ─────────────────────────────── FITNESS ─────────────────────────────── */
const fitnessData: IndustryData = {
  industry: "Fitness & Wellness", slug: "fitness-marketing",
  headline: "Trial memberships. Retention systems.",
  italic: "Full studios.",
  subhead: "Gyms, fitness studios, yoga, physiotherapy, wellness clinics. Local SEO and paid campaigns tuned for membership trials and appointment bookings. Review generation that keeps your 4.9-star rating attracting new clients.",
  image: "/industry-dental.png",
  stats: [{ value: "+190%", label: "Trial memberships avg" }, { value: "4.9★", label: "Rating maintained" }, { value: "#1–3", label: "Map pack target" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for gym, studio, and clinic queries in your neighbourhood. The #1 driver of new trial sign-ups for local fitness businesses.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook trial membership campaigns targeting the demographic and interest profile of your ideal member within your studio's catchment radius.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for 'gym near me', 'yoga studio [neighbourhood]', and 'physiotherapy [city]' queries with landing pages matched to each service.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Trial-to-member nurture sequences, class promotion campaigns, and win-back emails for churned members — lifecycle email for fitness retention.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "Review Generation", body: "Post-class and post-session automated review requests. Consistent review velocity is the #1 factor in local fitness studio map pack rankings.", href: "/review-generation", color: "#7c3aed" },
    { title: "GBP Optimisation", body: "Active GBP management for your studio — class schedule updates, event posts, seasonal promotions, and photo strategy that converts profile views into trial sign-ups.", href: "/gbp-optimisation", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Yoga Studio · Toronto",
    headline: "+190% trial memberships in 6 months.",
    body: "A boutique yoga studio with strong retention but no system for new member acquisition. We built local SEO for their Leslieville neighbourhood, ran Instagram trial campaigns targeting women 25–45 within 3km, and deployed a post-trial nurture sequence. In 6 months: +190% trial memberships, 72% trial-to-member conversion.",
    metrics: [{ value: "+190%", label: "Trial memberships" }, { value: "72%", label: "Trial-to-member CVR" }, { value: "#1", label: "Leslieville pack" }],
  },
  challenges: [
    { title: "Hyperlocal catchment radius", body: "Most fitness studio members live or work within 3km. Hyperlocal targeting and neighbourhood-specific landing pages are essential — broad city-level targeting wastes budget." },
    { title: "Trial-to-member conversion", body: "Acquiring a trial is table stakes. We build the email nurture sequences and onboarding flows that convert trials into paying members at above-average rates." },
    { title: "January/New Year competition", body: "Every fitness business competes at peak intensity in January. We build the campaign infrastructure in October so you launch ahead of competitors." },
  ],
  otherIndustries: withoutSelf("/fitness-marketing"),
  cta: "Full studios start with a system for consistent new trial acquisition.",
};

/* ─────────────────────────────── RESTAURANTS ─────────────────────────────── */
const restaurantData: IndustryData = {
  industry: "Restaurants & Hospitality", slug: "restaurant-marketing",
  headline: "Full tables. Memorable brands.",
  italic: "Loyal regulars.",
  subhead: "Independent restaurants, café chains, catering companies, hospitality groups. Local SEO for 'near me' searches, paid social for reservation drives, and reputation management to protect your most valuable asset — your reviews.",
  image: "/industry-dental.png",
  stats: [{ value: "+155%", label: "Online reservations avg" }, { value: "4.8★", label: "Rating maintained avg" }, { value: "#1–3", label: "Map pack target" }],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for cuisine-type and neighbourhood queries. Google ranks restaurants heavily on review count, velocity, and GBP completeness.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook reservation campaigns targeting food-interested audiences in your neighbourhood. Special event and tasting menu promotion campaigns.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "GBP Management", body: "Active Google Business Profile management — menu updates, holiday hours, reservation link, and event posts that drive direct bookings from your profile.", href: "/gbp-optimisation", color: "#ea4335" },
    { title: "Review Reputation", body: "Review generation system for post-dining SMS requests. Response management for every review — including the difficult ones — in your restaurant's voice.", href: "/review-generation", color: "#22c55e" },
    { title: "Social Media Content", body: "Instagram and TikTok content strategy for restaurant brands — food photography guidance, behind-the-scenes content, and chef-driven brand storytelling.", href: "/social-media-service", color: "#7c3aed" },
    { title: "Email Marketing", body: "Reservation confirmation sequences, loyalty program emails, and seasonal menu campaign broadcasts to your existing customer base.", href: "/email-marketing-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Independent Restaurant · Toronto",
    headline: "+155% online reservations in 4 months.",
    body: "A 60-seat independent restaurant with inconsistent weeknight covers and no digital acquisition strategy. We rebuilt GBP, launched Instagram reservation campaigns targeting their neighbourhood, implemented a post-dining review system, and built a monthly email calendar. In 4 months: +155% online reservations, 4.8-star average, 85 net new reviews.",
    metrics: [{ value: "+155%", label: "Reservations" }, { value: "4.8★", label: "Rating" }, { value: "+85", label: "Net reviews" }],
  },
  challenges: [
    { title: "Google rating sensitivity", body: "A restaurant's Google rating is its most visible marketing asset. A drop from 4.8 to 4.3 can reduce click-throughs by 30%. Review velocity and response management are non-negotiable." },
    { title: "Photo-driven decision making", body: "Restaurant selection is heavily photo-driven on Google Maps and Instagram. GBP photo strategy and Instagram content quality directly affect how many searchers choose you." },
    { title: "Slow weeknight covers", body: "Most restaurant marketing is reactive — promoting specials the day of. We build proactive campaigns that fill specific weeknight slots 2–3 weeks in advance." },
  ],
  otherIndustries: withoutSelf("/restaurant-marketing"),
  cta: "Full tables on a Tuesday. That's what a real local SEO strategy delivers.",
};

/* ── EXPORTED PAGE COMPONENTS ── */
export function DentalMarketingPage() { return <IndustryPage data={dentalData} />; }
export function LegalMarketingPage() { return <IndustryPage data={legalData} />; }
export function HomeServicesMarketingPage() { return <IndustryPage data={homeServicesData} />; }
export function RealEstateMarketingPage() { return <IndustryPage data={realEstateData} />; }
export function EcommerceMarketingPage() { return <IndustryPage data={ecommerceData} />; }
export function AutoMarketingPage() { return <IndustryPage data={autoData} />; }
export function SaasMarketingPage() { return <IndustryPage data={saasData} />; }
export function FitnessMarketingPage() { return <IndustryPage data={fitnessData} />; }
export function RestaurantMarketingPage() { return <IndustryPage data={restaurantData} />; }
