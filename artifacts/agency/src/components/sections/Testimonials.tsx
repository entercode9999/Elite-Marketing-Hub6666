import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our cost-per-lead dropped 38% in the first quarter. They don't just manage ads — they actually understand what it takes to get a local service business more inbound calls.",
    name: "Sarah Chen",
    title: "Owner",
    company: "Nova Financial Planning",
    initials: "SC",
    color: "#1a56ff",
  },
  {
    quote:
      "We went from invisible to ranking in the Toronto map pack in five months. Calls are up 312% and our drivers are booked solid. They actually understood our business.",
    name: "Marcus Holland",
    title: "Founder",
    company: "Toronto Limo Co",
    initials: "MH",
    color: "#e85d04",
  },
  {
    quote:
      "The local SEO work Outlier did has completely changed how we get leads. Organic search is now our biggest source of new customers — and it keeps growing every month.",
    name: "Priya Desai",
    title: "Owner",
    company: "Hudson Outdoor Supply",
    initials: "PD",
    color: "#7c3aed",
  },
  {
    quote:
      "I evaluated several agencies. Outlier was the only one who showed up already knowing our competitors and our keyword gaps. They understood our business before we hired them.",
    name: "Daniel Reyes",
    title: "Principal",
    company: "Apex Dental Group",
    initials: "DR",
    color: "#20c997",
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Client results
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
            What local business
            <br />
            <span className="text-primary">owners say.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white text-base flex-shrink-0 ring-2 ring-primary/10"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
