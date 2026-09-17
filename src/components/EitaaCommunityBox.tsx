import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  MessageCircle, 
  Clock, 
  HeartHandshake, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';

interface EitaaCommunityBoxProps {
  id?: string;
}

export const EitaaCommunityBox: React.FC<EitaaCommunityBoxProps> = ({ 
  id = "eitaa-group-section" 
}) => {
  const [copied, setCopied] = useState(false);
  const groupUrl = CONTACT_INFO.eitaaGroup || "https://eitaa.com/joinchat/3340436256C1e8391458f";

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(groupUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id={id} className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/95 via-blue-950/80 to-slate-900/95 border-2 border-orange-500/40 shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden">
          
          {/* Subtle Decorative Badge / Watermark */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left/Main Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-5 text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-orange-400/40 shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                <Clock className="w-4 h-4 text-orange-400" />
                <span>همراهی آنلاین شبانه‌روزی • ۲۴ ساعت در کنار شما</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
                گروه ایتا آنلاین مسافر{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
                  پناهگاه ۲۴ ساعته رهجویان رهایی
                </span>
              </h2>

              {/* Empathy Hook Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                تنها نیستی! در هر ساعت از شبانه‌روز، در لحظات وسوسه، بی‌قراری، دل‌تنگی یا نیاز به مشورت در پله‌های درمانی، هزاران مسافر بهبودیافته و راهنمایان رسمی به صورت <strong className="text-white">۲۴ ساعته و آنلاین</strong> در پیام‌رسان ایتا در کنارتان هستند.
              </p>

              {/* 3 Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>پاسخگویی ۲۴ ساعته</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    اگر نیمه‌شب احساس وسوسه یا اضطراب کردی، فقط بنویس تا تنها نمانی.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <HeartHandshake className="w-4 h-4 shrink-0" />
                    <span>همدلی بدون قضاوت</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    فضایی کاملاً امن، برادرانه و صمیمی بین هم‌دردان و بهبودیافتگان واقعی.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>۱۰۰٪ رایگان و آزاد</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    بدون پرداخت ریالی هزینه، تحت نظارت مرکز درمان و استاد مسافر.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {/* Direct Join Link */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  id="eitaa-group-join-button"
                  href={groupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2.5 cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 text-white animate-bounce" />
                  <span>ورود به گروه ۲۴ ساعته ایتا</span>
                  <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
                </motion.a>

                {/* Copy Link Button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm px-4 py-3.5 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
                  title="کپی لینک مستقیم دعوت به گروه"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">لینک گروه کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>کپی لینک دعوت</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>عضویت برای کلیه مسافران و خانواده‌های محترم آزاد و بدون محدودیت است.</span>
              </div>
            </div>

            {/* Right Column: Simulated Eitaa Chat Mockup Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                
                {/* Simulated Eitaa Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-black shadow-md">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs sm:text-sm flex items-center gap-1.5">
                        <span>گروه آنلاین مسافران</span>
                        <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-400/30">ایتا</span>
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>فعال و آنلاین (۲۴ ساعته)</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={groupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 bg-orange-500/10 hover:bg-orange-500/20 px-2.5 py-1 rounded-xl transition-colors border border-orange-500/20"
                  >
                    <span>پیوستن</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Simulated Chat Messages */}
                <div className="space-y-3 text-xs">
                  
                  {/* Message 1: Traveler */}
                  <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-bold text-amber-300">رهجو امیر (پله دوم درمان)</span>
                      <span>ساعت ۰۲:۱۵ بامداد</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      سلام بچه‌ها، نیمه‌شب یه لحظه وسوسه اومد سراغم، وارد گروه شدم پیام بچه‌ها رو خوندم آروم شدم. دمتون گرم که همیشه آنلاینید 🙏
                    </p>
                  </div>

                  {/* Message 2: Recovered Traveler Reply */}
                  <div className="bg-blue-950/60 rounded-2xl p-3 border border-blue-900/40 space-y-1 mr-4">
                    <div className="flex items-center justify-between text-[10px] text-blue-300">
                      <span className="font-bold text-cyan-300">مسافر مهدی (۴ سال رهایی)</span>
                      <span>ساعت ۰۲:۱۸ بامداد</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      خدا قوت دلاور! مقاومت نکن، فقط آب بخور و چند تا نفس عمیق بکش. ما همه این شب‌ها رو گذروندیم، صبح که بیدار شی می‌بینی چه شاهکاری کردی 💪❤️
                    </p>
                  </div>

                  {/* Message 3: Guide Note */}
                  <div className="bg-orange-950/40 rounded-2xl p-3 border border-orange-900/30 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-orange-300">
                      <span className="font-bold text-orange-300">راهنمای درمان مرکز</span>
                      <span>ساعت ۰۲:۲۱ بامداد</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      ما ۲۴ ساعته اینجاییم تا هیچ مسافری در تاریکی تنها نماند. رهایی حق تک‌تک شماست.
                    </p>
                  </div>

                </div>

                {/* Simulated Chat Footer Action */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>لینک اختصاصی و مستقیم:</span>
                  <a
                    href={groupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline font-mono dir-ltr truncate max-w-[200px]"
                  >
                    eitaa.com/joinchat/...
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
