import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, MapPin, ChevronDown, Check, TrendingUp } from "lucide-react";

/* ── TYPES ── */
export interface LocationData {
  city: string;
  province: string;
  slug: string;
  service: string;
  serviceSlug: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  marketNote: string;
  stats: { value: string; label: string }[];
  mapPins: { name: string; position: { top: string; left: string }; rank?: string }[];
  neighborhoods: string[];
  marketAnalysis: {
    heading: string;
    body: string;
    tableRows: { label: string; value: string }[];
    clientLogo?: string;
  };
  process: { phase: string; title: string; body: string }[];
  caseStudy: {
    headline: string;
    body: string;
    metrics: { value: string; label: string }[];
  };
  otherCities: { name: string; href: string }[];
  otherServices: { name: string; href: string }[];
  ctaHeadline: string;
}

/* ── MAP VISUAL ── */
function LocalMap({ pins }: { pins: LocationData["mapPins"] }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#e0ddd4] bg-[#f2efe8] aspect-[4/3] w-full">
      {/* Street grid lines */}
      <div className="absolute inset-0 opacity-30">
        {[20, 38, 58, 76].map((p) => (
          <div key={`h${p}`} className="absolute w-full h-px bg-[#b5b0a0]" style={{ top: `${p}%` }} />
        ))}
        {[15, 32, 50, 68, 82].map((p) => (
          <div key={`v${p}`} className="absolute h-full w-px bg-[#b5b0a0]" style={{ left: `${p}%` }} />
        ))}
      </div>
      {/* Major road highlight */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-full h-[3px] bg-[#c8c3b8]" style={{ top: "38%" }} />
        <div className="absolute h-full w-[3px] bg-[#c8c3b8]" style={{ left: "50%" }} />
      </div>
      {/* Blocks (buildings) */}
      {[
        { top: "22%", left: "18%", w: "12%", h: "14%" },
        { top: "22%", left: "36%", w: "10%", h: "14%" },
        { top: "42%", left: "18%", w: "10%", h: "13%" },
        { top: "42%", left: "55%", w: "11%", h: "14%" },
        { top: "42%", left: "70%", w: "12%", h: "13%" },
        { top: "62%", left: "22%", w: "13%", h: "13%" },
        { top: "62%", left: "55%", w: "10%", h: "14%" },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-sm bg-[#d8d4c8] border border-[#c8c3b8]/50"
          style={{ top: b.top, left: b.left, width: b.w, height: b.h }}
        />
      ))}
      {/* Green park area */}
      <div className="absolute rounded-xl bg-[#c8d8b8]/60 border border-[#b8c8a8]/50" style={{ top: "58%", left: "68%", width: "20%", height: "18%" }} />

      {/* Location pins */}
      {pins.map((pin, i) => (
        <div
          key={pin.name}
          className="absolute z-10"
          style={{ top: pin.position.top, left: pin.position.left, transform: "translate(-50%,-100%)" }}
        >
          <div className={`relative group cursor-pointer ${i === 0 ? "" : ""}`}>
            {/* Pin */}
            <div className={`w-5 h-5 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${i === 0 ? "bg-primary" : "bg-[#1a1a1a]"}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className={`absolute top-1/2 left-1/2 w-[1px] h-2 -translate-x-1/2 ${i === 0 ? "bg-primary" : "bg-[#1a1a1a]"}`} />
            {/* Label */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-[#e0ddd4] rounded-lg shadow-md px-2.5 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
              <p className="text-[10px] font-bold text-[#1a1a1a]">{pin.name}</p>
              {pin.rank && <p className="text-[9px] text-primary font-bold">{pin.rank}</p>}
            </div>
          </div>
        </div>
      ))}

      {/* Map attribution style box */}
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#e0ddd4] shadow-sm">
        <p className="text-[9px] font-bold text-[#1a1a1a] uppercase tracking-wider">Map Coverage</p>
        <p className="text-[10px] text-gray-500">{pins.length} active tracking zones</p>
      </div>
    </div>
  );
}

/* ── FAQ ITEM ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm text-[#1a1a1a] pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-gray-500 pb-5 leading-relaxed pr-8">{a}</p>}
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export function LocationServicePage({ data }: { data: LocationData }) {
  return (
    <div className="min-h-screen bg-[#f9f8f5] text-[#1a1a1a]">
      <Nav />

      {/* ══ HERO ══ */}
      <section className="pt-28 pb-14 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb + tabs */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="text-gray-300">›</span>
            <span>Location</span>
            <span className="text-gray-300">›</span>
            <span>{data.city}</span>
            <span className="text-gray-300">›</span>
            <span className="text-[#1a1a1a] font-medium">{data.service}</span>
          </nav>

          {/* Sub-tabs */}
          <div className="flex items-center gap-0.5 mb-10 border-b border-[#e5e2d9]">
            {[data.city, "GBP Optimisation", "Map Pack", "Neighbourhoods", "Citations"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                  i === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.03] text-[#0e0e0e] mb-4">
                {data.headline}
                <span className="italic text-primary"> {data.headlineAccent}</span>
              </h1>
              <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-lg">{data.tagline}</p>
              <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-[#e5e2d9] pl-4 mb-8">
                {data.marketNote}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {data.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-5 rounded-xl text-sm hover:bg-primary/90 transition-colors group"
                >
                  Audit my {data.city} rankings
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#case-study" className="inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-gray-400 text-gray-600 font-semibold py-3 px-5 rounded-xl text-sm transition-colors">
                  See case study
                </a>
              </div>
            </div>

            {/* Right: map */}
            <div>
              <LocalMap pins={data.mapPins} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ NEIGHBOURHOODS ══ */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-2">Neighbourhoods in {data.city}</p>
          <h2 className="text-3xl font-black mb-8 text-[#0e0e0e]">
            {data.neighborhoods.length} {data.city} sub-markets,
            <br />
            <span className="italic font-light">{data.neighborhoods.length} targeting strategies.</span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {data.neighborhoods.map((n) => (
              <div
                key={n}
                className="border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-600 hover:border-primary/40 hover:text-primary transition-colors cursor-pointer text-center"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARKET ANALYSIS ══ */}
      <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text side */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3">
                Why {data.city} is different
              </p>
              <h2 className="text-3xl font-black leading-tight mb-5 text-[#0e0e0e]">
                {data.marketAnalysis.heading}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{data.marketAnalysis.body}</p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-5 rounded-xl text-sm hover:bg-black/80 transition-colors group"
              >
                Book a {data.city} audit
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Data table */}
            <div className="bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-4 border-b border-[#e5e2d9] bg-[#f9f8f5]">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{data.city} Market Data</p>
              </div>
              <div className="divide-y divide-[#e5e2d9]">
                {data.marketAnalysis.tableRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
                    <p className="text-xs text-gray-500 font-medium">{row.label}</p>
                    <p className="text-sm font-bold text-[#0e0e0e] text-right max-w-[60%]">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3">Our approach</p>
          <h2 className="text-2xl font-black mb-10 text-[#0e0e0e]">
            Same five phases. Tuned to {data.city}.
          </h2>
          <div className="space-y-4">
            {data.process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 items-start py-4 border-b border-[#f0ede8] last:border-0"
              >
                <div className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                  <p className="font-bold text-sm text-[#0e0e0e] sm:pt-0">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDY ══ */}
      <section id="case-study" className="py-16 bg-[#090b10] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-4">{data.city} · Client result</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight mb-4">{data.caseStudy.headline}</h2>
              <p className="text-white/55 text-sm leading-relaxed">{data.caseStudy.body}</p>
              <div className="flex gap-4 mt-8">
                {data.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 border border-white/8 rounded-xl p-4 text-center min-w-[90px]">
                    <p className="text-2xl font-black text-white tabular-nums">{m.value}</p>
                    <p className="text-[10px] text-white/35 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Chart */}
            <div className="h-48 flex items-end gap-1.5 px-2">
              {[12, 20, 16, 30, 26, 44, 38, 58, 52, 72, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="flex-1 rounded-t"
                  style={{ background: i >= 9 ? "#1a56ff" : "rgba(255,255,255,0.07)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OTHER CITIES + SERVICES ══ */}
      <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Other GTA cities */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-5">Other GTA cities we serve</p>
              <div className="grid grid-cols-2 gap-2">
                {data.otherCities.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg border border-[#e5e2d9] hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-600"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary/50" />
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Other services */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-5">Other services for {data.city}</p>
              <div className="grid grid-cols-2 gap-2">
                {data.otherServices.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg border border-[#e5e2d9] hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-600"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-primary/50" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{data.ctaHeadline}</h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            One-page diagnostic in your ward, your service category, and the businesses currently outranking you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-xl transition-all text-sm group hover:bg-white/90"
          >
            Request {data.city} audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════
   DATA — MISSISSAUGA
══════════════════════════════════════════ */
export const mississaugaLocalSeoData: LocationData = {
  city: "Mississauga",
  province: "ON",
  slug: "mississauga",
  service: "Local SEO",
  serviceSlug: "local-seo-service",
  headline: "Local SEO in Mississauga — built for the map pack,",
  headlineAccent: "not the algorithm of the week.",
  tagline:
    "Mississauga's map pack is dominated by businesses three blocks from Square One, if your operation is in Streetsville, Port Credit, or Erin Mills — proximity is working against you. Here's how we close the gap.",
  marketNote:
    "Toronto proximity creates a unique gravity problem. Businesses in Mississauga's outer sub-markets compete not just locally but against Toronto-adjacent businesses with larger citation footprints.",
  stats: [
    { value: "+241%", label: "Inbound calls · client avg." },
    { value: "#1", label: "Map pack achieved · 12 weeks" },
    { value: "+58", label: "Net new reviews generated" },
  ],
  mapPins: [
    { name: "Square One", position: { top: "35%", left: "50%" }, rank: "#1 Pack Zone" },
    { name: "Port Credit", position: { top: "60%", left: "30%" }, rank: "High competition" },
    { name: "Streetsville", position: { top: "30%", left: "22%" }, rank: "Targeting active" },
    { name: "Erin Mills", position: { top: "30%", left: "72%" }, rank: "Tracking" },
    { name: "Cooksville", position: { top: "55%", left: "52%" } },
    { name: "Meadowvale", position: { top: "22%", left: "18%" } },
  ],
  neighborhoods: [
    "Square One", "Port Credit", "Streetsville", "Erin Mills", "Cooksville", "Meadowvale",
    "Lorne Park", "Hurontario", "Clarkson", "Malton", "Lisgar", "Churchill Meadows",
  ],
  marketAnalysis: {
    heading: "Two centres of gravity, and a proximity problem.",
    body: "Mississauga's two local markets — it's at least three: Square One dominates search for businesses three blocks from Dundurn-area businesses, Port Credit operates as its own micro-economy, and Streetsville-Clarkson creates a separate proximity challenge for any business competing for calls. GBP as a marketing channel operates on micro-geography — something most agencies building general SEO campaigns never account for.",
    tableRows: [
      { label: "Population", value: "717,961" },
      { label: "Market status", value: "High competition — Dental, Auto, Legal, Physio" },
      { label: "Review delta (avg.)", value: "14–22 reviews behind pack #1" },
      { label: "Key competitor zone", value: "Streetsville, Port Credit, Lakeview" },
      { label: "Avg. time to pack", value: "8–14 weeks" },
      { label: "GBP categories tracked", value: "Dental · Auto · Legal · Physio" },
    ],
  },
  process: [
    {
      phase: "Step 01",
      title: "Local audit",
      body: "GBP, NAP across 45+ Canadian directories. Comparison vs. all top Mississauga-market incumbents. Analysis of Square One vs. outer-market proximity effects.",
    },
    {
      phase: "Step 02",
      title: "GBP + citations",
      body: "Service-area configuration for all target Mississauga sub-markets. Citation corrections submitted to all major and local Mississauga directories. 45+ city cycles.",
    },
    {
      phase: "Step 03",
      title: "Pages + schema",
      body: "Neighbourhood landing pages for Square One, Streetsville, Port Credit, Cooksville. Structured data: LocalBusiness, FAQ. Internal linking tuned to local mesh.",
    },
    {
      phase: "Step 04",
      title: "Reviews + links",
      body: "Review generation tuned for Mississauga civic context. Outreach to local Mississauga directories, 40+ member profiles, community sponsorships.",
    },
    {
      phase: "Step 05",
      title: "Compound",
      body: "Monthly pack tracking across 15 Mississauga-market keywords. Reporting against Mississauga pack incumbents — not just your own historic positions.",
    },
  ],
  caseStudy: {
    headline: "Cooksville Auto Body — from #11 to #2 in 14 weeks.",
    body: "Starting from outside the top 10 across all Cooksville auto-repair queries. We rebuilt the GBP service areas, corrected 38 citation inconsistencies, launched a review generation system, and published three neighbourhood landing pages. In 14 weeks: #2 in the Cooksville map pack, +241% inbound calls, +58 net new reviews.",
    metrics: [
      { value: "+241%", label: "Inbound calls" },
      { value: "#2", label: "Map pack" },
      { value: "+58", label: "Net reviews" },
    ],
  },
  otherCities: [
    { name: "Local SEO · Toronto", href: "/toronto/local-seo-service" },
    { name: "Local SEO · Brampton", href: "/brampton/local-seo-service" },
    { name: "Local SEO · Oakville", href: "/oakville/local-seo-service" },
    { name: "Local SEO · Hamilton", href: "/hamilton/local-seo-service" },
    { name: "Local SEO · Markham", href: "/markham/local-seo-service" },
    { name: "Local SEO · Richmond Hill", href: "/richmond-hill/local-seo-service" },
  ],
  otherServices: [
    { name: "Google Ads · Mississauga", href: "/mississauga/google-ads-management" },
    { name: "Web Design · Mississauga", href: "/mississauga/web-design-service" },
    { name: "Content Marketing · Mississauga", href: "/mississauga/content-marketing-service" },
    { name: "Technical SEO · Mississauga", href: "/mississauga/technical-seo-service" },
    { name: "Reputation Management", href: "/mississauga/reputation-management" },
    { name: "Programmatic SEO", href: "/mississauga/programmatic-seo-service" },
  ],
  ctaHeadline: "See where your Mississauga rankings are leaking — before someone else takes the spot.",
};

/* ══════════════════════════════════════════
   DATA — TORONTO
══════════════════════════════════════════ */
export const torontoLocalSeoData: LocationData = {
  city: "Toronto",
  province: "ON",
  slug: "toronto",
  service: "Local SEO",
  serviceSlug: "local-seo-service",
  headline: "Local SEO in Toronto — built for the",
  headlineAccent: "most competitive map pack in Canada.",
  tagline:
    "Toronto's map pack is fought across 44 distinct wards. Ranking in Yorkville is a different battle from ranking in Scarborough or Etobicoke. Generic local SEO doesn't win here. Neighbourhood-first strategy does.",
  marketNote:
    "Toronto has more active GBP profiles per square kilometre than any other Canadian city. Competition is intense and citation authority requirements are higher than national averages.",
  stats: [
    { value: "+312%", label: "Avg lead growth · 12mo" },
    { value: "#1", label: "Map pack results achieved" },
    { value: "44", label: "Wards actively tracked" },
  ],
  mapPins: [
    { name: "Downtown Core", position: { top: "50%", left: "50%" }, rank: "#1 Pack Zone" },
    { name: "Yorkville", position: { top: "35%", left: "45%" }, rank: "High competition" },
    { name: "Etobicoke", position: { top: "45%", left: "20%" }, rank: "Active" },
    { name: "Scarborough", position: { top: "40%", left: "75%" }, rank: "Tracking" },
    { name: "North York", position: { top: "25%", left: "50%" } },
    { name: "East York", position: { top: "45%", left: "60%" } },
  ],
  neighborhoods: [
    "Downtown Core", "Yorkville", "Etobicoke", "Scarborough", "North York", "East York",
    "Leslieville", "The Annex", "King West", "Danforth", "Liberty Village", "Roncesvalles",
  ],
  marketAnalysis: {
    heading: "Forty-four wards. Forty-four different search battlefields.",
    body: "Toronto's local search market is the most fragmented in Canada. A business in Leslieville doesn't compete with Etobicoke — but both compete against national chains with massive citation authority. The key is hyper-specific GBP service-area configuration and neighbourhood-level content clusters that signal genuine local relevance.",
    tableRows: [
      { label: "Population", value: "2,794,356" },
      { label: "Market status", value: "Extremely high competition across all verticals" },
      { label: "Review delta (avg.)", value: "28–45 reviews behind pack #1" },
      { label: "Key verticals", value: "Dental, Legal, Real Estate, HVAC, Auto" },
      { label: "Avg. time to pack", value: "12–24 weeks" },
      { label: "Wards tracked", value: "44 Toronto wards, 150+ service combos" },
    ],
  },
  process: [
    { phase: "Step 01", title: "Local audit", body: "44-ward analysis. GBP, NAP across 45+ directories. Full ward-by-ward competitor mapping for all priority service categories." },
    { phase: "Step 02", title: "GBP + citations", body: "Ward-specific service area configuration. Citation corrections across all national and Toronto-local directories." },
    { phase: "Step 03", title: "Pages + schema", body: "Neighbourhood content clusters for each target ward. LocalBusiness and Service schema. Internal link architecture." },
    { phase: "Step 04", title: "Reviews + links", body: "Review velocity system. Outreach to Toronto BIAs, community organisations, local press." },
    { phase: "Step 05", title: "Compound", body: "Monthly tracking across all target ward + service combinations. Strategy updates based on pack movement." },
  ],
  caseStudy: {
    headline: "Yorkville Dental — from page 2 to #1 map pack in 18 weeks.",
    body: "Luxury dental practice buried on page 2 despite having a prime Yorkville address. We identified 42 citation inconsistencies, rebuilt the GBP service areas, launched five neighbourhood landing pages, and ran a review velocity campaign. In 18 weeks: #1 in the Yorkville dental map pack.",
    metrics: [
      { value: "+86%", label: "New patients" },
      { value: "#1", label: "Map pack" },
      { value: "+94", label: "Net reviews" },
    ],
  },
  otherCities: [
    { name: "Local SEO · Mississauga", href: "/mississauga/local-seo-service" },
    { name: "Local SEO · Brampton", href: "/brampton/local-seo-service" },
    { name: "Local SEO · Oakville", href: "/oakville/local-seo-service" },
    { name: "Local SEO · Hamilton", href: "/hamilton/local-seo-service" },
    { name: "Local SEO · Markham", href: "/markham/local-seo-service" },
    { name: "Local SEO · Richmond Hill", href: "/richmond-hill/local-seo-service" },
  ],
  otherServices: [
    { name: "Google Ads · Toronto", href: "/toronto/google-ads-management" },
    { name: "Web Design · Toronto", href: "/toronto/web-design-service" },
    { name: "Content Marketing · Toronto", href: "/toronto/content-marketing-service" },
    { name: "Technical SEO · Toronto", href: "/toronto/technical-seo-service" },
    { name: "Reputation Management", href: "/toronto/reputation-management" },
    { name: "Programmatic SEO", href: "/toronto/programmatic-seo-service" },
  ],
  ctaHeadline: "See where your Toronto rankings are leaking — before someone else takes the spot.",
};

/* ══════════════════════════════════════════
   DATA — OTTAWA
══════════════════════════════════════════ */
export const ottawaLocalSeoData: LocationData = {
  city: "Ottawa",
  province: "ON",
  slug: "ottawa",
  service: "Local SEO",
  serviceSlug: "local-seo-service",
  headline: "Local SEO in Ottawa — built for a",
  headlineAccent: "bilingual, government-adjacent market.",
  tagline:
    "Ottawa's local search is shaped by its bilingual character, the federal government's commercial footprint, and the Gatineau border. Generic local SEO misses all three. We don't.",
  marketNote:
    "Ottawa businesses often lose map pack position to Gatineau-based competitors crossing the provincial line. Proper service area configuration is more critical here than in most Canadian markets.",
  stats: [
    { value: "+280%", label: "Avg lead growth · 12mo" },
    { value: "#1–2", label: "Map pack positions achieved" },
    { value: "2", label: "Language markets served" },
  ],
  mapPins: [
    { name: "Downtown Ottawa", position: { top: "45%", left: "50%" }, rank: "#1 Pack Zone" },
    { name: "Kanata", position: { top: "35%", left: "22%" }, rank: "Tech corridor" },
    { name: "Barrhaven", position: { top: "65%", left: "35%" }, rank: "Active" },
    { name: "Westboro", position: { top: "40%", left: "35%" } },
    { name: "Glebe", position: { top: "55%", left: "52%" } },
    { name: "Orleans", position: { top: "38%", left: "78%" } },
  ],
  neighborhoods: [
    "Downtown", "Westboro", "Glebe", "Kanata", "Barrhaven", "Orleans",
    "Byward Market", "Centretown", "Sandy Hill", "Hintonburg", "Alta Vista", "Hunt Club",
  ],
  marketAnalysis: {
    heading: "Bilingual market, federal anchor, and a border that blurs the map pack.",
    body: "Ottawa's local search market has three forces that most agencies ignore: the bilingual requirement for federal-adjacent businesses, the Gatineau cross-border competition that bleeds into Ottawa map packs for certain categories, and the Kanata tech corridor which behaves as a completely separate local market from Downtown.",
    tableRows: [
      { label: "Population", value: "1,017,449" },
      { label: "Market status", value: "Moderate-high competition, bilingual requirements" },
      { label: "Key complication", value: "Gatineau cross-border GBP competition" },
      { label: "Key verticals", value: "Legal, Government services, Tech, Medical" },
      { label: "Avg. time to pack", value: "8–16 weeks" },
      { label: "Languages tracked", value: "English + French bilingual queries" },
    ],
  },
  process: [
    { phase: "Step 01", title: "Local audit", body: "Ottawa + Gatineau cross-border competitor analysis. GBP service-area configuration review. Bilingual query mapping." },
    { phase: "Step 02", title: "GBP + citations", body: "Bilingual GBP optimisation. Citation builds across all major Canadian and Ottawa-specific directories." },
    { phase: "Step 03", title: "Pages + schema", body: "English and French neighbourhood landing pages. Federal-adjacent content strategy for government-corridor businesses." },
    { phase: "Step 04", title: "Reviews + links", body: "Review generation in English and French. Links from Ottawa community organisations, BIAs, local press." },
    { phase: "Step 05", title: "Compound", body: "Bilingual rank tracking. Monthly pack analysis vs. Ottawa and Gatineau incumbents." },
  ],
  caseStudy: {
    headline: "Westboro law firm — from page 3 to map pack #1 in 16 weeks.",
    body: "Family law practice invisible on local search despite 12 years in practice. We identified bilingual citation gaps, rebuilt the GBP with French service descriptions, and published neighbourhood content in both languages. In 16 weeks: #1 in the Ottawa family law map pack.",
    metrics: [
      { value: "+280%", label: "Client enquiries" },
      { value: "#1", label: "Map pack" },
      { value: "+72", label: "Net reviews" },
    ],
  },
  otherCities: [
    { name: "Local SEO · Toronto", href: "/toronto/local-seo-service" },
    { name: "Local SEO · Mississauga", href: "/mississauga/local-seo-service" },
    { name: "Local SEO · Brampton", href: "/brampton/local-seo-service" },
    { name: "Local SEO · Oakville", href: "/oakville/local-seo-service" },
    { name: "Local SEO · Hamilton", href: "/hamilton/local-seo-service" },
    { name: "Local SEO · Kingston", href: "/kingston/local-seo-service" },
  ],
  otherServices: [
    { name: "Google Ads · Ottawa", href: "/ottawa/google-ads-management" },
    { name: "Web Design · Ottawa", href: "/ottawa/web-design-service" },
    { name: "Content Marketing · Ottawa", href: "/ottawa/content-marketing-service" },
    { name: "Technical SEO · Ottawa", href: "/ottawa/technical-seo-service" },
    { name: "Reputation Management", href: "/ottawa/reputation-management" },
    { name: "Bilingual SEO", href: "/ottawa/bilingual-seo-service" },
  ],
  ctaHeadline: "See where your Ottawa rankings are leaking — before someone else takes the spot.",
};
