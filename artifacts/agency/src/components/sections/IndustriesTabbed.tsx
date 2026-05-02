import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { name: "Dental & Medical", metric: "+86%", metricLabel: "New patient enquiries", href: "/dental-marketing", color: "#1a56ff" },
  { name: "Legal Services", metric: "-52%", metricLabel: "Cost per lead", href: "/legal-marketing", color: "#7c3aed" },
  { name: "Home Services", metric: "+241%", metricLabel: "Lead volume growth", href: "/home-services-marketing", color: "#ea4335" },
  { name: "Real Estate", metric: "+247%", metricLabel: "Listings year-over-year", href: "/real-estate-marketing", color: "#f59e0b" },
  { name: "eCommerce & Retail", metric: "7.2x", metricLabel: "Blended ROAS", href: "/ecommerce-marketing", color: "#22c55e" },
  { name: "Auto & Trades", metric: "+241%", metricLabel: "Inbound calls avg", href: "/auto-marketing", color: "#0891b2" },
  { name: "SaaS & Technology", metric: "+315%", metricLabel: "Qualified leads", href: "/saas-marketing", color: "#1a56ff" },
  { name: "Fitness & Wellness", metric: "+190%", metricLabel: "Trial memberships", href: "/fitness-marketing", color: "#ec4899" },
  { name: "Restaurants", metric: "+155%", metricLabel: "Online reservations", href: "/restaurant-marketing", color: "#f97316" },
  { name: "B2B", metric: "+218%", metricLabel: "Qualified leads", href: "/b2b-marketing", color: "#1a56ff" },
  { name: "B2C", metric: "-34%", metricLabel: "Blended CPA", href: "/b2c-marketing", color: "#7c3aed" },
  { name: "D2C", metric: "7.2x", metricLabel: "Blended ROAS", href: "/d2c-marketing", color: "#22c55e" },
  { name: "Food & Beverage", metric: "+155%", metricLabel: "Online orders avg", href: "/food-beverage-marketing", color: "#f59e0b" },
  { name: "Education", metric: "+220%", metricLabel: "Enrollment inquiries", href: "/education-marketing", color: "#0891b2" },
  { name: "Transportation", metric: "+185%", metricLabel: "Inbound bookings", href: "/transportation-marketing", color: "#6366f1" },
  { name: "Health Care", metric: "+190%", metricLabel: "Patient inquiries", href: "/healthcare-marketing", color: "#22c55e" },
  { name: "Travel", metric: "+245%", metricLabel: "Direct bookings", href: "/travel-marketing", color: "#0891b2" },
  { name: "Fashion", metric: "5.8x", metricLabel: "Paid social ROAS", href: "/fashion-marketing", color: "#ec4899" },
  { name: "Entertainment", metric: "+280%", metricLabel: "Ticket sales", href: "/entertainment-marketing", color: "#f97316" },
  { name: "Technology", metric: "+315%", metricLabel: "Qualified leads", href: "/technology-marketing", color: "#1a56ff" },
  { name: "Small Business", metric: "+190%", metricLabel: "Lead volume", href: "/small-business-marketing", color: "#7c3aed" },
  { name: "Construction", metric: "+210%", metricLabel: "Qualified inquiries", href: "/construction-marketing", color: "#f59e0b" },
  { name: "Law", metric: "-52%", metricLabel: "Cost per lead", href: "/law-marketing", color: "#6366f1" },
  { name: "Sports & Fitness", metric: "+190%", metricLabel: "New memberships", href: "/sports-fitness-marketing", color: "#22c55e" },
];

export function IndustriesTabbed() {
  return (
    <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]" id="industries">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">By industry</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.04] text-[#0e0e0e]">
              Industries we serve.
            </h2>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Decade-deep playbooks for verticals where we have a real track record. No learning on your budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                href={ind.href}
                className="group flex flex-col justify-between h-full bg-white border border-[#e5e2d9] rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all min-h-[120px]"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="font-bold text-sm text-[#0e0e0e] leading-snug group-hover:text-primary transition-colors">{ind.name}</p>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-all mt-0.5" />
                </div>
                <div>
                  <p className="text-2xl font-black tabular-nums" style={{ color: ind.color }}>{ind.metric}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{ind.metricLabel}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-3">Don't see your industry?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-primary/40 text-[#0e0e0e] font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors group">
            Talk to us about your vertical <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
