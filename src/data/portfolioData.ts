import { ProjectItem, SkillCategoryItem, AutoCADFeatureItem } from '../types';

export const personalInfo = {
  name: 'Vatsal Sonigra',
  title: 'Electrical Design Engineer',
  specialization: 'AutoCAD-Based Electrical Design & Documentation',
  focus: 'Electrical Drawings • Documentation • CAD',
  bio: 'Vatsal Sonigra is an Electrical Design Engineer specializing in AutoCAD-based electrical design and technical documentation. Dedicated to accuracy, structured drawing development, and rigorous attention to detail, he delivers clean 2D schematics, single line diagrams, conduit routing, and panel schedules that bridge engineering design with reliable field implementation.',
  email: 'vatsalsonigra37@gmail.com',
  location: 'Available for Remote & On-Site Engineering Projects',
  linkedin: 'https://linkedin.com/in/vatsal-sonigra',
  experienceYears: 'Professional Practice',
  drawingsCount: '150+ Technical Drawings'
};

export const projectsList: ProjectItem[] = [
  {
    id: 'electrical-design-documentation',
    number: '01',
    title: 'Electrical Design & Documentation',
    category: 'Commercial & Infrastructure',
    year: '2024',
    client: 'Corporate Infrastructure Development',
    tagline: 'AutoCAD-based electrical drawings and technical documentation developed for project requirements.',
    description: 'AutoCAD-based electrical drawings and technical documentation developed for project requirements. Prepared primary power distribution drawings, switchboard feeder routing, emergency egress lighting circuits, and coordinated load schedules.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'Electrical Design', 'Technical Documentation'],
    skills: ['2D Design', 'Lighting Layouts', 'Power Distribution', 'Panel Schedules', 'Circuit Annotation'],
    deliverables: [
      'Complete Floor Power & Receptacle Layouts (DWG/PDF)',
      'Lighting Fixture Switching & Emergency Egress Plans',
      'Main Distribution Board (MDB) & Sub-Panel Schedules',
      'Cable Tray Containment & Riser Details'
    ],
    overview: 'Engineering and comprehensive 2D CAD Design for a multi-tenant corporate office building, ensuring full adherence to electrical safety codes, voltage drop limits, and spatial coordination.',
    objective: 'Develop clean, STANDARDIZED, and revision-controlled AutoCAD drawing sets for electrical contractors and site execution teams.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted floor-by-floor lighting layouts with distinct emergency and standard circuits.',
      'Constructed single line diagrams (SLD) and connected load schedules for all distribution boards.',
      'Sized cable trays and coordinated vertical riser routes with architectural structural drawings.',
      'STANDARDIZED layer naming, line weights, dimension styles, and equipment block libraries.'
    ],
    designProcess: [
      'Load Estimation & Preliminary Circuiting Calculations',
      'Architectural Underlay Preparation & Layer Management',
      '2D Equipment Placement & Conduit/Tray Routing in AutoCAD',
      'Drawing Cross-Checking, Title Block Tagging & Quality Documentation'
    ],
    finalResult: 'Delivered an error-free 18-sheet AutoCAD drawing package with zero contractor queries during installation, fully meeting design specifications.',
    drawingCode: 'DWG-ELEC-2024-C01',
    scale: '1:50 / 1:100',
    sheetSize: 'ISO A1 (841 x 594 mm)'
  },
  {
    id: 'electrical-layout-design',
    number: '02',
    title: 'Electrical Layout Design',
    category: 'Industrial Power Systems',
    year: '2024',
    client: 'Precision Manufacturing Facility',
    tagline: 'Precise electrical layout development with focus on clarity, accuracy, and documentation standards.',
    description: 'Precise electrical layout development with focus on clarity, accuracy, and documentation standards. Documented transformer ratings, circuit breaker protective trip settings, busbar sizing, and motor control center schematics.',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'Electrical Layout', 'Documentation'],
    skills: ['Single Line Diagrams (SLD)', 'Switchgear Schematics', 'MCC Detailing', 'Engineering Documentation'],
    deliverables: [
      'Primary HT/LT Single Line Diagram (SLD)',
      'Motor Control Center (MCC) Feeder Schematics',
      'Transformer & Diesel Generator Interlock Details',
      'Detailed Cable Schedule & Breaker Trip Settings Matrix'
    ],
    overview: 'A high-precision documentation project focusing on industrial power reliability, safety interlocks, and STANDARDIZED electrical schematics for plant maintenance teams.',
    objective: 'Translate complex process engineering requirements into structured, legible, and compliant electrical schematic drawings.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted main substation and distribution board SLDs adhering to IEC / IEEE schematic symbols.',
      'Prepared detailed MCC control schematics with auxiliary contactor wiring and interlocks.',
      'Maintained consistent drawing hierarchy, cross-references, and revision clouds.',
      'Generated comprehensive cable schedules specifying size, insulation, and terminal points.'
    ],
    designProcess: [
      'Load Schedule Analysis & Diversity Factor Allocation',
      'Hierarchical Single Line Diagram Architecture Setup',
      'AutoCAD Block Symbol Standard Alignment & Dynamic Attribute Tagging',
      'Engineering Review & Final As-Built Documentation Package'
    ],
    finalResult: 'Created a STANDARDIZED master schematic drawing set that expedited plant approval and serves as the operational baseline for facility engineers.',
    drawingCode: 'DWG-SLD-2024-IND02',
    scale: 'N.T.S. (Schematic Standard)',
    sheetSize: 'ISO A0 / A1'
  },
  {
    id: 'technical-drawing-project',
    number: '03',
    title: 'Technical Drawing Project',
    category: 'Residential Electrical Systems',
    year: '2023',
    client: 'Urban Living Developments',
    tagline: 'Engineering drawings created and organized into clear, professional documentation.',
    description: 'Engineering drawings created and organized into clear, professional documentation. Included ceiling lighting loops, wall socket outlets, kitchen appliance circuits, vertical riser diagrams, and main metering room arrangements.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'CAD Design', 'Documentation'],
    skills: ['Residential Layouts', 'Conduit Routing', 'Vertical Risers', 'Meter Room Detailing'],
    deliverables: [
      'Unit Typology Electrical Floor Plans',
      'Vertical Power & Low-Voltage (ELV) Riser Diagrams',
      'Main Meter Room & Distribution Board General Arrangement (GA)',
      'Earthing & Lightning Protection Layouts'
    ],
    overview: 'Developed accurate 2D electrical construction drawings for a multi-unit residential project, ensuring clear installation paths for conduit casting and slab piping.',
    objective: 'Provide site electricians with unambiguous conduit routing and fixture placement plans to prevent installation errors.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted 6 distinct apartment unit typologies with optimized switch and socket placements.',
      'Mapped vertical rising mains, floor distribution boards, and metering panel configurations.',
      'Detailed earthing pit locations, earth strip routing, and lightning protection down-conductors.',
      'Produced detailed section drawings for concealed conduit casting in concrete slabs.'
    ],
    designProcess: [
      'Architectural Layout Review & Functional Lighting Mapping',
      'Circuit Grouping & Switch Board Placement in CAD',
      'Riser Coordination & Cable Length Calculation',
      'Final Drawing Annotation, Legend Formulation & Export'
    ],
    finalResult: 'Delivered ready-for-construction drawing packages across 12 floors with zero slab re-work during concrete pour phases.',
    drawingCode: 'DWG-RES-2023-H03',
    scale: '1:50',
    sheetSize: 'ISO A1 (841 x 594 mm)'
  },
  {
    id: 'substation-control-room-schematics',
    number: '04',
    title: '33kV Substation Control Room 2D Schematics & Cable Trays',
    category: 'Substation & Infrastructure',
    year: '2023',
    client: 'Regional Grid Utility Contractor',
    tagline: 'Precision 2D substation equipment layouts, trench sections, and DC auxiliary power schematics.',
    description: 'Drafted technical layout plans for a 33/11kV electrical substation control building. Documented GIS switchgear panel placements, control & relay panels (CRP), battery charger rooms, cable trench cross-sections, and earthing grid layout.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'Electrical Design', 'Technical Documentation'],
    skills: ['Substation Layouts', 'Cable Trench Sections', 'Earthing Grid Design', 'Equipment Clearance Detailing'],
    deliverables: [
      'Substation Control Room General Arrangement (GA)',
      'Cable Trench Routing & Section Elevation Details',
      'Control & Relay Panel (CRP) Wiring Schematics',
      'Substation Earthing Grid Mesh Layout (IEEE 80 Compliant)'
    ],
    overview: 'Substation engineering documentation requiring exacting adherence to equipment clearance distances, safety access zones, and trench depth profiles.',
    objective: 'Generate precise CAD drawings that ensure electrical safety standards and streamline switchgear installation.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted plan and section views of 33kV switchgear room with verified maintenance clearances.',
      'Constructed detailed earthing grid drawings indicating conductor size, depth, and earth electrodes.',
      'Detailed cable tray multi-tier arrangements inside trenches with separation for power and control cables.',
      'Ensured all drawing annotations complied strictly with utility Design guidelines.'
    ],
    designProcess: [
      'Standard Utility Clearance Calculation & Equipment Sizing',
      '2D Plan Drawing Setup & Section Generation in AutoCAD',
      'Detail Callouts for Cable Clamps, Gland Plates & Earth Strips',
      'Strict Layer & Linetype Standardization Verification'
    ],
    finalResult: 'Successfully approved by regional utility inspection authorities on first submission with praise for drawing clarity.',
    drawingCode: 'DWG-SUB-2023-S04',
    scale: '1:25 / 1:50',
    sheetSize: 'ISO A0 (1189 x 841 mm)'
  },
  {
    id: 'healthcare-isolated-power-lighting',
    number: '05',
    title: 'Healthcare Critical Care Electrical & Isolated Power Systems',
    category: 'Healthcare & Critical Facilities',
    year: '2023',
    client: 'Specialty Surgical Center',
    tagline: 'Isolated power panel (IPS) schematics, essential power branch distribution, and cleanroom lighting.',
    description: 'Engineered specialized AutoCAD electrical drawing sets for surgical suites and intensive care units. Documented isolated power supplies (IPS), line isolation monitors (LIM), redundant UPS feeds, and medical gas alarm panel wiring.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'Electrical Design', 'Technical Documentation'],
    skills: ['Isolated Power Systems', 'Emergency Branch Circuits', 'Cleanroom Lighting', 'Critical Care Documentation'],
    deliverables: [
      'Operating Theater Electrical Layout & IPS Panel Schematics',
      'Critical / Life Safety / Equipment Branch Distribution Plans',
      'Sealed Cleanroom Lighting & Dual-Control Switching Plans',
      'Equipotential Grounding Busbar Detail Drawings'
    ],
    overview: 'High-reliability electrical documentation for medical environments where continuous power and patient micro-shock protection are paramount.',
    objective: 'Provide meticulous technical drawings reflecting NFPA 99 / IEC 60364-7-710 medical electrical installation rules.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted specialized isolated power system single line diagrams and panel schedules.',
      'Separated circuits into Life Safety, Critical Branch, and Equipment Branch risers.',
      'Detailed equipotential grounding sockets and copper earth bus connection points.',
      'Coordinated electrical pendants and ceiling arm utility connections with medical equipment vendors.'
    ],
    designProcess: [
      'Medical Code Compliance Review (Health Facility Standards)',
      'Isolated Power & Essential Riser Schematic Formulation',
      'CAD Detailing of Pendant Drops & Earth Reference Bars',
      'Comprehensive Cross-Disciplinary Drawing Verification'
    ],
    finalResult: 'Delivered an uncompromised documentation package that passed all biomedical and electrical commissioning audits.',
    drawingCode: 'DWG-MED-2023-M05',
    scale: '1:50',
    sheetSize: 'ISO A1 (841 x 594 mm)'
  },
  {
    id: 'solar-pv-grid-tie-documentation',
    number: '06',
    title: 'Commercial Solar PV System Grid Tie-in & Inverter Schematics',
    category: 'Renewable Energy Systems',
    year: '2023',
    client: 'GreenEnergy Commercial Systems',
    tagline: 'DC string layouts, inverter AC collector panels, protection single line diagrams, and utility metering.',
    description: 'Drafted complete AutoCAD electrical permit and construction packages for rooftop solar PV installations. Included DC string grouping, array combiner box wiring, string inverter layout, AC disconnect switches, and net metering schematics.',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    tools: ['AutoCAD', 'Electrical Design', 'Technical Documentation'],
    skills: ['Solar PV Schematics', 'DC / AC Cable Sizing', 'Inverter Panel Details', 'Utility Interconnection'],
    deliverables: [
      'PV Array DC String Wiring & Conduit Routing Plan',
      'AC Collector Panel & Inverter Station Schematics',
      'Utility Interconnection & Net Metering Single Line Diagram',
      'Surge Protection Device (SPD) & System Earthing Details'
    ],
    overview: 'Complete electrical permit drawing set for commercial solar rooftop installations, balancing DC voltage ratings, inverter inputs, and utility grid interconnection.',
    objective: 'Generate clear, accurate permit drawings facilitating rapid municipal authority approval and accurate site assembly.',
    role: 'Electrical Design Engineer',
    responsibilities: [
      'Drafted PV module string layout plans with voltage drop optimization.',
      'Created three-line and single-line diagrams for DC combiner boxes and AC inverters.',
      'Detailed AC disconnect switch placement and warning label schedules per electrical code.',
      'Drafted rooftop lightning protection bonding and solar array ground conductor paths.'
    ],
    designProcess: [
      'String Sizing Verification & Inverter MPPT Matching',
      'AutoCAD Array Layout & Cable Conduit Path Design',
      'Single Line Diagram Construction & Protection Coordination',
      'Permit Sheet Compilation & As-Built Finalization'
    ],
    finalResult: 'Secured full utility interconnection permission without a single revision request from local grid operators.',
    drawingCode: 'DWG-PV-2023-R06',
    scale: '1:100 / N.T.S.',
    sheetSize: 'ISO A1 (841 x 594 mm)'
  }
];

