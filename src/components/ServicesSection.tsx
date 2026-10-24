import React, { useState } from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            COMPREHENSIVE CREATIVE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-5 font-serif-heading">
            Crafted for Moments That Matter
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From traditional Tamil weddings and emotional ceremonies to commercial brand advertisements and high-engagement social media content, we deliver excellence at every frame.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between bg-white rounded-3xl border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#C49A55]/50 transition-all duration-300 overflow-hidden ${
                index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Media Container */}
              <div
                className={`relative overflow-hidden bg-neutral-100 ${
                  index === 3 ? 'h-64 sm:h-72' : 'h-52 sm:h-60'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Unboxed category badge in image footer */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold tracking-wider uppercase text-[11px] text-[#C49A55] drop-shadow">
                    {service.subtitle}
                  </span>
                  {service.tools && (
                    <span className="text-[11px] font-mono text-neutral-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {service.tools[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#C49A55] transition-colors font-serif-heading">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights checklist preview */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A55] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#171717] transition-colors py-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C49A55]" />
                    <span>Know More</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-lg hover:bg-[#C49A55] transition-colors cursor-pointer active:scale-95 shadow-sm"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForBooking={onSelectService}
      />
    </section>
  );
};
