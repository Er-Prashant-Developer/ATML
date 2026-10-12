/**
 * Testing Equipment & Laboratory Facilities Showcase
 * Highlights key specifications, calibrated ranges, and real instrument imagery.
 */
export const equipmentList = [
  {
    id: "eq-penetrometer",
    name: "Automatic Digital Bitumen Penetrometer",
    category: "Bitumen Laboratory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Precision motorized penetrometer featuring micro-stepper displacement sensor, digital timer, and constant temperature circulating water bath.",
    specs: [
      { label: "Displacement Accuracy", value: "0.01 mm (0.1 Penetration unit)" },
      { label: "Release Mechanism", value: "Electromagnetic release with 5.00s auto-timer" },
      { label: "Standards Compliance", value: "IS: 1203 / ASTM D5 / EN 1426" },
      { label: "Bath Temperature Control", value: "25°C ± 0.1°C digital PID" }
    ],
    applications: "Accurate grading of VG-10, VG-20, VG-30, VG-40 bitumen and modified binders.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-ring-ball",
    name: "Ring and Ball Softening Point Apparatus",
    category: "Bitumen Laboratory",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    description: "Automated softening point analyzer with magnetic stirring, linear heating rate controller (5°C/min), and optical beam drop detection.",
    specs: [
      { label: "Heating Rate", value: "5.0°C ± 0.5°C per minute auto-regulated" },
      { label: "Detection System", value: "Dual photo-electric beam sensor" },
      { label: "Standards", value: "IS: 1205 / ASTM D36 / AASHTO T53" },
      { label: "Measurement Range", value: "+30°C to +180°C" }
    ],
    applications: "Determining thermal softening temperatures for straight-run and polymer-modified binders.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-ductility",
    name: "Digital Constant-Speed Ductility Testing Machine",
    category: "Bitumen Laboratory",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Multi-specimen stainless steel ductility water bath with lead-screw pulling carriage driven by variable frequency motor at 50 mm/min.",
    specs: [
      { label: "Pulling Speed", value: "50 mm/min ± 2.5 mm/min" },
      { label: "Travel Capacity", value: "Up to 1500 mm elongation" },
      { label: "Specimen Capacity", value: "3 briquette molds concurrently" },
      { label: "Temperature Control", value: "Internal heating & refrigeration (4°C to 30°C)" }
    ],
    applications: "Tensile elongation and elastic recovery testing of bitumen and PMB specimens.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-flash-cup",
    name: "Cleveland Open Cup Flash & Fire Point Tester",
    category: "Bitumen Laboratory",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty electric heating plate with precision gas test flame applicator, motorized sweeper arm, and calibrated high-range mercury/digital sensor.",
    specs: [
      { label: "Temperature Range", value: "Ambient to 400°C" },
      { label: "Flame Sweeper", value: "Automatic motorized sweep every 2°C" },
      { label: "Standards", value: "IS: 1209 / ASTM D92 / AASHTO T48" },
      { label: "Cup Material", value: "Forged brass with calibrated volume mark" }
    ],
    applications: "Combustion hazard risk profiling and quality verification for bitumen and cutbacks.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-marshall",
    name: "Motorized Marshall Stability & Flow Test Rig",
    category: "Asphalt & Bituminous",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Rigid 50 kN load frame equipped with precision S-type load cell, electronic displacement LVDT, digital peak-hold indicator, and 60°C curing bath.",
    specs: [
      { label: "Platen Travel Rate", value: "50.8 mm/min ± 1.0 mm/min constant rate" },
      { label: "Load Cell Capacity", value: "50 kN (Resolution: 0.01 kN)" },
      { label: "Flow Measurement", value: "LVDT with 0.01 mm resolution" },
      { label: "Standards", value: "ASTM D6927 / MoRTH Section 500" }
    ],
    applications: "Design and quality control of Bituminous Concrete (BC) and Dense Bituminous Macadam (DBM).",
    status: "Active & Calibrated"
  },
  {
    id: "eq-core-drill",
    name: "Heavy-Duty Gasoline Diamond Core Drilling Machine",
    category: "Highway & Field Testing",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    description: "Rugged 4-stroke petrol-driven core cutting rig on stabilized caster base with vertical rack-and-pinion feed and pressurized water coolant supply.",
    specs: [
      { label: "Engine Power", value: "6.5 HP 4-stroke industrial engine" },
      { label: "Drilling Core Diameters", value: "100 mm & 150 mm standard diamond core barrels" },
      { label: "Drilling Depth", value: "Up to 450 mm core length" },
      { label: "Application Target", value: "Asphalt pavements, bridge decks & concrete slabs" }
    ],
    applications: "In-situ highway core extraction for layer thickness, density, and forensic analysis.",
    status: "Operational Field Unit"
  },
  {
    id: "eq-ctm",
    name: "2000 kN Digital Compression Testing Machine (CTM)",
    category: "Concrete Laboratory",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    description: "Rigid four-column hydraulic loading frame with digital microprocessor display, dual pace-rate indicator, automatic peak hold, and calibrated spherical seating.",
    specs: [
      { label: "Maximum Capacity", value: "2000 kN (200 Metric Tons)" },
      { label: "Pace Rate Control", value: "0.2 to 0.4 N/mm²/s adjustable" },
      { label: "Platen Dimensions", value: "Hardened platens for 150mm cubes & 150x300mm cylinders" },
      { label: "Standards", value: "IS: 14858 / IS: 516 / BS EN 12390-4" }
    ],
    applications: "Compressive strength determination for concrete cubes, cylinders, and masonry units.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-sieve-shaker",
    name: "Motorized Ro-Tap Sieve Shaker & Precision Sieves",
    category: "Aggregate & Soil",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty electromagnetic and mechanical tapping sieve shaker accommodating up to 8 full-height 200mm/300mm test sieves with digital countdown timer.",
    specs: [
      { label: "Motion Profile", value: "Circular motion with uniform vertical tapping" },
      { label: "Sieve Stack Range", value: "75 micron up to 63 mm perforated plates" },
      { label: "Standards", value: "IS: 460 / ASTM E11" },
      { label: "Timer Resolution", value: "1 to 99 minutes digital" }
    ],
    applications: "Particle size gradation analysis for aggregates, granular subbase (GSB), and soils.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-los-angeles",
    name: "Los Angeles Abrasion Testing Machine",
    category: "Aggregate Laboratory",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    description: "Heavy steel drum rotated by gear motor at 30–33 rpm, fitted with internal shelf, revolution counter, and full set of certified cast-iron abrasive charges.",
    specs: [
      { label: "Drum Rotation Speed", value: "31 rpm ± 1 rpm with auto shut-off at 500 revs" },
      { label: "Abrasive Charges", value: "Set of 12 spherical steel balls (approx. 48mm dia)" },
      { label: "Standards", value: "IS: 2386 (Part 4) / ASTM C131" },
      { label: "Safety Housing", value: "Full acoustic enclosure & interlock door" }
    ],
    applications: "Evaluating toughness and abrasion resistance of coarse aggregates for road pavements.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-cbr",
    name: "Motorized California Bearing Ratio (CBR) Test Press",
    category: "Soil & Subgrade",
    image: "https://images.unsplash.com/photo-1581091870621-1e967a6d80ff?auto=format&fit=crop&w=800&q=80",
    description: "Bench-mounting two-column loading press with steady 1.25 mm/min platen speed, 50 kN proving ring / digital transducer, and dial gauge penetration indicator.",
    specs: [
      { label: "Platen Travel Speed", value: "1.25 mm/min constant rate" },
      { label: "Load Capacity", value: "50 kN (Resolution: 0.05 kN)" },
      { label: "Plunger Dimension", value: "Standard 50 mm diameter hardened steel" },
      { label: "Standards", value: "IS: 2720 (Part 16) / ASTM D1883 / IRC:37" }
    ],
    applications: "Subgrade strength profiling and flexible pavement crust thickness calculation.",
    status: "Active & Calibrated"
  },
  {
    id: "eq-ndt",
    name: "Digital Rebound Hammer & Ultrasonic Pulse Velocity (UPV)",
    category: "Structural NDT",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
    description: "Complete structural non-destructive testing kit consisting of an electronic Type-N rebound hammer and microprocessor-based UPV transit-time instrument.",
    specs: [
      { label: "Rebound Hammer Impact", value: "2.207 Nm impact energy with automated angle correction" },
      { label: "UPV Transducers", value: "54 kHz high-sensitivity paired piezoelectric transducers" },
      { label: "Transit Time Range", value: "0.1 μs to 9999 μs (0.1 μs resolution)" },
      { label: "Standards", value: "IS: 13311 (Part 1 & 2) / ASTM C805 / ASTM C597" }
    ],
    applications: "Evaluating in-situ concrete quality, uniformity, void detection, and structural integrity.",
    status: "Active & Calibrated"
  }
];
