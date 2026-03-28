import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminMediaPage() {
  return (
    <AdminPlaceholderPage
      title="Media"
      description="Manage image and video assets for retreats, giveaways, reviews and OG imagery."
      bullets={[
        "Hero image metadata and alt text.",
        "Video asset management for Mux-backed clips.",
        "Per-page asset selection."
      ]}
    />
  );
}
