import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const industries = [
  {
    name: "Dental & Medical",
    tag: "+86% patient bookings avg.",
    blurb: "Multi-location practices, MedSpas, orthodontics. We build patient acquisition systems that fill chairs consistently — not campaign by campaign.",
    metric: "+86%",
    metricLabel: "New patient enquiries",
    image: "/industry-dental.png",
    services: ["Local SEO", "Google Ads", "GBP Optimisation"],
    href: "/dental-marketing",
  },
  {
    name: "Legal Services",
    tag: "High-value lead generation",
    blurb: "Personal injury, family law, immigration, corporate. The economics of legal SEO reward patience — we build the authority that compounds.",
    metric: "$200+",
    metricLabel: "Target CPL achieved",
    image: "/industry-legal.png",
    services: ["Local SEO", "Content Marketing", "Google Ads"],
    href: "/legal-marketing",
  },
  {
    name: "Home Services",
    tag: "GBP + map pack dominance",
    blurb: "HVAC, plumbing, electrical, roofing, landscaping. High-intent searches with strong unit economics. Our most active local SEO vertical.",
    metric: "+241%",
    metricLabel: "Lead volume growth",
    image: "/industry-local.png",
    services: ["Local SEO", "Local Service Ads", "Google Ads"],
    href: "/home-services-marketing",
  },
  {
    name: "Real Estate",
    tag: "Buyer + seller pipelines",
    blurb: "Brokerages, agents, property management firms. Neighbourhood-specific SEO and paid campaigns that bring in listings, not just website traffic.",
    metric: "+247%",
    metricLabel: "Listings year-over-year",
    image: "/case-study-realestate.png",
    services: ["Local SEO", "Content Marketing", "Paid Social"],
    href: "/real-estate-marketing",
  },
  {
    name: "eCommerce & DTC",
    tag: "ROAS-driven growth",
    blurb: "Shopify and WooCommerce brands scaling profitably. CRO, lifecycle email, paid social, and SEO working as a system — not separate campaigns.",
    metric: "7.2x",
    metricLabel: "Blended ROAS",
    image: "/industry-ecommerce.png",
    services: ["Paid Social", "CRO", "Content Marketing"],
    href: "/ecommerce-marketing",
  },
  {
    name: "SaaS & Technology",
    tag: "Demo bookings & MQL growth",
    blurb: "PLG funnels, account-based plays, demo pipeline development for B2B SaaS. We understand the difference between traffic and pipeline.",
    metric: "+315%",
    metricLabel: "Qualified lead volume",
    image: "/case-study-saas.png",
    services: ["Content Marketing", "Google Ads", "CRO"],
    href: "/saas-marketing",
  },
  {
    name: "Fitness & Wellness",
    tag: "Membership growth systems",
    blurb: "Gyms, studios, physiotherapy, wellness clinics. Local SEO and paid campaigns tuned for membership trials and appointment bookings.",
    metric: "+190%",
    metricLabel: "Trial memberships",
    image: "/industry-fitness.png",
    services: ["Local SEO", "Paid Social", "Google Ads"],
    href: "/fitness-marketing",
  },
  {
    name: "Auto & Trades",
    tag: "Competitive local markets",
    blurb: "Dealerships, body shops, mechanics, tradespeople. Map pack visibility in high-competition local markets where reputation determines who gets the call.",
    metric: "#2",
    metricLabel: "Map pack in 14 weeks",
    image: "/case-study-home.png",
    services: ["Local SEO", "GBP Optimisation", "Google Ads"],
    href: "/auto-marketing",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#f5f0e8] dark:bg-[#0d0f16] border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">By Industry</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              We know your industry.
              <br />
              <span className="italic font-light">Inside out.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
            Decade-deep playbooks for verticals where we have a track record. No learning curve on your budget.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-background/90 text-[10px] font-bold uppercase tracking-wider text-foreground">
                    {ind.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-2xl font-black text-white tabular-nums">{ind.metric}</p>
                  <p className="text-xs text-white/70">{ind.metricLabel}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{ind.blurb}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {ind.services.map((s) => (
                    <span key={s} className="text-[10px] font-semibold px-2 py-1 rounded bg-primary/8 dark:bg-primary/10 text-primary border border-primary/15">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground font-semibold py-3 px-6 rounded-lg transition-colors text-sm group"
          >
            See work in your industry
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
