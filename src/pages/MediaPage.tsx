import React, { useState, useMemo } from 'react';
import { MEDIA_GALLERY, MediaItem } from '../data/mediaData';
import { MediaLightbox } from '../components/media/MediaLightbox';
import { Search, Filter, Play, Sparkles, Image as ImageIcon } from 'lucide-react';

export const MediaPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'landscape', label: 'Farm & Landscape' },
    { id: 'poultry', label: 'Poultry Production' },
    { id: 'aquaculture', label: 'Aquaculture' },
    { id: 'circular', label: 'Circular Systems' },
    { id: 'tech', label: 'Technology & Data' },
    { id: 'research', label: 'Research & Field Notes' },
  ];

  const filteredMedia = useMemo(() => {
    return MEDIA_GALLERY.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleBn.includes(searchQuery) ||
        item.captionBn.includes(searchQuery);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const currentIndex = activeItem ? filteredMedia.findIndex(m => m.id === activeItem.id) : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredMedia.length - 1) {
      setActiveItem(filteredMedia[currentIndex + 1]);
    } else if (filteredMedia.length > 0) {
      setActiveItem(filteredMedia[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredMedia[currentIndex - 1]);
    } else if (filteredMedia.length > 0) {
      setActiveItem(filteredMedia[filteredMedia.length - 1]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Visual Archive & Field Documentation
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Media Center & Photo Library
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          পার্বতীপুরের গ্রামীণ কৃষি ভূপ্রকৃতি, শেড প্রযুক্তি, পুকুর বাস্তুতন্ত্র এবং সার্কুলার গবেষণার বিস্তারিত চিত্রশালা ও ভিডিও স্টোরিজ।
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#141917]/10">
        
        {/* Category Pills (Button segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#102820] text-white shadow-sm'
                  : 'bg-white border border-[#141917]/10 text-[#102820]/75 hover:bg-[#FAF8F3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search media or captions..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D]"
          />
        </div>

      </div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#141917]/10 text-slate-500 font-bn text-sm">
          কোনো ছবি বা মিডিয়া পাওয়া যায়নি। অনুসন্ধান ফিল্টার পরিবর্তন করুন।
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-white border border-[#141917]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-[#091712] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                
                <span className="font-mono text-xs text-[#B5F45B] z-20 absolute bottom-3 left-3">
                  {item.categoryLabel}
                </span>

                <div className="w-12 h-12 rounded-full bg-white/20 group-hover:scale-110 transition-transform flex items-center justify-center text-white z-20">
                  {item.type === 'video-story' ? (
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  ) : (
                    <ImageIcon className="w-5 h-5 text-[#B5F45B]" />
                  )}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-bn text-[#176B4D] font-medium line-clamp-1">
                  {item.titleBn}
                </h4>
                <p className="text-xs font-bn text-[#141917]/70 line-clamp-2">
                  {item.captionBn}
                </p>
                <div className="pt-2 border-t border-[#141917]/5 text-[11px] font-mono text-slate-400">
                  {item.licenseNote}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <MediaLightbox
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

    </div>
  );
};
