"use client";

// ─── Data ────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: 1,
    title: "Welcome",
    description: "A space for the people you meet along the way.",
  },
  {
    number: 2,
    title: "Create Memory",
    description: "Save where you met, when it happened, and why it mattered.",
  },
  {
    number: 3,
    title: "Memory Timeline",
    description: "Your personal timeline of meaningful moments.",
  },
  {
    number: 4,
    title: "Personal Map",
    description: "Visualize your encounters on a beautiful private map.",
  },
  {
    number: 5,
    title: "Send a Wave",
    description: "Send a private reconnection request. No pressure, no rush.",
  },
  {
    number: 6,
    title: "Reconnect",
    description:
      "Messaging opens only when both people choose. Real connection, real consent.",
  },
];

// ─── Shared frame helpers ────────────────────────────────────────────────────
// viewBox: 0 0 220 440
const FRAME = {
  rx: 28,
  screenX: 4,
  screenY: 4,
  screenW: 212,
  screenH: 432,
  screenRx: 24,
  diX: 80, diY: 14, diW: 60, diH: 14, diRx: 7,
  hbX: 80, hbY: 428, hbW: 60, hbH: 4,
};

function FrameChrome({ uid }: { uid: string }) {
  return (
    <>
      {/* Outer bezel */}
      <rect width="220" height="440" rx={FRAME.rx} fill="#181818" />
      <rect x="1.5" y="1.5" width="217" height="437" rx="27" fill="#0d0d0d" />
      {/* Side buttons */}
      <rect x="-1" y="82" width="3" height="22" rx="1.5" fill="#252525" />
      <rect x="-1" y="110" width="3" height="22" rx="1.5" fill="#252525" />
      <rect x="218" y="96" width="3" height="36" rx="1.5" fill="#252525" />
      {/* Dynamic island */}
      <rect x={FRAME.diX} y={FRAME.diY} width={FRAME.diW} height={FRAME.diH} rx={FRAME.diRx} fill="#000" />
      {/* Status time */}
      <text x="20" y="27" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.75)">9:41</text>
      {/* Battery outline */}
      <rect x="188" y="20" width="20" height="10" rx="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <rect x="208.5" y="22.5" width="2.5" height="5" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="189.5" y="21.5" width="14" height="7" rx="1.5" fill="rgba(255,255,255,0.75)" />
      {/* Home indicator */}
      <rect x={FRAME.hbX} y={FRAME.hbY} width={FRAME.hbW} height={FRAME.hbH} rx="2" fill="rgba(255,255,255,0.22)" />
      {/* Subtle inner highlight */}
      <rect x="2" y="2" width="216" height="436" rx="26" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </>
  );
}

// ─── Screen 1: Welcome ───────────────────────────────────────────────────────
function Screen1() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s1c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
        <linearGradient id="s1bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e0a18" />
          <stop offset="100%" stopColor="#07050e" />
        </linearGradient>
        <radialGradient id="s1glow" cx="25%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#c87820" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c87820" stopOpacity="0" />
        </radialGradient>
      </defs>
      <FrameChrome uid="s1" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="url(#s1bg)" />
      <g clipPath="url(#s1c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="url(#s1bg)" />
        {/* Warm ambient glow */}
        <ellipse cx="55" cy="230" rx="130" ry="110" fill="url(#s1glow)" />
        {/* Faint silhouette figure suggestion */}
        <ellipse cx="90" cy="310" rx="34" ry="60" fill="rgba(0,0,0,0.28)" />
        <ellipse cx="145" cy="290" rx="28" ry="50" fill="rgba(0,0,0,0.22)" />
        {/* Header */}
        <text x="16" y="60" fontFamily="system-ui" fontSize="8" fontWeight="700" letterSpacing="2.5" fill="rgba(255,255,255,0.8)">CROSSED</text>
        <text x="202" y="60" fontFamily="system-ui" fontSize="18" fontWeight="300" fill="rgba(255,255,255,0.55)" textAnchor="middle">+</text>
        {/* Headline */}
        <text x="16" y="198" fontFamily="system-ui" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.95)" letterSpacing="-0.5">Where</text>
        <text x="16" y="226" fontFamily="system-ui" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.95)" letterSpacing="-0.5">paths cross</text>
        <text x="16" y="254" fontFamily="system-ui" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.95)" letterSpacing="-0.5">again.</text>
        {/* Sub */}
        <text x="16" y="275" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.4)">Don't lose meaningful encounters.</text>
        {/* Primary CTA */}
        <rect x="16" y="342" width="188" height="36" rx="18" fill="rgba(255,255,255,0.93)" />
        <text x="110" y="365" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#0a0814" textAnchor="middle">Create a Memory</text>
        {/* Secondary CTA */}
        <text x="110" y="403" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.38)" textAnchor="middle">See How It Works</text>
      </g>
    </svg>
  );
}

