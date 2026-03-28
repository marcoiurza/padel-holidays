export function formatCurrency(amountPence: number, currency: string = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(amountPence / 100);
}
