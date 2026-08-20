// allsubject.js

const subjectsBySegment = {
  // 1. 🎨 Kids School (Class 1-3)
  KIDS_SCHOOL: [
    {
      id: "k_gk",
      apiSubject: "General Knowledge",
      name: "General Knowledge",
      icon: "🌍",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "IGKO",
        "GK",
      ],
      categories: [
        { id: "kgk_india_symbols", title: "National Symbols" },
        { id: "kgk_states_capitals", title: "Indian States" },
        { id: "kgk_leaders", title: "Great Leaders" },
        { id: "kgk_monuments", title: "Monuments" },
        { id: "kgk_geography", title: "World Geography" },
        { id: "kgk_sports", title: "Sports" },
        { id: "kgk_festivals", title: "Festivals" },
        { id: "kgk_inventions", title: "Inventions" },
        { id: "kgk_space", title: "Space" },
        { id: "kgk_life_skills", title: "Life Skills" },
        { id: "kgk_current_affairs", title: "Current Affairs" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_maths",
      apiSubject: "Mathematics",
      name: "Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "IMO",
        "Mental Maths",
      ],
      categories: [
        { id: "km_numbers", title: "Numbers" },
        { id: "km_addition", title: "Addition" },
        { id: "km_subtraction", title: "Subtraction" },
        { id: "km_multiplication", title: "Multiplication" },
        { id: "km_division", title: "Division" },
        { id: "km_fractions", title: "Fractions" },
        { id: "km_decimals", title: "Decimals" },
        { id: "km_shapes", title: "Shapes" },
        { id: "km_patterns", title: "Patterns" },
        { id: "km_time", title: "Time" },
        { id: "km_money", title: "Money" },
        { id: "km_measurement", title: "Measurement" },
        { id: "km_data_handling", title: "Data Handling" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_english",
      apiSubject: "English",
      name: "English & Grammar",
      icon: "🔤",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "IEO",
        "Grammar",
      ],
      categories: [
        { id: "ke_phonics", title: "Phonics" },
        { id: "ke_sight_words", title: "Sight Words" },
        { id: "ke_nouns", title: "Nouns" },
        { id: "ke_pronouns", title: "Pronouns" },
        { id: "ke_verbs", title: "Verbs" },
        { id: "ke_adjectives", title: "Adjectives" },
        { id: "ke_prepositions", title: "Prepositions" },
        { id: "ke_tenses", title: "Tenses" },
        { id: "ke_opposites", title: "Opposites" },
        { id: "ke_synonyms", title: "Synonyms" },
        { id: "ke_spellings", title: "Spellings" },
        { id: "ke_punctuation", title: "Punctuation" },
        { id: "ke_comprehension", title: "Comprehension" },
        { id: "ke_composition", title: "Composition" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_evs_science",
      apiSubject: "EVS & Science",
      name: "EVS & Science",
      icon: "🌱",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "NSO",
        "EVS",
      ],
      categories: [
        { id: "kevs_human_body", title: "Human Body" },
        { id: "kevs_food", title: "Food" },
        { id: "kevs_plants", title: "Plants" },
        { id: "kevs_animals", title: "Animals" },
        { id: "kevs_family", title: "Family" },
        { id: "kevs_helpers", title: "Community Helpers" },
        { id: "kevs_water", title: "Water" },
        { id: "kevs_weather", title: "Weather" },
        { id: "kevs_seasons", title: "Seasons" },
        { id: "kevs_solar_system", title: "Solar System" },
        { id: "kevs_matter", title: "Matter" },
        { id: "kevs_machines", title: "Simple Machines" },
        { id: "kevs_safety", title: "Safety Rules" },
        { id: "kevs_environment", title: "Environment" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_hindi",
      apiSubject: "Hindi",
      name: "हिन्दी व्याकरण",
      icon: "📚",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Grammar",
        "Varnamala",
      ],
      categories: [
        { id: "kh_varnamala", title: "वर्णमाला" },
        { id: "kh_bina_matra", title: "बिना मात्रा" },
        { id: "kh_matra_gyan", title: "मात्रा ज्ञान" },
        { id: "kh_sanyukt_akshar", title: "संयुक्त अक्षर" },
        { id: "kh_sangya", title: "संज्ञा" },
        { id: "kh_sarvanam", title: "सर्वनाम" },
        { id: "kh_visheshan", title: "विशेषण" },
        { id: "kh_kriya", title: "क्रिया" },
        { id: "kh_kaal", title: "काल" },
        { id: "kh_ling", title: "लिंग" },
        { id: "kh_vachan", title: "वचन" },
        { id: "kh_vilom", title: "विलोम शब्द" },
        { id: "kh_paryayvachi", title: "पर्यायवाची" },
        { id: "kh_anek_shabd", title: "अनेक शब्द" },
        { id: "kh_shuddh_ashuddh", title: "शुद्ध-अशुद्ध" },
        { id: "kh_muhavare", title: "मुहावरे" },
        { id: "kh_ginti", title: "गिनती" },
        { id: "kh_kahani", title: "कहानियां" },
        { id: "kh_kavita", title: "कविताएं" },
        { id: "kh_gadyansh", title: "गद्यांश" },
        { id: "kh_patra_nibandh", title: "पत्र लेखन" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_art_paint",
      apiSubject: "Drawing & Art",
      name: "Drawing & Art",
      icon: "🎨",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Art",
        "Craft",
      ],
      categories: [
        { id: "ka_tracing", title: "Line Tracing" },
        { id: "ka_shapes", title: "Basic Shapes" },
        { id: "ka_color_fill", title: "Color Fill" },
        { id: "ka_doodling", title: "Doodling" },
        { id: "ka_patterns", title: "Pattern Art" },
        { id: "ka_animals", title: "Animals" },
        { id: "ka_birds", title: "Birds" },
        { id: "ka_scenery", title: "Scenery" },
        { id: "ka_festivals", title: "Festivals" },
        { id: "ka_craft", title: "Paper Craft" },
        { id: "ka_origami", title: "Origami" },
        { id: "ka_freehand", title: "Blank Canvas" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 2. 📚 Board Exams (Class 4-12)
  BOARD_EXAMS: [
    {
      id: "b_maths",
      apiSubject: "Mathematics",
      name: "Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "CBSE",
        "ICSE",
        "UP Board",
        "Bihar Board (BSEB)",
        "RBSE",
        "MP Board",
        "Maharashtra State Board",
        "Class 4 to 10",
        "NTSE",
      ],
      categories: [
        {
          id: "bm_numbers_algebra",
          title: "Real Numbers, Polynomials & Algebra",
        },
        {
          id: "bm_linear_equations",
          title: "Pair of Linear & Quadratic Equations",
        },
        {
          id: "bm_geometry",
          title: "Triangles, Circles & Coordinate Geometry",
        },
        { id: "bm_trigonometry", title: "Trigonometry & Applications" },
        { id: "bm_mensuration", title: "Surface Areas & Volumes" },
        { id: "bm_stats_prob", title: "Statistics & Probability" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_science",
      apiSubject: "Science",
      name: "General Science (Class 4-10)",
      icon: "🔬",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "CBSE",
        "ICSE",
        "State Boards",
        "Class 4 to 10",
        "NSO",
        "NTSE",
        "Science Olympiad",
      ],
      categories: [
        {
          id: "bs_chemical_reactions",
          title: "Chemical Reactions, Acids & Bases",
        },
        {
          id: "bs_metals_carbon",
          title: "Metals, Non-Metals & Carbon Compounds",
        },
        {
          id: "bs_life_processes",
          title: "Life Processes & Control-Coordination",
        },
        {
          id: "bs_reproduction_heredity",
          title: "Reproduction & Heredity-Evolution",
        },
        { id: "bs_light_optics", title: "Light: Reflection & Refraction" },
        {
          id: "bs_electricity_magnetism",
          title: "Electricity & Magnetic Effects",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_social_science",
      apiSubject: "Social Science",
      name: "Social Science (SST)",
      icon: "🗺️",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "CBSE",
        "ICSE",
        "State Boards",
        "Class 6 to 10",
        "Map Work",
        "Civics",
        "Economics",
      ],
      categories: [
        { id: "bss_history", title: "Nationalism in Europe & India (History)" },
        {
          id: "bss_geography",
          title: "Resources, Agriculture & Minerals (Geography)",
        },
        {
          id: "bss_civics",
          title: "Power Sharing, Federalism & Democracy (Civics)",
        },
        {
          id: "bss_economics",
          title: "Sectors of Economy, Money & Credit (Economics)",
        },
        { id: "bss_maps", title: "Map Work Practice & Identification" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_physics",
      apiSubject: "Physics",
      name: "Physics (Class 11-12)",
      icon: "⚡",
      color: "bg-dark",
      badgeColor:
        "badge bg-secondary-subtle text-dark border border-secondary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 11",
        "Class 12",
        "CBSE Board",
        "ISC",
        "State Boards 12th",
        "NCERT Solved",
      ],
      categories: [
        {
          id: "bp_mechanics",
          title: "Kinematics, Laws of Motion & Work-Energy",
        },
        {
          id: "bp_thermo_waves",
          title: "Thermodynamics, Oscillations & Waves",
        },
        {
          id: "bp_electrostatics_current",
          title: "Electrostatics, Capacitance & Current",
        },
        {
          id: "bp_magnetism_emi",
          title: "Magnetism, EMI & Alternating Current",
        },
        { id: "bp_optics", title: "Ray Optics & Wave Optics" },
        {
          id: "bp_modern_physics",
          title: "Dual Nature, Atoms, Nuclei & Semiconductors",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_chemistry",
      apiSubject: "Chemistry",
      name: "Chemistry (Class 11-12)",
      icon: "🧪",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 11",
        "Class 12",
        "CBSE Board",
        "ISC",
        "Organic",
        "Inorganic",
        "Physical",
      ],
      categories: [
        {
          id: "bc_structure_bonding",
          title: "Atomic Structure & Chemical Bonding",
        },
        {
          id: "bc_thermo_equilibrium",
          title: "Thermodynamics, Equilibrium & Kinetics",
        },
        { id: "bc_solutions_electro", title: "Solutions & Electrochemistry" },
        {
          id: "bc_inorganic_coordination",
          title: "d & f Block Elements, Coordination Compounds",
        },
        {
          id: "bc_organic_haloalkanes",
          title: "Haloalkanes, Alcohols, Phenols & Ethers",
        },
        {
          id: "bc_organic_carbonyl",
          title: "Aldehydes, Ketones, Carboxylic Acids & Amines",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_biology",
      apiSubject: "Biology",
      name: "Biology (Class 11-12)",
      icon: "🧬",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 11",
        "Class 12",
        "CBSE Board",
        "ISC",
        "Botany",
        "Zoology",
        "NCERT Diagrams",
      ],
      categories: [
        {
          id: "bb_diversity_cell",
          title: "Diversity of Living Organisms & Cell Biology",
        },
        {
          id: "bb_plant_physiology",
          title: "Plant Physiology & Photosynthesis",
        },
        { id: "bb_human_physiology", title: "Human Physiology & Body Systems" },
        { id: "bb_reproduction", title: "Reproduction in Plants & Humans" },
        {
          id: "bb_genetics_evolution",
          title: "Genetics, Heredity & Molecular Basis",
        },
        {
          id: "bb_biotech_ecology",
          title: "Biotechnology Principles & Ecology",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "b_commerce",
      apiSubject: "Commerce",
      name: "Commerce & Accountancy",
      icon: "📊",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      marksPerCorrect: 1,
      negativeMarks: 0,
      tags: [
        "Class 11",
        "Class 12",
        "Accountancy",
        "Economics",
        "Business Studies",
        "CBSE",
        "ISC",
      ],
      categories: [
        {
          id: "bcom_accounting_principles",
          title: "Accounting Principles & Journal Entries",
        },
        {
          id: "bcom_partnership_shares",
          title: "Partnership Accounts & Issue of Shares",
        },
        {
          id: "bcom_financial_analysis",
          title: "Financial Statements & Cash Flow Analysis",
        },
        {
          id: "bcom_business_management",
          title: "Principles & Functions of Management",
        },
        {
          id: "bcom_macroeconomics",
          title: "National Income, Money & Banking",
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
          title: "Preamble, Fundamental Rights & DPSP",
        },
        {
          id: "pp_union_executive",
          title: "President, PM & Council of Ministers",
        },
        { id: "pp_parliament", title: "Parliament, State Legislature & Bills" },
        {
          id: "pp_judiciary",
          title: "Supreme Court, High Courts & Subordinate Courts",
        },
        {
          id: "pp_panchayati_raj",
          title: "Panchayati Raj & Local Self Governance",
        },
        {
          id: "pp_constitutional_bodies",
          title: "Election Commission, CAG, UPSC & Bodies",
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
          title: "Indus Valley, Vedic Age, Maurya & Gupta Period",
        },
        {
          id: "ph_medieval",
          title: "Delhi Sultanate, Mughals & Bhakti-Sufi Movements",
        },
        {
          id: "ph_freedom_struggle",
          title: "1857 Revolt, Indian National Congress & Gandhi Era",
        },
        {
          id: "ph_post_independence",
          title: "Post-Independence Consolidation & Reorganization",
        },
        {
          id: "ph_art_culture",
          title: "Indian Architecture, Paintings, Classical Dances & Music",
        },
        {
          id: "ph_state_history",
          title: "State-Specific History & Freedom Movements",
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
          title: "Geomorphology, Climatology & Oceanography",
        },
        {
          id: "pg_indian_drainage",
          title: "Physiography of India & River Systems",
        },
        {
          id: "pg_climate_soil",
          title: "Monsoon, Climate Zones, Soils & Vegetation",
        },
        {
          id: "pg_minerals_agri",
          title: "Agriculture, Mineral Resources & Industries",
        },
        {
          id: "pg_environment_ecology",
          title: "Biodiversity, National Parks & Climate Change",
        },
        {
          id: "pg_map_locations",
          title: "World & India Map Locations & Straits",
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
          title: "National Income, GDP & Economic Growth",
        },
        {
          id: "pe_banking_rbi",
          title: "RBI, Monetary Policy, Inflation & Banking Sector",
        },
        {
          id: "pe_budget_taxation",
          title: "Union Budget, Fiscal Policy & GST",
        },
        {
          id: "pe_poverty_schemes",
          title: "Poverty, Unemployment & Govt Welfare Schemes",
        },
        {
          id: "pe_foreign_trade",
          title: "Balance of Payments, WTO & Forex Reserves",
        },
        {
          id: "pe_state_economy",
          title: "State Economic Survey & Local Budget",
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
          title: "National Events, Summits & Bilateral Pacts",
        },
        {
          id: "pca_science_defence",
          title: "Science & Tech, Defence Drills & Space Missions",
        },
        {
          id: "pca_awards_sports",
          title: "Awards, Appointments, Indexes & Sports",
        },
        {
          id: "pca_state_special_gk",
          title: "State Special GK (Bihar / UP / MP / Raj / Maha)",
        },
        {
          id: "pca_monthly_roundup",
          title: "Monthly Current Affairs Mock Tests",
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
        { id: "pcsat_comprehension", title: "Reading Comprehension Passages" },
        {
          id: "pcsat_logical_reasoning",
          title: "Syllogism, Blood Relations & Directions",
        },
        {
          id: "pcsat_quant_arithmetic",
          title: "Basic Numeracy, Percentages & Time-Work",
        },
        {
          id: "pcsat_di_charts",
          title: "Data Interpretation (Pie Charts, Bar Graphs, Tables)",
        },
        {
          id: "pcsat_decision_making",
          title: "Decision Making & Analytical Ability",
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
window.allSubjects = Object.values(subjectsBySegment).flat();

window.getSubjectsBySegment = function (segmentKey) {
  if (!segmentKey) return [];
  const normalizedKey = String(segmentKey).trim().toUpperCase();
  return subjectsBySegment[normalizedKey] || [];
};

window.getSubjectById = function (id) {
  return (
    window.allSubjects.find(function (subject) {
      return subject.id === id;
    }) || null
  );
};

// Helper function to calculate test score easily
window.calculateScore = function (subjectId, correctCount, incorrectCount) {
  const subject = window.getSubjectById(subjectId);
  if (!subject) return { totalScore: 0, positive: 0, negative: 0 };

  const positive = correctCount * (subject.marksPerCorrect || 1);
  const negative = incorrectCount * (subject.negativeMarks || 0);
  const totalScore = parseFloat((positive - negative).toFixed(2));

  return {
    totalScore: Math.max(0, totalScore),
    positiveMarksEarned: positive,
    negativeMarksDeducted: negative,
  };
};
