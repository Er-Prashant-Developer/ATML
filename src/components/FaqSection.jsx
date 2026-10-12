import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { ChevronDown, Search } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqsData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-graphite-50 border-b border-graphite-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Frequently Asked Technical & Testing Questions
          </h2>
          <p className="text-base text-graphite-600 leading-relaxed">
            Clear guidelines regarding sample requirements, turnaround timelines, core drilling logistics, and engineering report traceability.
          </p>

          {/* Quick Search */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-graphite-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs (e.g. core cutting, standards, sample size)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-graphite-300 text-sm text-graphite-800 placeholder-graphite-400 focus:outline-none focus:ring-2 focus:ring-safety-500/20 focus:border-safety-500 shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-graphite-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus:bg-graphite-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-safety-600 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-graphite-100 text-navy-900 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-safety-50 text-safety-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-graphite-600 leading-relaxed border-t border-graphite-100 bg-graphite-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-xl border border-graphite-200 text-sm text-graphite-500">
              No questions found matching your search term. Feel free to contact our engineering desk directly below!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
