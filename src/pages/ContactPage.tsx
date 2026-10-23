import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    organization: '',
    inquiryType: 'commercial',
    message: '',
    consent: true,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name (আপনার পুরো নাম লিখুন)।');
      return;
    }
    if (!form.contact.trim() || form.contact.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Please provide a valid phone number or email address (সঠিক ফোন নম্বর বা ইমেইল প্রদান করুন)।');
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please write a detailed message of at least 10 characters (আপনার বার্তাটি বিস্তারিত লিখুন)।');
      return;
    }

    // Submission succeeded
    setStatus('success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
          Collaboration & Contact
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102820] tracking-tight">
          Work With Us / Contact Hub
        </h1>
        <p className="text-base sm:text-lg text-[#141917]/80 font-bn leading-relaxed">
          আমরা সম্ভাব্য পাইকারি ক্রেতা, নির্ভরযোগ্য উপকরণ সরবরাহকারী, কৃষি গবেষক এবং কৃষিপ্রযুক্তিতে আগ্রহী তরুণদের সাথে কাজ করতে আগ্রহী। আপনার সুনির্দিষ্ট প্রস্তাব বা অনুসন্ধান নিচে পাঠান।
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-[#102820]">
              <div className="w-10 h-10 rounded-xl bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold">Physical Location</h3>
                <span className="text-xs text-[#73513A] font-mono">PARBATIPUR, DINAJPUR</span>
              </div>
            </div>
            <p className="text-xs font-bn text-[#141917]/75 leading-relaxed">
              পার্বতীপুর উপজেলা, দিনাজপুর জেলা, রংপুর বিভাগ, বাংলাদেশ। (পারিবারিক গোপনীয়তার সুরক্ষার্থে সুনির্দিষ্ট জমির দাগ নম্বর বা ব্যক্তিগত বাড়ির ঠিকানা উন্মুক্ত করা হয়নি; অনুমোদিত ব্যবসায়িক পরিদর্শনের পূর্বে লিখিত সমন্বয় করা হয়)।
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#141917]/10 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-[#102820]">
              <div className="w-10 h-10 rounded-xl bg-[#176B4D]/10 text-[#176B4D] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold">Official Inquiries Email</h3>
                <span className="text-xs text-[#73513A] font-mono">contact@parbatipuragritech.com</span>
              </div>
            </div>
            <p className="text-xs font-bn text-[#141917]/75 leading-relaxed">
              বাণিজ্যিক ক্রয়াদেশ, প্রযুক্তিগত পরামর্শ ও সরবরাহকারী নিবন্ধনের জন্য আমাদের প্রাথমিক ইমেইল যোগাযোগের ঠিকানা।
            </p>
          </div>

          <div className="bg-[#102820] text-white p-6 rounded-2xl border border-[#176B4D]/30 space-y-3">
            <h4 className="text-sm font-bold text-[#B5F45B] uppercase font-mono">Areas of Open Collaboration</h4>
            <ul className="space-y-2 text-xs font-bn text-[#F5F1E7]/80 divide-y divide-white/5">
              <li className="pt-2">· ব্রয়লার ও মাছের পাইকারি ব্যাচ ক্রয় চুক্তি</li>
              <li className="pt-2">· গুণগত মানসম্পন্ন ফিড ও বাচ্চার নির্ভরযোগ্য সরবরাহ</li>
              <li className="pt-2">· বিশ্ববিদ্যালয় ও কৃষি গবেষণাগারের যৌথ প্রযুক্তি পাইলট</li>
              <li className="pt-2">· FarmOS প্ল্যাটফর্মের মাঠ পর্যায়ের সম্প্রসারণ</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#141917]/10 p-8 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <h3 className="text-xl font-bold text-[#102820]">
              Send an Official Inquiry
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#102820] block">
                  Full Name (আপনার নাম) *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Md. Shahidul Islam"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#102820] block">
                  Phone Number or Email (ফোন বা ইমেইল) *
                </label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="e.g. 017xxxxxxxx or user@gmail.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#102820] block">
                  Organization / Farm Name (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder="e.g. Green Agro Enterprise"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#102820] block">
                  Inquiry Nature (অনুসন্ধানের ধরন)
                </label>
                <select
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D]"
                >
                  <option value="commercial">Wholesale Buyer (পাইকারি ক্রেতা)</option>
                  <option value="supplier">Input & Feed Supplier (সরবরাহকারী)</option>
                  <option value="research">Technical & Academic Research (গবেষণা অংশীদার)</option>
                  <option value="farmos">FarmOS Technology Deployment (প্রযুক্তি ব্যবহার)</option>
                  <option value="general">General Agricultural Inquiry (সাধারণ অনুসন্ধান)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#102820] block">
                Detailed Message or Proposal (আপনার বার্তা বা প্রস্তাব) *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="আপনার প্রস্তাব বা অনুসন্ধান বিস্তারিত লিখুন..."
                className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#141917]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#176B4D] font-bn"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="consentCheck"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="rounded text-[#176B4D] focus:ring-[#176B4D]"
              />
              <label htmlFor="consentCheck" className="text-xs text-[#141917]/70 font-bn">
                আমি নিশ্চিত করছি যে প্রদত্ত তথ্যসমূহ সঠিক এবং যোগাযোগের উদ্দেশ্যে ব্যবহারের অনুমতি দিচ্ছি।
              </label>
            </div>

            {/* Validation Feedback */}
            {status === 'success' && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bn text-emerald-900 space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>বার্তা সফলভাবে প্রেরিত হয়েছে!</span>
                </div>
                <p>আমাদের প্রতিনিধি আপনার বার্তাটি পর্যালোচনা করে দ্রুততম সময়ে যোগাযোগ করবেন।</p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-rose-50 border border-rose-300 rounded-xl text-xs font-bn text-rose-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-3 bg-[#102820] hover:bg-[#176B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Transmit Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};
