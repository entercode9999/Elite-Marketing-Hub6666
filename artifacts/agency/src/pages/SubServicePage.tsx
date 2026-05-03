import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { useSeo } from "@/hooks/useSeo";
import { ArrowRight, Check, ChevronRight, Clock, BarChart2, Zap, Shield } from "lucide-react";

export interface SubServiceData {
  parentLabel: string;
  parentHref: string;
  label: string;
  headline: string;
  italic: string;
  subhead: string;
  stats: { value: string; label: string }[];
  deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  cta: string;
  tools?: string[];
  industryContext?: { stat: string; label: string; context: string }[];
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className={`text-[15px] font-bold leading-snug transition-colors ${open ? "text-primary" : "text-[#0e0e0e] group-hover:text-primary"}`}>
          {q}
        </span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all" style={{ background: open ? "#1a56ff" : "rgba(0,0,0,0.05)" }}>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90 text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
            <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-8 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Category-specific visual ── */
function CategoryVisual({ parent }: { parent: string }) {
  if (parent.includes("Local SEO")) return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">Live map pack positions</p>
      {["#1 — Toronto · Dental", "#1 — Mississauga · HVAC", "#2 — Ottawa · Legal", "#1 — Brampton · Auto"].map((r, i) => (
        <div key={r} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-black text-primary">{i + 1}</span>
          </div>
          <span className="text-xs text-white/55">{r}</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-end gap-1 h-12">
          {[20, 35, 28, 45, 55, 60, 70, 65, 80, 88, 95, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#1a56ff" : "rgba(26,86,255,0.15)" }} />
          ))}
        </div>
        <p className="text-[9px] text-white/25 mt-1">Lead volume trend — 12mo</p>
      </div>
    </div>
  );

  if (parent.includes("Google Ads") || parent.includes("Paid")) return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">Campaign performance</p>
      {[{ l: "ROAS", v: "4.2x", c: "#22c55e" }, { l: "CPA vs prev.", v: "-38%", c: "#22c55e" }, { l: "% of spend fee", v: "$0", c: "#1a56ff" }, { l: "Quality Score avg", v: "8.4 / 10", c: "#f59e0b" }].map((s) => (
        <div key={s.l} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <span className="text-xs text-white/45">{s.l}</span>
          <span className="text-xs font-black" style={{ color: s.c }}>{s.v}</span>
        </div>
      ))}
      <div className="mt-4 h-10 flex items-end gap-1">
        {[30, 40, 35, 55, 50, 70, 65, 80, 75, 90, 88, 100].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#ea4335" : "rgba(234,67,53,0.15)" }} />
        ))}
      </div>
    </div>
  );

  if (parent.includes("Web Design") || parent.includes("CRO")) return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">Conversion metrics</p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[{ l: "CVR lift", v: "+28%", c: "#059669" }, { l: "Load time", v: "< 2s", c: "#059669" }, { l: "Lighthouse", v: "98/100", c: "#22c55e" }, { l: "Mobile pass", v: "100%", c: "#22c55e" }].map((s) => (
          <div key={s.l} className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-lg font-black" style={{ color: s.c }}>{s.v}</p>
            <p className="text-[9px] text-white/35">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="h-8 flex items-end gap-1">
        {[35, 40, 38, 50, 45, 60, 58, 70, 72, 80, 85, 100].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#059669" : "rgba(5,150,105,0.15)" }} />
        ))}
      </div>
    </div>
  );

  if (parent.includes("Content")) return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">Organic growth trajectory</p>
      <div className="h-20 flex items-end gap-1 mb-4">
        {[5, 8, 10, 15, 18, 25, 30, 42, 55, 70, 85, 100].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#7c3aed" : "rgba(124,58,237,0.15)" }} />
        ))}
      </div>
      {[{ l: "Pages ranked top 10", v: "1,100+" }, { l: "Avg time to rank", v: "4.2 months" }, { l: "Content ROI", v: "8x avg" }].map((s) => (
        <div key={s.l} className="flex justify-between py-1.5 border-b border-white/5 last:border-0">
          <span className="text-xs text-white/45">{s.l}</span>
          <span className="text-xs font-black text-purple-400">{s.v}</span>
        </div>
      ))}
    </div>
  );

  if (parent.includes("Technical")) return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">Audit scorecard</p>
      {[{ l: "Crawl errors", before: 142, after: 0, pct: 100, c: "#22c55e" }, { l: "Core Web Vitals", before: 38, after: 97, pct: 97, c: "#22c55e" }, { l: "Page speed", before: 44, after: 96, pct: 96, c: "#1a56ff" }, { l: "Schema coverage", before: 12, after: 94, pct: 94, c: "#0891b2" }].map((item) => (
        <div key={item.l} className="mb-3">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-white/45">{item.l}</span>
            <span className="font-bold" style={{ color: item.c }}>{item.before} → {item.after}</span>
          </div>
          <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.c }} />
          </div>
        </div>
      ))}
    </div>
  );

  // AI default
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
      <p className="text-[9px] font-black uppercase tracking-widest text-white/25 mb-4">AI system metrics</p>
      {[{ l: "Lead response time", v: "< 3 seconds" }, { l: "Coverage", v: "24/7" }, { l: "Manual task reduction", v: "60% avg" }, { l: "CRM sync", v: "Real-time" }].map((s) => (
        <div key={s.l} className="flex justify-between py-2 border-b border-white/5 last:border-0">
          <span className="text-xs text-white/45">{s.l}</span>
          <span className="text-xs font-black text-amber-400">{s.v}</span>
        </div>
      ))}
      <div className="mt-4 h-8 flex items-end gap-1">
        {[20, 30, 25, 40, 45, 55, 60, 70, 75, 80, 90, 100].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#d97706" : "rgba(217,119,6,0.15)" }} />
        ))}
      </div>
    </div>
  );
}

