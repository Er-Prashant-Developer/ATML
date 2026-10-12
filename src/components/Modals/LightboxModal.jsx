import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ item, items, onClose, onSelectIndex, currentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items, onClose, onSelectIndex]);

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % items.length);
  };

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-8 bg-navy-950/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-navy-900 rounded-2xl overflow-hidden border border-navy-800 shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-navy-800 bg-navy-950 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-navy-800 text-safety-400 font-semibold uppercase tracking-wider border border-navy-700">
              {item.category}
            </span>
            <span className="text-xs text-graphite-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-navy-800 text-graphite-300 hover:text-white hover:bg-navy-700 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area with Nav Controls */}
        <div className="relative h-[48vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 text-white hover:bg-safety-500 transition-colors backdrop-blur-sm border border-navy-700 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 text-white hover:bg-safety-500 transition-colors backdrop-blur-sm border border-navy-700 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption Bar */}
        <div className="p-4 sm:p-6 bg-navy-950 text-white border-t border-navy-800">
          <h4 className="text-base sm:text-lg font-bold text-white mb-1">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-graphite-300">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
