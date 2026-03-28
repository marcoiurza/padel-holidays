import { NextResponse } from "next/server";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return NextResponse.json({
    bookingId: (await params).id,
    status: "anonymised",
    anonymisedAt: new Date().toISOString()
  });
}
