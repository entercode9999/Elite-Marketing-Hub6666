import { Search, TrendingUp, Mail, Share2, BarChart2, Target, FileText, Zap, Globe } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">analytics.outlier.ca</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "+312%", l: "Organic traffic", c: "#22c55e" }, { v: "4.2x", l: "ROAS", c: "#1a56ff" }, { v: "-38%", l: "CPA", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="h-20 flex items-end gap-1 bg-white/3 rounded-lg p-2">
          {[30, 40, 35, 55, 45, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: i >= 9 ? "#1a56ff" : "rgba(26,86,255,0.2)" }} />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3">
          {["G", "Meta", "IG", "TikTok", "Email"].map((p) => (
            <span key={p} className="text-[9px] font-bold text-white/30 border border-white/10 px-2 py-0.5 rounded">{p}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-2">
      <div className="w-7 h-7 rounded-lg bg-[#4285f4] flex items-center justify-center">
        <span className="text-white font-black text-xs">G</span>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-900">Google Partner</p>
        <p className="text-[9px] text-gray-400">Certified</p>
      </div>
    </div>
    <div className="absolute -bottom-3 -left-3 bg-[#1877f2] rounded-xl p-2.5 shadow-xl">
      <div className="text-white font-black text-xs">Meta</div>
    </div>
  </div>
);

const digitalMarketingData: HubData = {
  slug: "digital-marketing",
  label: "LEAD GENERATION AGENCY",
  breadcrumb: "Digital Marketing",
  hero: {
    headline: "Toronto Lead Generation Agency for Local Service Businesses.",
    italic: "Specialized in SEO, paid ads, and local lead generation.",
    description:
      "Outlier is a Toronto-based lead generation agency. We build and run SEO, Google Ads, and paid social strategies for local service businesses that need more inbound calls, form submissions, and booked appointments — not vanity metrics.",
    cta: "Get a Free Strategy Call",
    ctaHref: "/contact",
    badges: ["Lead Generation Agency — Toronto", "Google Partner", "Meta Business Partner", "Clutch 5★"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "10+", label: "Years Operating" },
    { value: "60+", label: "Local Businesses Served" },
    { value: "+312%", label: "Avg. Traffic Growth" },
    { value: "4.9★", label: "Clutch Rating" },
  ],
  intro: {
    eyebrow: "Why a focused specialist outperforms generalist agencies",
    headline: "One focused team for local service business growth — with the attribution to prove what's working.",
    body: "Most local service businesses managing separate agencies — one for SEO, one for Google Ads, one for social — lose significant budget to coordination friction, misaligned attribution, and conflicting priorities. A focused agency for local service businesses eliminates this by running your channels with shared data, shared strategy, and a single point of accountability. The result is clearer reporting, faster optimisation, and more qualified leads.",
    secondBody: "As a Toronto lead generation agency, Outlier runs SEO, Google Ads, and paid social specifically for local service businesses — dental practices, law firms, home services, fitness studios, and trades. When your SEO keyword data informs your paid strategy, and your conversion learnings improve landing pages across every channel simultaneously, you get compounding returns — not siloed results from agencies that don't talk to each other.",
    bullets: [
      "SEO, Paid Ads, Social, Email — unified under one digital marketing strategy",
      "Senior strategist on your account (no junior hand-offs, ever)",
      "Full attribution: every dollar traced to its source across all channels",
      "Monthly reporting with revenue numbers, not vanity metrics",
      "No lock-in contracts — we earn your retention every single month",
    ],
  },
  proofSection: {
    eyebrow: "The focused specialist advantage",
    headline: "Siloed agencies produce siloed results. A focused specialist produces compounding lead generation.",
    body: "The average local service business working with three separate agencies — one for SEO, one for paid, one for social — loses significant budget to coordination friction, misaligned attribution, and conflicting priorities. No one agency owns the outcome. Every agency optimises for its own metrics. The client bears the cost of the gaps between them. The solution isn't better individual agencies — it's a single focused team with a unified strategy and one clear accountability structure.",
    secondBody: "We've taken over accounts from multi-agency arrangements and produced 40–60% improvement in overall performance within 90 days without increasing total spend — purely by aligning strategy across channels and eliminating the coordination tax. One focused team, one strategy, one accountability structure produces fundamentally better lead generation results. That's what Outlier delivers as a local service business lead generation agency in Toronto.",
    bullets: [
      "One senior strategist owns your entire account — no silo between your SEO lead, your paid lead, and your content lead.",
      "Insight flows across disciplines in real time: paid audience data informs SEO priorities, CRO learnings improve landing pages for every channel simultaneously.",
      "You receive one monthly report showing the full performance picture — not three separate reports with different attribution models that don't add up.",
      "Budget allocation is dynamic: we move spend toward what's working across channels, not what's easiest to defend in a monthly call.",
      "We're priced at a flat strategic fee — not a percentage of ad spend, not channel-by-channel retainers. Your bill doesn't inflate as you scale.",
      "Our attribution model traces every lead and sale to its source, so you always know the true cost per acquisition by channel, campaign, and audience.",
    ],
  },
  subServices: [
    {
      tab: "Search Engine Optimisation",
      headline: "Build the authority that compounds over years, not quarters.",
      description:
        "SEO is the highest-ROI long-term investment in digital marketing. We build the technical foundation, content architecture, and link equity that makes your site impossible to displace from top positions. No algorithm chasing. Built to last through every update.",
      bullets: [
        "Technical audit and on-page optimisation",
        "Topical authority content strategy",
        "Local SEO and GBP management",
        "Link building and digital PR",
      ],
      image: "/hero-abstract.png",
      href: "/seo-services",
    },
    {
      tab: "Pay-Per-Click",
      headline: "Revenue from every click — no percentage-of-spend fees.",
      description:
        "Flat-fee Google Ads management by senior strategists. We run Search, PMAX, Local Service Ads, Shopping, and Display — all under one account strategy. Every campaign decision is made to maximise revenue, not to inflate the budget that determines our fee.",
      bullets: [
        "Google Search, PMAX, Display, YouTube",
        "Local Service Ads (Google Guaranteed)",
        "Shopping and Dynamic Search campaigns",
        "Full attribution and ROAS reporting",
      ],
      image: "/case-study-saas.png",
      href: "/google-ads-management",
    },
    {
      tab: "Social Media Marketing",
      headline: "Build audiences that convert, not just follow.",
      description:
        "Social media marketing that goes beyond vanity metrics. Paid social campaigns on Meta, TikTok, and LinkedIn designed to generate leads and revenue, combined with organic content that builds real brand authority and reduces paid dependency over time.",
      bullets: [
        "Meta (Facebook + Instagram) Ads management",
        "TikTok Ads for growth-stage brands",
        "LinkedIn Ads for B2B pipeline",
        "Organic content strategy and posting",
      ],
      image: "/work-3.png",
      href: "/paid-social-service",
    },
    {
      tab: "Email Marketing",
      headline: "The highest-ROI channel in your stack.",
      description:
        "Email averages $42 ROI for every $1 spent. We build automated sequences, broadcast campaigns, and segmented lifecycle journeys that turn your list into a reliable revenue channel — not a spam folder. Deliverability management is included in every email retainer.",
      bullets: [
        "Welcome and onboarding sequences",
        "Abandoned cart and browse recovery",
        "Segmented broadcast campaigns",
        "Deliverability monitoring and optimisation",
      ],
      image: "/hero-abstract.png",
      href: "/email-marketing-service",
    },
    {
      tab: "Content Marketing",
      headline: "Content that ranks, converts, and compounds.",
      description:
        "Strategy-first content that builds topical authority in your niche. We build structured content clusters designed to dominate every high-value query in your market. Every piece has a keyword target, a conversion goal, and a place in the architecture before a word is written.",
      bullets: [
        "Topical authority content clusters",
        "Long-form SEO content writing",
        "Blog management and editorial calendar",
        "Content distribution and amplification",
      ],
      image: "/case-study-local.png",
      href: "/content-marketing-service",
    },
    {
      tab: "Analytics & Reporting",
      headline: "See exactly what's driving your growth.",
      description:
        "We set up proper attribution from day one so you always know exactly what's working. Full GA4 configuration, custom dashboards, and monthly analysis included. We report on the metrics that tie to revenue — not the vanity numbers that fill slide decks.",
      bullets: [
        "GA4 setup, audit, and configuration",
        "Custom Looker Studio dashboards",
        "Multi-channel attribution modelling",
        "Monthly performance analysis meetings",
      ],
      image: "/hero-abstract.png",
      href: "/analytics-service",
    },
  ],
  features: [
    { icon: <Search className="w-5 h-5 text-primary" />, title: "SEO", body: "Full-service search engine optimisation: on-page, off-page, local, and content strategy. We build organic visibility that compounds month over month." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Google Ads (Search, PMAX, LSA)", body: "Flat-fee management by senior strategists. No percentage of spend. No junior hand-offs. Revenue-first campaign architecture." },
    { icon: <Share2 className="w-5 h-5 text-primary" />, title: "Paid Social (Meta, TikTok, LinkedIn)", body: "Audience-first paid social campaigns designed for leads and sales — not likes, impressions, or awareness metrics." },
    { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email & Lifecycle Marketing", body: "Automated flows and broadcast campaigns that turn your list into a reliable revenue channel at the highest ROI in digital." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Content & Topical Authority", body: "Content clusters that build compounding rankings across every query in your niche. Architecture first, content second." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Attribution", body: "Full GA4 configuration, custom dashboards, and attribution modelling so you always know exactly what's working." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Conversion Rate Optimisation", body: "We don't just drive traffic — we improve what happens when it arrives. CRO is included in every full-service engagement." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Local & Multi-Location", body: "City-level targeting across Toronto, Mississauga, Ottawa, and beyond — with dedicated GBP management and citation building." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Full-Funnel Strategy", body: "Every channel connected under one strategy, one attribution model, and one reporting dashboard. No coordination tax." },
  ],
  techStack: [
    {
      platform: "Google Ads",
      stat: "Paid search",
      description: "Search, PMAX, Local Service Ads, Shopping, Display, and YouTube campaigns managed under a unified account strategy. We restructure inherited accounts before running any spend to eliminate wasted budget from day one.",
    },
    {
      platform: "Meta Business Suite",
      stat: "Paid social",
      description: "Facebook and Instagram ad management with pixel implementation, custom audience builds, and creative testing frameworks. We manage both prospecting and retargeting campaigns with dynamic product catalogue integration where relevant.",
    },
    {
      platform: "Ahrefs / SEMrush",
      stat: "SEO research",
      description: "Our core SEO toolkit for keyword research, competitor gap analysis, backlink auditing, and rank tracking. We use both platforms for different functions and build custom reporting on top of their data.",
    },
    {
      platform: "Klaviyo / HubSpot",
      stat: "Email & CRM",
      description: "Email automation and CRM management on the platforms your business already uses. Klaviyo for eCommerce and advanced segmentation; HubSpot for B2B lead nurturing and sales pipeline management.",
    },
    {
      platform: "Looker Studio",
      stat: "Reporting",
      description: "Every client gets a custom Looker Studio dashboard pulling from GA4, Google Ads, Meta Ads, Search Console, and their CRM. One view of the full business — updated in real time, accessible 24/7.",
    },
    {
      platform: "GA4 + GTM",
      stat: "Analytics",
      description: "Proper GA4 implementation with Google Tag Manager, custom event tracking, and conversion goal configuration. We audit and rebuild analytics setups on every new engagement to ensure the data we optimise against is accurate.",
    },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full-funnel digital marketing across SEO, Google Ads, and LinkedIn. Unified strategy eliminated channel overlap and produced a 315% increase in qualified lead volume in 12 months.",
      metrics: [{ value: "+315%", label: "Lead volume" }, { value: "-42%", label: "CPA" }],
    },
    {
      image: "/case-study-homeservices.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Multi-channel strategy: Local SEO, Google Ads, Meta Ads, and Email Marketing under one unified plan. Organic became the top lead channel within 12 months — 312% traffic growth with +18% conversion rate.",
      metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "+18%", label: "Conv. rate" }],
    },
    {
      image: "/industry-dental.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "Six-location dental group dominating map pack across 1,100+ city-service combinations. Local SEO, Google Ads, and AI chatbot working as a unified acquisition system.",
      metrics: [{ value: "+86%", label: "New patients" }, { value: "1,100+", label: "Pages ranked" }],
    },
  ],
  process: [
    {
      label: "Define",
      headline: "Define goals, KPIs, and the measurement framework before anything else.",
      description: "We start by understanding your business model, revenue targets, unit economics, and the customer journey from awareness to close. This shapes every channel decision and budget allocation we make. A strategy built without this context optimises for the wrong things.",
    },
    {
      label: "Analyse",
      headline: "Audit what you have. Find what's being left on the table.",
      description: "Full audit of your existing digital presence — technical SEO health, ad account structure and wasted spend, analytics configuration gaps, content opportunities, and competitor positioning across every channel. Most clients discover significant waste or opportunity in the first audit.",
    },
    {
      label: "Construct",
      headline: "Build the full-channel strategy before spending a dollar.",
      description: "We create a channel-by-channel strategy with budget allocation, projected returns, timeline, and KPI benchmarks. You sign off before we execute anything. No surprises in the first month — every action is anticipated and agreed in advance.",
    },
    {
      label: "Implement",
      headline: "Coordinated launch across all active channels.",
      description: "Campaigns launch in a sequenced order that maximises time-to-impact. Paid channels first for immediate data, SEO and content architecture next for compound return, email and lifecycle marketing layered in as the foundation stabilises. Clear ownership for every deliverable.",
    },
    {
      label: "Measure",
      headline: "Track everything. Attribute every lead and sale to its source.",
      description: "Full attribution from first touch to closed deal, powered by GA4, GTM, and custom Looker Studio dashboards. Monthly reports show the metrics that matter — not the ones that make us look good. You always know exactly what's working and what isn't.",
    },
    {
      label: "Review",
      headline: "Monthly strategy review and optimisation cycle.",
      description: "Every month we review performance against plan, update the strategy based on what we've learned, and deploy new tests. The monthly call is a working session — not a status update. You leave with a clear picture of what changed, what we're changing, and why.",
    },
  ],
  faqs: [
    {
      question: "What does a full-service digital marketing company actually do?",
      answer: "A full-service digital marketing company — also called an internet marketing agency or digital marketing agency — manages all of your brand's online marketing channels under one roof: SEO, Google Ads, paid social, email marketing, content, and analytics. Unlike hiring separate specialists for each channel, a full-service digital marketing company runs everything from a unified strategy with shared audience data, shared attribution, and a single point of accountability. For Toronto businesses, this means you get one team that knows your customer, your market, and your goals — not three agencies that don't talk to each other.",
    },
    {
      question: "How long until I see results?",
      answer: "Paid ads typically show measurable results within the first 30 days as campaigns are optimised. SEO builds over 3-6 months but compounds significantly after 12 months — organic traffic growth is rarely linear. Content and email typically show measurable impact in 60-90 days. We give you realistic projections for each channel during strategy sign-off, not promises made to close a deal.",
    },
    {
      question: "Do you work with a minimum ad budget?",
      answer: "We recommend a media budget that generates enough signal for meaningful optimisation — which varies by industry and competitive landscape. Our management fees are flat-rate — never a percentage of spend. We'll give you a specific recommendation after reviewing your goals and market, and we won't advise a budget we can't make work.",
    },
    {
      question: "Can I start with just one channel?",
      answer: "Yes. Most clients start with either Local SEO or Google Ads and expand as they see results and build trust in our work. We recommend the highest-impact starting point for your specific situation during our strategy call. Starting with one channel done well is better than starting with five channels done poorly.",
    },
    {
      question: "Do you lock clients into long contracts?",
      answer: "No. All engagements are month-to-month after the initial 3-month onboarding period. We need the first 90 days to build the strategy, launch campaigns, and gather enough data to optimise. After that, you can leave at any time with 30 days' notice. Our 94% retention rate is earned by results, not contracts.",
    },
    {
      question: "How do you report on performance?",
      answer: "Monthly reports with a custom Looker Studio dashboard showing traffic, leads, conversions, cost-per-lead, and ROAS by channel — updated in real time so you're never waiting for a report to see how things are going. Monthly strategy calls to review findings, answer questions, and align on next actions.",
    },
  ],
  hubInsights: [
    {
      image: "/studio.png",
      category: "Digital Strategy",
      readTime: "7 min read",
      title: "Why Multi-Agency Digital Marketing Costs You 30% of Your Budget",
      excerpt: "Hiring separate agencies for SEO, paid media, and content feels like a logical division of expertise. In practice, it creates attribution disputes, duplicated overhead, and strategies that contradict each other. We looked at 40 multi-agency setups we inherited and found consistent patterns in where the losses occur — and how to fix them.",
      author: "Marcus Chen",
      authorRole: "Strategy Director",
      href: "/blog/multi-agency-cost",
    },
    {
      image: "/work-3.png",
      category: "Google Ads",
      readTime: "5 min read",
      title: "The Google Ads Audit Checklist We Use on Every New Account",
      excerpt: "The average inherited Google Ads account wastes 22% of its budget on the day we take it over. The culprits are consistent: broad match keywords without negative lists, PMAX campaigns cannibalising branded search, and conversion tracking that's measuring the wrong events. Here's the full audit process we run in the first 48 hours.",
      author: "James Okafor",
      authorRole: "Paid Media Lead",
      href: "/blog/google-ads-audit-checklist",
    },
    {
      image: "/hero-abstract.png",
      category: "Attribution",
      readTime: "6 min read",
      title: "GA4 Attribution in 2026: How to Actually Know What's Driving Revenue",
      excerpt: "GA4's default attribution model tells a partial story. Most businesses are crediting the wrong channels, misallocating budget, and making strategy decisions based on incomplete data. We walk through the custom event setup, attribution model configuration, and Looker Studio dashboard structure we use to build full-funnel visibility for every client.",
      author: "Priya Anand",
      authorRole: "Analytics Lead",
      href: "/blog/ga4-attribution-2026",
    },
  ],
};

export default function DigitalMarketingHub() {
  return <ServiceHubPage data={digitalMarketingData} />;
}
