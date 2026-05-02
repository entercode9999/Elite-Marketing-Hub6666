import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const ARTICLES = [
  {
    image: "/case-study-dental.png",
    category: "Local SEO",
    readTime: "7 min read",
    title: "Why Toronto Businesses Are Losing the Map Pack in 2026 — And the Six Fixes That Actually Work",
    excerpt:
      "The map pack algorithm shifted twice in Q4 2025. Most businesses haven't adjusted. Here's what changed, why proximity is no longer the dominant signal, and the six structural fixes that moved our clients from invisible to #1 in under 90 days.",
    href: "/blog/toronto-map-pack-2026",
    author: "Jamie Park",
    authorRole: "Head of Local SEO",
  },
  {
    image: "/case-study-ecommerce.png",
    category: "Paid Media",
    readTime: "9 min read",
    title: "The DTC Paid Media Playbook After iOS 18: How We Maintained 6x ROAS When Everyone Else Was Crying About Attribution",
    excerpt:
      "iOS attribution tracking is still broken. But the brands surviving it aren't using better tools — they're using a different model. We rebuilt our DTC playbook around first-party data, creative velocity, and blended ROAS. Here's the full breakdown.",
    href: "/blog/dtc-paid-media-ios18",
    author: "Alex Thornton",
    authorRole: "Paid Media Director",
  },
  {
    image: "/case-study-saas.png",
    category: "SEO Strategy",
    readTime: "12 min read",
    title: "Programmatic SEO at Scale: How We Ranked 2,400 Keywords in 6 Months Without Thin Content Penalties",
    excerpt:
      "Programmatic SEO has a quality problem. Most implementations get penalised because they sacrifice depth for volume. We built an architecture that generates 40–80 genuinely useful, schema-rich pages per month — and the traffic compounded in a straight line from month four.",
    href: "/blog/programmatic-seo-scale",
    author: "Priya Nair",
    authorRole: "Technical SEO Lead",
  },
];

export function BlogInsights() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#e5e2d9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">The Outlier Blog</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0e0e0e] leading-[1.04] tracking-tight">
              The latest insights.
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-md leading-relaxed">
              Honest analysis, practitioner-written. No generic SEO tips — only what we're learning on active client accounts.
            </p>
          </div>
          <a
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-primary/40 hover:text-primary text-gray-700 font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ARTICLES.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </div>

                <h3 className="font-black text-[#0e0e0e] text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#e5e2d9]">
                  <div>
                    <p className="text-xs font-bold text-[#0e0e0e]">{article.author}</p>
                    <p className="text-[10px] text-gray-400">{article.authorRole}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
