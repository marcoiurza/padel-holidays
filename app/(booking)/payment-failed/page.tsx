import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { buttonVariants } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Payment Failed | Padel Holidays",
  description: "Your payment did not complete. Try again or contact the team.",
  path: "/payment-failed",
  noIndex: true
});

export default function PaymentFailedPage() {
  return (
    <div className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">That payment didn’t go through.</h1>
      <p className="mt-4 text-lg leading-8 text-brand-dark/75">
        Your draft is still safe. You can retry checkout or contact us on WhatsApp and we’ll help.
      </p>
      <div className="mt-6">
        <Link href="/book/watamu-kenya" className={buttonVariants()}>
          Return to booking
        </Link>
      </div>
    </div>
  );
}
