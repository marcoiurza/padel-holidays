import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
          "/payment-success",
          "/payment-failed",
          "/booking-lookup",
          "/preview",
          "/_test"
        ]
      }
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
