"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "1",
      name: "Ananya Ramesh",
      location: "Bangalore",
      trip: "Kudremukh Trek",
      rating: 5,
      quote:
        "Path of Stories organized the Kudremukh trek seamlessly. What amazed me most was how strangers on day one became genuine friends by evening campfire!",
      avatar: "AR",
    },
    {
      id: "2",
      name: "Rahul Nair",
      location: "Kochi",
      trip: "Wayanad Escape",
      rating: 5,
      quote:
        "Camping under pine trees with acoustic songs and glowing lanterns was pure magic. Safe, well-managed, and super transparent. Highly recommended!",
      avatar: "RN",
    },
    {
      id: "3",
      name: "Priya Sharma",
      location: "Mumbai",
      trip: "Varkala Getaway",
      rating: 5,
      quote:
        "The Varkala cliff getaway was the perfect weekend recharge. Path of Stories feels like traveling with a close group of family. Can't wait for the next trip!",
      avatar: "PS",
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative border-t border-[#E8E4D8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block mb-2">
            COMMUNITY STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Stories from Our Travelers.
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#AD6B4D]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#78857A]/40" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-sans italic font-light">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-4 border-t border-[#D9D4C7] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#213327] text-[#FAF8F5] font-serif font-semibold text-xs flex items-center justify-center flex-shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-serif font-semibold text-[#213327] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#78857A] font-sans">
                    {item.location} &bull; <span className="text-[#AD6B4D] font-medium">{item.trip}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
