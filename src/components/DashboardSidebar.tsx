
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { Settings, Smartphone, Home, Key, LayoutDashboard, Bell, Sliders, LightbulbIcon, Clock, Grid2X2, Link, Coffee, ArrowUpRight, MousePointerClick } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [automationMenuOpen, setAutomationMenuOpen] = useState(false);
  
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
                <DropdownMenu open={automationMenuOpen} onOpenChange={setAutomationMenuOpen}>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton 
                      tooltip="Automatisations" 
                      isActive={activeItem === "/automation" || 
                        activeItem === "/automation/schedules" || 
                        activeItem === "/automation/channel-groups" ||
                        activeItem === "/automation/direct-links" ||
                        activeItem === "/automation/scenes" ||
                        activeItem === "/automation/reactions" ||
                        activeItem === "/automation/applications"}
                    >
                      <Settings />
                      <span>Automatisations</span>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start" className="w-64 z-50 bg-background border">
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/schedules")}>
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Schedules</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/channel-groups")}>
                        <Grid2X2 className="mr-2 h-4 w-4" />
                        <span>Channel groups</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/direct-links")}>
                        <Link className="mr-2 h-4 w-4" />
                        <span>Direct links</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/scenes")}>
                        <Coffee className="mr-2 h-4 w-4" />
                        <span>Scenes</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/reactions")}>
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Reactions</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/automation/applications")}>
                        <MousePointerClick className="mr-2 h-4 w-4" />
                        <span>Applications</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
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
