
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";

const Volets = () => {
  const { toast } = useToast();
  const [shutterStates, setShutterStates] = useState({
    salon: 100,
    cuisine: 75,
    chambre1: 0,
    chambre2: 50,
    salleDeBain: 25,
  });

  const handleShutterChange = (room: string, position: number) => {
    setShutterStates(prev => ({
      ...prev,
      [room]: position
    }));
    
    toast({
      title: "Volet ajusté",
      description: `Le volet de ${room} est maintenant à ${position}%`,
    });
  };

  const getShutterStyle = (position: number) => {
    return {
      height: `${position}%`,
      backgroundColor: "#e2e8f0",
      transition: "height 0.5s ease-in-out"
    };
  };

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-2xl font-bold">Contrôle des Volets</h1>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte pour chaque pièce avec son volet */}
          {Object.entries(shutterStates).map(([room, position]) => (
            <Card key={room} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Sliders className="mr-2 h-5 w-5" />
                  {room.charAt(0).toUpperCase() + room.slice(1)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>Position: {position}%</span>
                </div>
                <div className="h-40 border rounded-md mb-4 relative">
                  <div 
                    className="absolute bottom-0 w-full" 
                    style={getShutterStyle(position)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => handleShutterChange(room, 0)}
                    className="flex-1"
                  >
                    Fermer
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleShutterChange(room, 50)}
                    className="flex-1"
                  >
                    50%
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleShutterChange(room, 100)}
                    className="flex-1"
                  >
                    Ouvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
};

export default Volets;
