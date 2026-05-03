import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years in Toronto", sub: "Serving Ontario businesses since 2015" },
  { value: 65, suffix: "+", label: "Brands Grown", sub: "Local operators to national brands" },
  { value: 94, suffix: "%", label: "Client Retention", sub: "Because the work performs" },
  { prefix: "4.", value: 9, suffix: "★", label: "Clutch Rating", sub: "87 verified client reviews" },
];

function StatItem({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const value = useCountUp(stat.value, 1800, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative flex flex-col items-center text-center px-6 py-8 group"
    >
      {/* Vertical divider */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-white/8" />
      )}

      <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-none tabular-nums">
        {stat.prefix}{value}{stat.suffix}
      </div>
      <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1.5">
        {stat.label}
      </div>
      <div className="text-[11px] text-white/30 leading-snug max-w-[140px]">
        {stat.sub}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#08090d] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            Trusted by 180+ brands across Ontario, Alberta, and the US. Results verified via client dashboards.
          </p>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors group shrink-0"
          >
            See client results
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
