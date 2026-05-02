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
  { name: "B2B", href: "/b2b-marketing" },
  { name: "B2C", href: "/b2c-marketing" },
  { name: "D2C", href: "/d2c-marketing" },
  { name: "Food & Beverage", href: "/food-beverage-marketing" },
  { name: "Education", href: "/education-marketing" },
  { name: "Transportation", href: "/transportation-marketing" },
  { name: "Health Care", href: "/healthcare-marketing" },
  { name: "Travel", href: "/travel-marketing" },
  { name: "Fashion", href: "/fashion-marketing" },
  { name: "Entertainment", href: "/entertainment-marketing" },
  { name: "Technology", href: "/technology-marketing" },
  { name: "Small Business", href: "/small-business-marketing" },
  { name: "Construction", href: "/construction-marketing" },
  { name: "Law", href: "/law-marketing" },
  { name: "Sports & Fitness", href: "/sports-fitness-marketing" },
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

/* ─────────────────────────────── B2B ─────────────────────────────── */
const b2bData: IndustryData = {
  industry: "B2B", slug: "b2b-marketing",
  headline: "Pipeline from the right buyers.",
  italic: "Not just more traffic.",
  subhead: "Manufacturers, distributors, professional services, agencies. B2B digital marketing where the conversion goal is a sales conversation, not a form submission. We build the content authority and demand gen systems that put you in front of decision-makers.",
  image: "/case-study-saas.png",
  stats: [{ value: "+218%", label: "Qualified leads" }, { value: "4.8x", label: "Content ROI avg" }, { value: "14 mo", label: "Compound timeline" }],
  services: [
    { title: "Content Marketing", body: "Topical authority clusters built around the exact queries your B2B buyers use at every stage of the research and shortlisting process.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Intent-layered search campaigns targeting demo, quote, and RFQ intent. Competitor keywords managed separately for maximum budget efficiency.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure for B2B authority — author pages, credentials schema, and the technical foundation that makes Google trust your domain.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "LinkedIn Paid Social", body: "Account-based targeting by company size, job title, and industry. The highest-quality B2B channel for reaching decision-makers at your ICP.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "B2B conversion optimisation for demo request flows, gated content, and RFQ forms — built for quality leads, not just volume.", href: "/cro-service", color: "#22c55e" },
    { title: "Email Marketing", body: "Long-cycle nurture sequences that stay relevant through a 3–12 month B2B sales process — keeping your brand top-of-mind until they're ready to buy.", href: "/email-marketing-service", color: "#1a56ff" },
  ],
  caseStudy: {
    label: "B2B Manufacturer · Ontario",
    headline: "+218% qualified leads in 14 months. Pipeline doubled.",
    body: "An Ontario manufacturer with strong product-market fit but no organic presence and poor-converting Google Ads. We built a topical content cluster, rebuilt the Ads account with intent layering, and deployed a qualification-focused landing page system. In 14 months: +218% qualified leads, pipeline doubled.",
    metrics: [{ value: "+218%", label: "Qualified leads" }, { value: "2x", label: "Pipeline value" }, { value: "4.8x", label: "Content ROI" }],
  },
  challenges: [
    { title: "Long sales cycles", body: "B2B buyers research for months. Content marketing that builds authority through the research phase wins the meeting when they're ready to shortlist." },
    { title: "Lead quality vs. volume", body: "Volume is easy to generate. ICP-fit leads require negative keywords, audience exclusions, and landing page copy written for your actual buyer." },
    { title: "Multi-stakeholder decisions", body: "B2B purchases involve 3–7 stakeholders. Content must address the concerns of technical evaluators, budget owners, and executive sponsors simultaneously." },
  ],
  otherIndustries: withoutSelf("/b2b-marketing"),
  cta: "B2B marketing that fills your pipeline with buyers who can actually sign a contract.",
};

