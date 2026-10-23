import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Identity & Organizational Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          About Parbatipur Circular Agritech Hub
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          আমরা উত্তরবঙ্গের পার্বতীপুর থেকে একটি সংযুক্ত ও টেকসই কৃষি ব্যবস্থা গড়ে তোলার লক্ষ্য নিয়ে কাজ করছি। আমাদের বিশ্বাস—প্রযুক্তি এবং পরিবেশের সঠিক সমন্বয় ঘটাতে পারলে একটি ছোট পারিবারিক খামারও হয়ে উঠতে পারে আধুনিক কৃষি অর্থনীতির আদর্শ কেন্দ্র।
        </p>
      </div>

      {/* Mission & Vision Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white border border-[#176B4D]/25 p-8 rounded-2xl space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D]">Our Mission</span>
          <h2 className="text-2xl font-bold text-[#102820]">আমাদের মিশন</h2>
          <p className="text-sm text-[#141917]/80 font-bn leading-relaxed">
            খাদ্য উৎপাদনের প্রতিটি ধাপে সম্পদের অপচয় ন্যূনতম পর্যায়ে নামিয়ে আনা, ক্ষতিকর রাসায়নিকের ওপর নির্ভরতা কমিয়ে নিরাপদ জৈব সম্পদ পুনর্ব্যবহার করা, এবং ডিজিটাল ডেটা ট্র্যাকিংয়ের সাহায্যে খামার পরিচালনায় আর্থিক স্বচ্ছতা নিশ্চিত করা।
          </p>
        </div>

        <div className="bg-white border border-[#176B4D]/25 p-8 rounded-2xl space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#55B9B0]/20 text-[#102820] flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#55B9B0]">Our Vision</span>
          <h2 className="text-2xl font-bold text-[#102820]">আমাদের ভিশন</h2>
          <p className="text-sm text-[#141917]/80 font-bn leading-relaxed">
            উত্তরবঙ্গের কৃষি খাতকে আধুনিক জ্ঞান ও সার্কুলার বায়ো-ইকোনমির সাথে সংযুক্ত করা, যাতে স্থানীয় গ্রামীণ যুবকদের জন্য সম্মানজনক ও দক্ষ কর্মসংস্থান সৃষ্টি হয় এবং অন্যান্য প্রান্তিক খামারিরা এই মডেল থেকে প্রযুক্তিগত সহায়তা গ্রহণ করতে পারেন।
          </p>
        </div>

      </div>

      {/* Why Parbatipur? */}
      <div className="bg-[#FAF8F3] border border-[#141917]/10 p-8 lg:p-10 rounded-2xl space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-[#73513A]">
            <MapPin className="w-5 h-5 text-[#176B4D]" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">Geographic Context</span>
          </div>
          <h3 className="text-2xl font-bold text-[#102820]">Why Parbatipur, Dinajpur?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-bn text-[#141917]/80">
          <div className="p-5 bg-white rounded-xl border border-[#141917]/5 space-y-2">
            <h4 className="font-bold text-sm text-[#102820]">১. উর্বর পলল সমভূমি</h4>
            <p>দিনাজপুরের আবহাওয়া ও সমতল ভূপ্রকৃতি খাদ্যশস্য ও পোলট্রি উৎপাদনের জন্য অত্যন্ত উপযোগী। পর্যাপ্ত ভূগর্ভস্থ পানি ও সূর্যালোক পরিবেশ বান্ধব খামার পরিচালনায় সহায়ক।</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#141917]/5 space-y-2">
            <h4 className="font-bold text-sm text-[#102820]">২. শক্তিশালী রেল ও সড়ক যোগাযোগ</h4>
            <p>পার্বতীপুর উত্তরবঙ্গের একটি প্রধান রেলওয়ে জংশন ও যোগাযোগ কেন্দ্র। এখান থেকে রংপুর, দিনাজপুর ও নীলফামারীসহ বৃহত্তর বাজারে পণ্য সরবরাহ অত্যন্ত সহজসাধ্য।</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#141917]/5 space-y-2">
            <h4 className="font-bold text-sm text-[#102820]">৩. প্রাণবন্ত তরুণ জনশক্তি</h4>
            <p>এ অঞ্চলে প্রচুর পরিশ্রমী ও আগ্রহী তরুণ রয়েছেন যারা আধুনিক প্রযুক্তি ও বিজ্ঞানভিত্তিক কৃষিতে কাজ করতে আগ্রহী। তাদের দক্ষতা বৃদ্ধিই আমাদের অন্যতম লক্ষ্য।</p>
          </div>
        </div>
      </div>

      {/* Grounded Honesty Code */}
      <div className="bg-[#102820] text-white p-8 lg:p-10 rounded-2xl border border-[#176B4D]/40 space-y-4">
        <h3 className="text-xl font-bold text-white">Our Commitments to Public Truthfulness</h3>
        <p className="text-xs font-bn text-[#F5F1E7]/80 leading-relaxed max-w-3xl">
          আমরা কোনো বানানো প্রতিষ্ঠাতা জীবনী, অতিরঞ্জিত বছর সংখ্যার দাবি বা কাল্পনিক অংশীদারের লোগো প্রদর্শন করি না। আমাদের উদ্দেশ্য বাস্তব ও পরিমিত—আমরা যা পরীক্ষা করেছি তা সত্য হিসেবে বলি, যা পাইলট পর্যায়ে রয়েছে তাকে পাইলট হিসেবে প্রকাশ করি এবং যা দীর্ঘমেয়াদী লক্ষ্য তা স্পষ্ট করি। এই স্বচ্ছতাই আমাদের কাজের সবচেয়ে বড় ভিত্তি।
        </p>
      </div>

    </div>
  );
};
