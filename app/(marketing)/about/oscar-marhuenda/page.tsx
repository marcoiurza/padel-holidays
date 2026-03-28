import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/structured-data";

export const metadata = buildMetadata({
  title: "Oscar Marhuenda | Padel Holidays",
  description:
    "Meet Oscar Marhuenda, ex-World Padel Tour coach and one of the core trust signals behind the Watamu retreat experience.",
  path: "/about/oscar-marhuenda",
  image: "/images/people/oscar-marhuenda.png"
});

export default function OscarPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Oscar Marhuenda",
          jobTitle: "Padel Coach",
          description: "Ex-World Padel Tour coach leading the coaching experience for Padel Holidays."
        }}
      />
      <div className="container-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1fr]">
        <Image src="/images/people/oscar-marhuenda.png" alt="Oscar Marhuenda" width={1000} height={1500} className="rounded-[32px] object-cover shadow-lg" />
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-dark/55">Coach profile</p>
          <h1 className="font-display text-5xl leading-tight text-brand-dark md:text-6xl">Oscar Marhuenda</h1>
          <p className="text-lg leading-8 text-brand-dark/76">
            Oscar is an ex-World Padel Tour coach whose presence changes how serious players read the retreat from the first minute.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/75 p-5 shadow-sm">
              <p className="font-semibold text-brand-dark">Career highlights</p>
              <p className="mt-2 text-sm leading-7 text-brand-dark/75">
                World Padel Tour coaching experience, high-level player development and a practical coaching style built around confidence and clarity.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/75 p-5 shadow-sm">
              <p className="font-semibold text-brand-dark">Coaching philosophy</p>
              <p className="mt-2 text-sm leading-7 text-brand-dark/75">
                Sessions should sharpen decision-making and movement without making the holiday feel like work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
