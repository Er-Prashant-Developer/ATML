import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  Microscope 
} from 'lucide-react';
import { labConfig } from '../data/labConfig';

export const AboutSection = () => {
  const corePrinciples = [
    {
      title: "Scientific Rigour & Strict Methodologies",
      description: "Every physical, thermal, and mechanical test is conducted in full compliance with published Indian Standards (IS), ASTM, IRC, and MoRTH manuals. We maintain strict control over testing temperatures, displacement rates, and curing intervals.",
      icon: Microscope
    },
    {
      title: "Traceable & Uncompromised Reporting",
      description: "Our reports detail raw observations, calculation formulas, equipment calibration IDs, and pass/fail thresholds against standard specification limits, giving infrastructure developers complete confidence during technical audits.",
      icon: FileCheck
    },
    {
      title: "Field Deployment & Highway Sampling",
      description: "Equipped with motorized diamond core extraction machinery, our field crews take the laboratory to the highway, securing intact cores and logging in-situ pavement layer profiles directly from active road sections.",
      icon: Truck
    },
    {
      title: "Dedicated Engineering Support",
      description: "Our team consists of qualified civil and material testing engineers ready to discuss testing requirements, interpret anomalous results, and assist contractors in maintaining quality control at every construction stage.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            About Our Laboratory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Technical Precision Dedicated to Pavement and Structural Durability
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            {labConfig?.legalName || "ATML Laboratory"} is an engineering-driven testing laboratory established to deliver accurate, dependable, and reproducible testing for bitumen, asphalt mixtures, road cores, aggregates, soils, and concrete structures.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-graphite-700 leading-relaxed text-sm sm:text-base">
            <p>
              Highway and infrastructure projects depend fundamentally on the quality of their constituent materials. Substandard bitumen consistency, improperly graded aggregate fractions, or insufficient field asphalt compaction lead directly to premature pavement failures like rutting, cracking, and ravelling.
            </p>
            <p>
              At ATML, our testing infrastructure bridges the gap between field construction challenges and standardized laboratory verification. From evaluating refinery-supplied VG-30 and modified binders to performing forensic pavement core thickness analyses on freshly laid expressways, our objective is singular: to provide transparent, unassailable testing data.
            </p>
            
            <div className="p-4 rounded-xl bg-graphite-50 border border-graphite-200 mt-4">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-safety-500" />
                Our Quality Mandate
              </h4>
              <p className="text-xs sm:text-sm text-graphite-600">
                {labConfig?.disclaimers?.accreditationNote || "All testing is conducted in strict accordance with approved standard procedures."}
              </p>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-graphite-200 bg-navy-950">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="ATML materials testing laboratory apparatus"
                className="w-full h-80 object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-safety-500 text-white uppercase tracking-wider">
                  Testing Facilities
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  Controlled Testing Environment
                </h3>
                <p className="text-xs text-graphite-300 mt-1">
                  Thermostatically regulated water baths, digital peak-hold compression frames, and precision analytical balances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {corePrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-graphite-50/70 border border-graphite-200 hover:border-safety-500/50 hover:bg-white transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-900 text-safety-400 flex items-center justify-center mb-4 group-hover:bg-safety-500 group-hover:text-white transition-colors shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
