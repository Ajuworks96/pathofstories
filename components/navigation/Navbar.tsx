"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { label: "OUR SERVICES", href: "/services" },
    { label: "STORIES", href: "/testimonials" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F5F0]/95 backdrop-blur-md border-b border-[#E8E4D8] py-3 shadow-xs"
            : "bg-[#F6F5F0]/80 backdrop-blur-xs py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <BrandLogo size="md" showText={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-medium tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? "text-[#213327]" : "text-[#556358] hover:text-[#213327]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#213327] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/services"
              className="bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Book a Trip
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#213327] hover:bg-[#EFECE6]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F6F5F0] flex flex-col justify-between p-6 md:hidden pt-24">
          <div className="space-y-6">
            <div className="border-b border-[#E8E4D8] pb-4">
              <span className="text-xs font-serif italic text-[#78857A]">
                Every Journey Tells a Story
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#213327] hover:text-[#AD6B4D] uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E8E4D8]">
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#213327] text-[#FAF8F5] font-semibold uppercase tracking-wider py-3.5 rounded-full text-center text-xs block shadow-md"
            >
              Book a Trip
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

