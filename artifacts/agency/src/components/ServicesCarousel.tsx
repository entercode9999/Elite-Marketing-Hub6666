import { useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Settings, Link2, FileText, Share2, DollarSign, TrendingUp, Monitor, Sliders, RefreshCw, Bot, Zap, Workflow, AppWindow, Cpu, MousePointer } from "lucide-react";

const SERVICES = [
  // SEO
  { name: "Local SEO", cat: "SEO", icon: MapPin, href: "/local-seo-service", metric: "+312%", metricLabel: "avg lead growth", desc: "Map pack rankings & GBP optimisation", color: "#1a56ff" },
  { name: "Technical SEO", cat: "SEO", icon: Settings, href: "/technical-seo-service", metric: "4–8 wks", metricLabel: "first results", desc: "Site audits, Core Web Vitals, crawl", color: "#1a56ff" },
  { name: "On-Page SEO", cat: "SEO", icon: Search, href: "/on-page-seo-service", metric: "+180%", metricLabel: "keyword visibility", desc: "Keyword mapping & content structure", color: "#1a56ff" },
  { name: "Link Building", cat: "SEO", icon: Link2, href: "/link-building-service", metric: "DR 50+", metricLabel: "avg link target", desc: "Editorial backlinks for Canadian businesses", color: "#1a56ff" },
  { name: "Content Marketing", cat: "Content", icon: FileText, href: "/content-marketing-service", metric: "Years", metricLabel: "asset lifespan", desc: "Strategy-first SEO content creation", color: "#7c3aed" },
  // PPC
  { name: "Google Ads", cat: "PPC", icon: TrendingUp, href: "/google-ads-management", metric: "-38%", metricLabel: "avg CPA reduction", desc: "Managed campaigns, no % of spend fees", color: "#ea4335" },
  { name: "Local Service Ads", cat: "PPC", icon: DollarSign, href: "/local-service-ads", metric: "Per lead", metricLabel: "not per click", desc: "Google Guaranteed for Canadian businesses", color: "#ea4335" },
  { name: "Paid Social", cat: "PPC", icon: Share2, href: "/paid-social-service", metric: "4.2x", metricLabel: "blended ROAS", desc: "Facebook, Instagram, LinkedIn, TikTok", color: "#ea4335" },
  // Web
  { name: "Custom Web Design", cat: "Web", icon: Monitor, href: "/custom-web-design-service", metric: "+28%", metricLabel: "avg CVR lift", desc: "Conversion-first custom sites", color: "#059669" },
  { name: "Conversion Design", cat: "Web", icon: MousePointer, href: "/conversion-web-design-service", metric: "+18%", metricLabel: "conversion rate", desc: "Design built around your funnel", color: "#059669" },
  { name: "Website Redesign", cat: "Web", icon: RefreshCw, href: "/website-redesign-service", metric: "No drop", metricLabel: "in rankings", desc: "Redesign without losing SEO equity", color: "#059669" },
  { name: "CRO", cat: "Web", icon: Sliders, href: "/cro-service", metric: "More from", metricLabel: "existing traffic", desc: "Test-driven conversion optimisation", color: "#059669" },
  // AI
  { name: "AI Chatbots", cat: "AI", icon: Bot, href: "/ai-chatbot-service", metric: "24/7", metricLabel: "lead capture", desc: "Customer-facing conversational AI", color: "#d97706" },
  { name: "AI Integration", cat: "AI", icon: Zap, href: "/ai-integration-service", metric: "10+ tools", metricLabel: "connected", desc: "Connect your business systems with AI", color: "#d97706" },
  { name: "AI Workflow", cat: "AI", icon: Workflow, href: "/ai-workflow-service", metric: "Hours", metricLabel: "saved per week", desc: "Automate repetitive operational tasks", color: "#d97706" },
  { name: "App Development", cat: "AI", icon: AppWindow, href: "/app-development-service", metric: "8–24 wks", metricLabel: "to launch", desc: "Web & mobile application development", color: "#d97706" },
  { name: "Custom AI Systems", cat: "AI", icon: Cpu, href: "/custom-ai-service", metric: "Bespoke", metricLabel: "to your ops", desc: "Purpose-built AI for complex workflows", color: "#d97706" },
  { name: "Social Media", cat: "Content", icon: Share2, href: "/social-media-service", metric: "+3.4x", metricLabel: "organic reach", desc: "Organic management & paid social", color: "#7c3aed" },
];

const CAT_COLORS: Record<string, string> = {
  SEO: "#1a56ff",
  PPC: "#ea4335",
  Web: "#059669",
  AI: "#d97706",
  Content: "#7c3aed",
};

export function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0c12] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">All capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Everything under one roof.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-xs leading-relaxed hidden md:block">
            Eighteen services. One senior team. No account manager hand-offs.
          </p>
        </div>
      </div>

      {/* Drag-scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-6 px-6 max-w-[100vw] scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none" }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const handleMove = (e: MouseEvent) => {
            const x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const handleUp = () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleUp);
          };
          document.addEventListener("mousemove", handleMove);
          document.addEventListener("mouseup", handleUp);
        }}
      >
        {SERVICES.map((svc, i) => (
          <Link key={svc.name} href={svc.href}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="shrink-0 w-60 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 p-5 flex flex-col group"
            >
              {/* Category + icon */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                  style={{ color: CAT_COLORS[svc.cat], background: `${CAT_COLORS[svc.cat]}20` }}
                >
                  {svc.cat}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${svc.color}20` }}
                >
                  <svc.icon className="w-4 h-4" style={{ color: svc.color }} />
                </div>
              </div>

              <h3 className="font-bold text-base mb-1 group-hover:text-[#4d80ff] transition-colors">{svc.name}</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-5 flex-1">{svc.desc}</p>

              {/* Metric */}
              <div className="pt-4 border-t border-white/10 flex items-end justify-between">
                <div>
                  <p className="text-lg font-black" style={{ color: svc.color }}>{svc.metric}</p>
                  <p className="text-[10px] text-white/30">{svc.metricLabel}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#4d80ff] transition-colors" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-2 mt-4 px-6">
        <div className="h-px flex-1 max-w-[120px] bg-white/10" />
        <span className="text-[10px] text-white/20 uppercase tracking-widest">drag to explore</span>
        <div className="h-px flex-1 max-w-[120px] bg-white/10" />
      </div>
    </section>
  );
}