/* ─────────────────────────────── B2C ─────────────────────────────── */
const b2cData: IndustryData = {
  industry: "B2C", slug: "b2c-marketing",
  headline: "More customers.",
  italic: "Lower acquisition cost.",
  subhead: "Consumer brands, subscription services, local businesses. Paid and organic channels working together to drive awareness, conversion, and retention at the lowest possible blended CPA.",
  image: "/case-study-ecommerce.png",
  stats: [{ value: "+185%", label: "Customer acquisition" }, { value: "-34%", label: "Blended CPA" }, { value: "3.8x", label: "ROAS avg" }],
  services: [
    { title: "Paid Social", body: "Full-funnel Meta and TikTok campaigns from cold awareness through to conversion and retention. Creative testing systems that prevent fatigue.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search and shopping campaigns targeting high-intent B2C queries. Performance Max built around your highest-margin product categories.", href: "/google-ads-management", color: "#ea4335" },
    { title: "SEO & Content", body: "Organic traffic from product and category pages that compounds over time and reduces dependence on paid acquisition.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Email Marketing", body: "Welcome sequences, cart abandonment flows, and loyalty campaigns that increase LTV and reduce churn for subscription and repeat-purchase businesses.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Conversion rate optimisation for your highest-traffic landing pages — the fastest way to reduce CPA without touching ad spend.", href: "/cro-service", color: "#1a56ff" },
    { title: "Local SEO", body: "For B2C businesses with physical locations — map pack dominance in every catchment area you serve.", href: "/local-seo-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "B2C Subscription Brand",
    headline: "-34% blended CPA. +185% new customer acquisition.",
    body: "A subscription consumer brand spending heavily on Meta with declining ROAS. We rebuilt the campaign structure, launched Google Shopping, deployed cart abandonment email flows, and optimised landing pages. Result: -34% blended CPA, +185% new customers in 9 months.",
    metrics: [{ value: "+185%", label: "New customers" }, { value: "-34%", label: "Blended CPA" }, { value: "3.8x", label: "ROAS" }],
  },
  challenges: [
    { title: "Creative fatigue", body: "B2C paid social creative fatigues in 2–3 weeks. We build testing systems that continuously rotate new concepts to sustain performance." },
    { title: "Attribution across channels", body: "B2C customers touch 4–6 channels before converting. Accurate attribution across Google, Meta, email, and organic is critical for budget allocation." },
    { title: "Seasonal demand management", body: "B2C brands see massive seasonal variation. We build the campaign infrastructure in advance so you're ready to scale when demand spikes." },
  ],
  otherIndustries: withoutSelf("/b2c-marketing"),
  cta: "B2C growth at a lower CPA — paid and organic working as a unified system.",
};

/* ─────────────────────────────── D2C ─────────────────────────────── */
const d2cData: IndustryData = {
  industry: "D2C", slug: "d2c-marketing",
  headline: "Own your customer relationship.",
  italic: "Own your margins.",
  subhead: "Direct-to-consumer brands cutting out the middleman. CRO, email lifecycle, paid social, and SEO built specifically for DTC economics — LTV, repeat purchase rate, and subscription retention.",
  image: "/case-study-ecommerce.png",
  stats: [{ value: "7.2x", label: "Blended ROAS" }, { value: "+38%", label: "Avg CVR lift" }, { value: "2.8x", label: "Email LTV" }],
  services: [
    { title: "Paid Social (Meta & TikTok)", body: "Full-funnel DTC campaigns: cold creative at the top, dynamic product ads for warm audiences, and win-back for lapsed customers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Lifecycle Email", body: "Welcome series, abandoned cart, post-purchase upsell, subscription renewal, and win-back — the full DTC email stack.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Product page, cart, and checkout optimisation. A 10% checkout improvement outperforms doubling your ad spend.", href: "/cro-service", color: "#1a56ff" },
    { title: "Google Shopping", body: "Product feed optimisation, Performance Max, and branded search — the Google stack that captures intent-ready DTC buyers.", href: "/google-ads-management", color: "#ea4335" },
    { title: "SEO", body: "Category and product page SEO for the organic traffic that reduces long-term dependence on paid acquisition.", href: "/technical-seo-service", color: "#7c3aed" },
    { title: "Ecommerce Development", body: "Shopify builds and CRO-focused theme optimisation for DTC brands scaling past seven figures.", href: "/ecommerce-development", color: "#0891b2" },
  ],
  caseStudy: {
    label: "DTC Brand · Shopify",
    headline: "7.2x blended ROAS. +38% CVR. $2.4M in 12-month revenue.",
    body: "A Shopify DTC brand with strong products but inefficient ad spend and a leaking checkout funnel. We rebuilt Meta campaigns, optimised checkout, launched lifecycle email, and added Google Shopping. In 12 months: 7.2x blended ROAS, +38% CVR, $2.4M total revenue.",
    metrics: [{ value: "7.2x", label: "Blended ROAS" }, { value: "+38%", label: "CVR lift" }, { value: "$2.4M", label: "Revenue" }],
  },
  challenges: [
    { title: "iOS attribution loss", body: "Post-iOS14, Meta attribution is unreliable. We use GA4 + first-party data to understand true channel contribution and allocate budget correctly." },
    { title: "Subscription churn", body: "DTC subscription businesses live or die on churn rate. We build the email lifecycle and onboarding flows that retain subscribers past the 90-day danger zone." },
    { title: "Rising CPMs", body: "Meta CPMs have increased 35%+ over 3 years. The only answer is better creative testing, better landing pages, and diversification into Google and email." },
  ],
  otherIndustries: withoutSelf("/d2c-marketing"),
  cta: "DTC growth is a system — ads, email, and CRO working together.",
};

/* ─────────────────────────────── FOOD & BEVERAGE ─────────────────────────────── */
const foodBeverageData: IndustryData = {
  industry: "Food & Beverage", slug: "food-beverage-marketing",
  headline: "Hungry customers find you first.",
  italic: "We make that happen.",
  subhead: "Food brands, restaurants, beverage companies, grocery retailers. Local SEO, social commerce, and content strategies that put your product in front of hungry, intent-driven buyers.",
  image: "/industry-dental.png",
  stats: [{ value: "+155%", label: "Online orders avg" }, { value: "4.8★", label: "Rating maintained" }, { value: "#1–3", label: "Map pack target" }],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for cuisine and product queries in your target markets. Google rates food businesses heavily on photo quality and review velocity.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and TikTok campaigns that reach food-interested audiences. Visual-first creative strategy that converts scrollers into buyers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Review Reputation", body: "Post-purchase and post-visit review generation. In food & beverage, your Google and Yelp rating is your most visible marketing asset.", href: "/review-generation", color: "#22c55e" },
    { title: "Social Media Content", body: "Content strategy for food brands — photography direction, recipe content, behind-the-scenes storytelling, and influencer amplification frameworks.", href: "/social-media-service", color: "#ec4899" },
    { title: "Google Ads", body: "Search campaigns for food delivery, catering, and product queries. Local Service Ads for catering and event food service.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Loyalty email campaigns, seasonal menu broadcasts, and new product launch sequences that turn first-time buyers into regulars.", href: "/email-marketing-service", color: "#7c3aed" },
  ],
  caseStudy: {
    label: "Food Brand · Toronto",
    headline: "+155% online orders. Map pack #1 for all key category queries.",
    body: "A Toronto food brand invisible in local search despite strong product quality. We rebuilt GBP, launched a review generation system, published location-specific pages, and ran Instagram campaigns. In 5 months: +155% online orders, #1 map pack across core category searches.",
    metrics: [{ value: "+155%", label: "Online orders" }, { value: "#1", label: "Map pack" }, { value: "+72", label: "Net new reviews" }],
  },
  challenges: [
    { title: "Visual-first decision making", body: "Food purchasing decisions are heavily influenced by photography quality on Google Maps, Instagram, and menus. Weak visual assets lose you customers before they read a word." },
    { title: "Review sensitivity", body: "A single bad review week can drop a food business below the map pack threshold. Proactive review velocity is the defence strategy." },
    { title: "Seasonal and trend cycles", body: "Food & beverage brands have strong seasonal patterns and trend sensitivity. We build campaign infrastructure that capitalises on peak demand windows in advance." },
  ],
  otherIndustries: withoutSelf("/food-beverage-marketing"),
  cta: "Food & beverage marketing that fills tables, moves product, and builds loyal customers.",
};

