
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, PlusCircle } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

const Schedules = () => {
  const schedules = [
    { id: 1, name: "Allumer les lumières", time: "18:30", days: ["Lun", "Mar", "Mer", "Jeu", "Ven"], active: true, actions: 3 },
    { id: 2, name: "Fermer les volets", time: "22:00", days: ["Tous les jours"], active: true, actions: 5 },
    { id: 3, name: "Mode vacances", time: "Variable", days: ["Sam", "Dim"], active: false, actions: 8 },
  ];

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-2xl font-bold">Automatisations - Planifications</h1>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Planifications</h2>
            <p className="text-muted-foreground">Gérez les tâches planifiées qui s'exécutent automatiquement</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Créer une Planification
          </Button>
        </div>
        
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <Card key={schedule.id}>
              <CardHeader className="pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    {schedule.name}
                  </CardTitle>
                </div>
                <Switch checked={schedule.active} />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline">{schedule.time}</Badge>
                      {schedule.days.map((day, index) => (
                        <Badge key={index} variant="secondary">{day}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{schedule.actions} actions configurées</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Modifier</Button>
                    <Button variant="outline" size="sm">Exécuter</Button>
                    <Button variant="destructive" size="sm">Supprimer</Button>
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

export default Schedules;
