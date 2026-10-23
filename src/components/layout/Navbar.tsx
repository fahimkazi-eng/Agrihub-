import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Our System', path: '/our-system' },
    { label: 'Operations', path: '/operations' },
    { label: 'Circular Flow', path: '/circular-agriculture' },
    { label: 'FarmOS', path: '/technology/farmos' },
    { label: 'Knowledge Hub', path: '/knowledge' },
    { label: 'Media', path: '/media' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F1E7]/90 backdrop-blur-md border-b border-[#141917]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <Link 
          to="/" 
          className="text-base sm:text-lg font-bold tracking-tight text-[#102820] whitespace-nowrap shrink-0 hover:text-[#176B4D] transition-colors flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#176B4D]" aria-hidden="true" />
          <span>PARBATIPUR CIRCULAR AGRITECH HUB</span>
        </Link>

        {/* Zone 2: 4-6 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#102820]/80">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-[#102820] ${
                isActive(link.path)
                  ? 'text-[#102820] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#176B4D]'
                  : 'text-[#102820]/75 hover:text-[#102820]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#102820] hover:bg-[#176B4D] rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Inquire / Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#102820] hover:text-[#176B4D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B4D]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F5F1E7] border-t border-[#141917]/10 p-6 flex flex-col justify-between overflow-y-auto z-50">
          <div className="flex flex-col space-y-4">
            <span className="text-xs font-mono uppercase text-[#73513A] tracking-wider mb-2">Navigation</span>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#102820] py-2 border-b border-[#141917]/5"
            >
              Home Overview
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-semibold py-2 border-b border-[#141917]/5 ${
                  isActive(link.path) ? 'text-[#176B4D]' : 'text-[#102820]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#102820] py-2 border-b border-[#141917]/5"
            >
              Products & Outputs
            </Link>
            <Link
              to="/people"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#102820] py-2 border-b border-[#141917]/5"
            >
              People & Opportunities
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#102820] py-2 border-b border-[#141917]/5"
            >
              About Us
            </Link>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#102820] py-2 border-b border-[#141917]/5"
            >
              Frequently Asked Questions (FAQ)
            </Link>
          </div>

          <div className="pt-6 mt-6 border-t border-[#141917]/10 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#102820] text-white font-semibold rounded text-sm uppercase tracking-wider"
            >
              Contact & Collaboration
            </Link>
            <p className="text-xs text-[#141917]/60 text-center font-bn">
              পার্বতীপুর, দিনাজপুর, বাংলাদেশ · কৃষি, পুনরায় সংযুক্ত
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