/* ─────────────────────────────── EDUCATION ─────────────────────────────── */
const educationData: IndustryData = {
  industry: "Education", slug: "education-marketing",
  headline: "More enrolments.",
  italic: "Built to last.",
  subhead: "Private schools, colleges, online courses, tutoring services, training providers. Enrolment-focused digital marketing — from first search to application submission.",
  image: "/case-study-saas.png",
  stats: [{ value: "+220%", label: "Enrollment inquiries" }, { value: "-41%", label: "Cost per enrollment" }, { value: "14 mo", label: "Compound SEO" }],
  services: [
    { title: "SEO & Content", body: "Program-specific content clusters that rank for the exact queries prospective students use when researching schools, courses, and credentials.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Search campaigns targeting enrolment and program-inquiry intent. Separate campaigns per program type to maximise relevance and quality score.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Landing Page Design", body: "Program-specific landing pages with clear curriculum overviews, outcome statistics, and enquiry forms — optimised for enrolment conversion.", href: "/landing-page-design", color: "#22c55e" },
    { title: "Paid Social", body: "Facebook and Instagram campaigns targeting prospective students by age, location, and interest profile. Retargeting for application page visitors.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Prospectus download nurture sequences, open day campaign emails, and enrolment deadline campaigns for active applicants.", href: "/email-marketing-service", color: "#1a56ff" },
    { title: "CRO", body: "Conversion optimisation for enquiry forms, open day registrations, and application pages — reducing the friction between interest and action.", href: "/cro-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Private College · Ontario",
    headline: "+220% enrollment inquiries. -41% cost per enrollment.",
    body: "A private college with strong programs but low online visibility and a leaking enquiry funnel. We built program-specific content and landing pages, rebuilt Google Ads by program, and deployed a prospectus nurture sequence. In 12 months: +220% enrollment inquiries, -41% cost per enrollment.",
    metrics: [{ value: "+220%", label: "Inquiries" }, { value: "-41%", label: "Cost per enrollment" }, { value: "+800%", label: "Organic traffic" }],
  },
  challenges: [
    { title: "Long decision cycles", body: "Prospective students research for 3–9 months before applying. A content and nurture strategy that maintains visibility through the entire research phase is essential." },
    { title: "Program-specific intent", body: "Broad 'college near me' queries are less valuable than program-specific intent. We build landing pages and campaigns for every program you offer." },
    { title: "Competitor brand bidding", body: "Education is heavily brand-contested in Google Ads. Competitor bidding and brand protection campaigns are standard requirements for every education client." },
  ],
  otherIndustries: withoutSelf("/education-marketing"),
  cta: "Education marketing that fills seats with qualified, committed students.",
};

/* ─────────────────────────────── TRANSPORTATION ─────────────────────────────── */
const transportationData: IndustryData = {
  industry: "Transportation", slug: "transportation-marketing",
  headline: "More bookings.",
  italic: "Lower cost per dispatch.",
  subhead: "Logistics companies, freight brokers, limo and taxi services, trucking companies. Local SEO and paid search for high-intent transportation queries — driving more dispatches and B2B contracts.",
  image: "/case-study-home.png",
  stats: [{ value: "+185%", label: "Inbound bookings" }, { value: "#1–2", label: "Local map pack" }, { value: "-28%", label: "Cost per lead" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for transportation service queries — 'limo service Toronto', 'freight broker GTA', 'same-day courier near me'. High-intent, high-conversion searches.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for route-specific and service-intent queries. Separate campaigns for B2B freight and B2C passenger services.", href: "/google-ads-management", color: "#ea4335" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management for transportation businesses — service area configuration, fleet photos, and review velocity.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Route-specific and service-specific landing pages targeting the highest-intent queries in your coverage area.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Review Generation", body: "Post-trip review generation for passenger transport. Review count and recency directly affect map pack position for transportation businesses.", href: "/review-generation", color: "#7c3aed" },
    { title: "Content Marketing", body: "B2B content for freight and logistics companies targeting supply chain managers and procurement teams researching transportation partners.", href: "/content-marketing-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Transportation Company · GTA",
    headline: "+185% inbound bookings. Map pack #1 for key service queries.",
    body: "A GTA transportation company competing against well-funded national platforms. We rebuilt their GBP service areas, corrected citation inconsistencies, launched route-specific landing pages, and ran intent-targeted Google Ads. In 16 weeks: +185% inbound bookings, #1 for core service queries.",
    metrics: [{ value: "+185%", label: "Inbound bookings" }, { value: "#1", label: "Map pack" }, { value: "-28%", label: "Cost per lead" }],
  },
  challenges: [
    { title: "Platform competition", body: "Transportation businesses compete against well-funded platforms (Uber, Freightos, etc.) in both organic and paid. Hyper-local targeting and niche specialisation is how independent operators win." },
    { title: "Route and service complexity", body: "Transportation companies serve dozens of routes and service types. We build landing page architecture that targets every high-value route and service combination." },
    { title: "Trust and credibility signals", body: "Shippers and passengers need to trust their transportation provider. Review management, credential display, and authoritative content build the trust that converts." },
  ],
  otherIndustries: withoutSelf("/transportation-marketing"),
  cta: "Transportation marketing that fills your dispatch calendar — not just your website.",
};

/* ─────────────────────────────── HEALTH CARE ─────────────────────────────── */
const healthCareData: IndustryData = {
  industry: "Health Care", slug: "healthcare-marketing",
  headline: "More patients.",
  italic: "Compliant, ethical growth.",
  subhead: "Hospitals, clinics, specialist practices, telehealth platforms, pharmacies. Regulatory-aware digital marketing that navigates advertising restrictions while consistently driving new patient acquisition.",
  image: "/industry-dental.png",
  stats: [{ value: "+190%", label: "Patient inquiries" }, { value: "4.9★", label: "Rating maintained" }, { value: "#1", label: "Local map pack" }],
  services: [
    { title: "Local SEO & GBP", body: "Map pack visibility for every clinic location and specialty. Healthcare SEO tuned for the specific query language patients use when searching for care.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for specialty-specific and condition-specific queries. Fully compliant with healthcare advertising policies across all platforms.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Post-appointment review generation within healthcare privacy and regulatory guidelines. Consistent review velocity is critical for map pack position.", href: "/review-generation", color: "#22c55e" },
    { title: "Content Marketing", body: "Patient education content that ranks for condition and treatment queries — building the trust and authority that converts searchers into appointment bookings.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Local Landing Pages", body: "Specialty and location-specific landing pages targeting the exact queries patients use when searching for care in your area.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure for healthcare — author credentials, medical schema, and the technical signals that help Google treat your content as trustworthy.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Multi-Specialty Clinic · Toronto",
    headline: "+190% patient inquiries. 4.9-star rating maintained.",
    body: "A multi-specialty clinic with 4 locations and poor online visibility. We rebuilt all GBP listings, corrected citation inconsistencies, published specialty-specific landing pages, and launched a review generation system. In 20 weeks: +190% patient inquiries, 4.9-star rating across all locations.",
    metrics: [{ value: "+190%", label: "Patient inquiries" }, { value: "4.9★", label: "Rating maintained" }, { value: "#1", label: "Map pack" }],
  },
  challenges: [
    { title: "Regulatory advertising restrictions", body: "Healthcare marketing is governed by strict guidelines from regulatory bodies (CPSO, RCDSO, CPSBC). We operate within your specific regulatory framework — no risk of compliance issues." },
    { title: "E-E-A-T requirements", body: "Google holds healthcare content to the highest quality standards. Author credentials, medical review disclosures, and accurate information are non-negotiable." },
    { title: "Multi-location consistency", body: "Healthcare groups with multiple locations need consistent GBP, NAP, and citation data across all sites. Inconsistency suppresses every location's rankings." },
  ],
  otherIndustries: withoutSelf("/healthcare-marketing"),
  cta: "Healthcare marketing that grows your patient base — compliantly and consistently.",
};

/* ─────────────────────────────── TRAVEL ─────────────────────────────── */
const travelData: IndustryData = {
  industry: "Travel", slug: "travel-marketing",
  headline: "More direct bookings.",
  italic: "Less OTA dependency.",
  subhead: "Hotels, tour operators, travel agencies, destination brands. Seasonal paid media strategies, OTA-beating local SEO, and content that converts trip researchers into direct bookings.",
  image: "/case-study-realestate.png",
  stats: [{ value: "+245%", label: "Direct bookings" }, { value: "-38%", label: "OTA commission spend" }, { value: "4.8x", label: "Paid ROAS" }],
  services: [
    { title: "SEO & Content", body: "Destination and experience content that captures travelers during the research and inspiration phases — converting them into direct bookings before OTAs do.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Search campaigns targeting booking-intent queries. Hotel and tour campaigns structured to compete with OTA ads on your own brand and destination terms.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Paid Social", body: "Instagram and Facebook campaigns targeting in-market travelers by destination interest, travel intent signals, and lookalike audiences of past bookers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Post-trip loyalty sequences, seasonal promotion campaigns, and early-bird offer broadcasts for past guests and prospect lists.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Booking funnel optimisation for travel websites — reducing drop-off between search, browse, and booking confirmation.", href: "/cro-service", color: "#1a56ff" },
    { title: "Local SEO", body: "Google Business Profile optimisation for hotels, lodges, and tour operators — map pack visibility for local and destination searches.", href: "/local-seo-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Boutique Hotel · Ontario",
    headline: "+245% direct bookings. -38% OTA commission spend.",
    body: "A boutique Ontario hotel entirely dependent on Booking.com and Expedia for 82% of reservations. We built destination content, ran Google Ads targeting branded and destination queries, and deployed a past-guest email loyalty program. In 10 months: +245% direct bookings, -38% OTA dependency.",
    metrics: [{ value: "+245%", label: "Direct bookings" }, { value: "-38%", label: "OTA commissions" }, { value: "4.8x", label: "Paid ROAS" }],
  },
  challenges: [
    { title: "OTA dominance", body: "Booking.com and Expedia bid aggressively on your brand terms. We build brand protection campaigns and direct booking incentive strategies that recapture your own customers." },
    { title: "Highly seasonal demand", body: "Travel demand varies dramatically by season, event, and macro conditions. We build flexible campaign structures that scale up and down with demand." },
    { title: "Inspiration-to-booking journey", body: "Travel decisions take weeks. Content that engages travelers during the inspiration phase and retargeting that re-engages them at booking intent are both required." },
  ],
  otherIndustries: withoutSelf("/travel-marketing"),
  cta: "More direct bookings means more revenue at full margin — not OTA margin.",
};

/* ─────────────────────────────── FASHION ─────────────────────────────── */
const fashionData: IndustryData = {
  industry: "Fashion", slug: "fashion-marketing",
  headline: "Build the brand.",
  italic: "Drive the sale.",
  subhead: "Fashion labels, boutiques, accessories brands, sustainable fashion. Paid social, content strategy, and SEO that builds brand equity while driving consistent ecommerce revenue.",
  image: "/case-study-ecommerce.png",
  stats: [{ value: "5.8x", label: "Paid social ROAS" }, { value: "+42%", label: "Brand search volume" }, { value: "+35%", label: "Repeat purchase rate" }],
  services: [
    { title: "Paid Social (Meta & TikTok)", body: "Fashion-specific creative strategy and campaign structure. Cold audience creative for brand discovery, dynamic product ads for intent, and loyalty campaigns for repeat buyers.", href: "/paid-social-service", color: "#ec4899" },
    { title: "Social Media Content", body: "Instagram and TikTok content strategy for fashion brands — lookbook content, styling guides, UGC frameworks, and trend-responsive content calendars.", href: "/social-media-service", color: "#f59e0b" },
    { title: "Google Shopping", body: "Product feed optimisation and Shopping campaigns targeting fashion-specific search intent — by category, colour, style, and occasion.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "New collection launches, seasonal sale campaigns, styling recommendation emails, and VIP loyalty sequences for high-LTV customers.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Product page and checkout optimisation for fashion ecommerce — size guide UX, social proof placement, and cross-sell logic.", href: "/cro-service", color: "#1a56ff" },
    { title: "SEO & Content", body: "Fashion editorial content and category page SEO that builds organic visibility for style-intent queries and reduces paid dependency.", href: "/content-marketing-service", color: "#7c3aed" },
  ],
  caseStudy: {
    label: "Fashion Brand · DTC",
    headline: "5.8x paid social ROAS. +42% brand search in 8 months.",
    body: "A DTC fashion brand with strong aesthetics but inconsistent paid performance. We rebuilt their Meta campaign structure around collection launches, deployed a styling content strategy, and launched Google Shopping. In 8 months: 5.8x paid social ROAS, +42% brand search volume.",
    metrics: [{ value: "5.8x", label: "Paid ROAS" }, { value: "+42%", label: "Brand search" }, { value: "+35%", label: "Repeat purchase" }],
  },
  challenges: [
    { title: "Visual-first performance", body: "Fashion performance is almost entirely driven by creative quality. We help brands develop systematic creative testing frameworks that identify winning concepts faster." },
    { title: "Trend velocity", body: "Fashion trends move in days on TikTok. We build content systems that can respond to trend cycles in 24–48 hours rather than 2-week production cycles." },
    { title: "Size and fit returns", body: "Fashion ecommerce has the highest return rates of any category. CRO for size guides, fit descriptions, and social proof reduces return rates and improves true profitability." },
  ],
  otherIndustries: withoutSelf("/fashion-marketing"),
  cta: "Fashion marketing that builds the brand and moves inventory — at the same time.",
};

/* ─────────────────────────────── ENTERTAINMENT ─────────────────────────────── */
const entertainmentData: IndustryData = {
  industry: "Entertainment", slug: "entertainment-marketing",
  headline: "Sell out the show.",
  italic: "Build the audience.",
  subhead: "Events, venues, entertainment brands, streaming content, talent agencies. Ticket sales, audience growth, and content-driven brand building across paid and organic channels.",
  image: "/case-study-saas.png",
  stats: [{ value: "+280%", label: "Ticket sales" }, { value: "+150%", label: "Social reach" }, { value: "4.2x", label: "Paid ROAS" }],
  services: [
    { title: "Paid Social", body: "Event and show promotion campaigns on Meta, TikTok, and Instagram. Audience building and ticket sale campaigns with RSVP and purchase conversion tracking.", href: "/paid-social-service", color: "#f97316" },
    { title: "Social Media Content", body: "Content strategy for entertainment brands — behind-the-scenes content, talent-driven storytelling, and countdown campaigns that build anticipation.", href: "/social-media-service", color: "#ec4899" },
    { title: "Google Ads", body: "Search campaigns for event and show queries — 'concerts in Toronto', '[artist] tickets', '[venue] events'. Structured for immediate ticket sale conversion.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Pre-show excitement campaigns, on-sale notifications, and post-show loyalty emails that turn one-time attendees into season ticket holders.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "SEO & Content", body: "Event preview content, artist profiles, and venue pages that capture organic search traffic from entertainment-intent queries.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "CRO", body: "Ticket purchase flow optimisation — reducing drop-off between interest and completed purchase during on-sale windows when velocity matters most.", href: "/cro-service", color: "#1a56ff" },
  ],
  caseStudy: {
    label: "Entertainment Venue · Toronto",
    headline: "+280% ticket sales. Sold-out shows 3 months in a row.",
    body: "A Toronto entertainment venue with inconsistent ticket sales and heavy reliance on word-of-mouth. We built a full paid social funnel, deployed Google Ads for event queries, and launched an email list campaign for past attendees. In 6 months: +280% ticket sales, sold out 3 consecutive shows.",
    metrics: [{ value: "+280%", label: "Ticket sales" }, { value: "3", label: "Consecutive sellouts" }, { value: "4.2x", label: "Paid ROAS" }],
  },
  challenges: [
    { title: "Short sales windows", body: "Entertainment events have tight promotion windows — sometimes 2–4 weeks from announcement to show date. We build campaign infrastructure that deploys at full speed on day one." },
    { title: "Audience building vs. conversion", body: "Entertainment requires both long-term audience building and short-term ticket conversion. We manage both timelines simultaneously without letting one cannibalise the other." },
    { title: "Last-minute purchase patterns", body: "A significant portion of entertainment purchases happen within 48 hours of the event. We retain paid budget for late-funnel retargeting that captures last-minute buyers." },
  ],
  otherIndustries: withoutSelf("/entertainment-marketing"),
  cta: "Entertainment marketing that fills venues — every show, every time.",
};

/* ─────────────────────────────── TECHNOLOGY ─────────────────────────────── */
const technologyData: IndustryData = {
  industry: "Technology", slug: "technology-marketing",
  headline: "Grow faster than your competitors.",
  italic: "Build a lasting moat.",
  subhead: "Tech companies, IT services, software vendors, hardware brands. Content authority that positions you as the category leader, backed by demand gen and paid channels that fill your pipeline.",
  image: "/case-study-saas.png",
  stats: [{ value: "+315%", label: "Qualified leads" }, { value: "8x", label: "Content ROI" }, { value: "14 mo", label: "Compound timeline" }],
  services: [
    { title: "Content Marketing", body: "Topical authority content that makes you the go-to resource in your technology category. Built to rank, built to convert.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Demand capture campaigns targeting technology purchase and evaluation queries. Competitor conquesting and branded protection campaigns included.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Technical SEO", body: "JavaScript-aware SEO for modern tech stacks. Core Web Vitals, structured data, and the infrastructure that makes your product pages indexable and rankable.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "Paid Social", body: "LinkedIn ABM targeting for enterprise technology sales. Meta retargeting for SMB technology products reaching decision-makers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "Demo, trial, and quote conversion optimisation. Technology buyers need more proof — we build the page experiences that give them the confidence to convert.", href: "/cro-service", color: "#22c55e" },
    { title: "AI Integration", body: "AI-powered SEO and content workflows that let technology brands publish at scale without sacrificing quality or E-E-A-T compliance.", href: "/ai-integration-service", color: "#1a56ff" },
  ],
  caseStudy: {
    label: "Technology Company · B2B",
    headline: "+315% qualified leads. 8x content ROI in 14 months.",
    body: "A B2B technology vendor with strong product but no organic presence and expensive paid acquisition. We built a 45-article topical authority cluster, rebuilt Google Ads with intent layering, and launched LinkedIn ABM campaigns. In 14 months: +315% qualified leads, 8x content ROI.",
    metrics: [{ value: "+315%", label: "Qualified leads" }, { value: "8x", label: "Content ROI" }, { value: "+800%", label: "Organic traffic" }],
  },
  challenges: [
    { title: "Rapidly evolving search landscape", body: "Technology categories evolve quickly. The keyword landscape shifts as new solutions emerge and existing categories consolidate. We monitor and adapt strategy continuously." },
    { title: "Technical complexity in content", body: "Technology buyers are sophisticated. Content that wins their trust must be technically accurate and deep — we work with your subject matter experts to produce it." },
    { title: "Long enterprise sales cycles", body: "Enterprise technology deals take 6–18 months. Our strategy maintains brand visibility and nurtures prospects through the entire evaluation cycle." },
  ],
  otherIndustries: withoutSelf("/technology-marketing"),
  cta: "Technology marketing that builds pipeline and positions you as the category leader.",
};

/* ─────────────────────────────── SMALL BUSINESS ─────────────────────────────── */
const smallBusinessData: IndustryData = {
  industry: "Small Business", slug: "small-business-marketing",
  headline: "Compete with bigger brands.",
  italic: "Win in your market.",
  subhead: "Solopreneurs to 20-person teams. Lean, high-impact digital marketing that doesn't require an enterprise budget. Local SEO, targeted paid search, and content that punches above your weight class.",
  image: "/case-study-home.png",
  stats: [{ value: "+190%", label: "Lead volume" }, { value: "-30%", label: "Cost per lead" }, { value: "90 days", label: "First results" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for your specific service area. Local SEO is the highest-ROI channel for small businesses — once you're in the pack, leads compound.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management — the free tool most small businesses set up once and never touch again. We make it a lead generation machine.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Google Ads", body: "Tightly-scoped search campaigns that spend efficiently at small business budgets. No wasted impressions on queries that won't convert for your specific offer.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Systematic post-service review requests that build your Google rating consistently over time. The #1 most impactful thing a small business can do for local visibility.", href: "/review-generation", color: "#f59e0b" },
    { title: "Website Design", body: "Small business websites built for conversion — not just aesthetics. Fast, mobile-first, and structured to turn local searchers into enquiries.", href: "/custom-web-design-service", color: "#7c3aed" },
    { title: "Content Marketing", body: "Service page content that ranks and converts. We write the pages that make Google understand what you do and where you do it.", href: "/content-marketing-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Local Service Business · GTA",
    headline: "+190% leads in 90 days. Map pack #1 for core queries.",
    body: "A 6-person service business invisible in local search. We rebuilt their GBP, fixed 28 citation inconsistencies, deployed a review generation system, and launched a tightly-scoped Google Ads campaign. In 90 days: +190% leads, #1 map pack for their core service queries.",
    metrics: [{ value: "+190%", label: "Lead volume" }, { value: "#1", label: "Map pack" }, { value: "90 days", label: "Timeline" }],
  },
  challenges: [
    { title: "Limited budget efficiency", body: "Small businesses can't afford waste. Every campaign is scoped to the highest-intent, most-convertible queries — no brand awareness spend until direct response is optimised." },
    { title: "Competing against franchises", body: "Small businesses often compete against franchise networks with larger budgets. Hyper-local targeting and superior review velocity are how independent operators win." },
    { title: "Time-constrained owners", body: "Small business owners don't have time to review 40-slide decks. We communicate clearly, move fast, and keep reporting to the 3 metrics that actually matter." },
  ],
  otherIndustries: withoutSelf("/small-business-marketing"),
  cta: "Small business marketing that delivers real leads — not just website traffic.",
};

/* ─────────────────────────────── CONSTRUCTION ─────────────────────────────── */
const constructionData: IndustryData = {
  industry: "Construction", slug: "construction-marketing",
  headline: "More RFQs.",
  italic: "Higher-value contracts.",
  subhead: "General contractors, specialty trades, construction firms, developers. Local SEO for project-intent searches, paid campaigns for high-value tender keywords, and authority content that wins RFQ shortlists.",
  image: "/case-study-home.png",
  stats: [{ value: "+210%", label: "Qualified inquiries" }, { value: "#1–3", label: "Local pack avg" }, { value: "-25%", label: "Cost per RFQ" }],
  services: [
    { title: "Local SEO", body: "Map pack and organic rankings for construction and trade queries in your service area. The #1 channel for inbound project inquiries.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for high-value construction and renovation intent. Separate campaigns for residential, commercial, and specialty services.", href: "/google-ads-management", color: "#ea4335" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management with project photo strategy, service area configuration, and review velocity that sustains map pack position.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Content Marketing", body: "Project portfolio content, buyer guides, and authority articles that build the trust required before a prospect will request a quote on a $50k+ project.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Review Generation", body: "Post-project review requests that build your profile. Construction purchasing decisions are heavily influenced by review count and recency.", href: "/review-generation", color: "#f59e0b" },
    { title: "Local Landing Pages", body: "Service × location pages targeting every major project type and geography in your coverage area.", href: "/local-landing-pages", color: "#0891b2" },
  ],
  caseStudy: {
    label: "General Contractor · Toronto",
    headline: "+210% qualified inquiries. Map pack #2 in 18 weeks.",
    body: "A Toronto GC relying entirely on referrals. We rebuilt GBP, launched local SEO for renovation and construction queries across 12 Toronto neighbourhoods, and deployed a project portfolio content strategy. In 18 weeks: +210% qualified inquiries, #2 map pack for core queries.",
    metrics: [{ value: "+210%", label: "Qualified inquiries" }, { value: "#2", label: "Map pack" }, { value: "18 wks", label: "Timeline" }],
  },
  challenges: [
    { title: "High-stakes purchasing decisions", body: "Construction projects are $20k–$2M+ purchases. Buyers research extensively and require substantial trust signals before requesting a quote. Content quality and social proof are critical." },
    { title: "Portfolio presentation", body: "Construction marketing is portfolio-driven. We help clients build the photography and content infrastructure that showcases project quality effectively." },
    { title: "Seasonal project cycles", body: "Construction demand peaks in spring/summer. We launch campaigns in February so you enter peak season at full campaign maturity — not still ramping up." },
  ],
  otherIndustries: withoutSelf("/construction-marketing"),
  cta: "Construction marketing that fills your project pipeline — year-round.",
};

/* ─────────────────────────────── LAW ─────────────────────────────── */
const lawData: IndustryData = {
  industry: "Law", slug: "law-marketing",
  headline: "High-value cases find you.",
  italic: "Not the other way around.",
  subhead: "Law firms of every size and practice area. SEO authority, Google Ads, and content marketing that position your firm as the go-to choice for high-intent legal queries in your market.",
  image: "/industry-legal.png",
  stats: [{ value: "-52%", label: "Cost per lead" }, { value: "+189%", label: "Qualified lead growth" }, { value: "12 mo", label: "Compound timeline" }],
  services: [
    { title: "Legal SEO", body: "Practice area × city landing pages for every query your prospective clients use. Legal SEO has a long compounding runway — authority built today dominates for years.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "High-intent search campaigns for practice area keywords. Tightly controlled ad groups prevent budget waste on non-convertible queries.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Content Marketing", body: "Legal content authority clusters that build trust, rank for informational queries, and funnel readers toward your consultation CTA.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Reputation Management", body: "Review generation and management for law firms — building the social proof that converts initial contact into retained clients.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Practice area and city-specific pages targeting the exact queries prospective clients use when they need legal help immediately.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure — author pages, credentials schema, and the technical foundation that makes Google trust a legal website.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Law Firm · Toronto",
    headline: "CPA reduced 52%. Qualified lead volume doubled in 60 days.",
    body: "A Toronto law firm spending $8,000/month on Google Ads with a $340 average CPL. We rebuilt the account with intent layering, negative keyword architecture, and dedicated landing pages per practice area. CPL dropped to $163. Qualified monthly leads doubled within 60 days.",
    metrics: [{ value: "-52%", label: "Cost per lead" }, { value: "+2x", label: "Qualified leads" }, { value: "+189%", label: "Lead volume" }],
  },
  challenges: [
    { title: "Law Society advertising rules", body: "Legal advertising in Ontario is governed by the Law Society of Ontario. We understand what claims, superlatives, and testimonial formats are and aren't permitted." },
    { title: "Extremely high CPCs", body: "Legal keywords cost $15–$60+ per click. Without intent-layered negative keyword architecture, budgets evaporate on non-converting queries." },
    { title: "Long conversion cycles", body: "Legal clients research for weeks before contacting. Content marketing and retargeting build the brand recognition that wins them when they're ready to decide." },
  ],
  otherIndustries: withoutSelf("/law-marketing"),
  cta: "The firm ranked #1 for your practice area is getting clients you should have.",
};

/* ─────────────────────────────── SPORTS & FITNESS ─────────────────────────────── */
const sportsFitnessData: IndustryData = {
  industry: "Sports & Fitness", slug: "sports-fitness-marketing",
  headline: "More members. More athletes.",
  italic: "Full facilities.",
  subhead: "Sports clubs, gyms, fitness studios, personal trainers, sports academies. Local SEO and paid campaigns tuned for membership trials, class bookings, and league registrations.",
  image: "/industry-dental.png",
  stats: [{ value: "+190%", label: "New memberships" }, { value: "4.9★", label: "Rating maintained" }, { value: "#1–3", label: "Map pack target" }],
  services: [
    { title: "Local SEO", body: "Map pack dominance for gym, sports club, and fitness studio queries in your catchment area. The #1 driver of new trial sign-ups.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook trial and registration campaigns targeting your ideal member demographic within your facility's catchment radius.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for 'gym near me', 'sports club [city]', and training-specific queries with landing pages matched to each offering.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Trial-to-member nurture sequences, seasonal promotion emails, and win-back campaigns for lapsed members.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "Review Generation", body: "Post-session review requests that build your Google rating consistently. Review velocity is the #1 local ranking factor for fitness businesses.", href: "/review-generation", color: "#7c3aed" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management — class schedule updates, event posts, photo strategy, and seasonal promotions.", href: "/gbp-optimisation", color: "#0891b2" },
  ],
  caseStudy: {
    label: "Sports Club · Toronto",
    headline: "+190% new memberships in 6 months.",
    body: "A Toronto sports club with strong retention but no new member acquisition system. We built local SEO for their neighbourhood, ran paid social targeting active adults within 5km, and deployed a trial nurture sequence. In 6 months: +190% new memberships, 68% trial-to-member conversion.",
    metrics: [{ value: "+190%", label: "New members" }, { value: "68%", label: "Trial conversion" }, { value: "#1", label: "Local pack" }],
  },
  challenges: [
    { title: "Hyperlocal catchment", body: "Most fitness and sports members come from within 5km. Hyperlocal targeting and neighbourhood-specific landing pages are essential — broad city-level targeting wastes budget." },
    { title: "Trial-to-member conversion", body: "Acquiring a trial is table stakes. We build the email nurture and onboarding flows that convert trials into paying members at above-average rates." },
    { title: "January peak competition", body: "Every fitness business competes at peak intensity in January. We build the campaign infrastructure in October so you launch ahead of competitors." },
  ],
  otherIndustries: withoutSelf("/sports-fitness-marketing"),
  cta: "Sports and fitness marketing that keeps your facility full — all year.",
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
export function B2BMarketingPage() { return <IndustryPage data={b2bData} />; }
export function B2CMarketingPage() { return <IndustryPage data={b2cData} />; }
export function D2CMarketingPage() { return <IndustryPage data={d2cData} />; }
export function FoodBeverageMarketingPage() { return <IndustryPage data={foodBeverageData} />; }
export function EducationMarketingPage() { return <IndustryPage data={educationData} />; }
export function TransportationMarketingPage() { return <IndustryPage data={transportationData} />; }
export function HealthCareMarketingPage() { return <IndustryPage data={healthCareData} />; }
export function TravelMarketingPage() { return <IndustryPage data={travelData} />; }
export function FashionMarketingPage() { return <IndustryPage data={fashionData} />; }
export function EntertainmentMarketingPage() { return <IndustryPage data={entertainmentData} />; }
export function TechnologyMarketingPage() { return <IndustryPage data={technologyData} />; }
export function SmallBusinessMarketingPage() { return <IndustryPage data={smallBusinessData} />; }
export function ConstructionMarketingPage() { return <IndustryPage data={constructionData} />; }
export function LawMarketingPage() { return <IndustryPage data={lawData} />; }
export function SportsFitnessMarketingPage() { return <IndustryPage data={sportsFitnessData} />; }
