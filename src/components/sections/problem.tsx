import { MapPin, MessageCircle, UserX } from "lucide-react";

const problems = [
  {
    icon: MapPin,
    title: "You meet someone interesting",
    description:
      "Traveling, at a conference, in a café, or at a community event. There's a real connection.",
  },
  {
    icon: UserX,
    title: "Asking feels too much",
    description:
      "Asking for a phone number or Instagram can feel intrusive, awkward, or just too soon.",
  },
  {
    icon: MessageCircle,
    title: "They disappear forever",
    description:
      "Without a low-pressure option, most meaningful encounters are lost to time.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-secondary/30 dark:bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Most meaningful encounters disappear.
          </h2>
          <p className="text-muted-foreground text-lg">
            A conversation on a train. Someone you met at a café. A founder after a
            conference. A traveler on the same journey. Then life moves on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
