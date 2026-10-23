import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Calendar, Layers } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const OperationsIndexPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Operational Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Farm Operations & Business Units
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          পার্বতীপুর সার্কুলার এগ্রিটেক হাবের প্রতিটি উৎপাদন ইউনিট নির্দিষ্ট কারিগরি ও পরিবেশগত নিয়মনীতি মেনে পরিচালিত হয়। মূল উৎপাদন থেকে শুরু করে সম্পদ পুনরুদ্ধার ও পরীক্ষামূলক গবেষণা—প্রতিটি কার্যক্রমের তথ্য নিচে বিস্তারিত দেওয়া হলো।
        </p>
      </div>

      {/* Operations List Cards */}
      <div className="space-y-8">
        {OPERATIONS.map((op, idx) => (
          <div 
            key={op.id}
            className="bg-white border border-[#141917]/10 rounded-2xl p-6 lg:p-8 hover:border-[#176B4D]/40 hover:shadow-lg transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
          >
            <div className="space-y-4 max-w-3xl">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-[#73513A] uppercase tracking-wider">
                  0{idx + 1}. {op.category.replace('-', ' ')}
                </span>
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${op.badgeColor}`}>
                  {op.status}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors">
                  {op.title}
                </h2>
                <h3 className="text-sm font-bn text-[#176B4D] font-medium mt-0.5">
                  {op.titleBn}
                </h3>
              </div>

              <p className="text-sm text-[#141917]/75 font-bn leading-relaxed">
                {op.overviewBn}
              </p>

              {/* Quick specs */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Inputs:</span>
                  <span>{op.inputs.map(i => i.name).slice(0, 2).join(', ')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Outputs:</span>
                  <span>{op.outputs.map(o => o.name).slice(0, 2).join(', ')}</span>
                </div>
              </div>

            </div>

            <div className="shrink-0 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#141917]/5">
              <Link
                to={`/operations/${op.slug}`}
                className="px-6 py-3 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Full Unit Brief</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
