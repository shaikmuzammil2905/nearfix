import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-slate-900">
      {/* 100% Bright, High Clarity Custom Hero Background Image without heavy shadows */}
      <img
        src="/hero-bg-custom.png"
        alt="NEARFIX Services Background"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 filter brightness-105 contrast-100 transition-transform duration-700"
      />

      {/* Subtle bottom gradient to smoothly blend into page content */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
    </div>
  );
};
