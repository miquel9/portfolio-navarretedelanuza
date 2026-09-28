import React, { useState } from 'react';
import { Terminal, Cpu, Workflow, Layers, Database, Sparkles, Code2, CheckCircle2, ArrowRight } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  const languages = [
    {
      name: 'TypeScript / JavaScript',
      level: 'Avanzado · 95%',
      levelWidth: '95%',
      badge: 'Full-Stack & Tipado Estricto',
      desc: 'Desarrollo de SPAs reactivas, APIs en Node.js y flujos estructurados.',
      color: '#38bdf8'
    },
    {
      name: 'Python',
      level: 'IA & Automatización · 88%',
      levelWidth: '88%',
      badge: 'Scripting & Pipelines',
      desc: 'Orquestación de datos, consumo de APIs y procesamiento de texto/LLMs.',
      color: '#60a5fa'
    },
    {
      name: 'C++ / C',
      level: 'Sistemas & Algoritmia · 82%',
      levelWidth: '82%',
      badge: 'UPV Computer Science',
      desc: 'Gestión de memoria, punteros, complejidad Big-O y sistemas operativos.',
      color: '#38bdf8'
    },
    {
      name: 'Java',
      level: 'POO & Concurrencia · 85%',
      levelWidth: '85%',
      badge: 'Diseño Modular UPV',
      desc: 'Programación orientada a objetos, multithreading y patrones de diseño.',
      color: '#93c5fd'
    },
    {
      name: 'SQL (PostgreSQL)',
      level: 'Modelado Relacional · 86%',
      levelWidth: '86%',
      badge: 'Bases de Datos & Índices',
      desc: 'Diseño E/R, 3FN, transacciones ACID y consultas optimizadas para apps.',
      color: '#34d399'
    }
  ];

  const automationTools = [
    { name: 'n8n Automation', detail: 'Pipelines & Workflows', badge: 'Orquestación' },
    { name: 'Google Gemini API', detail: 'Flash 2.5 & Prompt Eng.', badge: 'Modelos LLM' },
    { name: 'Telegram Bot API', detail: 'Despacho Matinal 08:00', badge: 'Mensajería' },
    { name: 'RSS & Webhooks', detail: 'Extracción de Prensa', badge: 'Eventos' },
    { name: 'Cadenas LLM', detail: 'Filtrado & Síntesis', badge: 'Procesamiento' },
  ];

  const webSystems = [
    { name: 'React & Next.js', detail: 'SPAs & Web Apps Modernas', badge: 'Frontend' },
    { name: 'Tailwind CSS', detail: 'Diseño Limpio & Responsive', badge: 'Estilos' },
    { name: 'Node.js & Express', detail: 'APIs RESTful & Middleware', badge: 'Backend' },
    { name: 'PostgreSQL & Supabase', detail: 'Facturación & Clientes', badge: 'Persistencia' },
    { name: 'Git & GitHub', detail: 'Control de Versiones & CI', badge: 'DevOps' },
  ];

  return (
    <section className="py-24 border-y border-[#38bdf8]/15 bg-[#0a1329]/30 backdrop-blur-sm" id="stack">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#38bdf8]/15">
          <div>
            <span className="font-mono text-xs text-[#38bdf8] tracking-widest block mb-2">
              [ TOOLING &amp; CAPABILITIES // CAPACIDADES ]
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold tracking-tight">
              CORE TECHNICAL STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-300 max-w-md mt-2 md:mt-0">
            Fundamentos de ingeniería informática aprendidos en la UPV, combinados con herramientas de automatización moderna y desarrollo full-stack. Pasa el ratón por los lenguajes para ver su nivel.
          </p>
        </div>

        {/* 3 Matrix Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1: Languages with Interactive Hover Animations */}
          <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/60 transition-all flex flex-col justify-between shadow-card relative overflow-hidden group/card">
            {/* Ambient subtle backglow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-[60px] pointer-events-none group-hover/card:bg-[#38bdf8]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-4">
                <span className="text-[#38bdf8] font-semibold">// 01: LENGUAJES</span>
                <span className="flex items-center gap-1 text-[10px] text-[#38bdf8]/80 font-mono">
                  <Sparkles className="w-3 h-3 text-[#38bdf8] animate-pulse" />
                  HOVER INTERACTIVO
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center justify-between">
                <span>Lenguajes de Programación</span>
                <Terminal className="w-5 h-5 text-[#38bdf8]" />
              </h3>

              {/* Animated Interactive Languages List */}
              <div className="space-y-3 font-mono text-xs">
                {languages.map((lang) => {
                  const isHovered = hoveredLang === lang.name;
                  return (
                    <div
                      key={lang.name}
                      onMouseEnter={() => setHoveredLang(lang.name)}
                      onMouseLeave={() => setHoveredLang(null)}
                      className={`relative p-3 rounded-lg border transition-all duration-200 cursor-pointer overflow-hidden ${
                        isHovered
                          ? 'bg-[#0f1c3d] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-1.5'
                          : 'bg-[#070e1e]/80 border-[#38bdf8]/10 hover:border-[#38bdf8]/30'
                      }`}
                    >
                      {/* Top row: Name & level */}
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold transition-colors ${
                              isHovered ? 'text-white' : 'text-slate-200'
                            }`}
                          >
                            <span className="text-[#38bdf8] mr-1 font-bold">{isHovered ? '>' : '·'}</span>
                            {lang.name}
                          </span>
                        </div>
                        <span
                          className={`text-[11px] font-bold transition-all ${
                            isHovered ? 'text-[#38bdf8] scale-105' : 'text-slate-400'
                          }`}
                        >
                          {lang.level}
                        </span>
                      </div>

                      {/* Micro info on hover */}
                      <div
                        className={`text-[11px] text-slate-300 font-sans transition-all duration-200 overflow-hidden relative z-10 ${
                          isHovered ? 'max-h-16 mt-2 pt-2 border-t border-[#38bdf8]/20 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#60a5fa] mb-0.5">
                          <span>{lang.badge}</span>
                          <span className="text-emerald-400">UPV Verified</span>
                        </div>
                        <p className="text-[11px] text-slate-300">{lang.desc}</p>
                      </div>

                      {/* Glowing bottom progress beam on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8] transition-all duration-300 shadow-[0_0_8px_#38bdf8]"
                          style={{
                            width: isHovered ? lang.levelWidth : '0%',
                            opacity: isHovered ? 1 : 0
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#38bdf8]/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Tipado estático y algoritmia UPV</span>
              <span className="text-[#38bdf8]">5 / 5 DOMINADOS</span>
            </div>
          </div>

          {/* Category 2: Automation & AI */}
          <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-card relative overflow-hidden group/card">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-4">
                <span className="text-[#60a5fa] font-semibold">// 02: AUTOMATIZACIÓN &amp; IA</span>
                <Workflow className="w-4 h-4 text-[#60a5fa]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Orquestación &amp; Modelos</h3>

              <div className="space-y-2.5 font-mono text-xs">
                {automationTools.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#070e1e]/60 border border-[#38bdf8]/10 hover:border-[#60a5fa]/50 hover:bg-[#0f1c3d]/60 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#60a5fa] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.detail}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#0f1c3d] text-[#38bdf8] border border-[#38bdf8]/20">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#38bdf8]/10 text-[11px] font-mono text-slate-400">
              Pipelines n8n autónomos y LLMs para ahorro de tiempo
            </div>
          </div>

          {/* Category 3: Full-Stack & Systems */}
          <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-card relative overflow-hidden group/card">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-4">
                <span className="text-emerald-400 font-semibold">// 03: WEB &amp; SISTEMAS</span>
                <Layers className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Frontend, Backend &amp; Cloud</h3>

              <div className="space-y-2.5 font-mono text-xs">
                {webSystems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#070e1e]/60 border border-[#38bdf8]/10 hover:border-emerald-400/50 hover:bg-[#0f1c3d]/60 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.detail}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#0f1c3d] text-emerald-400 border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#38bdf8]/10 text-[11px] font-mono text-slate-400">
              Desarrollo de software real enfocado en el usuario final
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
