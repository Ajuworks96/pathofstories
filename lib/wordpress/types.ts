export interface SiteSettings {
  brandName: string;
  tagline: string;
  logoUrl?: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  operatingHours: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    pinterest: string;
  };
  seo: SEOData;
}

export interface SEOData {
  title: string;
  metaDesc: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
}

export interface FounderModule {
  id: string;
  name: string;
  role: string;
  bio: string;
  storyQuote: string;
  image: string;
  signature?: string;
}

export interface MissionVisionValues {
  mission: {
    title: string;
    description: string;
    points: string[];
  };
  vision: {
    title: string;
    description: string;
    quote: string;
  };
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  whyWeExist: {
    title: string;
    leadParagraph: string;
    bodyParagraphs: string[];
  };
}

export interface ServiceModule {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  bannerImage: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  gallery: string[];
  features: string[];
  buttonText: string;
  buttonLink: string;
  status: "published" | "draft";
  sortingOrder: number;
  seo: SEOData;
}

export interface PackageModule {
  id: string;
  packageName: string;
  slug: string;
  destination: string;
  duration: string;
  price: string;
  offerPrice?: string;
  maxParticipants: number;
  difficulty: "Gentle" | "Moderate" | "Challenging" | "Expedition";
  packageGallery: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  schedule: Array<{
    day: string;
    title: string;
    description: string;
  }>;
  mapLocation: {
    lat: number;
    lng: number;
    locationName: string;
    region: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  bookingButton: {
    label: string;
    url: string;
  };
  status: "published" | "draft";
  featuredPackage: boolean;
  sortingOrder: number;
}

export interface TestimonialModule {
  id: string;
  authorName: string;
  authorLocation: string;
  journeyName: string;
  quote: string;
  fullStory: string;
  rating: number;
  authorImage: string;
  videoUrl?: string;
  videoThumbnail?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  aspectRatio: "portrait" | "landscape" | "square";
  storySnippet: string;
  photographer: string;
}

export interface FAQItem {
  id: string;
  category: "General" | "Preparation" | "Expeditions" | "Safety & Ethics";
  question: string;
  answer: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface CommunityStats {
  journeysCompleted: number;
  countriesExplored: number;
  communityMembers: number;
  storiesShared: number;
  treesPlanted: number;
}
