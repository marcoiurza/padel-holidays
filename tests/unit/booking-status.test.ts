import { describe, expect, it } from "vitest";
import { canTransitionBookingStatus } from "@/lib/booking/status";

describe("booking status transitions", () => {
  it("allows valid deposit lifecycle transitions", () => {
    expect(canTransitionBookingStatus("pending", "deposit_pending")).toBe(true);
    expect(canTransitionBookingStatus("deposit_pending", "deposit_paid")).toBe(true);
    expect(canTransitionBookingStatus("deposit_paid", "confirmed")).toBe(true);
  });

  it("blocks invalid backwards transitions", () => {
    expect(canTransitionBookingStatus("balance_paid", "deposit_pending")).toBe(false);
    expect(canTransitionBookingStatus("cancelled", "pending")).toBe(false);
  });
});
