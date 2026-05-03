import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const PHASES = [
  {
    number: "01",
    label: "Discovery & Audit",
    heading: "We find what's actually broken — not what looks broken on the surface.",
    body: "We pull every data source you have, map the full funnel, benchmark competitors, and isolate the bottlenecks suppressing growth.",
    duration: "Weeks 1–2",
    bullets: ["GA4, Search Console, Ads, CRM review", "Funnel + competitor gap analysis", "Written diagnostic of growth blockers"],
  },
  {
    number: "02",
    label: "Strategy Document",
    heading: "A clear plan that earns sign-off before anything is executed.",
    body: "You get a roadmap with KPI baselines, hypotheses, channel priorities, content architecture, and the exact metrics that define success.",
    duration: "Week 3",
    bullets: ["30/60/90 roadmap", "Clear hypotheses and priorities", "Nothing launches without approval"],
  },
  {
    number: "03",
    label: "Build & Launch",
    heading: "Execution begins fast — because we front-loaded the thinking.",
    body: "We launch the highest-leverage work first, then layer in SEO, content, and automation once the foundation is set.",
    duration: "Weeks 4–6",
    bullets: ["Paid channels first for quick signal", "SEO architecture next", "Content + automation in sequence"],
  },
  {
    number: "04",
    label: "Optimise",
    heading: "We test into every hypothesis on the plan — and tell you what we learn.",
    body: "Weekly channel reviews, structured testing, and clear reporting keep the work moving and the learning visible.",
    duration: "Months 2–3",
    bullets: ["Weekly paid reviews", "Monthly SEO/CRO audits", "Every update tied to a learning"],
  },
  {
    number: "05",
    label: "Compound",
    heading: "The work done in the first quarter pays dividends in the fourth.",
    body: "We build systems that keep compounding long after launch — so the value keeps growing over time.",
    duration: "Month 4+",
    bullets: ["Content compounds", "Technical groundwork protects gains", "Every decision is made for long-term return"],
  },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const current = PHASES[active];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#e5e2d9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start mb-14">
          <div className="lg:sticky lg:top-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Our process</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight mb-5">
              How every engagement
              <br />
              <span className="italic font-light text-gray-400">actually works.</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-sm">
              Five clear phases. No mystery, no hand-waving — just the way we turn strategy into measurable growth.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-black/80 transition-colors"
            >
              Start with a free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {PHASES.map((phase, i) => (
                <button
                  key={phase.number}
                  onClick={() => setActive(i)}
                  className={`rounded-2xl border p-4 text-left transition-all ${active === i ? "border-primary bg-[#0e0e0e] text-white shadow-lg shadow-black/10" : "border-[#e5e2d9] bg-[#f9f8f5] hover:bg-white"}`}
                >
                  <div className={`text-[10px] font-black tracking-[0.18em] uppercase mb-2 ${active === i ? "text-primary" : "text-gray-400"}`}>
                    {phase.number}
                  </div>
                  <div className={`text-sm font-bold leading-snug ${active === i ? "text-white" : "text-[#0e0e0e]"}`}>
                    {phase.label}
                  </div>
                  <div className={`text-[11px] mt-1 ${active === i ? "text-white/45" : "text-gray-400"}`}>
                    {phase.duration}
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-3xl border border-[#e5e2d9] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="p-8 md:p-10 bg-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl">
                        {current.number}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">{current.label}</p>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">{current.duration}</p>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-snug mb-4 max-w-xl">
                      {current.heading}
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                      {current.body}
                    </p>
                  </div>

                  <div className="bg-[#f9f8f5] p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-[#e5e2d9]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-5">What happens here</p>
                    <div className="space-y-4">
                      {current.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
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
