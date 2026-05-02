import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

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
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm text-white/80 pr-4">{q}</span>
        <ChevronRight className={`w-4 h-4 shrink-0 text-white/30 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden text-sm text-white/45 pb-5 leading-relaxed pr-8"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const SIDEBAR_SECTIONS = [
  { id: "deliver", label: "What we deliver" },
  { id: "process", label: "Our process" },
  { id: "whofor", label: "Who this is for" },
  { id: "result", label: "A real result" },
  { id: "different", label: "Why different" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQs" },
];

/* ── MAIN COMPONENT ── */
export function ServicePage({ data }: { data: ServicePageData }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-primary selection:text-white">
      <Nav />

      {/* ══ HERO ══ */}
      <section className="pt-28 pb-16 bg-[#08090d] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-8 flex-wrap">
            {data.breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/15">›</span>}
                <span className={i === data.breadcrumb.length - 1 ? "text-white/50 font-medium" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">{data.label}</p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.03] mb-5">
                {data.headline}
                <br />
                <span className="italic text-primary">{data.headlineAccent}</span>
              </h1>
              <p className="text-base text-white/50 mt-5 max-w-xl leading-relaxed">{data.subhead}</p>
            </div>

            {/* Stat card */}
            <div className="bg-white/5 border border-white/8 rounded-2xl p-5 backdrop-blur-sm">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 px-5 rounded-xl text-sm w-full mb-5 hover:bg-primary/90 transition-colors group shadow-lg shadow-primary/20"
              >
                Get a free audit
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <div className="grid grid-cols-2 gap-3">
                {data.stats.map((s) => (
                  <div key={s.label} className="border border-white/8 rounded-xl p-3 bg-white/3">
                    <p className="text-2xl font-black text-white tabular-nums leading-none">{s.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/30 mt-1.5">{s.label}</p>
                    {s.sub && <p className="text-[10px] text-white/20 mt-0.5">{s.sub}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LOGO MARQUEE ══ */}
      <LogoMarquee />

      {/* ══ BODY — sidebar + content ══ */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-16">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-0.5">
              {SIDEBAR_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="w-full text-left text-xs text-white/30 hover:text-primary font-medium py-2 px-2 rounded-lg transition-colors hover:bg-primary/5 leading-tight"
                >
                  {s.label}
                </button>
              ))}
              <div className="pt-5 pl-2">
                <Link href="/contact" className="text-xs font-bold text-primary hover:underline">
                  Free audit →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-20 min-w-0">

            {/* ─ DELIVERABLES ─ */}
            <section id="deliver">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-white/8" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25 whitespace-nowrap">
                  What we deliver — every engagement
                </span>
                <div className="h-px flex-1 bg-white/8" />
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
                      <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                      <p className="text-sm text-white/45 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ─ PROCESS ─ */}
            <section id="process">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">Our process</p>
              <div className="flex flex-wrap gap-0 border border-white/8 rounded-2xl overflow-hidden mb-6">
                {data.process.map((step, i) => (
                  <div
                    key={step.phase}
                    className={`flex-1 min-w-[100px] flex flex-col items-center gap-1 py-4 px-3 text-center border-r border-white/8 last:border-0 ${i === 0 ? "bg-white/5" : "bg-white/2"}`}
                  >
                    <span className="text-lg font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[10px] font-bold text-white/40">{step.title}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {data.process.map((step, i) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-5 items-start py-4 border-b border-white/5 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                      <p className="font-bold text-sm text-white">{step.title}</p>
                      <p className="text-sm text-white/45 leading-relaxed">{step.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ─ WHO FOR ─ */}
            <section id="whofor">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">Who this is for</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.whoFor.map((item) => (
                  <div key={item} className="flex gap-3 p-5 bg-white/3 border border-white/8 rounded-2xl">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ CASE STUDY ─ */}
            <section id="result">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">A real result</p>
              <div className="bg-white/3 border border-white/8 text-white rounded-2xl overflow-hidden">
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
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">Why ours is structured differently</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.differentiators.map((item) => (
                  <div key={item.title} className="border-l-2 border-primary pl-5">
                    <p className="font-bold text-sm text-white mb-1.5">{item.title}</p>
                    <p className="text-sm text-white/45 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ PRICING ─ */}
            <section id="pricing">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">Pricing</p>
              <div className="border border-white/8 rounded-2xl overflow-hidden bg-white/2">
                {data.pricing.map((tier, i) => (
                  <div
                    key={tier.tier}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-5 ${
                      i < data.pricing.length - 1 ? "border-b border-white/8" : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm text-white">{tier.tier}</p>
                      <p className="text-xs text-white/35 mt-0.5">{tier.desc}</p>
                    </div>
                    <p className="text-base font-black text-white shrink-0">{tier.range}</p>
                  </div>
                ))}
                <div className="bg-primary/5 border-t border-white/8 px-6 py-4">
                  <p className="text-xs text-white/35">
                    All engagements month-to-month. No lock-in. First audit is free.{" "}
                    <Link href="/contact" className="text-primary font-semibold hover:underline">Book yours →</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* ─ FAQ ─ */}
            <section id="faq">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-7">Frequently asked</p>
              <div className="bg-white/2 border border-white/8 rounded-2xl px-6">
                {data.faq.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM CTA ══ */}
      <section className="bg-[#08090d] border-t border-white/5 text-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">{data.cta.headline}</h2>
          <p className="text-white/40 text-base mb-8 leading-relaxed">{data.cta.sub}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-[0_0_50px_rgba(26,86,255,0.25)]"
          >
            Book your free audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
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
    { phase: "Step 01", title: "Local audit", body: "GBP, NAP, map stack across 45+ Canadian directories. Full competitor comparison for every priority query." },
    { phase: "Step 02", title: "GBP + citations", body: "Profile rebuild, service-area configuration, citation corrections across all major and local Canadian directories." },
    { phase: "Step 03", title: "Pages + schema", body: "Neighbourhood landing pages. Structured data: LocalBusiness, FAQ, review schema, breadcrumbs." },
    { phase: "Step 04", title: "Reviews + links", body: "Review velocity system. Editorial link outreach to local directories, community organisations, local press." },
    { phase: "Step 05", title: "Compound", body: "Monthly pack tracking. Strategy updates based on what's moving in your market — not a template report." },
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
    { title: "GBP as an active marketing channel", body: "Most agencies treat GBP as a one-time setup. We post weekly, manage Q&A, respond to every review, and update attributes seasonally. It compounds." },
    { title: "Structure-first before content", body: "We fix the citation graph and service-area configuration before publishing a single page. Most agencies skip this; it's why they plateau at positions 4–10." },
    { title: "No percentage-of-spend pricing", body: "Our retainer covers all deliverables at a fixed monthly rate. Adding cities, services, or review campaigns doesn't trigger a new invoice." },
    { title: "Pack-level competitor intelligence", body: "We track every business in your map pack and reverse-engineer exactly what they're doing better. Your content and link strategy targets those specific gaps." },
  ],
  pricing: [
    { tier: "Single location · low competition", range: "$800–$1,400/mo", desc: "1 GBP, 1 city, up to 3 priority service queries" },
    { tier: "Single location · high competition", range: "$1,400–$2,200/mo", desc: "Saturated market, multi-service" },
    { tier: "Multi-location · 2–5 locations", range: "$1,800–$3,500/mo", desc: "Consistent GBP + NAP across locations" },
    { tier: "Multi-location · 5+ locations", range: "By scope", desc: "Enterprise-level programmatic local SEO" },
  ],
  faq: [
    { q: "How long before local SEO produces map pack movement?", a: "Low-competition markets: 4–8 weeks for meaningful movement. Saturated markets like Toronto dental or legal: 12–24 weeks. We give honest timelines upfront after reviewing your pack position." },
    { q: "Does my business need a physical address to rank?", a: "A verified GBP with service-area configuration can rank for local queries without a shopfront. We handle the verification process and set your service radius correctly." },
    { q: "Can you help us rank in multiple GTA cities from one location?", a: "Yes — through service-area GBP configuration, city-specific landing pages, and local citation targeting. We manage this systematically across all your target markets." },
    { q: "What's the difference between local SEO and regular SEO?", a: "Regular SEO targets organic web results. Local SEO specifically targets the map pack, which appears above organic results for location-based searches and drives significantly higher click and call rates." },
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
    { title: "Monthly reporting", body: "Conversions, ROAS, CPA, impression share by campaign and ad group — with a written analysis and next-month priorities." },
  ],
  process: [
    { phase: "Step 01", title: "Account audit", body: "Full review of existing account structure, keyword coverage, negative lists, quality scores, and wasted spend." },
    { phase: "Step 02", title: "Strategy", body: "Budget allocation, campaign architecture, and keyword strategy built before a single dollar is spent." },
    { phase: "Step 03", title: "Build", body: "Campaign build with RSA variants, extensions, negative keyword list, and conversion tracking verified." },
    { phase: "Step 04", title: "Launch", body: "Aggressive launch with daily optimisation in the first two weeks. Bid adjustments, query mining, negative additions." },
    { phase: "Step 05", title: "Optimise", body: "Monthly strategy calls. Bid automation transitions based on data. Landing page testing. Expansion to new campaigns." },
  ],
  whoFor: [
    "Service businesses spending $3,000+/month on Google Ads who aren't seeing clear ROI from their current agency.",
    "Growth-stage companies launching Google Ads for the first time who want to avoid the common setup mistakes.",
    "eCommerce brands wanting Google Shopping and PMAX managed under one flat-fee retainer.",
  ],
  caseStudy: {
    client: "Legal — Toronto, ON",
    headline: "CPA cut by 52% in 60 days. Lead volume doubled.",
    subheadline: "Inheriting an account with a bloated keyword list and no negative keyword strategy.",
    body: "We inherited an account spending $8,000/month with a 14% impression share and $340 average CPA. After a full rebuild — intent layering, RSA testing, negative keyword architecture, and landing page alignment — CPA dropped to $163 and monthly lead volume doubled within 60 days.",
    metrics: [
      { value: "-52%", label: "CPA" },
      { value: "+2x", label: "Lead volume" },
      { value: "4.2x", label: "ROAS" },
    ],
  },
  differentiators: [
    { title: "Flat fee — never percentage of spend", body: "Every percentage-of-spend agency has an incentive to grow your budget, not your ROI. We charge a fixed monthly fee regardless of what you spend." },
    { title: "Senior strategist only", body: "Your account is managed by the same senior strategist every week. No junior hand-offs after onboarding. No account manager layers." },
    { title: "Intent-first keyword architecture", body: "We build negative keyword lists before we write a single ad. Intent layering means your budget only reaches people who are ready to buy." },
    { title: "Landing page accountability", body: "If your landing page isn't converting, we say so and fix it. Most agencies blame the algorithm. We look at the full funnel." },
  ],
  pricing: [
    { tier: "Starter · up to $5,000/mo ad spend", range: "$800–$1,200/mo", desc: "Search campaigns, full setup, weekly optimisation" },
    { tier: "Growth · $5,000–$20,000/mo ad spend", range: "$1,200–$2,000/mo", desc: "Search + PMAX + display, conversion tracking, landing page audit" },
    { tier: "Scale · $20,000+/mo ad spend", range: "$2,000–$3,500/mo", desc: "Full account with LSA, Shopping, YouTube pre-roll, quarterly strategy" },
    { tier: "Enterprise", range: "By scope", desc: "Multi-account, multi-market management" },
  ],
  faq: [
    { q: "How quickly do Google Ads produce results?", a: "The first 2–4 weeks are a data-gathering period. Meaningful cost-per-conversion optimisation happens in weeks 4–8. Most clients see ROAS improvement vs. their previous agency within the first 60 days." },
    { q: "What's the minimum ad spend you recommend?", a: "We require a minimum of $3,000/month in ad spend to achieve statistically meaningful data for optimisation. Below that, results are slow and margins are tight." },
    { q: "Do you write the ad copy?", a: "Yes. Ad copy is included in all engagements. We write all RSA headlines, descriptions, and extensions — and we test variants continuously." },
    { q: "Do you also manage Meta or TikTok ads?", a: "Yes — we can manage Meta and TikTok ads alongside Google as part of an integrated paid media retainer. Ask about our multi-channel packages." },
  ],
  cta: {
    headline: "Your current agency is probably costing you more than their fee.",
    sub: "A free account audit reveals exactly where your spend is being wasted — and what a rebuilt account would return.",
  },
};
