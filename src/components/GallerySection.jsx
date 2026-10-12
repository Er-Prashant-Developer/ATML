import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../data/galleryData';
import { ZoomIn } from 'lucide-react';
import { LightboxModal } from './Modals/LightboxModal';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Laboratory Visuals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Laboratory Operations & Field Pavement Testing
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            Visual documentation of ongoing material characterization, precision instrument setups, highway core drilling, and civil engineering sample preparation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-graphite-200">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-graphite-100 text-graphite-600 hover:text-navy-900 hover:bg-graphite-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-navy-950 cursor-pointer border border-graphite-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Quick Category Tag */}
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-navy-900/90 text-white border border-navy-700 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-safety-500 text-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption & Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-sm font-bold text-white group-hover:text-safety-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-graphite-300 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          items={filteredItems}
          currentIndex={lightboxIndex}
          onSelectIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};
