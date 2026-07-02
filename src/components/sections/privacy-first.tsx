import { EyeOff, TrendingDown, Phone, Search, Users, Eye } from "lucide-react";

const privacyPoints = [
  {
    icon: TrendingDown,
    title: "No algorithmic feed",
    description: "No infinite scroll designed to keep you addicted.",
  },
  {
    icon: Phone,
    title: "No contact info exposure",
    description: "Your phone number and social handles stay completely private.",
  },
  {
    icon: Search,
    title: "No open public search",
    description: "You can't be found by strangers unless you both connect.",
  },
  {
    icon: Users,
    title: "No public follower counts",
    description: "Your connections are yours. Not a social signal.",
  },
  {
    icon: Users,
    title: "Mutual consent before messaging",
    description: "Both people must choose to connect before any message is sent.",
  },
  {
    icon: Eye,
    title: "User-controlled visibility",
    description: "You decide who sees what, when, and how much.",
  },
];

export function PrivacySection() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">Your data. Your control.</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Phone number visible to others", value: false },
                  { label: "Profile publicly searchable", value: false },
                  { label: "Follower counts shown", value: false },
                  { label: "Algorithmic content feed", value: false },
                  { label: "Mutual consent required", value: true },
                  { label: "End-to-end private memories", value: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span
                      className={
                        item.value
                          ? "text-green-600 dark:text-green-400 font-medium text-xs px-2 py-0.5 rounded-full bg-green-500/10"
                          : "text-red-500 font-medium text-xs px-2 py-0.5 rounded-full bg-red-500/10"
                      }
                    >
                      {item.value ? "✓ Yes" : "✗ No"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
              <EyeOff size={12} />
              Privacy First
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              No phone numbers.
              <br />
              No social pressure.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Crossed is built around a fundamental belief: real connection should never
              require exposing yourself publicly. Every feature is designed with your
              privacy as the default.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {privacyPoints.slice(0, 4).map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <point.icon className="text-primary" size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{point.title}</p>
                    <p className="text-xs text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
