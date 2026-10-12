/**
 * Standards and Quality Compliance Reference
 * Code frameworks strictly implemented across laboratory testing.
 */
export const standardsFramework = [
  {
    organization: "Bureau of Indian Standards (BIS)",
    acronym: "IS Codes",
    badge: "National Standard",
    description: "Standard methods for civil engineering materials, aggregate mechanical properties, bitumen classification, concrete compression, and soil mechanics.",
    keyCodes: [
      { code: "IS: 73", title: "Paving Bitumen — Specification (VG Grades)" },
      { code: "IS: 1201 to 1220", title: "Methods for Testing Tar and Bituminous Materials" },
      { code: "IS: 2386 (Parts 1 to 5)", title: "Methods of Test for Aggregates for Concrete" },
      { code: "IS: 383", title: "Coarse and Fine Aggregate for Concrete Specification" },
      { code: "IS: 2720 (Parts 1 to 41)", title: "Methods of Test for Soils" },
      { code: "IS: 516", title: "Method of Tests for Strength of Concrete" },
      { code: "IS: 13311 (Parts 1 & 2)", title: "Non-Destructive Testing of Concrete (UPV & Rebound)" }
    ]
  },
  {
    organization: "Ministry of Road Transport & Highways",
    acronym: "MoRTH (5th Revision)",
    badge: "Highway Construction Standard",
    description: "Governing specifications for road, expressway, and bridge works across national and state highways in India.",
    keyCodes: [
      { code: "MoRTH Section 300", title: "Earthwork, Erosion Control and Subgrade Compaction" },
      { code: "MoRTH Section 400", title: "Sub-Bases, Bases (Non-Bituminous) and Shoulders" },
      { code: "MoRTH Section 500", title: "Bases and Surface Courses (Bituminous — DBM, BC, SMA)" },
      { code: "MoRTH Section 900", title: "Quality Control for Road Works & Acceptance Criteria" }
    ]
  },
  {
    organization: "Indian Roads Congress",
    acronym: "IRC Standards",
    badge: "Highway Design Codes",
    description: "Technical guidelines for highway pavement design, modified binders, and maintenance.",
    keyCodes: [
      { code: "IRC: 37", title: "Guidelines for Design of Flexible Pavements" },
      { code: "IRC: 58", title: "Guidelines for Design of Plain Jointed Rigid Pavements" },
      { code: "IRC: SP: 53", title: "Guidelines on Use of Modified Binders in Road Construction" },
      { code: "IRC: SP: 112", title: "Manual for Quality System in Road Projects" }
    ]
  },
  {
    organization: "ASTM International & AASHTO",
    acronym: "ASTM / AASHTO",
    badge: "International Methods",
    description: "Universally acknowledged testing protocols utilized for specialized materials and cross-border consulting contracts.",
    keyCodes: [
      { code: "ASTM D5 / D36 / D113", title: "Standard Test Methods for Bitumen Consistency" },
      { code: "ASTM D6927", title: "Marshall Stability and Flow of Bituminous Mixtures" },
      { code: "ASTM C131 / C535", title: "Resistance to Degradation of Small/Large Size Coarse Aggregate (LAA)" },
      { code: "AASHTO T245 / T283", title: "Resistance to Plastic Flow and Moisture Induced Damage of Asphalt Mixtures" }
    ]
  }
];

export const qualityAssurancePillars = [
  {
    title: "Method-Based Strictness",
    description: "Zero deviations from published standard operating procedures; calibrated sample temperatures, standardized rates of loading, and verified cycle counts."
  },
  {
    title: "Instrument Traceability",
    description: "All load cells, temperature sensors, dial gauges, balances, and dimensional gauges are periodically calibrated against NABL-accredited master calibrators."
  },
  {
    title: "Tamper-Evident Reporting",
    description: "Complete raw calculation logbooks, computerized peak-hold recording, and secure serialized test certificates signed by certified material testing engineers."
  },
  {
    title: "Blind Duplicate Testing",
    description: "Internal quality control via regular repeatability tests, blind replicate specimens, and reference material verification across critical binder batches."
  }
];
