"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function CafeSceneIllustration() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      <svg
        viewBox="0 0 440 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-hidden="true"
        role="img"
      >
        <defs>
          {/* ── Backgrounds ── */}
          <linearGradient id="h-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1a1109" />
            <stop offset="55%"  stopColor="#160e07" />
            <stop offset="100%" stopColor="#0c0804" />
          </linearGradient>
          <linearGradient id="h-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1e1409" />
            <stop offset="100%" stopColor="#0c0804" />
          </linearGradient>
          {/* Window exterior sky */}
          <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#c9884a" />
            <stop offset="60%"  stopColor="#e8a54e" />
            <stop offset="100%" stopColor="#f0b86a" />
          </linearGradient>
          {/* Golden hour window shaft */}
          <linearGradient id="h-shaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#f0a030" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#f0a030" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="h-shaft2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#e8941e" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#e8941e" stopOpacity="0" />
          </linearGradient>
          {/* Table */}
          <linearGradient id="h-table" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#5a3c1a" />
            <stop offset="100%" stopColor="#2c1c0a" />
          </linearGradient>
          <linearGradient id="h-tableSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          {/* Pendant light glow */}
          <radialGradient id="h-pendantGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f5c06a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f5c06a" stopOpacity="0" />
          </radialGradient>
          {/* Ambient fill between figures */}
          <radialGradient id="h-ambient" cx="50%" cy="45%" r="40%">
            <stop offset="0%"   stopColor="#c87a2a" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#c87a2a" stopOpacity="0" />
          </radialGradient>
          {/* Floor reflection */}
          <radialGradient id="h-floor-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#c87a2a" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c87a2a" stopOpacity="0" />
          </radialGradient>
          {/* Vignette */}
          <radialGradient id="h-vignette" cx="50%" cy="48%" r="62%">
            <stop offset="0%"   stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.82" />
          </radialGradient>
          {/* Cup ceramic */}
          <linearGradient id="h-cup" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#e8dcc8" />
            <stop offset="100%" stopColor="#c4b49a" />
          </linearGradient>
          {/* Left silhouette (warm backlit edge) */}
          <linearGradient id="h-silL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0a0603" />
            <stop offset="100%" stopColor="#221408" />
          </linearGradient>
          {/* Right silhouette */}
          <linearGradient id="h-silR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#0a0603" />
            <stop offset="100%" stopColor="#1e1208" />
          </linearGradient>

          {/* ── Filters ── */}
          <filter id="h-blur4" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="h-blur8" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="h-blur18" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="h-blur32" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="32" />
          </filter>
          <filter id="h-softShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
          </filter>

          <clipPath id="h-frame">
            <rect width="440" height="560" rx="32" />
          </clipPath>
        </defs>

        <g clipPath="url(#h-frame)">

          {/* ══ LAYER 1 — deep background wall ══ */}
          <rect width="440" height="560" fill="url(#h-wall)" />

          {/* ══ LAYER 2 — floor plane (lower third) ══ */}
          <path d="M0,400 L440,400 L440,560 L0,560 Z" fill="url(#h-floor)" />
          {/* Subtle floor tile lines */}
          <line x1="0" y1="430" x2="440" y2="430" stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
          <line x1="0" y1="470" x2="440" y2="470" stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
          <line x1="0" y1="510" x2="440" y2="510" stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
          <line x1="110" y1="400" x2="60" y2="560" stroke="#ffffff" strokeOpacity="0.012" strokeWidth="1" />
          <line x1="220" y1="400" x2="220" y2="560" stroke="#ffffff" strokeOpacity="0.012" strokeWidth="1" />
          <line x1="330" y1="400" x2="380" y2="560" stroke="#ffffff" strokeOpacity="0.012" strokeWidth="1" />

          {/* ══ LAYER 3 — wainscoting / dado rail ══ */}
          {/* Chair rail moulding */}
          <rect x="0" y="396" width="440" height="4" fill="#2a1c0c" opacity="0.8" />
          <rect x="0" y="394" width="440" height="2" fill="#5c3c18" opacity="0.35" />
          {/* Wall panelling below rail */}
          <rect x="0" y="398" width="440" height="4" fill="#1a1008" opacity="0.6" />
          {/* Vertical panel dividers */}
          {[55, 165, 275, 385].map((x) => (
            <line key={x} x1={x} y1="400" x2={x} y2="560" stroke="#2a1c0c" strokeOpacity="0.5" strokeWidth="1" />
          ))}

          {/* ══ LAYER 4 — window, left side ══ */}
          {/* Window exterior (golden hour sky) */}
          <rect x="28" y="56" width="118" height="180" rx="4" fill="url(#h-sky)" opacity="0.9" />
          {/* Window frame outer */}
          <rect x="24" y="52" width="126" height="188" rx="6" fill="none" stroke="#3d2810" strokeWidth="4" />
          {/* Window arch suggestion (top rounded) */}
          <path d="M28,110 Q28,56 87,56 Q146,56 146,110" fill="#c87a30" opacity="0.12" />
          {/* Cross muntins */}
          <line x1="87" y1="56"  x2="87"  y2="236" stroke="#3d2810" strokeWidth="3" />
          <line x1="28" y1="148" x2="146" y2="148" stroke="#3d2810" strokeWidth="3" />
          {/* Inner window sill */}
          <rect x="20" y="238" width="134" height="8" rx="2" fill="#2a1808" />
          {/* Window reveal depth */}
          <rect x="20" y="52" width="6" height="194" fill="#1a1008" opacity="0.6" />
          <rect x="148" y="52" width="6" height="194" fill="#1a1008" opacity="0.4" />

          {/* ══ LAYER 5 — golden hour window light shaft ══ */}
          <polygon
            points="24,52 154,52 370,560 -60,560"
            fill="url(#h-shaft)"
          />
          <polygon
            points="87,52 154,52 280,560 80,560"
            fill="url(#h-shaft2)"
          />

          {/* ══ LAYER 6 — architectural right wall details ══ */}
          {/* Right wall vertical moulding strip */}
          <rect x="360" y="52" width="3" height="346" fill="#2e1c0a" opacity="0.6" />
          <rect x="363" y="52" width="1" height="346" fill="#5a3820" opacity="0.3" />

          {/* ══ LAYER 7 — ambient warm fill between figures ══ */}
          <ellipse cx="220" cy="290" rx="130" ry="160"
            fill="url(#h-ambient)" filter="url(#h-blur32)" />

          {/* ══ LAYER 8 — pendant light ══ */}
          {/* Cord */}
          <line x1="220" y1="0" x2="220" y2="52" stroke="#1a1008" strokeWidth="1.5" />
          {/* Shade body */}
          <path d="M206,52 Q206,44 220,44 Q234,44 234,52 L238,72 Q238,78 220,78 Q202,78 202,72 Z"
            fill="#2a1a0a" />
          {/* Bottom opening glow */}
          <ellipse cx="220" cy="78" rx="18" ry="6" fill="#f5c06a" opacity="0.7" />
          {/* Light cone */}
          <ellipse cx="220" cy="100" rx="110" ry="60"
            fill="url(#h-pendantGlow)" filter="url(#h-blur32)" />
          {/* Smaller hot spot */}
          <ellipse cx="220" cy="82" rx="28" ry="14"
            fill="#f5c06a" opacity="0.18" filter="url(#h-blur8)" />

          {/* ══ LAYER 9 — LEFT FIGURE ══ */}
          {/*
            Seated person leaning very slightly toward center.
            Side profile facing RIGHT. Dark, warm-edged silhouette.
            Head: ~(128, 198). Face obscured by angle + shadow.
          */}
          {/* Chair back (behind figure) */}
          <path d="M68,280 Q66,240 70,200 Q73,180 80,175 L88,175 Q82,180 80,200 Q78,240 80,280 Z"
            fill="#1a1008" opacity="0.7" />
          {/* Chair seat */}
          <path d="M62,340 Q62,328 88,328 Q114,328 114,340 L112,360 Q112,366 88,366 Q64,366 64,360 Z"
            fill="#1e1208" opacity="0.8" />

          {/* Body / torso — leaning slightly right */}
          <path
            d="M72,520
               Q74,450 76,420
               Q78,395 84,372
               Q90,350 96,334
               Q106,316 108,300
               Q110,284 108,268
               Q106,250 108,234
               Q110,216 116,202
               Q124,184 140,176
               Q158,168 174,178
               Q188,190 184,210
               Q180,226 172,238
               Q164,252 162,268
               Q160,286 164,308
               Q168,332 176,362
               Q186,396 194,432
               Q202,462 206,490
               L202,520 Z"
            fill="url(#h-silL)"
          />
          {/* Clothing fold detail — jacket edge, faint highlight */}
          <path
            d="M116,202 Q124,184 140,176 Q158,168 174,178"
            stroke="#c87a30" strokeOpacity="0.14" strokeWidth="1.5" fill="none"
          />
          <path
            d="M108,300 Q116,310 112,330"
            stroke="#c87a30" strokeOpacity="0.08" strokeWidth="1" fill="none"
          />
          {/* Head silhouette — facing right, hair shape */}
          <path
            d="M128,210
               Q122,198 122,185
               Q122,166 134,156
               Q148,146 164,150
               Q180,154 182,170
               Q184,184 178,196
               Q172,208 162,214
               Q150,218 140,214
               Q132,212 128,210 Z"
            fill="#120a04"
          />
          {/* Neck */}
          <rect x="148" y="210" width="16" height="18" rx="4" fill="#120a04" />
          {/* Very subtle warm rim light on head (from window left) */}
          <path
            d="M122,185 Q122,166 134,156 Q148,148 162,150"
            stroke="#d4882a" strokeOpacity="0.18" strokeWidth="1.2" fill="none"
          />

          {/* ══ LAYER 10 — RIGHT FIGURE ══ */}
          {/*
            Seated person, slightly different build. Facing LEFT.
            Head: ~(312, 202). Slightly taller.
          */}
          {/* Chair back */}
          <path d="M372,276 Q374,236 370,196 Q367,176 360,171 L352,171 Q358,176 360,196 Q362,236 360,276 Z"
            fill="#1a1008" opacity="0.65" />
          {/* Chair seat */}
          <path d="M326,336 Q326,324 352,324 Q378,324 378,336 L376,356 Q376,362 352,362 Q328,362 328,356 Z"
            fill="#1e1208" opacity="0.75" />

          {/* Body / torso */}
          <path
            d="M368,520
               Q366,450 364,420
               Q362,395 356,372
               Q350,350 344,334
               Q334,316 332,300
               Q330,284 332,268
               Q334,250 332,234
               Q330,216 324,202
               Q316,183 300,173
               Q282,164 266,174
               Q252,186 256,206
               Q260,222 268,236
               Q276,250 278,266
               Q280,286 276,310
               Q272,336 264,366
               Q254,400 246,434
               Q238,464 234,490
               L238,520 Z"
            fill="url(#h-silR)"
          />
          {/* Clothing rim — very faint window light edge */}
          <path
            d="M324,202 Q316,183 300,173 Q282,164 266,174"
            stroke="#c87a30" strokeOpacity="0.1" strokeWidth="1.5" fill="none"
          />
          {/* Head — facing left */}
          <path
            d="M312,214
               Q318,202 320,188
               Q320,170 308,158
               Q294,148 278,152
               Q262,156 260,172
               Q258,186 264,198
               Q270,210 282,216
               Q296,220 308,216
               Q312,216 312,214 Z"
            fill="#120a04"
          />
          {/* Neck */}
          <rect x="276" y="212" width="16" height="18" rx="4" fill="#120a04" />
          {/* Rim light — right figure lit from behind by ambient */}
          <path
            d="M320,188 Q320,170 308,158 Q294,150 278,152"
            stroke="#c87a30" strokeOpacity="0.11" strokeWidth="1.2" fill="none"
          />

          {/* ══ LAYER 11 — BISTRO TABLE ══ */}
          {/* Drop shadow */}
          <ellipse cx="220" cy="444" rx="90" ry="10"
            fill="#000000" opacity="0.45" filter="url(#h-blur8)" />
          {/* Table top */}
          <ellipse cx="220" cy="432" rx="88" ry="12" fill="url(#h-table)" />
          {/* Table top sheen */}
          <ellipse cx="210" cy="428" rx="50" ry="5" fill="url(#h-tableSheen)" />
          {/* Table edge */}
          <path d="M132,432 Q132,444 220,444 Q308,444 308,432"
            fill="none" stroke="#1e1208" strokeWidth="2" />
          {/* Pedestal */}
          <rect x="215" y="444" width="10" height="60" rx="3" fill="#2a1808" />
          <ellipse cx="220" cy="504" rx="24" ry="5" fill="#2a1808" />

          {/* ══ LAYER 12 — COFFEE CUPS ══ */}
          {/* LEFT CUP — small espresso */}
          {/* Saucer */}
          <ellipse cx="178" cy="429" rx="18" ry="5" fill="#c4b49a" opacity="0.7" />
          {/* Cup body */}
          <path d="M167,419 Q167,412 178,412 Q189,412 189,419 L188,428 Q188,432 178,432 Q168,432 168,428 Z"
            fill="url(#h-cup)" />
          {/* Coffee surface */}
          <ellipse cx="178" cy="419" rx="11" ry="3.5" fill="#2a1608" />
          {/* Handle */}
          <path d="M189,420 Q197,420 197,425 Q197,430 189,430"
            stroke="#c4b49a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Steam */}
          <path d="M174,410 Q176,403 174,396" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12" fill="none" strokeLinecap="round" />
          <path d="M180,408 Q182,401 180,394" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.09" fill="none" strokeLinecap="round" />

          {/* RIGHT CUP */}
          {/* Saucer */}
          <ellipse cx="262" cy="429" rx="18" ry="5" fill="#c4b49a" opacity="0.65" />
          {/* Cup body */}
          <path d="M251,419 Q251,412 262,412 Q273,412 273,419 L272,428 Q272,432 262,432 Q252,432 252,428 Z"
            fill="url(#h-cup)" />
          {/* Coffee surface */}
          <ellipse cx="262" cy="419" rx="11" ry="3.5" fill="#2a1608" />
          {/* Handle */}
          <path d="M251,420 Q243,420 243,425 Q243,430 251,430"
            stroke="#c4b49a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Steam */}
          <path d="M258,410 Q260,403 258,396" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.11" fill="none" strokeLinecap="round" />
          <path d="M264,408 Q266,401 264,394" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.08" fill="none" strokeLinecap="round" />

          {/* ══ LAYER 13 — floor glow (table light pool) ══ */}
          <ellipse cx="220" cy="500" rx="100" ry="40"
            fill="url(#h-floor-glow)" filter="url(#h-blur18)" />

          {/* ══ LAYER 14 — vignette ══ */}
          <rect width="440" height="560" fill="url(#h-vignette)" />

          {/* ══ LAYER 15 — final atmosphere dust ══ */}
          {/* Very faint floating particles in light shaft */}
          <circle cx="95"  cy="180" r="1" fill="#f5c06a" opacity="0.18" />
          <circle cx="110" cy="140" r="0.8" fill="#f5c06a" opacity="0.14" />
          <circle cx="78"  cy="220" r="1.2" fill="#f5c06a" opacity="0.12" />
          <circle cx="130" cy="165" r="0.7" fill="#f5c06a" opacity="0.10" />
          <circle cx="60"  cy="260" r="1"   fill="#f5c06a" opacity="0.09" />

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
