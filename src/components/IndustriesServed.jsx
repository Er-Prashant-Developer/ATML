import React from 'react';
import { industriesData } from '../data/industriesData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const IndustriesServed = () => {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-graphite-50 border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Sectors We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Engineering Testing Across Infrastructure Sectors
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            From national expressways and municipal roadways to commercial logistics parks and material manufacturing plants, our testing services support diverse engineering stakeholders.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl bg-white border border-graphite-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-safety-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-navy-950">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-safety-500 text-white uppercase tracking-wider">
                      {ind.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 leading-snug">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-graphite-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-graphite-100">
                    <span className="text-[10px] font-bold text-graphite-500 uppercase tracking-wider block mb-1">
                      Key Services:
                    </span>
                    {ind.keyServices.map((srv, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-graphite-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-safety-500 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Inquire for this Sector</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
