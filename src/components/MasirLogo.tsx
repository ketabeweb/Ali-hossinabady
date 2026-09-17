import React, { useState } from 'react';
import { motion } from 'motion/react';
import { OFFICIAL_LOGO_URL } from '../data/therapyData';

interface MasirLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge';
  lightMode?: boolean;
  animated?: boolean;
}

export const MasirLogo: React.FC<MasirLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  lightMode = false,
  animated = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const subtextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const Emblem = (
    <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md transform group-hover:scale-110 transition-transform duration-300"></div>

      {!imgError ? (
        <img
          src={OFFICIAL_LOGO_URL}
          alt="لوگو رسمی مرکز سبک زندگی مسیر مسافر"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain relative z-10 drop-shadow-md rounded-xl"
        />
      ) : (
        /* Official Geometric Emblem SVG Fallback */
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="goldAccentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="24"
            fill="url(#logoBgGrad)"
            stroke="#60a5fa"
            strokeWidth="2.5"
            strokeOpacity="0.6"
          />
          <circle cx="50" cy="50" r="36" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <path
            d="M32 74 C 42 60, 44 48, 50 32 C 56 48, 58 60, 68 74 Z"
            fill="url(#wingGrad)"
            opacity="0.95"
          />
          <path
            d="M50 20 L53 28 L61 31 L53 34 L50 42 L47 34 L39 31 L47 28 Z"
            fill="url(#goldAccentGrad)"
          />
          <path
            d="M50 46 C 40 38, 22 42, 18 56 C 28 52, 42 54, 50 62 Z"
            fill="url(#wingGrad)"
            opacity="0.85"
          />
          <path
            d="M50 46 C 60 38, 78 42, 82 56 C 72 52, 58 54, 50 62 Z"
            fill="url(#wingGrad)"
            opacity="0.85"
          />
        </svg>
      )}
    </div>
  );

  if (variant === 'icon') {
    return Emblem;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {animated ? (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {Emblem}
        </motion.div>
      ) : (
        Emblem
      )}

      <div className="flex flex-col text-right select-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black ${textSizes[size]} tracking-tight leading-none ${
              lightMode ? 'text-slate-900' : 'text-white'
            }`}
          >
            مسیر مسافر
          </span>
          <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded-sm">
            MMO
          </span>
        </div>

        <span
          className={`${subtextSizes[size]} font-medium mt-1 leading-tight ${
            lightMode ? 'text-slate-500' : 'text-blue-200/90'
          }`}
        >
          مرکز تخصصی روان‌درمانی و سبک زندگی
        </span>
      </div>
    </div>
  );
};
