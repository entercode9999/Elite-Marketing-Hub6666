import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

const INDUSTRIES = [
  {
    id: "dental",
    name: "Dental & Medical",
    color: "#1a56ff",
    headline: "Fill chairs. Build the waitlist. Own your market.",
    description:
      "Multi-location dental practices, orthodontists, MedSpas, and physio clinics. We build patient acquisition systems that produce consistent bookings — not seasonal spikes. Local SEO, Google Ads, and GBP optimisation tuned for regulated healthcare marketing.",
    whyChoose: [
      "Regulated healthcare marketing compliance",
      "Multi-location GBP management",
      "Automated review generation system",
      "Local SEO for every clinic location",
      "Healthcare-specific ad campaigns",
      "Proven results: +86% new patient enquiries",
    ],
    href: "/dental-marketing",
  },
  {
    id: "legal",
    name: "Legal Services",
    color: "#7c3aed",
    headline: "High-value cases start with being found first.",
    description:
      "Personal injury, family law, corporate, immigration. Legal SEO has a long compounding runway — the authority you build today dominates for years. We build the content, citations, and link equity that put you at the top of every high-intent query in your practice area.",
    whyChoose: [
      "Law Society of Ontario advertising compliance",
      "Practice area × city landing page architecture",
      "Intent-layered Google Ads with negative keywords",
      "E-E-A-T content that builds legal authority",
      "Reputation management for law firms",
      "Proven results: -52% cost per lead",
    ],
    href: "/legal-marketing",
  },
  {
    id: "home-services",
    name: "Home Services",
    color: "#20c997",
    headline: "More service calls. Fewer slow weeks.",
    description:
      "HVAC, plumbing, electrical, roofing, landscaping, pest control. High-intent searches with excellent unit economics. Our most active local SEO vertical — we know every citation directory, every map pack variable, every seasonal adjustment.",
    whyChoose: [
      "Emergency query dominance strategy",
      "Seasonal campaign management",
      "Neighbourhood-level landing pages",
      "Local Service Ads (Google Guaranteed)",
      "Review velocity systems for trades",
      "Proven results: +241% lead volume",
    ],
    href: "/home-services-marketing",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    color: "#e85d04",
    headline: "Listings, leads, and seller appointments — predictably.",
    description:
      "Boutique brokerages, independent agents, property managers. Neighbourhood-specific local SEO and paid campaigns that deliver qualified buyer and seller leads — not general traffic.",
    whyChoose: [
      "RECO advertising compliance expertise",
      "Neighbourhood-specific landing pages",
      "Seller lead capture and nurture systems",
      "Market report content that builds authority",
      "Facebook listing campaigns for buyers",
      "Proven results: +247% listings year-over-year",
    ],
    href: "/real-estate-marketing",
  },
  {
    id: "ecommerce",
    name: "eCommerce & Retail",
    color: "#ec4899",
    headline: "More revenue from every visitor.",
    description:
      "Shopify and WooCommerce brands growing profitably. CRO, paid social, lifecycle email, and SEO working as a unified system. We don't just drive traffic — we engineer the full purchase path from first touch to repeat buyer.",
    whyChoose: [
      "Full-funnel Meta and TikTok campaigns",
      "Checkout and product page CRO",
      "Lifecycle email: cart, post-purchase, win-back",
      "Google Shopping with product feed optimisation",
      "Multi-touch attribution setup",
      "Proven results: 7.2x blended ROAS",
    ],
    href: "/ecommerce-marketing",
  },
  {
    id: "auto",
    name: "Auto & Trades",
    color: "#f59e0b",
    headline: "Map pack visibility in your most competitive local market.",
    description:
      "Dealerships, auto body shops, mechanics, electricians, plumbers. Competitive local markets where map pack position directly determines call volume. We've moved clients from outside the top 10 to #1 in under 14 weeks.",
    whyChoose: [
      "Auto and trades map pack specialists",
      "Review velocity management",
      "GBP seasonal attribute updates",
      "Proximity-targeted local landing pages",
      "Citation audit across 45+ directories",
      "Proven results: +241% inbound calls",
    ],
    href: "/auto-marketing",
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    color: "#38bdf8",
    headline: "Demo bookings. MQL growth. Pipeline you can forecast.",
    description:
      "B2B SaaS, fintech, HR tech, vertical SaaS. Account-based plays, PLG funnel optimisation, and content strategies that build topical authority in your niche. We understand the difference between website traffic and pipeline.",
    whyChoose: [
      "Topical authority content clusters",
      "Demo-intent Google Ads campaigns",
      "LinkedIn ABM for ICP-fit accounts",
      "CRO for trial and demo conversion",
      "PLG vs. sales-led funnel expertise",
      "Proven results: +315% qualified leads",
    ],
    href: "/saas-marketing",
  },
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    color: "#ef4444",
    headline: "Full tables. Memorable brands. Loyal regulars.",
    description:
      "Independent restaurants, café chains, catering companies, hospitality groups. Local SEO for 'near me' searches, paid social for reservation drives, and reputation management to protect your most valuable asset — your reviews.",
    whyChoose: [
      "Photo-driven GBP management",
      "Post-dining review generation",
      "Instagram reservation campaigns",
      "Slow weeknight cover strategies",
      "Loyalty email sequences",
      "Proven results: +155% online reservations",
    ],
    href: "/restaurant-marketing",
  },
  {
    id: "education",
    name: "Education",
    color: "#8b5cf6",
    headline: "More enrolments. Built to last.",
    description:
      "Private schools, colleges, online courses, tutoring services, training providers. Enrolment-focused digital marketing — from first search to application submission.",
    whyChoose: [
      "Program-specific landing pages",
      "Enrolment funnel CRO",
      "Long-cycle prospectus nurture sequences",
      "Google Ads by program type",
      "Open day and deadline campaigns",
      "Proven results: +220% enrollment inquiries",
    ],
    href: "/education-marketing",
  },
  {
    id: "transportation",
    name: "Transportation",
    color: "#06b6d4",
    headline: "More bookings. Lower cost per dispatch.",
    description:
      "Logistics companies, freight brokers, limo and taxi services, trucking companies. Local SEO and paid search for high-intent transportation queries — driving more dispatches and B2B contracts.",
    whyChoose: [
      "Route and service-specific landing pages",
      "Local SEO for transportation queries",
      "B2B freight content strategy",
      "Review management for passenger transport",
      "Competitor platform targeting",
      "Proven results: +185% inbound bookings",
    ],
    href: "/transportation-marketing",
  },
  {
    id: "healthcare",
    name: "Health Care",
    color: "#10b981",
    headline: "More patients. Compliant, ethical growth.",
    description:
      "Hospitals, clinics, specialist practices, telehealth platforms, pharmacies. Regulatory-aware digital marketing that navigates advertising restrictions while consistently driving new patient acquisition.",
    whyChoose: [
      "CPSO and RCDSO advertising compliance",
      "E-E-A-T healthcare content infrastructure",
      "Specialty-specific landing pages",
      "Multi-location GBP management",
      "Post-appointment review generation",
      "Proven results: +190% patient inquiries",
    ],
    href: "/healthcare-marketing",
  },
  {
    id: "travel",
    name: "Travel",
    color: "#3b82f6",
    headline: "More direct bookings. Less OTA dependency.",
    description:
      "Hotels, tour operators, travel agencies, destination brands. Seasonal paid media strategies, OTA-beating local SEO, and content that converts trip researchers into direct bookings.",
    whyChoose: [
      "OTA brand protection campaigns",
      "Destination content for research phase",
      "Seasonal paid media structures",
      "Past-guest email loyalty programs",
      "Booking funnel CRO",
      "Proven results: +245% direct bookings",
    ],
    href: "/travel-marketing",
  },
  {
    id: "fashion",
    name: "Fashion",
    color: "#f472b6",
    headline: "Build the brand. Drive the sale.",
    description:
      "Fashion labels, boutiques, accessories brands, sustainable fashion. Paid social, content strategy, and SEO that builds brand equity while driving consistent ecommerce revenue.",
    whyChoose: [
      "Collection launch campaign structure",
      "Trend-responsive content systems",
      "Dynamic product ads for warm audiences",
      "Fashion editorial SEO content",
      "Size guide and fit CRO",
      "Proven results: 5.8x paid social ROAS",
    ],
    href: "/fashion-marketing",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "#a855f7",
    headline: "Sell out the show. Build the audience.",
    description:
      "Events, venues, entertainment brands, streaming content, talent agencies. Ticket sales, audience growth, and content-driven brand building across paid and organic channels.",
    whyChoose: [
      "On-sale day campaign deployment",
      "Long-term audience building campaigns",
      "Last-minute buyer retargeting",
      "Email on-sale notification sequences",
      "Social media pre-show content strategy",
      "Proven results: +280% ticket sales",
    ],
    href: "/entertainment-marketing",
  },
  {
    id: "small-business",
    name: "Small Business",
    color: "#1a56ff",
    headline: "Compete with bigger brands. Win in your market.",
    description:
      "Solopreneurs to 20-person teams. Lean, high-impact digital marketing that doesn't require an enterprise budget. Local SEO, targeted paid search, and content that punches above your weight class.",
    whyChoose: [
      "Budget-efficient campaign structures",
      "High-intent keyword focus only",
      "GBP as a lead generation engine",
      "Franchise-beating local tactics",
      "Plain English reporting",
      "Proven results: +190% lead volume",
    ],
    href: "/small-business-marketing",
  },
  {
    id: "construction",
    name: "Construction",
    color: "#92400e",
    headline: "More RFQs. Higher-value contracts.",
    description:
      "General contractors, specialty trades, construction firms, developers. Local SEO for project-intent searches, paid campaigns for high-value tender keywords, and authority content that wins RFQ shortlists.",
    whyChoose: [
      "Project portfolio content strategy",
      "Seasonal campaign launch timing",
      "Local SEO for project-intent queries",
      "Google Ads for high-value tenders",
      "Review generation post-project",
      "Proven results: +210% qualified inquiries",
    ],
    href: "/construction-marketing",
  },
  {
    id: "b2b-b2c-d2c",
    name: "B2B / B2C / D2C",
    color: "#4f46e5",
    headline: "One framework. Three buyer models.",
    description:
      "B2B, B2C, and D2C brands all need different conversion paths, but the same discipline: strong positioning, high-performing channels, and clear attribution. We tailor strategy to the buying cycle, ticket size, and sales motion.",
    whyChoose: [
      "B2B: lead quality, long-cycle nurture, account-based targeting",
      "B2C: acquisition efficiency, creative testing, retention",
      "D2C: LTV, repeat purchase, subscription growth",
      "Channel mix matched to your buying model",
      "Clear attribution across paid + organic",
      "Proven results across consumer and commercial funnels",
    ],
    href: "/b2b-marketing",
  },
];

