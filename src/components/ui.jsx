import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ── Reveal: fade + slide up on scroll ── */
export function Reveal({ children, className = '', delay = 0, y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

/* ── StaggerParent: children animate in one after another ── */
export function StaggerParent({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: delay / 1000 } } }}>
      {children}
    </motion.div>
  );
}

export const StaggerItem = motion.div;
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Section wrapper ── */
export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = 'mist',
  noMaxW = false,
  className = '',
  bgOverlay = null
}) {
  const dark = tone === 'dark';
  const bg = tone === 'white' ? 'bg-white' : dark ? 'bg-dg text-white' : tone === 'earth' ? 'bg-gradient-earth' : '';
  return (
    <section id={id} className={`relative scroll-mt-20 section-y ${bg} ${className}`}>
      {bgOverlay}
      <div className={`relative z-10 mx-auto px-5 ${noMaxW ? '' : 'max-w-7xl'}`}>
        <Reveal className="max-w-3xl">
          <p className={`eyebrow ${dark ? 'text-lemon' : 'text-forest'}`}>{eyebrow}</p>
          <h2 className={`section-title ${dark ? 'text-white' : 'text-dg'}`}>{title}</h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ── Pending badge ── */
export function Pending({ label = 'Awaiting survey data' }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-forest/40 bg-lemon/60 px-3 py-1 text-xs font-medium text-dg">
      ⏳ PENDING: {label}
    </span>
  );
}

/* ── StatBars with animated fill on scroll ── */
export function StatBars({ items }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <ul ref={ref} className="space-y-6">
      {items.map((it) => (
        <li key={it.label}>
          <div className="mb-2 flex items-center justify-between gap-4 text-sm">
            <span className="font-medium">{it.label}</span>
            {it.value == null
              ? <Pending label="survey" />
              : <span className="font-bold text-forest text-base">{it.value}%</span>}
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-mist">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-forest to-sky"
              initial={{ width: 0 }}
              animate={inView && it.value != null ? { width: `${it.value}%` } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ── AnimatePresence re-export for use elsewhere ── */
export { AnimatePresence };
