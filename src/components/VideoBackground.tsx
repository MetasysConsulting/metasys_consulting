"use client";

import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function VideoBackground({
  src,
  fallbackImage,
  overlay = true,
  overlayOpacity = 0.5,
  className = "",
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video or Fallback Image */}
      {!isMobile && src ? (
        <video
          ref={videoRef}
          className={`video-background transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          {fallbackImage && (
            <div
              className="video-background bg-cover bg-center"
              style={{ backgroundImage: `url(${fallbackImage})` }}
            />
          )}
        </video>
      ) : (
        fallbackImage && (
          <div
            className="video-background bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="video-overlay"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 