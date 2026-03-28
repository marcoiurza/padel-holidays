import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Payment Success | Padel Holidays",
  description: "Your payment was received successfully.",
  path: "/payment-success",
  noIndex: true
});

export default function PaymentSuccessPage() {
  return (
    <div className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Deposit received.</h1>
      <p className="mt-4 text-lg leading-8 text-brand-dark/75">
        Your room is now held and the booking team will send next-step details shortly.
      </p>
    </div>
  );
}
