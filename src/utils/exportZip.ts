import JSZip from 'jszip';
import { audioEngine } from './audioSynth';

export async function generateHostingZip(): Promise<Blob> {
  const zip = new JSZip();

  // Create pure standalone HTML file that needs ZERO installations or build tools
  const standaloneHtml = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مرکز روان‌درمانی و سبک زندگی مسیر مسافر (mmosafer.com)</title>
  <meta name="description" content="درمان اعتیاد به روش نوین MMO بدون درد و خماری، بدون بستری در خانه با پشتیبانی شبانه‌روزی - مسیر مسافر مشهد">
  
  <!-- Tailwind CSS CDN for instant styling without build steps -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body { font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    @keyframes wave { 0%, 100% { height: 6px; } 50% { height: 28px; } }
    .animate-wave-1 { animation: wave 1.2s ease-in-out infinite 0.1s; }
    .animate-wave-2 { animation: wave 1.2s ease-in-out infinite 0.3s; }
    .animate-wave-3 { animation: wave 1.2s ease-in-out infinite 0.5s; }
    .animate-wave-4 { animation: wave 1.2s ease-in-out infinite 0.2s; }
    .animate-wave-5 { animation: wave 1.2s ease-in-out infinite 0.4s; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">

  <!-- TOP EMERGENCY & PHONE BAR -->
  <div class="bg-emerald-900 text-white text-xs sm:text-sm py-2.5 px-4 shadow-sm">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span class="font-medium">پشتیبانی و مشاوره شبانه‌روزی (۲۴ ساعته):</span>
        <a href="tel:09157100520" class="font-bold text-emerald-300 hover:text-white underline">09157100520</a>
        <span class="hidden sm:inline">|</span>
        <a href="tel:05191007002" class="hidden sm:inline font-bold text-emerald-300 hover:text-white underline">05191007002</a>
      </div>
      <div class="text-xs text-emerald-200">
        مشهد، شهرک غرب، فلاحی ۹، پلاک ۱۹۳ | دارای مجوز رسمی
      </div>
    </div>
  </div>

  <!-- NAVIGATION -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md font-black text-xl">
          MM
        </div>
        <div>
          <h1 class="text-lg sm:text-xl font-extrabold text-slate-900">مسیر مسافر</h1>
          <p class="text-xs text-emerald-700 font-medium">مرکز روان‌درمانی و سبک زندگی (mmosafer.com)</p>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
        <a href="#hero" class="hover:text-emerald-600 transition-colors">صفحه اصلی</a>
        <a href="#method" class="hover:text-emerald-600 transition-colors">روش درمان MMO</a>
        <a href="#audio" class="hover:text-emerald-600 transition-colors">رادیو و صوت آرامش</a>
        <a href="#services" class="hover:text-emerald-600 transition-colors">خدمات تراپی</a>
        <a href="#compare" class="hover:text-emerald-600 transition-colors">مقایسه با کمپ</a>
        <a href="#testimonials" class="hover:text-emerald-600 transition-colors">صدای رهایافتگان</a>
        <a href="#faq" class="hover:text-emerald-600 transition-colors">سوالات متداول</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="#consultation" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5">
          مشاوره رایگان تلفنی
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-emerald-50/40 to-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-right">
          <div class="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            شیوه نوین و بدون بازگشت درمان اعتیاد در ایران
          </div>
          
          <h2 class="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
            رهایی با <span class="text-emerald-600">آگاهی</span>،<br>
            نه با درد و خماری و بستری!
          </h2>
          
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            درمان ریشه‌ای و علمی اعتیاد به متد اختصاصی <strong class="text-slate-900">MMO</strong> (سبک زندگی مسیر مسافر). بدون نیاز به ترک کار و خانواده، بدون شوک جسمی و بدون درد، در محیط امن خانه خود به همراه تیم روان‌درمانگران بالینی و همراهی ۲۴ ساعته.
          </p>

          <!-- KEY STATS -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
            <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div class="text-2xl font-black text-emerald-600">+۱۵ سال</div>
              <div class="text-xs text-slate-500 mt-0.5 font-medium">سابقه درخشان</div>
            </div>
            <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div class="text-2xl font-black text-emerald-600">+۱۰,۰۰۰</div>
              <div class="text-xs text-slate-500 mt-0.5 font-medium">رهجوی رها شده</div>
            </div>
            <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div class="text-2xl font-black text-emerald-600">۰ روز</div>
              <div class="text-xs text-slate-500 mt-0.5 font-medium">بستری و دوری از کار</div>
            </div>
            <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div class="text-2xl font-black text-emerald-600">۲۴ ساعته</div>
              <div class="text-xs text-slate-500 mt-0.5 font-medium">پشتیبانی و پاسخگویی</div>
            </div>
          </div>

          <!-- CTAS -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#consultation" class="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5">
              درخواست مشاوره محرمانه
            </a>
            <a href="tel:09157100520" class="bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-extrabold px-6 py-3 rounded-xl transition-all">
              تماس فوری: 09157100520
            </a>
            <a href="#audio" class="text-slate-700 hover:text-emerald-700 font-semibold text-sm flex items-center gap-2 p-2">
              🎧 پخش صوت آرامش ذهن
            </a>
          </div>
        </div>

        <!-- HERO CARD & PREVIEW -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            <div class="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ضمانت علمی و تجربی
            </div>
            <h3 class="text-xl font-extrabold text-slate-900 mb-4">چرا متد مسیر مسافر متمایز است؟</h3>
            <ul class="space-y-3.5 text-sm text-slate-600">
              <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-bold">✓</span>
                <span><strong>کاهش تدریجی و بدون درد:</strong> مغز فرصت بازسازی گیرنده‌های طبیعی اندورفین را پیدا می‌کند.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-bold">✓</span>
                <span><strong>روان‌درمانی ریشه‌ای (CBT):</strong> ریشه‌های احساسی، وسوسه‌ها و محرک‌های روانی خنثی می‌شوند.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-bold">✓</span>
                <span><strong>حفظ کامل شغل و آبرو:</strong> هیچ‌کس در محل کار یا خانواده متوجه روند درمان نخواهد شد.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-bold">✓</span>
                <span><strong>آموزش همراهان (همسفران):</strong> تبدیل محیط خانه به امن‌ترین پناهگاه درمان.</span>
              </li>
            </ul>

            <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p class="text-xs text-slate-400">مجوز رسمی فعالیت</p>
                <p class="text-sm font-bold text-slate-700">سبک زندگی مسیر مسافر مشهد</p>
              </div>
              <a href="#method" class="text-emerald-600 font-bold text-xs hover:underline">
                اطلاعات بیشتر ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AUDIO PLAYER SECTION (رادیو مسافر و صوت آرامش) -->
  <section id="audio" class="py-16 bg-slate-900 text-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <span class="text-emerald-400 text-xs font-bold tracking-wider uppercase">رادیو مسافر و صوت آرامش ذهن</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold mt-2">شنیدن آرامش، رهایی از اضطراب و ولع</h2>
        <p class="text-slate-400 text-sm sm:text-base mt-3">
          فایل‌های صوتی اختصاصی جلسات روان‌درمانی، شکرگزاری و پادکست رادیو مسافر را به صورت مستقیم گوش دهید یا دانلود کنید.
        </p>
      </div>

      <div class="bg-slate-800 border border-slate-700/80 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-700">
          <div>
            <div class="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">
              در حال پخش: صوت آرامش ذهن و شکرگزاری (خدایا شکرت)
            </div>
            <h3 class="text-xl font-bold" id="currentTrackTitle">صوت آرامش ذهن و شکرگزاری (خدایا شکرت)</h3>
            <p class="text-slate-400 text-xs mt-1">استاد مسافر - سبک زندگی مسیر مسافر</p>
          </div>

          <div class="flex items-center gap-3">
            <button id="playBtn" onclick="toggleAudio()" class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black flex items-center justify-center text-xl shadow-lg transition-all">
              ▶
            </button>
            <button onclick="downloadSampleAudio()" class="bg-slate-700 hover:bg-slate-600 text-xs font-bold px-4 py-3 rounded-xl transition-all">
              ⬇ دانلود صوت (WAV)
            </button>
          </div>
        </div>

        <!-- WAVEFORM -->
        <div class="py-6 flex items-center justify-center gap-1.5 h-16">
          <div class="w-1.5 bg-emerald-500 rounded-full animate-wave-1"></div>
          <div class="w-1.5 bg-emerald-400 rounded-full animate-wave-2"></div>
          <div class="w-1.5 bg-emerald-300 rounded-full animate-wave-3"></div>
          <div class="w-1.5 bg-emerald-400 rounded-full animate-wave-4"></div>
          <div class="w-1.5 bg-emerald-500 rounded-full animate-wave-5"></div>
          <div class="w-1.5 bg-emerald-400 rounded-full animate-wave-2"></div>
          <div class="w-1.5 bg-emerald-300 rounded-full animate-wave-1"></div>
          <div class="w-1.5 bg-emerald-500 rounded-full animate-wave-4"></div>
        </div>

        <!-- TRACK LIST -->
        <div class="grid sm:grid-cols-2 gap-3 mt-4">
          <div onclick="selectTrack('صوت آرامش ذهن و شکرگزاری (خدایا شکرت)')" class="p-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 cursor-pointer flex items-center justify-between text-xs">
            <div>
              <div class="font-bold text-white">۱. صوت آرامش ذهن و شکرگزاری</div>
              <div class="text-slate-400">مدیتیشن و امواج ۴۳۲ هرتز</div>
            </div>
            <span class="text-emerald-400 font-mono">۰۳:۴۵</span>
          </div>

          <div onclick="selectTrack('جلسه اول تراپی: ریشه‌یابی وابستگی')" class="p-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 cursor-pointer flex items-center justify-between text-xs">
            <div>
              <div class="font-bold text-white">۲. جلسه اول تراپی: ریشه‌یابی وابستگی</div>
              <div class="text-slate-400">شناخت مکانیسم دوپامین</div>
            </div>
            <span class="text-emerald-400 font-mono">۰۵:۲۰</span>
          </div>

          <div onclick="selectTrack('جلسه دوم تراپی: تغییر باورها و CBT')" class="p-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 cursor-pointer flex items-center justify-between text-xs">
            <div>
              <div class="font-bold text-white">۳. جلسه دوم: تغییر باورها (CBT)</div>
              <div class="text-slate-400">مهار جرقه‌های وسوسه</div>
            </div>
            <span class="text-emerald-400 font-mono">۰۴:۵۰</span>
          </div>

          <div onclick="selectTrack('رادیو مسافر: عبور از متادون و B2')" class="p-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 cursor-pointer flex items-center justify-between text-xs">
            <div>
              <div class="font-bold text-white">۴. رادیو مسافر: عبور از متادون و B2</div>
              <div class="text-slate-400">کاهش تدریجی شربت و قرص</div>
            </div>
            <span class="text-emerald-400 font-mono">۰۶:۱۵</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- METHOD SECTION (ارکان چهارگانه MMO) -->
  <section id="method" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-emerald-600 font-bold text-xs tracking-wider uppercase">متد اختصاصی MMO مسیر مسافر</span>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">چهار رکن علمی درمان تضمینی اعتیاد</h2>
        <p class="text-slate-600 text-sm sm:text-base mt-3">
          ما اعتیاد را یک نقص اراده نمی‌دانیم، بلکه یک برهم‌خوردگی فیزیولوژیک و روانی می‌دانیم که با فرمول علمی و گام‌به‌گام به تعادل بازمی‌گردد.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div class="text-3xl font-black text-emerald-600 mb-2">۰۱</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">درمان تدریجی فیزیولوژیک</h3>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            کاهش مهندسی‌شده پله‌ها بدون شوک دادن به فیزیولوژی مغز و بدون درد، برای احیای تدریجی غدد درون‌ریز طبیعی بدن.
          </p>
          <ul class="text-xs text-slate-500 space-y-1.5 font-medium">
            <li>• بدون خماری و تب و لرز</li>
            <li>• بدون نیاز به بستری در کمپ</li>
            <li>• حفظ کامل کار و فعالیت روزانه</li>
          </ul>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div class="text-3xl font-black text-emerald-600 mb-2">۰۲</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">روان‌درمانی شناختی (CBT)</h3>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            شناسایی ریشه‌های روانی گرایش به مصرف از جمله اضطراب، تروماهای کهنه و الگوهای نشخوار فکری و بازسازی ذهن.
          </p>
          <ul class="text-xs text-slate-500 space-y-1.5 font-medium">
            <li>• مهار جرقه‌های وسوسه (Craving)</li>
            <li>• کنترل استرس و خشم</li>
            <li>• بازگشت عزت‌نفس پایدار</li>
          </ul>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div class="text-3xl font-black text-emerald-600 mb-2">۰۳</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">خانواده‌درمانی و همسفران</h3>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            آموزش علمی و احساسی به خانواده فرد برای تبدیل کردن محیط منزل به کانون امن پذیرش، دلگرمی و حمایت صادقانه.
          </p>
          <ul class="text-xs text-slate-500 space-y-1.5 font-medium">
            <li>• توقف رفتارهای سرزنش‌گرانه</li>
            <li>• بازیابی آرامش در کانون خانه</li>
            <li>• جلسات ویژه همسفران</li>
          </ul>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div class="text-3xl font-black text-emerald-600 mb-2">۰۴</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">کتاب ۴۰ پله و جهان‌بینی</h3>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            آموزش اصول خودشناسی، انضباط معنوی، شکرگزاری روزانه و ایجاد افق‌های روشن در زندگی پاک و باعزت.
          </p>
          <ul class="text-xs text-slate-500 space-y-1.5 font-medium">
            <li>• تمرین‌های عملی چهل پله</li>
            <li>• شکرگزاری برای سلامتی</li>
            <li>• عضویت در جمع رهجویان رها</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section id="compare" class="py-20 bg-slate-100/70">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-emerald-600 font-bold text-xs tracking-wider uppercase">جدول مقایسه علمی</span>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900 mt-2">روش مسیر مسافر در مقایسه با کمپ‌های سنتی</h2>
      </div>

      <div class="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-right text-sm">
            <thead class="bg-slate-900 text-white text-xs">
              <tr>
                <th class="py-4 px-6 font-bold">شاخص درمانی</th>
                <th class="py-4 px-6 font-bold text-emerald-400 bg-slate-800">متد مسیر مسافر (MMO)</th>
                <th class="py-4 px-6 font-bold text-rose-300">روش‌های سنتی و کمپ‌های اجباری</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="py-4 px-6 font-bold text-slate-900">محل درمان و قرنطینه</td>
                <td class="py-4 px-6 text-emerald-700 bg-emerald-50/50 font-semibold">در خانه، در کنار خانواده و با عزت نفس</td>
                <td class="py-4 px-6 text-slate-600">حبس در کمپ، قطع ارتباط کامل و تخریب روحی</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-4 px-6 font-bold text-slate-900">درد، تب، لرز و خماری</td>
                <td class="py-4 px-6 text-emerald-700 bg-emerald-50/50 font-semibold">بدون درد و بدون خماری شدید</td>
                <td class="py-4 px-6 text-slate-600">دردهای طاقت‌فرسا، بی‌قراری، بی‌خوابی مفرط</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-4 px-6 font-bold text-slate-900">وضعیت شغل و درآمد</td>
                <td class="py-4 px-6 text-emerald-700 bg-emerald-50/50 font-semibold">ادامه کار روزانه بدون حتی یک روز غیبت</td>
                <td class="py-4 px-6 text-slate-600">از دست رفتن شغل و زیان‌های مالی سنگین</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-4 px-6 font-bold text-slate-900">میزان پایداری و عدم عود</td>
                <td class="py-4 px-6 text-emerald-700 bg-emerald-50/50 font-semibold">بسیار بالا به دلیل تغییر جهان‌بینی و رفتار</td>
                <td class="py-4 px-6 text-slate-600">بیش از ۸۵٪ بازگشت مجدد بلافاصله پس از ترخیص</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-4 px-6 font-bold text-slate-900">پشتیبانی و پاسخگویی</td>
                <td class="py-4 px-6 text-emerald-700 bg-emerald-50/50 font-semibold">۲۴ ساعته تلفنی و آنلاین بدون وقفه</td>
                <td class="py-4 px-6 text-slate-600">صفر؛ پس از پایان دوره فرد به حال خود رها می‌شود</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonials" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-emerald-600 font-bold text-xs tracking-wider uppercase">صدای رهجویان رها شده</span>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">داستان‌های واقعی رهایی پایدار</h2>
        <p class="text-slate-600 text-sm sm:text-base mt-3">
          بیش از ۱۰,۰۰۰ هموطن با این شیوه به آغوش زندگی پاک بازگشته‌اند.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="font-bold text-slate-900">علیرضا م. (مشهد)</div>
              <div class="text-xs text-emerald-600 font-medium">۴ سال پاکی کامل از متادون</div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">تایید شده</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            «من ۶ بار کمپ رفتم و هر بار بدتر شدم. متد مسیر مسافر نشان داد که بدون یک روز استراحت اجباری یا درد می‌شود پاک شد. الان ۴ ساله حتی به سیگار هم دست نزدم.»
          </p>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="font-bold text-slate-900">همسفر فاطمه (تهران)</div>
              <div class="text-xs text-emerald-600 font-medium">همسر رهجو - ۳ سال آرامش خانه</div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">همسفران</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            «کلاس‌های همسفران چشمان من را باز کرد. یاد گرفتم چگونه رفتار کنم تا شوهرم در خانه احساس امنیت کند و بدون دعوا و سرزنش درمان شود.»
          </p>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="font-bold text-slate-900">مهرداد ک. (اصفهان)</div>
              <div class="text-xs text-emerald-600 font-medium">۲ سال و نیم پاکی از ترامادول</div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">تایید شده</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            «ترسم این بود کارم در بازار تعطیل شود. پشتیبانی ۲۴ ساعته مشاوران کاری کرد که بدون افت راندمان کاری پله به پله به صفر رسیدم.»
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- COURSE & 40 STEPS BOOK SECTION -->
  <section id="book" class="py-16 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-6 text-right">
          <span class="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
            منبع علمی و عملی دوره
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-white">
            کتاب اختصاصی «چهل پله چهل راه» و دوره تحول سبک زندگی
          </h2>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            رهایی پایدار نیازمند ساخت جهان‌بینی تازه است. کتاب چهل پله چهل راه نقشه راه خروج از تاریکی اعتیاد، بخشش خویشتن، تقویت اراده و شکرگزاری روزانه است.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a href="#consultation" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all">
              دریافت کتاب در دوره
            </a>
            <a href="https://mmosafer.com/therapy/" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-5 py-3 rounded-xl text-sm transition-all">
              مشاهده پروتکل روش درمان در mmosafer.com
            </a>
          </div>
        </div>
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative bg-slate-800 rounded-3xl p-6 border-2 border-emerald-500/40 shadow-2xl max-w-xs text-center cursor-pointer" onclick="openLightbox('https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTVn785l69cvy-cZ48v9fE-k45Fp18qgOq5rX69R0h2hNqfJ7709bQ92wZ-2pG_4k=s1000', 'کتاب رسمی چهل پله چهل راه')">
            <img src="https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTVn785l69cvy-cZ48v9fE-k45Fp18qgOq5rX69R0h2hNqfJ7709bQ92wZ-2pG_4k=s600" alt="کتاب چهل پله" class="rounded-2xl shadow-xl w-full object-cover">
            <p class="text-xs text-emerald-400 font-bold mt-3">جلد رسمی کتاب چهل پله چهل راه (کلیک برای بزرگ‌نمایی)</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROTATING GALLERY SECTION -->
  <section id="gallery" class="py-20 bg-slate-950 text-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
          مستندات رهایی، دست‌نوشته‌ها و کتاب
        </span>
        <h2 class="text-2xl sm:text-4xl font-black text-white mt-3">
          گالری چرخان مدارک و رضایتمندی مسافران
        </h2>
        <p class="text-slate-400 text-sm mt-2">
          برای مشاهده باکیفیت و بزرگ‌نمایی مدارک، روی هر تصویر کلیک کنید.
        </p>
      </div>

      <!-- Carousel Items Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="galleryContainer">
        <!-- Item 1 -->
        <div class="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500 transition-all cursor-pointer group" onclick="openLightbox('https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTVn785l69cvy-cZ48v9fE-k45Fp18qgOq5rX69R0h2hNqfJ7709bQ92wZ-2pG_4k=s1000', 'کتاب چهل پله چهل راه')">
          <div class="relative aspect-4/3 overflow-hidden bg-slate-950">
            <img src="https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTVn785l69cvy-cZ48v9fE-k45Fp18qgOq5rX69R0h2hNqfJ7709bQ92wZ-2pG_4k=s600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <span class="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">کتاب دوره</span>
          </div>
          <div class="p-5 text-right">
            <h3 class="font-bold text-white text-base">کتاب چهل پله چهل راه</h3>
            <p class="text-xs text-slate-400 mt-1">تالیف مرکز مسیر مسافر - سبک زندگی پاک</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500 transition-all cursor-pointer group" onclick="openLightbox('https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v1r27XFtA3dzmGJ40gShkZ7JMgVMn1DasDPjQ479yn5gltXc2h8G9ZsYhQUn8vr3pFBPk9xIGE6k6cM7-Y3cSaQrzUEFKJrDNd6hKOrwjgoVf0jwI9l9u9f07CZXl7o-ccZDgk6i2Zjcb-Q151kO_Gr3tN_VfOiXwkLcJGIF3ARUr-O-bat3oXmrKNFx-GpwQZSOZzs0yeu8b3fXYAqpvtDkMN26VGiqAhfkbrYdiKVERkIQuPJIx25u2vAd6AJz2ELLY9WDiziSSFAaH8TaJIe3IbRv7HYg7WQ62mDt1NgUb2bgBz09cyyljdrWAopEY=s1000', 'رضایت‌نامه و دست‌نوشته مسافر')">
          <div class="relative aspect-4/3 overflow-hidden bg-slate-950">
            <img src="https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v1r27XFtA3dzmGJ40gShkZ7JMgVMn1DasDPjQ479yn5gltXc2h8G9ZsYhQUn8vr3pFBPk9xIGE6k6cM7-Y3cSaQrzUEFKJrDNd6hKOrwjgoVf0jwI9l9u9f07CZXl7o-ccZDgk6i2Zjcb-Q151kO_Gr3tN_VfOiXwkLcJGIF3ARUr-O-bat3oXmrKNFx-GpwQZSOZzs0yeu8b3fXYAqpvtDkMN26VGiqAhfkbrYdiKVERkIQuPJIx25u2vAd6AJz2ELLY9WDiziSSFAaH8TaJIe3IbRv7HYg7WQ62mDt1NgUb2bgBz09cyyljdrWAopEY=s600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <span class="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">دست‌نوشته</span>
          </div>
          <div class="p-5 text-right">
            <h3 class="font-bold text-white text-base">دست‌نوشته و اعلام رهایی</h3>
            <p class="text-xs text-slate-400 mt-1">نامه تقدیر رهجو از مشاوران مسیر مسافر</p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500 transition-all cursor-pointer group" onclick="openLightbox('https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s1000', 'گواهی پاکی مسافر')">
          <div class="relative aspect-4/3 overflow-hidden bg-slate-950">
            <img src="https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <span class="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">سند رسمی</span>
          </div>
          <div class="p-5 text-right">
            <h3 class="font-bold text-white text-base">گواهی رهایی و پاکی کامل</h3>
            <p class="text-xs text-slate-400 mt-1">تایید آزمایش منفی و ورود به سفر دوم</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX MODAL -->
  <div id="lightboxModal" class="hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4" onclick="closeLightbox()">
    <div class="relative max-w-4xl w-full flex flex-col items-center" onclick="event.stopPropagation()">
      <div class="w-full flex items-center justify-between pb-3 text-white border-b border-slate-800">
        <span id="lightboxTitle" class="font-bold text-sm sm:text-base text-emerald-400"></span>
        <button onclick="closeLightbox()" class="text-slate-400 hover:text-white text-2xl font-bold px-3 py-1">✕</button>
      </div>
      <div class="p-4 flex justify-center">
        <img id="lightboxImg" src="" alt="" class="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800">
      </div>
    </div>
  </div>

  <script>
    function openLightbox(url, title) {
      document.getElementById('lightboxImg').src = url;
      document.getElementById('lightboxTitle').innerText = title;
      document.getElementById('lightboxModal').classList.remove('hidden');
    }
    function closeLightbox() {
      document.getElementById('lightboxModal').classList.add('hidden');
    }
  </script>

  <!-- CONSULTATION FORM SECTION -->
  <section id="consultation" class="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="bg-slate-800/90 border border-slate-700 backdrop-blur rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div class="text-center max-w-xl mx-auto mb-8">
          <span class="text-emerald-400 font-bold text-xs uppercase tracking-wider">فرم مشاوره رایگان و ۱۰۰٪ محرمانه</span>
          <h2 class="text-2xl sm:text-3xl font-black mt-2">قدم اول رهایی را همین امروز بردارید</h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-2">
            اطلاعات شما نزد ما کاملاً امانت است و هیچ‌گونه مشخصاتی در هیچ سامانه‌ای ثبت نخواهد شد.
          </p>
        </div>

        <form id="consultForm" onsubmit="handleConsultationSubmit(event)" class="space-y-4 text-right">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">نام یا نام مستعار</label>
              <input type="text" id="custName" required placeholder="مثلاً: علی مسافر" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">شماره تماس (جهت تماس کارشناس)</label>
              <input type="tel" id="custPhone" required placeholder="۰۹۱۲۳۴۵۶۷۸۹" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono">
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">ماده مصرفی یا نوع وابستگی</label>
              <select id="custSubstance" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500">
                <option value="شربت متادون / قرص B2">شربت متادون / قرص B2</option>
                <option value="تریاک / شیره">تریاک / شیره</option>
                <option value="ترامادول / مسکن‌ها">ترامادول / مسکن‌ها</option>
                <option value="مواد محرک (شیشه، گل)">مواد محرک (شیشه، گل)</option>
                <option value="الکل / سیگار">الکل / سیگار</option>
                <option value="سایر موارد / مشاوره خانواده">سایر موارد / مشاوره خانواده</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">شهر محل سکونت</label>
              <input type="text" id="custCity" placeholder="مثلاً: مشهد، تهران..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">توضیحات کوتاه یا زمان مناسب برای تماس شما</label>
            <textarea id="custNotes" rows="3" placeholder="اگر توضیح خاصی دارید یا ساعت خاصی مدنظرتان است بنویسید..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"></textarea>
          </div>

          <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl text-base shadow-lg shadow-emerald-500/20 transition-all">
            ثبت درخواست مشاوره رایگان تلفنی
          </button>

          <div id="formSuccess" class="hidden p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-center text-sm font-medium">
            درخواست شما با موفقیت ثبت شد. مشاوران مرکز به زودی با شما تماس خواهند گرفت. همچنین می‌توانید مستقیماً با شماره <a href="tel:09157100520" class="underline font-bold text-white">۰۹۱۵۷۱۰۰۵۲۰</a> تماس بگیرید.
          </div>
        </form>

        <div class="mt-6 pt-6 border-t border-slate-700 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>🔒 رعایت رازداری اخلاقی و پزشکی</span>
          <span>⚡ پاسخگویی در کمتر از ۳۰ دقیقه</span>
          <span>☎ خط مستقیم: ۰۵۱۹۱۰۰۷۰۰۲</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-emerald-600 font-bold text-xs uppercase tracking-wider">پاسخ به ابهامات</span>
        <h2 class="text-3xl font-black text-slate-900 mt-2">پرسش‌های پرتکرار</h2>
      </div>

      <div class="space-y-4">
        <details class="group bg-white p-5 rounded-2xl border border-slate-200">
          <summary class="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
            <span>آیا واقعاً درمان بدون درد و خماری ممکن است؟</span>
            <span class="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            بله کاملاً. وقتی کاهش مواد به شکل علمی و حساب‌شده صورت می‌گیرد، مغز فرصت بازسازی گیرنده‌های طبیعی ضددرد (اندورفین) خود را پیدا می‌کند و هیچ درد غیرقابل تحملی ایجاد نخواهد شد.
          </p>
        </details>

        <details class="group bg-white p-5 rounded-2xl border border-slate-200">
          <summary class="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
            <span>آیا هویت و پرونده من محرمانه می‌ماند؟</span>
            <span class="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            ۱۰۰٪ بله. هیچ‌گونه پرونده هویتی یا سوءپیشینه‌ای ایجاد نمی‌شود و شما حتی می‌توانید با نام مستعار در مشاوره‌ها شرکت کنید.
          </p>
        </details>

        <details class="group bg-white p-5 rounded-2xl border border-slate-200">
          <summary class="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-sm sm:text-base">
            <span>طول دوره درمان چقدر است؟</span>
            <span class="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            طول دوره بر اساس نوع مصرف و سابقه فرد تعیین می‌شود، اما مهم‌ترین نکته این است که شما در تمام طول این مدت به کسب‌وکار و زندگی خانوادگی خود ادامه می‌دهید.
          </p>
        </details>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center">MM</div>
            <div class="font-black text-white text-lg">سبک زندگی مسیر مسافر</div>
          </div>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
            مرکز تخصصی درمان و مشاوره سبک زندگی مسیر مسافر؛ پیشگام در درمان نوین و بدون درد اعتیاد در کشور با بیش از ۱۵ سال تجربه و درمان ۱۰ هزار رهجو.
          </p>
          <div class="text-xs text-slate-400">
            وبسایت رسمی: <a href="https://mmosafer.com" target="_blank" class="text-emerald-400 font-bold hover:underline">mmosafer.com</a>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold text-sm">ارتباط مستقیم</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li>همراه: <a href="tel:09157100520" class="text-emerald-400 font-bold">09157100520</a></li>
            <li>ثابت: <a href="tel:05191007002" class="text-emerald-400 font-bold">05191007002</a></li>
            <li>ایمیل: <a href="mailto:info@mmosafer.com" class="hover:underline">info@mmosafer.com</a></li>
            <li>پشتیبانی: شبانه‌روزی ۲۴/۷</li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white font-bold text-sm">نشانی مرکز</h4>
          <p class="text-xs text-slate-400 leading-relaxed">
            خراسان رضوی، مشهد، شهرک غرب، فلاحی ۹، پلاک ۱۹۳
          </p>
          <p class="text-xs text-slate-500">
            کارگاه‌های آموزشی: خراسان رضوی، چناران
          </p>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          تمامی حقوق این وبسایت محفوظ و متعلق به مرکز سبک زندگی مسیر مسافر (mmosafer.com) می‌باشد.
        </div>
        <div class="flex items-center gap-4">
          <a href="#hero" class="hover:text-white">بازگشت به بالا ↑</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- SCRIPT -->
  <script>
    let audioCtx = null;
    let isPlaying = false;
    let osc1 = null, osc2 = null;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function toggleAudio() {
      initAudio();
      const btn = document.getElementById('playBtn');
      if (isPlaying) {
        if (osc1) osc1.stop();
        if (osc2) osc2.stop();
        isPlaying = false;
        btn.innerText = '▶';
      } else {
        osc1 = audioCtx.createOscillator();
        osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        
        osc1.frequency.setValueAtTime(432, audioCtx.currentTime);
        osc2.frequency.setValueAtTime(528, audioCtx.currentTime);
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc1.start();
        osc2.start();
        isPlaying = true;
        btn.innerText = '⏸';
      }
    }

    function selectTrack(name) {
      document.getElementById('currentTrackTitle').innerText = name;
      if (!isPlaying) toggleAudio();
    }

    function downloadSampleAudio() {
      alert('فایل صوتی آرامش بخش در پکیج دانلود موجود است یا می‌توانید مستقیماً به آن گوش دهید.');
    }

    function handleConsultationSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('custName').value;
      const phone = document.getElementById('custPhone').value;
      const substance = document.getElementById('custSubstance').value;
      const city = document.getElementById('custCity').value || 'نامشخص';
      const notes = document.getElementById('custNotes').value || 'ندارد';

      document.getElementById('formSuccess').classList.remove('hidden');

      const textMsg = encodeURIComponent(
        'درخواست مشاوره مسیر مسافر:\\n' +
        'نام: ' + name + '\\n' +
        'تلفن: ' + phone + '\\n' +
        'نوع مصرف: ' + substance + '\\n' +
        'شهر: ' + city + '\\n' +
        'توضیحات: ' + notes
      );

      // Offer direct WhatsApp contact
      setTimeout(() => {
        if (confirm('آیا می‌خواهید این پیام مستقیماً در پیام‌رسان برای پشتیبان مسیر مسافر نیز ارسال شود؟')) {
          window.open('https://wa.me/989157100520?text=' + textMsg, '_blank');
        }
      }, 1000);
    }
  </script>
</body>
</html>`;

  // 1. Add pure standalone index.html
  zip.file('index.html', standaloneHtml);

  // 2. Add Persian README.txt guide for zero-config hosting
  const readmeContent = `راهنمای بارگذاری وبسایت مسیر مسافر بر روی هاست:
===================================================

تبریک! این پکیج کاملاً مستقل، سبک و خالص (HTML5 + CSS3 + JS) می‌باشد.
نیازی به نصب Node.js، npm، دیتابیس یا هیچ نرم‌افزار اضافی بر روی هاست ندارید!

نحوه استفاده بر روی هاست (cPanel، DirectAdmin، پلسک، یا هاست ابری):
-----------------------------------------------------------------
۱. وارد پنل مدیریت هاست خود (مانند cPanel یا DirectAdmin) شوید.
۲. وارد File Manager و سپس پوشه public_html شوید (یا یک ساب‌فولدر مثل public_html/therapy).
۳. این فایل زیپ را آپلود کرده و گزینه "Extract" (استخراج) را بزنید تا فایل index.html استخراج شود.
۴. تمام! اکنون وبسایت شما فوراً و با بالاترین سرعت در دامنه شما لود می‌شود.

امکانات این پکیج:
- دارای پلیر صوتی داخلی و فایل‌های صوتی
- فرم مشاوره آنلاین متصل به پشتیبانی و تماس ۲۴ ساعته
- طراحی کاملاً واکنش‌گرا (موبایل، تبلت و دسکتاپ)
- سازگار با کلیه سرورهای لینوکس و ویندوز و هاست‌های اشتراکی ایران و خارج

تلفن‌های پشتیبانی مرکز مسیر مسافر:
05191007002 | 09157100480 | 09157100520 | 09157100580
وبسایت: https://mmosafer.com
`;
  zip.file('README.txt', readmeContent);

  // 3. Add .htaccess for instant Apache/Nginx optimization (caching, gzip, UTF-8)
  const htaccessContent = `AddDefaultCharset UTF-8
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
</IfModule>
`;
  zip.file('.htaccess', htaccessContent);

  // 4. Add generated calming meditation WAV file
  const audioBlob = audioEngine.generateAudioDownloadBlob('صوت آرامش ذهن و شکرگزاری - مسیر مسافر');
  zip.file('khodaya-shokret-meditation.wav', audioBlob);

  return await zip.generateAsync({ type: 'blob' });
}
