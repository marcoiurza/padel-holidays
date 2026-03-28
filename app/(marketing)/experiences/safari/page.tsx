import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Safari Experience | Padel Holidays",
  description: "The safari segment adds contrast, story value and destination depth to the Watamu retreat.",
  path: "/experiences/safari"
});

export default function SafariExperiencePage() {
  return (
    <SimplePage
      eyebrow="Experience"
      title="Safari is not filler. It changes how the whole retreat feels."
      description="Moving inland for a short safari breaks the rhythm beautifully and turns the trip into something more memorable than a standard sports week."
      image="/images/retreats/tsavo-east.webp"
      bullets={[
        "Private vehicles and a clean, low-friction transition from coast to bush.",
        "A different pace that makes the beach return even better.",
        "A major social and storytelling asset for both direct bookings and group sales."
      ]}
      cta={{ href: "/retreats/watamu-kenya", label: "See the full retreat" }}
    />
  );
}
