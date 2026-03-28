import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminPaymentsPage() {
  return (
    <AdminPlaceholderPage
      title="Payments"
      description="Stripe-driven payment state, manual overrides, overdue reminders and CSV-ready exports."
      bullets={[
        "Deposit tracking and balance reminders.",
        "Manual payment logging with notes.",
        "Revenue views by retreat."
      ]}
    />
  );
}
