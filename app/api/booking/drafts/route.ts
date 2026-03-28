import { NextResponse } from "next/server";
import { bookingDraftSchema } from "@/lib/booking/schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = bookingDraftSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    id: `draft_${Date.now()}`,
    status: "saved",
    savedAt: new Date().toISOString()
  });
}
