import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminReviewsPage() {
  return (
    <AdminPlaceholderPage
      title="Reviews"
      description="Moderate, edit and publish trust-building testimonials to feed core conversion pages."
      bullets={[
        "Approve or reject submissions.",
        "Attach retreat date and padel level.",
        "Push selected reviews to home and retreat pages."
      ]}
    />
  );
}
