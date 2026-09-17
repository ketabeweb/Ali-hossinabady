import React, { useState } from 'react';
import { PhoneCall, ShieldCheck, Send, CheckCircle2, MessageCircle, Clock, Lock, Sparkles, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';
import confetti from 'canvas-confetti';

interface ConsultationFormProps {
  initialService?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [substance, setSubstance] = useState('شربت متادون / قرص B2');
  const [duration, setDuration] = useState('۱ تا ۳ سال');
  const [city, setCity] = useState('');
  const [preferredTime, setPreferredTime] = useState('همین حالا (فوری)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // confetti fallback
      }
    }, 600);
  };

  const constructMessage = () => {
    return encodeURIComponent(
      `درخواست مشاوره محرمانه سبک زندگی مسیر مسافر (mmosafer.com):
نام یا نام مستعار: ${name || 'ثبت نشده'}
شماره تماس: ${phone}
نوع ماده یا وابستگی: ${substance}
مدت سابقه مصرف: ${duration}
شهر: ${city || 'ثبت نشده'}
زمان مناسب تماس: ${preferredTime}
توضیحات: ${notes || 'ندارد'}`
    );
  };

  const handleWhatsAppSend = () => {
    const text = constructMessage();
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>فرم مشاوره اولیه رایگان و ۱۰۰٪ محرمانه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            نخستین قدم رهایی را در آرامش بردارید
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            مشخصات شما نزد ما امانت مطلق است. هیچ‌گونه پرونده هویتی یا سوءپیشینه‌ای ثبت نمی‌شود و کارشناسان ما به صورت شبانه‌روزی آماده راهنمایی شما هستند.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                درخواست مشاوره شما با موفقیت ثبت شد
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                مشاور درمانگر مرکز در کمترین زمان ممکن با شماره <span className="text-emerald-400 font-mono font-bold">{phone}</span> تماس خواهد گرفت.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ارسال فوری در واتساپ به پشتیبان</span>
                </button>
                <a
                  href={CONTACT_INFO.eitaaGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-white" />
                  <span>عضویت در گروه ۲۴ ساعته ایتا مسافران</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>تماس مستقیم فوری ({CONTACT_INFO.phoneDisplayPrimary})</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                >
                  ارسال یک درخواست جدید
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-right">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    نام یا نام مستعار <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثلاً: علی م. یا یک نام مستعار"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    شماره همراه (جهت تماس محرمانه) <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    dir="ltr"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono text-left"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    نوع وابستگی یا ماده مصرفی
                  </label>
                  <select
                    value={substance}
                    onChange={(e) => setSubstance(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="شربت متادون / قرص B2">شربت متادون / قرص B2 (بوپرنورفین)</option>
                    <option value="تریاک / شیره / سوخته">تریاک / شیره / سوخته</option>
                    <option value="ترامادول / کلونازپام / مسکن‌های آرام‌بخش">ترامادول / کلونازپام / مسکن‌های آرام‌بخش</option>
                    <option value="مواد محرک (شیشه، گل، کمیکال)">مواد محرک (شیشه، گل، ماری‌جوانا)</option>
                    <option value="الکل / سیگار و نیکوتین">الکل / سیگار و نیکوتین</option>
                    <option value="مشاوره برای یکی از اعضای خانواده (همسفران)">مشاوره برای یکی از اعضای خانواده (همسفران)</option>
                    <option value="سایر موارد روحی و روان‌درمانی">سایر موارد روحی و روان‌درمانی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    مدت سابقه درگیری یا مصرف
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="کمتر از ۱ سال">کمتر از ۱ سال</option>
                    <option value="۱ تا ۳ سال">۱ تا ۳ سال</option>
                    <option value="۳ تا ۵ سال">۳ تا ۵ سال</option>
                    <option value="بیش از ۵ سال">بیش از ۵ سال</option>
                    <option value="مصرف نامنظم / تفننی">مصرف نامنظم / تفننی</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    شهر محل سکونت
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="مثلاً: مشهد، تهران، اصفهان..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    زمان ترجیحی برای تماس مشاور
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="همین حالا (فوری)">همین حالا (فوری و شبانه‌روزی)</option>
                    <option value="صبح (۹ تا ۱۳)">صبح (۹ تا ۱۳)</option>
                    <option value="عصر (۱۴ تا ۱۸)">عصر (۱۴ تا ۱۸)</option>
                    <option value="شب (۱۹ تا ۲۳)">شب (۱۹ تا ۲۳)</option>
                    <option value="فقط پیام در واتساپ یا ایتا">فقط پیام در واتساپ یا ایتا</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  توضیحات تکمیلی یا سوال اولیه (اختیاری)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="اگر ترسی دارید، داروی خاصی مصرف می‌کنید یا نیاز به شرایط خاصی دارید اینجا بنویسید..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-2xl text-sm sm:text-base shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>در حال ثبت...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>ثبت درخواست مشاوره رایگان تلفنی</span>
                  </>
                )}
              </button>

              {/* Trust badges footer */}
              <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  رعایت سوگند پزشکی و محرمانگی ۱۰۰٪
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  پاسخگویی سریع کمتر از ۳۰ دقیقه
                </span>
                <a
                  href={CONTACT_INFO.eitaaGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>گروه ۲۴ ساعته ایتا</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="text-emerald-400 font-bold hover:underline"
                >
                  تماس مستقیم: {CONTACT_INFO.phoneDisplayPrimary}
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
