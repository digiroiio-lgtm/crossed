import type { Metadata } from "next";
import { AdminLoginForm } from "./admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Crossed admin panel login.",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg pt-16">
      <div className="w-full max-w-sm mx-auto container-padding">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 14L14 2M2 2L14 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to manage Crossed</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
