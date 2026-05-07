import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Search, TrendingUp, MapPin, Star, BarChart2,
  Target, Zap, Globe, FileText
} from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";
import { serviceIndustryPages } from "@/data/serviceIndustry";

/* ─── Types ─────────────────────────────────────────────────────── */

export interface ServiceIndustryPageData {
  meta: { title: string; description: string };
  city: { slug: string; name: string; province: string; abbrev: string };
  service: { slug: string; label: string; shortLabel: string };
  industry: { slug: string; label: string };
  hero: {
    headline: string;
    italic: string;
    description: string;
    badges: string[];
    stats: Array<{ value: string; label: string }>;
  };
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
  };
  industryStats: Array<{ value: string; label: string; context: string }>;
  keywords: string[];
  whyPoints: Array<{ title: string; body: string }>;
  deliverables: Array<{ title: string; description: string }>;
  process: Array<{ step: string; title: string; description: string }>;
  whyOrganic: { headline: string; body: string[] };
  caseStudy: {
    label: string;
    headline: string;
    body: string;
    metrics: Array<{ value: string; label: string }>;
  };
  timeline: Array<{ period: string; title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  cta: string;
  relatedPages: Array<{ label: string; href: string }>;
}

/* ─── Hero Visuals (service-specific mockups) ───────────────────── */

function LocalSeoVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
          <div className="flex-1 bg-white rounded text-[11px] text-gray-400 px-3 py-1 ml-2">Google Maps — "[service] near me"</div>
        </div>
        <div className="bg-white p-4">
          <div className="border border-blue-100 bg-blue-50/30 rounded-xl p-3 mb-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-blue-500 mb-2">Google Maps — Top 3 results</p>
            {[
              { pos: "1", name: "Your Business", rating: "4.9", reviews: "187", highlight: true },
              { pos: "2", name: "Competitor A", rating: "4.2", reviews: "43", highlight: false },
              { pos: "3", name: "Competitor B", rating: "4.4", reviews: "91", highlight: false },
            ].map((r) => (
              <div key={r.pos} className={`flex items-center gap-2 py-1.5 px-2 rounded-lg mb-1 ${r.highlight ? "bg-primary/5 border border-primary/15" : ""}`}>
                <span className={`text-[10px] font-black w-4 shrink-0 ${r.highlight ? "text-primary" : "text-gray-300"}`}>{r.pos}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] font-bold truncate ${r.highlight ? "text-[#0e0e0e]" : "text-gray-500"}`}>{r.name}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-yellow-500">{"★★★★★".slice(0, Math.round(parseFloat(r.rating)))}</span>
                    <span className="text-[8px] text-gray-400">{r.rating} ({r.reviews})</span>
                  </div>
                </div>
                {r.highlight && <span className="text-[8px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full shrink-0">Calling</span>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ v: "+220%", l: "Map impressions" }, { v: "Top 3", l: "Pack position" }, { v: "6 wks", l: "First results" }].map((s) => (
              <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                <p className="text-sm font-black text-primary">{s.v}</p>
                <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100 z-10">
        <p className="text-[10px] text-gray-400">Avg. call increase</p>
        <p className="text-2xl font-black text-primary">+186%</p>
      </div>
      <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10 z-10">
        <p className="text-[9px] text-white/30">Ranking</p>
        <p className="text-xs font-black text-white">Map Pack #1</p>
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
          <div className="flex-1 bg-white rounded text-[11px] text-gray-400 px-3 py-1 ml-2">Google — "[industry] [city]"</div>
        </div>
        <div className="bg-white p-4">
          <div className="border border-gray-100 rounded-xl p-3 mb-3">
            <p className="text-[9px] text-gray-400 mb-2 font-medium">Organic search results</p>
            {[
              { pos: "#1", title: "Your Practice | Trusted [Industry] in [City]", url: "yourdomain.ca", highlight: true },
              { pos: "#2", title: "Competitor A — [Industry] Services", url: "competitor.ca", highlight: false },
              { pos: "#3", title: "Competitor B — Book Now", url: "other.ca", highlight: false },
            ].map((r) => (
              <div key={r.pos} className={`flex items-start gap-2 py-1.5 px-2 rounded-lg mb-1 ${r.highlight ? "bg-primary/5 border border-primary/15" : ""}`}>
                <span className={`text-[10px] font-black w-5 shrink-0 ${r.highlight ? "text-primary" : "text-gray-300"}`}>{r.pos}</span>
                <div>
                  <p className={`text-[10px] font-bold leading-tight ${r.highlight ? "text-[#1a0dab]" : "text-gray-500"}`}>{r.title}</p>
                  <p className={`text-[9px] ${r.highlight ? "text-[#006621]" : "text-gray-300"}`}>{r.url}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ v: "+312%", l: "Organic traffic" }, { v: "Pos. 1", l: "Primary keyword" }, { v: "18mo", l: "Compound ROI" }].map((s) => (
              <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                <p className="text-sm font-black text-primary">{s.v}</p>
                <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100 z-10">
        <p className="text-[10px] text-gray-400">Avg. traffic growth</p>
        <p className="text-2xl font-black text-primary">+312%</p>
      </div>
      <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10 z-10">
        <p className="text-[9px] text-white/30">Position</p>
        <p className="text-xs font-black text-white">Page 1, #1</p>
      </div>
    </div>
  );
}

function GoogleAdsVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
          <div className="flex-1 bg-white rounded text-[11px] text-gray-400 px-3 py-1 ml-2">Google Ads — Campaign Overview</div>
        </div>
        <div className="bg-white p-4">
          <div className="border border-gray-100 rounded-xl p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">This Month vs. Last Month</p>
              <span className="text-[8px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">▲ Improving</span>
            </div>
            {[
              { label: "Conversions", before: "14", after: "31", colour: "text-green-600" },
              { label: "Cost per Lead", before: "$148", after: "$67", colour: "text-green-600" },
              { label: "ROAS", before: "1.8×", after: "4.2×", colour: "text-green-600" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                <span className="text-[10px] text-gray-500 font-medium">{r.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-300 line-through">{r.before}</span>
                  <span className={`text-[10px] font-black ${r.colour}`}>{r.after}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ v: "-42%", l: "CPA reduction" }, { v: "4.2×", l: "ROAS" }, { v: "30 days", l: "To results" }].map((s) => (
              <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                <p className="text-sm font-black text-primary">{s.v}</p>
                <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100 z-10">
        <p className="text-[10px] text-gray-400">Avg. CPA reduction</p>
        <p className="text-2xl font-black text-primary">-42%</p>
      </div>
      <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10 z-10">
        <p className="text-[9px] text-white/30">Certified</p>
        <p className="text-xs font-black text-white">Google Partner</p>
      </div>
    </div>
  );
}

function HeroVisual({ serviceSlug }: { serviceSlug: string }) {
  if (serviceSlug === "local-seo") return <LocalSeoVisual />;
  if (serviceSlug === "google-ads") return <GoogleAdsVisual />;
  return <SeoVisual />;
}

/* ─── FAQ ───────────────────────────────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-[#0e0e0e] text-[15px] leading-snug">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}

/* ─── Deliverable icon helper ───────────────────────────────────── */

const DELIV_ICONS = [Target, FileText, Star, Globe, Zap, BarChart2, MapPin, Search, TrendingUp];

/* ─── Main Page ─────────────────────────────────────────────────── */

function PageContent({ data }: { data: ServiceIndustryPageData }) {
  useSeo({
    title: data.meta.title,
    description: data.meta.description,
    canonicalPath: `/${data.city.slug}/${data.service.slug}/${data.industry.slug}`,
  });

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white flex flex-col">
      <Nav />

      {/* ── HERO — split dark / light ── */}
      <section className="min-h-[560px] grid grid-cols-1 md:grid-cols-2 pt-[68px]">
        {/* Left: dark */}
        <div className="bg-[#08090d] flex flex-col justify-center px-10 lg:px-16 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] text-white/25 mb-5 flex-wrap">
              <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${data.city.slug}/${data.service.slug}`} className="hover:text-white/50 transition-colors">{data.service.label} — {data.city.name}</Link>
              <span>/</span>
              <span className="text-white/40">{data.industry.label}</span>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">
              {data.service.shortLabel} for {data.industry.label} · {data.city.name}, {data.city.abbrev}
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {data.hero.headline}
              <br />
              <span className="text-primary italic font-light">{data.hero.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">{data.hero.description}</p>

            <div className="flex flex-wrap gap-3 mb-7">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
                Get a Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={`/${data.city.slug}/${data.service.slug}`} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all">
                {data.service.label} Overview →
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.hero.badges.map((badge) => (
                <span key={badge} className="text-[10px] font-bold text-white/35 border border-white/10 px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: light with visual */}
        <div className="bg-[#f2f2ef] flex items-center justify-center px-8 py-16 relative overflow-hidden min-h-[400px]">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full">
            <HeroVisual serviceSlug={data.service.slug} />
          </motion.div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <LogoMarquee />

      {/* ── STATS BAR ── */}
      <div className="bg-white border-y border-[#e5e2d9]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e2d9]`}>
            {data.hero.stats.map((s) => (
              <div key={s.label} className="text-center px-4 py-2 sm:py-0">
                <p className="text-3xl font-black text-[#0e0e0e]">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO + BULLETS ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">{data.intro.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">{data.intro.headline}</h2>
              <p className="text-gray-600 leading-relaxed text-[16px] mb-8">{data.intro.body}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
                Get a Free {data.city.name} {data.industry.label} Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="space-y-3">
                {data.intro.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-[#f9f8f5] border border-[#e5e2d9] rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-gray-700 leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY STATS ── */}
      <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">The {data.city.name} {data.industry.label} market</p>
          <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">Why {data.industry.label} in {data.city.name} need a different approach</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {data.industryStats.map((stat) => (
              <div key={stat.label} className="bg-white border border-[#e5e2d9] rounded-2xl p-7">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-black text-primary leading-none">{stat.value}</span>
                </div>
                <p className="font-bold text-[#0e0e0e] text-sm mb-2">{stat.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET KEYWORDS ── */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Search targeting</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Queries this programme ranks for
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                High-intent searches from {data.industry.label.toLowerCase()} in {data.city.name} and surrounding {data.city.name} neighbourhoods — each mapped to a dedicated page.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                See full keyword map <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {data.keywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-1.5 bg-[#f9f8f5] border border-[#e5e2d9] rounded-lg px-3 py-2 hover:border-primary/40 transition-colors">
                    <Search className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS SERVICE FOR THIS INDUSTRY ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why it works</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
              Why {data.industry.label} invest in {data.service.shortLabel}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.whyPoints.map((pt, i) => (
              <div key={pt.title} className="relative bg-white border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-[#0e0e0e] mb-3 text-[15px] relative z-10">{pt.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
                Every deliverable — built for {data.industry.label}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              The same rigour we apply to every client, with language, compliance awareness, and strategy calibrated for {data.industry.label.toLowerCase()}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.deliverables.map((d, i) => {
              const Icon = DELIV_ICONS[i % DELIV_ICONS.length];
              return (
                <div key={d.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{d.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">
              How we deliver {data.service.shortLabel} for {data.industry.label} in {data.city.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data.process.map((step) => (
              <div key={step.step} className="relative bg-white/4 border border-white/8 rounded-2xl p-6">
                <span className="text-[11px] font-black text-primary bg-primary/15 rounded-full px-2.5 py-0.5 mb-4 inline-block">{step.step}</span>
                <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Client result</p>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">{data.caseStudy.label}</p>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-[1.15] mb-5">{data.caseStudy.headline}</h2>
              <p className="text-white/55 leading-relaxed mb-8">{data.caseStudy.body}</p>
              <Link href="/our-work" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all">
                See all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {data.caseStudy.metrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black text-primary mb-1">{m.value}</p>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wide leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ORGANIC ── */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">The long-term case</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                {data.whyOrganic.headline}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                {data.whyOrganic.body.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Why paid search has limits for {data.industry.label}</p>
                <div className="space-y-3">
                  {[
                    { label: "Paid search cost", value: "$$$ ongoing" },
                    { label: "Stops when budget stops", value: "Always" },
                    { label: "Organic search cost at maturity", value: "$0 / click" },
                    { label: "Organic stops when budget stops", value: "Never" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#e5e2d9] last:border-0">
                      <span className="text-sm text-gray-500">{row.label}</span>
                      <span className="text-sm font-bold text-[#0e0e0e]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Timeline</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-5">
                When do results appear for {data.industry.label} in {data.city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                Lower-competition and neighbourhood terms often show movement in 8–12 weeks. Primary terms build from month 3 onward. Here is what a realistic programme looks like.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
                Get a {data.city.name}-specific timeline <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-3 grid gap-4">
              {data.timeline.map((milestone, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex gap-6">
                  <div className="text-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">{milestone.period}</p>
                    <h3 className="font-black text-[#0e0e0e] text-lg mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Common questions about {data.service.shortLabel} for {data.industry.label} in {data.city.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Speak to a {data.city.name} {data.industry.label.toLowerCase()} specialist if you don't find what you're looking for.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="divide-y divide-[#e5e2d9]">
                {data.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[#08090d]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Ready to start?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] mb-6">{data.cta}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-[15px]">
              Get a Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${data.city.slug}/${data.service.slug}`} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all text-[15px]">
              {data.service.label} Overview →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      {data.relatedPages.length > 0 && (
        <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
            <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">More ways Outlier grows {data.city.name} {data.industry.label.toLowerCase()} businesses</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {data.relatedPages.map((r) => (
                <Link key={r.href} href={r.href} className="bg-white border border-[#e5e2d9] rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all flex items-center justify-between group">
                  <span className="font-semibold text-[#0e0e0e] text-sm">{r.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

/* ─── Route handler ─────────────────────────────────────────────── */

export default function ServiceIndustryPage() {
  const params = useParams<{ city: string; service: string; industry: string }>();
  const key = `${params.city}-${params.service}-${params.industry}`;
  const data = serviceIndustryPages[key];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f9f8f5]">
        <Nav />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-gray-400 mb-4 text-lg">Page not found</p>
            <Link href="/cities" className="text-primary font-bold hover:underline">Browse all cities →</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return <PageContent data={data} />;
}
