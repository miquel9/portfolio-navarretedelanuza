import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, Copy, Check, MessageSquare, ArrowUpRight, GraduationCap } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Automatización con n8n & IA',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const primaryEmail = 'miqnavdel@gmail.com';
  const workEmail = 'miqnavdel@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Construct mailto link as backup so the user can easily dispatch via their email client
      const subject = encodeURIComponent(`[Contacto Portafolio] ${formData.scope} - ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\nTipo de Consulta: ${formData.scope}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="contact">
      <div className="max-w-4xl mx-auto rounded-2xl bg-[#0a1329]/90 border border-[#38bdf8]/35 p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#38bdf8]/20 relative z-10">
          <div>
            <span className="font-mono text-xs text-[#38bdf8] tracking-widest block mb-1">
              [ INICIAR CONVERSACIÓN // CONTACTO DIRECTO ]
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              ¿TIENES UN PROYECTO O UNA IDEA? CONVERSEMOS
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Respuesta habitual: &lt; 24h</span>
          </div>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono text-xs relative z-10">
          <div className="p-3.5 rounded-lg bg-[#070e1e] border border-[#38bdf8]/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-[#38bdf8]" />
              <span className="truncate">{primaryEmail}</span>
            </div>
            <button
              onClick={() => handleCopyEmail(primaryEmail)}
              className="text-slate-400 hover:text-[#38bdf8] p-1 rounded"
              title="Copiar email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070e1e] border border-[#38bdf8]/20 flex items-center gap-2 text-slate-300">
            <MapPin className="w-4 h-4 text-[#60a5fa]" />
            <span>Valencia, España · UPV</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070e1e] border border-[#38bdf8]/20 flex items-center gap-2 text-slate-300">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Estudiante Ing. Informática</span>
          </div>
        </div>

        {/* Streamlined Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Tu Nombre / Empresa</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. Ana Gómez"
                className="w-full px-4 py-3 rounded-lg bg-[#060c1d] border border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-sm text-white placeholder:text-slate-500 outline-none transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Tu Correo Electrónico</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ana@empresa.com"
                className="w-full px-4 py-3 rounded-lg bg-[#060c1d] border border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-sm text-white placeholder:text-slate-500 outline-none transition-all font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Tipo de Interés / Proyecto</label>
            <select
              value={formData.scope}
              onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#060c1d] border border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-sm text-white outline-none transition-all font-mono"
            >
              <option value="Automatización con n8n & IA">Automatización de Procesos con n8n e Inteligencia Artificial</option>
              <option value="Desarrollo de Software / App de Facturación">Desarrollo de Web / Sistema de Presupuestos & Facturación</option>
              <option value="Oportunidad Profesional o Prácticas">Oportunidad Laboral / Prácticas en Empresa</option>
              <option value="Colaboración o Consulta General">Consulta General / Networking</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">Mensaje / Detalles del Proyecto</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntame sobre las necesidades de tu empresa, el flujo que deseas automatizar o tu propuesta..."
              className="w-full px-4 py-3 rounded-lg bg-[#060c1d] border border-[#38bdf8]/20 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-sm text-white placeholder:text-slate-500 outline-none transition-all font-mono"
            />
          </div>

          {/* Feedback message */}
          {submitted && (
            <div className="p-4 rounded-lg bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                ¡Gracias por tu mensaje! Se ha preparado tu consulta para enviarse directamente a Miquel Navarrete ({primaryEmail}). Te responderé lo antes posible.
              </span>
            </div>
          )}

          {/* Form Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href="https://github.com/miquel9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
              >
                <span>GITHUB // miquel9</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/navarretedelanuza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
              >
                <span>LINKEDIN // navarretedelanuza</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#38bdf8] text-[#050b18] font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-95 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'PROCESANDO...' : 'ENVIAR MENSAJE'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
