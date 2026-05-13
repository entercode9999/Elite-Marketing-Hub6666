import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, MapPin, ChevronRight, Check, TrendingUp, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

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

/* ── MAP VISUAL (dark style) ── */
function LocalMap({ pins }: { pins: LocationData["mapPins"] }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0d1525] aspect-[4/3] w-full">
      {/* Dark grid lines */}
      <div className="absolute inset-0 opacity-20">
        {[20, 38, 58, 76].map((p) => (
          <div key={`h${p}`} className="absolute w-full h-px bg-white/30" style={{ top: `${p}%` }} />
        ))}
        {[15, 32, 50, 68, 82].map((p) => (
          <div key={`v${p}`} className="absolute h-full w-px bg-white/30" style={{ left: `${p}%` }} />
        ))}
      </div>
      {/* Major roads */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute w-full h-[2px] bg-white/40" style={{ top: "38%" }} />
        <div className="absolute h-full w-[2px] bg-white/40" style={{ left: "50%" }} />
      </div>
      {/* Blocks */}
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
          className="absolute rounded-sm bg-white/5 border border-white/8"
          style={{ top: b.top, left: b.left, width: b.w, height: b.h }}
        />
      ))}
      {/* Park area */}
      <div className="absolute rounded-xl bg-primary/10 border border-primary/20" style={{ top: "58%", left: "68%", width: "20%", height: "18%" }} />

      {/* Location pins */}
      {pins.map((pin, i) => (
        <div
          key={pin.name}
          className="absolute z-10"
          style={{ top: pin.position.top, left: pin.position.left, transform: "translate(-50%,-100%)" }}
        >
          <div className="relative group cursor-pointer">
            <div className={`w-5 h-5 rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center ${i === 0 ? "bg-primary shadow-primary/30" : "bg-white/20"}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            {i === 0 && <div className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0d1525] border border-white/15 rounded-lg shadow-xl px-2.5 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="text-[10px] font-bold text-white">{pin.name}</p>
              {pin.rank && <p className="text-[9px] text-primary font-bold">{pin.rank}</p>}
            </div>
          </div>
        </div>
      ))}

      {/* Map legend */}
      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-sm">
        <p className="text-[9px] font-bold text-white/50 uppercase tracking-wider">Coverage</p>
        <p className="text-[10px] text-white/70">{pins.length} active zones</p>
      </div>
    </div>
  );
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
        <span className="font-semibold text-sm text-white/70 pr-4">{q}</span>
        <ChevronRight className={`w-4 h-4 shrink-0 text-white/30 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden text-sm text-white/40 pb-5 leading-relaxed pr-8"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export function LocationServicePage({ data }: { data: LocationData }) {
  const canonicalPath = `/${data.slug}/${data.serviceSlug}`;
  const locationSchema: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outliermarketing.ca/" },
        { "@type": "ListItem", "position": 2, "name": "Cities We Serve", "item": "https://outliermarketing.ca/cities" },
        { "@type": "ListItem", "position": 3, "name": data.city, "item": `https://outliermarketing.ca/${data.slug}/seo-services` },
        { "@type": "ListItem", "position": 4, "name": data.service, "item": `https://outliermarketing.ca${canonicalPath}` },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://outliermarketing.ca/#business",
      "name": "Outlier Digital Marketing",
      "url": "https://outliermarketing.ca",
      "areaServed": {
        "@type": "City",
        "name": data.city,
        "containedInPlace": { "@type": "State", "name": data.province, "addressCountry": "CA" },
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": data.service,
        "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": `${data.service} in ${data.city}`, "description": data.tagline } }],
      },
    },
  ];

  useSeo({
    title: `${data.service} in ${data.city}, ${data.province} | Outlier`,
    description: data.tagline.slice(0, 160),
    canonicalPath,
    schema: locationSchema,
  });

  return (
    <div className="min-h-screen bg-white text-[#0e0e0e] selection:bg-primary selection:text-white">
      <Nav />

      {/* ══ HERO ══ */}
      <section className="pt-28 pb-16 bg-[#08090d] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-5 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-white/15">›</span>
            <span>Location</span>
            <span className="text-white/15">›</span>
            <span>{data.city}</span>
            <span className="text-white/15">›</span>
            <span className="text-white/50 font-medium">{data.service}</span>
          </nav>

          {/* Sub-tabs */}
          <div className="flex items-center gap-0.5 mb-10 border-b border-white/8">
            {[data.city, "GBP Optimisation", "Map Pack", "Neighbourhoods", "Citations"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                  i === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-white/30 hover:text-white/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">{data.city} {data.service}</p>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.03] mb-4">
                {data.headline}
                <span className="italic text-primary"> {data.headlineAccent}</span>
              </h1>
              <p className="text-base text-white/50 leading-relaxed mb-5 max-w-lg">{data.tagline}</p>
              <p className="text-sm text-white/35 leading-relaxed italic border-l-2 border-primary/30 pl-4 mb-8">
                {data.marketNote}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                {data.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-white tabular-nums leading-none">{s.value}</p>
                    <p className="text-xs text-white/35 mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-5 rounded-xl text-sm hover:bg-primary/90 transition-colors group shadow-lg shadow-primary/20"
                >
                  Audit my {data.city} rankings
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#case-study" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold py-3.5 px-5 rounded-xl text-sm transition-colors">
                  See case study
                </a>
              </div>
            </div>

            {/* Right: dark map */}
            <div>
              <LocalMap pins={data.mapPins} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ LOGO MARQUEE ══ */}
      <LogoMarquee />

      {/* ══ NEIGHBOURHOODS ══ */}
      <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-2">Neighbourhoods</p>
          <h2 className="text-3xl font-black text-[#0e0e0e] mb-8">
            {data.neighborhoods.length} {data.city} sub-markets,
            <br />
            <span className="italic font-light text-gray-400">{data.neighborhoods.length} targeting strategies.</span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {data.neighborhoods.map((n) => (
              <div
                key={n}
                className="border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-500 hover:border-primary/40 hover:text-primary transition-colors cursor-pointer text-center bg-white"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARKET ANALYSIS ══ */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">
                Why {data.city} is different
              </p>
              <h2 className="text-3xl font-black leading-tight text-[#0e0e0e] mb-5">
                {data.marketAnalysis.heading}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{data.marketAnalysis.body}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-5 rounded-xl text-sm hover:bg-primary/90 transition-colors group"
              >
                Book a {data.city} audit
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Data table */}
            <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#e5e2d9] bg-[#f2f1ed]">
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
      <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">Our approach</p>
          <h2 className="text-2xl font-black text-[#0e0e0e] mb-10">
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
                className="flex gap-5 items-start py-4 border-b border-[#e5e2d9] last:border-0"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                  <p className="font-bold text-sm text-[#0e0e0e]">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDY ══ */}
      <section id="case-study" className="py-16 bg-[#08090d] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-4">{data.city} · Client result</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight mb-4">{data.caseStudy.headline}</h2>
              <p className="text-white/45 text-sm leading-relaxed">{data.caseStudy.body}</p>
              <div className="flex flex-wrap gap-4 mt-8">
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
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-5">Other GTA cities we serve</p>
              <div className="grid grid-cols-2 gap-2">
                {data.otherCities.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg border border-[#e5e2d9] hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-500 bg-[#f9f8f5]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-5">Other services for {data.city}</p>
              <div className="grid grid-cols-2 gap-2">
                {data.otherServices.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg border border-[#e5e2d9] hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-500 bg-[#f9f8f5]"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="py-20 md:py-28 bg-[#08090d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{data.city} · Free Audit</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{data.ctaHeadline}</h2>
              <p className="text-white/40 text-sm mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                One-page diagnostic: your map pack position in {data.city}, your service category, and the businesses currently outranking you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  Request {data.city} audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`/${data.slug}/seo-services`}
                  className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-bold py-4 px-8 rounded-xl transition-all text-sm hover:border-white/30 hover:text-white"
                >
                  Explore SEO services
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">What you get</p>
              <div className="space-y-3">
                {[
                  `Current ${data.city} map pack position`,
                  `Top outranking competitors`,
                  `Quick wins for ${data.service}`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
    "Mississauga's map pack is dominated by businesses three blocks from Square One. If your operation is in Streetsville, Port Credit, or Erin Mills — proximity is working against you. Here's how we close the gap.",
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
    body: "Mississauga operates as at least three local markets: Square One dominates search for nearby businesses, Port Credit runs as its own micro-economy, and Streetsville–Clarkson creates a separate proximity challenge for any business competing for calls. GBP operates on micro-geography — something most agencies building general SEO campaigns never account for.",
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
    { phase: "Step 01", title: "Local audit", body: "GBP, NAP across 45+ Canadian directories. Comparison vs. all top Mississauga-market incumbents. Analysis of Square One vs. outer-market proximity effects." },
    { phase: "Step 02", title: "GBP + citations", body: "Service-area configuration for all target Mississauga sub-markets. Citation corrections submitted to all major and local Mississauga directories." },
    { phase: "Step 03", title: "Pages + schema", body: "Neighbourhood landing pages for Square One, Streetsville, Port Credit, Cooksville. Structured data: LocalBusiness, FAQ. Internal linking tuned to local mesh." },
    { phase: "Step 04", title: "Reviews + links", body: "Review generation tuned for Mississauga civic context. Outreach to local Mississauga directories, community sponsorships." },
    { phase: "Step 05", title: "Compound", body: "Monthly pack tracking across 15 Mississauga-market keywords. Reporting against Mississauga pack incumbents." },
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
    { name: "Web Design · Mississauga", href: "/mississauga/custom-web-design-service" },
    { name: "Content Marketing · Mississauga", href: "/mississauga/content-marketing-service" },
    { name: "Technical SEO · Mississauga", href: "/mississauga/technical-seo-service" },
    { name: "Reputation Management", href: "/mississauga/reputation-management" },
    { name: "Programmatic SEO", href: "/mississauga/programmatic-seo-service" },
  ],
  ctaHeadline: "The Mississauga map pack moves. Here's how to stay in it.",
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
  headline: "Local SEO in Toronto — map pack dominance",
  headlineAccent: "across every neighbourhood.",
  tagline:
    "Toronto's local search landscape is one of the most competitive in Canada. Winning isn't about being the best business — it's about having the strongest local signal infrastructure in your neighbourhood.",
  marketNote:
    "Toronto's 140+ distinct neighbourhoods function as separate micro-markets. A business in Leslieville doesn't compete against one in Etobicoke. We target your specific trade zone.",
  stats: [
    { value: "+312%", label: "Lead growth · client avg." },
    { value: "12 wks", label: "Avg. time to pack" },
    { value: "140+", label: "Neighbourhoods tracked" },
  ],
  mapPins: [
    { name: "Downtown Core", position: { top: "55%", left: "52%" }, rank: "#1 Pack Target" },
    { name: "Yorkville", position: { top: "35%", left: "50%" }, rank: "High competition" },
    { name: "Leslieville", position: { top: "48%", left: "72%" }, rank: "Targeting active" },
    { name: "Etobicoke", position: { top: "45%", left: "20%" }, rank: "Tracking" },
    { name: "North York", position: { top: "25%", left: "52%" } },
    { name: "Scarborough", position: { top: "40%", left: "78%" } },
  ],
  neighborhoods: [
    "Downtown Core", "Yorkville", "Leslieville", "Etobicoke", "North York", "Scarborough",
    "Annex", "Kensington", "Roncesvalles", "Liberty Village", "Distillery", "Leaside",
  ],
  marketAnalysis: {
    heading: "140+ micro-markets. One GBP won't cover them all.",
    body: "Toronto is Canada's largest city but it isn't one local market — it's 140+. The business in Roncesvalles doesn't compete against the one in Scarborough. We map your exact trade zone, identify the specific sub-markets where your customers search, and build the local signal infrastructure to dominate each one independently.",
    tableRows: [
      { label: "Population", value: "2,794,356" },
      { label: "Market status", value: "Extremely competitive — all service categories" },
      { label: "Neighbourhoods", value: "140+ distinct local markets" },
      { label: "Review delta (avg.)", value: "28–45 reviews behind pack #1" },
      { label: "Avg. time to pack", value: "12–20 weeks (competitive)" },
      { label: "Top verticals", value: "Legal · Dental · Real Estate · HVAC · Auto" },
    ],
  },
  process: [
    { phase: "Step 01", title: "Trade zone audit", body: "Map your exact trade zone. Identify the specific Toronto neighbourhoods where your customers are searching vs. where you're currently visible." },
    { phase: "Step 02", title: "GBP + citations", body: "Toronto-specific GBP configuration. Citation corrections across all major Canadian and Toronto-specific directories." },
    { phase: "Step 03", title: "Neighbourhood pages", body: "Custom landing pages for every priority Toronto neighbourhood. LocalBusiness schema. Internal linking architecture for Toronto micro-market mesh." },
    { phase: "Step 04", title: "Reviews + links", body: "Review generation system. Outreach to Toronto-specific directories, BIA associations, community boards, local press." },
    { phase: "Step 05", title: "Compound", body: "Monthly pack tracking across all priority Toronto neighbourhoods. Competitive intelligence reports on every business in your pack." },
  ],
  caseStudy: {
    headline: "Toronto dental clinic — #1 in Annex map pack in 18 weeks.",
    body: "A Toronto dental practice invisible in their own neighbourhood. We rebuilt GBP, fixed 52 citation inconsistencies, published landing pages for Annex, Roncesvalles, and Bloor West Village, and ran a review velocity programme. In 18 weeks: #1 in the Annex pack, +312% new patient enquiries.",
    metrics: [
      { value: "+312%", label: "New patients" },
      { value: "#1", label: "Annex pack" },
      { value: "+87", label: "Net reviews" },
    ],
  },
  otherCities: [
    { name: "Local SEO · Mississauga", href: "/mississauga/local-seo-service" },
    { name: "Local SEO · Brampton", href: "/brampton/local-seo-service" },
    { name: "Local SEO · Oakville", href: "/oakville/local-seo-service" },
    { name: "Local SEO · Markham", href: "/markham/local-seo-service" },
    { name: "Local SEO · Ottawa", href: "/ottawa/local-seo-service" },
    { name: "Local SEO · Hamilton", href: "/hamilton/local-seo-service" },
  ],
  otherServices: [
    { name: "Google Ads · Toronto", href: "/toronto/google-ads-management" },
    { name: "Web Design · Toronto", href: "/toronto/custom-web-design-service" },
    { name: "Content Marketing · Toronto", href: "/toronto/content-marketing-service" },
    { name: "Technical SEO · Toronto", href: "/toronto/technical-seo-service" },
    { name: "Reputation Management", href: "/toronto/reputation-management" },
    { name: "Programmatic SEO", href: "/toronto/programmatic-seo-service" },
  ],
  ctaHeadline: "Toronto is the most competitive local market in Canada. Let's win it.",
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
  headline: "Local SEO in Ottawa — dominate",
  headlineAccent: "the capital's map pack.",
  tagline:
    "Ottawa's local search market is mid-competition with exceptional opportunity for service businesses willing to invest in the right local signal infrastructure. Government employees, tech workers, and a stable economy mean high-value service queries all year.",
  marketNote:
    "Ottawa's bilingual market (English + French) creates a unique local SEO advantage for businesses that optimise GBP and content for both languages — most competitors ignore this entirely.",
  stats: [
    { value: "+187%", label: "Lead growth · client avg." },
    { value: "8 wks", label: "Avg. time to pack" },
    { value: "Bilingual", label: "SEO strategy" },
  ],
  mapPins: [
    { name: "Downtown Ottawa", position: { top: "50%", left: "50%" }, rank: "#1 Pack Target" },
    { name: "Kanata", position: { top: "30%", left: "20%" }, rank: "Tech district" },
    { name: "Nepean", position: { top: "60%", left: "30%" }, rank: "Targeting active" },
    { name: "Barrhaven", position: { top: "72%", left: "25%" }, rank: "Tracking" },
    { name: "Gloucester", position: { top: "40%", left: "72%" } },
    { name: "Gatineau", position: { top: "35%", left: "60%" } },
  ],
  neighborhoods: [
    "Downtown", "Kanata", "Nepean", "Barrhaven", "Gloucester", "Orléans",
    "Westboro", "The Glebe", "Sandy Hill", "Hull/Gatineau", "Alta Vista", "Vanier",
  ],
  marketAnalysis: {
    heading: "A bilingual city with a unique local SEO advantage.",
    body: "Ottawa's market is significantly less saturated than Toronto or Mississauga, which means well-executed local SEO achieves pack positions faster. The bilingual dimension (English and French search queries) is underexploited by most competitors — representing a genuine opportunity for businesses willing to invest in both-language optimisation.",
    tableRows: [
      { label: "Population", value: "1,017,449" },
      { label: "Market status", value: "Moderate competition — opportunity market" },
      { label: "Bilingual advantage", value: "High — most competitors ignore French queries" },
      { label: "Review delta (avg.)", value: "8–16 reviews behind pack #1" },
      { label: "Avg. time to pack", value: "6–12 weeks" },
      { label: "Top verticals", value: "Legal · Dental · HVAC · Trades · Government Consulting" },
    ],
  },
  process: [
    { phase: "Step 01", title: "Bilingual audit", body: "GBP audit with English and French query analysis. NAP corrections across Canadian directories plus Ottawa-specific local directories." },
    { phase: "Step 02", title: "GBP + citations", body: "Bilingual GBP configuration. Service-area setup for Ottawa sub-markets. Citation build across 45+ directories." },
    { phase: "Step 03", title: "Bilingual pages", body: "Neighbourhood landing pages in both English and French. Hreflang configuration. Local schema for Ottawa sub-markets." },
    { phase: "Step 04", title: "Reviews + links", body: "Review generation in both languages. Outreach to Ottawa BIAs, community organisations, Ottawa Citizen, CBC Ottawa." },
    { phase: "Step 05", title: "Compound", body: "Monthly pack tracking across all priority Ottawa neighbourhoods in both English and French queries." },
  ],
  caseStudy: {
    headline: "Ottawa HVAC company — #1 Kanata map pack in 8 weeks.",
    body: "An Ottawa HVAC contractor invisible outside their immediate postal code. We built the full GBP, corrected 24 citation inconsistencies, launched bilingual neighbourhood pages for Kanata, Nepean, and Barrhaven, and set up automated review requests. In 8 weeks: #1 in Kanata, +187% service call volume.",
    metrics: [
      { value: "+187%", label: "Service calls" },
      { value: "#1", label: "Kanata pack" },
      { value: "+42", label: "Net reviews" },
    ],
  },
  otherCities: [
    { name: "Local SEO · Toronto", href: "/toronto/local-seo-service" },
    { name: "Local SEO · Mississauga", href: "/mississauga/local-seo-service" },
    { name: "Local SEO · Brampton", href: "/brampton/local-seo-service" },
    { name: "Local SEO · Oakville", href: "/oakville/local-seo-service" },
    { name: "Local SEO · Hamilton", href: "/hamilton/local-seo-service" },
    { name: "Local SEO · Markham", href: "/markham/local-seo-service" },
  ],
  otherServices: [
    { name: "Google Ads · Ottawa", href: "/ottawa/google-ads-management" },
    { name: "Web Design · Ottawa", href: "/ottawa/custom-web-design-service" },
    { name: "Content Marketing · Ottawa", href: "/ottawa/content-marketing-service" },
    { name: "Technical SEO · Ottawa", href: "/ottawa/technical-seo-service" },
    { name: "Bilingual SEO", href: "/ottawa/bilingual-seo-service" },
    { name: "Programmatic SEO", href: "/ottawa/programmatic-seo-service" },
  ],
  ctaHeadline: "Ottawa's pack is winnable. Let's get you into it.",
};
