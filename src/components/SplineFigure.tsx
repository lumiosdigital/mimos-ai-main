"use client";
import Spline from '@splinetool/react-spline';

interface SplineFigureProps {
  isMobile?: boolean;
}

export default function SplineFigure({ isMobile = false }: SplineFigureProps) {
  return (
    <div 
      className={`w-full z-10 ${isMobile ? "" : "-mb-[50px]"}`}
      style={{ height: '400px' }}
    >
      <Spline
        scene="https://prod.spline.design/1tqv3GuZEqIo4eeA/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          pointerEvents: 'auto'
        }}
      />
    </div>
  );
}