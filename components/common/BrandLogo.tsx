"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  return (
    <Link href="/" className="flex items-center gap-3 group focus:outline-none">
      {/* Mountain Line-Art Sketch SVG Logo matching Mockup */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0 text-[#213327]`}>
        <svg
          viewBox="0 0 100 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* Main mountain ridge */}
          <path d="M8 58 L36 14 L56 46 L76 24 L92 58" />
          {/* Inner ridge lines */}
          <path d="M36 14 L24 38" />
          <path d="M76 24 L64 42" />
          {/* Winding trail path */}
          <path d="M38 48 C44 58, 18 62, 42 74" />
          {/* Pine tree detail */}
          <path d="M78 40 L84 46 L77 46 L83 52 L75 52 L81 58 L78 58 L78 63" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="text-base sm:text-lg font-bold font-serif tracking-wider text-[#213327] uppercase leading-none group-hover:text-[#AD6B4D] transition-colors">
            PATH OF STORIES
          </span>
          <span className="text-[10px] sm:text-[11px] font-sans text-[#78857A] tracking-normal mt-1">
            Every Journey Tells a Story
          </span>
        </div>
      )}
    </Link>
  );
}

