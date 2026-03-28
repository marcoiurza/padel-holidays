import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminSettingsPage() {
  return (
    <AdminPlaceholderPage
      title="Settings"
      description="Platform-wide configuration, admin access, support channels and fallback operational rules."
      bullets={[
        "Admin allowlist and access controls.",
        "Support phone and operational defaults.",
        "Environment and integration status."
      ]}
    />
  );
}
