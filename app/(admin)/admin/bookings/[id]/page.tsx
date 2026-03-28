import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { sampleBookings } from "@/lib/content/site-content";
import { formatCurrency } from "@/lib/utils/currency";

export default async function AdminBookingDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booking = sampleBookings.find((item) => item.id === id);

  if (!booking) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-5xl text-brand-light">{booking.leadName}</h1>
        <p className="mt-3 text-base leading-7 text-brand-light/70">
          Operational core view: summary, financials, quick actions, notes and full history.
        </p>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <h2 className="font-display text-3xl">Booking summary</h2>
          <div className="mt-6 space-y-3 text-sm text-brand-light/75">
            <div className="flex justify-between gap-4"><span>Status</span><span>{booking.status}</span></div>
            <div className="flex justify-between gap-4"><span>Total</span><span>{formatCurrency(booking.totalPence)}</span></div>
            <div className="flex justify-between gap-4"><span>Deposit</span><span>{formatCurrency(booking.depositPence)}</span></div>
            <div className="flex justify-between gap-4"><span>Balance</span><span>{formatCurrency(booking.balancePence)}</span></div>
            <div className="flex justify-between gap-4"><span>Email</span><span>{booking.email}</span></div>
          </div>
        </Card>
        <Card className="border-white/10 bg-white/5 text-brand-light">
          <h2 className="font-display text-3xl">Quick actions</h2>
          <div className="mt-6 space-y-3 text-sm text-brand-light/75">
            <p>Send payment link</p>
            <p>Mark manual payment received</p>
            <p>Assign room partner</p>
            <p>Resend confirmation</p>
            <p>Anonymise PII on request</p>
          </div>
        </Card>
      </div>
      <Card className="border-white/10 bg-white/5 text-brand-light">
        <h2 className="font-display text-3xl">Internal notes</h2>
        <p className="mt-4 text-sm leading-7 text-brand-light/70">{booking.notes}</p>
      </Card>
    </div>
  );
}
