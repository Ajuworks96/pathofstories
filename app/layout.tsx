import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ParallaxBackground } from "@/components/effects/ParallaxBackground";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PATH OF STORIES | Kerala's Experience-Based Travel Community",
  description:
    "Kerala's first experience-based travel community. Authentic small-group wilderness journeys, campfire storytelling, living root bridge expeditions, and high-altitude Himalayan retreats.",
  keywords: [
    "Path of Stories",
    "Kattalan Travel",
    "Kerala Travel Community",
    "Experience Based Travel",
    "Monsoon Treks",
    "Spiti Valley Expedition",
    "Meghalaya Root Bridges",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased font-sans bg-[#0b0f14] text-white selection:bg-amber-500 selection:text-black flex flex-col min-h-screen relative">
        <ParallaxBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
