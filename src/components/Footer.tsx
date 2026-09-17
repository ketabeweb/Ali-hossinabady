import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, ArrowUp, Send, ExternalLink, Globe, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data/therapyData';
import { MasirLogo } from './MasirLogo';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-right">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <MasirLogo size="lg" />
              <div>
                <h3 className="text-xl font-extrabold text-white">مرکز سبک زندگی مسیر مسافر</h3>
                <p className="text-xs text-cyan-400 font-medium">mmosafer.com • رهایی با آگاهی، نه با درد</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              مرکز تخصصی درمان، مشاوره و روان‌درمانی سبک زندگی مسیر مسافر؛ دارای مجوز رسمی فعالیت و بیش از ۱۵ سال سابقه درخشان در احیا و رهایی بیش از ۱۰,۰۰۰ رهجو با متد نوین MMO بدون نیاز به بستری و بدون درد.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.eitaaGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-orange-500/25"
              >
                <Users className="w-3.5 h-3.5" />
                <span>گروه ۲۴ ساعته ایتا مسافران</span>
              </a>

              <a
                href={CONTACT_INFO.therapyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>روش درمان در mmosafer.com</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              راه‌های ارتباطی و پذیرش شبانه‌روزی
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>مشاور ارشد ۲۴ ساعته:</span>
                <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="text-white font-mono font-bold hover:text-blue-400 dir-ltr">
                  {CONTACT_INFO.phoneDisplayPrimary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>مشاوره تلفنی (خط ۱):</span>
                <a href={`tel:${CONTACT_INFO.phoneMobile1}`} className="text-white font-mono font-bold hover:text-cyan-400 dir-ltr">
                  {CONTACT_INFO.phoneDisplayMobile1}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>مشاوره تلفنی (خط ۳):</span>
                <a href={`tel:${CONTACT_INFO.phoneMobile3}`} className="text-white font-mono font-bold hover:text-indigo-400 dir-ltr">
                  {CONTACT_INFO.phoneDisplayMobile3}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تلفن دفتر مرکزی مشهد:</span>
                <a href={`tel:${CONTACT_INFO.phoneSecondary}`} className="text-white font-mono font-bold hover:text-emerald-400 dir-ltr">
                  {CONTACT_INFO.phoneDisplaySecondary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>پایگاه رسمی روش درمان:</span>
                <a href={CONTACT_INFO.therapyUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline dir-ltr">
                  mmosafer.com/therapy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ایمیل پشتیبانی:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ساعات پاسخگویی: شبانه‌روزی ۲۴ ساعته (حتی تعطیلات رسمی)</span>
              </li>
            </ul>
          </div>

          {/* Address & Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm border-b border-slate-800 pb-2">
              نشانی مراکز و شعب
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300 block mb-0.5">دفتر مرکزی مشهد:</strong>
                  {CONTACT_INFO.address}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300 block mb-0.5">شعبه کارگاه‌های آموزشی:</strong>
                  {CONTACT_INFO.branch}
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-blue-500/20 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>دارای پروانه رسمی و تحت نظارت مراجع ذی‌صلاح</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and navigation bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            تمامی حقوق مادی و معنوی متعلق به سازمان مردم‌نهاد و مرکز سبک زندگی مسیر مسافر (<a href={CONTACT_INFO.website} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">mmosafer.com</a>) می‌باشد.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>بازگشت به ابتدای صفحه</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
