
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Settings, Smartphone, Home, Key, LayoutDashboard, Bell, Sliders, LightbulbIcon } from "lucide-react";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  
  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveItem(path);
  };
  
  return <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img alt="Spider Home Logo" className="h-8 w-8" src="/lovable-uploads/bb5b6358-41d4-4607-a2d7-4a6a621d9614.png" />
          <span className="font-bold text-lg">SpiderHome</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Accueil" isActive={activeItem === "/"} onClick={() => handleNavigation("/")}>
                  <Home />
                  <span>Accueil</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Tableau de bord" isActive={activeItem === "/dashboard"} onClick={() => handleNavigation("/dashboard")}>
                  <LayoutDashboard />
                  <span>Tableau de bord</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Appareils" isActive={activeItem === "/smartphones"} onClick={() => handleNavigation("/smartphones")}>
                  <Smartphone />
                  <span>Appareils</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Automatisations" isActive={activeItem === "/automation"} onClick={() => handleNavigation("/automation")}>
                  <Settings />
                  <span>Automatisations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Notifications" isActive={activeItem === "/notifications"} onClick={() => handleNavigation("/notifications")}>
                  <Bell />
                  <span>Notifications</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Contrôles</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Volets" isActive={activeItem === "/volets"} onClick={() => handleNavigation("/volets")}>
                  <Sliders />
                  <span>Volets</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Éclairage" isActive={activeItem === "/eclairage"} onClick={() => handleNavigation("/eclairage")}>
                  <LightbulbIcon />
                  <span>Éclairage</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Locations" isActive={activeItem === "/locations"} onClick={() => handleNavigation("/locations")}>
                  <Home />
                  <span>Locations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Access Identifiers" isActive={activeItem === "/access-identifiers"} onClick={() => handleNavigation("/access-identifiers")}>
                  <Key />
                  <span>Access Identifiers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings" isActive={activeItem === "/settings"} onClick={() => handleNavigation("/settings")}>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>;
}
