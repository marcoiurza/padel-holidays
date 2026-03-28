import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminAnalyticsPage() {
  return (
    <AdminPlaceholderPage
      title="Analytics"
      description="Conversion funnel visibility, source attribution and giveaway performance in a founder-readable format."
      bullets={[
        "Booking funnel drop-off by step.",
        "UTM and source breakdown.",
        "Add-on and giveaway conversion rates."
      ]}
    />
  );
}
