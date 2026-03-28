import { describe, expect, it } from "vitest";
import { calculateBookingTotals, computeSupplementaryPayment, getActivePricingPhase } from "@/lib/booking/calculations";

describe("booking calculations", () => {
  it("calculates deposit and balance from base price and add-ons", () => {
    const totals = calculateBookingTotals({
      basePricePence: 245000,
      addOns: [{ pricePence: 18000 }, { pricePence: 6000 }],
      depositPercent: 30
    });

    expect(totals.totalPence).toBe(269000);
    expect(totals.depositPence).toBe(80700);
    expect(totals.balancePence).toBe(188300);
  });

  it("computes supplementary payment delta safely", () => {
    expect(computeSupplementaryPayment(100000, 124000)).toBe(24000);
    expect(computeSupplementaryPayment(124000, 100000)).toBe(0);
  });

  it("returns the active pricing phase for a given date", () => {
    const phase = getActivePricingPhase(
      [
        {
          id: "early",
          name: "Early",
          label: "Best value",
          startsAt: "2026-01-01T00:00:00.000Z",
          endsAt: "2026-06-30T23:59:59.000Z",
          pricePence: 100
        },
        {
          id: "full",
          name: "Full",
          label: "Late",
          startsAt: "2026-07-01T00:00:00.000Z",
          endsAt: "2026-12-30T23:59:59.000Z",
          pricePence: 200
        }
      ],
      new Date("2026-08-01T00:00:00.000Z")
    );

    expect(phase?.id).toBe("full");
  });
});
