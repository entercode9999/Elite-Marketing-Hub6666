import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronDown, X, Menu } from "lucide-react";

const SERVICES = [
  {
    category: "SEO",
    items: [
      { label: "Local SEO", href: "/local-seo-service", desc: "Map pack & GBP optimisation" },
      { label: "Technical SEO", href: "/technical-seo-service", desc: "Site audits & Core Web Vitals" },
      { label: "Content Marketing", href: "/content-marketing-service", desc: "Strategy-first SEO content" },
    ],
  },
  {
    category: "Paid Ads",
    items: [
      { label: "Google Ads", href: "/google-ads-management", desc: "Managed PPC campaigns" },
      { label: "Local Service Ads", href: "/local-service-ads", desc: "Pay-per-lead for service businesses" },
    ],
  },
  {
    category: "Web & CRO",
    items: [
      { label: "Custom Web Design", href: "/custom-web-design-service", desc: "Bespoke conversion-first sites" },
      { label: "Conversion Rate Optimisation", href: "/cro-service", desc: "More from your existing traffic" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { label: "AI Chatbots", href: "/ai-chatbot-service", desc: "Customer-facing conversational AI" },
      { label: "AI Integration", href: "/ai-integration-service", desc: "Connect your business tools" },
      { label: "Custom AI Systems", href: "/custom-ai-service", desc: "Bespoke operational AI" },
    ],
  },
];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
      >
        Services
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] rounded-2xl border border-border bg-background shadow-2xl shadow-black/10 z-50 overflow-hidden">
          <div className="grid grid-cols-2 p-2 gap-1">
            {SERVICES.map((group) => (
              <div key={group.category} className="p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 px-2">
                  {group.category}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-border px-5 py-3 bg-muted/30 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Not sure where to start?</p>
            <Link
              href="/local-seo"
              onClick={() => setOpen(false)}
              className="text-xs font-bold text-primary hover:underline"
            >
              See all services →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground shrink-0">
            <div className="w-6 h-6 rounded bg-primary" />
            Outlier
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            <ServicesDropdown />
            <Link href="/local-seo" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Locations
            </Link>
            <a href="#work" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+18005550199"
              className="hidden xl:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              1-800-555-0199
            </a>
            <a
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
            >
              Book a Call
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-colors shadow-md shadow-primary/20 group"
            >
              Free Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button className="lg:hidden p-2 text-foreground/70" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-72 h-full bg-background border-l border-border overflow-y-auto flex flex-col">
            <div className="flex items-center justify-between px-5 py-5 border-b border-border shrink-0">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-bold">Outlier</Link>
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            {SERVICES.map((group) => (
              <div key={group.category} className="border-b border-border">
                <p className="px-5 pt-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{group.category}</p>
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="flex flex-col px-5 py-3 hover:bg-primary/5 transition-colors">
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-5 mt-auto">
              <a href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg text-sm w-full">
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
