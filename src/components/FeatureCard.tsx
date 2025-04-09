
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "bg-[#189ab4] hover:bg-[#1a8ca5] text-white rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg min-h-[200px]",
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <Icon size={40} className="text-white animate-pulse" />
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
