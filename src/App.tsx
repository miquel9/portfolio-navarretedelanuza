import React, { useState, useEffect } from 'react';
import { BackgroundShader } from './components/BackgroundShader';
import { ScrollTelemetryHud } from './components/ScrollTelemetryHud';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUPV } from './components/AboutUPV';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStack } from './components/TechStack';
import { WorkPhilosophy } from './components/WorkPhilosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('HERO');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 1. Scroll listener for section detection & parallax layers
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScrollY);

      const sections = [
        { id: 'hero', name: 'HERO' },
        { id: 'about', name: 'SOBRE MÍ & UPV' },
        { id: 'projects', name: 'PROYECTOS' },
        { id: 'stack', name: 'TECH STACK' },
        { id: 'philosophy', name: 'PRINCIPIOS' },
        { id: 'contact', name: 'CONTACTO' },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. 3D Card Tilt on Mouse Move
    const handleMouseMoveTilt = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Only tilt cards that are currently in the viewport
        if (
          e.clientX >= rect.left - 40 &&
          e.clientX <= rect.right + 40 &&
          e.clientY >= rect.top - 40 &&
          e.clientY <= rect.bottom + 40
        ) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = ((y - centerY) / centerY) * -3.5;
          const rotY = ((x - centerX) / centerX) * 3.5;
          card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(4px)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMoveTilt);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMoveTilt);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050b18] text-white selection:bg-[#38bdf8] selection:text-[#050b18] overflow-x-hidden">
      {/* 1. Procedural WebGL Cyber Wave Background */}
      <BackgroundShader />

      {/* 2. Precision Cyber Grid Layer */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-[1]" />

      {/* 3. Multi-Layer Parallax Floating Atmosphere Glows */}
      <div
        className="fixed top-24 left-10 w-[32rem] h-[32rem] bg-[#2563eb]/15 rounded-full blur-[160px] pointer-events-none z-[1]"
        style={{ transform: `translate3d(0, ${scrollY * 0.22}px, 0)` }}
      />
      <div
        className="fixed bottom-32 right-12 w-[38rem] h-[38rem] bg-[#38bdf8]/12 rounded-full blur-[170px] pointer-events-none z-[1]"
        style={{ transform: `translate3d(0, ${-scrollY * 0.28}px, 0)` }}
      />
      <div
        className="fixed top-1/2 left-1/3 w-[26rem] h-[26rem] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none z-[1]"
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      />

      {/* 4. Top Scroll Progress Bar & Right-Docked Floating Telemetry HUD */}
      <ScrollTelemetryHud activeSection={activeSection} />

      {/* 5. Minimalist 3-Zone Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* 6. Main Content Area */}
      <main className="relative z-10 pt-20">
        <Hero />
        <AboutUPV />
        <ProjectsSection />
        <TechStack />
        <WorkPhilosophy />
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
