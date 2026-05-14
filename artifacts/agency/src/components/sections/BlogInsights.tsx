import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const ARTICLES = [
  {
    image: "/case-study-dental.png",
    category: "Local SEO",
    readTime: "8 min read",
    title: "Why Local SEO Still Wins in 2025 — And How Ontario Businesses Can Dominate It",
    excerpt:
      "The local pack drives 30–45% of click volume on local queries — and that hasn't shrunk despite AI Overviews. Here's what signals actually move the needle in 2025 and how to outrank competitors who are physically closer.",
    href: "/insights/local-seo-2025",
  },
  {
    image: "/case-study-ecommerce.png",
    category: "Google Ads",
    readTime: "7 min read",
    title: "PPC Budget Waste: The 7 Mistakes Ontario Businesses Make on Google Ads",
    excerpt:
      "After auditing 80+ Google Ads accounts, these are the seven mistakes we see in nearly every self-managed account — and the ones costing the most money. Mistake #1 is active in 41% of accounts.",
    href: "/insights/ppc-budget-waste-7-mistakes",
  },
  {
    image: "/case-study-saas.png",
    category: "Content",
    readTime: "12 min read",
    title: "Content That Compounds: Our Topical Authority Playbook for 2025",
    excerpt:
      "Most agencies write content to fill a calendar. We build content architectures that compound in authority over time. Here's the exact hub-and-spoke framework — and the data on what it produces.",
    href: "/insights/topical-authority-playbook",
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
          <Link
            href="/insights"
            className="shrink-0 inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-primary/40 hover:text-primary text-gray-700 font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm group"
          >
            All articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={article.title}
              onClick={() => window.location.href = article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>{article.category}</span>
                    <span className="text-gray-300">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
