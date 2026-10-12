import React from 'react';
import { 
  standardsFramework, 
  qualityAssurancePillars 
} from '../data/standardsData';
import { 
  ShieldCheck, 
  Info
} from 'lucide-react';
import { labConfig } from '../data/labConfig';

export const StandardsCompliance = () => {
  return (
    <section id="standards" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Standards & Quality Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Strict Adherence to National & International Test Methods
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            All physical, consistency, and structural material tests performed in our laboratory strictly follow codified manuals published by BIS, MoRTH, IRC, and ASTM.
          </p>
        </div>

        {/* 4 Standards Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {standardsFramework.map((framework, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-graphite-50/70 border border-graphite-200 hover:border-navy-900 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-navy-900 text-white uppercase tracking-wider">
                  {framework.acronym}
                </span>
                <span className="text-[11px] font-semibold text-safety-600 bg-safety-50 px-2 py-0.5 rounded border border-safety-200">
                  {framework.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {framework.organization}
              </h3>
              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-4">
                {framework.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-graphite-200">
                <span className="text-[10px] font-bold text-graphite-500 uppercase tracking-wider block">
                  Frequently Tested Methods:
                </span>
                {framework.keyCodes.map((codeItem, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-graphite-800">
                    <span className="font-mono font-bold text-safety-600 shrink-0 min-w-[70px]">
                      {codeItem.code}
                    </span>
                    <span className="text-graphite-600">{codeItem.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Pillars */}
        <div className="p-8 sm:p-10 rounded-2xl bg-navy-950 text-white border border-navy-800 relative overflow-hidden mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-safety-500 text-white uppercase tracking-wider inline-block mb-3">
              Laboratory Governance
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Our 4 Pillars of Testing Reliability
            </h3>
            <p className="text-sm text-graphite-300">
              Internal checks and balances that prevent human error, specimen contamination, and instrumentation drift.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityAssurancePillars.map((pillar, pIdx) => (
              <div key={pIdx} className="p-5 rounded-xl bg-navy-900/80 border border-navy-800">
                <div className="flex items-center gap-2 mb-2 text-safety-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                </div>
                <p className="text-xs text-graphite-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Compliance & Scope Notice */}
        <div className="p-4 rounded-xl bg-graphite-50 border border-graphite-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
          <div className="text-xs text-graphite-600 leading-relaxed">
            <strong>Traceability and Accreditation Notice:</strong> {labConfig?.disclaimers?.accreditationNote || "All tests follow published standard test procedures."} Clients requiring specific third-party accreditation scopes or official calibration certificates may request them directly through our engineering administration office.
          </div>
        </div>
      </div>
    </section>
  );
};
