import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, X, Menu } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "SEO",
    children: [
      { label: "Local SEO", href: "/local-seo", desc: "Map pack & local search" },
      { label: "SEO Services", href: "/seo-services", desc: "Full organic search overview" },
      { label: "Local SEO Service", href: "/local-seo-service", desc: "Our local SEO programme" },
      { label: "Technical SEO", href: "/technical-seo-service", desc: "Audits & Core Web Vitals" },
      { label: "Content Marketing", href: "/content-marketing-service", desc: "Strategy & SEO content" },
    ],
  },
  {
    label: "PPC",
    children: [
      { label: "PPC & Google Ads", href: "/ppc-google-ads", desc: "Paid search overview" },
      { label: "Google Ads Management", href: "/google-ads-management", desc: "Managed campaigns" },
    ],
  },
  {
    label: "Local Growth",
    children: [
      { label: "Toronto", href: "/toronto/local-seo-service", desc: "Local SEO Toronto" },
      { label: "Mississauga", href: "/mississauga/local-seo-service", desc: "Local SEO Mississauga" },
      { label: "Ottawa", href: "/ottawa/local-seo-service", desc: "Local SEO Ottawa" },
    ],
  },
];

function DropdownMenu({
  label,
  children,
}: {
  label: string;
  children: { label: string; href: string; desc: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-xl shadow-black/20 z-50 overflow-hidden">
          {children.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border last:border-0"
            >
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-2 shrink-0"
          >
            <div className="w-6 h-6 rounded bg-primary" />
            Outlier
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <DropdownMenu key={item.label} label={item.label} children={item.children} />
            ))}
            {isHome && (
              <>
                <a href="#industries" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Industries
                </a>
                <a href="#work" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Work
                </a>
              </>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18005550199"
              className="hidden xl:block text-sm font-medium text-muted-foreground hover:text-foreground mr-2"
            >
              1-800-555-0199
            </a>
            <Button
              variant="ghost"
              className="hidden md:inline-flex h-10 px-4 font-semibold text-foreground hover:text-primary hover:bg-primary/5"
            >
              Book a Call
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 font-semibold shadow-lg shadow-primary/20 group">
              Get a Free Audit
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-foreground/70 hover:text-foreground"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-72 h-full bg-background border-l border-border flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-5 border-b border-border">
              <span className="font-bold text-sm">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {NAV_ITEMS.map((group) => (
              <div key={group.label} className="border-b border-border">
                <p className="px-5 pt-4 pb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </p>
                {group.children.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col px-5 py-3 hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-5 mt-auto">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg text-sm w-full"
              >
                Get a Free Audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
