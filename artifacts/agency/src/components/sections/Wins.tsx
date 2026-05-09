import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const INDUSTRIES = [
  {
    name: "Dental & Medical",
    outcome: "Map pack rankings and new patient enquiries from local search.",
    color: "#1a56ff",
    initial: "D",
  },
  {
    name: "Legal Services",
    outcome: "Page 1 visibility for high-intent legal keywords in your service area.",
    color: "#7c3aed",
    initial: "L",
  },
  {
    name: "Home Services",
    outcome: "Google Ads and local SEO that keeps your schedule fully booked.",
    color: "#e85d04",
    initial: "H",
  },
  {
    name: "Fitness & Wellness",
    outcome: "Paid social and local SEO that fills memberships and class rosters.",
    color: "#20c997",
    initial: "F",
  },
  {
    name: "Construction & Trades",
    outcome: "Lead generation for roofing, HVAC, renovation, and contracting businesses.",
    color: "#f59e0b",
    initial: "C",
  },
  {
    name: "Restaurants & Retail",
    outcome: "Local search visibility, Google Maps prominence, and foot traffic growth.",
    color: "#ec4899",
    initial: "R",
  },
];

export function Wins() {
  return (
    <section className="py-24 md:py-28 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Who we help
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] tracking-tight mb-4">
            Built for local service businesses.
          </h2>
          <p className="text-lg text-muted-foreground">
            If your business relies on inbound calls, form submissions, or booked appointments — this is what we do.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex gap-4 p-5 bg-background border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                style={{ backgroundColor: ind.color }}
              >
                {ind.initial}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-[15px] mb-1 group-hover:text-primary transition-colors">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            See all industries we serve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
