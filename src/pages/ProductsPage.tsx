import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ProductItem } from '../data/productsData';
import { ArrowRight, Info, CheckCircle2, Send, AlertCircle } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryContact, setInquiryContact] = useState('');
  const [inquiryVolume, setInquiryVolume] = useState('');
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryContact.trim()) {
      setInquiryStatus('error');
      return;
    }
    setInquiryStatus('success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Commercial Outputs & Pipeline
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Products & Planned Agricultural Outputs
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          আমরা কোনো কৃত্রিম প্রাপ্যতা বা ভুয়া ‘ইন-স্টক’ দাবি করি না। খামারের নির্ধারিত ব্যাচ ও উৎপাদনের পর্যায় অনুযায়ী আমাদের উৎপাদিত পণ্যের বিস্তারিত বিবরণ নিচে দেওয়া হলো। প্রকৃত পাইকারি বা প্রাতিষ্ঠানিক ক্রেতারা আগাম অনুসন্ধান জমা দিতে পারেন।
        </p>
      </div>

      {/* Honesty Banner */}
      <div className="bg-[#FAF8F3] border border-[#176B4D]/30 p-6 rounded-2xl flex items-start gap-4">
        <Info className="w-5 h-5 text-[#176B4D] shrink-0 mt-0.5" />
        <div className="text-xs font-bn text-[#141917]/80 space-y-1">
          <strong className="text-[#102820] text-sm block">উৎপাদন ও প্রাপ্যতা নীতিমালা:</strong>
          <p>
            ব্রয়লার মুরগি পর্যায়ক্রমিক ব্যাচভিত্তিক (৩৫ দিন চক্র) উৎপাদিত হয়; মিঠাপানির মাছ নির্দিষ্ট মৌসুমি আহরণকালে এবং পারিবারিক পুকুর ব্যবহারের নিশ্চিত মেয়াদের মধ্যে সরবরাহ করা হয়; আর প্রক্রিয়াজাত জৈব সার পরীক্ষাগারে মান নিশ্চিতকরণ সাপেক্ষে বাজারজাতকরণের জন্য প্রস্তুত করা হয়।
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-[#141917]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#176B4D]/40 hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#73513A] uppercase tracking-wider text-[11px]">
                  {prod.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-800 border border-slate-200">
                  {prod.status}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#102820]">{prod.title}</h3>
                <h4 className="text-xs font-bn text-[#176B4D] font-medium mt-0.5">{prod.titleBn}</h4>
              </div>

              <p className="text-xs text-[#141917]/75 font-bn leading-relaxed">
                {prod.descriptionBn}
              </p>

              {/* Specs List */}
              <div className="pt-3 border-t border-[#141917]/5 space-y-2">
                {prod.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">{sp.label}:</span>
                    <span className="font-semibold text-[#102820]">{sp.value}</span>
                  </div>
                ))}
              </div>

              {/* Availability Notice */}
              <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#141917]/5 text-[11px] font-bn text-[#141917]/75">
                {prod.availabilityNoticeBn}
              </div>

            </div>

            <div className="pt-6 mt-4 border-t border-[#141917]/5">
              <button
                onClick={() => {
                  setSelectedProduct(prod);
                  setInquiryStatus('idle');
                }}
                className="w-full py-2.5 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Submit Availability Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Inquiry Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-[#176B4D]/40 shadow-2xl">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-[#176B4D] uppercase">Availability Inquiry</span>
                <h3 className="text-lg font-bold text-[#102820] mt-0.5">{selectedProduct.title}</h3>
                <p className="text-xs font-bn text-slate-600">{selectedProduct.titleBn}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-mono p-1"
              >
                ✕
              </button>
            </div>

            {inquiryStatus === 'success' ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bn text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>অনুসন্ধান সফলভাবে গৃহীত হয়েছে!</span>
                </div>
                <p>
                  আপনার চাহিদা লিপিবদ্ধ করা হয়েছে। পরবর্তী ব্যাচ বা আহরণের সময়সূচি নিশ্চিত হলে আমাদের প্রতিনিধি আপনার দেওয়া নম্বরে যোগাযোগ করবেন।
                </p>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mt-3 px-4 py-2 bg-[#102820] text-white rounded text-xs uppercase"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Md. Hasan"
                    className="w-full px-3 py-2 text-xs border rounded-lg focus:ring-1 focus:ring-[#176B4D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">Phone or Email *</label>
                  <input
                    type="text"
                    required
                    value={inquiryContact}
                    onChange={(e) => setInquiryContact(e.target.value)}
                    placeholder="017xxxxxxxx"
                    className="w-full px-3 py-2 text-xs border rounded-lg focus:ring-1 focus:ring-[#176B4D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 block">Estimated Required Quantity / Volume</label>
                  <input
                    type="text"
                    value={inquiryVolume}
                    onChange={(e) => setInquiryVolume(e.target.value)}
                    placeholder="e.g. 100 birds / 50 kg fish / 2,000 seedlings"
                    className="w-full px-3 py-2 text-xs border rounded-lg focus:ring-1 focus:ring-[#176B4D]"
                  />
                </div>

                {inquiryStatus === 'error' && (
                  <p className="text-xs font-bn text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>দয়া করে নাম এবং যোগাযোগের তথ্য পূরণ করুন।</span>
                  </p>
                )}

                <div className="flex items-center justify-end gap-3 pt-3 border-t">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold rounded-lg uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
