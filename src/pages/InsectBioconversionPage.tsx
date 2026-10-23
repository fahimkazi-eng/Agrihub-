import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const InsectBioconversionPage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'insect-bioconversion')!;

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
            Research & Bioconversion
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

      {/* Experimental Pilot Candidacy Status Box */}
      <div className="bg-[#102820] text-white p-8 rounded-2xl border border-[#B5F45B]/40 space-y-4">
        <div className="flex items-center gap-2 text-[#B5F45B]">
          <Compass className="w-5 h-5" />
          <h3 className="text-lg font-bold">
            Experimental Status & Research Protocol
          </h3>
        </div>
        <div className="text-xs font-bn text-[#F5F1E7]/80 space-y-2 leading-relaxed max-w-3xl">
          <p>
            ব্ল্যাক সোলজার ফ্লাই (Hermetia illucens) লার্ভা বায়োকনভার্সন ইউনিটটি বর্তমানে সম্পূর্ণ একটি ছোট আকারের গবেষণা পাইলট হিসেবে পরিচালিত হচ্ছে।
          </p>
          <p>
            <strong>প্রয়োজনীয় সত্যতা:</strong> সরবরাহ ব্যবস্থার নির্ভরযোগ্যতা, ফিডস্টক জীবাণুমুক্ত রাখা, লার্ভার স্বাস্থ্য নিরাপত্তা এবং সরকারি বিধিমালার শর্তাবলী পুরোপুরি নিশ্চিত না হওয়া পর্যন্ত এটিকে কোনো বাণিজ্যিক উৎপাদন বা বিক্রয়যোগ্য ফিড হিসেবে দাবি করা হবে না।
          </p>
        </div>
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
          <h4 className="text-sm font-bold text-[#102820] uppercase font-mono">Pilot Feedstock</h4>
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
          <h4 className="text-sm font-bold text-[#102820] uppercase font-mono">Potential Pilot Outputs</h4>
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

    </div>
  );
};
