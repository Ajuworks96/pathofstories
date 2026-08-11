import React from "react";
import { Star, Quote } from "lucide-react";

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
    <div className="pt-28 pb-20 text-[#213327] bg-[#F6F5F0] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
          REAL TRAVELER REVIEWS
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#213327] tracking-tight">
          Traveler <span className="text-[#AD6B4D] italic font-normal">Testimonials &amp; Stories</span>
        </h1>

        {/* Centered Accent Underline */}
        <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-2" />

        <p className="text-[#4A554D] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
          Over 2,000+ conscious travelers have journeyed with us across Kerala and India. Here is what they have to say about their experience.
        </p>

        {/* Rating Summary Bar */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[#78857A]">
          <div className="flex text-[#AD6B4D] gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="font-bold text-[#213327] text-lg">4.9 / 5.0</span>
          <span className="text-xs text-[#78857A]">(From 2,000+ Verified Reviews)</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E2DEC5] rounded-3xl p-8 shadow-xs space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#AD6B4D] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#78857A]/40" />
                </div>

                <p className="text-xs sm:text-sm italic font-serif text-[#213327] leading-relaxed">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9D4C7] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#213327] font-sans">{item.name}</h4>
                  <span className="text-[10px] text-[#78857A]">{item.location}</span>
                </div>
                <span className="text-[10px] text-[#78857A] font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
