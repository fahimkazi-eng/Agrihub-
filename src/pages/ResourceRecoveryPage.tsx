import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Thermometer, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const ResourceRecoveryPage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'resource-recovery')!;

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
          <span className="text-xs font-mono uppercase tracking-wider text-[#73513A]">
            Circular Recovery
          </span>
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${op.badgeColor}`}>
            {op.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          {op.title}
        </h1>
        <h2 className="text-lg sm:text-xl font-bn text-[#73513A] font-medium">
          {op.titleBn}
        </h2>
        
        <p className="text-base text-[#141917]/80 font-bn leading-relaxed">
          {op.overviewBn}
        </p>
      </div>

      {/* Thermophilic Process Detail Box */}
      <div className="bg-[#FAF8F3] border border-[#73513A]/30 p-8 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 text-[#73513A]">
          <Thermometer className="w-5 h-5" />
          <h3 className="text-lg font-bold">
            Controlled Thermophilic Aerobic Composting Principles
          </h3>
        </div>
        <p className="text-xs font-bn text-[#141917]/80 leading-relaxed max-w-3xl">
          পোলট্রি শেড থেকে সংগৃহীত শুকনো লিটার নাইট্রোজেনে সমৃদ্ধ হলেও এতে রোগজীবাণু থাকার ঝুঁকি থাকে। এই লিটারের সাথে কাটা ধানের খড় ও কাঠের তুষ নির্দিষ্ট অনুপাতে মিশিয়ে উইন্ডরো স্তূপ তৈরি করা হয়। বায়বীয় ব্যাকটেরিয়া সক্রিয় হয়ে স্তূপের তাপমাত্রা ৫৫° থেকে ৬৫° সেলসিয়াসে উন্নীত করে। এই উচ্চতাপেই ক্ষতিকর সালমোনেলা, ই-কোলাই এবং আগাছার বীজ পুরোপুরি বিনষ্ট হয়।
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

      {/* Inputs / Outputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#141917]/10 rounded-xl p-6 space-y-3">
          <h4 className="text-sm font-bold text-[#102820] uppercase font-mono">Feedstocks & Inputs</h4>
          <ul className="space-y-2 text-xs font-mono text-slate-600">
            {op.inputs.map((i, idx) => (
              <li key={idx} className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="font-semibold text-[#102820]">{i.name}</span>
                <span>{i.source}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-[#141917]/10 rounded-xl p-6 space-y-3">
          <h4 className="text-sm font-bold text-[#102820] uppercase font-mono">Recovered Outputs</h4>
          <ul className="space-y-2 text-xs font-mono text-slate-600">
            {op.outputs.map((o, idx) => (
              <li key={idx} className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="font-semibold text-[#102820]">{o.name}</span>
                <span>{o.destination}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Regulatory Standards Notice */}
      <div className="bg-[#102820] text-white p-8 rounded-2xl border border-white/10 space-y-3">
        <h4 className="text-base font-bold text-[#B5F45B]">Regulatory Standards & Commercial Sales Verification</h4>
        <p className="text-xs font-bn text-[#F5F1E7]/80 leading-relaxed max-w-3xl">
          যেকোনো জৈব সার বাণিজ্যিক বাজারজাতকরণের ক্ষেত্রে বাংলাদেশ মান প্রণয়ন ও নিয়ন্ত্রণ কর্তৃপক্ষ (BSTI) এবং কৃষি সম্প্রসারণ অধিদপ্তরের (DAE) নির্দিষ্ট গুণমান মানদণ্ড (আর্দ্রতা, অম্লত্ব, ভারী ধাতু সহনীয় মাত্রা) প্রতিপালন আবশ্যক। আমরা ল্যাব পরীক্ষার ফলাফল সন্তোষজনক না হওয়া পর্যন্ত কোনো বাণিজ্যিক দাবির প্রতিশ্রুতি দিই না।
        </p>
      </div>

    </div>
  );
};
