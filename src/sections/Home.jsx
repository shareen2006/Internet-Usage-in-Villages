import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Users,
  GraduationCap,
  Calendar,
  Building2,
  Sparkles,
  Shield,
  Smartphone,
  CheckCircle,
  HelpCircle,
  Wifi,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Section, Reveal } from '../components/ui';
import { ObjectivesBackground } from '../components/SectionBackgrounds';
import VillageHeroScene from '../components/VillageHeroScene';
import { ICONS } from '../components/icons';
import { OBJECTIVES, LOCATION, TEAM, COLLEGE, GUIDE } from '../data';

/* ═══════════════════ HERO SECTION ═══════════════════ */
export function Hero() {
  // 3D tilt effect on the hero card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-dg pt-20 text-white">
      {/* 3D Village Parallax Background Scene */}
      <div className="absolute inset-0">
        <VillageHeroScene className="absolute inset-0 h-full w-full" />
      </div>

      {/* Atmospheric Ambient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dg/50 via-dg/40 to-dg/95 pointer-events-none" />
      <div className="pointer-events-none absolute left-1/4 top-16 h-96 w-96 rounded-full bg-forest/25 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-lemon/10 blur-3xl" />

      {/* Floating Service Badges - Positioned along the outer edges of the illustration, safely away from text & card */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block overflow-hidden z-10">
        {/* Upper Right Edge (in sky near moon) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[4%] top-[14%] 2xl:right-[6%] rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-md ring-1 ring-white/20"
        >
          <span className="flex items-center gap-2 text-xs font-semibold text-lemon">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lemon text-dg">⚡</span>
            <span>UPI Payments & QR Safety</span>
          </span>
        </motion.div>

        {/* Middle Right Edge */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute right-[2%] top-[50%] 2xl:right-[4%] rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-md ring-1 ring-white/20"
        >
          <span className="flex items-center gap-2 text-xs font-semibold text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-forest text-lemon">🏛️</span>
            <span>DigiLocker & Govt. Schemes</span>
          </span>
        </motion.div>

        {/* Lower Right Edge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute right-[5%] bottom-[14%] 2xl:right-[7%] rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-md ring-1 ring-white/20"
        >
          <span className="flex items-center gap-2 text-xs font-semibold text-lemon">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lemon text-dg">🛡️</span>
            <span>OTP & Phishing Shield</span>
          </span>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 md:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28 xl:py-32">
        {/* Left Column (Content) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 z-20"
        >
          {/* Top Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 rounded-full border border-lemon/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lemon shadow-card backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lemon opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lemon" />
            </span>
            <span>B.Tech Community Service Project · Digital India</span>
          </motion.div>

          {/* Heading - Elegant, bold, properly spaced, non-overlapping */}
          <h1 className="font-display text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] lg:leading-[1.15] max-w-2xl">
            Bridging the{' '}
            <span className="relative inline-block text-lemon">
              Digital Divide
              <svg
                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3"
                viewBox="0 0 240 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 Q60 2 120 7 T238 5"
                  fill="none"
                  stroke="#FCF9C6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>{' '}
            in Rural India
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            A comprehensive field study and community empowerment initiative examining internet habits,
            financial inclusion, and cyber fraud vulnerability in{' '}
            <strong className="text-lemon font-medium">{LOCATION.locality}, {LOCATION.mandal}</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2.5 rounded-full bg-lemon px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-dg shadow-glow transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
            >
              <span>Explore Field Gallery</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#learn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-lemon hover:bg-white/15 hover:text-lemon active:scale-95"
            >
              <span>Digital Simulator</span>
            </a>

            <a
              href="#quiz"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-lemon/90 underline-offset-4 hover:underline sm:text-sm py-2"
            >
              <span>Take Cyber Quiz →</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-7 sm:pt-8 sm:grid-cols-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-lemon sm:text-3xl">15</span>
              <span className="text-xs text-white/70">Geotagged Visits</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-lemon sm:text-3xl">5</span>
              <span className="text-xs text-white/70">Student Team</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-lemon sm:text-3xl">AIML</span>
              <span className="text-xs text-white/70">Department</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-lemon sm:text-3xl">100%</span>
              <span className="text-xs text-white/70">Direct Outreach</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Interactive 3D Perspective Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 z-20 max-w-md mx-auto lg:max-w-none w-full"
          style={{ perspective: 1000 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 p-1 shadow-2xl backdrop-blur-xl ring-1 ring-white/25 transition-shadow hover:shadow-glow"
          >
            {/* Card Body */}
            <div className="relative rounded-[22px] bg-dg/85 p-6 backdrop-blur-md sm:p-7">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lemon text-dg font-bold">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-lemon">
                      Project Location
                    </span>
                    <p className="font-display text-lg font-semibold text-white leading-tight">
                      {LOCATION.locality}
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-forest/40 px-3 py-1 font-mono text-[10px] text-lemon ring-1 ring-forest/60">
                  GPS Active
                </span>
              </div>

              {/* Coordinates & Region */}
              <div className="mt-4 rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10 text-xs">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/60">Mandal & District:</span>
                  <span className="font-medium text-white">{LOCATION.mandal}, {LOCATION.district}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-white/80">
                  <span className="text-white/60">State & Country:</span>
                  <span className="font-medium text-white">{LOCATION.state}, {LOCATION.country}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-white/80 font-mono text-[11px]">
                  <span className="text-white/60">Geo-Coordinates:</span>
                  <span className="text-lemon">14.54133° N, 79.88346° E</span>
                </div>
              </div>

              {/* Institutional Credentials */}
              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-white/80">
                  <Building2 size={15} className="mt-0.5 shrink-0 text-lemon" />
                  <div>
                    <span className="font-semibold text-white">{COLLEGE.name}</span>
                    <p className="text-[11px] text-white/60">{COLLEGE.department} · {COLLEGE.year}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-white/80">
                  <GraduationCap size={15} className="mt-0.5 shrink-0 text-lemon" />
                  <div>
                    <span className="font-semibold text-white">Guide: {GUIDE.name}</span>
                    <p className="text-[11px] text-white/60">{GUIDE.qualification}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-white/80">
                  <Users size={15} className="mt-0.5 shrink-0 text-lemon" />
                  <div>
                    <span className="font-semibold text-white">Student Researchers: {TEAM.length}</span>
                    <p className="text-[11px] text-white/60">AIML Engineering Undergraduates</p>
                  </div>
                </div>
              </div>

              {/* Bottom Pulse Bar */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-forest/30 px-4 py-2.5 text-xs text-lemon ring-1 ring-forest/50">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles size={13} />
                  <span>Fieldwork Complete</span>
                </span>
                <span className="text-[11px] text-white/70">Verified Survey</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave Transition to Next Section */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 70"
          className="w-full fill-mist"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0 Q360 70 720 35 T1440 25 V70 H0Z" />
        </svg>
      </div>
    </section>
  );
}

/* ═══════════════════ ABOUT SECTION (NON-REPETITIVE EDITORIAL LAYOUT) ═══════════════════ */
export function About() {
  const [activeTab, setActiveTab] = useState('challenge');

  return (
    <Section id="about" eyebrow="Context & Motivation" title={<>Why Digital Inclusion Matters in Villages</>}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Asymmetric Narrative & Interactive Comparison */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="prose prose-lg text-ink/85">
              <p className="font-display text-2xl font-normal leading-relaxed text-dg sm:text-3xl">
                While urban centers experience high-speed 5G and seamless digital transactions, rural communities often stand at the fragile threshold of the digital divide.
              </p>

              <p className="mt-4 text-base leading-relaxed text-ink/75">
                In villages like <strong className="text-dg">Kodandaramapuram (Buchireddypalem)</strong>, smartphones are now widespread, yet true digital empowerment remains hindered by apprehension, linguistic barriers, and fear of financial cybercrime.
              </p>
            </div>
          </Reveal>

          {/* Interactive "Rural Reality vs. Digital Promise" Toggle (Breaks Card Monotony) */}
          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-dg/8">
              {/* Tab Selector */}
              <div className="flex border-b border-dg/10 bg-mist/60 p-2">
                <button
                  onClick={() => setActiveTab('challenge')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                    activeTab === 'challenge'
                      ? 'bg-dg text-white shadow-card'
                      : 'text-ink/65 hover:text-dg'
                  }`}
                >
                  <HelpCircle size={15} />
                  <span>The Rural Challenge</span>
                </button>

                <button
                  onClick={() => setActiveTab('impact')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                    activeTab === 'impact'
                      ? 'bg-forest text-white shadow-card'
                      : 'text-ink/65 hover:text-dg'
                  }`}
                >
                  <CheckCircle size={15} />
                  <span>Our Field Intervention</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'challenge' ? (
                    <motion.div
                      key="challenge"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3.5 text-sm text-ink/80"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs">✕</span>
                        <p><strong>Fear of Digital Payments:</strong> Residents worry about losing life savings due to entering a PIN or clicking an unfamiliar link.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs">✕</span>
                        <p><strong>Dependence on Middlemen:</strong> Paying excessive fees or traveling kilometers to mandal offices for routine government certificates.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs">✕</span>
                        <p><strong>Vulnerability to OTP Fraud:</strong> Fraudulent calls posing as bank officers asking for CVV, OTP, or remote screen sharing apps.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3.5 text-sm text-ink/80"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">✓</span>
                        <p><strong>Patient, Doorstep Literacy:</strong> Explaining smartphone menus, text-size adjustments, and Wi-Fi security in everyday Telugu.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">✓</span>
                        <p><strong>Demystifying UPI Transactions:</strong> Teaching the golden rule: <em>PIN is required only to SEND money, never to RECEIVE</em>.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">✓</span>
                        <p><strong>Accessing .gov.in Portals:</strong> Checking scholarship status, welfare benefits, and DigiLocker certificates right on personal devices.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Visual Research Showcase Card */}
        <div className="lg:col-span-5">
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dg via-forest to-dg p-8 text-white shadow-strong">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/5" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-lemon/10" />

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lemon text-dg">
                <MapPin size={24} strokeWidth={2.5} />
              </span>

              <p className="mt-5 font-display text-3xl font-semibold leading-tight text-white">
                Kodandaramapuram
              </p>
              <p className="mt-1 text-sm text-lemon">
                Buchireddypalem Mandal · SPSR Nellore District
              </p>

              <p className="mt-5 text-sm leading-relaxed text-white/80">
                A vibrant agricultural and rural residential community where practical digital skills translate directly into saved travel expenses, fraud prevention, and expanded opportunities for student education.
              </p>

              {/* Research Highlights List */}
              <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-xs text-white/85">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Study Type:</span>
                  <span className="font-semibold text-lemon">Community Service Project</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Target Population:</span>
                  <span className="font-semibold text-white">Youth, Farmers, Women & Seniors</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Institutional Support:</span>
                  <span className="font-semibold text-white">SVCN Engineering College</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Faculty Mentor:</span>
                  <span className="font-semibold text-lemon">{GUIDE.name}</span>
                </div>
              </div>

              {/* Action Link to Gallery */}
              <a
                href="#gallery"
                className="mt-7 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-semibold text-lemon backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <span>View Geotagged Field Photographs</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════ OBJECTIVES SECTION (CONNECTED ROADMAP / BENTO GRID) ═══════════════════ */
export function Objectives() {
  const [selectedObj, setSelectedObj] = useState(0);

  const objectiveHighlights = [
    {
      challenge: 'Unfamiliarity with smartphone settings and web browsers.',
      action: 'Hands-on demonstrations adjusting font sizes, setting up Wi-Fi, and safe searching.',
      impact: 'Villagers gain baseline self-reliance navigating everyday apps.'
    },
    {
      challenge: 'Misconceptions that the internet is only for entertainment or dangerous scams.',
      action: 'Direct discussions highlighting education portals, crop prices, and weather forecasts.',
      impact: 'Families recognize practical utility of connectivity for household income.'
    },
    {
      challenge: 'Isolation from distant relatives and difficulty using modern video tools.',
      action: 'Step-by-step coaching on WhatsApp calls, voice messaging, and group privacy.',
      impact: 'Senior residents communicate freely with family without relying on others.'
    },
    {
      challenge: 'Extreme hesitation using UPI due to fear of losing money unknowingly.',
      action: 'Practical live demonstrations scanning merchant QRs, verifying names, and protecting the PIN.',
      impact: 'Villagers adopt cashless convenience with complete peace of mind.'
    },
    {
      challenge: 'Costly trips to administrative centers for simple certificate applications.',
      action: 'Teaching residents how to verify .gov.in domains, track applications, and use DigiLocker.',
      impact: 'Direct access to welfare schemes without middlemen commissions.'
    },
    {
      challenge: 'Increasing incidence of OTP scams and deceptive prize links on messaging apps.',
      action: 'Community awareness sessions on recognizing phishing, reporting to 1930, and password hygiene.',
      impact: 'Zero tolerance for fraudulent callers and stronger community cybersecurity resilience.'
    }
  ];

  return (
    <Section
      id="objectives"
      eyebrow="Structured Goals"
      title={<>Project Objectives & Intervention Roadmap</>}
      tone="custom"
      bgOverlay={<ObjectivesBackground />}
    >
      <Reveal>
        <p className="max-w-2xl text-base text-ink/75">
          Rather than abstract goals, our Community Service Project follows six pragmatic, progressive milestones designed to transition rural residents from basic awareness to independent digital confidence.
        </p>
      </Reveal>

      {/* Interactive Milestone Selector Strip */}
      <Reveal delay={80}>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {OBJECTIVES.map((obj, i) => (
            <button
              key={obj.title}
              onClick={() => setSelectedObj(i)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all ${
                selectedObj === i
                  ? 'bg-dg text-white shadow-card'
                  : 'bg-mist text-ink/70 hover:bg-lemon hover:text-dg'
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                selectedObj === i ? 'bg-lemon text-dg' : 'bg-white text-ink/60'
              }`}>
                {i + 1}
              </span>
              <span>{obj.title}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Featured Milestone Card (Deep Focus) */}
      <Reveal delay={120}>
        <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-mist via-white to-sky/30 p-6 shadow-card ring-1 ring-dg/8 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest text-lemon shadow-md">
                {(() => {
                  const Icon = ICONS[OBJECTIVES[selectedObj].icon];
                  return <Icon size={26} />;
                })()}
              </span>
              <div>
                <span className="pill bg-forest/10 text-forest text-xs font-semibold">
                  Milestone 0{selectedObj + 1}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-dg sm:text-3xl">
                  {OBJECTIVES[selectedObj].title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/80">
                  {OBJECTIVES[selectedObj].text}
                </p>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-dg/10 lg:w-72">
              <p className="text-[11px] font-bold uppercase tracking-wider text-forest">Target Group</p>
              <p className="mt-1 text-xs font-medium text-dg">Kodandaramapuram Village Households</p>
              <p className="mt-2 text-[11px] text-ink/60">Field method: Direct one-on-one sessions</p>
            </div>
          </div>

          {/* 3-Column Breakdown of Selected Milestone */}
          <div className="mt-8 grid gap-4 border-t border-dg/10 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-dg/5">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">The Problem</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/75">
                {objectiveHighlights[selectedObj].challenge}
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-dg/5">
              <p className="text-xs font-bold uppercase tracking-wider text-forest">Field Intervention</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/75">
                {objectiveHighlights[selectedObj].action}
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-dg/5">
              <p className="text-xs font-bold uppercase tracking-wider text-dg">Community Outcome</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/75">
                {objectiveHighlights[selectedObj].impact}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
