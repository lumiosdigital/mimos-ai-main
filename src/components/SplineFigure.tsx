"use client";
import Spline from '@splinetool/react-spline';

interface SplineFigureProps {
  isMobile?: boolean;
}

export default function SplineFigure({ isMobile = false }: SplineFigureProps) {
  return (
    <div 
      className={`absolute inset-0 z-0 w-full h-full ${
        isMobile ? "overflow-hidden" : "overflow-hidden"
      }`}
    >
      <Spline
        scene="https://prod.spline.design/1tqv3GuZEqIo4eeA/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          pointerEvents: 'none' // Prevent interaction with cards above
        }}
      />
    </div>
  );
}