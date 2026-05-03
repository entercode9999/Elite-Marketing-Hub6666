import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our blended CPA dropped 38% in the first quarter and we've never had a clearer view of our funnel. The team operates like an in-house growth squad — not a vendor.",
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "Nova FinTech",
    image: "/headshot-1.png",
    metric: { v: "-38%", l: "CPA, Q1" },
    color: "#1a56ff",
  },
  {
    quote:
      "We went from invisible to dominating the Toronto map pack in five months. Calls are up 312% and our drivers are booked solid. They actually understood our business.",
    name: "Marcus Holland",
    title: "Founder",
    company: "Toronto Limo Co",
    image: "/headshot-2.png",
    metric: { v: "+312%", l: "Inbound calls" },
    color: "#059669",
  },
  {
    quote:
      "The programmatic SEO build is the single best investment we've made in growth. 2,400 ranked keywords later, organic is now our largest channel by revenue.",
    name: "Priya Desai",
    title: "Head of Growth",
    company: "Hudson Outdoor",
    image: "/headshot-3.png",
    metric: { v: "2,400+", l: "Keywords ranked" },
    color: "#7c3aed",
  },
  {
    quote:
      "I evaluated nine agencies. Outlier was the only one whose strategy deck made me think they understood the business better than my team did. We signed in a week.",
    name: "Daniel Reyes",
    title: "CEO",
    company: "Apex Dental Group",
    image: "/headshot-4.png",
    metric: { v: "9", l: "Agencies evaluated — chose us" },
    color: "#ea4335",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#f9f8f5] border-t border-[#e5e2d9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">What clients say</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight">
              Operators talk.
              <br />
              <span className="italic font-light text-gray-400">Results don't lie.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0e0e0e]">4.9</span>
            <span className="text-sm text-gray-400">· 87 verified reviews · Clutch</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Top color accent bar */}
              <div className="h-1 w-full" style={{ background: t.color }} />

              <div className="p-8">
                {/* Stars + metric */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-black leading-none" style={{ color: t.color }}>{t.metric.v}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 max-w-[100px] leading-snug">{t.metric.l}</p>
                  </div>
                </div>

                {/* Quote mark */}
                <Quote className="w-6 h-6 text-gray-100 mb-3 fill-gray-100" />

                <blockquote className="text-base md:text-[17px] text-[#1a1a1a] leading-relaxed mb-7 font-medium">
                  {t.quote}
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#e5e2d9]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover bg-gray-100 ring-2"
                    style={{ ringColor: t.color + "33" }}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#0e0e0e]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
