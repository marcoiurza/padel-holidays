import type { AddOn, PricingPhase } from "@/types/domain";

export function getActivePricingPhase(phases: PricingPhase[], now = new Date()) {
  return (
    phases.find((phase) => {
      const start = new Date(phase.startsAt);
      const end = new Date(phase.endsAt);
      return now >= start && now <= end;
    }) ?? phases.at(-1)
  );
}

export function calculateBookingTotals(params: {
  basePricePence: number;
  addOns?: Array<Pick<AddOn, "pricePence"> & { quantity?: number }>;
  depositPercent: number;
  discountPercent?: number;
  priceOverridePence?: number;
}) {
  const addOnTotal =
    params.addOns?.reduce((sum, addOn) => sum + addOn.pricePence * (addOn.quantity ?? 1), 0) ?? 0;
  const subtotal = (params.priceOverridePence ?? params.basePricePence) + addOnTotal;
  const total = Math.round(subtotal * (1 - (params.discountPercent ?? 0) / 100));
  const deposit = Math.round(total * (params.depositPercent / 100));

  return {
    subtotalPence: subtotal,
    addOnTotalPence: addOnTotal,
    totalPence: total,
    depositPence: deposit,
    balancePence: total - deposit
  };
}

export function computeSupplementaryPayment(previousTotalPence: number, newTotalPence: number) {
  return Math.max(0, newTotalPence - previousTotalPence);
}
