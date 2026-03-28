import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminGroupsPage() {
  return (
    <AdminPlaceholderPage
      title="Private groups"
      description="Lead pipeline for corporate, milestone and community trip enquiries."
      bullets={[
        "Status pipeline from new to won/lost.",
        "Assigned owner and follow-up dates.",
        "Proposal sent and outcome tracking."
      ]}
    />
  );
}
