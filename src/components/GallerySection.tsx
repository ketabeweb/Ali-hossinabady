import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  X, 
  BookOpen, 
  Award, 
  FileText, 
  Users, 
  Calendar, 
  Sparkles, 
  ExternalLink, 
  Maximize2, 
  Play, 
  Pause,
  Upload,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/therapyData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectBook?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectBook }) => {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    // Check if user uploaded local custom gallery items
    const saved = localStorage.getItem('custom_gallery_items');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {
        // fallback
      }
    }
    return GALLERY_ITEMS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter items
  const filteredItems = items.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Auto rotation effect
  useEffect(() => {
    if (!isAutoPlaying || filteredItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredItems.length]);

  // Adjust index if out of bounds after filter change
  useEffect(() => {
    if (currentIndex >= filteredItems.length) {
      setCurrentIndex(0);
    }
  }, [filteredItems.length, currentIndex]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev !== null ? (prev + 1) % items.length : 0));
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev !== null ? (prev - 1 + items.length) % items.length : 0));
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, items.length]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const newItem: GalleryItem = {
          id: `custom-${Date.now()}`,
          title: file.name.replace(/\.[^/.]+$/, "") || 'تصویر بارگذاری شده کاربر',
          description: 'تصویر اختصاصی افزوده‌شده توسط کاربر در بخش گالری مستندات درمان',
          imageUrl: dataUrl,
          fullImageUrl: dataUrl,
          category: 'testimonial',
          badge: 'سند اختصاصی',
          date: 'امروز',
          author: 'کاربر مسیر مسافر'
        };
        const updated = [newItem, ...items];
        setItems(updated);
        localStorage.setItem('custom_gallery_items', JSON.stringify(updated));
        setCurrentIndex(0);
        openLightbox(0);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>مستندات واقعی، رضایتمندی‌ها و کتاب چهل پله</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            گالری چرخان تصاویر و اسناد رهایی مسافران
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            شاهدان زنده و اسناد مکتوب رهایی از اعتیاد بدون درد و بستری. برای مشاهده باکیفیت و بزرگ‌نمایی، روی هر عکس کلیک کنید.
          </p>
        </motion.div>

        {/* Categories & Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { key: 'all', label: 'همه تصاویر', icon: Sparkles },
              { key: 'book', label: 'کتاب چهل پله', icon: BookOpen },
              { key: 'testimonial', label: 'دست‌نوشته و رضایت‌نامه', icon: FileText },
              { key: 'certificate', label: 'گواهی‌های رهایی', icon: Award },
              { key: 'session', label: 'جلسات و جشن‌ها', icon: Users }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveCategory(tab.key);
                    setCurrentIndex(0);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Autoplay toggle & Upload button */}
          <div className="flex items-center gap-2 mr-auto">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-700/70 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title={isAutoPlaying ? 'توقف چرخش خودکار' : 'فعال‌سازی چرخش خودکار'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-blue-400" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAutoPlaying ? 'چرخش فعال' : 'چرخش متوقف'}</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 transition-colors cursor-pointer"
              title="بارگذاری تصویر جدید در گالری"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">افزودن تصویر</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>

        </div>

        {/* Carousel / Rotating Slider Container */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/40 rounded-3xl border border-slate-700/50">
            <p className="text-slate-400 text-sm">موردی در این دسته یافت نشد.</p>
          </div>
        ) : (
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Desktop and Tablet Multi-Card View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.slice(0, 3).map((item) => {
                const globalIndex = items.findIndex(i => i.id === item.id);
                const hasError = imageErrors[item.id];

                return (
                  <motion.div
                    key={item.id}
                    id={`gallery-item-${item.id}`}
                    whileHover={{ y: -4 }}
                    onClick={() => openLightbox(globalIndex !== -1 ? globalIndex : 0)}
                    className="group bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-blue-500/60 shadow-lg hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-950 flex items-center justify-center">
                      {!hasError ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(item.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        /* Fallback stylish visual representation */
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between text-right border-4 border-dashed border-blue-500/20">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-bold">
                              {item.badge}
                            </span>
                            <Award className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-black text-white text-base leading-snug">{item.title}</h4>
                            <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.description}</p>
                          </div>
                          <div className="text-[10px] text-blue-400 font-mono flex items-center justify-between">
                            <span>مسیر مسافر مشهد</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      )}

                      {/* Top Badge Overlay */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.badge}</span>
                        </span>
                      </div>

                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-6 h-6" />
                        </div>
                        <span className="absolute bottom-4 text-xs font-bold text-cyan-300">
                          کلیک جهت بزرگ‌نمایی و مشاهده سند
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 text-right flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="text-base font-extrabold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{item.date || 'ثبت شده'}</span>
                        </span>
                        {item.author && (
                          <span className="text-blue-400/90 font-semibold">{item.author}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-between mt-8">
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700"
                  aria-label="عکس قبلی"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700"
                  aria-label="عکس بعدی"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center gap-1.5">
                {filteredItems.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === dotIdx ? 'w-6 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`اسلاید ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="text-xs text-slate-400">
                <span>نمایش {filteredItems.length} سند و تصویر مستند</span>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* LIGHTBOX / FULL-SCREEN MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && items[lightboxIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white"
            onClick={() => {
              setLightboxIndex(null);
              setZoomLevel(1);
            }}
          >
            {/* Top Bar */}
            <div 
              className="flex items-center justify-between gap-4 max-w-5xl mx-auto w-full pb-4 border-b border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full">
                  {items[lightboxIndex]?.badge}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-white truncate max-w-xs sm:max-w-md">
                  {items[lightboxIndex]?.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => (prev === 1 ? 1.5 : 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title={zoomLevel === 1 ? 'بزرگ‌نمایی' : 'اندازه عادی'}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-200 hover:text-rose-300 transition-colors cursor-pointer"
                  title="بستن (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div 
              className="flex-1 flex items-center justify-center relative my-4 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() => {
                  setLightboxIndex(prev => (prev !== null ? (prev - 1 + items.length) % items.length : 0));
                  setZoomLevel(1);
                }}
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-2xl bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-xl"
                aria-label="تصویر قبلی"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  setLightboxIndex(prev => (prev !== null ? (prev + 1) % items.length : 0));
                  setZoomLevel(1);
                }}
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-2xl bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-xl"
                aria-label="تصویر بعدی"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Display Image */}
              <div className="max-w-4xl max-h-[75vh] p-2 flex items-center justify-center overflow-auto">
                {!imageErrors[items[lightboxIndex].id] ? (
                  <img
                    src={items[lightboxIndex]?.fullImageUrl || items[lightboxIndex]?.imageUrl}
                    alt={items[lightboxIndex]?.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(items[lightboxIndex].id)}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-blue-500/30 transition-transform duration-200"
                  />
                ) : (
                  <div className="max-w-lg bg-slate-900 border-2 border-blue-500/40 rounded-3xl p-8 text-right space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                        {items[lightboxIndex]?.badge}
                      </span>
                      <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-black text-white">{items[lightboxIndex]?.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{items[lightboxIndex]?.description}</p>
                    <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                      <span>{items[lightboxIndex]?.author}</span>
                      <span>{items[lightboxIndex]?.date}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Caption & Counter */}
            <div 
              className="max-w-3xl mx-auto w-full text-center space-y-2 pt-3 border-t border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {items[lightboxIndex]?.description}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
                <span>تصویر {lightboxIndex + 1} از {items.length}</span>
                <span>•</span>
                <span>مرکز روان‌درمانی مسیر مسافر (mmosafer.com)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
