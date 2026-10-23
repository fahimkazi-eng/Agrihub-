import React, { useState } from 'react';
import { 
  BarChart3, 
  Activity, 
  Droplets, 
  DollarSign, 
  CheckCircle, 
  AlertCircle, 
  Thermometer, 
  Calendar,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

export const FarmOSMockup: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'poultry' | 'aquaculture' | 'compost' | 'finance'>('poultry');

  return (
    <div className="bg-[#141917] border border-[#176B4D]/40 rounded-2xl overflow-hidden shadow-2xl text-white">
      
      {/* Top Application Bar */}
      <div className="bg-[#091712] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#176B4D] flex items-center justify-center font-bold text-white text-sm">
            F
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide">FarmOS Core</span>
              <span className="text-[10px] font-mono uppercase bg-[#176B4D]/30 text-[#B5F45B] px-2 py-0.5 rounded border border-[#B5F45B]/30">
                Illustrative Software Preview
              </span>
            </div>
            <span className="text-xs text-[#F5F1E7]/60 font-bn">
              পার্বতীপুর খামার ব্যবস্থাপনা ও ডেটা ট্র্যাকিং সিস্টেম
            </span>
          </div>
        </div>

        {/* Module Switcher Buttons */}
        <div className="inline-flex p-1 bg-white/5 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveModule('poultry')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeModule === 'poultry' ? 'bg-[#176B4D] text-white shadow-sm' : 'text-[#F5F1E7]/70 hover:text-white'
            }`}
          >
            Poultry Batch
          </button>
          <button
            onClick={() => setActiveModule('aquaculture')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeModule === 'aquaculture' ? 'bg-[#55B9B0] text-[#102820] shadow-sm font-semibold' : 'text-[#F5F1E7]/70 hover:text-white'
            }`}
          >
            Pond Water & Fish
          </button>
          <button
            onClick={() => setActiveModule('compost')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeModule === 'compost' ? 'bg-[#73513A] text-white shadow-sm' : 'text-[#F5F1E7]/70 hover:text-white'
            }`}
          >
            Compost Windrows
          </button>
          <button
            onClick={() => setActiveModule('finance')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeModule === 'finance' ? 'bg-[#176B4D] text-white shadow-sm' : 'text-[#F5F1E7]/70 hover:text-white'
            }`}
          >
            Batch Cashflow
          </button>
        </div>
      </div>

      {/* Main Software Canvas */}
      <div className="p-6 lg:p-8 space-y-6">
        
        {/* Module 1: Poultry Batch Management */}
        {activeModule === 'poultry' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#B5F45B] uppercase">Batch Active #B-26-01 · Shed 01</span>
                <h4 className="text-lg font-bold text-white mt-0.5">Broiler Growth & Daily Intake Monitor</h4>
              </div>
              <div className="text-right sm:text-right text-xs text-[#F5F1E7]/60 font-mono">
                Placement: Day 24 of 35 · 500 Birds Placed
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Current Avg Weight</span>
                <div className="text-2xl font-bold font-mono text-[#B5F45B] mt-1">1.28 kg</div>
                <span className="text-[11px] text-emerald-400 font-bn">লক্ষ্যমাত্রা অনুযায়ী সঠিক</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Cumulative FCR</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">1.48</div>
                <span className="text-[11px] text-emerald-400 font-bn">দক্ষ খাদ্য রূপান্তর</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Cumulative Mortality</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">6 / 500</div>
                <span className="text-[11px] text-[#F5F1E7]/60 font-bn">মৃত্যুহার ১.২% (স্বাভাবিক)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Today's Feed Intake</span>
                <div className="text-2xl font-bold font-mono text-[#55B9B0] mt-1">62.5 kg</div>
                <span className="text-[11px] text-[#F5F1E7]/60 font-bn">৪ বার সুষম প্রদান</span>
              </div>
            </div>

            {/* Daily Intake Log Table */}
            <div className="bg-black/30 rounded-xl p-4 border border-white/10 overflow-x-auto">
              <span className="text-xs font-mono uppercase text-[#B5F45B] block mb-3">Recent 4-Day Shed Log</span>
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="text-[#F5F1E7]/60 border-b border-white/10 pb-2">
                    <th className="py-2">Age</th>
                    <th className="py-2">Feed (kg)</th>
                    <th className="py-2">Water (L)</th>
                    <th className="py-2">Mortality</th>
                    <th className="py-2">Avg Wt (g)</th>
                    <th className="py-2">Observations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#F5F1E7]/90">
                  <tr>
                    <td className="py-2.5">Day 24</td>
                    <td>62.5</td>
                    <td>145</td>
                    <td>0</td>
                    <td>1,280</td>
                    <td className="text-emerald-400 font-bn">সক্রিয়, লিটার ঝরঝরে ও শুকনো</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Day 23</td>
                    <td>59.0</td>
                    <td>138</td>
                    <td>1</td>
                    <td>1,210</td>
                    <td className="text-emerald-400 font-bn">স্বাভাবিক খাদ্য গ্রহণ</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Day 22</td>
                    <td>56.2</td>
                    <td>130</td>
                    <td>0</td>
                    <td>1,145</td>
                    <td className="text-emerald-400 font-bn">ফিনিশার ফিডে রূপান্তর সম্পন্ন</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Day 21</td>
                    <td>53.0</td>
                    <td>122</td>
                    <td>0</td>
                    <td>1,080</td>
                    <td className="text-emerald-400 font-bn">সপ্তাহ ৩ ওজন পরিমাপ ও রেকর্ড</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Module 2: Aquaculture Water & Fish Log */}
        {activeModule === 'aquaculture' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#55B9B0] uppercase">Family Pond #01 · 2-Year Rotational Term</span>
                <h4 className="text-lg font-bold text-white mt-0.5">Water Chemistry & Carp Biomass Tracking</h4>
              </div>
              <div className="text-xs text-[#F5F1E7]/60 font-mono">
                Cycle Month: 8 of 24 · Conditional Access Window
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Dissolved Oxygen (DO)</span>
                <div className="text-2xl font-bold font-mono text-[#55B9B0] mt-1">6.4 mg/L</div>
                <span className="text-[11px] text-emerald-400 font-bn">সকাল ৬:৩০ রিডিং (আদর্শ)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Water pH Level</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">7.8</div>
                <span className="text-[11px] text-emerald-400 font-bn">ক্ষারত্ব উপযুক্ত (৭.৫-৮.৫)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Secchi Transparency</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">32 cm</div>
                <span className="text-[11px] text-emerald-400 font-bn">প্লাঙ্কটন ঘনত্ব সন্তোষজনক</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Total Ammonia (TAN)</span>
                <div className="text-2xl font-bold font-mono text-[#B5F45B] mt-1">0.02 mg/L</div>
                <span className="text-[11px] text-emerald-400 font-bn">বিষাক্ততার ঝুঁকি মুক্ত</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#55B9B0]/10 border border-[#55B9B0]/30 text-xs font-bn text-[#F5F1E7]/90 leading-relaxed">
              <strong>অ্যাক্সেস মেয়াদের নির্দেশনা:</strong> পারিবারিক চুক্তির ৮তম মাস চলছে। পোর্টেবল টেস্ট কিট ও সীমিত অবকাঠামো ব্যবহৃত হচ্ছে। নির্ধারিত মেয়াদ শেষে সমস্ত হিসাব সমন্বয় করে অংশীদারদের কাছে পুকুর হস্তান্তর প্রক্রিয়া স্বয়ংক্রিয়ভাবে সূচিত হবে।
            </div>
          </div>
        )}

        {/* Module 3: Composting Windrow Log */}
        {activeModule === 'compost' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#B5F45B] uppercase">Windrow Pile #W-04 · Thermophilic Phase</span>
                <h4 className="text-lg font-bold text-white mt-0.5">Poultry Litter Composting Temperature Log</h4>
              </div>
              <div className="text-xs text-[#F5F1E7]/60 font-mono">
                Day 19 of 50 · Moisture: 54%
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Core Temperature</span>
                <div className="text-2xl font-bold font-mono text-[#B5F45B] mt-1">62.5 °C</div>
                <span className="text-[11px] text-emerald-400 font-bn">থার্মোফিলিক প্যাথোজেন কিল</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Turn Cycle Status</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">3rd Turn</div>
                <span className="text-[11px] text-[#F5F1E7]/60 font-bn">পরবর্তী ওলটপালট: ৪ দিন পর</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Starting Weight</span>
                <div className="text-2xl font-bold font-mono text-white mt-1">850 kg</div>
                <span className="text-[11px] text-[#F5F1E7]/60 font-bn">লিটার ও খড়ের মিশ্রণ</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-[#F5F1E7]/70 block">Projected Output</span>
                <div className="text-2xl font-bold font-mono text-[#55B9B0] mt-1">~420 kg</div>
                <span className="text-[11px] text-[#F5F1E7]/60 font-bn">পরিশোধিত ঝরঝরে হিউমাস</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-bn text-[#F5F1E7]/80">
              উইন্ডরো স্তূপে ৫৫ ডিগ্রি সেলসিয়াসের ওপরে তাপমাত্রা একটানা ৭২ ঘণ্টা বজায় থাকায় সালমোনেলা বা কৃমির ডিম্বাণু নিষ্ক্রিয় হয়েছে। কিউরিং শেষে এটি নার্সারি ট্রের মিডিয়া হিসেবে ব্যবহৃত হবে।
            </div>
          </div>
        )}

        {/* Module 4: Batch Cashflow */}
        {activeModule === 'finance' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#B5F45B] uppercase">Batch Financial Ledger · Working Capital</span>
                <h4 className="text-lg font-bold text-white mt-0.5">Broiler Batch B-26-01 Cost & Expense Distribution</h4>
              </div>
              <div className="text-xs text-[#F5F1E7]/60 font-mono">
                Projected Live Meat: ~980 kg
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-[#F5F1E7]/60 font-mono">Total Capital Committed</span>
                <div className="text-2xl font-bold font-mono text-white">৳ 1,42,800</div>
                <span className="text-xs text-[#F5F1E7]/70 font-bn">বাচ্চা, ফিড ও পরিচালন</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-[#F5F1E7]/60 font-mono">Projected Revenue (@ 175 BDT)</span>
                <div className="text-2xl font-bold font-mono text-[#B5F45B]">৳ 1,71,500</div>
                <span className="text-xs text-[#F5F1E7]/70 font-bn">৯৮০ কেজি লাইভ বার্ড বিক্রয়</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-[#F5F1E7]/60 font-mono">Projected Batch Margin</span>
                <div className="text-2xl font-bold font-mono text-[#55B9B0]">৳ 28,700</div>
                <span className="text-xs text-[#F5F1E7]/70 font-bn">নিট প্রফিট ২০.১%</span>
              </div>
            </div>

            {/* Expense breakdown chart simulation */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-[#F5F1E7]/70 block">Cost Distribution Matrix</span>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Commercial Feed (68.4%)</span>
                    <span>৳ 97,600</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#176B4D] h-full" style={{ width: '68.4%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Day-Old Chicks DOC (15.7%)</span>
                    <span>৳ 22,500</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#B5F45B] h-full" style={{ width: '15.7%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Overhead, Power & Health (15.9%)</span>
                    <span>৳ 22,700</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#55B9B0] h-full" style={{ width: '15.9%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Honesty & Operational Scope Notice */}
      <div className="bg-[#091712] px-6 py-4 border-t border-white/10 text-xs font-bn text-[#F5F1E7]/70 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#B5F45B] shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white block">সতর্কতা ও সিস্টেমের পরিধি:</span>
          এখানে প্রদর্শিত তথ্যসমূহ FarmOS এর পরিকল্পিত ইন্টারফেস ও পরীক্ষামূলক ডেটা মডেল। এটি কোনো স্বয়ংক্রিয় পশুচিকিৎসা ডায়াগনস্টিক নয়। খাদ্য বা পানি গ্রহণে কোনো অস্বাভাবিক হ্রাস-বৃদ্ধি দেখা দিলে এটি কেবল পরিচালনাকারীকে সতর্ক করে যাতে সরাসরি মাঠ পরিদর্শন ও পশুচিকিৎসকের পরামর্শ নেওয়া যায়।
        </div>
      </div>

    </div>
  );
};
