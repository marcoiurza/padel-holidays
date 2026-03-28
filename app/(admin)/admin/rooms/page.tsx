import { AdminPlaceholderPage } from "@/components/admin/admin-page";

export default function AdminRoomsPage() {
  return (
    <AdminPlaceholderPage
      title="Rooms"
      description="Explicit room inventory, occupancy mapping and paired-solo management for Watamu and future retreats."
      bullets={[
        "Room assignment map.",
        "Double occupancy pairing workflow.",
        "Waitlist and overbooking prevention."
      ]}
    />
  );
}
