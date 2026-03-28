import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { journalEntries } from "@/lib/content/site-content";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Journal | Padel Holidays",
  description: "Editorial content for retreat discovery, destination depth and SEO expansion.",
  path: "/journal"
});

export default function JournalPage() {
  return (
    <div className="container-shell space-y-6 py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Journal</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {journalEntries.map((entry) => (
          <Link key={entry.slug} href={`/journal/${entry.slug}`}>
            <Card className="h-full">
              <h2 className="font-display text-3xl text-brand-dark">{entry.title}</h2>
              <p className="mt-3 leading-7 text-brand-dark/75">{entry.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
