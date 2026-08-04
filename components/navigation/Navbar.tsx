"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "TESTIMONIALS", href: "/testimonials" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E1F1A]/95 backdrop-blur-md border-b border-[#2F5D50]/40 py-2.5 shadow-2xl"
            : "bg-gradient-to-b from-[#0E1F1A]/90 via-[#0E1F1A]/50 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Official Premium Brand Logo */}
          <BrandLogo size="md" showText={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-[#FAF7F1]/90 hover:text-[#E8DCC8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8DCC8] hover:after:w-full after:transition-all uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/services"
              className="bg-[#2F5D50] hover:bg-[#6B8A6E] text-[#FAF7F1] text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg border border-[#E8DCC8]/30 flex items-center gap-1.5 group"
            >
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#162E27] border border-[#2F5D50] text-[#FAF7F1] hover:text-[#E8DCC8]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E1F1A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden pt-24">
          <div className="space-y-6">
            <div className="border-b border-[#2F5D50] pb-4">
              <span className="text-xs font-serif italic text-[#E8DCC8] block">
                EXPLORE | CONNECT | REMEMBER
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold font-serif text-[#FAF7F1] hover:text-[#E8DCC8] transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#2F5D50]">
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#2F5D50] text-[#FAF7F1] font-bold uppercase tracking-wider py-3.5 rounded-full text-center text-xs block shadow-xl"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
