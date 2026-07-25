import React, { useState } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenSearchModal: () => void;
  onOpenAdminModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenJoinModal,
  onOpenSearchModal,
  onOpenAdminModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Programs', href: '#programs' },
    { label: 'Courses', href: '#courses' },
    { label: 'Skills', href: '#skills' },
    { label: 'Volunteer', href: '#volunteer' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Certification', href: '#certification' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none" id="brand-logo-link">
          <img
            src="https://imgur.com/ZKGxM1U.png"
            alt="CodeSphere Community Logo"
            className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-indigo-700 hover:bg-indigo-50/80 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Join Community CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenJoinModal('Student')}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold rounded-full shadow-md shadow-indigo-200 transition-all cursor-pointer"
            id="join-community-header-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Join Community</span>
          </motion.button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-indigo-100 px-4 pt-2 pb-6 space-y-3 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-3 text-xs font-semibold text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-colors flex items-center justify-between min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal('Student');
                }}
                className="w-full min-h-[48px] py-3 bg-indigo-700 text-white font-bold text-xs rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Join Community</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

