import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function VillageHeroScene({ className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Soft parallax spring
  const springConfig = { damping: 25, stiffness: 80 };
  const mouseX = useSpring(mousePos.x, springConfig);
  const mouseY = useSpring(mousePos.y, springConfig);

  const hill1X = useTransform(mouseX, [-1, 1], [-18, 18]);
  const hill2X = useTransform(mouseX, [-1, 1], [-35, 35]);
  const hutsX = useTransform(mouseX, [-1, 1], [-50, 50]);
  const treesX = useTransform(mouseX, [-1, 1], [-65, 65]);
  const starsY = useTransform(mouseY, [-1, 1], [-15, 15]);

  const huts = [
    { x: 230, y: 460, w: 94, h: 56, roof: '#9A6338', wall: '#FCF9C6', door: '#051D04', windowLit: true },
    { x: 490, y: 475, w: 82, h: 50, roof: '#7E4C26', wall: '#FFF5CD', door: '#051D04', windowLit: true },
    { x: 860, y: 462, w: 104, h: 62, roof: '#A66B3D', wall: '#FAF2BF', door: '#051D04', windowLit: true },
    { x: 1120, y: 472, w: 86, h: 54, roof: '#884D25', wall: '#FCF9C6', door: '#051D04', windowLit: true },
    { x: 1330, y: 480, w: 74, h: 46, roof: '#7A431E', wall: '#FFF3B8', door: '#051D04', windowLit: true },
  ];

  const trees = [
    { x: 95, y: 450, s: 1.25, c1: '#0e2b14', c2: '#1c4d27' },
    { x: 360, y: 485, s: 0.85, c1: '#163d1e', c2: '#245C35' },
    { x: 670, y: 465, s: 1.05, c1: '#123619', c2: '#1e5229' },
    { x: 1010, y: 490, s: 0.95, c1: '#163d1e', c2: '#245C35' },
    { x: 1250, y: 455, s: 1.2, c1: '#0f2f16', c2: '#1d4e28' },
    { x: 1410, y: 470, s: 0.8, c1: '#163d1e', c2: '#245C35' },
  ];

  // Particle fireflies
  const fireflies = [
    { cx: 310, cy: 450, r: 2.2, dur: 4.2, delay: 0 },
    { cx: 440, cy: 480, r: 1.8, dur: 5.1, delay: 1.2 },
    { cx: 760, cy: 430, r: 2.5, dur: 3.8, delay: 0.5 },
    { cx: 980, cy: 470, r: 2.0, dur: 4.7, delay: 2.1 },
    { cx: 1200, cy: 440, r: 2.2, dur: 5.5, delay: 1.5 },
    { cx: 620, cy: 500, r: 1.9, dur: 4.0, delay: 2.8 },
  ];

  return (
    <div className={`pointer-events-none relative h-full w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#020E02" />
            <stop offset="40%" stopColor="#051D04" />
            <stop offset="85%" stopColor="#123B1C" />
            <stop offset="100%" stopColor="#245C35" />
          </linearGradient>

          <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B4728" />
            <stop offset="100%" stopColor="#0B2412" />
          </linearGradient>

          <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#28633B" />
            <stop offset="100%" stopColor="#143D1F" />
          </linearGradient>

          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FCF9C6" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FCF9C6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FCF9C6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FCF9C6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FCF9C6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FCF9C6" stopOpacity="0" />
          </radialGradient>

          <filter id="softBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="1440" height="600" fill="url(#skyGrad)" />

        {/* Stars */}
        <motion.g style={{ y: starsY }}>
          {[
            [120, 50], [210, 30], [330, 75], [460, 20], [610, 55], [750, 30],
            [890, 65], [1020, 35], [1150, 60], [1280, 25], [1370, 70], [80, 100],
            [520, 90], [680, 15], [970, 85], [1240, 105], [400, 45], [830, 20]
          ].map(([sx, sy], i) => (
            <circle
              key={`star-${i}`}
              cx={sx}
              cy={sy}
              r={i % 3 === 0 ? 1.8 : 1.2}
              fill="#FCF9C6"
              opacity={0.35 + (i % 6) * 0.1}
            />
          ))}
        </motion.g>

        {/* Glowing Full Moon */}
        <circle cx="1180" cy="140" r="110" fill="url(#moonGlow)" />
        <circle cx="1180" cy="140" r="48" fill="#FCF9C6" opacity="0.95" />
        <circle cx="1200" cy="128" r="42" fill="#0c2612" opacity="0.92" />

        {/* Telecommunication / Wireless Signal Tower on Distant Hill */}
        <g transform="translate(680, 310)">
          {/* Tower structure */}
          <line x1="0" y1="0" x2="-14" y2="85" stroke="#FCF9C6" strokeWidth="2" opacity="0.7" />
          <line x1="0" y1="0" x2="14" y2="85" stroke="#FCF9C6" strokeWidth="2" opacity="0.7" />
          <line x1="-7" y1="42" x2="7" y2="42" stroke="#FCF9C6" strokeWidth="1.5" opacity="0.6" />
          <line x1="-11" y1="65" x2="11" y2="65" stroke="#FCF9C6" strokeWidth="1.5" opacity="0.6" />
          <line x1="-14" y1="85" x2="14" y2="85" stroke="#FCF9C6" strokeWidth="2" opacity="0.8" />
          <line x1="0" y1="-8" x2="0" y2="0" stroke="#FCF9C6" strokeWidth="2.5" opacity="0.9" />
          <circle cx="0" cy="-8" r="3.5" fill="#FCF9C6" />

          {/* Animated concentric signal waves */}
          {[16, 28, 42, 58].map((radius, idx) => (
            <circle
              key={`sig-${idx}`}
              cx="0"
              cy="-8"
              r={radius}
              fill="none"
              stroke="#FCF9C6"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              opacity={0.6 - idx * 0.12}
            >
              <animate
                attributeName="r"
                values={`${radius};${radius + 18};${radius}`}
                dur="4s"
                repeatCount="indefinite"
                begin={`${idx * 0.8}s`}
              />
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="4s"
                repeatCount="indefinite"
                begin={`${idx * 0.8}s`}
              />
            </circle>
          ))}
        </g>

        {/* Layer 1: Background Hills (Parallax) */}
        <motion.path
          style={{ x: hill1X }}
          d="M0 380 Q180 300 380 340 T780 320 T1180 290 T1440 310 V600 H0Z"
          fill="url(#hillGrad1)"
        />

        {/* Layer 2: Midground Rolling Fields */}
        <motion.path
          style={{ x: hill2X }}
          d="M0 435 Q260 375 540 420 T1080 405 T1440 385 V600 H0Z"
          fill="url(#hillGrad2)"
        />

        {/* Layer 3: Village Huts with Glowing Warm Windows */}
        <motion.g style={{ x: hutsX }}>
          {huts.map(({ x, y, w, h, roof, wall, door, windowLit }, i) => (
            <g key={`hut-${i}`} transform={`translate(${x} ${y})`}>
              {/* Ground shadow */}
              <ellipse cx="0" cy="6" rx={w * 0.6} ry="8" fill="#020E02" opacity="0.6" />

              {/* Hut Wall Body */}
              <rect x={-w / 2} y={-h} width={w} height={h} fill={wall} rx="3" />

              {/* Slanted Thatched Roof with Overhang */}
              <polygon
                points={`${-w / 2 - 12},-${h} 0,-${h + 38} ${w / 2 + 12},-${h}`}
                fill={roof}
              />
              {/* Roof texture ridge line */}
              <line x1="0" y1={-(h + 38)} x2="0" y2={-h} stroke="#051D04" strokeWidth="2" opacity="0.3" />

              {/* Wooden Door */}
              <rect x="-9" y={-h * 0.52} width="18" height={h * 0.52} fill={door} rx="2" />

              {/* Warm Golden Window with Hearth Glow */}
              {windowLit && (
                <>
                  <ellipse cx={w / 3.8} cy={-h * 0.55} rx="16" ry="12" fill="url(#windowGlow)" />
                  <rect
                    x={w / 3.8 - 6}
                    y={-h * 0.65}
                    width="12"
                    height="11"
                    fill="#FCF9C6"
                    rx="1.5"
                    stroke="#8A5A33"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={w / 3.8}
                    y1={-h * 0.65}
                    x2={w / 3.8}
                    y2={-h * 0.65 + 11}
                    stroke="#8A5A33"
                    strokeWidth="1"
                  />
                </>
              )}
            </g>
          ))}
        </motion.g>

        {/* Layer 4: Lush Trees (Parallax Foreground) */}
        <motion.g style={{ x: treesX }}>
          {trees.map(({ x, y, s, c1, c2 }, i) => (
            <g key={`tree-${i}`} transform={`translate(${x} ${y}) scale(${s})`}>
              {/* Trunk */}
              <rect x="-6" y="-6" width="12" height="60" fill="#382516" rx="2" />
              {/* Foliage Canopy */}
              <ellipse cx="0" cy="-48" rx="42" ry="46" fill={c1} />
              <ellipse cx="-16" cy="-30" rx="26" ry="28" fill={c2} opacity="0.85" />
              <ellipse cx="16" cy="-22" rx="22" ry="24" fill={c1} opacity="0.65" />
            </g>
          ))}
        </motion.g>

        {/* Animated Fireflies Floating from Fields */}
        {fireflies.map(({ cx, cy, r, dur, delay }, idx) => (
          <circle key={`firefly-${idx}`} cx={cx} cy={cy} r={r} fill="#FCF9C6" opacity="0.8">
            <animate
              attributeName="cy"
              values={`${cy};${cy - 28};${cy}`}
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
            <animate
              attributeName="cx"
              values={`${cx};${cx + 15};${cx - 10};${cx}`}
              dur={`${dur * 1.3}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
            <animate
              attributeName="opacity"
              values="0.2;0.9;0.2"
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          </circle>
        ))}

        {/* Foreground Ground Edge */}
        <path d="M0 550 Q360 520 720 545 T1440 535 V600 H0Z" fill="#041503" opacity="0.9" />
        <path d="M0 575 Q720 560 1440 575 V600 H0Z" fill="#020902" />
      </svg>
    </div>
  );
}
