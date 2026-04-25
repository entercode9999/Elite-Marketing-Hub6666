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
              <li className="hover:text-foreground transition-colors cursor-pointer">Strategy & Consulting</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Enterprise SEO</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Local SEO</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Paid Advertising</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Content Marketing</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Branding & Creative</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Web & CRO</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Local Services</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Dental & Medical</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Real Estate</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">SaaS & Tech</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">eCommerce & DTC</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Legal Services</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Hospitality</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">About</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Insights</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Markets</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Toronto</li>
              <li>Mississauga</li>
              <li>Hamilton</li>
              <li>Ottawa</li>
              <li>Vancouver</li>
              <li>Calgary</li>
              <li>NYC + Miami</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Outlier Marketing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
