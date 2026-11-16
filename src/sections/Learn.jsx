import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Trophy,
  Shield,
  Smartphone,
  BookOpen,
  AlertTriangle,
  Lock,
  Globe,
  Sparkles,
  Check,
  Send,
  Eye,
  Info
} from 'lucide-react';
import { Section, Reveal } from '../components/ui';
import { LearnBackground, QuizAmbientWrapper } from '../components/SectionBackgrounds';
import { TUTORIALS, QUIZ } from '../data';

/* ═══════════════════ INTERACTIVE SMARTPHONE TUTORIAL SIMULATOR ═══════════════════ */
function InteractiveTutorialSimulator() {
  const [selectedTutorial, setSelectedTutorial] = useState('upi');
  const [activeStep, setActiveStep] = useState(0);
  const [lang, setLang] = useState('en');

  const currentTutorial = TUTORIALS.find((t) => t.id === selectedTutorial) || TUTORIALS[0];
  const content = lang === 'te' ? currentTutorial.te : currentTutorial.en;
  const totalSteps = content.steps.length;

  // Reset step when tutorial changes
  const switchTutorial = (id) => {
    setSelectedTutorial(id);
    setActiveStep(0);
  };

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
      {/* Left Column: Tutorial Controls & Step Guide */}
      <div className="lg:col-span-6">
        {/* Language Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dg/10 pb-5">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-forest" />
            <span className="text-sm font-semibold text-dg">Interactive Guide</span>
          </div>

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
              తెలుగు (Telugu)
            </button>
          </div>
        </div>

        {/* Tutorial Topic Selectors */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {TUTORIALS.map((t) => {
            const isSelected = selectedTutorial === t.id;
            return (
              <button
                key={t.id}
                onClick={() => switchTutorial(t.id)}
                className={`rounded-2xl p-3 text-left transition-all ${
                  isSelected
                    ? 'bg-dg text-white shadow-card ring-2 ring-lemon/40'
                    : 'bg-white text-ink/75 shadow-soft ring-1 ring-dg/10 hover:bg-lemon/50 hover:text-dg'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-lemon' : 'bg-forest/40'}`} />
                  <span className="truncate">{t.id.toUpperCase()}</span>
                </div>
                <p className={`mt-1 line-clamp-1 text-xs font-medium ${lang === 'te' ? 'font-telugu' : ''}`}>
                  {lang === 'te' ? t.te.title : t.en.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Narrative Card */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-card ring-1 ring-dg/8">
          <div className="flex items-center justify-between text-xs text-ink/60">
            <span className="font-semibold uppercase tracking-wider text-forest">
              {lang === 'te' ? 'దశ' : 'Step'} {activeStep + 1} of {totalSteps}
            </span>
            <span className="font-mono">{Math.round(((activeStep + 1) / totalSteps) * 100)}% Completed</span>
          </div>

          <h3 className={`mt-2 font-display text-xl font-semibold text-dg ${lang === 'te' ? 'font-telugu' : ''}`}>
            {content.title}
          </h3>

          <div className="mt-4 rounded-2xl bg-gradient-earth p-4 ring-1 ring-dg/10">
            <p className={`text-base font-medium leading-relaxed text-dg ${lang === 'te' ? 'font-telugu' : ''}`}>
              {content.steps[activeStep]}
            </p>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1.5 rounded-full border border-dg/20 px-4 py-2 text-xs font-semibold text-dg transition hover:bg-mist disabled:opacity-30"
            >
              <ArrowLeft size={14} />
              <span>{lang === 'te' ? 'మునుపటిది' : 'Previous'}</span>
            </button>

            <div className="flex gap-1.5">
              {content.steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeStep ? 'w-6 bg-forest' : 'w-2.5 bg-mist ring-1 ring-dg/20'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            <button
              disabled={activeStep === totalSteps - 1}
              onClick={() => setActiveStep((prev) => Math.min(totalSteps - 1, prev + 1))}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-dg disabled:opacity-30"
            >
              <span>{lang === 'te' ? 'తరువాత' : 'Next Step'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Smartphone Mockup */}
      <div className="flex justify-center lg:col-span-6">
        <div className="relative w-full max-w-[320px] rounded-[42px] border-[10px] border-dg bg-dg p-2 shadow-2xl ring-1 ring-white/20">
          {/* Phone Speaker Notch & Front Camera */}
          <div className="absolute left-1/2 top-4 z-20 flex h-4 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black/80">
            <div className="h-2 w-2 rounded-full bg-[#1c2e1f]" />
          </div>

          {/* Phone Screen Display */}
          <div className="relative aspect-[9/18.5] w-full overflow-hidden rounded-[32px] bg-slate-900 pt-7 text-white shadow-inner">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-5 text-[10px] text-white/70">
              <span className="font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>4G VoLTE</span>
                <span>100%</span>
              </div>
            </div>

            {/* Simulated UI Screen based on selected tutorial & step */}
            <div className="mt-4 h-[calc(100%-40px)] overflow-hidden p-4">
              <AnimatePresence mode="wait">
                {selectedTutorial === 'upi' && (
                  <motion.div
                    key={`upi-${activeStep}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div>
                      {/* UPI App Header */}
                      <div className="flex items-center justify-between rounded-xl bg-white/10 p-2.5">
                        <span className="text-xs font-bold text-lemon">⚡ SafeUPI</span>
                        <span className="text-[10px] text-white/60">Verified Bank</span>
                      </div>

                      {/* Recipient Details */}
                      <div className="mt-4 rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lemon text-dg font-bold text-lg">
                          KS
                        </div>
                        <p className="mt-2 text-xs font-semibold text-white">K. Srinivas</p>
                        <p className="text-[10px] text-emerald-400">✓ Verified Merchant ID: ksrinivas@upi</p>

                        <div className="mt-3 rounded-xl bg-white/10 py-2">
                          <span className="text-lg font-bold text-lemon">₹ 150.00</span>
                        </div>
                      </div>

                      {/* Dynamic Step Instruction */}
                      <div className="mt-4 rounded-xl border border-lemon/30 bg-lemon/10 p-3 text-[11px] text-lemon">
                        {activeStep === 0 && '📱 Step 1: Open your UPI app and tap Pay / Scan QR.'}
                        {activeStep === 1 && '🔍 Step 2: Check receiver name before entering any amount!'}
                        {activeStep === 2 && '⚠️ CRITICAL: PIN is required ONLY to SEND money. Never to receive!'}
                      </div>
                    </div>

                    <div className="rounded-xl bg-emerald-600/90 py-2.5 text-center text-xs font-semibold text-white">
                      {activeStep === 2 ? '🔒 Safe Transaction' : 'Continue Payment →'}
                    </div>
                  </motion.div>
                )}

                {selectedTutorial === 'certificate' && (
                  <motion.div
                    key={`cert-${activeStep}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div>
                      {/* Browser Address Bar */}
                      <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-[10px]">
                        <Lock size={11} className="text-emerald-400" />
                        <span className="text-emerald-300 font-mono">serviceonline.gov.in</span>
                      </div>

                      {/* Government Portal View */}
                      <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 text-xs">
                        <p className="font-semibold text-lemon">Government Services Portal</p>
                        <p className="mt-1 text-[10px] text-white/70">Welfare & Certificate Verification</p>

                        <div className="mt-3 space-y-2">
                          <div className="rounded-lg bg-white/10 p-2 text-[10px]">
                            <span className="text-white/50">Application ID: </span>
                            <span className="font-mono text-white">AP-2026-8812</span>
                          </div>

                          <div className="rounded-lg bg-emerald-950/60 p-2 text-[10px] text-emerald-300 border border-emerald-500/30">
                            <span>Status: Approved & Digitally Signed</span>
                          </div>
                        </div>
                      </div>

                      {/* Step Note */}
                      <div className="mt-4 rounded-xl border border-sky-400/30 bg-sky-950/40 p-3 text-[11px] text-sky-200">
                        {activeStep === 0 && '🌐 Check domain ends in .gov.in (Official Government Site).'}
                        {activeStep === 1 && '📝 Enter application number and verify registered phone.'}
                        {activeStep === 2 && '💾 Download digital certificate securely into DigiLocker.'}
                      </div>
                    </div>

                    <div className="rounded-xl bg-forest py-2.5 text-center text-xs font-semibold text-white">
                      Download Official Document 📄
                    </div>
                  </motion.div>
                )}

                {selectedTutorial === 'scam' && (
                  <motion.div
                    key={`scam-${activeStep}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div>
                      {/* Fake SMS Warning */}
                      <div className="flex items-center gap-1.5 rounded-xl bg-red-500/20 p-2 text-[10px] text-red-300">
                        <AlertTriangle size={12} className="text-red-400 shrink-0" />
                        <span>SUSPICIOUS MESSAGE DETECTED</span>
                      </div>

                      {/* Message Bubble */}
                      <div className="mt-4 rounded-2xl bg-red-950/40 p-4 ring-1 ring-red-500/30 text-xs">
                        <p className="text-[10px] text-red-400 font-mono">From: +91-98480-XXXXX</p>
                        <p className="mt-2 text-white/90 leading-relaxed text-[11px]">
                          "URGENT: Your electricity connection will be cut at 9:30 PM due to unpaid bill! Click: bit.ly/pay-bill-now"
                        </p>
                      </div>

                      {/* Scam Defense Rule */}
                      <div className="mt-4 rounded-xl border border-lemon/30 bg-lemon/10 p-3 text-[11px] text-lemon">
                        {activeStep === 0 && '🛑 DO NOT click links demanding urgent or panicky action.'}
                        {activeStep === 1 && '📞 Always call official office number, not sender number.'}
                        {activeStep === 2 && '🛡️ Report cyber fraud immediately: Call 1930 or cybercrime.gov.in'}
                      </div>
                    </div>

                    <div className="rounded-xl bg-red-600/90 py-2.5 text-center text-xs font-semibold text-white">
                      Block & Report Scam 🚫
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════ GAMIFIED DIGITAL SAFETY QUIZ ═══════════════════ */
function GamifiedQuiz() {
  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState(() => Array(QUIZ.length).fill(null));
  const [done, setDone] = useState(false);
  const [dir, setDir] = useState(1);

  const q = QUIZ[cur];
  const a = ans[cur];
  const answered = ans.filter((x) => x !== null).length;
  const score = ans.filter((x, i) => x === QUIZ[i].answer).length;

  const pick = (n) => {
    if (a === null) {
      setAns((p) => p.map((x, i) => (i === cur ? n : x)));
    }
  };

  const reset = () => {
    setAns(Array(QUIZ.length).fill(null));
    setCur(0);
    setDone(false);
  };

  const goTo = (n) => {
    setDir(n > cur ? 1 : -1);
    setCur(n);
  };

  const pct = Math.round((score / QUIZ.length) * 100);

  // Confetti trigger upon completion
  useEffect(() => {
    if (done && score >= 7) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FCF9C6', '#245C35', '#051D04', '#F5C842']
        });
      } catch (err) {
        // Safe fallback if confetti fails
      }
    }
  }, [done, score]);

  /* Results Screen */
  if (done) {
    return (
      <motion.div
        className="overflow-hidden rounded-3xl bg-white shadow-strong ring-1 ring-dg/8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-gradient-earth px-8 py-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12 }}
            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-forest text-lemon shadow-glow"
          >
            <Trophy size={40} />
          </motion.div>

          <p className="font-display text-5xl font-semibold text-dg sm:text-6xl">
            {score}
            <span className="text-2xl text-ink/50"> / {QUIZ.length}</span>
          </p>

          <p className="mt-2 text-xl font-bold text-forest">
            {pct >= 90 ? 'Cyber Safety Champion 🏆' : pct >= 60 ? 'Digital Explorer ⭐' : 'Learning in Progress 📖'}
          </p>

          <div className="mx-auto mt-4 h-3 max-w-xs overflow-hidden rounded-full bg-white/60">
            <motion.div
              className="h-full rounded-full bg-forest"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 text-xs font-semibold text-ink/65">{pct}% Score Achieved</p>
        </div>

        <div className="p-6 sm:p-8">
          <p className="mx-auto max-w-md text-center text-sm text-ink/75">
            {pct >= 80
              ? 'Outstanding performance. You have mastered essential habits to navigate smartphones, digital payments, and rural services securely.'
              : 'Good start. Review the step-by-step interactive simulator above to strengthen your habits on OTP and link safety.'}
          </p>

          {/* Quick Review Matrix */}
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {QUIZ.map((q, i) => {
              const isCorrect = ans[i] === q.answer;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDone(false);
                    setCur(i);
                  }}
                  className={`flex items-center gap-2.5 rounded-xl p-3 text-left text-xs font-medium transition ${
                    isCorrect ? 'bg-sky/40 text-dg hover:bg-sky/60' : 'bg-red-50 text-red-800 hover:bg-red-100'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 size={16} className="shrink-0 text-forest" />
                  ) : (
                    <XCircle size={16} className="shrink-0 text-red-500" />
                  )}
                  <span className="truncate">{q.category}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={reset}
            className="btn-primary mx-auto mt-8 flex"
          >
            <RotateCcw size={16} />
            <span>Retake Safety Quiz</span>
          </button>
        </div>
      </motion.div>
    );
  }

  /* Question Screen */
  return (
    <div id="quiz" className="overflow-hidden rounded-3xl bg-white shadow-strong ring-1 ring-dg/8">
      {/* Header with Live Progress */}
      <div className="border-b border-dg/8 bg-gradient-earth px-6 py-5">
        <div className="mb-3 flex items-center justify-between text-xs sm:text-sm">
          <span className="font-semibold text-dg">
            Question {cur + 1} of {QUIZ.length}
          </span>
          <span className="text-ink/65">{answered} of {QUIZ.length} Answered</span>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-white/70">
          <motion.div
            className="h-full rounded-full bg-forest"
            animate={{ width: `${((cur + 1) / QUIZ.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Question Selector Dots */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {QUIZ.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === cur
                  ? 'w-6 bg-dg'
                  : ans[i] === null
                  ? 'bg-dg/20 hover:bg-dg/40'
                  : ans[i] === QUIZ[i].answer
                  ? 'bg-forest'
                  : 'bg-red-400'
              }`}
              aria-label={`Question ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Question Body */}
      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur}
            initial={{ opacity: 0, x: dir * 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -25 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <span className="pill bg-forest/10 text-forest text-xs font-semibold">
              {q.category}
            </span>

            <h4 className="mt-4 font-display text-xl leading-snug text-dg sm:text-2xl">
              {q.question}
            </h4>

            {/* Answer Options */}
            <div className="mt-6 grid gap-3">
              {q.options.map((opt, n) => {
                const isCorrect = a !== null && n === q.answer;
                const isSelectedWrong = a === n && n !== q.answer;
                const isChosen = a === n;

                return (
                  <motion.button
                    key={n}
                    disabled={a !== null}
                    onClick={() => pick(n)}
                    whileHover={a === null ? { scale: 1.01 } : {}}
                    whileTap={a === null ? { scale: 0.99 } : {}}
                    className={`flex items-center gap-3.5 rounded-2xl border-2 px-5 py-4 text-left text-sm font-medium transition-all ${
                      isCorrect
                        ? 'border-forest bg-sky/40 text-dg font-semibold'
                        : isSelectedWrong
                        ? 'border-red-400 bg-red-50 text-red-900'
                        : isChosen
                        ? 'border-dg bg-mist'
                        : 'border-dg/10 bg-white hover:border-forest/40 hover:bg-mist/50 disabled:cursor-not-allowed'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                        isCorrect
                          ? 'bg-forest text-white'
                          : isSelectedWrong
                          ? 'bg-red-500 text-white'
                          : 'bg-mist text-dg'
                      }`}
                    >
                      {'ABCD'[n]}
                    </span>

                    <span className="flex-1">{opt}</span>

                    {isCorrect && <CheckCircle2 size={18} className="shrink-0 text-forest" />}
                    {isSelectedWrong && <XCircle size={18} className="shrink-0 text-red-500" />}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation Feedback Card */}
            <AnimatePresence>
              {a !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-5 rounded-2xl p-5 ${
                    a === q.answer ? 'bg-sky/50 text-dg' : 'bg-red-50 text-red-900'
                  }`}
                >
                  <p className="flex items-start gap-2 text-sm leading-relaxed">
                    {a === q.answer ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forest" />
                    ) : (
                      <XCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
                    )}
                    <span>
                      <strong>{a === q.answer ? 'Correct! ' : 'Important Note: '}</strong>
                      {q.explanation}
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-dg/10 pt-6">
          <button
            disabled={cur === 0}
            onClick={() => goTo(cur - 1)}
            className="btn border-2 border-dg/15 text-dg hover:border-forest hover:text-forest disabled:opacity-30"
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          {cur < QUIZ.length - 1 ? (
            <button
              onClick={() => goTo(cur + 1)}
              className="btn-primary"
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              disabled={answered < QUIZ.length}
              onClick={() => setDone(true)}
              className="btn-primary disabled:opacity-40"
            >
              <Trophy size={16} />
              <span>See Final Score</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════ MAIN LEARN SECTION EXPORT ═══════════════════ */
export function Learn() {
  return (
    <Section
      id="learn"
      eyebrow="Hands-on Capacity Building"
      title={<>Digital Literacy & Safety Hub</>}
      tone="custom"
      bgOverlay={<LearnBackground />}
    >
      <Reveal>
        <p className="max-w-2xl text-base text-ink/75">
          Step-by-step practical guides designed for first-time smartphone users in rural communities, followed by an interactive safety assessment to reinforce digital awareness.
        </p>
      </Reveal>

      {/* Interactive Smartphone Simulator */}
      <InteractiveTutorialSimulator />

      {/* Divider */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dg/10" />
        </div>
        <div className="relative flex justify-center">
          <span className="flex items-center gap-2 rounded-full bg-dg px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white shadow-card">
            <Shield size={15} className="text-lemon" />
            <span>Community Safety Check</span>
          </span>
        </div>
      </div>

      {/* Gamified Quiz in Dedicated Ambient Wrapper */}
      <QuizAmbientWrapper>
        <Reveal>
          <div className="mb-8">
            <p className="eyebrow text-forest">Interactive Assessment</p>
            <h3 className="section-title text-dg mt-1">Village Cyber Safety Quiz</h3>
            <p className="mt-2 text-sm text-ink/65">
              {QUIZ.length} realistic scenarios covering UPI safety, OTP confidentiality, phishing links, and bank fraud protection.
            </p>
          </div>
          <GamifiedQuiz />
        </Reveal>
      </QuizAmbientWrapper>
    </Section>
  );
}
