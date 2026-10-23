import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const FutureEnergyPage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'future-energy')!;

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
          <span className="text-xs font-mono uppercase tracking-wider text-[#102820]">
            Long-Term Feasibility Study
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

      {/* Strict Honesty Notice */}
      <div className="bg-[#FAF8F3] border border-[#141917]/20 p-8 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-[#102820]">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h3 className="text-base font-bold">
            Feasibility Boundaries & Realistic Engineering Prudence
          </h3>
        </div>
        <p className="text-xs font-bn text-[#141917]/85 leading-relaxed max-w-3xl">
          আমরা কোনো মিথ্যা প্রচারণা করি না। বর্তমান ৫০০ মুরগির প্রাথমিক খামার কাঠামোতে কোনো কার্যকর বায়োগ্যাস প্ল্যান্ট বা স্বয়ংসম্পূর্ণ বিদ্যুৎ উৎপাদন চালু নেই। বায়োগ্যাস ডাইজেস্টার নির্মাণের মূলধনী খরচ তখনই যৌক্তিক হয় যখন দৈনিক প্রচুর পরিমাণে তরল জৈব বর্জ্য পাওয়া যায়। ভবিষ্যতে খামারের পরিধি বাড়লে তবেই এর কারিগরি ও অর্থনৈতিক সমীক্ষা করা হবে।
        </p>
      </div>

    </div>
  );
};
