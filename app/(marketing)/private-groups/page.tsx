import { buildMetadata } from "@/lib/seo/metadata";
import { PrivateGroupForm } from "@/components/blocks/private-group-form";
import { SectionHeading } from "@/components/blocks/section-heading";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Private Groups | Padel Holidays",
  description:
    "Corporate retreats, milestone celebrations, club trips and hosted group experiences designed around padel and premium destination logistics.",
  path: "/private-groups"
});

const groupUseCases = [
  "Leadership offsites with a stronger social anchor than a normal wellness retreat.",
  "Milestone celebrations that need real logistics support and a better energy than pure nightlife travel.",
  "Club and community escapes with coaching, competition and a more elevated group standard."
];

export default function PrivateGroupsPage() {
  return (
    <div className="container-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Private groups"
          title="High-margin, high-touch trips for teams, clubs and milestone groups"
          description="Padel gives the group a natural anchor. We handle the destination, structure, hosting and detail."
        />
        <div className="space-y-4">
          {groupUseCases.map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </div>
      </div>
      <PrivateGroupForm />
    </div>
  );
}
