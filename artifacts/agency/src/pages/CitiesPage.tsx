import { Link } from "wouter";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const GTA_CITIES = [
  { name: "Toronto", slug: "toronto", pop: "2.9M", tag: "City Core" },
  { name: "Mississauga", slug: "mississauga", pop: "717K", tag: "905" },
  { name: "Brampton", slug: "brampton", pop: "656K", tag: "905" },
  { name: "Markham", slug: "markham", pop: "353K", tag: "905" },
  { name: "Vaughan", slug: "vaughan", pop: "323K", tag: "905" },
  { name: "Richmond Hill", slug: "richmond-hill", pop: "202K", tag: "905" },
  { name: "Oakville", slug: "oakville", pop: "213K", tag: "905" },
  { name: "Burlington", slug: "burlington", pop: "186K", tag: "905" },
  { name: "Pickering", slug: "pickering", pop: "100K", tag: "905" },
  { name: "Ajax", slug: "ajax", pop: "130K", tag: "905" },
  { name: "Whitby", slug: "whitby", pop: "138K", tag: "905" },
  { name: "Oshawa", slug: "oshawa", pop: "166K", tag: "905" },
  { name: "North York", slug: "north-york", pop: "695K", tag: "City District" },
  { name: "Scarborough", slug: "scarborough", pop: "632K", tag: "City District" },
  { name: "Etobicoke", slug: "etobicoke", pop: "362K", tag: "City District" },
  { name: "Milton", slug: "milton", pop: "132K", tag: "905" },
  { name: "Newmarket", slug: "newmarket", pop: "88K", tag: "905" },
  { name: "Aurora", slug: "aurora", pop: "67K", tag: "905" },
  { name: "Halton Hills", slug: "halton-hills", pop: "61K", tag: "905" },
];

const ONTARIO_CITIES = [
  { name: "Hamilton", slug: "hamilton", pop: "569K", tag: "Southwest ON" },
  { name: "Kitchener", slug: "kitchener", pop: "256K", tag: "Waterloo Region" },
  { name: "Waterloo", slug: "waterloo", pop: "121K", tag: "Waterloo Region" },
  { name: "Cambridge", slug: "cambridge", pop: "140K", tag: "Waterloo Region" },
  { name: "Guelph", slug: "guelph", pop: "135K", tag: "Southwest ON" },
  { name: "London", slug: "london-ontario", pop: "422K", tag: "Southwest ON" },
  { name: "Ottawa", slug: "ottawa", pop: "1.0M", tag: "East ON" },
  { name: "Barrie", slug: "barrie", pop: "153K", tag: "Central ON" },
  { name: "Kingston", slug: "kingston", pop: "123K", tag: "East ON" },
  { name: "Peterborough", slug: "peterborough", pop: "83K", tag: "Central ON" },
  { name: "Brantford", slug: "brantford", pop: "104K", tag: "Southwest ON" },
  { name: "St. Catharines", slug: "st-catharines", pop: "136K", tag: "Niagara" },
  { name: "Niagara Falls", slug: "niagara-falls", pop: "89K", tag: "Niagara" },
  { name: "Windsor", slug: "windsor", pop: "229K", tag: "Southwest ON" },
  { name: "Belleville", slug: "belleville", pop: "55K", tag: "East ON" },
  { name: "Greater Sudbury", slug: "greater-sudbury", pop: "161K", tag: "Northern ON" },
  { name: "Thunder Bay", slug: "thunder-bay", pop: "108K", tag: "Northern ON" },
  { name: "Sault Ste. Marie", slug: "sault-ste-marie", pop: "73K", tag: "Northern ON" },
  { name: "North Bay", slug: "north-bay", pop: "51K", tag: "Northern ON" },
  { name: "Orangeville", slug: "orangeville", pop: "31K", tag: "Central ON" },
];

const SERVICES = [
  { label: "SEO", slug: "seo-services" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Web Design", slug: "web-design" },
  { label: "Local SEO", slug: "local-seo" },
  { label: "Google Ads", slug: "google-ads" },
];

function CityCard({ city }: { city: { name: string; slug: string; pop: string; tag: string } }) {
  return (
    <div className="bg-white border border-[#e5e2d9] rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
          {city.tag}
        </span>
      </div>
      <h3 className="font-black text-[#0e0e0e] text-lg mb-1">{city.name}</h3>
      <p className="text-xs text-gray-400 mb-4">Pop. ~{city.pop}</p>
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

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">
              Cities We Serve
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
              Local expertise.<br />
              <span className="text-primary italic">Province-wide reach.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              Outlier serves businesses across the Greater Toronto Area and all of Ontario. Same team,
              same strategy, same relentless focus on results — wherever you are in the province.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "39+", l: "Ontario cities" },
              { n: "200+", l: "Ontario clients" },
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
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">
                Greater Toronto Area
              </p>
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

      {/* Ontario Cities */}
      <section className="py-20 border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">
                Ontario
              </p>
              <h2 className="text-3xl font-black text-[#0e0e0e]">Province-Wide</h2>
            </div>
            <span className="text-sm text-gray-400">{ONTARIO_CITIES.length} cities</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {ONTARIO_CITIES.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#08090d]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Don't see your city?
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            We serve businesses across all of Ontario. Get in touch and we'll build a strategy for your market.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
