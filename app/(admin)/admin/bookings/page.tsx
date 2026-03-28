import Link from "next/link";
import { Card } from "@/components/ui/card";
import { sampleBookings } from "@/lib/content/site-content";
import { formatCurrency } from "@/lib/utils/currency";

export default function AdminBookingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-5xl text-brand-light">Bookings</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-brand-light/70">
          This list is designed for fast scanning, manual follow-up and one-click movement into the full booking detail.
        </p>
      </div>
      <div className="space-y-4">
        {sampleBookings.map((booking) => (
          <Card key={booking.id} className="border-white/10 bg-white/5 text-brand-light">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold">{booking.leadName}</p>
                <p className="text-sm text-brand-light/60">
                  {booking.retreatTitle} · {booking.roomType} · {booking.status}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatCurrency(booking.totalPence)}</p>
                <Link href={`/admin/bookings/${booking.id}`} className="text-sm text-brand-accent">
                  Open detail
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
