/**
 * AllSubject.js — Master Subjects & Topic Tree Configuration
 * ExamMokk Educational Platform (Updated with Separate BPSC & JPSC Streams)
 */

const subjectsBySegment = {
  // 🌍 1. Daily Live Speed Drill
  DAILY_GK: [
    {
      id: "dgk_current_affairs",
      apiSubject: "General Knowledge",
      name: "Daily Current Affairs & Today's GK",
      icon: "⚡",
      color: "bg-amber-500",
      badgeColor: "badge bg-amber-50 text-amber-800 border border-amber-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.5,
      tags: ["Daily Live Quiz", "Current Affairs", "Speed Drill"],
      categories: [
        {
          id: "dgk_today_affairs",
          title: "Today's Fresh Current Affairs Quiz",
        },
        {
          id: "dgk_national_international",
          title: "National & International Headlines",
        },
        { id: "dgk_sports_awards", title: "Sports, Honors & Awards" },
        { id: "dgk_static_speed", title: "High-Yield Static GK Speed Drill" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🏛️ 2. Central UPSC & General State PSC
  GOVT_PSC: [
    {
      id: "p_polity",
      apiSubject: "Indian Polity & Governance",
      name: "Indian Polity & Constitution",
      icon: "⚖️",
      color: "bg-indigo-600",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.66,
      tags: ["UPSC CSE", "UPPSC", "RAS", "MPPSC", "State PCS"],
      categories: [
        { id: "p_preamble_fr", title: "Preamble, Fundamental Rights & DPSP" },
        {
          id: "p_parliament_judiciary",
          title: "Union Parliament, Executive & Supreme Court",
        },
        {
          id: "p_state_local_gov",
          title: "State Legislature, Governor & Panchayati Raj",
        },
        {
          id: "p_constitutional_bodies",
          title: "Constitutional & Non-Constitutional Bodies",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_history",
      apiSubject: "History & Art-Culture",
      name: "Indian History & Art Culture",
      icon: "📜",
      color: "bg-amber-600",
      badgeColor: "badge bg-amber-50 text-amber-800 border border-amber-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.66,
      tags: ["UPSC CSE", "State PSC", "Ancient & Modern History"],
      categories: [
        {
          id: "p_ancient_india",
          title: "Indus Valley, Vedic Age & Mauryan/Gupta Empire",
        },
        {
          id: "p_medieval_india",
          title: "Delhi Sultanate, Mughal Empire & Bhakti Movement",
        },
        {
          id: "p_modern_freedom",
          title: "British Expansion, 1857 Revolt & Freedom Movement",
        },
        {
          id: "p_art_architecture",
          title: "Indian Architecture, Paintings & Classical Dances",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_geography_env",
      apiSubject: "Geography & Ecology",
      name: "Geography, Ecology & Environment",
      icon: "🌍",
      color: "bg-emerald-600",
      badgeColor:
        "badge bg-emerald-50 text-emerald-800 border border-emerald-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.66,
      tags: ["UPSC CSE", "State PSC", "Physical & Indian Geography"],
      categories: [
        {
          id: "p_physical_geo",
          title: "Geomorphology, Climatology & Oceanography",
        },
        {
          id: "p_indian_geo",
          title: "Indian River Systems, Monsoons & Agriculture",
        },
        {
          id: "p_environment_ecology",
          title: "Biodiversity, National Parks & Climate Conventions",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "p_economy",
      apiSubject: "Indian Economy",
      name: "Indian Economy & Budget",
      icon: "📈",
      color: "bg-teal-600",
      badgeColor: "badge bg-teal-50 text-teal-800 border border-teal-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.66,
      tags: ["UPSC CSE", "Economic Survey", "Fiscal Policy"],
      categories: [
        {
          id: "p_macro_economy",
          title: "National Income, Inflation & Monetary Policy (RBI)",
        },
        {
          id: "p_fiscal_budget",
          title: "Union Budget, GST, Fiscal Deficit & Taxation",
        },
        {
          id: "p_social_sectors",
          title: "Poverty, Unemployment, Agriculture & Trade",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🏛️ 3. Dedicated BPSC (Bihar Civil Services & Special)
  BPSC: [
    {
      id: "bpsc_bihar_special_module",
      apiSubject: "BPSC General Studies",
      name: "Bihar Special General Studies",
      icon: "🏛️",
      color: "bg-rose-600",
      badgeColor: "badge bg-rose-50 text-rose-700 border border-rose-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["BPSC CCE Prelims", "Bihar Daroga SI", "Bihar Special GK"],
      categories: [
        {
          id: "bpsc_bihar_history_freedom",
          title: "Bihar History Freedom Struggle",
        }, // 4 Words
        {
          id: "bpsc_bihar_rivers_geography",
          title: "Bihar Geography Rivers Soil",
        }, // 4 Words
        {
          id: "bpsc_bihar_economy_survey",
          title: "Bihar Economy State Budget",
        }, // 4 Words
        {
          id: "bpsc_bihar_polity_panchayat",
          title: "Bihar Polity Panchayati Raj",
        }, // 4 Words
        {
          id: "bpsc_bihar_current_events",
          title: "Bihar Current Affairs Schemes",
        }, // 4 Words
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bpsc_core_general_science",
      apiSubject: "General Science",
      name: "BPSC",
      icon: "🧪",
      color: "bg-blue-600",
      badgeColor: "badge bg-blue-50 text-blue-700 border border-blue-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["BPSC Prelims Science", "Daily Applied Science"],
      categories: [
        { id: "bpsc_physics_applied", title: "Applied Physics Daily Concepts" }, // 4 Words
        {
          id: "bpsc_chemistry_substances",
          title: "Everyday Chemistry Periodic Table",
        }, // 4 Words
        {
          id: "bpsc_biology_human_system",
          title: "Human Biology Diseases Nutrition",
        }, // 4 Words
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bpsc_national_gs",
      apiSubject: "General Studies",
      name: "National GS for BPSC",
      icon: "⚖️",
      color: "bg-indigo-600",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["BPSC Prelims", "National Movement"],
      categories: [
        {
          id: "bpsc_indian_national_movement",
          title: "Indian National Movement Modern",
        }, // 4 Words
        {
          id: "bpsc_indian_polity_constitution",
          title: "Indian Constitution Polity Governance",
        }, // 4 Words
        {
          id: "bpsc_indian_geography_census",
          title: "Indian Geography Census Data",
        }, // 4 Words
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🏹 4. Dedicated JPSC (Jharkhand Civil Services & Special)
  JPSC: [
    {
      id: "jpsc_paper2_jharkhand_special",
      apiSubject: "JPSC General Studies",
      name: "JPSC Paper 2 Special",
      icon: "🏹",
      color: "bg-emerald-700",
      badgeColor:
        "badge bg-emerald-50 text-emerald-800 border border-emerald-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.0, // Zero Negative Marking
      tags: ["JPSC Prelims Paper 2", "CNT/SPT Laws", "No Negative Marking"],
      categories: [
        { id: "jpsc_cnt_spt_land_laws", title: "CNT SPT Land Acts" }, // 4 Words
        {
          id: "jpsc_tribal_history_revolts",
          title: "Jharkhand Tribal Revolts History",
        }, // 4 Words
        {
          id: "jpsc_jharkhand_geography_forest",
          title: "Jharkhand Geography Minerals Forests",
        }, // 4 Words
        {
          id: "jpsc_tribal_culture_festivals",
          title: "Tribal Festivals Art Culture",
        }, // 4 Words
        {
          id: "jpsc_state_schemes_policies",
          title: "Jharkhand Industrial Policy Schemes",
        }, // 4 Words
        {
          id: "jpsc_sports_literature_heroes",
          title: "Jharkhand Sports Famous Personalities",
        }, // 4 Words
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jpsc_paper1_core_gs",
      apiSubject: "General Studies",
      name: "JPSC Paper 1 GS",
      icon: "📜",
      color: "bg-slate-800",
      badgeColor: "badge bg-slate-100 text-slate-800 border border-slate-200",
      marksPerCorrect: 2.0,
      negativeMarks: 0.0,
      tags: ["JPSC Prelims Paper 1", "National GS"],
      categories: [
        {
          id: "jpsc_p1_history_india",
          title: "Ancient Medieval Modern History",
        }, // 4 Words
        {
          id: "jpsc_p1_geography_india",
          title: "Indian Geography Economic Physical",
        }, // 4 Words
        {
          id: "jpsc_p1_polity_governance",
          title: "Indian Polity Public Administration",
        }, // 4 Words
        {
          id: "jpsc_p1_economy_sustainable",
          title: "Indian Economy Sustainable Growth",
        }, // 4 Words
        {
          id: "jpsc_p1_science_tech_it",
          title: "Science Technology Information Tech",
        }, // 4 Words
      ],
      loaded: false,
      loading: false,
    },
  ],

  // ⚡ 5. SSC Examinations (Tier-1 & Tier-2)
  SSC: [
    {
      id: "ssc_quant",
      apiSubject: "Quantitative Aptitude",
      name: "Quantitative Aptitude & Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 2.0,
      negativeMarks: 0.5,
      tags: ["SSC CGL Tier-1/2", "SSC CHSL", "SSC MTS", "SSC CPO"],
      categories: [
        {
          id: "ssc_arithmetic",
          title: "Arithmetic (Percentage, Profit-Loss, Ratio, SI-CI)",
        },
        { id: "ssc_algebra", title: "Algebra & Linear Equations" },
        {
          id: "ssc_geometry_mensuration",
          title: "Geometry & Mensuration (2D/3D)",
        },
        { id: "ssc_trigonometry", title: "Trigonometry, Heights & Distances" },
        { id: "ssc_number_system", title: "Number System, HCF & LCM" },
        {
          id: "ssc_statistics_prob",
          title: "Statistics & Probability (Tier-2 High-Weightage)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_reasoning",
      apiSubject: "General Intelligence & Reasoning",
      name: "General Intelligence & Reasoning",
      icon: "🧠",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 2.0,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC GD"],
      categories: [
        {
          id: "ssc_analogy_classification",
          title: "Analogy, Classification & Odd One Out",
        },
        { id: "ssc_series_patterns", title: "Number & Letter Series Patterns" },
        {
          id: "ssc_blood_direction",
          title: "Blood Relations & Direction Sense Test",
        },
        {
          id: "ssc_syllogism_venn",
          title: "Syllogism & Logical Venn Diagrams",
        },
        {
          id: "ssc_coding_decoding",
          title: "Coding-Decoding & Word Arrangement",
        },
        { id: "ssc_non_verbal", title: "Non-Verbal & Figural Reasoning" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_english",
      apiSubject: "English Language & Comprehension",
      name: "English Language & Comprehension",
      icon: "🔤",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 2.0,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC CPO"],
      categories: [
        { id: "ssc_grammar_error", title: "Grammar Rules & Error Spotting" },
        { id: "ssc_vocab_syn_ant", title: "Synonyms, Antonyms, Idioms & OWS" },
        {
          id: "ssc_cloze_passages",
          title: "Cloze Test & Reading Comprehension",
        },
        {
          id: "ssc_para_jumbles",
          title: "Sentence Rearrangement (Para-Jumbles)",
        },
        {
          id: "ssc_voice_narration",
          title: "Active-Passive & Direct-Indirect Speech",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_gk",
      apiSubject: "General Awareness",
      name: "General Awareness & Static GK",
      icon: "📰",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 2.0,
      negativeMarks: 0.5,
      tags: ["SSC CGL", "SSC CHSL", "SSC MTS", "Static GK"],
      categories: [
        {
          id: "ssc_static_culture",
          title: "Static GK (Dance, Monuments, Festivals, Books)",
        },
        {
          id: "ssc_history_polity",
          title: "Indian History, Polity & Geography",
        },
        {
          id: "ssc_general_science",
          title: "General Science (Physics, Chem, Bio)",
        },
        {
          id: "ssc_current_affairs",
          title: "Current Affairs, Awards & Sports",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ssc_computer_module",
      apiSubject: "Computer Knowledge",
      name: "Computer Knowledge (Tier-2 Qualifying Module)",
      icon: "💻",
      color: "bg-cyan-600",
      badgeColor: "badge bg-cyan-50 text-cyan-700 border border-cyan-200",
      marksPerCorrect: 3.0,
      negativeMarks: 1.0,
      tags: ["SSC CGL Tier-2", "SSC CHSL Tier-2", "Qualifying Module"],
      categories: [
        {
          id: "ssc_comp_basics_hardware",
          title: "Computer Basics, CPU, Ports & Memory",
        },
        {
          id: "ssc_comp_ms_office",
          title: "MS Office Suite (Word, Excel & PowerPoint)",
        },
        {
          id: "ssc_comp_networking_internet",
          title: "Internet, Web Browsing, Protocols & Email",
        },
        {
          id: "ssc_comp_cyber_security",
          title: "Networking, Cyber Security, Viruses & Firewalls",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🚆 6. Railway Recruitment Board (RRB)
  RAILWAYS: [
    {
      id: "rrb_science",
      apiSubject: "General Science",
      name: "General Science (NCERT 9th & 10th Standard)",
      icon: "🧪",
      color: "bg-rose-600",
      badgeColor: "badge bg-rose-50 text-rose-700 border border-rose-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "Group D", "ALP", "Technician", "RPF SI"],
      categories: [
        {
          id: "rrb_physics_core",
          title: "Physics: Units, Work-Energy, Electricity & Optics",
        },
        {
          id: "rrb_chemistry_reactions",
          title: "Chemistry: Chemical Reactions, Periodic Table & Metals",
        },
        {
          id: "rrb_biology_life_processes",
          title: "Biology: Cells, Human Systems, Genetics & Plant Body",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "rrb_maths",
      apiSubject: "Mathematics",
      name: "Mathematics / Quantitative Section",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "Group D", "ALP", "RPF"],
      categories: [
        {
          id: "rrb_bodmas_fractions",
          title: "BODMAS, Decimals, Fractions, LCM & HCF",
        },
        {
          id: "rrb_ratio_si_ci",
          title: "Ratio-Proportion, Percentage, SI & CI",
        },
        {
          id: "rrb_time_work_speed",
          title: "Time & Work, Pipes-Cistern, Speed-Time-Distance",
        },
        {
          id: "rrb_algebra_mensuration",
          title: "Elementary Algebra, Geometry & Mensuration",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "rrb_reasoning",
      apiSubject: "General Intelligence & Reasoning",
      name: "Reasoning & Analytical Ability",
      icon: "🧠",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      marksPerCorrect: 1.0,
      negativeMarks: 0.33,
      tags: ["RRB NTPC", "Group D", "ALP"],
      categories: [
        {
          id: "rrb_syllogism_venn",
          title: "Syllogisms, Venn Diagrams & Statements",
        },
        {
          id: "rrb_series_analogies",
          title: "Analogies, Number Series & Classification",
        },
        {
          id: "rrb_coding_direction",
          title: "Coding-Decoding & Direction Sense",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🏦 7. Banking & Insurance Exams
  BANKING: [
    {
      id: "bank_quant",
      apiSubject: "Quantitative Aptitude",
      name: "Quantitative Aptitude & Data Interpretation",
      icon: "📊",
      color: "bg-emerald-600",
      badgeColor:
        "badge bg-emerald-50 text-emerald-800 border border-emerald-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.25,
      tags: ["SBI PO", "IBPS PO", "IBPS Clerk", "RBI Grade B"],
      categories: [
        {
          id: "bank_caselet_di",
          title: "Data Interpretation (Charts, Missing & Caselet DI)",
        },
        {
          id: "bank_quadratic_approx",
          title: "Simplification, Approximation & Quadratic Equations",
        },
        {
          id: "bank_arithmetic_word",
          title: "Arithmetic Word Problems (TSD, CI, Profit, Mixtures)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bank_reasoning",
      apiSubject: "Reasoning Ability",
      name: "Reasoning Ability & Seating Puzzles",
      icon: "🧩",
      color: "bg-indigo-600",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.25,
      tags: ["SBI PO", "IBPS PO", "High-Level Puzzles"],
      categories: [
        {
          id: "bank_seating_puzzles",
          title: "High-Level Puzzles (Floor, Box, Circular & Flat Arrays)",
        },
        {
          id: "bank_syllogism_inequality",
          title: "Syllogisms (Only a few), Coded Inequalities",
        },
        {
          id: "bank_input_output",
          title: "Machine Input-Output & Logical Reasoning",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "bank_english",
      apiSubject: "English Language",
      name: "English Language Section",
      icon: "🔤",
      color: "bg-teal-600",
      badgeColor: "badge bg-teal-50 text-teal-800 border border-teal-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.25,
      tags: ["Banking English", "RC & Cloze"],
      categories: [
        {
          id: "bank_rc_passages",
          title: "Reading Comprehension (Financial/Editorial passages)",
        },
        {
          id: "bank_parajumbles_cloze",
          title: "Sentence Rearrangement & Cloze Test",
        },
        {
          id: "bank_error_fillers",
          title: "Error Detection, Phrase Replacement & Fillers",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🧬 8. National Engineering & Medical (JEE / NEET)
  JEE_NEET: [
    {
      id: "jn_physics",
      apiSubject: "Physics",
      name: "Physics (Class 11th & 12th)",
      icon: "⚡",
      color: "bg-blue-600",
      badgeColor: "badge bg-blue-50 text-blue-700 border border-blue-200",
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      tags: ["JEE Main", "NEET UG", "NTA Simulator"],
      categories: [
        {
          id: "jn_mechanics",
          title: "Kinematics, Laws of Motion, Work-Energy & Rotational",
        },
        {
          id: "jn_electrodynamics",
          title: "Electrostatics, Current Electricity & Magnetism",
        },
        {
          id: "jn_optics_modern",
          title: "Wave & Ray Optics, Dual Nature & Modern Physics",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jn_chemistry",
      apiSubject: "Chemistry",
      name: "Chemistry (Physical, Organic & Inorganic)",
      icon: "🧪",
      color: "bg-indigo-600",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      tags: ["JEE Main", "NEET UG"],
      categories: [
        {
          id: "jn_physical_chem",
          title: "Physical: Thermodynamics, Equilibrium & Solutions",
        },
        {
          id: "jn_inorganic_chem",
          title: "Inorganic: Chemical Bonding, p-Block & Coordination",
        },
        {
          id: "jn_organic_chem",
          title: "Organic: Reaction Mechanisms, Hydrocarbons & Carbonyls",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "jn_maths_bio",
      apiSubject: "Mathematics",
      name: "Mathematics & Biology Domain",
      icon: "🧬",
      color: "bg-emerald-600",
      badgeColor:
        "badge bg-emerald-50 text-emerald-800 border border-emerald-200",
      marksPerCorrect: 4.0,
      negativeMarks: 1.0,
      tags: ["JEE Maths", "NEET Biology"],
      categories: [
        {
          id: "jn_calculus_vectors",
          title: "Calculus, Vectors & 3D Geometry (Maths)",
        },
        {
          id: "jn_genetics_evolution",
          title: "Genetics, Cell Biology & Evolution (Bio)",
        },
        {
          id: "jn_human_physiology",
          title: "Human Physiology & Plant Physiology (Bio)",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🎖️ 9. Defence & Police Services
  DEFENCE: [
    {
      id: "def_gat",
      apiSubject: "General Ability Test (GAT)",
      name: "General Ability Test (GAT)",
      icon: "🎖️",
      color: "bg-slate-700",
      badgeColor: "badge bg-slate-100 text-slate-700 border border-slate-200",
      marksPerCorrect: 2.5,
      negativeMarks: 0.83,
      tags: ["NDA", "CDS", "Police SI", "Agniveer"],
      categories: [
        {
          id: "def_english_grammar",
          title: "English Grammar, Spotting Errors & Vocabulary",
        },
        {
          id: "def_gs_geography",
          title: "Indian Geography, World Geography & Defences",
        },
        {
          id: "def_current_defence",
          title: "National Security, Armed Forces & Current Affairs",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "def_mool_vidhi",
      apiSubject: "Police Law & Constitution",
      name: "Police Law & Constitution (Mool Vidhi)",
      icon: "⚖️",
      color: "bg-rose-700",
      badgeColor: "badge bg-rose-50 text-rose-700 border border-rose-200",
      marksPerCorrect: 2.5,
      negativeMarks: 0.83,
      tags: ["UP Police SI", "Bihar Police SI", "Mool Vidhi"],
      categories: [
        {
          id: "def_ipc_crpc",
          title: "Indian Penal Code (IPC) & Criminal Procedure (CrPC)",
        },
        {
          id: "def_traffic_women_acts",
          title: "Motor Vehicle Act, Women Safety & Cyber Crimes",
        },
        {
          id: "def_constitutional_rights",
          title: "Constitutional Articles & Police Administration",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 👨‍🏫 10. Teaching & Teacher Eligibility (TET)
  TEACHING: [
    {
      id: "t_cdp",
      apiSubject: "Child Development & Pedagogy (CDP)",
      name: "Child Development & Pedagogy (CDP)",
      icon: "👨‍🏫",
      color: "bg-cyan-600",
      badgeColor: "badge bg-cyan-50 text-cyan-800 border border-cyan-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.0, // No negative marking
      tags: ["CTET Paper 1 & 2", "State TET", "KVS", "DSSSB"],
      categories: [
        {
          id: "t_development_theories",
          title: "Piaget, Vygotsky, Kohlberg & Child Development",
        },
        {
          id: "t_inclusive_education",
          title: "Inclusive Education & Learning Difficulties",
        },
        {
          id: "t_nep_rte_curriculum",
          title: "NEP 2020, RTE Act 2009 & Pedagogical Frameworks",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "t_evs_lang",
      apiSubject: "Environmental Studies & Language Pedagogy",
      name: "EVS & Language Pedagogy",
      icon: "🌿",
      color: "bg-emerald-600",
      badgeColor:
        "badge bg-emerald-50 text-emerald-800 border border-emerald-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.0,
      tags: ["CTET Paper 1", "EVS Themes"],
      categories: [
        {
          id: "t_evs_core_themes",
          title: "Family, Food, Shelter, Water, Travel & Things We Make",
        },
        {
          id: "t_hindi_english_pedagogy",
          title: "Hindi & English Language Teaching Pedagogy",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 🎓 11. University Entrance & Law (CUET / CLAT)
  ENTRANCE: [
    {
      id: "ent_general_test",
      apiSubject: "General Test",
      name: "CUET Section III: General Test",
      icon: "🎓",
      color: "bg-purple-600",
      badgeColor: "badge bg-purple-50 text-purple-700 border border-purple-100",
      marksPerCorrect: 5.0,
      negativeMarks: 1.0,
      tags: ["CUET UG", "CUET PG", "General Test"],
      categories: [
        {
          id: "ent_quant_aptitude",
          title: "Elementary Quantitative Reasoning (8th Level)",
        },
        {
          id: "ent_logical_analytical",
          title: "Logical & Analytical Reasoning",
        },
        {
          id: "ent_general_awareness",
          title: "Static GK, Current Affairs & General Knowledge",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "ent_legal_aptitude",
      apiSubject: "Legal Reasoning",
      name: "Legal Reasoning & Legal Aptitude (CLAT)",
      icon: "⚖️",
      color: "bg-indigo-700",
      badgeColor: "badge bg-indigo-50 text-indigo-700 border border-indigo-200",
      marksPerCorrect: 1.0,
      negativeMarks: 0.25,
      tags: ["CLAT", "AILET", "Law Entrance"],
      categories: [
        {
          id: "ent_torts_contracts",
          title: "Law of Torts, Indian Contract Act & Criminal Law",
        },
        {
          id: "ent_constitutional_law",
          title: "Constitutional Law & Legal Maxims",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],
};

// Global Safe Accessor Helpers
window.subjectsBySegment = subjectsBySegment;

window.getSubjectsBySegment = function (segmentKey) {
  if (!segmentKey) return [];
  const key = String(segmentKey).toUpperCase().trim();
  return subjectsBySegment[key] || [];
};

window.getSubjectById = function (subId) {
  for (const seg in subjectsBySegment) {
    const found = subjectsBySegment[seg].find((s) => s.id === subId);
    if (found) return found;
  }
  return null;
};
