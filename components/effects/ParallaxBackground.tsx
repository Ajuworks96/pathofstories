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
      {/* Layer 1: Highly Vivid & Crisp Parallax Wilderness Master Background */}
      <div
        className="absolute inset-0 w-full h-[170vh] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.45}px, 0) scale(1.05)`,
        }}
      >
        <Image
          src="/images/master_parallax_bg.jpg"
          alt="Wilderness Parallax Canvas"
          fill
          priority
          className="object-cover object-top opacity-95"
        />
        {/* Subtle gradient vignette at top & bottom for legibility without hiding mountains/stars */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Layer 2: Counter-Moving Misty Orbs */}
      <div
        className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-amber-500/20 rounded-full blur-[120px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * -0.2}px, 0)`,
        }}
      />
      <div
        className="absolute top-2/3 right-10 w-[650px] h-[650px] bg-emerald-600/20 rounded-full blur-[140px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * -0.25}px, 0)`,
        }}
      />

      {/* Layer 3: Dynamic Floating Campfire Ember Sparks */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * -0.4}px, 0)`,
        }}
      >
        <div className="absolute top-[15vh] left-[15%] w-2.5 h-2.5 rounded-full bg-amber-400 blur-[0.5px] animate-pulse shadow-xl shadow-amber-500/80" />
        <div className="absolute top-[35vh] left-[82%] w-3 h-3 rounded-full bg-yellow-300 blur-[0.5px] animate-ping shadow-xl shadow-yellow-400/80" />
        <div className="absolute top-[60vh] left-[40%] w-2.5 h-2.5 rounded-full bg-amber-500 blur-[0.5px] animate-pulse shadow-xl shadow-amber-600/80" />
        <div className="absolute top-[85vh] left-[85%] w-3 h-3 rounded-full bg-amber-400 blur-[0.5px] animate-pulse shadow-xl shadow-amber-500/80" />
        <div className="absolute top-[110vh] left-[18%] w-2.5 h-2.5 rounded-full bg-yellow-400 blur-[0.5px] animate-ping shadow-xl shadow-yellow-500/80" />
      </div>
    </div>
  );
}
