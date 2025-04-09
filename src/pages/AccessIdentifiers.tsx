
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Key, PlusCircle, UserPlus, Users } from "lucide-react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccessIdentifiers = () => {
  const users = [
    { id: 1, name: "Jean Dupont", email: "jean.dupont@example.com", role: "Administrateur", status: "Actif" },
    { id: 2, name: "Marie Martin", email: "marie.martin@example.com", role: "Utilisateur", status: "Actif" },
    { id: 3, name: "Pierre Durand", email: "pierre.durand@example.com", role: "Invité", status: "Inactif" },
  ];
  
  const apiKeys = [
    { id: 1, name: "Clé d'API principale", key: "sp_2f8a9c3d7e", scope: "Complet", created: "10/03/2024" },
    { id: 2, name: "Clé pour intégration externe", key: "sp_6b2d4f8a7c", scope: "Lecture seule", created: "15/02/2024" },
  ];

  return (
    <SidebarInset>
      <div className="flex items-center p-4 border-b">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-2xl font-bold">Identifiants d'Accès</h1>
      </div>
      
      <div className="p-6">
        <Tabs defaultValue="users" className="mb-6">
          <TabsList>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Utilisateurs
            </TabsTrigger>
            <TabsTrigger value="api-keys" className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              Clés d'API
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Gestion des Utilisateurs</h2>
                <p className="text-muted-foreground">Gérez les accès utilisateurs à votre système</p>
              </div>
              <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Ajouter un Utilisateur
              </Button>
            </div>
            
            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={user.role === "Administrateur" ? "default" : user.role === "Utilisateur" ? "secondary" : "outline"}>
                        {user.role}
                      </Badge>
                      <Badge variant={user.status === "Actif" ? "success" : "destructive"}>
                        {user.status}
                      </Badge>
                      <Button variant="outline" size="sm">Modifier</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="api-keys" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Clés d'API</h2>
                <p className="text-muted-foreground">Gérez les clés d'API pour l'intégration avec d'autres services</p>
              </div>
              <Button className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Générer une Nouvelle Clé
              </Button>
            </div>
            
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <Card key={apiKey.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{apiKey.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2 my-1">
                          <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                            {apiKey.key}
                          </code>
                          <Button variant="ghost" size="sm">Copier</Button>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Portée: {apiKey.scope}</span>
                          <span>Créée le: {apiKey.created}</span>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Régénérer</Button>
                        <Button variant="destructive" size="sm">Révoquer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  );
};

export default AccessIdentifiers;
