import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 bg-[#F6F5F0] text-[#213327] space-y-6">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#78857A]">
        404 ERROR
      </span>
      <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#213327]">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-[#4A554D] max-w-md">
        The story or page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider px-8 py-3 rounded-full transition-all shadow-md"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
