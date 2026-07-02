import { Plane, Laptop, Users, Coffee, Calendar, Palette, Briefcase, Heart } from "lucide-react";

const useCases = [
  {
    icon: Plane,
    title: "Travelers",
    description: "Remember the person you met on the train, at the hostel, or on the trail.",
    tag: "Travel",
  },
  {
    icon: Laptop,
    title: "Digital Nomads",
    description: "Build a network of real connections as you move from city to city.",
    tag: "Remote Work",
  },
  {
    icon: Users,
    title: "Conferences",
    description: "Save every meaningful conversation without fumbling for contact details.",
    tag: "Networking",
  },
  {
    icon: Coffee,
    title: "Cafés",
    description: "The person reading the same book in the corner—you can remember them now.",
    tag: "Everyday",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Concerts, festivals, workshops, and more—keep the connections alive.",
    tag: "Events",
  },
  {
    icon: Palette,
    title: "Creators",
    description: "Collaborators and creative connections are too valuable to forget.",
    tag: "Creative",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "A privacy-first alternative to aggressive networking apps.",
    tag: "Professional",
  },
  {
    icon: Heart,
    title: "Friends",
    description: "That instant connection with someone you just met—don't let it slip.",
    tag: "Social",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-padding bg-secondary/30 dark:bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for real life.
          </h2>
          <p className="text-muted-foreground text-lg">
            Travelers. Creators. Professionals. Friends.{" "}
            <span className="text-foreground font-medium">
              Crossed is made for the people you unexpectedly meet—and never wanted to lose.
            </span>
          </p>
          <p className="text-foreground text-base md:text-lg font-medium mt-4">
            If you&apos;ve ever met someone you wished you hadn&apos;t lost, Crossed is for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <uc.icon className="text-primary" size={18} />
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  {uc.tag}
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-1.5">{uc.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
