/**
 * Comprehensive Testing Services Catalog
 * Explicitly segregates operational tests from planned capabilities.
 */
export const serviceCategories = [
  {
    id: "bitumen",
    name: "Bitumen & Binder Testing",
    shortTitle: "Bitumen Testing",
    badge: "Core Laboratory Capability",
    description: "Physical, consistency, thermal, and performance characterization of paving-grade bitumen, modified binders, and emulsions.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "bit-pen",
        name: "Penetration Test",
        standards: "IS: 1203 / ASTM D5",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "1.0 kg representative sample in clean container",
        description: "Measures bitumen consistency by determining the depth in tenths of a millimeter that a standard needle vertically penetrates under 100g load for 5 seconds at 25°C.",
        applications: ["Bitumen grading (VG-10, VG-30, VG-40)", "Quality assurance for refinery consignments", "Consistency monitoring on site"]
      },
      {
        id: "bit-soft",
        name: "Softening Point Test (Ring & Ball)",
        standards: "IS: 1205 / ASTM D36",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "500 g representative sample",
        description: "Determines the temperature at which a substance attains a particular degree of softening under specified test conditions using standard steel balls and brass rings.",
        applications: ["Thermal susceptibility index", "Rutting resistance assessment", "Modified binder qualification"]
      },
      {
        id: "bit-duct",
        name: "Ductility Test",
        standards: "IS: 1208 / ASTM D113",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "1.0 kg sample",
        description: "Measures the distance in centimeters to which a standard briquette specimen can elongate before breaking when pulled apart at 50 mm/min in a 27°C water bath.",
        applications: ["Assessing adhesive & cohesive properties", "Cohesion under traffic stresses", "Pavement flexibility retention"]
      },
      {
        id: "bit-flash",
        name: "Flash and Fire Point Test (Cleveland Open Cup)",
        standards: "IS: 1209 / ASTM D92",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours",
        sampleReq: "500 g sample",
        description: "Evaluates the critical temperature at which heated binder vapor ignites briefly (flash point) and sustains burning (fire point), critical for plant safety.",
        applications: ["Heating & storage safety in hot-mix plants", "Compliance with transportation norms", "Detection of volatile contamination"]
      },
      {
        id: "bit-sg",
        name: "Specific Gravity Test",
        standards: "IS: 1202 / ASTM D70",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours",
        sampleReq: "500 g sample",
        description: "Measures the ratio of the mass of a given volume of bitumen to that of an equal volume of water at 27°C using a calibrated pycnometer.",
        applications: ["Volumetric asphalt mix calculations", "Bulk volume to weight conversions", "Purity verification"]
      },
      {
        id: "bit-visc",
        name: "Absolute & Kinematic Viscosity",
        standards: "IS: 1206 (Part 2 & 3) / ASTM D2170 / D2171",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "1.0 kg sample",
        description: "Measures vacuum capillary viscosity at 60°C and kinematic viscosity at 135°C to determine high-temperature flow behavior and mixing/compaction temperatures.",
        applications: ["Viscosity Graded (VG) classification", "Optimal hot-mix plant mixing temperature", "Compaction window determination"]
      },
      {
        id: "bit-loss",
        name: "Loss on Heating & Thin Film Oven Test (TFOT)",
        standards: "IS: 1212 / ASTM D1754",
        status: "Available Now",
        isRoutine: false,
        turnaround: "72 Hours",
        sampleReq: "1.5 kg sample",
        description: "Simulates short-term aging and volatile loss occurring during asphalt plant mixing by exposing a thin film of binder to 163°C for 5 hours.",
        applications: ["Short-term plant aging evaluation", "Retained penetration verification", "Volatilization resistance"]
      },
      {
        id: "bit-elast",
        name: "Elastic Recovery Test",
        standards: "IS: 15462 / ASTM D6084",
        status: "Available Now",
        isRoutine: false,
        turnaround: "48–72 Hours",
        sampleReq: "1.0 kg modified binder sample",
        description: "Evaluates the elastomeric properties and recovery percentage of Polymer Modified Bitumen (PMB) and Crumb Rubber Modified Bitumen (CRMB) specimens.",
        applications: ["PMB quality assurance", "IRC:SP:53 compliance", "Fatigue & rutting mitigation check"]
      },
      {
        id: "bit-emuls",
        name: "Bitumen Emulsion Testing (RS, MS, SS Grades)",
        standards: "IS: 8887 / ASTM D244",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "2 Litres in sealed airtight plastic container",
        description: "Full suite of tests including residue on 600-micron sieve, Saybolt Furol viscosity, water content, storage stability, and particle charge.",
        applications: ["Tack coat & prime coat quality verification", "Slurry seal & micro-surfacing verification", "Cold mix paving applications"]
      },
      {
        id: "bit-dbr",
        name: "Dynamic Shear Rheometer (DSR) & Performance Graded (PG) Testing",
        standards: "AASHTO T315 / ASTM D7175",
        status: "Coming Soon",
        isRoutine: false,
        turnaround: "Planned Schedule",
        sampleReq: "500 g sample (Upon operational launch)",
        description: "Advanced Superpave binder characterization to evaluate rutting parameter (G*/sin δ) and fatigue parameter (G*·sin δ) over wide temperature spectrums.",
        applications: ["Performance-graded (PG) specification compliance", "High-stress corridor design", "Heavy axle highway research"]
      }
    ]
  },
  {
    id: "asphalt",
    name: "Asphalt & Bituminous Mix Testing",
    shortTitle: "Asphalt Mix Testing",
    badge: "Pavement Engineering",
    description: "Marshall design, volumetric properties, binder content extraction, and density determinations for DBM, BC, and SMA mixes.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "asp-marsh",
        name: "Marshall Stability & Flow Test",
        standards: "ASTM D6927 / AASHTO T245 / MoRTH Section 500",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "15 kg plant mix or raw constituents for laboratory mix",
        description: "Determines the resistance to plastic flow (stability in kN) and vertical deformation (flow in mm) of cylindrical bituminous mix specimens at 60°C.",
        applications: ["Dense Bituminous Macadam (DBM) design", "Bituminous Concrete (BC) job mix verification", "Optimum Bitumen Content (OBC) determination"]
      },
      {
        id: "asp-density",
        name: "Bulk Density & Theoretical Max Specific Gravity (Gmm)",
        standards: "ASTM D2726 / ASTM D2041 (Rice Method)",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "3 compacted specimens or 2.5 kg loose mix",
        description: "Measures bulk specific gravity of compacted mix and voidless maximum theoretical specific gravity of loose bituminous mixtures using vacuum displacement.",
        applications: ["Pavement field compaction percentage check", "Accurate void analysis", "Payment milestone certification"]
      },
      {
        id: "asp-vol",
        name: "Air Voids & Volumetric Property Analysis (VMA, VFB, Va)",
        standards: "MoRTH Section 500 / MS-2 Asphalt Institute",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "Included with Marshall test protocol",
        description: "Calculation of Air Voids (Va), Voids in Mineral Aggregate (VMA), and Voids Filled with Bitumen (VFB) from bulk and theoretical specific gravities.",
        applications: ["Verification against MoRTH Table 500-11 & 500-18", "Bleeding and ravelling prevention", "Pavement durability checks"]
      },
      {
        id: "asp-content",
        name: "Bitumen Content Determination (Centrifuge Extraction)",
        standards: "IS: 1211 / ASTM D2172",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "2.0 kg loose plant/road mix",
        description: "Extracts bitumen from bituminous mixtures using solvent dissolution and high-speed centrifuging to measure exact binder percentage by weight.",
        applications: ["Verifying asphalt batch plant calibration", "Compliance with specified binder percentage", "Pavement failure forensic analysis"]
      },
      {
        id: "asp-grad",
        name: "Recovered Aggregate Gradation Analysis",
        standards: "IS: 2386 (Part 1) / ASTM C136",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "Extracted aggregate from centrifuge test",
        description: "Sieve analysis conducted on the clean mineral aggregate recovered after bitumen extraction to ensure it conforms to the target job mix design envelope.",
        applications: ["Job Mix Formula (JMF) adherence", "Plant pugmill wear detection", "Checking filler content fraction"]
      },
      {
        id: "asp-wheel",
        name: "Hamburg Wheel Track & Rutting Resistance Test",
        standards: "AASHTO T324",
        status: "Coming Soon",
        isRoutine: false,
        turnaround: "Planned Schedule",
        sampleReq: "Compacted slabs or paired 150mm cores",
        description: "Measures rut depth and susceptibility to moisture damage and stripping by rolling a loaded steel wheel across submerged compacted asphalt slabs.",
        applications: ["Heavy corridor rutting evaluation", "Moisture sensitivity testing", "Expressway mix validation"]
      }
    ]
  },
  {
    id: "core-cutting",
    name: "Highway Core Cutting & Pavement Testing",
    shortTitle: "Pavement Core Cutting",
    badge: "Field & Laboratory",
    description: "Non-destructive highway diamond core extraction, asphalt layer thickness, in-situ density verification, and field condition evaluation.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "core-extract",
        name: "Highway Diamond Core Extraction (100mm & 150mm)",
        standards: "ASTM D5361 / IRC:SP:112 / MoRTH Section 500",
        status: "Available Now",
        isRoutine: true,
        turnaround: "On-site sampling + 24–48 hr Lab Analysis",
        sampleReq: "Site coordination; minimum 3 cores per test section",
        description: "Motorized diamond bit core extraction from newly laid asphalt surfaces (DBM / BC) or existing flexible pavements with clean, undamaged specimen recovery.",
        applications: ["Quality audit for NHAI / PWD / State Highway projects", "Verification of contractor layer depth", "Structural rehabilitation assessment"]
      },
      {
        id: "core-thick",
        name: "Core Thickness & Layer Profile Measurement",
        standards: "ASTM D3549 / MoRTH Section 500",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours after extraction",
        sampleReq: "Intact core specimens",
        description: "Accurate vernier caliper measurement of individual layer thicknesses (Wearing course, Binder course) across multiple points along the circumference.",
        applications: ["Checking minimum design thickness adherence", "Bill verification and client dispute settlement", "Pavement layer integrity documentation"]
      },
      {
        id: "core-dens",
        name: "In-situ Core Density & Field Compaction Degree",
        standards: "ASTM D2726 / MoRTH Section 500",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "Extracted undisturbed asphalt core",
        description: "Determination of bulk density of extracted core compared directly against laboratory Marshall specimen density to calculate in-situ compaction percentage.",
        applications: ["Field compaction degree (typically >98% MoRTH requirement)", "Pavement air-voids in-place check", "Quality clearance before lane opening"]
      },
      {
        id: "core-hole",
        name: "Core Hole Patching & Site Restoration Protocol",
        standards: "Standard Engineering Practice / IRC Guidelines",
        status: "Available Now",
        isRoutine: true,
        turnaround: "Immediate on-site completion",
        sampleReq: "Conducted immediately after core extraction",
        description: "Professional backfilling of core holes with approved cold/hot asphalt patch material, compacted in lifts with mechanical tamping to prevent water ingress.",
        applications: ["Maintaining pavement structural integrity", "Preventing moisture intrusion into subgrade", "Safety of moving traffic"]
      },
      {
        id: "pave-fwds",
        name: "Falling Weight Deflectometer (FWD) Pavement Structural Survey",
        standards: "IRC:115 / ASTM D4694",
        status: "Coming Soon",
        isRoutine: false,
        turnaround: "Planned Schedule",
        sampleReq: "Mobile unit on highway corridor",
        description: "Evaluation of flexible pavement deflection basins to back-calculate layer moduli and estimate residual structural life of highway sections.",
        applications: ["Overlay design calculation", "Highway concessionaire quality audits", "Long-term pavement asset management"]
      }
    ]
  },
  {
    id: "aggregate",
    name: "Aggregate Testing",
    shortTitle: "Aggregate Testing",
    badge: "Structural Foundation",
    description: "Mechanical toughness, abrasion resistance, particle shape, gradation, and physical properties for coarse and fine aggregates.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "agg-sieve",
        name: "Sieve Analysis & Gradation Curve",
        standards: "IS: 2386 (Part 1) / ASTM C136",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours",
        sampleReq: "15–25 kg depending on nominal maximum size",
        description: "Determines particle size distribution of coarse and fine aggregates by passing through a standard stack of woven wire cloth sieves.",
        applications: ["Mix gradation design (GSB, WMM, DBM, BC, Concrete)", "Fineness modulus calculation", "Segregation detection"]
      },
      {
        id: "agg-aiv",
        name: "Aggregate Impact Value (AIV)",
        standards: "IS: 2386 (Part 4) / BS 812",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "5.0 kg passing 12.5mm and retained on 10mm sieve",
        description: "Evaluates aggregate toughness and resistance against sudden shock or impact loads caused by heavy dynamic traffic.",
        applications: ["Wearing course suitability (AIV < 24% per MoRTH)", "Base course qualification", "Quarry source approval"]
      },
      {
        id: "agg-acv",
        name: "Aggregate Crushing Value (ACV)",
        standards: "IS: 2386 (Part 4) / BS 812",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "5.0 kg standardized fraction",
        description: "Measures resistance of aggregate to crushing under a gradually applied compressive load of 400 kN over 10 minutes.",
        applications: ["Structural concrete aggregate qualification", "Heavy duty road base certification", "Crusher performance verification"]
      },
      {
        id: "agg-laa",
        name: "Los Angeles Abrasion Test (LAA)",
        standards: "IS: 2386 (Part 4) / ASTM C131 / C535",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "10.0 kg graded aggregate",
        description: "Measures degradation of mineral aggregate from combination of abrasion, attrition, impact, and grinding in a rotating steel drum with abrasive steel charges.",
        applications: ["MoRTH Section 500 compliance for asphalt layers", "Railway ballast abrasion assessment", "Concrete pavement durability checks"]
      },
      {
        id: "agg-shape",
        name: "Flakiness & Elongation Index",
        standards: "IS: 2386 (Part 1) / BS 812",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours",
        sampleReq: "5.0 kg coarse aggregate",
        description: "Quantifies the percentage of flaky (thickness < 0.6 of mean dimension) and elongated (length > 1.8 of mean dimension) particles using thickness and length gauges.",
        applications: ["Workability of asphalt & concrete mixes", "Preventing aggregate breakage under roller compaction", "Combined index compliance (<35%)"]
      },
      {
        id: "agg-sgwa",
        name: "Specific Gravity & Water Absorption",
        standards: "IS: 2386 (Part 3) / ASTM C127 / C128",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "5.0 kg aggregate",
        description: "Determines apparent specific gravity, bulk specific gravity, and percentage of water absorption by measuring saturated surface-dry and oven-dry weights.",
        applications: ["Batch mix moisture adjustments", "Volumetric calculations", "Porosity and freeze-thaw vulnerability indicator"]
      },
      {
        id: "agg-sound",
        name: "Soundness Test (Sodium / Magnesium Sulphate)",
        standards: "IS: 2386 (Part 5) / ASTM C88",
        status: "Available Now",
        isRoutine: false,
        turnaround: "7–10 Days (5 cycles)",
        sampleReq: "5.0 kg graded aggregate",
        description: "Assesses aggregate resistance to weathering action and frost disintegration by cyclic immersion in sodium or magnesium sulphate solutions followed by oven drying.",
        applications: ["Pavement exposed to harsh environmental cycles", "Airport runway aggregate approval", "Long-term durability certification"]
      }
    ]
  },
  {
    id: "soil",
    name: "Soil & Geotechnical Testing",
    shortTitle: "Soil Testing",
    badge: "Subgrade & Earthworks",
    description: "Classification, index properties, compaction characteristics, and California Bearing Ratio (CBR) for highway subgrades and embankments.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "soil-sieve",
        name: "Grain Size Analysis & Hydrometer Test",
        standards: "IS: 2720 (Part 4) / ASTM D422",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "2.5 kg representative soil sample",
        description: "Combined dry/wet sieving for coarse fractions and hydrometer sedimentation analysis for silt and clay particles finer than 75 microns.",
        applications: ["IS 1498 Soil Classification", "Subgrade suitability assessment", "Drainage layer permeability evaluation"]
      },
      {
        id: "soil-atter",
        name: "Atterberg Limits (Liquid Limit, Plastic Limit, PI)",
        standards: "IS: 2720 (Part 5) / ASTM D4318",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24–48 Hours",
        sampleReq: "1.0 kg soil passing 425-micron sieve",
        description: "Determines Liquid Limit using Casagrande apparatus / cone penetrometer, Plastic Limit by rolling soil threads, and computes Plasticity Index (PI).",
        applications: ["MoRTH Section 300 subgrade & embankment criteria", "Expansive soil / swelling potential check", "Consistency categorization"]
      },
      {
        id: "soil-moist",
        name: "Natural Moisture Content & Specific Gravity",
        standards: "IS: 2720 (Part 2 & Part 3)",
        status: "Available Now",
        isRoutine: true,
        turnaround: "24 Hours",
        sampleReq: "500 g sealed in moisture-tight tin",
        description: "Oven-drying method at 105°C–110°C for moisture content and pycnometer/density bottle method for specific gravity of soil grains.",
        applications: ["Compaction water estimation", "Phase relationship calculations (void ratio, saturation)", "Site fill compaction monitoring"]
      },
      {
        id: "soil-proct",
        name: "Standard & Modified Proctor Compaction Test",
        standards: "IS: 2720 (Part 7 & 8) / ASTM D698 / D1557",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48 Hours",
        sampleReq: "20 kg air-dried representative soil",
        description: "Establishes relationship between moisture content and dry density of soil under heavy compaction energy to identify Optimum Moisture Content (OMC) and Maximum Dry Density (MDD).",
        applications: ["Highway embankment specification", "Subgrade compaction baseline", "Field density check reference (Core cutter / Sand replacement)"]
      },
      {
        id: "soil-cbr",
        name: "California Bearing Ratio (CBR) Test (Soaked & Unsoaked)",
        standards: "IS: 2720 (Part 16) / ASTM D1883 / IRC:37",
        status: "Available Now",
        isRoutine: true,
        turnaround: "5–6 Days (including 4-day soaking)",
        sampleReq: "25–30 kg soil sample",
        description: "Measures the pressure required to penetrate a standard soil specimen with a 50mm diameter plunger at 1.25 mm/min after 96 hours of water immersion.",
        applications: ["IRC:37 flexible pavement crust thickness design", "Subgrade strength categorization", "Borrow area selection for highway widening"]
      },
      {
        id: "soil-plate",
        name: "Plate Load Test & Subgrade Modulus (k-value)",
        standards: "IS: 1888 / ASTM D1195",
        status: "Coming Soon",
        isRoutine: false,
        turnaround: "Planned Schedule",
        sampleReq: "On-site mobile testing rig",
        description: "In-situ field testing using loaded hydraulic jacks and circular steel plates to determine the modulus of subgrade reaction for concrete pavements.",
        applications: ["Rigid pavement design (IRC:58)", "Foundation bearing capacity verification", "Industrial floor slab analysis"]
      }
    ]
  },
  {
    id: "concrete",
    name: "Concrete & Structural Testing",
    shortTitle: "Concrete Testing",
    badge: "Structural Integrity",
    description: "Compressive strength, concrete core evaluation, and non-destructive testing (NDT) using Rebound Hammer and Ultrasonic Pulse Velocity.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    tests: [
      {
        id: "con-comp",
        name: "Concrete Cube & Cylinder Compressive Strength",
        standards: "IS: 516 / ASTM C39",
        status: "Available Now",
        isRoutine: true,
        turnaround: "Same day (7-day, 14-day, 28-day curing cycles)",
        sampleReq: "Standard 150mm cubes or 150x300mm cylinders",
        description: "Applies continuous axial compressive loading in a calibrated 2000 kN digital CTM until specimen rupture to measure true structural compressive strength in N/mm².",
        applications: ["Batch plant QA/QC compliance", "Structural formwork stripping authorization", "Contractual strength milestone certification"]
      },
      {
        id: "con-core",
        name: "Hardened Concrete Core Extraction & Crushing",
        standards: "IS: 516 (Part 4) / ASTM C42",
        status: "Available Now",
        isRoutine: true,
        turnaround: "48–72 Hours (includes capping & soaking)",
        sampleReq: "Extracted on-site using diamond core drill (minimum 75mm/100mm dia)",
        description: "Extracting core samples from hardened structures, trimming, capping ends with sulphur/high-strength mortar, and determining equivalent in-situ cube strength.",
        applications: ["Investigating low cube strength results", "Old bridge & culvert integrity evaluation", "Legal disputes and structural audit reports"]
      },
      {
        id: "con-rebound",
        name: "Rebound Hammer Test (NDT)",
        standards: "IS: 13311 (Part 2) / ASTM C805",
        status: "Available Now",
        isRoutine: true,
        turnaround: "Immediate on-site reading + 24 hr formal report",
        sampleReq: "Field access to smooth, clean concrete member surfaces",
        description: "Non-destructive testing measuring surface hardness rebound index to assess relative concrete uniformity and identify weaker zones across structural elements.",
        applications: ["Quick non-destructive survey of columns, beams, retaining walls", "Pavement uniformity mapping", "Identifying areas requiring core extraction"]
      },
      {
        id: "con-upv",
        name: "Ultrasonic Pulse Velocity (UPV) Test (NDT)",
        standards: "IS: 13311 (Part 1) / ASTM C597",
        status: "Available Now",
        isRoutine: true,
        turnaround: "Field survey + 24–48 hr analytical report",
        sampleReq: "Structural member with accessible opposite or adjacent faces",
        description: "Measures the transit time of ultrasonic pulses passing through concrete to determine internal compaction quality, detect voids, honeycombing, and deep cracks.",
        applications: ["Internal concrete quality grading (Excellent / Good / Medium / Doubtful)", "Fire damage depth assessment", "Structural rehabilitation benchmarks"]
      },
      {
        id: "con-corr",
        name: "Half-Cell Potential & Rebar Corrosion Assessment",
        standards: "ASTM C876",
        status: "Coming Soon",
        isRoutine: false,
        turnaround: "Planned Schedule",
        sampleReq: "Access to exposed structural reinforcement electrical connection",
        description: "Measures electrical potential between embedded steel reinforcement and copper-copper sulfate reference electrode to calculate probability of active corrosion.",
        applications: ["Bridge deck longevity assessment", "Coastal structure durability audits", "Cathodic protection planning"]
      }
    ]
  }
];
