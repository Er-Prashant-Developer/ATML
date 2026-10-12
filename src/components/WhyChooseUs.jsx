import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  MapPin, 
  Sliders, 
  Microscope 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const strengths = [
    {
      title: "Strict Method-Based Testing",
      desc: "Zero deviation from published standard protocols. Temperatures, loading rates, and specimen curing environments are continuously monitored and logged.",
      icon: Microscope
    },
    {
      title: "Quality-Focused Laboratory Protocols",
      desc: "Our machinery undergoes scheduled calibrations against reference standards, preventing drift and ensuring consistency across all repeated test batches.",
      icon: Sliders
    },
    {
      title: "Clear, Traceable Engineering Reports",
      desc: "Every certificate details raw observations, computational steps, calibrated equipment identifiers, and unambiguous comparison against target specifications.",
      icon: FileText
    },
    {
      title: "Responsive Technical Communication",
      desc: "Direct communication with qualified civil and materials engineers who understand infrastructure project schedules and provide technical clarity.",
      icon: Users
    },
    {
      title: "Project-Specific Testing Protocols",
      desc: "Whether dealing with complex polymer-modified bitumen (PMB) specifications or highway mix verification, we customize sample matrices to your tender BOQ.",
      icon: ShieldCheck
    },
    {
      title: "Field Highway Sampling Support",
      desc: "Equipped for on-demand pavement diamond core drilling, layer depth measurements, and coordinated sample receiving with clear chains of custody.",
      icon: MapPin
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Laboratory Value & Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Why Highway Developers & Contractors Rely on ATML
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            Infrastructure decisions involve high financial stakes and public safety. We provide independent, reproducible material testing data with absolute integrity.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-graphite-50/60 border border-graphite-200 hover:border-safety-500/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-safety-400 flex items-center justify-center mb-5 group-hover:bg-safety-500 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
