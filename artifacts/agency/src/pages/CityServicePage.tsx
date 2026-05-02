import { useParams, Link } from "wouter";
import { ArrowRight, MapPin, CheckCircle2, TrendingUp, Star, Phone } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const CITY_DISPLAY: Record<string, string> = {
  toronto: "Toronto",
  mississauga: "Mississauga",
  brampton: "Brampton",
  markham: "Markham",
  vaughan: "Vaughan",
  "richmond-hill": "Richmond Hill",
  oakville: "Oakville",
  burlington: "Burlington",
  pickering: "Pickering",
  ajax: "Ajax",
  whitby: "Whitby",
  oshawa: "Oshawa",
  "north-york": "North York",
  scarborough: "Scarborough",
  etobicoke: "Etobicoke",
  milton: "Milton",
  newmarket: "Newmarket",
  aurora: "Aurora",
  "halton-hills": "Halton Hills",
  hamilton: "Hamilton",
  kitchener: "Kitchener",
  waterloo: "Waterloo",
  cambridge: "Cambridge",
  guelph: "Guelph",
  "london-ontario": "London",
  ottawa: "Ottawa",
  barrie: "Barrie",
  kingston: "Kingston",
  peterborough: "Peterborough",
  brantford: "Brantford",
  "st-catharines": "St. Catharines",
  "niagara-falls": "Niagara Falls",
  windsor: "Windsor",
  belleville: "Belleville",
  "greater-sudbury": "Greater Sudbury",
  "thunder-bay": "Thunder Bay",
  "sault-ste-marie": "Sault Ste. Marie",
  "north-bay": "North Bay",
  orangeville: "Orangeville",
};

const SERVICE_META: Record<
  string,
  {
    label: string;
    hero: string;
    tagline: string;
    description: string;
    bullets: string[];
    stats: { n: string; l: string }[];
    cta: string;
    relatedServices: { label: string; href: string }[];
  }
