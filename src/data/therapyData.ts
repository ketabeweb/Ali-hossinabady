import { AudioTrack, ServiceItem, TestimonialItem, FaqItem, PillarItem, GalleryItem } from '../types';

export const CONTACT_INFO = {
  phonePrimary: '09157100520',
  phoneSecondary: '05191007002',
  phoneMobile1: '09157100480',
  phoneMobile2: '09157100520',
  phoneMobile3: '09157100580',
  phoneLandline: '05191007002',
  phoneDisplayPrimary: '09157100520',
  phoneDisplaySecondary: '05191007002',
  phoneDisplayMobile1: '09157100480',
  phoneDisplayMobile2: '09157100520',
  phoneDisplayMobile3: '09157100580',
  phonesList: [
    { number: '05191007002', label: 'تلفن ثابت دفتر مرکزی مشهد', type: 'landline' },
    { number: '09157100480', label: 'مشاوره تلفنی تخصصی (خط ۱)', type: 'mobile' },
    { number: '09157100520', label: 'مشاور ارشد و پشتیبانی ۲۴ ساعته (خط اصلی)', type: 'mobile', isPrimary: true },
    { number: '09157100580', label: 'مشاوره تلفنی تخصصی (خط ۳)', type: 'mobile' },
  ],
  email: 'info@mmosafer.com',
  address: 'خراسان رضوی، مشهد، شهرک غرب، فلاحی ۹، پلاک ۱۹۳',
  branch: 'مرکز کارگاه‌های آموزشی: خراسان رضوی، چناران',
  workingHours: 'پاسخگویی و پشتیبانی شبانه‌روزی (۲۴ ساعته / ۷ روز هفته)',
  whatsappNumber: '989157100520',
  eitaaGroup: 'https://eitaa.com/joinchat/3340436256C1e8391458f',
  eitaaChannel: 'https://eitaa.com/mmosafer',
  telegramChannel: 'https://t.me/mmosafer',
  instagram: 'https://instagram.com/mmosafer',
  website: 'https://mmosafer.com',
  therapyUrl: 'https://mmosafer.com/therapy/'
};

// Official Assets provided by user
export const OFFICIAL_BOOK_IMAGE_URL = 'https://mmosafer.com/wp-content/uploads/2018/11/%D9%85%D9%88%DA%A9%D8%A7%D9%BE1-794x1024.png.webp';
export const OFFICIAL_LOGO_URL = 'https://mmosafer.com/wp-content/uploads/2026/07/cropped-cropped-%D9%84%D9%88%DA%AF%D9%88-%D9%85%D8%B3%DB%8C%D8%B1-%D9%85%D8%B3%D8%A7%D9%81%D8%B1-1.png.webp';
export const OFFICIAL_VIDEO_URL = 'https://mmosafer.com/wp-content/uploads/2026/08/%D9%82%D8%AF%D8%B1.mp4';
export const OSTAD_MOSAFER_VIDEO_URL = 'https://mmosafer.com/wp-content/uploads/2026/08/%D9%82%D8%AF%D8%B1.mp4';

