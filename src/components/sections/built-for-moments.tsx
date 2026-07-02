export function BuiltForMomentsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xl text-center">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Built for moments like these
          </p>
          <div className="space-y-3 text-muted-foreground text-base md:text-lg">
            <p>You meet someone while traveling.</p>
            <p>You exchange a smile, not phone numbers.</p>
            <p>You both move on.</p>
          </div>
          <p className="mt-6 text-foreground text-lg md:text-xl font-medium">
            Crossed helps you find your way back—if you both choose.
          </p>
        </div>
      </div>
    </section>
  );
}
