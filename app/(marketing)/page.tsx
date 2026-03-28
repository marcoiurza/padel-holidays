import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/blocks/section-heading";
import { JsonLd, organizationJsonLd, reviewSnippetJsonLd } from "@/lib/seo/structured-data";
import { reviews, sharedSeo, watamuRetreat } from "@/lib/content/site-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { formatCurrency } from "@/lib/utils/currency";

export const revalidate = 3600;
export const metadata = buildMetadata({
  title: sharedSeo.home.title,
  description: sharedSeo.home.description,
  path: "/",
  image: sharedSeo.home.image
});

const pillars = [
  "Padel with proper coaching and a social energy that still feels premium",
  "Travel programming that balances beach, safari, dinners and real downtime",
  "Founder-led hosting that removes uncertainty from a high-trust purchase"
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={reviewSnippetJsonLd(reviews)} />
      <div className="container-shell py-10 md:py-16">
        <section className="grid gap-10 overflow-hidden rounded-[40px] bg-brand-dark px-6 py-8 text-brand-light shadow-xl md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <Badge variant="accent">Padel + travel + people</Badge>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.92] md:text-7xl">
              Premium padel retreats that feel calm, social and beautifully run.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-light/75">
              Watamu is our flagship: daily coaching with Oscar Marhuenda, safari contrast,
              ocean time, thoughtful hosting and a group experience that feels aspirational
              without trying too hard.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/retreats/watamu-kenya" className={buttonVariants()}>
                Explore Watamu
              </Link>
              <Link href="/private-groups" className={buttonVariants({ variant: "secondary" })}>
                Private groups
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={watamuRetreat.heroImage}
              alt="Watamu coastline at sunset"
              width={1200}
              height={900}
              className="h-full min-h-[420px] w-full object-cover"
              priority
            />
          </div>
        </section>
      </div>

      <section className="container-shell py-10 md:py-16">
        <SectionHeading
          eyebrow="Why it converts"
          title="This is not a bootcamp and it is not generic beach travel."
          description="People book when the trip feels high-quality, low-chaos and trust-rich. The product is built around exactly that."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar} className="min-h-40">
              <p className="text-base leading-7 text-brand-dark/80">{pillar}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-8 py-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Flagship retreat"
            title="Watamu, Kenya"
            description="Daily padel, coaching with Oscar, premium accommodation, safari, dhow days and a group that feels curated rather than random."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Next dates</p>
              <p className="mt-2 font-display text-3xl text-brand-dark">4-13 December 2026</p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">From</p>
              <p className="mt-2 font-display text-3xl text-brand-dark">
                {formatCurrency(watamuRetreat.priceFromPence)}
              </p>
            </Card>
          </div>
          <Link href="/book/watamu-kenya" className={buttonVariants()}>
            Start your booking
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Image src="/images/retreats/watamu-padel-club.jpg" alt="Watamu Padel Club" width={900} height={900} className="rounded-[28px] object-cover" />
          <Image src="/images/retreats/tsavo-east.webp" alt="Tsavo safari" width={900} height={900} className="rounded-[28px] object-cover" />
        </div>
      </section>
    </>
  );
}
