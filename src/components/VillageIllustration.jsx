// Enhanced village-at-dusk SVG illustration with stars, signal waves, moon glow.
export default function VillageIllustration({ className = '' }) {
  const huts = [
    { x: 240, y: 475, w: 90, h: 55, roof: '#8a5a33', wall: '#FCF9C6', door: '#051D04' },
    { x: 500, y: 488, w: 76, h: 48, roof: '#7a4f28', wall: '#fff8dc', door: '#051D04' },
    { x: 870, y: 472, w: 100, h: 60, roof: '#9a6540', wall: '#faf3c0', door: '#051D04' },
    { x: 1130, y: 480, w: 82, h: 52, roof: '#854e2a', wall: '#FCF9C6', door: '#051D04' },
    { x: 1320, y: 485, w: 70, h: 45, roof: '#7a4f28', wall: '#fff8dc', door: '#051D04' },
  ];
  const trees = [
    { x: 110, y: 468, s: 1.1 }, { x: 370, y: 498, s: 0.8 }, { x: 650, y: 476, s: 1.0 },
    { x: 1000, y: 497, s: 0.9 }, { x: 1240, y: 465, s: 1.15 }, { x: 1420, y: 478, s: 0.75 },
  ];
  const stars = [
    [100,60],[220,35],[350,80],[480,25],[620,55],[780,30],[920,70],[1050,40],
    [1190,65],[1320,28],[1400,75],[60,110],[700,15],[1100,95],
  ];
  return (
    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020e02" />
          <stop offset="45%" stopColor="#051D04" />
          <stop offset="100%" stopColor="#12381c" />
        </linearGradient>
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4a2b" />
          <stop offset="100%" stopColor="#0d2914" />
        </linearGradient>
        <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a5e38" />
          <stop offset="100%" stopColor="#163822" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCF9C6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FCF9C6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="signal-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#245C35" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#245C35" stopOpacity="0" />
        </radialGradient>
        <filter id="blur-sm">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="600" fill="url(#sky-grad)" />

      {/* Stars */}
      {stars.map(([sx, sy], i) => (
        <circle key={`s${i}`} cx={sx} cy={sy} r={i % 3 === 0 ? 1.8 : 1.2}
          fill="#FCF9C6" opacity={0.4 + (i % 5) * 0.1} />
      ))}

      {/* Moon glow halo */}
      <circle cx="1180" cy="150" r="90" fill="url(#moon-glow)" />
      {/* Moon */}
      <circle cx="1180" cy="150" r="58" fill="#FCF9C6" opacity="0.92" />
      <circle cx="1205" cy="135" r="50" fill="#12381c" opacity="0.95" />

      {/* Signal / wifi waves near a hut */}
      {[22, 36, 50].map((r, i) => (
        <path key={`w${i}`}
          d={`M ${860 - r} ${430 - r * 0.5} A ${r} ${r} 0 0 1 ${860 + r} ${430 - r * 0.5}`}
          fill="none" stroke="#FCF9C6" strokeWidth="2.5" strokeLinecap="round"
          opacity={0.6 - i * 0.15} />
      ))}
      <circle cx="860" cy="435" r="4" fill="#FCF9C6" opacity="0.9" />

      {/* Background hills */}
      <path d="M0 400 Q200 310 400 360 T800 340 T1200 310 T1440 330 V600 H0Z" fill="url(#hill1)" />
      <path d="M0 460 Q280 390 560 440 T1100 420 T1440 405 V600 H0Z" fill="url(#hill2)" />

      {/* Trees */}
      {trees.map(({ x, y, s }, i) => (
        <g key={`t${i}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <rect x="-5" y="-8" width="10" height="55" fill="#3b2a1e" rx="2" />
          <ellipse cx="0" cy="-45" rx="38" ry="42" fill="#16421f" />
          <ellipse cx="-14" cy="-28" rx="22" ry="24" fill="#245C35" opacity="0.7" />
          <ellipse cx="14" cy="-20" rx="18" ry="20" fill="#1d4a2b" opacity="0.5" />
        </g>
      ))}

      {/* Huts */}
      {huts.map(({ x, y, w, h, roof, wall, door }, i) => (
        <g key={`h${i}`} transform={`translate(${x} ${y})`}>
          {/* Body */}
          <rect x={-w / 2} y={-h} width={w} height={h} fill={wall} rx="2" />
          {/* Roof */}
          <polygon points={`${-w / 2 - 8},-${h} 0,-${h + 36} ${w / 2 + 8},-${h}`} fill={roof} />
          {/* Door */}
          <rect x="-8" y={-h * 0.5} width="16" height={h * 0.5} fill={door} rx="2" />
          {/* Window */}
          <rect x={w / 4 - 6} y={-h * 0.75} width="12" height="10" fill={door} opacity="0.6" rx="1" />
          {/* Light glow */}
          <ellipse cx="0" cy={4} rx={w * 0.35} ry="6" fill="#FCF9C6" opacity="0.18" filter="url(#blur-sm)" />
        </g>
      ))}

      {/* Ground shadow */}
      <path d="M0 540 Q720 490 1440 540 V600 H0Z" fill="#051D04" opacity="0.65" />

      {/* Foreground ground detail */}
      <path d="M0 575 Q360 560 720 575 T1440 568 V600 H0Z" fill="#020e02" opacity="0.8" />
    </svg>
  );
}
