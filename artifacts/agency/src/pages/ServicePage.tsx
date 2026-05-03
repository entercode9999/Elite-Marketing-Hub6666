import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSeo } from "@/hooks/useSeo";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Check, ChevronRight, ArrowRight } from "lucide-react";

/* ── TYPES ── */
export interface ServicePageData {
  canonicalPath?: string;
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
  faq: { q: string; a: string }[];
  cta: { headline: string; sub: string };
}

/* ── FAQ ITEM (light theme) ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className={`text-[15px] font-bold leading-snug transition-colors ${open ? "text-primary" : "text-[#0e0e0e] group-hover:text-primary"}`}>
          {q}
        </span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all" style={{ background: open ? "#1a56ff" : "rgba(0,0,0,0.05)" }}>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90 text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-8 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export function ServicePage({ data }: { data: ServicePageData }) {
  const serviceSchema: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": data.breadcrumb.map((crumb, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": crumb,
        ...(i === 0 ? { "item": "https://outliermarketing.ca/" } : {}),
        ...(i === data.breadcrumb.length - 1 && data.canonicalPath ? { "item": `https://outliermarketing.ca${data.canonicalPath}` } : {}),
      })),
    },
    {
      "@type": "Service",
      "name": `${data.headline} ${data.headlineAccent}`.trim(),
      "description": data.subhead,
      "provider": { "@type": "LocalBusiness", "@id": "https://outliermarketing.ca/#business", "name": "Outlier Digital Marketing" },
      "areaServed": { "@type": "City", "name": "Toronto", "addressCountry": "CA" },
    },
    ...(data.faq.length > 0 ? [{
      "@type": "FAQPage",
      "mainEntity": data.faq.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    }] : []),
  ];

  useSeo({
    title: `${data.headline}${data.headlineAccent ? " " + data.headlineAccent : ""} | Outlier`,
    description: data.subhead.slice(0, 160),
    canonicalPath: data.canonicalPath,
    schema: serviceSchema,
  });

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white flex flex-col">
      <Nav />

      {/* ══ HERO — dark split (left text / right stats card) ══ */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[68px] min-h-screen">
        {/* Left: dark */}
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-10 pb-12 lg:pt-12 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6 flex-wrap">
              {data.breadcrumb.map((crumb, i) => (
                <span key={crumb} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/15">›</span>}
                  <span className={i === data.breadcrumb.length - 1 ? "text-white/50 font-medium" : ""}>{crumb}</span>
                </span>
              ))}
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">{data.label}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-6">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.headlineAccent}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">{data.subhead}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all"
            >
              Get a free audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right: stats grid on light bg */}
        <div className="bg-[#f2f2ef] flex items-start justify-center px-8 pt-10 pb-12 lg:pt-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#e5e2d9] shadow-sm">
                  <p className="text-3xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-2">{s.label}</p>
                  {s.sub && <p className="text-[10px] text-gray-300 mt-0.5">{s.sub}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ LOGO MARQUEE ══ */}
      <LogoMarquee />

      {/* ══ DELIVERABLES ══ */}
      <section id="deliver" className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">What we deliver</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12 leading-tight">Everything included in every engagement.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 p-6 border border-[#e5e2d9] rounded-2xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-[#0e0e0e] mb-1.5">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section id="process" className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">How we work</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Our process.</h2>
          {/* Step tabs */}
          <div className="flex flex-wrap gap-0 border border-[#e5e2d9] rounded-xl overflow-hidden mb-8">
            {data.process.map((step, i) => (
              <div
                key={step.phase}
                className="flex-1 min-w-[100px] flex flex-col items-center gap-1 py-4 px-3 text-center border-r border-[#e5e2d9] last:border-0 bg-white"
              >
                <span className="text-xl font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs font-bold text-gray-500">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="space-y-0">
            {data.process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 items-start py-5 border-b border-[#e5e2d9] last:border-0"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6">
                  <p className="font-bold text-[#0e0e0e]">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ══ */}
      <section id="whofor" className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Ideal fit</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Who this is for.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.whoFor.map((item) => (
              <div key={item} className="flex gap-3 p-6 border border-[#e5e2d9] rounded-2xl">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDY ══ */}
      <section id="result" className="py-20 md:py-28 bg-[#08090d]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">A real result</span>
          <h2 className="text-4xl font-black text-white mb-12">Proven outcomes.</h2>
          <div className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  {data.caseStudy.client && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">{data.caseStudy.client}</p>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">{data.caseStudy.headline}</h3>
                  <p className="text-primary font-bold text-sm mb-4">{data.caseStudy.subheadline}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{data.caseStudy.body}</p>
                </div>
                <div>
                  <div className="h-36 flex items-end gap-1.5 mb-5 px-1">
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
                      <div key={m.label} className="bg-white/8 border border-white/10 rounded-xl p-4 text-center">
                        <p className="text-2xl font-black text-white tabular-nums">{m.value}</p>
                        <p className="text-[10px] text-white/35 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY DIFFERENT ══ */}
      <section id="different" className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Why we're different</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Why clients leave their previous agency for us.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.differentiators.map((item) => (
              <div key={item.title} className="border-l-4 border-primary pl-6 py-2">
                <p className="font-bold text-[#0e0e0e] mb-1.5">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">FAQ</span>
            <h2 className="text-4xl font-black text-[#0e0e0e]">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {data.faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="py-20 bg-[#08090d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">{data.cta.headline}</h2>
          <p className="text-base text-white/40 mb-8 max-w-md mx-auto leading-relaxed">{data.cta.sub}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-lg shadow-primary/25"
            >
              Book your free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-sm transition-all"
            >
              View our work
            </Link>
          </div>
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
  canonicalPath: "/local-seo-service",
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
    { title: "Flat retainer — no percentage of spend", body: "Our retainer covers all deliverables at a fixed monthly rate. Adding cities, services, or review campaigns doesn't trigger a new invoice." },
    { title: "Pack-level competitor intelligence", body: "We track every business in your map pack and reverse-engineer exactly what they're doing better. Your content and link strategy targets those specific gaps." },
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
  canonicalPath: "/google-ads-management",
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
    "Service businesses currently running Google Ads but not seeing clear ROI from their current agency.",
    "Growth-stage companies launching Google Ads for the first time who want to avoid the common setup mistakes.",
    "eCommerce brands wanting Google Shopping and PMAX managed under one flat-fee retainer.",
  ],
  caseStudy: {
    client: "Legal — Toronto, ON",
    headline: "CPA cut by 52% in 60 days. Lead volume doubled.",
    subheadline: "Inheriting an account with a bloated keyword list and no negative keyword strategy.",
    body: "We inherited an account with bloated spend, a 14% impression share, and a poor average CPA. After a full rebuild — intent layering, RSA testing, negative keyword architecture, and landing page alignment — CPA dropped 52% and monthly lead volume doubled within 60 days.",
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
  faq: [
    { q: "How quickly do Google Ads produce results?", a: "The first 2–4 weeks are a data-gathering period. Meaningful cost-per-conversion optimisation happens in weeks 4–8. Most clients see ROAS improvement vs. their previous agency within the first 60 days." },
    { q: "What ad spend do you recommend for my business?", a: "We recommend a budget after reviewing your specific goals, industry cost-per-click landscape, and target CPA. Every budget recommendation is specific to your business and backed by a clear ROI projection — we don't quote before we understand your situation." },
    { q: "Do you write the ad copy?", a: "Yes. Ad copy is included in all engagements. We write all RSA headlines, descriptions, and extensions — and we test variants continuously." },
    { q: "Do you also manage Meta or TikTok ads?", a: "Yes — we can manage Meta and TikTok ads alongside Google as part of an integrated paid media retainer. Ask about our multi-channel packages." },
  ],
  cta: {
    headline: "Your current agency is probably costing you more than their fee.",
    sub: "A free account audit reveals exactly where your spend is being wasted — and what a rebuilt account would return.",
  },
};
