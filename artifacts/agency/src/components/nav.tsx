import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md dark:bg-background/80 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary"></div>
          Outlier
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#services" className="hover:text-primary transition-colors">Capabilities</a>
          <a href="#local" className="hover:text-primary transition-colors">Local Growth</a>
          <a href="#seo" className="hover:text-primary transition-colors">SEO Practice</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18005550199" className="hidden lg:block text-sm font-medium text-muted-foreground hover:text-foreground mr-2">
            1-800-555-0199
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 font-semibold shadow-lg shadow-primary/20">
            Get a Free Audit
          </Button>
        </div>
      </div>
    </nav>
  );
}
