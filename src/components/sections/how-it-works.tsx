const steps = [
  {
    number: "01",
    title: "Create a Memory",
    description:
      "Save where you met, when it happened, and why it mattered. Takes less than 30 seconds.",
    detail: "Add a note, a location, and a moment. That's it.",
  },
  {
    number: "02",
    title: "Send a Wave",
    description:
      "When the time feels right, send a private reconnection request. No pressure, no rush.",
    detail: "A Wave is a gentle nudge—private, discreet, and mutual.",
  },
  {
    number: "03",
    title: "Reconnect Mutually",
    description:
      "Messaging opens only when both people choose. Real connection, real consent.",
    detail: "Both sides have to say yes. That's what makes it meaningful.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30 dark:bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Meet. Remember. Reconnect.
          </h2>
          <p className="text-muted-foreground text-lg">
            Crossed is designed to be as simple and low-pressure as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0 -translate-x-1/2" />
              )}

              <div className="relative bg-background rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors h-full">
                <div className="text-4xl font-bold text-primary/20 mb-4 font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-muted-foreground/70 italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
