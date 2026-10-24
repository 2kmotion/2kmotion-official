import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3.5'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (CTA) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-[#171717] whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm group-hover:bg-[#C49A55] transition-colors">
              2K
            </span>
            <span className="tracking-tight font-extrabold text-[#171717]">
              2K<span className="text-[#C49A55]">Motion</span>
            </span>
          </a>

          {/* Zone 2: Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#171717]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#C49A55] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={BRAND_INFO.phoneTel}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#171717]/80 hover:text-[#171717] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C49A55]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] rounded-lg hover:bg-[#C49A55] transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Book Your Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 text-[#171717] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#171717] hover:text-[#C49A55] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
              <a
                href={BRAND_INFO.phoneTel}
                className="flex items-center gap-2 text-sm font-semibold text-[#171717]"
              >
                <Phone className="w-4 h-4 text-[#C49A55]" />
                <span>Call {BRAND_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#171717] rounded-lg hover:bg-[#C49A55] transition-colors cursor-pointer"
              >
                Book Your Shoot
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
