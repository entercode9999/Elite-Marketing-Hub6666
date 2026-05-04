import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

const GTA_CITIES = [
  { name: "Toronto",       slug: "toronto",       tier: "premium",  province: "Ontario" },
  { name: "Mississauga",   slug: "mississauga",   tier: "major",    province: "Ontario" },
  { name: "Brampton",      slug: "brampton",      tier: "major",    province: "Ontario" },
  { name: "Markham",       slug: "markham",       tier: "major",    province: "Ontario" },
  { name: "Vaughan",       slug: "vaughan",       tier: "major",    province: "Ontario" },
  { name: "Richmond Hill", slug: "richmond-hill", tier: "standard", province: "Ontario" },
  { name: "Oakville",      slug: "oakville",      tier: "standard", province: "Ontario" },
  { name: "Burlington",    slug: "burlington",    tier: "standard", province: "Ontario" },
  { name: "Pickering",     slug: "pickering",     tier: "standard", province: "Ontario" },
  { name: "Ajax",          slug: "ajax",          tier: "standard", province: "Ontario" },
  { name: "Whitby",        slug: "whitby",        tier: "standard", province: "Ontario" },
  { name: "Oshawa",        slug: "oshawa",        tier: "standard", province: "Ontario" },
  { name: "North York",    slug: "north-york",    tier: "major",    province: "Ontario" },
  { name: "Scarborough",   slug: "scarborough",   tier: "major",    province: "Ontario" },
  { name: "Etobicoke",     slug: "etobicoke",     tier: "major",    province: "Ontario" },
  { name: "Milton",        slug: "milton",        tier: "standard", province: "Ontario" },
  { name: "Newmarket",     slug: "newmarket",     tier: "standard", province: "Ontario" },
  { name: "Aurora",        slug: "aurora",        tier: "standard", province: "Ontario" },
  { name: "Halton Hills",  slug: "halton-hills",  tier: "emerging", province: "Ontario" },
];

const ONTARIO_CITIES = [
  { name: "Hamilton",       slug: "hamilton",       tier: "major",    province: "Ontario" },
  { name: "Kitchener",      slug: "kitchener",      tier: "standard", province: "Ontario" },
  { name: "Waterloo",       slug: "waterloo",       tier: "standard", province: "Ontario" },
  { name: "Cambridge",      slug: "cambridge",      tier: "standard", province: "Ontario" },
  { name: "Guelph",         slug: "guelph",         tier: "emerging", province: "Ontario" },
  { name: "London",         slug: "london-ontario", tier: "major",    province: "Ontario" },
  { name: "Ottawa",         slug: "ottawa",         tier: "major",    province: "Ontario" },
  { name: "Barrie",         slug: "barrie",         tier: "standard", province: "Ontario" },
  { name: "Kingston",       slug: "kingston",       tier: "emerging", province: "Ontario" },
  { name: "Peterborough",   slug: "peterborough",   tier: "emerging", province: "Ontario" },
  { name: "Brantford",      slug: "brantford",      tier: "emerging", province: "Ontario" },
  { name: "St. Catharines", slug: "st-catharines",  tier: "emerging", province: "Ontario" },
  { name: "Niagara Falls",  slug: "niagara-falls",  tier: "emerging", province: "Ontario" },
  { name: "Windsor",        slug: "windsor",        tier: "standard", province: "Ontario" },
  { name: "Belleville",     slug: "belleville",     tier: "emerging", province: "Ontario" },
  { name: "Greater Sudbury",slug: "greater-sudbury",tier: "standard", province: "Ontario" },
  { name: "Thunder Bay",    slug: "thunder-bay",    tier: "emerging", province: "Ontario" },
  { name: "Sault Ste. Marie",slug: "sault-ste-marie",tier: "emerging",province: "Ontario" },
  { name: "North Bay",      slug: "north-bay",      tier: "emerging", province: "Ontario" },
  { name: "Orangeville",    slug: "orangeville",    tier: "emerging", province: "Ontario" },
];

