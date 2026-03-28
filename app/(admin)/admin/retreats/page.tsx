import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminRetreatsPage() {
  return (
    <AdminPlaceholderPage
      title="Retreats"
      description="Manage launch and future retreat inventory, pricing phases, SEO fields and retreat status without touching code."
      bullets={[
        "Create and archive retreats.",
        "Set pricing phases and balance due rules.",
        "Edit SEO metadata, FAQ and gallery assets."
      ]}
    />
  );
}
