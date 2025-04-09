
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Volets from "./pages/Volets";
import Eclairage from "./pages/Eclairage";
import Locations from "./pages/Locations";
import AccessIdentifiers from "./pages/AccessIdentifiers";
import Schedules from "./pages/automation/Schedules";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <DashboardSidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/smartphones" element={<Index />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/access-identifiers" element={<AccessIdentifiers />} />
                <Route path="/automation" element={<Index />} />
                <Route path="/automation/schedules" element={<Schedules />} />
                <Route path="/automation/channel-groups" element={<Index />} />
                <Route path="/automation/direct-links" element={<Index />} />
                <Route path="/automation/scenes" element={<Index />} />
                <Route path="/automation/reactions" element={<Index />} />
                <Route path="/automation/applications" element={<Index />} />
                <Route path="/notifications" element={<Index />} />
                <Route path="/volets" element={<Volets />} />
                <Route path="/eclairage" element={<Eclairage />} />
                <Route path="/settings" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
