import React from "react";
import Metadata from "next";
import { Sparkles, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Path of Stories",
  description: "Get in touch with founders Amal Ashokan & Jeena KP to plan your next expedition with Path of Stories.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How do I book an expedition with Path of Stories?",
      a: "Simply fill out the inquiry form below or reach out via WhatsApp/Phone at +91 98470 12345. Amal or Jeena will share the detailed day-by-day itinerary and booking link.",
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
    <div className="pt-28 pb-20 text-[#FAF7F1] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
          <span>GET IN TOUCH WITH FOUNDERS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight">
          Contact <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E]">Path of Stories</span>
        </h1>

        <p className="text-[#E8DCC8]/90 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Reach out to Amal Ashokan &amp; Jeena KP for booking inquiries, custom trip planning, or questions about our upcoming wilderness escapes.
        </p>
      </div>

      {/* Main Form Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8DCC8]">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl font-bold font-serif text-[#FAF7F1]">Everything You Need To Know</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-2xl p-6 shadow-xl space-y-3"
            >
              <h3 className="text-base font-bold font-serif text-[#FAF7F1] flex items-start gap-2">
                <span className="text-[#E8DCC8] font-mono">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#E8DCC8]/80 leading-relaxed font-light pl-5 border-l border-[#2F5D50]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
