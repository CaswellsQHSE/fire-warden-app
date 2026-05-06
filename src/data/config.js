// ─── COURSE CONFIGURATION ────────────────────────────────────────────────────
// Edit this file to update branding, site details, questions and settings.
// After editing, redeploy to Vercel (push to GitHub or run `vercel --prod`).

export const CONFIG = {
  // ── Branding ──────────────────────────────────────────────────────────────
  orgName: "Caswells Group",
  courseTitle: "Fire Warden Training",
  brandPrimary: "#08488D",
  brandSecondary: "#EC1C24",
  brandAccent: "#53BF96",
  brandAccent2: "#4077B2",
  logoUrl: "", // URL to logo image, or leave empty

  // ── Admin ─────────────────────────────────────────────────────────────────
  adminPassword: "caswells2025",

  // ── Assessment ────────────────────────────────────────────────────────────
  passmark: 80,
  maxAttempts: 2,

  // ── EmailJS (completion notifications) ───────────────────────────────────
  // Sign up free at https://www.emailjs.com
  // Create a service, template and get your public key
  // Template variables available: {{name}}, {{role}}, {{site}},
  // {{score}}, {{date}}, {{reference}}, {{refresher_due}}
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",       // e.g. "service_abc123"
    templateId: "YOUR_TEMPLATE_ID",     // e.g. "template_xyz789"
    publicKey: "YOUR_PUBLIC_KEY",       // e.g. "abcDEFghiJKL"
    toEmail: "qhse@caswellsgroup.com",  // where completion emails go
  },

  // ── Sites ─────────────────────────────────────────────────────────────────
  sites: [
    {
      id: "billingham",
      name: "Billingham",
      entity: "D.R. Caswell Ltd",
      address: "Lagonda Road, Billingham, TS23 4JA",
      assembly: "Front of building (car park)",
      evac: "Simultaneous evacuation",
      alarm: "Weekly — every Friday at 10:00am",
      drill: "Six-monthly (recorded by Fire Marshal)",
      wardens: 3,
      responsiblePerson: "Paul Murphy",
      safetyManager: "Craig Watson",
      fireService: "Cleveland Fire Brigade",
      nearestStation: "Stockton Community Fire Station (~3.3 miles)",
      alarmPanel: "Reception area, with mimic boards throughout site",
      detectionZones: 7,
      alarmStandard: "BS 5839-1 Category L2",
      extinguishers: "Portable fire extinguishers (serviced Jan 2025, BS 5306)",
      emergencyLighting: "Service confirmed 01/09/2025 — routine test records must be implemented per BS 5266-8",
      fraActions: [
        "Install directional fire exit signage throughout (P2 — within 3 months)",
        "Secure surface-mounted cabling with fire-resistant fixings (P2)",
        "Increase fire warden numbers — minimum 2 per building (P2)",
        "Implement routine emergency lighting test records per BS 5266-8 (P2)",
      ],
      departments: ["Goods In", "Goods Out", "Shop", "Embroidery", "Accounts", "Office", "Hose Department"],
    },
    {
      id: "macclesfield",
      name: "Macclesfield (Cutlers)",
      entity: "Cutler Cleaning Supplies Ltd",
      address: "Clough Bank, Bollington, Macclesfield, SK10 5NZ",
      assembly: "Designated assembly point — see posted evacuation plan",
      evac: "Simultaneous evacuation",
      alarm: "Weekly (recorded in fire safety logbook)",
      drill: "Six-monthly — last drill 18/06/2025",
      wardens: 3,
      responsiblePerson: "Caswells Group",
      safetyManager: "Oliver Gosling (Operations Supervisor)",
      fireService: "Cheshire Fire & Rescue Service",
      nearestStation: "Bollington Fire Station (<1 mile)",
      alarmPanel: "Fire alarm panel on site — 2 detection zones",
      detectionZones: 2,
      alarmStandard: "BS 5839-1 Category L3 (warehouse); admin block upgrade required",
      extinguishers: "Portable fire extinguishers (newly installed Sep 2025, BS 5306)",
      emergencyLighting: "Weekly tested and serviced 12/02/2025 per BS 5266-8 — fully compliant",
      fraActions: [
        "Install BS 5839-1 Category L3 detection in new admin block, linked site-wide (P2)",
        "Increase fire warden numbers to ensure cover during absence/sickness (P2)",
      ],
      departments: ["Warehouse", "Administration / Office", "Reception / Showroom"],
    },
  ],
};

