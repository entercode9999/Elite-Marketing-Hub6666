import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, X, AlignJustify, ChevronDown } from "lucide-react";

type NavItem = { label: string; href: string };

const NAV_CATEGORIES: { label: string; items: NavItem[] }[] = [
  {
    label: "Services",
    items: [
      { label: "Local SEO", href: "/local-seo-service" },
      { label: "Technical SEO", href: "/technical-seo-service" },
      { label: "AI SEO", href: "/ai-seo-service" },
      { label: "Google Ads (PPC)", href: "/google-ads-management" },
      { label: "Paid Social", href: "/social-media-advertising" },
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "Web Design & CRO", href: "/custom-web-design-service" },
      { label: "AI & Automation", href: "/ai-automation" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Dental & Medical", href: "/dental-marketing" },
      { label: "Legal Services", href: "/legal-marketing" },
      { label: "Home Services", href: "/home-services-marketing" },
      { label: "Real Estate", href: "/real-estate-marketing" },
      { label: "eCommerce & DTC", href: "/ecommerce-marketing" },
      { label: "SaaS & Tech", href: "/saas-marketing" },
      { label: "Restaurants", href: "/restaurant-marketing" },
      { label: "Construction", href: "/construction-marketing" },
    ],
  },
  {
    label: "Markets",
    items: [
      { label: "Toronto", href: "/toronto/seo-services" },
      { label: "Mississauga", href: "/mississauga/seo-services" },
      { label: "Brampton", href: "/brampton/seo-services" },
      { label: "Oakville", href: "/oakville/seo-services" },
      { label: "Hamilton", href: "/hamilton/seo-services" },
      { label: "Ottawa", href: "/ottawa/seo-services" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Outlier", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Insights", href: "/insights" },
      { label: "Pricing", href: "/pricing" },
      { label: "Client Reviews", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/95 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-white">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-black">O</span>
              </div>
              Outlier
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <AlignJustify className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(cat.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1.5">
                  {cat.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredItem === cat.label ? "rotate-180" : ""}`} />
                </button>

                {hoveredItem === cat.label && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-[#0e1018] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">
                      <p className="px-4 py-1.5 text-[10px] font-bold text-white/25 uppercase tracking-widest">{cat.label}</p>
                      {cat.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/our-work"
              className="text-sm font-semibold text-white/50 hover:text-white transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/free-audit"
              className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all text-sm group shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Get a Free Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-[320px] h-full bg-[#08090d] border-r border-white/8 flex flex-col overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <Link href="/" className="font-black text-white text-lg">Outlier</Link>
              <button onClick={() => setMobileOpen(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-4">
              {NAV_CATEGORIES.map((cat) => (
                <div key={cat.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === cat.label ? null : cat.label)}
                    className="flex items-center justify-between w-full px-6 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {cat.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === cat.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === cat.label && (
                    <div className="pl-6 pb-2 border-l border-white/8 ml-6">
                      {cat.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2.5 px-3 text-sm text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/8">
              <Link
                href="/free-audit"
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 px-6 rounded-xl text-sm w-full group"
              >
                Get a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-center text-xs text-white/25 mt-3">1-800-555-0199 · hello@outlier.co</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
