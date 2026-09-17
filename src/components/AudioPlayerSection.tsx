import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Download, Radio, Sparkles, Music, Check, Headphones } from 'lucide-react';
import { AUDIO_TRACKS } from '../data/therapyData';
import { AudioTrack } from '../types';
import { audioEngine } from '../utils/audioSynth';

export const AudioPlayerSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(AUDIO_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      audioEngine.stop();
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.setVolume(isMuted ? 0 : volume);
      audioEngine.playTrack(currentTrack.id, (secs) => {
        setElapsedSeconds(secs);
      });
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (track: AudioTrack) => {
    if (track.id === currentTrack.id && isPlaying) return;
    setCurrentTrack(track);
    setElapsedSeconds(0);
    audioEngine.stop();
    audioEngine.setVolume(isMuted ? 0 : volume);
    audioEngine.playTrack(track.id, (secs) => {
      setElapsedSeconds(secs);
    });
    setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    audioEngine.setVolume(val);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      audioEngine.setVolume(volume > 0 ? volume : 0.5);
    } else {
      setIsMuted(true);
      audioEngine.setVolume(0);
    }
  };

  const handleDownloadTrack = () => {
    const blob = audioEngine.generateAudioDownloadBlob(currentTrack.title);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTrack.id}-${currentTrack.title.replace(/\s+/g, '-')}.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="audio" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>رادیو مسافر و صوت آرامش ذهن (خدایا شکرت)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            نواهای درمانی، پادکست رهایی و آرامش‌بخش
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            گوش دادن به فرکانس‌های درمانی ۴۳۲ هرتز و فایل‌های صوتی تخصصی سبک زندگی مسافر، تنش‌های عصبی و ولع ذهنی را به شکل چشمگیری مهار می‌کند.
          </p>
        </div>

        {/* Interactive Audio Player Console */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          {/* Active Track Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-800/60">
                  {currentTrack.category}
                </span>
                <span className="text-xs text-slate-400">مدت: {currentTrack.duration}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                {currentTrack.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {currentTrack.subtitle} • <span className="text-emerald-300/80">{currentTrack.speaker}</span>
              </p>
            </div>

            {/* Play & Download Controls */}
            <div className="flex items-center gap-3 self-end md:self-center">
              <button
                id="audio-player-toggle-btn"
                onClick={handleTogglePlay}
                className="w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                aria-label={isPlaying ? 'مکث' : 'پخش'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-[-1px]" />}
              </button>

              <button
                id="audio-player-download-btn"
                onClick={handleDownloadTrack}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold px-4 py-3.5 rounded-2xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                title="دانلود فایل صوتی برای پخش آفلاین"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>دانلود شد!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>دانلود صوت</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Animated Waveform Visualizer & Progress */}
          <div className="py-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>زمان سپری شده: {formatTime(elapsedSeconds)}</span>
              <span className="text-emerald-400 font-bold">{isPlaying ? 'در حال پخش فرکانس آرامش' : 'آماده پخش'}</span>
              <span>مدت کل: {currentTrack.duration}</span>
            </div>

            {/* Waveform bars */}
            <div className="h-14 bg-slate-950/80 rounded-2xl px-4 flex items-center justify-center gap-1.5 border border-slate-800/80 overflow-hidden">
              {Array.from({ length: 28 }).map((_, idx) => {
                const heightClass = isPlaying
                  ? idx % 5 === 0 ? 'animate-wave-1' : idx % 5 === 1 ? 'animate-wave-2' : idx % 5 === 2 ? 'animate-wave-3' : idx % 5 === 3 ? 'animate-wave-4' : 'animate-wave-5'
                  : 'h-1.5 opacity-30';
                return (
                  <div
                    key={idx}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      idx < 14 ? 'bg-emerald-500' : 'bg-teal-400'
                    } ${heightClass}`}
                  ></div>
                );
              })}
            </div>

            {/* Volume & Details Bar */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleMute}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="قطع و وصل صدا"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 sm:w-32 accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="text-xs text-slate-400 hidden sm:block">
                موتور صوتی سبک زندگی مسیر مسافر (بدون نیاز به اینترنت خارجی)
              </div>
            </div>
          </div>

          {/* Playlist Track Selection Grid */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">لیست فایل‌های صوتی و جلسات رادیو مسافر:</span>
              <span className="text-xs text-slate-500">انتخاب کنید تا بلافاصله پخش شود</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {AUDIO_TRACKS.map((track, index) => {
                const isSelected = track.id === currentTrack.id;
                return (
                  <div
                    key={track.id}
                    id={`track-item-${track.id}`}
                    onClick={() => handleSelectTrack(track)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-right ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                        : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">۰{index + 1}.</span>
                        <div className="font-bold text-xs sm:text-sm">{track.title}</div>
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{track.subtitle}</div>
                    </div>
                    
                    <div className="text-left shrink-0 mr-3">
                      <span className="text-xs font-mono text-emerald-400 block">{track.duration}</span>
                      {isSelected && isPlaying && (
                        <span className="text-[10px] text-emerald-300 font-bold animate-pulse">پخش...</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Therapy Insight Footer */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-200/90 leading-relaxed">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-bold block mb-0.5">تاثیر اثبات‌شده صوت‌درمانی بر سیستم لیمبیک:</strong>
              شنیدن روزانه این فایل‌ها همراه با تنفس دیافراگمی، ترشح کورتیزول (هورمون استرس) را تا ۴۵٪ کاهش داده و تمرکز فرد را بر تعهد به پاکی تقویت می‌کند.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
