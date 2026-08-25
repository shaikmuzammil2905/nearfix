import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-emerald-950">
      {/* Bright, Vivid Araku Valley Scenic Green Landscape Background */}
      <img
        src="/hero-bg-araku.png"
        alt="NEARFIX Araku Valley Scenic Green Landscape Background"
        className="absolute inset-0 w-full h-full object-cover object-center animate-kenburns filter brightness-105 contrast-105"
      />

      {/* Light protective vignette mask ensuring text pops while green mountains & sky remain brightly visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55" />
    </div>
  );
};


