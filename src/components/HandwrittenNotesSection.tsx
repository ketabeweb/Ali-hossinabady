import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, ZoomIn, ZoomOut, Eye, Heart, Calendar, 
  User, X, ChevronLeft, ChevronRight, CheckCircle2, 
  Sparkles, Maximize2, Quote, Award, BookOpen
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/therapyData';

interface HandwrittenNote {
  id: string;
  title: string;
  author: string;
  date: string;
  badge: string;
  imageUrl: string;
  fullImageUrl: string;
  transcript: string;
  keyHighlight: string;
  tag: string;
}

export const HANDWRITTEN_NOTES: HandwrittenNote[] = [
  {
    id: 'hw-1',
    title: 'دست‌نوشته و سپاس‌نامه رهایی مسافر علیرضا',
    author: 'مسافر علیرضا (مشهد مقدس)',
    date: 'اردیبهشت ۱۴۰۴',
    badge: 'سند رسمی دست‌نویس',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s1200',
    transcript: '«به نام یزدان پاک، من علیرضا پس از ۱۱ سال گرفتاری در تاریکی اعتیاد، امروز در کنار همسر و فرزندم با افتخار اعلام رهایی کامل می‌کنم. در طول این دوره چهل پله، حتی یک روز کارم تعطیل نشد و ذره‌ای درد و خماری به سراغم نیامد. سپاس بی‌پایان از استاد مسافر و تیم دلسوز مرکز.»',
    keyHighlight: 'درمان بدون یک روز تعطیلی کار و بیزینس، بدون خماری و در آغوش خانواده',
    tag: 'قطع وابستگی متادون و تریاک'
  },
  {
    id: 'hw-2',
    title: 'تقدیرنامه و دل‌نوشته پرمهر خانواده همسفر',
    author: 'همسفر فاطمه س. (همسر رهجو)',
    date: 'دی ۱۴۰۳',
    badge: 'دل‌نوشته همسفران',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTV_WvYIkw0KpDMRPUb9gDGDI5xSgURnqSesCkQQwCEUMHj_g4_jCFX8aGWDOE58hSKAtIqRP_EmcD2VobTlf9sC2hZvJBcRsiyR_v3ueupGFZwBcpx2tJa64-cU5nwWIrTY=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTV_WvYIkw0KpDMRPUb9gDGDI5xSgURnqSesCkQQwCEUMHj_g4_jCFX8aGWDOE58hSKAtIqRP_EmcD2VobTlf9sC2hZvJBcRsiyR_v3ueupGFZwBcpx2tJa64-cU5nwWIrTY=s1200',
    transcript: '«استاد گرامی، خانه ما که سال‌ها زیر سایه استرس و ناامیدی سرد شده بود، با راهنمایی‌های شما دوباره به کانون مهر و خنده تبدیل شد. شما نه فقط همسرم را، بلکه آینده بچه‌های مرا نجات دادید. از صمیم قلب برایتان طول عمر آرزو می‌کنم.»',
    keyHighlight: 'احیای آرامش و بازگشت امید و خنده به زندگی خانواده',
    tag: 'روان‌درمانی و سبک زندگی'
  },
  {
    id: 'hw-3',
    title: 'گواهی بالینی تایید پاکی و پایان ۴۰ پله',
    author: 'کمیته سنجش و ارزیابی مسیر مسافر',
    date: 'تیر ۱۴۰۳',
    badge: 'گواهی رسمی رهایی',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v2dkJirIwp2t09s2L1FvID7Hg4nRRD3CLNBtNOKxXHz6eB0s7w4X2_q_SbDMKO8sREGAA4etbvEngLD7WYckG19UIdi4rY9moXUWdVHkj-5-4SDzI1LiSgPKmgU5lfzFd3yZ8ot0yLi9TkRvfNdqmXVi-xvu8W7Br2tY73eAM7S21plswqzusNCQiw9mH6pb5AR90okBCi7mgZ3rw3Ijn3HXcgqfNl9aIzbEDJb5O4mT-BYec0kglSHBds-gj-a3FxUUslmS9pz-HO5nOn3G7oxKc8slzqNEnQoyP0uu3F1O8DIqidXOxNRG05ex1_cvE=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v2dkJirIwp2t09s2L1FvID7Hg4nRRD3CLNBtNOKxXHz6eB0s7w4X2_q_SbDMKO8sREGAA4etbvEngLD7WYckG19UIdi4rY9moXUWdVHkj-5-4SDzI1LiSgPKmgU5lfzFd3yZ8ot0yLi9TkRvfNdqmXVi-xvu8W7Br2tY73eAM7S21plswqzusNCQiw9mH6pb5AR90okBCi7mgZ3rw3Ijn3HXcgqfNl9aIzbEDJb5O4mT-BYec0kglSHBds-gj-a3FxUUslmS9pz-HO5nOn3G7oxKc8slzqNEnQoyP0uu3F1O8DIqidXOxNRG05ex1_cvE=s1200',
    transcript: '«بدین‌وسیله تایید می‌گردد رهجو با گذراندن موفق دوره‌های روان‌شناختی، خودشناسی کتاب چهل پله و برنامه‌ریزی بیوشیمیایی بدن، به پاکی کامل و منفی شدن کلیه نشانگرها دست یافته و از بند وابستگی رها گردیده است.»',
    keyHighlight: 'تایید بالینی منفی شدن آزمایشات و رهایی کامل زیستی و روانی',
    tag: 'سند رسمی پایان دوره'
  },
  {
    id: 'hw-4',
    title: 'دست‌نوشته و دل‌نوشته مسافر سعید پس از سال‌ها تاریکی',
    author: 'مسافر سعید ر. (خراسان رضوی)',
    date: 'شهریور ۱۴۰۴',
    badge: 'نامه دست‌نویس آزادی',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4s2OyVxZaR4E9h5h99YTQ8c7KKuE4bm-MnCMIoB1WTKwWmRJldYVCH_9vgIsLysVSUOT4Wu3CDwYVJRwxWl8-MRZWdf9XgxLC3-3IPfQRgWsomN5wm8CINEw_3IHUx1AbCXKAkkwBV03AfjGooOV7i2paJxFXTLA987sXOifuxj9ESJNt8JIwg7PmiYh_p0evHZi_Mun0jrSKmBGjWL9Rj6RUCAvHtCaPIc2fIfzVwtCS_50OpaKD3_Te1HtsXWi2HBAjuUlRP-MTQtO6DjZm3hUOWI_okdDQzgMlJMAQmntRMCjaC5uL6QWK6gvwJelao=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4s2OyVxZaR4E9h5h99YTQ8c7KKuE4bm-MnCMIoB1WTKwWmRJldYVCH_9vgIsLysVSUOT4Wu3CDwYVJRwxWl8-MRZWdf9XgxLC3-3IPfQRgWsomN5wm8CINEw_3IHUx1AbCXKAkkwBV03AfjGooOV7i2paJxFXTLA987sXOifuxj9ESJNt8JIwg7PmiYh_p0evHZi_Mun0jrSKmBGjWL9Rj6RUCAvHtCaPIc2fIfzVwtCS_50OpaKD3_Te1HtsXWi2HBAjuUlRP-MTQtO6DjZm3hUOWI_okdDQzgMlJMAQmntRMCjaC5uL6QWK6gvwJelao=s1200',
    transcript: '«من سال‌ها فکر می‌کردم سرنوشت من تا آخر عمر دست‌به‌گریبان بودن با مواد است. بارها کمپ رفتم و تحقیر شدم. اما مسیر مسافر به من عزت‌نفس بخشید. الان مغزم آرام گرفته، خوابم منظم شده و اشتیاقی به مصرف ندارم. این نامه را با اشک شوق می‌نویسم.»',
    keyHighlight: 'خاموش شدن دائمی وسوسه روانی و احیای عزت نفس و شأن انسانی',
    tag: 'درمان ریشه‌ای وسوسه'
  },
  {
    id: 'hw-5',
    title: 'ثبت تصویری جلسه حضوری و حلقه شکرگزاری',
    author: 'رهجویان و همسفران مسیر مسافر',
    date: 'پاییز ۱۴۰۴',
    badge: 'تصویر گردهمایی و مستندات',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4tuHEJLKxGEdUqeufouxsGtm5sk2iMtFck_6cMbokse-9oDOL4CScGxl27seKn2TVqwsdvvLBrIwd5TINmMMlJy2KyFHIMXATIfF3dxHPI_dsyWhpq-gJJ2QnTKn_g_2brSgkWHsjcm6rCTENQpkMvEPoDT66mNMRCzJmsZr2QUKeLAFWzBN5cCZNzz3cDVm5TNhYjFnlODieztMqwkAH26QDP3uoj4jJA_KqS8x60X3r_3vkPctN80NuvSZNHHCOPCxxVi9wvOYoJW3P6aEZs1c5hbVFz8QWJmVYyGYo7vqwbE9mAr9x05KrgxDA2Ovtc=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4tuHEJLKxGEdUqeufouxsGtm5sk2iMtFck_6cMbokse-9oDOL4CScGxl27seKn2TVqwsdvvLBrIwd5TINmMMlJy2KyFHIMXATIfF3dxHPI_dsyWhpq-gJJ2QnTKn_g_2brSgkWHsjcm6rCTENQpkMvEPoDT66mNMRCzJmsZr2QUKeLAFWzBN5cCZNzz3cDVm5TNhYjFnlODieztMqwkAH26QDP3uoj4jJA_KqS8x60X3r_3vkPctN80NuvSZNHHCOPCxxVi9wvOYoJW3P6aEZs1c5hbVFz8QWJmVYyGYo7vqwbE9mAr9x05KrgxDA2Ovtc=s1200',
    transcript: '«جلسه هفتگی آموزش شکرگزاری، جهان‌بینی کاربردی و انرژی‌بخشی متقابل در شعبه مرکزی. دیدن لبخند کسانی که روزی ناامید بودند، بزرگ‌ترین پاداش معنوی این مسیر است.»',
    keyHighlight: 'حلقه‌های پرمهر همدلی، انرژی مثبت و کارگاه‌های رایگان جهان‌بینی',
    tag: 'کارگاه‌های توانمندسازی'
  },
  {
    id: 'hw-6',
    title: 'اهدای نشان رهایی و جشن گل پاکی',
    author: 'خانواده بزرگ رهایافتگان',
    date: 'اسفند ۱۴۰۳',
    badge: 'جشن رهایی و تولد دوباره',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4u0LgwmjPomUIwraPXhPJvnkC8MCN5S0fh9-V6IMP3J22N72n0K8a73i7jtUhjvE22viWJWRUmzE4EN04EpptEtZbIokSpPoannJJlSG9HH0J0GoKk_PRKbpryszQeyDSRt5SPO_0inT-BbDwymhXnJgQE48Wq91Di_ZzG9UQmdvC6XBC1t2dpGr8r3bpou5s5IWxiuP_75RbSwC0tjDsGd7jEuT7yUgrbpEYcYfcyWFdJ5CSuTPY4mrK5Xvi-i2VD4sH1NIXYBGjg94M4Gj3fJP23EWXRBCR1Eh1V44PpJ9gxtiS5WXhdc3imIaQ5U-0E=s600',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4u0LgwmjPomUIwraPXhPJvnkC8MCN5S0fh9-V6IMP3J22N72n0K8a73i7jtUhjvE22viWJWRUmzE4EN04EpptEtZbIokSpPoannJJlSG9HH0J0GoKk_PRKbpryszQeyDSRt5SPO_0inT-BbDwymhXnJgQE48Wq91Di_ZzG9UQmdvC6XBC1t2dpGr8r3bpou5s5IWxiuP_75RbSwC0tjDsGd7jEuT7yUgrbpEYcYfcyWFdJ5CSuTPY4mrK5Xvi-i2VD4sH1NIXYBGjg94M4Gj3fJP23EWXRBCR1Eh1V44PpJ9gxtiS5WXhdc3imIaQ5U-0E=s1200',
    transcript: '«پایان هر نقطه، سرآغاز خط دیگری است. در این روز پرشکوه، مسافران نشان افتخار رهایی دائم از مواد را دریافت نموده و به آغوش پرمهر جامعه و خانواده بازگشتند.»',
    keyHighlight: 'تثبیت سلامت روانی و جسمانی بدون بازگشت و عود مجدد',
    tag: 'رهایی دائم و پایدار'
  }
];

