"use client";
import Spline from '@splinetool/react-spline';

interface SplineHeroProps {
  isMobile?: boolean;
}

export default function SplineHero({ isMobile = false }: SplineHeroProps) {
  return (
    <div 
      className={`absolute inset-0 z-0 w-full h-full ${
        isMobile 
          ? "overflow-hidden" 
          : "overflow-hidden"
      }`}
    >
      <Spline
        scene="https://prod.spline.design/SLEx5M4mpXOR6TLD/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}