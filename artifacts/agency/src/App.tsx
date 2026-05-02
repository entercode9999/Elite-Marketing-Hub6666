import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HubPage from "@/pages/HubPage";
import ServicePage from "@/pages/ServicePage";
import LocationServicePage from "@/pages/LocationServicePage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Hub pages */}
      <Route path="/local-seo">{() => <HubPage slug="local-seo" />}</Route>
      <Route path="/seo-services">{() => <HubPage slug="seo-services" />}</Route>
      <Route path="/ppc-google-ads">{() => <HubPage slug="ppc-google-ads" />}</Route>

      {/* Service pages */}
      <Route path="/local-seo-service">{() => <ServicePage slug="local-seo-service" />}</Route>
      <Route path="/google-ads-management">{() => <ServicePage slug="google-ads-management" />}</Route>
      <Route path="/technical-seo-service">{() => <ServicePage slug="technical-seo-service" />}</Route>
      <Route path="/content-marketing-service">{() => <ServicePage slug="content-marketing-service" />}</Route>

      {/* Location × Service pages — explicit */}
      <Route path="/toronto/local-seo-service">
        {() => <LocationServicePage citySlug="toronto" serviceSlug="local-seo-service" />}
      </Route>
      <Route path="/mississauga/local-seo-service">
        {() => <LocationServicePage citySlug="mississauga" serviceSlug="local-seo-service" />}
      </Route>
      <Route path="/ottawa/local-seo-service">
        {() => <LocationServicePage citySlug="ottawa" serviceSlug="local-seo-service" />}
      </Route>

      {/* Dynamic catch-all for any city × service combo */}
      <Route path="/:city/:service">
        {(params) => (
          <LocationServicePage citySlug={params.city} serviceSlug={params.service} />
        )}
      </Route>

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
