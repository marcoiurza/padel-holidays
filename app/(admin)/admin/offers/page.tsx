import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminOffersPage() {
  return (
    <AdminPlaceholderPage
      title="Offers"
      description="Discount, affiliate, creator and hosted-trip codes with expiry and cap management."
      bullets={[
        "Fixed amount or percentage discounts.",
        "Usage caps and validity windows.",
        "Affiliate attribution support."
      ]}
    />
  );
}