/* ── Tools by category ── */
function getTools(parent: string): string[] {
  if (parent.includes("Local SEO")) return ["Google Business Profile", "BrightLocal", "Ahrefs", "Semrush", "Whitespark", "Google Search Console", "Screaming Frog"];
  if (parent.includes("Google Ads") || parent.includes("Paid")) return ["Google Ads", "Google Analytics 4", "Google Merchant Center", "Meta Ads Manager", "Triple Whale", "Northbeam", "Looker Studio"];
  if (parent.includes("Web Design") || parent.includes("CRO")) return ["Figma", "Webflow", "WordPress", "Hotjar", "Clarity", "VWO", "Google Optimize", "GA4", "Lighthouse"];
  if (parent.includes("Content")) return ["Ahrefs", "Semrush", "Surfer SEO", "Frase", "Notion", "Clearscope", "Google Search Console", "Klaviyo"];
  if (parent.includes("Technical")) return ["Screaming Frog", "Google Search Console", "PageSpeed Insights", "WebPageTest", "Sitebulb", "Schema Markup Validator", "Ahrefs"];
  return ["OpenAI API", "n8n", "Make (Integromat)", "Zapier", "Pinecone", "LangChain", "HubSpot API", "Vercel"];
}

/* ── 90-day timeline milestones ── */
function getTimeline(parent: string): { week: string; milestone: string }[] {
  if (parent.includes("Local SEO")) return [
    { week: "Week 1–2", milestone: "Full audit: GBP, citations, competitor gap analysis" },
    { week: "Week 3–4", milestone: "Fixes deployed: GBP rebuild, citation corrections, initial content" },
    { week: "Week 5–8", milestone: "First map pack movement measurable on priority queries" },
    { week: "Week 9–12", milestone: "Review velocity building, landing pages live, rank consolidation" },
  ];
  if (parent.includes("Google Ads") || parent.includes("Paid")) return [
    { week: "Week 1", milestone: "Account audit + strategy build, conversion tracking verified" },
    { week: "Week 2", milestone: "Campaigns launched: structure, copy, extensions, negatives" },
    { week: "Week 3–4", milestone: "Daily optimisation: query mining, bid adjustments, QS improvement" },
    { week: "Week 5–12", milestone: "CPA tracking toward target, ROAS optimisation begins" },
  ];
  if (parent.includes("Web Design") || parent.includes("CRO")) return [
    { week: "Week 1–2", milestone: "Audit: heatmaps, session recordings, GA4 funnel analysis" },
    { week: "Week 3–4", milestone: "Hypotheses built, first A/B tests launched on priority pages" },
    { week: "Week 5–8", milestone: "First winning variants identified and implemented as new control" },
    { week: "Week 9–12", milestone: "CVR improvement confirmed in GA4, next test cycle launched" },
  ];
  if (parent.includes("Content")) return [
    { week: "Week 1–2", milestone: "Topical map built, keyword priorities confirmed" },
    { week: "Week 3–4", milestone: "Pillar pages and first cluster articles live" },
    { week: "Week 5–8", milestone: "Ongoing cluster publishing, internal links connecting cluster" },
    { week: "Week 9–12", milestone: "First ranking data emerging, content calendar in full swing" },
  ];
  if (parent.includes("Technical")) return [
    { week: "Week 1", milestone: "Full technical audit: crawl, CWV, schema, redirects, log files" },
    { week: "Week 2–3", milestone: "Priority fixes implemented: crawl errors, redirects, schema" },
    { week: "Week 4–6", milestone: "Core Web Vitals fixes deployed and verified in PageSpeed Insights" },
    { week: "Week 7–12", milestone: "Post-fix monitoring, CrUX data confirms improvement, next audit cycle" },
  ];
  return [
    { week: "Week 1", milestone: "Discovery: process mapping, stack audit, use case prioritisation" },
    { week: "Week 2–3", milestone: "Build: automation flows, AI model configuration, integrations" },
    { week: "Week 4", milestone: "Testing in staging environment, edge case handling, documentation" },
    { week: "Week 5+", milestone: "Production deployment, 30-day monitoring period, handoff + training" },
  ];
}

