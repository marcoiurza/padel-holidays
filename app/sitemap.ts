import type { MetadataRoute } from "next";
import { journalEntries, retreats, giveaways } from "@/lib/content/site-content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/oscar-marhuenda",
    "/retreats",
    "/experiences/padel",
    "/experiences/safari",
    "/accommodation",
    "/itinerary",
    "/reviews",
    "/partners",
    "/private-groups",
    "/contact",
    "/newsletter",
    "/terms",
    "/privacy",
    "/cookies"
  ];

  const entries = [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date()
    })),
    ...retreats.map((retreat) => ({
      url: `${siteConfig.url}/retreats/${retreat.slug}`,
      lastModified: new Date(retreat.startDate)
    })),
    ...giveaways
      .filter((giveaway) => giveaway.status === "active")
      .map((giveaway) => ({
        url: `${siteConfig.url}/giveaways/${giveaway.slug}`,
        lastModified: new Date(giveaway.deadline)
      })),
    ...journalEntries.map((entry) => ({
      url: `${siteConfig.url}/journal/${entry.slug}`,
      lastModified: new Date()
    }))
  ];

  return entries;
}
