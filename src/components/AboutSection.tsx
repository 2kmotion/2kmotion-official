import React from 'react';
import { Camera, Film, Sparkles, HeartHandshake, Award, MonitorCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface AboutSectionProps {
  onBookShoot: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookShoot }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Montage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md aspect-[4/5]">
                  <img
                    src="/src/assets/images/tamil_cinematographer_camera_1792823010108.jpg"
                    alt="2KMotion cinematographer working with cinema camera at Tamil wedding"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-[#F7F7F7] border border-neutral-200/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">
                    Authentic Tamil Roots
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    Rooted in Tamil Nadu's living heritage, temple aesthetics, and traditional nuptial rituals.
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-[#171717] text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#C49A55]/20 text-[#C49A55] flex items-center justify-center mb-3">
                    <MonitorCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">
                    In-House Post Production
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    Custom color science, DaVinci Resolve grading, and pristine audio design.
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md aspect-[4/5]">
                  <img
                    src="/src/assets/images/editing_suite_workstation_1792823029064.jpg"
                    alt="2KMotion creative editing workstation"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
              ABOUT 2KMOTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-6 font-serif-heading">
              Creativity in Every Frame.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              <p>
                <strong className="text-[#171717] font-semibold">2KMotion</strong> is a creative photography and video production brand dedicated to capturing meaningful moments and creating compelling visual content.
              </p>
              <p>
                From traditional Tamil weddings and special celebrations to modern advertisements and social media videos, we combine creativity, technical expertise, and attention to detail to bring every vision to life.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-100 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] border border-neutral-200 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                  <Film className="w-4 h-4 text-[#C49A55]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Uncompromising Quality</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Cinema-grade optics, 10-bit raw captures, and fine-tuned color mastery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] border border-neutral-200 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#C49A55]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Emotional Storytelling</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Unobtrusive candid filming capturing genuine smiles and heartfelt blessings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] border border-neutral-200 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-[#C49A55]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Client Collaboration</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Direct communication, clear milestone timelines, and personalized creative inputs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] border border-neutral-200 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-[#C49A55]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Professional Delivery</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Fast turnaround sneak-peeks, organized digital archives, and heirloom deliverables.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onBookShoot}
                className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#C49A55] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Connect With Us
              </button>
              <a
                href={BRAND_INFO.phoneTel}
                className="text-xs font-semibold text-[#171717] hover:text-[#C49A55] transition-colors"
              >
                Call: {BRAND_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
