import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  FileText,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { labConfig } from "../data/labConfig";

export const Navbar = ({ onRequestQuoteScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#hero"
  );

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Lab", href: "#about" },
    { name: "Testing Services", href: "#services" },
    { name: "Equipment", href: "#equipment" },
    { name: "Testing Process", href: "#process" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Standards", href: "#standards" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const primaryLinks = navLinks.slice(0, 4);
  const moreLinks = navLinks.slice(4, 9);
  const contact = labConfig?.contact;

  // Track navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus with Escape
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setMoreOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  // Update active link when browser hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Smooth navigation + active highlight
  const handleNavClick = (e, href) => {
    e.preventDefault();

    setActiveSection(href);
    setMobileMenuOpen(false);
    setMoreOpen(false);

    const target = document.querySelector(href);

    if (target) {
      const header = document.querySelector("header");
      const headerHeight =
        header?.getBoundingClientRect().height || 90;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight +
        8;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", href);
    }
  };

  // Request a quote
  const handleQuoteClick = (e) => {
    if (onRequestQuoteScroll) {
      e.preventDefault();

      setActiveSection("#contact");
      setMobileMenuOpen(false);
      setMoreOpen(false);

      onRequestQuoteScroll();
    } else {
      handleNavClick(e, "#contact");
    }
  };

  // Reusable active link styles
  const getDesktopLinkClass = (href) =>
    `px-3 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${
      activeSection === href
        ? "text-amber-300 bg-amber-400/10"
        : "text-slate-300 hover:text-amber-300 hover:bg-white/[0.06]"
    }`;

  const getDropdownLinkClass = (href) =>
    `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
      activeSection === href
        ? "text-amber-300 bg-amber-400/10"
        : "text-slate-300 hover:text-amber-300 hover:bg-white/[0.06]"
    }`;

  const getMobileLinkClass = (href) =>
    `flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
      activeSection === href
        ? "bg-amber-400/10 text-amber-300"
        : "text-slate-300 hover:text-amber-300 hover:bg-white/[0.06]"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Information Bar */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ${
          isScrolled
            ? "max-h-0 opacity-0"
            : "max-h-16 opacity-100"
        }`}
      >
        <div className="bg-[#091426] border-b border-white/[0.07] px-6 xl:px-10">
          <div className="max-w-7xl mx-auto min-h-10 flex items-center justify-between gap-4 text-[11px] text-slate-300">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>
                  {contact?.address?.city || "Gurugram / NCR"},{" "}
                  {contact?.address?.state || "Haryana"}
                </span>
              </span>

              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>
                  {contact?.workingHours?.weekdays ||
                    "Monday – Saturday: 9:00 AM – 6:30 PM"}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`tel:${contact?.phoneTel || "+919876543210"}`}
                className="flex items-center gap-2 hover:text-orange-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>
                  {contact?.phone || "+91 98765 43210"}
                </span>
              </a>

              <a
                href={`mailto:${contact?.email || "testing@atml-lab.com"}`}
                className="hidden lg:flex items-center gap-2 hover:text-orange-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>
                  {contact?.email || "testing@atml-lab.com"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`relative border-b transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1729]/[0.98] backdrop-blur-xl border-white/10 shadow-xl shadow-black/20"
            : "bg-[#0B1729]/95 backdrop-blur-md border-white/[0.07]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div
            className={`flex items-center justify-between gap-3 transition-all duration-300 ${
              isScrolled ? "h-[68px]" : "h-[76px]"
            }`}
          >
            {/* NIMTL Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              aria-label="NIMTL - Home"
              className="flex items-center shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <img
                src="/images/logo.png"
                alt="NIMTL - National Infrastructure Material Testing Laboratory"
                className="block h-12 sm:h-14 lg:h-16 w-auto max-w-[260px] object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {primaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={
                    activeSection === link.href ? "page" : undefined
                  }
                  className={getDesktopLinkClass(link.href)}
                >
                  {link.name}
                </a>
              ))}

              {/* More Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((prev) => !prev)}
                  aria-expanded={moreOpen}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    moreLinks.some(
                      (link) => link.href === activeSection
                    )
                      ? "text-amber-300 bg-amber-400/10"
                      : "text-slate-300 hover:text-amber-300 hover:bg-white/[0.06]"
                  }`}
                >
                  More
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full mt-3 w-56 rounded-xl border border-white/10 bg-[#101F35] p-2 shadow-2xl shadow-black/30">
                    {moreLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) =>
                          handleNavClick(e, link.href)
                        }
                        aria-current={
                          activeSection === link.href
                            ? "page"
                            : undefined
                        }
                        className={getDropdownLinkClass(link.href)}
                      >
                        {link.name}
                        <ChevronRight
                          className={`w-4 h-4 ${
                            activeSection === link.href
                              ? "text-amber-300"
                              : "text-slate-500"
                          }`}
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quote Button + Mobile Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#contact"
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-400 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/15 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">
                  Request a Quote
                </span>
                <span className="sm:hidden">Quote</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((prev) => !prev)
                }
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:bg-white/[0.07] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-expanded={mobileMenuOpen}
                aria-label={
                  mobileMenuOpen ? "Close menu" : "Open menu"
                }
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-[#0B1729] shadow-2xl">
            <div className="max-h-[calc(100dvh-100px)] overflow-y-auto px-4 sm:px-6 py-4">
              <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Navigation
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    aria-current={
                      activeSection === link.href
                        ? "page"
                        : undefined
                    }
                    className={getMobileLinkClass(link.href)}
                  >
                    {link.name}
                    <ChevronRight
                      className={`w-4 h-4 ${
                        activeSection === link.href
                          ? "text-amber-300"
                          : "opacity-60"
                      }`}
                    />
                  </a>
                ))}
              </div>

              {/* Mobile Contact Details */}
              <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Get in touch
                </p>

                <a
                  href={`tel:${contact?.phoneTel || "+919876543210"}`}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  {contact?.phone || "+91 98765 43210"}
                </a>

                <a
                  href={`mailto:${contact?.email || "testing@atml-lab.com"}`}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white break-all"
                >
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  {contact?.email || "testing@atml-lab.com"}
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>
                    {contact?.workingHours?.weekdays ||
                      "Monday – Saturday: 9:00 AM – 6:30 PM"}
                  </span>
                </div>

                <div className="flex items-center gap-2 border-t border-white/[0.08] pt-3 text-xs text-emerald-300">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Quality-focused testing services
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;