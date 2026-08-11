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
    <footer className={`bg-[#213327] text-[#FAF8F5] pt-16 pb-8 border-t border-[#2C4233] relative overflow-hidden ${className || ""}`}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C4233]">
          
          {/* Brand Info & Mountain Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-[#FAF8F5]">
              <BrandLogo size="md" showText={true} />
            </div>

            <p className="text-[#C5CEC8] text-xs sm:text-sm font-light leading-relaxed max-w-md">
              Founded by Jeena KP &amp; Amal Ashokan. An experience-driven travel community creating safe, memorable, and meaningful journeys across Kerala and India.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5CEC8]">
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233]">
                EXPLORE
              </span>
              <span>&bull;</span>
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233]">
                CONNECT
              </span>
              <span>&bull;</span>
              <span className="px-3 py-1 rounded-full bg-[#18261D] border border-[#2C4233]">
                REMEMBER
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-[#AD6B4D] uppercase font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C5CEC8] font-medium">
              <li>
                <Link href="/" className="hover:text-[#FAF8F5] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF8F5] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FAF8F5] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#FAF8F5] transition-colors">Stories</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF8F5] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-[#AD6B4D] uppercase font-sans">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-[#C5CEC8] font-light">
              <p>
                <span className="font-semibold text-[#FAF8F5]">Founders:</span> Jeena KP &amp; Amal Ashokan
              </p>
              <p>
                <span className="font-semibold text-[#FAF8F5]">WhatsApp / Call:</span>{" "}
                <a href="https://wa.me/916282603784" target="_blank" rel="noreferrer" className="hover:text-[#AD6B4D] transition-colors">
                  +91 62826 03784
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#FAF8F5]">Email:</span>{" "}
                <a href="mailto:pathofstoriess@gmail.com" className="hover:text-[#AD6B4D] transition-colors">
                  pathofstoriess@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#FAF8F5]">Location:</span> Kerala, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A968D]">
          <p>&copy; {new Date().getFullYear()} Path of Stories. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Every Journey Tells a Story</span>
            <Heart className="w-3.5 h-3.5 text-[#AD6B4D] fill-current inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}
