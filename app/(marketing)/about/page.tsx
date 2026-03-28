import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "About | Padel Holidays",
  description: "The people, standards and product philosophy behind Padel Holidays.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <SimplePage
      eyebrow="About"
      title="Founder-led travel that still feels personal when the stakes get higher."
      description="Padel Holidays exists to build trips that hold both quality and ease: strong coaching, memorable locations and a group energy that feels chosen rather than accidental."
      image="/images/retreats/watamu-sunset-nets.jpg"
      bullets={[
        "Premium but relaxed is a product rule, not a tone-of-voice exercise.",
        "Every retreat is built around trust, clarity and what helps a guest say yes to a meaningful spend.",
        "The platform is designed for direct bookings, private groups, giveaways and founder-grade operations."
      ]}
      cta={{ href: "/about/oscar-marhuenda", label: "Meet Oscar" }}
    />
  );
}
