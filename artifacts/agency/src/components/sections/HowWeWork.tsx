import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PHASES = [
  {
    number: "01",
    label: "Discovery & Audit",
    heading: "We find what's actually broken — not what looks broken on the surface.",
    body: "Week one is forensics. We pull every data source you have: GA4, Search Console, Google Ads, Meta Business Manager, GBP, and your CRM if applicable. We map your current funnel from first touch to closed revenue, benchmark your competitor set, and produce a written diagnostic of exactly what's suppressing growth. Most clients learn things in week one that their previous agency never flagged.",
    duration: "Week 1",
  },
  {
    number: "02",
    label: "Strategy Document",
    heading: "A 30/60/90 plan that earns sign-off before anything is executed.",
    body: "The week-three deliverable is a complete strategy document: your KPI baseline, the specific hypotheses we're testing, the channels we're activating, the content architecture we're building, and the exact metrics that determine success at 30, 60, and 90 days. You approve the plan. Nothing launches without your sign-off. No agency-speak, no vague 'deliverables' — a clear roadmap with expected outcomes and the reasoning behind every decision.",
    duration: "Week 2–3",
  },
  {
    number: "03",
    label: "Build & Launch",
    heading: "Execution week four — not month four.",
    body: "Campaigns launch in week four. Web changes are live in weeks four through six. Content clusters publish on a rolling schedule from month two. We move fast because we front-loaded the thinking. Our build sequence is designed around time-to-impact: paid channels first for immediate data, SEO architecture next for compound return, content and automation layered in as the strategic foundation stabilises.",
    duration: "Week 4–8",
  },
  {
    number: "04",
    label: "Optimise",
    heading: "We test into every hypothesis on the plan — and tell you what we learn.",
    body: "Every channel is on a structured optimisation cycle. Paid: weekly bid and audience reviews, bi-weekly creative refreshes. SEO: monthly content expansion and technical audits. CRO: conversion tests running on a 14-day cycle minimum. The weekly written update tells you what we tested, what we learned, and what we're doing differently next week. You're never wondering what we're doing — you're too busy reading what we found.",
    duration: "Month 2–3",
  },
  {
    number: "05",
    label: "Compound",
    heading: "The work we did in month three pays dividends in month twelve.",
    body: "Most agencies are monthly service providers. We build systems that compound. The content we wrote in month two will generate traffic in month eighteen. The citation infrastructure we built will protect your map pack position for years. The CRO work we ran in month three has already increased the value of every future paid click. We design every engagement with the twelve-month outcome in mind — not the next invoice.",
    duration: "Month 4+",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32 bg-[#f9f8f5] border-t border-[#e5e2d9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">How we work</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight">
              Five phases.
              <br />
              <span className="italic font-light text-gray-400">No surprises.</span>
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Every engagement follows the same architecture — built over ten years of learning what works. Here's exactly what you can expect from day one to month twelve.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-black/80 transition-colors"
            >
              Start with a free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-0 border border-[#e5e2d9] rounded-2xl overflow-hidden">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`grid grid-cols-1 md:grid-cols-[80px_160px_1fr] gap-6 p-7 border-b border-[#e5e2d9] last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[#f9f8f5]"
              }`}
            >
              {/* Number */}
              <div className="flex items-start">
                <span className="text-3xl font-black text-primary/20">{phase.number}</span>
              </div>
              {/* Label + duration */}
              <div>
                <p className="font-black text-sm text-[#0e0e0e] mb-1">{phase.label}</p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded">
                  {phase.duration}
                </span>
              </div>
              {/* Content */}
              <div>
                <h3 className="font-black text-base text-[#0e0e0e] mb-2 leading-snug">{phase.heading}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{phase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
