import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react';
import { COMPARISON_DATA } from '../data/therapyData';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Scale className="w-3.5 h-3.5 text-emerald-600" />
            <span>مقایسه شفاف و علمی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            چرا روش مسیر مسافر، تنها راه پایان دادن به چرخه باطل ترک است؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            تفاوت بنیادین شیوه درمانی نوین MMO با روش‌های سنتی سقوط آزاد و بستری اجباری در کمپ‌ها را مقایسه کنید.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-5 px-6 bg-slate-100 text-slate-700 font-extrabold text-xs sm:text-sm w-1/3">
                    شاخص و معیار درمانی
                  </th>
                  <th className="py-5 px-6 bg-emerald-900 text-white font-extrabold text-xs sm:text-sm w-1/3 text-center sm:text-right">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                      <span>متد انحصاری مسیر مسافر (MMO)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 bg-slate-900 text-slate-200 font-extrabold text-xs sm:text-sm w-1/3 text-center sm:text-right">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      <span>کمپ‌های سنتی و سقوط آزاد</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_DATA.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 sm:py-5 px-6 font-bold text-slate-900 bg-slate-50/50">
                      {item.metric}
                    </td>
                    <td className="py-4 sm:py-5 px-6 text-emerald-900 bg-emerald-50/40 font-semibold border-x border-emerald-100">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                          ✓
                        </span>
                        <span className="leading-relaxed">{item.mmo}</span>
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 px-6 text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                          ✕
                        </span>
                        <span className="leading-relaxed">{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Callout */}
          <div className="p-6 bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              <strong className="text-slate-900 block font-bold mb-0.5">نتیجه‌گیری بر پایه آمار ۱۰,۰۰۰ رهجو:</strong>
              درمان اعتیاد یک عمل جراحی اورژانسی نیست که در ۲۱ روز تمام شود، بلکه بازسازی مهندسی‌شده ناقل‌های عصبی و اصلاح سبک زندگی است که نیازمند آرامش در بستر زندگی روزمره است.
            </div>
            <a
              href="tel:09157100520"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0"
            >
              مشاوره تلفنی با روان‌درمانگر
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
