import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/booking/schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = newsletterSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    id: `newsletter_${Date.now()}`,
    email: parsed.data.email
  });
}
