
import React from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import FeatureCard from "@/components/FeatureCard";
import FeatureCarousel from "@/components/FeatureCarousel";
import Heading from "@/components/Heading";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Smile, Channels, HomeIcon, RollerShutter } from "@/components/CustomIcons";
import { Menu } from "lucide-react";
import Dashboard from "./Dashboard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <div className="flex items-center">
          <img
            alt="Spider Home Logo"
            className="h-8 w-8 mr-2"
            src="/lovable-uploads/1a08d57c-c4ea-4a42-a17a-f6cc6ac84f3b.png"
          />
          <h1 className="text-xl font-bold">Spider Home</h1>
        </div>
      </div>
      
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
      
      {isDashboardRoute ? (
        <Dashboard />
      ) : (
        <div className="container mx-auto px-4 py-6">
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
    </SidebarInset>
  );
};

export default Index;