// 80% Free Services Transparency breakdown
export const FREE_SERVICES_DATA = {
  percentageFree: 80,
  headline: '۸۰٪ خدمات مشاوره، روان‌درمانی و پشتیبانی کاملاً رایگان است',
  subheadline: 'رسالت سازمان مردم‌نهاد مسیر مسافر، نجات انسان‌ها از تاریکی اعتیاد بدون هیچ‌گونه سوءاستفاده مالی است.',
  freeItems: [
    {
      title: 'مشاوره اولیه تلفنی و بالینی',
      description: 'بررسی وضعیت فیزیولوژیک، سابقه و تعیین پله‌های کاهش بدون پرداخت یک ریال هزینه.',
      isFree: true
    },
    {
      title: 'پشتیبانی و خط نجات ۲۴ ساعته',
      description: 'پاسخگویی شبانه‌روزی مربیان و روانشناسان در لحظات بحران و وسوسه.',
      isFree: true
    },
    {
      title: 'کارگاه‌های آنلاین هفتگی و پادکست‌های رهایی',
      description: 'دسترسی نامحدود به صوت‌های آرامش ذهن، مدیتیشن شکرگزاری و رادیو مسافر.',
      isFree: true
    },
    {
      title: 'مشاوره و توانمندسازی خانواده‌ها (همسفران)',
      description: 'آموزش رفتارهای درست به همسر و والدین برای خاموش کردن تنش‌های درون خانه.',
      isFree: true
    }
  ],
  minimalFeeItems: [
    {
      title: 'تنها ۲۰٪ خدمات شامل بهای تمام‌شده است:',
      description: 'صرفاً هزینه چاپ فیزیکی کتاب قطور «چهل پله چهل راه» و بسته‌بندی و ارسال پستی به درب منزل، یا شرکت در کارگاه‌های اسکان حضوری ویژه.'
    }
  ]
};

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'صوت آرامش ذهن و شکرگزاری (خدایا شکرت)',
    subtitle: 'انرژی مثبت و پاکسازی ذهن از اضطراب و ولع',
    duration: '۰۳:۴۵',
    durationSeconds: 225,
    category: 'مدیتیشن و شکرگزاری',
    description: 'تمرین تنفس عمیق، بازیابی آرامش درونی و شکرگزاری روزانه برای عبور از حالات آشفتگی فکری و ایجاد تاب‌آوری عصبی.',
    speaker: 'استاد مسافر - سبک زندگی مسیر مسافر'
  },
  {
    id: 'track-2',
    title: 'جلسه اول تراپی: ریشه‌یابی و شناخت مکانیسم وابستگی',
    subtitle: 'آشنایی با روان‌درمانی ریشه‌ای به جای رفتارهای واکنشی',
    duration: '۰۵:۲۰',
    durationSeconds: 320,
    category: 'روان‌درمانی بالینی',
    description: 'چرا قطع ناگهانی منجر به شکست می‌شود؟ در این جلسه به بررسی علل بنیادین نوروفیزیولوژیک و روانی وابستگی می‌پردازیم.',
    speaker: 'تیم روان‌درمانگران بالینی مسیر مسافر'
  },
  {
    id: 'track-3',
    title: 'جلسه دوم تراپی: تغییر باورها و بازسازی شناختی (CBT)',
    subtitle: 'شکستن الگوهای خودتخریبی و افکار خودکار منفی',
    duration: '۰۴:۵۰',
    durationSeconds: 290,
    category: 'رفتاردرمانی شناختی',
    description: 'آموزش عملی شناسایی جرقه‌ها (Triggers) و تغییر مسیر هیجانی بدون پناه بردن به مواد یا رفتارهای وسواسی.',
    speaker: 'مشاور ارشد خانواده و اعتیاد'
  },
  {
    id: 'track-4',
    title: 'رادیو مسافر: عبور هوشمندانه از قفس طلایی متادون و B2',
    subtitle: 'روش کاهش پله‌ای و بدون خماری داروهای نگهدارنده',
    duration: '۰۶:۱۵',
    durationSeconds: 375,
    category: 'رادیو مسافر',
    description: 'بررسی علمی خطرات وابستگی مزمن به شربت متادون و قرص B2، و نحوه صفر کردن ایمن آن با متد MMO در خانه.',
    speaker: 'رادیو مسافر - پادکست رهایی'
  }
];

