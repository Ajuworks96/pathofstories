"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";

export const StoryHero: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("Himalayas");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");

  return (
    <div className="relative min-h-[96vh] w-full flex flex-col justify-between overflow-hidden bg-[#0B0F14] text-white">
      {/* Background Photography with Topographic Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=95"
          alt="High Mountain Trekking Expedition"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/60 to-black/70" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Trekking Navigation Bar */}
      <header className="relative z-20 w-full pt-6 pb-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <Container size="2xl">
          <div className="flex items-center justify-between gap-4">
            {/* Top Left Brand Logo */}
            <Link href="/" className="flex items-center gap-3 text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              <span className="w-8 h-8 rounded-md bg-[#FF5722] text-white flex items-center justify-center font-bold text-base shadow-lg shadow-[#FF5722]/30">
                ⛰️
              </span>
              <span>PATH OF STORIES</span>
            </Link>

            {/* Centered Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#FF5722] transition-colors">
                HOME
              </Link>
              <a href="#treks" className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                EXPEDITIONS
              </a>
              <a href="#itinerary" className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                ROUTE ITINERARY
              </a>
              <a href="#guides" className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                ALPINE GUIDES
              </a>
              <a href="#safety" className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                TRAIL SAFETY
              </a>
            </nav>

            {/* Top Right Live Trail Weather Pill */}
            <div className="hidden lg:flex items-center gap-3 bg-surface/90 border border-border px-4 py-2 rounded-full text-xs text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span className="font-semibold text-white">Basecamp Altitude: 3,800m</span>
              <span className="text-slate-400">|</span>
              <span className="text-[#FF5722] font-bold">-4°C Clear</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Hero Content Area */}
      <div className="relative z-10 flex-1 flex items-center py-16 sm:py-24">
        <Container size="2xl" className="w-full">
          <div className="max-w-4xl space-y-8">
            
            {/* Expedition Stencil Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-[#FF5722] text-white border border-[#FF5722]/50 text-xs px-3.5 py-1.5 font-bold uppercase tracking-widest shadow-xl shadow-[#FF5722]/30">
                HUMAN-LED EXPEDITIONS
              </Badge>
              <Badge className="bg-black/60 text-emerald-400 border border-emerald-500/40 text-xs px-3.5 py-1.5 font-bold uppercase tracking-widest backdrop-blur-md">
                STRICTLY MAX 8 TREKKERS
              </Badge>
            </div>

            {/* Bold Outdoor Trekking Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-2xl">
              UNTAMED WILDERNESS.<br />
              <span className="text-[#FF5722]">UNFORGETTABLE SUMMITS.</span>
            </h1>

            {/* Trek Metrics Gauge Bar */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2 text-xs font-bold uppercase tracking-widest text-slate-300 border-l-2 border-[#FF5722] pl-6">
              <div>
                <span className="text-slate-400 block text-[10px]">MAX ELEVATION</span>
                <span className="text-white text-lg font-black">5,420M</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/15" />
              <div>
                <span className="text-slate-400 block text-[10px]">TREK DIFFICULTY</span>
                <span className="text-[#FF5722] text-lg font-black">GRADE IV - ALPINE</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/15" />
              <div>
                <span className="text-slate-400 block text-[10px]">GPS WAYPOINT</span>
                <span className="text-white text-lg font-black">30° 20&apos; N 79° E</span>
              </div>
            </div>

            {/* Interactive Trek Filter Widget */}
            <div className="bg-surface/95 border border-border p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-xl max-w-3xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#FF5722] flex items-center gap-2">
                <span>🔍</span>
                <span>FIND YOUR NEXT TREKKING EXPEDITION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Region Selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    TARGET REGION
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-border rounded-lg px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="Himalayas">Himalayan Traverses</option>
                    <option value="WesternGhats">Western Ghats Ridge</option>
                    <option value="Nordic">Nordic Tundra Pass</option>
                    <option value="Alps">Alpine Glacier Crest</option>
                  </select>
                </div>

                {/* Grade Selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    DIFFICULTY GRADE
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full bg-[#0B0F14] border border-border rounded-lg px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="All Grades">All Trail Grades</option>
                    <option value="Grade 2">Moderate (Grade II)</option>
                    <option value="Grade 4">Strenuous (Grade IV)</option>
                    <option value="Grade 5">Summit Climb (Grade V)</option>
                  </select>
                </div>

                {/* Submit Action Button */}
                <div className="flex items-end">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#FF5722] text-white hover:bg-[#F4511E] font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg shadow-xl shadow-[#FF5722]/30 flex items-center justify-center gap-2"
                    onClick={() => {
                      const target = document.querySelector("#treks");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>EXPLORE TREKS</span>
                    <span>→</span>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* Trekking Guarantee Stats Strip */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-md py-5">
        <Container size="2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            <div className="space-y-0.5">
              <span className="font-sans text-2xl font-black text-white block">
                140+ EXPEDITIONS
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                Successfully Guided Mountain Traverses
              </span>
            </div>

            <div className="pt-3 sm:pt-0 space-y-0.5">
              <span className="font-sans text-2xl font-black text-[#00E676] block">
                100% SAFETY TRACKED
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                Satellite GPS & Oxygen Support Guided
              </span>
            </div>

            <div className="pt-3 sm:pt-0 space-y-0.5">
              <span className="font-sans text-2xl font-black text-white block">
                4.95 / 5.0 RATING
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                Verified Mountain Community Feedback
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};
