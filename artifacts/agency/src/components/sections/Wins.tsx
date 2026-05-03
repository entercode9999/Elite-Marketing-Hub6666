import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const wins = [
  { date: "This week", text: "DentalPlus Mississauga reached #1 for 'Mississauga Invisalign' (12,100 monthly searches).", metric: "#1 rank" },
  { date: "Last week", text: "Hudson Outdoor crossed $2.4M attributed revenue YTD — 312% year-over-year growth.", metric: "+312% YoY" },
  { date: "April", text: "Toronto Limo Co secured 47 new corporate accounts via Local SEO + LinkedIn outbound.", metric: "47 accounts" },
  { date: "April", text: "Nova FinTech cut blended CPA by 38% across Google + Meta in 90 days.", metric: "-38% CPA" },
  { date: "March", text: "Apex Dental Group launched 6-location programmatic SEO build — 1,100 pages live.", metric: "1,100 pages" },
  { date: "March", text: "Coastal Collective's Q1 ROAS hit 7.2x on Meta — best quarter in brand history.", metric: "7.2x ROAS" },
];

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Wins() {
  return (
    <section className="py-24 md:py-28 bg-[#08090d] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Left: sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 text-primary text-xs font-bold mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              Recent Wins
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.04] tracking-tight mb-4">
              Momentum,
              <br />
              <span className="italic font-light text-gray-500">in real time.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs">
              A live snapshot of client wins from the last 60 days. Yours could be next month's headline.
            </p>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm group"
            >
              See all case studies
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: wins list */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.07 }}
            className="lg:col-span-2 space-y-3"
          >
            {wins.map((w, i) => (
              <motion.div
                key={i}
                variants={item}
                className="grid grid-cols-[90px_1fr_80px] md:grid-cols-[110px_1fr_90px] gap-4 items-center p-5 bg-white/[0.03] border border-white/6 rounded-xl hover:border-primary/25 hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-primary leading-tight">
                  {w.date}
                </div>
                <div className="text-sm text-white/65 leading-relaxed group-hover:text-white/80 transition-colors">
                  {w.text}
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-white/40 group-hover:text-primary transition-colors">
                    {w.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
