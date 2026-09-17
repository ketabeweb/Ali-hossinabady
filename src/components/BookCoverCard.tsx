import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ZoomIn, CheckCircle2, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';
import { BOOK_IMAGE_URL } from '../data/therapyData';

interface BookCoverCardProps {
  onOpenModal?: () => void;
  className?: string;
  badge?: string;
}

export const BookCoverCard: React.FC<BookCoverCardProps> = ({
  onOpenModal,
  className = '',
  badge = 'کتاب رسمی و اختصاصی دوره'
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative select-none ${className}`}
    >
      {/* Ambient Blue Backlight Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700"></div>

      {/* 3D Realistic Book Presentation Container */}
      <motion.div
        whileHover={{ y: -8, rotateY: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={onOpenModal}
        className="relative cursor-pointer group bg-gradient-to-b from-slate-900 to-blue-950 rounded-3xl p-6 border-2 border-blue-500/40 shadow-2xl overflow-hidden"
      >
        {/* Top Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{badge}</span>
          </span>
          <span className="text-[11px] font-mono text-cyan-400 font-bold">چاپ اختصاصی مشهد</span>
        </div>

        {/* 3D Hardcover Book Simulation */}
        <div className="relative mx-auto w-64 max-w-full aspect-[3/4.4] rounded-2xl shadow-2xl overflow-hidden flex transform perspective-1000">
          
          {/* Book Spine (Left side in LTR, Right side in RTL representation) */}
          <div className="w-4 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 h-full border-r border-blue-400/40 shrink-0 flex flex-col items-center justify-between py-4 shadow-inner">
            <div className="w-1.5 h-8 bg-amber-400/80 rounded-full"></div>
            <span className="text-[8px] font-bold text-blue-200 tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
              MMOSAFER
            </span>
            <div className="w-1.5 h-8 bg-amber-400/80 rounded-full"></div>
          </div>

          {/* Book Front Cover Canvas */}
          <div className="flex-1 relative bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 flex flex-col justify-between border-y border-l border-blue-400/30 overflow-hidden">
            
            {/* Real Image Background or High-Fidelity Cover Art */}
            {!imgFailed ? (
              <div className="w-full h-full relative bg-slate-950 flex items-center justify-center p-1">
                <img
                  src={BOOK_IMAGE_URL}
                  alt="جلد رسمی کتاب چهل پله چهل راه - سبک زندگی مسیر مسافر"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>
            ) : (
              /* Artistic Fallback Overlay / Textured Gold and Blue Styling if offline */
              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                {/* Header on Cover */}
                <div className="text-center space-y-1">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-1">
                    <Compass className="w-4 h-4" />
                  </div>
                  <p className="text-[10px] font-bold text-amber-300 tracking-wider">
                    سبک زندگی و درمان قطعی اعتیاد
                  </p>
                  <span className="text-[9px] text-blue-200/90 font-mono block">
                    METHOD OF MASIR MOSAFER
                  </span>
                </div>

                {/* Title Typography */}
                <div className="my-auto text-center space-y-1.5 py-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                  <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                    چهل پله
                  </h3>
                  <h4 className="text-xl font-black text-amber-400 tracking-tight drop-shadow-md">
                    چهل راه
                  </h4>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                  <p className="text-[11px] text-slate-200 font-medium mt-2 leading-tight">
                    نقشه راه خودشناسی، قطع وابستگی و بازیابی کرامت انسانی
                  </p>
                </div>

                {/* Cover Footer */}
                <div className="text-center pt-2 border-t border-blue-400/30 space-y-0.5">
                  <p className="text-[10px] font-bold text-white">تألیف: مرکز پژوهش و درمان مسیر مسافر</p>
                  <p className="text-[9px] text-cyan-300 font-mono">mmosafer.com/therapy</p>
                </div>
              </div>
            )}

            {/* Gloss / Sheen Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Click to Zoom Pill */}
            <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 z-20">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-200 bg-slate-900/90 px-3 py-1 rounded-full border border-blue-500/40">
                مشاهده بزرگ و واضح جلد کتاب
              </span>
            </div>

          </div>

        </div>

        {/* Caption & Benefits */}
        <div className="mt-4 text-center space-y-2">
          <h4 className="text-base font-extrabold text-white group-hover:text-blue-400 transition-colors">
            کتاب اختصاصی «چهل پله چهل راه»
          </h4>
          <p className="text-xs text-slate-300 line-clamp-2">
            منبع اصلی و عملیاتی دوره ترک بدون درد، به انضمام ۴۰ تمرین روزانه، بخشش و شکرگزاری
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-blue-400 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>ارسال رایگان برای ثبت‌نام‌کنندگان</span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
