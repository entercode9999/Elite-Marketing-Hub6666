import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, X, AlignJustify, ChevronDown } from "lucide-react";

type NavItem = { label: string; href: string };

const NAV_CATEGORIES: { label: string; items: NavItem[] }[] = [
  {
    label: "Lead Generation",
    items: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Local SEO Services", href: "/local-seo-service" },
      { label: "Technical SEO", href: "/technical-seo-service" },
      { label: "AI SEO", href: "/ai-seo-service" },
      { label: "Pay Per Click (PPC)", href: "/google-ads-management" },
      { label: "Social Media Advertising", href: "/social-media-advertising" },
    ],
  },
  {
    label: "Conversion Systems",
    items: [
      { label: "Website Design", href: "/custom-web-design-service" },
      { label: "Website Development", href: "/website-development-service" },
      { label: "WordPress Development", href: "/wordpress-development-service" },
      { label: "Joomla Development", href: "/joomla-development-service" },
      { label: "Drupal Development", href: "/drupal-development-service" },
    ],
  },
  {
    label: "Ecommerce & Development",
    items: [
      { label: "Shopify Development", href: "/shopify-development" },
      { label: "Shopify Plus Development", href: "/shopify-plus-development" },
      { label: "Ecommerce Development", href: "/ecommerce-development" },
      { label: "Magento Development", href: "/magento-development" },
      { label: "Adobe Commerce", href: "/adobe-commerce-development" },
      { label: "Headless Commerce", href: "/headless-commerce-service" },
      { label: "Laravel Web Development", href: "/laravel-web-development" },
      { label: "Magento 2 Migration", href: "/magento-2-migration" },
      { label: "Magento 2 Support", href: "/magento-2-support" },
      { label: "Hyvä Theme Development", href: "/hyva-theme-development" },
    ],
  },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-[#08090d]/95 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">
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

          <div className="hidden lg:flex items-center gap-1">
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
                  <div className="absolute top-full left-0 pt-2 w-60 z-50">
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

          <Link
            href="/free-audit"
            className="relative overflow-hidden shimmer-button hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all text-sm group shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            Get a Free Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>

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
              <p className="text-center text-xs text-white/25 mt-3">+1 (289) 818-9102</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
