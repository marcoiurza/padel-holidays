import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | Padel Holidays",
  description: "How Padel Holidays collects, uses, retains and deletes personal data.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <article className="container-shell max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl text-brand-dark md:text-6xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-brand-dark/76">
        <p>We collect the details needed to run bookings, guest logistics, payments, support and opted-in marketing communications.</p>
        <p>Financial booking data is retained for seven years. Guest PII can be anonymised on request while preserving revenue records.</p>
        <p>Marketing emails require explicit consent. Transactional updates are sent where necessary to fulfill a booking or enquiry.</p>
      </div>
    </article>
  );
}
