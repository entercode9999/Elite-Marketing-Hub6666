import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Do you work with small or local businesses?",
    a: "Yes — local businesses are one of our strongest practice areas. We work with single-location dental clinics, limo companies, home service brands, real estate teams and more. Our Local SEO + Reputation engine is purpose-built for owner-operators.",
  },
  {
    q: "How is pricing structured?",
    a: "Three models: project (one-off scope), monthly retainer (most clients), or performance-based for select brands. We'll recommend the right fit on the call based on your stage, goals, and what we can actually deliver for you.",
  },
  {
    q: "What does the first 30 days look like?",
    a: "Week 1: deep audit of analytics, SEO, paid accounts, CRM, and creative. Week 2: 30/60/90 strategy doc + KPI baseline. Weeks 3-4: execution kickoff with your dedicated pod and weekly cadence locked in.",
  },
  {
    q: "How quickly should I expect results?",
    a: "Paid: meaningful CPA improvements within 30-60 days. SEO: directional wins within 90 days, compounding traffic from month 4-6. Local SEO/GBP: map pack movement often visible inside 30 days. We're transparent about timelines from day one.",
  },
  {
    q: "Are there long-term contracts?",
    a: "Standard retainers are 6-month initial terms then month-to-month. Performance-tied engagements are 12 months. We don't believe in trapping clients — 94% retention is because the work performs.",
  },
  {
    q: "Will I work with senior people or get handed off?",
    a: "Every account has a senior strategist as the day-to-day owner, plus channel specialists (SEO, paid, creative, dev) as needed. No junior-only accounts. Founder access for performance-tier clients.",
  },
  {
    q: "How is reporting handled?",
    a: "Live Looker Studio dashboards from day one, weekly written updates, monthly deep-dive review calls. Every metric tied to revenue, not vanity. You'll always know what's working and what isn't.",
  },
  {
    q: "What makes Outlier different from other agencies?",
    a: "Three things: a strategy-first approach (we don't execute without a clear hypothesis), a true full-service team under one roof (no vendor coordination tax), and an unusual depth in SEO — especially programmatic and local — which compounds while paid keeps the lights on.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-[#e5e2d9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight mb-5">
              Answers,
              <br />
              <span className="italic font-light text-gray-400">before you ask.</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
              Don't see your question? Drop it on the strategy call — we answer everything candidly, even if the answer is that we're not the right fit.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all group"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-[#e5e2d9]">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                >
                  <span className={`text-[15px] font-bold leading-snug transition-colors ${open === i ? "text-primary" : "text-[#0e0e0e] group-hover:text-primary"}`}>
                    {faq.q}
                  </span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all"
                    style={{ background: open === i ? "#1a56ff" : "rgba(0,0,0,0.05)" }}
                  >
                    {open === i
                      ? <Minus className="w-3.5 h-3.5 text-white" />
                      : <Plus className="w-3.5 h-3.5 text-gray-500" />
                    }
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-8 max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
