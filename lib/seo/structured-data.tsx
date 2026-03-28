import { siteConfig } from "@/config/site";
import type { FAQItem, Retreat, Review } from "@/types/domain";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.social.instagram]
  };
}

export function retreatEventJsonLd(retreat: Retreat) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: retreat.title,
    startDate: retreat.startDate,
    endDate: retreat.endDate,
    location: {
      "@type": "Place",
      name: retreat.location
    },
    image: [new URL(retreat.ogImage, siteConfig.url).toString()],
    description: retreat.description
  };
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function reviewSnippetJsonLd(items: Review[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((review, index) => ({
      "@type": "Review",
      position: index + 1,
      author: { "@type": "Person", name: review.name },
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating
      }
    }))
  };
}