export const skillCategories: SkillCategoryItem[] = [
  {
    id: 'electrical-design',
    category: 'Electrical Design',
    description: 'Core electrical engineering knowledge and technical design methodologies applied across commercial, industrial, and residential infrastructures.',
    skills: [
      { name: 'Electrical Design', details: 'System architecture, power requirements estimation, feeder sizing, and protection coordination.' },
      { name: 'Electrical Layouts', details: 'Arrangement of power outlets, luminaires, panels, conduit runs, and cable trays.' },
      { name: 'Electrical Documentation', details: 'Single line diagrams, load calculations, bill of quantities (BOQ), and as-built records.' },
      { name: 'Technical Drawings', details: 'Preparing complete drawing packages, schedules, design briefs, and technical specifications.' },
      { name: 'Engineering Documentation', details: 'Translating design specifications into clear, standards-compliant 2D engineering drawings.' }
    ]
  },
  {
    id: 'autocad',
    category: 'AutoCAD',
    description: 'Proficiency in computer-aided design tools and structured Design workflows that produce precise, STANDARDIZED technical documentation.',
    skills: [
      { name: 'AutoCAD', details: 'Precision 2D Design with strict geometric accuracy, snap controls, and clean linework.' },
      { name: '2D Design', details: 'Floor plans, elevations, section details, risers, and single line schematics.' },
      { name: 'CAD Documentation', details: 'Layer management, template standardization, dynamic blocks, and external references (Xrefs).' },
      { name: 'Technical Drawing', details: 'Design compliant with ISO, IEC, IEEE, and local building electrical standards.' },
      { name: 'Drawing Organization', details: 'Dimension styles, leader callouts, equipment tagging, and sheet title blocks.' }
    ]
  },
  {
    id: 'professional-skills',
    category: 'Professional Skills',
    description: 'Engineering mindset, collaborative discipline, and quality control principles ensuring seamless execution and communication.',
    skills: [
      { name: 'Attention to Detail', details: 'Meticulous verification of drawing scales, circuit tags, line weights, and symbol consistency.' },
      { name: 'Technical Problem Solving', details: 'Resolving spatial routing conflicts, clearance constraints, and design adjustments efficiently.' },
      { name: 'Documentation Accuracy', details: 'Ensuring zero discrepancy between single line diagrams, load schedules, and physical layouts.' },
      { name: 'Engineering Coordination', details: 'Collaborating effectively with architects, structural engineers, and contractors.' },
      { name: 'Design Interpretation', details: 'Translating architectural models and engineering requirements into clear documentation.' }
    ]
  }
];

