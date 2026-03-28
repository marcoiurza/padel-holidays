import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminGiveawaysPage() {
  return (
    <AdminPlaceholderPage
      title="Giveaways"
      description="Campaign content, deadline state, reminder capture and outbound Instagram tracking setup."
      bullets={[
        "Create and edit giveaway pages.",
        "Flip closed giveaways to noindex.",
        "Review reminder-capture performance."
      ]}
    />
  );
}
