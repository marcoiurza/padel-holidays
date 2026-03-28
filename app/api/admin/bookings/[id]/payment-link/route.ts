import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    bookingId: id,
    paymentUrl: `${siteConfig.url}/payment-success?booking=${id}`
  });
}
