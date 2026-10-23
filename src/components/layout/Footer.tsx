import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102820] text-[#F5F1E7] border-t border-[#176B4D]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#F5F1E7]/10">
          
          {/* Brand Info & Core Philosophy */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block text-xl font-bold tracking-tight text-white hover:text-[#B5F45B] transition-colors">
              PARBATIPUR CIRCULAR AGRITECH HUB
            </Link>
            
            <p className="text-sm text-[#F5F1E7]/70 font-mono tracking-wide uppercase">
              Integrated Agriculture · Aquaculture · Circular Recovery · AgriTech
            </p>

            <blockquote className="text-sm font-bn text-[#F5F1E7]/90 leading-relaxed border-l-2 border-[#176B4D] pl-4 italic">
              “আমাদের লক্ষ্য শুধু খাদ্য উৎপাদন নয়; বরং উৎপাদনের প্রতিটি ধাপে সম্পদের অপচয় কমানো, খরচ বোঝা, স্থানীয় কর্মসংস্থানের সুযোগ তৈরি করা এবং প্রযুক্তির সাহায্যে কৃষি ব্যবস্থাপনাকে আরও সুশৃঙ্খল করা।”
            </blockquote>

            <div className="flex items-center gap-2 text-xs text-[#F5F1E7]/70">
              <MapPin className="w-4 h-4 text-[#B5F45B] shrink-0" />
              <span>Parbatipur, Dinajpur, Bangladesh</span>
            </div>
          </div>

          {/* Column 1: Ecosystem & Operations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5F45B] mb-4">Operations</h4>
            <ul className="space-y-2.5 text-sm text-[#F5F1E7]/80">
              <li>
                <Link to="/operations/broiler-production" className="hover:text-white transition-colors">
                  Broiler Production
                </Link>
              </li>
              <li>
                <Link to="/operations/aquaculture" className="hover:text-white transition-colors">
                  Aquaculture Pond
                </Link>
              </li>
              <li>
                <Link to="/operations/resource-recovery" className="hover:text-white transition-colors">
                  Resource Recovery
                </Link>
              </li>
              <li>
                <Link to="/operations/nursery-crops" className="hover:text-white transition-colors">
                  Nursery & Crops
                </Link>
              </li>
              <li>
                <Link to="/operations/insect-bioconversion" className="hover:text-white transition-colors">
                  Insect Bioconversion
                </Link>
              </li>
              <li>
                <Link to="/operations/mushrooms" className="hover:text-white transition-colors">
                  Mushroom Research
                </Link>
              </li>
              <li>
                <Link to="/operations/future-energy" className="hover:text-white transition-colors">
                  Future Energy Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: System & Technology */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5F45B] mb-4">System & Tech</h4>
            <ul className="space-y-2.5 text-sm text-[#F5F1E7]/80">
              <li>
                <Link to="/our-system" className="hover:text-white transition-colors">
                  Our System Architecture
                </Link>
              </li>
              <li>
                <Link to="/circular-agriculture" className="hover:text-white transition-colors">
                  Circular Resource Flows
                </Link>
              </li>
              <li>
                <Link to="/technology/farmos" className="hover:text-white transition-colors">
                  FarmOS Management
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products & Outputs
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="hover:text-white transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">
                  Media Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hub & Inquiries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5F45B] mb-4">Organization</h4>
            <ul className="space-y-2.5 text-sm text-[#F5F1E7]/80">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Hub
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-white transition-colors">
                  People & Opportunities
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ (প্রশ্নোত্তর)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1 text-[#B5F45B]">
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#F5F1E7]/60">
          <div className="max-w-3xl space-y-2 font-bn">
            <p>
              সতর্কবার্তা ও নীতি: পার্বতীপুর সার্কুলার এগ্রিটেক হাব একটি পর্যায়ক্রমিক উন্নয়নাধীন কৃষি উদ্যোগ। ব্রয়লার উৎপাদন ও কম্পোস্টিং প্রাথমিক পরিকল্পনা কাঠামোতে রয়েছে; পারিবারিক পুকুর ব্যবস্থাপনা শর্তসাপেক্ষ দুই বছরের পারিবারিক মেয়াদে পরিচালিত হয়; এবং অন্যান্য বায়ো-প্রক্রিয়া পাইলট হিসেবে পরীক্ষাধীন। প্রতিটি উপজাতের ব্যবহার বৈজ্ঞানিক ও আইনি মানদণ্ড যাচাই সাপেক্ষ।
            </p>
          </div>
          <div className="shrink-0 text-right md:text-left space-y-1">
            <p>© 2026 Parbatipur Circular Agritech Hub. All rights reserved.</p>
            <p className="font-mono text-[11px] text-[#F5F1E7]/50">Agriculture, Reconnected.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
