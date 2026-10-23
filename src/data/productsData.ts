export interface ProductItem {
  id: string;
  title: string;
  titleBn: string;
  category: string;
  categoryBn: string;
  status: string;
  statusBn: string;
  statusType: 'planning' | 'conditional' | 'testing' | 'development';
  specs: { label: string; labelBn: string; value: string; valueBn: string }[];
  descriptionBn: string;
  availabilityNoticeBn: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'broiler-birds',
    title: 'Market-Ready Broiler Meat Birds',
    titleBn: 'পরিপক্ক ব্রয়লার মুরগি (লাইভ বার্ড)',
    category: 'Poultry',
    categoryBn: 'পোলট্রি মাংস',
    status: 'Core Planning Scenario',
    statusBn: 'পরিকল্পিত ব্যাচ উৎপাদন',
    statusType: 'planning',
    specs: [
      { label: 'Target Live Weight', labelBn: 'গড় জীবন্ত ওজন', value: '1.90 - 2.10 kg', valueBn: '১.৯০ - ২.১০ কেজি' },
      { label: 'Growing Cycle', labelBn: 'উৎপাদন চক্র', value: '33 - 36 Days', valueBn: '৩৩ - ৩৬ দিন' },
      { label: 'Initial Planning Batch', labelBn: 'প্রাথমিক পরিকল্পিত ব্যাচ', value: '~500 birds', valueBn: 'প্রায় ৫০০ মুরগি' },
      { label: 'Feed Regimen', labelBn: 'খাদ্য তালিকা', value: 'Commercial Tested Crumbles', valueBn: 'মানসম্মত ক্রাম্বল ও পিলেট' }
    ],
    descriptionBn: 'উন্নত শেড ব্যবস্থাপনা, নিয়মিত বিশুদ্ধ পানি ও সুষম খাদ্যের মাধ্যমে রোগমুক্ত ও অ্যান্টিবায়োটিক অবশিষ্টমুক্ত মাংসের উপযোগী ব্রয়লার উৎপাদন।',
    availabilityNoticeBn: 'উৎপাদন ব্যাচভিত্তিক হওয়ার কারণে আগাম অনুসন্ধান সাপেক্ষে পাইকারি ক্রয়ের জন্য বুকিং নেওয়া হবে।'
  },
  {
    id: 'freshwater-fish',
    title: 'Freshwater Table Fish (Seasonal)',
    titleBn: 'মিঠাপানির দেশীয় মাছ (মৌসুমি আহরণ)',
    category: 'Aquaculture',
    categoryBn: 'মিঠাপানির মাছ',
    status: 'Conditional Access Stream',
    statusBn: 'শর্তসাপেক্ষ মৌসুমি আহরণ',
    statusType: 'conditional',
    specs: [
      { label: 'Species Mix', labelBn: 'প্রজাতির সংমিশ্রণ', value: 'Rohu, Catla, Mrigal, Grass Carp', valueBn: 'রুই, কাতলা, মৃগেল ও গ্রাস কার্প' },
      { label: 'Harvest Weight', labelBn: 'আহরণকালীন গড় ওজন', value: '0.80 - 1.80 kg', valueBn: '০.৮০ - ১.৮০ কেজি' },
      { label: 'Pond Water Type', labelBn: 'পানির উৎস', value: 'Natural Freshwater Family Pond', valueBn: 'প্রাকৃতিক সুপেয় পারিবারিক পুকুর' },
      { label: 'Access Horizon', labelBn: 'ব্যবহারের মেয়াদ', value: 'Confirmed 2-Year Family Window', valueBn: 'নির্ধারিত ২ বছরের পারিবারিক মেয়াদ' }
    ],
    descriptionBn: 'ভাসমান খাবারের পাশাপাশি প্রাকৃতিক ফাইটোপ্ল্যাঙ্কটন ও জুপ্ল্যাঙ্কটন নির্ভর স্বাস্থ্যসম্মত মাছ। নির্ধারিত মেয়াদের মধ্যে আংশিক ও চূড়ান্ত আহরণের মাধ্যমে স্থানীয় বাজারে সরবরাহ।',
    availabilityNoticeBn: 'কেবলমাত্র নিশ্চিত পুকুর ব্যবহারের অনুমোদিত মেয়াদের মধ্যে মৌসুমি আহরণকালে সরবরাহ করা হবে।'
  },
  {
    id: 'nursery-seedlings',
    title: 'High-Vigor Vegetable Seedlings',
    titleBn: 'উন্নত জাতের সবজির চারা (ট্রে কালচার)',
    category: 'Nursery',
    categoryBn: 'নার্সারি চারা',
    status: 'Active Development',
    statusBn: 'সক্রিয় উন্নয়ন পর্যায়',
    statusType: 'development',
    specs: [
      { label: 'Varieties', labelBn: 'জাতসমূহ', value: 'Tomato, Cauliflower, Cabbage, Chilli', valueBn: 'টমেটো, ফুলকপি, বাঁধাকপি, মরিচ' },
      { label: 'Root Structure', labelBn: 'শিকড় ব্যবস্থাপনা', value: 'Plug-Tray Root-Trained', valueBn: 'ট্রে-কালচার অবিকৃত শিকড়' },
      { label: 'Substrate Base', labelBn: 'মিডিয়া ভিত্তি', value: 'Sterile Cocopeat & Cured Compost', valueBn: 'জীবাণুমুক্ত কোকোপিট ও কম্পোস্ট' }
    ],
    descriptionBn: 'প্লাগ ট্রেতে উৎপাদিত হওয়ায় জমিতে রোপণের পর কোনো চারা মারা যায় না এবং দ্রুত মাটিতে শিকড় ছড়িয়ে দেয়। স্থানীয় আবহাওয়ার সাথে খাপ খাওয়ানো চারা।',
    availabilityNoticeBn: 'মৌসুমি ক্যালেন্ডার অনুযায়ী স্থানীয় চাষি ও গৃহস্থদের আগাম চাহিদার ভিত্তিতে সরবরাহ করা হবে।'
  },
  {
    id: 'organic-compost',
    title: 'Tested Cured Organic Compost',
    titleBn: 'পরিশোধিত থার্মোফিলিক জৈব কম্পোস্ট',
    category: 'Resource Recovery',
    categoryBn: 'জৈব সার ও ভূমি উন্নয়ন',
    status: 'Active Testing & Standards Compliance',
    statusBn: 'ল্যাব পরীক্ষা ও মানদণ্ড যাচাই',
    statusType: 'testing',
    specs: [
      { label: 'Origin', labelBn: 'উৎস কাঁচামাল', value: 'Poultry Bedding Litter & Crop Straw', valueBn: 'পোলট্রি লিটার ও উদ্ভিজ্জ অবশিষ্টাংশ' },
      { label: 'Process', labelBn: 'প্রক্রিয়াজাতকরণ', value: 'Aerated Thermophilic Windrow (55-65°C)', valueBn: 'উচ্চতাপীয় অ্যারোবিক উইন্ডরো' },
      { label: 'Form', labelBn: 'শারীরিক রূপ', value: 'Granular, Dark, Odorless Humus', valueBn: 'ঝরঝরে, কালো, গন্ধহীন হিউমাস' },
      { label: 'Curing Time', labelBn: 'পরিপক্কতার মেয়াদ', value: '45 - 60 Days', valueBn: '৪৫ - ৬০ দিন' }
    ],
    descriptionBn: 'মাটির পানি ধারণক্ষমতা ও উপকারী ব্যাকটেরিয়া বৃদ্ধির জন্য আদর্শ। ক্ষতিকর রোগজীবাণুমুক্ত এবং মাটির অম্লত্ব-ক্ষারত্বের ভারসাম্য রক্ষা করে।',
    availabilityNoticeBn: 'বাণিজ্যিক বিক্রয়ের পূর্বে উপযুক্ত ল্যাব পরীক্ষা এবং জাতীয় মানদণ্ডের আনুষ্ঠানিক অনুমোদন সাপেক্ষে সহজলভ্য হবে।'
  },
  {
    id: 'farmos-digital',
    title: 'FarmOS Digital Management Suite',
    titleBn: 'FarmOS ডিজিটাল ফার্ম ম্যানেজমেন্ট সার্ভিস',
    category: 'AgriTech',
    categoryBn: 'ডিজিটাল প্ল্যাটফর্ম',
    status: 'Internal Pilot & Future Service',
    statusBn: 'অভ্যন্তরীণ ব্যবহার ও ভবিষ্যৎ সেবা',
    statusType: 'development',
    specs: [
      { label: 'Interface', labelBn: 'ইন্টারফেস', value: 'Lightweight Web & Mobile in Bangla', valueBn: 'বাংলা ভাষায় দ্রুত লোড হওয়া ওয়েব অ্যাপ' },
      { label: 'Core Modules', labelBn: 'প্রধান মডিউল', value: 'Flock FCR, Pond Logs, Batch Costing', valueBn: 'এফসিআর, মাছের লগ ও ব্যাচ খরচ শিট' },
      { label: 'Offline Capable', labelBn: 'অফলাইন ব্যবহার', value: 'Local caching for village connectivity', valueBn: 'দুর্বল ইন্টারনেটেও লোকাল ক্যাশিং' }
    ],
    descriptionBn: 'ক্ষুদ্র খামারিদের জন্য সহজে প্রতিটি ব্যাচের খাদ্য, ওজন, ওষুধ ও নগদ প্রবাহ ট্র্যাকিংয়ের বাংলা সফটওয়্যার। অভ্যন্তরীণ খামারে যাচাইয়ের পর স্থানীয় অন্যান্য খামারিদের সেবায় সম্প্রসারণের লক্ষ্য।',
    availabilityNoticeBn: 'বর্তমানে অভ্যন্তরীণ অপারেশনে ট্রায়াল চলছে। পরবর্তী ধাপে সহযোগী খামারিদের জন্য উন্মুক্ত করা হবে।'
  }
];
