import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

const GTA_CITIES = [
  { name: "Toronto", slug: "toronto" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Brampton", slug: "brampton" },
  { name: "Markham", slug: "markham" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Richmond Hill", slug: "richmond-hill" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
  { name: "Pickering", slug: "pickering" },
  { name: "Ajax", slug: "ajax" },
  { name: "Whitby", slug: "whitby" },
  { name: "Oshawa", slug: "oshawa" },
  { name: "North York", slug: "north-york" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Etobicoke", slug: "etobicoke" },
  { name: "Milton", slug: "milton" },
  { name: "Newmarket", slug: "newmarket" },
  { name: "Aurora", slug: "aurora" },
  { name: "Halton Hills", slug: "halton-hills" },
];

const ONTARIO_CITIES = [
  { name: "Hamilton", slug: "hamilton" },
  { name: "Kitchener", slug: "kitchener" },
  { name: "Waterloo", slug: "waterloo" },
  { name: "Cambridge", slug: "cambridge" },
  { name: "Guelph", slug: "guelph" },
  { name: "London", slug: "london-ontario" },
  { name: "Ottawa", slug: "ottawa" },
  { name: "Barrie", slug: "barrie" },
  { name: "Kingston", slug: "kingston" },
  { name: "Peterborough", slug: "peterborough" },
  { name: "Brantford", slug: "brantford" },
  { name: "St. Catharines", slug: "st-catharines" },
  { name: "Niagara Falls", slug: "niagara-falls" },
  { name: "Windsor", slug: "windsor" },
  { name: "Belleville", slug: "belleville" },
  { name: "Greater Sudbury", slug: "greater-sudbury" },
  { name: "Thunder Bay", slug: "thunder-bay" },
  { name: "Sault Ste. Marie", slug: "sault-ste-marie" },
  { name: "North Bay", slug: "north-bay" },
  { name: "Orangeville", slug: "orangeville" },
];

const BC_CITIES = [
  { name: "Vancouver", slug: "vancouver" },
  { name: "Surrey", slug: "surrey" },
  { name: "Burnaby", slug: "burnaby" },
  { name: "Victoria", slug: "victoria" },
  { name: "Kelowna", slug: "kelowna" },
  { name: "Abbotsford", slug: "abbotsford" },
  { name: "Coquitlam", slug: "coquitlam" },
  { name: "Richmond", slug: "richmond-bc" },
];

const AB_CITIES = [
  { name: "Calgary", slug: "calgary" },
  { name: "Edmonton", slug: "edmonton" },
  { name: "Red Deer", slug: "red-deer" },
  { name: "Lethbridge", slug: "lethbridge" },
  { name: "Airdrie", slug: "airdrie" },
];

const QC_CITIES = [
  { name: "Montreal", slug: "montreal" },
  { name: "Quebec City", slug: "quebec-city" },
  { name: "Laval", slug: "laval" },
  { name: "Longueuil", slug: "longueuil" },
  { name: "Gatineau", slug: "gatineau" },
];

const PRAIRIES_CITIES = [
  { name: "Winnipeg", slug: "winnipeg" },
  { name: "Saskatoon", slug: "saskatoon" },
  { name: "Regina", slug: "regina" },
];

const ATLANTIC_CITIES = [
  { name: "Halifax", slug: "halifax" },
  { name: "Moncton", slug: "moncton" },
  { name: "Fredericton", slug: "fredericton" },
];

const SERVICES = [
  { label: "SEO", slug: "seo-services" },
  { label: "Web Design", slug: "web-design" },
  { label: "Google Ads", slug: "google-ads" },
  { label: "Social Ads", slug: "social-ads" },
  { label: "Local SEO", slug: "local-seo" },
  { label: "Digital Marketing", slug: "digital-marketing" },
];

function CityCard({ city }: { city: { name: string; slug: string } }) {
  return (
    <div className="bg-white border border-[#e5e2d9] rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group">
      <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
        <MapPin className="w-4 h-4 text-primary" />
      </div>
      <h3 className="font-black text-[#0e0e0e] text-lg mb-1">{city.name}</h3>
      <div className="space-y-1.5">
        {SERVICES.map((svc) => (
          <Link
            key={svc.slug}
            href={`/${city.slug}/${svc.slug}`}
            className="flex items-center justify-between text-xs text-gray-500 hover:text-primary hover:bg-primary/4 rounded-lg px-2 py-1.5 transition-all"
          >
            <span>{svc.label}</span>
            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
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

export default function CitiesPage() {
  useSeo({
    title: "Canadian Cities We Serve | Outlier Digital Marketing",
    description:
      "Outlier builds local SEO and digital marketing campaigns for businesses across Canada — from Vancouver to Halifax, Calgary to Ottawa, and everywhere in between.",
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
              Local expertise.<br />
              <span className="text-primary italic">Canada-wide reach.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Outlier serves businesses across the Greater Toronto Area, all of Ontario, and major cities
              throughout Canada — BC, Alberta, Quebec, the Prairies, and Atlantic Canada.
              Same team, same relentless strategy, same focus on results.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "65+", l: "Canadian cities" },
              { n: "500+", l: "clients served" },
              { n: "10yr", l: "in the market" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-white">{s.n}</div>
                <div className="text-xs text-white/30 mt-1">{s.l}</div>
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
