
import React, { forwardRef } from "react";
import { LucideProps } from "lucide-react";

export const Channels = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="8"></circle>
      <line x1="12" y1="2" x2="12" y2="4"></line>
      <line x1="12" y1="20" x2="12" y2="22"></line>
      <line x1="2" y1="12" x2="4" y2="12"></line>
      <line x1="20" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
      <line x1="19.07" y1="4.93" x2="17.66" y2="6.34"></line>
      <line x1="6.34" y1="17.66" x2="4.93" y2="19.07"></line>
    </svg>
  )
);

export const HomeIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  )
);

export const RollerShutter = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="3" y1="15" x2="21" y2="15"></line>
      <path d="M4 3h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
    </svg>
  )
);

export const Smile = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  )
);

// We need to set the displayName on each component
Channels.displayName = "Channels";
HomeIcon.displayName = "HomeIcon";
RollerShutter.displayName = "RollerShutter";
Smile.displayName = "Smile";
