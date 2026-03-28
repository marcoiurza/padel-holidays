import { NextResponse } from "next/server";
import { bookingDraftSchema } from "@/lib/booking/schema";
import { createDepositCheckoutSession } from "@/lib/payments/stripe";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = bookingDraftSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const session = await createDepositCheckoutSession({
    bookingId: `booking_${Date.now()}`,
    amountPence: payload.totals?.depositPence ?? 0,
    customerEmail: parsed.data.primaryGuest?.email ?? "guest@example.com",
    successUrl: `${siteConfig.url}/payment-success`,
    cancelUrl: `${siteConfig.url}/payment-failed`
  });

  return NextResponse.json({
    id: session.id,
    url: session.url
  });
}
