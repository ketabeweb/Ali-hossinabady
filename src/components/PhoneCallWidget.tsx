import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, PhoneCall, MessageCircle, Copy, Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';

export const PhoneCallWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, num: string, formatted: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(num);
    setCopiedNumber(formatted);
    setTimeout(() => {
      setCopiedNumber(null);
    }, 2500);
  };

  return (
    <>
      {/* Floating Action Dial Button (Bottom-Right or Bottom-Left) */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-slate-900/95 border-2 border-blue-500/60 rounded-3xl p-5 shadow-2xl backdrop-blur-xl w-80 text-white text-right space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center border border-blue-500/40">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">تماس مستقیم با مشاوران</h4>
                    <span className="text-[10px] text-blue-400 font-semibold">پاسخگویی ۲۴ ساعته</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Phone 1: 09157100520 */}
              <div className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-3 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span className="text-slate-400">مشاور ارشد و پشتیبان شبانه‌روزی (۲۴ساعته)</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-bold">همراه اصلی</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <a
                    href={`tel:${CONTACT_INFO.phonePrimary}`}
                    className="flex items-center gap-2 font-mono font-black text-lg text-white hover:text-blue-400 dir-ltr transition-colors"
                    title="لمس برای برقراری تماس"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>{CONTACT_INFO.phoneDisplayPrimary}</span>
                  </a>
                  <button
                    onClick={(e) => handleCopy(e, CONTACT_INFO.phonePrimary, '09157100520')}
                    className="p-1.5 rounded-lg bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white text-xs transition-colors"
                    title="کپی شماره"
                  >
                    {copiedNumber === '09157100520' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2 rounded-xl transition-colors shadow-md shadow-blue-600/30"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>تماس مستقیم فوری: {CONTACT_INFO.phoneDisplayPrimary}</span>
                </a>
              </div>

              {/* Phone 2 & 3 Mobile Lines: 09157100480 & 09157100580 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700">
                  <span className="text-[10px] text-cyan-400 block font-bold">مشاور خط ۱</span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMobile1}`}
                    className="font-mono font-bold text-sm text-white hover:text-cyan-300 dir-ltr block mt-1"
                  >
                    {CONTACT_INFO.phoneDisplayMobile1}
                  </a>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700">
                  <span className="text-[10px] text-cyan-400 block font-bold">مشاور خط ۳</span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMobile3}`}
                    className="font-mono font-bold text-sm text-white hover:text-cyan-300 dir-ltr block mt-1"
                  >
                    {CONTACT_INFO.phoneDisplayMobile3}
                  </a>
                </div>
              </div>

              {/* Phone 4: 05191007002 */}
              <div className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-3 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span className="text-slate-400">دفتر مرکزی و نوبت‌دهی بالینی مشهد</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold">ثابت</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <a
                    href={`tel:${CONTACT_INFO.phoneSecondary}`}
                    className="flex items-center gap-2 font-mono font-black text-lg text-white hover:text-cyan-400 dir-ltr transition-colors"
                    title="لمس برای برقراری تماس"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{CONTACT_INFO.phoneDisplaySecondary}</span>
                  </a>
                  <button
                    onClick={(e) => handleCopy(e, CONTACT_INFO.phoneSecondary, '05191007002')}
                    className="p-1.5 rounded-lg bg-slate-700 hover:bg-cyan-600 text-slate-300 hover:text-white text-xs transition-colors"
                    title="کپی شماره"
                  >
                    {copiedNumber === '05191007002' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phoneSecondary}`}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white font-bold text-xs py-2 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>تماس ثابت: {CONTACT_INFO.phoneDisplaySecondary}</span>
                </a>
              </div>

              {/* WhatsApp direct chat */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('سلام، جهت مشاوره درمان اعتیاد و آشنایی با کتاب چهل پله پیام می‌دهم.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs py-2 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>پیام در واتساپ به کارشناس پذیرش</span>
              </a>

              {copiedNumber && (
                <div className="text-center text-xs text-emerald-400 font-bold animate-pulse">
                  شماره با موفقیت کپی شد.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Main Pulsing Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3.5 rounded-2xl shadow-xl shadow-blue-600/40 border border-blue-400/40 cursor-pointer"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-2xl bg-blue-500 opacity-40 animate-ping"></span>

          <div className="relative z-10 w-6 h-6 flex items-center justify-center">
            {isOpen ? <X className="w-5 h-5" /> : <PhoneCall className="w-5 h-5 animate-bounce" />}
          </div>

          <div className="relative z-10 text-right hidden sm:block">
            <span className="text-xs font-black block leading-tight">تماس مستقیم رایگان</span>
            <span className="text-[11px] text-blue-100 font-mono dir-ltr block">{CONTACT_INFO.phoneDisplayPrimary}</span>
          </div>
        </motion.button>
      </div>
    </>
  );
};
