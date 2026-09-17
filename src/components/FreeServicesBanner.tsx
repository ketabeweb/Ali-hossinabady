import React from 'react';
import { motion } from 'motion/react';
import { Percent, Sparkles, CheckCircle2, HeartHandshake, PhoneCall, ShieldCheck, ArrowDown } from 'lucide-react';
import { FREE_SERVICES_DATA, CONTACT_INFO } from '../data/therapyData';

interface FreeServicesBannerProps {
  onScrollToConsultation?: () => void;
}

export const FreeServicesBanner: React.FC<FreeServicesBannerProps> = ({
  onScrollToConsultation,
}) => {
  return (
    <section id="free-services" className="py-14 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-b from-blue-800/40 to-slate-900/60 rounded-3xl p-6 sm:p-10 border-2 border-cyan-400/40 backdrop-blur-md shadow-2xl">
          
          {/* Main Headline with massive 80% Graphic Badge */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>رسالت انسانی و خداپسندانه سازمان مردم‌نهاد مسیر مسافر</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                <span className="text-emerald-400">۸۰٪ کلیه خدمات درمان و مشاوره</span><br />
                کاملاً رایگان است!
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                ما معتقدیم نجات جان یک انسان و بازگرداندن آرامش به کانون خانواده نباید به یک تجارت تجاری یا دکان سودجویی تبدیل شود. بیش از ۸۰ درصد خدمات ما شامل مشاوره تخصصی، ارزیابی، پشتیبانی تلفنی شبانه‌روزی و فایل‌های آموزشی به صورت کاملاً رایگان عرضه می‌شود.
              </p>
            </div>

            {/* Visual 80% Badge Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative bg-slate-950 rounded-3xl p-6 border-2 border-cyan-400/60 text-center shadow-2xl">
                  <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-cyan-400 font-mono tracking-tighter">
                    ۸۰٪
                  </div>
                  <div className="text-sm font-extrabold text-white mt-1">خدمات کاملاً رایگان</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">بدون هزینه‌های میلیونی کمپ</div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>بدون دریافت وجه جهت مشاوره</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Breakdown Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-blue-500/30">
            {FREE_SERVICES_DATA.freeItems.map((item, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl p-4 border border-blue-400/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 text-[10px] font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md self-start border border-emerald-500/30">
                  ۱۰۰٪ رایگان
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Minimal Cost Note */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-950/60 border border-blue-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-right">
              <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-white">شفافیت مالی:</strong> تنها ۲۰٪ خدمات شامل بهای تمام‌شده فیزیکی است (صرفاً هزینه چاپ فیزیکی کتاب قطور ۴۰ پله و پست پیشتاز یا دوره‌های اسکان حضوری اختیاری).
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${CONTACT_INFO.phonePrimary}`}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>مشاوره رایگان تلفنی</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