export function SubServicePage({ data }: { data: SubServiceData }) {
  const tools = data.tools ?? getTools(data.parentLabel);
  const timeline = getTimeline(data.parentLabel);
  const canonicalPath = typeof window !== "undefined" ? window.location.pathname : undefined;
  const subServiceSchema: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outliermarketing.ca/" },
        { "@type": "ListItem", "position": 2, "name": data.parentLabel, "item": `https://outliermarketing.ca${data.parentHref}` },
        { "@type": "ListItem", "position": 3, "name": data.label, "item": `https://outliermarketing.ca${canonicalPath ?? ""}` },
      ],
    },
    {
      "@type": "Service",
      "name": data.label,
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
    title: `${data.label} | Outlier`,
    description: data.subhead.slice(0, 160),
    canonicalPath,
    schema: subServiceSchema,
  });

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-white">
      <Nav />

      {/* ── HERO — dark split ── */}
      <section className="min-h-[480px] grid grid-cols-1 md:grid-cols-2 pt-[68px]">
        {/* Left: dark */}
        <div className="bg-[#08090d] flex flex-col justify-center px-10 lg:px-16 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/15">›</span>
              <Link href={data.parentHref} className="hover:text-primary transition-colors">{data.parentLabel}</Link>
              <span className="text-white/15">›</span>
              <span className="text-white/50">{data.label}</span>
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">{data.label}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-6">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">{data.subhead}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
                Get a free audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={data.parentHref} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all">
                {data.parentLabel} overview →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: stats + visual on light bg */}
        <div className="bg-[#f2f2ef] flex flex-col items-center justify-center px-8 py-16 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            {/* Stat row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 border border-[#e5e2d9] shadow-sm text-center">
                  <p className="text-2xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            {/* Category visual (dark card) */}
            <CategoryVisual parent={data.parentLabel} />
          </motion.div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <div className="border-t border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── INDUSTRY CONTEXT STATS BAR ── */}
      <div className="bg-white border-y border-[#e5e2d9]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e2d9]">
            {(data.industryContext ?? [
              { stat: "70%", label: "Of businesses", context: "never reach page 1 of Google without a structured service strategy" },
              { stat: "3x", label: "Higher close rate", context: "when leads are generated through inbound vs. cold outreach" },
              { stat: "12 mo", label: "Compounding", context: "most service investments build on themselves and become cheaper over time" },
            ]).map((item) => (
              <div key={item.label} className="text-center px-4 py-2">
                <p className="text-4xl font-black text-[#0e0e0e] mb-1">{item.stat}</p>
                <p className="text-xs font-bold text-primary mb-1">{item.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DELIVERABLES ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Everything included</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12 leading-tight">What we deliver every engagement.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.deliverables.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex gap-4 p-6 border border-[#e5e2d9] rounded-2xl hover:border-primary/30 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-xs font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0e0e0e] mb-1.5 group-hover:text-primary transition-colors">{d.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 90-DAY TIMELINE ── */}
      <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">What to expect</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Your first 90 days.</h2>
          <div className="space-y-0">
            {timeline.map((step, i) => (
              <motion.div key={step.week} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start py-5 border-b border-[#e5e2d9] last:border-0">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-black text-primary">{i + 1}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 w-full pt-1">
                  <p className="text-xs font-black text-primary uppercase tracking-wider">{step.week}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.milestone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">How we work</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">How the engagement works.</h2>
          <div className="space-y-0">
            {data.process.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start py-5 border-b border-[#e5e2d9] last:border-0">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 pt-1">
                  <p className="font-bold text-[#0e0e0e]">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="py-14 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-6 block">Tools in our stack</span>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 bg-white border border-[#e5e2d9] rounded-full text-xs font-semibold text-gray-600 hover:text-primary hover:border-primary/30 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTLIER vs TYPICAL AGENCY ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Outlier vs. typical agency</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Why clients leave their previous agency for us.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-5">Typical agency</p>
              {["Junior team after onboarding", "Monthly reports you can't interpret", "% of ad spend pricing (they earn more when you spend more)", "Lock-in contracts", "Strategy calls once a quarter", "Vanity metrics — impressions, reach, rankings"].map((item) => (
                <div key={item} className="flex gap-3 py-2.5 border-b border-red-100 last:border-0">
                  <span className="text-red-400 text-xs font-bold shrink-0 mt-0.5">✕</span>
                  <p className="text-xs text-gray-500 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-5">Outlier</p>
              {["Senior strategist on your account, always", "Plain-English monthly report + 30-min call", "Flat-fee management — we earn more when you spend better", "No lock-in. Monthly rolling agreements", "Direct Slack access to your strategist", "Revenue and lead metrics — what actually matters"].map((item) => (
                <div key={item} className="flex gap-3 py-2.5 border-b border-primary/8 last:border-0">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ + RELATED ── */}
      <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <div className="mb-12 text-center lg:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">FAQ</span>
              <h2 className="text-4xl font-black text-[#0e0e0e]">Common questions.</h2>
            </div>
            <div className="space-y-3">
              {data.faq.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
          <div className="pt-16">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5">Related services</p>
            <div className="space-y-2">
              {data.related.map((r) => (
                <Link key={r.label} href={r.href}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-[#e5e2d9] bg-white hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-500 group">
                  {r.label}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            <div className="mt-8 p-5 bg-white border border-[#e5e2d9] rounded-2xl">
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-4">Why clients choose us</p>
              {[
                { icon: Shield, text: "No lock-in contracts" },
                { icon: Clock, text: "Results visible in 30 days" },
                { icon: BarChart2, text: "Revenue-first reporting" },
                { icon: Zap, text: "Senior team, always" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 py-2 border-b border-[#e5e2d9] last:border-0">
                  <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-xs text-gray-500">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#08090d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Ready to start?</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">{data.cta}</h2>
          <p className="text-base text-white/40 mb-8 max-w-md mx-auto leading-relaxed">
            Free audit — no commitment. We'll show you exactly where you stand and what moving the needle looks like for your specific situation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-lg shadow-primary/25">
              Book your free audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href={data.parentHref} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-sm transition-all">
              View {data.parentLabel} overview →
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            {["No lock-in", "Results in 30 days", "Senior team only"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-white/25">
                <Check className="w-3 h-3 text-primary/50" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
