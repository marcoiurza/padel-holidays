import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Itinerary | Padel Holidays",
  description: "A sample week in Watamu across padel, safari, ocean time and social moments.",
  path: "/itinerary"
});

export default function ItineraryPage() {
  return (
    <SimplePage
      eyebrow="Itinerary"
      title="A week with shape, but not pressure"
      description="The programme has enough structure to feel premium and enough space to still feel like a holiday."
      image="/images/retreats/watamu-dhow.jpg"
      bullets={[
        "Arrive easy, settle fast and start social without it feeling forced.",
        "Alternate coaching blocks with proper downtime and destination moments.",
        "Build toward shared dinners, safari contrast and a final boat-day high point."
      ]}
      cta={{ href: "/retreats/watamu-kenya", label: "See Watamu" }}
    />
  );
}
