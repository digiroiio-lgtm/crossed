import type { Metadata } from "next";
import { AdminDashboardClient } from "./admin-dashboard-client";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Crossed admin dashboard.",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}
