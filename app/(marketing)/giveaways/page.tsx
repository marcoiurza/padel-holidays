import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { giveaways } from "@/lib/content/site-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Giveaways | Padel Holidays",
  description: "Premium giveaway landing pages for collaborations, reminder capture and tracked Instagram traffic.",
  path: "/giveaways"
});

export default function GiveawaysPage() {
  return (
    <div className="container-shell space-y-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Giveaways built to convert cleanly</h1>
        <p className="mt-4 text-lg leading-8 text-brand-dark/75">
          A giveaway page should support trust, SEO, attribution and outbound Instagram action without feeling disposable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {giveaways.map((giveaway) => (
          <Card key={giveaway.id} className="overflow-hidden p-0">
            <Image src={giveaway.heroImage} alt={giveaway.title} width={1200} height={900} className="h-80 w-full object-cover" />
            <div className="space-y-4 p-6">
              <h2 className="font-display text-3xl text-brand-dark">{giveaway.title}</h2>
              <p className="text-brand-dark/75">{giveaway.prizeDescription}</p>
              <Link href={`/giveaways/${giveaway.slug}`}>
                <Button>Open giveaway</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
