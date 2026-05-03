import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Monitor, FileText, Settings, Bot, Check } from "lucide-react";

const SERVICES = [
  {
    id: "local-seo",
    label: "Local SEO",
    icon: MapPin,
    color: "#4f8aff",
    eyebrow: "Dominate the map pack",
    headline: "Every local search — your business, first.",
    sub: "Most competitors set up GBP once and hope. We actively manage the citation graph, review velocity, and geo-content that keeps you #1 across every city and neighbourhood you serve.",
    bullets: [
      "GBP optimisation, citation graph, review velocity — systemised",
      "#1 map pack positions across 40+ GTA sub-markets",
      "Neighbourhood-specific landing pages that win proximity battles",
    ],
    metric: { value: "+312%", label: "Avg lead growth, 12 mo" },
    href: "/local-seo-service",
    image: "/local-business-bg.png",
    stat1: { v: "#1", l: "Map pack target" },
    stat2: { v: "30–90d", l: "To first movement" },
  },
  {
    id: "paid-ads",
    label: "Google Ads",
    icon: TrendingUp,
    color: "#ff6b5b",
    eyebrow: "Performance-first campaigns",
    headline: "Revenue from every click. Zero wasted spend.",
    sub: "No % of spend fees. No junior account managers after onboarding. Your campaigns are built and managed by a senior strategist from day one — with intent-layered architecture that converts.",
    bullets: [
      "Intent-layered keyword structure — transactional, mid-intent, branded",
      "Flat-fee management — no % of spend pricing, ever",
      "Google Ads + Local Service Ads + Performance Max, unified",
    ],
    metric: { value: "4.2×", label: "Avg blended ROAS" },
    href: "/google-ads-management",
    image: "/case-study-saas.png",
    stat1: { v: "-38%", l: "CPA vs. prev. agency" },
    stat2: { v: "$0", l: "% of spend fees" },
  },
  {
    id: "web-design",
    label: "Web Design & CRO",
    icon: Monitor,
    color: "#34d399",
    eyebrow: "Conversion-engineered websites",
    headline: "Sites built to convert — not just impress.",
    sub: "Every layout decision is tied to a conversion goal. We research, architect, and build websites with your funnel in mind — then test the funnel until it's the most efficient version of itself.",
    bullets: [
      "Custom-built around your specific funnel and conversion goal",
      "+28% average CVR lift across client CRO engagements",
      "Redesigns without ranking loss — full redirect map and monitoring",
    ],
    metric: { value: "+28%", label: "Avg CVR lift" },
    href: "/custom-web-design-service",
    image: "/case-study-ecommerce.png",
    stat1: { v: "< 2s", l: "Load time target" },
    stat2: { v: "100", l: "Lighthouse score" },
  },
  {
    id: "content",
    label: "Content Marketing",
    icon: FileText,
    color: "#a78bfa",
    eyebrow: "Topical authority at scale",
    headline: "Content that compounds. Traffic that doesn't leave.",
    sub: "Not blog posts for the sake of it. We build topical authority clusters — structured content networks that signal to Google you're the definitive resource in your niche.",
    bullets: [
      "Authority clusters: 40–80 strategically linked pages",
      "E-E-A-T compliant, expert-written long-form content",
      "+312% organic traffic at 12 months for cluster clients",
    ],
    metric: { value: "8×", label: "Avg content ROI" },
    href: "/content-marketing-service",
    image: "/case-study-dental.png",
    stat1: { v: "3–6 mo", l: "First rankings" },
    stat2: { v: "12 mo", l: "Compound authority" },
  },
  {
    id: "technical-seo",
    label: "Technical SEO",
    icon: Settings,
    color: "#38bdf8",
    eyebrow: "Foundation-first SEO",
    headline: "Fix the foundation. Build traffic that lasts.",
    sub: "Technical SEO issues silently suppress every other marketing investment. We run deep audits that uncover crawl waste, Core Web Vitals failures, and structural problems — then fix them in-sprint.",
    bullets: [
      "Core Web Vitals, crawl budget, schema, redirect chains — audited",
      "Full site audit with prioritised fix roadmap",
      "Fixes implemented in-sprint — not multi-year roadmaps",
    ],
    metric: { value: "-97%", label: "Avg crawl error reduction" },
    href: "/technical-seo-service",
    image: "/case-study-home.png",
    stat1: { v: "< 2s", l: "LCP target" },
    stat2: { v: "< 0.1", l: "CLS target" },
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: Bot,
    color: "#fbbf24",
    eyebrow: "AI-powered systems",
    headline: "Leads captured. Workflows automated. Revenue compounded.",
    sub: "Purpose-built AI systems — not off-the-shelf tool configurations. We build custom chatbots, workflow automation, and AI integrations that reduce operational overhead and capture leads 24/7.",
    bullets: [
      "Custom AI chatbots trained on your specific business context",
      "Workflow automation across CRM, email, and project management",
      "60% avg reduction in manual task time for target processes",
    ],
    metric: { value: "24/7", label: "Lead capture coverage" },
    href: "/ai-chatbot-service",
    image: "/case-study-realestate.png",
    stat1: { v: "< 4 wks", l: "Implementation avg" },
    stat2: { v: "200+", l: "Tool integrations" },
  },
];

