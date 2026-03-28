import { NextResponse } from "next/server";
import { bookingStepOneSchema } from "@/lib/booking/schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = bookingStepOneSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    holdToken: `hold_${Date.now()}`,
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
  });
}
