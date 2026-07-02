import type { Metadata } from "next";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import { MapPin, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Be among the first to use Crossed. Join the waitlist and get early access when we launch.",
};

const benefits = [
  {
    icon: MapPin,
    title: "Save encounters privately",
    description: "No phone numbers. No awkward asks.",
  },
  {
    icon: Shield,
    title: "Privacy-first by design",
    description: "Your data is yours. Always.",
  },
  {
    icon: Users,
    title: "Mutual reconnection",
    description: "Connect only when both people choose.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="min-h-screen gradient-bg flex items-center">
      <div className="max-w-6xl mx-auto container-padding w-full pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
              Early Access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Be among the first to{" "}
              <span className="gradient-text">cross paths again.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Crossed is launching soon. Join the waitlist to get early access and help
              shape the product.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{benefit.title}</p>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-6">Join the Waitlist</h2>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
