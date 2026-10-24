import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#171717] px-3.5 py-2 rounded-2xl shadow-xl border border-neutral-200 text-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Need a quick quote? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss WhatsApp hint"
            className="text-neutral-400 hover:text-neutral-700 ml-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with 2KMotion on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-108 hover:bg-[#20ba59] transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
