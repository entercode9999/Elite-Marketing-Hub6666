import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const DIFFERENTIATORS = [
  {
    number: "01",
    heading: "No percentage-of-spend billing. Ever.",
    body: "Most agencies charge a cut of your ad budget — meaning their revenue scales when yours doesn't. We charge a flat strategic fee. Our only incentive is performance, not consumption. Every dollar you spend goes to media, not margin.",
    stat: "Flat fee",
    statLabel: "Always",
  },
  {
    number: "02",
    heading: "Senior team from day one. No hand-offs.",
    body: "You get a senior strategist as your day-to-day owner — not a sales team that disappears at signing. Your account isn't handed to a junior after onboarding. The person who audits your business builds the strategy and manages the execution.",
    stat: "Day 1",
    statLabel: "Senior access",
  },
  {
    number: "03",
    heading: "Strategy before a single dollar of spend.",
    body: "The first three weeks aren't execution — they're forensics. We audit your analytics, your competitor set, your funnel, and your market positioning before we recommend a single campaign. The strategy document you receive is the rarest thing in this industry: honest diagnosis.",
    stat: "3 wks",
    statLabel: "Strategy-first",
  },
  {
    number: "04",
    heading: "One team. Every channel. No coordination tax.",
    body: "When your SEO, paid search, content, and CRO are run by different agencies, no one owns the outcome. Our team handles every channel internally. That means insight flows across disciplines — and accountability flows to one place.",
    stat: "1 team",
    statLabel: "All channels",
  },
  {
    number: "05",
    heading: "Live dashboards. No 'report coming next week.'",
    body: "You have access to a real-time Looker Studio dashboard from day one. Every metric we track is tied to a revenue outcome — not a vanity number. Weekly written updates. Monthly deep-dive calls. You always know what's working and what isn't.",
    stat: "24/7",
    statLabel: "Live reporting",
  },
  {
    number: "06",
    heading: "No lock-in. 94% retention because the work performs.",
    body: "Standard retainers are 6-month initial terms then month-to-month. We've deliberately kept exit easy because we believe retention has to be earned. Our 94% client retention rate isn't a contract clause — it's a track record.",
    stat: "94%",
    statLabel: "Retention rate",
  },
];

const PROOF_STATS = [
  { value: "94%", label: "Client retention" },
  { value: "10+", label: "Years operating" },
  { value: "65+", label: "Brands grown" },
  { value: "4.9★", label: "Clutch rating" },
];

export function WhyOutlier() {
  return (
    <section className="py-24 md:py-32 bg-[#08090d] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* ── LEFT: Sticky header ── */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-5">Why Outlier</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.04] tracking-tight mb-6">
              Six ways we work
              <br />
              <span className="italic font-light text-gray-500">differently.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              We're a small, focused agency — intentionally built for execution over scale. What matters isn't how many services we offer, but whether our systems generate real inbound leads for your business.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-10">
              These aren't aspirational values. They're operational choices we've made — and that clients notice within the first 30 days.
            </p>

            {/* Proof stats grid */}
            <div className="border border-white/10 rounded-2xl p-6 mb-10 grid grid-cols-2 gap-5">
              {PROOF_STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white leading-none mb-1">{s.value}</p>
                  <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-7 rounded-xl text-sm transition-all group"
            >
              Start with a free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ── RIGHT: Differentiator rows ── */}
          <div className="divide-y divide-white/8">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                className="group py-7 flex items-start gap-6 hover:bg-white/2 transition-colors rounded-xl px-2 -mx-2 cursor-default"
              >
                {/* Number */}
                <div className="shrink-0 w-12 pt-0.5">
                  <span className="text-4xl font-black leading-none text-white/8 group-hover:text-primary/25 transition-colors">
                    {d.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2.5">
                    <h3 className="font-black text-white text-[15px] leading-snug group-hover:text-white transition-colors">
                      {d.heading}
                    </h3>
                    {/* Inline stat badge */}
                    <div className="shrink-0 text-right hidden sm:block">
                      <p className="text-base font-black text-primary leading-none">{d.stat}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5 whitespace-nowrap">{d.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
