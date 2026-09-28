import React from 'react';
import { Workflow, CheckCircle, Zap, Shield, Sparkles, Building } from 'lucide-react';

export const WorkPhilosophy: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="philosophy">
      <div className="max-w-2xl mb-12">
        <span className="font-mono text-xs text-[#38bdf8] tracking-widest block mb-2">
          [ ENGINEERING VALUES // VALORES ]
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-white font-bold tracking-tight">
          FILOSOFÍA DE TRABAJO
        </h2>
        <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
          Principios rectores que aplico en cada proyecto, desde la orquestación de automatizaciones hasta el desarrollo de software para clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-card group">
          <div>
            <div className="w-10 h-10 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 flex items-center justify-center font-mono font-bold text-[#38bdf8] mb-5 group-hover:scale-105 transition-transform">
              01
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Automatización Inteligente</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Cualquier proceso manual repetitivo que requiera más de 10 minutos al día es candidato a ser automatizado. Conectar n8n, webhooks y modelos como Gemini Flash permite crear flujos autónomos que ahorran decenas de horas semanales.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#38bdf8]/15 font-mono text-xs text-[#38bdf8] flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Eficiencia y velocidad operativa</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-card group">
          <div>
            <div className="w-10 h-10 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 flex items-center justify-center font-mono font-bold text-[#60a5fa] mb-5 group-hover:scale-105 transition-transform">
              02
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Impacto Real en Negocio</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              El software no es un fin en sí mismo, sino una herramienta para resolver problemas concretos. Como en el sistema de facturación para Navarrete Hnos Aluminio, el objetivo es simplificar la vida del usuario y evitar errores costosos.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#38bdf8]/15 font-mono text-xs text-[#60a5fa] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5" />
            <span>Soluciones útiles para usuarios reales</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-7 rounded-xl bg-[#0a1329] border border-[#38bdf8]/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-card group">
          <div>
            <div className="w-10 h-10 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 flex items-center justify-center font-mono font-bold text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
              03
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Rigor de Ingeniería UPV</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mi formación en la Universitat Politècnica de València me inculca la importancia de elegir las estructuras de datos correctas, diseñar arquitecturas modulares y escribir código legible, testeable y preparado para evolucionar.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#38bdf8]/15 font-mono text-xs text-emerald-400 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>Bases sólidas de ciencias de la computación</span>
          </div>
        </div>
      </div>
    </section>
  );
};
