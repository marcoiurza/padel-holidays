import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-dark/10 bg-brand-dark text-brand-light">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Padel Holidays</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-brand-light/70">
            Premium padel-led travel experiences shaped around good coaching, beautiful places
            and the kind of group energy people want more of.
          </p>
        </div>
        <div className="space-y-3 text-sm text-brand-light/75">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-light">Explore</p>
          <Link href="/retreats/watamu-kenya">Watamu retreat</Link>
          <Link href="/private-groups">Private groups</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about/oscar-marhuenda">Oscar Marhuenda</Link>
        </div>
        <div className="space-y-3 text-sm text-brand-light/75">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-light">Trust</p>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
