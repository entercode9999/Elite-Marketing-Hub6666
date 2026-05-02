import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

/* ── Core service pages ── */
import { ServicePage, localSeoData, googleAdsData } from "@/pages/ServicePage";
import {
  LocationServicePage,
  mississaugaLocalSeoData,
  torontoLocalSeoData,
  ottawaLocalSeoData,
} from "@/pages/LocationServicePage";

/* ── Service hub pages ── */
import WebDesignHub from "@/pages/hubs/WebDesignHub";
import DigitalMarketingHub from "@/pages/hubs/DigitalMarketingHub";
import AIHub from "@/pages/hubs/AIHub";
import EcommerceHub from "@/pages/hubs/EcommerceHub";
import ContentMarketingHub from "@/pages/hubs/ContentMarketingHub";
import TechnicalSeoHub from "@/pages/hubs/TechnicalSeoHub";

/* ── Local SEO sub-service pages ── */
import {
  GBPOptimisationPage,
  CitationAuditPage,
  ReviewGenerationPage,
  LocalLandingPagesPage,
  LocalLinkBuildingPage,
  LocalSeoReportingPage,
} from "@/pages/services/LocalSeoSubPages";

/* ── Paid Ads sub-service pages ── */
import {
  GoogleSearchPage,
  LocalServiceAdsPage,
  PerformanceMaxPage,
  PaidSocialPage,
  DisplayRetargetingPage,
  YouTubeAdsPage,
} from "@/pages/services/PaidAdsSubPages";

/* ── Web Design sub-service pages ── */
import {
  CROPage,
  WebsiteRedesignPage,
  LandingPageDesignPage,
  UIUXDesignPage,
} from "@/pages/services/WebDesignSubPages";

/* ── Content sub-service pages ── */
import {
  BlogWritingPage,
  TopicalAuthorityPage,
  EmailMarketingPage,
  SocialMediaPage,
  VideoScriptPage,
} from "@/pages/services/ContentSubPages";

/* ── Technical SEO sub-service pages ── */
import {
  CoreWebVitalsPage,
  CrawlBudgetPage,
  StructuredDataPage,
  RedirectAuditPage,
  InternationalSeoPage,
} from "@/pages/services/TechnicalSeoSubPages";

/* ── AI sub-service pages ── */
import {
  AIWorkflowPage,
  AIIntegrationPage,
  CustomAIPage,
  AppDevelopmentPage,
  AILeadCapturePage,
} from "@/pages/services/AISubPages";

/* ── Industry pages ── */
import {
  DentalMarketingPage,
  LegalMarketingPage,
  HomeServicesMarketingPage,
  RealEstateMarketingPage,
  EcommerceMarketingPage,
  AutoMarketingPage,
  SaasMarketingPage,
  FitnessMarketingPage,
  RestaurantMarketingPage,
} from "@/pages/IndustryPages";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* ── Homepage ── */}
      <Route path="/" component={Home} />

      {/* ── Service hub pages ── */}
      <Route path="/custom-web-design-service" component={WebDesignHub} />
      <Route path="/digital-marketing" component={DigitalMarketingHub} />
      <Route path="/ai-chatbot-service" component={AIHub} />
      <Route path="/ecommerce-development" component={EcommerceHub} />
      <Route path="/content-marketing-service" component={ContentMarketingHub} />
      <Route path="/technical-seo-service" component={TechnicalSeoHub} />

      {/* ── Service detail pages ── */}
      <Route path="/local-seo-service">{() => <ServicePage data={localSeoData} />}</Route>
      <Route path="/google-ads-management">{() => <ServicePage data={googleAdsData} />}</Route>

      {/* ── Local SEO sub-services ── */}
      <Route path="/gbp-optimisation" component={GBPOptimisationPage} />
      <Route path="/citation-audit" component={CitationAuditPage} />
      <Route path="/review-generation" component={ReviewGenerationPage} />
      <Route path="/local-landing-pages" component={LocalLandingPagesPage} />
      <Route path="/local-link-building" component={LocalLinkBuildingPage} />
      <Route path="/local-seo-reporting" component={LocalSeoReportingPage} />

      {/* ── Paid Ads sub-services ── */}
      <Route path="/google-search-campaigns" component={GoogleSearchPage} />
      <Route path="/local-service-ads" component={LocalServiceAdsPage} />
      <Route path="/performance-max" component={PerformanceMaxPage} />
      <Route path="/paid-social-service" component={PaidSocialPage} />
      <Route path="/display-retargeting" component={DisplayRetargetingPage} />
      <Route path="/youtube-ads-service" component={YouTubeAdsPage} />

      {/* ── Web Design sub-services ── */}
      <Route path="/cro-service" component={CROPage} />
      <Route path="/website-redesign-service" component={WebsiteRedesignPage} />
      <Route path="/landing-page-design" component={LandingPageDesignPage} />
      <Route path="/ui-ux-design" component={UIUXDesignPage} />

      {/* ── Content sub-services ── */}
      <Route path="/blog-writing-service" component={BlogWritingPage} />
      <Route path="/topical-authority-service" component={TopicalAuthorityPage} />
      <Route path="/email-marketing-service" component={EmailMarketingPage} />
      <Route path="/social-media-service" component={SocialMediaPage} />
      <Route path="/video-script-service" component={VideoScriptPage} />

      {/* ── Technical SEO sub-services ── */}
      <Route path="/core-web-vitals-service" component={CoreWebVitalsPage} />
      <Route path="/crawl-budget-service" component={CrawlBudgetPage} />
      <Route path="/structured-data-service" component={StructuredDataPage} />
      <Route path="/redirect-audit-service" component={RedirectAuditPage} />
      <Route path="/international-seo-service" component={InternationalSeoPage} />

      {/* ── AI sub-services ── */}
      <Route path="/ai-workflow-service" component={AIWorkflowPage} />
      <Route path="/ai-integration-service" component={AIIntegrationPage} />
      <Route path="/custom-ai-service" component={CustomAIPage} />
      <Route path="/app-development-service" component={AppDevelopmentPage} />
      <Route path="/ai-lead-capture-service" component={AILeadCapturePage} />

      {/* ── Industry pages ── */}
      <Route path="/dental-marketing" component={DentalMarketingPage} />
      <Route path="/legal-marketing" component={LegalMarketingPage} />
      <Route path="/home-services-marketing" component={HomeServicesMarketingPage} />
      <Route path="/real-estate-marketing" component={RealEstateMarketingPage} />
      <Route path="/ecommerce-marketing" component={EcommerceMarketingPage} />
      <Route path="/auto-marketing" component={AutoMarketingPage} />
      <Route path="/saas-marketing" component={SaasMarketingPage} />
      <Route path="/fitness-marketing" component={FitnessMarketingPage} />
      <Route path="/restaurant-marketing" component={RestaurantMarketingPage} />

      {/* ── Location × Service pages ── */}
      <Route path="/toronto/local-seo-service">{() => <LocationServicePage data={torontoLocalSeoData} />}</Route>
      <Route path="/mississauga/local-seo-service">{() => <LocationServicePage data={mississaugaLocalSeoData} />}</Route>
      <Route path="/ottawa/local-seo-service">{() => <LocationServicePage data={ottawaLocalSeoData} />}</Route>

      {/* ── Dynamic city × service fallback ── */}
      <Route path="/:city/:service">{() => <LocationServicePage data={mississaugaLocalSeoData} />}</Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
