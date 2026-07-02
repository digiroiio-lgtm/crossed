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

          {/* Apple Wallet-style Memory card */}
          <div className="relative">
            {/* Stacked cards behind */}
            <div className="absolute inset-0 translate-y-3 translate-x-2 rounded-3xl bg-gradient-to-br from-indigo-800/30 to-slate-900/30 border border-white/5" style={{ filter: "blur(1px)" }} />
            <div className="absolute inset-0 translate-y-6 translate-x-4 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-slate-900/20 border border-white/5" style={{ filter: "blur(1px)" }} />

            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/40">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#1a1d3a] to-slate-900" />
              {/* Sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

              <div className="relative p-8">
                {/* Card header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50">
                      Memory
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-medium border border-emerald-500/20">
                    Private
                  </span>
                </div>

                {/* Main content */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-light tracking-tight mb-1">
                    Café A Brasileira
                  </h3>
                  <p className="text-white/40 text-sm">Lisbon, Portugal · June 2024</p>
                </div>

                {/* Memo placeholder lines */}
                <div className="space-y-2.5 mb-8">
                  <div className="h-1.5 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.07)" }} />
                  <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                  <div className="h-1.5 rounded-full w-3/5" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>

                {/* Card footer */}
                <div className="pt-5 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base">📍</span>
                    <span className="text-white/35 text-xs">Only you can see this</span>
                  </div>
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-white/8 border border-white/10" style={{ background: "rgba(255,255,255,0.06)" }} />
                    <div className="w-6 h-6 rounded-full border border-white/10 -ml-2" style={{ background: "rgba(255,255,255,0.04)" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
              No phone number needed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
