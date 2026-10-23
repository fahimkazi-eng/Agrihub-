import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout, CheckCircle2, Calendar } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const NurseryCropsPage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'nursery-crops')!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      <div>
        <Link 
          to="/operations" 
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#176B4D] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Operations Overview</span>
        </Link>
      </div>

      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D]">
            Core Production Stream
          </span>
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${op.badgeColor}`}>
            {op.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          {op.title}
        </h1>
        <h2 className="text-lg sm:text-xl font-bn text-[#176B4D] font-medium">
          {op.titleBn}
        </h2>
        
        <p className="text-base text-[#141917]/80 font-bn leading-relaxed">
          {op.overviewBn}
        </p>
      </div>

      {/* Operational Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {op.operationalDetails.map((sec, idx) => (
          <div key={idx} className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-[#102820]">{sec.heading}</h3>
            <h4 className="text-xs font-bn text-[#176B4D] font-medium">{sec.headingBn}</h4>
            <ul className="space-y-3 text-xs text-[#141917]/75 font-bn divide-y divide-[#141917]/5">
              {sec.points.map((pt, pIdx) => (
                <li key={pIdx} className="pt-2.5 space-y-1">
                  <p className="font-semibold text-[#102820] font-sans">{pt.en}</p>
                  <p>{pt.bn}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Integration with Compost & Local Farmers */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-8 rounded-2xl space-y-3">
        <h4 className="text-base font-bold text-[#102820]">Circular Link to Compost & Soil Health</h4>
        <p className="text-xs font-bn text-[#141917]/80 leading-relaxed max-w-3xl">
          প্লাগ ট্রেতে চারা উৎপাদনে খামারে তৈরি পরিপক্ক থার্মোফিলিক কম্পোস্ট ও কোকোপিট মিডিয়া হিসেবে ব্যবহৃত হয়। এর ফলে রাসায়নিক সারের ব্যবহার কমে এবং চারা জমিতে দ্রুত খাপ খাইয়ে নিতে পারে। স্থানীয় কৃষকদের মানসম্মত চারার নিয়মিত চাহিদা মেটানোর লক্ষ্য নিয়েই এই নার্সারি পরিচালিত হচ্ছে।
        </p>
      </div>

    </div>
  );
};
