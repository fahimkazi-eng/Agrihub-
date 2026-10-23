export interface MediaItem {
  id: string;
  title: string;
  titleBn: string;
  category: 'landscape' | 'poultry' | 'aquaculture' | 'circular' | 'tech' | 'research';
  categoryLabel: string;
  type: 'photo' | 'video-story';
  captionBn: string;
  detailedContextBn: string;
  aspectRatio: '16:9' | '4:3' | '3:4';
  svgArtTheme: 'landscape' | 'shed' | 'pond' | 'compost' | 'dashboard' | 'lab';
  licenseNote: string;
}

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'med-01',
    title: 'Parbatipur Agro Landscape & Ecosystem',
    titleBn: 'পার্বতীপুর কৃষি ভূপ্রকৃতি ও খামার সমভূমি',
    category: 'landscape',
    categoryLabel: 'Farm & Landscape',
    type: 'photo',
    captionBn: 'উত্তরবঙ্গের উর্বর সমভূমি ও দিনাজপুরের গ্রামীণ কৃষি পরিবেশ, যেখানে সমন্বিত খামারের পরিকল্পনা রূপ নিচ্ছে।',
    detailedContextBn: 'পার্বতীপুরের গ্রামীণ কৃষি ভূপ্রকৃতিতে পর্যাপ্ত সূর্যালোক এবং উর্বর পলল মাটি রয়েছে। চারপাশের ধানক্ষেত ও বাঁশবাগানের শান্ত আবহে খামারটি গড়ে তোলা হচ্ছে।',
    aspectRatio: '16:9',
    svgArtTheme: 'landscape',
    licenseNote: 'Editorial Farm Landscape Composition © PCA Hub'
  },
  {
    id: 'med-02',
    title: 'Modern Ventilated Broiler Housing Design',
    titleBn: 'বায়ু চলাচলবান্ধব আধুনিক ব্রয়লার শেড পরিকল্পনা',
    category: 'poultry',
    categoryLabel: 'Poultry Production',
    type: 'photo',
    captionBn: 'উত্তরবঙ্গের তীব্র গরম ও শীতের তারতম্য মোকাবিলার উপযোগী পূর্ব-পশ্চিমমুখী ব্রয়লার শেড স্থাপত্য।',
    detailedContextBn: 'শেডের পাশে সূক্ষ্ম তারের নেট ও সামঞ্জস্যপূর্ণ পর্দার ব্যবস্থা রাখা হয়েছে যাতে তীব্র উত্তাপের দিনেও স্বাভাবিক বাতাস প্রবাহ বজায় থাকে এবং শীতকালে ব্রুডিং তাপমাত্রা ধরে রাখা যায়।',
    aspectRatio: '4:3',
    svgArtTheme: 'shed',
    licenseNote: 'Technical Architectural Concept Blueprint © PCA Hub'
  },
  {
    id: 'med-03',
    title: 'Family Freshwater Aquaculture Pond',
    titleBn: 'পারিবারিক ঐতিহ্যবাহী মিঠাপানির পুকুর',
    category: 'aquaculture',
    categoryLabel: 'Aquaculture',
    type: 'video-story',
    captionBn: 'স্বচ্ছ মিঠাপানির পুকুর, যা দুই বছরের চক্রাকার মেয়াদে বিজ্ঞানসম্মত মাছ চাষের জন্য ব্যবহৃত হচ্ছে।',
    detailedContextBn: 'প্রাকৃতিক জলজ উদ্ভিদে ঘেরা পুকুরের তীরের পরিবেশ। নিয়মিত ওয়াটার টেস্ট কিট দিয়ে পিএইচ এবং অক্সিজেনের মাত্রা পর্যবেক্ষণ করা হয়।',
    aspectRatio: '16:9',
    svgArtTheme: 'pond',
    licenseNote: 'Field Documentary Video Capture © PCA Hub'
  },
  {
    id: 'med-04',
    title: 'Controlled Aerobic Windrow Composting Yard',
    titleBn: 'সুনিয়ন্ত্রিত অ্যারোবিক কম্পোস্টিং ইয়ার্ড',
    category: 'circular',
    categoryLabel: 'Circular Systems',
    type: 'photo',
    captionBn: 'পোলট্রি লিটার ও উদ্ভিজ্জ বর্জ্যের উইন্ডরো স্তর, যেখানে থার্মোফিলিক তাপমাত্রায় জীবাণুমুক্ত সার তৈরি হচ্ছে।',
    detailedContextBn: '৫০-৬০% আর্দ্রতায় স্তূপ ওলটপালট করার মাধ্যমে অক্সিজেনের সরবরাহ অব্যাহত রাখা হয়। থার্মোমিটারে ৫৫-৬৫ ডিগ্রি সেলসিয়াসের রিডিং নিবিড়ভাবে রেকর্ড করা হয়।',
    aspectRatio: '4:3',
    svgArtTheme: 'compost',
    licenseNote: 'Agronomic Research Field Log © PCA Hub'
  },
  {
    id: 'med-05',
    title: 'FarmOS Mobile Batch Tracking Interface',
    titleBn: 'FarmOS মোবাইল অ্যাপে দৈনিক ব্যাচ ট্র্যাকিং স্ক্রিন',
    category: 'tech',
    categoryLabel: 'Technology & Data',
    type: 'photo',
    captionBn: 'বাংলা ভাষায় ব্রয়লার ব্যাচের খাদ্য গ্রহণ, গড় ওজন এবং এফসিআরের গ্রাফ বিশ্লেষণ।',
    detailedContextBn: 'সহজ ইন্টারফেসে খামার পরিচালক দ্রুত দৈনিক মৃত্যুর সংখ্যা ও পানি গ্রহণের হিসাব যুক্ত করতে পারেন, যা তাৎক্ষণিক অর্থনৈতিক সামারি তুলে ধরে।',
    aspectRatio: '4:3',
    svgArtTheme: 'dashboard',
    licenseNote: 'Software Architecture UI Mockup © PCA Hub'
  },
  {
    id: 'med-06',
    title: 'Black Soldier Fly Pilot Research Chamber',
    titleBn: 'ব্ল্যাক সোলজার ফ্লাই লার্ভা ব্রিডিং চেম্বার',
    category: 'research',
    categoryLabel: 'Research & Field Notes',
    type: 'video-story',
    captionBn: 'সবজি ও উদ্ভিজ্জ উচ্ছিষ্ট প্রক্রিয়াকরণে হার্মেশিয়া ইলুসেন্স লার্ভার গতিবিধি ও পুষ্টিমান নিরীক্ষা।',
    detailedContextBn: 'সম্পূর্ণ আবদ্ধ নেট চেম্বারে লার্ভার পুষ্টি শোষণ এবং জৈব ফ্রাস তৈরির হার পর্যবেক্ষণ করা হচ্ছে। এটি প্রাণিসম্পদ ফিডের বিকল্প হিসেবে গবেষণাধীন।',
    aspectRatio: '16:9',
    svgArtTheme: 'lab',
    licenseNote: 'Biological Trial Laboratory Protocol © PCA Hub'
  },
  {
    id: 'med-07',
    title: 'Root-Trained Seedlings in Plug Trays',
    titleBn: 'প্লাগ ট্রেতে পুষ্টিকর কম্পোস্ট মিডিয়ার সবজির চারা',
    category: 'circular',
    categoryLabel: 'Circular Systems',
    type: 'photo',
    captionBn: 'খামারের নিজস্ব কম্পোস্ট মিশ্রিত কোকোপিট মিডিয়ায় সুস্থ-সবল টমেটো ও বাঁধাকপির চারা।',
    detailedContextBn: 'ট্রেতে উৎপাদিত চারা মূলের ক্ষতি ছাড়াই মাঠে সরাসরি রোপণ করা যায়, যা স্থানীয় কৃষকদের মাঝে ব্যাপক গ্রহণযোগ্যতা তৈরি করেছে।',
    aspectRatio: '4:3',
    svgArtTheme: 'compost',
    licenseNote: 'Nursery Production Documentation © PCA Hub'
  },
  {
    id: 'med-08',
    title: 'Water Quality Sampling at Pond Jetty',
    titleBn: 'পুকুরের জেটিতে পানির নমুনা ও দ্রবীভূত অক্সিজেন পরীক্ষা',
    category: 'aquaculture',
    categoryLabel: 'Aquaculture',
    type: 'photo',
    captionBn: 'ডিজিটাল ডিও মিটার ও সেকি ডিস্ক দিয়ে পুকুরের পানির গভীরতা ও স্বচ্ছতা নির্ণয়।',
    detailedContextBn: 'ভোরবেলায় প্রাকৃতিক অক্সিজেন সর্বনিম্ন পর্যায়ে থাকে। নিয়মিত নমুনা পরীক্ষার মাধ্যমে ফাইটোপ্ল্যাঙ্কটন ক্র্যাশ ও মাছের অস্বস্তি আগে থেকেই শনাক্ত করা সম্ভব হয়।',
    aspectRatio: '16:9',
    svgArtTheme: 'pond',
    licenseNote: 'Water Ecology Survey © PCA Hub'
  }
];