// ─── Screen 2: Create Memory ─────────────────────────────────────────────────
function Screen2() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s2c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
        <linearGradient id="s2bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111118" />
          <stop offset="100%" stopColor="#0c0c14" />
        </linearGradient>
        <linearGradient id="s2photo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3d2a14" />
          <stop offset="50%" stopColor="#4a3420" />
          <stop offset="100%" stopColor="#2a1e38" />
        </linearGradient>
        <radialGradient id="s2warm" cx="30%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d28432" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d28432" stopOpacity="0" />
        </radialGradient>
      </defs>
      <FrameChrome uid="s2" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="url(#s2bg)" />
      <g clipPath="url(#s2c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="url(#s2bg)" />
        {/* Nav bar */}
        <text x="16" y="60" fontFamily="system-ui" fontSize="9.5" fill="rgba(255,255,255,0.45)">Cancel</text>
        <text x="110" y="60" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.9)" textAnchor="middle">Create Memory</text>
        <text x="204" y="60" fontFamily="system-ui" fontSize="9.5" fontWeight="600" fill="rgba(99,102,241,0.9)" textAnchor="end">Save</text>
        {/* Subtitle */}
        <text x="110" y="76" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.35)" textAnchor="middle">Save the moment in seconds.</text>
        {/* Photo area */}
        <rect x="16" y="86" width="188" height="100" rx="12" fill="url(#s2photo)" />
        <ellipse cx="60" cy="120" rx="50" ry="40" fill="url(#s2warm)" />
        <text x="110" y="148" fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.55)" textAnchor="middle">Café A Brasileira</text>
        {/* Location row */}
        <rect x="16" y="196" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Pin icon */}
        <circle cx="27" cy="213" r="5" fill="rgba(99,102,241,0.15)" />
        <text x="27" y="217" fontFamily="system-ui" fontSize="8" fill="rgba(99,102,241,0.8)" textAnchor="middle">⌖</text>
        <text x="38" y="212" fontFamily="system-ui" fontSize="9.5" fill="rgba(255,255,255,0.8)">Café A Brasileira</text>
        <text x="38" y="224" fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.35)">Lisbon, Portugal</text>
        <text x="200" y="218" fontFamily="system-ui" fontSize="8.5" fill="rgba(99,102,241,0.6)" textAnchor="end">Change</text>
        <rect x="16" y="234" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Date row */}
        <text x="27" y="254" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.5)">📅</text>
        <text x="40" y="254" fontFamily="system-ui" fontSize="9.5" fill="rgba(255,255,255,0.8)">Today, 2:15 PM</text>
        <rect x="16" y="264" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Note area */}
        <text x="16" y="283" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.3)">Add a note (optional)</text>
        <text x="16" y="302" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.6)">We talked about travel,</text>
        <text x="16" y="315" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.6)">books, and life in Lisbon.</text>
        <rect x="16" y="328" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Save button */}
        <rect x="16" y="362" width="188" height="36" rx="18" fill="rgba(99,102,241,0.9)" />
        <text x="110" y="385" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.95)" textAnchor="middle">Save Memory</text>
      </g>
    </svg>
  );
}

// ─── Screen 3: Memory Timeline ───────────────────────────────────────────────
const timelineEntries = [
  { name: "Café A Brasileira", loc: "Lisbon, Portugal", time: "2 mins ago", color: "#3d2a14" },
  { name: "Chiang Mai Cafe", loc: "Chiang Mai, Thailand", time: "3 days ago", color: "#143d2a" },
  { name: "Porto Rooftop", loc: "Porto, Portugal", time: "1 week ago", color: "#141a3d" },
  { name: "Van Gogh Museum", loc: "Amsterdam, Netherlands", time: "2 weeks ago", color: "#2d143d" },
  { name: "Seoul Bookstore", loc: "Seoul, South Korea", time: "3 weeks ago", color: "#3d1414" },
];

