import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

/* ── TYPES ── */
export interface ServicePageData {
  breadcrumb: string[];
  label: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  stats: { value: string; label: string; sub?: string }[];
  deliverables: { title: string; body: string }[];
  process: { phase: string; title: string; body: string }[];
  whoFor: string[];
  caseStudy: {
    client?: string;
    headline: string;
    subheadline: string;
    body: string;
    metrics: { value: string; label: string }[];
  };
  differentiators: { title: string; body: string }[];
  pricing: { tier: string; range: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: { headline: string; sub: string };
}

/* ── FAQ ITEM ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted-foreground pb-5 leading-relaxed pr-8">{a}</p>}
    </div>
  );
}

const SIDEBAR_SECTIONS = [
  { id: "deliver", label: "What we deliver" },
  { id: "process", label: "Our process" },
  { id: "whofor", label: "Who this is for" },
  { id: "result", label: "A real result" },
  { id: "different", label: "Why ours is different" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "Frequently asked" },
];

/* ── MAIN COMPONENT ── */
export function ServicePage({ data }: { data: ServicePageData }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] text-[#1a1a1a]">
      <Nav />

      {/* ══ HERO ══ */}
      <section className="pt-28 pb-14 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-7 flex-wrap">
            {data.breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-300">›</span>}
                <span className={i === data.breadcrumb.length - 1 ? "text-gray-700 font-medium" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Headline */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-5">{data.label}</p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.03] mb-5 text-[#0e0e0e]">
                {data.headline}
                <br />
                <span className="italic text-primary">{data.headlineAccent}</span>
              </h1>
              <p className="text-base text-gray-500 mt-5 max-w-xl leading-relaxed">{data.subhead}</p>
            </div>

            {/* Stat card + CTA */}
            <div className="bg-white border border-[#e5e2d9] rounded-2xl p-5 shadow-sm">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-5 rounded-xl text-sm w-full mb-5 hover:bg-primary/90 transition-colors group"
              >
                Get a free audit
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                {data.stats.map((s) => (
                  <div key={s.label} className="border border-[#e5e2d9] rounded-xl p-3">
                    <p className="text-2xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1.5">{s.label}</p>
                    {s.sub && <p className="text-[10px] text-gray-300 mt-0.5">{s.sub}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BODY — sidebar + content ══ */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-16">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-0.5">
              {SIDEBAR_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left text-xs text-gray-400 hover:text-primary font-medium py-2 px-2 rounded-lg transition-colors hover:bg-primary/5 leading-tight"
                >
                  {s.label}
                </button>
              ))}
              <div className="pt-5 pl-2">
                <a href="/contact" className="text-xs font-bold text-primary hover:underline">
                  Free audit →
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-20 min-w-0">

            {/* ─ DELIVERABLES ─ */}
            <section id="deliver">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-[#e5e2d9]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 whitespace-nowrap">
                  What we deliver — every engagement
                </span>
                <div className="h-px flex-1 bg-[#e5e2d9]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {data.deliverables.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-3"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0e0e0e] mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ─ PROCESS ─ */}
            <section id="process">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">Our process</p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {data.process.map((step, i) => (
                  <div key={step.phase} className="bg-white border border-[#e5e2d9] rounded-2xl p-4 relative">
                    <div className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center mb-3">
                      <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-1">{step.phase}</p>
                    <p className="font-bold text-xs text-[#0e0e0e] mb-2 leading-snug">{step.title}</p>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{step.body}</p>
                    {i < data.process.length - 1 && (
                      <div className="hidden sm:block absolute top-7 -right-2 w-4 h-px bg-primary/30" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ─ WHO FOR ─ */}
            <section id="whofor">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">Who this is for</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.whoFor.map((item) => (
                  <div key={item} className="flex gap-3 p-5 bg-white border border-[#e5e2d9] rounded-2xl">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1a1a1a] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ CASE STUDY ─ */}
            <section id="result">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">A real result</p>
              <div className="bg-[#090b10] text-white rounded-2xl overflow-hidden">
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      {data.caseStudy.client && (
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">{data.caseStudy.client}</p>
                      )}
                      <h3 className="text-2xl lg:text-3xl font-black mb-3 leading-tight">{data.caseStudy.headline}</h3>
                      <p className="text-primary font-bold text-sm mb-4">{data.caseStudy.subheadline}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{data.caseStudy.body}</p>
                    </div>
                    <div>
                      {/* Animated bar chart */}
                      <div className="h-36 flex items-end gap-1.5 mb-4 px-1">
                        {[18, 28, 22, 38, 32, 50, 44, 62, 58, 78, 85, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.05 }}
                            className="flex-1 rounded-t"
                            style={{ background: i >= 9 ? "#1a56ff" : "rgba(255,255,255,0.08)" }}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {data.caseStudy.metrics.map((m) => (
                          <div key={m.label} className="bg-white/5 border border-white/8 rounded-xl p-3 text-center">
                            <p className="text-xl font-black text-white tabular-nums">{m.value}</p>
                            <p className="text-[10px] text-white/35 mt-0.5">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ─ WHY DIFFERENT ─ */}
            <section id="different">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">Why ours is structured differently</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.differentiators.map((item) => (
                  <div key={item.title} className="border-l-2 border-primary pl-5">
                    <p className="font-bold text-sm text-[#0e0e0e] mb-1.5">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ PRICING ─ */}
            <section id="pricing">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">Pricing</p>
              <div className="border border-[#e5e2d9] rounded-2xl overflow-hidden bg-white">
                {data.pricing.map((tier, i) => (
                  <div
                    key={tier.tier}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-5 ${
                      i < data.pricing.length - 1 ? "border-b border-[#e5e2d9]" : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm text-[#0e0e0e]">{tier.tier}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{tier.desc}</p>
                    </div>
                    <p className="text-base font-black text-[#0e0e0e] shrink-0">{tier.range}</p>
                  </div>
                ))}
                <div className="bg-primary/4 border-t border-[#e5e2d9] px-6 py-4">
                  <p className="text-xs text-gray-400">
                    All engagements month-to-month. No lock-in. First audit is free.{" "}
                    <a href="/contact" className="text-primary font-semibold hover:underline">Book yours →</a>
                  </p>
                </div>
              </div>
            </section>

            {/* ─ FAQ ─ */}
            <section id="faq">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-7">Frequently asked</p>
              <div className="bg-white border border-[#e5e2d9] rounded-2xl px-6">
                {data.faq.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM CTA ══ */}
      <section className="bg-[#090b10] text-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">{data.cta.headline}</h2>
          <p className="text-white/45 text-base mb-8 leading-relaxed">{data.cta.sub}</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-[0_0_50px_rgba(26,86,255,0.25)]"
          >
            Book your free audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE DATA — LOCAL SEO SERVICE
══════════════════════════════════════════ */
export const localSeoData: ServicePageData = {
  breadcrumb: ["Home", "SEO", "Local SEO Service"],
  label: "Local SEO",
  headline: "Local SEO that puts you in the map pack —",
  headlineAccent: "and keeps you there.",
  subhead:
    "Outlier operates as your in-house local SEO team. We don't chase algorithm updates — we build the citation graph, review velocity, and content infrastructure that Google has no choice but to reward.",
  stats: [
    { value: "+312%", label: "Avg lead growth", sub: "12-month client avg." },
    { value: "30–90", label: "Days to map pack", sub: "Competitive markets" },
    { value: "#1–3", label: "Map pack target", sub: "All priority queries" },
    { value: "40+", label: "GTA markets served", sub: "City + service combos" },
  ],
  deliverables: [
    {
      title: "Google Business Profile",
      body: "Full GBP audit and optimisation — categories, attributes, Q&A, photos, service areas, and a weekly post schedule that signals ongoing relevance.",
    },
    {
      title: "Citation audit + build",
      body: "Systematic NAP corrections across 45+ Canadian directories. We compare against your top competitors and close every gap.",
    },
    {
      title: "Review generation system",
      body: "Automated request flows via SMS and email after each service. Responses written in your brand voice. Consistent velocity is the signal.",
    },
    {
      title: "Local landing pages",
      body: "City and service-specific pages targeting the exact queries your map pack competitors rank for — structured for both users and Local schema.",
    },
    {
      title: "Local link building",
      body: "Neighbourhood-level editorial links: chambers of commerce, community blogs, local news, sponsorships. Proximity-first link equity.",
    },
    {
      title: "Monthly reporting",
      body: "Rank tracking across all priority city-service queries. Reporting against pack incumbents — not just your own historic positions.",
    },
  ],
  process: [
    {
      phase: "Step 01",
      title: "Local audit",
      body: "GBP, NAP, map stack across 45+ Canadian directories. Full competitor comparison for every priority query.",
    },
    {
      phase: "Step 02",
      title: "GBP + citations",
      body: "Profile rebuild, service-area configuration, citation corrections across all major and local Canadian directories.",
    },
    {
      phase: "Step 03",
      title: "Pages + schema",
      body: "Neighbourhood landing pages. Structured data: LocalBusiness, FAQ, review schema, breadcrumbs.",
    },
    {
      phase: "Step 04",
      title: "Reviews + links",
      body: "Review velocity system. Editorial link outreach to local directories, community organisations, local press.",
    },
    {
      phase: "Step 05",
      title: "Compound",
      body: "Monthly pack tracking. Strategy updates based on what's moving in your market — not a template report.",
    },
  ],
  whoFor: [
    "Service businesses competing for high-intent local searches: dental, legal, HVAC, auto, real estate, trades.",
    "Multi-location brands needing consistent GBP and NAP management across multiple cities.",
    "Business owners paying for clicks on keywords they should own organically.",
  ],
  caseStudy: {
    client: "Home Services — Mississauga, ON",
    headline: "From outside the top 10 to map pack #2 in 14 weeks.",
    subheadline: "Starting from invisible. Competing in one of Mississauga's most saturated service categories.",
    body: "We audited the GBP, rebuilt all citations, launched neighbourhood landing pages targeting Streetsville, Port Credit, and Cooksville, then deployed a review generation system. After 14 weeks: #2 in the map pack, +241% inbound service calls.",
    metrics: [
      { value: "+241%", label: "Inbound calls" },
      { value: "#2", label: "Map pack" },
      { value: "+58", label: "Net reviews" },
    ],
  },
  differentiators: [
    {
      title: "GBP as an active marketing channel",
      body: "Most agencies treat GBP as a one-time setup. We post weekly, manage Q&A, respond to every review, and update attributes seasonally. It compounds.",
    },
    {
      title: "Structure-first before content",
      body: "We fix the citation graph and service-area configuration before publishing a single page. Most agencies skip this; it's why they plateau at positions 4–10.",
    },
    {
      title: "No percentage-of-spend pricing",
      body: "Our retainer covers all deliverables at a fixed monthly rate. Adding cities, services, or review campaigns doesn't trigger a new invoice.",
    },
    {
      title: "Pack-level competitor intelligence",
      body: "We track every business in your map pack and reverse-engineer exactly what they're doing better. Your content and link strategy targets those specific gaps.",
    },
  ],
  pricing: [
    { tier: "Single location · low competition", range: "$800–$1,400/mo", desc: "1 GBP, 1 city, up to 3 priority service queries" },
    { tier: "Single location · high competition", range: "$1,400–$2,200/mo", desc: "Saturated market, multi-service" },
    { tier: "Multi-location · 2–5 locations", range: "$1,800–$3,500/mo", desc: "Consistent GBP + NAP across locations" },
    { tier: "Multi-location · 5+ locations", range: "By scope", desc: "Enterprise-level programmatic local SEO" },
  ],
  faq: [
    {
      q: "How long before local SEO produces map pack movement?",
      a: "Low-competition markets: 4–8 weeks for meaningful movement. Saturated markets like Toronto dental or legal: 12–24 weeks. We give honest timelines upfront after reviewing your pack position.",
    },
    {
      q: "Does my business need a physical address to rank?",
      a: "A verified GBP with service-area configuration can rank for local queries without a shopfront. We handle the verification process and set your service radius correctly.",
    },
    {
      q: "Can you help us rank in multiple GTA cities from one location?",
      a: "Yes — through service-area GBP configuration, city-specific landing pages, and local citation targeting. We manage this systematically across all your target markets.",
    },
    {
      q: "What's the difference between local SEO and regular SEO?",
      a: "Regular SEO targets organic web results. Local SEO specifically targets the map pack, which appears above organic results for location-based searches and drives significantly higher click and call rates.",
    },
  ],
  cta: {
    headline: "The audit takes a week. The gap it finds costs you without one.",
    sub: "One free diagnostic: your map pack position, your service categories, and every competitor currently outranking you.",
  },
};

/* ══════════════════════════════════════════
   PAGE DATA — GOOGLE ADS MANAGEMENT
══════════════════════════════════════════ */
export const googleAdsData: ServicePageData = {
  breadcrumb: ["Home", "Paid Ads", "Google Ads Management"],
  label: "Google Ads",
  headline: "Google Ads that generate revenue —",
  headlineAccent: "not just impressions.",
  subhead:
    "We run performance-first Google Ads campaigns for service businesses and growth-stage companies. No percentage-of-spend fees. No account manager hand-offs. Senior hands on your account every week.",
  stats: [
    { value: "-38%", label: "Avg CPA reduction", sub: "vs. prior agency" },
    { value: "4.2x", label: "Avg ROAS", sub: "Service business avg." },
    { value: "$0", label: "% of spend fees", sub: "Flat retainer only" },
    { value: "30 days", label: "First results", sub: "Aggressive launch" },
  ],
  deliverables: [
    { title: "Campaign architecture", body: "Search, PMAX, display, and local service ads built for your specific goals — not a template copy-paste." },
    { title: "Keyword strategy", body: "Intent-layered targeting. High-value queries prioritised. Negative keyword management prevents wasted spend." },
    { title: "Ad copy + creatives", body: "Headline and description testing across RSA variants. We write and iterate until your CTR is above benchmark." },
    { title: "Landing page alignment", body: "Every campaign matched to a purpose-built landing page. We audit or build if yours isn't converting." },
    { title: "Bid strategy management", body: "Manual CPC to smart bidding transitions managed based on conversion volume — not Google's automatic suggestions." },
    { title: "Weekly reporting", body: "Cost-per-lead, ROAS, conversion paths, quality score trends. Transparent weekly performance summaries." },
  ],
  process: [
    { phase: "Step 01", title: "Audit", body: "Full account review: wasted spend, quality scores, search term reports, campaign structure gaps." },
    { phase: "Step 02", title: "Architecture", body: "Rebuild or restructure based on audit findings. New campaigns built with intent-segmented ad groups." },
    { phase: "Step 03", title: "Launch", body: "Copy live. Tracking verified. Conversion actions mapped to your actual business goals." },
    { phase: "Step 04", title: "Optimise", body: "Weekly bid and budget management. A/B testing copy and landing pages. Negative keyword additions." },
    { phase: "Step 05", title: "Scale", body: "Increase budget on what's working. Expand to new markets or services using proven campaign templates." },
  ],
  whoFor: [
    "Service businesses with a proven offer who need more qualified leads at a lower cost per acquisition.",
    "Companies currently running Google Ads but not sure if they're getting the performance they're paying for.",
    "Growth-stage brands scaling revenue through paid search without inflating cost-per-lead.",
  ],
  caseStudy: {
    client: "SaaS — Toronto",
    headline: "From $42 CPL to $19 CPL in 90 days.",
    subheadline: "Inherited an account spending $22K/month with a 38% impression share and no conversion tracking.",
    body: "We rebuilt the campaign structure from scratch, fixed conversion tracking, moved to a manual CPC strategy until we had 50+ conversions, then transitioned to target CPA. In 90 days: CPL cut by 55%, qualified lead volume up 3x.",
    metrics: [
      { value: "-55%", label: "Cost per lead" },
      { value: "3x", label: "Lead volume" },
      { value: "+38%", label: "Conv. rate" },
    ],
  },
  differentiators: [
    { title: "No percentage-of-spend pricing", body: "We charge a flat retainer regardless of your ad budget. Our incentives are aligned with your results — not your spend level." },
    { title: "Senior account management only", body: "No junior account executives or offshore teams. The person who built your campaigns manages them." },
    { title: "Conversion tracking as step one", body: "We don't touch campaigns until tracking is airtight. Optimising without clean data is guesswork." },
    { title: "Platform-agnostic recommendations", body: "If Google Ads isn't the right channel for your budget or goals, we'll tell you. We also run Meta, LinkedIn, and TikTok." },
  ],
  pricing: [
    { tier: "Local campaigns · single market", range: "$1,200–$2,000/mo", desc: "1 city, up to 3 campaign types" },
    { tier: "Growth campaigns · multi-market", range: "$2,000–$4,000/mo", desc: "Multi-city or multi-product campaigns" },
    { tier: "Enterprise · full-funnel", range: "$4,000+/mo", desc: "Complex account structure, multiple ad types" },
    { tier: "Account audit only", range: "$800 one-time", desc: "Full diagnosis with specific recommendations" },
  ],
  faq: [
    { q: "What ad spend budget do I need to work with Outlier?", a: "We recommend a minimum monthly ad spend of $3,000–$5,000 to generate enough data for meaningful optimisation. Smaller budgets produce slower learning and slower improvements." },
    { q: "Do you charge a percentage of ad spend?", a: "No. We charge a flat monthly management fee regardless of your budget. If you scale your ad spend from $5K to $50K per month, our fee doesn't change unless the scope of work expands." },
    { q: "How quickly will I see results?", a: "Most accounts see meaningful movement within 30–45 days of launch. Larger restructures or accounts with limited conversion history may take 60–90 days to fully optimise." },
    { q: "Can you work with an existing Google Ads account?", a: "Yes. We prefer it — existing accounts have conversion history that accelerates optimisation. We'll audit first and give you a clear picture of what's working and what isn't." },
  ],
  cta: {
    headline: "Find out exactly where your ad spend is leaking.",
    sub: "A free Google Ads audit identifies your biggest wasted spend opportunities — usually found within 20 minutes of access.",
  },
};
