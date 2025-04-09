
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Battery, Gauge, ThermometerIcon, Wifi } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Température</CardTitle>
              <CardDescription>Intérieure moyenne</CardDescription>
            </div>
            <ThermometerIcon className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">22.5°C</div>
            <p className="text-xs text-muted-foreground">+0.5° depuis hier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Consommation</CardTitle>
              <CardDescription>Électricité aujourd'hui</CardDescription>
            </div>
            <Gauge className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.2 kWh</div>
            <p className="text-xs text-muted-foreground">-12% par rapport à la moyenne</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Appareils</CardTitle>
              <CardDescription>Status du réseau</CardDescription>
            </div>
            <Wifi className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12/15</div>
            <p className="text-xs text-muted-foreground">Appareils connectés</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-4">Statistiques récentes</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Consommation énergétique</CardTitle>
          <CardDescription>7 derniers jours</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex justify-center items-center">
          <BarChart3 className="h-40 w-40 text-gray-300" />
          <p className="text-muted-foreground text-sm">Graphique de consommation</p>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-bold mb-4">Appareils actifs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Salon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Battery className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-sm font-medium">3 appareils actifs</span>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">En ligne</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Cuisine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Battery className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-sm font-medium">2 appareils actifs</span>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">En ligne</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Chambre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Battery className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-sm font-medium">1 appareil actif</span>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">En ligne</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
