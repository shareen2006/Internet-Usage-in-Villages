import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ClipboardList,
  MessageSquare,
  Eye,
  ChevronDown,
  Info,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Globe,
  Wallet,
  GraduationCap,
  Landmark,
  FileCheck
} from 'lucide-react';
import { Section, Reveal, StaggerParent, StaggerItem, staggerItemVariants, Pending } from '../components/ui';
import { ActivitiesBackground } from '../components/SectionBackgrounds';
import { ICONS } from '../components/icons';
import { SURVEY_STATS, ACTIVITIES } from '../data';

/* ── Survey Methods ── */
const METHODS = [
  {
    icon: ClipboardList,
    title: 'Household Questionnaire',
    tag: 'Quantitative',
    text: 'A structured 25-question interview administered face-to-face to assess device ownership, data plans, UPI familiarity, and online safety practices.',
    stat: 'Door-to-door visits in Kodandaramapuram'
  },
  {
    icon: MessageSquare,
    title: 'Qualitative Resident Interviews',
    tag: 'In-Depth',
    text: 'Open-ended dialogues with senior citizens, self-help groups, and local store owners to uncover apprehensions, digital friction, and real learning needs.',
    stat: 'Multi-generational perspectives'
  },
  {
    icon: Eye,
    title: 'Observational Field Audits',
    tag: 'Observational',
    text: 'Documenting real-time phone usage, QR scanning behavior at village shops, and visits to nearby customer service points (CSP / MeeSeva).',
    stat: 'Real-world commercial behavior'
  },
];

/* ── Four Core Survey Metrics Breakdown ── */
const SURVEY_METRICS_INFO = [
  {
    label: 'Households with a smartphone',
    category: 'Hardware Access',
    icon: Smartphone,
    desc: 'Assesses whether families own at least one active Android/iOS smartphone, and whether it is shared among children and elders.',
  },
  {
    label: 'Residents who use the internet weekly',
    category: 'Digital Habit',
    icon: Globe,
    desc: 'Measures regular online engagement beyond voice calls, including YouTube learning, WhatsApp, and news portals.',
  },
  {
    label: 'Residents who have used UPI',
    category: 'Financial Tech',
    icon: Wallet,
    desc: 'Tracks adoption of QR payments and money transfers, identifying whether users transact independently or seek assistance.',
  },
  {
    label: 'Residents who use government online services',
    category: 'Public Services',
    icon: Landmark,
    desc: 'Measures direct access to digital welfare schemes, ration portal status, DigiLocker, and student scholarship tracking.',
  }
];

