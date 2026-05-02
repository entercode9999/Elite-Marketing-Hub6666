export interface CityData {
  name: string;
  slug: string;
  province: string;
  region: "gta" | "ontario" | "canada";
  population: string;
  tagline: string;
  marketNote: string;
  neighborhoods: string[];
  industries: string[];
  mapPackNote: string;
  competitionLevel: "medium" | "high" | "very-high";
  stats: { value: string; label: string }[];
  caseStudy: {
    client: string;
    industry: string;
    headline: string;
    before: string;
    after: string;
    weeks: number;
    metrics: { value: string; label: string }[];
    body: string;
  };
  nearbyCities: string[];
  relatedServices: { name: string; slug: string }[];
}

export const cities: Record<string, CityData> = {
  toronto: {
    name: "Toronto",
    slug: "toronto",
    province: "Ontario",
    region: "gta",
    population: "2.9M",
    tagline: "built for the map pack, not the algorithm of the week.",
    marketNote:
      "Toronto's map pack is dominated by businesses in the core four neighbourhoods — Midtown, Downtown, Etobicoke, and North York. If you're not in those clusters, proximity weighting is working against you. Here's how we close the gap.",
    neighborhoods: [
      "Downtown Core",
      "Midtown",
      "North York",
      "Etobicoke",
      "Scarborough",
      "East York",
      "The Beaches",
      "Liberty Village",
      "The Annex",
      "Rosedale",
      "Forest Hill",
      "Leslieville",
    ],
    industries: ["Legal", "Dental & Medical", "Home Services", "Real Estate", "Restaurants"],
    mapPackNote:
      "Toronto's local market — it's at least three: Square One pulls proximity toward Mississauga, map rankings toward Etobicoke, and the downtown core creates a competition level that smaller cities don't have. Google's GBP algorithm fights all of this simultaneously.",
    competitionLevel: "very-high",
    stats: [
      { value: "+312%", label: "Average lead growth" },
      { value: "#1–2", label: "Map pack positions" },
      { value: "+58", label: "Monthly enquiries" },
    ],
    caseStudy: {
      client: "Apex Dental Group",
      industry: "Dental",
      headline: "from outside the top 10 to map pack #2 in 14 weeks.",
      before: "Position 11+ for 'dentist Etobicoke'",
      after: "Position 2, sustained 6 months",
      weeks: 14,
      metrics: [
        { value: "+86%", label: "New patient enquiries" },
        { value: "4.7k", label: "Monthly impressions" },
        { value: "41+", label: "Citations corrected" },
      ],
      body: "Ranking outside the top 10 in Toronto's Etobicoke corridor despite being a 12-year practice with strong reviews. A local SEO audit identified the issue: GBP had never been fully optimised — no service categories beyond 'dentist,' no photo updates in two years, and NAP data inconsistent across 14 major directories. After six weeks of GBP remediation and citation correction, the clinic entered the map pack at position four. After a further three months of review generation and local content, it reached position two and maintained it.",
    },
    nearbyCities: ["Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill", "Oakville"],
    relatedServices: [
      { name: "Google Ads", slug: "google-ads-management" },
      { name: "Technical SEO", slug: "technical-seo-service" },
      { name: "Content Marketing", slug: "content-marketing-service" },
      { name: "Google Local Service Ads", slug: "local-service-ads" },
    ],
  },

  mississauga: {
    name: "Mississauga",
    slug: "mississauga",
    province: "Ontario",
    region: "gta",
    population: "740K",
    tagline: "built for the map pack, not the algorithm of the week.",
    marketNote:
      "Mississauga's map pack is dominated by businesses three blocks from Square One, Port Credit, or Erin Mills. If you're not in those proximity bands, Google's weighting is constantly working against you. Here's how we close the gap.",
    neighborhoods: [
      "Square One",
      "Port Credit",
      "Streetsville",
      "Erin Mills",
      "Cooksville",
      "Meadowvale",
      "Lorne Park",
      "Hurontario",
      "Clarkson",
      "Malton",
      "Churchill Meadows",
      "City Centre",
    ],
    industries: ["Home Services", "Dental", "Real Estate", "Auto", "Legal"],
    mapPackNote:
      "Mississauga's local market — it's at least three: Square One pulls proximity toward the city centre, Port Credit operates as its own micro-economy, and the western corridor (Erin Mills, Meadowvale, Churchill Meadows) fights its own map pack battle. Google's GBP algorithm weights all three differently.",
    competitionLevel: "high",
    stats: [
      { value: "+241%", label: "Average bookings growth" },
      { value: "#1", label: "Map pack position" },
      { value: "+58", label: "Monthly enquiries" },
    ],
    caseStudy: {
      client: "Cooksville Auto Body",
      industry: "Auto Services",
      headline: "from #11 to map pack #2 in 14 weeks.",
      before: "Not in map pack for 'auto body Mississauga'",
      after: "Map pack #2, sustained 5 months",
      weeks: 14,
      metrics: [
        { value: "+241%", label: "GBP fully optimised" },
        { value: "14", label: "Violations corrected" },
        { value: "#2", label: "Map pack achieved" },
      ],
      body: "Ranking on Dundas East, Cooksville Auto Body was being beaten by shop.com — purely a review volume and citation count issue. We didn't change their offer. We changed what Google could see about them. GBP fully optimised, 14 citation inconsistencies corrected, neighbourhood-targeted local content live across six Mississauga sub-markets. Result: map pack position two sustained for five months.",
    },
    nearbyCities: ["Toronto", "Brampton", "Oakville", "Burlington", "Milton", "Etobicoke"],
    relatedServices: [
      { name: "Google Ads", slug: "google-ads-management" },
      { name: "Technical SEO", slug: "technical-seo-service" },
      { name: "Reputation Management", slug: "reputation-management" },
      { name: "Google Local Service Ads", slug: "local-service-ads" },
    ],
  },

  ottawa: {
    name: "Ottawa",
    slug: "ottawa",
    province: "Ontario",
    region: "ontario",
    population: "1M",
    tagline: "built for the Ottawa map pack, not regional afterthoughts.",
    marketNote:
      "Ottawa's map pack clusters tightly around Centretown, Glebe, and Kanata. Government procurement and bilingual market requirements create a unique local SEO landscape that generic strategies miss entirely.",
    neighborhoods: [
      "Centretown",
      "Glebe",
      "Kanata",
      "Barrhaven",
      "Orleans",
      "Westboro",
      "Byward Market",
      "Alta Vista",
      "Nepean",
      "Stittsville",
      "Gloucester",
      "Hunt Club",
    ],
    industries: ["Government Services", "Legal", "Dental", "Real Estate", "Consulting"],
    mapPackNote:
      "Ottawa operates with a bilingual SEO requirement unique in Canada — GBP profiles, local content, and citation building in both English and French for businesses serving national clients or the Gatineau corridor.",
    competitionLevel: "high",
    stats: [
      { value: "+187%", label: "Lead volume growth" },
      { value: "Top 3", label: "Map pack positions" },
      { value: "90 days", label: "First movement" },
    ],
    caseStudy: {
      client: "Glebe Family Law",
      industry: "Legal Services",
      headline: "from invisible to map pack #1 in 16 weeks.",
      before: "No map pack presence for 'family lawyer Ottawa'",
      after: "Map pack #1, 4 months sustained",
      weeks: 16,
      metrics: [
        { value: "+187%", label: "Consultation bookings" },
        { value: "#1", label: "Ottawa map pack" },
        { value: "28+", label: "New reviews earned" },
      ],
      body: "A boutique family law firm in the Glebe was invisible for high-intent Ottawa searches despite 8 years of operation. GBP had never been properly categorised, and NAP data across 22 directories was inconsistent. After full remediation, bilingual citation building, and local content targeting key Ottawa neighbourhoods, the firm reached map pack position one and maintained it for four months.",
    },
    nearbyCities: ["Gatineau", "Kanata", "Barrhaven", "Orleans", "Nepean", "Stittsville"],
    relatedServices: [
      { name: "Google Ads", slug: "google-ads-management" },
      { name: "Content Marketing", slug: "content-marketing-service" },
      { name: "Technical SEO", slug: "technical-seo-service" },
      { name: "Reputation Management", slug: "reputation-management" },
    ],
  },
};

export const cityList = Object.values(cities);

export function getCity(slug: string): CityData | undefined {
  return cities[slug];
}
