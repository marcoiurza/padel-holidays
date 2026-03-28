import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminContentPage() {
  return (
    <AdminPlaceholderPage
      title="Content"
      description="Edit retreat copy, policy pages, FAQ blocks, page SEO and structured content fields."
      bullets={[
        "Page block editing.",
        "SEO titles and descriptions.",
        "FAQ and reassurance copy management."
      ]}
    />
  );
}
