import React from 'react';
import { 
  Sparkles, 
  Clock, 
  Activity 
} from 'lucide-react';
import { labConfig } from '../data/labConfig';

export const FutureCapabilities = () => {
  const plannedExpansions = [
    {
      title: "Dynamic Shear Rheometer (DSR) & PG Binder Grading",
      category: "Advanced Bitumen Testing",
      targetStandards: "AASHTO T315 / ASTM D7175",
      description: "Superpave high-temperature rheological testing to evaluate rutting parameter (G*/sin δ) and fatigue cracking potential of polymer-modified binders.",
      phase: "Procurement & Validation Phase"
    },
    {
      title: "Hamburg Wheel Track Rutting & Stripping Rig",
      category: "Asphalt Performance",
      targetStandards: "AASHTO T324",
      description: "Evaluating submerged wheel track rut depth and moisture susceptibility of dense bituminous concrete mixes under simulated dynamic wheel loads.",
      phase: "Calibration Phase"
    },
    {
      title: "Falling Weight Deflectometer (FWD) Pavement Survey",
      category: "Field Highway Testing",
      targetStandards: "IRC:115 / ASTM D4694",
      description: "Mobile impulse load deflection testing to back-calculate in-situ elastic moduli and predict remaining structural life of highway pavements.",
      phase: "Procurement Phase"
    },
    {
      title: "Half-Cell Potential & Structural Corrosion Mapping",
      category: "Concrete Structural Durability",
      targetStandards: "ASTM C876",
      description: "Electrochemical mapping of active corrosion risk in bridge piers, culverts, and marine concrete infrastructure.",
      phase: "Equipment Testing Phase"
    },
    {
      title: "Plate Load Test & Subgrade Modulus (k-value)",
      category: "Geotechnical & Soil Testing",
      targetStandards: "IS: 1888 / IRC:58",
      description: "In-situ hydraulic loading plate tests to measure the modulus of subgrade reaction for industrial flooring and plain jointed concrete highways.",
      phase: "Field Rig Commissioning"
    },
    {
      title: "British Pendulum Skid Resistance Tester (BPN)",
      category: "Highway Safety & Friction",
      targetStandards: "ASTM E303 / BS EN 13036-4",
      description: "Dynamic pendulum measurement of micro-texture and wet friction values on highway wearing courses and runway pavements.",
      phase: "Commissioning Phase"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planned Laboratory Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Future Testing Capabilities & Technical Roadmap
          </h2>
          <p className="text-base sm:text-lg text-graphite-300 leading-relaxed">
            In keeping with our commitment to transparency, the following specialized testing capabilities are actively in our equipment procurement and calibration pipeline.
          </p>
        </div>

        {/* Planned Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plannedExpansions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-semibold text-graphite-400 bg-navy-800 px-2 py-0.5 rounded">
                    {item.targetStandards}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-graphite-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs text-graphite-400">
                <span className="flex items-center gap-1.5 text-amber-400/90 font-medium">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{item.phase}</span>
                </span>
                <span className="text-[11px] text-graphite-500 font-mono">
                  Roadmap Q2-Q3
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Planned Services */}
        <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 text-xs text-graphite-400 flex items-start gap-3 max-w-3xl">
          <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Notice:</strong> {labConfig?.disclaimers?.plannedServiceNote || "Services marked as Planned Expansion are in equipment procurement and validation phases."} If your project requires these advanced tests, please register your interest so we can prioritize commissioning schedules.
          </span>
        </div>
      </div>
    </section>
  );
};