export const METHOD_PILLARS: PillarItem[] = [
  {
    number: '۰۱',
    title: 'درمان تدریجی و فیزیولوژیک (بدون شوک)',
    subtitle: 'بازسازی سیستم تولید اپیوئیدهای طبیعی بدن (اندورفین و دوپامین)',
    description: 'در روش MMO به جای قطع ناگهانی و سقوط آزاد که باعث تخریب سیستم عصبی، دردهای استخوانی و اضطراب حاد می‌شود، کاهش پلکانی هوشمندانه صورت می‌گیرد تا غدد درون‌ریز بدن مجدداً فعال شوند.',
    iconName: 'Activity',
    points: [
      'بدون نیاز به بستری شدن در کمپ‌های اجباری',
      'حفظ روال عادی شغل، کسب‌وکار و زندگی روزمره',
      'عدم تجربه خماری حاد، بی‌قراری و تب و لرز'
    ]
  },
  {
    number: '۰۲',
    title: 'روان‌درمانی فردی و شناختی (CBT)',
    subtitle: 'درمان علت روانی نه فقط حذف نشانه ظاهری',
    description: 'مصرف مواد تنها یک مسکّن موقت برای دردهای عمیق‌تر روانی مانند تروما، تنهایی، اضطراب یا احساس بی‌ارزشی است. در جلسات تراپی، ریشه احساسی مصرف شناسایی و ترمیم می‌شود.',
    iconName: 'Brain',
    points: [
      'شناسایی و خنثی‌سازی جرقه‌های روانی و وسوسه (Craving)',
      'تکنیک‌های مدیریت استرس، خشم و افکار نشخوارکننده',
      'بازسازی عزت‌نفس و بازگشت اعتمادبه‌نفس پایدار'
    ]
  },
  {
    number: '۰۳',
    title: 'همراهی همسفران و خانواده‌درمانی',
    subtitle: 'ترمیم کانون خانواده و ایجاد بستر امن حمایتی',
    description: 'اعتیاد یک بیماری خانوادگی است و خانواده‌ها به اندازه فرد مصرف‌کننده آسیب دیده‌اند. ما جلسات اختصاصی برای خانواده (همسفران) برگزار می‌کنیم تا بستر پذیرش و حمایت مهیا شود.',
    iconName: 'HeartHandshake',
    points: [
      'آموزش رفتارهای صحیح و توقف کنترل‌گری آسیب‌زا',
      'رفع تنش‌ها و سوءتفاهم‌های طولانی‌مدت زناشویی',
      'ساختن فضایی امن و سرشار از آرامش در خانه'
    ]
  },
  {
    number: '۰۴',
    title: 'کتاب چهل پله و تحول سبک زندگی',
    subtitle: 'بازسازی جهان‌بینی، معنویت فردی و شکرگزاری',
    description: 'رهایی ماندگار نیازمند تغییر جهان‌بینی فرد است. با استفاده از آموزه‌های کتاب چهل پله چهل راه و تمرین‌های شکرگزاری روزانه، رهجو هدفی تازه و لذتی حقیقی در زندگی پاک کشف می‌کند.',
    iconName: 'BookOpen',
    points: [
      'گام‌های عملی ۴۰ پله برای انضباط فردی و اخلاقی',
      'تمرین روزانه شکرگزاری و پیوند مجدد با خویشتن',
      'عضویت دائمی در حلقه حمایتی رهجویان رها شده'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'مشاوره و روان‌درمانی آنلاین فردی',
    subtitle: 'ارتباط مستقیم با متخصص درمانگر اعتیاد',
    description: 'جلسات منظم خصوصی و کاملاً محرمانه از طریق تماس صوتی یا تصویری امن بدون خروج از منزل، برای بررسی روند کاهش پله‌ها و درمان حالات خلقی.',
    features: ['ارزیابی اولیه بالینی و تعیین سطح وابستگی', 'برنامه شخصی‌سازی شده گام‌به‌گام', 'پیگیری مداوم روزانه'],
    iconName: 'UserCheck',
    badge: 'پرمتقاضی‌ترین خدمت',
    highlight: true
  },
  {
    id: 'srv-2',
    title: 'گروه‌درمانی آنلاین همسفران و مسافران',
    subtitle: 'حلقه اشتراک تجربه و انرژی جمعی',
    description: 'جلسات هفتگی گروهی با حضور رهجویان موفق و اساتید مجرب برای بیان دغدغه‌ها، دریافت انگیزه و تقویت باور رهایی پایدار.',
    features: ['شنیدن تجربیات رهجویان باسابقه پاکی بالا', 'ایجاد احساس تعلق و رفع انزوا', 'آموزش مهارت‌های ارتباطی'],
    iconName: 'Users'
  },
  {
    id: 'srv-3',
    title: 'مشاوره تخصصی زوجین و خانواده',
    subtitle: 'احیای عشق و پیوند پس از سال‌ها آسیب',
    description: 'ترمیم رابطه زناشویی، برگرداندن اعتماد از دست رفته، و آموزش الگوهای سالم رفتاری به همسران جهت عبور آرام از بحران.',
    features: ['بازسازی اعتماد و امنیت عاطفی', 'رفع الگوهای وابستگی متقابل (Codependency)', 'جلسات صمیمی دونفره'],
    iconName: 'Heart'
  },
  {
    id: 'srv-4',
    title: 'مشاوره طب سنتی و پاکسازی کبد',
    subtitle: 'دفع سموم انباشته و تقویت عمومی بدن',
    description: 'استفاده از تدابیر تغذیه‌ای، دمنوش‌های آرام‌بخش گیاهی، تعدیل مزاج و پاکسازی سموم بدن برای کاهش کوفتگی و بهبود خواب طبیعی.',
    features: ['تعدیل اخلاط و پاکسازی کبد چرب', 'بهبود خواب عمیق بدون قرص‌های خواب‌آور', 'تقویت نیروی جسمانی و انرژی حیاتی'],
    iconName: 'Sparkles'
  },
  {
    id: 'srv-5',
    title: 'دوره شکرگزاری و کتاب ۴۰ پله ۴۰ راه',
    subtitle: 'برنامه تحول معنوی و انضباط ذهنی',
    description: 'یک نقشه راه مدون برای رسیدن به تعادل روانی، بخشش گذشته، افزایش احساس رضایت از زندگی و شکرگزاری برای سلامتی بازیافته.',
    features: ['ارائه کتاب اختصاصی و فایل‌های صوتی', 'تمرین‌های روزانه ثبت وقایع مثبت', 'توسعه فردی و معنوی عمیق'],
    iconName: 'Compass'
  },
  {
    id: 'srv-6',
    title: 'پشتیبانی و پاسخگویی ۲۴ ساعته شبانه‌روزی',
    subtitle: 'ما در هیچ ساعتی از شبانه‌روز شما را تنها نمی‌گذاریم',
    description: 'در لحظات بحرانی، هجوم افکار منفی یا بروز وسوسه، کارشناسان پشتیبان مرکز در دسترس شما هستند تا با همراهی تلفنی مانع از لغزش شوند.',
    features: ['خط تلفن اختصاصی مشاوره فوری', 'همراهی مربی اختصاصی (راهنما)', 'آرامش خاطر کامل برای خانواده'],
    iconName: 'Clock'
  }
];

export const COMPARISON_DATA = [
  {
    metric: 'نحوه شروع درمان',
    mmo: 'در محیط امن خانه، بدون ترک شغل و خانواده',
    traditional: 'بستری اجباری در کمپ، قطع ارتباط با جامعه',
    advantage: true
  },
  {
    metric: 'درد و علائم خماری',
    mmo: 'بدون درد، بدون خماری و با کاهش مهندسی شده',
    traditional: 'دردهای طاقت‌فرسا، بی‌قراری شدید، تشنج و زجر بدنی',
    advantage: true
  },
  {
    metric: 'هزینه و از کار افتادگی',
    mmo: 'بسیار اقتصادی، بدون مرخصی اجباری و هزینه بستری',
    traditional: 'هزینه‌های هنگفت مکرر و از دست رفتن موقعیت شغلی',
    advantage: true
  },
  {
    metric: 'ریشه‌یابی روان‌شناختی',
    mmo: 'روان‌درمانی عمیق CBT، تغییر باورها و خودشناسی',
    traditional: 'صرفاً حبس فیزیکی بدون کار بر روی ریشه‌های ذهنی',
    advantage: true
  },
  {
    metric: 'احتمال بازگشت (عود مجدد)',
    mmo: 'نزدیک به صفر با تضمین اصلاح جهان‌بینی و سبک زندگی',
    traditional: 'بیش از ۸۵٪ بازگشت بلافاصله پس از ترخیص از کمپ',
    advantage: true
  },
  {
    metric: 'پشتیبانی و خانواده‌درمانی',
    mmo: '۲۴ ساعته تلفنی همراه با آموزش کامل همسفران',
    traditional: 'عدم پاسخگویی پس از خروج و بی‌توجهی به خانواده',
    advantage: true
  }
];

export const BOOK_IMAGE_URL = OFFICIAL_BOOK_IMAGE_URL;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'کتاب اختصاصی «چهل پله چهل راه»',
    category: 'book',
    badge: 'منبع آموزشی اختصاصی',
    imageUrl: OFFICIAL_BOOK_IMAGE_URL,
    fullImageUrl: OFFICIAL_BOOK_IMAGE_URL,
    description: 'کتاب تحول جهان‌بینی و اصلاح سبک زندگی تالیف مرکز مسیر مسافر مشهد برای خودشناسی و عبور امن از بحران اعتیاد.',
    date: 'تالیف و چاپ اختصاصی',
    author: 'مرکز مسیر مسافر'
  },
  {
    id: 'gal-2',
    title: 'دست‌نوشته و سپاس‌نامه رهایی مسافر علیرضا',
    category: 'testimonial',
    badge: 'سند رضایت رهجو',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s1200',
    description: 'ابراز خشنودی و دل‌نوشته مسافر از تجربه قطع وابستگی با متد علمی MMO بدون درد و خماری در خانه.',
    date: 'اردیبهشت ۱۴۰۴',
    author: 'رهجو علیرضا (مشهد)'
  },
  {
    id: 'gal-3',
    title: 'تقدیرنامه و پیام آرامش خانواده همسفر',
    category: 'testimonial',
    badge: 'رضایت همسفران',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTV_WvYIkw0KpDMRPUb9gDGDI5xSgURnqSesCkQQwCEUMHj_g4_jCFX8aGWDOE58hSKAtIqRP_EmcD2VobTlf9sC2hZvJBcRsiyR_v3ueupGFZwBcpx2tJa64-cU5nwWIrTY=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTV_WvYIkw0KpDMRPUb9gDGDI5xSgURnqSesCkQQwCEUMHj_g4_jCFX8aGWDOE58hSKAtIqRP_EmcD2VobTlf9sC2hZvJBcRsiyR_v3ueupGFZwBcpx2tJa64-cU5nwWIrTY=s1200',
    description: 'سپاسگزاری صمیمانه همسر رهجو از کارگاه‌های آنلاین و بازگشت سلامت روان و لبخند به محیط خانواده.',
    date: 'دی ۱۴۰۳',
    author: 'همسفر فاطمه س.'
  },
  {
    id: 'gal-4',
    title: 'گواهی پایان دوره و رهایی دائم',
    category: 'certificate',
    badge: 'گواهی رسمی رهایی',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v2dkJirIwp2t09s2L1FvID7Hg4nRRD3CLNBtNOKxXHz6eB0s7w4X2_q_SbDMKO8sREGAA4etbvEngLD7WYckG19UIdi4rY9moXUWdVHkj-5-4SDzI1LiSgPKmgU5lfzFd3yZ8ot0yLi9TkRvfNdqmXVi-xvu8W7Br2tY73eAM7S21plswqzusNCQiw9mH6pb5AR90okBCi7mgZ3rw3Ijn3HXcgqfNl9aIzbEDJb5O4mT-BYec0kglSHBds-gj-a3FxUUslmS9pz-HO5nOn3G7oxKc8slzqNEnQoyP0uu3F1O8DIqidXOxNRG05ex1_cvE=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v2dkJirIwp2t09s2L1FvID7Hg4nRRD3CLNBtNOKxXHz6eB0s7w4X2_q_SbDMKO8sREGAA4etbvEngLD7WYckG19UIdi4rY9moXUWdVHkj-5-4SDzI1LiSgPKmgU5lfzFd3yZ8ot0yLi9TkRvfNdqmXVi-xvu8W7Br2tY73eAM7S21plswqzusNCQiw9mH6pb5AR90okBCi7mgZ3rw3Ijn3HXcgqfNl9aIzbEDJb5O4mT-BYec0kglSHBds-gj-a3FxUUslmS9pz-HO5nOn3G7oxKc8slzqNEnQoyP0uu3F1O8DIqidXOxNRG05ex1_cvE=s1200',
    description: 'ثبت نتیجه منفی تست‌های بالینی و اعطای گواهی افتخار رهایی از وابستگی به مواد پس از طی ۴۰ پله.',
    date: 'تیر ۱۴۰۳',
    author: 'کمیته ارزیابی مسیر مسافر'
  },
  {
    id: 'gal-5',
    title: 'دل‌نوشته رهجو پس از سال‌ها تاریکی',
    category: 'testimonial',
    badge: 'مستند تحول',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4s2OyVxZaR4E9h5h99YTQ8c7KKuE4bm-MnCMIoB1WTKwWmRJldYVCH_9vgIsLysVSUOT4Wu3CDwYVJRwxWl8-MRZWdf9XgxLC3-3IPfQRgWsomN5wm8CINEw_3IHUx1AbCXKAkkwBV03AfjGooOV7i2paJxFXTLA987sXOifuxj9ESJNt8JIwg7PmiYh_p0evHZi_Mun0jrSKmBGjWL9Rj6RUCAvHtCaPIc2fIfzVwtCS_50OpaKD3_Te1HtsXWi2HBAjuUlRP-MTQtO6DjZm3hUOWI_okdDQzgMlJMAQmntRMCjaC5uL6QWK6gvwJelao=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4s2OyVxZaR4E9h5h99YTQ8c7KKuE4bm-MnCMIoB1WTKwWmRJldYVCH_9vgIsLysVSUOT4Wu3CDwYVJRwxWl8-MRZWdf9XgxLC3-3IPfQRgWsomN5wm8CINEw_3IHUx1AbCXKAkkwBV03AfjGooOV7i2paJxFXTLA987sXOifuxj9ESJNt8JIwg7PmiYh_p0evHZi_Mun0jrSKmBGjWL9Rj6RUCAvHtCaPIc2fIfzVwtCS_50OpaKD3_Te1HtsXWi2HBAjuUlRP-MTQtO6DjZm3hUOWI_okdDQzgMlJMAQmntRMCjaC5uL6QWK6gvwJelao=s1200',
    description: 'شرح احوالات درونی و احساس آزادی دوباره پس از درمان بدون نیاز به ایزوله‌شدن در کمپ‌های سنتی.',
    date: 'شهریور ۱۴۰۴',
    author: 'مسافر سعید'
  },
  {
    id: 'gal-6',
    title: 'جلسه حضوری شکرگزاری و حلقه‌های محبت',
    category: 'session',
    badge: 'کارگاه آموزشی',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4tuHEJLKxGEdUqeufouxsGtm5sk2iMtFck_6cMbokse-9oDOL4CScGxl27seKn2TVqwsdvvLBrIwd5TINmMMlJy2KyFHIMXATIfF3dxHPI_dsyWhpq-gJJ2QnTKn_g_2brSgkWHsjcm6rCTENQpkMvEPoDT66mNMRCzJmsZr2QUKeLAFWzBN5cCZNzz3cDVm5TNhYjFnlODieztMqwkAH26QDP3uoj4jJA_KqS8x60X3r_3vkPctN80NuvSZNHHCOPCxxVi9wvOYoJW3P6aEZs1c5hbVFz8QWJmVYyGYo7vqwbE9mAr9x05KrgxDA2Ovtc=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4tuHEJLKxGEdUqeufouxsGtm5sk2iMtFck_6cMbokse-9oDOL4CScGxl27seKn2TVqwsdvvLBrIwd5TINmMMlJy2KyFHIMXATIfF3dxHPI_dsyWhpq-gJJ2QnTKn_g_2brSgkWHsjcm6rCTENQpkMvEPoDT66mNMRCzJmsZr2QUKeLAFWzBN5cCZNzz3cDVm5TNhYjFnlODieztMqwkAH26QDP3uoj4jJA_KqS8x60X3r_3vkPctN80NuvSZNHHCOPCxxVi9wvOYoJW3P6aEZs1c5hbVFz8QWJmVYyGYo7vqwbE9mAr9x05KrgxDA2Ovtc=s1200',
    description: 'تصویر دورهمی صمیمی رهجویان بهبودیافته و خانواده‌ها در مرکز آموزشی مسیر مسافر خراسان رضوی.',
    date: 'پاییز ۱۴۰۴',
    author: 'شعبه مرکزی چناران و مشهد'
  },
  {
    id: 'gal-7',
    title: 'جشن پاکی و اهدای گل سلامتی',
    category: 'session',
    badge: 'جشن رهایی',
    imageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4u0LgwmjPomUIwraPXhPJvnkC8MCN5S0fh9-V6IMP3J22N72n0K8a73i7jtUhjvE22viWJWRUmzE4EN04EpptEtZbIokSpPoannJJlSG9HH0J0GoKk_PRKbpryszQeyDSRt5SPO_0inT-BbDwymhXnJgQE48Wq91Di_ZzG9UQmdvC6XBC1t2dpGr8r3bpou5s5IWxiuP_75RbSwC0tjDsGd7jEuT7yUgrbpEYcYfcyWFdJ5CSuTPY4mrK5Xvi-i2VD4sH1NIXYBGjg94M4Gj3fJP23EWXRBCR1Eh1V44PpJ9gxtiS5WXhdc3imIaQ5U-0E=s330-c',
    fullImageUrl: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4u0LgwmjPomUIwraPXhPJvnkC8MCN5S0fh9-V6IMP3J22N72n0K8a73i7jtUhjvE22viWJWRUmzE4EN04EpptEtZbIokSpPoannJJlSG9HH0J0GoKk_PRKbpryszQeyDSRt5SPO_0inT-BbDwymhXnJgQE48Wq91Di_ZzG9UQmdvC6XBC1t2dpGr8r3bpou5s5IWxiuP_75RbSwC0tjDsGd7jEuT7yUgrbpEYcYfcyWFdJ5CSuTPY4mrK5Xvi-i2VD4sH1NIXYBGjg94M4Gj3fJP23EWXRBCR1Eh1V44PpJ9gxtiS5WXhdc3imIaQ5U-0E=s1200',
    description: 'لحظه شیرین رهایی نهایی و آغاز فصل نوین زندگی در سایه روش درمانی دانش‌بنیان مسیر مسافر.',
    date: 'اسفند ۱۴۰۳',
    author: 'جامعه مسافران رها یافته'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'رهجو علیرضا م.',
    city: 'مشهد مقدس',
    recoveryDuration: '۴ سال رهایی کامل',
    substance: 'متادون و تریاک',
    quote: 'من ۶ بار کمپ رفتم و هر بار با حال بدتر برگشتم. زندگی‌ام در آستانه فروپاشی بود. متد مسیر مسافر به من نشان داد که با علم و شیوه‌نامه درست می‌توان بدون یک روز استراحت اجباری یا درد، پاک شد. الان ۴ ساله حتی به سیگار هم دست نزدم.',
    audioDuration: '۰۱:۱۵',
    date: 'اردیبهشت ۱۴۰۴',
    imageAttachment: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sppc7FF7ZXDOefOziTTB6OC0xYMwnWHeqXmrCsE8u6Gcq8-JiZD9Y7q_JQZlvkxgnk9qO5hJ1w54lB9INa64bAH0GKHDjqQbEBUhyUMJz_8PS377Uon9OwGbiHwEm8NJe6-iQ4lpXgGpGWsP-g-LleomakS_SCR-9TpENikGOAwPbSjZGhJZyWTTtxA8xP-qQySm5mvCCSk4enaSxvndGKoGcrwmlavHHbJrRKx7tmuni3HjWOkyalAhd28G8IYyQMd7zxGIo4Vnbqqzo0NGIGA5AoehJ--8s8TIWyBytTKf0IXG58nQU-bHBRNJZJdZg=s330-c',
    imageCaption: 'دست‌نوشته و رضایت‌نامه رهایی'
  },
  {
    id: 'test-2',
    name: 'همسفر فاطمه س. (همسر رهجو)',
    city: 'تهران',
    recoveryDuration: '۳ سال آرامش در خانواده',
    substance: 'قرص ب۲ و مواد صنعتی',
    quote: 'به عنوان یک همسر، سال‌ها با استرس و اضطراب زندگی کردم. کلاس‌های گروهی همسفران مسیر مسافر چشمان من را به حقایق بیماری اعتیاد باز کرد. رفتار من تغییر کرد و شوهرم توانست در خانه آرامش پیدا کند و درمان شود.',
    audioDuration: '۰۱:۴۵',
    date: 'دی ۱۴۰۳',
    imageAttachment: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4sbqkI7M_4hSD72EpbKSeD348s2zkdW6EFnc_eyzGYJ7a8pka3xKR2EfZpwCniy39ZCVkmKzMghMjPNjBupYjGCby3ej-YPQyT7kjnz-KCKZkrzEK9x_tmhvL1StOlQS-za0eNmYmnI3_BuIguvcLbBnzoSPi7FGprm_0GaGRJX0k7qjLu5gNrOc2Q4TzEbTV_WvYIkw0KpDMRPUb9gDGDI5xSgURnqSesCkQQwCEUMHj_g4_jCFX8aGWDOE58hSKAtIqRP_EmcD2VobTlf9sC2hZvJBcRsiyR_v3ueupGFZwBcpx2tJa64-cU5nwWIrTY=s330-c',
    imageCaption: 'سپاس‌نامه خانواده همسفر'
  },
  {
    id: 'test-3',
    name: 'رهجو مهرداد ک.',
    city: 'اصفهان',
    recoveryDuration: '۲ سال و نیم رهایی',
    substance: 'شیره و ترامادول',
    quote: 'بزرگترین ترسم این بود که کارم را در بازار از دست بدهم چون نمی‌توانستم حتی ۳ روز تعطیل کنم. مشاوران مسیر مسافر با پشتیبانی ۲۴ ساعته کاری کردند که بدون افت راندمان کاری، پله به پله مصرفم صفر شد.',
    audioDuration: '۰۲:۱۰',
    date: 'مهر ۱۴۰۴',
    imageAttachment: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4v2dkJirIwp2t09s2L1FvID7Hg4nRRD3CLNBtNOKxXHz6eB0s7w4X2_q_SbDMKO8sREGAA4etbvEngLD7WYckG19UIdi4rY9moXUWdVHkj-5-4SDzI1LiSgPKmgU5lfzFd3yZ8ot0yLi9TkRvfNdqmXVi-xvu8W7Br2tY73eAM7S21plswqzusNCQiw9mH6pb5AR90okBCi7mgZ3rw3Ijn3HXcgqfNl9aIzbEDJb5O4mT-BYec0kglSHBds-gj-a3FxUUslmS9pz-HO5nOn3G7oxKc8slzqNEnQoyP0uu3F1O8DIqidXOxNRG05ex1_cvE=s330-c',
    imageCaption: 'گواهی پایان دوره و رهایی دائم'
  },
  {
    id: 'test-4',
    name: 'رهجو سعید ر.',
    city: 'شیراز',
    recoveryDuration: '۵ سال رهایی',
    substance: 'مواد محرک و الکل',
    quote: 'کتاب چهل پله چهل راه تمام ذهنیت من را نسبت به خدا، خودم و زندگی زیر و رو کرد. اعتیاد برای من یک تاریکی بود، اما مسیر مسافر نوری شد که هنوز هم در تمام تصمیماتم از آن راهنمایی می‌گیرم.',
    audioDuration: '۰۱:۳۰',
    date: 'آبان ۱۴۰۴',
    imageAttachment: 'https://lh3.googleusercontent.com/chat_attachment/AP1Ws4s2OyVxZaR4E9h5h99YTQ8c7KKuE4bm-MnCMIoB1WTKwWmRJldYVCH_9vgIsLysVSUOT4Wu3CDwYVJRwxWl8-MRZWdf9XgxLC3-3IPfQRgWsomN5wm8CINEw_3IHUx1AbCXKAkkwBV03AfjGooOV7i2paJxFXTLA987sXOifuxj9ESJNt8JIwg7PmiYh_p0evHZi_Mun0jrSKmBGjWL9Rj6RUCAvHtCaPIc2fIfzVwtCS_50OpaKD3_Te1HtsXWi2HBAjuUlRP-MTQtO6DjZm3hUOWI_okdDQzgMlJMAQmntRMCjaC5uL6QWK6gvwJelao=s330-c',
    imageCaption: 'دل‌نوشته و مستند بهبود'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'method',
    question: 'آیا واقعاً ترک اعتیاد بدون درد و بدون خماری ممکن است؟',
    answer: 'بله کاملاً. وقتی کاهش مواد به شکل علمی، حساب‌شده و پله‌پله انجام شود، مغز فرصت می‌کند گیرنده‌های طبیعی ضددرد (اندورفین و انکفالین) خود را آرام‌آرام احیا کند. درد و خماری شدید تنها نتیجه قطع ناگهانی و سقوط آزاد است که متد MMO صراحتاً آن را رد می‌کند.'
  },
  {
    id: 'faq-2',
    category: 'privacy',
    question: 'آیا جلسات و مشخصات من کاملاً محرمانه باقی می‌ماند؟',
    answer: '۱۰۰٪ محرمانه. اصل بنیادین در سبک زندگی مسیر مسافر حفظ کرامت انسانی و رازداری مطلق است. هیچ‌گونه مشخصات هویتی، پرونده اداری یا گزارشی ثبت یا افشا نخواهد شد و شما حتی می‌توانید با نام مستعار در مشاوره‌ها شرکت کنید.'
  },
  {
    id: 'faq-3',
    category: 'method',
    question: 'درمان چه مدت زمان می‌برد و آیا نیاز به ترک کار دارم؟',
    answer: 'طول دوره بسته به ماده مصرفی، مقدار و سابقه فرد تنظیم می‌شود اما ویژگی بی‌نظیر این شیوه این است که شما در تمام طول درمان به شغل، بیزینس و زندگی روزمره خود ادامه می‌دهید و نیازی به مرخصی گرفتن یا بستری شدن ندارید.'
  },
  {
    id: 'faq-4',
    category: 'cost',
    question: 'هزینه‌های مشاوره و درمان به چه صورت است؟',
    answer: 'مشاوره اولیه تلفنی به صورت کاملاً رایگان ارائه می‌شود تا وضعیت شما بررسی گردد. بسته‌ها و خدمات درمانی نیز بسیار مقرون‌به‌صرفه طراحی شده‌اند تا بار مالی سنگین کمپ‌ها یا کلینیک‌های پرهزینه خصوصی به خانواده‌ها تحمیل نشود.'
  },
  {
    id: 'faq-5',
    category: 'family',
    question: 'نقش خانواده (همسفران) در این مسیر چیست؟',
    answer: 'خانواده بال پرواز مسافر است. با آموزش صحیح به اعضای خانواده، تنش‌ها و بگومگوها حذف شده و خانه تبدیل به محیطی آرام، انگیزه‌بخش و پناهگاهی امن برای رهایی دائمی فرد مصرف‌کننده می‌گردد.'
  },
  {
    id: 'faq-6',
    category: 'method',
    question: 'چگونه می‌توانم مشاوره رایگان را شروع کنم؟',
    answer: 'کافیست فرم رزرو مشاوره در پایین صفحه را پر کنید یا مستقیماً با شماره تلفن‌های 09157100520 یا 05191007002 تماس بگیرید. کارشناسان ما به صورت شبانه‌روزی آماده پاسخگویی هستند.'
  }
];
