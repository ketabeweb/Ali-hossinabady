import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileCode, Server, ShieldCheck, Sparkles, FolderArchive } from 'lucide-react';
import { generateHostingZip } from '../utils/exportZip';
import confetti from 'canvas-confetti';

interface ExportZipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportZipModal: React.FC<ExportZipModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    try {
      setIsGenerating(true);
      const blob = await generateHostingZip();
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mmosafer-therapy-hosting-package.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsGenerating(false);
      setIsDownloaded(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // fallback
      }
    } catch (err) {
      console.error('Failed to generate hosting package', err);
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-right relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <FolderArchive className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              دانلود پکیج کامل هاست (فایل ZIP)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              کد خالص HTML5 + CSS3 + JS، بدون نیاز به نصب هیچ چیز!
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
          <div className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs text-emerald-800">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>محتویات آماده بارگذاری در این فایل ZIP:</span>
          </div>

          <div className="flex items-start gap-2">
            <FileCode className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>فایل index.html مستقل:</strong> شامل تمامی متون، پلیر صوتی، استایل‌های Tailwind و فرم مشاوره
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Server className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>فایل کانفیگ سرور (.htaccess):</strong> برای فشرده‌سازی خودکار Gzip و کش سریع در آپاچی/لایت‌اسپید
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>فایل راهنمای فارسی (README.txt):</strong> راهنمای ۲ مرحله‌ای آپلود روی cPanel و DirectAdmin
            </div>
          </div>
        </div>

        {/* 3 Step Guide */}
        <div className="space-y-2 text-xs text-slate-600 mb-6 border-t border-slate-100 pt-4">
          <div className="font-bold text-slate-800">نحوه استقرار روی هاست شما:</div>
          <p>۱. دکمه دانلود زیر را بزنید تا فایل زیپ دریافت شود.</p>
          <p>۲. وارد کنترل پنل هاست خود شوید و در پوشه public_html این فایل زیپ را آپلود و Extract کنید.</p>
          <p>۳. تمام! وبسایت با بالاترین سرعت و بدون نیاز به کانفیگ فعال خواهد شد.</p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            id="modal-download-zip-action-btn"
            onClick={handleDownloadZip}
            disabled={isGenerating}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-6 rounded-2xl text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isGenerating ? (
              <span>در حال بسته‌بندی فایل ZIP...</span>
            ) : isDownloaded ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span>فایل دانلود شد! دانلود دوباره</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>دانلود فوری پکیج ZIP (آماده برای هاست)</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full text-slate-500 hover:text-slate-800 text-xs py-2 text-center transition-colors cursor-pointer"
          >
            بستن این پنجره و ادامه مشاهده صفحه فرود
          </button>
        </div>

      </div>
    </div>
  );
};
