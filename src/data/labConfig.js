/**
 * Central Laboratory Configuration
 * Edit company details, contact channels, and disclaimers in this single file.
 */
export const labConfig = {
  name: "ATML Laboratory",
  legalName: "Advanced Testing & Materials Laboratory",
  shortTagline: "Precision Testing. Reliable Results. Stronger Infrastructure.",
  description:
    "Professional bitumen, highway, and construction material testing services to support quality, safety, and performance across infrastructure projects.",
  
  // Contact Information (Configurable by Client)
  contact: {
    phone: "+91 98765 43210",
    phoneSecondary: "+91 98111 22334",
    phoneTel: "+919876543210",
    email: "testing@atml-lab.com",
    emailQuotes: "quotes@atml-lab.com",
    address: {
      line1: "Plot No. 48, Highway Industrial Corridor",
      line2: "Phase-II, Near Toll Plaza Hub",
      city: "Gurugram / NCR",
      state: "Haryana",
      pincode: "122050",
      country: "India",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262729792!2d76.95317921935515!3d28.45949652233215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
      googleMapsLink: "https://maps.google.com/?q=Gurugram+Industrial+Corridor"
    },
    workingHours: {
      weekdays: "Monday – Saturday: 9:00 AM – 6:30 PM",
      sunday: "Sunday: Closed (Field teams on-demand by prior appointment)",
      sampleReceiving: "Sample Receiving: Mon–Sat 9:30 AM to 5:30 PM"
    },
    whatsapp: {
      number: "919876543210", // International format without +
      defaultMessage: "Hello ATML Laboratory, I would like to inquire about testing services and request a quotation for my project.",
    }
  },

  // Social & Web Links
  socials: {
    linkedin: "https://www.linkedin.com/company/atml-lab",
    twitter: "https://twitter.com/atml_lab",
    youtube: "https://www.youtube.com/@atml_lab",
  },

  // Trust and Operational Disclaimers
  disclaimers: {
    accreditationNote:
      "All tests are conducted strictly in accordance with approved standard test procedures (IS, ASTM, IRC, AASHTO, and MoRTH 5th Revision). Accreditation records and official scope documents are available for inspection upon client request.",
    fieldServiceNote:
      "Highway core cutting, field pavement inspection, and project site sample collection services are subject to crew availability, location logistics, and project scheduling.",
    plannedServiceNote:
      "Services marked as 'Planned Expansion' are currently in procurement/validation phase and will be made commercially available upon final calibration and protocol verification."
  },

  // Form submission endpoint (supports Formspree, custom backend URL, or mailto fallback)
  formEndpoint: "https://formspree.io/f/xbjnqkyw", // Placeholder endpoint that can be replaced or fallback to simulated/mailto
};
