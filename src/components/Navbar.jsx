import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  FlaskConical, 
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { labConfig } from '../data/labConfig';

export const Navbar = ({ onRequestQuoteScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Lab', href: '#about' },
    { name: 'Testing Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Testing Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Standards', href: '#standards' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Hidden on small screens) */}
      <div className={`bg-navy-950 border-b border-navy-800/80 text-graphite-400 text-xs py-2 px-4 sm:px-8 transition-all duration-300 ${isScrolled ? 'hidden md:block py-1.5' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-graphite-300">
              <MapPin className="w-3.5 h-3.5 text-safety-500" />
              <span>{labConfig?.contact?.address?.city || "NCR"}, {labConfig?.contact?.address?.state || "Haryana"}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-graphite-300">
              <Clock className="w-3.5 h-3.5 text-safety-500" />
              <span>{labConfig?.contact?.workingHours?.weekdays || "Mon–Sat: 9:00 AM – 6:30 PM"}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${labConfig?.contact?.phoneTel || "+919876543210"}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-safety-500" />
              <span className="font-semibold text-graphite-200">{labConfig?.contact?.phone || "+91 98765 43210"}</span>
            </a>
            <a 
              href={`mailto:${labConfig?.contact?.email || "testing@atml-lab.com"}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-safety-500" />
              <span>{labConfig?.contact?.email || "testing@atml-lab.com"}</span>
            </a>
            <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-navy-800 text-graphite-300 text-[11px] border border-navy-700">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Strict IS / ASTM / MoRTH Methods</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20 py-3 border-b border-navy-800' 
            : 'bg-navy-900/80 backdrop-blur-sm py-4 border-b border-navy-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-safety-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-safety-500 to-safety-600 flex items-center justify-center text-white shadow-md shadow-safety-500/30 group-hover:scale-105 transition-transform">
              <FlaskConical className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-white font-display">
                  ATML
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-safety-500/20 text-safety-400 font-semibold uppercase tracking-wider border border-safety-500/30">
                  Lab
                </span>
              </div>
              <span className="hidden sm:inline text-[10px] sm:text-[11px] text-graphite-400 tracking-wider uppercase font-medium">
                Materials & Highway Testing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-graphite-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-safety-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Primary CTA and Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onRequestQuoteScroll) {
                  e.preventDefault();
                  onRequestQuoteScroll();
                } else {
                  handleNavClick(e, '#contact');
                }
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-safety-500 hover:bg-safety-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-safety-500/25 transition-all hover:shadow-safety-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Request a Quote</span>
              <span className="sm:hidden">Quote</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-graphite-300 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-safety-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-navy-800 bg-navy-900/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-graphite-200 hover:text-white hover:bg-navy-800/80 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-graphite-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-navy-800 flex flex-col gap-2.5 text-xs text-graphite-400">
              <div className="flex items-center gap-2 text-graphite-300">
                <Phone className="w-4 h-4 text-safety-500" />
                <a href={`tel:${labConfig?.contact?.phoneTel || "+919876543210"}`} className="hover:text-white">
                  {labConfig?.contact?.phone || "+91 98765 43210"}
                </a>
              </div>
              <div className="flex items-center gap-2 text-graphite-300">
                <Mail className="w-4 h-4 text-safety-500" />
                <a href={`mailto:${labConfig?.contact?.email || "testing@atml-lab.com"}`} className="hover:text-white">
                  {labConfig?.contact?.email || "testing@atml-lab.com"}
                </a>
              </div>
              <div className="flex items-center gap-2 text-graphite-300">
                <Clock className="w-4 h-4 text-safety-500" />
                <span>{labConfig?.contact?.workingHours?.weekdays || "Mon–Sat: 9:00 AM – 6:30 PM"}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
