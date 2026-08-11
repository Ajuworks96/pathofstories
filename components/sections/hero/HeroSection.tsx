"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-[#213327] pt-28 sm:pt-36 pb-20 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_hiking_ridge.png"
          alt="Hikers on mountain ridge golden hour"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Soft atmospheric gradient top fade to integrate header smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F5F0] via-[#F6F5F0]/30 to-[#F6F5F0]/80" />
      </div>

      {/* Hero Headline Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6 my-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#213327] font-semibold tracking-tight leading-[1.15]">
          Journeys that <br />
          <span className="text-[#AD6B4D] italic font-normal">stay</span> with you.
        </h1>

        {/* Decorative Wheat/Leaf Branch SVG Accent */}
        <div className="flex justify-center py-1">
          <svg
            className="w-12 h-6 text-[#AD6B4D]"
            viewBox="0 0 100 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 38 C50 15, 20 20, 10 24" />
            <path d="M50 38 C35 25, 25 28, 22 32" />
            <path d="M50 38 C42 30, 38 32, 35 36" />
            <path d="M50 38 C50 15, 80 20, 90 24" />
            <path d="M50 38 C65 25, 75 28, 78 32" />
            <path d="M50 38 C58 30, 62 32, 65 36" />
          </svg>
        </div>

        {/* Explore Trips CTA Button */}
        <div className="pt-2">
          <Link
            href="/services"
            className="inline-block bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wider uppercase px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Explore Trips
          </Link>
        </div>
      </div>
    </section>
  );
}

