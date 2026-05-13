import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

const sections = [
  {
    title: "Company",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Our Work", "/our-work"],
      ["Insights", "/insights"],
      ["Pricing", "/pricing"],
      ["Testimonials", "/testimonials"],
      ["Book a Strategy Call", "/book-call"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["SEO Services", "/seo-services"],
      ["Local SEO", "/local-seo-service"],
      ["Technical SEO", "/technical-seo-service"],
      ["AI SEO", "/ai-seo-service"],
      ["Google Ads / PPC", "/google-ads-management"],
      ["Content Marketing", "/content-marketing-service"],
    ],
  },
  {
    title: "Cities",
    links: [
      ["Canadian Cities", "/cities"],
      ["Toronto", "/toronto/seo-services"],
      ["Mississauga", "/mississauga/seo-services"],
      ["Hamilton", "/hamilton/seo-services"],
      ["Ottawa", "/ottawa/seo-services"],
      ["Brampton", "/brampton/seo-services"],
    ],
  },
];

const urlTotal = 694;
const indexableTotal = 694;

export default function SitemapPage() {
  useSeo({
    title: "Sitemap | Outlier",
    description: "Browse Outlier's sitemap with company pages, services, and Canadian city pages.",
    canonicalPath: "/sitemap",
  });

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1a56ff] mb-4">Sitemap</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#0e0e0e] mb-6">Find every page.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl">
            <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Total URLs</p>
              <p className="text-4xl font-black text-[#0e0e0e]">{urlTotal}</p>
            </div>
            <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Indexable pages</p>
              <p className="text-4xl font-black text-[#0e0e0e]">{indexableTotal}</p>
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#0e0e0e] mb-5">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gray-600 hover:text-[#1a56ff] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
