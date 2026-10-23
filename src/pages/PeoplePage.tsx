import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, ShieldCheck, HeartHandshake, ArrowRight, Info } from 'lucide-react';

export const PeoplePage: React.FC = () => {
  const roleCategories = [
    {
      title: 'Farm Operations Assistant',
      titleBn: 'খামার পরিচালনা সহকারী',
      skillsBn: 'শেড বায়োসিকিউরিটি, ব্রুডিং হিটার নিয়ন্ত্রণ, প্রতিদিনের খাদ্য-পানি বিতরণ এবং পোলট্রির স্বাভাবিক আচরণ পর্যবেক্ষণ।',
      trainingBn: 'রোগের প্রাথমিক লক্ষণ চেনা, শেড জীবাণুমুক্তকরণ এবং স্বাস্থ্যবিধির বাস্তব প্রশিক্ষণ।'
    },
    {
      title: 'Production & Records Assistant',
      titleBn: 'উৎপাদন ও হিসাব সহকারী',
      skillsBn: 'স্মার্টফোনে FarmOS অ্যাপ ব্যবহার, দৈনিক খাদ্য পরিমাপ ও এন্ট্রি, ব্যাচের গড় ওজন এবং মৃত্যুহারের নিখুঁত লগ।',
      trainingBn: 'ডিজিটাল স্প্রেডশিট, মৌলিক এফসিআর গণনা এবং মোবাইল ডেটা ব্যবস্থাপনার ব্যবহারিক পাঠ।'
    },
    {
      title: 'Resource Recovery Operator',
      titleBn: 'জৈব সম্পদ পুনরুদ্ধার অপারেটর',
      skillsBn: 'শুকনো পোলট্রি লিটার ও উদ্ভিজ্জ খড়ের উইন্ডরো স্তূপ তৈরি, থার্মোমিটার দিয়ে তাপমাত্রা পরীক্ষা এবং সি/এন রেশিও নিয়ন্ত্রণ।',
      trainingBn: 'অ্যারোবিক কম্পোস্টিং বায়োলজি, রোগজীবাণু মুক্তকরণ কৌশল এবং জৈব সার ল্যাব টেস্টিং প্রোটোকল।'
    },
    {
      title: 'Nursery Production Assistant',
      titleBn: 'নার্সারি চারা উৎপাদন সহকারী',
      skillsBn: 'প্লাগ ট্রেতে পরিশোধিত কম্পোস্ট মিডিয়া প্রস্তুতকরণ, সুষম সেচ এবং সুস্থ সবজির চারা তৈরি।',
      trainingBn: 'উন্নত বীজ ব্যবস্থাপনা, শিকড় সুদৃঢ়করণ এবং ছত্রাকজনিত রোগ প্রতিরোধ কৌশল।'
    },
    {
      title: 'Future Farm Data & Tech Support',
      titleBn: 'ভবিষ্যৎ কৃষি প্রযুক্তি ও ডেটা সাপোর্ট',
      skillsBn: 'ছোট খামারগুলোতে FarmOS সফটওয়্যার ইনস্টলেশন, ইউজার অনবোর্ডিং এবং ডেটা বিশ্লেষণের সহায়তা।',
      trainingBn: 'ডিজিটাল ফার্ম কনসাল্টিং এবং গ্রামীণ কৃষকদের সফটওয়্যার ব্যবহারে সক্ষম করে তোলা।'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Human Capital & Local Opportunity
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          People & Skills: Growing With Our Community
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          কৃষিতে টেকসই পরিবর্তন আনতে হলে দক্ষ মানুষের প্রয়োজন। পার্বতীপুরের স্থানীয় গ্রামীণ তরুণদের আধুনিক কৃষি প্রযুক্তি, স্বাস্থ্যসম্মত পরিচালনা এবং ডিজিটাল রেকর্ডকিপিংয়ে দক্ষ করে তোলার জন্য আমরা প্রশিক্ষণমুখী কর্মপরিবেশ তৈরিতে বিশ্বাসী।
        </p>
      </div>

      {/* Honest Role Scope Disclosure Notice */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-6 rounded-2xl flex items-start gap-4">
        <Info className="w-5 h-5 text-[#176B4D] shrink-0 mt-0.5" />
        <div className="text-xs font-bn text-[#141917]/80 space-y-1">
          <strong className="text-[#102820] text-sm block">ভূমিকা ও নিয়োগ সংক্রান্ত স্বচ্ছতা:</strong>
          <p>
            নিচে উল্লেখিত পদসমূহ আমাদের খামার পরিচালনার সুনির্দিষ্ট কাজের ক্ষেত্র (Role Categories)। এগুলো বর্তমানে তাৎক্ষণিক শূন্যপদের কোনো কৃত্রিম বিজ্ঞাপন নয়। আমাদের খামার সম্প্রসারণ ও প্রশিক্ষণ কার্যক্রমের অগ্রগতির সাথে সাথে স্থানীয়ভাবে যোগ্য প্রার্থীদের সুযোগ প্রদান করা হবে।
          </p>
        </div>
      </div>

      {/* Training Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#102820]">Practical Learning</h3>
          <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
            কেবল তত্ত্ব নয়, বরং শেডে তাপমাত্রা পরীক্ষা, কম্পোস্টের স্তূপ ওলটপালট এবং ওজন গ্রহণের বাস্তব অভিজ্ঞতার মাধ্যমে শেখা।
          </p>
        </div>

        <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#55B9B0]/20 text-[#102820] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#102820]">Safe & Fair Work</h3>
          <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
            যথাযথ নিরাপত্তা সরঞ্জাম (বুট, গ্লাভস, মাস্ক), নিয়মিত কাজের সময়সীমা এবং শ্রমের ন্যায্য পারিশ্রমিক নিশ্চিত করা।
          </p>
        </div>

        <div className="bg-white border border-[#141917]/10 p-6 rounded-2xl space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#73513A]/15 text-[#73513A] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#102820]">Progression to Skilled Roles</h3>
          <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
            সাধারণ খামার কর্মী থেকে ডিজিটাল রেকর্ডকিপার এবং ভবিষ্যতের ফার্ম ম্যানেজার হিসেবে বেড়ে ওঠার সুস্পষ্ট সুযোগ।
          </p>
        </div>
      </div>

      {/* Role Categories Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#102820]">
          Core Operational Role Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roleCategories.map((role, idx) => (
            <div key={idx} className="bg-white border border-[#141917]/10 rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#73513A]">
                  Category 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#102820]">{role.title}</h3>
                <h4 className="text-xs font-bn text-[#176B4D] font-medium">{role.titleBn}</h4>
                
                <div className="pt-2 text-xs font-bn text-[#141917]/75 space-y-2">
                  <p><strong>দায়িত্ব:</strong> {role.skillsBn}</p>
                  <p><strong>প্রশিক্ষণ:</strong> {role.trainingBn}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#141917]/5 text-xs text-[#176B4D] font-mono">
                Training Focus Area
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
