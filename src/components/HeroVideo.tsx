import React, { useRef, useEffect } from 'react';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay works on mobile browsers by setting muted & playsInline programmatically
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handling
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* HTML5 Video Element with MP4 Source */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-opacity duration-1000"
        poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Balanced Overlay for 100% High Contrast Text Readability without Heavy Shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 via-slate-900/65 to-blue-950/80" />
    </div>
  );
};
