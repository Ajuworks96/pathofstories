"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Meghalaya - Land of Water Activities",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send inquiry to pathofstoriess@gmail.com via FormSubmit AJAX
      const res = await fetch("https://formsubmit.co/ajax/pathofstoriess@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Trip Inquiry: ${formData.destination} (${formData.name})`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Trip Selected": formData.destination,
          Message: formData.message || "No additional message provided.",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback open mailto client to pathofstoriess@gmail.com
        window.location.href = `mailto:pathofstoriess@gmail.com?subject=${encodeURIComponent(
          `New Expedition Inquiry: ${formData.destination}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Trip: ${formData.destination}\nMessage: ${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback open mailto client
      window.location.href = `mailto:pathofstoriess@gmail.com?subject=${encodeURIComponent(
        `New Expedition Inquiry: ${formData.destination}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Trip: ${formData.destination}\nMessage: ${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative border-t border-[#E8E4D8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block mb-2">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Ready to Start Your Journey?
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6 bg-[#EFECE6] border border-[#E2DEC5] p-8 rounded-3xl shadow-xs">
            <h3 className="text-2xl font-serif font-semibold text-[#213327]">
              Get in Touch
            </h3>
            <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
              Have questions about upcoming treks, safety, or custom itineraries? Connect with Jeena &amp; Amal and we&apos;ll help you plan your next memory.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#D9D4C7]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#78857A] block">Email Us</span>
                  <a href="mailto:pathofstoriess@gmail.com" className="text-xs sm:text-sm font-medium text-[#213327] hover:text-[#AD6B4D] transition-colors">
                    pathofstoriess@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#78857A] block">Call / WhatsApp</span>
                  <a href="tel:+916282603784" className="text-xs sm:text-sm font-medium text-[#213327] hover:text-[#AD6B4D] transition-colors">
                    +91 62826 03784
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#78857A] block">Founders &amp; Base</span>
                  <span className="text-xs sm:text-sm font-medium text-[#213327]">
                    Jeena KP &amp; Amal Ashokan &bull; Kerala, India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Direct Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/916282603784"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] font-medium py-3 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#EFECE6] border border-[#E2DEC5] p-8 sm:p-10 rounded-3xl shadow-xs">
            <h3 className="text-2xl font-serif font-semibold text-[#213327] mb-6">
              Send an Inquiry
            </h3>

            {submitted ? (
              <div className="bg-[#213327] text-[#FAF8F5] rounded-2xl p-8 text-center space-y-2 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#AD6B4D] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-semibold">Inquiry Received!</h4>
                <p className="text-xs text-[#C5CEC8]">
                  Thank you for reaching out. Amal or Jeena will connect with you via WhatsApp/Phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#213327] block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#FAF8F5] border border-[#DCD7CD] rounded-xl px-4 py-3 text-xs text-[#213327] focus:outline-none focus:border-[#213327]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#213327] block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 62826 03784"
                      className="w-full bg-[#FAF8F5] border border-[#DCD7CD] rounded-xl px-4 py-3 text-xs text-[#213327] focus:outline-none focus:border-[#213327]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#213327] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#FAF8F5] border border-[#DCD7CD] rounded-xl px-4 py-3 text-xs text-[#213327] focus:outline-none focus:border-[#213327]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#213327] block mb-1">
                    Select Experience / Trip
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DCD7CD] rounded-xl px-4 py-3 text-xs text-[#213327] focus:outline-none focus:border-[#213327]"
                  >
                    <option value="Meghalaya - Land of Water Activities">Meghalaya - Land of Water Activities</option>
                    <option value="One Horned Rhinos and Assam">One Horned Rhinos and Assam</option>
                    <option value="Lakshadweep Coral Islands">Lakshadweep Coral Islands</option>
                    <option value="Hornbill Festival and Nagaland">Hornbill Festival and Nagaland</option>
                    <option value="Land of Monasteries and Waterfalls - Arunachal Pradesh">Land of Monasteries and Waterfalls - Arunachal Pradesh</option>
                    <option value="Anini, Mechuka & Ziro Valley">Anini, Mechuka & Ziro Valley</option>
                    <option value="Custom Group / Bespoke Expedition">Custom Group / Bespoke Expedition</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#213327] block mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your travel dates or group preferences..."
                    className="w-full bg-[#FAF8F5] border border-[#DCD7CD] rounded-xl px-4 py-3 text-xs text-[#213327] focus:outline-none focus:border-[#213327]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] font-semibold py-3.5 rounded-full uppercase tracking-wider text-xs shadow-md transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry to Email...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
