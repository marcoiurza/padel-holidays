import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getRetreatBySlug } from "@/lib/content/queries";
import { BookingFlow } from "@/components/booking/booking-flow";

export function generateStaticParams() {
  return [{ retreatSlug: "watamu-kenya" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ retreatSlug: string }>;
}) {
  const retreat = getRetreatBySlug((await params).retreatSlug);

  if (!retreat) {
    return {};
  }

  return buildMetadata({
    title: `Book ${retreat.title} | Padel Holidays`,
    description: `Secure your room for ${retreat.title} with a guided, premium booking flow.`,
    path: `/book/${retreat.slug}`
  });
}

export default async function BookRetreatPage({
  params
}: {
  params: Promise<{ retreatSlug: string }>;
}) {
  const retreat = getRetreatBySlug((await params).retreatSlug);

  if (!retreat) {
    notFound();
  }

  return (
    <div className="container-shell space-y-10 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Secure your room</p>
        <h1 className="mt-4 font-display text-5xl text-brand-dark md:text-6xl">{retreat.title}</h1>
        <p className="mt-4 text-lg leading-8 text-brand-dark/75">
          Secure your room with a {retreat.depositPercent}% deposit. Sort flights whenever you’re ready.
        </p>
      </div>
      <BookingFlow retreat={retreat} />
    </div>
  );
}
