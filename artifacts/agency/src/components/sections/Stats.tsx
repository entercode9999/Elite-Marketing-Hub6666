import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  format?: (n: number) => string;
};

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years in Toronto" },
  { value: 65, suffix: "+", label: "Brands Grown" },
  { value: 94, suffix: "%", label: "Client Retention" },
  { prefix: "4.", value: 9, suffix: "★", label: "Clutch Rating" },
];

function StatItem({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const value = useCountUp(stat.value, 1800, inView);
  const display = stat.format ? stat.format(value) : value.toString();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="text-center md:px-6 py-6 md:py-0"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-3 tracking-tight">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-foreground/70 uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-20 md:py-24 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
