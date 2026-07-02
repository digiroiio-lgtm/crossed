import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg pt-16">
      <div className="text-center max-w-sm mx-auto container-padding">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 14L14 2M2 2L14 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Admin Panel</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Admin functionality is coming soon. This area will require authentication.
        </p>
        <Link
          href="/"
          className="text-sm text-primary hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
