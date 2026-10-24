import React from 'react';
import { Check, ShieldCheck, Sparkles, Layers, Sliders, Heart, Share2, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseSection: React.FC = () => {
  const icons = [
    Sparkles,
    Layers,
    Sliders,
    Heart,
    ShieldCheck,
    Share2,
    MessageCircle
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            THE 2KMOTION ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 font-serif-heading">
            Why Choose 2KMotion?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            We unite technical mastery in cinematography with authentic cultural empathy, ensuring your memories and brand stories are captured with grace and timeless style.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isFullWidth = index === 6;

            return (
              <div
                key={index}
                className={`p-7 sm:p-8 rounded-3xl bg-[#F7F7F7] border border-neutral-200/80 hover:border-[#C49A55]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 text-[#171717] flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-5 h-5 text-[#C49A55]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-2.5 font-serif-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-[#171717]">
                  <Check className="w-3.5 h-3.5 text-[#C49A55]" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
