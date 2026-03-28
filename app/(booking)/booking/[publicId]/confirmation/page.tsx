import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Booking Confirmation | Padel Holidays",
  description: "Your room is secured. Here’s what happens next.",
  path: "/booking/confirmation",
  noIndex: true
});

export default async function BookingConfirmationPage({
  params
}: {
  params: Promise<{ publicId: string }>;
}) {
  const { publicId } = await params;

  return (
    <div className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">You’re in.</h1>
      <p className="mt-4 text-lg leading-8 text-brand-dark/75">
        Booking reference: {publicId}. We’ve got you, and the next steps will arrive by email.
      </p>
    </div>
  );
}
