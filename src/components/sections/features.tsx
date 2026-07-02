import {
  BookMarked,
  QrCode,
  UserCheck,
  MessageSquare,
  Map,
  Clock,
  Sparkles,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: BookMarked,
    title: "Memory Creation",
    description: "Save encounters privately with location, time, and personal notes.",
  },
  {
    icon: QrCode,
    title: "QR & NFC Connection",
    description: "Connect with someone in person using QR codes or NFC taps—no friction.",
  },
  {
    icon: UserCheck,
    title: "Private Profiles",
    description: "Your profile is only visible to people you choose to share it with.",
  },
  {
    icon: MessageSquare,
    title: "Mutual Messaging",
    description: "Conversations open only when both people opt in. Real consent, always.",
  },
  {
    icon: Map,
    title: "Personal Memory Map",
    description: "Visualize your encounters on a beautiful private map of your journey.",
  },
  {
    icon: Clock,
    title: "Encounter Timeline",
    description: "Your personal timeline of meaningful moments, organized chronologically.",
  },
  {
    icon: Sparkles,
    title: "AI Memory Summaries",
    description: "AI-generated summaries of your encounters to help you remember the moment.",
  },
  {
    icon: Globe,
    title: "Travel & Event Use Cases",
    description: "Built for travelers, nomads, events, conferences, and real-life communities.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-muted-foreground text-lg">
            Crossed is built with privacy at the core—and simplicity at the surface.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="text-primary" size={18} />
              </div>
              <h3 className="font-semibold text-sm mb-1.5">{feature.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