// ─── ASSESSMENT QUESTIONS ────────────────────────────────────────────────────
export const QUESTIONS = [
  {
    q: "Under the Regulatory Reform (Fire Safety) Order 2005, what is the primary duty of the Responsible Person?",
    opts: ["Ensure all staff have a fire extinguisher at their workstation", "Carry out or arrange a suitable and sufficient fire risk assessment and implement its findings", "Appoint a Fire Marshal from an external agency", "File annual returns with the Health and Safety Executive"],
    correct: 1,
    explain: "Article 9 of the RR(FS)O 2005 requires the responsible person to carry out a suitable and sufficient fire risk assessment and act on its significant findings.",
  },
  {
    q: "Which three elements make up the fire triangle?",
    opts: ["Heat, smoke and oxygen", "Fuel, heat and oxygen", "Fuel, sparks and nitrogen", "Carbon, heat and hydrogen"],
    correct: 1,
    explain: "The fire triangle consists of fuel (combustible material), heat (an ignition source) and oxygen. Remove any one element and the fire cannot sustain itself.",
  },
  {
    q: "Which fire class covers fires involving flammable liquids such as petrol, paint and solvents?",
    opts: ["Class A", "Class B", "Class C", "Class D"],
    correct: 1,
    explain: "Class B fires involve flammable liquids. Class A = ordinary combustibles, Class C = flammable gases, Class D = metals, Class F = cooking oils.",
  },
  {
    q: "A CO₂ extinguisher should NOT be used on which type of fire?",
    opts: ["Electrical fires", "Class B liquid fires", "Class A fires involving paper or wood", "Class F cooking oil fires"],
    correct: 2,
    explain: "CO₂ extinguishers are suitable for electrical fires and Class B liquids, but are ineffective on Class A fires. They must never be used on Class F cooking oil fires.",
  },
  {
    q: "What is the correct action sequence when discovering a fire?",
    opts: ["Evacuate, call 999, raise the alarm", "Raise the alarm, call 999, evacuate", "Fight the fire first, then raise the alarm", "Call your manager, then raise the alarm"],
    correct: 1,
    explain: "Raise the alarm first to warn others, then call 999 to alert the fire service, then evacuate. Never attempt to fight the fire before warning others.",
  },
  {
    q: "Which stage of fire development carries the highest risk of flashover?",
    opts: ["Incipient (early) stage", "Growth stage", "Fully developed stage", "Decay stage"],
    correct: 1,
    explain: "Flashover can occur at the end of the growth stage, when radiant heat raises all exposed combustible surfaces to ignition temperature simultaneously.",
  },
  {
    q: "The Regulatory Reform (Fire Safety) Order 2005 applies to:",
    opts: ["Domestic premises only", "All non-domestic premises in England and Wales", "All premises in the UK including domestic dwellings", "Only premises employing more than 5 people"],
    correct: 1,
    explain: "The RR(FS)O 2005 applies to virtually all non-domestic premises in England and Wales. Separate legislation covers Scotland and Northern Ireland.",
  },
  {
    q: "As a Fire Warden, what is your primary responsibility during an evacuation?",
    opts: ["Fight the fire using available extinguishers", "Sweep your allocated area to ensure all persons have evacuated and report to the Fire Marshal", "Call 999 before doing anything else", "Locate and isolate the electrical supply to the building"],
    correct: 1,
    explain: "The Fire Warden's primary role during evacuation is to sweep their allocated area to confirm all persons have left safely, then report to the Fire Marshal.",
  },
  {
    q: "Which extinguisher type is most suitable for a fire involving live electrical equipment?",
    opts: ["Water (red)", "Foam (cream)", "CO₂ (black)", "Wet chemical (yellow)"],
    correct: 2,
    explain: "CO₂ (black label) extinguishers are safe for use on live electrical equipment as they leave no residue and are non-conductive.",
  },
  {
    q: "What does 'flashover' mean in the context of fire development?",
    opts: ["The moment a fire is first detected by a smoke alarm", "The simultaneous ignition of all combustible materials in a compartment due to accumulated radiant heat", "A backdraught caused by sudden oxygen introduction", "The point at which a fire extinguisher loses pressure"],
    correct: 1,
    explain: "Flashover occurs when radiant heat raises all exposed combustible surfaces to ignition temperature simultaneously, causing the entire room to ignite at once.",
  },
  {
    q: "Which of the following best describes a Class F fire?",
    opts: ["Fires involving flammable metals", "Fires involving electrical equipment", "Fires involving cooking oils and fats", "Fires involving flammable gases"],
    correct: 2,
    explain: "Class F fires involve cooking oils and fats at high temperatures. They require a wet chemical extinguisher — never use water, CO₂ or foam on a Class F fire.",
  },
  {
    q: "Under Article 21 of the RR(FS)O 2005, what are employers required to provide?",
    opts: ["Monthly fire drills for all staff", "Suitable and sufficient fire safety training for employees", "A dedicated fire safety officer on every shift", "Annual inspection by a third-party fire risk assessor"],
    correct: 1,
    explain: "Article 21 requires that employees receive suitable and sufficient fire safety training, both on induction and on an ongoing basis.",
  },
  {
    q: "Fire spreads by which three mechanisms?",
    opts: ["Radiation, convection and conduction", "Conduction, explosion and smouldering", "Radiation, smoke travel and spontaneous combustion", "Convection, ventilation and evaporation"],
    correct: 0,
    explain: "Fire spreads through radiation (electromagnetic waves), convection (hot gases rising) and conduction (heat through solid materials).",
  },
  {
    q: "A foam extinguisher (cream label) is suitable for which fire classes?",
    opts: ["Class A and Class B", "Class B and Class C", "Class C and Class D", "Class A and Class F"],
    correct: 0,
    explain: "Foam extinguishers are suitable for Class A (solid combustibles) and Class B (flammable liquids). Not for electrical, gas, metal or cooking oil fires.",
  },
  {
    q: "What is the purpose of a fire risk assessment?",
    opts: ["To document all past fire incidents at the premises", "To identify fire hazards, evaluate the risk to life and determine appropriate control measures", "To satisfy insurance requirements only", "To allocate responsibility for purchasing fire extinguishers"],
    correct: 1,
    explain: "A fire risk assessment identifies hazards, evaluates risk to life, and determines control measures. It is a legal requirement under Article 9 of the RR(FS)O 2005.",
  },
  {
    q: "Which British Standard covers fire detection and alarm systems?",
    opts: ["BS 5266-1", "BS 5839-1", "BS 5306", "BS 7671"],
    correct: 1,
    explain: "BS 5839-1 covers fire detection and alarm systems. BS 5266-1 covers emergency escape lighting, BS 5306 covers fire extinguishing equipment.",
  },
  {
    q: "How does backdraught differ from flashover?",
    opts: ["They are the same phenomenon", "Flashover is simultaneous fuel ignition from radiant heat; backdraught is explosive ignition from sudden oxygen introduction to an oxygen-depleted fire", "Backdraught involves all fuels igniting simultaneously", "Flashover only occurs outdoors"],
    correct: 1,
    explain: "Flashover = simultaneous ignition of all surfaces due to radiant heat. Backdraught = explosive ignition caused by sudden oxygen introduction to a smouldering, oxygen-starved fire.",
  },
  {
    q: "Which of the following is an effective means of preventing fire in a workplace?",
    opts: ["Storing combustibles adjacent to heat sources", "Carrying out regular PAT testing and fixed wire inspections", "Propping fire doors open to improve ventilation", "Removing fire safety signs to reduce visual clutter"],
    correct: 1,
    explain: "Regular PAT testing and fixed-wire inspection reduce electrical ignition risk — one of the most common causes of workplace fire.",
  },
  {
    q: "At Caswells Group sites, how frequently are fire evacuation drills required?",
    opts: ["Monthly", "Quarterly", "Six-monthly", "Annually only"],
    correct: 2,
    explain: "Six-monthly fire drills are required at both Caswells Group sites, recorded in the Fire Safety Logbook.",
  },
  {
    q: "A dry powder extinguisher (blue label) covers which fire classes?",
    opts: ["Class A, B and C", "Class B, C and D", "Class A, B, C and electrical", "Class F only"],
    correct: 2,
    explain: "Multi-purpose dry powder covers Class A, B, C and electrical fires. However it impairs visibility and causes damage — avoid use in enclosed spaces where possible.",
  },
];

// ─── MODULE STRUCTURE ─────────────────────────────────────────────────────────
export const MODULES = [
  { id: "welcome",       label: "Welcome",                    icon: "🏠" },
  { id: "legislation",   label: "Fire legislation",           icon: "⚖️" },
  { id: "triangle",      label: "Fire triangle & chemistry",  icon: "🔬" },
  { id: "stages",        label: "Stages of fire",             icon: "📈" },
  { id: "spread",        label: "How fire spreads",           icon: "↔️" },
  { id: "classes",       label: "Fire classification",        icon: "🏷️" },
  { id: "prevention",    label: "Fire prevention",            icon: "🛡️" },
  { id: "extinguishers", label: "Extinguisher types & use",   icon: "🧯" },
  { id: "risk",          label: "Risk assessment",            icon: "📋" },
  { id: "arrangements",  label: "Fire safety arrangements",   icon: "🏢" },
  { id: "roles",         label: "Warden roles & duties",      icon: "⛑️" },
  { id: "assessment",    label: "Assessment",                 icon: "✏️" },
  { id: "certificate",   label: "Certificate",                icon: "📜" },
];
