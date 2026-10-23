import React, { useEffect } from 'react';
import { X, Play, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { MediaItem } from '../../data/mediaData';

interface MediaLightboxProps {
  item: MediaItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ item, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#B5F45B]"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:flex items-center justify-center"
          aria-label="Previous Media Item"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden sm:flex items-center justify-center"
          aria-label="Next Media Item"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      )}

      {/* Lightbox Modal Content */}
      <div className="max-w-4xl w-full bg-[#102820] border border-[#176B4D]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Media Visual Area */}
        <div className="relative w-full aspect-video bg-[#091712] flex items-center justify-center overflow-hidden">
          {/* Stylized Domain Vector Art representing the scene */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#102820] via-[#176B4D]/30 to-[#091712] flex flex-col items-center justify-center p-8 text-center">
            
            {item.svgArtTheme === 'landscape' && (
              <svg className="w-32 h-32 text-[#B5F45B]/60 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 80 L35 45 L55 70 L70 50 L90 80 Z" fill="#176B4D" fillOpacity="0.3" />
                <circle cx="75" cy="30" r="10" fill="#B5F45B" fillOpacity="0.4" />
                <line x1="5" y1="80" x2="95" y2="80" stroke="#73513A" strokeWidth="3" />
              </svg>
            )}

            {item.svgArtTheme === 'shed' && (
              <svg className="w-32 h-32 text-[#B5F45B]/60 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 75 L20 45 L50 20 L80 45 L80 75 Z" fill="#176B4D" fillOpacity="0.3" />
                <rect x="35" y="50" width="30" height="25" fill="#102820" />
                <circle cx="85" cy="50" r="8" fill="#55B9B0" fillOpacity="0.3" />
              </svg>
            )}

            {item.svgArtTheme === 'pond' && (
              <svg className="w-32 h-32 text-[#55B9B0]/60 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="50" cy="55" rx="40" ry="25" fill="#55B9B0" fillOpacity="0.25" />
                <path d="M20 55 Q 35 48, 50 55 T 80 55" stroke="#55B9B0" strokeWidth="2" />
                <rect x="45" y="55" width="10" height="30" fill="#73513A" />
              </svg>
            )}

            {item.svgArtTheme === 'compost' && (
              <svg className="w-32 h-32 text-[#73513A]/80 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 75 Q 30 40, 45 75" fill="#73513A" fillOpacity="0.6" />
                <path d="M40 75 Q 55 35, 70 75" fill="#5A3E2C" fillOpacity="0.7" />
                <path d="M65 75 Q 80 42, 95 75" fill="#4A3324" fillOpacity="0.8" />
              </svg>
            )}

            {item.svgArtTheme === 'dashboard' && (
              <svg className="w-32 h-32 text-[#B5F45B]/60 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="15" y="20" width="70" height="55" rx="4" fill="#091712" />
                <path d="M25 60 L40 45 L55 52 L75 35" stroke="#B5F45B" strokeWidth="2.5" />
                <line x1="25" y1="65" x2="75" y2="65" stroke="#176B4D" strokeWidth="1" />
              </svg>
            )}

            {item.svgArtTheme === 'lab' && (
              <svg className="w-32 h-32 text-[#B5F45B]/60 mb-3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M45 20 L45 45 L30 75 L70 75 L55 45 L55 20 Z" fill="#176B4D" fillOpacity="0.3" />
                <circle cx="50" cy="65" r="4" fill="#B5F45B" />
                <circle cx="42" cy="70" r="3" fill="#B5F45B" />
              </svg>
            )}

            <div className="font-mono text-xs uppercase text-[#B5F45B] tracking-wider">
              {item.categoryLabel} · {item.type === 'video-story' ? 'Video Documentary' : 'High-Resolution Field Record'}
            </div>
            <h3 className="text-xl font-bold text-white mt-1 max-w-lg">{item.title}</h3>
          </div>

          {item.type === 'video-story' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-[#102820]/80 border-2 border-[#B5F45B] flex items-center justify-center text-[#B5F45B] shadow-lg">
                <Play className="w-7 h-7 fill-[#B5F45B] ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Detailed Metadata and Bengali Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-[#B5F45B] uppercase tracking-wider block">
                {item.categoryLabel}
              </span>
              <h4 className="text-base font-bold font-bn text-white mt-0.5">
                {item.titleBn}
              </h4>
            </div>
            <span className="text-xs text-[#F5F1E7]/60 font-mono">
              {item.licenseNote}
            </span>
          </div>

          <p className="text-sm font-bn text-[#F5F1E7]/90 leading-relaxed">
            {item.captionBn}
          </p>

          <p className="text-xs font-bn text-[#F5F1E7]/70 leading-relaxed bg-[#091712] p-4 rounded-xl border border-white/5">
            {item.detailedContextBn}
          </p>
        </div>

      </div>

    </div>
  );
};
