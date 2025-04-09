
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HomeIcon, RollerShutter, Channels, Smile } from "./CustomIcons";
import { Settings, BarChart3, BellRing } from "lucide-react";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleNavigation = (path: string) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4">
          <HomeIcon size={24} />
          <span className="font-bold text-lg">Smart Home</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Tableau de bord" 
                  isActive={activeItem === "/dashboard"}
                  onClick={() => handleNavigation("/dashboard")}
                >
                  <BarChart3 />
                  <span>Tableau de bord</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Appareils" 
                  isActive={activeItem === "/devices"}
                  onClick={() => handleNavigation("/devices")}
                >
                  <HomeIcon />
                  <span>Appareils</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Automatisations" 
                  isActive={activeItem === "/automations"}
                  onClick={() => handleNavigation("/automations")}
                >
                  <Channels />
                  <span>Automatisations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Notifications" 
                  isActive={activeItem === "/notifications"}
                  onClick={() => handleNavigation("/notifications")}
                >
                  <BellRing />
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
                <SidebarMenuButton 
                  tooltip="Volets" 
                  isActive={activeItem === "/shutters"}
                  onClick={() => handleNavigation("/shutters")}
                >
                  <RollerShutter />
                  <span>Volets</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  tooltip="Éclairage" 
                  isActive={activeItem === "/lighting"}
                  onClick={() => handleNavigation("/lighting")}
                >
                  <Smile />
                  <span>Éclairage</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              tooltip="Paramètres" 
              isActive={activeItem === "/settings"}
              onClick={() => handleNavigation("/settings")}
            >
              <Settings />
              <span>Paramètres</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
