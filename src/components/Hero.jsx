import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Shield, 
  Layers, 
  Gauge 
} from 'lucide-react';
import gsap from 'gsap';
import { labConfig } from '../data/labConfig';

export const Hero = ({ onExploreServices, onRequestQuote }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const trustStripRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        tl.from(headlineRef.current, {
          y: 35,
          opacity: 0,
          duration: 0.9,
        });
      }
      if (subtextRef.current) {
        tl.from(subtextRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
        }, '-=0.4');
      }
      if (buttonsRef.current && buttonsRef.current.children && buttonsRef.current.children.length > 0) {
        tl.from(buttonsRef.current.children, {
          y: 15,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
        }, '-=0.4');
      }
      if (trustStripRef.current && trustStripRef.current.children && trustStripRef.current.children.length > 0) {
        tl.from(trustStripRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        }, '-=0.3');
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const trustHighlights = [
    {
      icon: Gauge,
      title: "Calibrated Instruments",
      desc: "Periodic calibration traceable to national standards"
    },
    {
      icon: Layers,
      title: "Strict Standard Methods",
      desc: "Testing strictly to IS, ASTM, IRC & MoRTH protocols"
    },
    {
      icon: Shield,
      title: "Traceable Reporting",
      desc: "Tamper-evident civil engineering test certificates"
    },
    {
      icon: CheckCircle2,
      title: "Field & Lab Readiness",
      desc: "Highway diamond core cutting & in-situ pavement analysis"
    }
  ];

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-navy-950 overflow-hidden text-white border-b border-navy-800"
    >
      {/* Background Cinematic Visual with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=2000&q=85"
          alt="Highway construction and asphalt paving laboratory testing background"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 transform scale-105 transition-transform duration-1000"
          loading="eager"
        />
        {/* Subtle Engineering Grid and Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-900/60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-safety-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Engineering Verification Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800/90 border border-navy-700/80 text-graphite-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-safety-500 animate-pulse" />
            <span className="text-safety-400 font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
              Material Testing & Engineering Lab
            </span>
            <span className="text-graphite-600">|</span>
            <span className="hidden sm:inline text-graphite-300">
              Bitumen · Highway Cores · Concrete · Soil · Aggregates
            </span>
          </div>

          {/* Master Headline */}
          <h1 
            ref={headlineRef}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-display"
          >
            Precision Testing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-400 via-safety-500 to-amber-300">
              Reliable Results.
            </span> <br />
            Stronger Infrastructure.
          </h1>

          {/* Supporting Text */}
          <p 
            ref={subtextRef}
            className="text-base sm:text-lg lg:text-xl text-graphite-300 leading-relaxed mb-10 max-w-3xl font-normal"
          >
            {labConfig.description}
          </p>

          {/* Action CTAs */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => {
                if (onRequestQuote) {
                  e.preventDefault();
                  onRequestQuote();
                }
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-safety-500 hover:bg-safety-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-safety-500/30 transition-all hover:shadow-safety-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-5 h-5" />
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>

            <a
              href="#services"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 text-graphite-100 font-semibold text-sm sm:text-base border border-navy-700 hover:border-graphite-500 transition-all backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Testing Services</span>
            </a>
          </div>
        </div>

        {/* Compact Trust and Capability Strip */}
        <div 
          ref={trustStripRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-navy-800/80"
        >
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-navy-800/70 backdrop-blur-sm hover:border-navy-700 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-navy-800 text-safety-400 shrink-0 border border-navy-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-graphite-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
