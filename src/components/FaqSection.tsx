import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/therapyData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>پاسخ به سوالات و نگرانی‌های شما</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            پرسش‌های متداول درباره درمان با متد MMO
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            اگر سوال دیگری دارید، کارشناسان ما به صورت ۲۴ ساعته پاسخگوی تماس تلفنی شما هستند.
          </p>
        </div>

        {/* Faq Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-slate-50/80 rounded-2xl border border-slate-200/90 overflow-hidden transition-all text-right"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="leading-relaxed">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom hotline callout */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="text-emerald-900 font-medium">
            پاسخ سوال خود را پیدا نکردید؟ همین حالا بدون خجالت تماس بگیرید.
          </div>
          <a
            href="tel:09157100520"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl transition-colors shadow-xs font-mono"
          >
            تماس با مشاور: 09157100520
          </a>
        </div>

      </div>
    </section>
  );
};
