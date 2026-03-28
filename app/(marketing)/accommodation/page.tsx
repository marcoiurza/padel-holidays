import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Accommodation | Padel Holidays",
  description: "Premium accommodation standards, room logic and group setup for the Watamu retreat.",
  path: "/accommodation"
});

export default function AccommodationPage() {
  return (
    <SimplePage
      eyebrow="Stay"
      title="Premium accommodation with room logic that respects how people actually travel"
      description="Single rooms, doubles for friends and paired solo traveller options are all first-class, not awkward afterthoughts."
      image="/images/retreats/watamu-villa.webp"
      bullets={[
        "Single, double and select triple configurations.",
        "Admin-facilitated pairing for solo travellers who want a shared room.",
        "High-trust rooming logic carried through to the founder dashboard."
      ]}
      cta={{ href: "/booking", label: "View room options" }}
    />
  );
}
