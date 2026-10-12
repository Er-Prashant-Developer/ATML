import React from 'react';
import { 
  FlaskConical, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ArrowUp, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { labConfig } from '../data/labConfig';
import { serviceCategories } from '../data/servicesData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ onOpenLegalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800">
      {/* Top Footer Strip */}
      <div className="border-b border-navy-800/80 py-10 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-safety-500 text-white flex items-center justify-center font-bold shadow-md shadow-safety-500/20">
              <FlaskConical className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                {labConfig.name}
              </span>
              <p className="text-xs text-graphite-400">
                {labConfig.legalName}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-graphite-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IS · ASTM · IRC · MoRTH Compliance</span>
            </span>
            <a
              href={`https://wa.me/${labConfig.contact.whatsapp.number}?text=${encodeURIComponent(labConfig.contact.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 transition-colors font-medium"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: About & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              About the Laboratory
            </h4>
            <p className="text-xs sm:text-sm text-graphite-400 leading-relaxed">
              {labConfig?.description || "Professional bitumen, highway, and construction material testing services to support quality, safety, and performance."} Dedicated to technical precision, method-based compliance, and uncompromised testing data for highway and infrastructure projects.
            </p>
            <div className="pt-2 text-xs text-graphite-400 space-y-1">
              <div><strong>Receiving Hours:</strong> {labConfig?.contact?.workingHours?.sampleReceiving || "Mon–Sat: 9:30 AM – 5:30 PM"}</div>
              <div><strong>Operating Days:</strong> {labConfig?.contact?.workingHours?.weekdays || "Mon–Sat: 9:00 AM – 6:30 PM"}</div>
            </div>
          </div>

          {/* Col 2: Testing Service Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Testing Categories
            </h4>
            <ul className="space-y-2 text-xs text-graphite-400">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-safety-500" />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-graphite-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Testing Services</a></li>
              <li><a href="#equipment" className="hover:text-white transition-colors">Machinery & Apparatus</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Testing Workflow</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#standards" className="hover:text-white transition-colors">Standards & Codes</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Lab Photo Gallery</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Technical FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-graphite-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-safety-500 shrink-0 mt-0.5" />
                <span>{labConfig?.contact?.address?.line1 || "Plot 48, Highway Industrial Corridor"}, {labConfig?.contact?.address?.city || "Gurugram"}, {labConfig?.contact?.address?.state || "Haryana"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-safety-500 shrink-0" />
                <a href={`tel:${labConfig?.contact?.phoneTel || "+919876543210"}`} className="hover:text-white transition-colors">
                  {labConfig?.contact?.phone || "+91 98765 43210"}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-safety-500 shrink-0" />
                <a href={`mailto:${labConfig?.contact?.email || "testing@atml-lab.com"}`} className="hover:text-white transition-colors">
                  {labConfig?.contact?.email || "testing@atml-lab.com"}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-safety-500 shrink-0" />
                <span>{labConfig?.contact?.workingHours?.weekdays || "Mon–Sat: 9:00 AM – 6:30 PM"}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 border border-navy-700 text-xs font-semibold text-graphite-200 hover:text-white hover:border-safety-500 transition-colors"
              >
                <span>Book Sample Submission</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Accreditation Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-[11px] text-graphite-400 leading-relaxed">
          <p>
            <strong>Compliance Notice:</strong> {labConfig?.disclaimers?.accreditationNote || "All tests follow published standard test procedures."} Testing equipment is calibrated against traceable reference standards. Mention of testing standards (IS / ASTM / IRC / MoRTH) indicates adherence to published technical methods and does not constitute government representation.
          </p>
        </div>
      </div>

      {/* Bottom Copyright and Legal Strip */}
      <div className="border-t border-navy-800/80 py-6 bg-navy-950 text-xs text-graphite-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {CURRENT_YEAR} {labConfig?.legalName || "ATML Laboratory"}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-graphite-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-graphite-300 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-safety-400 hover:text-safety-300 transition-colors ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
