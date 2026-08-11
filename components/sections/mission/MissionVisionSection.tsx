"use client";

import React from "react";
import { Target, Eye, ShieldCheck, HeartHandshake, Compass, Sparkles } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
            OUR PURPOSE &amp; DIRECTION
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Driven by Purpose. <br />
            <span className="text-[#AD6B4D] italic font-normal">Guided by Vision.</span>
          </h2>

          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />

          <p className="text-[#4A554D] text-sm sm:text-base font-light leading-relaxed pt-2">
            Path of Stories was founded with a shared belief: travel should connect us deeper to nature, people, and ourselves. Here is what guides every journey we craft.
          </p>
        </div>

        {/* Mission & Vision Cards (2 Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Mission Card */}
          <div className="bg-[#EFECE6] border border-[#E2DEC5] hover:border-[#AD6B4D]/50 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-40 h-40 text-[#213327]" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-[#D9D4C7] pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#AD6B4D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  OUR MISSION
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#AD6B4D] text-[#FAF8F5] flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#213327] leading-tight">
                Meaningful, Safe &amp; Transparent Journeys
              </h3>

              <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
                At Path of Stories, our mission is to create safe, memorable, and deeply meaningful travel experiences that connect people with nature, diverse cultures, and fellow conscious travelers. We offer carefully curated small-group expeditions with zero hidden costs, complete safety, and genuine local warmth.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D9D4C7] flex items-center gap-3 text-xs text-[#78857A] font-medium relative z-10">
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DCD7CD] text-[#213327]">
                Safety First
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DCD7CD] text-[#213327]">
                Transparent Pricing
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DCD7CD] text-[#213327]">
                Local Impact
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#213327] text-[#FAF8F5] border border-[#2C4233] hover:border-[#AD6B4D]/50 rounded-3xl p-8 sm:p-10 space-y-6 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-40 h-40 text-white" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-[#2C4233] pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5CEC8] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#AD6B4D]" />
                  OUR VISION
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] text-[#213327] flex items-center justify-center shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#FAF8F5] leading-tight">
                India&apos;s Most Trusted &amp; Loved Travel Community
              </h3>

              <p className="text-xs sm:text-sm text-[#C5CEC8] leading-relaxed font-light">
                Our vision is to become India&apos;s most trusted travel community—celebrated for authentic offbeat journeys across Kerala, the Northeast, and beyond. A space where solo travelers and friend groups bond effortlessly, returning home with stories worth retelling for a lifetime.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2C4233] flex items-center gap-3 text-xs text-[#C5CEC8] font-medium relative z-10">
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233] text-[#FAF8F5]">
                Conscious Travel
              </span>
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233] text-[#FAF8F5]">
                Lifelong Bonds
              </span>
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233] text-[#FAF8F5]">
                Authentic Trails
              </span>
            </div>
          </div>

        </div>

        {/* 3 Key Pillars Footer Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#AD6B4D]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold font-serif text-[#213327]">Vetted Stays &amp; Leads</h4>
              <p className="text-xs text-[#78857A]">Certified leads &amp; safe stays</p>
            </div>
          </div>

          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#AD6B4D]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold font-serif text-[#213327]">Inclusive Community</h4>
              <p className="text-xs text-[#78857A]">Welcoming solo &amp; group travelers</p>
            </div>
          </div>

          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 text-[#AD6B4D]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold font-serif text-[#213327]">Offbeat Exploration</h4>
              <p className="text-xs text-[#78857A]">Unexplored mountain &amp; ocean trails</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
