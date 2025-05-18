
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NetworkSecurity from "./pages/NetworkSecurity";
import Blockchain from "./pages/Blockchain";
import AIModels from "./pages/AIModels";
import CloudSecurity from "./pages/CloudSecurity";
import Collaboration from "./pages/Collaboration";
import AccessControl from "./pages/AccessControl";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/ai-models" element={<AIModels />} />
          <Route path="/cloud-security" element={<CloudSecurity />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/access-control" element={<AccessControl />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
