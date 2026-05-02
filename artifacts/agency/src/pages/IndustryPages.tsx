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
  longIntro: `Digital marketing for dental practices in Toronto and the GTA requires a fundamentally different approach than marketing for most other businesses. Dentistry is a high-trust, high-consideration purchase category — patients search for their next dentist only when they're ready to make a decision, and the factors driving that decision are highly local: proximity, reviews, and visibility in the Google Map pack. A dental practice that doesn't appear in the top 3 map results for "[specialty] dentist [neighbourhood]" searches is invisible to the majority of prospective patients in its catchment area.

At Outlier, we've helped dental practices across Toronto, Mississauga, and the broader GTA transform their patient acquisition systems. Our dental marketing programmes are built around the specific ranking factors that move the needle in the map pack: Google Business Profile authority, citation consistency, review velocity, and neighbourhood-specific landing page content. We understand regulated healthcare advertising — our team knows what the RCDSO permits, so you get compliant marketing that generates results without compliance risk.

The dental practices winning the most new patients in competitive GTA markets have one thing in common: they treat digital marketing as infrastructure, not an afterthought. They're in the pack. Their GBP is managed weekly. Their review count compounds month over month. And they have landing pages for every treatment they offer — not a single homepage doing the work of twenty.`,
  industryStats: [
    { value: "82%", label: "of patients search Google before booking", context: "a dental appointment — making local SEO non-negotiable for patient acquisition" },
    { value: "5×", label: "more calls from map pack vs. paid ads", context: "for dental practices in competitive GTA markets where trust drives decisions" },
    { value: "4.7★", label: "minimum rating needed", context: "to rank in the Google map pack for most Toronto and GTA dental markets" },
  ],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for every clinic location. City × service page architecture for every treatment type you offer.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for high-intent dental queries. Implants, Invisalign, emergency dentistry — each with its own campaign and landing page.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Automated post-appointment review request flows. 4.9-star maintained, response velocity that signals active practice.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "City-specific and treatment-specific pages targeting every relevant local query in your market.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "GBP Optimisation", body: "Full Google Business Profile optimisation with healthcare-specific categories, photos, Q&A, and weekly posting.", href: "/gbp-optimisation", color: "#7c3aed" },
    { title: "Paid Social", body: "Instagram and Facebook campaigns for aesthetic treatments — Invisalign, whitening, veneers — targeting the right demographic in your catchment area.", href: "/paid-social-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "GBP-first patient acquisition", body: "Google Business Profile is where dental patients make their final decision — not your website. We treat your GBP like a paid ad account: weekly posts, Q&A management, category optimisation, and ongoing photo strategy to maximise profile-to-call conversion." },
    { title: "Treatment-specific landing pages", body: "We build dedicated pages for every treatment you offer: implants, Invisalign, emergency dentistry, teeth whitening, veneers. Each page targets the specific queries patients use when searching for that treatment — not generic 'dentist near me' pages." },
    { title: "Review velocity as a ranking engine", body: "In competitive GTA dental markets, the practice with the highest and most recent review count almost always ranks first. We implement post-appointment review request systems that consistently generate 8–15 new reviews per month." },
    { title: "Regulatory-compliant copy", body: "We write all dental marketing content within RCDSO guidelines — no prohibited superlatives, compliant testimonial formats, proper disclaimer placement, and adherence to Healthcare Advertising Guidelines across Ontario." },
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
  faq: [
    { q: "How long does dental SEO take to show results in the GTA?", a: "Most dental practices see measurable map pack improvements within 6–12 weeks of starting. Achieving top 3 positions typically takes 3–6 months in competitive GTA markets. GBP optimisation and review velocity work fastest; content and citation building compounds more gradually over time." },
    { q: "How much does dental marketing cost?", a: "A comprehensive dental marketing programme — GBP management, local SEO, and review generation — typically starts at $1,500–$2,500/month for a single-location practice. Multi-location groups or practices running concurrent Google Ads will invest more. We provide a specific recommendation after your free audit." },
    { q: "Can you market regulated treatments like implants and Invisalign?", a: "Yes. We're experienced in dental advertising regulations in Ontario and across Canada. We can market implants, Invisalign, cosmetic dentistry, and other regulated treatments within RCDSO guidelines — using compliant claim language, proper testimonial formats, and required disclosures." },
    { q: "What's the difference between local SEO and Google Ads for dental?", a: "Local SEO builds your organic map pack and website rankings — producing free, compounding traffic that grows over time. Google Ads delivers immediate visibility but stops the moment you stop paying. Most dental practices benefit from both: Ads for immediate patient flow while local SEO builds the organic foundation that eventually reduces paid dependency." },
    { q: "Do you work with multi-location dental groups?", a: "Yes — multi-location dental groups are one of our specialties. We manage GBP, citations, reviews, and local content at scale across all locations — ensuring consistency while also targeting each location's specific neighbourhood market. We've worked with groups ranging from 2 to 20+ locations across the GTA." },
    { q: "What review platforms matter most for GTA dental practices?", a: "Google is by far the most important — it determines your map pack position and is the first thing patients see in search. After Google, RateMDs is the most influential for Canadian dental practices, followed by Healthgrades. We build review velocity on Google first, then extend to secondary platforms." },
  ],
  compliance: "Dental advertising in Ontario is regulated by the Royal College of Dental Surgeons of Ontario (RCDSO). We operate within all applicable guidelines — no prohibited superlatives, compliant testimonial formats, and required disclaimers on all regulated treatment marketing.",
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
  longIntro: `Legal marketing in Toronto and Ontario is one of the most complex and highest-stakes digital marketing verticals. Legal keywords on Google Ads command $20–$80+ per click. Organic law firm SEO requires E-E-A-T infrastructure that takes 6–18 months to build properly. And every claim, testimonial, and piece of content is governed by the Law Society of Ontario — making compliant execution a non-negotiable requirement, not an optional consideration.

The firms winning the most high-value cases from digital aren't necessarily the largest or best-funded. They're the ones who understood early that organic search authority — not ad spend alone — is the moat that compounds. A law firm that owns the first page for "personal injury lawyer Toronto" or "family law firm Mississauga" receives an ongoing stream of highly qualified, high-intent leads that a firm relying entirely on paid search simply cannot match at an equivalent cost.

Our legal marketing programmes are built from the ground up for practice area authority. We create the content clusters, earn the backlinks, build the E-E-A-T infrastructure, and run the Google Ads campaigns that together produce the kind of consistent, qualified case pipeline that separates the firms growing intentionally from those dependent on referrals and word of mouth.`,
  industryStats: [
    { value: "$45", label: "average CPC for legal keywords", context: "on Google Ads in Toronto — making organic SEO the highest-ROI long-term channel for law firms" },
    { value: "78%", label: "of legal clients research online first", context: "before contacting a lawyer — the firm ranked #1 gets the inquiry" },
    { value: "18 mo", label: "to compound organic authority", context: "the timeline for building durable first-page positions for competitive Ontario legal keywords" },
  ],
  services: [
    { title: "Local SEO", body: "Practice area × city landing pages for every query your prospective clients are using to find legal help in your market.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Content Marketing", body: "Legal content authority clusters that build trust, rank for informational queries, and funnel readers toward your consultation CTA.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "High-intent search campaigns for practice area keywords. Tightly controlled ad groups prevent budget waste on non-convertible queries.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Reputation Management", body: "Review generation and management for legal practices — building the trusted social proof that converts initial contact into retained clients.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Practice area and city-specific landing pages targeting the exact queries your prospective clients use when they need legal help immediately.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure: author pages, credentials schema, legal disclaimers, and site speed — all required for Google to treat a legal site as authoritative.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Practice area × location page architecture", body: "The highest-converting legal SEO strategy is a matrix of practice area pages targeting every city and region in your catchment area. 'Personal injury lawyer Scarborough,' 'family law firm North York,' 'corporate lawyer Mississauga' — each page targets a distinct query cluster with dedicated, researched content." },
    { title: "E-E-A-T infrastructure for legal authority", body: "Google's Quality Rater Guidelines treat legal content as YMYL (Your Money Your Life) — requiring demonstrated expertise, authoritativeness, and trustworthiness. Author bios with credentials, bar association citations, case outcome references (where permitted), and proper schema markup are all required." },
    { title: "Intent-layered Google Ads architecture", body: "Legal Google Ads accounts routinely waste 60%+ of budget on broad-match queries. We build tightly structured campaigns with exact and phrase match keywords, comprehensive negative keyword lists, and landing pages specifically designed for high-intent legal queries." },
    { title: "LSO-compliant content strategy", body: "Every piece of content we produce for legal clients is reviewed against Law Society of Ontario advertising guidelines — no prohibited result guarantees, compliant past result references, proper fee disclosure, and adherent testimonial formats." },
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
  faq: [
    { q: "How competitive is legal SEO in Toronto?", a: "Legal is one of the most competitive SEO verticals in Canada. Personal injury, family law, and criminal defence keywords in Toronto are contested by firms spending six figures annually on SEO and paid search. Winning requires a multi-year investment in content authority, technical SEO, and consistent link building — not a quick fix." },
    { q: "What's a realistic timeline for legal SEO results?", a: "For most Ontario law firms, meaningful organic traffic improvements take 6–12 months. First-page positions for competitive terms like 'personal injury lawyer Toronto' can take 12–24 months. Niche practice areas (immigration, elder law, specific areas of corporate) can rank faster. We set realistic timelines from day one." },
    { q: "How much should a law firm spend on Google Ads in Ontario?", a: "Ontario legal Google Ads budgets range from $3,000–$5,000/month for niche practices to $15,000–$50,000+/month for personal injury and family law in Toronto. We conduct a keyword research and competitive analysis to recommend the minimum effective budget before any spend begins." },
    { q: "Can legal content be used for both SEO and client education?", a: "Absolutely — and this is one of the best investments a law firm can make. Long-form legal guides that explain processes, rights, and options rank for informational queries and build trust with prospective clients. We structure every piece of legal content to serve both SEO objectives and the client's research journey." },
    { q: "Do you understand LSO advertising guidelines?", a: "Yes. Our team is experienced in Law Society of Ontario advertising guidelines and we apply them to every campaign and content piece we create. No prohibited result guarantees, compliant past-result references, proper fee transparency, and adherent testimonial formats — across all channels." },
  ],
  compliance: "Legal advertising in Ontario is governed by the Law Society of Ontario (LSO). We operate within all applicable advertising guidelines — no prohibited outcome guarantees, compliant testimonial and past-result references, and required fee disclosures on all client-facing materials.",
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
  longIntro: `Home services is the single most important local SEO vertical in the GTA. Every day, thousands of homeowners in Toronto, Mississauga, Brampton, and surrounding cities search for HVAC contractors, plumbers, electricians, roofers, and landscapers — searches driven by immediate need, emergency situations, or seasonal maintenance. These are buyers with purchase intent measured in hours, not weeks. The business that shows up first in the Google Map pack gets the call. The businesses below the fold do not.

What makes home services local SEO uniquely winnable — and uniquely competitive — is the proximity variable. Google's local algorithm weights physical proximity heavily for service-area businesses. A plumber in Cooksville doesn't automatically rank for searches in Erin Mills or Port Credit. Without the right GBP service area configuration, neighbourhood landing pages, and citation consistency, you're invisible outside your immediate block. We've cracked this at scale — building landing page architectures that establish geographic relevance across an entire city.

The unit economics of home services make digital marketing investment among the most compelling we've seen in any vertical. A single HVAC installation job can return $4,000–$12,000+. A single plumbing emergency call can produce $500–$3,000. At those ticket sizes, a Google Maps position that generates even 5 additional calls per month produces an extraordinary return on investment.`,
  industryStats: [
    { value: "72%", label: "of home service calls come from Google", context: "map pack and organic search — not directory listings or word of mouth" },
    { value: "5×", label: "higher conversion from 'emergency' queries", context: "than standard service queries — these are the searches we build for first" },
    { value: "8 wks", label: "average time to first map pack movement", context: "for GTA home services businesses starting a local SEO programme with Outlier" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for every service × city combination in your coverage area. Built for emergency queries — the highest-intent searches in your category.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Local Service Ads", body: "Google Guaranteed placement above everything else. Pay per lead. We handle the full verification and ongoing management.", href: "/local-service-ads", color: "#ea4335" },
    { title: "Google Ads", body: "Search campaigns for service-intent keywords — 'emergency HVAC', 'same-day plumber', 'roof repair near me' — with landing pages matched to each.", href: "/google-ads-management", color: "#f59e0b" },
    { title: "GBP Optimisation", body: "Seasonal attribute updates, weekly posting, and review velocity — the active GBP management that sustains map pack position through slow seasons.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Review Generation", body: "Post-service automated review requests. Home services depend heavily on review count and velocity for map pack position.", href: "/review-generation", color: "#7c3aed" },
    { title: "Local Landing Pages", body: "Service × neighbourhood pages for every sub-market you cover — targeting the proximity signals that determine which calls go to you vs. the competitor two blocks closer.", href: "/local-landing-pages", color: "#0891b2" },
  ],
  tactics: [
    { title: "Emergency query capture", body: "Emergency searches — '24h plumber near me', 'HVAC repair tonight', 'emergency electrician' — convert at 3–5× the rate of general service queries. We build separate landing pages, GBP service categories, and Ad groups specifically targeting emergency intent." },
    { title: "Neighbourhood × service page architecture", body: "Map pack proximity signals require hyperlocal content. We build a page for every service × neighbourhood combination in your coverage area: 'HVAC repair Erin Mills,' 'plumber Streetsville,' 'electrician Meadowvale.' Each page establishes geographic relevance for its specific area." },
    { title: "Seasonal GBP management", body: "Home services have hard seasonality — HVAC peaks in summer and winter, landscaping in spring and fall, roofing in spring. We manage your GBP with seasonal service updates, attribute changes, and post cadences that sustain rankings through slow seasons." },
    { title: "Review velocity as competitive moat", body: "In GTA home services map packs, the business with the most recent and consistently high reviews almost always wins. We implement post-service review request sequences that generate 10–20 new reviews per month — building a moat that's difficult for competitors to overcome." },
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
  faq: [
    { q: "How quickly can a home services business get into the map pack?", a: "For most GTA home services businesses starting from outside the top 10, we see meaningful improvements within 6–10 weeks of beginning work. Top 3 map pack positions typically follow at 3–5 months. More competitive categories (plumbing, HVAC in dense urban areas) take longer than less-contested trades." },
    { q: "What's the ROI of local SEO for home services?", a: "Home services unit economics make local SEO among the highest-ROI marketing investments available. At an average job value of $500–$5,000+, a single additional call per day from map pack visibility typically produces 10–50× the monthly investment. We can model this for your specific trade and service area." },
    { q: "Do you work with multi-trade businesses (HVAC + plumbing + electrical)?", a: "Yes. Multi-trade businesses require a more complex GBP and landing page architecture — separate service categories, distinct page content per trade, and careful keyword segmentation. We manage this complexity and build the architecture that captures intent across all your trades." },
    { q: "How do Local Service Ads (Google Guaranteed) differ from regular Google Ads?", a: "Local Service Ads appear above regular Google Ads and organic results — the highest possible position. They charge per verified lead (phone call or message), not per click, and carry Google's 'Guaranteed' badge which significantly increases trust and conversion. Eligibility requires background check and licence verification, which we manage." },
    { q: "What directories matter most for home services citation building?", a: "Beyond Google itself, the most important directories for GTA home services are HomeStars, Yelp, BBB, Yellow Pages, Houzz, Angi (Angie's List), and local chamber of commerce directories. NAP consistency across all of these is foundational to map pack rankings." },
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
  longIntro: `Real estate digital marketing in the GTA is a hyperlocal game. A buyer searching "homes for sale Toronto" is competing with tens of thousands of searches per month — a query dominated by major portals like Realtor.ca, Zolo, and Housesigma. But a buyer searching "detached homes for sale Leslieville" or "condos for sale Bayview Village" is entering a much more winnable search landscape — one where a well-optimised agent or brokerage with neighbourhood-specific content can legitimately outrank the portals and capture the lead.

This is the insight that drives our real estate SEO strategy: neighbourhood specificity is the competitive advantage. We don't try to rank your brokerage for broad Toronto real estate terms. We build a content architecture that dominates the neighbourhood-specific queries your ideal buyers and sellers actually use — and we make sure every one of those pages has the depth, the local data, and the technical optimisation required to rank above the portals.

For seller lead generation, paid social is our primary channel. Facebook and Instagram targeting lets us reach homeowners in specific postal codes who are at the research stage of selling — before they call an agent. We combine this with direct mail-style retargeting campaigns that put your brand in front of the right Mississauga or Toronto homeowner at the exact moment they're considering listing.`,
  industryStats: [
    { value: "89%", label: "of buyers start their search online", context: "before ever contacting an agent — making search visibility the first step in the buyer's journey" },
    { value: "68%", label: "of sellers research agents online", context: "before requesting a valuation — content authority and review count drive shortlisting" },
    { value: "6 mo", label: "average buyer research phase", context: "the window in which content marketing and retargeting can capture real estate leads before competitors" },
  ],
  services: [
    { title: "Local SEO", body: "Neighbourhood-specific pages targeting buyer and seller queries in your market areas. Hyperlocal content that ranks for the exact searches active buyers use.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Content Marketing", body: "Neighbourhood guides, market reports, and buyer/seller educational content that builds authority and ranks for research-phase queries.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Paid Social", body: "Facebook and Instagram listing campaigns targeting in-market buyers in your specific neighbourhoods. Retargeting for property viewers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for buyer and seller intent keywords — 'homes for sale Leslieville', 'sell my house Toronto' — with neighbourhood-specific landing pages.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Landing Page Design", body: "Dedicated landing pages for listing campaigns, seller valuation tools, and buyer registration — each one optimised for its specific conversion goal.", href: "/landing-page-design", color: "#22c55e" },
    { title: "Email Marketing", body: "Automated nurture sequences for buyer and seller leads. Market update broadcasts that keep your database engaged between transactions.", href: "/email-marketing-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Neighbourhood content dominance strategy", body: "We build dedicated neighbourhood guide pages for every sub-market in your coverage area — covering lifestyle, schools, transit, market data, and property types. These pages rank for the exact neighbourhood + real estate queries active buyers use, and they convert at dramatically higher rates than generic city-level pages." },
    { title: "Seller lead capture and nurture", body: "Seller leads require a different strategy than buyer leads. We build instant valuation tool landing pages, run postal-code-targeted Facebook campaigns to homeowners, and deploy a multi-touch email nurture sequence that stays relevant through the 3–9 month research phase before a homeowner lists." },
    { title: "Portal-proof SEO architecture", body: "Ranking above Realtor.ca, Zolo, and HouseSigma requires targeting the queries these portals don't dominate — neighbourhood-specific content, hyperlocal market reports, and agent-specific authority content that the portals can't replicate at scale." },
    { title: "RECO-compliant advertising", body: "Real estate advertising in Ontario requires proper brokerage disclosure, compliant team attribution, and adherence to RECO and CREA advertising guidelines. We apply these requirements to every campaign and piece of content we produce." },
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
  faq: [
    { q: "How do you compete with Realtor.ca and Zolo in search?", a: "By targeting the queries the portals don't dominate — neighbourhood-specific content, agent-specific authority pages, and hyperlocal market data. A page targeting 'detached homes for sale Junction Toronto' competes with far fewer pages than 'homes for sale Toronto,' and the buyer searching that query is deeper in the funnel with higher intent." },
    { q: "What's the best digital channel for seller leads?", a: "Paid social (Facebook and Instagram) is the most effective channel for proactive seller lead generation. It allows postal-code-level targeting of homeowners who match the profile of likely sellers, before they've started researching agents. Combined with an instant valuation landing page and automated nurture sequence, it builds a predictable seller pipeline." },
    { q: "How do you handle RECO advertising compliance?", a: "We apply RECO advertising guidelines to every campaign and content piece — proper brokerage disclosure, compliant team attribution, no prohibited promises, and required disclosures on all rate and result references. Our team reviews all real estate content against current RECO guidelines before publishing." },
    { q: "Can you generate leads for both buyers and sellers?", a: "Yes. Buyer lead generation typically centres on content marketing and SEO (neighbourhood guides, market reports) combined with Google Ads targeting home search intent. Seller lead generation uses paid social targeting homeowners by postal code, combined with instant valuation tools and automated nurture sequences." },
    { q: "How long before we see qualified real estate leads?", a: "Paid social seller lead campaigns typically start generating enquiries within 2–4 weeks of launch. Google Ads for buyer intent follows within 1–2 weeks of campaign go-live. SEO-driven content takes 4–8 months to rank, but produces higher-intent leads when it does. We layer channels to ensure you have lead flow from day one while the long-term organic foundation builds." },
  ],
  compliance: "Real estate advertising in Ontario is regulated by the Real Estate Council of Ontario (RECO) and CREA. We apply all applicable advertising guidelines — proper brokerage disclosure, compliant result references, and required attribution on all team and agent marketing.",
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
  longIntro: `eCommerce marketing in 2025 is a systems problem, not a channels problem. The brands that achieve sustainable, profitable growth aren't the ones running the most ads — they're the ones with the tightest integration between paid acquisition, lifecycle email, conversion rate optimisation, and organic search. When these channels share data, audiences, and creative learning, the compounding effect dramatically outperforms any single-channel strategy.

The average Shopify brand we audit is making the same four mistakes: overspending on Meta with declining ROAS, running a single welcome email instead of a full lifecycle sequence, ignoring the 30–40% conversion rate improvement available from checkout optimisation, and treating SEO as an afterthought rather than a compounding acquisition asset. Fixing these four things — before spending a dollar more on ads — is where the real growth is.

Our eCommerce marketing programmes are built around a simple principle: maximise the value of every visitor you already have before scaling the cost of acquiring more. A 10% improvement in checkout conversion rate is worth more than doubling your ad budget. We execute this principle across every channel we manage — and we show you the exact attribution data to prove what's working.`,
  industryStats: [
    { value: "70%", label: "average checkout abandonment rate", context: "across all eCommerce verticals — a 10% improvement here outperforms doubling ad spend" },
    { value: "3–5×", label: "higher LTV from email subscribers", context: "vs. one-time buyers — lifecycle email is the highest-ROI channel for eCommerce brands" },
    { value: "35%", label: "Meta CPM increase over 3 years", context: "making conversion rate and email optimisation increasingly critical to eCommerce profitability" },
  ],
  services: [
    { title: "Google Shopping & PMAX", body: "Shopping campaigns with precise product feed optimisation, custom labels, and PMAX asset groups structured by product category and margin.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Paid Social (Meta & TikTok)", body: "Full-funnel Meta and TikTok campaigns: cold audience creative, dynamic product ads for warm audiences, and retention campaigns for past buyers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "Conversion rate optimisation for your product pages, cart, and checkout — the highest ROI investment for any eCommerce store with existing traffic.", href: "/cro-service", color: "#22c55e" },
    { title: "Lifecycle Email", body: "Welcome sequences, abandoned cart flows, post-purchase upsells, and win-back campaigns — the email stack that converts browsers into repeat buyers.", href: "/email-marketing-service", color: "#7c3aed" },
    { title: "SEO", body: "Category page and product page SEO for organic traffic that compounds over time. Technical SEO and content strategy for eCommerce.", href: "/technical-seo-service", color: "#1a56ff" },
    { title: "eCommerce Development", body: "Shopify and WooCommerce builds optimised for conversion: page speed, mobile UX, and checkout flow built around your specific product and customer.", href: "/ecommerce-development", color: "#0891b2" },
  ],
  tactics: [
    { title: "Checkout optimisation first", body: "Before scaling ad spend, we audit your checkout flow. The average eCommerce checkout has a 70% abandonment rate — addressable through one-page checkout, guest checkout options, trust signal placement, and speed optimisation. A 10% checkout improvement typically delivers more revenue than doubling your ad budget." },
    { title: "Full-funnel Meta campaign architecture", body: "We structure Meta campaigns in three distinct phases: cold (interest + lookalike audiences for new customer acquisition), warm (retargeting site visitors and video viewers), and hot (abandoned cart, product view retargeting). Each phase has different creative, bidding, and budget logic." },
    { title: "Lifecycle email stack build-out", body: "Most eCommerce brands have a welcome email. The ones growing profitably have a full 12-flow lifecycle stack: welcome, browse abandonment, cart abandonment, post-purchase upsell, cross-sell, loyalty, win-back, and re-engagement. We build the full stack in weeks, not months." },
    { title: "Attribution model alignment", body: "Post-iOS14, last-click attribution in Meta and Google dramatically understates the true impact of channels. We implement GA4 + first-party data attribution that accurately reflects the customer journey across all touchpoints, enabling better budget allocation decisions." },
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
  faq: [
    { q: "What Shopify marketing services do you offer?", a: "We offer a comprehensive Shopify growth suite: Google Shopping and Performance Max management, Meta and TikTok paid social, Klaviyo lifecycle email, CRO (product page, cart, and checkout optimisation), SEO for category and product pages, and Shopify development for speed and conversion improvements. We manage individual channels or your full Shopify growth stack." },
    { q: "How do you improve eCommerce conversion rates?", a: "CRO for eCommerce focuses on three primary areas: product page optimisation (social proof placement, imagery, description clarity, trust signals), cart optimisation (cross-sell logic, urgency signals, guest checkout), and checkout optimisation (reducing steps, improving mobile UX, minimising friction). We identify the highest-impact opportunities through heatmap and session recording analysis before prioritising changes." },
    { q: "What's a realistic ROAS target for eCommerce Google Ads?", a: "ROAS targets vary dramatically by product margin, category, and competition. A 3–5× ROAS is typical for most consumer goods on Google Shopping. High-margin categories can sustain 6–10× targets. We set ROAS targets based on your actual margin structure — not industry averages — and we optimise toward profitability, not just ROAS." },
    { q: "How do you handle Meta advertising after iOS14?", a: "We use a combination of Meta's Conversions API (server-side tracking), GA4 data-driven attribution, and first-party customer data to build accurate attribution models that don't rely entirely on Meta's pixel. This gives us a reliable picture of true campaign contribution and enables better budget allocation decisions." },
    { q: "Do you work with new Shopify stores or established brands?", a: "Both. For new stores, we focus on launching the most efficient acquisition channels first (Google Shopping and email capture) and building the lifecycle email infrastructure from day one. For established stores, we typically start with a full channel audit to identify the highest-ROI improvements before building on what's already working." },
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
  longIntro: `Auto and trades businesses in the GTA operate in some of the most competitive local search environments in the country. Search "auto body shop Mississauga" or "mechanic near me Brampton" and you'll find 3–10 businesses fighting for the same three map pack spots — with ranking differences often coming down to review velocity, citation consistency, and GBP management quality, not the age or reputation of the business.

The good news: most auto and trades businesses are poorly optimised. The typical mechanic, body shop, or tradesperson has a basic GBP with minimal photos, inconsistent NAP data across directories, and no review generation strategy. These are fixable problems that produce fast, measurable results when addressed systematically.

We've run more auto and trades local SEO programmes in the GTA than any other single category. We know which citation directories carry weight, what seasonal GBP updates sustain rankings through slow months, and how review velocity actually impacts map pack position in dense urban and suburban markets. The result is a consistent formula that takes clients from invisible to the top of their local pack in 10–16 weeks.`,
  industryStats: [
    { value: "91%", label: "of auto service searches happen on mobile", context: "often while the driver is already experiencing a problem — immediate visibility is critical" },
    { value: "3.6×", label: "more calls to map pack #1 vs. #4", context: "in GTA auto and trades categories — the difference between winning and losing is one map rank" },
    { value: "10 wks", label: "average to top 3 map pack", context: "for GTA auto and trades businesses starting a local SEO programme from outside the top 10" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for your specific trade and location. Auto and trades are our most-competed local SEO vertical — we know every variable.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management for auto and trades businesses — seasonal services, photo strategy, and weekly posting that sustains rankings.", href: "/gbp-optimisation", color: "#ea4335" },
    { title: "Google Ads", body: "Search and Local Service Ads for trade-intent queries. Separate campaigns for each service type with intent-layered bid strategy.", href: "/google-ads-management", color: "#f59e0b" },
    { title: "Review Management", body: "Post-service review generation and response management. Review velocity is the #1 differentiator in crowded auto and trades map packs.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Service × neighbourhood pages that win the proximity battle against the competitor two blocks closer.", href: "/local-landing-pages", color: "#7c3aed" },
    { title: "Citation Audit", body: "NAP consistency across 45+ directories — the citation graph that underlies map pack position in every auto and trades market.", href: "/citation-audit", color: "#0891b2" },
  ],
  tactics: [
    { title: "Review velocity as primary differentiator", body: "In GTA auto and trades map packs, the business with the most recent and consistent review stream almost always ranks first. We implement automated post-service review request SMS and email sequences that generate 10–20 new reviews per month — building a compounding moat." },
    { title: "Proximity gap coverage", body: "Auto and trades customers call the nearest business. We configure GBP service areas, build neighbourhood landing pages, and establish citation signals for every sub-market in your catchment area — closing the proximity gaps that competitors in your market exploit." },
    { title: "Seasonal service attribute management", body: "Google's local algorithm rewards active, updated GBP profiles. We update your seasonal service attributes — winter tire service, snow removal, AC seasonal tune-up — on a pre-planned calendar that keeps your profile fresh and relevant year-round." },
    { title: "Emergency service capture", body: "Emergency auto and trades searches convert at 4–6× the rate of standard queries. We build dedicated pages, GBP service categories, and Ad groups targeting emergency intent for your highest-margin services." },
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
  faq: [
    { q: "How competitive are auto and trades map packs in the GTA?", a: "Very. Categories like mechanic, auto body, plumber, and electrician in cities like Toronto, Mississauga, and Brampton are among the most competitive local search categories in Canada. The difference between ranking #1 and #4 often comes down to review recency, citation consistency, and GBP posting frequency — factors that are completely within our control." },
    { q: "How many reviews does a GTA auto shop need to rank?", a: "There's no magic number — it depends on your specific market and the review counts of your top competitors. In most GTA markets, 50–100+ reviews with a 4.7+ average and consistent recent activity is competitive. We target consistent review velocity (8–15 new reviews per month) rather than a one-time burst." },
    { q: "Can local SEO work for auto dealers and not just independent shops?", a: "Yes. Dealerships have unique challenges — multiple GBP listings for new sales, used sales, and service — but also significant opportunities. We manage multi-department GBP strategy, build service-specific landing pages, and run Google Ads targeting high-value service queries for dealerships across the GTA." },
    { q: "What citation directories matter most for auto and trades?", a: "The highest-impact directories for GTA auto and trades are Google itself, Yelp, Yellow Pages, BBB, AutoDir, RepairLink, and HomeStars (for trades). We also build citations in municipality-specific and neighbourhood-specific directories that carry local authority signals." },
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
  longIntro: `SaaS marketing is fundamentally a pipeline problem. Traffic is easy to generate; ICP-fit MQLs that convert to qualified demos and ultimately to closed revenue are what actually matter. Most SaaS companies investing in digital marketing are optimising for the wrong metric: they measure traffic and lead volume when they should be measuring demo rate, SQL rate, and CAC by channel.

At Outlier, we build SaaS marketing programmes around your go-to-market motion — whether that's PLG, sales-led, or a hybrid. PLG funnels need CRO optimised for activation, not just sign-up volume. Sales-led funnels need demo request optimisation and content that builds the category authority to justify your sales team's outreach. We build for the specific conversion that produces revenue for your SaaS business, not the vanity metrics that look good in a quarterly report.

The Canadian SaaS market — concentrated in the Waterloo Region, Toronto, and Ottawa corridors — is increasingly sophisticated. Your buyers are technical, research-driven, and will read 8–10 pieces of content before requesting a demo. The companies winning in this environment own topical authority: they're the go-to resource for every question their ICP is asking, and that authority compounds in organic search for years.`,
  industryStats: [
    { value: "67%", label: "of the B2B buyer journey is self-directed", context: "meaning buyers are reading, researching, and comparing before they ever speak to your sales team" },
    { value: "8–12", label: "content pieces consumed before demo request", context: "the typical B2B SaaS buyer's research journey — topical authority wins this phase" },
    { value: "18 mo", label: "compound organic content timeline", context: "to build category-defining topical authority that consistently drives ICP-fit inbound" },
  ],
  services: [
    { title: "Content Marketing", body: "Topical authority clusters that rank for every high-intent B2B query in your category. Bottom-funnel content that converts researchers into demo requests.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Intent-layered search campaigns targeting demo and trial intent. Competitor keywords and category queries managed separately for budget efficiency.", href: "/google-ads-management", color: "#ea4335" },
    { title: "CRO", body: "SaaS-specific conversion optimisation: demo request flow, free trial sign-up, and onboarding funnel — all optimised for activation, not just sign-ups.", href: "/cro-service", color: "#22c55e" },
    { title: "Technical SEO", body: "JavaScript SEO for React/Next.js SaaS products, Core Web Vitals, structured data, and the technical infrastructure that scales with your content.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "Paid Social", body: "LinkedIn advertising for ABM plays targeting specific ICP companies, job titles, and company sizes. Meta retargeting for warm prospects.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Trial-to-paid nurture sequences, feature announcement campaigns, and re-engagement flows for churned trials — built for SaaS growth metrics.", href: "/email-marketing-service", color: "#1a56ff" },
  ],
  tactics: [
    { title: "Topical authority content architecture", body: "We map every question, comparison, and problem your ICP is researching and build a content cluster that answers them all. 'Best [category] software,' '[competitor] alternative,' 'how to [pain point],' and '[feature] guide' — we own every query cluster that leads your buyers to your door." },
    { title: "Demo intent Google Ads architecture", body: "We segment SaaS Google Ads campaigns by intent level: bottom-funnel (demo, pricing, trial intent), competitor (targeting branded queries of direct competitors), and category (targeting broad category terms). Each level has different bidding logic, landing page, and conversion objective." },
    { title: "JavaScript SEO for modern SaaS stacks", body: "Most SaaS products are built on React or Next.js frameworks that require specific technical SEO treatment to index correctly. We audit rendering pipelines, implement dynamic rendering where needed, and ensure your product pages and help content are fully indexable." },
    { title: "ICP-fit lead qualification architecture", body: "Volume is easy to generate. ICP-fit leads require negative keywords that exclude non-ICP company sizes and use cases, landing page copy written specifically for your target buyer persona, and form logic that qualifies leads before they reach your sales team." },
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
  faq: [
    { q: "What's the best digital marketing channel for B2B SaaS?", a: "Content marketing (SEO) for long-term ICP-fit lead generation, Google Ads for immediate demo intent capture, and LinkedIn for ABM targeting specific company profiles. The right mix depends on your GTM motion, deal size, and sales cycle length. We run all three in an integrated strategy with shared audience data and unified attribution." },
    { q: "How do you measure SaaS marketing ROI?", a: "We track the full funnel: organic traffic → MQL → SQL → demo → closed revenue. We set up pipeline attribution in your CRM to trace which content pieces, ad campaigns, and channels are producing the SQLs that convert. CAC by channel, LTV:CAC ratio, and payback period are our primary success metrics." },
    { q: "How long does content marketing take to produce SaaS leads?", a: "The first content pieces start ranking within 2–4 months. Significant organic traffic follows at 6–9 months. Full topical authority — where you rank across your entire topic cluster — takes 12–18 months. This is why we start with Google Ads for immediate lead flow and build content as the long-term compounding asset." },
    { q: "Do you work with PLG SaaS companies?", a: "Yes. PLG funnels require different optimisation logic than sales-led funnels — activation rate, time-to-value, and feature adoption are the metrics that matter. We build CRO programmes for trial sign-up flows, in-app onboarding sequences, and the content that supports product-led growth. We've worked with PLG companies from seed stage through Series B." },
    { q: "What's your approach to SaaS competitor keyword targeting?", a: "Competitor keywords — '[Competitor] alternative,' '[Competitor] vs [Your Product],' '[Competitor] pricing' — are among the highest-converting terms in SaaS paid search. We build dedicated comparison landing pages and Google Ads campaigns for your top 5–10 competitors, targeting buyers who are actively evaluating alternatives." },
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
  longIntro: `Fitness and wellness businesses in the GTA face a marketing challenge that most industries don't: their customers live, work, or commute within a 3–5km radius of the studio or gym. This hyperlocal catchment area makes neighbourhood-specific digital marketing non-negotiable — a broad city-level campaign wastes the majority of its budget on people who will never drive across Toronto for a yoga class.

The most successful fitness businesses we work with have solved three distinct problems: acquiring new trial members consistently (not just in January), converting those trials into paying members at an above-average rate, and retaining paying members long enough to achieve positive CAC payback. Each of these requires a different marketing approach — and the businesses that treat all three as a unified system consistently outperform those running disconnected acquisition campaigns.

For map pack visibility — which is the primary driver of new trial enquiries for local fitness businesses — review velocity is the single most important ranking factor. A studio that consistently generates 10–15 new Google reviews per month will outrank a studio with more total reviews if the recent velocity is higher. We build the post-class review request infrastructure that makes this happen automatically.`,
  industryStats: [
    { value: "3km", label: "average member catchment radius", context: "for fitness studios — hyperlocal targeting and neighbourhood landing pages are essential" },
    { value: "60%", label: "of trials convert to memberships", context: "with a proper post-trial nurture sequence — without one, the average conversion is under 30%" },
    { value: "January", label: "to December advantage", context: "businesses that build review velocity and content year-round dominate the January peak without fighting for position" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for gym, studio, and clinic queries in your neighbourhood. The #1 driver of new trial sign-ups for local fitness businesses.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook trial membership campaigns targeting the demographic and interest profile of your ideal member within your studio's catchment radius.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for 'gym near me', 'yoga studio [neighbourhood]', and 'physiotherapy [city]' queries with landing pages matched to each service.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Trial-to-member nurture sequences, class promotion campaigns, and win-back emails for churned members — lifecycle email for fitness retention.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "Review Generation", body: "Post-class and post-session automated review requests. Consistent review velocity is the #1 factor in local fitness studio map pack rankings.", href: "/review-generation", color: "#7c3aed" },
    { title: "GBP Optimisation", body: "Active GBP management for your studio — class schedule updates, event posts, seasonal promotions, and photo strategy that converts profile views into trial sign-ups.", href: "/gbp-optimisation", color: "#0891b2" },
  ],
  tactics: [
    { title: "Postal-code-targeted trial acquisition", body: "We run Instagram and Facebook trial campaigns targeting your ideal member demographic within a 2–4km radius of your studio location. Every dollar goes to people who could realistically become a member — not wasted on impressions across an entire city." },
    { title: "Post-trial conversion sequence", body: "The most underinvested area in fitness marketing is the trial-to-member conversion sequence. We build a 10-email nurture flow that starts at trial day 1, personalises content to their goals, delivers social proof, and presents a compelling membership offer at the optimal conversion moment." },
    { title: "January launch preparation", body: "Every fitness business competes at maximum intensity in January. The businesses that win are those that built their GBP authority, review count, and paid campaign infrastructure in October and November. We launch campaigns early so you enter January at full maturity — not still ramping up." },
    { title: "Review velocity as the map pack moat", body: "For local fitness businesses, consistent review velocity (not total review count) is the primary map pack ranking signal. We implement automated post-class review request SMS sequences that generate 10–20 new Google reviews per month for most studio clients." },
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
  faq: [
    { q: "What's the most cost-effective marketing channel for fitness studios?", a: "For new member acquisition, Instagram and Facebook targeted campaigns within a 3km radius consistently deliver the lowest CPL for fitness studios. For sustainable long-term visibility, local SEO map pack rankings produce free, compounding traffic. Most studios run both: paid social for consistent trial volume and local SEO as the long-term foundation." },
    { q: "How do you improve trial-to-member conversion?", a: "Trial conversion is a nurture problem. We build 10–12 step email sequences that begin at trial day 1 and personalise content to the member's goals, deliver social proof from existing members, address common objections, and present a membership offer at the optimal moment — typically day 7–12 of the trial. Average trial-to-member conversion improves from 25–35% to 55–70% with a proper sequence." },
    { q: "How do you handle fitness marketing in January?", a: "January is won in October. We start building Google Ads and paid social campaign assets in October, increase GBP posting frequency and review velocity through November, and launch at full scale the first week of January. Studios we work with consistently see 3–5× their non-January trial volume during January." },
    { q: "Can you work with physiotherapy and healthcare clinics?", a: "Yes — physiotherapy, chiropractic, massage therapy, and registered health clinics operate within a regulated advertising framework similar to dental and medical. We apply the appropriate provincial regulatory guidelines to all content and advertising." },
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
  longIntro: `Restaurant marketing in Toronto and the GTA is driven by three factors: Google Maps visibility, photo quality, and review reputation. A restaurant that appears in the top 3 Google Maps results for "Italian restaurant Midtown Toronto" or "brunch near me King West" receives the lion's share of reservations from that search. A restaurant that doesn't appear in those results — regardless of food quality or word of mouth — is effectively invisible to the majority of new customers discovering restaurants online.

The challenge for independent restaurants competing in dense urban neighbourhoods is the review sensitivity problem. A drop from 4.8 to 4.2 stars can reduce click-through from Google Maps by 25–30% — translating directly to fewer covers on a Tuesday night. Most restaurants have no systematic approach to review generation and respond to negative reviews reactively rather than proactively. Building a review velocity system — automated post-dining requests, rapid response protocols, and a proactive reputation management strategy — is one of the highest-ROI investments a restaurant can make.

Beyond search visibility, paid social has become the most efficient channel for filling specific weeknight slots and driving reservation volume for special events, seasonal menus, and prix fixe nights. The ability to target food-interested audiences within a 3km radius of a Toronto restaurant and drive them to a direct reservation CTA produces a measurable, trackable return that word-of-mouth and traditional advertising cannot.`,
  industryStats: [
    { value: "77%", label: "of restaurant decisions start on Google", context: "where map pack position and review rating determine which restaurants get clicked" },
    { value: "30%", label: "drop in clicks for 4.2 vs. 4.8 stars", context: "a single bad review week can cost a restaurant dozens of covers per month" },
    { value: "18%", label: "of revenue from organic search for GTA restaurants", context: "that invest in local SEO — making it one of the highest-ROI channels in hospitality" },
  ],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for cuisine-type and neighbourhood queries. Google ranks restaurants heavily on review count, velocity, and GBP completeness.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook reservation campaigns targeting food-interested audiences in your neighbourhood. Special event and tasting menu promotion campaigns.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "GBP Management", body: "Active Google Business Profile management — menu updates, holiday hours, reservation link, and event posts that drive direct bookings from your profile.", href: "/gbp-optimisation", color: "#ea4335" },
    { title: "Review Reputation", body: "Review generation system for post-dining SMS requests. Response management for every review — including the difficult ones — in your restaurant's voice.", href: "/review-generation", color: "#22c55e" },
    { title: "Social Media Content", body: "Instagram and TikTok content strategy for restaurant brands — food photography guidance, behind-the-scenes content, and chef-driven brand storytelling.", href: "/social-media-service", color: "#7c3aed" },
    { title: "Email Marketing", body: "Reservation confirmation sequences, loyalty program emails, and seasonal menu campaign broadcasts to your existing customer base.", href: "/email-marketing-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Review velocity as the reservation engine", body: "We implement post-dining SMS review request flows that go out 2–4 hours after a meal — when the experience is fresh and diners are most likely to leave a review. Consistent monthly review generation keeps your rating high and your GBP ranking elevated." },
    { title: "Cuisine × neighbourhood SEO architecture", body: "We build landing pages targeting every relevant cuisine type and neighbourhood combination: 'best sushi Queen West,' 'brunch restaurants Leslieville,' 'vegan restaurant Liberty Village.' Each page targets a distinct query with locally-relevant content." },
    { title: "Weeknight reservation campaigns", body: "Paid social is the most efficient tool for filling specific slow nights. We build Instagram campaigns targeting food-interested GTA audiences within 3km of your restaurant, running on Tuesdays and Wednesdays with a direct Resy or OpenTable reservation link." },
    { title: "Visual-first GBP management", body: "Restaurant decisions are made visually. We manage a GBP photo strategy that ensures your 20+ most recent photos show your best dishes, a full dining room, and your team — the visual signals that convert profile views into reservation clicks." },
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
  faq: [
    { q: "How do you improve a restaurant's Google Maps ranking?", a: "Google Maps rankings for restaurants depend on three primary factors: relevance (your GBP categories and menu content matching the search query), proximity (distance from the searcher), and prominence (review count, velocity, rating, and overall GBP completeness). We optimise all three — with particular focus on review velocity and GBP content completeness, which are the most controllable." },
    { q: "Can you help respond to negative reviews?", a: "Yes. Review response management is part of our restaurant reputation service. We draft responses to all reviews — positive and negative — in your restaurant's voice and tone, using conflict-de-escalation language for negative reviews and personalised responses for positive ones. We do not respond to fake or malicious reviews — we report those to Google directly." },
    { q: "What social media platforms matter most for GTA restaurants?", a: "Instagram is the most important platform for restaurant discovery in Toronto — food content, atmosphere photography, and behind-the-scenes Stories reach food-interested audiences who are actively looking for new dining experiences. TikTok is emerging as a discovery channel for younger demographics. Google Business Profile is the most important non-social platform. We prioritise based on your restaurant's target demographic." },
    { q: "How do you fill slow weeknight covers?", a: "The most effective approach is two-pronged: proactive weeknight-specific Instagram and Facebook campaigns with a direct reservation CTA (run Tuesday through Thursday, targeting a 3km radius), combined with an email calendar that promotes specific nights, prix fixe menus, or live music events to your existing customer database 7–10 days in advance." },
    { q: "Do you work with restaurant groups and chains?", a: "Yes. Restaurant groups with 2–15 locations require a coordinated strategy across all locations — consistent GBP management, unified review protocols, and location-specific paid social campaigns. We manage restaurant group marketing at scale, with centralised reporting and location-level performance visibility." },
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
  longIntro: `B2B digital marketing is fundamentally about trust and timing. B2B buyers don't impulse-purchase. They research extensively, involve multiple stakeholders, compare vendors over weeks or months, and ultimately make decisions based on perceived expertise, reliability, and fit. The B2B company that shows up authoritatively at every stage of this research process — with the right content, in the right search positions, targeting the right decision-makers — consistently wins the shortlist and closes at higher rates.

The most common mistake B2B companies make in digital marketing is optimising for lead volume rather than pipeline quality. A form submission from an ICP-fit procurement manager at a target account is worth ten times more than a form submission from a small business that can't afford your solution. This distinction requires careful keyword architecture, audience exclusions in paid campaigns, and landing page copy written specifically for your target buyer profile — not generic messaging designed to appeal to everyone.

Our B2B marketing programmes are built around a three-pillar system: content authority (SEO-driven content that positions you as the category expert), demand capture (Google Ads and LinkedIn targeting buyers at evaluation stage), and pipeline nurture (email automation that keeps your brand relevant through long sales cycles). This integrated approach produces the kind of consistent, qualified pipeline that supports predictable revenue growth.`,
  industryStats: [
    { value: "67%", label: "of B2B purchases start with organic search", context: "before a buyer ever contacts a vendor — content authority determines who gets evaluated" },
    { value: "6.8", label: "average stakeholders in a B2B decision", context: "requiring content that speaks to technical evaluators, budget owners, and executive sponsors" },
    { value: "9 mo", label: "average B2B sales cycle length", context: "the period during which nurture content and brand visibility keep you on the shortlist" },
  ],
  services: [
    { title: "Content Marketing", body: "Topical authority clusters built around the exact queries your B2B buyers use at every stage of the research and shortlisting process.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Intent-layered search campaigns targeting demo, quote, and RFQ intent. Competitor keywords managed separately for maximum budget efficiency.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure for B2B authority — author pages, credentials schema, and the technical foundation that makes Google trust your domain.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "LinkedIn Paid Social", body: "Account-based targeting by company size, job title, and industry. The highest-quality B2B channel for reaching decision-makers at your ICP.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "B2B conversion optimisation for demo request flows, gated content, and RFQ forms — built for quality leads, not just volume.", href: "/cro-service", color: "#22c55e" },
    { title: "Email Marketing", body: "Long-cycle nurture sequences that stay relevant through a 3–12 month B2B sales process — keeping your brand top-of-mind until they're ready to buy.", href: "/email-marketing-service", color: "#1a56ff" },
  ],
  tactics: [
    { title: "ICP-qualified keyword architecture", body: "B2B Google Ads accounts waste budget on non-ICP queries unless carefully structured. We build negative keyword lists that exclude small business, freelancer, and student searchers while targeting the company size, industry, and role signals that indicate a qualified buyer." },
    { title: "Multi-stakeholder content strategy", body: "B2B purchases involve 6–7 stakeholders with different concerns. We build content that addresses each one: technical guides for evaluators, ROI calculators for budget owners, security and compliance content for IT, and executive summaries for C-level approvers." },
    { title: "LinkedIn ABM targeting", body: "For B2B companies with defined ICP accounts, LinkedIn's company and role targeting is unmatched. We build ABM campaigns targeting specific companies, job titles, seniority levels, and industries — putting your content in front of the exact decision-makers at your target accounts." },
    { title: "Long-cycle email nurture architecture", body: "A 3–9 month B2B sales cycle requires a nurture sequence that stays relevant without becoming noise. We build 20–30 step nurture sequences calibrated to buyer journey stage, personalised by industry, and timed to deliver the right content at the right moment." },
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
  faq: [
    { q: "What digital marketing channels work best for B2B companies?", a: "The most effective B2B digital marketing combination is: content marketing and SEO (for long-term ICP-fit organic lead generation), Google Ads (for immediate demand capture from buyers at evaluation stage), and LinkedIn (for ABM targeting of specific accounts and roles). Email marketing nurtures leads through the sales cycle. The right channel mix depends on your deal size and sales cycle." },
    { q: "How do you generate qualified leads for B2B companies?", a: "Lead qualification starts at the keyword and audience level. We build negative keyword lists that exclude non-ICP searches, use LinkedIn company size and job title targeting to reach the right buyers, and write landing pages specifically for your target buyer persona. We also implement form-level qualification — asking key qualification questions to filter volume before it reaches your sales team." },
    { q: "How do you measure B2B marketing ROI with a long sales cycle?", a: "We set up pipeline attribution in your CRM that traces every closed deal back to its first digital touchpoint. This requires GA4 conversion tracking, CRM integration, and offline conversion imports into Google Ads. With full-funnel attribution, we can report on pipeline influenced, CAC by channel, and LTV:CAC ratio — the metrics that matter for B2B growth." },
    { q: "Do you do account-based marketing (ABM)?", a: "Yes. LinkedIn's company targeting, combined with IP-based website personalisation and intent data from Bombora or Clearbit, allows us to run genuine ABM programmes that target specific companies and buying committees. We've run ABM programmes for B2B companies with target account lists ranging from 50 to 5,000 companies." },
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
  longIntro: `B2C digital marketing is a performance game. Consumer brands live or die by their blended CPA and LTV:CAC ratio — the unit economics that determine whether growth is sustainable or burning cash. The B2C brands that scale profitably aren't the ones spending the most on advertising; they're the ones with the tightest integration between paid acquisition, organic growth, and customer retention.

In 2025, the cost of B2C customer acquisition has never been higher. Meta CPMs have risen 35%+ over three years. Google CPC inflation continues across most consumer categories. iOS privacy changes have degraded paid social attribution. Against this backdrop, the brands winning the CPA battle are those investing in three things simultaneously: improving creative performance (to reduce CPMs through better engagement), improving landing page conversion rates (to reduce CPA through better conversion), and building email and organic assets (to reduce blended CPA by driving revenue without incremental ad spend).

Our B2C marketing programmes are built around maximising the value of every customer interaction — not just the first acquisition. The brands that grow profitably are those where a customer acquired through paid ads becomes a loyal repeat buyer through email, organic social, and community — turning a high CAC into an excellent LTV.`,
  industryStats: [
    { value: "35%", label: "Meta CPM increase in 3 years", context: "making email, SEO, and conversion rate optimisation increasingly critical to B2C profitability" },
    { value: "4–6×", label: "customer LTV with email vs. without", context: "the difference an active lifecycle email programme makes to B2C unit economics" },
    { value: "70%", label: "of consumers research online before purchasing", context: "even in-store — making digital presence essential across all B2C categories" },
  ],
  services: [
    { title: "Paid Social", body: "Full-funnel Meta and TikTok campaigns from cold awareness through to conversion and retention. Creative testing systems that prevent fatigue.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search and shopping campaigns targeting high-intent B2C queries. Performance Max built around your highest-margin product categories.", href: "/google-ads-management", color: "#ea4335" },
    { title: "SEO & Content", body: "Organic traffic from product and category pages that compounds over time and reduces dependence on paid acquisition.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Email Marketing", body: "Welcome sequences, cart abandonment flows, and loyalty campaigns that increase LTV and reduce churn for subscription and repeat-purchase businesses.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Conversion rate optimisation for your highest-traffic landing pages — the fastest way to reduce CPA without touching ad spend.", href: "/cro-service", color: "#1a56ff" },
    { title: "Local SEO", body: "For B2C businesses with physical locations — map pack dominance in every catchment area you serve.", href: "/local-seo-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Creative testing as competitive advantage", body: "B2C paid social is a creative game. The brand with the best creative testing system consistently outperforms the brand with the bigger budget. We build systematic creative testing frameworks: weekly new concept launches, rapid performance identification, and a documented winning creative archive that informs future concepts." },
    { title: "Blended CPA optimisation across channels", body: "We report on blended CPA across all channels simultaneously — not just paid social ROAS in isolation. This shows the true cost of customer acquisition across paid + organic + email, and enables budget allocation decisions that actually improve profitability." },
    { title: "Retention as acquisition multiplier", body: "A B2C brand where 40% of revenue comes from repeat customers needs to spend far less on new customer acquisition than one where 90% comes from first purchases. We build email lifecycle sequences, loyalty programmes, and re-engagement campaigns that increase repeat purchase rate and LTV." },
    { title: "Seasonal campaign architecture", body: "B2C brands have significant seasonal variation. We build campaign infrastructure 6–8 weeks before peak seasons — Q4, Valentine's Day, Mother's Day, back-to-school — so campaigns are fully optimised when demand peaks rather than still ramping up." },
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
  faq: [
    { q: "How do you reduce B2C customer acquisition cost?", a: "Reducing CPA requires improving at both ends: reducing cost-per-click through better creative engagement and more precise targeting, and improving conversion rate through landing page optimisation and offer testing. We work on both simultaneously — and we report on blended CPA across all channels so you can see the full impact." },
    { q: "What B2C industries do you specialise in?", a: "We have deep experience in eCommerce, consumer subscription brands, local service businesses, fashion and apparel, food and beverage, health and wellness, entertainment, and home goods. The common thread is consumer-focused performance marketing — paid acquisition, email retention, and organic growth." },
    { q: "How do you handle B2C seasonal campaigns?", a: "We build seasonal campaign assets and audience structure 6–8 weeks before peak periods. This gives campaigns time to exit the learning phase and optimise before peak demand arrives. We also build retargeting audiences in advance so warm audience pools are populated and ready to convert during the peak window." },
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
  longIntro: `Direct-to-consumer brands have a structural advantage over retail-distributed competitors: full margin, owned customer relationships, and first-party data that compounds in value with every purchase. The DTC brands that leverage this advantage effectively — through tight email lifecycle sequences, subscription retention programmes, and owned organic channels — achieve CAC payback and LTV multiples that retail brands simply can't match.

The DTC marketing challenge in 2025 is the rising cost of paid acquisition. Meta CPMs have increased 35%+ over three years. iOS attribution degradation has made it harder to optimise Meta campaigns without first-party signals. And the most successful DTC brands from 2018–2022 have shifted the competitive landscape — it now takes significantly more creative sophistication and channel diversification to achieve the ROAS that was achievable with a single Meta campaign in 2020.

The response is a diversification imperative: SMS and email as owned channels, Google Shopping for intent-ready buyers, TikTok for discovery-stage reach, and SEO for compounding organic traffic that reduces long-term paid dependency. We build DTC growth programmes that balance short-term revenue performance with long-term channel diversification.`,
  industryStats: [
    { value: "2.8×", label: "higher LTV from email-subscribed customers", context: "vs. customers who purchase without joining your email list — retention is the DTC advantage" },
    { value: "90%", label: "of churned subscription customers give no warning", context: "making proactive retention sequences in the first 30–90 days critical to subscription LTV" },
    { value: "35%", label: "Meta CPM increase since iOS14", context: "the rising cost of DTC acquisition that makes email and SEO diversification essential" },
  ],
  services: [
    { title: "Paid Social (Meta & TikTok)", body: "Full-funnel DTC campaigns: cold creative at the top, dynamic product ads for warm audiences, and win-back for lapsed customers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Lifecycle Email", body: "Welcome series, abandoned cart, post-purchase upsell, subscription renewal, and win-back — the full DTC email stack.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Product page, cart, and checkout optimisation. A 10% checkout improvement outperforms doubling your ad spend.", href: "/cro-service", color: "#1a56ff" },
    { title: "Google Shopping", body: "Product feed optimisation, Performance Max, and branded search — the Google stack that captures intent-ready DTC buyers.", href: "/google-ads-management", color: "#ea4335" },
    { title: "SEO", body: "Category and product page SEO for the organic traffic that reduces long-term dependence on paid acquisition.", href: "/technical-seo-service", color: "#7c3aed" },
    { title: "Ecommerce Development", body: "Shopify builds and CRO-focused theme optimisation for DTC brands scaling past seven figures.", href: "/ecommerce-development", color: "#0891b2" },
  ],
  tactics: [
    { title: "Subscription churn prevention", body: "DTC subscription brands lose most customers between day 30–90. We build proactive retention sequences that deliver value content, usage guides, community touchpoints, and personalised offers during the high-churn window — significantly improving 90-day retention rates." },
    { title: "Post-purchase LTV maximisation", body: "The most underinvested area in DTC marketing is the post-purchase sequence. We build 8–12 step post-purchase flows: order confirmation, product usage guidance, cross-sell at day 14, referral request at day 30, and repurchase reminder at the category-appropriate interval." },
    { title: "First-party data infrastructure", body: "iOS14 made first-party data the most valuable asset in DTC marketing. We implement Conversions API, SMS list building, and loyalty programme sign-up flows that build the first-party data infrastructure that makes Meta and Google campaigns increasingly accurate over time." },
    { title: "TikTok for DTC discovery", body: "TikTok's shopping and discovery capabilities have made it a viable DTC acquisition channel, particularly for brands targeting 18–35 demographics. We build TikTok campaigns structured around authentic organic-style content — not polished ads — that perform well with TikTok's discovery-oriented algorithm." },
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
  faq: [
    { q: "What Klaviyo flows should every DTC brand have?", a: "The non-negotiable Klaviyo flows for DTC brands are: welcome series (5–7 emails), browse abandonment, cart abandonment (3 emails), checkout abandonment, post-purchase (product education + cross-sell), win-back (90+ day inactive customers), and subscription renewal reminders. Together, these flows typically drive 25–35% of total email revenue." },
    { q: "How do you handle DTC attribution post-iOS14?", a: "We implement Meta's Conversions API (server-side tracking), build a GA4 data-driven attribution model, and use first-party customer data to triangulate channel contribution. This gives us a reliable picture of ROAS and CPA that doesn't rely entirely on Meta's increasingly unreliable pixel attribution." },
    { q: "What's a realistic ROAS for a DTC brand on Meta?", a: "ROAS expectations vary significantly by product category, AOV, and margin. A 2.5–4× purchase ROAS is typical for consumer goods with moderate margins. High-margin categories can target 5–8×. We set ROAS targets based on your actual margin structure and blended CPA target, not industry benchmarks." },
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
  longIntro: `The food and beverage industry lives and dies on visibility, visual appeal, and trust — and in the digital age, all three are determined by your presence on Google Maps, Instagram, and review platforms. Whether you're an independent restaurant in the Annex, a specialty food brand on Shopify, or a CPG manufacturer selling through grocery and DTC channels, digital marketing is now the primary lever for growth.

For food and beverage businesses with physical locations, Google Maps is the battleground. A bakery that ranks #1 in the Google Map pack for "sourdough bakery Toronto" receives a dramatically disproportionate share of walk-in traffic compared to competitors ranked 4–7. The factors that determine that ranking are predictable and optimisable: GBP completeness, review velocity, and local citation consistency — all of which we manage systematically.

For food and beverage brands selling product (packaged goods, specialty foods, beverages), the opportunity is different: it's about building brand visibility in search through content marketing, eCommerce SEO, and social commerce on Instagram and TikTok Shopping. The brands that build organic and social visibility reduce their dependence on retail shelf placement and distribution margins, capturing revenue at higher margins through direct channels.`,
  industryStats: [
    { value: "83%", label: "of food purchase decisions start online", context: "on Google Maps, Instagram, or review platforms — before the customer ever arrives" },
    { value: "4.5★", label: "minimum rating to attract new customers", context: "the threshold below which most GTA food businesses see significant drop-off in new customer acquisition" },
    { value: "2.1×", label: "higher revenue for F&B brands with active social", context: "vs. those relying on Google and word of mouth alone — visual platforms drive discovery" },
  ],
  services: [
    { title: "Local SEO & GBP", body: "Map pack dominance for cuisine and product queries in your target markets. Google rates food businesses heavily on photo quality and review velocity.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and TikTok campaigns that reach food-interested audiences. Visual-first creative strategy that converts scrollers into buyers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Review Reputation", body: "Post-purchase and post-visit review generation. In food & beverage, your Google and Yelp rating is your most visible marketing asset.", href: "/review-generation", color: "#22c55e" },
    { title: "Social Media Content", body: "Content strategy for food brands — photography direction, recipe content, behind-the-scenes storytelling, and influencer amplification frameworks.", href: "/social-media-service", color: "#ec4899" },
    { title: "Google Ads", body: "Search campaigns for food delivery, catering, and product queries. Local Service Ads for catering and event food service.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Loyalty email campaigns, seasonal menu broadcasts, and new product launch sequences that turn first-time buyers into regulars.", href: "/email-marketing-service", color: "#7c3aed" },
  ],
  tactics: [
    { title: "Photo-first GBP strategy", body: "Food businesses are chosen visually. We develop a GBP photo strategy that ensures your most recent 20+ photos show your hero products in the best possible light — the visual signal that converts Google Maps views into store visits and orders." },
    { title: "Review velocity as the competitive moat", body: "A food business with 200 reviews and a 4.8 star average will consistently outrank a competitor with 2,000 reviews and a 4.4 star average if the review recency and velocity is higher. We implement post-visit and post-purchase review request systems that generate 15–25 new reviews per month." },
    { title: "Instagram and TikTok food content", body: "Food is the most discoverable content category on Instagram and TikTok. We develop content strategies around hero product moments, process content, and behind-the-scenes storytelling that builds brand awareness among food-interested audiences in your target market." },
    { title: "Seasonal and trend-responsive campaigns", body: "Food and beverage has strong seasonal patterns and trend sensitivity — pumpkin spice in fall, holiday baking in December, BBQ in summer. We build campaign infrastructure that capitalises on these demand windows 4–6 weeks in advance." },
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
  faq: [
    { q: "What digital marketing channels matter most for food brands?", a: "For food businesses with physical locations, Google Maps and local SEO are the primary drivers of new customer discovery. For packaged food and beverage brands, Instagram and TikTok (for discovery and brand building) combined with Google Shopping (for intent-ready buyers) and email (for repeat purchase) form the core growth stack." },
    { q: "How do you help food brands compete on Instagram?", a: "Instagram success for food brands requires a consistent content strategy built around visual quality, posting frequency, and reach amplification. We develop a content calendar that balances product photography, process content (how it's made), UGC reposts, and story content. We also run paid amplification on top-performing organic content to extend reach to food-interested audiences." },
    { q: "How do you handle negative reviews for food businesses?", a: "Every food business receives negative reviews — the difference is how they're handled. We respond to all negative reviews within 24 hours using conflict-de-escalation language in the restaurant's voice, acknowledge the experience without admitting fault on unknown situations, and provide a direct contact for resolution. For fake or malicious reviews, we file formal Google Business Profile removal requests." },
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
  longIntro: `Education marketing has a research problem: prospective students and parents research extensively before making enrolment decisions, often over a 3–9 month period, and they use Google at every stage. A private school that ranks for "best private school Mississauga" or a college that owns "digital marketing certificate Ontario" captures prospects at the research stage — building familiarity and trust long before they're ready to apply.

The education institutions winning the enrolment battle in Ontario's competitive landscape have invested in two things: program-specific SEO that targets the exact credential, outcome, and career-path queries prospective students use; and a conversion-optimised lead capture and nurture system that turns research-stage interest into application submissions. Most educational institutions have neither — they have a generic website and a single "request info" form that captures leads but does nothing to convert them.

Our education marketing programmes are built around the full student acquisition journey: organic visibility for research-phase queries, Google Ads for high-intent enrollment intent, program-specific landing pages with clear outcome data and social proof, and multi-step nurture sequences that guide prospective students from initial interest to submitted application.`,
  industryStats: [
    { value: "73%", label: "of students research online before enrolling", context: "using Google, social media, and review platforms — visibility at the research stage determines shortlisting" },
    { value: "5 mo", label: "average education research phase", context: "the window during which content marketing and nurture sequences can influence enrolment decisions" },
    { value: "60%", label: "lower cost per enrolment with program-specific pages", context: "vs. generic institution landing pages — specific program content converts at dramatically higher rates" },
  ],
  services: [
    { title: "SEO & Content", body: "Program-specific content clusters that rank for the exact queries prospective students use when researching schools, courses, and credentials.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Search campaigns targeting enrolment and program-inquiry intent. Separate campaigns per program type to maximise relevance and quality score.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Landing Page Design", body: "Program-specific landing pages with clear curriculum overviews, outcome statistics, and enquiry forms — optimised for enrolment conversion.", href: "/landing-page-design", color: "#22c55e" },
    { title: "Paid Social", body: "Facebook and Instagram campaigns targeting prospective students by age, location, and interest profile. Retargeting for application page visitors.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Prospectus download nurture sequences, open day campaign emails, and enrolment deadline campaigns for active applicants.", href: "/email-marketing-service", color: "#1a56ff" },
    { title: "CRO", body: "Conversion optimisation for enquiry forms, open day registrations, and application pages — reducing the friction between interest and action.", href: "/cro-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Program-outcome keyword architecture", body: "The highest-converting education searches are outcome-focused: 'how to become a UX designer Ontario,' 'digital marketing certificate jobs,' 'project management certification cost Canada.' We build content that answers these outcome-specific queries and funnels readers toward program enquiry CTAs." },
    { title: "Open day and deadline campaign timing", body: "Education has hard conversion windows — open days, application deadlines, registration cutoffs. We build campaign cadences that ramp up paid spend 3–4 weeks before these windows, ensuring maximum visibility when prospective students are most likely to act." },
    { title: "Prospectus nurture sequence", body: "Prospectus downloads are the highest-intent non-application conversion available. We build 8–12 step nurture sequences triggered by prospectus downloads that walk prospective students through program outcomes, testimonials, career paths, and financial aid — ending with an application CTA." },
    { title: "Competitor brand bidding defence", body: "Education is heavily brand-contested in Google Ads. Competitor bidding on your institution name is standard. We build brand protection campaigns and conquesting campaigns targeting prospective students actively researching competitor institutions." },
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
  faq: [
    { q: "How do you generate enrolment inquiries for educational institutions?", a: "The most effective enrolment inquiry generation combines program-specific SEO (ranking for outcome and credential queries), Google Ads targeting program inquiry intent, and paid social targeting prospective students by age and interest. Each program gets its own landing page, ad group, and nurture sequence — generic institution-level campaigns significantly underperform program-specific ones." },
    { q: "How long does education SEO take?", a: "Program-specific content pages typically start ranking within 4–6 months for lower-competition credential queries. More competitive terms (MBA, nursing, business administration) take 8–14 months. We layer Google Ads with SEO — Ads for immediate inquiry volume, SEO as the compounding long-term asset." },
    { q: "Can you work with both private schools and post-secondary institutions?", a: "Yes. We work with private K-12 schools, independent colleges, continuing education providers, professional certification bodies, and tutoring businesses. Each has a distinct marketing environment and competitive landscape — we apply the relevant strategies for your specific market." },
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
  longIntro: `Transportation businesses in the GTA — from limo services and airport shuttles to freight brokers and courier companies — operate in a search market dominated by well-funded platforms and aggregators. Uber, Lyft, Freightos, and Uship have invested heavily in SEO and paid search, making it difficult for independent operators to compete on broad category terms. The path to visibility is specificity: route-specific pages, service-specific Google Ads, and a GBP strategy that wins the local map pack for high-value service queries.

For passenger transportation (corporate limo, airport transfers, wedding transportation), local SEO and Google Ads are the primary acquisition channels. Route-specific landing pages — "Pearson airport limo service Toronto," "corporate transportation Mississauga" — target the specific queries that high-value customers use and are significantly less competitive than generic category terms.

For freight and logistics operators, the opportunity is B2B-focused: content marketing that positions you as a specialist in specific freight types, routes, or industries, combined with Google Ads targeting procurement intent. LinkedIn is also highly effective for freight and logistics lead generation targeting logistics managers and supply chain directors at target companies.`,
  industryStats: [
    { value: "78%", label: "of transportation bookings start with Google", context: "making search visibility the primary acquisition lever for transportation businesses" },
    { value: "3.2×", label: "higher booking rate from route-specific pages", context: "vs. generic transportation homepage — specificity converts dramatically better" },
    { value: "14 wks", label: "average to top 3 map pack", context: "for GTA transportation businesses starting a local SEO programme from unranked positions" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for transportation service queries — 'limo service Toronto', 'freight broker GTA', 'same-day courier near me'. High-intent, high-conversion searches.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for route-specific and service-intent queries. Separate campaigns for B2B freight and B2C passenger services.", href: "/google-ads-management", color: "#ea4335" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management for transportation businesses — service area configuration, fleet photos, and review velocity.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Route-specific and service-specific landing pages targeting the highest-intent queries in your coverage area.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Review Generation", body: "Post-trip review generation for passenger transport. Review count and recency directly affect map pack position for transportation businesses.", href: "/review-generation", color: "#7c3aed" },
    { title: "Content Marketing", body: "B2B content for freight and logistics companies targeting supply chain managers and procurement teams researching transportation partners.", href: "/content-marketing-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Route-specific landing page architecture", body: "We build landing pages for every high-value route and service combination: 'Toronto to Pearson limo,' 'Mississauga corporate shuttle,' 'freight broker Ontario to U.S.' Each page targets a distinct query cluster and converts at dramatically higher rates than a generic homepage." },
    { title: "Aggregator-beating SEO strategy", body: "We target the long-tail route and service-specific queries that aggregator platforms don't optimise for. A well-structured independent operator can outrank Uber and Lyft for queries like 'corporate limo service Markham' or 'Pearson airport shuttle Mississauga.'" },
    { title: "B2B freight LinkedIn targeting", body: "For freight and logistics operators, LinkedIn's job title and company size targeting reaches logistics managers, supply chain directors, and operations managers at the companies that need your services. We build thought leadership content and direct response campaigns targeting this audience." },
    { title: "Post-trip review velocity", body: "Transportation reviews are the social proof that converts searchers into bookers. We implement post-trip review request SMS sequences for passenger services and post-delivery review requests for freight operators — building the review foundation that sustains map pack position." },
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
  faq: [
    { q: "How do transportation companies compete with Uber and freight platforms?", a: "By targeting the specific, high-value queries that platforms don't optimise for. 'Corporate limo service Toronto airport,' 'reliable freight broker GTA to U.S.,' 'wedding transportation Oakville' — these route-specific and service-specific queries have lower competition than generic category terms and convert at higher rates because they indicate specific purchase intent." },
    { q: "What's the most important digital channel for transportation businesses?", a: "For B2C passenger transport, Google Ads and Local SEO are the primary acquisition channels. For B2B freight and logistics, content marketing and LinkedIn are more effective for reaching procurement decision-makers. Most transportation businesses benefit from both approaches running simultaneously." },
    { q: "How do you generate reviews for transportation businesses?", a: "We implement post-trip SMS review request sequences for passenger services — sent 30–60 minutes after drop-off when the experience is fresh. For freight and logistics, post-delivery email requests with one-click Google review links. Consistent review generation (10–15 new reviews per month) sustains map pack position in competitive transportation markets." },
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
  longIntro: `Healthcare digital marketing in Ontario requires a level of regulatory awareness, compliance diligence, and E-E-A-T infrastructure that most digital agencies simply don't have. Google's Quality Rater Guidelines classify healthcare content as YMYL (Your Money Your Life) — holding it to the highest quality, accuracy, and expertise standards. A healthcare website that fails to demonstrate professional credentials, cite evidence appropriately, and maintain factual accuracy will not rank, regardless of technical SEO quality.

Beyond Google's content standards, healthcare advertising in Ontario is governed by strict guidelines from the College of Physicians and Surgeons of Ontario (CPSO), the College of Pharmacists, and other regulatory bodies — each with specific rules around advertising claims, before-and-after content, testimonials, and fee disclosure. Marketing for healthcare without understanding these rules creates compliance risk that can result in professional discipline.

Our healthcare marketing programmes are built on a foundation of regulatory compliance and E-E-A-T infrastructure. We know what Ontario's regulatory bodies permit and prohibit. We build the author credential pages, medical schema, review frameworks, and content systems that allow healthcare practices to grow their patient acquisition ethically, compliantly, and sustainably.`,
  industryStats: [
    { value: "85%", label: "of patients search online before booking", context: "a healthcare appointment — map pack visibility and website authority determine whether they call you" },
    { value: "E-E-A-T", label: "highest standard applies to healthcare content", context: "Google holds healthcare websites to the most rigorous quality standards of any category" },
    { value: "4.8★", label: "minimum rating to compete in GTA healthcare markets", context: "across most specialties — review management is non-negotiable for patient acquisition" },
  ],
  services: [
    { title: "Local SEO & GBP", body: "Map pack visibility for every clinic location and specialty. Healthcare SEO tuned for the specific query language patients use when searching for care.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for specialty-specific and condition-specific queries. Fully compliant with healthcare advertising policies across all platforms.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Post-appointment review generation within healthcare privacy and regulatory guidelines. Consistent review velocity is critical for map pack position.", href: "/review-generation", color: "#22c55e" },
    { title: "Content Marketing", body: "Patient education content that ranks for condition and treatment queries — building the trust and authority that converts searchers into appointment bookings.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Local Landing Pages", body: "Specialty and location-specific landing pages targeting the exact queries patients use when searching for care in your area.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure for healthcare — author credentials, medical schema, and the technical signals that help Google treat your content as trustworthy.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "E-E-A-T infrastructure for healthcare authority", body: "Google holds healthcare content to the highest quality standards. We build comprehensive E-E-A-T infrastructure: physician author pages with credentials, professional association citations, structured data identifying healthcare professionals, and content review and update protocols that keep information current and accurate." },
    { title: "Specialty × location page architecture", body: "We build dedicated landing pages for every specialty-location combination: 'cardiologist North York,' 'physiotherapy Etobicoke,' 'pediatrician Markham.' Each page targets distinct patient search queries with locally-relevant content and clear appointment booking CTAs." },
    { title: "Regulatory-compliant advertising", body: "Healthcare advertising in Ontario must comply with CPSO, CPSO, and relevant College guidelines. We apply these requirements to every campaign — compliant testimonial formats, required professional disclaimers, no prohibited treatment outcome claims, and proper fee transparency where required." },
    { title: "Multi-location GBP management at scale", body: "Healthcare groups with 3–20 locations require coordinated GBP management that maintains consistency while allowing location-specific optimisation. We manage GBP at scale with standardised protocols and location-level performance tracking." },
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
  faq: [
    { q: "What healthcare specialties do you work with?", a: "We work with primary care clinics, dental practices, physiotherapy and rehabilitation, mental health and psychology, medical aesthetics and MedSpas, chiropractic, naturopathy, specialist referral practices, and telehealth platforms. Each specialty has its own advertising regulatory framework and patient search behaviour — we apply the relevant strategy and compliance requirements for your specialty." },
    { q: "How do you handle healthcare content compliance?", a: "We build content against the applicable College and professional regulatory guidelines for your specialty. This means no prohibited outcome claims, compliant testimonial formats (where permitted), required professional disclaimers, accurate medical information reviewed against current clinical evidence, and proper disclosure of professional qualifications." },
    { q: "Can you do Google Ads for healthcare businesses?", a: "Yes, with appropriate compliance review. Google's advertising policies for healthcare vary by specialty and treatment type. We understand which healthcare categories require certification, which have restricted ad copy requirements, and which are fully unrestricted. We apply the correct compliance framework before any healthcare campaign goes live." },
    { q: "How do you generate reviews for healthcare practices within privacy guidelines?", a: "Healthcare review generation must respect patient privacy — you cannot reference a patient's specific condition, treatment, or visit in a review request. We implement compliant post-appointment review request systems that invite patients to share their experience with the practice generally, without referencing specific clinical details." },
  ],
  compliance: "Healthcare advertising in Ontario is regulated by the College of Physicians and Surgeons of Ontario (CPSO), the Royal College of Dental Surgeons of Ontario (RCDSO), and other relevant College bodies. We apply all applicable advertising guidelines to ensure compliant, ethical marketing for every healthcare client.",
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
  longIntro: `The travel industry's digital marketing challenge is a two-front war: winning customers before OTAs do, and retaining them for direct booking on future trips. Booking.com, Expedia, and Airbnb spend billions on Google Ads and SEO to intercept travellers at the research stage and route them through commission-charging platforms. Every booking through an OTA costs a hotel or tour operator 15–25% of revenue. Reducing that dependency is one of the highest-ROI marketing initiatives available in the travel industry.

The path to OTA independence is direct-to-traveller digital marketing: destination content that captures travellers at the inspiration and planning stages, Google Ads campaigns that protect your brand terms and target destination-intent searches, and a post-booking email programme that converts first-time guests into loyal direct bookers for future trips. Businesses that execute this strategy consistently see 30–50% shifts in their direct vs. OTA booking ratio within 12–18 months.

For Ontario-based travel businesses — boutique hotels, eco-lodges, tour operators, wine tours — the opportunity is even stronger. Travellers planning Ontario getaways are looking for authentic, specific experiences that OTA generic listings can't capture effectively. A well-optimised boutique hotel website with destination-specific content, strong local reviews, and compelling direct booking incentives will consistently outperform its OTA listings for the most valuable, high-intent searchers.`,
  industryStats: [
    { value: "22%", label: "average OTA commission rate", context: "the cost of every booking through Booking.com or Expedia — direct bookings capture this margin entirely" },
    { value: "83%", label: "of travellers research online before booking", context: "across multiple websites and platforms — visibility at the research stage determines who gets the booking" },
    { value: "3×", label: "higher repeat booking rate from direct channels", context: "vs. OTA-sourced guests — direct bookers have a direct relationship with the property, not the platform" },
  ],
  services: [
    { title: "SEO & Content", body: "Destination and experience content that captures travelers during the research and inspiration phases — converting them into direct bookings before OTAs do.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Search campaigns targeting booking-intent queries. Hotel and tour campaigns structured to compete with OTA ads on your own brand and destination terms.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Paid Social", body: "Instagram and Facebook campaigns targeting in-market travelers by destination interest, travel intent signals, and lookalike audiences of past bookers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Email Marketing", body: "Post-trip loyalty sequences, seasonal promotion campaigns, and early-bird offer broadcasts for past guests and prospect lists.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Booking funnel optimisation for travel websites — reducing drop-off between search, browse, and booking confirmation.", href: "/cro-service", color: "#1a56ff" },
    { title: "Local SEO", body: "Google Business Profile optimisation for hotels, lodges, and tour operators — map pack visibility for local and destination searches.", href: "/local-seo-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Brand protection against OTA bidding", body: "OTAs bid aggressively on hotel and tour operator brand names. We build brand protection Google Ads campaigns that ensure you appear above OTA ads when someone searches your property name directly — capturing the highest-intent traffic before OTAs intercept it." },
    { title: "Destination content strategy", body: "We build destination content that captures travellers at the inspiration stage: 'best boutique hotels Ontario,' 'wine tours Niagara,' 'eco lodges Muskoka.' This content ranks in organic search for months and years, delivering direct-booking traffic at zero marginal cost." },
    { title: "Post-stay loyalty sequence", body: "We build post-stay email sequences that thank guests, request a review, deliver value content (local guides, upcoming events), and present a direct-booking incentive for their next visit — converting OTA-sourced guests into direct bookers for future trips." },
    { title: "Seasonal demand amplification", body: "Travel has predictable seasonality. We build campaign infrastructure for peak seasons 8–10 weeks in advance, ensuring campaigns are fully optimised and audiences are built before peak demand arrives." },
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
  faq: [
    { q: "How do you reduce OTA dependency for hotels?", a: "Reducing OTA dependency requires a three-part strategy: brand protection Google Ads (ensuring you appear above OTA ads when someone searches your property name), direct booking incentives (best rate guarantee, free upgrade, early check-in), and a post-stay email programme that converts OTA-sourced guests into direct bookers for future visits. Most properties we work with see a 25–40% shift toward direct bookings within 12 months." },
    { q: "What content helps travel businesses rank in organic search?", a: "The highest-converting travel content targets research-phase queries: 'best hotels [destination],' 'things to do [area],' 'weekend getaways Ontario,' '[type] tours [region].' These content pieces capture travellers early in their planning journey and build familiarity with your property before they're ready to book. We build a content architecture around every high-value research query in your destination market." },
    { q: "How do you handle seasonal marketing for travel businesses?", a: "We build campaign infrastructure and content in advance of peak seasons — 8–10 weeks before peak arrival. This gives paid campaigns time to exit the learning phase and accumulate performance data before peak demand, and ensures organic content has time to rank before the season arrives." },
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
  longIntro: `Fashion marketing is a creative performance discipline — it requires the aesthetic sensibility of a brand agency and the data rigour of a performance marketing operation. The brands that scale sustainably in fashion are those that have built a systematic creative testing engine: continuously launching new concepts, rapidly identifying winners, scaling proven creative, and retiring fatigued content before it degrades account performance.

TikTok has fundamentally changed fashion discovery. Viral moments, creator partnerships, and organic-style ad creative have replaced the highly polished, studio-produced content that dominated Instagram advertising in 2018–2020. The fashion brands winning on TikTok today are those that have built fast-moving content operations — not those producing the most expensive creative. This requires a different production mindset and a different relationship with creators and influencers.

At the same time, Google Shopping and SEO remain critical for capturing intent-ready buyers who already know what they want. A well-structured Google Shopping feed targeting fashion-specific search intent — by category, style, colour, and occasion — captures high-value buyers that social-only strategies miss entirely. We build fashion marketing programmes that operate both the brand discovery layer (TikTok and Instagram) and the demand capture layer (Google Shopping and SEO) simultaneously.`,
  industryStats: [
    { value: "2–3 wks", label: "average creative fatigue cycle on Meta", context: "requiring continuous new concept launches to maintain fashion paid social performance" },
    { value: "42%", label: "of fashion purchases influenced by social media", context: "higher than any other retail category — social is the primary discovery channel for fashion" },
    { value: "28%", label: "average fashion eCommerce return rate", context: "making size guide UX, fit content, and clear product photography critical to profitability" },
  ],
  services: [
    { title: "Paid Social (Meta & TikTok)", body: "Fashion-specific creative strategy and campaign structure. Cold audience creative for brand discovery, dynamic product ads for intent, and loyalty campaigns for repeat buyers.", href: "/paid-social-service", color: "#ec4899" },
    { title: "Social Media Content", body: "Instagram and TikTok content strategy for fashion brands — lookbook content, styling guides, UGC frameworks, and trend-responsive content calendars.", href: "/social-media-service", color: "#f59e0b" },
    { title: "Google Shopping", body: "Product feed optimisation and Shopping campaigns targeting fashion-specific search intent — by category, colour, style, and occasion.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "New collection launches, seasonal sale campaigns, styling recommendation emails, and VIP loyalty sequences for high-LTV customers.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "CRO", body: "Product page and checkout optimisation for fashion ecommerce — size guide UX, social proof placement, and cross-sell logic.", href: "/cro-service", color: "#1a56ff" },
    { title: "SEO & Content", body: "Fashion editorial content and category page SEO that builds organic visibility for style-intent queries and reduces paid dependency.", href: "/content-marketing-service", color: "#7c3aed" },
  ],
  tactics: [
    { title: "Creative testing velocity", body: "Fashion paid social is a creative game. We build testing frameworks that launch 4–6 new creative concepts per week across Meta and TikTok, rapidly identify winners through statistical significance analysis, and retire fatigued creative before it degrades account performance." },
    { title: "TikTok-native creative strategy", body: "TikTok's algorithm rewards authenticity over production value. We develop TikTok content strategies built around organic-feeling formats: styling videos, outfit transitions, 'day in my closet,' trend participation. This content performs better than polished ads and builds genuine brand community." },
    { title: "Google Shopping feed optimisation", body: "Fashion Google Shopping performance is determined by product feed quality. We optimise every attribute: title structure (brand + category + colour + gender + size), high-quality product images, GTINs, and custom labels for margin and seasonality-based bidding." },
    { title: "Seasonal collection launch system", body: "We build campaign launch systems for new collection drops: pre-launch social content building anticipation, email VIP early access, launch-day paid amplification, and post-launch retargeting for high-intent viewers. Collection launches become revenue events rather than just content updates." },
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
  faq: [
    { q: "What's the best platform for fashion brand discovery?", a: "TikTok and Instagram are the primary fashion discovery platforms for 18–35 demographics. Google Shopping is critical for capturing intent-ready buyers who are actively searching for specific styles or categories. The most effective fashion marketing strategies operate both discovery platforms (TikTok, Instagram) and intent capture platforms (Google Shopping, SEO) simultaneously." },
    { q: "How do you reduce high return rates in fashion ecommerce?", a: "Return rates are primarily driven by size and fit uncertainty and product misrepresentation. We improve size guide UX (interactive size finders, model measurement references), add fit description content to product pages, display customer fit reviews prominently, and improve product photography to accurately represent colour, texture, and drape. These interventions typically reduce return rates by 20–35%." },
    { q: "How do you manage TikTok for fashion brands?", a: "TikTok success in fashion requires consistent content velocity (3–5 posts per week), authentic native-format content (not repurposed Instagram content), and trend participation within 24–48 hours of trend emergence. We develop content calendars that balance planned collection content with trend-responsive capacity, and we build creator/UGC programmes that scale content output without proportionally scaling production cost." },
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
  longIntro: `Entertainment marketing is defined by time pressure. Unlike most industries where a prospect can be nurtured over weeks or months, entertainment has hard deadlines: the show date, the on-sale window, the final seats. Marketing that isn't fully optimised and deployed at maximum velocity from announcement day forward is losing revenue it can never recover.

Toronto's entertainment market — one of the most active in North America — supports thousands of events annually across music, theatre, comedy, sports, and cultural festivals. The venues, promoters, and entertainers that consistently sell out are those that have built the infrastructure before they need it: email lists of past attendees, social audiences warmed up on artist content, Google Ads campaigns ready to launch at a moment's notice, and retargeting audiences populated with intent signals.

We build entertainment marketing systems that are always on, not reactive. Client venues and promoters that work with us consistently outperform at every stage of the ticket sale cycle because the audience is already warm, the campaigns are already built, and the infrastructure is already in place when the announcement drops.`,
  industryStats: [
    { value: "48h", label: "critical window after announcement", context: "the period when announcement excitement drives the highest ticket sale velocity — being ready from day one is essential" },
    { value: "35%", label: "of entertainment purchases happen within 48h of event", context: "last-minute buyers are a significant revenue segment that requires specific retargeting strategy" },
    { value: "4×", label: "more likely to attend if on email list", context: "vs. general audiences — past attendee lists are the most valuable asset in entertainment marketing" },
  ],
  services: [
    { title: "Paid Social", body: "Event and show promotion campaigns on Meta, TikTok, and Instagram. Audience building and ticket sale campaigns with RSVP and purchase conversion tracking.", href: "/paid-social-service", color: "#f97316" },
    { title: "Social Media Content", body: "Content strategy for entertainment brands — behind-the-scenes content, talent-driven storytelling, and countdown campaigns that build anticipation.", href: "/social-media-service", color: "#ec4899" },
    { title: "Google Ads", body: "Search campaigns for event and show queries — 'concerts in Toronto', '[artist] tickets', '[venue] events'. Structured for immediate ticket sale conversion.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Pre-show excitement campaigns, on-sale notifications, and post-show loyalty emails that turn one-time attendees into season ticket holders.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "SEO & Content", body: "Event preview content, artist profiles, and venue pages that capture organic search traffic from entertainment-intent queries.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "CRO", body: "Ticket purchase flow optimisation — reducing drop-off between interest and completed purchase during on-sale windows when velocity matters most.", href: "/cro-service", color: "#1a56ff" },
  ],
  tactics: [
    { title: "Pre-announcement audience building", body: "The highest-performing entertainment campaigns are those where the audience is already warm at announcement. We build Instagram and Facebook audiences continuously between events, warming them with behind-the-scenes content, artist stories, and venue culture — so when an announcement drops, there's a pre-built audience ready to buy." },
    { title: "Announcement day campaign deployment", body: "Announcement day is the highest-velocity ticket sale opportunity. We have campaigns built, creative approved, and audiences targeted before announcement — so paid amplification is live within hours of the announcement, not days." },
    { title: "Last-minute retargeting system", body: "35% of entertainment purchases happen within 48 hours of the event. We build retargeting audiences from website visitors, video viewers, and social engagers and deploy high-urgency campaigns in the final 72 hours before each event." },
    { title: "Post-show retention programme", body: "Turning a one-time attendee into a loyal, repeat customer is the highest-ROI entertainment marketing activity. We build post-show email sequences that capture feedback, offer early access to future events, and build the database of engaged fans that reduces acquisition cost for future shows." },
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
  faq: [
    { q: "How quickly can you launch an event marketing campaign?", a: "With pre-built creative templates and audience targeting frameworks, we can deploy a full event campaign — paid social, Google Ads, and email blast — within 24–48 hours of announcement. For clients we work with on an ongoing basis, campaigns are typically live within hours of the announcement because the infrastructure is already in place." },
    { q: "What's the most effective channel for selling event tickets?", a: "For most Toronto entertainment events, paid social (Instagram and Facebook) drives the highest volume at the lowest CPA for the general audience. Google Ads captures the highest-intent buyers searching specifically for the event or artist. Email to past attendees consistently delivers the highest conversion rate. We run all three simultaneously with audience segmentation that prevents overlap." },
    { q: "How do you build an audience for a new venue or event brand?", a: "New venue and event brand audience building combines organic social content (building followers through artist features, behind-the-scenes, neighbourhood culture), paid follower acquisition campaigns on Instagram, local SEO for venue-specific searches, and email capture incentives at events. We build audience assets continuously so each new event launches with a larger warm audience than the last." },
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
  longIntro: `Technology marketing in Canada's increasingly competitive digital landscape requires a combination of technical depth and marketing sophistication that most agencies can't provide simultaneously. Technology buyers are sophisticated, well-informed, and will evaluate 8–12 sources of information before making a purchasing decision. The technology companies that win consistently are those with the deepest content authority — the ones that are the go-to resource for every question their ICP is asking.

Canada's technology sector is concentrated in the Toronto-Waterloo corridor, Ottawa, and Vancouver — with hundreds of technology companies competing for visibility in the same categories and verticals. In this environment, the companies that invest earliest and most consistently in content marketing and technical SEO build compounding advantages that become increasingly difficult for competitors to overcome.

Unlike industries where local visibility is the primary marketing objective, technology marketing in most categories is national or global in scope — requiring a different approach to keyword architecture, content strategy, and paid media targeting. We build technology marketing programmes that generate visibility at the category level across Canada (and beyond where relevant), driving ICP-fit inbound from the exact buyers your sales team wants to close.`,
  industryStats: [
    { value: "67%", label: "of tech buyers self-educate before first contact", context: "the companies that own the content they read are already positioned as trusted advisors" },
    { value: "14 mo", label: "to build category-defining content authority", context: "the compound timeline for technology content marketing that generates consistent ICP-fit inbound" },
    { value: "8×", label: "content marketing ROI over 24 months", context: "vs. 1.2× in month 1 — technology content compounds in value as it accumulates rankings and links" },
  ],
  services: [
    { title: "Content Marketing", body: "Topical authority content that makes you the go-to resource in your technology category. Built to rank, built to convert.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Google Ads", body: "Demand capture campaigns targeting technology purchase and evaluation queries. Competitor conquesting and branded protection campaigns included.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Technical SEO", body: "JavaScript-aware SEO for modern tech stacks. Core Web Vitals, structured data, and the infrastructure that makes your product pages indexable and rankable.", href: "/technical-seo-service", color: "#0891b2" },
    { title: "Paid Social", body: "LinkedIn ABM targeting for enterprise technology sales. Meta retargeting for SMB technology products reaching decision-makers.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "CRO", body: "Demo, trial, and quote conversion optimisation. Technology buyers need more proof — we build the page experiences that give them the confidence to convert.", href: "/cro-service", color: "#22c55e" },
    { title: "AI Integration", body: "AI-powered SEO and content workflows that let technology brands publish at scale without sacrificing quality or E-E-A-T compliance.", href: "/ai-integration-service", color: "#1a56ff" },
  ],
  tactics: [
    { title: "Category authority content architecture", body: "We map every query your ICP searches at every stage of the research, evaluation, and purchase process — and we build content that answers them all. Topical completeness is what makes Google rank a site as the authority in its category, and it's what makes buyers trust a vendor before they ever speak to a salesperson." },
    { title: "JavaScript SEO for modern technology stacks", body: "Most technology products are built on React, Next.js, or Angular — frameworks that require specific technical SEO treatment to rank. We audit rendering pipelines, implement server-side rendering where needed, and ensure all product and feature content is fully indexable by Google." },
    { title: "Competitor conquesting at scale", body: "Technology buyers evaluate alternatives. We build comparison content (your product vs. competitors) and Google Ads campaigns targeting competitor brand keywords — capturing buyers who are actively evaluating and presenting a compelling reason to choose you." },
    { title: "LinkedIn ABM for enterprise technology", body: "Enterprise technology deals require multi-stakeholder engagement. LinkedIn's company targeting, job title filters, and seniority level targeting let us reach CTO, VP Engineering, Director of IT, and Procurement roles at specific target companies — running account-based campaigns at scale." },
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
  faq: [
    { q: "What content types work best for technology companies?", a: "The highest-performing technology content combines three types: comparison content ('X vs. Y' and 'best X for Y' pages that capture evaluation-stage buyers), educational guides (deep technical content that builds authority and captures research-stage readers), and case study and use-case content (industry or role-specific proof that converts informed researchers into leads)." },
    { q: "How do you handle technical SEO for JavaScript-heavy technology websites?", a: "Modern technology websites built on React, Next.js, Vue, or Angular require careful technical SEO treatment. We audit the rendering pipeline, implement server-side or static rendering for critical pages, configure crawl budgets appropriately, and ensure all important content is fully indexable without relying on client-side JavaScript execution." },
    { q: "Do you work with early-stage technology companies?", a: "Yes. Early-stage technology companies (seed to Series A) benefit from establishing content authority early — the compounding effect means a year-one investment in content and technical SEO pays back dramatically more than the same investment made in year three. We work with early-stage companies on focused content and SEO programmes calibrated to their available budget." },
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
  longIntro: `Small business digital marketing is about doing more with less. A 10-person business competing against a franchise network or national brand can't match the competition's ad spend — but it can absolutely outmanoeuvre them in local search, community trust, and the personalised brand presence that large operators struggle to replicate at scale. Google's local algorithm is deliberately designed to surface the most relevant and trustworthy local business for each search, not the one with the biggest budget.

The highest-ROI marketing channels for small businesses are overwhelmingly local: Google Business Profile optimisation and local SEO are consistently the channels that produce the most qualified leads at the lowest cost for service-based small businesses in the GTA. These channels are also the most durable — unlike paid advertising, local SEO results compound over time and continue generating leads without ongoing cost after the initial work is complete.

We've built local SEO and digital marketing programmes for hundreds of small businesses across the GTA. Our most important rule: we don't recommend channels or scopes we can't deliver results with at your budget. A $1,500/month local SEO programme for a home services business in Brampton will consistently outperform a $500/month "everything" package that delivers nothing measurable.`,
  industryStats: [
    { value: "97%", label: "of local searches include a business visit or call", context: "within 24 hours — small businesses with strong local SEO convert searchers directly into customers" },
    { value: "3×", label: "more calls from GBP top 3 vs. position 4–7", context: "the difference between being in the map pack and being off it for small business call volume" },
    { value: "18 mo", label: "compounding SEO advantage", context: "the point at which well-executed small business local SEO typically becomes self-sustaining without ongoing paid support" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for your specific service area. Local SEO is the highest-ROI channel for small businesses — once you're in the pack, leads compound.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management — the free tool most small businesses set up once and never touch again. We make it a lead generation machine.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Google Ads", body: "Tightly-scoped search campaigns that spend efficiently at small business budgets. No wasted impressions on queries that won't convert for your specific offer.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Review Generation", body: "Systematic post-service review requests that build your Google rating consistently over time. The #1 most impactful thing a small business can do for local visibility.", href: "/review-generation", color: "#f59e0b" },
    { title: "Website Design", body: "Small business websites built for conversion — not just aesthetics. Fast, mobile-first, and structured to turn local searchers into enquiries.", href: "/custom-web-design-service", color: "#7c3aed" },
    { title: "Content Marketing", body: "Service page content that ranks and converts. We write the pages that make Google understand what you do and where you do it.", href: "/content-marketing-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "GBP as the lead generation hub", body: "For most small businesses, Google Business Profile is the single most valuable free marketing asset available. We treat it as a managed lead generation tool — weekly posts, Q&A management, photo strategy, and review velocity — not a set-and-forget directory listing." },
    { title: "Budget-efficient Google Ads architecture", body: "Small business Google Ads only work at low budgets with extremely tight architecture: exact-match and phrase-match keywords only, comprehensive negative keyword lists, tightly-themed ad groups, and purpose-built landing pages for each service. Broad match and automated campaigns waste budgets that small businesses can't afford to lose." },
    { title: "Review velocity as franchise-beating strategy", body: "Small businesses competing against franchise networks often can't match their competitor's ad budget or domain authority. But a 4.9-star rating with 150 reviews and consistent monthly velocity will outrank a national franchise brand in the local map pack every time. Reviews are the equaliser." },
    { title: "Neighbourhood-specific content", body: "We write service + neighbourhood pages that specifically target the areas your small business serves: 'plumber Roncesvalles,' 'accountant Kensington Market,' 'personal trainer Liberty Village.' These pages establish geographic relevance without requiring broad domain authority." },
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
  faq: [
    { q: "What's the minimum budget for effective digital marketing for a small business?", a: "For local service businesses in the GTA, an effective local SEO and GBP management programme starts at $1,200–$1,800/month. Adding tightly-scoped Google Ads requires a minimum of $1,000–$1,500/month in ad spend plus management. We don't recommend budgets we can't deliver results with — and we'll tell you honestly if your budget isn't sufficient for the competitive market you're in." },
    { q: "How can a small business compete with large franchise brands in local search?", a: "Local search is the great equaliser for small businesses. A well-optimised GBP with strong review velocity, consistent citations, and neighbourhood-specific content will outrank a franchise brand with a poorly managed GBP every time. Google's local algorithm rewards relevance and trust signals — not just budget or brand size." },
    { q: "Do you work with solopreneurs and 1–3 person businesses?", a: "Yes. We've built effective local digital marketing programmes for businesses of all sizes — from solo practitioners to 20-person companies. The scope and budget adapt to the business, but the strategic principles are the same. We scope every engagement to what we can actually deliver results with at your investment level." },
    { q: "What's the fastest digital marketing channel for a small business?", a: "Google Ads produces results within 1–2 weeks for most small businesses — leads start coming in almost immediately once campaigns are live and converting. Local SEO takes longer (6–12 weeks for meaningful improvements) but produces more durable, lower-cost leads over time. We recommend starting with Google Ads for immediate lead flow and building local SEO as the compounding long-term foundation." },
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
  longIntro: `Construction marketing has a trust problem. No homeowner or project owner awards a $50,000–$2,000,000 construction contract based on a search result alone — they research extensively, check credentials, review past projects, and verify reviews before requesting a quote. Digital marketing for construction businesses has to do one thing above all else: build credibility. Fast.

The construction companies that win the most valuable projects from digital have figured out that the purchase decision happens long before the RFQ. A homeowner planning a renovation searches Google for information and inspiration months before they're ready to request quotes — and the contractors who appear authoritatively at that research stage are the ones who get the calls when the homeowner is ready to move. This is why content marketing and SEO produce exceptional results in construction: they capture prospects during the research phase and build the trust that converts them into qualified inquiries.

For commercial construction and specialty trade contractors seeking larger B2B contracts, the dynamic is different: it's about establishing category expertise, building relationships with project owners and general contractors, and appearing credible in the channels that commercial decision-makers use — LinkedIn, industry associations, and direct content marketing.`,
  industryStats: [
    { value: "86%", label: "of homeowners research contractors online", context: "before requesting a single quote — credibility-building content is the pre-qualification filter" },
    { value: "4 mo", label: "average homeowner research phase", context: "the period before requesting quotes — construction SEO and content captures prospects during this window" },
    { value: "$180k", label: "average lifetime value of a referred construction customer", context: "making trust-building digital marketing one of the highest-ROI long-term investments in construction" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack and organic rankings for construction and trade queries in your service area. The #1 channel for inbound project inquiries.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "Search campaigns for high-value construction and renovation intent. Separate campaigns for residential, commercial, and specialty services.", href: "/google-ads-management", color: "#ea4335" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management with project photo strategy, service area configuration, and review velocity that sustains map pack position.", href: "/gbp-optimisation", color: "#22c55e" },
    { title: "Content Marketing", body: "Project portfolio content, buyer guides, and authority articles that build the trust required before a prospect will request a quote on a $50k+ project.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Review Generation", body: "Post-project review requests that build your profile. Construction purchasing decisions are heavily influenced by review count and recency.", href: "/review-generation", color: "#f59e0b" },
    { title: "Local Landing Pages", body: "Service × location pages targeting every major project type and geography in your coverage area.", href: "/local-landing-pages", color: "#0891b2" },
  ],
  tactics: [
    { title: "Portfolio-driven content strategy", body: "Construction decisions are portfolio-driven — homeowners and commercial clients want to see your work before they contact you. We build project portfolio content with optimised photography, project descriptions, and before-and-after case studies that showcase quality and build trust." },
    { title: "Neighbourhood renovation content", body: "Homeowners search by neighbourhood when researching renovation and construction services: 'renovation contractor Leslieville,' 'home addition Forest Hill,' 'basement finishing Etobicoke.' We build location-specific pages targeting every neighbourhood in your service area." },
    { title: "Seasonal campaign timing", body: "Construction demand peaks in spring and summer. We build and launch Google Ads and local SEO infrastructure in February so you enter spring season at full campaign maturity — capturing the early-season inquiries that typically turn into the best summer projects." },
    { title: "Review generation at project completion", body: "Construction reviews are rare — most satisfied customers don't proactively leave them without a prompt. We implement post-project review request systems via SMS and email that generate 3–5 new Google reviews per completed project, building the social proof that wins competitive RFQ situations." },
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
  faq: [
    { q: "How do you generate qualified construction RFQs from digital marketing?", a: "The most effective construction lead generation combines local SEO (for homeowners searching renovation and construction services in your area), Google Ads (for high-intent project queries like 'home addition Toronto'), and project portfolio content (for the trust-building research phase). Together, these channels produce consistently qualified inquiries from homeowners and commercial clients with real project intent." },
    { q: "How do you help construction companies compete for commercial projects?", a: "Commercial construction lead generation requires a different approach than residential: LinkedIn content marketing targeting project owners and developers, a portfolio website that demonstrates commercial project experience and scale, Google Ads targeting commercial renovation and construction intent, and association membership and industry directory presence that signals credibility to institutional buyers." },
    { q: "How important are photos for construction marketing?", a: "Photography is the single most important content asset for construction marketing. Homeowners making $50,000–$500,000 decisions need to see proof of quality before they ever contact you. We help clients build a systematic project photography protocol and build those images into their GBP, website portfolio, and social content strategy." },
    { q: "How long does construction SEO take?", a: "Most construction businesses see meaningful local search improvements within 8–14 weeks. Map pack positions for residential construction queries typically follow at 4–6 months. Commercial and specialty construction terms take longer due to higher competition. We recommend running Google Ads concurrently with SEO to ensure qualified lead flow throughout the SEO build phase." },
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
  longIntro: `Law firm digital marketing in 2025 is a content authority competition. The firms ranking at the top of Google for high-value practice area keywords have invested years in building the E-E-A-T infrastructure — author credentials, practice area content depth, backlink profiles from legal directories and media — that Google requires to trust a legal website as authoritative. Firms that have not made this investment are invisiblen to the majority of prospective clients who search before calling.

The unit economics of legal digital marketing are extraordinary. A personal injury firm that wins one additional case from digital channels per month — at an average case value of $25,000–$100,000+ — produces a return on marketing investment that makes almost every other business vertical look modest. This is why legal is the most competitive digital marketing vertical in Ontario — and why the cost of Google Ads keywords like "personal injury lawyer Toronto" can exceed $60 per click.

Our law firm marketing programmes are built for the long game. We invest in the content authority, technical infrastructure, and link equity that produces durable first-page positions — positions that continue generating cases months and years after the initial work is done. This approach delivers better ROI than perpetual Google Ads dependency for most law firms investing for more than 18 months.`,
  industryStats: [
    { value: "$60+", label: "cost per click for top legal keywords in Toronto", context: "making organic SEO the highest-ROI long-term channel for Ontario law firms" },
    { value: "86%", label: "of legal clients research online first", context: "before contacting a firm — first-page organic presence determines who gets the inquiry" },
    { value: "24 mo", label: "to build durable legal SEO authority", context: "the realistic timeline for competitive practice area rankings in Toronto and GTA markets" },
  ],
  services: [
    { title: "Legal SEO", body: "Practice area × city landing pages for every query your prospective clients use. Legal SEO has a long compounding runway — authority built today dominates for years.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Google Ads", body: "High-intent search campaigns for practice area keywords. Tightly controlled ad groups prevent budget waste on non-convertible queries.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Content Marketing", body: "Legal content authority clusters that build trust, rank for informational queries, and funnel readers toward your consultation CTA.", href: "/content-marketing-service", color: "#7c3aed" },
    { title: "Reputation Management", body: "Review generation and management for law firms — building the social proof that converts initial contact into retained clients.", href: "/review-generation", color: "#22c55e" },
    { title: "Local Landing Pages", body: "Practice area and city-specific pages targeting the exact queries prospective clients use when they need legal help immediately.", href: "/local-landing-pages", color: "#f59e0b" },
    { title: "Technical SEO", body: "E-E-A-T infrastructure — author pages, credentials schema, and the technical foundation that makes Google trust a legal website.", href: "/technical-seo-service", color: "#0891b2" },
  ],
  tactics: [
    { title: "Practice area × geography landing page matrix", body: "We build a comprehensive landing page matrix: every practice area your firm handles × every city and region you serve. 'Personal injury lawyer Toronto,' 'family law firm Mississauga,' 'employment lawyer Vaughan' — each page targets a distinct query cluster with dedicated, researched content." },
    { title: "Legal authority link building", body: "Law firm SEO requires backlinks from authoritative, relevant sources: legal directories (Justia, Findlaw, Avvo), Canadian bar association listings, legal media citations, and government website references. We build the link profile that signals genuine legal authority to Google." },
    { title: "E-E-A-T credential infrastructure", body: "Every piece of legal content must be attributed to a named lawyer with verifiable credentials. We build author pages, credential schema markup, bar association citations, and professional biography content that satisfies Google's E-E-A-T requirements for legal websites." },
    { title: "LSO-compliant content and advertising", body: "Law Society of Ontario advertising guidelines govern every piece of content and every ad your firm publishes. We apply these guidelines to all marketing output — no prohibited outcome guarantees, compliant testimonial formats, proper result references, and required professional disclaimers." },
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
  faq: [
    { q: "What's the ROI of legal SEO vs. Google Ads?", a: "Google Ads produces immediate results — leads start within days of campaign launch — but at $30–$60+ per click for top legal keywords in Toronto, the cost per acquisition can be high. Legal SEO takes 12–24 months to build competitive organic rankings, but produces free, compounding traffic thereafter. Most law firms benefit from running both: Google Ads for immediate case flow while SEO builds the long-term organic foundation." },
    { q: "How do you comply with LSO advertising guidelines?", a: "We apply Law Society of Ontario advertising guidelines to every campaign and content piece. This means no prohibited outcome guarantees ('we'll win your case'), compliant past-result references (using specific disclosure language), proper fee transparency, adherent testimonial formats, and required professional identification on all advertising. Our team reviews all legal content against current LSO guidelines before publishing." },
    { q: "Can you generate leads for smaller practice areas (immigration, elder law, wills)?", a: "Yes. Smaller practice areas often have lower competition and more achievable first-page positions than high-volume categories like personal injury or family law. Immigration, estate planning, employment, and business law SEO can produce strong results with smaller content investments because fewer law firms are competing for these terms." },
    { q: "Do you work with personal injury law firms specifically?", a: "Personal injury is one of our most active legal marketing verticals. We understand the specific competitive dynamics, the funding model (contingency-based firms' CAC sensitivity), the compliance requirements around marketing settlement results, and the specific query clusters that produce high-value case inquiries. We've worked with PI firms across Toronto, Mississauga, Ottawa, and Hamilton." },
  ],
  compliance: "Law firm advertising in Ontario is governed by the Law Society of Ontario (LSO). All marketing content and advertising produced by Outlier for legal clients is reviewed against current LSO advertising guidelines before publication.",
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
  longIntro: `Sports and fitness marketing combines the best elements of local service marketing and consumer subscription marketing — and the most successful facilities we work with treat it exactly that way. Acquisition requires the local SEO and paid social infrastructure of a local service business (visibility when people search "gym near me" or "youth soccer Markham"). Retention requires the lifecycle email and app engagement of a consumer subscription brand (nurture sequences that convert trials, re-engagement campaigns that win back lapsed members).

The sports and fitness market in the GTA is seasonal by category but competitive year-round. January remains the single biggest acquisition window — but the facilities that consistently fill in January are those that have built their GBP authority, review count, and paid campaign infrastructure in October and November. Entering January as a new advertiser competing against well-funded franchise gyms is an extremely difficult and expensive position to be in.

Beyond January, the highest-performing sports and fitness businesses we work with have solved the trial-to-member conversion problem. Most facilities acquire trials at reasonable cost but convert fewer than 30% into paying members without a systematic follow-up sequence. Building the email and SMS nurture infrastructure that walks trial members through the decision — and presenting the right membership offer at the right moment — typically improves trial conversion from 25–30% to 55–70%.`,
  industryStats: [
    { value: "3 km", label: "average member catchment radius for fitness", context: "making neighbourhood-specific landing pages and postal-code targeting essential for member acquisition" },
    { value: "27%", label: "average trial-to-member conversion without nurture", context: "vs. 62% with a proper post-trial email sequence — the difference a nurture system makes" },
    { value: "3×", label: "more member inquiries in January vs. average month", context: "the peak acquisition window that facilities with pre-built infrastructure consistently capture" },
  ],
  services: [
    { title: "Local SEO", body: "Map pack dominance for gym, sports club, and fitness studio queries in your catchment area. The #1 driver of new trial sign-ups.", href: "/local-seo-service", color: "#1a56ff" },
    { title: "Paid Social", body: "Instagram and Facebook trial and registration campaigns targeting your ideal member demographic within your facility's catchment radius.", href: "/paid-social-service", color: "#f59e0b" },
    { title: "Google Ads", body: "Search campaigns for 'gym near me', 'sports club [city]', and training-specific queries with landing pages matched to each offering.", href: "/google-ads-management", color: "#ea4335" },
    { title: "Email Marketing", body: "Trial-to-member nurture sequences, seasonal promotion emails, and win-back campaigns for lapsed members.", href: "/email-marketing-service", color: "#22c55e" },
    { title: "Review Generation", body: "Post-session review requests that build your Google rating consistently. Review velocity is the #1 local ranking factor for fitness businesses.", href: "/review-generation", color: "#7c3aed" },
    { title: "GBP Optimisation", body: "Active Google Business Profile management — class schedule updates, event posts, photo strategy, and seasonal promotions.", href: "/gbp-optimisation", color: "#0891b2" },
  ],
  tactics: [
    { title: "Trial acquisition at postal-code level", body: "We run Instagram and Facebook trial campaigns targeting your ideal member demographic within a 2–4km radius of your facility. Every dollar is spent on people who could actually become a member — not wasted on impressions across an entire city." },
    { title: "Post-trial conversion system", body: "We build 10–12 step email sequences that begin on trial day 1, personalise to the member's stated goals, deliver social proof from existing members, address common objections, and present the membership offer at the optimal conversion moment — typically day 7–12 of the trial." },
    { title: "January campaign pre-launch", body: "We build Google Ads and paid social campaign assets in October, increase GBP posting frequency and review velocity through November, and launch at full scale the first week of January. Our sports and fitness clients consistently enter January at full campaign maturity — not still warming up." },
    { title: "League and programme registration campaigns", body: "Sports clubs and academies have registration windows for leagues, programmes, and camps. We build pre-registration campaign sequences using email, paid social, and SMS that generate waiting lists and maximise registration completion rates for every new programme intake." },
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
  faq: [
    { q: "What's the best way to acquire new members for a sports club or gym?", a: "The most cost-effective member acquisition combination for GTA fitness and sports facilities is: postal-code-targeted Instagram and Facebook trial campaigns (for consistent new trial volume), Google Ads targeting 'gym near me' and category-specific queries (for high-intent searchers), and local SEO map pack visibility (for sustainable, compounding organic acquisition). Together, these three channels provide acquisition from awareness through to high-intent search." },
    { q: "How do you improve trial-to-member conversion for fitness facilities?", a: "Trial-to-member conversion is a nurture problem. The most impactful changes are: a 10–12 step post-trial email sequence personalised to member goals, a follow-up call or check-in from a coach or trainer at day 5–7, a compelling membership offer presented at the right moment (not day 1), and a clear objection-handling sequence for common barriers (price, schedule fit, commitment concerns)." },
    { q: "Do you work with youth sports academies and club sports?", a: "Yes. Youth sports marketing has specific dynamics — parents are the decision-makers, not the players, and the peak registration windows (August for fall programmes, December for winter programmes) require campaign infrastructure built well in advance. We work with hockey academies, soccer clubs, swimming schools, tennis academies, and multi-sport facilities across the GTA." },
    { q: "How do you handle sports and fitness marketing for multiple locations?", a: "Multi-location fitness marketing requires a coordinated GBP strategy, location-specific landing pages and paid campaigns, and centralised reporting that provides both location-level and brand-level performance visibility. We've managed multi-location fitness marketing for chains ranging from 2 to 25 locations across Ontario." },
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
