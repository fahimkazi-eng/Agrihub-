import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Droplets, ShieldCheck, Scale, Info, Clock } from 'lucide-react';
import { OPERATIONS } from '../data/operationsData';

export const AquaculturePage: React.FC = () => {
  const op = OPERATIONS.find(o => o.id === 'aquaculture')!;

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

      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#55B9B0]">
            Conditional Production Stream
          </span>
          <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${op.badgeColor}`}>
            {op.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          {op.title}
        </h1>
        <h2 className="text-lg sm:text-xl font-bn text-[#55B9B0] font-medium">
          {op.titleBn}
        </h2>
        
        <p className="text-base text-[#141917]/80 font-bn leading-relaxed">
          {op.overviewBn}
        </p>
      </div>

      {/* Critical Constraint Disclosure Notice */}
      <div className="bg-[#55B9B0]/10 border border-[#55B9B0]/40 p-6 sm:p-8 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-[#102820]">
          <AlertCircle className="w-5 h-5 text-[#55B9B0]" />
          <h3 className="text-base font-bold">
            Critical Constraint: 3 Family Interests & 2-Year Rotational Access
          </h3>
        </div>
        <div className="text-xs font-bn text-[#102820]/90 space-y-2 leading-relaxed">
          <p>
            পার্বতীপুরের বিদ্যমান পারিবারিক পুকুরটিতে তিনটি পরিবারের যৌথ অংশীদারিত্ব রয়েছে। ঐতিহ্যগত পারিবারিক সিদ্ধান্ত অনুযায়ী প্রতিটি পরিবার দুই বছর করে পর্যায়ক্রমিক ব্যবহারের সুযোগ পায়।
          </p>
          <p>
            <strong>বাস্তবতা ও কৌশল:</strong> এই সীমাবদ্ধতার কারণে এখানে কোনো ভারী স্থায়ী কংক্রিট অবকাঠামো নির্মাণ করা হবে না। বরং পোর্টেবল এয়ারেটর, আধুনিক ওয়াটার টেস্টিং কিট এবং ভাসমান খাবারের মাধ্যমে একটি সুনির্দিষ্ট মেয়াদী উৎপাদন পরিচালনা করা হবে। মেয়াদের বাইরে কোনো স্বত্ব দাবি করা হবে না এবং মেয়াদ শেষে সময়মতো অংশীদারদের কাছে পুকুর হস্তান্তর করা হবে।
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

      {/* Structured Operational Phases */}
      {op.timelineSteps && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#102820]">
            Structured 2-Year Rotational Lifecycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {op.timelineSteps.map((step, sIdx) => (
              <div key={sIdx} className="bg-white border border-[#141917]/10 p-5 rounded-xl space-y-2">
                <span className="text-xs font-mono font-bold text-[#55B9B0]">{step.step}</span>
                <h4 className="text-xs font-bold text-[#102820] font-bn">{step.stepBn}</h4>
                <p className="text-[11px] text-[#141917]/70 font-bn leading-relaxed">
                  {step.detailsBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Water Quality & Ecosystem Prohibitions */}
      <div className="bg-[#102820] text-white p-8 rounded-2xl border border-[#55B9B0]/30 space-y-4">
        <h3 className="text-lg font-bold text-[#55B9B0]">Water Quality Integrity & Safe Practices</h3>
        <p className="text-xs font-bn text-[#F5F1E7]/80 leading-relaxed max-w-3xl">
          পুকুরের পানির প্রাকৃতিক বাস্তুতন্ত্র সুরক্ষায় আমরা সম্পূর্ণ অটুট। অনেকে অজ্ঞতাবশত কাঁচা পোলট্রি লিটার বা অপরিশোধিত বর্জ্য সরাসরি পুকুরে ফেলে পানি পচিয়ে ফেলে—যা মাছের রোগ ও অ্যামোনিয়া বিষক্রিয়া ঘটায়। আমাদের খামারে কাঁচা লিটার সরাসরি পুকুরে দেওয়া কঠোরভাবে নিষিদ্ধ। কেবল পানির মান যাচাই সাপেক্ষে অনুমোদিত প্লাঙ্কটন কালচার ও ভাসমান ফিড ব্যবহার করা হবে।
        </p>
      </div>

    </div>
  );
};
