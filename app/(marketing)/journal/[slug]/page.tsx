import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { getJournalEntryBySlug } from "@/lib/content/queries";

export function generateStaticParams() {
  return [{ slug: "why-watamu-works-for-padel-groups" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const entry = getJournalEntryBySlug((await params).slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.title} | Padel Holidays`,
    description: entry.description,
    path: `/journal/${entry.slug}`
  });
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const entry = getJournalEntryBySlug((await params).slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="container-shell max-w-3xl py-16 md:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Journal</p>
      <h1 className="mt-4 font-display text-5xl text-brand-dark md:text-6xl">{entry.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-brand-dark/76">
        <p>
          Watamu works because it gives a padel-led trip more than courts. It gives climate, visual
          contrast, beach rhythm, safari access and a sense of occasion that standard club travel rarely has.
        </p>
        <p>
          For premium groups, that matters. People are not just buying coaching hours. They are buying
          how the whole trip will feel, and whether the social energy, scenery and logistics justify the spend.
        </p>
      </div>
    </article>
  );
}
