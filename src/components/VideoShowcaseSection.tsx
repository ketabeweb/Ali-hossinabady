import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ExternalLink, ShieldCheck, Sparkles, Video, CheckCircle2, Volume2, UserCheck, PhoneCall, Download } from 'lucide-react';
import { OSTAD_MOSAFER_VIDEO_URL, CONTACT_INFO } from '../data/therapyData';

interface VideoShowcaseSectionProps {
  onScrollToConsultation?: () => void;
}

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({
  onScrollToConsultation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="video-section" className="py-16 lg:py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
            <Video className="w-4 h-4 text-cyan-400" />
            <span>سخنان و مستند تصویری</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            ویدئوی اختصاصی و سخنان <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">آقای استاد مسافر</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            در این ویدئوی ارزشمند، آقای استاد مسافر اصول بنیادین متد نوین MMO، درمان قطعی بدون درد و بستری، روان‌درمانی ریشه‌ای، احیای سیستم‌های زیستی بدن و چگونگی خاموش کردن دائمی وسوسه مصرف را تشریح می‌کنند.
          </p>
        </div>

        {/* Video Player Box & Highlights */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Cinematic Video Player Card */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl bg-slate-950 aspect-video flex items-center justify-center">
              
              {/* Actual HTML5 Video Tag */}
              <video
                ref={videoRef}
                src={OSTAD_MOSAFER_VIDEO_URL}
                controls={hasStarted}
                playsInline
                preload="metadata"
                onPlay={() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                }}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover relative z-10"
              />

              {/* Cover Overlay before playing */}
              {!hasStarted && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 z-20 bg-gradient-to-br from-blue-950/95 via-slate-900/90 to-indigo-950/95 flex flex-col items-center justify-center text-center p-6 cursor-pointer group/overlay transition-all"
                >
                  {/* Subtle Grid / Circuit Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Pulsing Play Button */}
                    <div className="relative inline-flex items-center justify-center">
                      <span className="absolute -inset-3 rounded-full bg-cyan-400/30 blur-md group-hover/overlay:bg-cyan-400/50 animate-pulse"></span>
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover/overlay:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white mr-1" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-cyan-300 bg-blue-900/80 border border-blue-400/30 px-3 py-1 rounded-full inline-block mb-2">
                        پخش آنلاین مستقیم
                      </span>
                      <h3 className="text-base sm:text-xl font-black text-white drop-shadow-md">
                        مشاهده ویدئوی سخنان استاد مسافر
                      </h3>
                      <p className="text-xs text-slate-300 font-medium mt-1">
                        برای پخش ویدئو در همین صفحه، کلیک کنید
                      </p>
                    </div>
                  </div>

                  {/* Bottom Video Info Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex items-center justify-between gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-[11px] text-slate-400">مرکز پژوهش و سبک زندگی مسیر مسافر</span>
                    </div>

                    <span className="bg-blue-600/80 text-white font-bold text-[11px] px-3 py-1 rounded-lg">
                      کیفیت عالی (MP4)
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Sub-bar below video */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-3 px-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-slate-300 font-medium">ویدئوی رسمی متد مسیر مسافر (استاد مسافر)</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  id="video-direct-source-link"
                  href={OSTAD_MOSAFER_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>باز کردن لینک مستقیم فایل</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Highlights & Bullet Points */}
          <div className="lg:col-span-5 space-y-5 text-right">
            <div className="bg-slate-900/80 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <UserCheck className="w-5 h-5" />
                <h3 className="text-base font-extrabold text-white">
                  محورهای کلیدی در کلام استاد مسافر:
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">چرا ترک‌های قبلی با شکست روبرو شد؟</strong> تبیین این حقیقت که قطع ناگهانی و شوک به جسم، اعصاب را فرسوده می‌کند و روش اصولی، سازگاری تدریجی و پله‌های معکوس است.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">صفر کردن درد و خماری:</strong> شیوه بیدارباش غدد ضددرد طبیعی بدن (اندورفین و آنکفالین) در طول دوره درمان بدون نیاز به بستری.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">بازسازی عزت نفس و کرامت انسانی:</strong> نگاه به فرد درگیر اعتیاد به عنوان یک «مسافر در جستجوی نور»، نه یک مجرم یا فرد بی‌اراده.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">نقش کتاب چهل پله چهل راه:</strong> همراهی قدم‌به‌قدم ذهنی و معنوی مسافر در طول فرایند بهبودی.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Consultation & Hotline Call Box */}
            <div className="p-4 bg-gradient-to-r from-blue-950/80 via-slate-900/80 to-indigo-950/80 rounded-2xl border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
              <div className="text-xs text-right">
                <span className="font-bold text-white block">گفتگوی مستقیم با مشاوران:</span>
                <span className="text-[12px] text-cyan-300 font-mono font-bold">{CONTACT_INFO.phoneDisplayPrimary}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  id="video-call-advisor-btn"
                  href={`tel:${CONTACT_INFO.phonePrimary}`}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>تماس رایگان: {CONTACT_INFO.phoneDisplayPrimary}</span>
                </a>

                {onScrollToConsultation && (
                  <button
                    type="button"
                    onClick={onScrollToConsultation}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    درخواست مشاوره
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
