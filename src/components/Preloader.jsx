// Preloader component
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { labConfig } from '../data/labConfig';

export const Preloader = ({ onComplete }) => {
  // State
  const [progress, setProgress] = useState(0);

  // Refs
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const progressBarRef = useRef(null);
  const timelineRef = useRef(null);
  const footerRef = useRef(null);
  const isCompletedRef = useRef(false);

  // Overlay refs for premium effects
  const particlesRef = useRef(null);
  const lightSweepRef = useRef(null);
  const gridOverlayRef = useRef(null);
  const scanLineRef = useRef(null);

  // Testing stages (same as original reference)
  const stages = [
    {
      id: 1,
      titleLine1: "Collecting",
      titleLine2: "Samples",
      threshold: 15,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
          <path d="M7 6c-2.2 0-4 1.8-4 4 0 1.2.5 2.2 1.3 3-.8.8-1.3 1.8-1.3 3 0 2.2 1.8 4 4 4 1.2 0 2.2-.5 3-1.3.8.8 1.8 1.3 3 1.3 2.2 0 4-1.8 4-4 0-.8-.2-1.5-.7-2.1.8-.8 1.4-1.8 1.6-3 .1-.5-.2-1-.7-1.1-.5-.1-1 .2-1.1.7-.2.8-.7 1.6-1.3 2.1-.5-.4-1.1-.6-1.7-.6-1.2 0-2.2.5-3 1.3-.8-.8-1.8-1.3-3-1.3-.5 0-1 .1-1.4.3-.2-.5-.4-1-.4-1.6 0-1.7 1.3-3 3-3 .6 0 1.1.2 1.6.5.4.3 1 .2 1.3-.2.3-.4.2-1-.2-1.3C8.5 6.3 7.8 6 7 6z" />
          <circle cx="8" cy="16" r="2.5" opacity="0.8" />
          <circle cx="15" cy="16" r="2" opacity="0.8" />
          <circle cx="12" cy="10" r="2.2" opacity="0.8" />
        </svg>
      ),
    },
    {
      id: 2,
      titleLine1: "Preparing",
      titleLine2: "Specimens",
      threshold: 35,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v5.5L5.5 18a2 2 0 0 0 1.7 2.9h9.6a2 2 0 0 0 1.7-2.9L14 7.5V2" />
          <path d="M8.5 2h7" />
          <path d="M7 15h10" />
        </svg>
      ),
    },
    {
      id: 3,
      titleLine1: "Conducting",
      titleLine2: "Tests",
      threshold: 55,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: 4,
      titleLine1: "Analyzing",
      titleLine2: "Results",
      threshold: 75,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: 5,
      titleLine1: "Ensuring",
      titleLine2: "Quality",
      threshold: 95,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.style.overflow = 'hidden';

    if (prefersReducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete && onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }

    // GSAP entrance animations scoped to container
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(logoRef.current, { scale: 0.8, opacity: 0, y: -20, duration: 0.7, ease: 'power3.out' })
        .from(titleRef.current, { opacity: 0, y: 15, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from(progressBarRef.current, { opacity: 0, scaleX: 0.9, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from(timelineRef.current, { opacity: 0, y: 25, duration: 0.7, ease: 'power3.out' }, '-=0.3')
        .from(footerRef.current, { opacity: 0, duration: 0.5 }, '-=0.3');
    }, containerRef);

    // Premium overlay effects
    if (lightSweepRef.current) {
      gsap.fromTo(
        lightSweepRef.current,
        { background: "linear-gradient(120deg, transparent 0%, rgba(255,101,0,0.2) 50%, transparent 100%)", x: '-100%' },
        { x: '100%', duration: 2, repeat: -1, ease: 'none' }
      );
    }
    if (particlesRef.current) {
      const createParticle = () => {
        const el = document.createElement('div');
        el.className = 'particle';
        const size = Math.random() * 3 + 2;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.background = 'rgba(255,101,0,0.6)';
        el.style.position = 'absolute';
        el.style.borderRadius = '50%';
        el.style.left = `${Math.random() * window.innerWidth}px`;
        el.style.top = `${Math.random() * window.innerHeight}px`;
        particlesRef.current.appendChild(el);
        gsap.to(el, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      };
      for (let i = 0; i < 20; i++) createParticle();
    }
    if (gridOverlayRef.current) {
      gridOverlayRef.current.style.backgroundImage = "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 21px)";
    }
    if (scanLineRef.current) {
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.left = '0';
      line.style.top = '50%';
      line.style.width = '100%';
      line.style.height = '2px';
      line.style.background = 'rgba(255,101,0,0.8)';
      line.style.boxShadow = '0 0 8px rgba(255,101,0,0.8)';
      scanLineRef.current.appendChild(line);
      gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut' });
    }

    // Progress simulation
    const totalDuration = 2200; // ms
    const intervalTime = 20; // ms
    const totalSteps = totalDuration / intervalTime;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const ratio = step / totalSteps;
      const eased = Math.min(100, Math.round(100 * (1 - Math.pow(1 - ratio, 2.4))));
      setProgress(eased);
      if (step >= totalSteps && !isCompletedRef.current) {
        isCompletedRef.current = true;
        clearInterval(interval);
        // Exit animation
        gsap.to(contentRef.current, { opacity: 0, y: -25, scale: 0.98, duration: 0.5, ease: 'power2.in', delay: 0.2 });
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.7,
          delay: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            document.body.style.overflow = 'unset';
            onComplete && onComplete();
          },
        });
      }
    }, intervalTime);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
      ctx.revert();
      gsap.killTweensOf([lightSweepRef.current, particlesRef.current, gridOverlayRef.current, scanLineRef.current]);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between items-center bg-[#070E18] text-white select-none overflow-hidden"
      style={{
        backgroundImage: "url('/images/preloader-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#070E18]/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#070E18]/65 to-[#060B14]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,101,0,0.06)_0%,_rgba(7,14,24,0)_70%)]" />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <div ref={lightSweepRef} className="absolute inset-0 pointer-events-none" />
      <div ref={gridOverlayRef} className="absolute inset-0 pointer-events-none" />
      <div ref={scanLineRef} className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center flex-grow py-8 sm:py-12">
        {/* Logo */}
        
<div
  ref={logoRef}
  className="mb-4 sm:mb-6 flex flex-col items-center group"
>
  <div className="relative flex items-center justify-center drop-shadow-[0_0_20px_rgba(201,154,53,0.25)]">
    <img
      src="/images/logo.png"
      alt="NIMTL - National Infrastructure Material Testing Laboratory"
      className="w-40 h-auto sm:w-48 md:w-56 object-contain"
    />
  </div>
</div>

        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[0.12em] font-display uppercase leading-tight drop-shadow-sm">
            {labConfig?.name?.toUpperCase() || "MATERIAL TESTING LAB"}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm font-semibold text-graphite-300 tracking-[0.2em] uppercase">
            <span>TESTING TODAY</span>
            <span className="w-1 h-3.5 bg-safety-500 rounded-full inline-block mx-1" />
            <span>STRONGER TOMORROW</span>
          </div>
        </div>
        {/* Progress */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {progress}%
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-graphite-400 tracking-[0.25em] uppercase mt-1">
            LOADING...
          </span>
        </div>
        {/* Progress bar */}
        <div ref={progressBarRef} className="w-full max-w-md sm:max-w-lg mb-10 sm:mb-14 px-2">
          <div className="h-2 sm:h-2.5 w-full bg-slate-900/90 rounded-full p-[1.5px] border border-slate-700/60 shadow-inner backdrop-blur-md">
            <div
              className="h-full rounded-full bg-gradient-to-r from-safety-600 via-safety-500 to-amber-400 shadow-[0_0_16px_rgba(255,101,0,0.95)] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        {/* Timeline */}
        <div ref={timelineRef} className="w-full max-w-2xl px-2">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2.5px] bg-slate-800/90 z-0" />
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-safety-500 to-amber-400 shadow-[0_0_10px_rgba(255,101,0,0.8)] z-0"
              style={{
                width: `calc(${Math.min(100, Math.max(0, (progress - 10) / 85 * 100))}% * (100% - 48px) / 100)`,
              }}
            />
            {stages.map((stage) => {
              const isActive = progress >= stage.threshold;
              const isCurrent = progress >= stage.threshold && progress < stage.threshold + 20;
              return (
                <div key={stage.id} className="relative z-10 flex flex-col items-center group">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0E1B2C] border-2 border-safety-500 text-safety-400 shadow-[0_0_18px_rgba(255,101,0,0.7)] scale-105'
                        : 'bg-[#09121D] border-2 border-slate-700/70 text-slate-500'
                    }`}
                  >
                    {stage.icon}
                  </div>
                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-safety-500 rounded-full border border-white animate-ping pointer-none" />
                  )}
                  <div className="mt-2 sm:mt-3 text-center">
                    <span className={`block text-[9px] sm:text-[11px] uppercase tracking-wider ${isActive ? 'text-white font-bold' : 'text-slate-500 font-medium'}`}>{stage.titleLine1}</span>
                    <span className={`block text-[9px] sm:text-[11px] uppercase tracking-wider ${isActive ? 'text-white font-bold' : 'text-slate-500 font-medium'}`}>{stage.titleLine2}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Footer */}
        <div ref={footerRef} className="relative z-10 pb-6 sm:pb-8 pt-4 px-4 text-center border-t border-slate-800/40 w-full">
          <p className="text-[9px] sm:text-[11px] tracking-[0.22em] text-graphite-400 uppercase font-medium">
            PRECISION TESTING | RELIABLE RESULTS | STRONGER INFRASTRUCTURE
          </p>
          <div className="w-10 h-0.5 bg-safety-500 mx-auto mt-2 rounded-full opacity-80" />
        </div>
      </div>
    </div>
  );
};