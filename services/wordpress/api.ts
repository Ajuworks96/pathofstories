import {
  siteSettingsData,
  foundersData,
  missionVisionValuesData,
  servicesData,
  packagesData,
  testimonialsData,
  galleryData,
  faqData,
  journeyMilestonesData,
  communityStatsData,
} from "./mockData";
import {
  SiteSettings,
  FounderModule,
  MissionVisionValues,
  ServiceModule,
  PackageModule,
  TestimonialModule,
  GalleryItem,
  FAQItem,
  JourneyMilestone,
  CommunityStats,
} from "@/lib/wordpress/types";

/**
 * Headless WordPress CMS API Service Client
 * Simulates REST/GraphQL fetches from remote Headless WordPress CMS with fallback to structured mock data.
 */

export async function getSiteSettings(): Promise<SiteSettings> {
  return siteSettingsData;
}

export async function getFounders(): Promise<FounderModule[]> {
  return foundersData;
}

export async function getMissionVisionValues(): Promise<MissionVisionValues> {
  return missionVisionValuesData;
}

export async function getServices(): Promise<ServiceModule[]> {
  return servicesData.sort((a, b) => a.sortingOrder - b.sortingOrder);
}

export async function getServiceBySlug(slug: string): Promise<ServiceModule | undefined> {
  return servicesData.find((s) => s.slug === slug);
}

export async function getPackages(): Promise<PackageModule[]> {
  return packagesData.sort((a, b) => a.sortingOrder - b.sortingOrder);
}

export async function getPackageBySlug(slug: string): Promise<PackageModule | undefined> {
  return packagesData.find((p) => p.slug === slug);
}

export async function getFeaturedPackages(): Promise<PackageModule[]> {
  return packagesData.filter((p) => p.featuredPackage);
}

export async function getTestimonials(): Promise<TestimonialModule[]> {
  return testimonialsData;
}

export async function getGallery(): Promise<GalleryItem[]> {
  return galleryData;
}

export async function getFAQs(): Promise<FAQItem[]> {
  return faqData;
}

export async function getJourneyMilestones(): Promise<JourneyMilestone[]> {
  return journeyMilestonesData;
}

export async function getCommunityStats(): Promise<CommunityStats> {
  return communityStatsData;
}
