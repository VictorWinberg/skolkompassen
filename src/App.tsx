import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { loadSchools } from "@/data/schools";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function init() {
      await loadSchools();
      setLoaded(true);
    }

    init();
  }, []);

  if (!loaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Läser in skoldata…</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
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
