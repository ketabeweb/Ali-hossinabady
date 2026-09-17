import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, PhoneCall, Headphones, ArrowDown, Award, CheckCircle2, Sparkles, BookOpen, Phone, Video, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO, OFFICIAL_VIDEO_URL } from '../data/therapyData';
import { MasirLogo } from './MasirLogo';

interface HeroProps {
  onScrollToConsultation: () => void;
  onScrollToAudio: () => void;
  onPlayAudioIntro: () => void;
  onScrollToHook?: () => void;
  onScrollToVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToConsultation,
  onScrollToAudio,
  onPlayAudioIntro,
  onScrollToHook,
  onScrollToVideo,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/40 to-slate-50">
      {/* Background ambient lighting - Medical Blue glow */}
      <div className="absolute top-10 right-5 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            
            {/* Trust badge with emblem */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/90 text-blue-900 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span className="font-bold">پیشگام در روان‌درمانی ریشه‌ای و سبک زندگی پاک در ایران</span>
              <span className="text-blue-600/70 font-mono text-xs">| mmosafer.com</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-950 leading-[1.25] tracking-tight">
              رهایی پایدار با <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">آگاهی عمیق</span>،<br />
              نه با درد و خماری و بستری!
            </h1>

            {/* Value Proposition Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              درمان علمی انواع وابستگی (متادون، تریاک، ب۲، ترامادول، مواد محرک و الکل) با متد اختصاصی <strong className="text-slate-900 font-bold">MMO</strong> و کتاب <strong className="text-blue-700 font-bold">«چهل پله چهل راه»</strong> در خانه. بدون نیاز به مرخصی شغلی، بدون انزوا در کمپ و با همراهی ۲۴ ساعته مشاوران بالینی.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <motion.div whileHover={{ y: -3 }} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">+۱۵</div>
                <div className="text-xs text-slate-600 font-medium mt-1">سال سابقه درمانی</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">+۱۰,۰۰۰</div>
                <div className="text-xs text-slate-600 font-medium mt-1">رهجوی رها شده</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">۰ روز</div>
                <div className="text-xs text-slate-600 font-medium mt-1">بستری یا دوری از کار</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">۲۴/۷</div>
                <div className="text-xs text-slate-600 font-medium mt-1">پشتیبانی تلفنی</div>
              </motion.div>
            </div>

            {/* 80% Free Services Trust Ribbon */}
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-400/70 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-emerald-950 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-black">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  ۸۰٪
                </span>
                <div>
                  <span className="text-emerald-900 block font-black">۸۰٪ کلیه خدمات مشاوره، روان‌درمانی و پشتیبانی کاملاً رایگان است!</span>
                  <span className="text-[11px] text-emerald-700 font-medium">سازمان مردم‌نهاد مسیر مسافر • بدون هزینه‌های سنگین و بدون دکان تجاری</span>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-300 shadow-xs">
                خداپسندانه و حمایتی
              </span>
            </div>

            {/* High-Converting Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Instant Calling Hotline with Pulsing State */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-call-direct-btn"
                href={`tel:${CONTACT_INFO.phonePrimary}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all flex items-center gap-3 cursor-pointer group"
                title="لمس برای تماس مستقیم شبانه‌روزی"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 animate-pulse text-white" />
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-medium text-emerald-100 leading-tight">پاسخگویی فوری و ۲۴ ساعته</span>
                  <span className="block text-sm sm:text-base font-mono font-black dir-ltr text-right">{CONTACT_INFO.phoneDisplayPrimary}</span>
                </div>
              </motion.a>

              {/* Secondary 100% Confidential Form CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-primary-consult-cta"
                onClick={onScrollToConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-2xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                <span>مشاوره رایگان و محرمانه</span>
              </motion.button>

              {/* Video Documentary Link */}
              <button
                id="hero-video-link-cta"
                type="button"
                onClick={() => {
                  if (onScrollToVideo) {
                    onScrollToVideo();
                  } else {
                    const el = document.getElementById('video-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-3.5 rounded-2xl transition-all flex items-center gap-2 cursor-pointer border border-slate-700 shadow-sm"
                title="مشاهده ویدئوی اختصاصی آقای استاد مسافر"
              >
                <Video className="w-4 h-4 text-cyan-400" />
                <span>ویدئوی آقای استاد مسافر</span>
              </button>
            </div>

            {/* Guarantee Tagline */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                ۱۰۰٪ محرمانه و بدون نیاز به تشکیل پرونده
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                کاهش پلکانی دارو با متد ثبت‌شده MMO
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <BookOpen className="w-4 h-4 text-blue-600" />
                همراه با کتاب اختصاصی «چهل پله چهل راه»
              </span>
            </div>
          </motion.div>

          {/* Side Highlights Card with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              
              {/* Highlight badge with logo icon */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <MasirLogo size="sm" variant="icon" />
                  <span className="text-xs font-extrabold text-slate-900">متد انحصاری MMO (مسیر مسافر)</span>
                </div>
                <span className="text-[11px] bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded-full border border-blue-200">
                  روش تضمین‌شده بالینی
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm border border-blue-100">
                    ۱
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">بدون قطع ناگهانی و سقوط آزاد</h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      قطع یکباره مواد باعث تخریب انتقال‌دهنده‌های عصبی و ولع شدید می‌شود. ما با کاهش گام‌به‌گام، سیستم اندورفین طبیعی مغز را بازسازی می‌کنیم.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm border border-blue-100">
                    ۲
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">روان‌درمانی ریشه‌ای با کتاب ۴۰ پله</h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      اعتیاد ریشه در باورها و آسیب‌های روانی دارد. با آموزش‌های روزانه کتاب چهل پله، الگوهای وسوسه برای همیشه خاموش می‌شوند.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm border border-blue-100">
                    ۳
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">زندگی در جریان است، کار تعطیل نمی‌شود</h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      شما بدون غیبت از کار، بیزینس و کانون گرم خانواده درمان می‌شوید؛ هیچ برچسب اجتماعی یا دوری از خانه در کار نیست.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact phone numbers quick banner in card */}
              <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl">
                <span className="text-xs font-bold text-slate-800 block mb-2">خطوط تماس مستقیم و شبانه‌روزی (بدون فاصله):</span>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono font-bold mb-3">
                  <a
                    href={`tel:${CONTACT_INFO.phonePrimary}`}
                    className="p-2 rounded-lg bg-blue-100/80 hover:bg-blue-200 text-blue-900 dir-ltr transition-colors block"
                    title="مشاور ارشد ۲۴ ساعته"
                  >
                    {CONTACT_INFO.phoneDisplayPrimary}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMobile1}`}
                    className="p-2 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-900 dir-ltr transition-colors block"
                    title="مشاوره تلفنی"
                  >
                    {CONTACT_INFO.phoneDisplayMobile1}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMobile3}`}
                    className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 dir-ltr transition-colors block"
                    title="مشاوره تلفنی"
                  >
                    {CONTACT_INFO.phoneDisplayMobile3}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneSecondary}`}
                    className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-900 dir-ltr transition-colors block"
                    title="تلفن ثابت مرکز مشهد"
                  >
                    {CONTACT_INFO.phoneDisplaySecondary}
                  </a>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  <span>مرکز تخصصی مشهد، فلاحی ۹، پلاک ۱۹۳</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-md">
                    پشتیبانی ۲۴ ساعته
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
