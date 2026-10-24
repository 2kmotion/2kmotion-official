import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Play, Pause, ArrowRight, Share2, Check } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onSelectForBooking: (serviceTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
  onSelectForBooking,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top Bar with Close & Controls */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
            {item.categoryLabel}
          </span>
          <span className="hidden sm:inline text-xs text-neutral-400">
            {item.clientType === 'Showcase' ? 'Curated Editorial Showcase' : 'Commissioned Client Work'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            aria-label="Share project"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={onSelectPrev}
        aria-label="Previous artwork"
        className="absolute left-3 sm:left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={onSelectNext}
        aria-label="Next artwork"
        className="absolute right-3 sm:right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Container */}
      <div className="relative z-40 max-w-5xl w-full max-h-[90vh] bg-[#121212] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-neutral-800">
        {/* Media Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px] max-h-[60vh] md:max-h-[80vh] overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-contain max-h-[80vh]"
            referrerPolicy="no-referrer"
          />

          {/* Video simulation overlay if mediaType is video */}
          {item.mediaType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                aria-label={isPlayingVideo ? 'Pause Video' : 'Play Video'}
                className="w-16 h-16 rounded-full bg-white text-[#171717] flex items-center justify-center shadow-xl hover:scale-110 hover:bg-[#C49A55] hover:text-white transition-all cursor-pointer"
              >
                {isPlayingVideo ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Info & Metadata */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-7 bg-[#171717] text-white flex flex-col justify-between shrink-0 overflow-y-auto max-h-[40vh] md:max-h-[80vh]">
          <div>
            {/* Location & Category unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C49A55] uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading leading-tight mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {item.description}
            </p>

            {/* EXIF Data block */}
            {item.exif && (
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#C49A55]" />
                  <span>Production Details</span>
                </div>
                <div className="text-xs text-neutral-200">
                  <div className="font-medium text-white">{item.exif.camera}</div>
                  <div className="text-neutral-400">{item.exif.lens}</div>
                  <div className="text-[11px] font-mono text-[#C49A55] mt-1">{item.exif.settings}</div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <div className="text-[11px] text-neutral-400 text-center">
              Authentic Tamil Nadu Production by 2KMotion
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(item.categoryLabel);
              }}
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#171717] bg-white hover:bg-[#C49A55] hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Enquire For This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