> = {
  "seo-services": {
    label: "SEO Services",
    hero: "Search Visibility That Compounds.",
    tagline: "Rank higher in [City]. Get found by customers who are ready to buy.",
    description:
      "Our [City] SEO team builds organic visibility that lasts. We combine technical excellence, topical content strategy, and authoritative link building to move the needle on rankings that matter — and keep them there.",
    bullets: [
      "Full technical SEO audit + implementation",
      "Keyword research targeting [City] search intent",
      "Content strategy mapped to buying stages",
      "Authority link building for [City] businesses",
      "Monthly ranking + traffic reporting",
    ],
    stats: [
      { n: "+312%", l: "avg. organic traffic growth" },
      { n: "8mo", l: "avg. time to page 1" },
      { n: "93%", l: "client retention rate" },
    ],
    cta: "Get a Free SEO Audit",
    relatedServices: [
      { label: "Local SEO", href: "/local-seo-service" },
      { label: "Technical SEO", href: "/technical-seo-service" },
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "AI SEO", href: "/ai-seo-service" },
    ],
  },
  "digital-marketing": {
    label: "Digital Marketing",
    hero: "Full-Channel Growth for [City] Businesses.",
    tagline: "One team managing every channel. One goal: growing your business in [City].",
    description:
      "We run integrated digital marketing campaigns for [City] businesses — combining SEO, paid ads, social, email, and content into one unified strategy. No silos, no confusion. Just growth.",
    bullets: [
      "Integrated multi-channel strategy",
      "SEO + PPC + social + email working together",
      "Full attribution and ROAS reporting",
      "[City] market research and competitor analysis",
      "Dedicated account team, one point of contact",
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across clients" },
      { n: "-38%", l: "avg. cost per acquisition" },
      { n: "200+", l: "Ontario brands grown" },
    ],
    cta: "Get a Free Strategy Call",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "Social Media Advertising", href: "/social-media-advertising" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },
  "web-design": {
    label: "Web Design",
    hero: "Websites Built to Convert [City] Visitors.",
    tagline: "Premium web design for [City] businesses that want to stand out and win online.",
    description:
      "We design and build conversion-optimised websites for [City] businesses — fast, beautiful, and built on a technical foundation that supports your SEO and paid campaigns. Every site is custom, every page purposeful.",
    bullets: [
      "Custom design — no templates",
      "Built for speed (Core Web Vitals green)",
      "Mobile-first responsive design",
      "Conversion rate optimisation built in",
      "CMS handoff with full training",
    ],
    stats: [
      { n: "+68%", l: "avg. conversion rate lift" },
      { n: "<2s", l: "avg. page load time" },
      { n: "5★", l: "Clutch rating" },
    ],
    cta: "Get a Free Design Consultation",
    relatedServices: [
      { label: "CRO", href: "/cro-service" },
      { label: "Landing Page Design", href: "/landing-page-design" },
      { label: "Website Redesign", href: "/website-redesign-service" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },
  "local-seo": {
    label: "Local SEO",
    hero: "Dominate Local Search in [City].",
    tagline: "Map pack position 1-3 for every service area you operate in across [City].",
    description:
      "Our [City] Local SEO service gets your business into the Google Map pack for the searches that matter most. We manage your Google Business Profile, build local citations, generate reviews, and build city-specific landing pages that rank.",
    bullets: [
      "Google Business Profile optimisation",
      "Local citation building across 45+ directories",
      "Review generation and reputation management",
      "[City] service-area landing pages",
      "Map pack tracking and reporting",
    ],
    stats: [
      { n: "Top 3", l: "map pack position for 87% of clients" },
      { n: "+220%", l: "avg. Google Maps impressions" },
      { n: "6wk", l: "avg. first results timeline" },
    ],
    cta: "Get a Free Local SEO Audit",
    relatedServices: [
      { label: "GBP Optimisation", href: "/gbp-optimisation" },
      { label: "Review Generation", href: "/review-generation" },
      { label: "Citation Audit", href: "/citation-audit" },
      { label: "Local Landing Pages", href: "/local-landing-pages" },
    ],
  },
  "google-ads": {
    label: "Google Ads Management",
    hero: "Google Ads That Pay for Themselves in [City].",
    tagline: "Profitable PPC campaigns managed by certified [City] Google Ads specialists.",
    description:
      "We run Google Search, Local Service Ads, Performance Max, and Shopping campaigns for [City] businesses — with obsessive focus on ROAS and cost-per-acquisition. No waste, no guessing. Full attribution from click to close.",
    bullets: [
      "Search, Shopping, Display, and YouTube campaigns",
      "Local Service Ads (Google Guaranteed) setup",
      "Negative keyword management + ongoing optimisation",
      "Landing page optimisation for paid traffic",
      "Full ROAS and attribution reporting",
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across accounts" },
      { n: "-42%", l: "avg. CPA reduction vs. self-managed" },
      { n: "Google", l: "Partner certified" },
    ],
    cta: "Get a Free PPC Audit",
    relatedServices: [
      { label: "Local Service Ads", href: "/local-service-ads" },
      { label: "Performance Max", href: "/performance-max" },
      { label: "Social Media Advertising", href: "/social-media-advertising" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },
};

const DEFAULT_SERVICE = SERVICE_META["seo-services"];

function toTitleCase(str: string) {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function CityServicePage() {
  const params = useParams<{ city: string; service: string }>();
  const citySlug = params.city || "toronto";
  const serviceSlug = params.service || "seo-services";

  const cityName = CITY_DISPLAY[citySlug] || toTitleCase(citySlug);
  const svc = SERVICE_META[serviceSlug] || DEFAULT_SERVICE;

  const fill = (str: string) => str.replace(/\[City\]/g, cityName);

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="bg-[#08090d] pt-32 pb-24 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-4 h-4 text-primary" />
                <p className="text-[11px] font-black uppercase tracking-widest text-primary">
                  {cityName}, Ontario · {svc.label}
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5">
                {fill(svc.hero)}
              </h1>
              <p className="text-xl text-primary italic font-bold mb-6">{fill(svc.tagline)}</p>
              <p className="text-white/50 leading-relaxed mb-10">{fill(svc.description)}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+18005550199"
                  className="inline-flex items-center gap-2 border border-white/15 text-white font-bold px-6 py-3 rounded-xl hover:border-white/30 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-1 gap-4">
              {svc.stats.map((s) => (
                <div key={s.l} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex items-center gap-5">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-black text-white">{s.n}</div>
                    <div className="text-sm text-white/40">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                What's included
              </p>
              <h2 className="text-4xl font-black text-[#0e0e0e] mb-6">
                {svc.label} for {cityName} Businesses
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every {svc.label.toLowerCase()} engagement includes a dedicated strategist, monthly reporting, and a
                roadmap built specifically for the {cityName} market. No locked-in packages — we scope to what your
                business actually needs.
              </p>
              <ul className="space-y-3">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[#0e0e0e] font-medium">{fill(b)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#08090d] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/50 text-sm">4.9 / 5 from 80+ reviews</span>
              </div>
              <blockquote className="text-white text-lg font-medium leading-relaxed mb-6">
                "Outlier completely transformed our online presence. We went from page 4 to position 1 within 7 months.
                The team is responsive, data-driven, and genuinely invested in our growth."
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm">
                  MK
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Michael K.</div>
                  <div className="text-white/30 text-xs">{cityName} Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
            Related services
          </p>
          <h2 className="text-3xl font-black text-[#0e0e0e] mb-10">
            More ways we help {cityName} businesses
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {svc.relatedServices.map((rs) => (
              <Link
                key={rs.href}
                href={rs.href}
                className="bg-white border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all group flex items-center justify-between"
              >
                <span className="font-bold text-[#0e0e0e] text-sm">{rs.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities CTA */}
      <section className="py-16 bg-primary/4 border-t border-primary/10">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">
              Province-wide coverage
            </p>
            <h3 className="text-2xl font-black text-[#0e0e0e]">
              Serving all of Ontario
            </h3>
          </div>
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View All Cities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
