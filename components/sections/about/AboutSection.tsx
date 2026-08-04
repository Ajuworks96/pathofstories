"use client";

import React from "react";
import Image from "next/image";
import { Compass, Users, Sparkles, ShieldCheck, Heart, Target, Eye, Quote, Calendar, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-transparent text-[#FAF7F1] overflow-hidden border-t border-[#2F5D50]/30">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#6B8A6E]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2F5D50]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold tracking-widest uppercase shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
            <span>OUR FOUNDING STORY &amp; ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight leading-tight">
            The Journey Behind <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E]">
              Path of Stories.
            </span>
          </h2>

          <p className="text-[#E8DCC8]/90 text-sm sm:text-base font-light leading-relaxed">
            Founded in June 2026 by Amal Ashokan &amp; Jeena KP — born from a shared belief that true friendship and the best journeys begin with genuine human connections.
          </p>
        </div>

        {/* Founders Spotlight Card & Story Paragraphs */}
        <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          {/* Founders Bio Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#2F5D50]/40 pb-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50] border-2 border-[#0E1F1A] flex items-center justify-center text-xs font-bold text-[#FAF7F1] shadow-lg">
                  AA
                </div>
                <div className="w-12 h-12 rounded-full bg-[#6B8A6E] border-2 border-[#0E1F1A] flex items-center justify-center text-xs font-bold text-[#FAF7F1] shadow-lg">
                  JK
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-[#FAF7F1]">
                  Mr. Amal Ashokan &amp; Ms. Jeena KP
                </h3>
                <span className="text-xs text-[#E8DCC8]/80 font-medium">
                  Founders &bull; Established June 2026
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-[#2F5D50]/50 border border-[#E8DCC8]/30 text-xs text-[#E8DCC8] font-semibold tracking-wider uppercase flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Est. June 2026</span>
              </span>
            </div>
          </div>

          {/* Official About Us Text directly from PDF */}
          <div className="space-y-6 text-[#E8DCC8]/90 text-sm sm:text-base leading-relaxed font-light">
            <p>
              <strong className="text-[#FAF7F1] font-semibold">Path of Stories</strong> was born from a simple dream shared by two people who believe that the best journeys begin with meaningful connections.
            </p>
            <p>
              We are <strong className="text-[#FAF7F1] font-semibold">Jeena and Amal</strong>—not just friends, but each other&apos;s favourite person. While we continue our careers in the corporate world, we&apos;ve always carried a bigger dream in our hearts: to build something of our own, something that reflects our passion, values, and love for exploring the world.
            </p>
            <p>
              Our conversations have never been limited to daily life. Whether over coffee, during long drives, or while travelling, we found ourselves constantly discussing new ideas, future plans, and ways to create something meaningful together. We believe that true friendship isn&apos;t just about sharing moments—it&apos;s about growing together, supporting each other&apos;s dreams, and turning ideas into reality.
            </p>
            <p className="italic text-[#FAF7F1] font-serif text-base sm:text-lg border-l-2 border-[#E8DCC8] pl-4 py-1">
              &ldquo;The turning point came after one unforgettable trip. As we looked back on the memories, the people we met, and the stories we collected, we realized that travel is much more than visiting destinations. It&apos;s about discovering places, building friendships, stepping outside our comfort zones, and creating memories that stay with us for a lifetime.&rdquo;
            </p>
            <p>
              At Path of Stories, we don&apos;t simply organize trips—we create experiences where strangers become companions, companions become friends, and every journey becomes a story worth remembering. From scenic escapes across Kerala to adventurous expeditions throughout India, our goal is to bring together people who share a love for travel, nature, adventure, and genuine human connection.
            </p>
          </div>

        </div>

        {/* Mission & Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] hover:border-[#E8DCC8]/50 rounded-3xl p-8 transition-all duration-500 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#2F5D50]/40 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8DCC8]">
                OUR MISSION
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#2F5D50] text-[#E8DCC8] flex items-center justify-center border border-[#E8DCC8]/30">
                <Target className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-2xl font-bold font-serif text-[#FAF7F1]">
              Safe, Meaningful &amp; High-Value Journeys
            </h3>

            <p className="text-[#E8DCC8]/80 text-xs sm:text-sm leading-relaxed font-light">
              At Path of Stories, our mission is to create safe, memorable, and meaningful travel experiences that connect people with nature, culture, and one another. We are committed to offering thoughtfully planned journeys that provide exceptional value for every rupee our travelers invest.
            </p>
            
            <span className="text-[11px] text-[#E8DCC8]/60 font-serif italic block pt-2">
              Guided by safety, transparency, quality, and accessibility.
            </span>
          </div>

          {/* Vision Card */}
          <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] hover:border-[#E8DCC8]/50 rounded-3xl p-8 transition-all duration-500 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#2F5D50]/40 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8DCC8]">
                OUR VISION
              </span>
              <div className="w-10 h-10 rounded-2xl bg-[#6B8A6E] text-[#FAF7F1] flex items-center justify-center border border-[#E8DCC8]/30">
                <Eye className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-2xl font-bold font-serif text-[#FAF7F1]">
              India&apos;s Most Trusted Travel Community
            </h3>

            <p className="text-[#E8DCC8]/80 text-xs sm:text-sm leading-relaxed font-light">
              Our vision is to become one of India&apos;s most trusted travel partners, recognized for delivering high-quality travel experiences, exceptional service, and lasting relationships. We aspire to build a community where every traveler feels welcomed, valued, and inspired.
            </p>

            <span className="text-[11px] text-[#E8DCC8]/60 font-serif italic block pt-2">
              Creating authentic journeys and unforgettable memories.
            </span>
          </div>

        </div>

        {/* Inspiring Manifesto Quote Card */}
        <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative">
          <Quote className="w-10 h-10 text-[#E8DCC8]/40 mx-auto mb-4" />
          <p className="text-xl sm:text-3xl font-serif italic text-[#FAF7F1] leading-relaxed">
            &ldquo;Every journey tells a story.&rdquo;
          </p>
          <span className="text-xs font-bold tracking-[0.25em] text-[#E8DCC8]/70 uppercase mt-4 block">
            — PATH OF STORIES OFFICIAL TAGLINE
          </span>
        </div>

      </div>
    </section>
  );
}
