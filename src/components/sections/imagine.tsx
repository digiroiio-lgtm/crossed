const journey = [
  "You meet someone incredible.",
  "You don't ask for their Instagram.",
  "You don't ask for their phone number.",
  "You simply save the moment.",
  "Months later...",
  "You reconnect.",
  "Because both of you wanted to.",
];

export function ImagineSection() {
  return (
    <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              Imagine
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Not every meaningful encounter should become a memory.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {journey.map((line, index) => (
              <div key={line} className="text-center">
                <p
                  className={`text-base md:text-lg ${
                    index === journey.length - 1
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {line}
                </p>
                {index < journey.length - 1 && (
                  <p className="text-primary/70 leading-none mt-3">↓</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
