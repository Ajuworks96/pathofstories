import React from "react";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FeaturePillarsBar } from "@/components/sections/features/FeaturePillarsBar";
import { OurServicesSection } from "@/components/sections/services/OurServicesSection";
import { MissionVisionSection } from "@/components/sections/mission/MissionVisionSection";
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

      {/* 3. Our Services & Destinations Section (Assam, Meghalaya, Tawang, Nagaland, Arunachal Pradesh, Anini, Mechuka, Lakshadweep) */}
      <OurServicesSection />

      {/* 5. Mission & Vision Section */}
      <MissionVisionSection />

      {/* 6. "We Believe" About Section */}
      <AboutSection />

      {/* 7. Testimonials & Community Stories Section */}
      <TestimonialsSection />

      {/* 8. Contact Us Section */}
      <ContactSection />
    </div>
  );
}