function Screen3() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s3c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
      </defs>
      <FrameChrome uid="s3" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="#0d0d16" />
      <g clipPath="url(#s3c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="#0d0d16" />
        {/* Header */}
        <text x="16" y="62" fontFamily="system-ui" fontSize="17" fontWeight="700" fill="rgba(255,255,255,0.92)">Memories</text>
        {/* Plus button */}
        <circle cx="200" cy="57" r="11" fill="rgba(99,102,241,0.15)" />
        <text x="200" y="61" fontFamily="system-ui" fontSize="14" fontWeight="300" fill="rgba(99,102,241,0.9)" textAnchor="middle">+</text>
        {/* Filter tabs */}
        <rect x="16" y="72" width="188" height="24" rx="12" fill="rgba(255,255,255,0.05)" />
        <rect x="17" y="73" width="64" height="22" rx="11" fill="rgba(99,102,241,0.85)" />
        <text x="49" y="88" fontFamily="system-ui" fontSize="8.5" fontWeight="600" fill="rgba(255,255,255,0.95)" textAnchor="middle">All</text>
        <text x="117" y="88" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.45)" textAnchor="middle">Waves</text>
        <text x="180" y="88" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.45)" textAnchor="middle">Reconnected</text>
        {/* Month header */}
        <text x="16" y="114" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.35)" letterSpacing="1">JUNE 2024</text>
        {/* Timeline entries */}
        {timelineEntries.map((entry, i) => {
          const y = 122 + i * 52;
          return (
            <g key={i}>
              <rect x="16" y={y} width="188" height="46" rx="10" fill="rgba(255,255,255,0.03)" />
              {/* Thumbnail */}
              <rect x="22" y={y + 7} width="32" height="32" rx="7" fill={entry.color} />
              {/* Name */}
              <text x="62" y={y + 21} fontFamily="system-ui" fontSize="9.5" fontWeight="600" fill="rgba(255,255,255,0.85)">{entry.name}</text>
              <text x="62" y={y + 34} fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.35)">{entry.loc}</text>
              {/* Time */}
              <text x="196" y={y + 21} fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.25)" textAnchor="end">{entry.time}</text>
              {/* Chevron */}
              <path d={`M198,${y + 26} L202,${y + 23} L198,${y + 20}`} stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          );
        })}
        {/* Bottom nav */}
        <rect x="4" y="400" width="212" height="36" rx="0" fill="rgba(10,10,20,0.95)" />
        {["⌂", "⊕", "∿", "◯"].map((icon, i) => (
          <text key={i} x={38 + i * 48} y="422" fontFamily="system-ui" fontSize="12" fill={i === 0 ? "rgba(99,102,241,0.9)" : "rgba(255,255,255,0.3)"} textAnchor="middle">{icon}</text>
        ))}
      </g>
    </svg>
  );
}

