import React, { useRef, useEffect } from 'react';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays programmatically on all mobile browsers & desktop
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay fallback
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 bg-slate-900">
      {/* 100% High Clarity Video Background - Scaled to Crop Out Video Corner Watermark */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top transform scale-[1.14] origin-top-left opacity-90 transition-opacity duration-300"
      >
        <source src="/main_concept_is_near_fix_worke.mp4" type="video/mp4" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
