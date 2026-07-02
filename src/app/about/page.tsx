import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Crossed — a privacy-first encounter memory app built for travelers, nomads, and real-life connections.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto container-padding">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Where paths cross again.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Crossed was born from a simple frustration: you meet someone interesting, feel a
            real connection, and then—nothing. The moment passes, and so does the person.
          </p>
        </div>

        {/* Story */}
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We&apos;ve all been there. On a long train ride, at a conference coffee break, in
            a hostel common room, or in a café in a city you&apos;re only passing through.
            You meet someone who sparks something—a great conversation, a shared interest,
            a moment of real human connection.
          </p>
          <p>
            And then the awkward moment arrives: do you ask for their number? Their Instagram?
            It can feel too forward, too soon, or just not right. So most of the time, you
            don&apos;t. And that person disappears into the world, forever.
          </p>
          <p>
            Crossed is the app we wished existed. A quiet, private way to save the encounter—
            without pressure, without exposure, without asking for anything. Just a small
            digital memory of a moment that mattered.
          </p>

          <div className="not-prose my-10 p-6 rounded-2xl border border-border bg-card">
            <blockquote className="text-lg font-medium text-foreground italic">
              &ldquo;The most meaningful encounters in life are often the ones with strangers.
              We built Crossed to give those moments a chance.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-muted-foreground">— The Crossed Team</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground not-prose mt-10 mb-4">
            What we believe
          </h2>
          <p>
            We believe that real connection should be mutual, private, and low-pressure.
            We believe that your personal encounters are yours to keep—not fodder for
            algorithms or public timelines. We believe that technology can help people
            stay connected to the moments that matter, without the noise of traditional
            social media.
          </p>

          <h2 className="text-2xl font-bold text-foreground not-prose mt-10 mb-4">
            Built for real life
          </h2>
          <p>
            Crossed is designed for people who travel, work remotely, attend events, or
            simply move through life with open eyes. Whether you&apos;re a digital nomad,
            a conference attendee, a solo traveler, or someone who just had a great
            conversation in a coffee shop—Crossed is for you.
          </p>
          <p>
            The mobile app is coming soon. The web platform you&apos;re reading is the
            beginning. We&apos;d love for you to join us.
          </p>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href="/waitlist">
              Join the Waitlist
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
