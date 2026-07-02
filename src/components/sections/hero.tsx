"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function HeroPhoto() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src="https://github.com/user-attachments/assets/389e64b6-23b3-4aed-a7e0-05e9c2c61ffa"
        alt="Two people sharing a meaningful moment at a café"
        width={1365}
        height={911}
        className="w-full h-auto object-cover"
        priority
      />
      {/* subtle vignette overlay */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Decorative crossed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-1/4 left-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="1200" y2="800" stroke="#3b82f6" strokeWidth="1" />
          <line x1="1200" y1="0" x2="0" y2="800" stroke="#6366f1" strokeWidth="1" />
          <line x1="0" y1="200" x2="1200" y2="600" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="1200" y1="200" x2="0" y2="600" stroke="#6366f1" strokeWidth="0.5" />
          <circle cx="600" cy="400" r="200" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto container-padding w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up">
          {/* Left: Text content */}
          <div className="text-center md:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Sparkles size={14} />
              <span>Where paths cross again.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Don&apos;t lose{" "}
              <span className="gradient-text">meaningful</span>
              {" "}encounters.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Crossed helps you save the people you meet along the way—and reconnect
              when the time feels right.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                <Link href="/waitlist">
                  Join the Waitlist
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>

            {/* Social proof */}
            <p className="mt-10 text-xs text-muted-foreground">
              Private by default · No phone numbers · Mutual consent
            </p>
          </div>

          {/* Right: Hero photo */}
          <div className="hidden md:flex items-center justify-center">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
