import React, { useState } from 'react';
import { Activity, Brain, HeartHandshake, BookOpen, Check, ArrowLeft, Shield, Sparkles } from 'lucide-react';
import { METHOD_PILLARS } from '../data/therapyData';

interface MethodologySectionProps {
  onScrollToConsultation: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onScrollToConsultation }) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  const activePillar = METHOD_PILLARS[activePillarIndex];

  return (
    <section id="methodology" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>متد انحصاری MMO (Masir Mosafer Online)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            فرمول ۴ گانه درمان قطعی و بدون بازگشت اعتیاد
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            روش سنتی سقوط آزاد و بستری اجباری در کمپ، به علت شوک سنگین به گیرنده‌های عصبی و بی‌توجهی به روان، بیش از ۸۵٪ شکست می‌خورد. متد مسیر مسافر یک رویکرد جامع، تدریجی و چندبعدی است.
          </p>
        </div>

        {/* 4 Pillars Navigation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {METHOD_PILLARS.map((pillar, index) => {
            const isActive = index === activePillarIndex;
            return (
              <div
                key={pillar.number}
                id={`pillar-tab-${pillar.number}`}
                onClick={() => setActivePillarIndex(index)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer text-right relative overflow-hidden ${
                  isActive
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-xl scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-emerald-800 text-white' : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className={`text-2xl font-black font-mono ${isActive ? 'text-emerald-300' : 'text-slate-300'}`}>
                    {pillar.number}
                  </span>
                </div>

                <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs line-clamp-2 leading-relaxed ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {pillar.subtitle}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 right-0 left-0 h-1 bg-emerald-400"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Detail Box */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  رکن {activePillar.number} از ۴
                </span>
                <span className="text-xs text-slate-400 font-medium">پروتکل درمانی سبک زندگی مسیر مسافر</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {activePillar.title}
              </h3>
              
              <h4 className="text-sm sm:text-base font-semibold text-emerald-700">
                {activePillar.subtitle}
              </h4>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activePillar.description}
              </p>

              {/* Key Checkpoints */}
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-800 mb-3">مزایای کلیدی این مرحله در روش MMO:</h5>
                <div className="grid sm:grid-cols-3 gap-3">
                  {activePillar.points.map((pt, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-2 text-xs text-slate-700"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Action & Support */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-emerald-100 shadow-md text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto font-black text-xl">
                MMO
              </div>
              <h4 className="text-base font-bold text-slate-900">می‌خواهید برنامه درمانی اختصاصی خود را دریافت کنید؟</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                کارشناسان بالینی مرکز با توجه به نوع ماده و سابقه مصرف، پله‌های کاهش را اختصاصی برای شما تنظیم می‌کنند.
              </p>
              <button
                onClick={onScrollToConsultation}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>درخواست ارزیابی اولیه رایگان</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              {/* Direct Link to Treatment Method Page */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://mmosafer.com/therapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-bold py-2.5 px-3 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>مشاهده صفحه کامل روش درمان (mmosafer.com/therapy)</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
