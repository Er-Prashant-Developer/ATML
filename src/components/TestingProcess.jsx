import React from 'react';
import { 
  FileText, 
  MessageSquare, 
  Truck, 
  FlaskConical, 
  FileCheck, 
  Clock
} from 'lucide-react';

export const TestingProcess = () => {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Submit Inquiry & Scope",
      description: "Send your material specifications, testing BOQ, or project tender requirements via our website quotation form or direct WhatsApp line.",
      timeline: "Initial Response in <2 Hours"
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "Align Testing Protocol",
      description: "Our material engineers review governing standard codes (IS/MoRTH/ASTM), specify required sample weights, and issue a formal itemized quotation.",
      timeline: "Same-Day Quote"
    },
    {
      step: "03",
      icon: Truck,
      title: "Sample Delivery or Site Coring",
      description: "Deliver tagged samples to our lab reception, or dispatch our field core drilling crew to extract 100mm/150mm cores from your road corridor.",
      timeline: "Scheduled on Demand"
    },
    {
      step: "04",
      icon: FlaskConical,
      title: "Standardized Lab Testing",
      description: "Specimens undergo mandatory conditioning (water baths, curing periods) and are tested on calibrated machines with computerized peak-hold recording.",
      timeline: "24h to Standard Duration"
    },
    {
      step: "05",
      icon: FileCheck,
      title: "Verified Engineering Report",
      description: "Receive serialized, tamper-evident digital reports along with physical signed certificates comparing actual results against MoRTH/IS specifications.",
      timeline: "Immediate Post-Completion"
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-500/10 border border-safety-500/20 text-safety-400 text-xs font-bold uppercase tracking-wider mb-3">
            Systematic Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Our 5-Step Testing & Quality Assurance Process
          </h2>
          <p className="text-base sm:text-lg text-graphite-300 leading-relaxed">
            From preliminary inquiry and sample chain of custody to calibrated testing and verified report delivery, every stage is executed with strict scientific discipline.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl bg-navy-900/80 border border-navy-800 p-6 flex flex-col justify-between hover:border-safety-500/60 transition-all duration-300 group hover:-translate-y-1 ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-navy-700 group-hover:text-safety-500 transition-colors font-display">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-safety-400 flex items-center justify-center group-hover:bg-safety-500 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-graphite-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-navy-800/80 flex items-center gap-1.5 text-[11px] text-graphite-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-safety-400 shrink-0" />
                  <span>{item.timeline}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note regarding duration */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-xs text-graphite-400 flex items-center gap-3 max-w-3xl">
          <Clock className="w-4 h-4 text-safety-500 shrink-0" />
          <span>
            <strong>Note on Testing Durations:</strong> Actual test turnaround depends strictly on standard method specifications (e.g., 4-day soaking for CBR, 5-cycle immersion for aggregate soundness, or 28-day concrete cube curing), sample condition upon arrival, and testing workload.
          </span>
        </div>
      </div>
    </section>
  );
};
