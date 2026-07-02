import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Plane, Laptop, Users, Coffee, Calendar,
  Palette, Briefcase, Heart, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Crossed is built for travelers, digital nomads, conferences, events, and anyone who makes meaningful connections in real life.",
};

const useCases = [
  {
    icon: Plane,
    title: "Travelers",
    tag: "Travel",
    description:
      "You share a six-hour train ride with someone fascinating. You explore the same city for a week. These encounters matter—and now you can keep them.",
    scenarios: [
      "Train and bus journeys",
      "Hostel connections",
      "Tour groups",
      "Local encounters",
    ],
  },
  {
    icon: Laptop,
    title: "Digital Nomads",
    tag: "Remote Work",
    description:
      "City-hopping means meeting incredible people who vanish when you move on. Build a real network across your journey without social media noise.",
    scenarios: [
      "Coworking spaces",
      "Nomad communities",
      "City meetups",
      "Long-term stays",
    ],
  },
  {
    icon: Users,
    title: "Conferences",
    tag: "Networking",
    description:
      "The best conversations at conferences happen in the hallways and over coffee—not on stage. Crossed helps you capture those moments without fumbling for business cards.",
    scenarios: [
      "Hallway conversations",
      "Workshop connections",
      "After-parties",
      "Speaker interactions",
    ],
  },
  {
    icon: Coffee,
    title: "Cafés",
    tag: "Everyday",
    description:
      "That person reading the same book. The one you chatted with while waiting for your order. Everyday encounters have value—Crossed gives them a home.",
    scenarios: [
      "Coffee shop regulars",
      "Reading groups",
      "Study sessions",
      "Chance meetings",
    ],
  },
  {
    icon: Calendar,
    title: "Events",
    tag: "Events",
    description:
      "Concerts, festivals, workshops, art openings—events are magnetic for connection. Don't let those connections disappear when the event ends.",
    scenarios: [
      "Music festivals",
      "Art openings",
      "Sports events",
      "Community workshops",
    ],
  },
  {
    icon: Palette,
    title: "Creators",
    tag: "Creative",
    description:
      "Collaborators, inspirations, creative connections—your creative network is too valuable to lose to a forgotten Instagram handle.",
    scenarios: [
      "Artist meetups",
      "Creative communities",
      "Collaboration sessions",
      "Inspiration moments",
    ],
  },
  {
    icon: Briefcase,
    title: "Professionals",
    tag: "Professional",
    description:
      "A privacy-first alternative to aggressive networking apps. Build a real professional network based on actual encounters, not cold outreach.",
    scenarios: [
      "Industry events",
      "Client meetings",
      "Team offsites",
      "Professional communities",
    ],
  },
  {
    icon: Heart,
    title: "Friends",
    tag: "Social",
    description:
      "That instant connection with someone you just met. The stranger who became a friend over one evening. Don't let those connections slip.",
    scenarios: [
      "Social gatherings",
      "Shared experiences",
      "Spontaneous connections",
      "Group trips",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            Use Cases
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Built for{" "}
            <span className="gradient-text">real life.</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Wherever you meet people, Crossed gives those encounters a chance to last.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {useCases.map((uc, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <uc.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground mb-1 inline-block">
                      {uc.tag}
                    </span>
                    <h2 className="text-lg font-semibold">{uc.title}</h2>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {uc.description}
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {uc.scenarios.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link href="/waitlist">Join the Waitlist <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
