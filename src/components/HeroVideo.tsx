import React, { useRef, useEffect } from 'react';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays programmatically on all browsers & mobile devices
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handling
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-slate-900">
      {/* 100% Clear Video Background - No Poster Image & Zero Overlay Shadows */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-opacity duration-500"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
