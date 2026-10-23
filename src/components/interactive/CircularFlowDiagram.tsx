import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck, Info, CheckCircle2, RotateCw } from 'lucide-react';
import { CIRCULAR_FLOW_REGISTRY, CircularFlowLink } from '../../lib/calculations';

interface FlowNode {
  id: string;
  name: string;
  nameBn: string;
  category: string;
  descBn: string;
}

const FLOW_NODES: FlowNode[] = [
  {
    id: 'broiler',
    name: 'Broiler Production',
    nameBn: 'ব্রয়লার শেড',
    category: 'Core Production',
    descBn: 'মাংসের জন্য স্বাস্থ্যবান মুরগি পালন। এখান থেকে ব্যবহৃত নাইট্রোজেনসমৃদ্ধ লিটার উৎপাদিত হয়।'
  },
  {
    id: 'resource-recovery',
    name: 'Resource Recovery Yard',
    nameBn: 'কম্পোস্টিং ও হিউমাস রূপান্তর',
    category: 'Resource Recovery',
    descBn: 'পোলট্রি লিটার ও ধানের খড় মিশিয়ে উইন্ডরো পদ্ধতিতে থার্মোফিলিক অ্যারোবিক কম্পোস্টিং।'
  },
  {
    id: 'nursery',
    name: 'Nursery & Seasonal Crops',
    nameBn: 'নার্সারি ও মৌসুমি চারা',
    category: 'Crop Cultivation',
    descBn: 'পরীক্ষিত কম্পোস্টের মিডিয়া ব্যবহার করে প্লাগ ট্রেতে উন্নত সবজির চারা তৈরি।'
  },
  {
    id: 'clean-organic-waste',
    name: 'Segregated Organic Waste',
    nameBn: 'নির্দিষ্ট পরিচ্ছন্ন উদ্ভিজ্জ উপজাত',
    category: 'Organic Side Streams',
    descBn: 'কীটনাশক ও রাসায়নিকমুক্ত উদ্ভিজ্জ অবশিষ্টাংশ যা লার্ভা খাদ্যের উপযোগী।'
  },
  {
    id: 'bsf-bioconversion',
    name: 'BSF Insect Bioconversion',
    nameBn: 'ব্ল্যাক সোলজার ফ্লাই পাইলট',
    category: 'Pilot Research',
    descBn: 'লার্ভার মাধ্যমে উদ্ভিজ্জ উচ্ছিষ্ট দ্রুত প্রোটিনে রূপান্তরের বৈজ্ঞানিক গবেষণা।'
  },
  {
    id: 'crop-residues',
    name: 'Agricultural Crop Residues',
    nameBn: 'শস্যের খড় ও উদ্ভিজ্জ অংশ',
    category: 'Agricultural Byproducts',
    descBn: 'ধানের পরিষ্কার শুকনো খড় যা মাশরুমের সাবস্ট্রেট হিসেবে পরীক্ষাধীন।'
  },
  {
    id: 'mushroom',
    name: 'Mushroom Cultivation Pilot',
    nameBn: 'মাশরুম সাবস্ট্রেট পাইলট',
    category: 'Pilot Research',
    descBn: 'পাস্তুরাইজড খড়ে ওয়েস্টার মাশরুম উৎপাদন এবং ব্যবহৃত সাবস্ট্রেটের পুনর্ব্যবহার মূল্যায়ন।'
  },
  {
    id: 'aquaculture',
    name: 'Freshwater Aquaculture',
    nameBn: 'পুকুরে মাছ চাষ',
    category: 'Conditional Stream',
    descBn: '২ বছরের পারিবারিক মেয়াদে পরিচালিত পুকুর। এখানে কাঁচা বর্জ্য ফেলা সম্পূর্ণ নিষিদ্ধ।'
  },
  {
    id: 'farmos',
    name: 'FarmOS Digital Management',
    nameBn: 'FarmOS ডিজিটাল কন্ট্রোল',
    category: 'Digital Backbone',
    descBn: 'প্রতিটি ইউনিটের ইনপুট, উৎপাদন, ফিড এফসিআর ও খরচ রিয়েল-টাইমে ট্র্যাক করে।'
  }
];

