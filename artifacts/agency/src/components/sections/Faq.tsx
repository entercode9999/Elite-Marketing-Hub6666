import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you work with small or local businesses?",
    a: "Yes — local businesses are one of our strongest practice areas. We work with single-location dental clinics, limo companies, home service brands, real estate teams and more. Our Local SEO + Reputation engine is purpose-built for owner-operators.",
  },
  {
    q: "How is pricing structured?",
    a: "Three models: project (one-off scope), monthly retainer (most clients), or performance-based for select brands. Retainers typically start at $6K/month. We'll recommend the right fit on the call based on your stage and goals.",
  },
  {
    q: "What does the first 30 days look like?",
    a: "Week 1: deep audit of analytics, SEO, paid accounts, CRM, and creative. Week 2: 30/60/90 strategy doc + KPI baseline. Weeks 3-4: execution kickoff with your dedicated pod and weekly cadence locked in.",
  },
  {
    q: "How quickly should I expect results?",
    a: "Paid: meaningful CPA improvements within 30-60 days. SEO: directional wins within 90 days, compounding traffic from month 4-6. Local SEO/GBP: map pack movement often visible inside 30 days. We're transparent about timelines from day one.",
  },
  {
    q: "Are there long-term contracts?",
    a: "Standard retainers are 6-month initial terms then month-to-month. Performance-tied engagements are 12 months. We don't believe in trapping clients — 94% retention is because the work performs.",
  },
  {
    q: "Will I work with senior people or get handed off?",
    a: "Every account has a senior strategist as the day-to-day owner, plus channel specialists (SEO, paid, creative, dev) as needed. No junior-only accounts. Founder access for performance-tier clients.",
  },
  {
    q: "How is reporting handled?",
    a: "Live Looker Studio dashboards from day one, weekly written updates, monthly deep-dive review calls. Every metric tied to revenue, not vanity. You'll always know what's working and what isn't.",
  },
  {
    q: "What makes Outlier different from other agencies?",
    a: "Three things: a strategy-first approach (we don't execute without a clear hypothesis), a true full-service team under one roof (no vendor coordination tax), and an unusual depth in SEO — especially programmatic and local — which compounds while paid keeps the lights on.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-4">
            Answers, before you ask.
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't see your question? Drop it on the strategy call — we answer everything candidly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card/30 data-[state=open]:bg-card/60 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-display font-semibold py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
