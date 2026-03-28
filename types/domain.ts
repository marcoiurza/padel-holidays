export type CurrencyCode = "GBP";

export type BookingStatus =
  | "enquiry"
  | "pending"
  | "deposit_pending"
  | "deposit_paid"
  | "confirmed"
  | "balance_pending"
  | "balance_paid"
  | "cancelled"
  | "refunded"
  | "comp_hosted"
  | "manual_payment"
  | "test_booking"
  | "waitlisted"
  | "abandoned";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded" | "manual";

export type OccupancyMode = "single" | "double" | "double_shared" | "triple";

export type PricingPhase = {
  id: string;
  name: string;
  startsAt: string;
  endsAt: string;
  pricePence: number;
  depositPercent?: number;
  label: string;
};

export type RoomType = {
  id: string;
  name: string;
  description: string;
  occupancyMax: number;
  basePricePence: number;
  currency: CurrencyCode;
  occupancyOptions: OccupancyMode[];
  image: string;
  perks: string[];
};

export type RetreatDate = {
  id: string;
  startDate: string;
  endDate: string;
  maxCapacity: number;
  availableRooms: number;
  pricingPhases: PricingPhase[];
  roomTypes: RoomType[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Review = {
  id: string;
  name: string;
  body: string;
  rating: number;
  padelLevel: string;
  retreatDateLabel: string;
  image?: string;
};

export type Retreat = {
  id: string;
  slug: string;
  title: string;
  location: string;
  teaser: string;
  description: string;
  status: "draft" | "published" | "archived";
  depositPercent: number;
  balanceDueDays: number;
  startDate: string;
  endDate: string;
  heroImage: string;
  heroVideoPoster: string;
  ogImage: string;
  priceFromPence: number;
  currency: CurrencyCode;
  dates: RetreatDate[];
  faq: FAQItem[];
  included: string[];
  itinerary: Array<{ day: string; title: string; summary: string }>;
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  pricePence: number;
  currency: CurrencyCode;
};

export type Giveaway = {
  id: string;
  slug: string;
  title: string;
  prizeDescription: string;
  deadline: string;
  status: "draft" | "active" | "closed";
  heroImage: string;
  instructions: string[];
  terms: string[];
};

export type BookingSummary = {
  id: string;
  publicId: string;
  leadName: string;
  email: string;
  retreatTitle: string;
  roomType: string;
  occupancy: OccupancyMode;
  status: BookingStatus;
  totalPence: number;
  depositPence: number;
  balancePence: number;
  createdAt: string;
  notes: string;
};

export type SEOFields = {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
};
