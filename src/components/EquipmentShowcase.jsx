import React, { useState } from 'react';
import { equipmentList } from '../data/equipmentData';
import { 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';

export const EquipmentShowcase = () => {
  const [activeDept, setActiveDept] = useState('All');

  const departments = [
    'All',
    'Bitumen Laboratory',
    'Asphalt & Bituminous',
    'Highway & Field Testing',
    'Concrete Laboratory',
    'Aggregate & Soil',
  ];

  const filteredEquipment = equipmentList.filter(item => {
    if (activeDept === 'All') return true;
    if (activeDept === 'Aggregate & Soil') {
      return item.category === 'Aggregate & Soil' || item.category === 'Aggregate Laboratory' || item.category === 'Soil & Subgrade';
    }
    return item.category === activeDept;
  });

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Laboratory Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Calibrated Testing Machinery & Scientific Instrumentation
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            Authentic laboratory testing equipment maintained under rigorous calibration routines with periodic verification against national measurement standards.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-graphite-200">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeDept === dept
                  ? 'bg-safety-500 text-white shadow-sm'
                  : 'bg-graphite-100 text-graphite-600 hover:text-navy-900 hover:bg-graphite-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="rounded-2xl bg-white border border-graphite-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Equipment Real Photograph */}
                <div className="relative h-52 overflow-hidden bg-navy-950">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-navy-900/90 text-white border border-navy-700 backdrop-blur-sm">
                      {eq.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white shadow-sm flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {eq.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold text-white drop-shadow-sm leading-snug">
                      {eq.name}
                    </h3>
                  </div>
                </div>

                {/* Equipment Summary */}
                <div className="p-6">
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                    {eq.description}
                  </p>

                  {/* Verified Specs Table */}
                  <div className="bg-graphite-50 rounded-xl p-3 border border-graphite-200 space-y-2 mb-4">
                    <span className="text-[10px] font-bold text-graphite-500 uppercase tracking-wider block">
                      Verified Technical Specifications
                    </span>
                    {eq.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-start text-xs gap-2 pt-1 border-t border-graphite-200/60 first:border-t-0 first:pt-0">
                        <span className="text-graphite-500 font-medium">{spec.label}:</span>
                        <span className="text-navy-900 font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testing Applications */}
                  <div>
                    <span className="text-[10px] font-bold text-graphite-500 uppercase tracking-wider block mb-1">
                      Primary Application
                    </span>
                    <p className="text-xs text-graphite-700 leading-snug font-medium">
                      {eq.applications}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Book Testing on this Apparatus</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="p-12 text-center bg-graphite-50 rounded-2xl border border-graphite-200 mt-6">
            <p className="text-graphite-500 text-sm">
              No equipment found for this laboratory department.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
