import { WaitlistForm } from "@/components/sections/waitlist-form";

export function WaitlistCTASection() {
  return (
    <section className="section-padding gradient-bg">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
              Early Access
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Be among the first to cross paths again.
            </h2>
            <p className="text-muted-foreground text-lg">
              Join the waitlist and get early access when Crossed launches.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-xl">
            <WaitlistForm />
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            No spam. No sharing your email. Just a heads up when we&apos;re ready.
          </p>
        </div>
      </div>
    </section>
  );
}
