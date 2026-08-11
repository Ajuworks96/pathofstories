import React from "react";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Path of Stories",
  description: "Get in touch with founders Jeena KP & Amal Ashokan to plan your next expedition with Path of Stories.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How do I book an expedition with Path of Stories?",
      a: "Simply fill out the inquiry form below or reach out via WhatsApp/Phone at +91 62826 03784. Jeena or Amal will share the detailed day-by-day itinerary and booking link.",
    },
    {
      q: "Is Path of Stories safe for solo female travelers?",
      a: "Yes, 100%! Over 40% of our travelers are solo females. Safety, respectful group culture, and vetted local homestays are our top priorities on every trip.",
    },
    {
      q: "What is included in the expedition price?",
      a: "All group stays, local transport during the trek, certified trek leaders, safety gear, entry permits, and authentic local meals as specified in each itinerary.",
    },
    {
      q: "Can I request a custom trip for my group or family?",
      a: "Absolutely! We specialize in private group escapes tailored to your preferred dates, physical fitness levels, and budget across Kerala and India.",
    },
  ];

  return (
    <div className="pt-28 pb-20 text-[#213327] bg-[#F6F5F0] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
          GET IN TOUCH WITH FOUNDERS
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#213327] tracking-tight">
          Contact <span className="text-[#AD6B4D] italic font-normal">Path of Stories</span>
        </h1>

        {/* Centered Accent Underline */}
        <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-2" />

        <p className="text-[#4A554D] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
          Reach out to Jeena KP &amp; Amal Ashokan for booking inquiries, custom trip planning, or questions about our upcoming wilderness escapes.
        </p>
      </div>

      {/* Main Form Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#78857A]">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl font-serif font-semibold text-[#213327]">Everything You Need To Know</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-6 shadow-xs space-y-3"
            >
              <h3 className="text-base font-serif font-semibold text-[#213327] flex items-start gap-2">
                <span className="text-[#AD6B4D] font-mono">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#4A554D] leading-relaxed font-light pl-5 border-l border-[#D9D4C7]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
