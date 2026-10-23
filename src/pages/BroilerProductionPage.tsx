import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldAlert, Clock, Scale, Info, Layers } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';
import { BroilerCostCalculator } from '../components/interactive/BroilerCostCalculator';

export const BroilerProductionPage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'broiler-production')!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Back Link */}
      <div>
        <Link 
          to="/operations" 
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#176B4D] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Operations Overview</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#73513A]">
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

      {/* Planning Scenario Clarity Card */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-6 rounded-2xl flex items-start gap-4">
        <Info className="w-5 h-5 text-[#176B4D] shrink-0 mt-0.5" />
        <div className="text-xs font-bn text-[#141917]/80 space-y-1">
          <strong className="text-[#102820] text-sm block">প্রাথমিক পরিকল্পনা অনুমানের স্বচ্ছতা:</strong>
          <p>
            আমাদের প্রাথমিক পরিকল্পনা দৃশ্যকল্পে ৫০০ ব্রয়লার মুরগির একটি ব্যাচ ধরা হয়েছে। এটি কোনো প্রতিষ্ঠিত সর্বোচ্চ পরিচালন সক্ষমতা নয়, বরং সঠিক তদারকি, এফসিআর পর্যবেক্ষণ এবং ঝুঁকি নিয়ন্ত্রণের জন্য নির্ধারিত একটি সূচনাকারী মডেল। কোনো অবস্থাতেই নিশ্চিত মুনাফার আশ্বাস প্রদান করা হয় না।
          </p>
        </div>
      </div>

      {/* Operational Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Operational Process Timeline (Chick Placement to Shed Prep) */}
      {op.timelineSteps && (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Batch Life-Cycle
            </span>
            <h2 className="text-2xl font-bold text-[#102820]">
              Operational Production Timeline (Day 0 to Shed Prep)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {op.timelineSteps.map((step, sIdx) => (
              <div key={sIdx} className="bg-white border border-[#141917]/10 p-5 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-[#176B4D]">{step.step}</span>
                <h4 className="text-xs font-bold text-[#102820] font-bn">{step.stepBn}</h4>
                <p className="text-[11px] text-[#141917]/70 font-bn leading-relaxed">
                  {step.detailsBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Economics Simulator */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
            Batch Economics Model
          </span>
          <h2 className="text-2xl font-bold text-[#102820]">
            Batch Cost & Margin Calculator
          </h2>
        </div>
        <BroilerCostCalculator />
      </div>

      {/* Waste Handling & Link to Composting */}
      <div className="bg-[#102820] text-white p-8 rounded-2xl border border-[#176B4D]/40 space-y-4">
        <h3 className="text-lg font-bold">Waste Handling & Strict Biosecurity Integration</h3>
        <p className="text-xs font-bn text-[#F5F1E7]/80 leading-relaxed max-w-3xl">
          ব্যাচ বিক্রির পর শেডের সমস্ত লিটার শুকনো অবস্থায় সংগ্রহ করে তাৎক্ষণিকভাবে কম্পোস্টিং ইয়ার্ডে পাঠানো হয়। শেডের মেঝে উচ্চচাপে পরিষ্কার করে জীবাণুমুক্ত করা হয় এবং পরবর্তী ব্যাচের পূর্বে ন্যূনতম ১০-১৪ দিন শেড খালি (Shed downtime) রাখা হয় যাতে কোনো ব্যাকটেরিয়া বেঁচে থাকতে না পারে। কাঁচা লিটার কখনো খোলা পরিবেশে বা পুকুরে ফেলা হয় না।
        </p>
      </div>

    </div>
  );
};
