import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DIFFERENTIATORS = [
  {
    number: "01",
    heading: "No percentage-of-spend billing. Ever.",
    body: "Most agencies charge a cut of your ad budget — meaning their revenue scales when yours doesn't. We charge a flat strategic fee. Our only incentive is performance, not consumption. Every dollar you spend goes to media, not margin.",
  },
  {
    number: "02",
    heading: "Senior team from day one. No hand-offs.",
    body: "You get a senior strategist as your day-to-day owner — not a sales team that disappears at signing. Your account isn't handed to a junior after onboarding. The person who audits your business builds the strategy and manages the execution.",
  },
  {
    number: "03",
    heading: "Strategy before a single dollar of spend.",
    body: "The first three weeks aren't execution — they're forensics. We audit your analytics, your competitor set, your funnel, and your market positioning before we recommend a single campaign. The strategy document you receive on week three is the rarest thing in this industry: honest diagnosis.",
  },
  {
    number: "04",
    heading: "One team. Every channel. No coordination tax.",
    body: "When your SEO, paid search, content, and CRO are run by different agencies, no one owns the outcome. Our team handles every channel internally. That means insight flows across disciplines — and accountability flows to one place.",
  },
  {
    number: "05",
    heading: "Live dashboards. No 'report coming next week.'",
    body: "You have access to a real-time Looker Studio dashboard from day one. Every metric we track is tied to a revenue outcome — not a vanity number. Weekly written updates. Monthly deep-dive calls. You always know what's working and what isn't.",
  },
  {
    number: "06",
    heading: "No lock-in. 94% retention because the work performs.",
    body: "Standard retainers are 6-month initial terms then month-to-month. We've deliberately kept exit easy because we believe retention has to be earned. Our 94% client retention rate isn't a contract clause — it's a track record.",
  },
];

export function WhyOutlier() {
  return (
    <section className="py-24 md:py-32 bg-[#08090d] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Why Outlier</span>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.04] tracking-tight">
              The agency model is broken.
              <br />
              <span className="italic font-light text-white/40">We fixed it.</span>
            </h2>
          </div>
          <div>
            <p className="text-base text-white/45 leading-relaxed mb-6">
              Six structural differences between Outlier and every other agency you've talked to. Not marketing copy — these are the operational choices we've made that clients notice within 30 days.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group"
            >
              See how we work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-[#08090d] p-7 hover:bg-[#0d1020] transition-colors group"
            >
              <span className="text-[10px] font-black text-primary/50 tracking-widest uppercase block mb-4">{d.number}</span>
              <h3 className="text-base font-black text-white leading-snug mb-3 group-hover:text-primary transition-colors">
                {d.heading}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
