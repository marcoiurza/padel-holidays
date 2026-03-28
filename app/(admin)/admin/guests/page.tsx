import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminGuestsPage() {
  return (
    <AdminPlaceholderPage
      title="Guests"
      description="Guest-level operational data for dietary needs, WhatsApp outreach, padel levels and travel notes."
      bullets={[
        "Filter by retreat and padel level.",
        "View dietary requirements at a glance.",
        "Jump to WhatsApp from the dashboard."
      ]}
    />
  );
}