export const HandwrittenNotesSection: React.FC = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedNoteIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedNoteIndex(null);
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        setSelectedNoteIndex(prev => (prev !== null ? (prev - 1 + HANDWRITTEN_NOTES.length) % HANDWRITTEN_NOTES.length : 0));
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        setSelectedNoteIndex(prev => (prev !== null ? (prev + 1) % HANDWRITTEN_NOTES.length : 0));
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNoteIndex]);

  return (
    <section id="handwritten-notes" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-xs">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>اسناد و دل‌نوشته‌های واقعی و معتبر</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            عکس‌های دست‌نوشته و اسناد رهایی مسافران
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            این نامه‌ها و اسناد، دل‌نوشته‌های صادقانه رهجویانی است که تاریک‌ترین روزهای مصرف را به روشنایی پاکی رساندند.
            <span className="block mt-1 font-bold text-cyan-300">
              برای مشاهده تصویر با کیفیت اصلی و متن کامل، روی هر عکس کلیک نمایید.
            </span>
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HANDWRITTEN_NOTES.map((note, index) => {
            const hasError = imageErrorMap[note.id];

            return (
              <motion.div
                key={note.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => {
                  setSelectedNoteIndex(index);
                  setZoomLevel(1);
                }}
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border-2 border-slate-700/80 hover:border-amber-400/60 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                  {!hasError ? (
                    <img
                      src={note.imageUrl}
                      alt={note.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(note.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    /* Fallback Persian Handwritten Paper Simulation */
                    <div className="w-full h-full p-5 bg-gradient-to-br from-amber-50 to-amber-100/90 text-slate-800 flex flex-col justify-between select-none">
                      <div className="flex items-center justify-between border-b border-amber-300 pb-2">
                        <span className="text-[11px] font-bold text-amber-900">سند و دست‌نوشته رهایی</span>
                        <FileText className="w-4 h-4 text-amber-700" />
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-serif italic line-clamp-4 text-right">
                        {note.transcript}
                      </p>
                      <div className="text-[10px] text-amber-800 font-bold flex justify-between">
                        <span>{note.author}</span>
                        <span>{note.date}</span>
                      </div>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-slate-950/85 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{note.badge}</span>
                    </span>
                  </div>

                  {/* Click to Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white bg-slate-900/90 px-3 py-1 rounded-lg border border-amber-400/30">
                      کلیک برای باز شدن و مشاهده عکس
                    </span>
                  </div>
                </div>

                {/* Card Info Body */}
                <div className="p-5 text-right space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                      <span className="text-cyan-400 font-medium">{note.tag}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {note.date}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {note.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
                      {note.keyHighlight}
                    </p>
                  </div>

                  {/* Author & Click Prompt */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold text-slate-300">{note.author}</span>
                    </span>
                    <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                      <span>مشاهده عکس</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prompt Below Grid */}
        <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">کلیه تصاویر با اجازه کامل و افتخار مسافران منتشر شده است</h4>
              <p className="text-xs text-slate-400 mt-0.5">شما نیز می‌توانید نفر بعدی باشید که دست‌نوشته رهایی‌اش را با افتخار به دیگران تقدیم می‌کند.</p>
            </div>
          </div>
          <a
            href="tel:09157100520"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>مشاوره رهایی: 09157100520</span>
          </a>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedNoteIndex !== null && HANDWRITTEN_NOTES[selectedNoteIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white"
            onClick={() => {
              setSelectedNoteIndex(null);
              setZoomLevel(1);
            }}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between gap-4 max-w-6xl mx-auto w-full pb-4 border-b border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full">
                  {HANDWRITTEN_NOTES[selectedNoteIndex].badge}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-white truncate max-w-xs sm:max-w-md">
                  {HANDWRITTEN_NOTES[selectedNoteIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => (prev === 1 ? 1.6 : 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title={zoomLevel === 1 ? 'بزرگ‌نمایی عکس' : 'اندازه عادی'}
                >
                  {zoomLevel === 1 ? <ZoomIn className="w-5 h-5 text-amber-400" /> : <ZoomOut className="w-5 h-5 text-cyan-400" />}
                </button>

                <button
                  onClick={() => {
                    setSelectedNoteIndex(null);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-200 hover:text-rose-300 transition-colors cursor-pointer"
                  title="بستن (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle Main Stage */}
            <div
              className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 relative my-4 max-w-6xl mx-auto w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() => {
                  setSelectedNoteIndex(prev => (prev !== null ? (prev - 1 + HANDWRITTEN_NOTES.length) % HANDWRITTEN_NOTES.length : 0));
                  setZoomLevel(1);
                }}
                className="absolute right-2 z-30 w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-xl"
                aria-label="عکس قبلی"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  setSelectedNoteIndex(prev => (prev !== null ? (prev + 1) % HANDWRITTEN_NOTES.length : 0));
                  setZoomLevel(1);
                }}
                className="absolute left-2 z-30 w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-xl"
                aria-label="عکس بعدی"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Photo Display Container */}
              <div className="flex-1 flex items-center justify-center max-h-[65vh] w-full overflow-auto p-2">
                {!imageErrorMap[HANDWRITTEN_NOTES[selectedNoteIndex].id] ? (
                  <img
                    src={HANDWRITTEN_NOTES[selectedNoteIndex].fullImageUrl}
                    alt={HANDWRITTEN_NOTES[selectedNoteIndex].title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(HANDWRITTEN_NOTES[selectedNoteIndex].id)}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-[60vh] max-w-full object-contain rounded-2xl shadow-2xl border border-amber-400/40 transition-transform duration-200"
                  />
                ) : (
                  <div className="max-w-md bg-amber-50 rounded-2xl p-6 text-slate-900 text-right space-y-3 shadow-2xl border-2 border-amber-300">
                    <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                      <span className="font-bold text-xs text-amber-800">سند دست‌نوشته معتبر</span>
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-sm font-serif leading-relaxed italic text-slate-800">
                      {HANDWRITTEN_NOTES[selectedNoteIndex].transcript}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar Transcript / Details Panel */}
              <div className="w-full lg:w-80 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 text-right space-y-4 shrink-0">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 block mb-1">
                    {HANDWRITTEN_NOTES[selectedNoteIndex].tag}
                  </span>
                  <h4 className="text-base font-black text-white">
                    {HANDWRITTEN_NOTES[selectedNoteIndex].title}
                  </h4>
                </div>

                <div className="space-y-2 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold text-cyan-400 block">متن دست‌نوشته و محتوای سند:</span>
                  <p className="text-slate-300 leading-relaxed italic">
                    {HANDWRITTEN_NOTES[selectedNoteIndex].transcript}
                  </p>
                </div>

                <div className="text-xs space-y-1.5 pt-2 border-t border-slate-800 text-slate-400">
                  <div className="flex justify-between">
                    <span>نویسنده:</span>
                    <span className="text-white font-bold">{HANDWRITTEN_NOTES[selectedNoteIndex].author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تاریخ ثبت:</span>
                    <span className="text-white font-mono">{HANDWRITTEN_NOTES[selectedNoteIndex].date}</span>
                  </div>
                </div>

                <a
                  href="tel:09157100520"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors font-mono"
                >
                  تماس مستقیم با مشاور: 09157100520
                </a>
              </div>

            </div>

            {/* Bottom Indicator Dots */}
            <div
              className="flex items-center justify-center gap-2 max-w-5xl mx-auto w-full pt-3 border-t border-slate-800 text-xs text-slate-400"
              onClick={e => e.stopPropagation()}
            >
              <span>سند {selectedNoteIndex + 1} از {HANDWRITTEN_NOTES.length}</span>
              <div className="flex items-center gap-1.5 mx-3">
                {HANDWRITTEN_NOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedNoteIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      selectedNoteIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
