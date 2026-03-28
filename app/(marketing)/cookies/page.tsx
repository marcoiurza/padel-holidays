import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy | Padel Holidays",
  description: "Cookie categories, consent choices and script behavior on the Padel Holidays platform.",
  path: "/cookies"
});

export default function CookiesPage() {
  return (
    <article className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Cookie Policy</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-brand-dark/76">
        <p>Essential cookies support session and booking behavior. Analytics and marketing scripts remain off until consent is given.</p>
        <p>GA4 runs in limited consent mode until analytics consent is granted. Meta Pixel does not fire until marketing consent is granted.</p>
        <p>Consent preferences are stored locally and can be changed later without breaking the booking flow.</p>
      </div>
    </article>
  );
}
