import React, { useState } from 'react';
import { 
  serviceCategories 
} from '../data/servicesData';
import { 
  Clock, 
  Info, 
  Search
} from 'lucide-react';
import { ServiceDetailModal } from './Modals/ServiceDetailModal';
import { labConfig } from '../data/labConfig';

export const ServicesSection = ({ onSelectTestForQuote }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('bitumen');
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, available, planned

  const currentCategory = serviceCategories.find(c => c.id === activeCategoryId) || serviceCategories[0];

  // Filtering tests within category or across all if searching
  const filteredTests = currentCategory.tests.filter(test => {
    const matchesSearch = 
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.standards.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'available' ? test.status === 'Available Now' :
      test.status === 'Coming Soon';

    return matchesSearch && matchesStatus;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-graphite-50 border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Testing Capabilities & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Comprehensive Construction Material Testing Suites
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            Strict method-based testing for civil infrastructure projects. Active tests are marked as <span className="font-semibold text-emerald-600">Available Now</span>, while roadmap capabilities are transparently labeled as <span className="font-semibold text-amber-600">Coming Soon</span>.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-graphite-200">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSearchQuery('');
                }}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-md shadow-navy-900/20'
                    : 'bg-white text-graphite-600 hover:text-navy-900 hover:bg-graphite-100/80 border border-graphite-200'
                }`}
              >
                <span>{cat.shortTitle}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-safety-500 text-white' : 'bg-graphite-100 text-graphite-500'
                }`}>
                  {cat.tests.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Header Card */}
        <div className="relative rounded-2xl overflow-hidden bg-navy-950 text-white mb-10 shadow-lg border border-navy-800">
          <div className="absolute inset-0 z-0">
            <img
              src={currentCategory.image}
              alt={currentCategory.name}
              className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-safety-500 text-white uppercase tracking-wider inline-block mb-3">
                {currentCategory.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                {currentCategory.name}
              </h3>
              <p className="text-sm sm:text-base text-graphite-300">
                {currentCategory.description}
              </p>
            </div>

            {/* Quick Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-graphite-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tests or standard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg bg-navy-900/90 border border-navy-700 text-xs text-white placeholder-graphite-400 focus:outline-none focus:border-safety-500 w-full sm:w-56"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-lg bg-navy-900/90 border border-navy-700 text-xs text-graphite-200 focus:outline-none focus:border-safety-500"
              >
                <option value="all">All Statuses</option>
                <option value="available">Available Now</option>
                <option value="planned">Coming Soon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => {
            const isOperational = test.status === "Available Now";

            return (
              <div
                key={test.id}
                className="rounded-xl bg-white border border-graphite-200 p-6 shadow-sm hover:shadow-lg hover:border-safety-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Status & Standard Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                        isOperational
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isOperational ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {test.status}
                    </span>

                    <span className="text-[11px] font-bold text-graphite-600 bg-graphite-100 px-2 py-0.5 rounded">
                      {test.standards.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Test Title */}
                  <h4 className="text-base font-bold text-navy-900 mb-2 group-hover:text-safety-600 transition-colors">
                    {test.name}
                  </h4>

                  {/* Short summary */}
                  <p className="text-xs text-graphite-600 line-clamp-3 leading-relaxed mb-4">
                    {test.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-graphite-100 mt-2 space-y-3">
                  <div className="flex items-center justify-between text-xs text-graphite-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-safety-500" />
                      <span>{test.turnaround}</span>
                    </span>
                    <span className="font-mono text-[11px] text-graphite-400">
                      {test.standards}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedTest(test)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-white text-xs font-semibold transition-all group/btn"
                    >
                      <Info className="w-3.5 h-3.5 text-safety-500 group-hover/btn:text-white" />
                      <span>View Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectTestForQuote) {
                          onSelectTestForQuote(test, currentCategory);
                        }
                      }}
                      className="px-3 py-2 rounded-lg bg-graphite-100 hover:bg-safety-500 text-graphite-700 hover:text-white text-xs font-semibold transition-all"
                      title="Request a Quote for this test"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTests.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-graphite-200">
            <p className="text-graphite-500 text-sm">
              No tests found matching your search or status filter. Try clearing the search query.
            </p>
          </div>
        )}

        {/* Core Cutting & Site Logistics Notice Banner */}
        <div className="mt-12 p-6 rounded-xl bg-navy-900 text-white border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-safety-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-bold text-white">
                Project Site Logistics & Field Sample Collection
              </h5>
              <p className="text-xs text-graphite-300 mt-0.5">
                {labConfig?.disclaimers?.fieldServiceNote || "Highway core cutting and site sample collection services are subject to crew availability and project scheduling."} Contact our engineering coordination desk to align scheduling.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-lg bg-safety-500 hover:bg-safety-600 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            Schedule Site Sampling
          </a>
        </div>
      </div>

      {/* Test Detail Modal */}
      {selectedTest && (
        <ServiceDetailModal
          test={selectedTest}
          category={currentCategory}
          onClose={() => setSelectedTest(null)}
          onSelectForQuote={(test, cat) => {
            if (onSelectTestForQuote) {
              onSelectTestForQuote(test, cat);
            }
          }}
        />
      )}
    </section>
  );
};
