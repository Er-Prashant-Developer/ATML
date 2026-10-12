import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  Clock, 
  Scale, 
  FileCheck2, 
  BookOpen, 
  Send,
  AlertCircle
} from 'lucide-react';

export const ServiceDetailModal = ({ test, category, onClose, onSelectForQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!test) return null;

  const isOperational = test.status === "Available Now";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-graphite-200 overflow-hidden text-graphite-900 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-navy-900 text-white p-5 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-navy-800 text-graphite-300 hover:text-white hover:bg-navy-700 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded bg-navy-800 text-safety-400 font-semibold border border-navy-700">
              {category?.name || "Testing Service"}
            </span>
            <span 
              className={`text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5 ${
                isOperational 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOperational ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              {test.status}
            </span>
            {test.isRoutine && (
              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                Standard Routine
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display text-white pr-8">
            {test.name}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-graphite-300">
            <BookOpen className="w-4 h-4 text-safety-400" />
            <span className="font-medium text-white">{test.standards}</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-graphite-50 border border-graphite-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-graphite-500 uppercase tracking-wider block">
                  Turnaround Time
                </span>
                <span className="text-sm font-semibold text-navy-900">
                  {test.turnaround}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-graphite-50 border border-graphite-200 flex items-start gap-3">
              <Scale className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-graphite-500 uppercase tracking-wider block">
                  Sample Required
                </span>
                <span className="text-sm font-semibold text-navy-900">
                  {test.sampleReq}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-navy-700" />
              Methodology & Technical Summary
            </h4>
            <p className="text-sm text-graphite-700 leading-relaxed bg-white border border-graphite-200 p-4 rounded-xl">
              {test.description}
            </p>
          </div>

          {/* Civil Engineering Applications */}
          {test.applications && test.applications.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5">
                Primary Applications & Specifications
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {test.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isOperational && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800 leading-relaxed">
                <strong>Planned Laboratory Capability:</strong> This test is in validation / procurement phase. You may submit an inquiry to express interest or register future project requirements.
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-graphite-50 border-t border-graphite-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-graphite-300 text-graphite-700 hover:bg-graphite-100 text-sm font-semibold transition-colors"
          >
            Close
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onSelectForQuote) {
                onSelectForQuote(test, category);
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-safety-500 hover:bg-safety-600 text-white text-sm font-semibold shadow-md shadow-safety-500/20 transition-all hover:shadow-safety-500/40"
          >
            <Send className="w-4 h-4" />
            <span>Request Quote for This Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};
