import React from 'react';
import { GraduationCap, Cpu, Workflow, Building2, CheckCircle2 } from 'lucide-react';

export const AboutUPV: React.FC = () => {
  return (
    <section className="py-20 border-y border-[#38bdf8]/15 bg-[#0a1329]/40 backdrop-blur-md" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Title Pillar */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs text-[#38bdf8] tracking-widest block">
              [ PERFIL // FORMACIÓN &amp; VALOR ]
            </span>
            <h2 className="font-display text-3xl text-white font-bold tracking-tight">
              INGENIERÍA INFORMÁTICA &amp; DESARROLLO DE SOFTWARE
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0f1c3d]/60 border border-[#38bdf8]/30 text-xs font-mono text-[#93c5fd]">
              <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
              <span>UPV · Universitat Politècnica de València</span>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="md:col-span-8 text-slate-300 space-y-4 leading-relaxed text-sm md:text-base">
            <p>
              Actualmente estoy cursando el <strong className="text-white font-semibold">Grado en Ingeniería Informática</strong> en la{' '}
              <strong className="text-[#38bdf8] font-semibold">Universitat Politècnica de València (UPV)</strong>. 
              Mi enfoque une el rigor matemático y algorítmico de la carrera con la construcción de soluciones informáticas prácticas que generen valor real desde el primer despliegue.
            </p>
            <p>
              Me especializo en diseñar <strong className="text-white font-medium">arquitecturas escalables y limpias</strong>, 
              orquestar <strong className="text-white font-medium">automatizaciones avanzadas con n8n e Inteligencia Artificial</strong>, 
              y desarrollar aplicaciones web completas (front-end y back-end) enfocadas en la optimización de procesos de negocio para empresas locales y usuarios finales.
            </p>

            {/* UPV Focus highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-3.5 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>ALGORITMIA &amp; SISTEMAS</span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  Estructuras de datos, complejidad y concurrencia aprendidas en la UPV.
                </span>
              </div>

              <div className="p-3.5 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[#60a5fa] font-bold">
                  <Workflow className="w-4 h-4" />
                  <span>AUTOMATIZACIÓN IA</span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  Pipelines n8n con Google Gemini Flash y bots Telegram.
                </span>
              </div>

              <div className="p-3.5 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>IMPACTO EN PYMES</span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  Sistemas de presupuestos y facturación automáticos en producción.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
