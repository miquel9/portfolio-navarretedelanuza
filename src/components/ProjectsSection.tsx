import React, { useState } from 'react';
import { ArrowUpRight, Play, ExternalLink, Sparkles, Building2, Code2, Server, CheckCircle2, ChevronRight } from 'lucide-react';
import { N8nWorkflowSimulator } from './N8nWorkflowSimulator';
import { FacturacionAppSimulator } from './FacturacionAppSimulator';

export const ProjectsSection: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'n8n' | 'invoice' | 'academic'>('n8n');

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#38bdf8]/15">
        <div>
          <span className="font-mono text-xs text-[#38bdf8] tracking-widest block mb-2">
            [ CASOS DE USO REALES // AUTOMATIZACIÓN &amp; WEB ]
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold tracking-tight">
            PROYECTOS DESTACADOS
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-300 max-w-md mt-3 md:mt-0">
          Sistemas en producción, orquestación con n8n e Inteligencia Artificial, y software de gestión desarrollado para empresas locales.
        </p>
      </div>

      {/* Project Switcher Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
        <button
          onClick={() => setActiveProjectTab('n8n')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
            activeProjectTab === 'n8n'
              ? 'bg-[#38bdf8] text-[#050b18] font-bold shadow-[0_0_20px_rgba(56,189,248,0.35)]'
              : 'bg-[#0a1329] border border-[#38bdf8]/20 text-slate-300 hover:text-white hover:border-[#38bdf8]/50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>01. AUTOMATIZACIÓN N8N &amp; IA</span>
        </button>

        <button
          onClick={() => setActiveProjectTab('invoice')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
            activeProjectTab === 'invoice'
              ? 'bg-[#38bdf8] text-[#050b18] font-bold shadow-[0_0_20px_rgba(56,189,248,0.35)]'
              : 'bg-[#0a1329] border border-[#38bdf8]/20 text-slate-300 hover:text-white hover:border-[#38bdf8]/50'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>02. SISTEMA DE FACTURACIÓN (LOCAL)</span>
        </button>

        <button
          onClick={() => setActiveProjectTab('academic')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
            activeProjectTab === 'academic'
              ? 'bg-[#38bdf8] text-[#050b18] font-bold shadow-[0_0_20px_rgba(56,189,248,0.35)]'
              : 'bg-[#0a1329] border border-[#38bdf8]/20 text-slate-300 hover:text-white hover:border-[#38bdf8]/50'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>03. INGENIERÍA &amp; ALGORITMIA UPV</span>
        </button>
      </div>

      {/* Dynamic Project Display */}
      {activeProjectTab === 'n8n' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Overview Card */}
          <div className="p-8 rounded-xl bg-[#0a1329] border border-[#38bdf8]/25 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#38bdf8] font-bold">// WORKFLOW ORCHESTRATION</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    EN PRODUCCIÓN DIARIA (08:00 AM)
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white font-bold">
                  Automatización en n8n: Síntesis de Noticias con IA &amp; Entrega en Telegram
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-[#38bdf8]">
                  n8n Automation
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-purple-300">
                  Google Gemini Flash
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-[#60a5fa]">
                  Telegram Bot API
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-slate-300">
                  RSS Feeds
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Pipeline desarrollado en <strong>n8n</strong> que se dispara automáticamente cada mañana a las <strong>08:00 AM</strong>. 
              Extrae las últimas noticias de 4 importantes fuentes de prensa (<strong>El País, BBC Mundo, Las Provincias y The New York Times</strong>), 
              las filtra y desduplica mediante JavaScript, y envía el contenido estructurado a una cadena LLM con <strong>Google Gemini Flash</strong>. 
              El modelo redacta un resumen conciso y objetivo categorizado por temáticas que luego es formateado y despachado de forma instantánea al canal privado de Telegram del usuario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#38bdf8]/15 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ahorro diario: ~35 min de lectura</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero clicks: directo a Telegram</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Gemini Flash: síntesis en &lt; 800ms</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Simulator */}
          <N8nWorkflowSimulator />
        </div>
      )}

      {activeProjectTab === 'invoice' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Overview Card */}
          <div className="p-8 rounded-xl bg-[#0a1329] border border-[#38bdf8]/25 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#38bdf8] font-bold">// DESARROLLO WEB PARA PYME</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    DESPLEGADO &amp; UTILIZADO POR LA EMPRESA
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white font-bold">
                  Sistema de Presupuestos &amp; Facturación Automática (Navarrete Hnos Aluminio)
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-[#38bdf8]">
                  React &amp; TypeScript
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-emerald-400">
                  Cálculo de Facturas
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-[#60a5fa]">
                  Generador PDF
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-slate-300">
                  BBDD Clientes
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Aplicación web a medida creada para una empresa local de carpintería y aluminio (<strong>Navarrete Hnos Aluminio</strong>). 
              Permite registrar pedidos de clientes, calcular automáticamente precios según medidas (ventanas practicables V-94, hojas dobles, persianas, herrajes y mano de obra), 
              desglosar impuestos (IVA 21%), gestionar el archivo histórico de pedidos y generar presupuestos y facturas en formato listo para descarga e impresión con un solo clic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#38bdf8]/15 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Elimina errores de cálculo manual</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Facturas instantáneas en PDF</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Interfaz ágil pensada para el taller</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Mini-App */}
          <FacturacionAppSimulator />
        </div>
      )}

      {activeProjectTab === 'academic' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-8 rounded-xl bg-[#0a1329] border border-[#38bdf8]/25 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[#38bdf8] font-bold">// CURRICULUM UPV VALÈNCIA</span>
                  <span className="text-[#60a5fa] font-medium">ETSINF · INGENIERÍA INFORMÁTICA</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white font-bold">
                  Fundamentos de Computación, Algoritmia &amp; Sistemas Operativos
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-[#38bdf8]">
                  C++ &amp; Java
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-slate-300">
                  Estructuras de Datos
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-slate-300">
                  SQL &amp; PostgreSQL
                </span>
                <span className="px-3 py-1.5 rounded bg-[#0f1c3d] border border-[#38bdf8]/30 text-slate-300">
                  Concurrencia
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Formación rigurosa en la <strong>Universitat Politècnica de València</strong>, abordando desde la arquitectura interna del computador, 
              gestión de memoria y concurrencia de hilos, hasta el análisis de complejidad asintótica (Big O), diseño de algoritmos de optimización (grafos, backtracking, programación dinámica), 
              y diseño relacional de bases de datos de alto rendimiento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#38bdf8]/15 font-mono text-xs">
              <div className="p-4 rounded-lg bg-[#070e1e] border border-slate-800">
                <div className="text-[#38bdf8] font-bold mb-1">PROYECTO: SIMULADOR DE PLANIFICADOR DE CPU</div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  Implementación en C/C++ de algoritmos Round Robin, Shortest Job First y colas con prioridad con métricas de tiempo de retorno y latencia.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#070e1e] border border-slate-800">
                <div className="text-[#38bdf8] font-bold mb-1">PROYECTO: SISTEMA DE GESTIÓN BBDD NORMALIZADA</div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  Diseño E/R, 3FN / BCNF, triggers transaccionales e índices optimizados en PostgreSQL para alta concurrencia de consultas.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
