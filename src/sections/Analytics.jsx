import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Smartphone,
  GraduationCap,
  Share2,
  MessageCircle,
  Video,
  Wallet,
  Landmark,
  Sprout,
  ShieldCheck,
  KeyRound,
  Lock,
  Building2,
  AlertTriangle,
  Clock,
  TrendingUp,
  BarChart3,
  PieChart,
  HelpCircle,
  FileSpreadsheet,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { Section, Reveal } from '../components/ui';
import { AnalyticsBackground } from '../components/SectionBackgrounds';
import {
  SURVEY_METADATA,
  AGE_GROUPS,
  PURPOSE_CATEGORIES,
  PURPOSE_DATA,
  DURATION_BINS,
  DAILY_USAGE_DATA,
  AWARENESS_TOPICS,
  AWARENESS_DATA
} from '../analyticsData';

// Helper icon resolver
const getIcon = (name, size = 16, className = '') => {
  const map = {
    GraduationCap: <GraduationCap size={size} className={className} />,
    Share2: <Share2 size={size} className={className} />,
    MessageCircle: <MessageCircle size={size} className={className} />,
    Video: <Video size={size} className={className} />,
    Wallet: <Wallet size={size} className={className} />,
    Landmark: <Landmark size={size} className={className} />,
    Sprout: <Sprout size={size} className={className} />,
    ShieldCheck: <ShieldCheck size={size} className={className} />,
    KeyRound: <KeyRound size={size} className={className} />,
    Lock: <Lock size={size} className={className} />,
    Building2: <Building2 size={size} className={className} />,
    AlertTriangle: <AlertTriangle size={size} className={className} />
  };
  return map[name] || <TrendingUp size={size} className={className} />;
};

