import Link from "next/link";
import type { Metadata } from "next";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/retreats", label: "Retreats" },
  { href: "/admin/rooms", label: "Rooms" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/groups", label: "Groups" },
  { href: "/admin/giveaways", label: "Giveaways" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/settings", label: "Settings" }
];

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 p-6">
          <p className="font-display text-3xl">Padel Holidays</p>
          <p className="mt-2 text-sm text-brand-light/60">Founder operator console</p>
          <nav className="mt-10 space-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-brand-light/75 transition hover:bg-white/5 hover:text-brand-light">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
