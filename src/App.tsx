import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages SPA routing
const handleGitHubPagesRouting = () => {
  // If we're on GitHub Pages and there's a query parameter starting with /,
  // redirect to the proper path
  if (window.location.hostname.includes('github.io')) {
    const path = window.location.search.slice(1);
    if (path.startsWith('/')) {
      const newPath = path.replace(/~and~/g, '&');
      window.history.replaceState(null, '', newPath);
    }
  }
};

const App = () => {
  // Handle routing on component mount
  React.useEffect(() => {
    handleGitHubPagesRouting();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/old-testament-daily">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
