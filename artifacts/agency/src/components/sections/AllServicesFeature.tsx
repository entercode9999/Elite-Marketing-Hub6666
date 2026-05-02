import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Monitor, FileText, Settings, Bot, Check } from "lucide-react";

const SERVICES = [
  {
    id: "local-seo",
    label: "Local SEO",
    icon: MapPin,
    color: "#1a56ff",
    eyebrow: "Dominate the map pack",
    headline: "Every local search — your business, first.",
    sub: "Most competitors set up GBP once and hope. We actively manage the citation graph, review velocity, and geo-content that keeps you #1 across every city and neighbourhood you serve.",
    bullets: [
      "GBP optimisation, citation graph, review velocity — systemised",
      "#1 map pack positions across 40+ GTA sub-markets",
      "Neighbourhood-specific landing pages that win proximity battles",
    ],
    metric: { value: "+312%", label: "Avg lead growth, 12 months" },
    href: "/local-seo-service",
    image: "/local-business-bg.png",
    stat1: { v: "#1", l: "Map pack target" },
    stat2: { v: "30–90", l: "Days to movement" },
  },
  {
    id: "paid-ads",
    label: "Google Ads",
    icon: TrendingUp,
    color: "#ea4335",
    eyebrow: "Performance-first campaigns",
    headline: "Revenue from every click. Zero wasted spend.",
    sub: "No % of spend fees. No junior account managers after onboarding. Your campaigns are built and managed by a senior strategist from day one — with intent-layered architecture that converts.",
    bullets: [
      "Intent-layered keyword structure — transactional, mid-intent, branded",
      "Flat-fee management — no % of spend pricing, ever",
      "Google Ads + Local Service Ads + Performance Max, unified",
    ],
    metric: { value: "4.2x", label: "Avg blended ROAS" },
    href: "/google-ads-management",
    image: "/case-study-saas.png",
    stat1: { v: "-38%", l: "Avg CPA vs. prev. agency" },
    stat2: { v: "$0", l: "% of spend fees" },
  },
  {
    id: "web-design",
    label: "Web Design & CRO",
    icon: Monitor,
    color: "#059669",
    eyebrow: "Conversion-engineered websites",
    headline: "Sites built to convert — not just impress.",
    sub: "Every layout decision is tied to a conversion goal. We research, architect, and build websites with your funnel in mind — then test the funnel until it's the most efficient version of itself.",
    bullets: [
      "Custom-built around your specific funnel and conversion goal",
      "+28% average CVR lift across client CRO engagements",
      "Redesigns without ranking loss — full redirect map and monitoring",
    ],
    metric: { value: "+28%", label: "Avg conversion rate lift" },
    href: "/custom-web-design-service",
    image: "/case-study-ecommerce.png",
    stat1: { v: "< 2s", l: "Load time target" },
    stat2: { v: "100", l: "Lighthouse score target" },
  },
  {
    id: "content",
    label: "Content Marketing",
    icon: FileText,
    color: "#7c3aed",
    eyebrow: "Topical authority at scale",
    headline: "Content that compounds. Traffic that doesn't leave.",
    sub: "Not blog posts for the sake of it. We build topical authority clusters — structured content networks that signal to Google you're the definitive resource in your niche.",
    bullets: [
      "Topical authority clusters — 40–80 strategically linked pages",
      "E-E-A-T compliant, expert-written long-form content",
      "+312% organic traffic average at 12 months for cluster clients",
    ],
    metric: { value: "8x", label: "Avg content ROI" },
    href: "/content-marketing-service",
    image: "/case-study-dental.png",
    stat1: { v: "3–6 mo", l: "First rankings" },
    stat2: { v: "12 mo", l: "Compound authority" },
  },
  {
    id: "technical-seo",
    label: "Technical SEO",
    icon: Settings,
    color: "#0891b2",
    eyebrow: "Foundation-first SEO",
    headline: "Fix the foundation. Build traffic that lasts.",
    sub: "Technical SEO issues silently suppress every other marketing investment. We run deep audits that uncover crawl waste, Core Web Vitals failures, and structural problems — then fix them in-sprint.",
    bullets: [
      "Core Web Vitals, crawl budget, schema, redirect chains — audited",
      "Full site technical audit with prioritised fix roadmap",
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
    color: "#d97706",
    eyebrow: "AI-powered systems",
    headline: "Leads captured. Workflows automated. Revenue compounded.",
    sub: "Purpose-built AI systems — not off-the-shelf tool configurations. We build custom chatbots, workflow automation, and AI integrations that reduce operational overhead and capture leads 24/7.",
    bullets: [
      "Custom AI chatbots trained on your specific business context",
      "Workflow automation across CRM, email, and project management",
      "60% average reduction in manual task time for target processes",
    ],
    metric: { value: "24/7", label: "Lead capture coverage" },
    href: "/ai-chatbot-service",
    image: "/case-study-realestate.png",
    stat1: { v: "< 4 wks", l: "Implementation avg" },
    stat2: { v: "200+", l: "Tool integrations" },
  },
];

export function AllServicesFeature() {
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
    <section
      className="py-20 md:py-28 bg-background overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary block mb-3">Full service scope</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.04]">
              Every channel you need.
              <br />
              <span className="italic font-light text-muted-foreground">One team that owns them all.</span>
            </h2>
          </div>
          {/* Service dots nav */}
          <div className="flex items-center gap-2">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                style={{
                  background: active === i ? `${s.color}18` : "transparent",
                  color: active === i ? s.color : "rgba(0,0,0,0.3)",
                  border: `1.5px solid ${active === i ? s.color : "rgba(0,0,0,0.08)"}`,
                }}
              >
                <s.icon className="w-3 h-3" />
                <span className="hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main rotating panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-xl order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id + "-img"}
                src={current.image}
                alt={current.label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${current.color}22, transparent)` }} />

            {/* Bottom stats row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-stats"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="absolute bottom-5 left-5 right-5 flex items-end justify-between"
              >
                <div>
                  <p className="text-[9px] text-white/50 uppercase tracking-widest mb-1">{current.label}</p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-2xl font-black text-white">{current.stat1.v}</p>
                      <p className="text-[10px] text-white/50">{current.stat1.l}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">{current.stat2.v}</p>
                      <p className="text-[10px] text-white/50">{current.stat2.l}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-center">
                  <p className="text-2xl font-black text-white">{current.metric.value}</p>
                  <p className="text-[10px] text-white/60 max-w-[80px] leading-tight">{current.metric.label}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
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
          </div>

          {/* Right: rotating copy */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-copy"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className="text-[10px] font-black uppercase tracking-[0.25em] block mb-4"
                  style={{ color: current.color }}
                >
                  {current.eyebrow}
                </span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.06] mb-5">
                  {current.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7 max-w-lg">
                  {current.sub}
                </p>

                <ul className="space-y-3 mb-8">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${current.color}18` }}>
                        <Check className="w-3 h-3" style={{ color: current.color }} />
                      </div>
                      <span className="text-foreground/70 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 font-bold py-3 px-6 rounded-xl text-sm text-white transition-all group"
                    style={{ background: current.color }}
                  >
                    Explore {current.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-1.5">
                    {SERVICES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        className="rounded-full transition-all"
                        style={{
                          width: active === i ? 20 : 6,
                          height: 6,
                          background: active === i ? current.color : "rgba(0,0,0,0.15)",
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
    </section>
  );
}
