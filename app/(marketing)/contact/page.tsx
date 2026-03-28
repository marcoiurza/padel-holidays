import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Contact | Padel Holidays",
  description: "Get in touch about retreats, private groups, hosted trips or partnerships.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SimplePage
      eyebrow="Contact"
      title="Questions before you book are part of the product"
      description="High-trust travel decisions deserve answers. Contact, WhatsApp and founder follow-up are built into the operating model."
      image="/images/retreats/watamu-padel-night.jpg"
      bullets={[
        "Ask about rooming, flights, padel level, group fit or private trips.",
        "Founder-led follow-up for premium purchases and custom proposals.",
        "WhatsApp is treated as a trust surface, not a last resort."
      ]}
      cta={{ href: "/private-groups", label: "Plan a private group" }}
    />
  );
}
