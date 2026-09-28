import React, { useState } from 'react';
import { Play, RefreshCw, Send, CheckCircle2, Sparkles, Newspaper, Bot, Clock, ExternalLink, ArrowRight } from 'lucide-react';

export const N8nWorkflowSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showTelegramPreview, setShowTelegramPreview] = useState(true);

  // Pre-prepared authentic press summaries for the simulation
  const [sampleNews] = useState([
    {
      source: 'El País',
      category: 'Economía & Tech',
      title: 'La Unión Europea aprueba nuevas normativas sobre despliegue de infraestructuras IA',
      time: '07:30 AM',
      url: 'https://elpais.com'
    },
    {
      source: 'BBC Mundo',
      category: 'Internacional',
      title: 'Misión espacial europea alcanza con éxito la órbita de observación climática',
      time: '07:45 AM',
      url: 'https://bbc.com/mundo'
    },
    {
      source: 'Las Provincias (PV)',
      category: 'Comunitat Valenciana',
      title: 'La UPV presenta su nuevo centro de investigación aplicada en Inteligencia Artificial y Robótica',
      time: '07:50 AM',
      url: 'https://lasprovincias.es'
    },
    {
      source: 'The New York Times',
      category: 'Technology',
      title: 'Next-Generation Efficient Foundation Models Reduce Data Center Latency by 40%',
      time: '07:15 AM',
      url: 'https://nytimes.com'
    }
  ]);

  const handleRunWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasTriggered(true);
    setCurrentStep(1);

    // Sequence through the n8n pipeline steps
    setTimeout(() => setCurrentStep(2), 700);  // RSS Fetch
    setTimeout(() => setCurrentStep(3), 1500); // Merging & Filtering
    setTimeout(() => setCurrentStep(4), 2300); // Gemini Flash LLM Chain
    setTimeout(() => setCurrentStep(5), 3100); // JavaScript code formatter
    setTimeout(() => {
      setCurrentStep(6); // Sent to Telegram
      setIsRunning(false);
    }, 3900);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setHasTriggered(false);
    setIsRunning(false);
  };

  return (
    <div className="rounded-xl bg-[#0a1329] border border-[#38bdf8]/30 overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]" id="n8n-simulator">
      {/* Simulation Header */}
      <div className="p-5 bg-[#070e1e] border-b border-[#38bdf8]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>N8N WORKFLOW ENGINE // AUTOMATIZACIÓN DE NOTICIAS CON GEMINI &amp; TELEGRAM</span>
          </div>
          <h3 className="font-display text-xl text-white font-bold">
            Pipeline de Síntesis Diaria (08:00 AM)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRunWorkflow}
            disabled={isRunning}
            className={`px-4 py-2 rounded font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all shadow-glow ${
              isRunning
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-[#38bdf8] hover:bg-white text-[#050b18]'
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>EJECUTANDO PIPELINE...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>SIMULAR EJECUCIÓN (PROBAR)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Canvas: Visual n8n Graph Diagram */}
      <div className="p-6 bg-[#050b18]/90 relative overflow-x-auto min-h-[340px]">
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

        <div className="min-w-[840px] flex items-center justify-between py-6 px-4 relative z-10 font-mono text-xs">
          {/* Node 1: Trigger */}
          <div className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                currentStep >= 1
                  ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] scale-105'
                  : 'bg-[#0f1c3d] border-[#38bdf8]/30 text-slate-300'
              }`}
            >
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-[11px] text-white font-semibold mt-2">Disparador Diario</span>
            <span className="text-[9px] text-[#38bdf8]">08:00 AM (Cron)</span>
          </div>

          {/* Arrow 1 */}
          <div className="flex-1 flex justify-center items-center px-1">
            <div className={`h-[2px] w-full relative ${currentStep >= 1 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-800'}`}>
              {currentStep === 1 && <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
            </div>
          </div>

          {/* Node 2: RSS Sources (Cluster) */}
          <div className="flex flex-col gap-2">
            {[
              { name: 'RSS El País', active: currentStep >= 2 },
              { name: 'RSS BBC Mundo', active: currentStep >= 2 },
              { name: 'Las Provincias PV', active: currentStep >= 2 },
              { name: 'The New York Times', active: currentStep >= 2 },
            ].map((feed, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded border flex items-center gap-2 transition-all duration-300 ${
                  feed.active
                    ? 'bg-[#0a1931] border-[#38bdf8] text-white shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'bg-[#081022] border-slate-800 text-slate-400'
                }`}
              >
                <Newspaper className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="text-[10px] whitespace-nowrap">{feed.name}</span>
              </div>
            ))}
          </div>

          {/* Arrow 2 */}
          <div className="flex-1 flex justify-center items-center px-1">
            <div className={`h-[2px] w-full relative ${currentStep >= 2 ? 'bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]' : 'bg-slate-800'}`}>
              {currentStep === 2 && <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />}
            </div>
          </div>

          {/* Node 3: Filter & Prepare */}
          <div className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                currentStep >= 3
                  ? 'bg-blue-950/80 border-[#60a5fa] text-[#60a5fa] shadow-[0_0_20px_rgba(96,165,250,0.4)] scale-105'
                  : 'bg-[#0f1c3d] border-[#38bdf8]/30 text-slate-300'
              }`}
            >
              <span className="font-bold text-lg">&#123; &#125;</span>
            </div>
            <span className="text-[11px] text-white font-semibold mt-2">Filtrar y Preparar</span>
            <span className="text-[9px] text-slate-400">Deduplicación</span>
          </div>

          {/* Arrow 3 */}
          <div className="flex-1 flex justify-center items-center px-1">
            <div className={`h-[2px] w-full relative ${currentStep >= 3 ? 'bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]' : 'bg-slate-800'}`}>
              {currentStep === 3 && <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#60a5fa] animate-ping" />}
            </div>
          </div>

          {/* Node 4: Gemini Flash LLM Chain */}
          <div className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center relative transition-all duration-300 ${
                currentStep >= 4
                  ? 'bg-purple-950/80 border-purple-400 text-purple-300 shadow-[0_0_20px_rgba(192,132,252,0.5)] scale-110'
                  : 'bg-[#0f1c3d] border-[#38bdf8]/30 text-slate-300'
              }`}
            >
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              <div className="absolute -bottom-2 px-1.5 py-0.5 rounded bg-purple-900 border border-purple-400 text-[8px] text-white">
                Gemini
              </div>
            </div>
            <span className="text-[11px] text-white font-semibold mt-3">Basic LLM Chain</span>
            <span className="text-[9px] text-purple-300">Gemini 2.5 Flash</span>
          </div>

          {/* Arrow 4 */}
          <div className="flex-1 flex justify-center items-center px-1">
            <div className={`h-[2px] w-full relative ${currentStep >= 4 ? 'bg-purple-400 shadow-[0_0_8px_#c084fc]' : 'bg-slate-800'}`}>
              {currentStep === 4 && <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-purple-400 animate-ping" />}
            </div>
          </div>

          {/* Node 5: Code in JavaScript */}
          <div className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                currentStep >= 5
                  ? 'bg-amber-950/80 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] scale-105'
                  : 'bg-[#0f1c3d] border-[#38bdf8]/30 text-slate-300'
              }`}
            >
              <span className="font-bold text-xs">JS</span>
            </div>
            <span className="text-[11px] text-white font-semibold mt-2">Code in JS</span>
            <span className="text-[9px] text-slate-400">Telegram Markdown</span>
          </div>

          {/* Arrow 5 */}
          <div className="flex-1 flex justify-center items-center px-1">
            <div className={`h-[2px] w-full relative ${currentStep >= 5 ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-slate-800'}`}>
              {currentStep === 5 && <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-sky-400 animate-ping" />}
            </div>
          </div>

          {/* Node 6: Telegram Dispatch */}
          <div className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                currentStep >= 6
                  ? 'bg-sky-950/90 border-[#38bdf8] text-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.6)] scale-110'
                  : 'bg-[#0f1c3d] border-[#38bdf8]/30 text-slate-300'
              }`}
            >
              <Send className="w-6 h-6 text-[#38bdf8]" />
            </div>
            <span className="text-[11px] text-white font-semibold mt-2">Enviar Telegram</span>
            <span className="text-[9px] text-emerald-400">
              {currentStep >= 6 ? '✓ ENVIADO' : 'sendMessage'}
            </span>
          </div>
        </div>

        {/* Live Step Status Label */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">ESTADO DEL WORKFLOW:</span>
            {currentStep === 0 && <span className="text-slate-400">En espera del disparador</span>}
            {currentStep === 1 && <span className="text-emerald-400 font-bold">1/6 Disparador activado (08:00 AM)</span>}
            {currentStep === 2 && <span className="text-[#38bdf8] font-bold">2/6 Leyendo feeds RSS de prensa</span>}
            {currentStep === 3 && <span className="text-[#60a5fa] font-bold">3/6 Unificando y filtrando noticias duplicadas</span>}
            {currentStep === 4 && <span className="text-purple-300 font-bold animate-pulse">4/6 Gemini Flash analizando y generando síntesis...</span>}
            {currentStep === 5 && <span className="text-amber-300 font-bold">5/6 Formateando markdown para Telegram</span>}
            {currentStep === 6 && <span className="text-emerald-400 font-bold">✓ 6/6 ¡Resumen despachado a Telegram con éxito!</span>}
          </div>

          <button
            onClick={() => setShowTelegramPreview(!showTelegramPreview)}
            className="text-[#38bdf8] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>{showTelegramPreview ? 'Ocultar' : 'Ver'} Vista Previa Telegram</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Realistic Telegram App Mockup Preview */}
      {showTelegramPreview && (
        <div className="p-6 bg-[#070e1e] border-t border-[#38bdf8]/20">
          <div className="max-w-2xl mx-auto rounded-xl bg-[#17212b] border border-[#242f3d] overflow-hidden shadow-2xl">
            {/* Telegram Header */}
            <div className="px-4 py-3 bg-[#242f3d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#38bdf8] text-[#050b18] flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5 text-[#050b18]" />
                </div>
                <div>
                  <div className="font-sans font-semibold text-white text-sm flex items-center gap-1.5">
                    <span>NewsBot IA · Miquel Navarrete</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[11px] text-slate-400">bot · canal privado matinal</div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">08:00 AM</span>
            </div>

            {/* Telegram Message Content: Dependent on user triggering the workflow */}
            <div className="p-4 sm:p-6 bg-[#0e1621] space-y-3 min-h-[220px] flex flex-col justify-center">
              {!hasTriggered ? (
                // STATE 1: Waiting for trigger
                <div className="bg-[#182533] p-5 rounded-xl border border-dashed border-[#38bdf8]/30 text-slate-300 text-sm font-sans space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold border-b border-slate-700/60 pb-2">
                    <Clock className="w-4 h-4 text-[#38bdf8]" />
                    <span>Canal matinal en espera del disparador</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    👋 <strong>¡Hola!</strong> Las noticias aún no han sido procesadas. El workflow de <strong>n8n</strong> está programado para ejecutarse a las <strong>08:00 AM</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Pulsa el botón de abajo o <strong>"SIMULAR EJECUCIÓN (PROBAR)"</strong> arriba para accionar el disparador, extraer los titulares RSS y generar la síntesis con Gemini Flash.
                  </p>
                  <button
                    onClick={handleRunWorkflow}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#38bdf8] text-[#050b18] font-bold text-xs flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Accionar Disparador de las 08:00 AM Ahora</span>
                  </button>
                </div>
              ) : isRunning ? (
                // STATE 2: Processing in real time
                <div className="bg-[#182533] p-5 rounded-xl border border-purple-500/30 text-slate-200 text-sm font-sans space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                      <span>NewsBot IA procesando flujo de noticias...</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-700/50">
                      Paso {currentStep}/6
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-300 pt-1">
                    <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      <span>{currentStep > 1 ? '✓' : '→'}</span>
                      <span>Disparador cron activado (08:00:00 AM)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-[#38bdf8]' : 'text-slate-500'}`}>
                      <span>{currentStep > 2 ? '✓' : currentStep === 2 ? '→' : '·'}</span>
                      <span>Descargando titulares RSS (El País, BBC, Las Provincias, NYT)...</span>
                    </div>
                    <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-[#60a5fa]' : 'text-slate-500'}`}>
                      <span>{currentStep > 3 ? '✓' : currentStep === 3 ? '→' : '·'}</span>
                      <span>Deduplicando y preparando artículos en JavaScript...</span>
                    </div>
                    <div className={`flex items-center gap-2 ${currentStep >= 4 ? 'text-purple-300' : 'text-slate-500'}`}>
                      <span>{currentStep > 4 ? '✓' : currentStep === 4 ? '→' : '·'}</span>
                      <span>Google Gemini Flash redactando síntesis ejecutiva...</span>
                    </div>
                    <div className={`flex items-center gap-2 ${currentStep >= 5 ? 'text-amber-300' : 'text-slate-500'}`}>
                      <span>{currentStep > 5 ? '✓' : currentStep === 5 ? '→' : '·'}</span>
                      <span>Formateando payload con sintaxis Markdown...</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono italic pt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                    <span>Escribiendo mensaje para Telegram...</span>
                  </div>
                </div>
              ) : (
                // STATE 3: Triggered and completed -> News articles displayed!
                <div className="bg-[#182533] p-4 sm:p-5 rounded-xl border border-[#2b3a4a] text-slate-200 text-sm font-sans space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <span>📰</span>
                      <span>RESUMEN MATINAL DE PRENSA // {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/50">
                      Gemini Flash IA
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Buenos días. Tu flujo automatizado en <strong>n8n</strong> ha analizado las portadas de hoy y ha extraído las 4 claves más destacadas:
                  </p>

                  <div className="space-y-3 pt-1">
                    {sampleNews.map((news, idx) => (
                      <div key={idx} className="border-l-2 border-[#38bdf8] pl-3 py-0.5">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                          <span className="text-[#38bdf8] font-bold">{news.source}</span>
                          <span>·</span>
                          <span>{news.category}</span>
                          <span>·</span>
                          <span>{news.time}</span>
                        </div>
                        <div className="text-white font-medium text-xs mt-0.5">
                          {news.title}
                        </div>
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#60a5fa] hover:underline inline-flex items-center gap-1 mt-0.5"
                        >
                          <span>Leer artículo fuente</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-700/60 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
                    <span>⚡ Procesado por n8n + Google Gemini Flash</span>
                    <div className="flex items-center gap-3">
                      <span>08:00 ✓✓</span>
                      <button
                        onClick={handleReset}
                        className="text-[#38bdf8] hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Reiniciar prueba</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
