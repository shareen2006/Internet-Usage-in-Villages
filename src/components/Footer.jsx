import { Wifi, ArrowUp, MapPin, Building2, GraduationCap, Calendar } from 'lucide-react';
import { COLLEGE, LOCATION, GUIDE, TEAM } from '../data';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dg text-white">
      {/* Decorative top wave */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 60" className="w-full fill-mist" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 Q360 0 720 30 T1440 20 V0 H0Z" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-lemon/5 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lemon text-dg">
                <Wifi size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold leading-tight">
                Internet Usage<br /><span className="text-lemon">in Villages</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A B.Tech Community Service Project studying digital awareness and internet usage patterns in rural India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-lemon">Quick links</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[['#about','About'],['#objectives','Objectives'],['#survey','Survey'],['#activities','Activities'],['#learn','Learn'],['#gallery','Gallery']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-lemon">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* College */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-lemon">College</p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Building2 size={14} className="mt-0.5 shrink-0 text-lemon" />
                <span>{COLLEGE.name}</span>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap size={14} className="mt-0.5 shrink-0 text-lemon" />
                <span>{COLLEGE.department}</span>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={14} className="mt-0.5 shrink-0 text-lemon" />
                <span>{COLLEGE.year}</span>
              </div>
            </div>
          </div>

          {/* Study area */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-lemon">Study area</p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-lemon" />
                <span>{LOCATION.locality}, {LOCATION.mandal}<br />{LOCATION.district}<br />{LOCATION.state}</span>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-lemon/15 bg-white/5 p-4">
              <p className="text-xs font-semibold text-lemon">Project Guide</p>
              <p className="mt-1 text-sm text-white/80">{GUIDE.name}</p>
              <p className="text-xs text-white/50">{GUIDE.qualification}</p>
            </div>
          </div>
        </div>

        {/* Team credits strip */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-lemon/70">Student researchers</p>
          <div className="flex flex-wrap gap-2">
            {TEAM.map((m) => (
              <span key={m.reg} className="rounded-full bg-white/8 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/15">
                {m.name} · <span className="font-mono text-white/45">{m.reg}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>Community Service Project · {COLLEGE.year} · Digital India</span>
          <a href="#home"
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-white/60 transition hover:border-lemon/40 hover:text-lemon">
            <ArrowUp size={12} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
