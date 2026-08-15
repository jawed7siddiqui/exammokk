// allsubject.js

const subjectsBySegment = {
  // 1. 🎨 Kids School (Class 1-3)
  KIDS_SCHOOL: [
    {
      id: "k_gk",
      apiSubject: "General Knowledge",
      name: "General Knowledge (GK)",
      icon: "🌍",
      color: "bg-warning",
      badgeColor:
        "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle",
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "IGKO (GK Olympiad)",
        "Our India",
        "World & Nature",
        "Moral Values",
      ],
      categories: [
        {
          id: "kgk_india_symbols",
          title: "Our Country India & National Symbols",
        },
        { id: "kgk_animals_world", title: "Amazing Animals & Nature Facts" },
        {
          id: "kgk_festivals_culture",
          title: "Important Festivals & Celebrations",
        },
        {
          id: "kgk_sports_games",
          title: "Famous Sports, Games & Personalities",
        },
        {
          id: "kgk_world_wonders",
          title: "Basic World Facts & Famous Monuments",
        },
        {
          id: "kgk_manners_etiquette",
          title: "Good Manners, Habits & Life Skills",
        },
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
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "IMO (Math Olympiad)",
        "Mental Maths",
        "Abacus",
      ],
      categories: [
        { id: "km_num", title: "Numbers & Counting (1-100)" },
        { id: "km_add_sub", title: "Addition & Subtraction" },
        { id: "km_shapes", title: "Shapes & Patterns" },
        { id: "km_tables", title: "Multiplication Tables (2-10)" },
        { id: "km_time_money", title: "Time, Clock & Money Basics" },
        { id: "km_measurement", title: "Basic Measurement & Sizes" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_english",
      apiSubject: "English",
      name: "English Phonics & Words",
      icon: "🔤",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "IEO (English Olympiad)",
        "Phonics",
        "SpellBee",
        "Sight Words",
      ],
      categories: [
        { id: "ke_alphabet_phonics", title: "Alphabet Sounds & Phonics" },
        { id: "ke_sight_words", title: "Sight Words & 3-Letter Words" },
        { id: "ke_nouns_verbs", title: "Naming Words & Action Words" },
        { id: "ke_rhymes_opposites", title: "Rhyming Words & Opposites" },
        { id: "ke_spelling_vocab", title: "Spellings & Picture Vocabulary" },
        { id: "ke_reading", title: "Short Stories & Sentence Tracing" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_evs",
      apiSubject: "EVS",
      name: "EVS & Environmental Science",
      icon: "🌱",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "NSO (Science Olympiad)",
        "My Body",
        "Plants & Animals",
        "Community",
      ],
      categories: [
        { id: "kevs_body_senses", title: "My Body & 5 Senses" },
        { id: "kevs_plants", title: "Plants, Flowers & Trees" },
        { id: "kevs_animals", title: "Animals, Birds & Their Homes" },
        { id: "kevs_family_community", title: "My Family & Community Helpers" },
        { id: "kevs_seasons_weather", title: "Seasons, Weather & Sky" },
        { id: "kevs_safety_habits", title: "Good Habits & Safety Rules" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_hindi",
      apiSubject: "Hindi",
      name: "Hindi Varnamala",
      icon: "📚",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      tags: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Swar & Vyanjan",
        "Matrayen",
        "Hindi Reading",
      ],
      categories: [
        { id: "kh_swar_vyanjan", title: "Swar aur Vyanjan (Varnamala)" },
        {
          id: "kh_two_three_words",
          title: "Bina Matra Wale Shabd (2-3 Akshar)",
        },
        { id: "kh_matra_gyan", title: "Matra Gyan (Aa, Ee, Oo Matrayen)" },
        { id: "kh_vilom_paryay", title: "Vilom Shabd aur Samanarthi" },
        { id: "kh_counting", title: "Hindi Ginti (1-20)" },
        { id: "kh_stories", title: "Bal Kavitayein aur Kahaniyan" },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "k_art_paint",
      apiSubject: "Drawing",
      name: "Drawing & Color Fill",
      icon: "🎨",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      tags: [
        "Tracing",
        "Color by Numbers",
        "Shape Drawing",
        "Pattern Fill",
        "Creative Canvas",
      ],
      categories: [
        { id: "ka_line_shapes", title: "Line Tracing & Basic Shapes" },
        { id: "ka_color_by_numbers", title: "Color by Numbers & Math Art" },
        { id: "ka_animal_draw", title: "Animals & Cartoon Outlines" },
        { id: "ka_objects_nature", title: "Fruits, Vehicles & Nature Fill" },
        { id: "ka_freehand", title: "Freehand Blank Canvas" },
      ],
      loaded: false,
      loading: false,
    },
  ],

  // 2. 📚 Board Exams (Class 4-12 - All India & State Boards)
  BOARD_EXAMS: [
    {
      id: "b_maths",
      apiSubject: "Mathematics",
      name: "Mathematics",
      icon: "🔢",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
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

  // 3. 🏛️ Govt PSC / UPSC / All State PSC Exams
  GOVT_PSC: [
    {
      id: "p_polity",
      apiSubject: "Polity",
      name: "Indian Polity & Constitution",
      icon: "⚖️",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
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

  // 4. ⚡ Other Competitive Exams (Central, Defence, Banking, SSC, Entrance)
  OTHER: [
    {
      id: "o_jee_neet",
      apiSubject: "Engineering & Medical",
      name: "JEE & NEET (PCM / PCB)",
      icon: "🧬",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      tags: [
        "JEE Main",
        "JEE Advanced",
        "NEET UG",
        "BITSAT",
        "MHT CET",
        "WBJEE",
        "KCET",
        "CUET UG (Science)",
        "AIIMS Nursing",
      ],
      categories: [
        {
          id: "on_physics_mechanics_electro",
          title: "NEET/JEE Physics: Mechanics & Electrodynamics",
        },
        {
          id: "on_chemistry_physical_organic",
          title: "NEET/JEE Chemistry: Physical, Organic & Inorganic",
        },
        {
          id: "on_biology_physiology_genetics",
          title: "NEET Biology: Botany, Zoology, Physiology & Genetics",
        },
        {
          id: "on_maths_calculus_algebra",
          title: "JEE Mathematics: Calculus, Algebra, Coordinate & Vectors",
        },
        {
          id: "on_full_mock_tests",
          title: "Full Syllabus Mock Test Papers (NTA Pattern)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_ssc",
      apiSubject: "Staff Selection Commission",
      name: "SSC Exams (CGL, CHSL, GD, CPO)",
      icon: "⚡",
      color: "bg-dark",
      badgeColor: "badge bg-dark-subtle text-dark border border-dark-subtle",
      tags: [
        "SSC CGL",
        "SSC CHSL",
        "SSC MTS",
        "SSC CPO (Delhi Police)",
        "SSC GD Constable",
        "SSC Stenographer",
        "SSC Selection Post",
      ],
      categories: [
        {
          id: "ossc_quant_advance",
          title: "Quantitative Aptitude (Arithmetic & Advanced Mathematics)",
        },
        {
          id: "ossc_reasoning_general",
          title: "General Intelligence & Reasoning",
        },
        {
          id: "ossc_english_comprehension",
          title: "English Language, Grammar & Comprehension",
        },
        {
          id: "ossc_general_awareness",
          title: "General Awareness & Static GK",
        },
        {
          id: "ossc_computer_aptitude",
          title: "Computer Knowledge & Typing Module",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_banking",
      apiSubject: "Banking & Insurance",
      name: "Banking & Insurance (IBPS, SBI, RBI)",
      icon: "🏦",
      color: "bg-success",
      badgeColor:
        "badge bg-success-subtle text-success border border-success-subtle",
      tags: [
        "SBI PO / Clerk",
        "IBPS PO / Clerk",
        "IBPS RRB (Gramin Bank)",
        "RBI Grade B / Assistant",
        "LIC AAO / ADO",
        "NABARD",
        "SEBI Grade A",
      ],
      categories: [
        {
          id: "obk_puzzles_reasoning",
          title: "High Level Puzzles & Seating Arrangements",
        },
        {
          id: "obk_quant_data_interpretation",
          title:
            "Data Interpretation & Speed Mathematics (Simplification/Series)",
        },
        {
          id: "obk_english_cloze_rc",
          title: "Reading Comprehension, Error Detection & Cloze Test",
        },
        {
          id: "obk_banking_financial_awareness",
          title: "Banking, Financial Terms & Economic Awareness",
        },
        {
          id: "obk_descriptive_test",
          title: "Descriptive Writing (Essay & Letter Practice)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_railways",
      apiSubject: "Railways",
      name: "Railway Exams (RRB NTPC, Group D, ALP)",
      icon: "🚆",
      color: "bg-danger",
      badgeColor:
        "badge bg-danger-subtle text-danger border border-danger-subtle",
      tags: [
        "RRB NTPC (Graduate & 12th Level)",
        "RRB Group D",
        "RRB ALP (Assistant Loco Pilot)",
        "RRB Technician",
        "RRB JE",
        "RPF SI & Constable",
      ],
      categories: [
        {
          id: "orrb_general_science",
          title: "General Science (NCERT 10th Level Physics, Chem, Bio)",
        },
        {
          id: "orrb_mathematics",
          title: "Mathematics (Basic Arithmetic & Algebra)",
        },
        { id: "orrb_reasoning", title: "General Intelligence & Reasoning" },
        {
          id: "orrb_general_awareness",
          title: "General Awareness & Railway Static GK",
        },
        {
          id: "orrb_technical_trade",
          title: "Basic Science & Engineering (For ALP/Technician)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_defence",
      apiSubject: "Defence",
      name: "Defence & Police Exams (NDA, CDS, Police SI)",
      icon: "🎖️",
      color: "bg-secondary",
      badgeColor:
        "badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
      tags: [
        "NDA & NA",
        "CDS (IMA/OTA)",
        "AFCAT",
        "CAPF (Assistant Commandant)",
        "Agniveer (Army/Navy/Airforce)",
        "UP Police SI/Constable",
        "Bihar Police SI/Constable",
        "Delhi Police",
      ],
      categories: [
        { id: "odef_nda_maths", title: "NDA Mathematics (11th & 12th Level)" },
        {
          id: "odef_gat_english",
          title: "General Ability Test (GAT) - English",
        },
        {
          id: "odef_gat_general_science",
          title: "GAT - General Science & Defence GK",
        },
        {
          id: "odef_police_moolvidhi",
          title: "Mool Vidhi (Basic Law) & Constitution (Police SI)",
        },
        {
          id: "odef_police_hindi",
          title: "General Hindi (UP/Bihar Police SI & Constable)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_teaching",
      apiSubject: "Teaching Exams",
      name: "Teaching & TET (CTET, State TET, KVS)",
      icon: "👨‍🏫",
      color: "bg-info",
      badgeColor:
        "badge bg-info-subtle text-info-emphasis border border-info-subtle",
      tags: [
        "CTET (Central TET Paper 1 & 2)",
        "UPTET",
        "BTET / Bihar STET",
        "REET (Rajasthan)",
        "KVS (Kendriya Vidyalaya)",
        "NVS (Navodaya)",
        "DSSSB (Delhi)",
        "Super TET",
      ],
      categories: [
        { id: "ot_cdp_pedagogy", title: "Child Development & Pedagogy (CDP)" },
        {
          id: "ot_maths_pedagogy",
          title: "Mathematics & Mathematics Pedagogy",
        },
        {
          id: "ot_evs_pedagogy",
          title: "Environmental Studies (EVS) & Pedagogy",
        },
        {
          id: "ot_language_hindi_english",
          title: "Language 1 & 2 Pedagogy (Hindi / English)",
        },
        {
          id: "ot_social_science_pedagogy",
          title: "Social Science / Science Content & Pedagogy (Paper 2)",
        },
      ],
      loaded: false,
      loading: false,
    },
    {
      id: "o_entrance",
      apiSubject: "Aptitude & Entrance",
      name: "CUET, Law & Management (CLAT, IPMAT)",
      icon: "⚖️",
      color: "bg-primary",
      badgeColor:
        "badge bg-primary-subtle text-primary border border-primary-subtle",
      tags: [
        "CUET UG / PG",
        "CLAT (Common Law Admission Test)",
        "AILET",
        "IPMAT (IIM Indore/Rohtak)",
        "CAT / MBA CET",
        "NIFT / NID Entrance",
      ],
      categories: [
        {
          id: "oent_legal_reasoning",
          title: "Legal Aptitude & Legal Reasoning (CLAT)",
        },
        {
          id: "oent_critical_reasoning",
          title: "Critical Reasoning & Analytical Ability",
        },
        {
          id: "oent_cuet_general_test",
          title: "CUET General Test (Quantitative Aptitude, Reasoning, GK)",
        },
        {
          id: "oent_verbal_ability",
          title: "Verbal Ability & Advanced Reading Comprehension",
        },
        {
          id: "oent_data_interpretation",
          title: "Quantitative Techniques & Data Interpretation",
        },
      ],
      loaded: false,
      loading: false,
    },
  ],
};

// Window object me attach kar rahe hain taaki pure JS script se access ho sake
window.subjectsBySegment = subjectsBySegment;
window.allSubjects = Object.values(subjectsBySegment).flat();

window.getSubjectsBySegment = function (segmentKey) {
  return subjectsBySegment[segmentKey] || [];
};

window.getSubjectById = function (id) {
  return (
    window.allSubjects.find(function (subject) {
      return subject.id === id;
    }) || null
  );
};
