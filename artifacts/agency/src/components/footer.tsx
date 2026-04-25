import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold tracking-tight flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-primary"></div>
              Outlier
            </Link>
            <p className="text-muted-foreground text-lg max-w-md">
              One team. Every channel. Real growth. We are a full-service performance marketing agency built for category leaders.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-6">Capabilities</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Strategy & Consulting</li>
              <li>Enterprise SEO</li>
              <li>Paid Acquisition</li>
              <li>Content & Creative</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Outlier Marketing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
