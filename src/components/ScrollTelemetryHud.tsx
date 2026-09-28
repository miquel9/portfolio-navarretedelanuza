import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Activity, Layers } from 'lucide-react';

interface ScrollTelemetryHudProps {
  activeSection: string;
}

export const ScrollTelemetryHud: React.FC<ScrollTelemetryHudProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollDepth(Math.round(scrollTop));
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top glowing progress line */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] bg-[#38bdf8]/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#93c5fd] shadow-[0_0_12px_#38bdf8] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating telemetry HUD (desktop) */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-auto select-none font-mono">
        <div className="p-4 bg-[#0a1329]/80 backdrop-blur-xl border border-[#38bdf8]/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] rounded-md flex flex-col gap-3 text-[11px] tracking-wider text-slate-300 min-w-[190px]">
          <div className="flex items-center justify-between text-[#38bdf8] font-semibold border-b border-[#38bdf8]/15 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
              <span className="truncate uppercase">{activeSection}</span>
            </div>
            <Activity className="w-3.5 h-3.5 text-[#38bdf8] opacity-80" />
          </div>

          <div className="flex justify-between items-center w-full">
            <span className="text-slate-400 text-[10px]">SCROLL DEPTH</span>
            <span className="text-white font-semibold tabular-nums">
              {String(scrollDepth).padStart(4, '0')} PX
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <span className="text-slate-400 text-[10px]">STATUS</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              UPV CS
            </span>
          </div>

          <div className="flex justify-between items-center w-full border-t border-[#38bdf8]/15 pt-2">
            <span className="text-slate-400 text-[10px]">PORTFOLIO</span>
            <span className="text-[#60a5fa] font-mono">V2.4 // 2026</span>
          </div>

          {/* Quick jump nav anchors */}
          <div className="flex items-center justify-between pt-1 gap-1 border-t border-[#38bdf8]/10 text-[10px] text-slate-400">
            <a href="#hero" className="hover:text-[#38bdf8] px-1 py-0.5 rounded transition-colors" title="Inicio">01</a>
            <span>·</span>
            <a href="#about" className="hover:text-[#38bdf8] px-1 py-0.5 rounded transition-colors" title="Sobre Mí & UPV">02</a>
            <span>·</span>
            <a href="#projects" className="hover:text-[#38bdf8] px-1 py-0.5 rounded transition-colors" title="Proyectos">03</a>
            <span>·</span>
            <a href="#stack" className="hover:text-[#38bdf8] px-1 py-0.5 rounded transition-colors" title="Stack">04</a>
            <span>·</span>
            <a href="#contact" className="hover:text-[#38bdf8] px-1 py-0.5 rounded transition-colors" title="Contacto">05</a>
          </div>
        </div>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="mt-3 px-3 py-2 rounded bg-[#0a1329]/90 border border-[#38bdf8]/30 hover:border-[#38bdf8] text-[#38bdf8] hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center gap-1.5 text-xs font-mono group"
            title="Volver arriba"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </aside>
    </>
  );
};
