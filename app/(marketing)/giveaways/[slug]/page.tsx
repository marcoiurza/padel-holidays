import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getGiveawayBySlug } from "@/lib/content/queries";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return [{ slug: "baseline-launch" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const giveaway = getGiveawayBySlug((await params).slug);

  if (!giveaway) {
    return {};
  }

  return buildMetadata({
    title: `${giveaway.title} | Padel Holidays`,
    description: giveaway.prizeDescription,
    path: `/giveaways/${giveaway.slug}`,
    image: giveaway.heroImage,
    noIndex: giveaway.status === "closed"
  });
}

export default async function GiveawayPage({ params }: { params: Promise<{ slug: string }> }) {
  const giveaway = getGiveawayBySlug((await params).slug);

  if (!giveaway) {
    notFound();
  }

  return (
    <div className="container-shell space-y-10 py-16 md:py-24">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Giveaway</p>
          <h1 className="font-display text-5xl text-brand-dark md:text-6xl">{giveaway.title}</h1>
          <p className="text-lg leading-8 text-brand-dark/75">{giveaway.prizeDescription}</p>
          <Link href={siteConfig.social.instagram} target="_blank" className={buttonVariants()}>
            Go to Instagram
          </Link>
        </div>
        <Image src={giveaway.heroImage} alt={giveaway.title} width={1200} height={900} className="rounded-[32px] object-cover" />
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-display text-3xl text-brand-dark">How to enter</h2>
          <ol className="mt-4 space-y-3 text-brand-dark/75">
            {giveaway.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </Card>
        <Card>
          <h2 className="font-display text-3xl text-brand-dark">Terms</h2>
          <ul className="mt-4 space-y-3 text-brand-dark/75">
            {giveaway.terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
