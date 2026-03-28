import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqJsonLd, JsonLd, retreatEventJsonLd } from "@/lib/seo/structured-data";
import { getRetreatBySlug } from "@/lib/content/queries";
import { formatCurrency } from "@/lib/utils/currency";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyMobileCTA } from "@/components/blocks/sticky-mobile-cta";

export const revalidate = 3600;

export function generateStaticParams() {
  return [{ slug: "watamu-kenya" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    return {};
  }

  return buildMetadata({
    title: `${retreat.title} | Padel Holidays`,
    description: retreat.description,
    path: `/retreats/${retreat.slug}`,
    image: retreat.ogImage
  });
}

export default async function RetreatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const retreat = getRetreatBySlug(slug);

  if (!retreat) {
    notFound();
  }

  const retreatDate = retreat.dates[0];

  return (
    <>
      <JsonLd data={retreatEventJsonLd(retreat)} />
      <JsonLd data={faqJsonLd(retreat.faq)} />
      <div className="container-shell space-y-16 py-10 md:space-y-20 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <Badge variant="accent">Flagship retreat</Badge>
            <h1 className="font-display text-5xl leading-[0.95] text-brand-dark md:text-7xl">{retreat.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-dark/75">{retreat.description}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card><p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">Dates</p><p className="mt-2 font-semibold text-brand-dark">4-13 Dec 2026</p></Card>
              <Card><p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">Deposit</p><p className="mt-2 font-semibold text-brand-dark">{retreat.depositPercent}% to secure</p></Card>
              <Card><p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">From</p><p className="mt-2 font-semibold text-brand-dark">{formatCurrency(retreat.priceFromPence)}</p></Card>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/book/${retreat.slug}`} className={buttonVariants()}>
                Secure your room
              </Link>
              <Link href="/about/oscar-marhuenda" className={buttonVariants({ variant: "secondary" })}>
                Meet Oscar
              </Link>
            </div>
          </div>
          <Image src={retreat.heroImage} alt={retreat.title} width={1400} height={1000} className="rounded-[36px] object-cover shadow-xl" priority />
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {retreat.included.map((item) => (
            <Card key={item} className="min-h-40"><p className="text-base leading-7 text-brand-dark/80">{item}</p></Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">Oscar coaching</p>
            <h2 className="font-display text-4xl text-brand-dark">Visible expertise throughout the trip</h2>
            <p className="leading-8 text-brand-dark/75">Oscar appears near the booking CTA because he reduces anxiety for players who care about the standard of the week.</p>
          </Card>
          <Card className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">Pricing and rooms</p>
            {retreatDate.roomTypes.map((roomType) => (
              <div key={roomType.id} className="rounded-[20px] border border-brand-dark/8 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-brand-dark">{roomType.name}</h3>
                    <p className="mt-1 text-sm leading-7 text-brand-dark/72">{roomType.description}</p>
                  </div>
                  <p className="font-semibold text-brand-dark">{formatCurrency(roomType.basePricePence)}</p>
                </div>
              </div>
            ))}
          </Card>
        </section>
      </div>
      <StickyMobileCTA href={`/book/${retreat.slug}`} label="Book Watamu" />
    </>
  );
}
