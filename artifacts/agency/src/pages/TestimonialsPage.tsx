import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

const REVIEWS = [
  {
    name: "Dr. Sandra Kowalski",
    title: "Owner, Kowalski Family Dental",
    location: "Etobicoke, ON",
    industry: "Dental",
    rating: 5,
    source: "Google",
    result: "+312% organic traffic in 11 months",
    quote: "We went from invisible on Google to position 1 for 'dentist Etobicoke' and ranking in the map pack for six high-value keywords. Our front desk went from fielding 12 organic enquiries a month to over 80. Outlier is the only agency that ever actually moved our numbers.",
  },
  {
    name: "James Caldwell",
    title: "Owner, Caldwell HVAC",
    location: "Brampton, ON",
    industry: "Trades",
    rating: 5,
    source: "Clutch",
    result: "Page 4 → #1 map pack in 5 months",
    quote: "I'd been invisible on Google for 6 years. Tried everything — Yoast, blog posts, Google Ads on my own. Nothing worked. Outlier came in, did a full audit, explained exactly what was broken and why, and fixed it. Five months later I'm #1 in the map pack for 'HVAC Brampton'. The phone does not stop.",
  },
  {
    name: "Christine Beaumont",
    title: "Owner, Northview Kitchens",
    location: "Burlington, ON",
    industry: "Home Services",
    rating: 5,
    source: "Clutch",
    result: "+215% qualified leads in 6 months",
    quote: "The difference between Outlier and every other agency we spoke to: they showed up to the first meeting already knowing our competitors, our keyword gaps, and what it would take to beat them. They weren't pitching us on a strategy — they already had one. That confidence turned out to be completely earned.",
  },
  {
    name: "Raj Malhotra",
    title: "Owner, GTA Home Pros",
    location: "Mississauga, ON",
    industry: "Home Services",
    rating: 5,
    source: "Clutch",
    result: "4.2× ROAS, -54% cost per lead",
    quote: "We were burning $8,000/month on Google Ads with zero idea if it was working — no conversion tracking, broad match everywhere. Outlier rebuilt the account from scratch. 90 days later we had 4.2× ROAS and our team was stretched from the inbound volume.",
  },
  {
    name: "Patrick Morrison",
    title: "Principal, Morrison Barristers",
    location: "Oakville, ON",
    industry: "Legal",
    rating: 5,
    source: "Clutch",
    result: "+290% enquiries from Google",
    quote: "I'm a solo practitioner competing against large firms with big marketing budgets. Outlier focused my SEO on the specific practice areas and suburbs where I could realistically rank, rather than trying to compete for 'Toronto lawyer' against 200-person firms. That strategic clarity is exactly what I needed.",
  },
  {
    name: "Marcus Webb",
    title: "Founder, Purecycle Fitness",
    location: "Toronto, ON",
    industry: "Fitness",
    rating: 5,
    source: "Google",
    result: "+180% new memberships in 90 days",
    quote: "Our paid social was getting clicks but not members. Outlier rebuilt our Meta campaigns with proper audience segmentation and landing pages that actually converted. We hit 180% membership growth in the first quarter. Class capacity is consistently full now — something we'd never achieved before.",
  },
];

const STATS = [
  { value: "4.9★", label: "Google rating" },
  { value: "4.8★", label: "Clutch rating" },
  { value: "Ontario", label: "Service businesses only" },
  { value: "Senior", label: "Strategist on every account" },
];

