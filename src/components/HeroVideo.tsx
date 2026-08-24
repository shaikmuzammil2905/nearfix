import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-emerald-950">
      {/* Animated Araku Valley Scenic Landscape Background */}
      <img
        src="/hero-bg-araku.png"
        alt="NEARFIX Araku Valley Scenic Background"
        className="absolute inset-0 w-full h-full object-cover object-center animate-kenburns filter brightness-105 contrast-105"
      />

      {/* Light protective gradient mask ensuring text pops crisply */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/40" />
    </div>
  );
};
