import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const wins = [
  { date: "This week", text: "DentalPlus Mississauga reached #1 for 'Mississauga Invisalign' (12,100 monthly searches)." },
  { date: "Last week", text: "Hudson Outdoor crossed $2.4M attributed revenue YTD — 312% YoY growth." },
  { date: "April", text: "Toronto Limo Co secured 47 new corporate accounts via Local SEO + LinkedIn outbound." },
  { date: "April", text: "Nova FinTech cut blended CPA by 38% across Google + Meta in 90 days." },
  { date: "March", text: "Apex Dental Group launched 6-location programmatic SEO build — 1,100 pages live." },
  { date: "March", text: "Coastal Collective's Q1 ROAS hit 7.2x on Meta — best quarter in brand history." },
];

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Wins() {
  return (
    <section className="py-24 md:py-28 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Recent Wins
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight mb-4">
              Momentum, in real time.
            </h2>
            <p className="text-lg text-muted-foreground">
              A live snapshot of client wins from the last 60 days. Yours could be next month's headline.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.07 }}
            className="lg:col-span-2 space-y-4"
          >
            {wins.map((w, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ x: 4 }}
                className="flex gap-6 p-5 md:p-6 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="shrink-0 w-24 md:w-28 text-xs font-bold uppercase tracking-wider text-primary pt-1">
                  {w.date}
                </div>
                <div className="text-base md:text-lg text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">
                  {w.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
