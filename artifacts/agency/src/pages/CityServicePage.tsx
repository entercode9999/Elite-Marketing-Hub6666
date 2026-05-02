import { useParams, Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Star,
  Phone,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Search,
  Globe,
  Zap,
  Users,
  Target,
} from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/* ─── City data ─────────────────────────────────────────────────── */

interface CityData {
  name: string;
  province: string;
  pop: string;
  region: string;
  marketBlurb: string;
  competitionNote: string;
  neighborhoodsOrAreas: string;
  economyHighlights: string;
}

const CITIES: Record<string, CityData> = {
  toronto: {
    name: "Toronto",
    province: "Ontario",
    pop: "2.9 million",
    region: "Greater Toronto Area",
    marketBlurb:
      "Toronto is Canada's largest city and its most competitive digital marketing market. Businesses in the 416 compete against national brands, U.S. entrants, and thousands of well-funded local operators. Ranking on the first page of Google in Toronto requires a level of technical execution and content depth that most agencies simply don't have the capacity to deliver.",
    competitionNote:
      "The Toronto search landscape is among the most contested in the country. Industries like real estate, legal, dental, home services, and SaaS are especially competitive, with top-ranking pages often boasting thousands of referring domains and years of topical authority.",
    neighborhoodsOrAreas:
      "Downtown Core, Midtown, North York, Scarborough, Etobicoke, The Annex, Liberty Village, King West, Leslieville, Yorkville",
    economyHighlights:
      "Canada's financial capital; home to the TSX, major law firms, world-class healthcare institutions, and a booming tech and startup ecosystem",
  },
  mississauga: {
    name: "Mississauga",
    province: "Ontario",
    pop: "717,000",
    region: "Greater Toronto Area",
    marketBlurb:
      "Mississauga is the 7th largest city in Canada and one of the fastest-growing business markets in Ontario. Home to over 60 Fortune 500 Canadian headquarters, the city supports a diverse economy — from professional services and healthcare to manufacturing, logistics, and retail. Digital competition here is fierce, particularly for service businesses targeting both the local market and cross-GTA clientele.",
    competitionNote:
      "Mississauga businesses often compete for both Mississauga-specific search terms and broader GTA terms. A strong local SEO and content strategy needs to capture searches across multiple intent categories.",
    neighborhoodsOrAreas:
      "City Centre, Port Credit, Streetsville, Meadowvale, Erin Mills, Clarkson, Cooksville, Mississauga Valleys",
    economyHighlights:
      "Home to major corporate HQs, Pearson International Airport ecosystem, healthcare, manufacturing, and one of Ontario's largest business parks",
  },
  brampton: {
    name: "Brampton",
    province: "Ontario",
    pop: "656,000",
    region: "Greater Toronto Area",
    marketBlurb:
      "Brampton is the 9th most populous city in Canada and one of the GTA's fastest-growing communities. Its diverse population and booming small-business sector make it an active digital market — particularly for local services, healthcare, professional services, retail, and logistics companies looking to capture Brampton-specific search traffic.",
    competitionNote:
      "The Brampton market has seen a surge in digital investment in recent years. Local SEO and neighbourhood-specific landing pages are high-ROI tactics for businesses targeting specific parts of the city.",
    neighborhoodsOrAreas:
      "Downtown Brampton, Bramalea, Heart Lake, Springdale, Castlemore, Gore, Sandalwood, Mount Pleasant",
    economyHighlights:
      "Major logistics and distribution hub, healthcare, multicultural retail and food sector, growing tech and professional services presence",
  },
  markham: {
    name: "Markham",
    province: "Ontario",
    pop: "353,000",
    region: "Greater Toronto Area",
    marketBlurb:
      "Markham is Canada's 'High-Tech Capital,' home to over 1,400 tech companies and a highly educated, high-income professional population. The city's businesses — from healthcare clinics and professional services to software companies and retail — are increasingly sophisticated in their digital marketing expectations and willing to invest in quality.",
    competitionNote:
      "Markham's tech-savvy business environment means competitors are often well-informed about SEO and paid media. Winning here requires demonstrable technical depth, not just surface-level optimisation.",
    neighborhoodsOrAreas:
      "Unionville, Thornhill, Milliken, Cornell, Cathedraltown, Angus Glen, Buttonville, Berczy Village",
    economyHighlights:
      "Canada's high-tech capital; IBM, AMD, Huawei, and hundreds of SMB tech firms; strong healthcare, financial services, and professional services sectors",
  },
  vaughan: {
    name: "Vaughan",
    province: "Ontario",
    pop: "323,000",
    region: "Greater Toronto Area",
    marketBlurb:
      "Vaughan is one of the fastest-growing cities in Canada, driven by major commercial and residential development. The city's business community spans construction, real estate, professional services, healthcare, food and hospitality, and retail. As the population grows, so does the competition for top search positions in the Vaughan market.",
    competitionNote:
      "Vaughan has seen rapid growth in local search competition, particularly in home services, real estate, dental, and restaurant categories. Businesses that invest in SEO now will have a compounding advantage as the city's population continues to expand.",
    neighborhoodsOrAreas:
      "Woodbridge, Maple, Thornhill, Concord, Kleinburg, Vellore Village, Sonoma Heights",
    economyHighlights:
      "Construction and development, food manufacturing, professional services, Vaughan Metropolitan Centre (VMC) commercial hub",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    province: "Ontario",
    pop: "202,000",
    region: "Greater Toronto Area",
    marketBlurb:
      "Richmond Hill is a prosperous suburban community with a high average household income and a strong professional services and healthcare economy. Its residents are active online searchers and the competition for local service keywords — dental, medical, legal, home services, fitness — is significant and growing.",
    competitionNote:
      "Richmond Hill businesses that rank well for local search terms benefit from a highly valuable customer base. The investment in SEO and local digital marketing pays back quickly given the purchasing power of the local market.",
    neighborhoodsOrAreas:
      "Oak Ridges, Jefferson, Bayview Hill, Langstaff, North Richvale, Mill Pond, Crosby",
    economyHighlights:
      "Professional services, healthcare and medical clinics, retail, technology companies, real estate and construction",
  },
  oakville: {
    name: "Oakville",
    province: "Ontario",
    pop: "213,000",
    region: "Greater Toronto Area — Halton",
    marketBlurb:
      "Oakville consistently ranks as one of Canada's most affluent communities. Its businesses serve a high-income, quality-conscious clientele who research extensively online before making purchasing decisions. Organic search visibility and a polished web presence are not optional for Oakville businesses — they are prerequisites for capturing premium clients.",
    competitionNote:
      "Oakville's premium market means the stakes are high for both service businesses and professional practices. Standing out in search requires a brand that conveys credibility, combined with technical SEO execution that outpaces local competitors.",
    neighborhoodsOrAreas:
      "Downtown Oakville, Kerr Village, Uptown Core, Glen Abbey, Bronte, Palermo, Joshua Creek",
    economyHighlights:
      "Financial services, professional and business services, healthcare, real estate, luxury retail, Ford Canada HQ",
  },
  burlington: {
    name: "Burlington",
    province: "Ontario",
    pop: "186,000",
    region: "Greater Toronto Area — Halton",
    marketBlurb:
      "Burlington is one of Ontario's most liveable cities — and one of its most competitive local business markets. Positioned between Toronto and Hamilton on the QEW corridor, Burlington businesses serve both a substantial local population and commuter residents. Local search visibility is critical for service businesses in healthcare, home services, real estate, restaurants, and professional services.",
    competitionNote:
      "Burlington businesses frequently compete against both Oakville and Hamilton-based operators targeting the same search terms. A strong local content and GBP strategy is essential for market capture.",
    neighborhoodsOrAreas:
      "Downtown Burlington, Alton, Brant Hills, Tyandaga, Millcroft, Palmer, Headon Forest",
    economyHighlights:
      "Healthcare, professional services, manufacturing, food processing, retail and hospitality along the lakeshore corridor",
  },
  hamilton: {
    name: "Hamilton",
    province: "Ontario",
    pop: "569,000",
    region: "Southern Ontario",
    marketBlurb:
      "Hamilton is one of Ontario's fastest-evolving cities — a former steel town that has reinvented itself as a hub for healthcare, education, creative industries, and small business. McMaster University, Hamilton Health Sciences, and a booming arts and food scene drive significant local economic activity. The city's growing small business community is increasingly investing in digital marketing to compete with Toronto-based operators targeting Hamilton search terms.",
    competitionNote:
      "Hamilton is an excellent market for businesses investing in SEO early. Many sectors remain under-optimised, creating real opportunities for businesses willing to invest in content depth and technical execution.",
    neighborhoodsOrAreas:
      "Downtown Hamilton, Westdale, Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, Locke Street",
    economyHighlights:
      "McMaster University, Hamilton Health Sciences, steel and manufacturing legacy industries, growing tech, arts, food, and hospitality sectors",
  },
  kitchener: {
    name: "Kitchener",
    province: "Ontario",
    pop: "256,000",
    region: "Waterloo Region",
    marketBlurb:
      "Kitchener is the commercial heart of Waterloo Region — Canada's 'Silicon Valley of the North.' Home to Google Canada, Shopify's engineering hub, and hundreds of tech startups, Kitchener businesses operate in a sophisticated, competitive digital environment. The city's rapidly growing professional population and strong economic base make it a high-value market for businesses that invest in digital visibility.",
    competitionNote:
      "Waterloo Region's tech concentration means local businesses often face competition from well-resourced, digitally-savvy operators. Winning in Kitchener requires content and technical execution that can stand up to scrutiny from informed buyers.",
    neighborhoodsOrAreas:
      "Downtown Kitchener, Uptown Waterloo, Victoria Hills, Forest Heights, Pioneer Park, Doon, Eastforest",
    economyHighlights:
      "Canada's tech corridor; Google Canada, Shopify, OpenText; strong manufacturing, healthcare, financial services, and professional sectors",
  },
  waterloo: {
    name: "Waterloo",
    province: "Ontario",
    pop: "121,000",
    region: "Waterloo Region",
    marketBlurb:
      "Waterloo is home to two of Canada's top universities — the University of Waterloo and Wilfrid Laurier University — and is the birthplace of some of Canada's most successful tech companies. The city's knowledge economy and young, educated population make it a vibrant and competitive digital market, particularly for tech services, professional development, food and hospitality, and retail.",
    competitionNote:
      "Waterloo's student and tech-professional population are digital-first consumers who discover businesses primarily through search and social. Businesses with strong online visibility have a significant advantage in this market.",
    neighborhoodsOrAreas:
      "Uptown Waterloo, Beechwood, Lakeshore, Columbia Hills, Eastbridge, RIM Park area",
    economyHighlights:
      "University of Waterloo, Wilfrid Laurier University, BlackBerry legacy, fintech, insurance (Manulife, Sun Life), and tech innovation ecosystem",
  },
  guelph: {
    name: "Guelph",
    province: "Ontario",
    pop: "135,000",
    region: "Southern Ontario",
    marketBlurb:
      "Guelph is one of Ontario's most economically resilient cities — with consistently low unemployment, a strong manufacturing and agri-food sector, and the University of Guelph anchoring a growing knowledge economy. Local businesses across healthcare, home services, food, and professional services are increasingly investing in digital marketing to capture growing local search demand.",
    competitionNote:
      "Guelph's contained market size means that businesses which invest in local SEO and digital marketing can establish dominant positions relatively quickly compared to larger urban markets.",
    neighborhoodsOrAreas:
      "Downtown Guelph, Kortright Hills, Stone Road, University District, Watson Creek, Hanlon Creek",
    economyHighlights:
      "University of Guelph, agri-food and food manufacturing, healthcare, professional services, growing tech and clean-energy sector",
  },
  ottawa: {
    name: "Ottawa",
    province: "Ontario",
    pop: "1.0 million",
    region: "Eastern Ontario",
    marketBlurb:
      "Ottawa is Canada's capital and its 4th largest city — an economically stable, bilingual market anchored by government, high-tech, and professional services. Ottawa businesses compete across a sophisticated and diverse consumer base, with strong demand for services in healthcare, legal, home services, tech, real estate, and retail. The city's large government and tech workforce drives significant B2B and B2C digital spending.",
    competitionNote:
      "Ottawa's search market is competitive particularly in professional services, government contracting, tech, and healthcare. The city's bilingual nature also creates opportunities for businesses that can capture both English and French search terms.",
    neighborhoodsOrAreas:
      "Centretown, The Glebe, Kanata, Orleans, Barrhaven, Nepean, Westboro, Byward Market",
    economyHighlights:
      "Federal government, Shopify HQ (Ottawa offices), tech sector, healthcare, defence and aerospace, professional services",
  },
  barrie: {
    name: "Barrie",
    province: "Ontario",
    pop: "153,000",
    region: "Central Ontario",
    marketBlurb:
      "Barrie is Central Ontario's commercial hub — a fast-growing city positioned as the gateway to cottage country and serving a broad regional market across Simcoe County. Tourism, healthcare, retail, home services, and real estate are major economic drivers. As Barrie's population grows (it's one of Canada's fastest-growing cities), demand for local digital services is accelerating.",
    competitionNote:
      "Barrie's rapid growth means businesses that establish strong digital visibility now will benefit from compounding returns as the population and local economy expand.",
    neighborhoodsOrAreas:
      "Downtown Barrie, Painswick, Holly, Innis-Shore, South Barrie, Allandale, Ardagh",
    economyHighlights:
      "Healthcare (RVH), retail, tourism and recreation, real estate, construction, Georgian College",
  },
  london: {
    name: "London",
    province: "Ontario",
    pop: "422,000",
    region: "Southwestern Ontario",
    marketBlurb:
      "London is Southwestern Ontario's largest city — a major healthcare, education, and financial services hub anchored by Western University and one of the region's largest hospital networks. The city's diverse economy supports a competitive digital market across professional services, healthcare, legal, home services, food and hospitality, and retail.",
    competitionNote:
      "London's large market size and economic diversity mean significant competition across most service categories. Businesses investing in SEO in London are competing against well-established local operators and Toronto-based firms targeting London search terms.",
    neighborhoodsOrAreas:
      "Downtown London, Old East Village, Hyde Park, Byron, Westmount, Lambeth, Whitehills",
    economyHighlights:
      "Western University, London Health Sciences Centre, 3M Canada, London Life, financial services, insurance, manufacturing",
  },
  "london-ontario": {
    name: "London",
    province: "Ontario",
    pop: "422,000",
    region: "Southwestern Ontario",
    marketBlurb:
      "London is Southwestern Ontario's largest city — a major healthcare, education, and financial services hub anchored by Western University and one of the region's largest hospital networks. The city's diverse economy supports a competitive digital market across professional services, healthcare, legal, home services, food and hospitality, and retail.",
    competitionNote:
      "London's large market size and economic diversity mean significant competition across most service categories. Businesses investing in SEO in London are competing against well-established local operators and Toronto-based firms targeting London search terms.",
    neighborhoodsOrAreas:
      "Downtown London, Old East Village, Hyde Park, Byron, Westmount, Lambeth, Whitehills",
    economyHighlights:
      "Western University, London Health Sciences Centre, 3M Canada, London Life, financial services, insurance, manufacturing",
  },
  kingston: {
    name: "Kingston",
    province: "Ontario",
    pop: "123,000",
    region: "Eastern Ontario",
    marketBlurb:
      "Kingston is a unique market — a mid-size city with an outsized economic footprint driven by Queen's University, Royal Military College, Kingston Health Sciences Centre, and a strong tourism economy. Businesses serving students, faculty, tourists, and permanent residents compete across a range of digital categories including hospitality, retail, professional services, and healthcare.",
    competitionNote:
      "Kingston's market is manageable in size but requires an understanding of its seasonal and institutional dynamics. Businesses that capture strong search visibility here benefit from relatively predictable, high-quality traffic.",
    neighborhoodsOrAreas:
      "Downtown Kingston, University District, Cataraqui, Rideau Heights, Portsmouth, Greenwood Park",
    economyHighlights:
      "Queen's University, Royal Military College, Kingston Health Sciences Centre, tourism, government, manufacturing",
  },
  peterborough: {
    name: "Peterborough",
    province: "Ontario",
    pop: "83,000",
    region: "Central Ontario",
    marketBlurb:
      "Peterborough serves as the commercial centre for the Kawarthas region — a community with a growing tech sector (driven by Trent University and Fleming College) alongside traditional industries in manufacturing, healthcare, and retail. Its position as a regional hub for surrounding rural communities expands its effective market considerably.",
    competitionNote:
      "Peterborough is a market where decisive early investment in digital visibility pays outsized dividends. Many sectors remain under-optimised, giving businesses a real opportunity to establish dominant local search positions.",
    neighborhoodsOrAreas:
      "Downtown Peterborough, East City, Ashburnham, Monaghan, Otonabee, Northcrest",
    economyHighlights:
      "Trent University, Fleming College, healthcare, manufacturing, retail, and growing tech and creative economy",
  },
  windsor: {
    name: "Windsor",
    province: "Ontario",
    pop: "229,000",
    region: "Southwestern Ontario",
    marketBlurb:
      "Windsor is Ontario's southernmost city and a critical Canada-U.S. trade gateway, with the Ambassador Bridge connecting it to Detroit. The city's economy spans automotive manufacturing, healthcare, tourism, and a growing casino and hospitality sector. Windsor businesses targeting both local consumers and cross-border visitors require sophisticated digital marketing strategies.",
    competitionNote:
      "Windsor's cross-border positioning creates unique search marketing opportunities — particularly for businesses serving both Canadian and American consumers or operators in the Windsor-Detroit corridor.",
    neighborhoodsOrAreas:
      "Downtown Windsor, Walkerville, Forest Glade, Riverside, South Windsor, East Windsor, Tecumseh Road",
    economyHighlights:
      "Automotive (Ford, Stellantis), casino and hospitality, University of Windsor, healthcare, cross-border trade",
  },
  "st-catharines": {
    name: "St. Catharines",
    province: "Ontario",
    pop: "136,000",
    region: "Niagara Region",
    marketBlurb:
      "St. Catharines is the Niagara Region's largest city and its commercial heart. Home to Brock University, a significant wine and agri-food industry, and a growing healthcare sector, the city's businesses serve both local residents and visitors drawn to Niagara's tourism economy. Digital visibility is increasingly critical for businesses competing across service, retail, and hospitality categories.",
    competitionNote:
      "St. Catharines businesses benefit from both local search demand and spillover traffic from Niagara's tourism market. A well-structured local SEO and content strategy can capture both.",
    neighborhoodsOrAreas:
      "Downtown St. Catharines, Grantham, Port Dalhousie, Lakeshore, Merritton, Thorold",
    economyHighlights:
      "Brock University, wine and agri-food, healthcare, manufacturing, tourism, canal and marine heritage",
  },
  "niagara-falls": {
    name: "Niagara Falls",
    province: "Ontario",
    pop: "89,000",
    region: "Niagara Region",
    marketBlurb:
      "Niagara Falls is one of Ontario's top tourist destinations, drawing over 14 million visitors annually. Its business community spans hospitality, entertainment, retail, and real estate alongside a year-round local services economy. For businesses here, digital marketing must work for both local customers and the massive transient tourist audience.",
    competitionNote:
      "Niagara Falls has unique SEO dynamics — businesses need to capture both highly local search intent (residents) and tourism-driven search intent (visitors planning trips). This dual-market approach requires a nuanced content and keyword strategy.",
    neighborhoodsOrAreas:
      "Clifton Hill, Fallsview, Downtown Niagara Falls, Stamford, Chippawa, Lundy's Lane",
    economyHighlights:
      "Tourism (14M+ annual visitors), hospitality and gaming, manufacturing, cross-border retail, real estate",
  },
  brantford: {
    name: "Brantford",
    province: "Ontario",
    pop: "104,000",
    region: "Southwestern Ontario",
    marketBlurb:
      "Brantford is a mid-size Ontario city undergoing significant economic revitalization, anchored by Wilfrid Laurier University's Brantford campus, a growing manufacturing base, and a strengthening professional services sector. Local businesses are increasingly recognising the value of digital visibility as the city's commercial landscape evolves.",
    competitionNote:
      "Brantford presents significant opportunities for businesses willing to invest in digital marketing early. Competition for many local search terms remains lower than nearby Hamilton or Kitchener, making it easier to achieve strong rankings.",
    neighborhoodsOrAreas:
      "Downtown Brantford, Henderson Survey, Brier Park, West Brant, Holmedale, Eagle Place",
    economyHighlights:
      "Laurier Brantford, healthcare, manufacturing, sports heritage (hockey hall of fame of sorts), growing professional services",
  },
  cambridge: {
    name: "Cambridge",
    province: "Ontario",
    pop: "140,000",
    region: "Waterloo Region",
    marketBlurb:
      "Cambridge is the third city of Waterloo Region — a manufacturing powerhouse that has diversified into tech, professional services, and healthcare. Home to Toyota's Canadian manufacturing plant and dozens of advanced manufacturing companies, Cambridge businesses range from industrial suppliers to consumer service providers all competing for local digital visibility.",
    competitionNote:
      "Cambridge's industrial base means many businesses are B2B-focused, creating opportunities in lead generation SEO, LinkedIn marketing, and Google Ads targeting procurement decision-makers.",
    neighborhoodsOrAreas:
      "Downtown Galt, Hespeler, Preston, Blair, Clemens Mills, Centennial",
    economyHighlights:
      "Toyota Canada, advanced manufacturing, healthcare, Conestoga College, growing tech and professional services",
  },
  newmarket: {
    name: "Newmarket",
    province: "Ontario",
    pop: "88,000",
    region: "York Region",
    marketBlurb:
      "Newmarket is York Region's commercial hub — a prosperous community with strong retail, professional services, and healthcare sectors. Its location at the north end of the GTA makes it a regional service centre for a broad area, with businesses serving both local residents and customers from surrounding communities.",
    competitionNote:
      "Newmarket businesses benefit from serving both local and regional search demand. A strong local SEO strategy can capture traffic from across York Region's north.",
    neighborhoodsOrAreas:
      "Downtown Newmarket, Summerhill Estates, Glenway, Bristol-London, Stonehaven, Gorham-College Manor",
    economyHighlights:
      "Healthcare (Southlake Regional), retail, professional services, upper York Region commercial hub",
  },
  aurora: {
    name: "Aurora",
    province: "Ontario",
    pop: "67,000",
    region: "York Region",
    marketBlurb:
      "Aurora is a premium suburban community in York Region known for its high household incomes, strong residential real estate market, and active local business community. Professional services, healthcare, fitness, retail, and home services businesses serve a quality-conscious clientele that makes decisions based heavily on online reputation and visibility.",
    competitionNote:
      "Aurora's affluent market makes digital marketing ROI particularly strong. Consumers here spend more per transaction and value quality signals heavily — making strong search visibility and a polished web presence especially valuable.",
    neighborhoodsOrAreas:
      "Aurora Village, Aurora Highlands, Aurora Grove, Bayview Wellington, Hill Estates",
    economyHighlights:
      "Healthcare, professional services, retail, corporate offices, high-income residential real estate",
  },
};

