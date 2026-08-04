"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";

export interface GalleryImage {
  id: string;
  category: "LANDSCAPE" | "PORTRAIT" | "WILDLIFE" | "TRAVEL" | "CULTURE";
  title: string;
  location: string;
  imageUrl: string;
  heightClass?: string;
}

export const MemoriesGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = ["ALL", "LANDSCAPE", "PORTRAIT", "WILDLIFE", "TRAVEL", "CULTURE"];

  const galleryImages: GalleryImage[] = [
    {
      id: "img-1",
      category: "LANDSCAPE",
      title: "Alpine Glacial Lake",
      location: "Zanskar Valley",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-96",
    },
    {
      id: "img-2",
      category: "PORTRAIT",
      title: "Mountain Solitude",
      location: "Norway Fjords",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-72",
    },
    {
      id: "img-3",
      category: "LANDSCAPE",
      title: "Golden Hour Crest",
      location: "Alpine Ridge",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-64",
    },
    {
      id: "img-4",
      category: "TRAVEL",
      title: "Wild Waterfall Basin",
      location: "Western Ghats",
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-[540px]",
    },
    {
      id: "img-5",
      category: "CULTURE",
      title: "Heritage Village Night",
      location: "Ladakh Sanctuary",
      imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-64",
    },
    {
      id: "img-6",
      category: "WILDLIFE",
      title: "Rainforest Canopy Safari",
      location: "Cloud Forest Reserve",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-64",
    },
    {
      id: "img-7",
      category: "LANDSCAPE",
      title: "Ocean Coastal Arch",
      location: "Lofoten Islands",
      imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=85",
      heightClass: "h-72",
    },
  ];

  const filteredImages =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Section background="dark" spacing="xl" className="border-b border-border/40">
      <Container size="2xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-[#00D2FF] text-xs font-bold uppercase tracking-widest block">
            VISUAL PORTFOLIO
          </span>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Stories Through The Lens
          </Heading>
          <Paragraph variant="large" align="center" className="text-slate-300 font-light">
            Experience based photography captured on our trail journeys around the globe.
          </Paragraph>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold uppercase tracking-widest pb-3 transition-colors relative whitespace-nowrap ${
                activeCategory === cat
                  ? "text-[#00D2FF] border-b-2 border-[#00D2FF]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Photo Spread Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {filteredImages.slice(0, 2).map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group border border-border shadow-2xl ${img.heightClass || "h-80"}`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] text-[#FF5733] uppercase tracking-widest font-bold block">
                    {img.category}
                  </span>
                  <h4 className="font-serif-heading text-lg font-medium">{img.title}</h4>
                  <p className="text-xs text-secondary-300 font-light">📍 {img.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {filteredImages.slice(2, 4).map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group border border-border shadow-2xl ${img.heightClass || "h-80"}`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] text-[#FF5733] uppercase tracking-widest font-bold block">
                    {img.category}
                  </span>
                  <h4 className="font-serif-heading text-lg font-medium">{img.title}</h4>
                  <p className="text-xs text-secondary-300 font-light">📍 {img.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {filteredImages.slice(4, 6).map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group border border-border shadow-2xl ${img.heightClass || "h-80"}`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] text-[#FF5733] uppercase tracking-widest font-bold block">
                    {img.category}
                  </span>
                  <h4 className="font-serif-heading text-lg font-medium">{img.title}</h4>
                  <p className="text-xs text-secondary-300 font-light">📍 {img.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 4 (Featured Tall Waterfall Card) */}
          <div className="space-y-6">
            {filteredImages.slice(6, 7).concat(filteredImages.slice(0, 1)).slice(0, 1).map((img) => (
              <div
                key={`tall-${img.id}`}
                onClick={() => setActiveImage(img)}
                className="relative rounded-xl overflow-hidden cursor-pointer group border border-border shadow-2xl h-[540px]"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs text-[#FF5733] uppercase tracking-widest font-bold block">
                    FEATURED TRAIL SPREAD
                  </span>
                  <h3 className="font-serif-heading text-2xl font-normal">{img.title}</h3>
                  <p className="text-xs text-secondary-300 font-light">📍 {img.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-modal bg-black/90 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
            <div className="max-w-4xl w-full bg-surface rounded-xl overflow-hidden border border-border p-6 space-y-4 text-white" onClick={(e) => e.stopPropagation()}>
              <img src={activeImage.imageUrl} alt={activeImage.title} className="w-full h-[480px] object-cover rounded-lg" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#FF5733] font-bold uppercase tracking-widest block">{activeImage.category}</span>
                  <h3 className="font-serif-heading text-2xl font-normal">{activeImage.title}</h3>
                  <p className="text-secondary-300 text-sm font-light">📍 {activeImage.location}</p>
                </div>
                <button onClick={() => setActiveImage(null)} className="bg-[#FF5733] text-white px-6 py-2 rounded-full text-xs font-bold">
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
