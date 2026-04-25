import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our blended CPA dropped 38% in the first quarter and we've never had a clearer view of our funnel. The team operates like an in-house growth squad — not a vendor.",
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "Nova FinTech",
    image: "/headshot-1.png",
  },
  {
    quote:
      "We went from invisible to dominating the Toronto map pack in five months. Calls are up 312% and our drivers are booked solid. They actually understood our business.",
    name: "Marcus Holland",
    title: "Founder",
    company: "Toronto Limo Co",
    image: "/headshot-2.png",
  },
  {
    quote:
      "The programmatic SEO build is the single best investment we've made in growth. 2,400 ranked keywords later, organic is now our largest channel by revenue.",
    name: "Priya Desai",
    title: "Head of Growth",
    company: "Hudson Outdoor",
    image: "/headshot-3.png",
  },
  {
    quote:
      "I evaluated nine agencies. Outlier was the only one whose strategy deck made me think they understood the business better than my team did. We signed in a week.",
    name: "Daniel Reyes",
    title: "CEO",
    company: "Apex Dental Group",
    image: "/headshot-4.png",
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
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
            What clients say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
            Operators talk.
            <br />
            <span className="text-primary">Results don't lie.</span>
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
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover bg-muted ring-2 ring-primary/10"
                />
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
