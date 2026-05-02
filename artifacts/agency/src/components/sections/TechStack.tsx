import { motion } from "framer-motion";

const tools = [
  "HubSpot",
  "Salesforce",
  "Klaviyo",
  "Shopify",
  "WordPress",
  "Webflow",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "GTM",
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "Zapier",
  "Make",
  "Notion",
];

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function TechStack() {
  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Tools & Platforms
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-4">
            Certified across the stack you actually use.
          </h2>
          <p className="text-lg text-muted-foreground">
            We're partners and power users — not generalists figuring it out on your account.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.04 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool}
              variants={item}
              whileHover={{ y: -2, borderColor: "hsl(var(--primary) / 0.4)" }}
              className="aspect-[2/1] rounded-lg border border-border bg-card/40 flex items-center justify-center text-sm md:text-base font-display font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
