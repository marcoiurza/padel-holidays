import { NextResponse } from "next/server";
import { giveawayCaptureSchema } from "@/lib/booking/schema";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const payload = await request.json();
  const parsed = giveawayCaptureSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    giveawaySlug: (await params).slug,
    email: parsed.data.email
  });
}
