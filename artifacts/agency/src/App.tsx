import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SitemapPage from "@/pages/SitemapPage";

/* ── Core service pages ── */
import { ServicePage, localSeoData, googleAdsData } from "@/pages/ServicePage";
import LocalSeoHub from "@/pages/hubs/LocalSeoHub";
import GoogleAdsHub from "@/pages/hubs/GoogleAdsHub";
import {
  LocationServicePage,
  mississaugaLocalSeoData,
  torontoLocalSeoData,
  ottawaLocalSeoData,
} from "@/pages/LocationServicePage";

/* ── Website Services hubs ── */
import WebDesignHub from "@/pages/hubs/WebDesignHub";
import WebDevelopmentHub from "@/pages/hubs/WebDevelopmentHub";
import WordPressHub from "@/pages/hubs/WordPressHub";
import JoomlaHub from "@/pages/hubs/JoomlaHub";
import DrupalHub from "@/pages/hubs/DrupalHub";
import LaravelHub from "@/pages/hubs/LaravelHub";

/* ── Ecommerce Services hubs ── */
import EcommerceHub from "@/pages/hubs/EcommerceHub";
import MagentoHub from "@/pages/hubs/MagentoHub";
import ShopifyHub from "@/pages/hubs/ShopifyHub";
import ShopifyPlusHub from "@/pages/hubs/ShopifyPlusHub";
import HeadlessCommerceHub from "@/pages/hubs/HeadlessCommerceHub";

/* ── Enterprise Commerce hubs ── */
import AdobeCommerceHub from "@/pages/hubs/AdobeCommerceHub";
import Magento2DevHub from "@/pages/hubs/Magento2DevHub";
import Magento2MigrationHub from "@/pages/hubs/Magento2MigrationHub";
import Magento2SupportHub from "@/pages/hubs/Magento2SupportHub";
import HyvaThemeHub from "@/pages/hubs/HyvaThemeHub";
import HyvaEnterpriseHub from "@/pages/hubs/HyvaEnterpriseHub";

/* ── Digital Marketing hubs ── */
import TechnicalSeoHub from "@/pages/hubs/TechnicalSeoHub";
import AISeoHub from "@/pages/hubs/AISeoHub";
import SeoServicesHub from "@/pages/hubs/SeoServicesHub";
import DigitalMarketingHub from "@/pages/hubs/DigitalMarketingHub";
import ContentMarketingHub from "@/pages/hubs/ContentMarketingHub";
import AIHub from "@/pages/hubs/AIHub";
import SocialMediaAdsHub from "@/pages/hubs/SocialMediaAdsHub";

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
  B2BMarketingPage,
  B2CMarketingPage,
  D2CMarketingPage,
  FoodBeverageMarketingPage,
  EducationMarketingPage,
  TransportationMarketingPage,
  HealthCareMarketingPage,
  TravelMarketingPage,
  FashionMarketingPage,
  EntertainmentMarketingPage,
  TechnologyMarketingPage,
  SmallBusinessMarketingPage,
  ConstructionMarketingPage,
  LawMarketingPage,
  SportsFitnessMarketingPage,
} from "@/pages/IndustryPages";

/* ── Cities & city-service pages ── */
import CitiesPage from "@/pages/CitiesPage";
import CityServicePage from "@/pages/CityServicePage";
import ServiceIndustryPage from "@/pages/ServiceIndustryPage";

/* ── Company / static pages ── */
import {
  AboutPage,
  ContactPage,
  InsightsPage,
  CareersPage,
  PrivacyPage,
  TermsPage,
  AccessibilityPage,
} from "@/pages/SimplePages";

/* ── Conversion pages ── */
import { PricingPage, FreeAuditPage, ThankYouPage } from "@/pages/ConversionPages";

/* ── Our Work & Case Studies ── */
import { OurWorkPage, CaseStudyPage } from "@/pages/WorkPage";

/* ── Insight article detail pages ── */
import { InsightArticlePage } from "@/pages/InsightArticlePage";

