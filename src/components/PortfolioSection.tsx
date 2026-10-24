import React, { useState } from 'react';
import { Camera, Film, Eye, Play, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioCategory, PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioSectionProps {
  onSelectForBooking: (serviceTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories: { key: PortfolioCategory; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'wedding_photo', label: 'Wedding Photography' },
    { key: 'wedding_cinema', label: 'Wedding Cinematography' },
    { key: 'pre_wedding', label: 'Pre-Wedding Shoots' },
    { key: 'candid_photo', label: 'Candid Moments' },
    { key: 'portrait', label: 'Portraits' },
    { key: 'commercial', label: 'Commercial Ads' },
    { key: 'product', label: 'Product Shoots' },
    { key: 'video_editing', label: 'Video Editing' },
    { key: 'social_reels', label: 'Social Reels' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const currentSelectedItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            CURATED VISUAL PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 font-serif-heading">
            Stories Told Through the Lens
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Authentic Tamil traditions, grand nuptials, and modern commercial campaigns. Every frame is composed with intentionality and cinematic color.
          </p>
        </div>

        {/* Category Filter Bar (Interactive Segmented Control) */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F7F7F7] rounded-2xl border border-neutral-200/80 max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setSelectedItemIndex(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Masonry Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className={`group relative rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Media Type Icon & Category Label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-mono text-[11px] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded text-neutral-200">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C49A55] transition-colors">
                      {item.mediaType === 'video' ? (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      ) : (
                        <Eye className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Image Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-[#C49A55] font-semibold mb-1">
                      {item.location}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif-heading drop-shadow-sm group-hover:text-neutral-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Subdued Metadata Card Footer */}
                <div className="p-4 sm:p-5 bg-white flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-neutral-800">
                      {item.clientType === 'Showcase' ? 'Curated Visual' : 'Commissioned'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate max-w-[200px]">{item.description}</span>
                  </div>
                  <span className="text-[#C49A55] font-semibold hover:underline shrink-0">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F7F7F7] border border-neutral-200/60 max-w-2xl mx-auto text-center text-xs text-neutral-500">
          <span className="font-semibold text-neutral-700">Project Transparency:</span> Visuals displayed represent authentic Tamil Nadu cultural productions, editorial direction, and 2KMotion creative benchmarks across Chennai, Madurai, Coimbatore, and Thanjavur.
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={currentSelectedItem}
        items={filteredItems}
        onClose={() => setSelectedItemIndex(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
        onSelectForBooking={onSelectForBooking}
      />
    </section>
  );
};
