import { NextResponse } from "next/server";
import { privateGroupLeadSchema } from "@/lib/booking/schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = privateGroupLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    id: `group_${Date.now()}`,
    status: "new"
  });
}
