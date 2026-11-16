import { useEffect, useState } from 'react';
import { Menu, X, Wifi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const linkBase = 'relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200';
  const linkClass = (id) =>
    `${linkBase} ${active === id ? 'text-lemon' : 'text-white/80 hover:text-white'}`;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dg/95 backdrop-blur-md shadow-strong' : 'bg-dg'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 font-display text-sm font-semibold text-white leading-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lemon text-dg">
            <Wifi size={16} strokeWidth={2.5} />
          </span>
          <span>
            Internet Usage <span className="text-lemon">in Villages</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 xl:flex">
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {active === id && (
                  <motion.span layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/15"
                    transition={{ type: 'spring', duration: 0.4 }} />
                )}
                <span className="relative">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"
          className="rounded-lg p-2 text-white hover:bg-white/10 xl:hidden transition-colors">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.ul className="grid grid-cols-2 gap-1 border-t border-white/10 px-5 pb-5 pt-3 sm:grid-cols-3 xl:hidden"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            {NAV.map(([id, label], i) => (
              <motion.li key={id}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}>
                <a href={`#${id}`} onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active === id ? 'bg-white/15 text-lemon' : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}>
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
