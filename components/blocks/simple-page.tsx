import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/blocks/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SimplePage({
  eyebrow,
  title,
  description,
  image,
  bullets,
  cta
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
  cta?: { href: string; label: string };
}) {
  return (
    <div className="container-shell space-y-12 py-16 md:py-24">
      <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-end">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="relative overflow-hidden rounded-[32px]">
          <Image src={image} alt={title} width={1200} height={900} className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {bullets.map((bullet) => (
          <Card key={bullet} className="text-brand-dark/80">
            {bullet}
          </Card>
        ))}
      </section>
      {cta ? (
        <Link href={cta.href}>
          <Button>{cta.label}</Button>
        </Link>
      ) : null}
    </div>
  );
}
