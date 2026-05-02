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
            <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
              {l.label}
            </Link>
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

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-black text-xl tracking-tight text-white mb-5">
              <div className="w-7 h-7 rounded-md bg-[#1a56ff] flex items-center justify-center">
                <span className="text-white text-xs font-black">O</span>
              </div>
              Outlier
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
              Full-service digital marketing for Toronto businesses and national category leaders. SEO, paid media, web, and content — one senior team, measurable results.
            </p>
            <div className="text-sm text-white/35 space-y-1.5">
              <div>123 Spadina Ave, Suite 800</div>
              <div>Toronto, ON M5V 2T6</div>
              <div className="pt-1">
                <a href="tel:+18005550199" className="hover:text-white transition-colors">1-800-555-0199</a>
              </div>
              <div>
                <a href="mailto:hello@outlier.co" className="hover:text-white transition-colors">hello@outlier.co</a>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <FooterCol heading="Digital Marketing" links={DIGITAL_MARKETING} />

          {/* Web & Ecommerce */}
          <FooterCol heading="Web & Ecommerce" links={WEB_SERVICES} />

          {/* Industries */}
          <FooterCol
            heading="Industries"
            links={INDUSTRIES}
            extra={
              <div className="mt-3">
                <Link href="/industries" className="text-xs text-[#1a56ff] font-semibold hover:text-[#1a56ff]/80 transition-colors">
                  All industries →
                </Link>
              </div>
            }
          />

          {/* Company + Markets */}
          <div>
            <FooterCol heading="Company" links={COMPANY} />
            <div className="mt-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">Markets</h4>
              <ul className="space-y-2.5">
                {MARKETS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/cities" className="text-xs text-[#1a56ff] font-semibold hover:text-[#1a56ff]/80 transition-colors">
                    View all cities →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Outlier Marketing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
