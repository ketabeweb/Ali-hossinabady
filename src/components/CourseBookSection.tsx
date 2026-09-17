import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, Smartphone, Video, Download, CheckCircle, ArrowLeft, ZoomIn, X, ShieldCheck, ExternalLink, PhoneCall } from 'lucide-react';
import { CONTACT_INFO, BOOK_IMAGE_URL } from '../data/therapyData';
import { BookCoverCard } from './BookCoverCard';

interface CourseBookSectionProps {
  onScrollToConsultation: () => void;
}

export const CourseBookSection: React.FC<CourseBookSectionProps> = ({ onScrollToConsultation }) => {
  const [showBookModal, setShowBookModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="book" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-900/40">
          {/* Subtle decoration */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Right details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-right"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>منابع آموزشی و خودانضباطی اختصاصی مسیر مسافر</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                کتاب رسمی <span className="text-blue-400">«چهل پله چهل راه»</span><br />
                و نقشه راه تحول سبک زندگی و رهایی پایدار
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                رهایی بدون تغییر باورها، یک آتش‌بس شکننده است. کتاب «چهل پله چهل راه» تألیف مرکز پژوهشی مسیر مسافر، نقشه‌ای گام‌به‌گام برای خودشناسی، خاموش‌کردن الگوهای ذهنی وسوسه، بخشش خویشتن، تقویت اراده و شکرگزاری روزانه در طول دوره درمان بدون بستری است.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-400/30">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">۴۰ گام مکتوب خودشناسی</h3>
                    <p className="text-xs text-slate-400 mt-0.5">تمرین‌های روزانه مکتوب برای بازسازی شخصیت و شکستن چرخه‌های خودتخریبی.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-400/30">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">صوت‌های تکمیلی هر پله</h3>
                    <p className="text-xs text-slate-400 mt-0.5">فایل‌های صوتی تفسیری و تمرین‌های آرامش ذهنی استاد مسافر در هر مرحله از درمان.</p>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons & Accurate Contact */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onScrollToConsultation}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  ثبت‌نام در دوره و دریافت کتاب
                </motion.button>

                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="bg-slate-800 hover:bg-slate-700 border border-blue-500/30 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>مشاوره تلفنی دریافت کتاب: {CONTACT_INFO.phoneDisplayPrimary}</span>
                </a>

                <a
                  href={CONTACT_INFO.therapyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/40 py-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>مشاهده شیوه‌نامه روش درمان در mmosafer.com</span>
                </a>
              </div>

            </motion.div>

            {/* Visual 3D Book Presentation Card */}
            <div className="lg:col-span-5 flex justify-center">
              <BookCoverCard onOpenModal={() => setShowBookModal(true)} />
            </div>

          </div>
        </div>

      </div>

      {/* Book Zoom Lightbox Modal */}
      <AnimatePresence>
        {showBookModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setShowBookModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-slate-900 border border-blue-500/40 rounded-3xl p-6 text-white space-y-4 text-right shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-blue-400">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-extrabold text-base">کتاب اختصاصی چهل پله چهل راه - سبک زندگی مسیر مسافر</span>
                </div>
                <button
                  onClick={() => setShowBookModal(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center p-2">
                <img
                  src={BOOK_IMAGE_URL}
                  alt="کتاب چهل پله چهل راه"
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-blue-500/30"
                />
              </div>

              <div className="text-center pt-2 space-y-1">
                <h4 className="font-bold text-white text-base">جلد رسمی کتاب «چهل پله چهل راه» - چاپ اختصاصی مشهد</h4>
                <p className="text-xs text-slate-300">
                  این کتاب همراه با پکیج مشاوره به آدرس رهجو ارسال می‌شود و راهنمای روزانه خروج از اعتیاد است.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phonePrimary}`}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>سفارش تلفنی: {CONTACT_INFO.phoneDisplayPrimary}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

