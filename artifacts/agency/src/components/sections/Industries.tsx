import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Local Services",
    image: "/industry-local.png",
    blurb: "Limo, HVAC, plumbing, home services — high-intent local lead gen.",
    tag: "GBP + Map Pack",
  },
  {
    name: "Dental & Medical",
    image: "/industry-dental.png",
    blurb: "Multi-location practices, MedSpas, orthodontics — patient acquisition systems.",
    tag: "+86% bookings avg",
  },
  {
    name: "Real Estate",
    image: "/industry-realestate.png",
    blurb: "Brokerages, agents, property management — buyer & seller pipelines.",
    tag: "Local SEO + Ads",
  },
  {
    name: "SaaS & Tech",
    image: "/case-study-saas.png",
    blurb: "PLG funnels, demo bookings, account-based plays for B2B SaaS.",
    tag: "ABM + Content",
  },
  {
    name: "eCommerce & DTC",
    image: "/industry-ecommerce.png",
    blurb: "Shopify CRO, paid social scaling, lifecycle email & SMS flows.",
    tag: "ROAS-driven",
  },
  {
    name: "Legal Services",
    image: "/industry-legal.png",
    blurb: "Personal injury, family, immigration — high-value lead generation.",
    tag: "$200+ CPL targets",
  },
  {
    name: "Restaurants & Hospitality",
    image: "/industry-restaurant.png",
    blurb: "Reservation-driven traffic, brand campaigns, multi-location SEO.",
    tag: "Local + brand",
  },
  {
    name: "Fitness & Wellness",
    image: "/industry-fitness.png",
    blurb: "Studios, gyms, coaches — membership growth + retention loops.",
    tag: "Lead-to-trial",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              By Industry
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight max-w-2xl">
              We know your industry. Inside out.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Decade-deep playbooks for verticals where we have a track record. No learning on your dime.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border transition-all hover:shadow-xl hover:border-primary/30"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-white/95 text-foreground text-[10px] font-bold uppercase tracking-wider">
                    {ind.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.blurb}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="group">
            See work in your industry
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