export function HeroServicesPanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const current = SERVICES[active];

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((v) => (v + 1) % SERVICES.length);
    }, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const go = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPaused(false);
  };

  return (
    <div
      className="flex flex-col gap-5 w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Service pill tabs — 3 × 2 grid */}
      <div className="grid grid-cols-3 gap-2">
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all duration-300 w-full"
            style={{
              background: active === i ? `${s.color}22` : "rgba(255,255,255,0.05)",
              color: active === i ? s.color : "rgba(255,255,255,0.40)",
              border: `1.5px solid ${active === i ? s.color + "55" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <s.icon className="w-3 h-3 shrink-0" />
            <span className="truncate">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="grid grid-cols-[1fr_1fr] gap-4 items-stretch">
        {/* Image panel */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg" style={{ minHeight: 320 }}>
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-10">
            {!paused && (
              <motion.div
                key={active + "-bar"}
                className="h-full"
                style={{ background: current.color }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.img
              key={current.id + "-img"}
              src={current.image}
              alt={current.label}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${current.color}25, transparent 60%)` }} />

          {/* Stats overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-stats"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-5 left-5 right-5"
            >
              <p className="text-[9px] text-white/55 uppercase tracking-widest mb-2">{current.eyebrow}</p>
              <div className="flex items-end justify-between">
                <div className="flex gap-3">
                  <div>
                    <p className="text-xl font-black text-white leading-none">{current.stat1.v}</p>
                    <p className="text-[10px] text-white/55 mt-0.5">{current.stat1.l}</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-white leading-none">{current.stat2.v}</p>
                    <p className="text-[10px] text-white/55 mt-0.5">{current.stat2.l}</p>
                  </div>
                </div>
                <div
                  className="rounded-xl px-4 py-2 text-center"
                  style={{ background: `${current.color}22`, border: `1px solid ${current.color}44` }}
                >
                  <p className="text-lg font-black leading-none" style={{ color: current.color }}>{current.metric.value}</p>
                  <p className="text-[10px] text-white/55 max-w-[74px] leading-tight mt-0.5">{current.metric.label}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Copy panel */}
        <div className="flex flex-col justify-between py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-copy"}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.24em] block mb-3"
                  style={{ color: current.color }}
                >
                  {current.eyebrow}
                </span>
                <h3 className="text-[26px] font-black text-white leading-[1.06] mb-3">
                  {current.headline}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  {current.sub}
                </p>
                <ul className="space-y-2.5 mb-5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] text-white/70 leading-relaxed">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${current.color}25` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: current.color }} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 font-bold py-2.5 px-5 rounded-xl text-sm text-white transition-all group w-fit"
                  style={{ background: current.color }}
                >
                  Explore {current.label}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <div className="flex items-center gap-1">
                  {SERVICES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: active === i ? 16 : 5,
                        height: 5,
                        background: active === i ? current.color : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
