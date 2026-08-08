import React from "react";
import Metadata from "next";
import { Sparkles, Calendar, Target, Eye, Quote, Heart, ShieldCheck, Leaf, Users } from "lucide-react";
import { ActionBadgesSection } from "@/components/sections/cta/ActionBadgesSection";

export const metadata = {
  title: "About Us | Path of Stories",
  description: "Every journey begins with a story. Learn about Jeena and Amal and the passion-driven travel community at Path of Stories.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 text-[#FAF7F1] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
          <span>ABOUT US</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight">
          About Us <br />
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E]">
            Every Journey Begins with a Story
          </span>
        </h1>

        <p className="text-[#E8DCC8]/90 text-base sm:text-lg font-light max-w-3xl mx-auto leading-relaxed">
          At Path of Stories, we believe that the best journeys aren&apos;t measured in kilometres—they&apos;re measured in the memories we create, the people we meet, and the stories we bring home.
        </p>
      </div>

      {/* Main Story Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Founders Spotlight Card */}
        <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#2F5D50]/40 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50] border-2 border-[#0E1F1A] flex items-center justify-center text-xs font-bold text-[#FAF7F1] shadow-lg">
                  JK
                </div>
                <div className="w-12 h-12 rounded-full bg-[#6B8A6E] border-2 border-[#0E1F1A] flex items-center justify-center text-xs font-bold text-[#FAF7F1] shadow-lg">
                  AA
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-[#FAF7F1]">
                  Ms. Jeena KP &amp; Mr. Amal Ashokan
                </h2>
                <span className="text-xs text-[#E8DCC8]/80 font-medium">
                  Founders &bull; Path of Stories
                </span>
              </div>
            </div>

            <span className="px-4 py-2 rounded-full bg-[#2F5D50]/50 border border-[#E8DCC8]/30 text-xs text-[#E8DCC8] font-semibold tracking-wider uppercase flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Est. June 2026</span>
            </span>
          </div>

          <div className="space-y-6 text-[#E8DCC8]/90 text-sm sm:text-base leading-relaxed font-light">
            <p>
              What started as a shared dream between two friends, <strong className="text-[#FAF7F1] font-semibold">Jeena and Amal</strong>, has grown into a passion-driven travel community. While working in the corporate world, we always found ourselves talking about travel, new ideas, and building something meaningful together. One unforgettable trip made us realise that travel has the power to connect people, inspire growth, and create lifelong memories.
            </p>
            <p className="text-[#FAF7F1] font-serif text-lg sm:text-xl font-semibold italic text-[#E8DCC8]">
              That&apos;s how Path of Stories was born.
            </p>
            <p>
              Today, we create thoughtfully curated travel experiences across Kerala and India for people who love exploring beyond the ordinary. Whether it&apos;s a mountain trek, a peaceful campsite, a weekend getaway, or a road trip with strangers who become friends, every journey is designed with care, safety, and authenticity.
            </p>
            <p>
              We believe great travel doesn&apos;t have to be expensive—it just has to be meaningful. That&apos;s why we&apos;re committed to delivering quality experiences, transparent pricing, and moments you&apos;ll remember long after the trip ends.
            </p>

            <div className="bg-[#0E1F1A]/70 border-l-4 border-[#E8DCC8] p-6 rounded-r-2xl space-y-2 mt-8">
              <p className="text-[#E8DCC8]/90 text-base sm:text-lg font-light italic">
                &ldquo;Because at the end of every journey, what stays with us isn&apos;t just the destination...&rdquo;
              </p>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F1]">
                It&apos;s the story we lived together.
              </p>
            </div>
          </div>

        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#2F5D50]/40 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8DCC8]">OUR MISSION</span>
              <Target className="w-6 h-6 text-[#E8DCC8]" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#FAF7F1]">Meaningful &amp; Transparent Journeys</h3>
            <p className="text-[#E8DCC8]/80 text-xs sm:text-sm leading-relaxed font-light">
              At Path of Stories, our mission is to create safe, memorable, and meaningful travel experiences that connect people with nature, culture, and one another. We offer thoughtfully planned journeys providing exceptional value and transparent pricing for every traveler.
            </p>
          </div>

          <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#2F5D50]/40 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8DCC8]">OUR VISION</span>
              <Eye className="w-6 h-6 text-[#6B8A6E]" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#FAF7F1]">India&apos;s Most Loved Travel Community</h3>
            <p className="text-[#E8DCC8]/80 text-xs sm:text-sm leading-relaxed font-light">
              Our vision is to become one of India&apos;s most trusted travel communities, recognized for delivering quality travel experiences across Kerala and India where strangers become friends and every journey becomes a story worth remembering.
            </p>
          </div>

        </div>

        {/* Quote Card */}
        <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative">
          <Quote className="w-10 h-10 text-[#E8DCC8]/40 mx-auto mb-4" />
          <p className="text-xl sm:text-3xl font-serif italic text-[#FAF7F1] leading-relaxed">
            &ldquo;Every journey begins with a story.&rdquo;
          </p>
          <span className="text-xs font-bold tracking-[0.25em] text-[#E8DCC8]/70 uppercase mt-4 block">
            — PATH OF STORIES
          </span>
        </div>

      </div>

      <ActionBadgesSection />

    </div>
  );
}