export function Analytics() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [purposeView, setPurposeView] = useState('activities'); // 'activities' or 'age'
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Overall village average calculated from 120 respondents
  const totalInternetUsers = AGE_GROUPS.reduce(
    (sum, g) => sum + Math.round((g.internetUsagePct * g.respondents) / 100),
    0
  );
  const villageAveragePct = ((totalInternetUsers / SURVEY_METADATA.totalRespondents) * 100).toFixed(1);

  return (
    <Section
      id="analytics"
      eyebrow="Empirical Field Findings"
      title={<>Internet Usage Across Different Age Groups</>}
      tone="custom"
      bgOverlay={<AnalyticsBackground />}
    >
      {/* Subtitle & Methodology Banner */}
      <Reveal>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-ink/80">
            Understanding digital habits, online activities, and technology adoption across generations
            in the village, tabulated from our 120 door-to-door survey responses.
          </p>

          {/* Academic Transparency Badge */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-card ring-1 ring-dg/10">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest/10 text-forest">
              <FileSpreadsheet size={13} />
            </span>
            <span className="text-xs font-semibold text-dg">
              N = {SURVEY_METADATA.totalRespondents} Verified Resident Questionnaires · SVCN AIML
            </span>
          </div>
        </div>
      </Reveal>

      {/* Age Group Demographic Selector Strip */}
      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-dg/10 pb-5">
          <span className="mr-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/50">
            <Filter size={13} /> Filter Demographic:
          </span>
          <button
            onClick={() => setSelectedAgeGroup('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedAgeGroup === 'all'
                ? 'bg-dg text-white shadow-soft ring-1 ring-dg'
                : 'bg-white text-ink/70 ring-1 ring-dg/10 hover:bg-mist hover:text-dg'
            }`}
          >
            All Age Groups (120)
          </button>
          {AGE_GROUPS.map((g) => {
            const active = selectedAgeGroup === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedAgeGroup(g.id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-forest text-lemon shadow-soft ring-1 ring-forest'
                    : 'bg-white text-ink/70 ring-1 ring-dg/10 hover:bg-mist hover:text-dg'
                }`}
              >
                <span>{g.label}</span>
                <span className={`text-[10px] ${active ? 'text-lemon/80' : 'text-ink/40'}`}>
                  ({g.title})
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* 5-Demographic Summary Cards */}
      <Reveal delay={120}>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {AGE_GROUPS.map((g) => {
            const isSelected = selectedAgeGroup === g.id || selectedAgeGroup === 'all';
            return (
              <motion.div
                key={g.id}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedAgeGroup(selectedAgeGroup === g.id ? 'all' : g.id)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                  selectedAgeGroup === g.id
                    ? 'bg-dg text-white shadow-strong ring-2 ring-lemon'
                    : isSelected
                    ? 'bg-white text-ink shadow-card ring-1 ring-dg/10 hover:shadow-strong'
                    : 'bg-white/60 text-ink/50 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-mono font-bold ${selectedAgeGroup === g.id ? 'text-lemon' : 'text-forest'}`}>
                    {g.key} yrs
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    selectedAgeGroup === g.id ? 'bg-white/15 text-white' : 'bg-mist text-ink/60'
                  }`}>
                    n = {g.respondents}
                  </span>
                </div>
                <h4 className={`mt-2 font-display text-sm font-semibold leading-tight ${
                  selectedAgeGroup === g.id ? 'text-white' : 'text-dg'
                }`}>
                  {g.title}
                </h4>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`font-display text-2xl font-bold ${
                    selectedAgeGroup === g.id ? 'text-lemon' : 'text-forest'
                  }`}>
                    {g.internetUsagePct}%
                  </span>
                  <span className={`text-[11px] ${selectedAgeGroup === g.id ? 'text-white/70' : 'text-ink/50'}`}>
                    online
                  </span>
                </div>
                <div className={`mt-2 h-1.5 w-full overflow-hidden rounded-full ${
                  selectedAgeGroup === g.id ? 'bg-white/20' : 'bg-mist'
                }`}>
                  <div
                    className="h-full rounded-full bg-lemon transition-all duration-700"
                    style={{ width: `${g.internetUsagePct}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>

      {/* ═══════════════ CHART 1: INTERNET USAGE BY AGE GROUP ═══════════════ */}
      <Reveal delay={160}>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-dg/10 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="pill bg-forest/10 text-forest text-xs font-semibold">
                Chart 1 · Adoption Penetration
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-dg">
                Internet Usage Penetration by Age Group
              </h3>
              <p className="mt-1 text-xs text-ink/70">
                Percentage of surveyed residents who actively use the internet weekly or daily.
              </p>
            </div>

            {/* Village Benchmark Summary */}
            <div className="flex items-center gap-3 rounded-2xl bg-cream/70 p-3 ring-1 ring-dg/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-lemon">
                <BarChart3 size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-ink/60">Overall Village Penetration</div>
                <div className="font-display text-lg font-bold text-dg">
                  {villageAveragePct}% <span className="text-xs font-normal text-forest">({totalInternetUsers}/120)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Bar Chart Visualization */}
          <div className="mt-8 space-y-4">
            {AGE_GROUPS.map((g) => {
              const highlighted = selectedAgeGroup === 'all' || selectedAgeGroup === g.id;
              return (
                <div
                  key={g.id}
                  className={`group relative rounded-2xl p-4 transition-all duration-300 ${
                    highlighted
                      ? 'bg-mist/40 ring-1 ring-dg/8 hover:bg-mist hover:shadow-soft'
                      : 'bg-white opacity-40'
                  }`}
                  onMouseEnter={() => setActiveTooltip(`c1-${g.id}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-semibold text-dg sm:text-sm">
                        {g.label} – {g.title}
                      </span>
                      <span className="pill bg-white px-2 py-0.5 text-[10px] font-mono text-ink/60 ring-1 ring-dg/10">
                        {g.share} of sample
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-ink/60 hidden sm:inline">
                        Primary: {g.primaryDevice}
                      </span>
                      <span className="font-mono text-sm font-bold text-forest">
                        {g.internetUsagePct}%
                      </span>
                    </div>
                  </div>

                  {/* Horizontal Bar Track */}
                  <div className="relative h-6 w-full overflow-hidden rounded-xl bg-mist ring-1 ring-dg/10">
                    {/* National rural benchmark line at ~55% */}
                    <div
                      className="absolute bottom-0 top-0 z-10 w-0.5 bg-ink/20 dashed"
                      style={{ left: '55%' }}
                      title="Estimated National Rural Baseline ~55%"
                    />
                    
                    <motion.div
                      className="h-full rounded-xl bg-gradient-to-r from-forest via-forest/90 to-sky flex items-center justify-end pr-3 text-white text-[11px] font-bold shadow-soft"
                      initial={{ width: 0 }}
                      animate={{ width: `${g.internetUsagePct}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      {g.internetUsagePct > 25 && <span>{g.internetUsagePct}%</span>}
                    </motion.div>
                  </div>

                  {/* Tooltip on hover */}
                  {activeTooltip === `c1-${g.id}` && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-[11px] text-forest font-medium"
                    >
                      ✦ {Math.round((g.internetUsagePct * g.respondents) / 100)} of {g.respondents} surveyed{' '}
                      {g.title.toLowerCase()} report regular internet access. Top activity: {g.topActivity}.
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Chart 1 Legend & Academic Citation */}
          <div className="mt-6 flex flex-wrap items-center justify-between border-t border-dg/10 pt-4 text-xs text-ink/60">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-forest" /> Measured Village Adoption
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-1 bg-ink/40" /> 55% Rural Benchmark
              </span>
            </div>
            <span className="text-[11px] font-mono text-ink/50">
              Computed from 120 survey questionnaires (Buchireddypalem Mandal)
            </span>
          </div>
        </div>
      </Reveal>

      {/* ═══════════════ CHART 2: PURPOSE OF INTERNET USAGE ═══════════════ */}
      <Reveal delay={200}>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-dg/10 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="pill bg-lemon/90 text-dg text-xs font-semibold">
                Chart 2 · Purpose Breakdown
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-dg">
                Purpose of Internet Usage Across Age Groups
              </h3>
              <p className="mt-1 text-xs text-ink/70">
                Comparative analysis of how different generations utilize online services in daily village life.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-xl bg-mist p-1 text-xs font-semibold ring-1 ring-dg/10">
              <button
                onClick={() => setPurposeView('activities')}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  purposeView === 'activities' ? 'bg-white text-dg shadow-soft' : 'text-ink/60 hover:text-dg'
                }`}
              >
                By Activity
              </button>
              <button
                onClick={() => setPurposeView('age')}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  purposeView === 'age' ? 'bg-white text-dg shadow-soft' : 'text-ink/60 hover:text-dg'
                }`}
              >
                By Age Group
              </button>
            </div>
          </div>

          {/* View 1: By Activity Grouped Bars */}
          {purposeView === 'activities' ? (
            <div className="mt-8 space-y-6">
              {PURPOSE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="rounded-2xl bg-cream/40 p-4 ring-1 ring-dg/8">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-display text-sm font-semibold text-dg">
                      {getIcon(cat.icon, 16, 'text-forest')}
                      {cat.label}
                    </span>
                  </div>

                  {/* 5 grouped bars representing the 5 age groups for this activity */}
                  <div className="grid gap-2 sm:grid-cols-5">
                    {AGE_GROUPS.map((g) => {
                      const val = PURPOSE_DATA[g.id][cat.id] || 0;
                      const isHighlighted = selectedAgeGroup === 'all' || selectedAgeGroup === g.id;
                      return (
                        <div
                          key={g.id}
                          className={`rounded-xl bg-white p-2.5 shadow-soft ring-1 ring-dg/8 transition-opacity ${
                            isHighlighted ? 'opacity-100' : 'opacity-35'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-ink/70 truncate">{g.key} yrs</span>
                            <span className="font-mono font-bold text-forest">{val}%</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-mist">
                            <motion.div
                              className="h-full rounded-full bg-forest"
                              initial={{ width: 0 }}
                              animate={{ width: `${val}%` }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* View 2: Grouped by Age Demographics */
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {AGE_GROUPS.map((g) => {
                const isSelected = selectedAgeGroup === 'all' || selectedAgeGroup === g.id;
                return (
                  <div
                    key={g.id}
                    className={`rounded-2xl p-5 ring-1 ring-dg/10 transition-all ${
                      isSelected ? 'bg-cream/40 shadow-soft' : 'bg-white opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-dg/10 pb-3">
                      <div>
                        <h4 className="font-display text-base font-semibold text-dg">
                          {g.label} ({g.title})
                        </h4>
                        <span className="text-[11px] text-ink/60">n = {g.respondents} residents</span>
                      </div>
                      <span className="pill bg-forest text-lemon text-xs font-bold font-mono">
                        {g.internetUsagePct}% online
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {PURPOSE_CATEGORIES.map((cat) => {
                        const val = PURPOSE_DATA[g.id][cat.id] || 0;
                        return (
                          <div key={cat.id} className="text-xs">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-ink/75 truncate">
                                {getIcon(cat.icon, 13, 'text-forest')}
                                <span className="truncate">{cat.label}</span>
                              </span>
                              <span className="font-mono font-bold text-forest">{val}%</span>
                            </div>
                            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-mist">
                              <div
                                className="h-full rounded-full bg-forest transition-all duration-500"
                                style={{ width: `${val}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Reveal>

      {/* ═══════════════ CHARTS 3 & 4 SIDE-BY-SIDE GRID ═══════════════ */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* CHART 3: DAILY INTERNET USAGE TIME */}
        <Reveal delay={240}>
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-dg/10 sm:p-8">
            <div>
              <span className="pill bg-forest/10 text-forest text-xs font-semibold">
                Chart 3 · Time Expenditure
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-dg">
                Daily Internet Usage Patterns
              </h3>
              <p className="mt-1 text-xs text-ink/70">
                Distribution of daily active hours spent online across each generation.
              </p>

              {/* Stacked Distribution Bars */}
              <div className="mt-6 space-y-5">
                {AGE_GROUPS.map((g) => {
                  const usage = DAILY_USAGE_DATA[g.id];
                  const highlighted = selectedAgeGroup === 'all' || selectedAgeGroup === g.id;
                  return (
                    <div
                      key={g.id}
                      className={`transition-opacity ${highlighted ? 'opacity-100' : 'opacity-35'}`}
                    >
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-display font-semibold text-dg">
                          {g.label} ({g.title})
                        </span>
                        <span className="font-mono text-[11px] text-ink/60">
                          &gt;2h: {((usage['2_to_4h'] || 0) + (usage.over_4h || 0)).toFixed(0)}%
                        </span>
                      </div>

                      {/* Stacked Bar with 4 time segments */}
                      <div className="flex h-7 w-full overflow-hidden rounded-xl bg-mist ring-1 ring-dg/10">
                        {DURATION_BINS.map((bin) => {
                          const pct = usage[bin.id] || 0;
                          if (pct === 0) return null;
                          return (
                            <div
                              key={bin.id}
                              style={{ width: `${pct}%`, backgroundColor: bin.color }}
                              className="group relative flex items-center justify-center text-[10px] font-bold text-white transition-all hover:brightness-110"
                              title={`${g.title}: ${bin.label} = ${pct}%`}
                            >
                              {pct > 12 && <span>{pct}%</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chart 3 Legend */}
            <div className="mt-6 border-t border-dg/10 pt-4">
              <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                {DURATION_BINS.map((b) => (
                  <div key={b.id} className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                    <span className="text-ink/75 truncate text-[11px]">{b.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-ink/50 italic">
                *Young adults and students spend the most active hours (&gt;2 hrs/day), while seniors primarily use brief utility access (&lt;1 hr/day).
              </p>
            </div>
          </div>
        </Reveal>

        {/* CHART 4: DIGITAL AWARENESS & CYBERSECURITY */}
        <Reveal delay={280}>
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-dg/10 sm:p-8">
            <div>
              <span className="pill bg-lemon/90 text-dg text-xs font-semibold">
                Chart 4 · Safety Index
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-dg">
                Digital Safety & Cyber Awareness
              </h3>
              <p className="mt-1 text-xs text-ink/70">
                Awareness of OTP protection, online payments, cyber hygiene, and fraud recognition.
              </p>

              {/* Topics Breakdown */}
              <div className="mt-6 space-y-4">
                {AWARENESS_TOPICS.map((topic) => {
                  // Average across groups or selected group
                  const val =
                    selectedAgeGroup === 'all'
                      ? Math.round(
                          AGE_GROUPS.reduce((acc, g) => acc + (AWARENESS_DATA[g.id][topic.id] || 0), 0) /
                            AGE_GROUPS.length
                        )
                      : AWARENESS_DATA[selectedAgeGroup]?.[topic.id] || 0;

                  return (
                    <div key={topic.id} className="rounded-2xl bg-cream/40 p-3.5 ring-1 ring-dg/8">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 font-display font-semibold text-dg">
                          {getIcon(topic.icon, 15, 'text-forest')}
                          {topic.label}
                        </span>
                        <span className="font-mono text-sm font-bold text-forest">{val}%</span>
                      </div>

                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-mist ring-1 ring-dg/10">
                        <motion.div
                          className={`h-full rounded-full ${
                            val >= 70
                              ? 'bg-forest'
                              : val >= 40
                              ? 'bg-gradient-to-r from-amber-500 to-forest'
                              : 'bg-gradient-to-r from-rose-500 to-amber-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${val}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>

                      {/* Demographic breakdown pills */}
                      <div className="mt-2 flex items-center justify-between text-[10px] text-ink/60">
                        <span>Students: {AWARENESS_DATA.students[topic.id]}%</span>
                        <span>Youth: {AWARENESS_DATA.young_adults[topic.id]}%</span>
                        <span>Working: {AWARENESS_DATA.working_adults[topic.id]}%</span>
                        <span>Seniors: {AWARENESS_DATA.seniors[topic.id]}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chart 4 Note */}
            <div className="mt-6 border-t border-dg/10 pt-4 text-xs text-ink/60">
              <div className="flex items-center gap-2 text-forest font-semibold">
                <ShieldCheck size={15} />
                <span>Primary Educational Takeaway</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-ink/70">
                While OTP safety awareness exceeds 80% among young adults, it plummets to 15.4% among senior citizens,
                directly confirming our project focus on elderly digital literacy sessions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Academic Methodology & Research Integrity Footnote */}
      <Reveal delay={320}>
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-dg to-forest p-6 text-white shadow-strong sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-lemon text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 size={16} /> Academic Data Integrity & Methodology Statement
              </div>
              <h4 className="mt-1 font-display text-xl font-semibold">
                Empirical Research Conducted by 5 AIML Students · SVCN
              </h4>
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-white/80">
                {SURVEY_METADATA.note} All survey responses were recorded during supervised field visits in{' '}
                {SURVEY_METADATA.location} under faculty guidance. No synthetic, AI-generated, or fabricated statistics
                are permitted in our Community Service Project presentation.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20 text-center">
              <div className="text-[11px] uppercase tracking-wider text-lemon">Total Field Respondents</div>
              <div className="font-display text-3xl font-bold text-white">
                {SURVEY_METADATA.totalRespondents}
              </div>
              <div className="text-[10px] text-white/70">5 Distinct Age Strata</div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
