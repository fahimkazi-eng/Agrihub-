import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  Activity, 
  Leaf, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  BookOpen,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FarmExplorer3D } from '../components/3d/FarmExplorer3D';
import { CircularFlowDiagram } from '../components/interactive/CircularFlowDiagram';
import { FarmOSMockup } from '../components/interactive/FarmOSMockup';
import { BroilerCostCalculator } from '../components/interactive/BroilerCostCalculator';
import { OPERATIONS } from '../data/operationsData';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { MEDIA_GALLERY, MediaItem } from '../data/mediaData';
import { MediaLightbox } from '../components/media/MediaLightbox';

export const HomePage: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  
  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    organization: '',
    inquiryType: 'general',
    message: '',
    consent: true,
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contact.trim() || !formState.message.trim()) {
      setSubmitStatus('error');
      return;
    }
    // Wire simulation to successful validation
    setSubmitStatus('success');
  };

  return (
    <div className="space-y-24 lg:space-y-36 pb-24 overflow-hidden">
      
      {/* ========================================================
          SECTION 01: CINEMATIC HERO
          ======================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#102820] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#176B4D]/30 overflow-hidden">
        
        {/* Subtle Atmospheric Gradient and Graphic Backdrop */}
        <div className="absolute inset-0 bg-radial from-[#176B4D]/25 via-[#102820]/90 to-[#0A1A14] pointer-events-none" />
        
        {/* Abstract Circular Grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B5F45B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Subtle Region / Brand Flag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-[#B5F45B] uppercase">
            <span>PARBATIPUR · DINAJPUR · BANGLADESH</span>
          </div>

          {/* Main Display Headline (Anti-Slop typography, balanced) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] text-balance">
            AGRICULTURE, RECONNECTED.
          </h1>

          {/* Supporting Natural Bengali Copy */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#F5F1E7]/90 font-bn leading-relaxed text-balance">
            “Parbatipur থেকে আমরা এমন একটি কৃষি ব্যবস্থা গড়ে তোলার লক্ষ্য নিয়ে কাজ করছি, যেখানে খাদ্য উৎপাদন, সম্পদের পুনর্ব্যবহার, স্থানীয় কর্মসংস্থান এবং প্রযুক্তি একে অপরের সঙ্গে সংযুক্ত।”
          </p>

          {/* CTA Button Pair */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/our-system"
              className="w-full sm:w-auto px-8 py-4 bg-[#B5F45B] hover:bg-[#a6ec46] text-[#102820] font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Explore Our System</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/operations"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Discover Our Operations</span>
            </Link>
          </div>

          {/* Realism & Ecosystem Attributes Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-white/10 text-left">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#B5F45B]">Broiler Operation</span>
              <p className="text-sm font-semibold text-white">~500 Birds Scenario</p>
              <p className="text-[11px] text-[#F5F1E7]/60 font-bn">নিয়ন্ত্রিত এফসিআর ও বায়োসিকিউরিটি</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#55B9B0]">Freshwater Pond</span>
              <p className="text-sm font-semibold text-white">2-Yr Rotational Term</p>
              <p className="text-[11px] text-[#F5F1E7]/60 font-bn">শর্তসাপেক্ষ পারিবারিক মেয়াদে চাষ</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#B5F45B]">Organic Recovery</span>
              <p className="text-sm font-semibold text-white">Thermophilic Windrow</p>
              <p className="text-[11px] text-[#F5F1E7]/60 font-bn">৫৫-৬৫°সে. তাপমাত্রায় জীবাণুমুক্ত সার</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#55B9B0]">FarmOS Digital</span>
              <p className="text-sm font-semibold text-white">Lightweight Bangla App</p>
              <p className="text-[11px] text-[#F5F1E7]/60 font-bn">ব্যাচ ট্র্যাকিং ও আর্থিক স্বচ্ছতা</p>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          SECTION 02: THE CORE PHILOSOPHY
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              The Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight">
              One Farm. Connected Systems.
            </h2>
            <p className="text-base text-[#141917]/80 font-bn leading-relaxed">
              আমরা কৃষিকে বিচ্ছিন্ন কোনো কার্যক্রম হিসেবে দেখি না। খাদ্য উৎপাদন, বর্জ্য প্রক্রিয়াকরণ এবং প্রযুক্তির সমন্বয়ে এমন একটি কার্যকর চক্র গড়ে তোলা সম্ভব যেখানে কোনো পুষ্টি উপাদান নষ্ট হবে না এবং প্রতিটি খরচের পেছনে থাকবে যৌক্তিক উপযোগিতা।
            </p>
          </div>

          {/* 3 Visual Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Principle 1 */}
            <div className="bg-white border border-[#176B4D]/20 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center font-bold text-lg font-mono">
                01
              </div>
              <h3 className="text-xl font-bold text-[#102820]">Produce Responsibly</h3>
              <p className="text-sm text-[#141917]/75 font-bn leading-relaxed">
                পরিকল্পিত ৫০০ ব্রয়লার মুরগি ও মিঠাপানির মাছের উৎপাদন। কোনো অবাস্তব ফলনের দাবি নয়; বরং কঠোর স্বাস্থ্যবিধি, সুষম ফিড ও পানির গুণমান নিয়ন্ত্রণে অগ্রাধিকার।
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-white border border-[#176B4D]/20 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#73513A]/10 text-[#73513A] flex items-center justify-center font-bold text-lg font-mono">
                02
              </div>
              <h3 className="text-xl font-bold text-[#102820]">Recover Resources</h3>
              <p className="text-sm text-[#141917]/75 font-bn leading-relaxed">
                পোলট্রি লিটারকে অ্যারোবিক কম্পোস্টিং দ্বারা জীবাণুমুক্ত সার ও নার্সারির মিডিয়ায় রূপান্তর। কাঁচা বিষ্ঠা সরাসরি পুকুরে ফেলা সম্পূর্ণ নিষিদ্ধ।
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-white border border-[#176B4D]/20 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#55B9B0]/15 text-[#102820] flex items-center justify-center font-bold text-lg font-mono">
                03
              </div>
              <h3 className="text-xl font-bold text-[#102820]">Measure Everything</h3>
              <p className="text-sm text-[#141917]/75 font-bn leading-relaxed">
                FarmOS সফটওয়্যারের মাধ্যমে দৈনিক খাদ্য গ্রহণ, ওজন, এফসিআর ও নগদ প্রবাহ ট্র্যাকিং। অনুমাননির্ভর সিদ্ধান্ত পরিহার করে তথ্যের ভিত্তিতে খরচ নিয়ন্ত্রণ।
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 03: INTERACTIVE 3D FARM ECOSYSTEM
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Spatial Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight mt-1">
              Interactive Farm Ecosystem
            </h2>
            <p className="text-sm text-[#141917]/75 font-bn mt-1 max-w-2xl">
              পার্বতীপুর খামারের বিভিন্ন অঞ্চল থ্রিডি মডেলে দেখুন। প্রতিটি জোনে ক্লিক করে এর ভূমিকা, ইনপুট, আউটপুট ও বর্তমান উন্নয়ন অবস্থা যাচাই করুন।
            </p>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            3D Canvas Engine · Software-WebGL Optimized
          </div>
        </div>

        {/* 3D Component */}
        <FarmExplorer3D />
      </section>

      {/* ========================================================
          SECTION 04: HOW THE CIRCULAR SYSTEM WORKS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CircularFlowDiagram />
      </section>

      {/* ========================================================
          SECTION 05: OUR OPERATIONS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Comprehensive Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight mt-1">
              Principal Business Units
            </h2>
            <p className="text-sm text-[#141917]/75 font-bn mt-1 max-w-2xl">
              মূল উৎপাদন থেকে শুরু করে জৈব সম্পদ পুনরুদ্ধার ও পরীক্ষামূলক গবেষণা—প্রতিটি কার্যক্রমের স্পষ্ট ভূমিকা ও পর্যায়।
            </p>
          </div>
          <Link
            to="/operations"
            className="text-xs font-mono uppercase text-[#176B4D] hover:underline flex items-center gap-1 self-start md:self-auto font-semibold"
          >
            <span>View All Operations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetric Bento / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATIONS.slice(0, 6).map((op) => (
            <div
              key={op.id}
              className="bg-white border border-[#141917]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#176B4D]/40 hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#73513A] uppercase tracking-wider text-[11px]">
                    {op.category.replace('-', ' ')}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${op.badgeColor}`}>
                    {op.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors">
                    {op.title}
                  </h3>
                  <h4 className="text-xs font-bn text-[#176B4D] mt-0.5 font-medium">
                    {op.titleBn}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
                  {op.shortDescBn}
                </p>

                {/* Key Inputs / Outputs */}
                <div className="pt-3 border-t border-[#141917]/5 text-xs space-y-1 font-mono text-slate-600">
                  <div className="truncate">
                    <span className="text-slate-400">In:</span> {op.inputs.map(i => i.name).slice(0, 2).join(', ')}
                  </div>
                  <div className="truncate">
                    <span className="text-slate-400">Out:</span> {op.outputs.map(o => o.name).slice(0, 2).join(', ')}
                  </div>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-6 mt-4 border-t border-[#141917]/5 flex items-center justify-between">
                <Link
                  to={`/operations/${op.slug}`}
                  className="text-xs font-semibold text-[#102820] hover:text-[#176B4D] transition-colors flex items-center gap-1"
                >
                  <span>Explore Unit Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 06: TECHNOLOGY IN AGRICULTURE (FarmOS)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
            Technology in Agriculture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight">
            Data for Better Decisions
          </h2>
          <p className="text-sm text-[#141917]/80 font-bn leading-relaxed">
            FarmOS হলো খামারির নিজস্ব প্রযুক্তিতে তৈরি একটি হালকা, বাংলা-বান্ধব ফার্ম ম্যানেজমেন্ট সিস্টেম। এটি প্রতিটি ব্যাচের খাবার, বাচ্চার বৃদ্ধি, মৃত্যুহার ও খরচের পুঙ্খানুপুঙ্খ হিসাব রেখে আর্থিক ক্ষতি প্রতিরোধ করে।
          </p>
        </div>

        <FarmOSMockup />
      </section>

      {/* ========================================================
          INTERACTIVE CALCULATOR: BROILER ECONOMICS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BroilerCostCalculator />
      </section>

      {/* ========================================================
          SECTION 07: RESOURCE RECOVERY STORY
          ======================================================== */}
      <section className="bg-[#102820] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-[#176B4D]/40">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <span className="text-xs font-mono uppercase tracking-wider text-[#B5F45B]">
            Biological Truth & Rigor
          </span>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bn font-semibold text-white leading-relaxed text-balance">
            “বর্জ্যকে কাজে লাগানোর ধারণা তখনই কার্যকর, যখন সংগ্রহ, প্রক্রিয়াকরণ, গুণমান, নিরাপত্তা এবং বিক্রয়—প্রতিটি ধাপ বাস্তবে যাচাই করা হয়।”
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8 border-t border-white/10 text-xs font-bn text-[#F5F1E7]/80">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-bold text-white text-sm">১. কোনো কাঁচা বর্জ্য পুকুরে নয়</h4>
              <p>কাঁচা পোলট্রি বিষ্ঠা সরাসরি পানিতে ফেললে বিষাক্ত গ্যাস ও অ্যামোনিয়া তৈরি হয়ে মাছ ধ্বংস হয়। সম্পূর্ণ পরিশোধিত উপজাত ছাড়া কোনো সংযোগ গ্রহণযোগ্য নয়।</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-bold text-white text-sm">২. থার্মোফিলিক তাপমাত্রা মানদণ্ড</h4>
              <p>কম্পোস্টিংয়ের সময় তাপমাত্রা ৫৫-৬৫ ডিগ্রি সেলসিয়াসে তুলে ৩-৫ দিন বজায় রেখে প্যাথোজেন ধ্বংস নিশ্চিত করা বাধ্যতামূলক।</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-bold text-white text-sm">৩. বাণিজ্যিক ছাড়ের পূর্বে ল্যাব পরীক্ষা</h4>
              <p>ভারী ধাতু ও আর্দ্রতা পরীক্ষার ফলাফল সন্তোষজনক না হওয়া পর্যন্ত কোনো জৈব সার বাণিজ্যিকভাবে ছাড় বা বিপণন করা হয় না।</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 08: PEOPLE AND LOCAL OPPORTUNITY
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Community & Skill Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight mt-1">
              Growing With Our Community
            </h2>
            <p className="text-sm text-[#141917]/75 font-bn mt-1 max-w-2xl">
              পার্বতীপুরের গ্রামীণ তরুণদের আধুনিক কৃষি পরিচালনা, জৈবনিরাপত্তা ও ডিজিটাল হিসাবরক্ষণে হাতে-কলমে প্রশিক্ষণ দিয়ে টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি।
            </p>
          </div>
          <Link
            to="/people"
            className="text-xs font-mono uppercase text-[#176B4D] hover:underline flex items-center gap-1 self-start md:self-auto font-semibold"
          >
            <span>Learn About Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#73513A] uppercase block">Role Category</span>
            <h3 className="text-base font-bold text-[#102820]">Farm Operations Assistant</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              শেডের বায়োসিকিউরিটি, ব্রুডিং তাপমাত্রা পর্যবেক্ষণ এবং দৈনিক খাদ্য-পানি তদারকি।
            </p>
          </div>
          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#73513A] uppercase block">Role Category</span>
            <h3 className="text-base font-bold text-[#102820]">Production & Records Assistant</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              FarmOS অ্যাপে দৈনিক খাদ্য ইনপুট, ফ্লকের গড় ওজন এবং মৃত্যুহারের নিখুঁত ডেটা এন্ট্রি।
            </p>
          </div>
          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#73513A] uppercase block">Role Category</span>
            <h3 className="text-base font-bold text-[#102820]">Resource Recovery Operator</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              উইন্ডরো কম্পোস্টিংয়ে আর্দ্রতা পরীক্ষা, তাপমাত্রা লগ এবং নিয়মিত স্তূপ ওলটপালট।
            </p>
          </div>
          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-xl space-y-3">
            <span className="text-xs font-mono text-[#73513A] uppercase block">Role Category</span>
            <h3 className="text-base font-bold text-[#102820]">Nursery Production Assistant</h3>
            <p className="text-xs text-[#141917]/70 font-bn">
              প্লাগ ট্রেতে পুষ্টিকর কম্পোস্ট মিডিয়া প্রস্তুতকরণ, বীজ বপন এবং সবল চারার যত্ন।
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: MEDIA PREVIEW (Inside the System)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Visual Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight mt-1">
              Inside the System
            </h2>
            <p className="text-sm text-[#141917]/75 font-bn mt-1 max-w-2xl">
              খামার ভূপ্রকৃতি, শেড প্রযুক্তি, পানি পরীক্ষা ও কম্পোস্টিং সাইটের চিত্রশালা।
            </p>
          </div>
          <Link
            to="/media"
            className="text-xs font-mono uppercase text-[#176B4D] hover:underline flex items-center gap-1 self-start md:self-auto font-semibold"
          >
            <span>Open Media Center</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Gallery Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_GALLERY.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white border border-[#141917]/10 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-video bg-[#091712] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                <span className="font-mono text-xs text-[#B5F45B] z-20 absolute bottom-3 left-3">
                  {item.categoryLabel}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 group-hover:scale-110 transition-transform flex items-center justify-center text-white z-20">
                  <Sparkles className="w-4 h-4 text-[#B5F45B]" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs font-bn text-[#141917]/70 line-clamp-2">
                  {item.captionBn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 10: RESEARCH, UPDATES AND INSIGHTS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Educational Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102820] tracking-tight mt-1">
              Explore the Thinking
            </h2>
            <p className="text-sm text-[#141917]/75 font-bn mt-1 max-w-2xl">
              বিজ্ঞানভিত্তিক গবেষণা, খামার অর্থনীতি, পানির গুণমান এবং সার্কুলার বর্জ্য ব্যবস্থাপনার ওপর পূর্ণাঙ্গ শিক্ষামূলক প্রবন্ধ।
            </p>
          </div>
          <Link
            to="/knowledge"
            className="text-xs font-mono uppercase text-[#176B4D] hover:underline flex items-center gap-1 self-start md:self-auto font-semibold"
          >
            <span>All 10 Knowledge Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KNOWLEDGE_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white border border-[#141917]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#176B4D]/40 hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#73513A]">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#102820] group-hover:text-[#176B4D] transition-colors leading-snug">
                  {article.title}
                </h3>
                <h4 className="text-xs font-bn text-[#176B4D] font-medium">
                  {article.titleBn}
                </h4>
                <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
                  {article.summaryBn}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#141917]/5">
                <Link
                  to={`/knowledge/${article.slug}`}
                  className="text-xs font-semibold text-[#102820] hover:text-[#176B4D] transition-colors flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 11: CONTACT AND COLLABORATION
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#176B4D]/25 rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Context & Invitation */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102820] tracking-tight mt-1">
                  Build Better Agriculture Together
                </h2>
              </div>

              <p className="text-sm text-[#141917]/80 font-bn leading-relaxed">
                আমরা সম্ভাব্য পাইকারি ক্রেতা, নির্ভরযোগ্য খাদ্য ও বাচ্চা সরবরাহকারী, কৃষি গবেষক এবং টেকসই কৃষিতে আগ্রহী অংশীদারদের সাথে অর্থবহ আলোচনার আহ্বান জানাই।
              </p>

              <div className="space-y-3 pt-4 border-t border-[#141917]/10 text-xs">
                <div>
                  <span className="font-mono text-[#73513A] uppercase block">Location</span>
                  <span className="font-medium text-[#102820]">Parbatipur, Dinajpur District, Rangpur Division, Bangladesh</span>
                </div>
                <div>
                  <span className="font-mono text-[#73513A] uppercase block">Direct Inquiries</span>
                  <span className="font-mono text-[#102820]">contact@parbatipuragritech.com</span>
                </div>
              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#102820] block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Md. Shahidul Islam"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#102820] block">
                      Email or Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.contact}
                      onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                      placeholder="e.g. 017xxxxxxxx or name@email.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#102820] block">
                      Organization / Farm Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="e.g. Dinajpur Agro Trading"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#102820] block">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
                    >
                      <option value="wholesale">Wholesale Purchase (Broiler / Fish / Seedlings)</option>
                      <option value="supplier">Supply & Feed Procurement</option>
                      <option value="research">Academic / Technical Research Collaboration</option>
                      <option value="farmos">FarmOS Software Partnership</option>
                      <option value="general">General Agricultural Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#102820] block">
                    Message / Collaboration Proposal *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="আপনার বার্তা বা প্রস্তাব এখানে লিখুন..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D] font-bn"
                  />
                </div>

                {/* Feedback State */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bn flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ধন্যবাদ! আপনার বার্তাটি সঠিকভাবে গৃহীত হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 text-xs font-bn flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>অনুগ্রহ করে আপনার নাম, যোগাযোগের নম্বর/ইমেইল এবং বার্তা সঠিকভাবে পূরণ করুন।</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <MediaLightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

    </div>
  );
};
