export interface BroilerBatchParams {
  birdCount: number;
  chickCost: number; // BDT per day-old chick
  feedCostPerKg: number; // BDT per kg feed
  targetWeightKg: number; // Expected live weight kg (e.g., 2.0)
  fcr: number; // Feed Conversion Ratio (e.g., 1.55)
  mortalityRatePercent: number; // e.g., 4%
  otherCostPerBird: number; // Medicine, bedding, electricity, labor per bird
  salePricePerKg: number; // Market wholesale price BDT per kg
}

export interface BroilerBatchResult {
  survivingBirds: number;
  totalMeatKg: number;
  totalFeedConsumedKg: number;
  chickTotalCost: number;
  feedTotalCost: number;
  otherTotalCost: number;
  totalCost: number;
  totalRevenue: number;
  netMargin: number;
  costPerKgMeat: number;
  marginPerBird: number;
}

export function calculateBroilerBatch(params: BroilerBatchParams): BroilerBatchResult {
  const birdCount = Math.max(1, params.birdCount);
  const mortality = Math.min(Math.max(0, params.mortalityRatePercent), 100) / 100;
  const survivingBirds = Math.round(birdCount * (1 - mortality));
  const totalMeatKg = survivingBirds * params.targetWeightKg;

  // Average feed calculation factoring flock average over 35-38 days
  const feedPerBirdKg = params.targetWeightKg * params.fcr;
  const totalFeedConsumedKg = birdCount * feedPerBirdKg * 0.98; // slight deduction for early mortality

  const chickTotalCost = birdCount * params.chickCost;
  const feedTotalCost = totalFeedConsumedKg * params.feedCostPerKg;
  const otherTotalCost = birdCount * params.otherCostPerBird;
  const totalCost = chickTotalCost + feedTotalCost + otherTotalCost;

  const totalRevenue = totalMeatKg * params.salePricePerKg;
  const netMargin = totalRevenue - totalCost;
  const costPerKgMeat = totalMeatKg > 0 ? totalCost / totalMeatKg : 0;
  const marginPerBird = birdCount > 0 ? netMargin / birdCount : 0;

  return {
    survivingBirds,
    totalMeatKg: Math.round(totalMeatKg * 10) / 10,
    totalFeedConsumedKg: Math.round(totalFeedConsumedKg),
    chickTotalCost: Math.round(chickTotalCost),
    feedTotalCost: Math.round(feedTotalCost),
    otherTotalCost: Math.round(otherTotalCost),
    totalCost: Math.round(totalCost),
    totalRevenue: Math.round(totalRevenue),
    netMargin: Math.round(netMargin),
    costPerKgMeat: Math.round(costPerKgMeat * 100) / 100,
    marginPerBird: Math.round(marginPerBird * 100) / 100,
  };
}

export interface CircularFlowLink {
  from: string;
  to: string;
  material: string;
  materialBn: string;
  status: 'active-plan' | 'pilot-candidate' | 'future-study' | 'prohibited';
  safetyProtocolBn: string;
}

export const CIRCULAR_FLOW_REGISTRY: CircularFlowLink[] = [
  {
    from: 'broiler',
    to: 'resource-recovery',
    material: 'Poultry Litter & Bedding',
    materialBn: 'পোলট্রি লিটার ও কাঠের গুঁড়ো',
    status: 'active-plan',
    safetyProtocolBn: 'শুষ্ক অবস্থায় সংগ্রহ, নিয়মিত তাপমাত্রা পরীক্ষা এবং বায়োসিকিউরিটি বজায় রেখে কম্পোস্টিং ইয়ার্ডে স্থানান্তর।',
  },
  {
    from: 'resource-recovery',
    to: 'nursery',
    material: 'Tested Organic Compost',
    materialBn: 'পরীক্ষিত জৈব কম্পোস্ট ও ভার্মিকম্পোস্ট',
    status: 'active-plan',
    safetyProtocolBn: 'পরিপক্কতা নিশ্চিতকরণ, ক্ষতিকর জীবাণু ও প্যাথোজেন মুক্ত করা এবং উপযুক্ত সি/এন (C:N) অনুপাত বজায় রাখা।',
  },
  {
    from: 'broiler',
    to: 'aquaculture',
    material: 'Direct Untreated Manure Discharge',
    materialBn: 'অপরিশোধিত কাঁচা বিষ্ঠা সরাসরি পুকুরে ফেলা',
    status: 'prohibited',
    safetyProtocolBn: 'কড়া নিষেধ: কাঁচা বিষ্ঠা সরাসরি পুকুরে দিলে অ্যামোনিয়া বিষক্রিয়া ও পানির অক্সিজেন শূন্য হতে পারে। কেবলমাত্র সম্পূর্ণ প্রক্রিয়াজাত উপাদানই অনুমোদিত।',
  },
  {
    from: 'clean-organic-waste',
    to: 'bsf-bioconversion',
    material: 'Segregated Clean Plant Residues',
    materialBn: 'নির্দিষ্ট নিরাপদ উদ্ভিজ্জ বর্জ্য',
    status: 'pilot-candidate',
    safetyProtocolBn: 'যাচাই বাছাইকৃত ফিডস্টক, ভারী ধাতু ও কীটনাশক মুক্ততা এবং নিয়ন্ত্রিত লার্ভা ব্রিডিং প্রোটোকল।',
  },
  {
    from: 'crop-residues',
    to: 'mushroom',
    material: 'Sterilized Straw & Substrate',
    materialBn: 'জীবাণুমুক্ত খড় ও কাঠের তুষ',
    status: 'pilot-candidate',
    safetyProtocolBn: 'সাবস্ট্রেট অটোক্লেভিং বা স্টিমিং, সংক্রমণ নিয়ন্ত্রণ এবং আর্দ্রতা পর্যবেক্ষণ।',
  },
  {
    from: 'farmos',
    to: 'all',
    material: 'Operational Data & Analytics',
    materialBn: 'উৎপাদন ও ব্যয় বিশ্লেষণ ডেটা',
    status: 'active-plan',
    safetyProtocolBn: 'প্রতিটি ব্যাচের ওজন, ফিড ইনপুট, মৃত্যুহার এবং মুনাফা ট্র্যাকিং দ্বারা সঠিক সিদ্ধান্ত গ্রহণ।',
  },
];

export function validateCircularConnection(fromId: string, toId: string): CircularFlowLink | undefined {
  return CIRCULAR_FLOW_REGISTRY.find(link => link.from === fromId && link.to === toId);
}