const BC_CITIES = [
  { name: "Vancouver",  slug: "vancouver",   tier: "major",    province: "British Columbia" },
  { name: "Surrey",     slug: "surrey",      tier: "standard", province: "British Columbia" },
  { name: "Burnaby",    slug: "burnaby",     tier: "standard", province: "British Columbia" },
  { name: "Victoria",   slug: "victoria",    tier: "standard", province: "British Columbia" },
  { name: "Kelowna",    slug: "kelowna",     tier: "standard", province: "British Columbia" },
  { name: "Abbotsford", slug: "abbotsford",  tier: "emerging", province: "British Columbia" },
  { name: "Coquitlam",  slug: "coquitlam",   tier: "standard", province: "British Columbia" },
  { name: "Richmond",   slug: "richmond-bc", tier: "standard", province: "British Columbia" },
];

const AB_CITIES = [
  { name: "Calgary",    slug: "calgary",    tier: "major",    province: "Alberta" },
  { name: "Edmonton",   slug: "edmonton",   tier: "major",    province: "Alberta" },
  { name: "Red Deer",   slug: "red-deer",   tier: "standard", province: "Alberta" },
  { name: "Lethbridge", slug: "lethbridge", tier: "standard", province: "Alberta" },
  { name: "Airdrie",    slug: "airdrie",    tier: "emerging", province: "Alberta" },
];

const QC_CITIES = [
  { name: "Montreal",    slug: "montreal",    tier: "major",    province: "Quebec" },
  { name: "Quebec City", slug: "quebec-city", tier: "major",    province: "Quebec" },
  { name: "Laval",       slug: "laval",       tier: "major",    province: "Quebec" },
  { name: "Longueuil",   slug: "longueuil",   tier: "standard", province: "Quebec" },
  { name: "Gatineau",    slug: "gatineau",    tier: "standard", province: "Quebec" },
];

const PRAIRIES_CITIES = [
  { name: "Winnipeg",  slug: "winnipeg",  tier: "major",    province: "Manitoba" },
  { name: "Saskatoon", slug: "saskatoon", tier: "standard", province: "Saskatchewan" },
  { name: "Regina",    slug: "regina",    tier: "standard", province: "Saskatchewan" },
];

const ATLANTIC_CITIES = [
  { name: "Halifax",     slug: "halifax",     tier: "major",    province: "Nova Scotia" },
  { name: "Moncton",     slug: "moncton",     tier: "standard", province: "New Brunswick" },
  { name: "Fredericton", slug: "fredericton", tier: "emerging", province: "New Brunswick" },
];

