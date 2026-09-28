import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles, BookOpen, Layers, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'n8n' | 'invoice'>('profile');
  const [copied, setCopied] = useState(false);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  const codeSnippets = {
    profile: `// Perfil de Desarrollador // Miquel Navarrete
export const developer = {
  nombre: "Miquel Navarrete de Lanuza",
  estudios: "Grado en Ingeniería Informática",
  universidad: "Universitat Politècnica de València (UPV)",
  ubicacion: "Valencia, España",
  email: "miqnavdel@gmail.com",
  
  especialidades: [
    "Automatización inteligente con n8n e IA",
    "Desarrollo web y aplicaciones de gestión",
    "Integración de LLMs (Google Gemini Flash)",
    "Bots de Telegram y procesamiento de datos"
  ],
  
  proyectosDestacados: [
    "Bot de síntesis diaria de noticias en n8n + Telegram",
    "Software de presupuestos y facturación (Navarrete Hnos Aluminio)"
  ],

  estado: "Disponible para nuevos proyectos y prácticas"
};`,
    n8n: `// n8n Workflow: Resumen de Prensa con IA & Telegram
const sources = ['El País', 'BBC Mundo', 'Las Provincias', 'NY Times'];

// 1. Obtener noticias diarias de las fuentes RSS a las 08:00 AM
const articulos = await n8n.rss.fetchMultiple(sources);

// 2. Procesar y resumir mediante Google Gemini Flash
const resumenMatinal = await geminiFlash.generateContent({
  prompt: "Sintetiza las 4 noticias clave del día en formato estructurado",
  noticias: articulos
});

// 3. Enviar mensaje con formato Markdown directo a Telegram
await telegramBot.sendMessage({
  chatId: process.env.TELEGRAM_CHAT_ID,
  text: resumenMatinal.text,
  parseMode: "Markdown"
});

console.log("✓ Resumen diario entregado con éxito al usuario");`,
    invoice: `// Sistema de Facturación // Navarrete Hnos Aluminio
interface PedidoAluminio {
  cliente: string;
  contacto: string;
  producto: "Practicable V-94" | "Corredera" | "Herrajes";
  medidas: { anchoCm: 120, altoCm: 120 };
  precioBase: number;
}

export function generarPresupuesto(pedido: PedidoAluminio) {
  const subtotal = pedido.precioBase;
  const iva = subtotal * 0.21;
  const total = Number((subtotal + iva).toFixed(2));

  return {
    documento: "PRESUPUESTO OFICIAL",
    empresa: "Navarrete Hnos Aluminio",
    cliente: pedido.cliente,
    subtotal: \`\${subtotal.toFixed(2)} €\`,
    iva21: \`\${iva.toFixed(2)} €\`,
    total: \`\${total.toFixed(2)} €\`,
    generarPdfListo: true
  };
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSim = () => {
    setIsRunningSim(true);
    setSimOutput('Ejecutando en terminal...');
    setTimeout(() => {
      if (activeTab === 'profile') {
        setSimOutput(`$ node miquel.config.ts\n> Verificando perfil: Miquel Navarrete de Lanuza\n> Universidad: Universitat Politècnica de València (UPV)\n> Email: miqnavdel@gmail.com\n> Estado: Disponible para proyectos y prácticas`);
      } else if (activeTab === 'n8n') {
        setSimOutput(`$ n8n execute --workflow "Resumen_Noticias_IA"\n[08:00:01] 📡 4 Feeds RSS descargados con éxito\n[08:00:02] ✨ Google Gemini Flash generó la síntesis en 540ms\n[08:00:03] 📨 Mensaje despachado a Telegram (@NewsBot)\n> Estado: 200 OK (Proceso finalizado)`);
      } else {
        setSimOutput(`$ node facturacion_engine.js\n[Navarrete Hnos Aluminio] Calculando presupuesto...\n> Subtotal: 179.00 €\n> IVA (21%): 37.59 €\n> Total Calculado: 216.59 €\n> PDF oficial generado listo para descargar`);
      }
      setIsRunningSim(false);
    }, 600);
  };

  return (
    <section className="min-h-[88vh] max-w-7xl mx-auto px-6 flex flex-col justify-center py-16" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top category tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#0a1329] border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>INGENIERÍA INFORMÁTICA · UPV · AUTOMATIZACIÓN &amp; SOFTWARE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            BUILDING ROBUST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#2563eb]">
              SYSTEMS &amp; ELEGANT
            </span>{' '}
            <br />
            DIGITAL ARCHITECTURES.
          </h1>

          {/* Bio statement */}
          <p className="text-base text-slate-300 max-w-xl font-normal leading-relaxed">
            Hola, soy <strong className="text-white font-semibold">Miquel Navarrete de Lanuza</strong>. 
            Estudiante de Ingeniería Informática en la{' '}
            <strong className="text-[#38bdf8] font-semibold">Universitat Politècnica de València (UPV)</strong>. 
            Especializado en la creación de pipelines de automatización con <strong className="text-white">n8n e Inteligencia Artificial</strong>, 
            y en el desarrollo de software web y sistemas de facturación para empresas locales reales.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
            <div className="px-3.5 py-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex items-center gap-2 text-slate-200">
              <span className="text-[#38bdf8]">🎓</span>
              <span>ESTUDIANTE UPV VALÈNCIA</span>
            </div>
            <div className="px-3.5 py-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex items-center gap-2 text-slate-200">
              <span className="text-[#60a5fa]">⚡</span>
              <span>AUTOMATIZACIÓN n8n + GEMINI</span>
            </div>
            <div className="px-3.5 py-2 rounded bg-[#0a1329] border border-[#38bdf8]/20 flex items-center gap-2 text-slate-200">
              <span className="text-[#38bdf8]">💼</span>
              <span>WEB DE FACTURACIÓN REAL</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-[#38bdf8] text-[#050b18] font-mono font-bold text-xs tracking-wider flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] active:scale-95"
            >
              <span>EXPLORAR PROYECTOS</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#n8n-simulator"
              className="px-6 py-3 rounded bg-[#0f1c3d]/70 border border-[#38bdf8]/30 hover:border-[#38bdf8] text-white font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:bg-[#0f1c3d]"
            >
              <Sparkles className="w-4 h-4 text-[#38bdf8]" />
              <span>PROBAR SIMULADOR n8n</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal */}
        <div className="lg:col-span-5 perspective-canvas">
          <div className="tilt-card rounded-xl bg-[#0a1329] border border-[#38bdf8]/25 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#070e1e] border-b border-[#38bdf8]/20 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <div className="flex items-center gap-1 ml-2">
                  <button
                    onClick={() => { setActiveTab('profile'); setSimOutput(null); }}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      activeTab === 'profile' ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    miquel.config.ts
                  </button>
                  <button
                    onClick={() => { setActiveTab('n8n'); setSimOutput(null); }}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      activeTab === 'n8n' ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    n8n_noticias.js
                  </button>
                  <button
                    onClick={() => { setActiveTab('invoice'); setSimOutput(null); }}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      activeTab === 'invoice' ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    presupuesto.ts
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded hover:bg-[#38bdf8]/10 text-slate-400 hover:text-[#38bdf8] transition-colors"
                  title="Copiar código"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Payload with line numbers */}
            <div className="p-4 font-mono text-xs leading-relaxed text-slate-300 max-h-[340px] overflow-y-auto">
              <pre className="text-slate-200">
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              {/* Simulation Output Area */}
              {simOutput && (
                <div className="mt-3 p-3 rounded bg-[#050b18] border border-emerald-500/40 text-emerald-300 text-[11px] font-mono whitespace-pre-line animate-in fade-in">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>TERMINAL OUTPUT // SIMULADOR</span>
                  </div>
                  {simOutput}
                </div>
              )}
            </div>

            {/* Terminal Bottom Bar */}
            <div className="px-4 py-2.5 bg-[#070e1e] border-t border-[#38bdf8]/20 flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span>BUILD: PASSING · UPV CI</span>
              </div>
              <button
                onClick={handleRunSim}
                disabled={isRunningSim}
                className="px-3 py-1 rounded bg-[#38bdf8]/15 hover:bg-[#38bdf8]/30 border border-[#38bdf8]/40 text-[#38bdf8] text-[10px] font-bold flex items-center gap-1.5 transition-all"
              >
                <Play className="w-3 h-3" />
                <span>{isRunningSim ? 'EJECUTANDO...' : 'PROBAR EN TERMINAL'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
