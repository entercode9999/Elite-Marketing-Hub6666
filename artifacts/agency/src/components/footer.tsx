import React from "react";
import { Link } from "wouter";

const DIGITAL_MARKETING = [
  { label: "SEO Services", href: "/seo-services" },
  { label: "Technical SEO", href: "/technical-seo-service" },
  { label: "AI SEO", href: "/ai-seo-service" },
  { label: "Local SEO", href: "/local-seo-service" },
  { label: "Google Ads / PPC", href: "/google-ads-management" },
  { label: "Social Media Advertising", href: "/social-media-advertising" },
  { label: "Content Marketing", href: "/content-marketing-service" },
];

const WEB_SERVICES = [
  { label: "Website Design", href: "/custom-web-design-service" },
  { label: "Website Development", href: "/website-development-service" },
  { label: "WordPress Development", href: "/wordpress-development-service" },
  { label: "Ecommerce Development", href: "/ecommerce-development" },
  { label: "Shopify Development", href: "/shopify-development" },
  { label: "Shopify Plus", href: "/shopify-plus-development" },
  { label: "Conversion Rate Optimisation", href: "/cro-service" },
];

const INDUSTRIES = [
  { label: "Dental & Medical", href: "/dental-marketing" },
  { label: "Legal Services", href: "/legal-marketing" },
  { label: "Home Services", href: "/home-services-marketing" },
  { label: "Real Estate", href: "/real-estate-marketing" },
  { label: "eCommerce & DTC", href: "/ecommerce-marketing" },
  { label: "SaaS & Tech", href: "/saas-marketing" },
  { label: "Restaurants", href: "/restaurant-marketing" },
  { label: "Construction", href: "/construction-marketing" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insights", href: "/insights" },
  { label: "Client Reviews", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const MARKETS = [
  { label: "Toronto", href: "/toronto/seo-services" },
  { label: "Mississauga", href: "/mississauga/seo-services" },
  { label: "Hamilton", href: "/hamilton/seo-services" },
  { label: "Ottawa", href: "/ottawa/seo-services" },
  { label: "Brampton", href: "/brampton/seo-services" },
  { label: "Markham", href: "/markham/seo-services" },
];

function FooterCol({ heading, links, extra }: { heading: string; links: { label: string; href: string }[]; extra?: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">{heading}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
      {extra}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#08090d] text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-black text-xl tracking-tight text-white mb-5">
              <div className="w-7 h-7 rounded-md bg-[#1a56ff] flex items-center justify-center">
                <span className="text-white text-xs font-black">O</span>
              </div>
              Outlier
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
              Boutique lead generation agency focused on helping local service businesses generate and convert high-intent leads through SEO, ads, and conversion systems.
            </p>
            <div className="text-sm text-white/35 space-y-1.5">
              <div>Markham, Ontario</div>
              <div className="pt-1">
                <a href="tel:+12898189102" className="hover:text-white transition-colors">+1 (289) 818-9102</a>
              </div>
              <div>
                <a href="mailto:contact@outlierdigital.ca" className="hover:text-white transition-colors">contact@outlierdigital.ca</a>
              </div>
            </div>
          </div>

          <FooterCol heading="Digital Marketing" links={DIGITAL_MARKETING} />
          <FooterCol heading="Web & Ecommerce" links={WEB_SERVICES} />
          <FooterCol heading="Industries" links={INDUSTRIES} extra={<div className="mt-3"><Link href="/our-work" className="text-xs text-[#1a56ff] font-semibold hover:text-[#1a56ff]/80 transition-colors">See client results →</Link></div>} />
          <div>
            <FooterCol heading="Company" links={COMPANY} />
            <div className="mt-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">Markets</h4>
              <ul className="space-y-2.5">
                {MARKETS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Outlier Marketing Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors" aria-label="LinkedIn">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors" aria-label="X / Twitter">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors" aria-label="Instagram">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <div className="w-px h-3 bg-white/10" />
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white/60 transition-colors">Sitemap</Link>
            <Link href="/accessibility" className="hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
