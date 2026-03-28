import { buildMetadata } from "@/lib/seo/metadata";
import { SimplePage } from "@/components/blocks/simple-page";

export const metadata = buildMetadata({
  title: "Newsletter | Padel Holidays",
  description: "Join the Padel Holidays community for retreat launches, stories and founder updates.",
  path: "/newsletter"
});

export default function NewsletterPage() {
  return (
    <SimplePage
      eyebrow="Newsletter"
      title="For people who are interested before they are ready"
      description="Newsletter capture supports the long consideration cycle: warm brand intro, Watamu day-in-the-life, Oscar credibility, guest stories and practical reassurance."
      image="/images/retreats/watamu-sunset-nets.jpg"
      bullets={[
        "Warm lead capture from discovery pages and giveaways.",
        "Single clear CTA back to the retreat booking page.",
        "Explicit marketing consent captured at signup."
      ]}
    />
  );
}