// ─── Screen 4: Personal Map ──────────────────────────────────────────────────
function Screen4() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s4c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
        <radialGradient id="s4dot1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0a030" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f0a030" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="s4dot2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <FrameChrome uid="s4" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="#080c14" />
      <g clipPath="url(#s4c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="#080c14" />
        {/* Header */}
        <text x="16" y="62" fontFamily="system-ui" fontSize="17" fontWeight="700" fill="rgba(255,255,255,0.92)">My Map</text>
        {/* Gear icon placeholder */}
        <circle cx="200" cy="57" r="11" fill="rgba(255,255,255,0.05)" />
        <text x="200" y="62" fontFamily="system-ui" fontSize="11" fill="rgba(255,255,255,0.45)" textAnchor="middle">⚙</text>
        {/* Map background */}
        <rect x="4" y="72" width="212" height="280" fill="#0b1020" />
        {/* Simplified continent shapes (very abstract) */}
        {/* North America */}
        <path d="M28,120 Q35,115 48,118 Q55,122 52,135 Q48,148 38,150 Q28,148 24,140 Q20,130 28,120 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* South America */}
        <path d="M48,155 Q56,152 60,160 Q64,172 60,190 Q54,205 46,205 Q38,202 36,188 Q34,172 38,160 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Europe */}
        <path d="M90,108 Q102,105 110,110 Q115,116 112,125 Q108,132 98,132 Q88,130 86,120 Q84,112 90,108 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Africa */}
        <path d="M92,138 Q102,135 108,142 Q114,152 112,172 Q108,190 98,192 Q88,190 84,175 Q80,158 84,145 Q86,140 92,138 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Asia */}
        <path d="M118,100 Q145,96 162,104 Q172,112 168,126 Q160,138 145,140 Q130,140 118,132 Q110,124 110,114 Q112,104 118,100 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Southeast Asia */}
        <path d="M158,140 Q168,138 174,146 Q178,156 172,164 Q164,168 156,162 Q150,154 152,146 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Australia */}
        <path d="M162,192 Q174,190 180,198 Q184,208 178,216 Q170,220 162,216 Q154,208 154,200 Q156,193 162,192 Z"
          fill="rgba(255,255,255,0.07)" />
        {/* Grid lines (latitude/longitude subtle) */}
        {[100, 140, 180, 220, 260, 300].map((y, i) => (
          <line key={i} x1="4" y1={y} x2="216" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        ))}
        {[30, 70, 110, 150, 190].map((x, i) => (
          <line key={i} x1={x} y1="72" x2={x} y2="352" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        ))}
        {/* Connection arc - Lisbon to Chiang Mai */}
        <path d="M96,122 Q140,96 168,148" stroke="rgba(99,102,241,0.35)" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
        {/* Connection arc - Lisbon to Porto */}
        <path d="M96,122 Q82,130 80,150" stroke="rgba(99,102,241,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        {/* Dot: Lisbon (Portugal) */}
        <ellipse cx="96" cy="122" rx="14" ry="14" fill="url(#s4dot1)" />
        <circle cx="96" cy="122" r="4" fill="#f0a030" />
        <circle cx="96" cy="122" r="2" fill="#fff" />
        {/* Dot: Chiang Mai */}
        <ellipse cx="168" cy="148" rx="12" ry="12" fill="url(#s4dot2)" />
        <circle cx="168" cy="148" r="3.5" fill="#6366f1" />
        <circle cx="168" cy="148" r="1.8" fill="#fff" />
        {/* Dot: Porto */}
        <circle cx="82" cy="152" r="2.8" fill="#6366f1" />
        <circle cx="82" cy="152" r="1.4" fill="#fff" />
        {/* Dot: Amsterdam */}
        <circle cx="104" cy="108" r="2.5" fill="#a78bfa" />
        {/* Dot: Seoul */}
        <circle cx="182" cy="120" r="2.5" fill="#a78bfa" />
        {/* Stats bar */}
        <rect x="4" y="352" width="212" height="48" fill="rgba(8,12,20,0.96)" />
        <rect x="4" y="352" width="212" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Stats */}
        <text x="72" y="371" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="rgba(255,255,255,0.9)" textAnchor="middle">23</text>
        <text x="72" y="385" fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">Memories</text>
        <rect x="109" y="362" width="1" height="24" fill="rgba(255,255,255,0.1)" />
        <text x="150" y="371" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="rgba(255,255,255,0.9)" textAnchor="middle">12</text>
        <text x="150" y="385" fontFamily="system-ui" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">Countries</text>
        {/* Bottom nav */}
        <rect x="4" y="400" width="212" height="36" rx="0" fill="rgba(8,12,20,0.97)" />
        {["⌂", "⊕", "∿", "◯"].map((icon, i) => (
          <text key={i} x={38 + i * 48} y="422" fontFamily="system-ui" fontSize="12" fill={i === 1 ? "rgba(99,102,241,0.9)" : "rgba(255,255,255,0.3)"} textAnchor="middle">{icon}</text>
        ))}
      </g>
    </svg>
  );
}

// ─── Screen 5: Send a Wave ───────────────────────────────────────────────────
function Screen5() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s5c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
        <radialGradient id="s5avatar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2a4a" />
          <stop offset="100%" stopColor="#1a1a30" />
        </radialGradient>
        <linearGradient id="s5btn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <FrameChrome uid="s5" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="#0d0d18" />
      <g clipPath="url(#s5c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="#0d0d18" />
        {/* Back arrow */}
        <path d="M22,58 L16,54 L22,50" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Title */}
        <text x="110" y="58" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.9)" textAnchor="middle">Send a Wave</text>
        {/* Subtitle */}
        <text x="110" y="76" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.35)" textAnchor="middle">A gentle nudge.</text>
        <text x="110" y="88" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.35)" textAnchor="middle">When the time feels right.</text>
        {/* Separator */}
        <rect x="16" y="100" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Avatar circle */}
        <circle cx="110" cy="162" r="36" fill="url(#s5avatar)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="110" y="168" fontFamily="system-ui" fontSize="22" fontWeight="700" fill="rgba(255,255,255,0.7)" textAnchor="middle">M</text>
        {/* Location details */}
        <text x="110" y="218" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" textAnchor="middle">Café A Brasileira</text>
        <text x="110" y="233" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.35)" textAnchor="middle">Lisbon, Portugal</text>
        <text x="110" y="246" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.3)" textAnchor="middle">June 2, 2024</text>
        {/* Separator */}
        <rect x="16" y="260" width="188" height="1" fill="rgba(255,255,255,0.06)" />
        {/* Message field */}
        <rect x="16" y="270" width="188" height="70" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <text x="26" y="290" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.6)">Hey! I've been thinking about</text>
        <text x="26" y="304" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.6)">our conversation. Would love</text>
        <text x="26" y="318" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.6)">to reconnect.</text>
        {/* Add message hint */}
        <text x="26" y="356" fontFamily="system-ui" fontSize="8.5" fill="rgba(255,255,255,0.25)">Add a message (optional)</text>
        {/* Send Wave button */}
        <rect x="16" y="372" width="188" height="38" rx="19" fill="url(#s5btn)" />
        <text x="110" y="396" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.95)" textAnchor="middle">Send Wave</text>
      </g>
    </svg>
  );
}

