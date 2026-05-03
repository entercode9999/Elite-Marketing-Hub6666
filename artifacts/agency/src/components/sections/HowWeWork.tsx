import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const PHASES = [
  {
    number: "01",
    label: "Discovery & Audit",
    heading: "We find what's actually broken — not what looks broken on the surface.",
    body: "The first phase is forensics. We pull every data source you have: GA4, Search Console, Google Ads, Meta Business Manager, GBP, and your CRM if applicable. We map your current funnel from first touch to closed revenue, benchmark your competitor set, and produce a written diagnostic of exactly what's suppressing growth. Most clients learn things in this phase that their previous agency never flagged.",
    duration: "Weeks 1–2",
  },
  {
    number: "02",
    label: "Strategy Document",
    heading: "A clear plan that earns sign-off before anything is executed.",
    body: "The strategy document is a complete roadmap: your KPI baseline, the specific hypotheses we're testing, the channels we're activating, the content architecture we're building, and the exact metrics that determine success. You approve the plan. Nothing launches without your sign-off. No agency-speak, no vague deliverables — a clear roadmap with expected outcomes and the reasoning behind every decision.",
    duration: "Week 3",
  },
  {
    number: "03",
    label: "Build & Launch",
    heading: "Execution begins fast — because we front-loaded the thinking.",
    body: "Campaigns launch early. Web changes follow shortly after. Content clusters publish on a rolling schedule. We move fast because we spent the first phase doing the thinking properly. Our build sequence is designed around time-to-impact: paid channels first for immediate data, SEO architecture next for compound return, content and automation layered in as the strategic foundation stabilises.",
    duration: "Weeks 4–6",
  },
  {
    number: "04",
    label: "Optimise",
    heading: "We test into every hypothesis on the plan — and tell you what we learn.",
    body: "Every channel is on a structured optimisation cycle. Paid: weekly bid and audience reviews, bi-weekly creative refreshes. SEO: monthly content expansion and technical audits. CRO: conversion tests running on a minimum 14-day cycle. The weekly written update tells you what we tested, what we learned, and what we're doing differently next week. You're never wondering what we're doing — you're too busy reading what we found.",
    duration: "Months 2–3",
  },
  {
    number: "05",
    label: "Compound",
    heading: "The work done in the first quarter pays dividends in the fourth.",
    body: "Most agencies are monthly service providers. We build systems that compound. The content we write in month two generates traffic in month eighteen. The citation infrastructure we build protects your map pack position for years. The CRO work from month three increases the value of every future paid click. We design every engagement with the twelve-month outcome in mind — not the next invoice.",
    duration: "Month 4+",
  },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const current = PHASES[active];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#e5e2d9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Our process</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight">
              How every engagement
              <br />
              <span className="italic font-light text-gray-400">actually works.</span>
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Every engagement follows the same five-phase architecture — built over ten years of learning what works and what doesn't. There are no surprises in how we operate, because we tell you exactly what to expect before we start.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-black/80 transition-colors"
            >
              Start with a free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* ── Phase selector tabs ── */}
        <div className="flex items-stretch gap-0 mb-0 border border-[#e5e2d9] rounded-t-2xl overflow-hidden">
          {PHASES.map((phase, i) => (
            <button
              key={phase.number}
              onClick={() => setActive(i)}
              className={`flex-1 relative group flex flex-col items-center justify-center gap-1 px-2 py-4 md:py-5 transition-all border-r border-[#e5e2d9] last:border-r-0 text-center ${
                active === i
                  ? "bg-[#0e0e0e] text-white"
                  : "bg-[#f9f8f5] hover:bg-[#f2f1ed] text-gray-500"
              }`}
            >
              {/* Active indicator bar */}
              {active === i && (
                <motion.div
                  layoutId="activePhaseBar"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
              <span className={`text-[10px] font-black tracking-[0.15em] uppercase leading-none ${active === i ? "text-primary" : "text-gray-300 group-hover:text-gray-400"}`}>
                {phase.number}
              </span>
              <span className={`text-[10px] font-bold leading-tight ${active === i ? "text-white" : "text-gray-500"}`}>
                {phase.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Phase content panel ── */}
        <div className="border border-t-0 border-[#e5e2d9] rounded-b-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px]"
            >
              {/* Main content */}
              <div className="p-8 md:p-10 bg-white border-r border-[#e5e2d9]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-5xl font-black text-primary/10 leading-none">{current.number}</span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">{current.label}</p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{current.duration}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-[#0e0e0e] leading-snug mb-4">
                  {current.heading}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{current.body}</p>
              </div>

              {/* Side: phase navigator */}
              <div className="bg-[#f9f8f5] p-6 flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">All phases</p>
                {PHASES.map((phase, i) => (
                  <button
                    key={phase.number}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      active === i
                        ? "bg-[#0e0e0e] shadow-sm"
                        : "hover:bg-white/70"
                    }`}
                  >
                    <span className={`text-xs font-black tabular-nums shrink-0 ${active === i ? "text-primary" : "text-gray-300"}`}>
                      {phase.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold truncate ${active === i ? "text-white" : "text-gray-600"}`}>
                        {phase.label}
                      </p>
                      <p className={`text-[10px] ${active === i ? "text-white/40" : "text-gray-400"}`}>
                        {phase.duration}
                      </p>
                    </div>
                    {active === i && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
