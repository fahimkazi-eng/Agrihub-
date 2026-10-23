import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { ArrowLeft, Clock, BookOpen, ShieldCheck, Share2 } from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = KNOWLEDGE_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#102820]">Article Not Found</h1>
        <p className="text-sm text-slate-600 font-bn">অনুরোধকৃত প্রবন্ধটি পাওয়া যায়নি।</p>
        <Link to="/knowledge" className="inline-block px-4 py-2 bg-[#102820] text-white rounded text-xs uppercase">
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Back button */}
      <div>
        <Link
          to="/knowledge"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#176B4D] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Hub</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-[#141917]/10 pb-8">
        <div className="flex items-center gap-3 text-xs font-mono text-[#73513A]">
          <span className="font-semibold uppercase">{article.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight leading-tight">
          {article.title}
        </h1>
        <h2 className="text-lg sm:text-xl font-bn text-[#176B4D] font-semibold">
          {article.titleBn}
        </h2>

        <p className="text-sm font-bn text-[#141917]/80 leading-relaxed italic bg-[#FAF8F3] p-4 rounded-xl border border-[#141917]/5">
          {article.summaryBn}
        </p>
      </div>

      {/* Article Body Sections */}
      <div className="space-y-10 font-bn text-[#141917]/90 leading-relaxed">
        {article.bodySections.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl font-bold text-[#102820] border-b border-[#141917]/10 pb-2">
              {sec.headingBn}
            </h3>
            {sec.paragraphsBn.map((p, pIdx) => (
              <p key={pIdx} className="text-base text-justify">
                {p}
              </p>
            ))}
          </div>
        ))}

        {/* Takeaway Box */}
        <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-6 rounded-2xl space-y-2 mt-8">
          <span className="font-mono text-xs text-[#176B4D] uppercase font-bold tracking-wider block">
            Core Takeaway
          </span>
          <p className="text-sm font-semibold text-[#102820]">
            {article.takeawayBn}
          </p>
        </div>

        {/* Citation Notice */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 font-bn space-y-1">
          <strong className="block text-slate-800">তথ্যসূত্র ও গবেষণা স্বীকৃতি:</strong>
          <p>{article.citationNoticeBn}</p>
        </div>
      </div>

    </div>
  );
};
