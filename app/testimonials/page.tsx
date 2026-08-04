import React from "react";
import Metadata from "next";
import { Sparkles, Star, Quote, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Testimonials & Stories | Path of Stories",
  description: "Read real traveler reviews and stories from 2,000+ conscious travelers who explored with Path of Stories.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: "1",
      name: "Siddharth & Anjali",
      location: "Kerala Highlands Expedition",
      rating: 5,
      date: "August 2026",
      review: "Path of Stories wasn't just a trip; it was an emotion. Sitting around the campfire with Jeena and Amal, sharing tea with local tea pluckers in Munnar, we felt like we were part of a family. Exceptional organization and pure heart!",
    },
    {
      id: "2",
      name: "Dr. Meera K.",
      location: "Spiti Monastery Stargazing",
      rating: 5,
      date: "July 2026",
      review: "Listening to monks chant at sunrise in Key Gompa and stargazing the Milky Way at 14,000 feet was a life-altering experience. Amal's attention to safety and local culture is unmatched. Highly recommended!",
    },
    {
      id: "3",
      name: "Rahul M.",
      location: "Sahyadri Monsoon Fort Walk",
      rating: 5,
      date: "July 2026",
      review: "I joined as a solo traveler and returned with 12 lifelong friends. The fort ridge trek in pouring rain was magical. Safe, transparent, and high value for every rupee!",
    },
    {
      id: "4",
      name: "Pooja & Vikram",
      location: "Living Root Bridges, Meghalaya",
      rating: 5,
      date: "June 2026",
      review: "The Khasi homestays, crystal clear Dawki river boating, and double-decker root bridge hikes were beyond our expectations. Everything promised in the itinerary was delivered with excellence.",
    },
    {
      id: "5",
      name: "Karan Sharma",
      location: "Himalayan Ridge Retreat",
      rating: 5,
      date: "June 2026",
      review: "As a corporate professional needing a quiet escape, Path of Stories provided the exact mindful reset I needed. Thoughtful planning, safety first, and authentic human connection.",
    },
    {
      id: "6",
      name: "Aiswarya R.",
      location: "Western Ghats Escape",
      rating: 5,
      date: "May 2026",
      review: "As a solo female traveler, safety was my highest priority. Amal and Jeena created such a welcoming, respectful, and safe community. I felt completely at home throughout the trek!",
    },
  ];

  return (
    <div className="pt-28 pb-20 text-[#FAF7F1] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
          <span>REAL TRAVELER REVIEWS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight">
          Traveler <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E]">Testimonials &amp; Stories</span>
        </h1>

        <p className="text-[#E8DCC8]/90 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Over 2,000+ conscious travelers have journeyed with us across Kerala and India. Here is what they have to say about their experience.
        </p>

        {/* Rating Summary Bar */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[#E8DCC8]">
          <div className="flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="font-bold text-[#FAF7F1] text-lg">4.9 / 5.0</span>
          <span className="text-xs text-[#E8DCC8]/70">(From 2,000+ Verified Reviews)</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] hover:border-[#E8DCC8]/40 rounded-3xl p-8 shadow-2xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8DCC8]/30" />
                </div>

                <p className="text-xs sm:text-sm italic font-serif text-[#FAF7F1] leading-relaxed">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#2F5D50]/40 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#FAF7F1] font-sans">{item.name}</h4>
                  <span className="text-[10px] text-[#E8DCC8]/70">{item.location}</span>
                </div>
                <span className="text-[10px] text-[#E8DCC8]/50 font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
