import React from 'react';
import { MessageSquare, Calendar, Video, CheckCircle2 } from 'lucide-react';
import { CREATIVE_PROCESS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const stepIcons = [MessageSquare, Calendar, Video, CheckCircle2];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F7F7F7] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 font-serif-heading">
            Our Creative Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            A seamless four-step journey designed to transform your unique vision into enduring cinematic art with clarity and precision.
          </p>
        </div>

        {/* 4-Step Process Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle desktop connecting line */}
          <div
            className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-neutral-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {CREATIVE_PROCESS.map((item, index) => {
              const Icon = stepIcons[index];

              return (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#171717] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        <Icon className="w-5 h-5 text-[#C49A55]" />
                      </div>
                      <span className="font-mono text-2xl font-extrabold text-neutral-300">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-xl font-bold text-[#171717] mb-1 font-serif-heading">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#C49A55] uppercase tracking-wider mb-3">
                      {item.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-neutral-100 space-y-1.5">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C49A55] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
