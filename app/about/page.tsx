import React from "react";
import { Calendar, Target, Eye, Quote, Heart, Shield, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Path of Stories",
  description: "Every journey begins with a story. Learn about Jeena and Amal and the passion-driven travel community at Path of Stories.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 text-[#213327] bg-[#F6F5F0] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
          ABOUT US
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#213327] tracking-tight">
          About Us <br />
          <span className="text-[#AD6B4D] italic font-normal">Every Journey Begins with a Story</span>
        </h1>

        {/* Centered Accent Underline */}
        <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-2" />

        <p className="text-[#4A554D] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed pt-2">
          At Path of Stories, we believe that the best journeys aren&apos;t measured in kilometres—they&apos;re measured in the memories we create, the people we meet, and the stories we bring home.
        </p>
      </div>

      {/* Main Story Container */}
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* Founders & Origin Story Spotlight Card */}
        <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#D9D4C7] pb-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#213327] border-2 border-[#FAF8F5] flex items-center justify-center text-xs font-bold text-[#FAF8F5] shadow-md">
                  JK
                </div>
                <div className="w-12 h-12 rounded-full bg-[#AD6B4D] border-2 border-[#FAF8F5] flex items-center justify-center text-xs font-bold text-[#FAF8F5] shadow-md">
                  AA
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-[#213327]">
                  Jeena KP &amp; Amal Ashokan
                </h2>
                <span className="text-xs text-[#78857A] font-medium">
                  Founders &bull; Path of Stories
                </span>
              </div>
            </div>

            <span className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#DCD7CD] text-xs text-[#213327] font-semibold tracking-wider uppercase flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#AD6B4D]" />
              <span>Est. June 2026</span>
            </span>
          </div>

          <div className="space-y-6 text-[#4A554D] text-sm sm:text-base leading-relaxed font-light">
            <p>
              What started as a shared dream between two friends, <strong className="text-[#213327] font-semibold">Jeena and Amal</strong>, has grown into a passion-driven travel community. While working in the corporate world, we always found ourselves talking about travel, new ideas, and building something meaningful together. One unforgettable trip made us realise that travel has the power to connect people, inspire growth, and create lifelong memories.
            </p>

            <div className="py-2">
              <span className="text-[#213327] font-serif text-xl sm:text-2xl font-semibold italic text-[#AD6B4D] block">
                That&apos;s how Path of Stories was born.
              </span>
            </div>

            <p>
              Today, we create thoughtfully curated travel experiences across Kerala and India for people who love exploring beyond the ordinary. Whether it&apos;s a mountain trek, a peaceful campsite, a weekend getaway, or a road trip with strangers who become friends, every journey is designed with care, safety, and authenticity.
            </p>

            <p>
              We believe great travel doesn&apos;t have to be expensive—it just has to be meaningful. That&apos;s why we&apos;re committed to delivering quality experiences, transparent pricing, and moments you&apos;ll remember long after the trip ends.
            </p>

            {/* Featured Quote Block */}
            <div className="bg-[#FAF8F5] border-l-4 border-[#AD6B4D] p-6 rounded-r-2xl space-y-2 mt-8">
              <p className="text-[#78857A] text-base sm:text-lg font-light italic">
                &ldquo;Because at the end of every journey, what stays with us isn&apos;t just the destination...&rdquo;
              </p>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#213327]">
                It&apos;s the story we lived together.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#213327]">Care &amp; Safety First</h3>
            <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
              Every trip is designed with vetted local stays, certified trip leads, and top safety standards for solo and group travelers.
            </p>
          </div>

          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#213327]">Meaningful Travel</h3>
            <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
              Great travel doesn&apos;t have to be expensive—it just has to be meaningful, with transparent pricing and no hidden costs.
            </p>
          </div>

          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#213327]">Authentic Community</h3>
            <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
              Where strangers meet on day one and leave as lifelong friends connected by shared stories along the trail.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D4C7] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78857A]">OUR MISSION</span>
              <Target className="w-6 h-6 text-[#AD6B4D]" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#213327]">Meaningful &amp; Transparent Journeys</h3>
            <p className="text-[#4A554D] text-xs sm:text-sm leading-relaxed font-light">
              At Path of Stories, our mission is to create safe, memorable, and meaningful travel experiences that connect people with nature, culture, and one another. We offer thoughtfully planned journeys providing exceptional value and transparent pricing for every traveler.
            </p>
          </div>

          <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#D9D4C7] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78857A]">OUR VISION</span>
              <Eye className="w-6 h-6 text-[#213327]" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#213327]">India&apos;s Most Loved Travel Community</h3>
            <p className="text-[#4A554D] text-xs sm:text-sm leading-relaxed font-light">
              Our vision is to become one of India&apos;s most trusted travel communities, recognized for delivering quality travel experiences across Kerala and India where strangers become friends and every journey becomes a story worth remembering.
            </p>
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-[#213327] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-md relative">
          <Quote className="w-10 h-10 text-[#AD6B4D] mx-auto mb-4" />
          <p className="text-xl sm:text-3xl font-serif italic leading-relaxed">
            &ldquo;Every journey begins with a story.&rdquo;
          </p>
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5CEC8] uppercase mt-4 block">
            — PATH OF STORIES
          </span>
        </div>

      </div>

    </div>
  );
}
