import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, PhoneCall, Sparkles, Heart, Check, Copy, X, Volume2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';

interface LittleStrugglingCallerProps {
  onScrollToConsultation?: () => void;
  variant?: 'floating' | 'embedded';
}

const EFFORT_MESSAGES = [
  'رفیق! دارم با تمام توانم زور می‌زنم تا زنگ بزنی... نترس، ما کنارتم!',
  'فقط یک تماس با زندگی دوباره و آرامش فاصله داری! 📞',
  'بدون درد و بدون خماریه، قول می‌دم! همین الان دکمه تماس رو بزن!',
  'من اینجام تا کمکت کنم... تماس شبانه‌روزی رایگانه: 09157100520',
  'خطوط آزادند: 09157100480 • 09157100580 • 05191007002',
];

export const LittleStrugglingCaller: React.FC<LittleStrugglingCallerProps> = ({
  onScrollToConsultation,
  variant = 'floating',
}) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDialerOpen, setIsDialerOpen] = useState(false);
  const [cheerMode, setCheerMode] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  // Cycle through heartwarming messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % EFFORT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleCheerClick = () => {
    setCheerMode(true);
    setIsDialerOpen(true);
    setTimeout(() => {
      setCheerMode(false);
    }, 2500);
  };

  const handleCopy = (e: React.MouseEvent, num: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  // Tiny Person SVG Character Component
  const TinyPersonSVG = ({ cheering = false }: { cheering?: boolean }) => (
    <svg
      viewBox="0 0 120 130"
      className="w-16 h-18 sm:w-20 sm:h-22 drop-shadow-md select-none overflow-visible"
    >
      <defs>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fba36e" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Effort Sweat Droplets flying off while struggling */}
      {!cheering && (
        <g className="animate-pulse">
          <motion.path
            animate={{
              y: [-2, -10, -2],
              x: [-2, -8, -2],
              opacity: [0, 1, 0],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            d="M 38 35 C 38 30, 32 30, 32 35 C 32 38, 38 41, 38 35 Z"
            fill="#38bdf8"
          />
          <motion.path
            animate={{
              y: [0, -8, 0],
              x: [2, 8, 2],
              opacity: [0, 1, 0],
              scale: [0.6, 1.1, 0.6],
            }}
            transition={{ repeat: Infinity, duration: 1.4, delay: 0.3 }}
            d="M 82 32 C 82 28, 88 28, 88 32 C 88 35, 82 38, 82 32 Z"
            fill="#38bdf8"
          />
        </g>
      )}

      {/* Joyful Stars when Cheering */}
      {cheering && (
        <g>
          <motion.circle
            cx="25"
            cy="20"
            r="4"
            fill="#fbbf24"
            animate={{ scale: [0, 1.5, 0], y: [-5, -20] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
          <motion.circle
            cx="95"
            cy="22"
            r="4.5"
            fill="#34d399"
            animate={{ scale: [0, 1.5, 0], y: [-5, -22] }}
            transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }}
          />
          <motion.polygon
            points="60,5 63,12 70,13 65,18 66,25 60,21 54,25 55,18 50,13 57,12"
            fill="#f59e0b"
            animate={{ scale: [0.8, 1.4, 0.8], rotate: [0, 180, 360] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </g>
      )}

      {/* Little Character Body */}
      <motion.g
        animate={
          cheering
            ? { y: [0, -14, 0], rotate: [0, -3, 3, 0] }
            : { y: [0, -2, 0, 1, 0], rotate: [0, 2, -2, 0] }
        }
        transition={{ repeat: Infinity, duration: cheering ? 0.45 : 1.1, ease: 'easeInOut' }}
      >
        {/* Legs / Feet */}
        {!cheering ? (
          /* Straining legs leaning forward pushing */
          <g>
            {/* Left Back Leg */}
            <path d="M 48 85 L 36 108 L 24 108" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Right Forward Leg straining */}
            <path d="M 68 85 L 78 104 L 92 108" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Shoes */}
            <ellipse cx="22" cy="108" rx="8" ry="4" fill="#0284c7" />
            <ellipse cx="94" cy="108" rx="9" ry="4.5" fill="#0284c7" />
          </g>
        ) : (
          /* Cheering jumping legs */
          <g>
            <path d="M 48 85 L 38 102 L 30 98" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 70 85 L 80 102 L 88 98" stroke="#0f172a" strokeWidth="9" strokeLinecap="round" fill="none" />
            <ellipse cx="28" cy="98" rx="7" ry="4" fill="#10b981" />
            <ellipse cx="90" cy="98" rx="7" ry="4" fill="#10b981" />
          </g>
        )}

        {/* Torso */}
        <motion.path
          d={
            !cheering
              ? "M 44 50 L 74 48 L 72 86 L 46 86 Z"
              : "M 44 48 L 74 48 L 72 84 L 46 84 Z"
          }
          fill="url(#shirtGrad)"
        />

        {/* Head */}
        <circle cx="59" cy="32" r="16" fill="url(#skinGrad)" />

        {/* Hair */}
        <path
          d="M 43 30 C 43 16, 75 16, 75 30 C 72 23, 62 21, 55 24 C 49 26, 45 28, 43 30 Z"
          fill="#475569"
        />

        {/* Eyes */}
        {!cheering ? (
          /* Straining, determined eyes */
          <g>
            <circle cx="54" cy="32" r="2.2" fill="#0f172a" />
            <circle cx="66" cy="32" r="2.2" fill="#0f172a" />
            {/* Eyebrows angled in determination */}
            <path d="M 50 28 L 57 30" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 70 28 L 63 30" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
            {/* Mouth: grit teeth / determined grimace */}
            <path d="M 54 39 Q 60 41 66 39" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 56 39 L 64 39" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ) : (
          /* Happy cheering face */
          <g>
            {/* Joyful closed curved eyes */}
            <path d="M 51 32 Q 55 28 59 32" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 63 32 Q 67 28 71 32" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Big smiling open mouth */}
            <path d="M 54 37 Q 61 46 68 37 Z" fill="#dc2626" />
            <ellipse cx="61" cy="40" rx="4" ry="2" fill="#fca5a5" />
          </g>
        )}

        {/* Cheeks Blush */}
        <circle cx="49" cy="36" r="2.5" fill="#f43f5e" opacity="0.6" />
        <circle cx="71" cy="36" r="2.5" fill="#f43f5e" opacity="0.6" />

        {/* Arms and Hands */}
        {!cheering ? (
          /* Straining arms pushing against giant phone / button */
          <g>
            {/* Back Arm */}
            <path d="M 45 54 L 62 60 L 88 56" stroke="#fba36e" strokeWidth="7" strokeLinecap="round" fill="none" />
            {/* Front Arm pushing hard forward */}
            <path d="M 56 56 L 78 52 L 102 48" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Hand fist pushing */}
            <circle cx="102" cy="48" r="6" fill="#fba36e" />
          </g>
        ) : (
          /* Both arms raised up high in victory */
          <g>
            <path d="M 46 54 L 32 30 L 22 18" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="20" cy="16" r="6" fill="#fba36e" />
            <path d="M 72 54 L 86 30 L 98 18" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="100" cy="16" r="6" fill="#fba36e" />
          </g>
        )}
      </motion.g>

      {/* Giant Phone / Dial Button Being Pushed or Dialed */}
      <g transform="translate(85, 20)">
        {/* Pulsing Signal Waves */}
        <motion.circle
          cx="20"
          cy="28"
          r="26"
          stroke="#38bdf8"
          strokeWidth="2"
          fill="none"
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.2, 0.8, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        {/* Giant Green Call Handset Icon */}
        <rect x="2" y="8" width="36" height="42" rx="12" fill="#10b981" />
        <path
          d="M 12 18 C 12 18 16 16 18 20 C 19 22 17 24 17 26 C 18 29 21 32 24 33 C 26 33 28 31 30 32 C 34 34 32 38 32 38 C 28 42 16 38 12 28 C 10 24 11 19 12 18 Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );

  // Floating Mode Render
  if (variant === 'floating') {
    if (isMinimized) {
      return (
        <button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-5 right-5 z-40 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white p-3 rounded-full shadow-2xl border-2 border-white/80 hover:scale-110 transition-all flex items-center gap-2 cursor-pointer group"
          title="کمک به مسافر کوچک برای تماس"
        >
          <PhoneCall className="w-5 h-5 animate-bounce text-white" />
          <span className="text-xs font-black pl-1 hidden sm:inline">تماس با مرکز</span>
        </button>
      );
    }

    return (
      <aside
        id="little-struggling-caller-floating"
        aria-label="مسافر کوچک در حال تلاش برای برقراری تماس"
        className="fixed bottom-4 right-3 sm:right-6 z-40 max-w-sm pointer-events-auto"
      >
        <div className="relative flex flex-col items-end">
          
          {/* Animated Speech Bubble */}
          <AnimatePresence mode="wait">
            {!isDialerOpen && (
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={handleCheerClick}
                className="mb-2 bg-slate-900/95 backdrop-blur-md text-white border-2 border-cyan-400/60 p-3.5 rounded-2xl rounded-br-xs shadow-2xl cursor-pointer max-w-[280px] sm:max-w-xs text-right group hover:border-cyan-300"
              >
                <div className="flex items-center justify-between gap-1 text-[11px] text-cyan-300 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>مسافر کوچک (پیام امید)</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMinimized(true);
                    }}
                    className="text-slate-400 hover:text-white p-0.5 rounded-full"
                    title="بستن موقت"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                <p className="text-xs font-semibold text-slate-100 leading-relaxed">
                  {EFFORT_MESSAGES[messageIndex]}
                </p>

                <div className="mt-2 pt-1.5 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <PhoneCall className="w-3 h-3" />
                    <span>کلیک برای شماره‌گیری</span>
                  </span>
                  <span className="text-[10px] text-slate-400">بدون درد و قضاوت</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Phone Call Popout Card */}
          <AnimatePresence>
            {isDialerOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                className="mb-3 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 border-2 border-cyan-400 p-4 rounded-3xl shadow-2xl max-w-[310px] text-white text-right"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white">شماره‌های مستقیم مرکز</h4>
                      <span className="text-[10px] text-emerald-400 font-semibold">پاسخگویی شبانه‌روزی ۲۴/۷</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDialerOpen(false)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-300 py-2 leading-relaxed">
                  روی هر شماره کلیک کنید تا مستقیماً تماس برقرار شود:
                </p>

                {/* The 4 Exact Numbers with NO SPACES */}
                <div className="space-y-2 text-xs">
                  {/* Primary 09157100520 */}
                  <div className="bg-blue-900/60 hover:bg-blue-800/80 p-2.5 rounded-xl border border-blue-500/40 flex items-center justify-between gap-2 transition-colors">
                    <div className="text-right">
                      <span className="text-[10px] text-cyan-300 block font-bold">مشاور ارشد (شبانه‌روزی)</span>
                      <a href="tel:09157100520" className="font-mono font-black text-sm text-white hover:text-cyan-300 dir-ltr block">
                        09157100520
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleCopy(e, '09157100520')}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                        title="کپی شماره"
                      >
                        {copiedNumber === '09157100520' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href="tel:09157100520"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-1.5 rounded-lg text-[11px] flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>تماس</span>
                      </a>
                    </div>
                  </div>

                  {/* Line 1: 09157100480 */}
                  <div className="bg-slate-800/70 hover:bg-slate-800 p-2 rounded-xl border border-slate-700 flex items-center justify-between gap-2">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-bold">مشاوره تخصصی خط ۱</span>
                      <a href="tel:09157100480" className="font-mono font-bold text-xs text-white dir-ltr block">
                        09157100480
                      </a>
                    </div>
                    <a
                      href="tel:09157100480"
                      className="bg-slate-700 hover:bg-blue-600 text-white font-bold px-2 py-1 rounded-lg text-[10px]"
                    >
                      تماس
                    </a>
                  </div>

                  {/* Line 3: 09157100580 */}
                  <div className="bg-slate-800/70 hover:bg-slate-800 p-2 rounded-xl border border-slate-700 flex items-center justify-between gap-2">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-bold">مشاوره تخصصی خط ۳</span>
                      <a href="tel:09157100580" className="font-mono font-bold text-xs text-white dir-ltr block">
                        09157100580
                      </a>
                    </div>
                    <a
                      href="tel:09157100580"
                      className="bg-slate-700 hover:bg-blue-600 text-white font-bold px-2 py-1 rounded-lg text-[10px]"
                    >
                      تماس
                    </a>
                  </div>

                  {/* Landline: 05191007002 */}
                  <div className="bg-slate-800/70 hover:bg-slate-800 p-2 rounded-xl border border-slate-700 flex items-center justify-between gap-2">
                    <div className="text-right">
                      <span className="text-[10px] text-cyan-400 block font-bold">تلفن ثابت دفتر مشهد</span>
                      <a href="tel:05191007002" className="font-mono font-bold text-xs text-white dir-ltr block">
                        05191007002
                      </a>
                    </div>
                    <a
                      href="tel:05191007002"
                      className="bg-slate-700 hover:bg-cyan-600 text-white font-bold px-2 py-1 rounded-lg text-[10px]"
                    >
                      تماس
                    </a>
                  </div>
                </div>

                {copiedNumber && (
                  <div className="mt-2 text-center text-[10px] text-emerald-400 font-bold">
                    شماره کپی شد!
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Mascot & Call Action Button */}
          <div className="flex items-center gap-2">
            
            {/* The Tiny Person Character */}
            <motion.div
              id="tiny-struggling-person"
              onClick={handleCheerClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group flex flex-col items-center"
              title="برای دیدن شماره‌ها و تماس، روی من کلیک کن!"
            >
              {/* Effort tooltip banner */}
              <div className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md -mb-2 z-20 animate-bounce">
                {cheerMode ? '🎉 آفرین رفیق!' : '💪 دارم تلاش می‌کنم!'}
              </div>

              {/* Miniature Person SVG Canvas */}
              <div className="relative p-1 rounded-2xl bg-slate-900/60 backdrop-blur-xs border border-cyan-400/40 group-hover:border-cyan-300 shadow-xl">
                <TinyPersonSVG cheering={cheerMode} />
              </div>
            </motion.div>

            {/* Direct Call Button (Quick Trigger) */}
            <a
              id="little-caller-main-dial-btn"
              href="tel:09157100520"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center gap-2 border border-emerald-400/40 cursor-pointer transform hover:scale-105 active:scale-95 transition-all"
              title="تماس مستقیم با مشاور شبانه‌روزی"
            >
              <PhoneCall className="w-4 h-4 text-white animate-pulse" />
              <div className="text-right">
                <span className="block text-[10px] font-normal text-emerald-100">تماس با مشاور:</span>
                <span className="font-mono font-black text-xs sm:text-sm dir-ltr block">09157100520</span>
              </div>
            </a>

          </div>

        </div>
      </aside>
    );
  }

  // Embedded Showcase Section Component (In Page Body)
  return (
    <div
      id="little-struggling-caller-showcase"
      className="my-10 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden text-white"
    >
      {/* Background glow & mesh */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Animated Visual Character Stage */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-slate-950/60 rounded-2xl border border-blue-500/30">
          <div className="relative">
            <TinyPersonSVG cheering={cheerMode} />
          </div>

          <button
            onClick={handleCheerClick}
            className="mt-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl transition-all shadow-md transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>کمک به مسافر برای تماس!</span>
          </button>
        </div>

        {/* Narrative & Phone Dialers */}
        <div className="md:col-span-8 text-right space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>یک قدم تا رهایی • بدون درد، بدون بستری</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
            این آدمک کوچک نماد همه ماست؛ وقتی تمام تلاشمان را می‌کنیم تا به <span className="text-cyan-400">روشنایی</span> برسیم!
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            تنها کاری که لازم است انجام دهی، برداشتن گوشی و گرفتن یکی از این شماره‌هاست. هیچ قضاوتی در کار نیست، نام واقعی تو پرسیده نمی‌شود و تمام مشاوره‌ها کاملاً محرمانه و رایگان است.
          </p>

          {/* 4 Exact Phone Numbers With NO Spaces */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            
            {/* Primary */}
            <a
              href="tel:09157100520"
              className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-2xl flex items-center justify-between text-white shadow-lg transition-all transform hover:scale-102"
            >
              <div>
                <span className="text-[10px] text-emerald-100 block font-bold">همراه مشاور ارشد (۲۴ ساعته)</span>
                <span className="font-mono font-black text-base dir-ltr block">09157100520</span>
              </div>
              <PhoneCall className="w-5 h-5 text-white animate-bounce" />
            </a>

            {/* Mobile 1 */}
            <a
              href="tel:09157100480"
              className="bg-slate-800 hover:bg-blue-900/80 p-3 rounded-2xl border border-slate-700 flex items-center justify-between text-white transition-all"
            >
              <div>
                <span className="text-[10px] text-slate-300 block font-bold">مشاوره تخصصی خط ۱</span>
                <span className="font-mono font-black text-base text-cyan-300 dir-ltr block">09157100480</span>
              </div>
              <Phone className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Mobile 3 */}
            <a
              href="tel:09157100580"
              className="bg-slate-800 hover:bg-blue-900/80 p-3 rounded-2xl border border-slate-700 flex items-center justify-between text-white transition-all"
            >
              <div>
                <span className="text-[10px] text-slate-300 block font-bold">مشاوره تخصصی خط ۳</span>
                <span className="font-mono font-black text-base text-cyan-300 dir-ltr block">09157100580</span>
              </div>
              <Phone className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Landline */}
            <a
              href="tel:05191007002"
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-2xl border border-slate-700 flex items-center justify-between text-white transition-all"
            >
              <div>
                <span className="text-[10px] text-slate-300 block font-bold">تلفن ثابت دفتر مرکزی مشهد</span>
                <span className="font-mono font-black text-base text-slate-100 dir-ltr block">05191007002</span>
              </div>
              <Phone className="w-4 h-4 text-blue-400" />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};
