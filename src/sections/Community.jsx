import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image, GraduationCap, MapPin, User, Building2, Lightbulb, Heart, Globe, ChevronLeft, ChevronRight, Tag, CheckCircle2 } from 'lucide-react';
import { Section, Reveal, StaggerParent, StaggerItem, staggerItemVariants } from '../components/ui';
import { GALLERY, GALLERY_CATEGORIES, TEAM, COLLEGE, GUIDE } from '../data';

/* ═══════════════════ FIELD GALLERY ═══════════════════ */
export function Gallery() {
  const [cat, setCat] = useState('all');
  const [activeIdx, setActiveIdx] = useState(null);

  const items = GALLERY.filter((g) => cat === 'all' || g.category === cat);
  const count = (id) => (id === 'all' ? GALLERY.length : GALLERY.filter((g) => g.category === id).length);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % items.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIdx, items.length]);

  const currentPhoto = activeIdx !== null ? items[activeIdx] : null;

  return (
    <Section id="gallery" eyebrow="Fieldwork Documentation" title={<>Field Gallery</>}>
      {/* Intro & Highlights */}
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-ink/80">
            Real photographic documentation captured during our door-to-door surveys, digital literacy sessions,
            and awareness demonstrations across Buchireddypalem and Kodandaramapuram.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="pill bg-forest/10 text-forest font-medium">
              <CheckCircle2 size={13} /> 15 Geotagged Photographs
            </span>
            <span className="pill bg-lemon text-dg font-medium">
              <MapPin size={13} /> Buchireddypalem, AP
            </span>
          </div>
        </div>
      </Reveal>

      {/* Category filter tabs */}
      <Reveal delay={60}>
        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map(([id, label]) => {
            const active = cat === id;
            return (
              <button
                key={id}
                onClick={() => {
                  setCat(id);
                  setActiveIdx(null);
                }}
                aria-pressed={active}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-dg text-white shadow-card'
                    : 'bg-white text-ink/75 shadow-soft ring-1 ring-dg/10 hover:bg-lemon hover:text-dg'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${
                    active ? 'bg-white/20 text-white' : 'bg-mist text-ink/60'
                  }`}
                >
                  {count(id)}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Photographs Grid */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="card text-center text-sm text-ink/60 py-16"
            >
              <Image size={32} className="mx-auto mb-3 text-dg/20" />
              No photographs found in this category.
            </motion.div>
          ) : (
            <motion.div
              key={cat}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {items.map((g, i) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  onClick={() => setActiveIdx(i)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-dg/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-strong"
                >
                  {/* Actual Field Photo */}
                  <img
                    src={g.file}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: g.objectPosition || 'center 15%' }}
                    onError={(e) => {
                      // Fallback gracefully to webp or jpg
                      if (!e.currentTarget.src.endsWith('.webp')) {
                        e.currentTarget.src = `/images/gallery/${g.id}.webp`;
                      }
                    }}
                  />

                  {/* Gradient dark fade for readable overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dg/85 via-dg/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    <span className="pill bg-dg/85 text-lemon backdrop-blur-md text-[10px] font-semibold ring-1 ring-white/10">
                      {g.category.toUpperCase()}
                    </span>
                    {g.tag && (
                      <span className="pill bg-white/90 text-dg backdrop-blur-md text-[10px] font-medium hidden sm:inline-flex">
                        {g.tag}
                      </span>
                    )}
                  </div>

                  {/* Top-Right Zoom Icon */}
                  <div className="absolute right-3 top-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-dg shadow-card backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                      <ZoomIn size={15} />
                    </span>
                  </div>

                  {/* Bottom details strip */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="font-display text-base font-semibold leading-snug drop-shadow-sm line-clamp-2">
                      {g.title}
                    </p>
                    <div className="mt-1.5 flex items-center text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-lemon" />
                        <span className="line-clamp-1">{g.location}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Lightbox / Modal */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dg/95 p-3 sm:p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Dialog */}
            <motion.div
              className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-strong ring-1 ring-white/20"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Display */}
              <div className="relative flex max-h-[68vh] items-center justify-center bg-dg/95 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto.id}
                    src={currentPhoto.file}
                    alt={currentPhoto.title}
                    className="max-h-[68vh] w-full object-contain"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {/* Previous Button */}
                <button
                  onClick={() => setActiveIdx((activeIdx - 1 + items.length) % items.length)}
                  aria-label="Previous photograph"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dg/80 text-white shadow-card backdrop-blur-md transition-all hover:bg-forest hover:scale-110 active:scale-95"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setActiveIdx((activeIdx + 1) % items.length)}
                  aria-label="Next photograph"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-dg/80 text-white shadow-card backdrop-blur-md transition-all hover:bg-forest hover:scale-110 active:scale-95"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setActiveIdx(null)}
                  aria-label="Close preview"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-dg shadow-card backdrop-blur-md transition-all hover:bg-white hover:scale-110"
                >
                  <X size={18} />
                </button>

                {/* Photo Counter Pill */}
                <div className="absolute left-3 top-3">
                  <span className="pill bg-dg/85 text-lemon backdrop-blur-md text-xs font-mono ring-1 ring-white/10">
                    {activeIdx + 1} / {items.length}
                  </span>
                </div>
              </div>

              {/* Photo Details Footer */}
              <div className="bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="pill bg-forest/10 text-forest text-xs font-semibold">
                      {currentPhoto.category.toUpperCase()}
                    </span>
                    {currentPhoto.tag && (
                      <span className="pill bg-mist text-ink/75 text-xs font-medium">
                        <Tag size={11} className="mr-1 inline" />
                        {currentPhoto.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-xs text-ink/65 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-forest" />
                      {currentPhoto.location}
                    </span>
                  </div>
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-dg leading-snug sm:text-2xl">
                  {currentPhoto.title}
                </h3>

                {/* Quick Thumbnail Strip */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1 pt-1">
                  {items.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg transition-all ${
                        idx === activeIdx
                          ? 'ring-2 ring-forest scale-105 shadow-card'
                          : 'opacity-50 hover:opacity-85'
                      }`}
                    >
                      <img
                        src={item.file}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ objectPosition: item.objectPosition || 'center 15%' }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ═══════════════════ REDESIGNED PROJECT TEAM SHOWCASE ═══════════════════ */
export function Team() {
  const memberBadges = [
    'Survey Lead & Outreach',
    'Field Research & Data',
    'Digital Literacy Demo',
    'Community Liaison',
    'Documentation & Analysis'
  ];

  return (
    <section id="team" className="relative scroll-mt-20 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FBFDF6] via-[#F4F7EB] to-[#FAFDF7]">
      {/* Subtle Background Glows & Decorative Ambient Elements */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-lemon/25 blur-3xl" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#245c35_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
              </span>
              <span>Project Research Team</span>
            </div>

            <h2 className="mt-4 font-display text-4xl font-semibold text-dg leading-tight sm:text-5xl md:text-[52px]">
              The Students Behind the Project
            </h2>

            <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
              Undergraduate researchers from the Department of Artificial Intelligence & Machine Learning,
              driving grassroots digital literacy, field data collection, and community empowerment in Buchireddypalem.
            </p>
          </Reveal>
        </div>

        {/* 5 Distinctive Profile Cards */}
        <div className="mt-16">
          <StaggerParent className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((m, i) => (
              <StaggerItem key={m.reg} variants={staggerItemVariants}>
                <TeamCard
                  m={m}
                  index={i}
                  badgeRole={memberBadges[i]}
                />
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>

        {/* Faculty Guide & College Accreditation (Editorial Split Cards) */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Faculty Guide Card */}
          <Reveal delay={100}>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-dg via-forest to-dg p-8 text-white shadow-strong transition-all duration-300 hover:shadow-glow">
              {/* Decorative Watermark */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-white/5 blur-xl" />
              <div className="pointer-events-none absolute right-6 bottom-6 text-white/5 font-display text-8xl font-bold select-none">
                GUIDE
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lemon text-dg shadow-md">
                    <User size={22} strokeWidth={2.5} />
                  </span>

                  <span className="rounded-full border border-lemon/30 bg-lemon/10 px-3 py-1 font-mono text-[11px] font-semibold text-lemon">
                    Faculty Mentor
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-lemon">
                  Project Guide & Supervision
                </p>

                <h3 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {GUIDE.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-white/80">
                  {GUIDE.qualification}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-white/70 border-t border-white/10 pt-4">
                  Assistant Professor & Faculty Guide, guiding community survey methodology, fieldwork ethics,
                  and student research execution under the Community Service Project initiative.
                </p>
              </div>
            </div>
          </Reveal>

          {/* College Accreditation Card */}
          <Reveal delay={150}>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card ring-1 ring-dg/10 transition-all duration-300 hover:shadow-strong">
              {/* Decorative Accent */}
              <div className="pointer-events-none absolute right-6 bottom-6 text-dg/5 font-display text-8xl font-bold select-none">
                SVCN
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-lemon shadow-md">
                    <Building2 size={22} strokeWidth={2.5} />
                  </span>

                  <span className="rounded-full bg-mist px-3 py-1 font-mono text-[11px] font-semibold text-forest">
                    Academic Year {COLLEGE.year}
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-forest">
                  Institutional Affiliation
                </p>

                <h3 className="mt-1 font-display text-xl font-semibold text-dg sm:text-2xl leading-snug">
                  {COLLEGE.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-forest">
                  <GraduationCap size={15} />
                  <span>{COLLEGE.department}</span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-ink/70 border-t border-dg/10 pt-4">
                  📍 {COLLEGE.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Individual Student Card with Editorial Glassmorphism & Proper Framing ── */
function TeamCard({ m, index, badgeRole }) {
  const [failed, setFailed] = useState(false);
  const initials = m.name.split(' ').map((w) => w[0]).slice(0, 2).join('');

  // Subtle unique color accent strip on top of each card
  const accentGradients = [
    'from-emerald-500 to-forest',
    'from-forest to-dg',
    'from-teal-600 to-forest',
    'from-forest to-emerald-700',
    'from-emerald-600 to-dg',
  ];
  const accentGradient = accentGradients[index % accentGradients.length];

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-white/95 p-2.5 shadow-card ring-1 ring-dg/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl hover:ring-forest/30">
      {/* Top Colorful Accent Line */}
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${accentGradient} mb-2.5 opacity-90`} />

      {/* Portrait Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-mist to-[#E4EBD6]">
        {/* Number Indicator (01 - 05) */}
        <div className="absolute left-2.5 top-2.5 z-20">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-dg/85 font-mono text-[11px] font-bold text-lemon shadow-md backdrop-blur-md ring-1 ring-white/20">
            0{index + 1}
          </span>
        </div>

        {/* AIML Badge */}
        <div className="absolute right-2.5 top-2.5 z-20">
          <span className="rounded-lg bg-white/90 px-2 py-0.5 font-mono text-[10px] font-bold text-forest shadow-sm backdrop-blur-md ring-1 ring-dg/10">
            AIML
          </span>
        </div>

        {/* Student Portrait Photograph */}
        {!failed ? (
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-[center_12%] transition-transform duration-700 ease-out group-hover:scale-108"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-forest to-dg text-white">
            <span className="font-display text-4xl font-semibold tracking-wider text-lemon">
              {initials}
            </span>
          </div>
        )}

        {/* Gentle Gradient Bottom Fade for High Legibility */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dg/75 via-dg/20 to-transparent" />

        {/* Role Pill Floating at Bottom of Photo */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10">
          <span className="inline-block w-full truncate rounded-lg bg-dg/80 px-2 py-1 text-center font-mono text-[10px] font-medium text-white/90 backdrop-blur-md">
            {badgeRole}
          </span>
        </div>
      </div>

      {/* Card Details Footer */}
      <div className="p-3.5 pt-4 text-center">
        <h4 className="font-display text-base font-semibold leading-tight text-dg group-hover:text-forest transition-colors sm:text-lg">
          {m.name}
        </h4>

        {/* Registration Number Monospace Pill */}
        <div className="mt-2.5 flex items-center justify-center">
          <span className="inline-flex items-center gap-1 rounded-lg border border-dg/15 bg-mist/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-dg shadow-inner">
            <span className="text-forest/70 font-sans text-[10px]">REG:</span>
            <span>{m.reg}</span>
          </span>
        </div>

        <p className="mt-2 text-[10px] font-medium text-ink/60 uppercase tracking-wider">
          SVCN · Nellore
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════ CONCLUSION ═══════════════════ */
export function Conclusion() {
  const highlights = [
    { icon: Globe, text: 'Digital India reaches its goal only when people in every village can use the internet with confidence.' },
    { icon: Heart, text: 'Awareness protects families from fraud and opens access to learning, payments and services that save time and money.' },
    { icon: Lightbulb, text: 'The most useful digital skills are the simplest ones, taught patiently in the language people speak every day.' },
  ];

  return (
    <Section id="conclusion" eyebrow="Conclusion" title={<>Digital awareness that empowers villages</>} tone="dark">
      <div className="grid gap-8 lg:grid-cols-5">

        {/* Left content */}
        <div className="space-y-6 lg:col-span-3">
          {highlights.map(({ icon: Icon, text }, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex gap-5">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-lemon/15 text-lemon ring-1 ring-lemon/20">
                  <Icon size={18} />
                </span>
                <p className="text-lg leading-relaxed text-white/85">{text}</p>
              </div>
            </Reveal>
          ))}

          {/* CTA buttons */}
          <Reveal delay={350}>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#learn" className="btn bg-lemon text-dg hover:bg-white shadow-card">
                Learn Digital Skills
              </a>
              <a href="#survey" className="btn border border-lemon/40 text-lemon hover:bg-lemon/10">
                View Survey
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right findings card */}
        <Reveal delay={200} className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-3xl border border-lemon/20 bg-white/5 p-7 backdrop-blur-sm">
            {/* Decorative */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lemon/5" />

            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-lemon/15 ring-1 ring-lemon/25">
              <GraduationCap size={20} className="text-lemon" />
            </span>
            <p className="relative mt-4 text-xs font-bold uppercase tracking-widest text-lemon">Findings</p>
            <p className="relative mt-3 leading-relaxed text-white/75">
              The conclusion of our findings will be written once the survey results are analysed and entered in the project.
            </p>

            <div className="relative mt-6 border-t border-lemon/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-lemon/70 mb-3">Study area</p>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-lemon" />
                <span>Kodandaramapuram, Buchireddypalem, SPSR Nellore District</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                <GraduationCap size={14} className="text-lemon" />
                <span>{COLLEGE.name}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
