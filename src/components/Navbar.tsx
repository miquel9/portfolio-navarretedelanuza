import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: '// SOBRE MÍ' },
    { href: '#projects', label: '// PROYECTOS' },
    { href: '#stack', label: '// TECH STACK' },
    { href: '#philosophy', label: '// PRINCIPIOS' },
    { href: '#contact', label: '// CONTACTO' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#050b18]/85 backdrop-blur-md border-b border-[#38bdf8]/15">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Anchor */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-[#0a1329] border border-[#60a5fa]/40 flex items-center justify-center font-mono font-bold text-[#38bdf8] group-hover:border-[#38bdf8] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
            MN
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-[#38bdf8] transition-colors">
              MIQUEL NAVARRETE
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
              Ingeniería Informática UPV
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-[#38bdf8] transition-colors py-1 relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Trailing Action & Status */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f1c3d]/60 border border-[#38bdf8]/20 text-[11px] font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-200">Disponible para proyectos</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/miquel9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-all font-mono text-xs flex items-center gap-1"
              title="GitHub: miquel9"
            >
              <span>GH</span>
              <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-all font-mono text-xs flex items-center gap-1"
              title="LinkedIn: navarretedelanuza"
            >
              <span>IN</span>
              <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
            </a>
          </div>

          <a
            href="#contact"
            className="hidden sm:flex px-4 py-2 rounded bg-[#38bdf8] text-[#050b18] font-mono font-semibold text-xs tracking-wider items-center gap-1.5 hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-95"
          >
            <span>CONTACTAR</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 text-slate-200 hover:text-[#38bdf8]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070e1e]/95 backdrop-blur-xl border-b border-[#38bdf8]/20 px-6 py-5 flex flex-col gap-4 font-mono text-xs animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 pb-2 border-b border-[#38bdf8]/15 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Estudiante de Grado en Ing. Informática · UPV</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#38bdf8] py-2 transition-colors border-b border-[#38bdf8]/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-2.5 px-4 rounded bg-[#38bdf8] text-[#050b18] font-bold text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            <span>CONTACTAR // INICIAR DIÁLOGO</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
