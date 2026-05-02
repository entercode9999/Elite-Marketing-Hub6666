import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

const INDUSTRIES = [
  {
    id: "dental",
    name: "Dental & Medical",
    image: "/industry-dental.png",
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
    image: "/industry-legal.png",
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
    image: "/industry-dental.png",
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
    image: "/case-study-realestate.png",
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
    image: "/case-study-ecommerce.png",
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
    image: "/case-study-home.png",
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
    image: "/case-study-saas.png",
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
    id: "fitness",
    name: "Fitness & Wellness",
    image: "/industry-dental.png",
    headline: "Trial memberships. Retention systems. Full studios.",
    description:
      "Gyms, fitness studios, yoga, physiotherapy, wellness clinics. Local SEO and paid campaigns tuned for membership trials and appointment bookings. Review generation that keeps your 4.9-star rating attracting new clients.",
    whyChoose: [
      "Hyperlocal catchment radius targeting",
      "Trial-to-member email nurture sequences",
      "Instagram trial campaign creative",
      "Review generation for fitness businesses",
      "January campaign infrastructure",
      "Proven results: +190% trial memberships",
    ],
    href: "/fitness-marketing",
  },
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    image: "/industry-dental.png",
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
    id: "b2b",
    name: "B2B",
    image: "/case-study-saas.png",
    headline: "Pipeline from the right buyers. Not just more traffic.",
    description:
      "Manufacturers, distributors, professional services, agencies. B2B digital marketing where the conversion goal is a sales conversation — not a form submission. We build the content authority and demand gen systems that put you in front of decision-makers.",
    whyChoose: [
      "Multi-stakeholder content strategy",
      "LinkedIn ABM by company, title, and size",
      "Long-cycle email nurture sequences",
      "Intent-layered Google Ads for RFQ queries",
      "Lead quality vs. volume focus",
      "Proven results: +218% qualified leads",
    ],
    href: "/b2b-marketing",
  },
  {
    id: "b2c",
    name: "B2C",
    image: "/case-study-ecommerce.png",
    headline: "More customers. Lower acquisition cost.",
    description:
      "Consumer brands, subscription services, local businesses. Paid and organic channels working together to drive awareness, conversion, and retention at the lowest possible blended CPA.",
    whyChoose: [
      "Full-funnel paid social campaigns",
      "Creative testing systems against fatigue",
      "Seasonal demand management",
      "Accurate multi-channel attribution",
      "Loyalty and retention email sequences",
      "Proven results: -34% blended CPA",
    ],
    href: "/b2c-marketing",
  },
  {
    id: "d2c",
    name: "D2C",
    image: "/case-study-ecommerce.png",
    headline: "Own your customer relationship. Own your margins.",
    description:
      "Direct-to-consumer brands cutting out the middleman. CRO, email lifecycle, paid social, and SEO built specifically for DTC economics — LTV, repeat purchase rate, and subscription retention.",
    whyChoose: [
      "First-party attribution post-iOS14",
      "Subscription churn reduction strategies",
      "Full DTC email lifecycle stack",
      "Checkout and cart optimisation",
      "CPM diversification: Google + Meta",
      "Proven results: 7.2x blended ROAS",
    ],
    href: "/d2c-marketing",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    image: "/industry-dental.png",
    headline: "Hungry customers find you first.",
    description:
      "Food brands, restaurants, beverage companies, grocery retailers. Local SEO, social commerce, and content strategies that put your product in front of hungry, intent-driven buyers.",
    whyChoose: [
      "Photo-first content strategy",
      "GBP for food discovery searches",
      "Instagram and TikTok visual campaigns",
      "Review management and response",
      "Seasonal product launch campaigns",
      "Proven results: +155% online orders",
    ],
    href: "/food-beverage-marketing",
  },
  {
    id: "education",
    name: "Education",
    image: "/case-study-saas.png",
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
    image: "/case-study-home.png",
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
    image: "/industry-dental.png",
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
    image: "/case-study-realestate.png",
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
    image: "/case-study-ecommerce.png",
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
    image: "/case-study-saas.png",
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
    id: "technology",
    name: "Technology",
    image: "/case-study-saas.png",
    headline: "Grow faster. Build a lasting moat.",
    description:
      "Tech companies, IT services, software vendors, hardware brands. Content authority that positions you as the category leader, backed by demand gen and paid channels that fill your pipeline.",
    whyChoose: [
      "Category-defining content strategy",
      "Competitor conquesting ad campaigns",
      "JavaScript-aware technical SEO",
      "LinkedIn ABM for enterprise accounts",
      "Demo and trial CRO",
      "Proven results: +315% qualified leads",
    ],
    href: "/technology-marketing",
  },
  {
    id: "small-business",
    name: "Small Business",
    image: "/case-study-home.png",
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
    image: "/case-study-home.png",
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
    id: "law",
    name: "Law",
    image: "/industry-legal.png",
    headline: "High-value cases find you. Not the other way around.",
    description:
      "Law firms of every size and practice area. SEO authority, Google Ads, and content marketing that position your firm as the go-to choice for high-intent legal queries in your market.",
    whyChoose: [
      "Law Society advertising compliance",
      "Practice area × city page architecture",
      "Intent-layered negative keyword strategy",
      "E-E-A-T legal content authority",
      "Reputation and review management",
      "Proven results: -52% cost per lead",
    ],
    href: "/law-marketing",
  },
  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    image: "/industry-dental.png",
    headline: "More members. More athletes. Full facilities.",
    description:
      "Sports clubs, gyms, fitness studios, personal trainers, sports academies. Local SEO and paid campaigns tuned for membership trials, class bookings, and league registrations.",
    whyChoose: [
      "Hyperlocal catchment targeting (5km)",
      "Trial-to-member conversion systems",
      "January campaign pre-launch strategy",
      "Paid social for member demographics",
      "Review velocity management",
      "Proven results: +190% new memberships",
    ],
    href: "/sports-fitness-marketing",
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
              Decade-deep playbooks for verticals where we have a real track record.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden shadow-sm">
          {/* Left: industry list */}
          <div className="bg-white border-r border-[#e5e2d9] overflow-y-auto max-h-[600px]">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-[#f0ede8] last:border-0 group ${
                  active === i
                    ? "bg-primary/5 border-l-2 border-l-primary"
                    : "hover:bg-gray-50 border-l-2 border-l-transparent"
                }`}
              >
                <span
                  className={`font-semibold text-sm transition-colors leading-tight ${
                    active === i ? "text-[#0e0e0e]" : "text-gray-500 group-hover:text-[#0e0e0e]"
                  }`}
                >
                  {ind.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
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
                {/* Left: text + why choose */}
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

                {/* Right: image */}
                <div className="relative overflow-hidden min-h-[300px]">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
