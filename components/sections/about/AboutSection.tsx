"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Subtitle / Tagline */}
            <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
              WE BELIEVE
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] leading-[1.2] tracking-tight">
              Travel is more than <br className="hidden sm:inline" />
              reaching a destination.
            </h2>

            {/* Decorative Copper Leaf SVG Branch */}
            <div className="py-0.5">
              <svg
                className="w-10 h-5 text-[#AD6B4D]"
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

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-[#4A554D] leading-relaxed max-w-md font-sans font-light">
              It&apos;s about discovering new perspectives, meeting incredible people and creating stories you&apos;ll cherish forever.
            </p>

            {/* Learn More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#213327] hover:text-[#AD6B4D] transition-colors group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Friends Sitting Image (Span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E2DEC5]">
              <Image
                src="/images/we_believe_friends.png"
                alt="Four friends sitting on mountain cliff watching sunset"
                fill
                quality={95}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Botanical Watermark Background Element on Bottom Right */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-15 transform translate-x-12 translate-y-12 z-0">
        <svg
          className="w-96 h-96 text-[#213327]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M100 180 C100 100, 160 50, 180 20 M100 180 C110 130, 140 100, 160 80 M100 180 C120 150, 150 130, 170 120" />
          <path d="M100 180 C90 130, 60 100, 40 80 M100 180 C80 150, 50 130, 30 120" />
        </svg>
      </div>
    </section>
  );
}
