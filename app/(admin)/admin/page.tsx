import Link from "next/link";
import { Card } from "@/components/ui/card";
import { sampleBookings, watamuRetreat } from "@/lib/content/site-content";
import { formatCurrency } from "@/lib/utils/currency";

export default function AdminDashboardPage() {
  const revenue = sampleBookings.reduce((sum, booking) => sum + booking.totalPence, 0);
  const depositsOutstanding = sampleBookings.reduce((sum, booking) => sum + booking.balancePence, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-5xl text-brand-light">Dashboard</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-brand-light/70">
          Occupancy, revenue, abandoned booking risk and payment deadlines sit here first because this screen should save the founder time every day.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-light/45">Live revenue</p>
          <p className="mt-3 font-display text-4xl">{formatCurrency(revenue)}</p>
        </Card>
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-light/45">Outstanding balance</p>
          <p className="mt-3 font-display text-4xl">{formatCurrency(depositsOutstanding)}</p>
        </Card>
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-light/45">Room availability</p>
          <p className="mt-3 font-display text-4xl">{watamuRetreat.dates[0].availableRooms}</p>
        </Card>
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-light/45">Abandoned drafts</p>
          <p className="mt-3 font-display text-4xl">3</p>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl">Recent bookings</h2>
            <Link href="/admin/bookings" className="text-sm text-brand-accent">View all</Link>
          </div>
          <div className="mt-6 space-y-3">
            {sampleBookings.map((booking) => (
              <div key={booking.id} className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-white/10 p-4">
                <div>
                  <p className="font-semibold">{booking.leadName}</p>
                  <p className="text-sm text-brand-light/60">{booking.roomType} · {booking.status}</p>
                </div>
                <Link href={`/admin/bookings/${booking.id}`} className="text-sm text-brand-accent">Open</Link>
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <h2 className="font-display text-3xl">Priority actions</h2>
          <div className="mt-6 space-y-3 text-sm text-brand-light/70">
            <p>Send deposit reminder to Chris Walters</p>
            <p>Review paired-solo room assignment before next promo push</p>
            <p>Approve Bas3line giveaway reminder email</p>
            <p>Update current pricing phase countdown copy</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
