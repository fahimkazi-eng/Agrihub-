import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggle = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Clarifications & Common Questions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          পার্বতীপুর সার্কুলার এগ্রিটেক হাবের কার্যক্রম, সার্কুলার সংযোগ, ব্রয়লার ব্যবস্থাপনা, পারিবারিক পুকুর ও প্রযুক্তি সংক্রান্ত সাধারণ প্রশ্ন ও স্পষ্ট উত্তর।
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-white border border-[#141917]/10 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF8F3] transition-colors"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#73513A] uppercase tracking-wider">
                    {item.question}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#102820] font-bn">
                    {item.questionBn}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-[#176B4D]/10 text-[#176B4D] shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-[#141917]/5 text-sm font-bn text-[#141917]/80 leading-relaxed bg-[#FAF8F3]/50">
                  {item.answerBn}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions? */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-8 rounded-2xl text-center space-y-4">
        <h3 className="text-xl font-bold text-[#102820]">আরও কোনো প্রশ্ন রয়েছে?</h3>
        <p className="text-xs font-bn text-[#141917]/70 max-w-lg mx-auto">
          আপনার কোনো নির্দিষ্ট প্রযুক্তিগত বা ব্যবসায়িক জিজ্ঞাসা থাকলে আমাদের সরাসরি লিখতে পারেন।
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-2.5 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
        >
          Contact Our Team
        </Link>
      </div>

    </div>
  );
};
