import React from 'react';
import { Play, ArrowRight, Camera, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onBookShoot: () => void;
  onPlayShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onBookShoot, onPlayShowreel }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
      {/* Subtle background ambient light */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C49A55]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow kicker with zero-pill unboxed styling */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-4">
              <span>{BRAND_INFO.heroEyebrow}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-500 font-medium">EST. TAMIL NADU</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.12] mb-6 font-serif-heading" style={{ textWrap: 'balance' }}>
              We Capture Moments.{' '}
              <span className="italic font-normal text-[#C49A55] block sm:inline">
                We Create Stories.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
              {BRAND_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreWork}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#171717] rounded-xl hover:bg-[#C49A55] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookShoot}
                className="px-7 py-3.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-300 rounded-xl hover:border-[#C49A55] hover:text-[#C49A55] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Book Your Shoot</span>
              </button>
            </div>

            {/* Regional Trust Marker */}
            <div className="flex items-center gap-3 text-xs text-neutral-500 pt-4 border-t border-neutral-100">
              <MapPin className="w-4 h-4 text-[#C49A55] shrink-0" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-neutral-800">Filming Across:</span>
                <span>Chennai</span>
                <span aria-hidden="true">·</span>
                <span>Madurai</span>
                <span aria-hidden="true">·</span>
                <span>Coimbatore</span>
                <span aria-hidden="true">·</span>
                <span>Thanjavur</span>
                <span aria-hidden="true">·</span>
                <span>Tiruchirappalli</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative card frame with soft rounded corners */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl border border-neutral-200/80 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[560px]">
                <img
                  src="/src/assets/images/hero_tamil_wedding_1792822987914.jpg"
                  alt="Authentic Tamil wedding couple in traditional Kanchipuram silk saree and veshti smiling inside stone mandapam"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim for typography & controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Play Showreel Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={onPlayShowreel}
                    aria-label="Play 2KMotion Cinematic Showreel"
                    className="group/play flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md text-[#171717] hover:bg-white hover:scale-105 transition-all shadow-xl cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#171717] text-white flex items-center justify-center group-hover/play:bg-[#C49A55] transition-colors">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Watch Reel</div>
                      <div className="text-xs font-bold text-[#171717]">Cinematic Showreel</div>
                    </div>
                  </button>
                </div>

                {/* Bottom Media Card Details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2 drop-shadow-md">
                    <Camera className="w-4 h-4 text-[#C49A55]" />
                    <span className="font-medium">Traditional Mandapam · Madurai</span>
                  </div>
                  <div className="text-neutral-200 font-mono text-[11px] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                    4K HDR · 50 FPS
                  </div>
                </div>
              </div>

              {/* Cultural Trust Tag Card */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C49A55]/10 text-[#C49A55] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#171717]">Authentic Tamil Culture</div>
                  <div className="text-[11px] text-neutral-500">Weddings, Traditions & Modern Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Service Intro & Trust Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-neutral-100">
          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl font-serif text-[#171717] font-medium tracking-wide">
              “{BRAND_INFO.serviceIntro}”
            </p>
          </div>

          {/* 4-Item Unboxed Capability Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-neutral-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">Ritual Mastery</div>
              <div className="text-sm font-semibold text-[#171717]">Tamil Wedding Nuptials</div>
              <div className="text-[12px] text-neutral-500 mt-0.5">Thaali · Oonjal · Kasi Yatra</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-neutral-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">Cinema Gear</div>
              <div className="text-sm font-semibold text-[#171717]">4K & 6K Multi-Cam</div>
              <div className="text-[12px] text-neutral-500 mt-0.5">Sony FX3 · Gimbal · Drones</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-neutral-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">Post Production</div>
              <div className="text-sm font-semibold text-[#171717]">Premiere & After Effects</div>
              <div className="text-[12px] text-neutral-500 mt-0.5">Film Grade · Sound Design</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-neutral-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">Commercial & Digital</div>
              <div className="text-sm font-semibold text-[#171717]">Brand Ads & Viral Reels</div>
              <div className="text-[12px] text-neutral-500 mt-0.5">High-Retention Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