export function IndustriesTabbed() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

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
              Decade-deep playbooks for verticals where we have a real track record.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-[#0a0c14] border-r border-white/5 overflow-y-auto max-h-[600px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="px-5 pt-6 pb-4 border-b border-white/5">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">Industries</p>
              <p className="text-xs text-white/40 mt-0.5 leading-snug">Focused playbooks. Real track record.</p>
            </div>
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all border-b border-white/[0.04] last:border-0 group relative overflow-hidden ${
                  active === i
                    ? "bg-white/6 border-l-[3px] border-l-primary"
                    : "hover:bg-white/[0.04] border-l-[3px] border-l-transparent"
                }`}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-200"
                  style={{ background: active === i ? "#1a56ff" : "transparent" }}
                />
                <span
                  className={`font-semibold text-sm transition-colors leading-tight ${
                    active === i ? "text-white" : "text-white/45 group-hover:text-white/80"
                  }`}
                >
                  {ind.name}
                </span>
              </button>
            ))}
            <div className="px-5 py-5 border-t border-white/5">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                Get a Free Audit
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22 }}
                className="h-full grid grid-cols-1 md:grid-cols-2"
              >
                <div className="p-8 flex flex-col bg-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">{current.name}</span>
                  <h3 className="text-xl font-black text-[#0e0e0e] mb-3 leading-snug">{current.headline}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{current.description}</p>
                  <div className="mb-6 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-300 mb-3">
                      Why choose Outlier for {current.name}?
                    </p>
                    <div className="space-y-2">
                      {current.whyChoose.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-5 rounded-xl text-sm group hover:bg-black/80 transition-colors w-fit"
                  >
                    See results in {current.name}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div className="relative overflow-hidden min-h-[300px]" style={{ background: `linear-gradient(135deg, #08090d 0%, ${current.color}44 100%)` }}>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_25%,transparent_25%),linear-gradient(225deg,rgba(255,255,255,0.03)_25%,transparent_25%)] bg-[size:48px_48px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[140px] font-black leading-none select-none" style={{ color: current.color, opacity: 0.12 }}>{current.name[0]}</span>
                  </div>
                  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 50%, ${current.color}22, transparent 70%)` }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
