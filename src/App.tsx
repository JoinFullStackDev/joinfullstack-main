import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "next-themes";
import { loadSavedColor, applyAccentColor } from "@/components/ColorPicker";

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const ConceptFraming = lazy(() => import("./pages/ConceptFraming"));
const ProductStrategy = lazy(() => import("./pages/ProductStrategy"));
const ProductValidation = lazy(() => import("./pages/ProductValidation"));
const AnalysisUserStories = lazy(() => import("./pages/AnalysisUserStories"));
const Build = lazy(() => import("./pages/Build"));
const QA = lazy(() => import("./pages/QA"));
const Work = lazy(() => import("./pages/Work"));
const FintechLendingPlatform = lazy(() => import("./pages/FintechLendingPlatform"));
const PharmacyWorkflow = lazy(() => import("./pages/PharmacyWorkflow"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const Team = lazy(() => import("./pages/Team"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Security = lazy(() => import("./pages/Security"));
const Partners = lazy(() => import("./pages/Partners"));

const queryClient = new QueryClient();

const App = () => {
  // Load saved accent color on app initialization
  useEffect(() => {
    const savedColor = loadSavedColor();
    applyAccentColor(savedColor);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/concept-framing" element={<ConceptFraming />} />
              <Route path="/services/product-strategy" element={<ProductStrategy />} />
              <Route path="/services/product-validation" element={<ProductValidation />} />
              <Route path="/services/analysis-user-stories" element={<AnalysisUserStories />} />
              <Route path="/services/build" element={<Build />} />
              <Route path="/services/qa" element={<QA />} />
              
              {/* Work/Case Studies Routes */}
              <Route path="/work" element={<Work />} />
              <Route path="/work/fintech-lending-platform" element={<FintechLendingPlatform />} />
              <Route path="/work/pharmacy-workflow" element={<PharmacyWorkflow />} />
              
              {/* About Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/about/process" element={<Process />} />
              <Route path="/about/team" element={<Team />} />
              
              {/* Contact Route */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
              
              {/* Partners Route */}
              <Route path="/partners" element={<Partners />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
