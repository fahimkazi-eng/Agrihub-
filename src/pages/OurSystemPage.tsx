import React from 'react';
import { Link } from 'react-router-dom';
import { CircularFlowDiagram } from '../components/interactive/CircularFlowDiagram';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Layers, Compass, HelpCircle } from 'lucide-react';

export const OurSystemPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Architecture & Operating Logic
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Our Circular System
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          আমরা কৃষিকে আলাদা আলাদা কার্যক্রম হিসেবে দেখি না। পোলট্রি, মাছ চাষ, জৈব বর্জ্য ব্যবস্থাপনা, নার্সারি এবং প্রযুক্তিকে একটি সংযুক্ত ব্যবস্থার মধ্যে আনার লক্ষ্য নিয়ে কাজ করছি। প্রতিটি সংযোগের ক্ষেত্রে নিরাপত্তা, উৎপাদন খরচ এবং বাস্তব বাজার চাহিদা যাচাই করা হবে।
        </p>
      </div>

      {/* The Difference: Circularity as a Goal vs Proven Recovery */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/25 rounded-2xl p-8 lg:p-10 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase text-[#73513A] tracking-wider block">
            Methodological Honesty
          </span>
          <h2 className="text-2xl font-bold text-[#102820]">
            Circularity as an Operating Goal vs. Proven Resource Recovery
          </h2>
          <p className="text-sm text-[#141917]/75 font-bn leading-relaxed">
            অনেকে মনে করেন সার্কুলার কৃষি মানেই কোনো খরচ ছাড়াই এক ইউনিটের বর্জ্য অন্য ইউনিটে ফেলে স্বয়ংক্রিয়ভাবে লাভজনক করা যায়। বাস্তবে প্রতিটি জৈবিক রূপান্তরের নিজস্ব খরচ, পরিবহন শ্রম, রাসায়নিক ঝুঁকি এবং প্যাথোজেন নিরাপত্তা রয়েছে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#141917]/10">
          <div className="p-5 bg-white rounded-xl border border-[#141917]/10 space-y-2">
            <div className="flex items-center gap-2 text-[#176B4D] font-mono text-xs uppercase font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Technically Established</span>
            </div>
            <h3 className="font-bold text-sm text-[#102820]">Aerobic Litter Composting</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              পোলট্রি লিটারের সঠিক সি/এন অনুপাত রক্ষা করে উইন্ডরো পদ্ধতিতে থার্মোফিলিক তাপমাত্রায় (৫৫-৬৫°সে.) ব্যাকটেরিয়ামুক্ত কম্পোস্টে রূপান্তর।
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#141917]/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-700 font-mono text-xs uppercase font-bold">
              <Compass className="w-4 h-4" />
              <span>Needs Field Validation</span>
            </div>
            <h3 className="font-bold text-sm text-[#102820]">BSF Insect Bioconversion</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              নির্দিষ্ট পরিচ্ছন্ন উদ্ভিজ্জ উচ্ছিষ্ট দিয়ে লার্ভা প্রজনন। লার্ভা পুষ্টিমান এবং প্রাণিখাদ্যে ব্যবহারের জাতীয় অনুমোদন সাপেক্ষে এর উপযোগিতা চূড়ান্ত হবে।
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#141917]/10 space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-mono text-xs uppercase font-bold">
              <Layers className="w-4 h-4" />
              <span>Long-Term Study</span>
            </div>
            <h3 className="font-bold text-sm text-[#102820]">Anaerobic Biogas Digest</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              ভবিষ্যতে কাঁচামালের পরিমাণ ও অর্থনৈতিক সম্ভাব্যতা নিশ্চিত হলে বায়োগ্যাস ডাইজেস্টার নির্মাণের সমীক্ষা শুরু করা হবে। বর্তমানে কোনো গ্যাস উৎপাদন চালু নেই।
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Flow Explorer */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
            Interactive System Map
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102820]">
            System Connections & Resource Flows
          </h2>
        </div>
        <CircularFlowDiagram />
      </section>

      {/* Inputs and Outputs Detailed Registry */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#102820]">
          System Input & Output Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border border-[#141917]/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-[#102820] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#176B4D]" />
              <span>External System Inputs</span>
            </h3>
            <ul className="space-y-3 text-xs text-[#141917]/80 divide-y divide-[#141917]/5">
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Day-Old Chicks (DOC)</span>
                <span className="font-mono text-slate-500">Government / Certified Hatcheries</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Commercial Quality Feed</span>
                <span className="font-mono text-slate-500">Tested Feed Millers (BSTI compliant)</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Rice Husk & Bedding Material</span>
                <span className="font-mono text-slate-500">Local Parbatipur Rice Mills</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Fingerlings (Pona)</span>
                <span className="font-mono text-slate-500">Dinajpur Certified Aqua Hatcheries</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Clean Well Water & Power</span>
                <span className="font-mono text-slate-500">Farm Deep Tubewell & Grid/Solar</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#141917]/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-[#102820] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B5F45B]" />
              <span>Realized System Outputs</span>
            </h3>
            <ul className="space-y-3 text-xs text-[#141917]/80 divide-y divide-[#141917]/5">
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Market-Ready Broiler Meat</span>
                <span className="font-mono text-slate-500">Parbatipur Wholesale & Retail</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Freshwater Table Fish</span>
                <span className="font-mono text-slate-500">Local Dinajpur Fish Markets</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Vigorous Plug Seedlings</span>
                <span className="font-mono text-slate-500">Local Farmers & Kitchen Gardens</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Stabilized Organic Compost</span>
                <span className="font-mono text-slate-500">Nursery Media & Soil Conditioning</span>
              </li>
              <li className="pt-2 flex justify-between items-center">
                <span className="font-semibold text-[#102820]">Traceable Batch Ledger Data</span>
                <span className="font-mono text-slate-500">FarmOS Historical Records</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};
