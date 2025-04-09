
import React from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import FeatureCarousel from "@/components/FeatureCarousel";
import Heading from "@/components/Heading";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Smile, Channels, HomeIcon, RollerShutter } from "@/components/CustomIcons";
import { Menu } from "lucide-react";
import Dashboard from "./Dashboard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";
  
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-[#fbfcfc]">
        <DashboardSidebar />
        
        {/* Floating Sidebar Button - visible on all pages */}
        <Button 
          variant="outline"
          size="icon"
          className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg bg-white hover:bg-gray-100 md:hidden"
          onClick={() => {
            const sidebarTrigger = document.querySelector('[data-sidebar="trigger"]') as HTMLButtonElement;
            if (sidebarTrigger) sidebarTrigger.click();
          }}
        >
          <Menu />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        
        <SidebarInset>
          <div className="flex items-center p-4 border-b">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center">
              <img src="/spider-home-logo.png" alt="Spider Home Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-xl font-bold">Spider Home</h1>
            </div>
          </div>
          
          {isDashboardRoute ? (
            <Dashboard />
          ) : (
            <div className="container mx-auto px-4 py-6">
              <Hero />
              
              {/* Featured Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <FeatureCard 
                  icon={Channels}
                  title="Channels"
                  description="Control your automation channels"
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: "0.2s" }}
                />
                <FeatureCard 
                  icon={HomeIcon}
                  title="I/O Devices"
                  description="Manage all your connected devices"
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
              
              {/* More Features Section */}
              <Heading>Discover More Features</Heading>
              
              <FeatureCarousel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard 
                    icon={RollerShutter}
                    title="Roller shutters"
                    description="Open and shut roller shutters"
                  />
                  <FeatureCard 
                    icon={HomeIcon}
                    title="Home appliances"
                    description="Control home appliances"
                  />
                  <FeatureCard 
                    icon={Smile}
                    title="And more"
                    description="All the above and many more can be done from your phone or tablet"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard 
                    icon={Smile}
                    title="Security"
                    description="Monitor and control security systems"
                  />
                  <FeatureCard 
                    icon={Channels}
                    title="Lighting"
                    description="Control lighting throughout your home"
                  />
                  <FeatureCard 
                    icon={HomeIcon}
                    title="Climate"
                    description="Manage temperature and climate control systems"
                  />
                </div>
              </FeatureCarousel>
            </div>
          )}
          
          {/* Footer */}
          <footer className="bg-[#02111f] text-white py-8 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center mb-4">
                    <img src="/spider-home-logo.png" alt="Spider Home Logo" className="h-8 w-8 mr-2" />
                    <h2 className="text-xl font-bold">Spider Home</h2>
                  </div>
                  <p className="text-white/70 max-w-md">
                    Simplify your life with our intuitive smart home system.
                    Control all your devices from anywhere in the world.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Product</h3>
                    <ul className="space-y-1 text-white/70">
                      <li><a href="#" className="hover:text-white">Features</a></li>
                      <li><a href="#" className="hover:text-white">Pricing</a></li>
                      <li><a href="#" className="hover:text-white">Downloads</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <ul className="space-y-1 text-white/70">
                      <li><a href="#" className="hover:text-white">Help Center</a></li>
                      <li><a href="#" className="hover:text-white">Documentation</a></li>
                      <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-1 text-white/70">
                      <li><a href="#" className="hover:text-white">Twitter</a></li>
                      <li><a href="#" className="hover:text-white">Facebook</a></li>
                      <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
                <p>© 2025 Spider Home. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
