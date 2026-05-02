import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const INDUSTRIES = [
  {
    id: "dental",
    name: "Dental & Medical",
    image: "/industry-dental.png",
    headline: "Fill chairs. Build the waitlist. Own your market.",
    description:
      "Multi-location dental practices, orthodontists, MedSpas, and physiotherapy clinics. We build patient acquisition systems that produce consistent bookings — not seasonal spikes. Local SEO + Google Ads + GBP optimisation tuned for regulated healthcare marketing.",
    services: ["Local SEO & GBP", "Google Ads", "Review Generation", "Local Landing Pages"],
    metric: { value: "+86%", label: "New patient enquiries" },
    href: "/dental-marketing",
  },
  {
    id: "legal",
    name: "Legal Services",
    image: "/industry-legal.png",
    headline: "High-value cases start with being found first.",
    description:
      "Personal injury, family law, corporate, immigration. Legal SEO has a long compounding runway — the authority you build today dominates for years. We build the content, citations, and link equity that put you at the top of every high-intent query in your practice area.",
    services: ["Local SEO", "Content Marketing", "Google Ads", "Reputation Management"],
    metric: { value: "$200+", label: "Target CPL achieved" },
    href: "/legal-marketing",
  },
  {
    id: "home-services",
    name: "Home Services",
    image: "/industry-local.png",
    headline: "More service calls. Fewer slow weeks.",
    description:
      "HVAC, plumbing, electrical, roofing, landscaping, pest control. High-intent searches with excellent unit economics. Our most active local SEO vertical — we know every citation directory, every map pack variable, every seasonal adjustment that moves the needle.",
    services: ["Local SEO", "Google Local Service Ads", "Google Ads", "GBP Optimisation"],
    metric: { value: "+241%", label: "Lead volume growth" },
    href: "/home-services-marketing",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    image: "/case-study-realestate.png",
    headline: "Listings, leads, and seller appointments — predictably.",
    description:
      "Boutique brokerages, independent agents, property managers. Neighbourhood-specific local SEO and paid campaigns that deliver qualified buyer and seller leads. We've turned cold-lead dependency into predictable pipelines for Toronto, Mississauga, and Ottawa-area brokerages.",
    services: ["Local SEO", "Content Marketing", "Paid Social", "Google Ads"],
    metric: { value: "+247%", label: "Listings year-over-year" },
    href: "/real-estate-marketing",
  },
  {
    id: "ecommerce",
    name: "eCommerce & Retail",
    image: "/industry-ecommerce.png",
    headline: "More revenue from every visitor.",
    description:
      "Shopify and WooCommerce brands growing profitably. CRO, paid social, lifecycle email, and SEO working as a unified system. We don't just drive traffic — we engineer the full purchase path from first touch to repeat buyer.",
    services: ["Google Shopping", "Paid Social", "CRO", "Lifecycle Email", "SEO"],
    metric: { value: "7.2x", label: "Blended ROAS" },
    href: "/ecommerce-marketing",
  },
  {
    id: "automotive",
    name: "Auto & Trades",
    image: "/case-study-home.png",
    headline: "Map pack visibility in your most competitive local market.",
    description:
      "Dealerships, auto body shops, mechanics, electricians, plumbers. Competitive local markets where map pack position directly determines call volume. We've moved clients from outside the top 10 to #1 in under 14 weeks.",
    services: ["Local SEO", "GBP Optimisation", "Google Ads", "Review Management"],
    metric: { value: "#2", label: "Map pack in 14 weeks" },
    href: "/auto-marketing",
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    image: "/case-study-saas.png",
    headline: "Demo bookings. MQL growth. Pipeline you can forecast.",
    description:
      "B2B SaaS, fintech, HR tech, vertical SaaS. Account-based plays, PLG funnel optimisation, and content strategies that build topical authority in your niche. We understand the difference between website traffic and pipeline.",
    services: ["Content Marketing", "Google Ads", "CRO", "ABM Strategy"],
    metric: { value: "+315%", label: "Qualified lead volume" },
    href: "/saas-marketing",
  },
  {
    id: "fitness",
    name: "Fitness & Wellness",
    image: "/industry-fitness.png",
    headline: "Trial memberships. Retention systems. Full studios.",
    description:
      "Gyms, fitness studios, yoga, physiotherapy, wellness clinics. Local SEO and paid campaigns tuned for membership trials and appointment bookings. Review generation that keeps your 4.9-star rating attracting new clients.",
    services: ["Local SEO", "Paid Social", "Google Ads", "Email Marketing"],
    metric: { value: "+190%", label: "Trial memberships" },
    href: "/fitness-marketing",
  },
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    image: "/industry-dental.png",
    headline: "Full tables. Memorable brands. Loyal regulars.",
    description:
      "Independent restaurants, café chains, catering companies, hospitality groups. Local SEO for 'near me' searches, paid social for reservation drives, and reputation management to protect your most valuable asset — your reviews.",
    services: ["Local SEO", "Paid Social", "GBP Management", "Reputation"],
    metric: { value: "+155%", label: "Online reservations" },
    href: "/restaurant-marketing",
  },
];

export function IndustriesTabbed() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]" id="industries">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden shadow-sm">
          {/* Left: industry list */}
          <div className="bg-white border-r border-[#e5e2d9]">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all border-b border-[#f0ede8] last:border-0 group ${
                  active === i ? "bg-primary/5 border-l-2 border-l-primary" : "hover:bg-gray-50 border-l-2 border-l-transparent"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all ${
                    active === i
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-semibold text-sm transition-colors ${
                    active === i ? "text-[#0e0e0e]" : "text-gray-500 group-hover:text-[#0e0e0e]"
                  }`}
                >
                  {ind.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22 }}
                className="h-full grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden min-h-[240px]">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-3xl font-black text-white">{current.metric.value}</p>
                    <p className="text-xs text-white/70 mt-0.5">{current.metric.label}</p>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-8 flex flex-col bg-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">{current.name}</span>
                  <h3 className="text-xl font-black text-[#0e0e0e] mb-3 leading-snug">{current.headline}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{current.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-300 mb-3">Services we run for this industry</p>
                    <div className="flex flex-wrap gap-2">
                      {current.services.map((s) => (
                        <span key={s} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#e5e2d9] text-gray-600">
                          <Check className="w-3 h-3 text-primary" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={current.href}
                    className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-5 rounded-xl text-sm group hover:bg-black/80 transition-colors w-fit"
                  >
                    See results in {current.name}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
