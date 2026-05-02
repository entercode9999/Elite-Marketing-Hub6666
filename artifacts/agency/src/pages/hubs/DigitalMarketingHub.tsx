import { Search, TrendingUp, Mail, Share2, BarChart2, Target, FileText, Zap, Globe } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    {/* iMac mockup */}
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">analytics.outlier.ca</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        {/* Mini dashboard */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "+312%", l: "Organic traffic", c: "#22c55e" }, { v: "4.2x", l: "ROAS", c: "#1a56ff" }, { v: "-38%", l: "CPA", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div className="h-20 flex items-end gap-1 bg-white/3 rounded-lg p-2">
          {[30, 40, 35, 55, 45, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: i >= 9 ? "#1a56ff" : "rgba(26,86,255,0.2)" }} />
          ))}
        </div>
        {/* Platform row */}
        <div className="flex items-center gap-2 mt-3">
          {["G", "Meta", "IG", "TikTok", "Email"].map((p) => (
            <span key={p} className="text-[9px] font-bold text-white/30 border border-white/10 px-2 py-0.5 rounded">{p}</span>
          ))}
        </div>
      </div>
    </div>
    {/* Platform badges floating */}
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
  label: "DIGITAL MARKETING AGENCY",
  breadcrumb: "Digital Marketing",
  hero: {
    headline: "Driving Growth Through Digital Strategy.",
    italic: "Every channel. One team.",
    description:
      "Outlier is your full-service digital marketing partner for ambitious brands in Toronto and across Canada. We craft data-driven strategies that build visibility, drive qualified traffic, and convert it into predictable, compounding revenue.",
    cta: "Get a Free Strategy Call",
    ctaHref: "/contact",
    badges: ["Google Partner", "Meta Business Partner", "Clutch 5★", "SEMrush Certified"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "200+", label: "Brands Grown" },
    { value: "+312%", label: "Avg. Traffic Growth" },
    { value: "50+", label: "Industries Served" },
  ],
  intro: {
    eyebrow: "Full-service performance marketing",
    headline: "One team to own every digital channel — and make them work together.",
    body: "Most brands suffer from disconnected agencies — one for SEO, one for ads, one for social, none talking to each other. We run every channel under one roof, with one strategy, and one clear attribution model so you always know exactly what's driving results.",
    bullets: [
      "SEO, Paid Ads, Social, Email — unified under one strategy",
      "Senior strategist on your account (no junior hand-offs)",
      "Full attribution: every dollar traced to its source",
      "Monthly reporting with real numbers, not vanity metrics",
      "No lock-in contracts — we earn retention every month",
    ],
  },
  subServices: [
    {
      tab: "Search Engine Optimisation",
      headline: "Build the authority that compounds over years.",
      description:
        "SEO is the highest-ROI long-term investment in digital marketing. We build the technical foundation, content architecture, and link equity that makes your site impossible to move out of the top positions. No algorithm chasing. Built to last.",
      bullets: [
        "Technical audit and on-page optimisation",
        "Topical authority content strategy",
        "Local SEO and GBP management",
        "Link building and digital PR",
      ],
      image: "/case-study-saas.png",
      href: "/seo-services",
    },
    {
      tab: "Pay-Per-Click",
      headline: "Revenue from every click — no percentage-of-spend fees.",
      description:
        "Flat-fee Google Ads management by senior strategists. We run Search, PMAX, Local Service Ads, Shopping, and Display — all under one account strategy. No junior account managers. No automatic budget inflation.",
      bullets: [
        "Google Search, PMAX, Display, YouTube",
        "Local Service Ads (Google Guaranteed)",
        "Shopping and Dynamic Search campaigns",
        "Full attribution and ROAS reporting",
      ],
      image: "/case-study-realestate.png",
      href: "/google-ads-management",
    },
    {
      tab: "Social Media Marketing",
      headline: "Build audiences that convert, not just follow.",
      description:
        "Social media marketing that goes beyond vanity metrics. Paid social campaigns on Meta, TikTok, and LinkedIn designed to generate leads and revenue, combined with organic content that builds real brand authority.",
      bullets: [
        "Meta (Facebook + Instagram) Ads management",
        "TikTok Ads for growth-stage brands",
        "LinkedIn Ads for B2B pipeline",
        "Organic content strategy and posting",
      ],
      image: "/case-study-home.png",
      href: "/paid-social-service",
    },
    {
      tab: "Email Marketing",
      headline: "The highest-ROI channel in your stack.",
      description:
        "Email averages $42 ROI for every $1 spent. We build automated sequences, broadcast campaigns, and segmented lifecycle journeys that turn your list into a reliable revenue channel — not a spam folder.",
      bullets: [
        "Welcome and onboarding sequences",
        "Abandoned cart and browse recovery",
        "Segmented broadcast campaigns",
        "Deliverability monitoring and optimisation",
      ],
      image: "/case-study-saas.png",
      href: "/email-marketing-service",
    },
    {
      tab: "Content Marketing",
      headline: "Content that ranks, converts, and compounds.",
      description:
        "Strategy-first content that builds topical authority in your niche. We build structured content clusters designed to dominate every high-value query in your market — not blog posts for the sake of it.",
      bullets: [
        "Topical authority content clusters",
        "Long-form SEO content writing",
        "Blog management and editorial calendar",
        "Content distribution and amplification",
      ],
      image: "/industry-local.png",
      href: "/content-marketing-service",
    },
    {
      tab: "Analytics & Reporting",
      headline: "See exactly what's driving your growth.",
      description:
        "We set up proper attribution from day one so you always know exactly what's working. No more guessing which channel is responsible for a lead. Full GA4 configuration, custom dashboards, and monthly analysis included.",
      bullets: [
        "GA4 setup, audit, and configuration",
        "Custom Looker Studio dashboards",
        "Multi-channel attribution modelling",
        "Monthly performance analysis meetings",
      ],
      image: "/case-study-saas.png",
      href: "/analytics-service",
    },
  ],
  features: [
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Technical & Local SEO", body: "From site architecture to local map pack domination. We fix the foundation before building traffic." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Google Ads (Search, PMAX, LSA)", body: "Flat-fee management by senior strategists. No percentage of spend. No junior hand-offs." },
    { icon: <Share2 className="w-5 h-5 text-primary" />, title: "Paid Social (Meta, TikTok, LinkedIn)", body: "Audience-first paid social campaigns designed for leads, not likes." },
    { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email & Lifecycle Marketing", body: "Automated flows and broadcast campaigns that turn your list into a reliable revenue channel." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Content & Topical Authority", body: "Content clusters that build compounding rankings across every query in your niche." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Attribution", body: "Full GA4 configuration, custom dashboards, and attribution modelling so you know exactly what's working." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Conversion Rate Optimisation", body: "We don't just drive traffic — we improve what happens when it arrives." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Local & Multi-Location", body: "City-level targeting across Toronto, Mississauga, Ottawa, and beyond — with dedicated GBP management." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Full-Funnel Strategy", body: "Every channel connected under one strategy, one attribution model, and one reporting dashboard." },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full-funnel digital marketing across SEO, Google Ads, and LinkedIn for a B2B financial platform.",
      metrics: [{ value: "+315%", label: "Lead volume" }, { value: "-42%", label: "CPA" }],
    },
    {
      image: "/case-study-home.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Multi-channel strategy: Local SEO, Google Ads, Meta Ads, and Email Marketing.",
      metrics: [{ value: "$2.4M", label: "Attributed revenue" }, { value: "+18%", label: "Conv. rate" }],
    },
    {
      image: "/industry-dental.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "Six-location dental group dominating map pack across 1,100+ city + service combinations.",
      metrics: [{ value: "+86%", label: "New patients" }, { value: "1,100+", label: "Pages ranked" }],
    },
  ],
  process: [
    { label: "Define", headline: "Define goals, KPIs, and the measurement framework.", description: "We start by deeply understanding your business model, revenue targets, and the customer journey. This shapes every channel decision and budget allocation we make." },
    { label: "Analyse", headline: "Audit what you have. Find what's being left on the table.", description: "Full audit of your existing digital presence — technical SEO, ad account structure, analytics configuration, content gaps, and competitor positioning." },
    { label: "Construct", headline: "Build the strategy before spending a dollar.", description: "We create a channel-by-channel strategy with budget allocation, timeline, and projected returns. You sign off before we execute anything." },
    { label: "Implement", headline: "Execute with precision across every channel.", description: "Coordinated launch across all channels with clear ownership, timelines, and weekly check-ins. Nothing launches without your approval." },
    { label: "Measure", headline: "Track everything. Attribute every lead and sale.", description: "Full attribution from first touch to closed deal. Monthly reports with the metrics that matter — not the ones that make us look good." },
    { label: "Review", headline: "Monthly strategy review and optimisation cycle.", description: "Every month we review performance, update the strategy, and deploy new tests. You always know exactly what we're doing and why." },
  ],
  faqs: [
    { question: "How long until I see results?", answer: "Paid ads typically show measurable results in the first 30 days. SEO builds over 3-6 months but compounds significantly after 12 months. We'll give you a realistic projection for your specific market during our strategy call." },
    { question: "Do you work with a minimum budget?", answer: "We require a minimum media budget of $3,000/month for paid channels to achieve meaningful results. Our management fees are flat-rate — never a percentage of spend." },
    { question: "Can I start with just one channel?", answer: "Yes. Most clients start with either Local SEO or Google Ads and expand once they see results. We'll recommend the highest-impact starting point for your specific situation." },
    { question: "Do you lock clients into contracts?", answer: "No. All our engagements are month-to-month after the initial 3-month onboarding period. We retain clients because of results, not contracts." },
    { question: "How do you report on performance?", answer: "Monthly reports with a clear dashboard showing traffic, leads, conversions, cost-per-lead, and ROAS by channel. We also do a monthly call to walk through findings and next actions." },
  ],
};

export default function DigitalMarketingHub() {
  return <ServiceHubPage data={digitalMarketingData} />;
}
