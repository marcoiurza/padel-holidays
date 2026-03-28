import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Padel Experience | Padel Holidays",
  description: "How coaching, social play and quality standards come together inside the Padel Holidays format.",
  path: "/experiences/padel"
});

export default function PadelExperiencePage() {
  return (
    <SimplePage
      eyebrow="Experience"
      title="Padel that raises the trip rather than taking it over"
      description="The format is structured enough to matter, relaxed enough to still feel like a holiday and visible enough to support trust during booking."
      image="/images/retreats/watamu-padel-club.jpg"
      bullets={[
        "Coaching groups shaped by level, not ego.",
        "Social sessions that preserve the energy of the trip.",
        "Oscar’s presence adds confidence before guests ever step on court."
      ]}
      cta={{ href: "/book/watamu-kenya", label: "Book the retreat" }}
    />
  );
}
