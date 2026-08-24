import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-slate-950">
      {/* User Custom Grand Architectural Illustration Background */}
      <img
        src="/hero-bg-custom.png"
        alt="NEARFIX Services Background"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 filter brightness-90 contrast-105 transition-transform duration-700"
      />

      {/* Layered Gradient Overlay for High Contrast & Text Legibility on Desktop & Mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      <div className="absolute inset-0 bg-radial-vignette opacity-70" />
    </div>
  );
};
