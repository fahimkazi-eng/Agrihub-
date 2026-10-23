export interface OperationItem {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  category: 'core-production' | 'circular-recovery' | 'future-exploration' | 'digital-management';
  status: 'Core Planning Scenario' | 'Conditional Access Stream' | 'Active Development' | 'Pilot Research Candidate' | 'Future Feasibility Study';
  statusBn: 'মূল পরিকল্পনা' | 'শর্তসাপেক্ষ কার্যক্রম' | 'সক্রিয় উন্নয়ন' | 'পাইলট গবেষণা' | 'ভবিষ্যৎ সম্ভাব্যতা যাচাই';
  badgeColor: string;
  shortDesc: string;
  shortDescBn: string;
  overviewBn: string;
  operationalDetails: {
    heading: string;
    headingBn: string;
    points: { en: string; bn: string }[];
  }[];
  inputs: { name: string; nameBn: string; source: string }[];
  outputs: { name: string; nameBn: string; destination: string }[];
  safetyAndConstraintsBn: string;
  timelineSteps?: { step: string; stepBn: string; period: string; detailsBn: string }[];
}

export const OPERATIONS: OperationItem[] = [
  {
    id: 'broiler-production',
    slug: 'broiler-production',
    title: 'Broiler Production',
    titleBn: 'ব্রয়লার মুরগি উৎপাদন ও ব্যবস্থাপনা',
    category: 'core-production',
    status: 'Core Planning Scenario',
    statusBn: 'মূল পরিকল্পনা',
    badgeColor: 'text-[#176B4D] bg-[#176B4D]/10 border-[#176B4D]/30',
    shortDesc: 'A proposed meat production unit with rigorous flock management, biosecurity, feed conversion efficiency, and batch economics.',
    shortDescBn: 'নিয়ন্ত্রিত খামার ব্যবস্থাপনা, জৈবনিরাপত্তা, খাদ্য রূপান্তর দক্ষতা (FCR) এবং ব্যাচভিত্তিক অর্থনৈতিক ট্র্যাকিংয়ের মাধ্যমে মাংস উৎপাদন।',
    overviewBn: 'পার্বতীপুরের খামারে প্রাথমিকভাবে ৫০০ ব্রয়লার মুরগির একটি পরিকল্পিত ব্যাচ দিয়ে কার্যক্রম শুরুর পরিকল্পনা করা হয়েছে। এটি কোনো প্রমাণিত পরিচালন সক্ষমতা নয়, বরং একটি সুনির্দিষ্ট পরিকল্পনা অনুমান। প্রতিটি ব্যাচে বাচ্চার সুস্থতা, বৈজ্ঞানিক আলো ও বাতাস চলাচল, পানির মান এবং খাদ্য দক্ষতা কঠোরভাবে পর্যবেক্ষণ করা হবে।',
    operationalDetails: [
      {
        heading: 'Flock Husbandry & Shed Design',
        headingBn: 'শেড নির্মাণ ও পরিচর্যা কৌশল',
        points: [
          { en: 'East-west oriented ventilated poultry shed ensuring optimal air flow and natural cooling in northern Bangladesh climate.', bn: 'উত্তরবঙ্গের জলবায়ুর সাথে মানানসই পূর্ব-পশ্চিমমুখী শেড নকশা, যা পর্যাপ্ত বাতাস চলাচল ও শীতলতা নিশ্চিত করে।' },
          { en: 'Suspended bell drinkers and tube feeders adjusted regularly to bird eye level to prevent feed spillage.', bn: 'বয়স অনুযায়ী উচ্চতা পরিবর্তনযোগ্য ড্রিংকার ও ফিডার ব্যবহার, যা খাদ্যের অপচয় ও পানি উপচে পড়া রোধ করে।' },
          { en: 'Dry rice husk or wood shaving deep litter bedding maintained at 2-3 inches thickness with regular raking.', bn: '২-৩ ইঞ্চি পুরু শুকনো ধানের তুষ বা কাঠের গুঁড়োর লিটার বিছানা, যা নিয়মিত আলোড়ন করে আর্দ্রতামুক্ত রাখা হবে।' }
        ]
      },
      {
        heading: 'Biosecurity Protocols',
        headingBn: 'জৈবনিরাপত্তা (Biosecurity) প্রটোকল',
        points: [
          { en: 'Footbaths with approved disinfectant at every shed entry point with dedicated footwear.', bn: 'শেডের প্রবেশমুখে কার্যকর জীবাণুনাশক ফুটবাথ এবং খামারের ভেতরে আলাদা কাজের জুতো পরিধানের বাধ্যবাধকতা।' },
          { en: 'Strict visitor restriction and vehicle disinfection at farm boundary to prevent pathogens.', bn: 'খামারে বহিরাগতদের প্রবেশ কঠোরভাবে সীমিত রাখা এবং গাড়ি জীবাণুমুক্তকরণের ব্যবস্থা।' },
          { en: 'Scheduled shed downtime of 10-14 days between consecutive batches for thorough cleaning and sanitation.', bn: 'দুই ব্যাচের মাঝে ১০-১৪ দিনের বিরতি রেখে শেড ধৌতকরণ, চুনকাম ও জীবাণুমুক্তকরণ সম্পন্ন করা।' }
        ]
      },
      {
        heading: 'Performance Metrics & Economics',
        headingBn: 'উৎপাদন সূচক ও অর্থনৈতিক পরিমাপ',
        points: [
          { en: 'Target FCR (Feed Conversion Ratio) between 1.50 - 1.60 for a 35-day growing cycle.', bn: '৩৫ দিনের উৎপাদন চক্রে খাদ্য রূপান্তর অনুপাত (FCR) ১.৫০ থেকে ১.৬০ এর মধ্যে ধরে রাখার লক্ষ্যমাত্রা।' },
          { en: 'Target live bird weight of 1.90 - 2.10 kg with cumulative mortality kept below 4%.', bn: 'গড় লাইভ ওজন ১.৯ থেকে ২.১ কেজিতে পৌঁছানো এবং মোট মৃত্যুহার ৪%-এর নিচে রাখার ব্যবস্থাপনা।' },
          { en: 'Transparent daily batch tracking in FarmOS to measure working capital and feed price sensitivity.', bn: 'FarmOS সফটওয়্যারের মাধ্যমে দৈনিক খাদ্য গ্রহণ, ওজন ও খরচের হিসাব রেখে ব্রেক-ইভেন পয়েন্ট নির্ধারণ।' }
        ]
      }
    ],
    inputs: [
      { name: 'Day-Old Chicks (DOC)', nameBn: 'এক দিন বয়সী সুস্থ ব্রয়লার বাচ্চা', source: 'Certified Hatcheries' },
      { name: 'Balanced Starter & Finisher Feed', nameBn: 'পুষ্টিকর স্টার্টার ও ফিনিশার ফিড', source: 'Tested Commercial Feed Millers' },
      { name: 'Bedding Material (Husk/Shavings)', nameBn: 'লিটার উপাদান (শুকনো তুষ/কাঠের গুঁড়ো)', source: 'Local Rice Mills' },
      { name: 'Clean Well Water & Vaccines', nameBn: 'বিশুদ্ধ ভূগর্ভস্থ পানি ও প্রয়োজনীয় ভ্যাকসিন', source: 'Farm Deep Tube-well & Licensed Vet' }
    ],
    outputs: [
      { name: 'Market-Ready Broiler Meat Birds', nameBn: 'পরিপক্ক ব্রয়লার মুরগি (মাংস)', destination: 'Local Verified Wholesalers & Retailers' },
      { name: 'Poultry Litter & Manure', nameBn: 'নাইট্রোজেনসমৃদ্ধ ব্যবহৃত পোলট্রি লিটার', destination: 'Controlled Composting Yard' }
    ],
    safetyAndConstraintsBn: 'ব্রয়লার উৎপাদনে কোনো নিশ্চিত মুনাফার প্রতিশ্রুতি দেয়া হয় না। খাদ্যের বাজারদর, বাচ্চার সরবরাহ মূল্য এবং রোগবালাইয়ের ঝুঁকি সার্বক্ষণিক ব্যবস্থার অংশ। কাঁচা লিটার কখনোই সরাসরি জলাশয়ে ফেলা যাবে না।',
    timelineSteps: [
      { step: 'Day 0', stepBn: 'দিন ০: ব্রুডিং প্রস্তুতি', period: 'প্রাক-আগমন', detailsBn: 'শেড জীবাণুমুক্ত করে ব্রুডার হিটার চালু করা, তাপমাত্রা ৩২-৩৩ ডিগ্রি সেলসিয়াসে স্থির রাখা এবং গ্লুকোজ-পানি প্রস্তুত রাখা।' },
      { step: 'Day 1 - 7', stepBn: 'দিন ১-৭: প্রাথমিক ব্রুডিং পর্যায়', period: 'সপ্তাহ ১', detailsBn: 'উচ্চ প্রোটিনযুক্ত প্রি-স্টার্টার ফিড প্রদান, তাপমাত্রার সুষম বণ্টন নিশ্চিতকরণ এবং বাচ্চার সক্রিয়তা পর্যবেক্ষণ।' },
      { step: 'Day 8 - 21', stepBn: 'দিন ৮-২১: বৃদ্ধি ও স্টার্টার পর্যায়', period: 'সপ্তাহ ২-৩', detailsBn: 'ধাপে ধাপে ব্রুডিং পর্দা খোলা, বায়ু চলাচল বৃদ্ধি, নিয়মিত ওজন গ্রহণ এবং ভ্যাকসিনেশন সম্পন্ন করা।' },
      { step: 'Day 22 - 35', stepBn: 'দিন ২২-৩৫: ফিনিশার ও বাজারজাতকরণ', period: 'সপ্তাহ ৪-৫', detailsBn: 'ফিনিশার ফিড রূপান্তর, এফসিআর নিরীক্ষা, পানি গ্রহণ ট্র্যাকিং এবং বাজার দর যাচাই করে বিক্রয় সম্পাদন।' },
      { step: 'Post-Harvest', stepBn: 'ফসল পরবর্তী: শেড স্যানিটেশন', period: 'দিন ৩৬-৪৮', detailsBn: 'পুরো লিটার অপসারণ করে কম্পোস্টিং ইউনিটে প্রেরণ, উচ্চ চাপে পানি দিয়ে শেড ধৌত এবং পরবর্তী ব্যাচের জন্য বিশ্রাম।' }
    ]
  },
  {
    id: 'aquaculture',
    slug: 'aquaculture',
    title: 'Aquaculture',
    titleBn: 'মিঠাপানির মৎস্য চাষ ও জলাশয় ব্যবস্থাপনা',
    category: 'core-production',
    status: 'Conditional Access Stream',
    statusBn: 'শর্তসাপেক্ষ কার্যক্রম',
    badgeColor: 'text-[#55B9B0] bg-[#55B9B0]/10 border-[#55B9B0]/30',
    shortDesc: 'Freshwater fish production conducted in an existing family pond in Parbatipur under a defined two-year rotational access agreement.',
    shortDescBn: 'পার্বতীপুরে বিদ্যমান পারিবারিক পুকুরে দুই বছরের নির্ধারিত মেয়াদে নিয়ন্ত্রিত মিঠাপানির মাছ চাষ।',
    overviewBn: 'পার্বতীপুরের বিদ্যমান পারিবারিক পুকুরটিতে তিনটি পারিবারিক অংশের অংশীদারিত্ব রয়েছে এবং প্রতিটি পরিবারের দুই বছরের ব্যবহারের সময়সীমা নির্ধারিত। ফলে এই কার্যক্রমটি একটি শর্তসাপেক্ষ উৎপাদন ব্যবস্থা। নিশ্চিত প্রবেশাধিকারের মেয়াদ অনুযায়ী পোর্টেবল যন্ত্রপাতি ও সীমিত অবকাঠামোগত বিনিয়োগের মাধ্যমে এটি পরিচালিত হবে। কোনো স্থায়ী একচ্ছত্র মালিকানা দাবি করা হয় না।',
    operationalDetails: [
      {
        heading: 'Water Quality Management',
        headingBn: 'পানির গুণমান ও পরিবেশ পরীক্ষা',
        points: [
          { en: 'Regular testing of pH (target 7.5 - 8.5), dissolved oxygen (>5.0 mg/L), and water transparency (Secchi depth 25-35 cm).', bn: 'নিয়মিত পানির পিএইচ (৭.৫ - ৮.৫), দ্রবীভূত অক্সিজেন (> ৫ মিগ্রা/লিটার) এবং সেকি ডিস্ক দিয়ে স্বচ্ছতা পরীক্ষা।' },
          { en: 'Careful monitoring of ammonia and nitrite levels to avoid toxicity.', bn: 'অ্যামোনিয়া ও নাইট্রাইট মাত্রা সার্বক্ষণিক পরিমাপ করে বিষাক্ততা প্রতিরোধ করা।' },
          { en: 'Pre-stocking pond conditioning with agricultural lime and controlled organic conditioning.', bn: 'পুকুর প্রস্তুতিতে পরিমিত চুন ও অনুমোদিত জৈব উপাদান প্রয়োগ করে প্রাকৃতিক খাদ্য তৈরি।' }
        ]
      },
      {
        heading: 'Species Selection & Stocking Strategy',
        headingBn: 'মাছের প্রজাতি নির্বাচন ও মজুদ ঘনত্ব',
        points: [
          { en: 'Poly-culture of native carps (Rui, Catla, Mrigal) alongside fast-growing compatible species suited for seasonal cycles.', bn: 'রুই, কাতলা, মৃগেল ও গ্রাস কার্পের সমন্বিত মিশ্র চাষ, যা পুকুরের বিভিন্ন স্তরের প্রাকৃতিক খাদ্যের সদ্ব্যবহার করে।' },
          { en: 'Stocking sized fingerlings (4-6 inches) to reduce mortality and accelerate harvest within the confirmed usage window.', bn: 'নির্ধারিত মেয়াদের মধ্যে ফসল নিশ্চিত করতে ৪-৬ ইঞ্চি আকারের স্বাস্থ্যবান পোনা মজুদ।' },
          { en: 'Floating formulated pelleted feeds to minimize feed loss and sediment contamination.', bn: 'ভাসমান ফিড ব্যবহার যাতে খাদ্য অপচয় না হয় এবং তলার পানির পরিবেশ নষ্ট না হয়।' }
        ]
      },
      {
        heading: 'Seasonal Harvesting & Market Linkages',
        headingBn: 'পর্যায়ক্রমিক আহরণ ও স্থানীয় বাজার সংযোগ',
        points: [
          { en: 'Partial thinning harvests to relieve biomass density during high-temperature months.', bn: 'গরমের সময় মাছের ঘনত্ব কমাতে আংশিক আহরণ (Thinning) করে বড় মাছ স্থানীয় বাজারে বিক্রয়।' },
          { en: 'Complete scheduled draining/harvest prior to the expiration of the family usage cycle.', bn: 'দুই বছরের মেয়াদের শেষ প্রান্তে সময়মতো চূড়ান্ত আহরণ সম্পন্ন করে স্বচ্ছ হিসাব প্রদান।' }
        ]
      }
    ],
    inputs: [
      { name: 'Graded Fingerlings', nameBn: 'উন্নত জাতের বাছাইকৃত পোনা', source: 'Registered Dinajpur Hatcheries' },
      { name: 'Floating Pelleted Feed', nameBn: 'মানসম্মত ভাসমান মাছের খাবার', source: 'Approved Aquafeed Suppliers' },
      { name: 'Agricultural Lime (CaCO3)', nameBn: 'কৃষি চুন ও বায়ো-কন্ডিশনার', source: 'Local Certified Stores' }
    ],
    outputs: [
      { name: 'Freshwater Carps & Table Fish', nameBn: 'তাজা মিঠাপানির দেশীয় মাছ', destination: 'Parbatipur & Dinajpur Fresh Markets' },
      { name: 'Nutrient-Enriched Pond Sediment', nameBn: 'উর্বর পুকুরের তলার মাটি (শুকনো মৌসুমে)', destination: 'Nursery & Compost Conditioning' }
    ],
    safetyAndConstraintsBn: 'পুকুরের অংশীদারিত্বের শর্ত অনুযায়ী মেয়াদের বাইরে উৎপাদন চালানো সম্ভব নয়। কাঁচা পোলট্রি বর্জ্য সরাসরি পুকুরে ফেলা কঠোরভাবে নিষিদ্ধ। সঠিক মজুদ ঘনত্ব ও পানির প্যারামিটার অনুযায়ী উৎপাদন ফলন নির্ভর করবে।',
    timelineSteps: [
      { step: 'Phase 1', stepBn: 'ধাপ ১: আইনগত ও ব্যবহার স্বত্ব যাচাই', period: 'শুরুর পূর্বে', detailsBn: 'পুকুরের পারিবারিক ব্যবহারের তারিখ, এরিয়া এবং আহরণ অধিকারের লিখিত স্পষ্টীকরণ।' },
      { step: 'Phase 2', stepBn: 'ধাপ ২: পুকুর প্রস্তুতি ও চুন প্রয়োগ', period: 'মাস ১', detailsBn: 'পুকুরের আগাছা পরিষ্কার, ক্ষতিকর মাছ নিয়ন্ত্রণ, চুন প্রয়োগ এবং প্রাকৃতিক প্লাংকটন তৈরি।' },
      { step: 'Phase 3', stepBn: 'ধাপ ৩: পোনা মজুদ ও নিয়মিত ফিডিং', period: 'মাস ২-১৮', detailsBn: 'অনুমোদিত ঘনত্বে পোনা ছাড়া, ভাসমান খাবার প্রদান এবং প্রতি সপ্তাহে পানির গুণমান যাচাই।' },
      { step: 'Phase 4', stepBn: 'ধাপ ৪: আংশিক ও চূড়ান্ত আহরণ', period: 'মাস ১৯-২৪', detailsBn: 'আহরণযোগ্য মাছ বিক্রি, হিসাব সম্পাদন এবং পরবর্তী অংশীদারের জন্য পুকুর হস্তান্তর।' }
    ]
  },
  {
    id: 'resource-recovery',
    slug: 'resource-recovery',
    title: 'Resource Recovery',
    titleBn: 'জৈব সম্পদ পুনরুদ্ধার ও নিয়ন্ত্রিত কম্পোস্টিং',
    category: 'circular-recovery',
    status: 'Active Development',
    statusBn: 'সক্রিয় উন্নয়ন',
    badgeColor: 'text-[#73513A] bg-[#73513A]/10 border-[#73513A]/30',
    shortDesc: 'Systematic collection and controlled aerobic composting of poultry litter and agricultural crop residues into stable soil-enriching inputs.',
    shortDescBn: 'পোলট্রি লিটার ও শস্যের অবশিষ্টাংশ বিজ্ঞানসম্মত অ্যারোবিক কম্পোস্টিংয়ের মাধ্যমে উর্বর জৈব সারে রূপান্তর।',
    overviewBn: 'বর্জ্যকে ফেলে না দিয়ে একটি সুনিয়ন্ত্রিত প্রক্রিয়ায় সম্পদে রূপান্তর করাই এই ইউনিটের কাজ। পোলট্রি লিটারে উচ্চ নাইট্রোজেন থাকে, যা ধানের খড় ও উদ্ভিজ্জ অবশিষ্টাংশের কার্বনের সাথে মিলিয়ে (C:N অনুপাত ২৫-৩০:১) স্তূপাকার বা উইন্ডরো পদ্ধতিতে কম্পোস্টিং করা হয়। তাপমাত্রা ৫৫-৬৫ ডিগ্রি সেলসিয়াসে পৌঁছালে রোগজীবাণু ও আগাছার বীজ ধ্বংস হয়।',
    operationalDetails: [
      {
        heading: 'Thermophilic Composting Process',
        headingBn: 'থার্মোফিলিক কম্পোস্টিং পদ্ধতি',
        points: [
          { en: 'Careful moisture management (50-60%) and scheduled windrow turning for oxygenation.', bn: '৫০-৬০% আর্দ্রতা বজায় রাখা এবং নিয়মিত স্তূপ ওলটপালট করে পর্যাপ্ত অক্সিজেন সরবরাহ।' },
          { en: 'Internal pile temperature logged daily until maturation and curing phase.', bn: 'প্রতিদিন থার্মোমিটার দিয়ে তাপমাত্রা মেপে তাপীয় পর্যায় ও জীবাণুমুক্তকরণ নিশ্চিত করা।' },
          { en: 'Curing period of 4-6 weeks to stabilize nutrients and produce friable, odorless humus.', bn: '৪-৬ সপ্তাহের কিউরিং বা পরিপক্কতা পর্যায়, যা দুর্গন্ধমুক্ত ও ঝরঝরে হিউমাস তৈরি করে।' }
        ]
      },
      {
        heading: 'Quality Testing & Regulatory Compliance',
        headingBn: 'গুণমান পরীক্ষা ও নীতিমালা প্রতিপালন',
        points: [
          { en: 'Laboratory testing for heavy metals, moisture, organic carbon, and total N-P-K values.', bn: 'ভারী ধাতু, আর্দ্রতা, জৈব কার্বন এবং মোট এন-পি-কে (N-P-K) এর ল্যাব টেস্ট পরিচালনা।' },
          { en: 'Strict adherence to national organic fertilizer standards prior to any commercial claims.', bn: 'বাণিজ্যিক বিক্রয়ের পূর্বে কৃষি সম্প্রসারণ অধিদপ্তর ও জাতীয় মানদণ্ডের শর্ত মেনে চলা।' }
        ]
      }
    ],
    inputs: [
      { name: 'Used Poultry Litter Bedding', nameBn: 'ব্যবহৃত পোলট্রি লিটার', source: 'Broiler Shed' },
      { name: 'Chopped Paddy Straw & Plant Waste', nameBn: 'কাটা ধানের খড় ও শস্যের অংশ', source: 'Local Paddy Fields & Farm Plots' },
      { name: 'Beneficial Bio-Inoculants', nameBn: 'উপকারী মাইক্রোবায়াল কালচার', source: 'Standard Agricultural Suppliers' }
    ],
    outputs: [
      { name: 'Cured Organic Compost', nameBn: 'পরিপক্ক বিশুদ্ধ জৈব কম্পোস্ট', destination: 'Farm Nursery & Local Soil Application' },
      { name: 'Vermi-compost Seed Material', nameBn: 'কেঁচো সারের পুষ্টিকর ফিডস্টক', destination: 'Nursery Potting Media' }
    ],
    safetyAndConstraintsBn: 'বর্জ্যকে সম্পদে রূপান্তরের বিষয়টি তখনই সফল হয় যখন প্রতিটি ধাপের গুণমান ও নিরাপত্তা নিশ্চিত করা যায়। অপরিশোধিত কাঁচা লিটার বিক্রয় করা যাবে না।'
  },
  {
    id: 'insect-bioconversion',
    slug: 'insect-bioconversion',
    title: 'Insect Bioconversion',
    titleBn: 'ব্ল্যাক সোলজার ফ্লাই বায়োকনভার্সন (গবেষণা ও পাইলট)',
    category: 'circular-recovery',
    status: 'Pilot Research Candidate',
    statusBn: 'পাইলট গবেষণা',
    badgeColor: 'text-[#B5F45B] bg-[#102820] border-[#B5F45B]/40',
    shortDesc: 'Small-scale research exploring Black Soldier Fly (Hermetia illucens) larvae to convert segregated clean organic streams into protein biomass.',
    shortDescBn: 'ব্ল্যাক সোলজার ফ্লাই লার্ভার সাহায্যে নির্দিষ্ট জৈব বর্জ্য প্রক্রিয়াজাত করে প্রোটিনসমৃদ্ধ উপাদান তৈরির প্রাথমিক গবেষণা।',
    overviewBn: 'ব্ল্যাক সোলজার ফ্লাই (BSF) লার্ভা অত্যন্ত দ্রুত জৈব বর্জ্য হজম করে উচ্চ প্রোটিনযুক্ত লার্ভা বায়োমাস তৈরি করতে পারে। তবে এটি একটি অত্যন্ত সংবেদনশীল বায়োলজিক্যাল প্রক্রিয়া। কাঁচামালের ধারাবাহিক সরবরাহ, হাইজিন, লার্ভা ব্রিডিং পরিবেশ এবং উৎপাদিত পণ্যের নিরাপত্তা নিশ্চিত না হওয়া পর্যন্ত এটি সম্পূর্ণ পরীক্ষামূলক পাইলট হিসেবে বিবেচিত হবে।',
    operationalDetails: [
      {
        heading: 'Substrate Segregation & Feed Preparation',
        headingBn: 'সাবস্ট্রেট বাছাই ও খাদ্য প্রস্তুতি',
        points: [
          { en: 'Only clean, segregated organic residues (vegetable market rejects, grain byproducts) utilized.', bn: 'কেবলমাত্র নির্দিষ্ট, পরিষ্কার উদ্ভিজ্জ উচ্ছিষ্ট ও খাদ্য প্রক্রিয়াজাতকরণের বাইপ্রোডাক্ট ব্যবহার।' },
          { en: 'Zero hazardous materials, chemical contaminants, or non-segregated municipal refuse permitted.', bn: 'কোনো ক্ষতিকর রাসায়নিক বা অপরীক্ষিত পৌর বর্জ্য সম্পূর্ণ নিষিদ্ধ।' }
        ]
      },
      {
        heading: 'Controlled Breeding & Biosecurity',
        headingBn: 'নিয়ন্ত্রিত ব্রিডিং ও নিরাপত্তা ব্যবস্থা',
        points: [
          { en: 'Enclosed love-cages for adult flies preventing any pest escapes into the local environment.', bn: 'বিশেষভাবে তৈরি খাঁচায় প্রাপ্তবয়স্ক মাছির মিলন ও ডিম সংগ্রহ, যাতে পরিবেশে কোনো প্রভাব না পড়ে।' },
          { en: 'Evaluation of larvae nutritional profile and pathogen testing before considering any animal feed trials.', bn: 'উৎপাদিত লার্ভার পুষ্টিমান এবং প্যাথোজেন টেস্ট নিশ্চিত করে পরবর্তী সিদ্ধান্তের দিকে এগোনো।' }
        ]
      }
    ],
    inputs: [
      { name: 'Segregated Clean Plant Residues', nameBn: 'বাছাইকৃত পরিষ্কার উদ্ভিজ্জ অবশিষ্টাংশ', source: 'Nursery & Local Vegetable Markets' },
      { name: 'BSF 5-day Old Larvae (5-DOL)', nameBn: '৫ দিন বয়সী লার্ভা ও ডিম্ব', source: 'Pilot Hatching Chamber' }
    ],
    outputs: [
      { name: 'Tested Larvae Biomass', nameBn: 'প্রোটিনযুক্ত লার্ভা বায়োমাস (পরীক্ষাধীন)', destination: 'Pilot Evaluation Laboratory' },
      { name: 'BSF Frass (Organic Residue)', nameBn: 'লার্ভা ফ্রাস বা জৈব অবশিষ্টাংশ', destination: 'Compost Curing Unit' }
    ],
    safetyAndConstraintsBn: 'এটি এখনো কোনো বাণিজ্যিক পণ্য নয়। বাংলাদেশের প্রাণিসম্পদ ফিড সংক্রান্ত বিধিমালা এবং গুণমান যাচাই সাপেক্ষে এর ভবিষ্যৎ নির্ধারিত হবে।'
  },
  {
    id: 'nursery-crops',
    slug: 'nursery-crops',
    title: 'Nursery & Seasonal Crops',
    titleBn: 'নার্সারি চারা উৎপাদন ও মৌসুমী ফসল',
    category: 'core-production',
    status: 'Active Development',
    statusBn: 'সক্রিয় উন্নয়ন',
    badgeColor: 'text-[#176B4D] bg-[#176B4D]/10 border-[#176B4D]/30',
    shortDesc: 'High-demand seasonal crop seedlings and vegetables cultivated using tested farm-made compost and balanced growing media.',
    shortDescBn: 'খামারের নিজস্ব কম্পোস্ট ও মিডিয়া ব্যবহার করে উন্নত জাতের সবজি ও ফসলের চারা উৎপাদন।',
    overviewBn: 'পার্বতীপুর ও আশেপাশের এলাকার কৃষকদের চাহিদা অনুযায়ী স্বাস্থ্যবান চারা উৎপাদন এবং সীমিত জমিতে উচ্চমূল্যের মৌসুমি শাকসবজি আবাদ। খামারে উৎপাদিত পরীক্ষিত কম্পোস্ট ব্যবহার করে চারা উৎপাদনের মিডিয়া তৈরি করা হয়, যা রাসায়নিক নির্ভরতা কমায়।',
    operationalDetails: [
      {
        heading: 'Tray Seedling Production',
        headingBn: 'ট্রে ও উন্নত চারা উৎপাদন',
        points: [
          { en: 'Growing seedlings in plastic plug trays with sterile coco-peat and matured compost substrate.', bn: 'প্লাস্টিক প্লাগ ট্রেতে জীবাণুমুক্ত কোকোপিট ও কম্পোস্ট মিডিয়া ব্যবহার করে সবল চারা তৈরি।' },
          { en: 'Root-trainer architecture ensuring rapid root establishment upon field transplanting.', bn: 'মূলের গঠন সুদৃঢ় রাখা যাতে মূল জমিতে রোপণের পর কোনো চারা নষ্ট না হয়।' }
        ]
      },
      {
        heading: 'Seasonal Crop Cycles',
        headingBn: 'মৌসুমি শস্য পরিকল্পনা',
        points: [
          { en: 'Winter cauliflower, cabbage, tomato, and summer gourds tailored to Dinajpur market calendar.', bn: 'শীতকালে ফুলকপি, বাঁধাকপি, টমেটো এবং গ্রীষ্মে লাউ ও করলার চারা ও সবজি উৎপাদন।' },
          { en: 'Drip irrigation trials to optimize water usage and prevent fungal foliar diseases.', bn: 'পরিমিত পানি ব্যবস্থাপনার মাধ্যমে ছত্রাকজনিত রোগ প্রতিরোধ।' }
        ]
      }
    ],
    inputs: [
      { name: 'Certified High-Yield Seeds', nameBn: 'অনুমোদিত উচ্চফলনশীল বীজ', source: 'Registered Seed Companies' },
      { name: 'Farm-Made Matured Compost', nameBn: 'খামারের পরিশোধিত কম্পোস্ট', source: 'Resource Recovery Yard' },
      { name: 'Seed Trays & Netting', nameBn: 'চারা ট্রে ও শেড নেট', source: 'Agricultural Supply' }
    ],
    outputs: [
      { name: 'Vigorous Field Seedlings', nameBn: 'সুস্থ সবল চারাগাছ', destination: 'Local Farmers & Farm Plots' },
      { name: 'Fresh Seasonal Produce', nameBn: 'তাজা মৌসুমি শাকসবজি', destination: 'Local Market Sales' }
    ],
    safetyAndConstraintsBn: 'চারা উৎপাদনে আর্দ্রতা ও রোগবালাই নিয়ন্ত্রণ অত্যন্ত জরুরি। কম্পোস্টের মান যথাযথ না হলে চারা নষ্ট হতে পারে, তাই নিয়মিত মিডিয়া পরীক্ষা করা হয়।'
  },
  {
    id: 'mushrooms',
    slug: 'mushrooms',
    title: 'Mushroom Cultivation',
    titleBn: 'মাশরুম চাষ ও সাবস্ট্রেট গবেষণা',
    category: 'future-exploration',
    status: 'Pilot Research Candidate',
    statusBn: 'পাইলট গবেষণা',
    badgeColor: 'text-[#73513A] bg-[#73513A]/10 border-[#73513A]/30',
    shortDesc: 'A controlled pilot utilizing agricultural straw residues as fruiting substrate for edible Oyster mushrooms, evaluating spent substrate reuse.',
    shortDescBn: 'ধানের খড় ও কৃষি অবশিষ্টাংশ সাবস্ট্রেট হিসেবে ব্যবহার করে ওয়েস্টার মাশরুম চাষের পাইলট উদ্যোগ।',
    overviewBn: 'মাশরুম একটি পুষ্টিকর খাদ্য যা কৃষির অবশিষ্টাংশ যেমন ধানের খড় ব্যবহার করে জন্মানো সম্ভব। তবে মাশরুম চাষে অতি উচ্চমাত্রার হাইজিন এবং আর্দ্রতা নিয়ন্ত্রণ প্রয়োজন। সংক্রমণ বা কনটামিনেশন ঝুঁকি, ফলন এবং স্থানীয় বাজার চাহিদা মূল্যায়ন করতে এটি একটি সীমিত পরিসরের পাইলট হিসেবে পরিকল্পনা করা হয়েছে।',
    operationalDetails: [
      {
        heading: 'Substrate Sterilization & Inoculation',
        headingBn: 'সাবস্ট্রেট নির্বীজন ও স্পন ইনোকুলেশন',
        points: [
          { en: 'Steam pasteurization of chopped paddy straw to eliminate competing fungi and bacterial molds.', bn: 'কাটা ধানের খড় বাষ্পের সাহায্যে পাস্তুরায়ন করে ক্ষতিকর ছত্রাক ও ব্যাকটেরিয়া মুক্ত করা।' },
          { en: 'Inoculation with pure Oyster mushroom (Pleurotus ostreatus) mother spawn under sterile conditions.', bn: 'জীবাণুমুক্ত পরিবেশে উন্নত মানের ওয়েস্টার মাশরুমের স্পন মিশ্রিত করা।' }
        ]
      },
      {
        heading: 'Spent Mushroom Substrate (SMS) Circularity',
        headingBn: 'ব্যবহৃত সাবস্ট্রেট পুনর্ব্যবহার',
        points: [
          { en: 'Investigating spent straw substrate as a pre-conditioned fibrous input for vermicomposting.', bn: 'মাশরুম তোলার পর পড়ে থাকা সাবস্ট্রেটকে কেঁচো সারের উপযোগী কাঁচামাল হিসেবে যাচাই।' }
        ]
      }
    ],
    inputs: [
      { name: 'Chopped Paddy Straw', nameBn: 'কাটা ধানের খড়', source: 'Local Farms' },
      { name: 'Certified Mushroom Spawn', nameBn: 'জাতীয় মাশরুম উন্নয়ন ইনস্টিটিউটের স্পন', source: 'Authorized Laboratories' }
    ],
    outputs: [
      { name: 'Fresh Edible Mushrooms', nameBn: 'তাজা পুষ্টিকর মাশরুম', destination: 'Local Market & Nutrition Promotion' },
      { name: 'Spent Mushroom Substrate (SMS)', nameBn: 'ব্যবহৃত মাশরুম সাবস্ট্রেট', destination: 'Composting & Nursery Trial' }
    ],
    safetyAndConstraintsBn: 'যথাযথ প্রশিক্ষণ ও হাইজিন বজায় না রাখলে মাশরুমের ফলন ক্ষতিগ্রস্ত হতে পারে। বাণিজ্যিক প্রসারের আগে বাজার চাহিদা যাচাই করা আবশ্যক।'
  },
  {
    id: 'future-energy',
    slug: 'future-energy',
    title: 'Future Energy & Biogas',
    titleBn: 'ভবিষ্যৎ শক্তি ও বায়োগ্যাস সম্ভাব্যতা',
    category: 'future-exploration',
    status: 'Future Feasibility Study',
    statusBn: 'ভবিষ্যৎ সম্ভাব্যতা যাচাই',
    badgeColor: 'text-[#102820] bg-white/10 border-white/20',
    shortDesc: 'Long-term engineering study on anaerobic digestion potential for thermal energy, contingent on feedstock scale and economic justification.',
    shortDescBn: 'ভবিষ্যতে পর্যাপ্ত কাঁচামাল ও অর্থনৈতিক উপযোগিতা সাপেক্ষে অ্যানারোবিক ডাইজেস্টারের মাধ্যমে বায়োগ্যাস উৎপাদনের সমীক্ষা।',
    overviewBn: 'আমরা পরিষ্কারভাবে জানাতে চাই যে বর্তমান প্রাথমিক খামার পর্যায়ে কোনো বায়োগ্যাস বা শক্তি উৎপাদন চালু নেই। ভবিষ্যতে যদি খামারের পরিধি বৃদ্ধি পায় এবং পর্যাপ্ত কাঁচামালের ধারাবাহিক জোগান নিশ্চিত হয়, তবেই একটি আধুনিক অ্যানারোবিক ডাইজেস্টার স্থাপনের প্রযুক্তিগত ও অর্থনৈতিক সমীক্ষা করা হবে। কোনো অবাস্তব দাবি প্রচার করা হয় না।',
    operationalDetails: [
      {
        heading: 'Feasibility Criteria',
        headingBn: 'সমীক্ষার পূর্বশর্ত',
        points: [
          { en: 'Minimum continuous organic feedstock required to justify anaerobic digester capital expense.', bn: 'ডাইজেস্টার নির্মাণের মূলধনী ব্যয়ের যৌক্তিকতা প্রমাণের জন্য প্রয়োজনীয় ন্যূনতম কাঁচামালের প্রাপ্যতা নিশ্চিতকরণ।' },
          { en: 'Safe gas pressure regulation, moisture trapping, and methane safety engineering.', bn: 'গ্যাস চাপ নিয়ন্ত্রণ ও মিথেন ব্যবহারের সর্বোচ্চ নিরাপত্তা প্রকৌশল নিশ্চিত করা।' }
        ]
      }
    ],
    inputs: [
      { name: 'Future Organic Feedstock Surplus', nameBn: 'ভবিষ্যতে অতিরিক্ত জৈব কাঁচামাল', source: 'Future Expansion' }
    ],
    outputs: [
      { name: 'Thermal Energy (Subject to Study)', nameBn: 'তাপশক্তি (সমীক্ষা সাপেক্ষ)', destination: 'Brooder Heating Study' }
    ],
    safetyAndConstraintsBn: 'এটি বর্তমান কোনো সক্রিয় অপারেশন নয়। প্রাথমিক পর্যায়ে খামারটি কোনো শক্তি উৎপাদন করে না।'
  }
];
