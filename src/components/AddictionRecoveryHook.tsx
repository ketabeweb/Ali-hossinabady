import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, PhoneCall, MessageCircle, AlertCircle, HeartHandshake, CheckCircle2, ArrowLeft, Lock, Sparkles, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';

interface AddictionRecoveryHookProps {
  onScrollToConsultation?: () => void;
}

export const AddictionRecoveryHook: React.FC<AddictionRecoveryHookProps> = ({
  onScrollToConsultation,
}) => {
  // Interactive 3-Step Confidential Assessment
  const [selectedSubstance, setSelectedSubstance] = useState<string>('metadone');
  const [selectedFear, setSelectedFear] = useState<string>('pain');
  const [durationYears, setDurationYears] = useState<string>('2-5');
  const [assessmentCalculated, setAssessmentCalculated] = useState<boolean>(true);

  const substanceOptions = [
    { id: 'metadone', label: 'متادون (شربت یا قرص)' },
    { id: 'b2', label: 'قرص B2 (بوپرنورفین)' },
    { id: 'opium', label: 'تریاک یا شیره' },
    { id: 'tramadol', label: 'ترامادول و مسکّن‌ها' },
    { id: 'stimulants', label: 'شیشه، کمیکال یا گل' },
    { id: 'alcohol', label: 'الکل و سایر موارد' },
  ];

  const fearOptions = [
    { id: 'pain', label: 'ترس شدید از درد، استخوان‌درد و خماری کشیدن' },
    { id: 'job', label: 'ترس از اخراج، تعطیلی کاسبی و از دست دادن شغل' },
    { id: 'reputation', label: 'ترس از آبرو، لو رفتن پیش خانواده و فامیل' },
    { id: 'failed', label: 'ناامیدی از ترک‌های ناموفق قبلی و حس بی ارادگی' },
    { id: 'cost', label: 'ترس از هزینه‌های سرسام‌آور کمپ‌ها و کلینیک‌ها' },
  ];

  const getCustomizedAdvice = () => {
    switch (selectedFear) {
      case 'pain':
        return {
          headline: 'خیالت ۱۰۰٪ راحت باشد: در روش MMO حتی یک ساعت درد و خماری نخواهید کشید!',
          explanation: 'درد شدید تنها هنگام قطع ناگهانی و سقوط آزاد اتفاق می‌افتد. در متد مسیر مسافر، کاهش دوز به شیوه میلی‌متری و مهندسی‌شده صورت می‌گیرد؛ در نتیجه گیرنده‌های اندورفین مغز آرام‌آرام احیا می‌شوند و شما بدون دردهای عضلانی یا تب و لرز به نقطه صفر می‌رسید.',
        };
      case 'job':
        return {
          headline: 'حتی ۱ روز هم نیاز به تعطیلی مغازه، شرکت یا مرخصی شغلی نداری!',
          explanation: 'درمان کاملاً خانگی و آنلاین پیش می‌رود. شما صبح‌ها سر کار می‌روید و شب‌ها کنار خانواده هستید. هیچ بستری شدنی در کار نیست و روند کاری شما با بالاترین انرژی ادامه پیدا می‌کند.',
        };
      case 'reputation':
        return {
          headline: 'محرمانگی مطلق؛ حتی نام واقعی‌ات را هم لازم نیست به ما بگویی!',
          explanation: 'ما در سازمان مردم‌نهاد مسیر مسافر هیچ پرونده ثبتی یا هویتی نداریم. تماس‌ها و پیام‌های شما کاملاً محرمانه بین شما و راهنمایتان باقی می‌ماند. اگر مایل نباشی، حتی نزدیک‌ترین اعضای خانواده‌ات هم متوجه فرایند درمان نخواهند شد.',
        };
      case 'cost':
        return {
          headline: '۸۰٪ کل خدمات ما رایگان است؛ پول هرگز مانع آزادی شما نخواهد بود!',
          explanation: 'برخلاف کمپ‌های خصوصی و کلینیک‌های تجاری که به چشم مشتری به مصرف‌کننده نگاه می‌کنند، کلیه مشاوره‌ها، تست‌ها، پشتیبانی ۲۴ ساعته و صوت‌های آرامش‌بخش مرکز به صورت کاملاً رایگان ارائه می‌شود.',
        };
      case 'failed':
      default:
        return {
          headline: 'تو بی‌اراده نیستی! روش قبلی‌ات غلط بوده است.',
          explanation: 'اعتیاد نقص اراده نیست؛ یک بیماری بیوشیمیایی و ذهنی است. کمپ‌ها فقط جسم را برای چند روز محبوس می‌کنند، اما علت ذهنی مصرف را حل نمی‌کنند. وقتی باور و سبک زندگی اصلاح شود، وسوسه برای همیشه خاموش می‌شود.',
        };
    }
  };

  const advice = getCustomizedAdvice();

  return (
    <section id="recovery-hook" className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Pulses */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Empathy Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-cyan-300 border border-blue-400/40 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
            <HeartHandshake className="w-4 h-4 text-cyan-400" />
            <span>یک کلام خودمانی و صمیمانه با مسافری که خسته از تاریکی است</span>
          </div>

          {/* Magnetic Psychological Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.3] text-white">
            می‌دانیم از چه چیزی می‌ترسی...<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              اما این بار هیچ دردی، کمپی یا قضاوتی در کار نیست!
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            اگر سال‌هاست هر بار به ترک فکر می‌کنی، تن و بدنت از ترس درد و خماری به لرزه می‌افتد، یا نگران آبرو و کارت هستی، حق داری! روش‌های سنتی و شکنجه در کمپ‌ها انسان را ناامید می‌کنند. اما راه علمی و انسانی متد مسافر، بازگشت به زندگی پاک را مثل یک تولد دوباره لذت‌بخش می‌کند.
          </p>
        </div>

        {/* 5 Core Fears vs MMO Truths Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-12">
          
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center font-bold mb-3">
                ۱
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ترس از درد، بی‌قراری و خماری کشنده</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300">پاسخ علمی ما:</strong> با پروتکل پله‌های معکوس MMO، سلول‌های عصبی مغز بدون افت ناگهانی دوپامین، غدد درونی را بیدار می‌کنند. حتی نیاز به ۱ ساعت تحمل درد طاقت‌فرسا نخواهید داشت.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>تضمین کاهش بدون عوارض جسمی</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold mb-3">
                ۲
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ترس از دست رفتن کار، درآمد و آبرو</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300">پاسخ علمی ما:</strong> نه بستری دارد، نه انزوا. از روز اول تا روز ترخیص، سر کارتان حاضر می‌شوید، پول درمی‌آورید و هویت شما نزد خانواده یا کارفرما کاملاً محفوظ می‌ماند.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>درمان ۱۰۰٪ خانگی بدون ترک زندگی</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-md shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold mb-3">
                ۳
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ترس از هزینه‌های گزاف درمانی</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-300">پاسخ علمی ما:</strong> بیش از ۸۰٪ خدمات مسیر مسافر کاملاً رایگان است. ما سازمانی مردم‌نهاد هستیم و هدف ما نجات یک فرزند، همسر یا پدر از منجلاب است نه تجارت با درد شما.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>۸۰٪ خدمات کاملاً رایگان و خداپسندانه</span>
            </div>
          </motion.div>

        </div>

        {/* Interactive Self-Assessment Tool: "آیا برای شرایط من شدنی است؟" */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/90 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 border-2 border-blue-400/40 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-blue-500/30">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 inline-block mb-2">
                تست خودارزیابی سریع و فوری (کاملاً ناشناس)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                آیا شرایط من با روش بدون درد MMO سازگار است؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                ماده مصرفی و اصلی‌ترین نگرانی خود را انتخاب کنید تا پاسخ قطعی متخصص را فوراً ببینید:
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-200 bg-slate-950/60 px-4 py-2 rounded-xl border border-blue-500/30 shrink-0">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>بدون ثبت هیچ‌گونه نام یا آی‌پی</span>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 mt-6">
            
            {/* Left selector columns */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-200 block mb-2">
                  ۱. ماده مصرفی فعلی شما چیست؟
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {substanceOptions.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSelectedSubstance(sub.id)}
                      className={`text-right text-xs p-2.5 rounded-xl border transition-all cursor-pointer font-medium ${
                        selectedSubstance === sub.id
                          ? 'bg-blue-600 text-white border-cyan-400 shadow-md'
                          : 'bg-slate-950/50 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-200 block mb-2">
                  ۲. بزرگترین ترسی که مانع ترکت شده چیست؟
                </label>
                <div className="space-y-2">
                  {fearOptions.map((fear) => (
                    <button
                      key={fear.id}
                      type="button"
                      onClick={() => setSelectedFear(fear.id)}
                      className={`w-full text-right text-xs p-2.5 rounded-xl border transition-all cursor-pointer font-medium flex items-center justify-between ${
                        selectedFear === fear.id
                          ? 'bg-blue-600/90 text-white border-cyan-400 shadow-md'
                          : 'bg-slate-950/50 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span>{fear.label}</span>
                      {selectedFear === fear.id && <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0 mr-2" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Result & Instant Action Box */}
            <div className="md:col-span-6 flex flex-col justify-between bg-slate-950/80 rounded-2xl p-6 border border-cyan-400/30">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <Sparkles className="w-4 h-4" />
                  <span>نتیجه تحلیل بالینی وضعیت شما:</span>
                </div>

                <div className="p-4 bg-blue-950/70 rounded-xl border border-blue-500/40">
                  <h4 className="text-sm font-extrabold text-white mb-2 leading-snug">
                    {advice.headline}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {advice.explanation}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>امکان شروع گام اول در همین امروز بدون نیاز به بستری</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>تنظیم جدول پله‌های مصرف متناسب با شرایط زندگی شما</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>مشاوره و پشتیبانی کاملاً رایگان با خط ۲۴ ساعته</span>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <a
                  id="hook-call-counselor-btn"
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>تماس محرمانه بدون ذکر نام با مشاور: {CONTACT_INFO.phoneDisplayPrimary}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    id="hook-whatsapp-btn"
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('سلام، می‌خواهم درباره شروع درمان بدون درد در خانه مشاوره بگیرم.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-emerald-500/40"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>پیام محرمانه در واتساپ</span>
                  </a>

                  {onScrollToConsultation && (
                    <button
                      type="button"
                      onClick={onScrollToConsultation}
                      className="bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 border border-blue-400/40 cursor-pointer"
                    >
                      <span>فرم درخواست راهنما</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
