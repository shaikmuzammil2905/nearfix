import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-slate-950">
      {/* Animated Araku Valley Scenic Landscape Background from image copy 30 */}
      <img
        src="/hero-bg-araku.png"
        alt="NEARFIX Araku Valley Scenic Background"
        className="absolute inset-0 w-full h-full object-cover object-center animate-kenburns filter brightness-95 contrast-110"
      />

      {/* Dark protective gradient mask ensuring text pops crisply with NO white background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/90" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/30 to-slate-950/70" />
    </div>
  );
};