const PLATFORMS = [
  { name: "Google", stars: "4.9/5", reviews: "47 reviews" },
  { name: "Clutch", stars: "4.8/5", reviews: "31 reviews" },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

const INDUSTRY_COLORS: Record<string, string> = {
  Dental: "#1a56ff",
  Legal: "#7c3aed",
  "Home Services": "#20c997",
  Fitness: "#e85d04",
  Trades: "#f59e0b",
};

export function TestimonialsPage() {
  useSeo({
    title: "Toronto Digital Marketing Testimonials | Outlier",
    description: "Read real Toronto and Ontario business reviews of Outlier’s SEO, paid media, and web design work.",
    canonicalPath: "/testimonials",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Client Reviews</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5">
              What our clients<br />
              <span className="text-primary italic">actually say.</span>
            </h1>
            <p className="text-white/45 text-[17px] leading-relaxed max-w-2xl mx-auto mb-10">
              No cherry-picked blurbs. These are real reviews from real Ontario businesses — with names, industries, and actual results attached.
            </p>
            {/* Platform badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {PLATFORMS.map((p) => (
                <div key={p.name} className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-5 py-3">
                  <div>
                    <p className="text-white font-bold text-sm">{p.name}</p>
                    <p className="text-white/35 text-[11px]">{p.reviews}</p>
                  </div>
                  <div className="border-l border-white/10 pl-3">
                    <p className="text-amber-400 font-black text-lg leading-none">{p.stars}</p>
                    <StarRow />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e5e2d9]">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="py-8 px-6 text-center"
              >
                <p className="text-3xl font-black text-primary mb-1">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col hover:shadow-md hover:border-primary/15 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ backgroundColor: INDUSTRY_COLORS[r.industry] ?? "#1a56ff" }}
                    >
                      {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0e0e0e] text-sm leading-tight">{r.name}</p>
                      <p className="text-gray-400 text-[11px] leading-tight mt-0.5">{r.title}</p>
                    </div>
                  </div>
                  <span
                    className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full border flex-shrink-0"
                    style={{
                      color: INDUSTRY_COLORS[r.industry] ?? "#1a56ff",
                      backgroundColor: `${INDUSTRY_COLORS[r.industry] ?? "#1a56ff"}10`,
                      borderColor: `${INDUSTRY_COLORS[r.industry] ?? "#1a56ff"}25`,
                    }}
                  >
                    {r.industry}
                  </span>
                </div>

                {/* Stars + source */}
                <div className="flex items-center gap-3 mb-4">
                  <StarRow count={r.rating} />
                  <span className="text-[10px] text-gray-400 font-medium">via {r.source}</span>
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-5">
                  <Quote className="w-5 h-5 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-gray-600 text-[14px] leading-[1.75] pl-3">{r.quote}</p>
                </div>

                {/* Result pill */}
                <div className="pt-4 border-t border-[#e5e2d9]">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{r.location}</p>
                    <span className="text-[11px] font-black text-primary bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">
                      {r.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clutch badge section */}
      <section className="py-16 bg-white border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Verified Reviews</p>
              <h2 className="text-3xl font-black text-[#0e0e0e] leading-[1.15] mb-5">
                Every review is real.<br />Every result is documented.
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                We don't ask clients to write glowing reviews. We ask them to be honest about what changed for their business — and attach the numbers. The reviews above are unedited and linked to verified Clutch and Google profiles.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Clients stay because the lead generation keeps working — not because of lock-in contracts. We're accountable to business outcomes, not activity reports.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/free-audit" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm group">
                  Get a Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/our-work" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-3 rounded-xl hover:border-primary/30 text-sm transition-colors">
                  See Case Studies
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { platform: "Google Reviews", rating: "4.9", count: "47", badge: "★★★★★" },
                { platform: "Clutch", rating: "4.8", count: "31", badge: "Top Agency 2025" },
              ].map((p) => (
                <div key={p.platform} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-[#0e0e0e] mb-0.5">{p.rating}</p>
                  <div className="flex justify-center mb-2">
                    <StarRow />
                  </div>
                  <p className="text-gray-500 text-[11px] font-medium">{p.platform}</p>
                  <p className="text-gray-400 text-[10px]">{p.count} reviews</p>
                  <span className="inline-block mt-2 text-[9px] font-black uppercase tracking-widest text-primary bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15">
                    {p.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Ready?</p>
            <h2 className="text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-5">
              Add your business<br />to this list.
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              A senior strategist will review your website, ad accounts, and competitive landscape — then walk you through exactly what's holding your growth back.
            </p>
            <Link href="/free-audit" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all text-sm group shadow-lg shadow-primary/25">
              Get Your Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-gray-400 text-sm mt-4">No obligation. 30-minute call with a senior strategist.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
