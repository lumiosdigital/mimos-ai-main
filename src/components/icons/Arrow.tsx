// src/components/icons/Arrow.tsx
import React from 'react';

interface ArrowProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Arrow({ 
  className = "", 
  width = 20, 
  height = 20,
  color = "white",
  strokeWidth = 2
}: ArrowProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2.5 17.5L17.5 2.5M17.5 2.5H2.5M17.5 2.5V17.5" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="square"
      />
    </svg>
  );
}