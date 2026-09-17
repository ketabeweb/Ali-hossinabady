import React from 'react';
import { UserCheck, Users, Heart, Sparkles, Compass, Clock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../data/therapyData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-bold text-xs tracking-wider uppercase">خدمات تخصصی کلینیکال و روان‌درمانی</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            بسته‌های جامع درمانی و مشاوره‌ای مسیر مسافر
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            تمامی خدمات با تکیه بر استانداردهای روانشناسی سلامت، به صورت غیرحضوری و آنلاین در سراسر ایران و جهان، یا حضوری در مشهد ارائه می‌گردد. بیش از ۸۰٪ این خدمات در جهت احیای مسافران رایگان است.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative text-right hover:shadow-xl ${
                service.highlight
                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                  : 'border-slate-200/80 hover:border-blue-300'
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {service.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-blue-700 mb-3">
                  {service.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-800"
                >
                  <span>ثبت درخواست این خدمت</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
