"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-[#0E1F1A]/95 text-[#FAF7F1] pt-16 pb-8 border-t border-[#2F5D50]/50 relative overflow-hidden ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#2F5D50]/40">
          
          {/* Brand Info & Premium Logo Badge */}
          <div className="md:col-span-5 space-y-5">
            <BrandLogo size="lg" showText={true} />

            <p className="text-[#E8DCC8]/80 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              Founded in June 2026 by Amal Ashokan &amp; Jeena KP. An experience-driven travel community creating safe, memorable, and meaningful journeys across Kerala and India.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#E8DCC8]">
              <span className="px-3 py-1 rounded-full bg-[#162E27] border border-[#2F5D50]">
                EXPLORE
              </span>
              <span>&bull;</span>
              <span className="px-3 py-1 rounded-full bg-[#162E27] border border-[#2F5D50]">
                CONNECT
              </span>
              <span>&bull;</span>
              <span className="px-3 py-1 rounded-full bg-[#162E27] border border-[#2F5D50]">
                REMEMBER
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#E8DCC8] uppercase font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F1]/80 font-medium">
              <li>
                <Link href="/" className="hover:text-[#E8DCC8] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8DCC8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E8DCC8] transition-colors">Services &amp; Expeditions</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#E8DCC8] transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8DCC8] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#E8DCC8] uppercase font-sans">
              Founders &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-[#E8DCC8]/90 font-light">
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#FAF7F1]">Founders:</span> Amal Ashokan &amp; Jeena KP
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#FAF7F1]">Established:</span> June 2026
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#FAF7F1]">WhatsApp:</span> +91 98470 12345
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#FAF7F1]">Email:</span> expeditions@pathofstories.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCC8]/60">
          <p>&copy; 2026 Path of Stories. All rights reserved. Founded by Amal Ashokan &amp; Jeena KP.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-current inline" />
            <span>for conscious travelers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
