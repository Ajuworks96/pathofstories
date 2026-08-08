"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070b0a]">
      {/* Layer 1: High-Definition 2K Uncompressed Overland Adventure Canvas */}
      <div
        className="fixed inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
        }}
      >
        <Image
          src="/images/overland_hd_2k.png"
          alt="Overland &amp; Off-Road Expedition Background"
          fill
          priority
          unoptimized={true}
          quality={100}
          className="object-cover object-center opacity-95"
        />
        {/* Soft targeted gradient overlays for text legibility without reducing image sharpness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/70" />
      </div>
    </div>
  );
}
