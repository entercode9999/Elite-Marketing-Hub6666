import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ServicePage, localSeoData, googleAdsData } from "@/pages/ServicePage";
import {
  LocationServicePage,
  mississaugaLocalSeoData,
  torontoLocalSeoData,
  ottawaLocalSeoData,
} from "@/pages/LocationServicePage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Service pages */}
      <Route path="/local-seo-service">{() => <ServicePage data={localSeoData} />}</Route>
      <Route path="/google-ads-management">{() => <ServicePage data={googleAdsData} />}</Route>

      {/* Location × Service pages */}
      <Route path="/toronto/local-seo-service">{() => <LocationServicePage data={torontoLocalSeoData} />}</Route>
      <Route path="/mississauga/local-seo-service">{() => <LocationServicePage data={mississaugaLocalSeoData} />}</Route>
      <Route path="/ottawa/local-seo-service">{() => <LocationServicePage data={ottawaLocalSeoData} />}</Route>

      {/* Catch-all dynamic city × service — shows Mississauga as placeholder */}
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