export function Survey() {
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <Section id="survey" eyebrow="Methodology & Fieldwork" title={<>Community Survey & Investigation</>}>
      {/* Intro */}
      <Reveal>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-ink/80">
            Our study adopts a multi-method empirical approach combining structured household questionnaires,
            in-depth interviews, and observational field studies across Kodandaramapuram village.
          </p>

          {/* Research Transparency Badge */}
          <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-card ring-1 ring-dg/10">
            <ShieldCheck size={16} className="text-forest" />
            <span className="text-xs font-semibold text-dg">Rigorous Academic Ethics · Zero Fabricated Data</span>
          </div>
        </div>
      </Reveal>

      {/* 3-Method Asymmetric Interactive Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {METHODS.map((m, idx) => {
          const Icon = m.icon;
          const isSelected = selectedMethod === idx;
          return (
            <motion.div
              key={m.title}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedMethod(idx)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 ${
                isSelected
                  ? 'bg-dg text-white shadow-strong ring-2 ring-lemon/40'
                  : 'bg-white text-ink shadow-card ring-1 ring-dg/8 hover:shadow-strong'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isSelected ? 'bg-lemon text-dg' : 'bg-forest/10 text-forest'
                  }`}
                >
                  <Icon size={22} />
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                    isSelected ? 'bg-white/15 text-lemon' : 'bg-mist text-ink/60'
                  }`}
                >
                  {m.tag}
                </span>
              </div>

              <h3 className={`mt-5 font-display text-xl font-semibold leading-snug ${isSelected ? 'text-white' : 'text-dg'}`}>
                {m.title}
              </h3>

              <p className={`mt-3 text-xs leading-relaxed ${isSelected ? 'text-white/80' : 'text-ink/75'}`}>
                {m.text}
              </p>

              <div className={`mt-5 border-t pt-4 text-[11px] font-medium ${
                isSelected ? 'border-white/15 text-lemon' : 'border-dg/10 text-forest'
              }`}>
                📍 {m.stat}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Survey Findings & Live Tabulation Hub */}
      <Reveal delay={120}>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-dg/8">
          {/* Header Banner */}
          <div className="border-b border-dg/10 bg-gradient-earth px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="pill bg-forest/10 text-forest text-xs font-semibold">
                  Fieldwork Parameters
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-dg">
                  Survey Indicators & Tabulation Status
                </h3>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2 rounded-full border border-forest/30 bg-lemon/70 px-4 py-1.5 text-xs font-semibold text-dg shadow-soft">
                <Clock size={13} className="animate-spin text-forest" />
                <span>Fieldwork Conducted · Data Tabulation in Progress</span>
              </div>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-ink/70">
              In accordance with project integrity standards, percentage distributions will be populated dynamically from{' '}
              <code className="rounded bg-white/70 px-1.5 py-0.5 font-mono text-forest">src/data.js (SURVEY_STATS)</code>{' '}
              once complete household tabulation receives guide verification.
            </p>
          </div>

          {/* Indicators Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {SURVEY_METRICS_INFO.map((metric, i) => {
                const Icon = metric.icon;
                const statEntry = SURVEY_STATS[i];
                const hasValue = statEntry && statEntry.value !== null;

                return (
                  <div
                    key={metric.label}
                    className="flex flex-col justify-between rounded-2xl bg-mist/50 p-5 ring-1 ring-dg/8 transition hover:bg-mist"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-lemon">
                          <Icon size={18} />
                        </span>

                        <span className="pill bg-white text-forest text-[11px] font-semibold shadow-soft">
                          {metric.category}
                        </span>
                      </div>

                      <h4 className="mt-4 font-display text-base font-semibold text-dg">
                        {metric.label}
                      </h4>

                      <p className="mt-1.5 text-xs leading-relaxed text-ink/70">
                        {metric.desc}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-dg/10 pt-4">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-semibold text-ink/60">Survey Result:</span>
                        {hasValue ? (
                          <span className="font-display text-xl font-bold text-forest">
                            {statEntry.value}%
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-lemon/90 px-3 py-1 text-[11px] font-semibold text-dg">
                            <Clock size={11} /> Tabulating Field Responses
                          </span>
                        )}
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white ring-1 ring-dg/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-forest to-sky"
                          initial={{ width: 0 }}
                          animate={{ width: hasValue ? `${statEntry.value}%` : '35%' }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ═══════════════════ DIGITAL AWARENESS ACTIVITIES (BENTO GRID) ═══════════════════ */
export function Activities() {
  const [lang, setLang] = useState('en');
  const [expandedId, setExpandedId] = useState(null);

  return (
    <Section
      id="activities"
      eyebrow="Community Modules"
      title={<>Six Spheres of Everyday Digital Life</>}
      tone="custom"
      bgOverlay={<ActivitiesBackground />}
    >
      {/* Header Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-ink/75">
          Practical curriculum modules developed by the student team and taught directly to residents during fieldwork sessions.
        </p>

        {/* Bilingual Switcher */}
        <div className="inline-flex rounded-full bg-mist p-1 shadow-inner">
          <button
            onClick={() => setLang('en')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              lang === 'en' ? 'bg-dg text-white shadow-card' : 'text-ink/65 hover:text-dg'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang('te')}
            className={`rounded-full px-4 py-1.5 font-telugu text-xs font-semibold transition-all ${
              lang === 'te' ? 'bg-forest text-white shadow-card' : 'text-ink/65 hover:text-dg'
            }`}
          >
            తెలుగు
          </button>
        </div>
      </div>

      {/* Asymmetric Bento-style Grid (Breaks Card Layout Monotony!) */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES.map((act) => {
          const Icon = ICONS[act.icon];
          const isExpanded = expandedId === act.id;

          return (
            <motion.div
              key={act.id}
              layout
              className={`group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 transition-all duration-300 ${
                isExpanded
                  ? 'ring-forest shadow-strong'
                  : 'ring-dg/8 hover:-translate-y-1 hover:shadow-strong'
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lemon text-dg shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </span>

                  <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">
                    Module
                  </span>
                </div>

                <h3 className={`mt-5 font-display text-xl font-semibold leading-snug text-dg ${lang === 'te' ? 'font-telugu' : ''}`}>
                  {lang === 'te' ? act.te : act.en.title}
                </h3>

                {lang === 'en' && (
                  <p className="mt-0.5 font-telugu text-xs font-medium text-forest">
                    {act.te}
                  </p>
                )}

                <p className="mt-3 text-xs leading-relaxed text-ink/75">
                  {act.en.desc}
                </p>
              </div>

              {/* Expandable Practical Field Example */}
              <div className="mt-5 border-t border-dg/8 pt-4">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : act.id)}
                  className="flex w-full items-center justify-between text-xs font-semibold text-forest hover:text-dg transition"
                >
                  <span>{isExpanded ? 'Hide Field Example' : 'View Field Example'}</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 rounded-2xl bg-gradient-earth p-3.5 text-xs text-ink/80 leading-relaxed ring-1 ring-dg/10">
                        <strong className="text-dg font-semibold">Practical Demonstration: </strong>
                        {act.en.example}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
