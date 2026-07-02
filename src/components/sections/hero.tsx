"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function CafeSceneIllustration() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <svg
        viewBox="0 0 440 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cafeBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#110a04" />
            <stop offset="100%" stopColor="#080d18" />
          </linearGradient>
          <linearGradient id="warmBeam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cafeTableGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3018" />
            <stop offset="100%" stopColor="#2a1a08" />
          </linearGradient>
          <radialGradient id="connectionAura" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bokehAmber" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cafeVignette" cx="50%" cy="50%" r="70%">
            <stop offset="55%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
          </radialGradient>
          <filter id="cBlur3">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter id="cBlur6">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="cBlur12">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="cBlur20">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <clipPath id="cafeCard">
            <rect width="440" height="520" rx="28" />
          </clipPath>
        </defs>

        <g clipPath="url(#cafeCard)">
          {/* Background */}
          <rect width="440" height="520" fill="url(#cafeBg)" />

          {/* Warm window light beams from top-left */}
          <polygon points="-20,0 170,0 70,520 -120,520" fill="url(#warmBeam)" />
          <polygon points="110,0 175,0 105,520 40,520" fill="url(#warmBeam)" opacity="0.6" />

          {/* Background bokeh circles */}
          <circle cx="370" cy="70" r="50" fill="url(#bokehAmber)" filter="url(#cBlur20)" opacity="0.4" />
          <circle cx="80" cy="440" r="30" fill="#3b82f6" opacity="0.05" filter="url(#cBlur20)" />
          <circle cx="400" cy="400" r="22" fill="#f59e0b" opacity="0.06" filter="url(#cBlur12)" />

          {/* Connection aura between figures */}
          <ellipse cx="220" cy="260" rx="100" ry="140" fill="url(#connectionAura)" filter="url(#cBlur20)" />

          {/* LEFT SILHOUETTE — head + body, facing center */}
          <path
            d="M50,520 Q55,440 66,400 Q76,365 86,335 Q95,308 100,288
               Q105,270 104,252 Q102,232 104,215 Q106,195 114,180
               Q122,162 140,152 Q160,143 177,155 Q193,168 188,192
               Q183,212 175,226 Q168,238 169,256 Q170,278 178,306
               Q190,340 202,378 Q212,412 218,455 L195,520 Z"
            fill="#1c1008"
          />
          {/* Soft face blur — faces not clearly visible */}
          <ellipse cx="152" cy="168" rx="30" ry="36" fill="#110a04" filter="url(#cBlur3)" opacity="0.6" />

          {/* RIGHT SILHOUETTE — mirror, facing center */}
          <path
            d="M390,520 Q385,440 374,400 Q364,365 354,335 Q345,308 340,288
               Q335,270 336,252 Q338,232 336,215 Q334,195 326,180
               Q318,162 300,152 Q280,143 263,155 Q247,168 252,192
               Q257,212 265,226 Q272,238 271,256 Q270,278 262,306
               Q250,340 238,378 Q228,412 222,455 L245,520 Z"
            fill="#1c1008"
          />
          <ellipse cx="288" cy="168" rx="30" ry="36" fill="#110a04" filter="url(#cBlur3)" opacity="0.6" />

          {/* TABLE */}
          <ellipse cx="220" cy="438" rx="108" ry="14" fill="#000000" opacity="0.5" filter="url(#cBlur6)" />
          <ellipse cx="220" cy="430" rx="108" ry="13" fill="url(#cafeTableGrad)" />
          <ellipse cx="220" cy="426" rx="80" ry="6" fill="#5a3c1a" opacity="0.4" />
          <rect x="213" y="442" width="14" height="78" rx="3" fill="#2a1a08" />

          {/* LEFT CUP */}
          <rect x="150" y="408" width="28" height="22" rx="4" fill="#2e1e0a" />
          <ellipse cx="164" cy="408" rx="14" ry="5" fill="#3d2810" />
          <ellipse cx="164" cy="406" rx="10" ry="3.5" fill="#160e04" />
          <path d="M178,413 Q186,413 186,419 Q186,425 178,425" stroke="#2e1e0a" strokeWidth="2.5" fill="none" />
          <path d="M158,402 Q162,394 158,386" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.13" fill="none" strokeLinecap="round" />
          <path d="M165,400 Q169,392 165,384" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.10" fill="none" strokeLinecap="round" />

          {/* RIGHT CUP */}
          <rect x="262" y="408" width="28" height="22" rx="4" fill="#2e1e0a" />
          <ellipse cx="276" cy="408" rx="14" ry="5" fill="#3d2810" />
          <ellipse cx="276" cy="406" rx="10" ry="3.5" fill="#160e04" />
          <path d="M262,413 Q254,413 254,419 Q254,425 262,425" stroke="#2e1e0a" strokeWidth="2.5" fill="none" />
          <path d="M270,402 Q274,394 270,386" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.13" fill="none" strokeLinecap="round" />
          <path d="M277,400 Q281,392 277,384" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.10" fill="none" strokeLinecap="round" />

          {/* Crossed-paths sparkle between the two */}
          <circle cx="220" cy="310" r="2.5" fill="#818cf8" opacity="0.35" filter="url(#cBlur3)" />
          <circle cx="210" cy="290" r="1.5" fill="#818cf8" opacity="0.25" />
          <circle cx="230" cy="298" r="1.8" fill="#818cf8" opacity="0.2" />

          {/* Vignette */}
          <rect width="440" height="520" fill="url(#cafeVignette)" />

          {/* Subtle brand mark */}
          <text
            x="220"
            y="502"
            textAnchor="middle"
            fill="#ffffff"
            fillOpacity="0.12"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
            letterSpacing="4"
            fontWeight="500"
          >
            CROSSED
          </text>
        </g>
      </svg>
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

          {/* Right: Cinematic café scene illustration */}
          <div className="hidden md:flex items-center justify-center">
            <CafeSceneIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
