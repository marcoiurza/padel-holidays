import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "/retreats/watamu-kenya", label: "Kenya Retreat" },
  { href: "/private-groups", label: "Private Groups" },
  { href: "/reviews", label: "Reviews" },
  { href: "/giveaways/baseline-launch", label: "Giveaway" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-dark/8 bg-brand-light/80 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-brand-dark">
          Padel Holidays
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-brand-dark/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-dark">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/booking" className={`hidden md:block ${buttonVariants({ variant: "secondary" })}`}>
            Explore dates
          </Link>
          <Link href="/book/watamu-kenya" className={buttonVariants()}>
            Book Watamu
          </Link>
        </div>
      </div>
    </header>
  );
}