export const CircularFlowDiagram: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<CircularFlowLink>(CIRCULAR_FLOW_REGISTRY[0]);
  const [activeTab, setActiveTab] = useState<'loops' | 'prohibited' | 'all'>('loops');

  const filteredLinks = CIRCULAR_FLOW_REGISTRY.filter((link) => {
    if (activeTab === 'prohibited') return link.status === 'prohibited';
    if (activeTab === 'loops') return link.status !== 'prohibited';
    return true;
  });

  const getNode = (id: string) => FLOW_NODES.find((n) => n.id === id) || { name: id, nameBn: id, category: 'Unit' };

  return (
    <div className="bg-[#FAF8F3] border border-[#176B4D]/20 rounded-2xl p-6 lg:p-8 shadow-sm">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#141917]/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
            Interactive Resource Loops
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-[#102820] mt-1">
            From Resources to Results
          </h3>
          <p className="text-xs text-[#141917]/70 font-bn mt-0.5">
            একটি ইউনিটের উপজাত কীভাবে পরবর্তী প্রক্রিয়ার ইনপুট হিসেবে যাচাই করা হয় তা অন্বেষণ করুন।
          </p>
        </div>

        {/* Filter Segmented Control (Accessible button tabs) */}
        <div className="inline-flex p-1 bg-[#102820]/5 rounded-lg border border-[#102820]/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('loops')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'loops'
                ? 'bg-[#102820] text-white shadow-sm'
                : 'text-[#102820]/70 hover:text-[#102820]'
            }`}
          >
            Verified Circular Loops
          </button>
          <button
            onClick={() => setActiveTab('prohibited')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              activeTab === 'prohibited'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-rose-700/80 hover:text-rose-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Safety Constraints</span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-[#102820] text-white shadow-sm'
                : 'text-[#102820]/70 hover:text-[#102820]'
            }`}
          >
            View All Connections
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left Column: Link Selector List */}
        <div className="lg:col-span-6 space-y-3">
          <span className="text-xs font-mono uppercase text-[#73513A] tracking-wider block">
            Select A Connection To Inspect
          </span>
          
          <div className="space-y-2.5">
            {filteredLinks.map((link, idx) => {
              const fromNode = getNode(link.from);
              const toNode = getNode(link.to);
              const isSelected = selectedLink.from === link.from && selectedLink.to === link.to;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLink(link)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-2 ${
                    isSelected
                      ? link.status === 'prohibited'
                        ? 'bg-rose-50 border-rose-400 shadow-sm'
                        : 'bg-white border-[#176B4D] shadow-md ring-1 ring-[#176B4D]'
                      : 'bg-white/70 border-[#141917]/10 hover:border-[#176B4D]/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#73513A]">{link.material}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                      link.status === 'active-plan'
                        ? 'bg-emerald-100 text-[#176B4D]'
                        : link.status === 'pilot-candidate'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {link.status === 'active-plan' ? 'Active Plan' : link.status === 'pilot-candidate' ? 'Pilot Candidate' : 'Strictly Prohibited'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#102820]">
                    <span>{fromNode.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#176B4D] shrink-0" />
                    <span>{toNode.name}</span>
                  </div>

                  <p className="text-xs text-[#141917]/70 font-bn">
                    {link.materialBn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Scientific & Safety Inspection Panel */}
        <div className="lg:col-span-6">
          <div className={`p-6 rounded-xl border h-full flex flex-col justify-between ${
            selectedLink.status === 'prohibited'
              ? 'bg-rose-50/80 border-rose-300 text-rose-950'
              : 'bg-[#102820] border-[#176B4D]/40 text-white'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {selectedLink.status === 'prohibited' ? (
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-[#B5F45B]" />
                )}
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  {selectedLink.status === 'prohibited' ? 'Bio-Hazard Warning & Constraint' : 'Validated Operating Protocol'}
                </span>
              </div>

              <div>
                <h4 className={`text-lg font-bold ${selectedLink.status === 'prohibited' ? 'text-rose-900' : 'text-white'}`}>
                  {selectedLink.material}
                </h4>
                <p className={`text-xs font-bn mt-0.5 ${selectedLink.status === 'prohibited' ? 'text-rose-700' : 'text-[#B5F45B]'}`}>
                  {selectedLink.materialBn}
                </p>
              </div>

              {/* Source -> Destination Map */}
              <div className={`p-4 rounded-lg text-xs space-y-2 border ${
                selectedLink.status === 'prohibited'
                  ? 'bg-white border-rose-200'
                  : 'bg-[#0D1F18] border-white/10'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] opacity-70">Source:</span>
                  <span className="font-semibold">{getNode(selectedLink.from).name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] opacity-70">Destination:</span>
                  <span className="font-semibold">{getNode(selectedLink.to).name}</span>
                </div>
              </div>

              {/* Bengali Scientific & Safety Protocol */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider block opacity-75">
                  বৈজ্ঞানিক ও নিরাপত্তা বিশ্লেষণ (Safety & Biological Context):
                </span>
                <p className="text-sm font-bn leading-relaxed">
                  {selectedLink.safetyProtocolBn}
                </p>
              </div>
            </div>

            {/* Bottom Caution note */}
            <div className={`mt-6 pt-4 border-t text-xs font-bn flex items-start gap-2 ${
              selectedLink.status === 'prohibited' ? 'border-rose-200 text-rose-800' : 'border-white/10 text-[#F5F1E7]/70'
            }`}>
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                প্রতিটি সার্কুলার রূপান্তরকে টেকনিক্যাল ও আইনিভাবে নিশ্চিত করার পরই বাস্তবায়িত করা হয়। কেবল একটি ভালো আইডিয়া হিসেবে কোনো বর্জ্য সরাসরি অন্য খাতে ব্যবহার করা হয় না।
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
