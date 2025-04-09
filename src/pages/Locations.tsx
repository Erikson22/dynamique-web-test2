
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const Locations = () => {
  const locations = [
    { id: 1, name: "Maison Principale", address: "12 Rue des Lilas, Paris", rooms: 7, devices: 15 },
    { id: 2, name: "Appartement Secondaire", address: "8 Avenue Victor Hugo, Lyon", rooms: 3, devices: 6 },
    { id: 3, name: "Maison de Vacances", address: "23 Rue de la Plage, Nice", rooms: 5, devices: 9 },
  ];

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-2xl font-bold">Mes Locations</h1>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Tous les Emplacements</h2>
            <p className="text-muted-foreground">Gérez vos différents emplacements et propriétés</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Ajouter un Emplacement
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Home className="mr-2 h-5 w-5" />
                    {location.name}
                  </CardTitle>
                  <Badge variant="outline" className="ml-2">
                    {location.devices} appareils
                  </Badge>
                </div>
                <CardDescription>{location.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{location.rooms} pièces</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="default" size="sm">
                      Détails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
};

export default Locations;
