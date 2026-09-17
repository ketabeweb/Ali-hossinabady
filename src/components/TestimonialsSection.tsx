import React, { useState } from 'react';
import { Quote, Play, Pause, MapPin, Calendar, Heart, Volume2, CheckCircle2, Image as ImageIcon, ZoomIn, X, ChevronLeft, ArrowDown } from 'lucide-react';
import { TESTIMONIALS } from '../data/therapyData';
import { audioEngine } from '../utils/audioSynth';

interface TestimonialsSectionProps {
  onScrollToGallery?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToGallery }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  const handleToggleVoice = (id: string) => {
    if (playingId === id) {
      audioEngine.stop();
      setPlayingId(null);
    } else {
      audioEngine.stop();
      audioEngine.playTrack('track-1');
      setPlayingId(id);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span>صدای واقعی رهایافتگان و خانواده‌ها</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            داستان‌های رهایی و رضایت‌مندی‌های مستند
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            امید تنها یک کلمه نیست؛ تجربیات مستند و دست‌نوشته‌های رهجویانی را بخوانید و مشاهده کنید که تاریک‌ترین روزهای مصرف را به روشنایی پاکی رساندند.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => {
            const isPlaying = playingId === item.id;
            return (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 text-right flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Name & City */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-black text-base flex items-center justify-center border border-emerald-100">
                        {item.name.slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                          <span>{item.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-600" />
                            {item.city}
                          </span>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">{item.recoveryDuration}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                      {item.substance}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <div className="py-5 relative">
                    <Quote className="w-8 h-8 text-emerald-100/80 absolute -top-1 -right-2 -z-0 rotate-180" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed relative z-10 font-normal">
                      {item.quote}
                    </p>
                  </div>

                  {/* Photo / Handwritten Document Preview if attached */}
                  {item.imageAttachment && (
                    <div 
                      onClick={() => setActiveImage({
                        url: item.imageAttachment!,
                        title: item.name,
                        caption: item.imageCaption || 'دست‌نوشته و سند رهایی'
                      })}
                      className="mb-4 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 rounded-2xl p-3 flex items-center justify-between gap-3 cursor-pointer group transition-all"
                      title="کلیک برای مشاهده بزرگ دست‌نوشته و تصویر سند"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-emerald-300/60 relative">
                          <img
                            src={item.imageAttachment}
                            alt={item.imageCaption || 'سند رهایی'}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-emerald-900 block group-hover:text-emerald-700">
                            {item.imageCaption || 'پیوست: دست‌نوشته و سند رهایی'}
                          </span>
                          <span className="text-[11px] text-emerald-700 flex items-center gap-1 mt-0.5">
                            <ZoomIn className="w-3 h-3" />
                            مشاهده تصویر کامل سند رهایی
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-[-2px] transition-transform">
                        بزرگ‌نمایی ←
                      </span>
                    </div>
                  )}

                </div>

                {/* Footer with Voice Note Preview Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>تاریخ ثبت: {item.date}</span>
                  </div>

                  {item.audioDuration && (
                    <button
                      onClick={() => handleToggleVoice(item.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        isPlaying
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPlaying ? 'در حال پخش ویس...' : `شنیدن ویس (${item.audioDuration})`}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Rotating Gallery & Trust Stat */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-xs px-6 py-3 rounded-2xl text-xs sm:text-sm text-slate-700">
            <span className="font-black text-emerald-600 text-base">+۱۰,۰۰۰</span>
            <span>پرونده موفق رهایی در آرشیو سبک زندگی مسیر مسافر مشهد</span>
          </div>

          <button
            onClick={() => {
              if (onScrollToGallery) {
                onScrollToGallery();
              } else {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>مشاهده گالری چرخان مدارک و رضایتمندی‌ها (۷ تصویر)</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox for Individual Testimonial Image */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-white space-y-4 text-right shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400">
                <ImageIcon className="w-5 h-5" />
                <span className="font-extrabold text-base">{activeImage.caption} - {activeImage.title}</span>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center p-2">
              <img
                src={activeImage.url}
                alt={activeImage.caption}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
              />
            </div>

            <div className="text-center pt-2 text-xs text-slate-300">
              <span>سند رضایت‌مندی و دست‌نوشته مسافر ثبت‌شده در مرکز سبک زندگی مسیر مسافر مشهد</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
