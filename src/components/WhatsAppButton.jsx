import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { labConfig } from '../data/labConfig';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const number = labConfig?.contact?.whatsapp?.number || "919876543210";
  const message = labConfig?.contact?.whatsapp?.defaultMessage || "Hello ATML Laboratory, I would like to inquire about testing services.";
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-950 text-white text-xs font-medium shadow-xl border border-navy-800 animate-in fade-in slide-in-from-right-2 duration-300">
          <span>Need quick quote? Chat with our engineer</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-graphite-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ATML Testing Engineers"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-safety-500 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-safety-500 rounded-full border-2 border-white" />
        <MessageSquare className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