const SERVICES = [
  { label: "SEO Services", slug: "seo-services" },
  { label: "Local SEO", slug: "local-seo" },
  { label: "Google Ads", slug: "google-ads" },
  { label: "Paid Social", slug: "paid-social" },
  { label: "Content Marketing", slug: "content-marketing" },
  { label: "Email Marketing", slug: "email-marketing" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Web Design", slug: "web-design" },
  { label: "Social Ads", slug: "social-ads" },
];

const TIER_BADGE: Record<string, { label: string; colour: string }> = {
  premium:  { label: "Premium Market",  colour: "bg-red-50 text-red-700 border-red-200" },
  major:    { label: "Major Market",    colour: "bg-orange-50 text-orange-700 border-orange-200" },
  standard: { label: "Standard Market", colour: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  emerging: { label: "Emerging Market", colour: "bg-green-50 text-green-700 border-green-200" },
};

function CityCard({ city }: { city: { name: string; slug: string; tier?: string; province?: string } }) {
  const badge = city.tier ? TIER_BADGE[city.tier] : null;
  return (
    <div className="bg-white border border-[#e5e2d9] rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        {badge && (
          <span className={`text-[9px] font-black uppercase tracking-wide border rounded-full px-2 py-0.5 ${badge.colour}`}>
            {badge.label}
          </span>
        )}
      </div>
      <h3 className="font-black text-[#0e0e0e] text-base mb-0.5">{city.name}</h3>
      {city.province && <p className="text-[10px] text-gray-400 font-medium mb-3">{city.province}</p>}
      <div className="space-y-1">
        {SERVICES.map((svc) => (
          <Link
            key={svc.slug}
            href={`/${city.slug}/${svc.slug}`}
            className="flex items-center justify-between text-xs text-gray-500 hover:text-primary hover:bg-primary/4 rounded-lg px-2 py-1.5 transition-all"
          >
            <span>{svc.label}</span>
            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProvinceSection({
  label,
  title,
  cities,
}: {
  label: string;
  title: string;
  cities: { name: string; slug: string }[];
}) {
  return (
    <section className="py-20 border-t border-[#e5e2d9]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">{label}</p>
            <h2 className="text-3xl font-black text-[#0e0e0e]">{title}</h2>
          </div>
          <span className="text-sm text-gray-400">
            {cities.length} {cities.length === 1 ? "city" : "cities"}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cities.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ALL_CITIES = [
  ...GTA_CITIES,
  ...ONTARIO_CITIES,
  ...BC_CITIES,
  ...AB_CITIES,
  ...QC_CITIES,
  ...PRAIRIES_CITIES,
  ...ATLANTIC_CITIES,
];

const SERVICE_HUB_LINKS = [
  { label: "SEO Services",       slug: "seo-services",       desc: "Rank on page 1 of Google in your city." },
  { label: "Local SEO",          slug: "local-seo",          desc: "Dominate Google Maps in your local area." },
  { label: "Google Ads",         slug: "google-ads",         desc: "Immediate, measurable paid search results." },
  { label: "Paid Social",        slug: "paid-social",        desc: "Reach your ideal customer on Meta & TikTok." },
  { label: "Content Marketing",  slug: "content-marketing",  desc: "Build compounding organic authority." },
  { label: "Email Marketing",    slug: "email-marketing",    desc: "$36:1 average ROI. Your owned channel." },
  { label: "Digital Marketing",  slug: "digital-marketing",  desc: "Full-funnel integrated strategy." },
  { label: "Web Design",         slug: "web-design",         desc: "Conversion-first websites built to rank." },
  { label: "Social Ads",         slug: "social-ads",         desc: "Demand generation across every social platform." },
];

export default function CitiesPage() {
  useSeo({
    title: "Canadian Cities We Serve | Outlier Digital Marketing",
    description:
      "Outlier delivers SEO, Google Ads, Local SEO, and full digital marketing services across 64+ Canadian cities — Toronto, Vancouver, Calgary, Ottawa, Montreal, and beyond.",
    canonicalPath: "/cities",
  });

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Cities We Serve</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
              Digital marketing built<br />
              <span className="text-primary italic">for your city.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Outlier delivers SEO, Google Ads, Local SEO, and full digital marketing across 64+ Canadian cities — from Toronto and Vancouver to Calgary, Ottawa, Montreal, and beyond. Every strategy is built around your city's specific competitive dynamics, not a generic template.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "64+", l: "Canadian cities" },
              { n: "9",   l: "services per city" },
              { n: "576+", l: "city-service pages" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-white">{s.n}</div>
                <div className="text-xs text-white/30 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service hubs — internal linking grid */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Browse by service</p>
          <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">
            Every service. Every Canadian city.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_HUB_LINKS.map((svc) => (
              <div key={svc.slug} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-5">
                <h3 className="font-black text-[#0e0e0e] mb-1">{svc.label}</h3>
                <p className="text-xs text-gray-500 mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_CITIES.filter((c) => ["premium","major"].includes(c.tier ?? "")).slice(0, 8).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}/${svc.slug}`}
                      className="text-[11px] font-semibold text-primary bg-primary/8 hover:bg-primary/15 rounded-full px-2.5 py-1 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <Link
                    href={`/toronto/${svc.slug}`}
                    className="text-[11px] font-semibold text-gray-400 hover:text-primary rounded-full px-2.5 py-1 transition-colors"
                  >
                    + {ALL_CITIES.length - 8} more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTA Cities */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">Greater Toronto Area</p>
              <h2 className="text-3xl font-black text-[#0e0e0e]">GTA Coverage</h2>
            </div>
            <span className="text-sm text-gray-400">{GTA_CITIES.length} cities</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {GTA_CITIES.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      <ProvinceSection label="Ontario" title="Province-Wide" cities={ONTARIO_CITIES} />
      <ProvinceSection label="British Columbia" title="BC Coverage" cities={BC_CITIES} />
      <ProvinceSection label="Alberta" title="Alberta Coverage" cities={AB_CITIES} />
      <ProvinceSection label="Quebec" title="Quebec Coverage" cities={QC_CITIES} />
      <ProvinceSection label="Prairies" title="Manitoba & Saskatchewan" cities={PRAIRIES_CITIES} />
      <ProvinceSection label="Atlantic Canada" title="Atlantic Coverage" cities={ATLANTIC_CITIES} />

      {/* CTA */}
      <section className="py-20 bg-[#08090d] border-t border-white/8">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-black text-white mb-4">Don't see your city?</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            We serve businesses across Canada. Get in touch and we'll build a strategy for your market.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