export const autoCADFeatures: AutoCADFeatureItem[] = [
  {
    number: '01',
    title: 'Electrical Design',
    description: 'Constructing geometrically accurate 2D electrical layouts with precise coordinate alignment, snapping discipline, and consistent symbol scaling.',
    layerName: '0_ELEC_POWER',
    standard: 'IEC 60617 / IEEE Std 315',
    workflowStep: 'Layout Setup & Equipment Placement'
  },
  {
    number: '02',
    title: 'Design Documentation',
    description: 'Compiling structured drawing sheets with STANDARDIZED title blocks, revision history logs, scale bars, project metadata, and legend keys.',
    layerName: '0_ELEC_DOCS',
    standard: 'ISO 7200 / ISO 5457',
    workflowStep: 'Sheet Formulation & Metadata Tagging'
  },
  {
    number: '03',
    title: 'Drawing Development',
    description: 'Progressing from initial architectural underlays and schematic sketches into fully coordinated construction-ready CAD drawing packages.',
    layerName: '0_ELEC_LIGHT',
    standard: 'CIBSE / IESNA Guidelines',
    workflowStep: 'Circuit Grouping & Riser Synthesis'
  },
  {
    number: '04',
    title: 'Technical Detailing',
    description: 'Design detailed cross-sections, panel elevations, cable tray trench profiles, conduit wall penetrations, and earthing pit details.',
    layerName: '0_ELEC_DETAIL',
    standard: 'LOD 300 / 350 Detailing',
    workflowStep: 'Section Generation & Enlarged Views'
  },
  {
    number: '05',
    title: 'Revision and Refinement',
    description: 'Managing revision clouds, delta markers, modification notes, and client review feedback with structured versioning control.',
    layerName: '0_ELEC_REVISION',
    standard: 'ISO 9001 QA / QC Standards',
    workflowStep: 'Redline Auditing & Delta Clouding'
  },
  {
    number: '06',
    title: 'Accurate Documentation',
    description: 'Ensuring absolute synchronization between single line diagrams (SLD), panel load schedules, cable schedules, and physical CAD floor layouts.',
    layerName: '0_ELEC_SCHEDULE',
    standard: 'Zero-Discrepancy Quality Metric',
    workflowStep: 'Cross-Check Validation & As-Built Export'
  }
];
