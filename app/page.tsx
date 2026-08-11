import React from "react";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FeaturePillarsBar } from "@/components/sections/features/FeaturePillarsBar";
import { UpcomingTripsSection } from "@/components/sections/hero/UpcomingTripsSection";
import { OurServicesSection } from "@/components/sections/services/OurServicesSection";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#213327] relative z-10">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Value Pillars Bar (5 Columns) */}
      <div className="-mt-10 sm:-mt-16 relative z-20">
        <FeaturePillarsBar />
      </div>

      {/* 3. Featured Trips Section */}
      <UpcomingTripsSection />

      {/* 4. Our Services Section */}
      <OurServicesSection />

      {/* 5. "We Believe" About Section */}
      <AboutSection />

      {/* 6. Testimonials & Community Stories Section */}
      <TestimonialsSection />

      {/* 7. Contact Us Section */}
      <ContactSection />
    </div>
  );
}
