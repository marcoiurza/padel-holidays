import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Booking Lookup | Padel Holidays",
  description: "Look up an existing booking using your booking reference.",
  path: "/booking-lookup",
  noIndex: true
});

export default function BookingLookupPage() {
  return (
    <div className="container-shell max-w-2xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Booking lookup</h1>
      <p className="mt-4 text-lg leading-8 text-brand-dark/75">
        This route exists for returning guests and support flows, but is excluded from search.
      </p>
    </div>
  );
}
