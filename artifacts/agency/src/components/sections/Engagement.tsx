import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Project",
    tagline: "One-off builds with a defined scope.",
    price: "Starting at $8K",
    features: [
      "Website redesign or build",
      "SEO audit & roadmap",
      "Brand identity package",
      "Landing page system",
      "Fixed timeline & deliverables",
    ],
    cta: "Scope a project",
    highlight: false,
  },
  {
    name: "Retainer",
    tagline: "Embedded growth team. Most popular.",
    price: "From $6K / month",
    features: [
      "Dedicated strategist + specialists",
      "Multi-channel execution",
      "Weekly stand-ups & reporting",
      "Quarterly strategy reviews",
      "Slack-channel access",
    ],
    cta: "Book a strategy call",
    highlight: true,
  },
  {
    name: "Performance",
    tagline: "Outcome-tied partnership for select brands.",
    price: "Let's talk",
    features: [
      "Base + share of incremental revenue",
      "Aligned to growth targets",
      "Senior pod, founder access",
      "Selective — limited slots",
      "12-month minimum",
    ],
    cta: "Apply to partner",
    highlight: false,
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Engagement() {
  return (
    <section id="engagement" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Engagement Models
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-4">
            Three ways to work together.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick the model that fits your stage. We'll recommend the right one on the call.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={card}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 lg:p-10 border transition-all ${
                tier.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 lg:scale-[1.03]"
                  : "bg-card/40 border-border hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-2xl font-display font-bold mb-2">{tier.name}</div>
                <div className={`text-sm ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {tier.tagline}
                </div>
              </div>
              <div className="text-3xl font-display font-bold mb-8 pb-8 border-b border-current/10">
                {tier.price}
              </div>
              <ul className="space-y-3 mb-10">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-white" : "text-primary"}`} />
                    <span className={tier.highlight ? "text-white/95" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={tier.highlight ? "secondary" : "default"}
                className={`w-full group ${
                  tier.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
