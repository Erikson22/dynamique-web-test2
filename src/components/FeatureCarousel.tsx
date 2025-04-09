
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  children,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={cn("relative w-full my-8", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white text-[#189ab4] rounded-full p-2 shadow-md transition-all duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white text-[#189ab4] rounded-full p-2 shadow-md transition-all duration-300"
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </button>
      
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-[#189ab4]" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
