import React from 'react';
import { FarmOSMockup } from '../components/interactive/FarmOSMockup';
import { 
  Laptop, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Layers, 
  Users, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FarmOSPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Proprietary Digital Agriculture Platform
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          FarmOS: Precision Management for Smallholders
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          FarmOS হলো খামারির নিজস্ব কোডিং দক্ষতায় তৈরি একটি আধুনিক, হালকা এবং সম্পূর্ণ বাংলা-বান্ধব ফার্ম ম্যানেজমেন্ট প্ল্যাটফর্ম। এটি ব্রয়লার ব্যাচ, পুকুরের প্যারামিটার, কম্পোস্টিং চক্র এবং আর্থিক নগদ প্রবাহের নিখুঁত হিসাব এক জায়গায় সংরক্ষণ করে।
        </p>
      </div>

      {/* Interactive Simulated Product Visualization */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
            Interactive Product Walkthrough
          </span>
          <span className="text-xs font-mono text-slate-500">
            Click modules to inspect simulated screens
          </span>
        </div>
        <FarmOSMockup />
      </div>

      {/* Core Architectural Pillars */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#102820]">
          Core System Capabilities & Module Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#102820]">Poultry Batch & FCR Analytics</h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              প্রতিটি ব্যাচের বয়স অনুযায়ী ওজন ও খাদ্য গ্রহণের হিসাব সংরক্ষণ করে স্বয়ংক্রিয়ভাবে এফসিআর (Feed Conversion Ratio) নির্ধারণ। খাদ্য অপচয় বা বাচ্চার বৃদ্ধি ব্যাহত হলে তাত্ক্ষণিক সতর্কবার্তা।
            </p>
          </div>

          <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#55B9B0]/20 text-[#102820] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#102820]">Pond Water & Stocking Ledger</h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              পারিবারিক পুকুরের মেয়াদের হিসাব, পানির পিএইচ (pH), দ্রবীভূত অক্সিজেন (DO) এবং পোনা ছাড়ার তারিখ ও প্রজাতির বৃদ্ধি লগ। আহরণকালে প্রতিটি মাছের গড় ওজন রেকর্ড করা হয়।
            </p>
          </div>

          <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#73513A]/15 text-[#73513A] flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#102820]">Batch Economics & Cash Flow</h3>
            <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
              বাচ্চা ক্রয়, ফিড বিল, ওষুধ, শ্রম ও বিদ্যুতের প্রতিটি পয়সার প্রত্যক্ষ ও পরোক্ষ খরচ ট্র্যাকিং। ব্যাচ বিক্রির পূর্বে সম্ভাব্য ব্রেক-ইভেন প্রাইস ও নিট মুনাফা নির্ধারণ।
            </p>
          </div>

        </div>
      </div>

      {/* Critical Medical/Veterinary Clarification */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-8 rounded-2xl flex items-start gap-4">
        <Info className="w-6 h-6 text-[#176B4D] shrink-0 mt-0.5" />
        <div className="space-y-2 text-xs font-bn text-[#141917]/85">
          <strong className="text-sm text-[#102820] block font-sans">
            System Scope & Veterinary Prudence Notice
          </strong>
          <p>
            FarmOS কোনো স্বয়ংক্রিয় এআই ভেটেরিনারি ডায়াগনস্টিক বা প্রেসক্রিপশন টুল নয়। যখন কোনো ব্যাচে খাদ্য বা পানি গ্রহণের গতিতে আকস্মিক পতন ঘটে অথবা স্বাভাবিকের চেয়ে বেশি বাচ্চা অসুস্থ দেখা যায়, তখন সিস্টেমটি পরিচালনাকারীকে মানুষের দ্বারা সরাসরি শেড পরিদর্শনের জন্য ফ্ল্যাগ দেয়। কোনো রোগের চিকিৎসা বা ওষুধ প্রয়োগের ক্ষেত্রে অবশ্যই স্থানীয় নিবন্ধিত পশুচিকিৎসক ও মৎস্য বিশেষজ্ঞের শারীরিক পরামর্শ গ্রহণ করা হয়।
          </p>
        </div>
      </div>

      {/* Future Vision: Services for Other Small Farms */}
      <div className="bg-[#102820] text-white p-8 lg:p-10 rounded-2xl border border-[#176B4D]/40 space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#B5F45B]">
          Future Extension Roadmap
        </span>
        <h3 className="text-2xl font-bold">
          Digital Farm Management Services for Neighboring Smallholders
        </h3>
        <p className="text-xs font-bn text-[#F5F1E7]/80 leading-relaxed max-w-3xl">
          আমাদের নিজস্ব খামারে সিস্টেমটির কার্যকারিতা প্রমাণিত হওয়ার পর, উত্তরবঙ্গের অন্যান্য প্রান্তিক পোলট্রি খামারি ও মাছ চাষিদের কাছে FarmOS একটি সহজ সেবা হিসেবে ছড়িয়ে দেওয়ার দীর্ঘমেয়াদী পরিকল্পনা রয়েছে। এতে গ্রামীণ খামারিরা খাতা-কলমের ঝামেলা এড়িয়ে মোবাইল ফোনেই তাদের খামারের স্বচ্ছ হিসাব ও খরচ নিয়ন্ত্রণ করতে পারবেন।
        </p>
      </div>

    </div>
  );
};
