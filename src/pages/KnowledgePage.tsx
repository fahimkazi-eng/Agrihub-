import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const KnowledgePage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Circular Systems', label: 'Circular Systems' },
    { id: 'Broiler Management', label: 'Broiler Management' },
    { id: 'Aquaculture', label: 'Aquaculture' },
    { id: 'Farm Economics', label: 'Farm Economics' },
    { id: 'AgriTech', label: 'AgriTech' },
    { id: 'Research & Innovation', label: 'Research' },
  ];

  const filtered = selectedTag === 'all'
    ? KNOWLEDGE_ARTICLES
    : KNOWLEDGE_ARTICLES.filter(a => a.category === selectedTag);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Educational Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Research, Guides & Agricultural Insights
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          বিজ্ঞানভিত্তিক কৃষি, পানির পরিবেশ রক্ষা, পোলট্রি খাদ্য রূপান্তর এবং খামারের আর্থিক শৃঙ্খলা নিয়ে পূর্ণাঙ্গ বাংলা গবেষণামূলক প্রবন্ধমালা।
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#141917]/10">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedTag(c.id)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              selectedTag === c.id
                ? 'bg-[#102820] text-white shadow-sm'
                : 'bg-white border border-[#141917]/10 text-[#102820]/75 hover:bg-[#FAF8F3]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-white border border-[#141917]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#176B4D]/40 hover:shadow-lg transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#73513A]">
                <span className="font-semibold">{article.category}</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors leading-snug">
                  {article.title}
                </h2>
                <h3 className="text-sm font-bn text-[#176B4D] font-medium mt-1">
                  {article.titleBn}
                </h3>
              </div>

              <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
                {article.summaryBn}
              </p>

              <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#141917]/5 text-xs font-bn text-[#102820]/80">
                <strong>মূল শিক্ষা:</strong> {article.takeawayBn}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#141917]/5 flex items-center justify-between">
              <Link
                to={`/knowledge/${article.slug}`}
                className="text-xs font-semibold text-[#102820] hover:text-[#176B4D] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
