const locations = [
  { id: 0, x: 95, y: 130, city: "San Francisco", color: "#818cf8" },
  { id: 1, x: 170, y: 108, city: "New York", color: "#6366f1" },
  { id: 2, x: 195, y: 252, city: "Rio de Janeiro", color: "#818cf8" },
  { id: 3, x: 330, y: 112, city: "Lisbon", color: "#a5b4fc" },
  { id: 4, x: 360, y: 88, city: "London", color: "#6366f1" },
  { id: 5, x: 448, y: 145, city: "Cairo", color: "#818cf8" },
  { id: 6, x: 532, y: 148, city: "Dubai", color: "#6366f1" },
  { id: 7, x: 650, y: 190, city: "Singapore", color: "#a5b4fc" },
  { id: 8, x: 710, y: 105, city: "Tokyo", color: "#6366f1" },
  { id: 9, x: 738, y: 272, city: "Sydney", color: "#818cf8" },
];

const connections = [
  [0, 1],
  [1, 4],
  [3, 4],
  [4, 6],
  [5, 6],
  [6, 7],
  [7, 8],
  [7, 9],
  [1, 2],
];

export function MemoryMapSection() {
  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
            Memory Map
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Your paths, visualized.
          </h2>
          <p className="text-white/45 text-lg leading-relaxed">
            Every encounter leaves a mark on your private map—a living record of
            journeys, connections, and moments that mattered.
          </p>
        </div>

        {/* Map container */}
        <div className="relative rounded-3xl border border-white/8 overflow-hidden" style={{ background: "#07091a" }}>
          {/* Corner glow accents */}
          <div className="absolute top-0 left-1/4 w-96 h-40 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse, #818cf8 0%, transparent 70%)", filter: "blur(30px)" }} />

          <svg
            viewBox="0 0 800 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-label="Memory Map visualization"
          >
            <defs>
              <filter id="mm-dotGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="mm-lineGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subtle graticule grid */}
            {[70, 130, 190, 250, 310].map((y) => (
              <line
                key={`lat-${y}`}
                x1="0"
                y1={y}
                x2="800"
                y2={y}
                stroke="#ffffff"
                strokeOpacity="0.03"
                strokeWidth="0.8"
              />
            ))}
            {[100, 200, 300, 400, 500, 600, 700].map((x) => (
              <line
                key={`lon-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="380"
                stroke="#ffffff"
                strokeOpacity="0.03"
                strokeWidth="0.8"
              />
            ))}

            {/* Connecting lines */}
            {connections.map(([fromIdx, toIdx], i) => {
              const from = locations[fromIdx];
              const to = locations[toIdx];
              const mx = (from.x + to.x) / 2;
              const my = Math.min(from.y, to.y) - 40;
              return (
                <path
                  key={i}
                  d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                  stroke="#6366f1"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  filter="url(#mm-lineGlow)"
                />
              );
            })}

            {/* Location dots */}
            {locations.map((loc) => (
              <g key={loc.id}>
                {/* Outer glow ring */}
                <circle cx={loc.x} cy={loc.y} r="12" fill={loc.color} opacity="0.12" filter="url(#mm-dotGlow)" />
                {/* Mid ring */}
                <circle cx={loc.x} cy={loc.y} r="6" fill={loc.color} opacity="0.2" />
                {/* Core dot */}
                <circle cx={loc.x} cy={loc.y} r="3" fill={loc.color} />
                {/* Inner highlight */}
                <circle cx={loc.x - 0.8} cy={loc.y - 0.8} r="1.2" fill="#ffffff" opacity="0.7" />
                {/* City label */}
                <text
                  x={loc.x}
                  y={loc.y + 18}
                  textAnchor="middle"
                  fill="#ffffff"
                  fillOpacity="0.35"
                  fontSize="8"
                  fontFamily="system-ui, sans-serif"
                  letterSpacing="0.5"
                >
                  {loc.city}
                </text>
              </g>
            ))}
          </svg>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, #07091a, transparent)" }} />
        </div>

        {/* Caption */}
        <p className="text-center text-white/25 text-xs mt-6 tracking-wide">
          Private · Only visible to you · Updated with every Memory you save
        </p>
      </div>
    </section>
  );
}
