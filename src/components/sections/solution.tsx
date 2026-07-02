import { Shield, Zap, Heart } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Create a Memory in seconds",
    description: "No phone numbers required. Save the moment quietly and privately.",
  },
  {
    icon: Shield,
    title: "No social pressure",
    description: "No awkward asks. No public profiles. Just a private memory of the moment.",
  },
  {
    icon: Heart,
    title: "Reconnect only when both choose",
    description: "Messaging opens only when both people decide the time is right.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A private memory, waiting for the right moment.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Crossed lets you create a private Memory in seconds. There&apos;s no pressure,
              no exposure, and no awkward ask. Reconnect only when both people choose.
            </p>

            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <pillar.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                  M
                </div>
                <div>
                  <p className="font-medium text-sm">Memory saved</p>
                  <p className="text-muted-foreground text-xs">Café Lisbon · 2 mins ago</p>
                </div>
                <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-medium">
                  Private
                </span>
              </div>

              <div className="space-y-3">
                <div className="h-3 bg-muted rounded-full w-3/4" />
                <div className="h-3 bg-muted rounded-full w-full" />
                <div className="h-3 bg-muted rounded-full w-2/3" />
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>📍 Café A Brasileira, Lisbon</span>
                <span>🔒 Only you can see this</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
              No phone number needed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
