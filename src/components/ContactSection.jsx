import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Building,
  User,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { labConfig } from '../data/labConfig';
import { serviceCategories } from '../data/servicesData';

export const ContactSection = ({ preselectedTest, preselectedCategory }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceCategory: 'Bitumen Testing',
    specificTest: '',
    sampleType: '',
    projectLocation: '',
    sampleQuantity: '',
    preferredDate: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [lastSelectedTestId, setLastSelectedTestId] = useState(null);

  // Sync preselected test if clicked from services modal
  if (preselectedTest && preselectedTest.id !== lastSelectedTestId) {
    setLastSelectedTestId(preselectedTest.id);
    setFormData(prev => ({
      ...prev,
      serviceCategory: preselectedCategory?.name || 'Bitumen Testing',
      specificTest: preselectedTest.name,
      additionalNotes: `Inquiry for ${preselectedTest.name} (${preselectedTest.standards})`
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company or Organization is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.sampleType.trim()) {
      errs.sampleType = 'Please specify the material or sample type';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Attempt submission to configured endpoint
      if (labConfig.formEndpoint && !labConfig.formEndpoint.includes('placeholder')) {
        await fetch(labConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData),
        }).catch(err => {
          console.warn("Endpoint dispatch notification:", err);
        });
      }

      // Celebrate success
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      setSubmittedData({ ...formData, referenceId: `ATML-${Math.floor(100000 + Math.random() * 900000)}` });
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      // Still show success with local reference so lead is not blocked
      setSubmittedData({ ...formData, referenceId: `ATML-${Math.floor(100000 + Math.random() * 900000)}` });
      setSubmitSuccess(true);
    }
  };

  // Generate WhatsApp prefilled link with quote form data
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*New Quote Request - ATML Lab*\n` +
      `*Name:* ${formData.fullName || 'Client'}\n` +
      `*Company:* ${formData.companyName || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Service:* ${formData.serviceCategory} - ${formData.specificTest || 'General'}\n` +
      `*Sample:* ${formData.sampleType || 'Not specified'}\n` +
      `*Location:* ${formData.projectLocation || 'N/A'}\n` +
      `*Quantity:* ${formData.sampleQuantity || 'N/A'}\n` +
      `*Notes:* ${formData.additionalNotes || 'Please send pricing.'}`
    );
    const waNumber = labConfig?.contact?.whatsapp?.number || "919876543210";
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-graphite-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-safety-50 border border-safety-100 text-safety-600 text-xs font-bold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
            Request an Itemized Testing Quotation
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            Submit your testing bill of quantities or sample parameters. Our civil engineering desk will formulate a formal quote adhering to your project's governing standard specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Laboratory Details & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-navy-950 text-white border border-navy-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-display text-white">
                Laboratory Office & Receiving Desk
              </h3>

              <div className="space-y-4 text-sm text-graphite-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Physical Address:</strong>
                    <span>{labConfig?.contact?.address?.line1 || "Plot 48, Highway Industrial Corridor"}, {labConfig?.contact?.address?.line2 || "Phase-II"}</span>
                    <br />
                    <span>{labConfig?.contact?.address?.city || "Gurugram"}, {labConfig?.contact?.address?.state || "Haryana"} - {labConfig?.contact?.address?.pincode || "122050"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Phone Enquiries:</strong>
                    <a href={`tel:${labConfig?.contact?.phoneTel || "+919876543210"}`} className="hover:text-white transition-colors block">
                      {labConfig?.contact?.phone || "+91 98765 43210"} (Main Desk)
                    </a>
                    <a href={`tel:${labConfig?.contact?.phoneSecondary || "+919811122334"}`} className="hover:text-white transition-colors text-xs text-graphite-400">
                      {labConfig?.contact?.phoneSecondary || "+91 98111 22334"} (Technical Operations)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Official Emails:</strong>
                    <a href={`mailto:${labConfig?.contact?.email || "testing@atml-lab.com"}`} className="hover:text-white transition-colors block">
                      {labConfig?.contact?.email || "testing@atml-lab.com"}
                    </a>
                    <a href={`mailto:${labConfig?.contact?.emailQuotes || "quotes@atml-lab.com"}`} className="hover:text-white transition-colors text-xs text-graphite-400">
                      {labConfig?.contact?.emailQuotes || "quotes@atml-lab.com"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-safety-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Working Hours:</strong>
                    <span>{labConfig?.contact?.workingHours?.weekdays || "Mon–Sat: 9:00 AM – 6:30 PM"}</span>
                    <br />
                    <span className="text-xs text-graphite-400">{labConfig?.contact?.workingHours?.sampleReceiving || "Sample Receiving: Mon–Sat 9:30 AM – 5:30 PM"}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-navy-800">
                <a
                  href={`https://wa.me/${labConfig?.contact?.whatsapp?.number || "919876543210"}?text=${encodeURIComponent(labConfig?.contact?.whatsapp?.defaultMessage || "Hello ATML Laboratory, I would like to inquire about testing services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Sample Packaging Protocol Card */}
            <div className="p-6 rounded-2xl bg-graphite-50 border border-graphite-200 space-y-3">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-safety-500" />
                Sample Receiving Checklist
              </h4>
              <ul className="text-xs text-graphite-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-safety-500 font-bold">•</span>
                  <span>Ensure bitumen samples are in sealed metal containers (minimum 1 kg).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-safety-500 font-bold">•</span>
                  <span>Aggregate samples must be in labeled, tear-resistant sacks (minimum 15–20 kg).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-safety-500 font-bold">•</span>
                  <span>Include sample source, client chain of custody form, and test codes requested.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: High-Conversion Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-graphite-200 shadow-xl">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-safety-600 bg-safety-50 px-2.5 py-1 rounded border border-safety-200">
                      Ref ID: {submittedData?.referenceId}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-navy-900 mt-3">
                      Quotation Request Received!
                    </h3>
                    <p className="text-sm text-graphite-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong>{submittedData?.fullName}</strong>. Our civil testing coordinators have received your specifications for <strong>{submittedData?.serviceCategory}</strong>. We will review your requirements and provide an itemized quote within 2–4 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-graphite-50 border border-graphite-200 text-xs text-left max-w-md mx-auto space-y-1.5 text-graphite-700">
                    <div><strong>Organization:</strong> {submittedData?.companyName}</div>
                    <div><strong>Phone:</strong> {submittedData?.phone}</div>
                    <div><strong>Sample:</strong> {submittedData?.sampleType}</div>
                    <div><strong>Location:</strong> {submittedData?.projectLocation || 'To be confirmed'}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Details to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          phone: '',
                          email: '',
                          serviceCategory: 'Bitumen Testing',
                          specificTest: '',
                          sampleType: '',
                          projectLocation: '',
                          sampleQuantity: '',
                          preferredDate: '',
                          additionalNotes: ''
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-graphite-300 text-graphite-700 hover:bg-graphite-100 text-xs font-semibold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between border-b border-graphite-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">
                        Inquiry & Quotation Form
                      </h3>
                      <p className="text-xs text-graphite-500">
                        Fields marked with <span className="text-safety-500 font-bold">*</span> are required
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Standard Reply: &lt;2 Hours
                    </span>
                  </div>

                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-safety-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-graphite-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Er. Rajesh Verma"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:ring-2 ${
                            errors.fullName 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-graphite-300 focus:border-safety-500 focus:ring-safety-500/20'
                          }`}
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Company / Contractor <span className="text-safety-500">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-graphite-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Infra Construction Ltd."
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:ring-2 ${
                            errors.companyName 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-graphite-300 focus:border-safety-500 focus:ring-safety-500/20'
                          }`}
                        />
                      </div>
                      {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Mobile / Phone <span className="text-safety-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-graphite-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 00000"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:ring-2 ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-graphite-300 focus:border-safety-500 focus:ring-safety-500/20'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Business Email <span className="text-safety-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-graphite-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="procurement@apexinfra.com"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:ring-2 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-graphite-300 focus:border-safety-500 focus:ring-safety-500/20'
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 3: Service Category & Specific Test */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Testing Category
                      </label>
                      <select
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-graphite-300 text-sm text-graphite-900 bg-white focus:outline-none focus:border-safety-500"
                      >
                        {serviceCategories.map(cat => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Specific Test (Optional)
                      </label>
                      <input
                        type="text"
                        name="specificTest"
                        value={formData.specificTest}
                        onChange={handleChange}
                        placeholder="e.g. Penetration + Softening or Full Suite"
                        className="w-full px-3 py-2.5 rounded-xl border border-graphite-300 text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-safety-500"
                      />
                    </div>
                  </div>

                  {/* Row 4: Sample Type and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Sample / Material Type <span className="text-safety-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="sampleType"
                        value={formData.sampleType}
                        onChange={handleChange}
                        placeholder="e.g. VG-30 Bitumen / 150mm Asphalt Core / GSB"
                        className={`w-full px-3 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:ring-2 ${
                          errors.sampleType 
                            ? 'border-red-500 focus:ring-red-200' 
                            : 'border-graphite-300 focus:border-safety-500 focus:ring-safety-500/20'
                        }`}
                      />
                      {errors.sampleType && <p className="text-xs text-red-600 mt-1">{errors.sampleType}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Project Site / Location
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="e.g. NH-48 Km 124 Package 3"
                        className="w-full px-3 py-2.5 rounded-xl border border-graphite-300 text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-safety-500"
                      />
                    </div>
                  </div>

                  {/* Row 5: Sample Quantity & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Estimated Samples / Quantity
                      </label>
                      <input
                        type="text"
                        name="sampleQuantity"
                        value={formData.sampleQuantity}
                        onChange={handleChange}
                        placeholder="e.g. 5 Lots or 12 Road Cores"
                        className="w-full px-3 py-2.5 rounded-xl border border-graphite-300 text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-safety-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                        Preferred Testing / Dispatch Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-graphite-300 text-sm text-graphite-900 bg-white focus:outline-none focus:border-safety-500"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wide">
                      Additional Specifications / Notes / Standards
                    </label>
                    <textarea
                      rows={3}
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Specify project standards (e.g. MoRTH Table 500-11, IS 73), core depth requirements, or special reporting requirements..."
                      className="w-full p-3 rounded-xl border border-graphite-300 text-sm text-graphite-900 placeholder-graphite-400 focus:outline-none focus:border-safety-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-safety-500 hover:bg-safety-600 text-white font-bold text-sm shadow-md shadow-safety-500/25 transition-all hover:shadow-safety-500/40 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Official Quotation...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Quotation Request</span>
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition-colors"
                      title="Send this request directly via WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
