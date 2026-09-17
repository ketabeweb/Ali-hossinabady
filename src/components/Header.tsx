import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Clock, ShieldCheck, Menu, X, PhoneCall, Sparkles, Video } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';
import { MasirLogo } from './MasirLogo';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'تست فوری و قلاب رهایی', target: 'recovery-hook' },
    { label: 'ویدئوی آقای استاد مسافر', target: 'video-section' },
    { label: '۸۰٪ خدمات رایگان', target: 'free-services' },
    { label: 'روش درمان بدون درد MMO', target: 'methodology' },
    { label: 'دست‌نوشته‌ها و نتایج بیماران', target: 'handwritten-notes' },
    { label: 'گروه ۲۴ ساعته ایتا', target: 'eitaa-group-section' },
    { label: 'سوالات متداول', target: 'faq' },
  ];

  const handleNavClick = (target: string) => {
    onScrollToSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Emergency & Support Hotline Bar */}
      <div id="top-hotline-bar" className="bg-gradient-to-r from-blue-950 via-slate-950 to-blue-900 text-white text-xs sm:text-sm py-2.5 px-4 border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="font-medium text-slate-200">شماره‌های مشاوره و پشتیبانی ۲۴ ساعته:</span>
            
            {/* Phone 1 */}
            <a
              id="header-phone-link-1"
              href={`tel:${CONTACT_INFO.phonePrimary}`}
              className="font-black text-cyan-300 hover:text-white transition-colors underline decoration-cyan-400/50 flex items-center gap-1 dir-ltr font-mono text-xs sm:text-sm"
              title="همراه مشاور ارشد (شبانه‌روزی)"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>{CONTACT_INFO.phoneDisplayPrimary}</span>
            </a>

            <span className="text-slate-500 hidden md:inline">|</span>

            {/* Phone 2 */}
            <a
              id="header-phone-mobile-1"
              href={`tel:${CONTACT_INFO.phoneMobile1}`}
              className="font-bold text-slate-200 hover:text-cyan-300 transition-colors hidden md:flex items-center gap-1 dir-ltr font-mono text-xs"
              title="مشاوره تلفنی"
            >
              <span>{CONTACT_INFO.phoneDisplayMobile1}</span>
            </a>

            <span className="text-slate-500 hidden lg:inline">|</span>

            {/* Phone 3 */}
            <a
              id="header-phone-mobile-3"
              href={`tel:${CONTACT_INFO.phoneMobile3}`}
              className="font-bold text-slate-200 hover:text-cyan-300 transition-colors hidden lg:flex items-center gap-1 dir-ltr font-mono text-xs"
              title="مشاوره تلفنی"
            >
              <span>{CONTACT_INFO.phoneDisplayMobile3}</span>
            </a>

            <span className="text-slate-500 hidden sm:inline">|</span>

            {/* Phone 4 */}
            <a
              id="header-phone-link-2"
              href={`tel:${CONTACT_INFO.phoneSecondary}`}
              className="font-black text-blue-300 hover:text-white transition-colors underline decoration-blue-400/50 hidden sm:flex items-center gap-1 dir-ltr font-mono text-xs sm:text-sm"
              title="تلفن ثابت دفتر مرکزی مشهد"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CONTACT_INFO.phoneDisplaySecondary}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30 text-[11px]">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>۸۰٪ خدمات کاملاً رایگان است</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              مرکز تخصصی مشهد
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Official Emblem */}
          <div
            id="brand-logo-trigger"
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer group"
          >
            <MasirLogo size="md" lightMode={true} animated={true} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map(link => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              id="nav-video-btn"
              onClick={() => handleNavClick('video-section')}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-50 text-blue-800 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-blue-200/80 transition-all cursor-pointer"
              title="مشاهده ویدئوی سخنان آقای استاد مسافر"
            >
              <Video className="w-3.5 h-3.5 text-blue-600" />
              <span>ویدئوی آقای استاد مسافر</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="nav-consultation-btn"
              onClick={() => handleNavClick('consultation')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>مشاوره رایگان</span>
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="منوی سایت"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl"
          >
            {/* Phone quick dials in mobile menu */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href={`tel:${CONTACT_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold py-2.5 rounded-xl border border-blue-200 font-mono dir-ltr"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.phoneDisplayPrimary}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneSecondary}`}
                className="flex items-center justify-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl border border-slate-200 font-mono dir-ltr"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.phoneDisplaySecondary}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneMobile1}`}
                className="flex items-center justify-center gap-1.5 bg-cyan-50 text-cyan-800 text-xs font-bold py-2.5 rounded-xl border border-cyan-200 font-mono dir-ltr"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.phoneDisplayMobile1}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneMobile3}`}
                className="flex items-center justify-center gap-1.5 bg-indigo-50 text-indigo-800 text-xs font-bold py-2.5 rounded-xl border border-indigo-200 font-mono dir-ltr"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.phoneDisplayMobile3}</span>
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
