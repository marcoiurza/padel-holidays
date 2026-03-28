import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}
      <h2 className="mt-4 font-display text-4xl leading-tight text-brand-dark md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-brand-dark/72">{description}</p>
    </div>
  );
}
