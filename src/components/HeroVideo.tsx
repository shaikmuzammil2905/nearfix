import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* Background Graphic Illustration Fallback Canvas/Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Subtle Motion Elements representing local town, shops & map pins */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />

      {/* Soft overlay gradient for optimal text readability without shadows */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/75 to-blue-950/85" />
    </div>
  );
};
