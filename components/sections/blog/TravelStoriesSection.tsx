"use client";

import React from "react";
import Image from "next/image";
import { Quote, Sparkles, ArrowRight } from "lucide-react";

export function TravelStoriesSection() {
  const stories = [
    {
      id: "1",
      title: "Waking Up Above The Clouds",
      author: "Jeena & Amal",
      location: "Highland Escapes",
      quote: "Collect stories, not things. Not all classrooms have four walls.",
      image: "/images/trip_kerala.jpg",
      date: "Path of Stories Motto",
    },
    {
      id: "2",
      title: "Monsoon Ridge Walks & Silent Waterfalls",
      author: "Conscious Travelers",
      location: "Sahyadris, Maharashtra",
      quote: "New paths. New people. New stories. The best stories begin off the map.",
      image: "/images/trip_maharashtra.jpg",
      date: "Wilderness Expeditions",
    },
    {
      id: "3",
      title: "High Altitude Monastery Stargazing",
      author: "Community Travelers",
      location: "Spiti Valley, Himachal",
      quote: "Where every path becomes a story. Strangers become companions, companions become friends.",
      image: "/images/trip_spiti.jpg",
      date: "Himalayan Retreats",
    },
  ];

  return (
    <section id="stories" className="py-24 bg-transparent text-[#FAF7F1] relative border-t border-[#2F5D50]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
              <span>STORIES &amp; MANIFESTOS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight">
              Stories From The Trail.
            </h2>
          </div>

          <p className="text-[#E8DCC8]/80 text-sm max-w-md">
            Moments collected, friendships built, and stories created across India&apos;s wildest sanctuaries.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] hover:border-[#E8DCC8]/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162E27] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1F1A]/80 backdrop-blur-md text-[10px] font-bold text-[#E8DCC8] uppercase tracking-wider border border-[#2F5D50]">
                    {story.location}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-[#FAF7F1] group-hover:text-[#E8DCC8] transition-colors">
                    {story.title}
                  </h3>

                  <div className="bg-[#0E1F1A]/50 rounded-2xl p-4 border border-[#2F5D50]/40 relative">
                    <Quote className="w-5 h-5 text-[#E8DCC8]/30 absolute top-3 right-3" />
                    <p className="text-xs italic font-serif text-[#E8DCC8] leading-relaxed pr-4">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#2F5D50]/30 text-xs text-[#E8DCC8]/70">
                <span className="font-semibold">{story.author}</span>
                <span className="text-[10px] uppercase font-mono">{story.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