/* ── Testimonials ── */
import { TestimonialsPage } from "@/pages/TestimonialsPage";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <Switch>
      {/* ── Homepage ── */}
      <Route path="/" component={Home} />

      {/* ── Company pages ── */}
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/our-work" component={OurWorkPage} />
      <Route path="/our-work/:slug" component={CaseStudyPage} />
      <Route path="/insights" component={InsightsPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/accessibility" component={AccessibilityPage} />
      <Route path="/sitemap" component={SitemapPage} />

      {/* ── Conversion pages ── */}
      <Route path="/pricing" component={PricingPage} />
      <Route path="/free-audit" component={FreeAuditPage} />
      <Route path="/thank-you" component={ThankYouPage} />

      {/* ── Insight article detail ── */}
      <Route path="/insights/:slug" component={InsightArticlePage} />

      {/* ── Testimonials ── */}
      <Route path="/testimonials" component={TestimonialsPage} />

      {/* ── Cities hub ── */}
      <Route path="/cities" component={CitiesPage} />

      {/* ── Website Services ── */}
      <Route path="/custom-web-design-service" component={WebDesignHub} />
      <Route path="/website-development-service" component={WebDevelopmentHub} />
      <Route path="/wordpress-development-service" component={WordPressHub} />
      <Route path="/joomla-development-service" component={JoomlaHub} />
      <Route path="/drupal-development-service" component={DrupalHub} />
      <Route path="/laravel-web-development" component={LaravelHub} />

      {/* ── Ecommerce Services ── */}
      <Route path="/ecommerce-development" component={EcommerceHub} />
      <Route path="/magento-development" component={MagentoHub} />
      <Route path="/shopify-development" component={ShopifyHub} />
      <Route path="/shopify-plus-development" component={ShopifyPlusHub} />
      <Route path="/headless-commerce-service" component={HeadlessCommerceHub} />

      {/* ── Enterprise Commerce ── */}
      <Route path="/adobe-commerce-development" component={AdobeCommerceHub} />
      <Route path="/magento-2-development" component={Magento2DevHub} />
      <Route path="/magento-2-migration" component={Magento2MigrationHub} />
      <Route path="/magento-2-support" component={Magento2SupportHub} />
      <Route path="/hyva-theme-development" component={HyvaThemeHub} />
      <Route path="/hyva-enterprise-solutions" component={HyvaEnterpriseHub} />

      {/* ── Digital Marketing ── */}
      <Route path="/seo-services" component={SeoServicesHub} />
      <Route path="/technical-seo-service" component={TechnicalSeoHub} />
      <Route path="/ai-seo-service" component={AISeoHub} />
      <Route path="/digital-marketing" component={DigitalMarketingHub} />
      <Route path="/content-marketing-service" component={ContentMarketingHub} />
      <Route path="/ai-chatbot-service" component={AIHub} />
      <Route path="/social-media-advertising" component={SocialMediaAdsHub} />

      {/* ── Service detail pages ── */}
      <Route path="/local-seo-service" component={LocalSeoHub} />
      <Route path="/google-ads-management" component={GoogleAdsHub} />

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
      <Route path="/b2b-marketing" component={B2BMarketingPage} />
      <Route path="/b2c-marketing" component={B2CMarketingPage} />
      <Route path="/d2c-marketing" component={D2CMarketingPage} />
      <Route path="/food-beverage-marketing" component={FoodBeverageMarketingPage} />
      <Route path="/education-marketing" component={EducationMarketingPage} />
      <Route path="/transportation-marketing" component={TransportationMarketingPage} />
      <Route path="/healthcare-marketing" component={HealthCareMarketingPage} />
      <Route path="/travel-marketing" component={TravelMarketingPage} />
      <Route path="/fashion-marketing" component={FashionMarketingPage} />
      <Route path="/entertainment-marketing" component={EntertainmentMarketingPage} />
      <Route path="/technology-marketing" component={TechnologyMarketingPage} />
      <Route path="/small-business-marketing" component={SmallBusinessMarketingPage} />
      <Route path="/construction-marketing" component={ConstructionMarketingPage} />
      <Route path="/law-marketing" component={LawMarketingPage} />
      <Route path="/sports-fitness-marketing" component={SportsFitnessMarketingPage} />

      {/* ── Specific location × service pages ── */}
      <Route path="/toronto/local-seo-service">{() => <LocationServicePage data={torontoLocalSeoData} />}</Route>
      <Route path="/mississauga/local-seo-service">{() => <LocationServicePage data={mississaugaLocalSeoData} />}</Route>
      <Route path="/ottawa/local-seo-service">{() => <LocationServicePage data={ottawaLocalSeoData} />}</Route>

      {/* ── City × service × industry pages (must be before /:city/:service) ── */}
      <Route path="/:city/:service/:industry" component={ServiceIndustryPage} />

      {/* ── Dynamic city × service pages ── */}
      <Route path="/:city/:service" component={CityServicePage} />

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
