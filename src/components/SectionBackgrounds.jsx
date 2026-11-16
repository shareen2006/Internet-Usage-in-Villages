/**
 * SectionBackgrounds.jsx
 * 
 * Premium ambient background layers for target sections:
 * 1. Project Objectives & Intervention Roadmap
 * 2. Activities – Practical Learning Modules
 * 3. Digital Literacy & Safety Hub
 * 4. Village Cyber Safety Quiz
 * 5. Internet Usage Across Different Age Groups – Analytics
 * 
 * Features:
 * - Sophisticated ivory, warm cream, sage green, and forest-green gradients
 * - Subtle ambient lighting and soft spatial depth (blur halos)
 * - Ultra-low-opacity organic patterns and topographic/geometric textures
 * - Seamless pointer-events-none execution ensuring 100% interactive responsiveness
 */

/* ── 1. Objectives Background ── */
export function ObjectivesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Base Sophisticated Gradient: Warm Ivory to Cream-Sage */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3] via-[#F4F6EB] to-[#EBF0DF]" />

      {/* Ambient Lighting Halos */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-forest/[0.07] blur-[100px]" />
      <div className="absolute top-1/3 -right-28 h-[32rem] w-[32rem] rounded-full bg-gold/[0.07] blur-[120px]" />
      <div className="absolute -bottom-20 left-1/4 h-80 w-80 rounded-full bg-emerald-700/[0.05] blur-[90px]" />

      {/* Subtle Organic Roadmap Contours (Topographic Elevation Lines) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,200 C200,100 400,350 700,220 C1000,90 1100,320 1300,180"
          fill="none"
          stroke="#1a3826"
          strokeWidth="2"
        />
        <path
          d="M-80,360 C180,260 440,480 750,340 C1040,210 1120,440 1320,320"
          fill="none"
          stroke="#1a3826"
          strokeWidth="1.5"
        />
        <path
          d="M-50,520 C220,410 480,620 800,480 C1100,340 1160,560 1350,450"
          fill="none"
          stroke="#1a3826"
          strokeWidth="2"
        />
        <path
          d="M-120,680 C150,580 500,760 840,620 C1150,480 1200,680 1380,590"
          fill="none"
          stroke="#1a3826"
          strokeWidth="1.5"
        />
      </svg>

      {/* Subtle Micro-dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a3826 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 85%)'
        }}
      />

      {/* Top & Bottom Refined Edge Transitions */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F2F5E8] to-transparent opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2F5E8] to-transparent opacity-60" />
    </div>
  );
}

/* ── 2. Activities Background ── */
export function ActivitiesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Base Sophisticated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF4] via-[#F3F6EB] to-[#E9EFE0]" />

      {/* Ambient Lighting Halos */}
      <div className="absolute -top-20 right-1/4 h-[30rem] w-[30rem] rounded-full bg-forest/[0.06] blur-[110px]" />
      <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-lemon/50 blur-[90px]" />
      <div className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-emerald-800/[0.05] blur-[100px]" />

      {/* Subtle Botanical / Radial Ripple Texture (Community Education Outreach Waves) */}
      <svg
        className="absolute -right-32 top-10 h-[500px] w-[500px] opacity-[0.04]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="80" stroke="#1a3826" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="130" stroke="#1a3826" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="180" stroke="#1a3826" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="230" stroke="#1a3826" strokeWidth="2" strokeOpacity="0.8" />
      </svg>

      <svg
        className="absolute -left-24 bottom-10 h-[420px] w-[420px] opacity-[0.035]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="100" stroke="#1a3826" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="160" stroke="#1a3826" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="200" cy="200" r="220" stroke="#1a3826" strokeWidth="2" />
      </svg>

      {/* Micro-dot organic texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #245C35 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top & Bottom Refined Edge Transitions */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#F2F5E8] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#F2F5E8] to-transparent opacity-70" />
    </div>
  );
}

