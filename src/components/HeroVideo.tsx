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
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* 100% Clear Video Background - No Blue Tint */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-opacity duration-700"
        poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Ultra Minimal Vignette - NO Blue Shadow Overlay, Video is 100% Clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
    </div>
  );
};
