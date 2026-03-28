import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminRetreatDetailPage() {
  return (
    <AdminPlaceholderPage
      title="Retreat detail"
      description="Single-retreat control surface for content, dates, pricing logic and room inventory."
      bullets={[
        "Pricing phase editor with date-based switches.",
        "Room type and capacity management.",
        "Editable retreat page content and SEO."
      ]}
    />
  );
}