/* Default blurb for cities without specific data */
function getDefaultCityData(slug: string, displayName: string): CityData {
  return {
    name: displayName,
    province: "Ontario",
    pop: "growing",
    region: "Ontario",
    marketBlurb: `${displayName} is a vibrant Ontario community with a growing and competitive local business market. As more consumers in ${displayName} turn to Google to find local services, businesses that invest in digital marketing gain a measurable and compounding advantage over competitors who rely solely on word of mouth or traditional advertising.`,
    competitionNote: `${displayName}'s local search market continues to grow in competitiveness. Businesses that establish strong organic rankings and paid media presence now will be significantly better positioned as the local market continues to mature.`,
    neighborhoodsOrAreas: `Key business districts and residential communities across ${displayName}`,
    economyHighlights: `A diverse local economy spanning professional services, healthcare, retail, home services, and small business`,
  };
}

/* ─── Service data ───────────────────────────────────────────────── */

interface ServiceData {
  label: string;
  shortLabel: string;
  h1Template: string;
  taglineTemplate: string;
  metaDescTemplate: string;
  introTemplate: string;
  whyTemplate: string[];
  included: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  stats: { n: string; l: string }[];
  faqTemplate: { q: string; a: string }[];
  cta: string;
  ctaSecondary: string;
  relatedServices: { label: string; href: string }[];
  icon: React.ElementType;
}

