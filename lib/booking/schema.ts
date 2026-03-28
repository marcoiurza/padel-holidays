import { z } from "zod";

export const bookingStepOneSchema = z.object({
  retreatDateId: z.string().min(1),
  roomTypeId: z.string().min(1),
  occupancy: z.enum(["single", "double", "double_shared", "triple"])
});

export const guestSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  whatsapp: z.string().min(8),
  padelLevel: z.string().min(2),
  dietaryRequirements: z.string().optional().default(""),
  arrivalDate: z.string().optional().default(""),
  departureDate: z.string().optional().default(""),
  notes: z.string().optional().default("")
});

export const bookingStepTwoSchema = z.object({
  primaryGuest: guestSchema,
  secondGuest: guestSchema.partial().optional(),
  sharingPreference: z.enum(["booking_with_friend", "pair_me_with_solo", "not_applicable"])
});

export const bookingStepThreeSchema = z.object({
  travelNotes: z.string().min(2),
  dietarySummary: z.string().optional().default(""),
  arrivalInfo: z.string().optional().default("")
});

export const bookingStepFourSchema = z.object({
  addOnIds: z.array(z.string()).default([]),
  couponCode: z.string().optional().default("")
});

export const bookingStepFiveSchema = z.object({
  paymentOption: z.enum(["deposit", "full"]),
  marketingConsent: z.boolean(),
  termsAccepted: z.literal(true)
});

export const bookingDraftSchema = bookingStepOneSchema
  .merge(bookingStepTwoSchema)
  .merge(bookingStepThreeSchema)
  .merge(bookingStepFourSchema)
  .merge(bookingStepFiveSchema.partial())
  .partial();

export const privateGroupLeadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().min(8),
  preferredDates: z.string().min(3),
  groupSize: z.coerce.number().min(4).max(60),
  destination: z.string().min(2),
  retreatType: z.enum(["corporate", "community", "milestone", "other"]),
  goals: z.string().min(10),
  budgetBand: z.enum(["5k-10k", "10k-20k", "20k-40k", "40k+"]),
  notes: z.string().optional().default("")
});

export const giveawayCaptureSchema = z.object({
  email: z.string().email()
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().min(2)
});
