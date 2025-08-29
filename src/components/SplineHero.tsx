"use client";
import Spline from '@splinetool/react-spline';

interface SplineHeroProps {
  isMobile?: boolean;
}

export default function SplineHero({ isMobile = false }: SplineHeroProps) {
  return (
    <div 
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${
        isMobile 
          ? "min-w-[530px] min-h-[530px]" 
          : "mt-[3.125rem] scale-[0.96] max-h-[46rem] max-w-[46rem] w-[46rem] h-[46rem]"
      }`}
    >
      <Spline
        scene="https://prod.spline.design/SLEx5M4mpXOR6TLD/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          pointerEvents: 'auto'
        }}
      />
    </div>
  );
}