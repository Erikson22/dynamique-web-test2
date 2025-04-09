
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#D4F1F9] to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05445E] mb-4 animate-fade-in">
            Smart Home Control
          </h1>
          <p className="text-xl text-[#189AB4] mb-8 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Simplifiez votre quotidien avec notre système de domotique intuitif et complet, contrôlable depuis n'importe où.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-[#189AB4] hover:bg-[#05445E] text-white px-8 py-6">
              Commencer
            </Button>
            <Button variant="outline" className="border-[#189AB4] text-[#189AB4] hover:bg-[#D4F1F9] px-8 py-6">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
