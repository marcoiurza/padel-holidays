import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { retreats } from "@/lib/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils/currency";

export const metadata = buildMetadata({
  title: "Retreats | Padel Holidays",
  description: "Explore premium padel-led retreats built for quality coaching, beautiful locations and high-trust booking.",
  path: "/retreats"
});

export default function RetreatsPage() {
  return (
    <div className="container-shell space-y-10 py-16 md:py-24">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Retreats</p>
        <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Current and future retreat destinations</h1>
        <p className="text-lg leading-8 text-brand-dark/75">
          Launch is built around Watamu, but the architecture is already ready for the next destination.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {retreats.map((retreat) => (
          <Card key={retreat.id} className="overflow-hidden p-0">
            <Image src={retreat.heroImage} alt={retreat.title} width={1200} height={900} className="h-80 w-full object-cover" />
            <div className="space-y-4 p-6">
              <h2 className="font-display text-3xl text-brand-dark">{retreat.title}</h2>
              <p className="text-brand-dark/75">{retreat.teaser}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">
                From {formatCurrency(retreat.priceFromPence)}
              </p>
              <Link href={`/retreats/${retreat.slug}`} className={buttonVariants()}>
                Explore retreat
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
