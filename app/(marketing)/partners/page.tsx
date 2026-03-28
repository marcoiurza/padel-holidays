import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Partners | Padel Holidays",
  description: "Brand, creator and hosted-trip partnerships that fit the Padel Holidays audience.",
  path: "/partners"
});

export default function PartnersPage() {
  return (
    <SimplePage
      eyebrow="Partners"
      title="Thoughtful partnerships only"
      description="We work best with brands, creators and hosts who understand premium positioning, genuine fit and long-term value."
      image="/images/social/giveaway-bas3line.png"
      bullets={[
        "Giveaways, hosted trips and creator-led drop-ins.",
        "Affiliate codes and attribution-ready booking flows.",
        "Partnership surfaces that support brand trust instead of cluttering the experience."
      ]}
    />
  );
}