// ─── Screen 6: Reconnect ─────────────────────────────────────────────────────
function Screen6() {
  return (
    <svg viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full drop-shadow-2xl" aria-hidden="true">
      <defs>
        <clipPath id="s6c">
          <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} />
        </clipPath>
        <linearGradient id="s6bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1412" />
          <stop offset="100%" stopColor="#080e0c" />
        </linearGradient>
        <radialGradient id="s6glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="s6check" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
      </defs>
      <FrameChrome uid="s6" />
      <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} rx={FRAME.screenRx} fill="url(#s6bg)" />
      <g clipPath="url(#s6c)">
        <rect x={FRAME.screenX} y={FRAME.screenY} width={FRAME.screenW} height={FRAME.screenH} fill="url(#s6bg)" />
        {/* Subtle green glow */}
        <ellipse cx="110" cy="190" rx="110" ry="100" fill="url(#s6glow)" />
        {/* Back arrow */}
        <path d="M22,58 L16,54 L22,50" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Check circle */}
        <circle cx="110" cy="165" r="38" fill="rgba(16,185,129,0.12)" />
        <circle cx="110" cy="165" r="28" fill="url(#s6check)" />
        {/* Checkmark */}
        <path d="M96,165 L106,175 L124,154" stroke="rgba(255,255,255,0.95)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* It's mutual! */}
        <text x="110" y="224" fontFamily="system-ui" fontSize="18" fontWeight="700" fill="rgba(255,255,255,0.95)" textAnchor="middle">It's mutual!</text>
        <text x="110" y="242" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">You can now start a conversation.</text>
        {/* Avatars */}
        <circle cx="78" cy="282" r="22" fill="rgba(30,32,60,0.9)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="78" y="287" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.7)" textAnchor="middle">M</text>
        {/* Heart */}
        <text x="110" y="288" fontFamily="system-ui" fontSize="14" fill="rgba(16,185,129,0.85)" textAnchor="middle">♥</text>
        <circle cx="142" cy="282" r="22" fill="rgba(30,32,60,0.9)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="142" y="287" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.55)" textAnchor="middle">You</text>
        {/* Labels */}
        <text x="78" y="312" fontFamily="system-ui" fontSize="7.5" fill="rgba(255,255,255,0.3)" textAnchor="middle">téa</text>
        <text x="142" y="312" fontFamily="system-ui" fontSize="7.5" fill="rgba(255,255,255,0.3)" textAnchor="middle">You</text>
        {/* Start Chat button */}
        <rect x="28" y="336" width="164" height="36" rx="18" fill="rgba(255,255,255,0.94)" />
        <text x="110" y="358" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#080e0c" textAnchor="middle">Start Chat</text>
        {/* Not Now */}
        <text x="110" y="398" fontFamily="system-ui" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="middle">Not Now</text>
      </g>
    </svg>
  );
}

// ─── Screen components array ─────────────────────────────────────────────────
const screens = [Screen1, Screen2, Screen3, Screen4, Screen5, Screen6];

// ─── Main Section ────────────────────────────────────────────────────────────
export function ProductPreviewSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 tracking-widest uppercase">
            Product Preview
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            A first look at{" "}
            <span className="gradient-text">Crossed</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crossed helps you save meaningful encounters
            <br className="hidden sm:block" />
            and reconnect when the time feels right.
          </p>
        </div>

        {/* Phones row — horizontal scroll on mobile, 6‑up on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible lg:flex lg:justify-center lg:gap-4">
          {screens.map((Screen, i) => {
            const step = steps[i];
            return (
              <div key={i} className="flex flex-col items-center gap-5 shrink-0 w-[148px] sm:w-auto lg:w-[148px]">
                {/* Phone */}
                <div className="w-full">
                  <Screen />
                </div>
                {/* Step label */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[140px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
