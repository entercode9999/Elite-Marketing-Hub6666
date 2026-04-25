import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary"></div>
          Outlier
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#seo" className="hover:text-foreground transition-colors">SEO Practice</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get an Audit</Button>
        </div>
      </div>
    </nav>
  );
}
