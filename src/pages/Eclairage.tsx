
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LightbulbIcon } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";

const Eclairage = () => {
  const { toast } = useToast();
  const [lightStates, setLightStates] = useState({
    salon: { on: true, brightness: 80 },
    cuisine: { on: false, brightness: 50 },
    chambre1: { on: true, brightness: 30 },
    chambre2: { on: false, brightness: 60 },
    salleDeBain: { on: true, brightness: 100 },
  });

  const toggleLight = (room: string) => {
    setLightStates(prev => ({
      ...prev,
      [room]: { ...prev[room as keyof typeof prev], on: !prev[room as keyof typeof prev].on }
    }));
    
    const newState = !lightStates[room as keyof typeof lightStates].on;
    toast({
      title: newState ? "Lumière allumée" : "Lumière éteinte",
      description: `La lumière de ${room} est maintenant ${newState ? "allumée" : "éteinte"}`,
    });
  };

  const handleBrightness = (room: string, value: number[]) => {
    const brightness = value[0];
    setLightStates(prev => ({
      ...prev,
      [room]: { ...prev[room as keyof typeof prev], brightness }
    }));
    
    toast({
      title: "Luminosité ajustée",
      description: `La luminosité de ${room} est maintenant à ${brightness}%`,
    });
  };

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-2xl font-bold">Contrôle de l'Éclairage</h1>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte pour chaque pièce avec son éclairage */}
          {Object.entries(lightStates).map(([room, { on, brightness }]) => (
            <Card key={room} className={`overflow-hidden ${on ? 'border-yellow-400' : ''}`}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <LightbulbIcon className={`mr-2 h-5 w-5 ${on ? 'text-yellow-400' : ''}`} />
                  {room.charAt(0).toUpperCase() + room.slice(1)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span>État: {on ? 'Allumé' : 'Éteint'}</span>
                  <Button 
                    variant={on ? "default" : "outline"}
                    onClick={() => toggleLight(room)}
                    className={on ? "bg-yellow-400 hover:bg-yellow-500" : ""}
                  >
                    {on ? 'Éteindre' : 'Allumer'}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Luminosité: {brightness}%</span>
                  </div>
                  <Slider
                    disabled={!on}
                    value={[brightness]}
                    min={1}
                    max={100}
                    step={1}
                    onValueChange={(value) => handleBrightness(room, value)}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Min</span>
                    <span>Max</span>
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

export default Eclairage;
