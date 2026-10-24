import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Camera, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 border border-neutral-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C49A55] block mb-1">
              {service.subtitle}
            </span>
            <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold font-serif-heading">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-neutral-700 leading-relaxed text-base">
            {service.description}
          </p>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#C49A55]" />
              <span>What We Deliver</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800">
                  <div className="w-5 h-5 rounded-full bg-[#C49A55]/15 text-[#C49A55] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          {service.tools && (
            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#C49A55]" />
                <span>Professional Suite & Gear</span>
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-700">
                {service.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F7F7F7] px-3 py-1.5 rounded-lg border border-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Back to Services
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#C49A55] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire For {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
