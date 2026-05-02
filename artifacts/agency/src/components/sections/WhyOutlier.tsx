import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const DIFFERENTIATORS = [
  {
    heading: "No percentage-of-spend billing. Ever.",
    body: "Most agencies charge a cut of your ad budget — meaning their revenue scales when yours doesn't. We charge a flat strategic fee. Our only incentive is performance, not consumption. Every dollar you spend goes to media, not margin.",
  },
  {
    heading: "Senior team from day one. No hand-offs.",
    body: "You get a senior strategist as your day-to-day owner — not a sales team that disappears at signing. Your account isn't handed to a junior after onboarding. The person who audits your business builds the strategy and manages the execution.",
  },
  {
    heading: "Strategy before a single dollar of spend.",
    body: "The first three weeks aren't execution — they're forensics. We audit your analytics, your competitor set, your funnel, and your market positioning before we recommend a single campaign. The strategy document you receive is the rarest thing in this industry: honest diagnosis.",
  },
  {
    heading: "One team. Every channel. No coordination tax.",
    body: "When your SEO, paid search, content, and CRO are run by different agencies, no one owns the outcome. Our team handles every channel internally. That means insight flows across disciplines — and accountability flows to one place.",
  },
  {
    heading: "Live dashboards. No 'report coming next week.'",
    body: "You have access to a real-time Looker Studio dashboard from day one. Every metric we track is tied to a revenue outcome — not a vanity number. Weekly written updates. Monthly deep-dive calls. You always know what's working and what isn't.",
  },
  {
    heading: "No lock-in. 94% retention because the work performs.",
    body: "Standard retainers are 6-month initial terms then month-to-month. We've deliberately kept exit easy because we believe retention has to be earned. Our 94% client retention rate isn't a contract clause — it's a track record.",
  },
];

export function WhyOutlier() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#e5e2d9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-0">
          {/* Left: text */}
          <div className="lg:sticky lg:top-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-4">Why Outlier</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight mb-6">
              Six ways we work
              <br />
              <span className="italic font-light text-gray-400">differently.</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Most agencies look identical in a pitch deck. The differences that matter aren't in the services list — they're in how the engagement is actually structured, priced, and staffed. Here's where we differ.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              These aren't aspirational values. They're operational choices we've made — and that clients notice within the first 30 days.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0e0e0e] hover:bg-black/80 text-white font-bold py-3.5 px-7 rounded-xl text-sm transition-all group"
            >
              Start with a free audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right: differentiator list */}
          <div className="border border-[#e5e2d9] rounded-2xl overflow-hidden">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.heading}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className={`px-7 py-6 border-b border-[#e5e2d9] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f9f8f5]"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0e0e0e] text-sm leading-snug mb-1.5">{d.heading}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
