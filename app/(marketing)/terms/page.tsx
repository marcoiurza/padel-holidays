import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Padel Holidays",
  description: "Booking terms, payment conditions, cancellation handling and retreat policies for Padel Holidays.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <article className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Terms & Conditions</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-brand-dark/76">
        <p>Bookings are secured by deposit unless the selected retreat configuration offers full payment at checkout.</p>
        <p>Balance due dates are retreat-specific and surfaced clearly during booking and in follow-up emails.</p>
        <p>Cancellations, manual payment arrangements and hosted/private trip terms can vary by retreat type.</p>
      </div>
    </article>
  );
}
