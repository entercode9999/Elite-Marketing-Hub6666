import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const TRUST_ITEMS = [
  "No-pressure conversation",
  "30-minute commitment",
  "Senior strategist on the call",
  "Honest diagnosis — even if you don't hire us",
];

export function MegaCta() {
  return (
    <section className="relative py-28 md:py-36 bg-[#08090d] border-t border-white/6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Blue glow orbs */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[500px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[500px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-bold mb-8 backdrop-blur-sm">
            Limited onboarding slots — Q3 2026
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
            Ready to dominate
            <br />
            <span className="text-primary italic">your market?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
            Book a 30-minute strategy call. We'll teardown your funnel live and tell you the three highest-leverage moves — whether you hire us or not.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/free-audit"
              className="relative overflow-hidden shimmer-button inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-9 rounded-xl transition-all text-base group animate-glow-pulse"
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/25 hover:bg-white/[0.04] text-white/70 hover:text-white font-semibold py-4 px-9 rounded-xl transition-all text-base"
            >
              Get a Free Audit
            </Link>
          </div>

          {/* Trust checklist */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/40">
                <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
