"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Western Ghats",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-[#FAF7F1] relative overflow-hidden border-t border-[#2F5D50]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Official Contact Info */}
          <div className="lg:col-span-6 space-y-6 pt-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Ready <span className="font-serif italic font-normal text-[#E8DCC8]">To Tell Your</span> <br />
              Next Story?
            </h2>

            <p className="text-[#E8DCC8]/80 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Whether you&apos;re planning your next escape, looking for custom group itineraries, or want to connect with founders Jeena &amp; Amal, we&apos;re here for you. Reach out and start your journey.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#2F5D50]/40">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#162E27] border border-[#2F5D50] flex items-center justify-center text-[#E8DCC8] group-hover:border-[#E8DCC8] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8DCC8]/60 block">Email Us</span>
                  <a href="mailto:expeditions@pathofstories.com" className="text-sm font-semibold text-[#FAF7F1] hover:text-[#E8DCC8] transition-colors">
                    expeditions@pathofstories.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#162E27] border border-[#2F5D50] flex items-center justify-center text-[#E8DCC8] group-hover:border-[#E8DCC8] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8DCC8]/60 block">Call / WhatsApp</span>
                  <a href="tel:+919847012345" className="text-sm font-semibold text-[#FAF7F1] hover:text-[#E8DCC8] transition-colors">
                    +91 98470 12345
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#162E27] border border-[#2F5D50] flex items-center justify-center text-[#E8DCC8] group-hover:border-[#E8DCC8] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8DCC8]/60 block">Founders &amp; Base</span>
                  <span className="text-sm font-semibold text-[#FAF7F1]">
                    Amal Ashokan &amp; Jeena KP &bull; Kerala, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold font-serif text-[#FAF7F1]">
                Start A Conversation
              </h3>

              {submitted ? (
                <div className="bg-[#2F5D50]/40 border border-[#E8DCC8]/50 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2F5D50] text-[#FAF7F1] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#FAF7F1]">Message Received!</h4>
                  <p className="text-xs text-[#E8DCC8]">
                    Thank you for reaching out. Amal or Jeena will connect with you on WhatsApp/Phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[#E8DCC8]/70 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0E1F1A]/80 border border-[#2F5D50] rounded-xl px-4 py-3 text-xs text-[#FAF7F1] focus:outline-none focus:border-[#E8DCC8]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[#E8DCC8]/70 block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0E1F1A]/80 border border-[#2F5D50] rounded-xl px-4 py-3 text-xs text-[#FAF7F1] focus:outline-none focus:border-[#E8DCC8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#E8DCC8]/70 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#0E1F1A]/80 border border-[#2F5D50] rounded-xl px-4 py-3 text-xs text-[#FAF7F1] focus:outline-none focus:border-[#E8DCC8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#E8DCC8]/70 block mb-1.5">
                      Preferred Expedition
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-[#0E1F1A]/80 border border-[#2F5D50] rounded-xl px-4 py-3 text-xs text-[#FAF7F1] focus:outline-none focus:border-[#E8DCC8]"
                    >
                      <option value="Western Ghats">Western Ghats Monsoon Trail</option>
                      <option value="Meghalaya">Living Root Bridges & Cherrapunji</option>
                      <option value="Spiti Valley">Spiti Monastery Expedition</option>
                      <option value="Himalayan Ridge">Nepal Himalayan Ridge</option>
                      <option value="Kerala Trails">Kerala Tea Highlands</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#E8DCC8]/70 block mb-1.5">
                      Your Story or Query
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what kind of journey you are seeking..."
                      className="w-full bg-[#0E1F1A]/80 border border-[#2F5D50] rounded-xl px-4 py-3 text-xs text-[#FAF7F1] focus:outline-none focus:border-[#E8DCC8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2F5D50] hover:bg-[#6B8A6E] text-[#FAF7F1] font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-xl transition flex items-center justify-center gap-2 border border-[#E8DCC8]/30"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
