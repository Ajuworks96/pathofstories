"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-16 h-16",
  };

  return (
    <Link href="/" className="flex items-center gap-3.5 group">
      {/* Premium Circular Emblem Logo Badge with Gold Ring */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-0.5 bg-gradient-to-tr from-[#2F5D50] via-[#E8DCC8] to-[#6B8A6E] shadow-xl group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
        <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0E1F1A]">
          <Image
            src="/images/logo_badge.png"
            alt="Path of Stories Official Emblem"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-extrabold tracking-widest text-[#FAF7F1] uppercase font-serif leading-none group-hover:text-[#E8DCC8] transition-colors">
            PATH OF STORIES
          </span>
          <span className="text-[10px] sm:text-[11px] italic font-serif text-[#E8DCC8] tracking-wider mt-0.5">
            Every Journey Tells a Story
          </span>
        </div>
      )}
    </Link>
  );
}
