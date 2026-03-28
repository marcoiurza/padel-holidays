import type { BookingStatus } from "@/types/domain";

const allowedTransitions: Record<BookingStatus, BookingStatus[]> = {
  enquiry: ["pending", "cancelled", "waitlisted"],
  pending: ["deposit_pending", "cancelled", "abandoned", "waitlisted"],
  deposit_pending: ["deposit_paid", "cancelled", "manual_payment", "abandoned"],
  deposit_paid: ["confirmed", "balance_pending", "cancelled", "manual_payment"],
  confirmed: ["balance_pending", "balance_paid", "cancelled", "refunded"],
  balance_pending: ["balance_paid", "manual_payment", "cancelled", "refunded"],
  balance_paid: ["refunded"],
  cancelled: [],
  refunded: [],
  comp_hosted: [],
  manual_payment: ["confirmed", "balance_pending", "balance_paid"],
  test_booking: ["deposit_pending", "cancelled"],
  waitlisted: ["pending", "cancelled"],
  abandoned: ["pending", "cancelled"]
};

export function canTransitionBookingStatus(from: BookingStatus, to: BookingStatus) {
  return allowedTransitions[from].includes(to);
}
