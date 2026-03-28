import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataParams = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/retreats/watamu-sunset-nets.jpg",
  noIndex = false
}: BuildMetadataParams): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const absoluteImage = new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: absoluteImage, width: 1200, height: 630 }],
      locale: "en_GB",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage]
    }
  };
}
