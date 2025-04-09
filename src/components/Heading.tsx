
import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  children, 
  className,
  underline = true 
}) => {
  return (
    <div className={cn("text-center my-8", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#05445E] mb-2">
        {children}
      </h2>
      {underline && (
        <div className="relative flex justify-center">
          <div className="absolute w-16 h-1 bg-[#D4756D] rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Heading;
