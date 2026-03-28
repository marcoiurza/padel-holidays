import { buildMetadata } from "@/lib/seo/metadata";
import { reviews } from "@/lib/content/site-content";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Reviews | Padel Holidays",
  description: "Guest reviews from Padel Holidays retreats and premium group experiences.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/55">Reviews</p>
        <h1 className="mt-4 font-display text-5xl text-brand-dark md:text-6xl">Real guest signal beats generic travel copy.</h1>
        <p className="mt-4 text-lg leading-8 text-brand-dark/75">
          Reviews should remove risk, build trust and make the experience feel tangible before checkout.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="min-h-56">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-dark/45">
              {review.padelLevel} · {review.retreatDateLabel}
            </p>
            <p className="mt-4 text-base leading-7 text-brand-dark/80">{review.body}</p>
            <p className="mt-4 font-semibold text-brand-dark">{review.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
