import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-display font-bold tracking-tight flex items-center gap-2 mb-6"
            >
              <div className="w-6 h-6 rounded bg-primary"></div>
              Outlier
            </Link>
            <p className="text-muted-foreground text-base max-w-md leading-relaxed mb-6">
              One team. Every channel. Real growth. A full-service performance marketing
              agency for local + national category leaders.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>123 Spadina Ave, Suite 800</div>
              <div>Toronto, ON M5V 2T6</div>
              <div className="pt-2">
                <a href="tel:+18005550199" className="hover:text-foreground transition-colors">
                  1-800-555-0199
                </a>
              </div>
              <div>
                <a href="mailto:hello@outlier.co" className="hover:text-foreground transition-colors">
                  hello@outlier.co
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Capabilities</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/digital-marketing" className="hover:text-foreground transition-colors">Strategy & Consulting</Link>
              </li>
              <li>
                <Link href="/seo-services" className="hover:text-foreground transition-colors">Enterprise SEO</Link>
              </li>
              <li>
                <Link href="/local-seo-service" className="hover:text-foreground transition-colors">Local SEO</Link>
              </li>
              <li>
                <Link href="/google-ads-management" className="hover:text-foreground transition-colors">Paid Advertising</Link>
              </li>
              <li>
                <Link href="/content-marketing-service" className="hover:text-foreground transition-colors">Content Marketing</Link>
              </li>
              <li>
                <Link href="/custom-web-design-service" className="hover:text-foreground transition-colors">Branding & Creative</Link>
              </li>
              <li>
                <Link href="/cro-service" className="hover:text-foreground transition-colors">Web & CRO</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/home-services-marketing" className="hover:text-foreground transition-colors">Local Services</Link>
              </li>
              <li>
                <Link href="/dental-marketing" className="hover:text-foreground transition-colors">Dental & Medical</Link>
              </li>
              <li>
                <Link href="/real-estate-marketing" className="hover:text-foreground transition-colors">Real Estate</Link>
              </li>
              <li>
                <Link href="/saas-marketing" className="hover:text-foreground transition-colors">SaaS & Tech</Link>
              </li>
              <li>
                <Link href="/ecommerce-marketing" className="hover:text-foreground transition-colors">eCommerce & DTC</Link>
              </li>
              <li>
                <Link href="/legal-marketing" className="hover:text-foreground transition-colors">Legal Services</Link>
              </li>
              <li>
                <Link href="/restaurant-marketing" className="hover:text-foreground transition-colors">Hospitality</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-foreground transition-colors">Insights</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Markets</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/toronto/seo-services" className="hover:text-foreground transition-colors">Toronto</Link>
              </li>
              <li>
                <Link href="/mississauga/seo-services" className="hover:text-foreground transition-colors">Mississauga</Link>
              </li>
              <li>
                <Link href="/hamilton/seo-services" className="hover:text-foreground transition-colors">Hamilton</Link>
              </li>
              <li>
                <Link href="/ottawa/seo-services" className="hover:text-foreground transition-colors">Ottawa</Link>
              </li>
              <li>
                <Link href="/brampton/seo-services" className="hover:text-foreground transition-colors">Brampton</Link>
              </li>
              <li>
                <Link href="/markham/seo-services" className="hover:text-foreground transition-colors">Markham</Link>
              </li>
              <li>
                <Link href="/cities" className="hover:text-primary transition-colors font-semibold text-primary/70">
                  View all cities →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Outlier Marketing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
