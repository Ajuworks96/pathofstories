import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PATH OF STORIES | Every Journey Tells a Story",
  description:
    "Kerala & Northeast India experience-based travel community. Authentic small-group wilderness journeys, Arunachal Pradesh, Meghalaya, Assam, Nagaland & Lakshadweep.",
  keywords: [
    "Path of Stories",
    "Arunachal Pradesh Monasteries",
    "Tawang Monastery",
    "Hornbill Festival Nagaland",
    "Dzoku Valley Trek",
    "Kaziranga Assam",
    "Meghalaya Waterfalls",
    "Wari Chora",
    "Anini Mechuka",
    "Ziro Apatani",
    "Dong Valley First Sunrise",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${sans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased font-sans bg-[#F6F5F0] text-[#213327] selection:bg-[#AD6B4D] selection:text-white flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
