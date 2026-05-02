import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, X, AlignJustify } from "lucide-react";

const NAV_LINKS = [
  { label: "Our Work", href: "#work" },
  { label: "Local SEO", href: "/local-seo-service" },
  { label: "Google Ads", href: "/google-ads-management" },
  { label: "Web & AI", href: "/custom-web-design-service" },
  { label: "Digital Marketing", href: "/seo-services" },
];

const MEGA_ITEMS = {
  "Local SEO": [
    { label: "Local SEO Service", href: "/local-seo-service" },
    { label: "GBP Optimisation", href: "/local-seo-service#deliver" },
    { label: "Toronto Local SEO", href: "/toronto/local-seo-service" },
    { label: "Mississauga Local SEO", href: "/mississauga/local-seo-service" },
  ],
  "Google Ads": [
    { label: "Google Ads Management", href: "/google-ads-management" },
    { label: "Local Service Ads", href: "/local-service-ads" },
    { label: "Paid Social", href: "/paid-social-service" },
  ],
  "Web & AI": [
    { label: "Custom Web Design", href: "/custom-web-design-service" },
    { label: "CRO", href: "/cro-service" },
    { label: "AI Chatbots", href: "/ai-chatbot-service" },
    { label: "AI Integration", href: "/ai-integration-service" },
  ],
  "Digital Marketing": [
    { label: "SEO Services", href: "/seo-services" },
    { label: "Content Marketing", href: "/content-marketing-service" },
    { label: "Technical SEO", href: "/technical-seo-service" },
  ],
};

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
          {/* Logo + hamburger (Kinex style) */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-white">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-black">O</span>
              </div>
              Outlier
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <AlignJustify className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const hasSub = item.label in MEGA_ITEMS;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSub && setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 block"
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Dropdown */}
                  {hasSub && hoveredItem === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-52 z-50">
                      <div className="bg-[#0e1018] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">
                        {MEGA_ITEMS[item.label as keyof typeof MEGA_ITEMS].map((sub) => (
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
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all text-sm group shadow-lg shadow-primary/25"
          >
            Get a Free Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>

      {/* Full-screen mobile/side menu */}
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
              {NAV_LINKS.map((item) => (
                <div key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="flex items-center px-6 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center px-6 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                  {item.label in MEGA_ITEMS && (
                    <div className="pl-10 pb-2">
                      {MEGA_ITEMS[item.label as keyof typeof MEGA_ITEMS].map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-xs text-white/40 hover:text-white/70 transition-colors"
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
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 px-6 rounded-xl text-sm w-full group"
              >
                Get a Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-center text-xs text-white/25 mt-3">1-800-555-0199</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
