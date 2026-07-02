import type { Metadata } from "next";
import { BookMarked, Map, Radio, User, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Crossed web dashboard — coming soon.",
};

const sections = [
  { icon: BookMarked, title: "Memories", description: "Your saved encounters will appear here." },
  { icon: Map,        title: "Memory Map", description: "A visual map of everywhere your paths have crossed." },
  { icon: Radio,      title: "Waves", description: "Reconnection requests you've sent and received." },
  { icon: User,       title: "Profile", description: "Your private Crossed profile." },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 gradient-bg">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground">
            The full web dashboard is coming soon. The mobile app will be your primary experience.
          </p>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8 mb-10 flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Smartphone className="text-primary" size={28} />
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">Mobile app coming soon</h2>
            <p className="text-muted-foreground text-sm">
              Crossed is being built as a mobile-first app. The full experience—Memories,
              QR connections, Waves, and your personal map—will be in your pocket.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((section, i) => (
            <div key={i} className="p-5 rounded-2xl border border-border bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center rounded-2xl">
                <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-full bg-background">
                  Coming soon
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <section.icon className="text-primary" size={18} />
              </div>
              <h3 className="font-medium text-sm mb-0.5">{section.title}</h3>
              <p className="text-muted-foreground text-xs">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
