import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full z-20 border-t border-[#38bdf8]/15 bg-[#040813] py-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
          <span className="font-display font-bold text-white">MIQUEL NAVARRETE DE LANUZA</span>
          <span>//</span>
          <span>ESTUDIANTE INGENIERÍA INFORMÁTICA · UPV</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/miquel9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#38bdf8] transition-colors"
          >
            GITHUB
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/navarretedelanuza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#38bdf8] transition-colors"
          >
            LINKEDIN
          </a>
          <span>·</span>
          <span className="text-slate-500">VALENCIA, ESPAÑA</span>
          <span>·</span>
          <button
            onClick={scrollToTop}
            className="text-[#38bdf8] hover:text-white hover:underline flex items-center gap-1 transition-colors"
          >
            <span>SUBIR</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
