import React, { useState, useMemo } from 'react';
import { calculateBroilerBatch, BroilerBatchParams } from '../../lib/calculations';
import { Calculator, Info, TrendingUp, DollarSign, Scale, RefreshCw } from 'lucide-react';

export const BroilerCostCalculator: React.FC = () => {
  const [params, setParams] = useState<BroilerBatchParams>({
    birdCount: 500,
    chickCost: 45,
    feedCostPerKg: 65,
    targetWeightKg: 2.0,
    fcr: 1.55,
    mortalityRatePercent: 4,
    otherCostPerBird: 15,
    salePricePerKg: 175,
  });

  const results = useMemo(() => calculateBroilerBatch(params), [params]);

  const handleChange = (field: keyof BroilerBatchParams, value: number) => {
    setParams(prev => ({ ...prev, [field]: value }));
  };

  const resetDefaults = () => {
    setParams({
      birdCount: 500,
      chickCost: 45,
      feedCostPerKg: 65,
      targetWeightKg: 2.0,
      fcr: 1.55,
      mortalityRatePercent: 4,
      otherCostPerBird: 15,
      salePricePerKg: 175,
    });
  };

  return (
    <div className="bg-white border border-[#176B4D]/20 rounded-2xl p-6 lg:p-8 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#141917]/10">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#176B4D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#176B4D] font-semibold">
              Batch Economics Simulation
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#102820] mt-1">
            Broiler Production Cost & Margin Calculator
          </h3>
          <p className="text-xs text-[#141917]/70 font-bn mt-0.5">
            ৫০০ মুরগির প্রাথমিক ব্যাচের অর্থনৈতিক অনুমানের ওপর ভিত্তি করে নিজস্ব ডেটা দিয়ে হিসাব যাচাই করুন।
          </p>
        </div>

        <button
          onClick={resetDefaults}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#102820]/70 hover:text-[#102820] bg-[#FAF8F3] hover:bg-[#F5F1E7] border border-[#141917]/10 rounded-lg transition-colors self-start"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Main Grid: Inputs on Left, Output Metrics on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left: Interactive Input Controls */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono uppercase text-[#73513A] tracking-wider block">
            Flock Assumptions & Variable Inputs
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Bird Count */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Flock Size (বাচ্চার সংখ্যা)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="50"
                  max="5000"
                  step="50"
                  value={params.birdCount}
                  onChange={(e) => handleChange('birdCount', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">birds (মুরগি)</span>
              </div>
            </div>

            {/* Chick Price */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Day-Old Chick Price (বাচ্চার দর)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="20"
                  max="100"
                  step="1"
                  value={params.chickCost}
                  onChange={(e) => handleChange('chickCost', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">BDT / chick</span>
              </div>
            </div>

            {/* Feed Cost Per Kg */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Feed Cost (ফিডের মূল্য)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="40"
                  max="120"
                  step="1"
                  value={params.feedCostPerKg}
                  onChange={(e) => handleChange('feedCostPerKg', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">BDT / kg</span>
              </div>
            </div>

            {/* FCR */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Feed Conversion Ratio (FCR)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="1.3"
                  max="2.2"
                  step="0.05"
                  value={params.fcr}
                  onChange={(e) => handleChange('fcr', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">target ratio</span>
              </div>
            </div>

            {/* Target Weight */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Target Live Weight (গড় ওজন)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="1.4"
                  max="3.0"
                  step="0.1"
                  value={params.targetWeightKg}
                  onChange={(e) => handleChange('targetWeightKg', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">kg / bird</span>
              </div>
            </div>

            {/* Mortality Rate */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Mortality Rate (মৃত্যুহার)
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.5"
                  value={params.mortalityRatePercent}
                  onChange={(e) => handleChange('mortalityRatePercent', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">% of flock</span>
              </div>
            </div>

            {/* Other Cost Per Bird */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Medicine, Bedding & Power
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="5"
                  max="40"
                  step="1"
                  value={params.otherCostPerBird}
                  onChange={(e) => handleChange('otherCostPerBird', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">BDT / bird</span>
              </div>
            </div>

            {/* Sale Price Per Kg */}
            <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#141917]/5 space-y-1.5">
              <label className="text-xs font-medium text-[#102820] block">
                Wholesale Market Sale Price
              </label>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="120"
                  max="250"
                  step="5"
                  value={params.salePricePerKg}
                  onChange={(e) => handleChange('salePricePerKg', Number(e.target.value))}
                  className="w-24 px-2.5 py-1 text-sm font-mono border border-slate-300 rounded bg-white"
                />
                <span className="text-xs text-slate-500">BDT / kg</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Calculated Results Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#102820] text-white p-6 rounded-xl border border-[#176B4D]/40 shadow-lg">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B5F45B] block">
              Estimated Batch Performance
            </span>

            {/* Large Highlight Margin */}
            <div className="pb-4 border-b border-white/10">
              <div className="text-xs text-[#F5F1E7]/70 font-bn">আনুমানিক নিট মার্জিন (Estimated Net Margin):</div>
              <div className={`text-3xl font-extrabold tracking-tight font-mono mt-1 ${
                results.netMargin >= 0 ? 'text-[#B5F45B]' : 'text-rose-400'
              }`}>
                ৳ {results.netMargin.toLocaleString()}
              </div>
              <div className="text-xs text-[#F5F1E7]/80 mt-1 font-bn">
                গড় লাভ প্রতি মুরগিতে: ৳ {results.marginPerBird}
              </div>
            </div>

            {/* Cost Breakdown Table */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[#F5F1E7]/80">
                <span>Surviving Birds:</span>
                <span className="font-semibold text-white">{results.survivingBirds} birds</span>
              </div>
              <div className="flex items-center justify-between text-[#F5F1E7]/80">
                <span>Total Live Meat Produced:</span>
                <span className="font-semibold text-white">{results.totalMeatKg} kg</span>
              </div>
              <div className="flex items-center justify-between text-[#F5F1E7]/80">
                <span>Total Feed Consumed:</span>
                <span className="font-semibold text-white">{results.totalFeedConsumedKg} kg</span>
              </div>
              <div className="flex items-center justify-between text-[#F5F1E7]/80 pt-2 border-t border-white/10">
                <span>Day-Old Chick Expense:</span>
                <span>৳ {results.chickTotalCost.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-[#F5F1E7]/80">
                <span>Feed Expense ({((results.feedTotalCost / results.totalCost) * 100).toFixed(0)}% of cost):</span>
                <span>৳ {results.feedTotalCost.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-[#F5F1E7]/80">
                <span>Other Costs (Bedding/Health):</span>
                <span>৳ {results.otherTotalCost.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-[#B5F45B] font-bold pt-2 border-t border-white/10">
                <span>Total Production Cost:</span>
                <span>৳ {results.totalCost.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-white font-bold">
                <span>Gross Revenue:</span>
                <span>৳ {results.totalRevenue.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-[#55B9B0] pt-1">
                <span>Breakeven Cost Per Kg:</span>
                <span>৳ {results.costPerKgMeat} / kg</span>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimers */}
          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#F5F1E7]/60 font-bn space-y-1">
            <p>
              *সতর্কবার্তা: এটি একটি শিক্ষামূলক অর্থনৈতিক সিমুলেটর। কোনো নিশ্চিত লাভের গ্যারান্টি প্রদান করে না। বাজারের ফিড মূল্য, ফ্লকের সুস্থতা ও বিক্রয়মূল্যের তারতম্য অনুযায়ী বাস্তব ফলাফল ভিন্ন হতে পারে।
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
