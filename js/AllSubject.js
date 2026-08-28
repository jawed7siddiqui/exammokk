// allsubject.js - 100% Original DB IDs & Structure Preserved

const subjectsBySegment = {
  // ⚡ Daily GK & Current Affairs Speed Drills
  DAILY_GK: [
    {
      id: "daily_gk_quiz",
      apiSubject: "General Knowledge",
      name: "Daily GK & Current Affairs",
      icon: "🌍",
      color: "bg-indigo-600",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      tags: [
        "Daily Current Affairs",
        "Static GK",
        "SSC CGL",
        "Banking GA",
        "Railway NTPC",
        "State PSC",
        "Defence",
        "Daily Speed Quiz",
      ],
      categories: [
        {
          id: "dgk_todays_affairs",
          title: "Daily Current Affairs",
        },
        {
          id: "dgk_polity_constitution",
          title: "Indian Polity GK",
        },
        {
          id: "dgk_economy_banking",
          title: "Banking & Economy",
        },
        {
          id: "dgk_science_tech",
          title: "Science & Tech",
        },
        {
          id: "dgk_history_culture",
          title: "History & Heritage",
        },
        {
          id: "dgk_awards_sports",
          title: "Sports & Awards",
        },
        {
          id: "dgk_static_gk",
          title: "Static GK Special",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 3. 🏛️ Govt PSC / UPSC / All State PSC
  GOVT_PSC: [
    {
      id: "p_polity",
      apiSubject: "Polity",
      name: "Indian Polity & Constitution",
      icon: "⚖️",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.66,
      tags: [
        "UPSC CSE (IAS/IPS)",
        "UPPSC (UP PCS)",
        "BPSC (Bihar)",
        "MPPSC (MP)",
        "RPSC (RAS Rajasthan)",
        "WBPSC (West Bengal)",
        "MPSC (Maharashtra)",
        "JPSC (Jharkhand)",
        "TNPSC (Tamil Nadu)",
        "KPSC (Karnataka)",
        "GPSC (Gujarat)",
      ],
      categories: [
        {
          id: "pp_preamble_fr_dpsp",
          title: "Preamble & Rights",
        },
        {
          id: "pp_union_executive",
          title: "Union Executive",
        },
        {
          id: "pp_parliament",
          title: "Parliament & Legislature",
        },
        {
          id: "pp_judiciary",
          title: "Indian Judiciary",
        },
        {
          id: "pp_panchayati_raj",
          title: "Local Self Governance",
        },
        {
          id: "pp_constitutional_bodies",
          title: "Constitutional Bodies",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_history",
      apiSubject: "History",
      name: "History & Art & Culture",
      icon: "🏛️",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.66,
      tags: [
        "Ancient India",
        "Medieval India",
        "Modern History & Freedom Struggle",
        "Art & Culture",
        "UPSC GS-1",
        "BPSC",
        "UPPSC",
        "MPPSC",
        "RAS",
        "State Specific History",
      ],
      categories: [
        {
          id: "ph_ancient",
          title: "Ancient India",
        },
        {
          id: "ph_medieval",
          title: "Medieval India",
        },
        {
          id: "ph_freedom_struggle",
          title: "Freedom Struggle",
        },
        {
          id: "ph_post_independence",
          title: "Post Independence",
        },
        {
          id: "ph_art_culture",
          title: "Art & Culture",
        },
        {
          id: "ph_state_history",
          title: "State History",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_geography",
      apiSubject: "Geography",
      name: "Indian & World Geography",
      icon: "🌍",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.66,
      tags: [
        "Physical Geography",
        "Indian Geography",
        "Ecology & Environment",
        "Mapping",
        "UPSC",
        "State PSC Prelims",
        "BPSC",
        "UPPSC",
        "State Forest Services (IFS)",
      ],
      categories: [
        {
          id: "pg_physical",
          title: "Physical Geography",
        },
        {
          id: "pg_indian_drainage",
          title: "Indian Drainage",
        },
        {
          id: "pg_climate_soil",
          title: "Climate & Soils",
        },
        {
          id: "pg_minerals_agri",
          title: "Agriculture & Minerals",
        },
        {
          id: "pg_environment_ecology",
          title: "Ecology & Biodiversity",
        },
        {
          id: "pg_map_locations",
          title: "Map Locations",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_economy",
      apiSubject: "Economics",
      name: "Indian Economy & Budget",
      icon: "📈",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.66,
      tags: [
        "Union Budget",
        "Economic Survey",
        "Banking & Fiscal Policy",
        "UPSC GS-3",
        "State Budget Analysis",
        "All State PCS GS",
      ],
      categories: [
        {
          id: "pe_national_income",
          title: "National Income",
        },
        {
          id: "pe_banking_rbi",
          title: "Banking & RBI",
        },
        {
          id: "pe_budget_taxation",
          title: "Budget & Taxation",
        },
        {
          id: "pe_poverty_schemes",
          title: "Poverty & Schemes",
        },
        {
          id: "pe_foreign_trade",
          title: "Foreign Trade",
        },
        {
          id: "pe_state_economy",
          title: "State Economy",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_current_affairs",
      apiSubject: "General Knowledge",
      name: "Current Affairs & State GK",
      icon: "📰",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.66,
      tags: [
        "Daily Current Affairs",
        "Monthly Roundups",
        "National & International GK",
        "Bihar Special GK",
        "UP Special GK",
        "MP Special GK",
        "Rajasthan Special GK",
      ],
      categories: [
        {
          id: "pca_national_international",
          title: "National & International",
        },
        {
          id: "pca_science_defence",
          title: "Science & Defence",
        },
        {
          id: "pca_awards_sports",
          title: "Awards & Sports",
        },
        {
          id: "pca_state_special_gk",
          title: "State Special GK",
        },
        {
          id: "pca_monthly_roundup",
          title: "Monthly Current Affairs",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_csat",
      apiSubject: "CSAT",
      name: "CSAT (Aptitude & Reasoning)",
      icon: "🧠",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      marksPerCorrect: 2.5,
      negativeMarks: 0.83,
      tags: [
        "UPSC CSAT (Paper 2)",
        "UPPSC Paper 2",
        "BPSC CSAT",
        "Reading Comprehension",
        "Logical Reasoning",
        "Data Interpretation",
        "State Civil Services Qualifying Paper",
      ],
      categories: [
        {
          id: "pcsat_comprehension",
          title: "Reading Comprehension",
        },
        {
          id: "pcsat_logical_reasoning",
          title: "Logical Reasoning",
        },
        {
          id: "pcsat_quant_arithmetic",
          title: "Quantitative Aptitude",
        },
        {
          id: "pcsat_di_charts",
          title: "Data Interpretation",
        },
        {
          id: "pcsat_decision_making",
          title: "Decision Making",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 4. ⚡ SSC Exams (Direct Stream)
  SSC: [
    {
      id: "ssc_quant",
      apiSubject: "Quantitative Aptitude",
      name: "Quantitative Aptitude",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO", "SSC GD Constable"],
      categories: [
        { id: "ssc_arithmetic", title: "Arithmetic Math Practice" },
        { id: "ssc_algebra", title: "Algebra Linear Equations" },
        { id: "ssc_geometry", title: "Geometry Mensuration 3D" },
        { id: "ssc_trigonometry", title: "Trigonometry Heights Distances" },
        { id: "ssc_number_system", title: "Number System HCF" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_reasoning",
      apiSubject: "General Intelligence & Reasoning",
      name: "Reasoning Ability",
      icon: "🧠",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO", "SSC GD"],
      categories: [
        { id: "ssc_analogy", title: "Analogy Classification Sets" },
        { id: "ssc_series", title: "Number Series Patterns" },
        { id: "ssc_blood_relations", title: "Blood Relations Directions" },
        { id: "ssc_syllogism", title: "Syllogism Logical Venn" },
        { id: "ssc_coding", title: "Coding Decoding Logic" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_english",
      apiSubject: "English Language & Comprehension",
      name: "English Language",
      icon: "🔤",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO"],
      categories: [
        { id: "ssc_grammar", title: "Grammar Error Spotting" },
        { id: "ssc_vocab", title: "Synonyms Antonyms Idioms" },
        { id: "ssc_cloze", title: "Cloze Test Passage" },
        { id: "ssc_rc", title: "Reading Comprehension RC" },
        { id: "ssc_para_jumble", title: "Sentence Rearrangement Jumble" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_gk",
      apiSubject: "General Awareness",
      name: "General Awareness & GK",
      icon: "📰",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO", "Static GK"],
      categories: [
        { id: "ssc_static_gk", title: "Static GK Monuments" },
        { id: "ssc_history_geo", title: "History Geography Polity" },
        { id: "ssc_science", title: "General Science Physics" },
        { id: "ssc_current", title: "Current Affairs Indexes" },
        { id: "ssc_computer", title: "Computer Knowledge Basics" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 5. 🚆 Railway Exams (Direct Stream)
  RAILWAYS: [
    {
      id: "rrb_science",
      apiSubject: "General Science",
      name: "Railway General Science",
      icon: "🔬",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "RRB Group D", "RRB ALP", "RRB Technician"],
      categories: [
        { id: "rrb_physics", title: "NCERT Physics Railway" },
        { id: "rrb_chemistry", title: "NCERT Chemistry Railway" },
        { id: "rrb_biology", title: "NCERT Biology Life" },
        { id: "rrb_engineering", title: "Basic Science Engineering" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "rrb_maths",
      apiSubject: "Mathematics",
      name: "Railway Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "RRB Group D", "RRB ALP"],
      categories: [
        { id: "rrb_arithmetic", title: "Arithmetic Speed Math" },
        { id: "rrb_algebra_trig", title: "Algebra Geometry Trig" },
        { id: "rrb_stats", title: "Statistics Data Interpretation" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "rrb_reasoning",
      apiSubject: "General Intelligence & Reasoning",
      name: "Railway Reasoning",
      icon: "🧠",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "RRB Group D", "RPF SI Constable"],
      categories: [
        { id: "rrb_analogy_coding", title: "Analogy Coding Classification" },
        { id: "rrb_puzzles_direction", title: "Puzzles Seating Directions" },
        { id: "rrb_syllogism_venn", title: "Syllogism Venn Diagrams" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "rrb_gk",
      apiSubject: "General Awareness",
      name: "Railway Awareness & GK",
      icon: "🚆",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "RRB Group D", "RPF SI"],
      categories: [
        { id: "rrb_railway_gk", title: "Indian Railways History" },
        { id: "rrb_current_affairs", title: "National Events Current" },
        { id: "rrb_static_gk", title: "Static GK Culture" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 6. 🏦 Banking & Insurance (Direct Stream)
  BANKING: [
    {
      id: "bk_reasoning",
      apiSubject: "Reasoning Ability",
      name: "Reasoning & Puzzles",
      icon: "🧠",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.25,
      tags: [
        "SBI PO",
        "SBI Clerk",
        "IBPS PO",
        "IBPS Clerk",
        "IBPS RRB",
        "RBI Grade B",
      ],
      categories: [
        { id: "bk_seating_puzzles", title: "Puzzles Seating Arrangements" },
        { id: "bk_syllogism_inequality", title: "Syllogism Inequality Logic" },
        { id: "bk_coding_input", title: "Input Output Coding" },
        { id: "bk_critical_reasoning", title: "Critical Logical Reasoning" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bk_quant",
      apiSubject: "Quantitative Aptitude",
      name: "Quantitative Aptitude & DI",
      icon: "📈",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.25,
      tags: ["SBI PO", "IBPS PO", "RBI Assistant", "LIC AAO"],
      categories: [
        { id: "bk_data_interpretation", title: "Data Interpretation Math" },
        { id: "bk_simplification", title: "Simplification Series Quadratic" },
        { id: "bk_arithmetic_word", title: "Arithmetic Word Problems" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bk_english",
      apiSubject: "English Language",
      name: "English Language",
      icon: "🔤",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.25,
      tags: ["SBI PO", "IBPS PO", "RBI Grade B"],
      categories: [
        { id: "bk_rc_cloze", title: "Reading Comprehension English" },
        { id: "bk_error_detection", title: "Error Detection Fillers" },
        { id: "bk_para_jumbles", title: "Para Jumbles Connectors" },
        { id: "bk_descriptive", title: "Descriptive Writing Practice" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bk_financial_awareness",
      apiSubject: "General & Banking Awareness",
      name: "Banking & Financial GK",
      icon: "🏦",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.25,
      tags: ["SBI PO", "IBPS PO", "RBI Grade B", "SEBI Grade A", "NABARD"],
      categories: [
        { id: "bk_rbi_monetary", title: "RBI Monetary Terms" },
        { id: "bk_banking_awareness", title: "Banking Financial Awareness" },
        { id: "bk_current_economic", title: "Economic Survey Budget" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 7. 🧬 JEE & NEET Entrance (Direct Stream)
  JEE_NEET: [
    {
      id: "jn_physics",
      apiSubject: "Physics",
      name: "Physics (NEET / JEE)",
      icon: "⚡",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 4,
      negativeMarks: 1,
      tags: ["NEET UG", "JEE Main", "JEE Advanced", "BITSAT"],
      categories: [
        { id: "jn_mechanics", title: "Physics Mechanics Electrodynamics" },
        { id: "jn_thermo_optics", title: "Thermodynamics Wave Optics" },
        { id: "jn_modern_physics", title: "Modern Physics Semiconductor" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jn_chemistry",
      apiSubject: "Chemistry",
      name: "Chemistry (NEET / JEE)",
      icon: "🧪",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      marksPerCorrect: 4,
      negativeMarks: 1,
      tags: ["NEET UG", "JEE Main", "BITSAT"],
      categories: [
        { id: "jn_physical_chem", title: "Physical Organic Chemistry" },
        { id: "jn_inorganic_chem", title: "Inorganic Coordination Blocks" },
        { id: "jn_organic_reactions", title: "Organic Carbonyl Haloalkanes" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jn_biology",
      apiSubject: "Biology",
      name: "Biology (NEET UG)",
      icon: "🧬",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 4,
      negativeMarks: 1,
      tags: ["NEET UG", "AIIMS Nursing", "CUET UG"],
      categories: [
        { id: "jn_botany", title: "Botany Physiology Plants" },
        { id: "jn_zoology_genetics", title: "Zoology Genetics Evolution" },
        { id: "jn_human_physiology", title: "Human Physiology Reproduction" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jn_maths",
      apiSubject: "Mathematics",
      name: "Mathematics (JEE Main & Adv)",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 4,
      negativeMarks: 1,
      tags: ["JEE Main", "JEE Advanced", "BITSAT", "WBJEE"],
      categories: [
        { id: "jn_calculus_algebra", title: "Calculus Algebra Vectors" },
        { id: "jn_coordinate_trig", title: "Coordinate Geometry Conics" },
        { id: "jn_full_mock", title: "Full Syllabus Mock" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 8. 🎖️ Defence & Police Exams (Direct Stream)
  DEFENCE: [
    {
      id: "def_maths",
      apiSubject: "Mathematics",
      name: "NDA Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 2.5,
      negativeMarks: 0.83,
      tags: ["NDA & NA", "CDS (IMA)", "Airforce Group X"],
      categories: [
        { id: "def_nda_maths_1", title: "NDA Mathematics Higher" },
        { id: "def_trig_algebra", title: "Calculus Matrices Determinants" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "def_gat",
      apiSubject: "General Ability Test (GAT)",
      name: "General Ability Test (GAT)",
      icon: "🎖️",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      marksPerCorrect: 4,
      negativeMarks: 1.33,
      tags: ["NDA GAT", "CDS OTA", "AFCAT", "CAPF"],
      categories: [
        { id: "def_gat_english", title: "GAT English Language" },
        { id: "def_gat_science_gk", title: "Science Defence GK" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "def_police_special",
      apiSubject: "Police & Law Studies",
      name: "Police SI & Constable",
      icon: "👮",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 2.5,
      negativeMarks: 0.5,
      tags: ["UP Police SI", "Bihar Police SI", "Delhi Police", "Constable"],
      categories: [
        { id: "def_moolvidhi", title: "Mool Vidhi Constitution" },
        { id: "def_general_hindi", title: "General Hindi Police" },
        { id: "def_reasoning_math", title: "Mental Aptitude Reasoning" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 9. 👨‍🏫 Teaching & TET Exams (Direct Stream)
  TEACHING: [
    {
      id: "tch_cdp",
      apiSubject: "Child Development & Pedagogy",
      name: "Child Development (CDP)",
      icon: "👶",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: ["CTET Paper 1", "CTET Paper 2", "UPTET", "BTET", "REET", "KVS"],
      categories: [
        { id: "tch_cdp_pedagogy", title: "Child Development Pedagogy" },
        { id: "tch_learning_theories", title: "Piaget Vygotsky Theories" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "tch_subjects_pedagogy",
      apiSubject: "Content & Subject Pedagogy",
      name: "Subject Pedagogy (Maths/EVS/SST)",
      icon: "👨‍🏫",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: ["CTET", "KVS", "DSSSB", "Super TET"],
      categories: [
        { id: "tch_maths_pedagogy", title: "Mathematics Content Pedagogy" },
        { id: "tch_evs_pedagogy", title: "Environmental Studies Pedagogy" },
        { id: "tch_languages_pedagogy", title: "Hindi English Pedagogy" },
        { id: "tch_sst_science_pedagogy", title: "Social Science Pedagogy" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 10. ⚖️ CUET, Law & Management Entrance (Direct Stream)
  ENTRANCE: [
    {
      id: "ent_legal_clat",
      apiSubject: "Legal & Critical Reasoning",
      name: "CLAT & Law Reasoning",
      icon: "⚖️",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0.25,
      tags: ["CLAT", "AILET", "SLAT"],
      categories: [
        { id: "ent_legal_reasoning", title: "Legal Aptitude Reasoning" },
        {
          id: "ent_critical_reasoning",
          title: "Critical Analytical Reasoning",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ent_cuet_aptitude",
      apiSubject: "CUET General Test",
      name: "CUET General Test",
      icon: "🎓",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 5,
      negativeMarks: 1,
      tags: ["CUET UG", "CUET PG", "IPMAT"],
      categories: [
        { id: "ent_cuet_general", title: "CUET General Aptitude" },
        { id: "ent_verbal_reading", title: "Verbal Reading Ability" },
        { id: "ent_data_quant", title: "Quantitative Data Techniques" },
      ],
      loaded: false,
      loading: false,
    },
  ],
};

// Window object attachment and helpers
window.subjectsBySegment = subjectsBySegment;

// Dynamic flattening (maintains backwards-compatibility with window.allSubjects)
window.getAllSubjects = function () {
  return Object.values(subjectsBySegment).flat();
};
window.allSubjects = window.getAllSubjects();

window.getSubjectsBySegment = function (segmentKey) {
  if (!segmentKey) return [];
  const normalizedKey = String(segmentKey).trim().toUpperCase();
  return subjectsBySegment[normalizedKey] || [];
};

window.getSubjectById = function (id) {
  return (
    window.getAllSubjects().find(function (subject) {
      return subject.id === id;
    }) || null
  );
};

// CBT Score calculation (supports accurate negative marking and accuracy metrics)
window.calculateScore = function (subjectId, correctCount, incorrectCount) {
  const subject = window.getSubjectById(subjectId);
  if (!subject) {
    return {
      totalScore: 0,
      positiveMarksEarned: 0,
      negativeMarksDeducted: 0,
      accuracy: 0,
    };
  }

  const validCorrect = Math.max(0, parseInt(correctCount) || 0);
  const validIncorrect = Math.max(0, parseInt(incorrectCount) || 0);

  const positive = validCorrect * (subject.marksPerCorrect || 1);
  const negative = validIncorrect * (subject.negativeMarks || 0);
  const totalScore = parseFloat((positive - negative).toFixed(2));

  const totalAttempted = validCorrect + validIncorrect;
  const accuracy =
    totalAttempted > 0
      ? parseFloat(((validCorrect / totalAttempted) * 100).toFixed(1))
      : 0;

  return {
    totalScore: totalScore,
    positiveMarksEarned: parseFloat(positive.toFixed(2)),
    negativeMarksDeducted: parseFloat(negative.toFixed(2)),
    accuracy: accuracy,
  };
};
