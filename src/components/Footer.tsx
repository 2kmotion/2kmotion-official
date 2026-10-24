import React from 'react';
import { Phone, Mail, Instagram, Youtube, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-16 pb-12 text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-100">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm">
                2K
              </span>
              <span className="text-2xl font-bold tracking-tight text-[#171717]">
                2K<span className="text-[#C49A55]">Motion</span>
              </span>
            </div>

            <p className="text-base font-serif italic text-neutral-800">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed">
              {BRAND_INFO.supportingText}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow 2KMotion on Instagram"
                className="w-9 h-9 rounded-full bg-[#F7F7F7] border border-neutral-200 text-neutral-700 hover:text-[#C49A55] hover:border-[#C49A55] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to 2KMotion on YouTube"
                className="w-9 h-9 rounded-full bg-[#F7F7F7] border border-neutral-200 text-neutral-700 hover:text-[#C49A55] hover:border-[#C49A55] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with 2KMotion on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#F7F7F7] border border-neutral-200 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-600">
              <li>
                <a href="#services" className="hover:text-[#C49A55] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C49A55] transition-colors">
                  Portfolio & Gallery
                </a>
              </li>
              <li>
                <a href="#showreel" className="hover:text-[#C49A55] transition-colors">
                  Cinematic Showreel
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C49A55] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C49A55] transition-colors">
                  Creative Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C49A55] transition-colors">
                  Book Your Shoot
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#C49A55] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-600">
              <a
                href={BRAND_INFO.phoneTel}
                className="flex items-center gap-2 hover:text-[#C49A55] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C49A55]" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a
                href={BRAND_INFO.emailMailto}
                className="flex items-center gap-2 hover:text-[#C49A55] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C49A55]" />
                <span className="truncate">{BRAND_INFO.email}</span>
              </a>
              <div className="text-[11px] text-neutral-400 pt-2">
                Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 2KMotion. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Photography · Cinematography · Editing · Creative Media</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-8 h-8 rounded-full bg-[#F7F7F7] hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
