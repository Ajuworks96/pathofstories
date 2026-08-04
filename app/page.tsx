import React from "react";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ActionBadgesSection } from "@/components/sections/cta/ActionBadgesSection";
import { UpcomingTripsSection } from "@/components/sections/hero/UpcomingTripsSection";
import { TravelStoriesSection } from "@/components/sections/blog/TravelStoriesSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-white relative z-10">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. "THIS IS PATH OF STORIES" About & Video Section */}
      <AboutSection />

      {/* 3. Interactive Quick Action Badges */}
      <ActionBadgesSection />

      {/* 4. Upcoming Trips Carousel / Grid Section */}
      <UpcomingTripsSection />

      {/* 5. Travel Stories & Community Highlights */}
      <TravelStoriesSection />

      {/* 6. Contact / Inquiry Section */}
      <ContactSection />
    </div>
  );
}
