import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLaunchRetreat } from "@/lib/content/queries";
import { formatCurrency } from "@/lib/utils/currency";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Booking | Padel Holidays",
  description: "Choose your retreat date, room type and occupancy before starting the premium booking flow.",
  path: "/booking"
});

export default function BookingPage() {
  const retreat = getLaunchRetreat();

  return (
    <div className="container-shell space-y-10 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Booking</p>
        <h1 className="mt-4 font-display text-5xl text-brand-dark md:text-6xl">Choose your dates, room and pace</h1>
        <p className="mt-4 text-lg leading-8 text-brand-dark/75">
          The booking flow uses progressive disclosure because high-trust purchases convert better when everything feels clear and calm.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {retreat.dates[0].roomTypes.map((roomType) => (
          <Card key={roomType.id}>
            <h2 className="font-display text-3xl text-brand-dark">{roomType.name}</h2>
            <p className="mt-3 text-sm leading-7 text-brand-dark/75">{roomType.description}</p>
            <p className="mt-4 font-semibold text-brand-dark">{formatCurrency(roomType.basePricePence)}</p>
          </Card>
        ))}
      </div>
      <Link href={`/book/${retreat.slug}`} className={buttonVariants()}>
        Start the booking flow
      </Link>
    </div>
  );
}
