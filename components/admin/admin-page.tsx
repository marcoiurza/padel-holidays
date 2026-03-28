import Link from "next/link";
import { Card } from "@/components/ui/card";

export function AdminPlaceholderPage({
  title,
  description,
  bullets
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-5xl text-brand-light">{title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-brand-light/70">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {bullets.map((bullet) => (
          <Card key={bullet} className="border-white/10 bg-white/5 text-brand-light">
            {bullet}
          </Card>
        ))}
      </div>
      <Link href="/admin/bookings" className="text-sm text-brand-accent">
        Go to bookings →
      </Link>
    </div>
  );
}
