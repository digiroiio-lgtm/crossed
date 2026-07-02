import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookMarked, QrCode, UserCheck, MessageSquare,
  Map, Sparkles, Shield, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Discover the features that make Crossed the most private and thoughtful encounter memory app.",
};

const featureSections = [
  {
    icon: BookMarked,
    title: "Memory Creation",
    description:
      "Save meaningful encounters in seconds. Add where you met, when it happened, and why it mattered—all completely private to you.",
    highlights: [
      "Location-tagged memories",
      "Date and time recording",
      "Personal notes and context",
      "Completely private by default",
    ],
  },
  {
    icon: QrCode,
    title: "QR & NFC Connection",
    description:
      "Connect with someone in person using QR codes or NFC taps. No app-to-app searching, no number sharing—just a tap.",
    highlights: [
      "Instant QR code sharing",
      "NFC tap connection",
      "No contact info required",
      "Works offline",
    ],
  },
  {
    icon: UserCheck,
    title: "Private Profiles",
    description:
      "Your profile is only visible to people you&apos;ve connected with. No public search, no follower counts, no algorithmic exposure.",
    highlights: [
      "No public search",
      "No follower counts",
      "Controlled visibility",
      "You decide what's shown",
    ],
  },
  {
    icon: MessageSquare,
    title: "Mutual Messaging",
    description:
      "Messaging only opens when both people choose to reconnect. Real consent, always—before any conversation begins.",
    highlights: [
      "Mutual opt-in required",
      "Private conversations",
      "No unsolicited messages",
      "Revocable at any time",
    ],
  },
  {
    icon: Map,
    title: "Personal Memory Map",
    description:
      "Visualize your encounters on a beautiful private map. See the places and people that have crossed your path.",
    highlights: [
      "Interactive map view",
      "Geographic clustering",
      "Timeline overlays",
      "Export and share",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Memory Summaries",
    description:
      "AI-generated summaries help you remember the details of an encounter—without the clutter of long notes.",
    highlights: [
      "Automatic summaries",
      "Key details extracted",
      "Contextual prompts",
      "Memory preservation",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            Features
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Crossed is built with privacy at the core and simplicity at the surface.
            Every feature is intentional.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featureSections.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {feature.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Privacy callout */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center mb-12">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="text-primary" size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Privacy is not a feature. It&apos;s the foundation.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every feature in Crossed was designed with privacy as the starting point, not an afterthought.
            Your encounters are yours. Your connections are private. Your data is not for sale.
          </p>
          <Button asChild>
            <Link href="/privacy">Read Our Privacy Policy <ArrowRight size={14} className="ml-2" /></Link>
          </Button>
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