/* ── 3. Learn (Digital Literacy & Safety Hub) Background ── */
export function LearnBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Base Gradient: Ivory to Soft Sage */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3] via-[#F4F7EB] to-[#EAEFE1]" />

      {/* Prominent Ambient Halo behind Smartphone Simulator (Right side) */}
      <div className="absolute top-44 right-10 lg:right-28 h-[34rem] w-[26rem] rounded-full bg-emerald-600/[0.08] blur-[110px]" />

      {/* Ambient Lighting at Top Left & Bottom */}
      <div className="absolute top-16 left-8 h-80 w-80 rounded-full bg-gold/[0.06] blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-forest/[0.05] blur-[120px]" />

      {/* Subtle Digital Connectivity Constellation Vector */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="180" x2="350" y2="280" stroke="#1a3826" strokeWidth="1" />
        <line x1="350" y1="280" x2="520" y2="190" stroke="#1a3826" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="520" y1="190" x2="780" y2="310" stroke="#1a3826" strokeWidth="1.5" />
        <line x1="780" y1="310" x2="1050" y2="220" stroke="#1a3826" strokeWidth="1" />
        
        <circle cx="120" cy="180" r="4" fill="#1a3826" />
        <circle cx="350" cy="280" r="5" fill="#1a3826" />
        <circle cx="520" cy="190" r="4" fill="#1a3826" />
        <circle cx="780" cy="310" r="6" fill="#1a3826" />
        <circle cx="1050" cy="220" r="4" fill="#1a3826" />
      </svg>

      {/* Subtle Micro-pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a3826 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Edge Transitions */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F2F5E8] to-transparent opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2F5E8] to-transparent opacity-60" />
    </div>
  );
}

/* ── 4. Cyber Safety Quiz Ambient Wrapper ── */
export function QuizAmbientWrapper({ children }) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-soft ring-1 ring-dg/10">
      {/* Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Ivory to Forest-Sage Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F8ED] via-[#EDF4E2] to-[#E3EBD7]" />

        {/* Dual-Tone Protective Security Ambient Glows */}
        <div className="absolute -top-16 left-1/4 h-80 w-80 rounded-full bg-forest/[0.08] blur-[90px]" />
        <div className="absolute -bottom-16 right-1/4 h-96 w-96 rounded-full bg-gold/[0.07] blur-[100px]" />

        {/* Subtle Cyber Shield / Hexagonal Watermark Pattern */}
        <svg
          className="absolute right-6 top-6 h-64 w-64 opacity-[0.03]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,5 90,25 90,70 50,95 10,70 10,25" stroke="#1a3826" strokeWidth="2" />
          <polygon points="50,18 78,32 78,63 50,82 22,63 22,32" stroke="#1a3826" strokeWidth="1.5" />
          <polygon points="50,30 66,39 66,57 50,68 34,57 34,39" stroke="#1a3826" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <svg
          className="absolute -left-10 bottom-6 h-56 w-56 opacity-[0.025]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,5 90,25 90,70 50,95 10,70 10,25" stroke="#1a3826" strokeWidth="2" />
        </svg>

        {/* Soft Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #245C35 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ── 5. Analytics Background ── */
export function AnalyticsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Base Gradient: Warm Bone / Ivory to Soft Sage */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3] via-[#F2F5E8] to-[#E7EFE0]" />

      {/* Ambient Lighting Halos Behind Charts */}
      <div className="absolute top-28 left-10 h-[34rem] w-[34rem] rounded-full bg-forest/[0.06] blur-[120px]" />
      <div className="absolute top-1/2 right-12 h-[32rem] w-[32rem] rounded-full bg-gold/[0.06] blur-[110px]" />
      <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-emerald-800/[0.05] blur-[100px]" />

      {/* Subtle Data-Curve Geometric Contours in SVG */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,320 Q300,180 600,280 T1200,200"
          fill="none"
          stroke="#1a3826"
          strokeWidth="1.5"
        />
        <path
          d="M0,480 Q350,380 700,440 T1200,360"
          fill="none"
          stroke="#1a3826"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M0,640 Q250,540 650,600 T1200,520"
          fill="none"
          stroke="#1a3826"
          strokeWidth="2"
        />
      </svg>

      {/* Micro-dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a3826 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Top & Bottom Refined Edge Transitions */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F2F5E8] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2F5E8] to-transparent opacity-70" />
    </div>
  );
}