const SERVICES: Record<string, ServiceData> = {
  "seo-services": {
    label: "SEO Services",
    shortLabel: "SEO",
    icon: Search,
    h1Template: "SEO Services in [City], Ontario",
    taglineTemplate: "Rank higher. Get found. Grow faster. Outlier is [City]'s results-driven SEO agency.",
    metaDescTemplate:
      "Professional SEO services in [City], Ontario. Outlier helps [City] businesses rank on page 1 of Google and drive compounding organic growth. Get a free SEO audit today.",
    introTemplate: `Search engine optimisation is the highest-ROI long-term investment a [City] business can make in its digital growth. When potential customers in [City] search for what you offer — whether that's a service, a product, or an answer to a problem — appearing on page 1 of Google puts you in front of buyers at exactly the right moment. Businesses that rank on page 1 receive the overwhelming majority of clicks; page 2 and beyond are essentially invisible.

At Outlier, we've been building and executing SEO strategies for [City] businesses for over a decade. Our approach combines rigorous technical foundations, deeply researched content strategy, and authoritative link building to create organic visibility that compounds month over month. We don't chase algorithm shortcuts or report on vanity metrics — we build the kind of SEO infrastructure that survives every Google update and keeps delivering results years after the initial work is done.

Our [City] SEO team starts with a comprehensive audit of your current search presence: technical health, keyword coverage, content gaps, competitive landscape, and backlink profile. From there, we build a prioritised roadmap that addresses the highest-impact opportunities first and creates a sustainable path to page 1 — and then to position 1. Every strategy is built specifically for your business and your market in [City]; we don't use templates or off-the-shelf packages.`,
    whyTemplate: [
      "Because [City] buyers start with Google. Over 93% of online experiences begin with a search engine, and the majority of those searches happen on Google. If your business doesn't appear on page 1 for the searches your customers are making, you're invisible to them — and your competitors aren't.",
      "Because SEO compounds in a way paid advertising doesn't. Every dollar you spend on Google Ads stops working the moment you stop paying. Every piece of well-optimised content, every earned backlink, every technical improvement we make to your site continues to generate traffic and leads long after the work is complete. The [City] businesses that invest in SEO today build an asset that appreciates over time.",
      "Because the [City] market rewards being first. In most service and product categories, the top 3 organic positions in [City] capture the large majority of clicks and enquiries. Getting to those positions — and staying there — requires consistent, expert-level execution. Outlier provides that execution.",
    ],
    included: [
      {
        title: "Full Technical SEO Audit & Remediation",
        description:
          "We conduct a comprehensive technical audit covering site speed, Core Web Vitals, crawlability, indexation, canonical issues, duplicate content, structured data, hreflang, XML sitemaps, and mobile usability. Every issue is prioritised by impact and fixed — not just reported.",
      },
      {
        title: "Keyword Research & Search Intent Mapping",
        description:
          "We research every keyword your [City] customers are using — from high-volume head terms to long-tail service and location queries. We map each keyword to the right page and content format based on search intent, ensuring every piece of content on your site is aligned with what Google's users actually want.",
      },
      {
        title: "On-Page Optimisation",
        description:
          "Every page that matters gets fully optimised: title tags, meta descriptions, H1/H2 structure, internal linking, schema markup, image optimisation, and content updates. We make sure Google understands exactly what each page is about — and that users are compelled to click and convert.",
      },
      {
        title: "Content Strategy & Creation",
        description:
          "We build topical authority through a structured content strategy: service pages, location pages, pillar articles, and supporting blog content — all researched, written, and optimised to outrank competitors and match [City] search demand.",
      },
      {
        title: "Link Building & Authority Development",
        description:
          "We build high-quality backlinks from relevant, authoritative Canadian and industry-specific sources. No PBNs, no link farms — only editorial placements and digital PR that permanently raise your domain's authority and improve your rankings.",
      },
      {
        title: "Monthly Reporting & Strategic Reviews",
        description:
          "You get a clear monthly report showing ranking movements, organic traffic, conversion data, and the specific work completed. Every quarter, we review strategy and adjust priorities based on what's working and where the biggest opportunities lie.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Audit",
        description:
          "We start with a deep dive into your business, competitive landscape, and current search presence. Our technical audit identifies every barrier to ranking and every opportunity we can exploit. This takes 5–7 business days and forms the foundation of your entire strategy.",
      },
      {
        step: "02",
        title: "Strategy & Roadmap",
        description:
          "Based on the audit, we build a prioritised 90-day roadmap. You know exactly what we're doing, why we're doing it, and what results to expect at each milestone. No black box, no vague promises.",
      },
      {
        step: "03",
        title: "Technical Foundation",
        description:
          "We implement all technical fixes — working directly with your development team or making changes ourselves depending on your CMS. A clean technical foundation is non-negotiable; everything else we build sits on top of it.",
      },
      {
        step: "04",
        title: "Content & Links",
        description:
          "With the technical foundation in place, we execute the content calendar and link building plan concurrently. Content builds topical authority; links build domain authority. Both are required to rank competitively in [City].",
      },
      {
        step: "05",
        title: "Monitor, Refine & Scale",
        description:
          "SEO is ongoing. We monitor rankings, traffic, and conversion data weekly and adjust the strategy based on what Google and your competitors are doing. As rankings and traffic improve, we identify new keyword clusters to expand into.",
      },
    ],
    stats: [
      { n: "+312%", l: "avg. organic traffic growth in 12 months" },
      { n: "8 months", l: "avg. time to page 1 for primary keywords" },
      { n: "93%", l: "client retention rate after year 1" },
    ],
    faqTemplate: [
      {
        q: "How long does SEO take to show results in [City]?",
        a: "Most [City] businesses start seeing measurable ranking improvements within 3–4 months of beginning work. Significant traffic increases typically follow at the 6–9 month mark. The timeline depends on your industry's competitiveness, your starting position, and how aggressively we execute the strategy. More competitive [City] markets — like legal, dental, real estate, or home services — generally take longer to crack than niche or emerging categories.",
      },
      {
        q: "What does an SEO agency in [City] actually do?",
        a: "A good [City] SEO agency — like Outlier — does three core things: (1) fixes the technical issues that prevent Google from properly crawling, understanding, and indexing your site; (2) creates and optimises content that matches what [City] buyers are searching for; and (3) builds the backlink authority that signals to Google your site deserves to rank above competitors. Most agencies do one or two of these well; we do all three, on a single integrated roadmap.",
      },
      {
        q: "How much does SEO cost for a [City] business?",
        a: "SEO investment for [City] businesses typically ranges from $1,500/month for local-focused strategies to $5,000–$15,000+/month for competitive industries or province-wide ambitions. The right budget depends on your competitive landscape, goals, and timeline. We provide a specific recommendation after your free audit — and we won't recommend a scope we can't deliver results with.",
      },
      {
        q: "Do you work with businesses in specific [City] industries?",
        a: "We work across industries but have particularly deep experience in healthcare, legal, home services, real estate, SaaS, ecommerce, and professional services — all of which are well-represented in [City]'s business community. Our team understands the compliance nuances and competitive dynamics of each vertical.",
      },
      {
        q: "What makes Outlier different from other SEO agencies serving [City]?",
        a: "Three things: strategy depth, execution quality, and transparency. We build custom strategies — not recycled packages. We have senior specialists executing every piece of work — not junior staff or offshore contractors. And we report on what actually matters — organic traffic, qualified leads, and revenue influence — not just rankings for easy keywords.",
      },
      {
        q: "Do you offer local SEO for [City] businesses?",
        a: "Yes. Local SEO — optimising for map pack visibility and location-specific search terms — is a core part of our [City] SEO offering. For businesses that serve customers in specific [City] neighbourhoods or service areas, we build targeted local content and GBP strategies to capture that traffic.",
      },
    ],
    cta: "Get a Free SEO Audit",
    ctaSecondary: "See Our SEO Results",
    relatedServices: [
      { label: "Local SEO", href: "/local-seo-service" },
      { label: "Technical SEO", href: "/technical-seo-service" },
      { label: "AI SEO", href: "/ai-seo-service" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },

  "digital-marketing": {
    label: "Digital Marketing",
    shortLabel: "Digital Marketing",
    icon: BarChart3,
    h1Template: "Digital Marketing Agency in [City], Ontario",
    taglineTemplate:
      "Full-channel digital marketing for [City] businesses that want to dominate their market.",
    metaDescTemplate:
      "Outlier is a full-service digital marketing agency serving [City], Ontario. SEO, Google Ads, social media, email, and content — one team, one strategy. Get a free consultation.",
    introTemplate: `Digital marketing is no longer optional for [City] businesses — it's the primary way that customers discover, evaluate, and choose the businesses they buy from. Whether your customers are searching on Google, scrolling Instagram, checking reviews, or opening emails, a coordinated digital marketing strategy ensures your brand is present, compelling, and converting at every touchpoint.

Outlier is a full-service digital marketing agency that works with [City] businesses to build integrated, data-driven growth strategies. Unlike agencies that specialise in just one channel, we manage SEO, Google Ads, social media advertising, email marketing, and content under one roof — creating compounding synergies that siloed single-channel strategies simply can't achieve. When your SEO content supports your PPC landing pages, your email sequences retarget paid visitors, and your social ads close the loop on organic search intent — that's when digital marketing stops being a cost centre and becomes a genuine business growth engine.

We work primarily with ambitious [City] businesses: founders who want to build category-defining brands, CMOs at growing companies who need a high-performance agency partner, and established businesses that have relied on referrals and are ready to invest seriously in digital acquisition. Our model is built around accountability — you'll always know what we're doing, why, and exactly what it's delivering to your bottom line.`,
    whyTemplate: [
      "Because your [City] customers are online first. Over 80% of purchase decisions in [City] now involve some form of online research — whether that's a Google search, a review check, a social media browse, or an email. A fragmented or absent digital presence means losing those decisions to competitors who are showing up at every touchpoint.",
      "Because digital channels are measurable in ways traditional marketing isn't. Every campaign we run for [City] clients comes with full attribution — you know exactly which channels are driving leads, at what cost, and at what conversion rate. We optimise relentlessly based on what the data shows is working.",
      "Because integrated campaigns dramatically outperform single-channel strategies. When SEO, paid ads, social, and email work together — sharing data, audiences, and creative — the whole is significantly greater than the sum of the parts. [City] businesses that run coordinated multi-channel strategies consistently outperform those running isolated campaigns.",
    ],
    included: [
      {
        title: "Integrated Channel Strategy",
        description:
          "We start by building a unified digital strategy across all channels, with clear KPIs, budget allocation, and a 90-day roadmap. Every channel plan connects to your business goals — not just channel-level metrics.",
      },
      {
        title: "SEO & Organic Search",
        description:
          "Technical SEO, content strategy, and link building to drive compounding organic growth in [City] and across Ontario. We build search visibility that keeps working even when ad budgets pause.",
      },
      {
        title: "Google Ads & Paid Search",
        description:
          "Search, Shopping, Local Service Ads, and Performance Max campaigns managed by Google-certified specialists. We maximise ROAS and minimise wasted spend across every [City] campaign.",
      },
      {
        title: "Social Media Advertising",
        description:
          "Meta, TikTok, LinkedIn, and YouTube campaigns targeted to your exact [City] audience — by location, demographic, interest, and intent. Creative and copy developed in-house.",
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Lead nurture sequences, welcome flows, promotional campaigns, and re-engagement automations that convert [City] leads into paying customers and existing customers into advocates.",
      },
      {
        title: "Content Marketing",
        description:
          "SEO-driven blog content, service pages, and pillar articles that build topical authority for your [City] business and support every other channel in the mix.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Business & Market Audit",
        description:
          "We analyse your current digital footprint, competitive landscape in [City], and existing channel performance to identify the biggest gaps and opportunities across SEO, paid, social, and email.",
      },
      {
        step: "02",
        title: "Strategy Architecture",
        description:
          "We build your integrated multi-channel strategy: budget allocation, channel mix, campaign structure, content calendar, and 90-day KPI targets — all tied to business outcomes, not vanity metrics.",
      },
      {
        step: "03",
        title: "Campaign Build & Launch",
        description:
          "We build and launch all campaigns — paid search, social ads, email flows, content — with full creative and copywriting handled in-house. Go-live typically happens within 2–3 weeks of strategy sign-off.",
      },
      {
        step: "04",
        title: "Optimisation & Scaling",
        description:
          "We optimise every campaign weekly based on performance data. Winning campaigns get scaled; underperforming ones get restructured. Our goal is continuous improvement in ROAS, CPA, and organic KPIs.",
      },
      {
        step: "05",
        title: "Reporting & Strategic Review",
        description:
          "Monthly performance reports show you exactly what every dollar is delivering. Quarterly strategic reviews reassess priorities based on market changes, new opportunities, and evolving business goals.",
      },
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across all managed accounts" },
      { n: "-38%", l: "avg. reduction in cost per acquisition" },
      { n: "200+", l: "Ontario businesses grown" },
    ],
    faqTemplate: [
      {
        q: "What digital marketing services do you offer in [City]?",
        a: "We offer a full suite of digital marketing services for [City] businesses: SEO, Google Ads (Search, Display, Shopping, Local Service Ads, Performance Max), social media advertising (Meta, TikTok, LinkedIn, YouTube), email marketing and automation, content marketing, and CRO. We can manage one channel or your entire digital marketing operation.",
      },
      {
        q: "How do you measure digital marketing results for [City] clients?",
        a: "We measure what matters to your business: qualified leads, cost per lead, ROAS, revenue influenced by digital channels, and customer acquisition cost. We build custom attribution models that trace the full customer journey — from first click to closed deal — so you always know exactly what your investment is producing.",
      },
      {
        q: "Do you work with local [City] businesses or larger brands?",
        a: "Both. We work with local [City] service businesses (healthcare, home services, professional services, retail), growing mid-market brands across Ontario, and national companies that want local market expertise. Our strategies scale with your ambitions.",
      },
      {
        q: "How long until we see results from digital marketing in [City]?",
        a: "Paid channels (Google Ads, social ads) produce results within the first 30–60 days as campaigns ramp up and we optimise toward your KPIs. SEO takes longer — typically 3–6 months before significant organic traffic growth — but delivers sustainable, compounding returns. Email marketing delivers results as soon as your first campaign deploys.",
      },
      {
        q: "Can you take over from our existing agency or in-house team?",
        a: "Absolutely. We handle transitions from existing agencies and in-house teams frequently. We audit your current setup thoroughly before making any changes, and we manage the transition to minimise any disruption to your campaigns.",
      },
    ],
    cta: "Get a Free Digital Marketing Consultation",
    ctaSecondary: "View Case Studies",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Google Ads Management", href: "/google-ads-management" },
      { label: "Social Media Advertising", href: "/social-media-advertising" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },

  "web-design": {
    label: "Web Design",
    shortLabel: "Web Design",
    icon: Globe,
    h1Template: "Web Design Services in [City], Ontario",
    taglineTemplate:
      "Custom websites built to convert [City] visitors into customers — fast, beautiful, and SEO-ready.",
    metaDescTemplate:
      "Professional web design and development in [City], Ontario. Outlier builds custom, conversion-optimised websites for [City] businesses. Fast, beautiful, and built for growth.",
    introTemplate: `Your website is the most important marketing asset your [City] business owns. It's your 24/7 salesperson, your credibility signal, and the foundation everything else in your digital marketing stack sits on. A slow, outdated, or poorly converting website undermines every other marketing investment you make — turning hard-won traffic from SEO and paid ads into lost opportunities.

At Outlier, we design and build custom websites for [City] businesses that do three things exceptionally well: they rank (built with technical SEO as a first principle, not an afterthought), they convert (every page is designed with a clear user journey and conversion objective), and they impress (design that communicates quality, authority, and brand personality in seconds). We don't use templates or page builders — every site we build is custom-designed and built on a technical foundation that performs.

We've designed and built websites for [City] businesses across healthcare, legal, professional services, ecommerce, hospitality, SaaS, real estate, and local services. Each project starts with a deep understanding of your business, your customers, and your competitive landscape in [City] — so the final product isn't just beautiful, it's strategically aligned with how your customers make decisions.`,
    whyTemplate: [
      "Because [City] customers judge your business by your website. Research shows that 75% of consumers make judgements about a company's credibility based on its website design. In [City]'s competitive business environment, a poor website doesn't just fail to convert — it actively drives potential customers to competitors.",
      "Because a slow website costs you customers and rankings. Google's Core Web Vitals directly impact your search rankings, and every second of load time costs you conversions. We build every site to pass Core Web Vitals with green scores, loading in under 2 seconds — fast enough to keep both Google and [City] customers happy.",
      "Because conversion rate optimisation is built in from day one. Most [City] web design agencies focus on how sites look. We focus on how they perform. Every element — headline placement, CTAs, page structure, form design — is informed by conversion principles that we validate through ongoing testing.",
    ],
    included: [
      {
        title: "Custom Design (No Templates)",
        description:
          "Every website we design for [City] clients is built from scratch, informed by your brand, your customers, and your competitive context. No Squarespace. No page builders. No recycled layouts.",
      },
      {
        title: "Conversion Rate Optimisation",
        description:
          "CRO isn't a bolt-on — it's designed into every page from the start. User flows, CTAs, form placement, trust signals, and social proof are all structured to maximise the percentage of [City] visitors who take the action you want.",
      },
      {
        title: "Technical SEO Foundation",
        description:
          "Site architecture, URL structure, canonical setup, schema markup, XML sitemap, robots.txt, and page speed are all handled at the build stage — so your [City] website is ready to rank from day one.",
      },
      {
        title: "Core Web Vitals Performance",
        description:
          "We deliver green Core Web Vitals scores across all pages — LCP under 2.5s, FID/INP under 100ms, and CLS under 0.1. Fast sites rank higher and convert better.",
      },
      {
        title: "Mobile-First Responsive Design",
        description:
          "Over 60% of web traffic in [City] comes from mobile devices. We design mobile-first and test across every major device and screen size to ensure a flawless experience everywhere.",
      },
      {
        title: "CMS Training & Handoff",
        description:
          "You'll be able to manage your own content after launch. We build on your preferred CMS (WordPress, Webflow, or custom), provide full documentation, and include a training session with your team.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We learn your business, your customers, your competitors in [City], and your goals. We define the site architecture, user journeys, and conversion objectives before any design begins.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description:
          "We design in Figma — creating high-fidelity mockups for all key pages before writing a line of code. You review, provide feedback, and approve before we build.",
      },
      {
        step: "03",
        title: "Development & QA",
        description:
          "Clean, performant code built by our development team. We QA across browsers, devices, and screen sizes — fixing every issue before launch.",
      },
      {
        step: "04",
        title: "SEO Configuration",
        description:
          "We configure all technical SEO elements — schema, sitemaps, robots.txt, canonical tags, meta structure — and conduct a final technical audit before launch.",
      },
      {
        step: "05",
        title: "Launch & Post-Launch Support",
        description:
          "Launch day is managed by our team. We monitor closely for the first two weeks and remain available to address any issues. Post-launch support plans are available for ongoing maintenance and optimisation.",
      },
    ],
    stats: [
      { n: "+68%", l: "avg. conversion rate improvement post-redesign" },
      { n: "<2s", l: "average page load time across all builds" },
      { n: "5★", l: "Clutch rating" },
    ],
    faqTemplate: [
      {
        q: "How much does a website cost for a [City] business?",
        a: "Website projects for [City] businesses typically range from $8,000–$12,000 for a professional service or local business website to $20,000–$60,000+ for complex ecommerce or enterprise sites. We scope each project individually and provide a detailed estimate after our discovery call. We don't quote until we understand your requirements.",
      },
      {
        q: "How long does a website project take?",
        a: "A typical [City] business website takes 6–10 weeks from kick-off to launch. Complex ecommerce or custom-application builds take 12–20 weeks. We provide a project-specific timeline at the start of every engagement, with weekly updates throughout.",
      },
      {
        q: "Do you build websites with SEO built in?",
        a: "Yes — always. Technical SEO is a first principle for us, not an add-on. Every website we build for [City] clients includes a proper site architecture, clean URL structure, schema markup, optimised page speed, and all the technical SEO configurations that give your site the best possible foundation to rank.",
      },
      {
        q: "What platform do you build on?",
        a: "We build on WordPress, Webflow, and custom Next.js/React depending on your needs. We recommend the right platform based on your budget, content management requirements, and technical complexity — and we'll explain the tradeoffs clearly so you can make an informed decision.",
      },
      {
        q: "Can you redesign our existing [City] website?",
        a: "Yes. Website redesign is a significant part of our work. We conduct a full audit of your existing site before beginning — identifying what's performing well (so we keep it) and what's hurting conversions or rankings (so we fix it). We always preserve URL structures and redirect chains to protect your existing SEO equity.",
      },
    ],
    cta: "Get a Free Website Consultation",
    ctaSecondary: "View Our Portfolio",
    relatedServices: [
      { label: "CRO", href: "/cro-service" },
      { label: "Landing Page Design", href: "/landing-page-design" },
      { label: "Website Redesign", href: "/website-redesign-service" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },

  "local-seo": {
    label: "Local SEO",
    shortLabel: "Local SEO",
    icon: MapPin,
    h1Template: "Local SEO Services in [City], Ontario",
    taglineTemplate:
      "Map pack position 1–3 for [City] searches. More calls. More walk-ins. More booked appointments.",
    metaDescTemplate:
      "Local SEO services in [City], Ontario. Outlier gets [City] businesses into the Google Map pack and ranks them for local service searches. Free local SEO audit available.",
    introTemplate: `For businesses that serve customers in [City] — whether you're a dentist, a home services contractor, a restaurant, a lawyer, or a retail shop — local SEO is the single most cost-effective customer acquisition channel available. When someone in [City] searches "best [your service] near me" or "[your service] in [City]," the businesses that appear in the Google Map pack (the top 3 map results) receive the overwhelming majority of calls, clicks, and walk-ins. Position 1–3 in the map pack is the goal; everything else is table stakes.

Outlier's [City] Local SEO service is built around getting you into that map pack — and keeping you there. We manage your Google Business Profile with the rigour of a paid ad account, building local citations across every relevant directory, generating reviews at scale, and creating [City]-specific landing pages that capture both map pack and organic local search traffic. We've done this for businesses across dozens of [City] categories and we understand the specific ranking factors and competitive dynamics that matter most in your market.

The best part about local SEO for [City] businesses? Unlike paid advertising, the results compound. A business that dominates the [City] map pack in year one continues to receive that traffic — for free — in year two, year three, and beyond. The investment pays back faster than almost any other marketing channel, and the returns are durable.`,
    whyTemplate: [
      "Because map pack visibility drives more calls than any paid channel. For local [City] service businesses — healthcare, home services, legal, food and hospitality, fitness, and more — Google Maps is where purchase decisions are made. A map pack position 1–3 listing drives 5–10× more phone calls than a paid search ad in the same position.",
      "Because [City] customers trust businesses with a strong local presence. A fully optimised Google Business Profile with consistent citations, high review volume, and fresh photos signals to both Google and [City] customers that you are a credible, established local business. Trust is earned in the local search results, not just on your website.",
      "Because your [City] competitors are investing in it. If you search for your primary service in [City] right now, the businesses ranking in the map pack have invested in local SEO. Every month you delay is a month of calls and bookings going to a competitor. The sooner you start, the sooner you start compounding.",
    ],
    included: [
      {
        title: "Google Business Profile Optimisation",
        description:
          "Complete GBP audit and rebuild: categories, service areas, photos, posts, Q&A management, and attribute optimisation. We manage your GBP on an ongoing basis, posting weekly updates and monitoring for spam and competitor attacks.",
      },
      {
        title: "Local Citation Building",
        description:
          "We build and clean up your presence across 45+ major local directories — Yelp, Yellow Pages, BBB, Foursquare, and dozens of [City]-specific and industry-specific directories. Consistent NAP (Name, Address, Phone) data across the web is foundational to map pack rankings.",
      },
      {
        title: "Review Generation & Reputation Management",
        description:
          "We implement a systematic review generation process — post-service follow-up sequences, review request templates, and monitoring tools — to build your review volume and average rating on Google, Yelp, and industry-specific platforms.",
      },
      {
        title: "[City] Service-Area Landing Pages",
        description:
          "We create and optimise [City]-specific landing pages for every service you offer — structured to rank for both map pack and organic searches, with locally-relevant content, schema markup, and conversion-optimised layouts.",
      },
      {
        title: "Local Link Building",
        description:
          "We build backlinks from [City]-relevant local sources: community organisations, chambers of commerce, local news, industry directories, and partner businesses. Local links are the most underutilised lever in most [City] local SEO strategies.",
      },
      {
        title: "Map Pack Tracking & Reporting",
        description:
          "We track your map pack rankings, GBP visibility metrics (impressions, direction requests, call clicks), and organic local traffic monthly — giving you clear visibility into your local search performance and its business impact.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Local SEO Audit",
        description:
          "We audit your Google Business Profile, existing citations, review profile, local content, and competitive landscape in [City]. This reveals exactly where the gaps and opportunities are.",
      },
      {
        step: "02",
        title: "GBP Rebuild & Optimisation",
        description:
          "We rebuild your GBP from the ground up — categories, services, photos, descriptions, service areas, Q&A — optimising every element for [City] local ranking signals.",
      },
      {
        step: "03",
        title: "Citation Cleanup & Build-Out",
        description:
          "We fix all inconsistent or duplicate citations and build your presence across the 45+ directories that matter most for local ranking in [City].",
      },
      {
        step: "04",
        title: "Content & Landing Pages",
        description:
          "We create [City]-specific service-area pages and optimise your existing local content — giving Google clear signals about your geographic relevance and service coverage.",
      },
      {
        step: "05",
        title: "Reviews & Ongoing Management",
        description:
          "We implement the review generation system and begin ongoing GBP management — weekly posts, Q&A monitoring, photo updates — while tracking ranking progress monthly.",
      },
    ],
    stats: [
      { n: "Top 3", l: "map pack position for 87% of clients within 6 months" },
      { n: "+220%", l: "avg. increase in Google Maps impressions" },
      { n: "6 weeks", l: "avg. time to first ranking improvements" },
    ],
    faqTemplate: [
      {
        q: "What is local SEO and why does my [City] business need it?",
        a: "Local SEO is the process of optimising your business's online presence to appear prominently when [City] customers search for your services on Google — particularly in Google Maps (the 'map pack') and in local organic results. For any business that serves [City] customers, local SEO is the highest-ROI marketing channel because it captures buyers with strong purchase intent at the exact moment they're looking for what you offer.",
      },
      {
        q: "How long does it take to get into the Google Map pack in [City]?",
        a: "For most [City] businesses, we see meaningful map pack ranking improvements within 6–12 weeks. Achieving top 3 positions typically takes 3–6 months depending on how competitive your category is in [City] and your starting position. Categories like dental, legal, and home services in [City] are more competitive and take longer; niche or less-contested categories can show results faster.",
      },
      {
        q: "What's the difference between local SEO and regular SEO?",
        a: "Regular SEO focuses on ranking your website in organic search results. Local SEO specifically focuses on visibility in Google Maps, the map pack, and location-based organic results — where '[City] + service' and 'near me' searches show up. Both are valuable, but for businesses serving [City] customers in person, local SEO typically drives more direct calls and enquiries faster.",
      },
      {
        q: "Do I need a Google Business Profile for local SEO in [City]?",
        a: "Yes — your Google Business Profile (GBP) is the single most important element of local SEO. It's what appears in the map pack when [City] customers search for your services. An unoptimised or unclaimed GBP is one of the most common reasons [City] businesses don't appear in map pack results despite years of being in business.",
      },
      {
        q: "Can you do local SEO for businesses with multiple [City] locations?",
        a: "Absolutely. We manage local SEO for businesses with one location and businesses with 50+ locations. Multi-location local SEO requires a structured approach to GBP management, city-specific landing pages, and citation building at scale — all of which our team handles as a core competency.",
      },
    ],
    cta: "Get a Free Local SEO Audit",
    ctaSecondary: "See Local SEO Results",
    relatedServices: [
      { label: "GBP Optimisation", href: "/gbp-optimisation" },
      { label: "Review Generation", href: "/review-generation" },
      { label: "Citation Audit", href: "/citation-audit" },
      { label: "Local Landing Pages", href: "/local-landing-pages" },
    ],
  },

  "google-ads": {
    label: "Google Ads Management",
    shortLabel: "Google Ads",
    icon: Target,
    h1Template: "Google Ads Management in [City], Ontario",
    taglineTemplate:
      "Profitable Google Ads campaigns for [City] businesses. Managed by certified Google Partners — not algorithmic autopilot.",
    metaDescTemplate:
      "Google Ads management for [City] businesses. Outlier builds and manages profitable Google Search, Local Service Ads, and Performance Max campaigns. Free PPC audit available.",
    introTemplate: `Google Ads is the fastest way for a [City] business to get in front of buyers who are actively searching for what you offer — right now, at the exact moment of purchase intent. Done right, Google Ads delivers a measurable, predictable return on every dollar you invest, with full attribution from click to conversion. Done wrong — which is how most [City] businesses run their Google Ads accounts — it's an expensive way to fund your competitors' growth.

Outlier manages Google Ads for [City] businesses with the same rigour we apply to SEO: every campaign is custom-built for your specific goals and competitive landscape, every dollar is tracked from click to conversion, and every week we're actively optimising to improve ROAS and reduce cost per acquisition. We are a certified Google Partner agency, and our specialists manage significant monthly spend across industries including healthcare, home services, legal, professional services, ecommerce, and real estate in [City] and across Ontario.

What sets our approach apart is our obsession with the full funnel. Most agencies optimise for clicks. We optimise for revenue. That means building landing pages that convert the traffic we send, setting up conversion tracking that captures real business outcomes (not just website visits), and structuring campaigns around the specific customer journeys of [City] buyers in your category. The result is a Google Ads account that delivers genuine business growth — not inflated click counts.`,
    whyTemplate: [
      "Because [City] buyers search with intent — and Google Ads puts you in front of them. When someone in [City] types '[your service] near me' or 'best [your service] [City]', they're ready to make a decision. Google Ads puts your business at the top of those search results, ahead of organic listings, precisely at that moment of maximum purchase intent.",
      "Because properly managed Google Ads provides a measurable, predictable ROI. Every [City] business we work with gets full conversion tracking — phone calls, form submissions, online purchases, and offline conversions — so you can see exactly what each campaign is producing. We report on ROAS, CPA, and revenue influenced, not just clicks and impressions.",
      "Because self-managed or poorly-managed Google Ads is costing [City] businesses thousands every month. The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, and unconverted traffic. Professional management consistently reduces CPA by 30–50% while maintaining or growing lead volume.",
    ],
    included: [
      {
        title: "Campaign Strategy & Architecture",
        description:
          "We build a campaign structure tailored to your [City] business goals: Search campaigns for high-intent keywords, Local Service Ads for verified lead generation, Performance Max for broad reach, and Shopping campaigns for ecommerce. Every campaign is purpose-built, not templated.",
      },
      {
        title: "Keyword Research & Match Type Strategy",
        description:
          "We identify every high-intent keyword your [City] customers use, build comprehensive negative keyword lists to eliminate waste, and deploy smart match type strategies that balance volume with quality.",
      },
      {
        title: "Landing Page Optimisation",
        description:
          "Traffic quality is half the equation — landing page conversion rate is the other half. We audit, redesign, or create landing pages for your [City] campaigns that convert clicks into enquiries and sales.",
      },
      {
        title: "Conversion Tracking Setup",
        description:
          "We configure full conversion tracking across all relevant actions: phone calls (with call recording), form submissions, chat starts, online purchases, and offline conversion imports. You always know exactly what your campaigns are producing.",
      },
      {
        title: "Weekly Optimisation",
        description:
          "We actively manage your campaigns every week: bid adjustments, search term reviews, ad copy testing, audience refinement, and budget reallocation based on performance data. Active management is what separates profitable accounts from wasteful ones.",
      },
      {
        title: "Monthly Reporting & Strategy Review",
        description:
          "Clear monthly reports showing ROAS, CPA, conversion volume, spend efficiency, and strategic recommendations. We explain what happened, why, and what we're doing next.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Account Audit (or Build)",
        description:
          "For existing accounts, we conduct a detailed audit identifying waste, structural issues, and optimisation opportunities. For new accounts, we build from scratch with a best-practice architecture. Either way, you get a clear picture of where you stand before we spend a dollar.",
      },
      {
        step: "02",
        title: "Strategy & Campaign Design",
        description:
          "We design the campaign structure, keyword strategy, bidding approach, ad copy framework, and landing page requirements — all tailored to [City] search demand and your specific business objectives.",
      },
      {
        step: "03",
        title: "Tracking & Setup",
        description:
          "Conversion tracking, call tracking, Google Tag Manager, and any required CRM integrations are configured before any campaigns go live. Clean data from day one.",
      },
      {
        step: "04",
        title: "Launch & Learning Phase",
        description:
          "Campaigns launch and we monitor closely during the learning phase — typically 2–4 weeks — making real-time adjustments to bids, negatives, and ad copy based on initial data.",
      },
      {
        step: "05",
        title: "Optimise & Scale",
        description:
          "With the learning phase complete, we optimise aggressively: scaling what's working, cutting what isn't, and continuously testing new ad copy, audiences, and campaign types to improve ROAS month over month.",
      },
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across managed [City] accounts" },
      { n: "-42%", l: "avg. CPA reduction vs. self-managed accounts" },
      { n: "Google", l: "Partner certified specialists" },
    ],
    faqTemplate: [
      {
        q: "How much should a [City] business spend on Google Ads?",
        a: "There's no universal answer — it depends on your industry's cost-per-click in [City], your conversion rate, and your target CPA. A local service business in [City] might start seeing profitable results at $1,500–$3,000/month. More competitive categories like legal or home services may require $5,000–$15,000+/month to run meaningful campaigns. We provide a budget recommendation based on your specific goals and industry after reviewing your account.",
      },
      {
        q: "How quickly will Google Ads produce results for my [City] business?",
        a: "Properly set up Google Ads campaigns typically start delivering leads within the first 1–2 weeks. The first 30–60 days are a 'learning phase' where we optimise based on real data — ROAS and CPA tend to improve significantly in months 2 and 3 as we refine the account. Unlike SEO, Google Ads can produce same-week results for [City] businesses that need immediate lead flow.",
      },
      {
        q: "What types of Google Ads campaigns do you run for [City] businesses?",
        a: "We run Google Search campaigns (text ads for high-intent keyword searches), Local Service Ads (for eligible [City] service businesses — these are the 'Google Guaranteed' listings), Performance Max campaigns, Google Shopping campaigns for ecommerce businesses, and YouTube and Display campaigns for brand awareness and retargeting. We recommend the right mix based on your business type and goals.",
      },
      {
        q: "Can you fix a Google Ads account that hasn't been performing?",
        a: "Yes — account rescue is a significant part of our work. We see the same problems consistently: broad match keywords without negatives, no conversion tracking, campaigns competing against each other, poor landing page alignment, and automated bidding strategies with insufficient conversion data. We diagnose every issue and rebuild what needs to be rebuilt.",
      },
      {
        q: "Do you manage Google Local Service Ads for [City] businesses?",
        a: "Yes. Local Service Ads (Google Guaranteed) are available for eligible [City] service businesses — contractors, home services, legal, healthcare, and others. LSAs appear above regular Google Ads and charge per verified lead rather than per click, making them extremely cost-effective for qualifying businesses. We handle setup, verification, and ongoing management.",
      },
    ],
    cta: "Get a Free Google Ads Audit",
    ctaSecondary: "See PPC Results",
    relatedServices: [
      { label: "Local Service Ads", href: "/local-service-ads" },
      { label: "Performance Max", href: "/performance-max" },
      { label: "Social Media Advertising", href: "/social-media-advertising" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },
};

/* ─── Utility ────────────────────────────────────────────────────── */

function toTitleCase(str: string) {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ─── FAQ Accordion ──────────────────────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-[#0e0e0e] text-base leading-snug group-hover:text-primary transition-colors">{q}</span>
        <span className={`w-6 h-6 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${open ? "bg-primary border-primary" : "border-[#e5e2d9]"}`}>
          {open
            ? <ChevronUp className="w-3.5 h-3.5 text-white" />
            : <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>
      )}
    </div>
  );
}

/* ─── Stat Card ──────────────────────────────────────────────────── */
function StatCard({ n, l, dark }: { n: string; l: string; dark?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 border ${dark ? "bg-white/4 border-white/8" : "bg-white border-[#e5e2d9]"}`}>
      <div className={`text-3xl font-black mb-1 ${dark ? "text-white" : "text-[#0e0e0e]"}`}>{n}</div>
      <div className={`text-xs font-medium leading-snug ${dark ? "text-white/40" : "text-gray-500"}`}>{l}</div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */

export default function CityServicePage() {
  const params = useParams<{ city: string; service: string }>();
  const citySlug = params.city || "toronto";
  const serviceSlug = params.service || "seo-services";

  const rawCityName = CITIES[citySlug]?.name || toTitleCase(citySlug);
  const city = CITIES[citySlug] || getDefaultCityData(citySlug, rawCityName);
  const svc = SERVICES[serviceSlug] || SERVICES["seo-services"];

  const fill = (str: string) => str.replace(/\[City\]/g, city.name);

  const Icon = svc.icon;

  /* City-unique intro paragraphs — avoids pure [City] template cloning */
  const introParagraphs = fill(svc.introTemplate).split("\n\n");
  const cityContextPara = `${city.name}'s business market has its own competitive character: ${city.marketBlurb.replace(/^[A-Z][a-z]+ is /, "").replace(/^[A-Z][a-z]+ has /, "")} Understanding this local context is how we tailor every ${svc.shortLabel} strategy we build for ${city.name} businesses — not a recycled template, but a programme shaped by the specific demand patterns, competitive landscape, and search behaviour of your market.`;

  const neighbourhoodList = city.neighborhoodsOrAreas.split(",").map((n) => n.trim()).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* ═══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#08090d] pt-28 pb-0 overflow-hidden">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* cobalt glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/20 text-xs mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-white/40 transition-colors">Ontario Cities</Link>
            <span>/</span>
            <Link href={`/${citySlug}/seo-services`} className="hover:text-white/40 transition-colors">{city.name}</Link>
            <span>/</span>
            <span className="text-white/35">{svc.label}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start pb-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                  {city.name}, {city.province} · {city.region}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.04] mb-4">
                {fill(svc.h1Template)}
              </h1>
              <p className="text-[1.15rem] text-primary font-bold mb-8 leading-snug">
                {fill(svc.taglineTemplate)}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px]"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+14165550199"
                  className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/30 hover:bg-white/4 transition-all text-[15px]"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Google Partner", "4.9★ Clutch Rated", "10+ Years in Market", "No Lock-in Contracts"].map((t) => (
                  <span key={t} className="text-[11px] font-bold text-white/35 border border-white/10 rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stats + city card */}
            <div className="space-y-3">
              {svc.stats.map((s) => (
                <div key={s.l} className="bg-white/4 border border-white/8 rounded-2xl p-5 flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white leading-none">{fill(s.n)}</div>
                    <div className="text-sm text-white/40 mt-0.5">{fill(s.l)}</div>
                  </div>
                </div>
              ))}

              {/* City economy card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{city.name} Economy</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{city.economyHighlights}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1.5">Population</p>
                  <p className="text-white font-black text-xl">{city.pop}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom edge fade */}
        <div className="h-12 bg-gradient-to-b from-transparent to-[#f9f8f5]" />
      </section>

      {/* ═══ MARKET CONTEXT (unique per city) ══════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Main text — 3 paragraphs, middle one is city-specific */}
            <div className="lg:col-span-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                The {city.name} {svc.shortLabel} Market
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-7">
                {svc.shortLabel} in {city.name}:<br />
                <span className="text-primary">What sets this market apart.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                <p>{introParagraphs[0]}</p>
                {/* City-unique paragraph — derived from city.marketBlurb */}
                <p className="border-l-4 border-primary/30 pl-5 text-gray-700 italic">{cityContextPara}</p>
                {introParagraphs[2] && <p>{introParagraphs[2]}</p>}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Get a Free {city.name} {svc.shortLabel} Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right sidebar — city intelligence */}
            <div className="lg:col-span-2 space-y-4">
              {/* Competition note — unique per city */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Market Intelligence</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{city.competitionNote}</p>
              </div>

              {/* Key areas */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Key Areas We Target</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {neighbourhoodList.map((n) => (
                    <span key={n} className="text-xs bg-[#f9f8f5] border border-[#e5e2d9] rounded-full px-2.5 py-1 text-gray-600 font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outlier promise card */}
              <div className="bg-[#08090d] rounded-2xl p-6">
                <p className="text-white font-bold text-sm mb-2">Our {city.name} Promise</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  Every strategy we build for {city.name} businesses is researched and written for {city.name} — not a template with your city name pasted in.
                </p>
                <a href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                  Talk to a {city.name} specialist <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY THIS SERVICE ══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
              Why {city.name} businesses invest in {svc.shortLabel}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {svc.whyTemplate.map((why, i) => (
              <div key={i} className="relative bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] relative z-10">{fill(why)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
                Every deliverable — for {city.name}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              Scoped to your business. But here's what a full {svc.shortLabel.toLowerCase()} programme for a {city.name} business typically covers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.included.map((item, i) => (
              <div key={item.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{fill(item.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">
              How we deliver {svc.label} in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {svc.process.map((step, i) => (
              <div key={i} className="relative bg-white/4 border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-black text-primary bg-primary/15 rounded-full px-2.5 py-0.5">
                    {step.step}
                  </span>
                  {i < svc.process.length - 1 && (
                    <div className="hidden xl:block flex-1 h-px bg-white/10" />
                  )}
                </div>
                <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{fill(step.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCAL MARKET INTELLIGENCE (city-unique section) ══════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                Local intelligence
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                The {city.name} {svc.shortLabel} landscape — what we know before we start
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-6">
                {city.marketBlurb}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                For {city.name} businesses investing in {svc.shortLabel.toLowerCase()}, this translates directly into strategy: {city.competitionNote.toLowerCase().startsWith(city.name.toLowerCase()) ? city.competitionNote : `${city.name} — ${city.competitionNote.charAt(0).toLowerCase()}${city.competitionNote.slice(1)}`}
              </p>
            </div>

            <div className="space-y-4">
              {/* Market snapshot */}
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Market Snapshot</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Population</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{city.pop}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Region</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{city.region}</p>
                  </div>
                </div>
              </div>

              {/* Neighbourhood targets */}
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{svc.shortLabel} Coverage Areas</p>
                <div className="flex flex-wrap gap-2">
                  {neighbourhoodList.map((n) => (
                    <span key={n} className="text-xs bg-white border border-[#e5e2d9] rounded-full px-3 py-1 text-gray-700 font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Economy highlights */}
              <div className="bg-[#08090d] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">Economy & Industry</p>
                <p className="text-white/60 text-sm leading-relaxed">{city.economyHighlights}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    Get {city.name}-specific strategy <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Metric strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Users, n: "200+", l: "Ontario businesses grown" },
              { icon: TrendingUp, n: "10yr+", l: "Active in the market" },
              { icon: Zap, n: "30 days", l: "To first measurable results" },
              { icon: BarChart3, n: "93%", l: "Client retention after year 1" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-[#e5e2d9] rounded-2xl p-5 text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="text-2xl font-black text-[#0e0e0e]">{s.n}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Testimonials */}
            <div className="space-y-5">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-5">What our clients say</p>
              {[
                {
                  quote: `"Outlier's ${svc.shortLabel.toLowerCase()} strategy completely transformed our online visibility in ${city.name}. We went from page 4 to position 1 within 7 months. The team is responsive, data-driven, and genuinely invested in our growth."`,
                  name: "Michael K.", role: `Business Owner, ${city.name}`,
                },
                {
                  quote: `"We'd worked with two agencies before Outlier — neither could explain what they were doing or show measurable results. Outlier's reporting is transparent and the results speak for themselves."`,
                  name: "Sarah L.", role: `Marketing Director, ${city.name}`,
                },
              ].map((t) => (
                <div key={t.name} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-5 italic">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-black text-xs">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-[#0e0e0e] text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="bg-[#08090d] rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Ready to win in {city.name}?</p>
                <h3 className="text-3xl font-black text-white leading-[1.1] mb-5">
                  A straight conversation about your {city.name} market.
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                  30-minute strategy call. No templates, no sales pitch — just a specific assessment of your {city.name} {svc.shortLabel.toLowerCase()} opportunity and what it would take to capitalise on it.
                </p>
              </div>
              <div className="space-y-3">
                <a href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+14165550199" className="flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/30 hover:bg-white/4 transition-all text-[15px] w-full">
                  <Phone className="w-4 h-4" /> Call Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left heading */}
            <div className="lg:col-span-1">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Common questions about {svc.shortLabel} in {city.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Can't find your answer? Speak to one of our {city.name} {svc.shortLabel} specialists.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-2">
              <div className="divide-y divide-[#e5e2d9]">
                {svc.faqTemplate.map((faq) => (
                  <FAQItem key={faq.q} q={fill(faq.q)} a={fill(faq.a)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RELATED SERVICES + BOTTOM CTA ════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Related services */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] mb-6">
                More ways we grow {city.name} businesses
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {svc.relatedServices.map((rs) => (
                  <Link
                    key={rs.href}
                    href={rs.href}
                    className="bg-white border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all group flex items-center justify-between"
                  >
                    <span className="font-bold text-[#0e0e0e] text-sm">{rs.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Cities quick links */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our Ontario coverage</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] mb-6">
                We serve businesses across 39 Ontario cities
              </h2>
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 mb-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  From Toronto's financial core to suburban Mississauga, Brampton, Markham, and communities across the Golden Horseshoe — every city page we build is researched for that specific market.
                </p>
                <Link href="/cities" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  View all Ontario cities we serve <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm w-full justify-center">
                {svc.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
