import Stripe from "stripe";
import { isConfigured } from "@/lib/utils/env";

let cachedStripe: Stripe | null = null;

export function getStripeClient() {
  if (!isConfigured("STRIPE_SECRET_KEY")) {
    return null;
  }

  cachedStripe ??= new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil"
  });

  return cachedStripe;
}

export async function createDepositCheckoutSession(input: {
  bookingId: string;
  amountPence: number;
  customerEmail: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const stripe = getStripeClient();

  if (!stripe) {
    return {
      id: `mock_checkout_${input.bookingId}`,
      url: input.successUrl
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: input.customerEmail,
    success_url: input.successUrl,
    cancel_url: input.cancelUrl,
    payment_intent_data: {
      metadata: {
        bookingId: input.bookingId,
        paymentType: "deposit"
      }
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Padel Holidays Retreat Deposit"
          },
          unit_amount: input.amountPence
        }
      }
    ]
  });

  return { id: session.id, url: session.url };
}
