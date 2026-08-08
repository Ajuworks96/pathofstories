"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, MapPin } from "lucide-react";

export function HeroSection() {
  const [activePreview, setActivePreview] = useState<"maharashtra" | "meghalaya" | "spiti">("maharashtra");

  const previewData = {
    maharashtra: {
      title: "Western Ghats Monsoon Ridge",
      location: "Sahyadri, Maharashtra",
      date: "Sep 12 - Sep 15",
      price: "₹8,999",
      image: "/images/trip_maharashtra.jpg",
    },
    meghalaya: {
      title: "Living Root Bridges & Cherrapunji",
      location: "Rainforest, Meghalaya",
      date: "Oct 05 - Oct 10",
      price: "₹14,500",
      image: "/images/trip_meghalaya.jpg",
    },
    spiti: {
      title: "Spiti Monastery & Milky Way Stargazing",
      location: "Spiti Valley, Himachal",
      date: "Oct 18 - Oct 25",
      price: "₹21,000",
      image: "/images/trip_spiti.jpg",
    },
  };

  const currentPreview = previewData[activePreview];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-transparent text-[#FAF7F1] pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#6B8A6E]/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#2F5D50]/20 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content Column (Span 7) */}
          <div className="w-full lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E1F1A]/95 border border-[#2F5D50] backdrop-blur-md shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#6B8A6E] animate-ping flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#E8DCC8] uppercase">
                EXPLORE &bull; CONNECT &bull; REMEMBER
              </span>
            </div>

            {/* Official Tagline & Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-sans text-[#FAF7F1] break-normal drop-shadow-2xl">
              Where Every Path <br className="hidden sm:inline" />
              Becomes An <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E] text-3xl sm:text-5xl lg:text-7xl block mt-1 drop-shadow-2xl">
                Unforgettable Story.
              </span>
            </h1>

            {/* Official Brand Mission Copy */}
            <p className="text-[#FAF7F1]/95 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl break-normal drop-shadow-lg">
              At Path of Stories, we don&apos;t simply organize trips—we create experiences where strangers become companions, companions become friends, and every journey becomes a story worth remembering.
            </p>

            {/* CTA Action Button */}
            <div className="pt-2 w-full">
              <a
                href="/services"
                className="bg-[#E8DCC8] hover:bg-[#FAF7F1] text-[#0E1F1A] text-xs sm:text-sm font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-3 group border border-white/50 hover:scale-105"
              >
                <span>EXPLORE EXPEDITIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Proof Rating Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-[#2F5D50]/50 text-xs text-[#E8DCC8] w-full backdrop-blur-sm rounded-xl py-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#2F5D50] border-2 border-[#0E1F1A] flex items-center justify-center text-[10px] font-bold text-[#FAF7F1]">JK</div>
                  <div className="w-8 h-8 rounded-full bg-[#6B8A6E] border-2 border-[#0E1F1A] flex items-center justify-center text-[10px] font-bold text-[#FAF7F1]">AA</div>
                  <div className="w-8 h-8 rounded-full bg-[#333333] border-2 border-[#0E1F1A] flex items-center justify-center text-[10px] font-bold text-[#FAF7F1]">SP</div>
                </div>
                <div>
                  <div className="flex items-center text-[#E8DCC8] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#FAF7F1]">4.9/5 Rating</span> from 2,000+ Travelers
                </div>
              </div>

              <div className="h-8 w-px bg-[#2F5D50]/50 hidden sm:block" />

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-xl font-extrabold text-[#FAF7F1] font-serif block drop-shadow-md">110+</span>
                  <span className="text-[10px] text-[#E8DCC8] uppercase font-bold tracking-wider">Expeditions</span>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-[#FAF7F1] font-serif block drop-shadow-md">13k+</span>
                  <span className="text-[10px] text-[#E8DCC8] uppercase font-bold tracking-wider">Community</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Destination Card Showcase (Span 5) */}
          <div className="w-full lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Main Interactive Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#2F5D50] shadow-2xl bg-[#162E27]/90 backdrop-blur-xl group transition-all duration-500 w-full">
              <div className="relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F1A]/95 via-[#0E1F1A]/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-full bg-[#0E1F1A]/80 backdrop-blur-md border border-[#2F5D50] text-[#E8DCC8] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
                    FEATURED ESCAPE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#2F5D50] text-[#FAF7F1] text-[10px] font-extrabold uppercase tracking-wider">
                    {currentPreview.price}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-[#E8DCC8] text-xs font-semibold tracking-wider uppercase">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentPreview.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FAF7F1] tracking-wide">
                    {currentPreview.title}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-[#2F5D50]/50 text-xs text-[#E8DCC8] font-medium">
                    <span>Dates: {currentPreview.date}</span>
                    <a
                      href="/services"
                      className="text-[#E8DCC8] hover:text-[#FAF7F1] font-bold uppercase tracking-wider underline underline-offset-4 flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Mini Preview Selector Tabs */}
            <div className="mt-4 bg-[#162E27]/90 backdrop-blur-md rounded-2xl p-2 border border-[#2F5D50] flex items-center justify-between gap-2 shadow-xl w-full">
              <span className="text-[10px] font-bold tracking-widest text-[#E8DCC8]/60 uppercase px-3 hidden sm:inline">
                PREVIEW:
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {(["maharashtra", "meghalaya", "spiti"] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePreview(key)}
                    className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      activePreview === key
                        ? "bg-[#2F5D50] text-[#FAF7F1] shadow-lg border border-[#E8DCC8]/40"
                        : "bg-[#0E1F1A]/40 hover:bg-[#162E27] text-[#E8DCC8]/80 border border-[#2F5D50]/30"
                    }`}
                  >
                    {key === "maharashtra" ? "Ghats" : key === "meghalaya" ? "Meghalaya" : "Spiti"}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
