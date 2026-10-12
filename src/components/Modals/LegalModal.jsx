import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { labConfig } from '../../data/labConfig';

export const LegalModal = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-graphite-200 overflow-hidden text-graphite-900 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy-900 text-white p-5 sm:p-7 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy-800 text-safety-400 flex items-center justify-center border border-navy-700">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              {isPrivacy ? "Privacy & Data Protection Policy" : "Standard Terms of Testing Services"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 text-graphite-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-graphite-600 max-h-[65vh] overflow-y-auto leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{labConfig?.legalName || "ATML Laboratory"}</strong>, we take the confidentiality of our clients' test specimens, infrastructure project specifications, and test reports with utmost seriousness.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">1. Collection of Project Data</h4>
              <p>
                Information collected via our website quotation forms (including contractor name, company details, phone numbers, sample descriptions, and project locations) is used solely for the purpose of communicating test scopes, generating quotations, and coordinating sample logistics.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">2. Confidentiality of Test Reports</h4>
              <p>
                All test reports, observation sheets, and physical laboratory findings are strictly confidential between {labConfig?.name || "ATML Laboratory"} and the instructing client. No reports are released to third parties without prior written client authorization, except where mandated by applicable law or judicial decree.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">3. Data Security & Storage</h4>
              <p>
                Digital records of certificates are preserved in tamper-evident archives with serialized tracking numbers for report verification upon client request.
              </p>
            </>
          ) : (
            <>
              <p>
                These terms govern all material testing, diamond core extraction, and quality verification services performed by <strong>{labConfig?.legalName || "ATML Laboratory"}</strong>.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">1. Sample Representativeness & Chain of Custody</h4>
              <p>
                Unless field sampling or core cutting is specifically executed by our authorized personnel, test reports relate strictly to the sample specimen as received at our laboratory. The submitting client is responsible for ensuring the sample accurately represents the parent material batch or consignment.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">2. Compliance with Governing Standards</h4>
              <p>
                Tests are performed in accordance with the standard methods (IS, ASTM, IRC, MoRTH) requested in the client work order. In the event of conflicting test methods, written clarification will be sought prior to specimen testing.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">3. Standard Turnaround Schedules</h4>
              <p>
                Turnaround timelines begin upon formal receipt of acceptable samples and completion of mandatory conditioning periods. Standard curing and soaking intervals (e.g., 4-day CBR soaking, 28-day concrete cube curing) cannot be expedited.
              </p>
              <h4 className="font-bold text-navy-900 text-sm mt-3">4. Limitation of Liability</h4>
              <p>
                {labConfig?.name || "ATML Laboratory"} provides accurate testing data based on laboratory observations. We do not provide engineering design warranties or operational construction guarantees for the overall highway or structure beyond the factual veracity of the recorded test parameters.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-graphite-50 border-t border-graphite-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
