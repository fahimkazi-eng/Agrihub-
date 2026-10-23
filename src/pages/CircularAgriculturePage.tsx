import React from 'react';
import { CircularFlowDiagram } from '../components/interactive/CircularFlowDiagram';
import { CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

export const CircularAgriculturePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Circular Bio-Economy Framework
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Circular Agriculture: Closing the Loop
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          কৃষিতে বর্জ্য বলে কিছু নেই, যদি প্রতিটি উপজাতের রাসায়নিক গঠন ও রূপান্তর বিজ্ঞানসম্মতভাবে সম্পন্ন করা যায়। পার্বতীপুর হাবে আমরা সম্পদের অপচয় রোধ এবং মাটি ও পানির ভারসাম্য রক্ষার সুনির্দিষ্ট সার্কুলার মডেল অনুসরণ করি।
        </p>
      </div>

      {/* Flagship Interactive Circular Flow Diagram */}
      <CircularFlowDiagram />

      {/* What Connects to What Detailed Cards */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#102820]">
          What Connects to What: Detailed Operational Criteria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Loop 1 */}
          <div className="bg-white border border-[#176B4D]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#176B4D] font-bold">LOOP A: POULTRY → COMPOST → NURSERY</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#176B4D]">Active Plan</span>
            </div>
            <h3 className="font-bold text-base text-[#102820]">
              Broiler Litter to Stabilized Growing Medium
            </h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              পোলট্রি শেড থেকে প্রাপ্ত শুকনো লিটার খড় ও তুষের সাথে মিশিয়ে অ্যারোবিক উইন্ডরো পদ্ধতিতে প্রক্রিয়াজাত করা হয়। থার্মোফিলিক তাপমাত্রায় ক্ষতিকর ব্যাকটেরিয়া ও কৃমির ডিম ধ্বংস হওয়ার পর তা ৪-৬ সপ্তাহ কিউরিং করে নার্সারির প্লাগ ট্রের জন্য পুষ্টিকর ও গন্ধহীন ভার্মি ও জৈব মিডিয়া তৈরি করা হয়।
            </p>
          </div>

          {/* Loop 2 */}
          <div className="bg-white border border-[#176B4D]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#73513A] font-bold">LOOP B: RESIDUES → MUSHROOMS → SOIL</span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800">Pilot Candidate</span>
            </div>
            <h3 className="font-bold text-base text-[#102820]">
              Crop Straw to Oyster Mushroom Substrate
            </h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              ধানের পরিষ্কার শুকনো খড় পাস্তুরায়ন করে ওয়েস্টার মাশরুম উৎপাদন করা হয়। মাশরুম আহরণের পর পড়ে থাকা ব্যবহৃত সাবস্ট্রেট (Spent Substrate) উচ্চমানের সেলুলোজ ও লিগনিনসমৃদ্ধ হওয়ায় তা কেঁচো সারের স্তূপে যুক্ত করে উন্নত সার তৈরি করা হয়।
            </p>
          </div>

          {/* Loop 3 */}
          <div className="bg-white border border-[#176B4D]/20 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#176B4D] font-bold">LOOP C: CLEAN BIOWASTE → BSF → BIO-MASS</span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800">Pilot Candidate</span>
            </div>
            <h3 className="font-bold text-base text-[#102820]">
              Segregated Vegetable Residues to Insect Protein
            </h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              কেবলমাত্র বাছাইকৃত ও পরিষ্কার উদ্ভিজ্জ উচ্ছিষ্ট ব্ল্যাক সোলজার ফ্লাই লার্ভার খাদ্য হিসেবে পরীক্ষাধীন। লার্ভা জৈব উচ্ছিষ্ট খেয়ে দ্রুত বাড়ে এবং ফ্রাস (জৈব মল) উৎপাদন করে যা কম্পোস্টের মান আরও বাড়াতে সক্ষম।
            </p>
          </div>

          {/* Loop 4: Prohibited */}
          <div className="bg-rose-50 border border-rose-300 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-rose-800 font-bold">PROHIBITED LOOP: RAW MANURE → FISH POND</span>
              <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900">Strictly Banned</span>
            </div>
            <h3 className="font-bold text-base text-rose-950">
              Zero Direct Discharge into Water Bodies
            </h3>
            <p className="text-xs text-rose-900 font-bn leading-relaxed">
              কাঁচা পোলট্রি বিষ্ঠা সরাসরি পুকুরে ফেলা কঠোরভাবে নিষিদ্ধ। কাঁচা বিষ্ঠায় থাকা ইউরিক অ্যাসিড ও জীবাণু পানির দ্রবীভূত অক্সিজেন নিঃশেষ করে ফেলে এবং মাছের জন্য মারাত্মক বিষাক্ত অ্যামোনিয়া সৃষ্টি করে।
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
