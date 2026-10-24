import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOWREEL_CATEGORIES } from '../data/content';

interface ShowreelSectionProps {
  onBookShoot: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onBookShoot }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('weddings');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const animationRef = useRef<number | null>(null);

  const activeReel =
    SHOWREEL_CATEGORIES.find((c) => c.id === activeCategoryId) || SHOWREEL_CATEGORIES[0];

  // Simulated video playback scrubber
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.8;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
  };

  return (
    <section id="showreel" className="py-20 lg:py-28 bg-[#F7F7F7] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            CINEMATIC SHOWREEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 font-serif-heading">
            A Glimpse of What We Create
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every frame has a feeling. Every story deserves to be told beautifully. Explore the creativity and visual storytelling behind 2KMotion.
          </p>
        </div>

        {/* Video Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-2xl border border-neutral-200/80 shadow-sm max-w-full">
            {SHOWREEL_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setProgress(15);
                    setIsPlaying(true);
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cinematic Video Player Showcase */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
          {/* Main Video Viewport */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group select-none">
            {/* Poster / Video Frame */}
            <img
              src={activeReel.coverImage}
              alt={activeReel.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-103 brightness-95' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Cinematic Letterbox Mask Overlays (optional subtle widescreen aesthetic) */}
            <div className="absolute top-0 inset-x-0 h-6 bg-black/60 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            {/* On-Screen Center Play Button when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                <button
                  onClick={togglePlay}
                  aria-label="Play showreel clip"
                  className="w-20 h-20 rounded-full bg-white text-[#171717] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#C49A55] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>
            )}

            {/* Live Playing State Indicator */}
            {isPlaying && (
              <div className="absolute top-8 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold tracking-wider">REC · 4K 10-BIT</span>
                <span className="text-neutral-400">|</span>
                <span className="text-[#C49A55] font-medium">{activeReel.location}</span>
              </div>
            )}

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col gap-2 z-10">
              {/* Scrubber Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-2 bg-white/25 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all relative"
              >
                <div
                  className="h-full bg-[#C49A55] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Bottom Control Buttons */}
              <div className="flex items-center justify-between text-white text-xs pt-1">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 hover:text-[#C49A55] transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={() => setProgress(0)}
                    className="p-1.5 hover:text-[#C49A55] transition-colors cursor-pointer"
                    aria-label="Replay from start"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 hover:text-[#C49A55] transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-neutral-300">
                    {Math.floor((progress / 100) * 180)}s / {activeReel.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-[11px] text-neutral-300">
                    S-Log3 · DaVinci Graded
                  </span>
                  <div className="p-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reel Details & Story Highlights */}
          <div className="p-6 sm:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-neutral-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C49A55] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeReel.location}</span>
                <span aria-hidden="true">·</span>
                <span>Runtime {activeReel.duration}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] font-serif-heading mb-1">
                {activeReel.title}
              </h3>
              <p className="text-sm text-neutral-600">{activeReel.subtitle}</p>

              {/* Highlights tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {activeReel.videoHighlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-neutral-700 bg-[#F7F7F7] border border-neutral-200/80 px-3 py-1 rounded-lg flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C49A55]" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={onBookShoot}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#C49A55] rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                Book This Style
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
