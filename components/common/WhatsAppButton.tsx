"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/916282603784?text=Hi%20Path%20of%20Stories,%20I'd%20like%20to%20inquire%20about%20an%20expedition!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2.5 group hover:scale-105"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
      </div>
      <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase font-sans">
        Chat on WhatsApp
      </span>
    </a>
  );
}
