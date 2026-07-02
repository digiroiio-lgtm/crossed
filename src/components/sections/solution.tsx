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

          {/* Memory Card — Apple Wallet inspired */}
          <div className="relative">
            {/* Depth cards stacked behind — subtle offset */}
            <div
              className="absolute inset-0 rounded-[28px]"
              style={{
                transform: "translate(6px, 10px) rotate(2.5deg)",
                background: "linear-gradient(135deg, #1e2240 0%, #111827 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: 0.55,
              }}
            />
            <div
              className="absolute inset-0 rounded-[28px]"
              style={{
                transform: "translate(3px, 5px) rotate(1.2deg)",
                background: "linear-gradient(135deg, #252a4a 0%, #161c2e 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                opacity: 0.7,
              }}
            />

            {/* ── MAIN CARD ── */}
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                background: "linear-gradient(148deg, #1e2448 0%, #161c38 42%, #0f1428 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 32px 72px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.09)",
              }}
            >
              {/* Top sheen — glass highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)",
                  borderRadius: "28px 28px 0 0",
                }}
              />

              {/* Memory photograph area — abstract blurred gradient */}
              <div
                className="w-full"
                style={{ height: "136px", position: "relative", overflow: "hidden" }}
              >
                {/* Base gradient: warm golden hour suggestion */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #3d2a14 0%, #4a3420 30%, #2a1e40 70%, #1a2038 100%)",
                  }}
                />
                {/* Warm light orb — golden hour window */}
                <div
                  className="absolute"
                  style={{
                    top: "-20px",
                    left: "-10px",
                    width: "180px",
                    height: "160px",
                    background:
                      "radial-gradient(ellipse, rgba(210,140,50,0.32) 0%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
                {/* Cool counterpoint — right side */}
                <div
                  className="absolute"
                  style={{
                    bottom: "-20px",
                    right: "-10px",
                    width: "160px",
                    height: "140px",
                    background:
                      "radial-gradient(ellipse, rgba(80,90,180,0.25) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                {/* Faint silhouette suggestion */}
                <div
                  className="absolute"
                  style={{
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "60px",
                    background:
                      "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
                  }}
                />
                {/* Bottom gradient fade into card body */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "48px",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(16,18,42,0.95))",
                  }}
                />
              </div>

              {/* Card body */}
              <div className="px-7 pb-7 pt-2">

                {/* Type label row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    {/* Memory dot */}
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "rgba(148,163,250,0.7)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        color: "rgba(255,255,255,0.38)",
                        textTransform: "uppercase",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      Memory
                    </span>
                  </div>
                  {/* Private badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 10px",
                      borderRadius: "99px",
                      background: "rgba(52,211,153,0.10)",
                      border: "1px solid rgba(52,211,153,0.18)",
                    }}
                  >
                    {/* Lock icon */}
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
                      <rect x="1.5" y="4.5" width="6" height="5" rx="1.5" stroke="rgba(52,211,153,0.9)" strokeWidth="1.2" />
                      <path d="M3 4.5V3a1.5 1.5 0 0 1 3 0v1.5" stroke="rgba(52,211,153,0.9)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "rgba(52,211,153,0.9)",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      Private
                    </span>
                  </div>
                </div>

                {/* Location name */}
                <div className="mb-1">
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      color: "rgba(255,255,255,0.92)",
                      lineHeight: "1.2",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    Café A Brasileira
                  </h3>
                </div>

                {/* Location + date */}
                <div className="flex items-center gap-2 mb-6">
                  {/* Map pin icon */}
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="none" style={{ opacity: 0.35, flexShrink: 0 }}>
                    <path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                      fill="rgba(255,255,255,0.7)" />
                  </svg>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.38)",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Lisbon, Portugal · June 2026
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="mb-5"
                  style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
                />

                {/* Note lines — redacted memory text */}
                <div className="space-y-2.5 mb-6">
                  {[0.72, 1.0, 0.56].map((w, i) => (
                    <div
                      key={i}
                      style={{
                        height: "6px",
                        borderRadius: "99px",
                        width: `${w * 100}%`,
                        background: "rgba(255,255,255,0.06)",
                      }}
                    />
                  ))}
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.22)",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Only you can see this
                  </span>
                  {/* Avatar circles suggestion */}
                  <div className="flex items-center">
                    <div
                      style={{
                        width: "22px", height: "22px", borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(99,102,241,0.15))",
                        border: "1.5px solid rgba(255,255,255,0.1)",
                      }}
                    />
                    <div
                      style={{
                        width: "22px", height: "22px", borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(99,102,241,0.15))",
                        border: "1.5px solid rgba(255,255,255,0.1)",
                        marginLeft: "-7px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
