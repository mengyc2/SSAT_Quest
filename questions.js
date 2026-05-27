// Global Question Database separated by Realm and Concept Tags
const MASTER_QUESTION_DATABASE = {
    grasslands: {
    standard: [
        // === QUANTITATIVE (MATH) ===
        // 1. Number Sense & Operations
        {
            id: "gr_math_num_01",
            concept: "math-num-fractions-add",
            type: "Lower Middle-Level SSAT Math (Number Sense)",
            textBefore: "A farmer divides a pasture. The sheep graze on ",
            hasFraction: true,
            fracData: {"top": "2", "bottom": "5"},
            textAfter: " of the pasture, and cows graze on 1/5 of the pasture. What total fraction of the pasture is being grazed?",
            options: ["A) 3/10", "B) 3/5", "C) 4/5", "D) 2/25"],
            correct: 1,
            explain: "Add fractions with a common denominator directly: 2/5 + 1/5 = 3/5. Option B is correct."
        },
        // 2. Algebra
        {
            id: "gr_math_alg_01",
            concept: "math-alg-simplify",
            type: "Lower Middle-Level SSAT Math (Algebra)",
            textBefore: "Simplify the following expression: 3x + 4x - 2x + 5",
            hasFraction: false,
            options: ["A) 5x + 5", "B) 9x + 5", "C) 7x - 3", "D) 5x"],
            correct: 0,
            explain: "Combine like terms: (3 + 4 - 2)x + 5 = 5x + 5. Option A is correct."
        },
        // 3. Geometry
        {
            id: "gr_math_geo_01",
            concept: "math-geo-perimeter",
            type: "Lower Middle-Level SSAT Math (Geometry)",
            textBefore: "A rectangular meadow has a length of 12 yards and a width of 8 yards. What is the perimeter of the meadow?",
            hasFraction: false,
            options: ["A) 20 yards", "B) 40 yards", "C) 96 yards", "D) 44 yards"],
            correct: 1,
            explain: "Perimeter = 2 * (length + width) = 2 * (12 + 8) = 2 * 20 = 40 yards. Option B is correct."
        },
        // 4. Data Analysis & Statistics
        {
            id: "gr_math_stat_01",
            concept: "math-stat-range",
            type: "Lower Middle-Level SSAT Math (Data Analysis)",
            textBefore: "The number of wild rabbits spotted over five days was: 4, 12, 3, 15, and 9. What is the mathematical range of this dataset?",
            hasFraction: false,
            options: ["A) 11", "B) 12", "C) 15", "D) 9"],
            correct: 1,
            explain: "Range = Highest value - Lowest value = 15 - 3 = 12. Option B is correct."
        },
        // 5. Probability
        {
            id: "gr_math_prob_01",
            concept: "math-prob-cards",
            type: "Lower Middle-Level SSAT Math (Probability)",
            textBefore: "A deck contains 5 bird cards, 3 mammal cards, and 2 insect cards. If you draw one card at random, what is the probability it is an insect card?",
            hasFraction: true,
            fracData: {"top": "1", "bottom": "5"},
            textAfter: "",
            options: ["A) 1/10", "B) 1/5", "C) 1/2", "D) 3/10"],
            correct: 1,
            explain: "Total cards = 5 + 3 + 2 = 10. Insect cards = 2. Probability = 2/10, which reduces to 1/5. Option B is correct."
        },
        // 6. Word Problems
        {
            id: "gr_math_word_01",
            concept: "math-word-money",
            type: "Lower Middle-Level SSAT Math (Word Problems)",
            textBefore: "A bag of organic fertilizer costs $6. If an environmental group buys 7 bags and pays with a $50 bill, how much change should they receive?",
            hasFraction: false,
            options: ["A) $6", "B) $8", "C) $42", "D) $12"],
            correct: 1,
            explain: "Total cost = 7 * $6 = $42. Change = $50 - $42 = $8. Option B is correct."
        },
        // 7. Sequences & Logic
        {
            id: "gr_math_seq_01",
            concept: "math-seq-addition",
            type: "Lower Middle-Level SSAT Math (Sequences)",
            textBefore: "Identify the next logical entry number in this counting series: 4, 11, 18, 25, ___",
            hasFraction: false,
            options: ["A) 30", "B) 32", "C) 35", "D) 29"],
            correct: 1,
            explain: "The pattern adds 7 to the previous term. 25 + 7 = 32. Option B is correct."
        },

        // === VERBAL ===
        // 8. Synonyms: Basic Nouns
        {
            id: "gr_verb_syn_01",
            concept: "verb-syn-nouns-basic",
            type: "Lower Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: RESIDENCE",
            hasFraction: false,
            options: ["A) Car", "B) Dwelling", "C) Office", "D) Land"],
            correct: 1,
            explain: "A residence is a place where a person lives, which translates to a 'Dwelling'. Option B is correct."
        },
        // 9. Synonyms: Modifiers
        {
            id: "gr_verb_syn_02",
            concept: "verb-syn-modifiers",
            type: "Lower Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: LUSH",
            hasFraction: false,
            options: ["A) Dry", "B) Abundant / Green", "C) Fragile", "D) Bitter"],
            correct: 1,
            explain: "Lush means growing luxuriantly or thickly, indicating an abundant, green ecosystem. Option B is correct."
        },
        // 10. Analogies: Item to Function
        {
            id: "gr_verb_ana_01",
            concept: "verb-ana-function",
            type: "Lower Middle-Level SSAT Verbal (Analogies)",
            textBefore: "SCISSORS : CUT :: _________ : _________",
            hasFraction: false,
            options: ["A) Pen : Paper", "B) Ruler : Measure", "C) Clock : Alarm", "D) Glue : Spill"],
            correct: 1,
            explain: "The purpose of scissors is to cut. The purpose of a ruler is to measure. Option B is correct."
        },
        // 11. Analogies: Worker to Workplace
        {
            id: "gr_verb_ana_02",
            concept: "verb-ana-workplace",
            type: "Lower Middle-Level SSAT Verbal (Analogies)",
            textBefore: "FARMER : FIELD :: _________ : _________",
            hasFraction: false,
            options: ["A) Doctor : Hospital", "B) Pilot : Plane", "C) Chef : Food", "D) Actor : Script"],
            correct: 0,
            explain: "A farmer works inside a field. A doctor works inside a hospital. Option A is correct."
        },
        // 12. Analogies: Synonyms
        {
            id: "gr_verb_ana_03",
            concept: "verb-ana-synonyms",
            type: "Lower Middle-Level SSAT Verbal (Analogies)",
            textBefore: "HUGE : GIGANTIC :: _________ : _________",
            hasFraction: false,
            options: ["A) Small : Tiny", "B) Hot : Cold", "C) Fast : Quick", "D) High : Wide"],
            correct: 0,
            explain: "Huge and gigantic are synonyms. Small and tiny are synonyms. Option A is correct."
        },
        // 13. Synonyms: Common Verbs
        {
            id: "gr_verb_syn_03",
            concept: "verb-syn-verbs-basic",
            type: "Lower Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: COMPREHEND",
            hasFraction: false,
            options: ["A) Write", "B) Speak", "C) Understand", "D) Question"],
            correct: 2,
            explain: "To comprehend means to mentally grasp or fully understand. Option C is correct."
        },
        // 14. Analogies: Class / Category
        {
            id: "gr_verb_ana_04",
            concept: "verb-ana-category",
            type: "Lower Middle-Level SSAT Verbal (Analogies)",
            textBefore: "ROBINS : BIRD :: _________ : _________",
            hasFraction: false,
            options: ["A) Oak : Tree", "B) Dog : Cat", "C) Fish : Lake", "D) Leaf : Branch"],
            correct: 0,
            explain: "A robin belongs to the category of birds. An oak belongs to the category of trees. Option A is correct."
        },

        // === READING COMPREHENSION ===
        // 15. Main Idea
        {
            id: "gr_read_main_01",
            concept: "read-grass-main",
            type: "Lower Middle-Level SSAT Reading (Main Idea)",
            textBefore: "Passage: Grasslands form crucial buffers against land desertification. The deep root networks of wild grasses anchor loose topsoil, preventing strong winds from carving away vital minerals and turning plains into wasteland fields.<br><br>Question: What is the main thesis argument of the text?",
            hasFraction: false,
            options: ["A) Winds blow topsoil away.", "B) Grass root systems prevent plains from turning into deserts.", "C) Fertilizer protects plains.", "D) Wild grasses grow tall."],
            correct: 1,
            explain: "The text concentrates entirely on how root networks anchor soil to block land desertification. Option B matches."
        },
        // 16. Supporting Detail
        {
            id: "gr_read_det_01",
            concept: "read-grass-detail",
            type: "Lower Middle-Level SSAT Reading (Supporting Detail)",
            textBefore: "Passage: Bison are massive herbivores that can eat up to 30 pounds of prairie grass every day. Their constant grazing patterns stimulate fresh plant shoots, creating healthy grasslands that attract insect swarms downstream.<br><br>Question: According to the passage, how many pounds of grass can a bison eat daily?",
            hasFraction: false,
            options: ["A) 10 pounds", "B) 20 pounds", "C) 30 pounds", "D) 40 pounds"],
            correct: 2,
            explain: "The text states explicitly that bison eat 'up to 30 pounds' of grass daily. Option C is correct."
        },
        // 17. Inference
        {
            id: "gr_read_inf_01",
            concept: "read-grass-inference",
            type: "Lower Middle-Level SSAT Reading (Inference)",
            textBefore: "Passage: When landowners replace wild prairie spaces with paved suburban parking zones, the local meadow owl colonies vanish within months, as their primary food source of field rodents can no longer find grass shelter.<br><br>Question: It can be inferred that paving wild prairies directly:",
            hasFraction: false,
            options: ["A) Helps owls find food easily", "B) Destroys the habitat and food chain of field rodents", "C) Increases grass growth rates", "D) Changes owl colors"],
            correct: 1,
            explain: "Since rods need grass shelter to survive, paving over the grass blocks their survival, forcing the owls away. Option B matches."
        },
        // 18. Vocabulary-in-Context
        {
            id: "gr_read_ctx_01",
            concept: "read-grass-vocab",
            type: "Lower Middle-Level SSAT Reading (Vocabulary-in-Context)",
            textBefore: "Passage: The unexpected summer drought caused the once-vibrant prairie field to languish, leaving brown stalks where brilliant yellow sunflowers usually bloomed.<br><br>Question: As used in the passage, the word 'languish' most nearly means:",
            hasFraction: false,
            options: ["A) Grow rapidly", "B) Weaken and wither", "C) Change color", "D) Float away"],
            correct: 1,
            explain: "The context describes brown stalks replacing blooming sunflowers due to a drought, showing the field withered or weakened. Option B matches."
        },
        // 19. Tone/Attitude
        {
            id: "gr_read_tone_01",
            concept: "read-grass-tone",
            type: "Lower Middle-Level SSAT Reading (Tone/Attitude)",
            textBefore: "Passage: It is absolutely wonderful that local youth volunteers spent their entire weekend planting native seed pods across the old strip mine site. Their tireless devotion breathes spectacular new life into our home region.<br><br>Question: The author's emotional stance can best be described as:",
            hasFraction: false,
            options: ["A) Angry", "B) Indifferent", "C) Enthusiastic and appreciative", "D) Doubtful"],
            correct: 2,
            explain: "Words like 'absolutely wonderful', 'tireless devotion', and 'spectacular new life' reflect strong appreciation and enthusiasm. Option C is correct."
        },
        // 20. Author's Purpose
        {
            id: "gr_read_purp_01",
            concept: "read-grass-purpose",
            type: "Lower Middle-Level SSAT Reading (Author's Purpose)",
            textBefore: "Passage: Controlled fires are regularly set by rangers to clear away dry, dead brush accumulation layers. For instance, the Midwest prairie preserves require artificial burns every three years to open up the soil surface for native wildflowers to germinate.<br><br>Question: Why does the author mention 'Midwest prairie preserves'?",
            hasFraction: false,
            options: ["A) To explain how wildflowers grow in spring", "B) To provide a specific example of preserves utilizing controlled fires for soil health", "C) To promote vacation travel to the Midwest", "D) To complain about bad air quality"],
            correct: 1,
            explain: "The phrase 'For instance' links the Midwest preserves directly to the previous sentence as an example of controlled fires clearing dead brush. Option B is correct."
        }
    ]
},
    marshes: {
    standard: [
        // === QUANTITATIVE (MATH) ===
        // 1. Number Sense & Operations: Percents
        {
            id: "mr_math_num_01",
            concept: "marsh-math-percent",
            type: "Middle-Level SSAT Quantitative (Number Sense)",
            textBefore: "A wetland survey team samples 60 plots of muck. If 35% of the plots contain invasive python nesting markers, how many individual plots contain python markers?",
            hasFraction: false,
            options: ["A) 18 plots", "B) 21 plots", "C) 24 plots", "D) 27 plots"],
            correct: 1,
            explain: "35% of 60 = 0.35 * 60 = 21. Option B is correct."
        },
        // 2. Algebra: Expression Inversions
        {
            id: "mr_math_alg_01",
            concept: "marsh-math-algebra",
            type: "Middle-Level SSAT Quantitative (Algebra)",
            textBefore: "An airboat captain charges an entrance fee of $25 plus $15 per hour for custom wildlife tours. If a passenger's total bill is $100, for how many hours did the tour run?",
            hasFraction: false,
            options: ["A) 3 hours", "B) 4 hours", "C) 5 hours", "D) 6 hours"],
            correct: 1,
            explain: "Equation: 15h + 25 = 100 -> 15h = 75 -> h = 5 hours. Option B is correct."
        },
        // 3. Geometry: Coordinate Geometry (Slope)
        {
            id: "mr_math_geo_01",
            concept: "marsh-math-slope",
            type: "Middle-Level SSAT Quantitative (Geometry)",
            textBefore: "A straight drainage ditch cuts across a swamp grid, running through coordinates (2, 4) and (5, 13). What is the slope of the line matching this drainage path?",
            hasFraction: false,
            options: ["A) 2", "B) 3", "C) 4", "D) 5"],
            correct: 1,
            explain: "Slope (m) = (y2 - y1) / (x2 - x1) = (13 - 4) / (5 - 2) = 9 / 3 = 3. Option B is correct."
        },
        // 4. Data Analysis & Statistics: Median
        {
            id: "mr_math_stat_01",
            concept: "marsh-math-median",
            type: "Middle-Level SSAT Quantitative (Data Analysis)",
            textBefore: "A researcher records the nesting egg counts of five marsh birds: 4, 11, 3, 7, and 9. What is the median value of this dataset?",
            hasFraction: false,
            options: ["A) 6", "B) 7", "C) 8", "D) 9"],
            correct: 1,
            explain: "Order data from least to greatest: 3, 4, 7, 9, 11. The middle value is 7. Option B is correct."
        },
        // 5. Probability: Compound Events
        {
            id: "mr_math_prob_01",
            concept: "marsh-math-prob-compound",
            type: "Middle-Level SSAT Quantitative (Probability)",
            textBefore: "A marsh observation deck features two spinning wind gauges. Gauge A has a ",
            hasFraction: true,
            fracData: {"top": "1", "bottom": "2"},
            textAfter: " probability of reading high, and Gauge B has a 1/3 probability of reading high. What is the probability that BOTH gauges read high simultaneously?",
            options: ["A) 1/6", "B) 1/5", "C) 2/5", "D) 5/6"],
            correct: 0,
            explain: "For independent compound events, multiply probabilities: 1/2 * 1/3 = 1/6. Option A is correct."
        },
        // 6. Word Problems: Work Rates
        {
            id: "mr_math_word_01",
            concept: "marsh-math-rates",
            type: "Middle-Level SSAT Quantitative (Word Problems)",
            textBefore: "A swamp drainage pump can clear water at a rate of 40 gallons per minute. How many hours will it take for the pump to empty a localized pooling pond containing 4,800 gallons of floodwater?",
            hasFraction: false,
            options: ["A) 1.5 hours", "B) 2 hours", "C) 2.5 hours", "D) 3 hours"],
            correct: 1,
            explain: "Total minutes = 4,800 / 40 = 120 minutes. 120 minutes / 60 minutes per hour = 2 hours. Option B is correct."
        },
        // 7. Sequences & Logic: Logic Matrix
        {
            id: "mr_math_seq_01",
            concept: "marsh-math-logic",
            type: "Middle-Level SSAT Quantitative (Logic)",
            textBefore: "Four roaming marsh animals (Frog, Snake, Heron, Alligator) sit in a straight line along a log. The Frog is immediately next to the Snake but not the Heron. If the Alligator sits at the absolute far left endpoint and the Snake is second from the left, what position element must the Heron hold?",
            hasFraction: false,
            options: ["A) First from left", "B) Third from left", "C) Fourth from left", "D) Second from right"],
            correct: 2,
            explain: "The layout from left to right must match: Alligator (1st), Snake (2nd), Frog (3rd, since it must sit next to Snake), leaving Heron at the 4th position. Option C is correct."
        },

        // === VERBAL ===
        // 8. Synonyms: Advanced Nouns
        {
            id: "mr_verb_syn_01",
            concept: "marsh-verb-syn-noun",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: SANCTUARY",
            hasFraction: false,
            options: ["A) Arena", "B) Refuge", "C) Laboratory", "D) Marketplace"],
            correct: 1,
            explain: "A sanctuary is a place of safety, shelter, or holy protection, translating to a 'Refuge'. Option B is correct."
        },
        // 9. Synonyms: Verbs of Inundation
        {
            id: "mr_verb_syn_02",
            concept: "marsh-verb-syn-verb",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: MERGE",
            hasFraction: false,
            options: ["A) Divide", "B) Blend / Combine", "C) Separate", "D) Submerge"],
            correct: 1,
            explain: "To merge means to join or combine lines/elements together, which is to blend. Option B is correct."
        },
        // 10. Analogies: Product to Source
        {
            id: "mr_verb_ana_01",
            concept: "marsh-verb-ana-source",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "PEAT : BOG :: _________ : _________",
            hasFraction: false,
            options: ["A) Sand : Desert", "B) Water : River", "C) Lava : Volcano", "D) Ice : Glacier"],
            correct: 2,
            explain: "Peat is a structural decomposing organic product material sourced from and characteristic of a bog. Lava is a unique substance product expelled by a volcano. Option C is correct."
        },
        // 11. Analogies: Object to Attribute
        {
            id: "Mr_verb_ana_02",
            concept: "marsh-verb-ana-attribute",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "QUICKSAND : TREACHEROUS :: _________ : _________",
            hasFraction: false,
            options: ["A) Fog : Blind", "B) Swamp : Wet", "C) Storm : Loud", "D) Glacier : Formidable"],
            correct: 3,
            explain: "Quicksand is inherently defined by its hazardous, deceptive, or treacherous nature. A glacier is uniquely characterized by its massive, slow, intimidating, or formidable nature. Option D is correct."
        },
        // 12. Analogies: Action to Result
        {
            id: "mr_verb_ana_03",
            concept: "marsh-verb-ana-result",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "STAGNATE : FOUL :: _________ : _________",
            hasFraction: false,
            options: ["A) Flow : Clear", "B) Freeze : Solid", "C) Burn : Hot", "D) Melt : Liquid"],
            correct: 1,
            explain: "When water is allowed to stagnate, it naturally becomes foul. When a liquid is allowed to freeze, it becomes solid. Option B is correct."
        },
        // 13. Synonyms: Complex Descriptions
        {
            id: "mr_verb_syn_03",
            concept: "marsh-verb-syn-complex",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: OBSCURE",
            hasFraction: false,
            options: ["A) Vivid", "B) Conceal / Unclear", "C) Obvious", "D) Bright"],
            correct: 1,
            explain: "Obscure means uncertain, hidden, or unclear to the senses, which is to conceal. Option B is correct."
        },
        // 14. Analogies: Antonymic Scales
        {
            id: "mr_verb_ana_04",
            concept: "marsh-verb-ana-antonym",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "MURKY : PELLUCID :: _________ : _________",
            hasFraction: false,
            options: ["A) Swampy : Muddy", "B) Desolate : Crowded", "C) High : Steep", "D) Cold : Chilly"],
            correct: 1,
            explain: "Murky (cloudy/dark) and pellucid (crystal clear) are direct opposites. Desolate (empty) and crowded are direct opposites. Option B is correct."
        },

        // === READING COMPREHENSION PASSAGES ===
        // 15. Main Idea
        {
            id: "mr_read_main_01",
            concept: "marsh-read-main",
            type: "Middle-Level SSAT Reading (Main Idea)",
            textBefore: "Passage: Mangrove forests that border tropical brackish marsh tracks act as complex coastal buffer shock shields. Their dense, interlocking stilt root networks diminish the hydrodynamic kinetic velocity of incoming ocean storm surges, preventing mainland soil matrices from being stripped away into the sea.<br><br>Question: Which statement encapsulates the primary thesis of the text passage?",
            hasFraction: false,
            options: ["A) Ocean storms are becoming increasingly intense.", "B) Mangrove root networks function as essential structural defenses against coastal erosion.", "C) Brackish marshes contain rare aquatic species.", "D) Tropical weather patterns are unpredictable."],
            correct: 1,
            explain: "The entire passage describes how mangrove stilt roots physically block incoming storm surges to safeguard mainland soil structures. Option B is correct."
        },
        // 16. Supporting Detail
        {
            id: "mr_read_det_01",
            concept: "marsh-read-detail",
            type: "Middle-Level SSAT Reading (Supporting Detail)",
            textBefore: "Passage: Peat bogs account for only 3 percent of Earth's total land surface area, yet their dense moss layers lock away more than 30 percent of all global land-based carbon reserves. Environmental agencies monitor these bogs closely to track emission values.<br><br>Question: According to the passage, what percentage of global land-based carbon is stored inside peat bogs?",
            hasFraction: false,
            options: ["A) 3 percent", "B) 10 percent", "C) 30 percent", "D) 50 percent"],
            correct: 2,
            explain: "The text states explicitly that peat bogs 'lock away more than 30 percent of all global land-based carbon reserves'. Option C matches."
        },
        // 17. Inference
        {
            id: "mr_read_inf_01",
            concept: "marsh-read-inference",
            type: "Middle-Level SSAT Reading (Inference)",
            textBefore: "Passage: When drainage canals are cut through a coastal marsh to clear land for housing foundations, the water salinity values upstream spike sharply within weeks. Shortly after, large populations of native freshwater reeds die off, replaced by salt-tolerant marsh grasses.<br><br>Question: It can be logically inferred that cutting drainage canals through marsh tracks:",
            hasFraction: false,
            options: ["A) Increases the depth of freshwater tables upstream", "B) Alters the ecological balance by introducing saltwater tracking currents into inland areas", "C) Accelerates reed growth", "D) Reduces regional rainfall distributions"],
            correct: 1,
            explain: "The drainage canals cause salinity (salt levels) to rise upstream, which kills freshwater flora. This indicates that saltwater is migrating inland due to the channels. Option B is correct."
        },
        // 18. Vocabulary-in-Context
        {
            id: "mr_read_ctx_01",
            concept: "marsh-read-vocab",
            type: "Middle-Level SSAT Reading (Vocabulary-in-Context)",
            textBefore: "Passage: The noxious vapors arising from the decaying peat beds forced the survey expedition to don protective respirators before venturing deeper into the interior marsh tracks.<br><br>Question: As used in the passage, the word 'noxious' most nearly means:",
            hasFraction: false,
            options: ["A) Fragrant and sweet", "B) Harmful / Toxic", "C) Cold and dense", "D) Invisible"],
            correct: 1,
            explain: "The fact that the team had to wear 'protective respirators' against the fumes indicates that the vapors were toxic or harmful. Option B is correct."
        },
        // 19. Tone/Attitude
        {
            id: "mr_read_tone_01",
            concept: "marsh-read-tone",
            type: "Middle-Level SSAT Reading (Tone/Attitude)",
            textBefore: "Passage: To dismiss the swamp lands as useless waste areas suitable only for landfill use is an insult to biological science. These ecosystems support complex food webs that we are only beginning to comprehend, and our failure to protect them is an act of environmental negligence.<br><br>Question: The author's tone across this text snippet can best be described as:",
            hasFraction: false,
            options: ["A) Indifferent", "B) Passionate and critical", "C) Comical", "D) Uncertain"],
            correct: 1,
            explain: "The author uses highly charged, absolute terms like 'insult to science' and 'environmental negligence' to firmly criticize a viewpoint, making their stance passionate and critical. Option B is correct."
        },
        // 20. Author's Purpose
        {
            id: "mr_read_purp_01",
            concept: "marsh-read-purpose",
            type: "Middle-Level SSAT Reading (Author's Purpose)",
            textBefore: "Passage: Freshwater marshes function as excellent shock basins during heavy weather. For instance, during the storm of 2011, the vast pooling expanses of the southern wetlands absorbed millions of gallons of runoff, keeping local residential areas completely dry downstream.<br><br>Question: Why does the author mention the 'storm of 2011' in the text?",
            hasFraction: false,
            options: ["A) To establish an exact timeline for real estate changes", "B) To provide a historical concrete example of wetlands absorbing floodwater to protect communities", "C) To argue that storms are becoming more frequent", "D) To describe wind velocity scales"],
            correct: 1,
            explain: "The phrase 'For instance' explicitly frames the storm of 2011 as a case study or concrete example proving that marshes absorb heavy runoff to shield downstream areas. Option B is correct."
        }
    ]
},
    mountains: {
    standard: [
        // === QUANTITATIVE (MATH) ===
        {
            id: "mt_math_num_01",
            concept: "math-num-ratios",
            type: "Middle-Level SSAT Quantitative (Number Sense)",
            textBefore: "On a trail map of the alpine peaks, 2 inches represents an actual hiking distance of 5 miles. If the distance between two summits on the map measures 7 inches, how many actual miles apart are the summits?",
            hasFraction: false,
            options: ["A) 12.5 miles", "B) 14 miles", "C) 17.5 miles", "D) 35 miles"],
            correct: 2,
            explain: "Set up a proportion: 2/5 = 7/x. Cross-multiplying gives 2x = 35, so x = 17.5 miles. Option C is correct."
        },
        {
            id: "mt_math_alg_01",
            concept: "math-alg-linear",
            type: "Middle-Level SSAT Quantitative (Algebra)",
            textBefore: "An alpine guide uses the formula 4h + 15 = 55 to calculate the total cost in dollars for a gear rental lasting h hours. How many hours did the gear rental last?",
            hasFraction: false,
            options: ["A) 8 hours", "B) 10 hours", "C) 12 hours", "D) 15 hours"],
            correct: 1,
            explain: "Isolate the variable: 4h = 55 - 15 -> 4h = 40 -> h = 10 hours. Option B is correct."
        },
        {
            id: "mt_math_geo_01",
            concept: "math-geo-angles",
            type: "Middle-Level SSAT Quantitative (Geometry)",
            textBefore: "A triangle formed by three jagged rock peaks has two interior angles that measure 55 degrees and 65 degrees. What is the measure of the third interior angle?",
            hasFraction: false,
            options: ["A) 50 degrees", "B) 60 degrees", "C) 70 degrees", "D) 80 degrees"],
            correct: 1,
            explain: "The interior angles of any triangle sum to 180 degrees. 180 - (55 + 65) = 180 - 120 = 60 degrees. Option B is correct."
        },
        {
            id: "mt_math_stat_01",
            concept: "math-stat-averages",
            type: "Middle-Level SSAT Quantitative (Data Analysis)",
            textBefore: "The morning temperatures recorded at five mountain weather stations were -3°F, 2°F, 5°F, -1°F, and 7°F. What was the mean temperature across these five stations?",
            hasFraction: false,
            options: ["A) 1°F", "B) 2°F", "C) 3°F", "D) 4°F"],
            correct: 1,
            explain: "To find the mean, sum the values and divide by 5: (-3 + 2 + 5 + (-1) + 7) / 5 = 10 / 5 = 2°F. Option B is correct."
        },
        {
            id: "mt_math_prob_01",
            concept: "math-prob-simple",
            type: "Middle-Level SSAT Quantitative (Probability)",
            textBefore: "A rescue pack contains 4 green glow sticks, 6 red glow sticks, and 2 blue glow sticks. If a ranger grabs one stick at random in the dark, what is the probability that it will be blue?",
            hasFraction: true,
            fracData: {"top": "1", "bottom": "6"},
            textAfter: "",
            options: ["A) 1/12", "B) 1/6", "C) 1/4", "D) 1/2"],
            correct: 1,
            explain: "Total items = 4 + 6 + 2 = 12. The number of blue sticks is 2. The probability is 2/12, which simplifies cleanly to 1/6. Option B is correct."
        },
        {
            id: "mt_math_word_01",
            concept: "math-word-rates",
            type: "Middle-Level SSAT Quantitative (Word Problems)",
            textBefore: "A rescue helicopter flies at a steady rate of 120 miles per hour. How many miles can the helicopter travel in exactly 45 minutes?",
            hasFraction: false,
            options: ["A) 75 miles", "B) 80 miles", "C) 90 miles", "D) 100 miles"],
            correct: 2,
            explain: "45 minutes is equal to 45/60 or 3/4 of an hour. Distance = Rate * Time = 120 * (3/4) = 90 miles. Option C is correct."
        },
        {
            id: "mt_math_seq_01",
            concept: "math-seq-patterns",
            type: "Middle-Level SSAT Quantitative (Sequences)",
            textBefore: "Identify the next logical integer value in the following elevation logging sequence: 3, 7, 15, 31, ___",
            hasFraction: false,
            options: ["A) 45", "B) 53", "C) 63", "D) 64"],
            correct: 2,
            explain: "The pattern is multiply by 2 and add 1: (3*2)+1=7, (7*2)+1=15, (15*2)+1=31. The next term is (31*2)+1 = 62 + 1 = 63. Option C is correct."
        },

        // === VERBAL ===
        {
            id: "mt_verb_syn_01",
            concept: "verb-syn-vocab",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word that is closest in meaning to: ELEVATE",
            hasFraction: false,
            options: ["A) Lower", "B) Raise", "C) Flatten", "D) Expand"],
            correct: 1,
            explain: "To elevate means to lift up, raise to a higher position, or raise. Option B is correct."
        },
        {
            id: "mt_verb_syn_02",
            concept: "verb-syn-adjectives",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word that is closest in meaning to: PERILOUS",
            hasFraction: false,
            options: ["A) Safe", "B) Beautiful", "C) Dangerous", "D) Exhilarating"],
            correct: 2,
            explain: "Perilous means full of danger or risk, corresponding directly to 'Dangerous'. Option C is correct."
        },
        {
            id: "mt_verb_ana_01",
            concept: "verb-ana-partwhole",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "PEAK : MOUNTAIN :: _________ : _________",
            hasFraction: false,
            options: ["A) Wave : Ocean", "B) Page : Book", "C) River : Valley", "D) Tree : Forest"],
            correct: 1,
            explain: "A peak is the single highest part of a mountain. A page is an individual part of a book. This represents a part-to-whole configuration. Option B is correct."
        },
        {
            id: "mt_verb_ana_02",
            concept: "verb-ana-toolaction",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "COMPASS : NAVIGATE :: _________ : _________",
            hasFraction: false,
            options: ["A) Map : Lost", "B) Telescope : Magnify", "C) Pack : Heavy", "D) Boot : Walk"],
            correct: 1,
            explain: "A compass is a tool designed specifically to navigate. A telescope is a tool designed specifically to magnify. Option B is correct."
        },
        {
            id: "mt_verb_ana_03",
            concept: "verb-ana-degree",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "CHILLY : FREEZING :: _________ : _________",
            hasFraction: false,
            options: ["A) Warm : Scorching", "B) Cool : Cold", "C) Wet : Dry", "D) High : Low"],
            correct: 0,
            explain: "Freezing is an extreme degree of chilly. Scorching is an extreme degree of warm. Option A is correct."
        },
        {
            id: "mt_verb_syn_03",
            concept: "verb-syn-verbs",
            type: "Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: ABANDON",
            hasFraction: false,
            options: ["A) Relinquish", "B) Maintain", "C) Pursue", "D) Protect"],
            correct: 0,
            explain: "To abandon means to leave behind or give up, which is to relinquish. Option A is correct."
        },
        {
            id: "mt_verb_ana_04",
            concept: "verb-ana-antonyms",
            type: "Middle-Level SSAT Verbal (Analogies)",
            textBefore: "BARREN : FERTILE :: _________ : _________",
            hasFraction: false,
            options: ["A) Empty : Vacant", "B) Arid : Lush", "C) High : Steep", "D) Cold : Snowy"],
            correct: 1,
            explain: "Barren and fertile are exact antonyms. Arid (dry/empty of life) and lush (green) are exact antonyms. Option B is correct."
        },

        // === READING COMPREHENSION PASSAGES ===
        {
            id: "mt_read_main_01",
            concept: "read-main-idea",
            type: "Middle-Level SSAT Reading (Main Idea)",
            textBefore: "Passage: The alpine tundra ecosystem exists at extreme elevations where trees cannot grow due to subzero temperatures and high winds. Despite these hostile conditions, dwarf shrubs, mosses, and unique perennial wildflowers have adapted to thrive by growing close to the ground, trapping pockets of warmth from the soil. This fragile ecosystem is highly vulnerable to human foot traffic.<br><br>Question: Which sentence best states the main idea of the passage?",
            hasFraction: false,
            options: ["A) Trees are unable to grow at high altitudes.", "B) Alpine flora has evolved unique ways to survive harsh tundra environments.", "C) Human foot traffic is the leading cause of soil erosion.", "D) Perennial wildflowers are the oldest plants on mountain summits."],
            correct: 1,
            explain: "The passage details the survival mechanism of alpine flora in hostile tundra environments, matching Option B perfectly."
        },
        {
            id: "mt_read_det_01",
            concept: "read-support-detail",
            type: "Middle-Level SSAT Reading (Supporting Detail)",
            textBefore: "Passage: Mount Rainier, located in Washington State, is home to 25 named glaciers containing over 30 billion cubic feet of ice. These active glaciers act as a critical water resource for the region during dry summer months, feeding local rivers and supporting agricultural networks downstream.<br><br>Question: According to the passage, how many named glaciers are found on Mount Rainier?",
            hasFraction: false,
            options: ["A) 12 named glaciers", "B) 20 named glaciers", "C) 25 named glaciers", "D) 30 named glaciers"],
            correct: 2,
            explain: "The text directly states that Mount Rainier is home to '25 named glaciers'. Option C is correct."
        },
        {
            id: "mt_read_inf_01",
            concept: "read-inference",
            type: "Middle-Level SSAT Reading (Inference)",
            textBefore: "Passage: When an experienced climber sets out to summit a peak above 14,000 feet, they purposefully slow their pace to half their normal walking speed. Even athletes who can run miles easily on coastal paths find themselves breathing heavily after climbing just a few vertical yards.<br><br>Question: Based on the passage, it can be logically inferred that climbing high-altitude peaks:",
            hasFraction: false,
            options: ["A) Requires advanced rock-climbing gear loops", "B) Is more dangerous during early morning hours", "C) Is physically exhausting due to thinner air or lower oxygen levels", "D) Is easier for runners than for backpackers"],
            correct: 2,
            explain: "The passage describes the immediate physical slowdown and heavy breathing at high altitude, implying that high elevation environments place extra physical stress on oxygen absorption. Option C is correct."
        },
        {
            id: "mt_read_ctx_01",
            concept: "read-vocab-context",
            type: "Middle-Level SSAT Reading (Vocabulary-in-Context)",
            textBefore: "Passage: The sheer rock wall of the precipice loomed above the expedition party, casting a long shadow that blocked the morning sun. The team spent hours scrutinizing the surface to locate a single fracture stable enough to secure their spikes.<br><br>Question: As used in the passage, the word 'precipice' most nearly means:",
            hasFraction: false,
            options: ["A) A dense pine forest", "B) A steep cliff face", "C) A freezing mountain lake", "D) A violent snowstorm"],
            correct: 1,
            explain: "The passage describes a 'sheer rock wall' looming above, which contextually defines a precipice as a steep cliff face. Option B is correct."
        },
        {
            id: "mt_read_tone_01",
            concept: "read-tone-attitude",
            type: "Middle-Level SSAT Reading (Tone/Attitude)",
            textBefore: "Passage: It is a profound tragedy that corporations continue to lobby for oil drilling rights across the pristine, untouched expanses of the Brooks Mountain Range. To destroy a sanctuary that has remained undisturbed for thousands of years for short-term monetary gain is an act of short-sighted corporate greed.<br><br>Question: The author's attitude toward corporate drilling in the Brooks Range can best be described as:",
            hasFraction: false,
            options: ["A) Indifferent", "B) Analytical", "C) Indignant / Critical", "D) Optimistic"],
            correct: 2,
            explain: "The use of strong words like 'profound tragedy', 'destroy', and 'corporate greed' clearly conveys an indignant and highly critical tone. Option C is correct."
        },
        {
            id: "mt_read_purp_01",
            concept: "read-author-purpose",
            type: "Middle-Level SSAT Reading (Author's Purpose)",
            textBefore: "Passage: For many centuries, mountain ranges functioned as natural barrier walls, preventing ancient civilizations from trading goods and interacting. The formidable wall of the Swiss Alps, for instance, isolated early northern tribes from Mediterranean cultures until engineered tunnels were carved through the stone layers.<br><br>Question: Why does the author mention the 'Swiss Alps' in the passage?",
            hasFraction: false,
            options: ["A) To explain how tunnels are constructed", "B) To prove that Mediterranean cultures were superior", "C) To provide a specific historical example of mountain ranges acting as geographical barriers", "D) To encourage modern tourism in Switzerland"],
            correct: 2,
            explain: "The author introduces the Swiss Alps with the phrase 'for instance' to directly support the general point that mountain ranges functioned as natural barrier walls isolating populations. Option C is correct."
        }
    ]
},
    volcano: {
    standard: [
        // === QUANTITATIVE (MATH) ===
        // 1. Number Sense & Operations: Exponents & Ratios
        {
            id: "vl_math_num_01",
            concept: "volcano-math-exponents",
            type: "Upper Middle-Level SSAT Quantitative (Number Sense)",
            textBefore: "A thermal vent doubles its core magma particle output every hour. If it releases 2^3 particles in the first hour, how many particles does it release by the 6th hour?",
            hasFraction: false,
            options: ["A) 64 particles", "B) 128 particles", "C) 256 particles", "D) 512 particles"],
            correct: 2,
            explain: "Doubling every hour means multiplying by 2 for each subsequent step. By the 6th hour, it has doubled 5 times: 2^3 * 2^5 = 2^8 = 256. Option C is correct."
        },
        // 2. Algebra: Simplifying Polynomial Expressions
        {
            id: "vl_math_alg_01",
            concept: "volcano-math-algebra-simplify",
            type: "Upper Middle-Level SSAT Quantitative (Algebra)",
            textBefore: "Simplify the following expression representing thermal gas expansion parameters: 3(2x + 4) - 2(x - 3)",
            hasFraction: false,
            options: ["A) 4x + 6", "B) 4x + 18", "C) 5x + 6", "D) 4x + 9"],
            correct: 1,
            explain: "Distribute across the terms: (6x + 12) - (2x - 6) = 6x - 2x + 12 + 6 = 4x + 18. Option B is correct."
        },
        // 3. Geometry: Volume of Cylindrical Chambers
        {
            id: "vl_math_geo_01",
            concept: "volcano-math-volume",
            type: "Upper Middle-Level SSAT Quantitative (Geometry)",
            textBefore: "A cylindrical lava tube chamber has a base radius of 3 meters and a height of 10 meters. Using 3.14 for pi, calculate the total cubic volume capacity of the tube.",
            hasFraction: false,
            options: ["A) 94.2 cubic meters", "B) 141.3 cubic meters", "C) 282.6 cubic meters", "D) 565.2 cubic meters"],
            correct: 2,
            explain: "Volume of a cylinder = pi * r^2 * h = 3.14 * (3^2) * 10 = 3.14 * 9 * 10 = 282.6 cubic meters. Option C is correct."
        },
        // 4. Data Analysis & Statistics: Interpreting Data Ranges
        {
            id: "vl_math_stat_01",
            concept: "volcano-math-stat-range",
            type: "Upper Middle-Level SSAT Quantitative (Data Analysis)",
            textBefore: "Seismic stations log five tremor magnitudes: 4.2, 5.8, 3.1, 6.5, and 4.9. What is the mathematical range of these recorded magnitudes?",
            hasFraction: false,
            options: ["A) 2.7", "B) 3.1", "C) 3.4", "D) 4.2"],
            correct: 2,
            explain: "Range = Maximum value - Minimum value = 6.5 - 3.1 = 3.4. Option C is correct."
        },
        // 5. Probability: Simple Fractions
        {
            id: "vl_math_prob_01",
            concept: "volcano-math-probability",
            type: "Upper Middle-Level SSAT Quantitative (Probability)",
            textBefore: "A crate of protective volcanic gear contains 8 pairs of heavy boots, 4 face shields, and 12 thermal cloaks. If a researcher grabs one item blindly, what is the probability it is a face shield?",
            hasFraction: true,
            fracData: {"top": "1", "bottom": "6"},
            textAfter: "",
            options: ["A) 1/4", "B) 1/6", "C) 1/8", "D) 1/12"],
            correct: 1,
            explain: "Total items = 8 + 4 + 12 = 24. Favorable outcomes (face shields) = 4. Probability = 4/24, which reduces cleanly to 1/6. Option B is correct."
        },
        // 6. Word Problems: Advanced Multi-Step Rates
        {
            id: "vl_math_word_01",
            concept: "volcano-math-word-rates",
            type: "Upper Middle-Level SSAT Quantitative (Word Problems)",
            textBefore: "An extraction drill cuts through volcanic basalt rock layers at a rate of 15 inches every 20 minutes. How many feet can the drill cut through in exactly 2 hours?",
            hasFraction: false,
            options: ["A) 5 feet", "B) 7.5 feet", "C) 10 feet", "D) 12.5 feet"],
            correct: 1,
            explain: "2 hours = 120 minutes. Number of 20-minute segments = 120 / 20 = 6 blocks. Total inches = 6 * 15 = 90 inches. Convert to feet: 90 / 12 = 7.5 feet. Option B is correct."
        },
        // 7. Sequences & Logic: Continuous Variable Pattern Puzzles
        {
            id: "vl_math_seq_01",
            concept: "volcano-math-sequences",
            type: "Upper Middle-Level SSAT Quantitative (Sequences)",
            textBefore: "Determine the next logical entry item in this cooling index sequence: 100, 96, 88, 72, ___",
            hasFraction: false,
            options: ["A) 40", "B) 48", "C) 56", "D) 60"],
            correct: 0,
            explain: "The pattern subtracts doubling multiples of 4: 100 - 4 = 96; 96 - 8 = 88; 88 - 16 = 72. The next operation is 72 - 32 = 40. Option A is correct."
        },

        // === VERBAL ===
        // 8. Synonyms: Advanced Verbs
        {
            id: "vl_verb_syn_01",
            concept: "volcano-verb-synonyms",
            type: "Upper Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: OBLITERATE",
            hasFraction: false,
            options: ["A) Construct", "B) Annihilate / Destroy", "C) Conceal", "D) Modify"],
            correct: 1,
            explain: "To obliterate means to utterly destroy or wipe out completely, matching 'Annihilate'. Option B is correct."
        },
        // 9. Synonyms: Descriptive Modifiers
        {
            id: "vl_verb_syn_02",
            concept: "volcano-verb-modifiers",
            type: "Upper Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: DORMANT",
            hasFraction: false,
            options: ["A) Active", "B) Inactive / Asleep", "C) Threatening", "D) Ancient"],
            correct: 1,
            explain: "Dormant means having normal physical functions suspended or slowed down for a period; temporarily inactive. Option B is correct."
        },
        // 10. Analogies: Object to Internal Matter
        {
            id: "vl_verb_ana_01",
            concept: "volcano-verb-ana-matter",
            type: "Upper Middle-Level SSAT Verbal (Analogies)",
            textBefore: "MAGMA : VOLCANO :: _________ : _________",
            hasFraction: false,
            options: ["A) Water : River", "B) Lava : Plain", "C) Sap : Tree", "D) Ash : Fire"],
            correct: 2,
            explain: "Magma is the molten biological liquid stored inside and pushed up through a volcano. Sap is the vital nutrient liquid circulating inside a tree. Option C is correct."
        },
        // 11. Analogies: Degree Intensity Scale
        {
            id: "vl_verb_ana_02",
            concept: "volcano-verb-ana-degree",
            type: "Upper Middle-Level SSAT Verbal (Analogies)",
            textBefore: "WARM : SCORCHING :: _________ : _________",
            hasFraction: false,
            options: ["A) Chilly : Freezing", "B) Cool : Cold", "C) Damp : Humid", "D) High : Steep"],
            correct: 0,
            explain: "Scorching represents an extreme, overpowering level of warm temperature. Freezing represents an extreme, overpowering level of chilly temperature. Option A is correct."
        },
        // 12. Analogies: Object to Instrument Core
        {
            id: "vl_verb_ana_03",
            concept: "volcano-verb-ana-instrument",
            type: "Upper Middle-Level SSAT Verbal (Analogies)",
            textBefore: "TREMOR : SEISMOGRAPH :: _________ : _________",
            hasFraction: false,
            options: ["A) Heat : Thermometer", "B) Wind : Compass", "C) Rain : Cloud", "D) Altitude : Map"],
            correct: 0,
            explain: "A tremor is a physical wave force evaluated and measured by a seismograph. Heat is a energy force measured by a thermometer. Option A is correct."
        },
        // 13. Synonyms: High-Level Concepts
        {
            id: "vl_verb_syn_03",
            concept: "volcano-verb-syn-complex",
            type: "Upper Middle-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: VOLATILE",
            hasFraction: false,
            options: ["A) Stable", "B) Unpredictable / Explosive", "C) Heavy", "D) Transparent"],
            correct: 1,
            explain: "Volatile means liable to change rapidly and unpredictably, especially for the worse; explosive. Option B is correct."
        },
        // 14. Analogies: Antonymic Shifts
        {
            id: "vl_verb_ana_04",
            concept: "volcano-verb-ana-antonym",
            type: "Upper Middle-Level SSAT Verbal (Analogies)",
            textBefore: "IGNITE : EXTINGUISH :: _________ : _________",
            hasFraction: false,
            options: ["A) Burn : Smoke", "B) Commmence : Terminate", "C) Heat : Melt", "D) Build : Construct"],
            correct: 1,
            explain: "To ignite (start a fire) and to extinguish (put out a fire) are direct actions endpoints opposites. To commence and to terminate are structural action opposites. Option B is correct."
        },

        // === READING COMPREHENSION PASSAGES ===
        // 15. Main Idea
        {
            id: "vl_read_main_01",
            concept: "volcano-read-main",
            type: "Upper Middle-Level SSAT Reading (Main Idea)",
            textBefore: "Passage: The unexpected tracking stability of sub-crustal mantle plumes allows vulcanologists to map geological histories with great precision. By studying the progression of shield volcano track lines across oceanic plates, scientists can deduce the exact rate of horizontal tectonic migration over tens of millions of years.<br><br>Question: Which statement encapsulates the primary thesis argument developed across the passage?",
            hasFraction: false,
            options: ["A) Oceans plates shift faster than land masses.", "B) Inactive mantle plumes provide historical data about tectonic plate motion.", "C) Shield volcanoes contain dangerous basalt arrays.", "D) Vulcanologists use tracking models to predict sudden eruptions."],
            correct: 1,
            explain: "The passage outlines how analyzing the footprints left by mantle plumes maps the historical rate of tectonic migrations. Option B is correct."
        },
        // 16. Supporting Detail
        {
            id: "vl_read_det_01",
            concept: "volcano-read-detail",
            type: "Upper Middle-Level SSAT Reading (Supporting Detail)",
            textBefore: "Passage: Supervolcanic calderas are classified by explosive eruptions that expel more than 240 cubic miles of volcanic material in a single event. These massive geologic collapses differ from standard volcanic cones, leaving vast depressions in the Earth's crust that map over forty miles wide.<br><br>Question: According to the passage, what minimum volume of material characterizes a supervolcanic eruption?",
            hasFraction: false,
            options: ["A) 40 cubic miles", "B) 100 cubic miles", "C) 240 cubic miles", "D) 400 cubic miles"],
            correct: 2,
            explain: "The text states explicitly that supervolcanic calderas are classified by events that expel 'more than 240 cubic miles' of material. Option C is correct."
        },
        // 17. Inference
        {
            id: "vl_read_inf_01",
            concept: "volcano-read-inference",
            type: "Upper Middle-Level SSAT Reading (Inference)",
            textBefore: "Passage: In the weeks preceding a major magmatic eruption, local ground elevations around the volcanic summit can bulge outward by several feet. Concurrently, regional groundwater wells register sharp increases in sulfur dioxide acidity, causing long-standing biological habitats downstream to alter behavior arrays.<br><br>Question: It can be logically inferred from the entry text that prior to an eruption:",
            hasFraction: false,
            options: ["A) Lava has already reached the outer slopes downstream", "B) Rising underground magma pressures displace the surrounding rock and vent gasses into local aquifers", "C) Groundwater levels dry up completely due to internal evaporation", "D) Tectonic plates stop moving temporarily"],
            correct: 1,
            explain: "The swelling of the mountain face and the leaking of sulfur gas into the water tables imply that expanding underground magma pressures are actively displacing rock structures and venting gasses before breaking the surface. Option B is correct."
        },
        // 18. Vocabulary-in-Context
        {
            id: "vl_read_ctx_01",
            concept: "volcano-read-vocab",
            type: "Upper Middle-Level SSAT Reading (Vocabulary-in-Context)",
            textBefore: "Passage: The geothermal survey party noted that the volcanic slope was highly precarious; loose pumice scree sheets slid away under the slightest foot weight, threatening to drop researchers into open vent fractures.<br><br>Question: As used in the passage context, the word 'precarious' most nearly means:",
            hasFraction: false,
            options: ["A) Firm and stable", "B) Unstable / Dangerously insecure", "C) Frozen solid", "D) Hidden from sight"],
            correct: 1,
            explain: "The passage notes that the scree sheets 'slid away under the slightest foot weight', which contextually maps precarious to mean dangerously insecure or unstable. Option B is correct."
        },
        // 19. Tone/Attitude
        {
            id: "vl_read_tone_01",
            concept: "volcano-read-tone",
            type: "Upper Middle-Level SSAT Reading (Tone/Attitude)",
            textBefore: "Passage: To watch a fountain of liquid fire shoot five hundred feet into the night sky, casting an eerie crimson glow across ancient obsidian fields, is an experience that humbles the human ego. The raw, primeval power of our planet operates on a scale that makes civilization look like a transient speck.<br><br>Question: The author's emotional stance across this description can best be described as:",
            hasFraction: false,
            options: ["A) Cynical and dismissive", "B) Awe-struck and reverent", "C) Technical and detached", "D) Apprehensive"],
            correct: 2,
            explain: "The use of terms like 'liquid fire', 'humbles the human ego', and 'majestic primeval power' clearly reflects an awe-struck, reverent emotional tone. Option B is correct."
        },
        // 20. Author's Purpose
        {
            id: "vl_read_purp_01",
            concept: "volcano-read-purpose",
            type: "Upper Middle-Level SSAT Reading (Author's Purpose)",
            textBefore: "Passage: Pyroclastic flows represent the most lethal vector of volcanic activity. For instance, during the historic eruption of Mount Vesuvius, it was not the slow lava flows but rather the superheated gas and ash currents rushing down the slopes that instantly entombed the population of Pompeii.<br><br>Question: Why does the author mention 'Mount Vesuvius' and 'Pompeii' in the passage?",
            hasFraction: false,
            options: ["A) To explain how ancient Roman cities were mapped", "B) To provide a historic concrete example illustrating the lethal speed and destructive nature of pyroclastic flows", "C) To argue that lava flows are safe to observe", "D) To document the history of architecture in Italy"],
            correct: 1,
            explain: "The phrase 'For instance' frames the Pompeii details as a clear, historical example proving that pyroclastic gas flows are the most dangerous lethal vectors of an eruption. Option B is correct."
        }
    ],
    herds: [
        {
            id: "vl_herd_1",
            passageTitle: "The Volcanic Cascade Ecosystem",
            passageText: "Volcanic ash soils, known as andisols, are exceptionally fertile because they are packed with unweathered volcanic glass rich in iron and magnesium. These mineral arrays weather down rapidly under rain, anchoring rare fern variants that can process heavy trace metals safely.",
            questions: [
                { type: "Upper SSAT Reading Herd", textBefore: "Why are volcanic andisols classified as exceptionally fertile fields?", hasFraction: false, options: ["A) They stay dry in storms", "B) They are packed with rich unweathered mineral glass", "C) They contain old clay loops", "D) Earthworms cultivate them faster"], correct: 1, explain: "The passage notes directly that they are fertile because they are 'packed with unweathered volcanic glass rich in iron and magnesium'." },
                { type: "Upper SSAT Reading Herd", textBefore: "What weather element breaks down the mineral glass arrays over time?", hasFraction: false, options: ["A) Severe high winds", "B) Regular rain patterns", "C) Solar ray waves", "D) Winter frosts"], correct: 1, explain: "The text states explicitly that these mineral arrays 'weather down rapidly under rain'." },
                { type: "Upper SSAT Reading Herd", textBefore: "What unique processing capability do the native ferns display?", hasFraction: false, options: ["A) They survive without groundwater", "B) They process heavy trace metals safely", "C) They grow through solid basalt layers", "D) They repel insect swarms"], correct: 1, explain: "The final line notes the rare fern variants 'can process heavy trace metals safely'." }
            ]
        }
    ]
},
    deepsea: {
    standard: [
        // === QUANTITATIVE (MATH) ===
        // 1. Number Sense & Operations: Complex Fractions
        {
            id: "oc_math_num_01",
            concept: "ocean-math-complex-frac",
            type: "Upper-Level SSAT Quantitative (Number Sense)",
            textBefore: "Simplify the following complex fractional pressure coefficient expression: ",
            hasFraction: true,
            fracData: {"top": "3/4", "bottom": "5/8"},
            textAfter: "",
            options: ["A) 15/32", "B) 5/6", "C) 6/5", "D) 1/2"],
            correct: 2,
            explain: "To divide fractions, multiply the numerator by the reciprocal of the denominator: (3/4) * (8/5) = 24/20. Dividing both terms by 4 simplifies the expression to 6/5. Option C is correct."
        },
        // 2. Algebra: Factoring & Quadratic Variables
        {
            id: "oc_math_alg_01",
            concept: "ocean-math-algebra-factoring",
            type: "Upper-Level SSAT Quantitative (Algebra)",
            textBefore: "Factor the expression representing abyssal depth current velocity grids: x^2 - 9x + 20",
            hasFraction: false,
            options: ["A) (x - 4)(x - 5)", "B) (x - 2)(x - 10)", "C) (x + 4)(x + 5)", "D) (x - 3)(x - 6)"],
            correct: 0,
            explain: "We need two numbers that multiply to +20 and add to -9. Those numbers are -4 and -5. Thus, the expression factors to (x - 4)(x - 5). Option A is correct."
        },
        // 3. Geometry: Coordinate Midpoints & Slope
        {
            id: "oc_math_geo_01",
            concept: "ocean-math-coordinate-mid",
            type: "Upper-Level SSAT Quantitative (Geometry)",
            textBefore: "An oceanographic sonar line connects an abyssal rift valley at coordinate path endpoints (2, -6) and (8, 4). Find the absolute midpoint coordinates of this sonar track.",
            hasFraction: false,
            options: ["A) (5, -1)", "B) (3, -2)", "C) (5, 1)", "D) (6, -1)"],
            correct: 0,
            explain: "Midpoint formula = ((x1 + x2)/2, (y1 + y2)/2) = ((2 + 8)/2, (-6 + 4)/2) = (10/2, -2/2) = (5, -1). Option A is correct."
        },
        // 4. Data Analysis & Statistics: Interpreting Complex Ranges
        {
            id: "oc_math_stat_01",
            concept: "ocean-math-statistics",
            type: "Upper-Level SSAT Quantitative (Data Analysis)",
            textBefore: "Deep-sea temperature readings in degrees Celsius across five thermal trench zones are: -1.2, -0.5, 1.8, -2.4, and 0.3. Calculate the range of this abyssal dataset.",
            hasFraction: false,
            options: ["A) 2.3°C", "B) 3.0°C", "C) 4.2°C", "D) 4.6°C"],
            correct: 2,
            explain: "Range = Maximum value - Minimum value = 1.8 - (-2.4) = 1.8 + 2.4 = 4.2°C. Option C is correct."
        },
        // 5. Probability: Independent Combined Probabilities
        {
            id: "oc_math_prob_01",
            concept: "ocean-math-probability",
            type: "Upper-Level SSAT Quantitative (Probability)",
            textBefore: "A deep submergence vehicle carries two standalone tracking backup computers. Computer A has a failure probability of ",
            hasFraction: true,
            fracData: {"top": "1", "bottom": "10"},
            textAfter: ", and Computer B has a failure probability of 1/20. What is the probability that BOTH systems fail simultaneously during a deep descent?",
            options: ["A) 1/30", "B) 1/200", "C) 3/20", "D) 1/15"],
            correct: 1,
            explain: "For independent compound events, multiply the individual probabilities: (1/10) * (1/20) = 1/200. Option B is correct."
        },
        // 6. Word Problems: Rate-Time-Distance with Current Vectors
        {
            id: "oc_math_word_01",
            concept: "ocean-math-word-problems",
            type: "Upper-Level SSAT Quantitative (Word Problems)",
            textBefore: "A submarine travels at an absolute hull speed of 24 miles per hour. If it navigates directly against a steady abyssal headcurrent flowing at 4 miles per hour, how many miles can it travel in exactly 45 minutes?",
            hasFraction: false,
            options: ["A) 12 miles", "B) 15 miles", "C) 18 miles", "D) 20 miles"],
            correct: 1,
            explain: "Effective speed traveling against a current = Hull speed - Current speed = 24 - 4 = 20 mph. 45 minutes is equal to 3/4 of an hour. Distance = Rate * Time = 20 * (3/4) = 15 miles. Option B is correct."
        },
        // 7. Sequences & Logic: Complex Matrix Sequences
        {
            id: "oc_math_seq_01",
            concept: "ocean-math-sequences",
            type: "Upper-Level SSAT Quantitative (Sequences)",
            textBefore: "Identify the next logical integer sequence value in the following deep sound soundings index: 1, 3, 7, 13, 21, ___",
            hasFraction: false,
            options: ["A) 29", "B) 31", "C) 33", "D) 35"],
            correct: 1,
            explain: "The series increments expand by sequential consecutive multiples of 2: +2, +4, +6, +8. The next operation is 21 + 10 = 31. Option B is correct."
        },

        // === VERBAL ===
        // 8. Synonyms: High-Tier Abstract Verbs
        {
            id: "oc_verb_syn_01",
            concept: "ocean-verb-synonyms",
            type: "Upper-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: CAPTIVATE",
            hasFraction: false,
            options: ["A) Liberate", "B) Enthrall / Fascinate", "C) Repel", "D) Confound"],
            correct: 1,
            explain: "To captivate means to attract and hold the intense interest or attention of someone; to enthrall or fascinate. Option B is correct."
        },
        // 9. Synonyms: Latent Adjectives
        {
            id: "oc_verb_syn_02",
            concept: "ocean-verb-modifiers",
            type: "Upper-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: PLACID",
            hasFraction: false,
            options: ["A) Chaotic", "B) Serene / Tranquil", "C) Turbulent", "D) Vibrant"],
            correct: 1,
            explain: "Placid means calm, peaceful, and undisturbed, which translates directly to 'Serene'. Option B is correct."
        },
        // 10. Analogies: Specialized Instrument Target
        {
            id: "oc_verb_ana_01",
            concept: "ocean-verb-ana-target",
            type: "Upper-Level SSAT Verbal (Analogies)",
            textBefore: "BAROMETER : PRESSURE :: _________ : _________",
            hasFraction: false,
            options: ["A) Chronometer : Time", "B) Compass : Lost", "C) Thermometer : Weather", "D) Scale : Ounces"],
            correct: 0,
            explain: "A barometer is a scientific instrument designed to measure atmospheric pressure. A chronometer is an instrument designed to measure time with extreme precision. Option A is correct."
        },
        // 11. Analogies: Part-to-Whole Abstract Layers
        {
            id: "oc_verb_ana_02",
            concept: "ocean-verb-ana-partwhole",
            type: "Upper-Level SSAT Verbal (Analogies)",
            textBefore: "TRIBUTARY : RIVER :: _________ : _________",
            hasFraction: false,
            options: ["A) Island : Archipelago", "B) Ocean : Wave", "C) Peak : Summit", "D) Current : Tide"],
            correct: 0,
            explain: "A tributary is a small flowing water body part that feeds into a larger whole river. An island is a single physical landmass part that comprises a larger whole archipelago chain. Option A is correct."
        },
        // 12. Analogies: Action to Ultimate Result
        {
            id: "oc_verb_ana_03",
            concept: "ocean-verb-ana-result",
            type: "Upper-Level SSAT Verbal (Analogies)",
            textBefore: "SATURATE : WET :: _________ : _________",
            hasFraction: false,
            options: ["A) Dehydrate : Arid", "B) Freeze : Cold", "C) Heat : Warm", "D) Clean : Pure"],
            correct: 0,
            explain: "To saturate an item means to make it completely, maximally wet. To dehydrate an item means to render it completely, maximally dry or arid. This represents an action to an extreme state result. Option A is correct."
        },
        // 13. Synonyms: Conceptual Academic Shifts
        {
            id: "oc_verb_syn_03",
            concept: "ocean-verb-syn-complex",
            type: "Upper-Level SSAT Verbal (Synonyms)",
            textBefore: "Select the word closest in meaning to: FLUIDITY",
            hasFraction: false,
            options: ["A) Rigidity", "B) Adaptability / Grace", "C) Solidity", "D) Transparency"],
            correct: 1,
            explain: "Fluidity implies the capacity to flow, shift shapes, and alter paths smoothly, which maps directly onto 'Adaptability'. Option B is correct."
        },
        // 14. Analogies: Antonymic Inversions
        {
            id: "oc_verb_ana_04",
            concept: "ocean-verb-ana-antonym",
            type: "Upper-Level SSAT Verbal (Analogies)",
            textBefore: "EPHEMERAL : PERPETUAL :: _________ : _________",
            hasFraction: false,
            options: ["A) Transient : Fleeting", "B) Mutable : Immutable", "C) Fragile : Delicate", "D) Ancient : Antique"],
            correct: 1,
            explain: "Ephemeral (short-lived) and perpetual (eternal) are exact antonyms. Mutable (changeable) and immutable (unchangeable) are exact antonyms. Option B is correct."
        },

        // === READING COMPREHENSION PASSAGES ===
        // 15. Main Idea
        {
            id: "oc_read_main_01",
            concept: "ocean-read-main",
            type: "Upper-Level SSAT Reading (Main Idea)",
            textBefore: "Passage: The global thermohaline circulation network functions as the primary regulatory conveyor belt for Earth's climate metrics. Driven entirely by density differentials created by temperature and water salinity variations, this deep abyssal current loop transports vital thermal energy from equatorial zones to high latitudes, modulating regional climates.<br><br>Question: Which statement best summarizes the primary thesis argument of the passage?",
            hasFraction: false,
            options: ["A) Global warming is accelerating melting rates.", "B) The thermohaline circulation system plays a critical role in regulating global climate patterns through density-driven currents.", "C) Equatorial oceans contain higher density thresholds than polar zones.", "D) Salinity indices dictate fish migration patterns."],
            correct: 1,
            explain: "The passage frames the thermohaline circulation belt as the primary regulatory system for global climates, outlining its density-driven thermal transport properties. Option B is correct."
        },
        // 16. Supporting Detail
        {
            id: "oc_read_det_01",
            concept: "ocean-read-detail",
            type: "Upper-Level SSAT Reading (Supporting Detail)",
            textBefore: "Passage: Hydrothermal vent fields, discovered along oceanic rift zones in 1977, eject superheated fluids at temperatures exceeding 400 degrees Celsius. These vents emit dense plumes of black metal sulfides, forming towering mineral chimneys that anchor complex deep-sea ecosystems.<br><br>Question: According to the passage, in what year were deep-sea hydrothermal vents first discovered?",
            hasFraction: false,
            options: ["A) 1954", "B) 1969", "C) 1977", "D) 1982"],
            correct: 2,
            explain: "The text states explicitly that hydrothermal vent fields were 'discovered along oceanic rift zones in 1977'. Option C is correct."
        },
        // 17. Inference
        {
            id: "oc_read_inf_01",
            concept: "ocean-read-inference",
            type: "Upper-Level SSAT Reading (Inference)",
            textBefore: "Passage: Sunlight is entirely absorbed within the upper 200 meters of the ocean, a threshold known as the photic layer. Below this boundary, inside the vast aphotic abyss, plants cannot survive, forcing organisms to depend entirely on chemosynthesis or the organic debris drifting down from surface life networks.<br><br>Question: Based on the passage, it can be logically inferred that aphotic ecosystems:",
            hasFraction: false,
            options: ["A) Depend heavily on solar radiation currents for energy production", "B) Are entirely independent of surface ecological networks", "C) Evolved alternative, non-solar energy production strategies due to the total absence of sunlight", "D) Consist exclusively of apex primary producers"],
            correct: 2,
            explain: "Because plants cannot survive without sunlight below 200 meters, organisms must use alternative methods like chemosynthesis, inferring they adapted to produce energy without sunlight. Option C is correct."
        },
        // 18. Vocabulary-in-Context
        {
            id: "oc_read_ctx_01",
            concept: "ocean-read-vocab",
            type: "Upper-Level SSAT Reading (Vocabulary-in-Context)",
            textBefore: "Passage: The abyssal plain represents an incredibly desolate environment; thousands of square miles of flat, silent mud expanses stretch out under freezing pressures, completely devoid of primary sunlight anchors.<br><br>Question: As used in the passage context, the word 'desolate' most nearly means:",
            hasFraction: false,
            options: ["A) Crowded and noisy", "B) Barren, isolated, and empty of life", "C) Warm and shallow", "D) Highly colorful"],
            correct: 1,
            explain: "The passage describes the plain as a 'silent mud expanse' that is 'completely devoid' of light anchors, defining desolate as barren, isolated, or empty of life. Option B is correct."
        },
        // 19. Tone/Attitude
        {
            id: "oc_read_tone_01",
            concept: "ocean-read-tone",
            type: "Upper-Level SSAT Reading (Tone/Attitude)",
            textBefore: "Passage: It is a devastating environmental crime that commercial trawling fleets continue to scrape their heavy metal nets across ancient deep-sea coral fields. To pulverize an ancient habitat that takes thousands of years to grow for a single season's fish harvest demonstrates reckless corporate greed.<br><br>Question: The author's tone toward commercial trawling fleets can best be described as:",
            hasFraction: false,
            options: ["A) Detached and scientific", "B) Indifferent", "C) Indignant and sharply critical", "D) Tentative"],
            correct: 2,
            explain: "Strong phrases like 'devastating environmental crime', 'pulverize', and 'reckless corporate greed' establish an indignant, sharply critical tone. Option C is correct."
        },
        // 20. Author's Purpose
        {
            id: "oc_read_purp_01",
            concept: "ocean-read-purpose",
            type: "Upper-Level SSAT Reading (Author's Purpose)",
            textBefore: "Passage: Deep-sea gigantism remains an intriguing biological adaptation. For instance, the giant abyssal isopods grow up to thirty times larger than their shallow-water land cousins, an evolutionary scaling that allows them to store vital energy assets longer under low food cycles.<br><br>Question: Why does the author mention 'giant abyssal isopods' in the text?",
            hasFraction: false,
            options: ["A) To explain how land insects crawl", "B) To provide a specific biological example illustrating the phenomenon of deep-sea gigantism", "C) To argue that deep water is toxic", "D) To encourage deep-sea commercial fishing projects"],
            correct: 1,
            explain: "The phrase 'For instance' links the giant isopods directly to the opening sentence as a concrete case study illustrating deep-sea gigantism. Option B is correct."
        }
    ],
    herds: [
        {
            id: "oc_herd_1",
            passageTitle: "The Mariana Trench Abyssal Ecosystem",
            passageText: "Organisms residing within the aphotic trenches endure hydrostatic pressures exceeding 1,000 atmospheres. To prevent cell collapse, deep species utilize specialized fluid compounds known as piezolytes, which stabilize internal protein structures against extreme compression vectors.",
            questions: [
                { type: "Upper SSAT Reading Herd", textBefore: "What approximate hydrostatic pressure threshold must species inside the trenches endure?", hasFraction: false, options: ["A) Under 50 atmospheres", "B) Exactly 500 atmospheres", "C) Exceeding 1,000 atmospheres", "D) Zero atmospheric pressure"], correct: 2, explain: "The passage notes directly that they endure pressures 'exceeding 1,000 atmospheres'." },
                { type: "Upper SSAT Reading Herd", textBefore: "What specialized compounds do deep-sea species produce to stabilize cells?", hasFraction: false, options: ["A) Carbon enzymes", "B) Specialized fluid piezolytes", "C) Alkaline salts", "D) Solar lipids"], correct: 1, explain: "The text states explicitly they utilize 'specialized fluid compounds known as piezolytes'." },
                { type: "Upper SSAT Reading Herd", textBefore: "What cellular components do piezolytes protect against extreme compression?", hasFraction: false, options: ["A) Membrane bounds", "B) Internal protein structures", "C) Water exit portals", "D) Skeletal matrices"], correct: 1, explain: "The final line notes piezolytes 'stabilize internal protein structures against extreme compression'." }
            ]
        }
    ]
}
};

// --- THE ADAPTIVE CLONE MATRIX ---
// When a player misses a question, the game searches this pool by "concept" 
// and clones 5 similar questions into their active map session!
const CONCEPT_VARIATION_POOL = {
    "math-basic-addition": [
        { id: "v_add_1", type: "Adaptive Practice: Addition", textBefore: "A farmer has 6 apples and picks 3 more. What is the sum?", hasFraction: false, options: ["A) 8", "B) 9", "C) 10", "D) 11"], correct: 1, explain: "6 + 3 = 9." },
        { id: "v_add_2", type: "Adaptive Practice: Addition", textBefore: "Tom owns 5 stickers. He receives 5 more. What is the total?", hasFraction: false, options: ["A) 9", "B) 10", "C) 11", "D) 12"], correct: 1, explain: "5 + 5 = 10." },
        { id: "v_add_3", type: "Adaptive Practice: Addition", textBefore: "A baker makes 7 cakes, then bakes 2 more. How many total?", hasFraction: false, options: ["A) 8", "B) 9", "C) 10", "D) 11"], correct: 1, explain: "7 + 2 = 9." },
        { id: "v_add_4", type: "Adaptive Practice: Addition", textBefore: "There are 4 birds on a wire. 4 more land. What is the total count?", hasFraction: false, options: ["A) 6", "B) 8", "C) 10", "D) 12"], correct: 1, explain: "4 + 4 = 8." },
        { id: "v_add_5", type: "Adaptive Practice: Addition", textBefore: "A classroom has 8 desks. The school adds 3 more. How many desks total?", hasFraction: false, options: ["A) 10", "B) 11", "C) 12", "D) 13"], correct: 1, explain: "8 + 3 = 11." }
    ],
    "math-fractions-reduction": [
        { id: "v_frac_1", type: "Adaptive Practice: Fractions", textBefore: "Simplify the fraction: ", hasFraction: true, fracData: { top: "2", bottom: "6" }, textAfter: "", options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 2/3"], correct: 1, explain: "2/6 reduces to 1/3." },
        { id: "v_frac_2", type: "Adaptive Practice: Fractions", textBefore: "Simplify the fraction: ", hasFraction: true, fracData: { top: "3", bottom: "9" }, textAfter: "", options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 2/3"], correct: 1, explain: "3/9 reduces to 1/3." },
        { id: "v_frac_3", type: "Adaptive Practice: Fractions", textBefore: "Simplify the fraction: ", hasFraction: true, fracData: { top: "5", bottom: "15" }, textAfter: "", options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 2/3"], correct: 1, explain: "5/15 reduces to 1/3." },
        { id: "v_frac_4", type: "Adaptive Practice: Fractions", textBefore: "Simplify the fraction: ", hasFraction: true, fracData: { top: "6", bottom: "18" }, textAfter: "", options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 2/3"], correct: 1, explain: "6/18 reduces to 1/3." },
        { id: "v_frac_5", type: "Adaptive Practice: Fractions", textBefore: "Simplify the fraction: ", hasFraction: true, fracData: { top: "7", bottom: "21" }, textAfter: "", options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 2/3"], correct: 1, explain: "7/21 reduces to 1/3." }
    ],
    "math-num-ratios": [
        {"id": "v_ratio_1", "type": "Practice: Ratios", "textBefore": "If 3 maps cost $15, what is the cost of 8 identical maps?", "hasFraction": false, "options": ["A) $30", "B) $35", "C) $40", "D) $45"], "correct": 2, "explain": "3/$15 = 1/$5. 8 * $5 = $40. Option C is correct."},
        {"id": "v_ratio_2", "type": "Practice: Ratios", "textBefore": "A trail mix recipe uses 3 cups of nuts for every 2 cups of raisins. If a ranger uses 9 cups of nuts, how many cups of raisins are needed?", "hasFraction": false, "options": ["A) 4 cups", "B) 5 cups", "C) 6 cups", "D) 8 cups"], "correct": 2, "explain": "3/2 = 9/x -> 3x = 18 -> x = 6. Option C is correct."},
        {"id": "v_ratio_3", "type": "Practice: Ratios", "textBefore": "On a physical model mountain, 1 foot represents 4,000 feet of actual altitude. If the model peak stands 3 feet high, what actual height does it represent?", "hasFraction": false, "options": ["A) 8,000 feet", "B) 10,000 feet", "C) 12,000 feet", "D) 14,000 feet"], "correct": 2, "explain": "3 * 4,000 = 12,000 feet. Option C is correct."},
        {"id": "v_ratio_4", "type": "Practice: Ratios", "textBefore": "A group of hikers counts 5 pine trees for every 2 aspen trees. If they count 25 pine trees, how many aspen trees do they find?", "hasFraction": false, "options": ["A) 8", "B) 10", "C) 12", "D) 15"], "correct": 1, "explain": "5/2 = 25/x -> 5x = 50 -> x = 10. Option B is correct."},
        {"id": "v_ratio_5", "type": "Practice: Ratios", "textBefore": "If a climbing cord stretches 4 inches for every 50 pounds of load weight, how many inches will it stretch under a load of 150 pounds?", "hasFraction": false, "options": ["A) 8 inches", "B) 10 inches", "C) 12 inches", "D) 16 inches"], "correct": 2, "explain": "4/50 = x/150 -> 50x = 600 -> x = 12. Option C is correct."}
    ],
    "math-alg-linear": [
        {"id": "v_lin_1", "type": "Practice: Linear Equations", "textBefore": "Solve for x: 3x - 4 = 11", "hasFraction": false, "options": ["A) 3", "B) 4", "C) 5", "D) 6"], "correct": 2, "explain": "3x = 15 -> x = 5. Option C is correct."},
        {"id": "v_lin_2", "type": "Practice: Linear Equations", "textBefore": "Solve for y: 2y + 8 = 20", "hasFraction": false, "options": ["A) 4", "B) 6", "C) 8", "D) 10"], "correct": 1, "explain": "2y = 12 -> y = 6. Option B is correct."},
        {"id": "v_lin_3", "type": "Practice: Linear Equations", "textBefore": "Solve for a: 5a - 3 = 22", "hasFraction": false, "options": ["A) 4", "B) 5", "C) 6", "D) 7"], "correct": 1, "explain": "5a = 25 -> a = 5. Option B is correct."},
        {"id": "v_lin_4", "type": "Practice: Linear Equations", "textBefore": "Solve for h: 6h + 10 = 46", "hasFraction": false, "options": ["A) 5", "B) 6", "C) 7", "D) 8"], "correct": 1, "explain": "6h = 36 -> h = 6. Option B is correct."},
        {"id": "v_lin_5", "type": "Practice: Linear Equations", "textBefore": "Solve for m: 4m - 7 = 25", "hasFraction": false, "options": ["A) 6", "B) 7", "C) 8", "D) 9"], "correct": 2, "explain": "4m = 32 -> m = 8. Option C is correct."}
    ],
    "math-geo-angles": [
        {"id": "v_ang_1", "type": "Practice: Geometry Angles", "textBefore": "A triangle has interior angles measuring 30 degrees and 90 degrees. What is the measure of its third angle?", "hasFraction": false, "options": ["A) 45 degrees", "B) 60 degrees", "C) 75 degrees", "D) 90 degrees"], "correct": 1, "explain": "180 - (30 + 90) = 60 degrees. Option B is correct."},
        {"id": "v_ang_2", "type": "Practice: Geometry Angles", "textBefore": "In a right triangle, one of the acute angles measures 40 degrees. What is the measure of the other acute angle?", "hasFraction": false, "options": ["A) 40 degrees", "B) 50 degrees", "C) 60 degrees", "D) 90 degrees"], "correct": 1, "explain": "A right triangle has a 90-degree angle. 180 - 90 - 40 = 50 degrees. Option B is correct."},
        {"id": "v_ang_3", "type": "Practice: Geometry Angles", "textBefore": "An isosceles triangle has a vertex angle measuring 100 degrees. What is the measure of each of its equal base angles?", "hasFraction": false, "options": ["A) 30 degrees", "B) 40 degrees", "C) 50 degrees", "D) 80 degrees"], "correct": 1, "explain": "(180 - 100) / 2 = 80 / 2 = 40 degrees. Option B is correct."},
        {"id": "v_ang_4", "type": "Practice: Geometry Angles", "textBefore": "The three interior angles of a triangle measure x, 2x, and 3x. What is the value of x?", "hasFraction": false, "options": ["A) 20 degrees", "B) 30 degrees", "C) 45 degrees", "D) 60 degrees"], "correct": 1, "explain": "x + 2x + 3x = 180 -> 6x = 180 -> x = 30. Option B is correct."},
        {"id": "v_ang_5", "type": "Practice: Geometry Angles", "textBefore": "A triangle has two equal interior angles that measure 70 degrees each. What is the measure of the third angle?", "hasFraction": false, "options": ["A) 30 degrees", "B) 40 degrees", "C) 50 degrees", "D) 70 degrees"], "correct": 1, "explain": "180 - (70 + 70) = 180 - 140 = 40 degrees. Option B is correct."}
    ],
    "math-stat-averages": [
        {"id": "v_avg_1", "type": "Practice: Statistics", "textBefore": "Find the average (arithmetic mean) of the dataset: 4, 8, 12, 16.", "hasFraction": false, "options": ["A) 8", "B) 10", "C) 12", "D) 14"], "correct": 1, "explain": "(4+8+12+16)/4 = 40/4 = 10. Option B is correct."},
        {"id": "v_avg_2", "type": "Practice: Statistics", "textBefore": "What is the mean of 20, 30, and 40?", "hasFraction": false, "options": ["A) 25", "B) 30", "C) 35", "D) 40"], "correct": 1, "explain": "(20+30+40)/3 = 90/3 = 30. Option B is correct."},
        {"id": "v_avg_3", "type": "Practice: Statistics", "textBefore": "The snowfall amounts in inches over four days were 3, 5, 0, and 8. What was the average daily snowfall?", "hasFraction": false, "options": ["A) 3 inches", "B) 4 inches", "C) 5 inches", "D) 6 inches"], "correct": 1, "explain": "(3+5+0+8)/4 = 16/4 = 4 inches. Option B is correct."},
        {"id": "v_avg_4", "type": "Practice: Statistics", "textBefore": "If the mean of four numbers is 15, what is the required sum total of those four numbers?", "hasFraction": false, "options": ["A) 30", "B) 45", "C) 60", "D) 75"], "correct": 2, "explain": "Sum / 4 = 15 -> Sum = 15 * 4 = 60. Option C is correct."},
        {"id": "v_avg_5", "type": "Practice: Statistics", "textBefore": "What is the mean of the numbers 1, 2, 3, 4, 5, 6, and 7?", "hasFraction": false, "options": ["A) 3", "B) 4", "C) 5", "D) 6"], "correct": 1, "explain": "Sum = 28. Count = 7. 28 / 7 = 4. Option B is correct."}
    ],
    "math-prob-simple": [
        {"id": "v_prob_1", "type": "Practice: Probability", "textBefore": "A fair six-sided die is rolled once. What is the probability of rolling a multiple of 3 (either 3 or 6)?", "hasFraction": true, "fracData": {"top": "1", "bottom": "3"}, "textAfter": "", "options": ["A) 1/6", "B) 1/3", "C) 1/2", "D) 2/3"], "correct": 1, "explain": "There are 2 favorable outcomes (3, 6) out of 6 possible outcomes. 2/6 = 1/3. Option B is correct."},
        {"id": "v_prob_2", "type": "Practice: Probability", "textBefore": "A bag contains 5 red marbles and 5 black marbles. What is the mathematical probability of drawing a black marble?", "hasFraction": true, "fracData": {"top": "1", "bottom": "2"}, "textAfter": "", "options": ["A) 1/5", "B) 1/2", "C) 2/5", "D) 3/5"], "correct": 1, "explain": "5/10 simplifies cleanly to 1/2. Option B is correct."},
        {"id": "v_prob_3", "type": "Practice: Probability", "textBefore": "If a spinner has 8 equal-sized slices numbered 1 through 8, what is the probability of landing on an odd number?", "hasFraction": true, "fracData": {"top": "1", "bottom": "2"}, "textAfter": "", "options": ["A) 1/4", "B) 1/2", "C) 5/8", "D) 3/4"], "correct": 1, "explain": "Odds are 1, 3, 5, 7 (4 total numbers). 4/8 = 1/2. Option B is correct."},
        {"id": "v_prob_4", "type": "Practice: Probability", "textBefore": "A card deck contains 3 reward cards and 7 hazard cards. What is the fractional likelihood of pulling a reward card at random?", "hasFraction": true, "fracData": {"top": "3", "bottom": "10"}, "textAfter": "", "options": ["A) 1/3", "B) 3/10", "C) 7/10", "D) 1/2"], "correct": 1, "explain": "3 out of 10 matches 3/10. Option B is correct."},
        {"id": "v_prob_5", "type": "Practice: Probability", "textBefore": "A basket holds 11 green apples and 1 red apple. What is the probability of drawing the single red apple?", "hasFraction": true, "fracData": {"top": "1", "bottom": "12"}, "textAfter": "", "options": ["A) 1/11", "B) 1/12", "C) 11/12", "D) 1"], "correct": 1, "explain": "1 out of (11+1) total pieces matches 1/12. Option B is correct."}
    ],
    "math-word-rates": [
        {"id": "v_rate_1", "type": "Practice: Rates & Distance", "textBefore": "A train travels at 60 miles per hour. How far does it go in 2 hours and 30 minutes?", "hasFraction": false, "options": ["A) 120 miles", "B) 130 miles", "C) 150 miles", "D) 160 miles"], "correct": 2, "explain": "2.5 hours * 60 mph = 150 miles. Option C is correct."},
        {"id": "v_rate_2", "type": "Practice: Rates & Distance", "textBefore": "A hiker walks at a steady pace of 3 miles per hour. How many hours will it take to walk a 15-mile trail?", "hasFraction": false, "options": ["A) 3 hours", "B) 4 hours", "C) 5 hours", "D) 6 hours"], "correct": 2, "explain": "15 miles / 3 mph = 5 hours. Option C is correct."},
        {"id": "v_rate_3", "type": "Practice: Rates & Distance", "textBefore": "An athlete runs 6 miles in exactly 48 minutes. What is the runner's average speed in minutes per mile?", "hasFraction": false, "options": ["A) 6 minutes", "B) 7 minutes", "C) 8 minutes", "D) 9 minutes"], "correct": 2, "explain": "48 minutes / 6 miles = 8 minutes per mile. Option C is correct."},
        {"id": "v_rate_4", "type": "Practice: Rates & Distance", "textBefore": "A stream flows at 4 miles per hour. How many miles does an object drift down the stream in 15 minutes?", "hasFraction": false, "options": ["A) 1 mile", "B) 2 miles", "C) 3 miles", "D) 4 miles"], "correct": 0, "explain": "15 minutes is 1/4 of an hour. 4 mph * (1/4) = 1 mile. Option A is correct."},
        {"id": "v_rate_5", "type": "Practice: Rates & Distance", "textBefore": "If a mapping vehicle drives 200 miles in 4 hours, what was its average speed in miles per hour?", "hasFraction": false, "options": ["A) 40 mph", "B) 45 mph", "C) 50 mph", "D) 55 mph"], "correct": 2, "explain": "200 miles / 4 hours = 50 mph. Option C is correct."}
    ],
    "math-seq-patterns": [
        {"id": "v_seq_1", "type": "Practice: Number Patterns", "textBefore": "What is the next entry number: 5, 10, 15, 20, ___", "hasFraction": false, "options": ["A) 22", "B) 24", "C) 25", "D) 30"], "correct": 2, "explain": "Add 5 each time. 20 + 5 = 25. Option C is correct."},
        {"id": "v_seq_2", "type": "Practice: Number Patterns", "textBefore": "Find the next item: 1, 2, 4, 8, 16, ___", "hasFraction": false, "options": ["A) 20", "B) 24", "C) 32", "D) 40"], "correct": 2, "explain": "Multiply by 2 each time. 16 * 2 = 32. Option C is correct."},
        {"id": "v_seq_3", "type": "Practice: Number Patterns", "textBefore": "Find the missing sequence item: 50, 44, 38, 32, ___", "hasFraction": false, "options": ["A) 24", "B) 26", "C) 28", "D) 30"], "correct": 1, "explain": "Subtract 6 each time. 32 - 6 = 26. Option B is correct."},
        {"id": "v_seq_4", "type": "Practice: Number Patterns", "textBefore": "Find the next pattern number: 1, 4, 9, 16, ___", "hasFraction": false, "options": ["A) 20", "B) 24", "C) 25", "D) 36"], "correct": 2, "explain": "These are perfect squares: 1^2, 2^2, 3^2, 4^2. Next is 5^2 = 25. Option C is correct."},
        {"id": "v_seq_5", "type": "Practice: Number Patterns", "textBefore": "Complete the series: 10, 11, 13, 16, 20, ___", "hasFraction": false, "options": ["A) 24", "B) 25", "C) 26", "D) 27"], "correct": 1, "explain": "The increments increase by 1 each step: +1, +2, +3, +4. Next is +5. 20 + 5 = 25. Option B is correct."}
    ],
    "verb-syn-vocab": [
        {"id": "v_synv_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: ASCENT", "hasFraction": false, "options": ["A) Drop", "B) Climb", "C) Sleep", "D) Turn"], "correct": 1, "explain": "Ascent means an instance of rising or climbing up. Option B is correct."},
        {"id": "v_synv_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: SUMMIT", "hasFraction": false, "options": ["A) Base", "B) Peak", "C) Valley", "D) Path"], "correct": 1, "explain": "Summit means the highest point of a hill or mountain, which is the peak. Option B is correct."},
        {"id": "v_synv_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: LOFTY", "hasFraction": false, "options": ["A) Low", "B) Deep", "C) Tall / High", "D) Flat"], "correct": 2, "explain": "Lofty means of imposing height, towering, or tall. Option C is correct."},
        {"id": "v_synv_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: PINNACLE", "hasFraction": false, "options": ["A) Lowest point", "B) Middle point", "C) Highest point", "D) Starting point"], "correct": 2, "explain": "Pinnacle means the most successful point, culmination, or highest point. Option C is correct."},
        {"id": "v_synv_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: CREST", "hasFraction": false, "options": ["A) Bottom", "B) Side", "C) Top", "D) Corner"], "correct": 2, "explain": "The crest of a ridge or mountain is its top edge or peak. Option C is correct."}
    ],
    "verb-syn-adjectives": [
        {"id": "v_syna_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: TREACHEROUS", "hasFraction": false, "options": ["A) Safe", "B) Unreliable / Hazardous", "C) Warm", "D) Solid"], "correct": 1, "explain": "Treacherous means presenting hidden or unpredictable dangers, which means hazardous. Option B is correct."},
        {"id": "v_syna_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: FORMIDABLE", "hasFraction": false, "options": ["A) Weak", "B) Intimidating / Challenging", "C) Tiny", "D) Simple"], "correct": 1, "explain": "Formidable means inspiring fear or respect through being impressively large or powerful, matching intimidating. Option B is correct."},
        {"id": "v_syna_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: ARID", "hasFraction": false, "options": ["A) Wet", "B) Humid", "C) Dry", "D) Rainy"], "correct": 2, "explain": "Arid means having little or no rain; too dry to support vegetation. Option C is correct."},
        {"id": "v_syna_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: PRISTINE", "hasFraction": false, "options": ["A) Spoiled", "B) Ancient", "C) Pure / Untouched", "D) Dirty"], "correct": 2, "explain": "Pristine means in its original condition; unspoiled or pure. Option C is correct."},
        {"id": "v_syna_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: FRAGILE", "hasFraction": false, "options": ["A) Strong", "B) Delicate / Breakable", "C) Heavy", "D) Permanent"], "correct": 1, "explain": "Fragile means easily broken or damaged, hence delicate. Option B is correct."}
    ],
    "verb-ana-partwhole": [
        {"id": "v_anap_1", "type": "Practice: Analogies", "textBefore": "LEAF : TREE :: _________ : _________", "hasFraction": false, "options": ["A) Petal : Flower", "B) Bark : Dog", "C) Root : Dirt", "D) Seed : Fruit"], "correct": 0, "explain": "A leaf is a standard defining part of a tree. A petal is a defining part of a flower. Option A is correct."},
        {"id": "v_anap_2", "type": "Practice: Analogies", "textBefore": "WHEEL : CAR :: _________ : _________", "hasFraction": false, "options": ["A) Engine : Plane", "B) Wing : Bird", "C) Sail : Boat", "D) Track : Train"], "correct": 2, "explain": "A wheel is a structural component part of a car. A sail is a defining part of a sailing boat. Option C is correct."},
        {"id": "v_anap_3", "type": "Practice: Analogies", "textBefore": "BRICK : HOUSE :: _________ : _________", "hasFraction": false, "options": ["A) Tile : Floor", "B) Wall : Room", "C) Key : Lock", "D) Thread : Cloth"], "correct": 3, "explain": "Bricks are small parts woven together to make a whole house. Threads are small structural pieces woven together to make whole cloth. Option D is correct."},
        {"id": "v_anap_4", "type": "Practice: Analogies", "textBefore": "CHAPTER : BOOK :: _________ : _________", "hasFraction": false, "options": ["A) Word : Letter", "B) Verse : Song", "C) Play : Actor", "D) Note : Scale"], "correct": 1, "explain": "A chapter is an ordered division part of a book. A verse is an ordered division part of a song. Option B is correct."},
        {"id": "v_anap_5", "type": "Practice: Analogies", "textBefore": "LETTER : WORD :: _________ : _________", "hasFraction": false, "options": ["A) Sentence : Phrase", "B) Word : Paragraph", "C) Page : Cover", "D) Story : Book"], "correct": 1, "explain": "Letters form a single word. Words form a whole paragraph. Option B is correct."}
    ],
    "verb-ana-toolaction": [
        {"id": "v_anat_1", "type": "Practice: Analogies", "textBefore": "KNIFE : CUT :: _________ : _________", "hasFraction": false, "options": ["A) Spoon : Stir", "B) Fork : Eat", "C) Axe : Wood", "D) Saw : Timber"], "correct": 0, "explain": "A knife is a baseline tool built specifically to cut things. A spoon is a tool built specifically to stir things. Option A is correct."},
        {"id": "v_anat_2", "type": "Practice: Analogies", "textBefore": "PEN : WRITE :: _________ : _________", "hasFraction": false, "options": ["A) Pencil : Erase", "B) Paper : Sketch", "C) Brush : Paint", "D) Ink : Stain"], "correct": 2, "explain": "A pen is a tool used to write. A brush is a tool used to paint. Option C is correct."},
        {"id": "v_anat_3", "type": "Practice: Analogies", "textBefore": "KEY : UNLOCK :: _________ : _________", "hasFraction": false, "options": ["A) Door : Open", "B) Ruler : Measure", "C) Safe : Close", "D) Chain : Tie"], "correct": 1, "explain": "A key is a tool used specifically to unlock. A ruler is a tool used specifically to measure. Option B is correct."},
        {"id": "v_anat_4", "type": "Practice: Analogies", "textBefore": "HAMMER : STRIKE :: _________ : _________", "hasFraction": false, "options": ["A) Nail : Hold", "B) Screwdriver : Twist", "C) Plier : Squeeze", "D) Scissors : Slice"], "correct": 3, "explain": "A hammer strikes a surface directly. Scissors slice an item. Option D is correct."},
        {"id": "v_anat_5", "type": "Practice: Analogies", "textBefore": "NEEDLE : SEW :: _________ : _________", "hasFraction": false, "options": ["A) Thread : Tie", "B) Loom : Weave", "C) Shovel : Dig", "D) Rake : Gather"], "correct": 2, "explain": "A needle is a tool used to sew. A shovel is a tool used to dig. Option C is correct."}
    ],
    "verb-ana-degree": [
        {"id": "v_deg_1", "type": "Practice: Analogies", "textBefore": "COOL : COLD :: _________ : _________", "hasFraction": false, "options": ["A) Warm : Hot", "B) Dry : Wet", "C) Low : High", "D) Big : Small"], "correct": 0, "explain": "Cold is a higher degree of cool. Hot is a higher degree of warm. Option A is correct."},
        {"id": "v_deg_2", "type": "Practice: Analogies", "textBefore": "WHISPER : SHOUT :: _________ : _________", "hasFraction": false, "options": ["A) Walk : Run", "B) Glance : Stare", "C) Hint : Command", "D) All of the above"], "correct": 3, "explain": "All answer choices represent relationships of expanding degree intensity. Option D is correct."},
        {"id": "v_deg_3", "type": "Practice: Analogies", "textBefore": "TIRED : EXHAUSTED :: _________ : _________", "hasFraction": false, "options": ["A) Happy : Ecstatic", "B) Sad : Cry", "C) Weak : Strong", "D) Fast : Slow"], "correct": 0, "explain": "Exhausted is an extreme degree of tired. Ecstatic is an extreme degree of happy. Option A is correct."},
        {"id": "v_deg_4", "type": "Practice: Analogies", "textBefore": "SMALL : MICROSCOPIC :: _________ : _________", "hasFraction": false, "options": ["A) Large : Colossal", "B) Tall : Short", "C) Wide : Narrow", "D) Heavy : Light"], "correct": 0, "explain": "Microscopic is an extreme level of smallness. Colossal is an extreme level of largeness. Option A is correct."},
        {"id": "v_deg_5", "type": "Practice: Analogies", "textBefore": "DISLIKE : LOATHE :: _________ : _________", "hasFraction": false, "options": ["A) Like : Idolize", "B) Love : Hate", "C) Fear : Avoid", "D) Want : Need"], "correct": 0, "explain": "To loathe is an extreme degree of dislike. To idolize is an extreme degree of liking. Option A is correct."}
    ],
    "verb-syn-verbs": [
        {"id": "v_syv_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: DESERT (verb)", "hasFraction": false, "options": ["A) Maintaining", "B) Abandon", "C) Protect", "D) Conquer"], "correct": 1, "explain": "To desert a location or post means to abandon it completely. Option B is correct."},
        {"id": "v_syv_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: RENOUNCE", "hasFraction": false, "options": ["A) Accept", "B) Give up / Reject", "C) Speak", "D) Build"], "correct": 1, "explain": "To renounce a claim means to formally give it up or reject it. Option B is correct."},
        {"id": "v_syv_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: ABSTAIN", "hasFraction": false, "options": ["A) Indulge", "B) Refrain", "C) Vote", "D) Collect"], "correct": 1, "explain": "To abstain means to restrain oneself from doing or enjoying something, which is to refrain. Option B is correct."},
        {"id": "v_syv_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: EVADE", "hasFraction": false, "options": ["A) Face", "B) Avoid / Elude", "C) Intercept", "D) Capture"], "correct": 1, "explain": "To evade means to escape or avoid, especially by cleverness, matching elude or avoid. Option B is correct."},
        {"id": "v_syv_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: FORGO", "hasFraction": false, "options": ["A) Take", "B) Demand", "C) Skip / Waive", "D) Remember"], "correct": 2, "explain": "To forgo means to go without or decline to take, matching waive or skip. Option C is correct."}
    ],
    "verb-ana-antonyms": [
        {"id": "v_anant_1", "type": "Practice: Analogies", "textBefore": "HOT : COLD :: _________ : _________", "hasFraction": false, "options": ["A) Warm : Lukewarm", "B) Dry : Wet", "C) High : Steep", "D) Clear : Pure"], "correct": 1, "explain": "Hot and cold are direct antonyms. Dry and wet are direct antonyms. Option B is correct."},
        {"id": "v_anant_2", "type": "Practice: Analogies", "textBefore": "GIANT : DWARF :: _________ : _________", "hasFraction": false, "options": ["A) Large : Huge", "B) Mountain : Valley", "C) Peak : Hill", "D) Summit : Base"], "correct": 1, "explain": "Giant and dwarf represent opposite endpoints of physical sizing. Mountain and valley represent opposites of ground profile structures. Option B is correct."},
        {"id": "v_anant_3", "type": "Practice: Analogies", "textBefore": "ANCIENT : MODERN :: _________ : _________", "hasFraction": false, "options": ["A) Old : Antique", "B) New : Fresh", "C) Obsolete : Current", "D) Fast : Speedy"], "correct": 2, "explain": "Ancient and modern are antonyms. Obsolete (no longer used) and current are direct antonyms. Option C is correct."},
        {"id": "v_anant_4", "type": "Practice: Analogies", "textBefore": "BRAVE : COWARDLY :: _________ : _________", "hasFraction": false, "options": ["A) Kind : Cruel", "B) Strong : Heavy", "C) Smart : Wise", "D) Loud : Noisy"], "correct": 0, "explain": "Brave and cowardly are antonyms. Kind and cruel are direct antonyms of behavior. Option A is correct."},
        {"id": "v_anant_5", "type": "Practice: Analogies", "textBefore": "ASCEND : DESCEND :: _________ : _________", "hasFraction": false, "options": ["A) Rise : Soar", "B) Enter : Exit", "C) Run : Sprint", "D) Fall : Drop"], "correct": 1, "explain": "To ascend and descend are opposites. To enter and exit are direct opposites. Option B is correct."}
    ],
    "read-main-idea": [
        {"id": "v_rm_1", "type": "Practice: Main Idea", "textBefore": "Passage: The bark of the coastal redwood tree grows up to twelve inches thick, shielding the ancient trees from seasonal forest fires that destroy lesser flora. This thick outer armor layer contains tannic acid, which repels invasive wood-boring insects. <br><br>Question: What is the primary focus of the text?", "hasFraction": false, "options": ["A) Redwoods are very tall.", "B) Redwood bark offers vital protective defense benefits.", "C) Forest fires are destructive.", "D) Tannic acid tastes bitter."], "correct": 1, "explain": "The passage highlights the thickness of the bark as a shield against fires and insects, focusing on its protective benefits. Option B is correct."},
        {"id": "v_rm_2", "type": "Practice: Main Idea", "textBefore": "Passage: Grizzly bears spend up to six months in hibernation, a state where their heart rate drops from 40 beats per minute to just 8. Scientists study this process to understand how muscles retain mass without activity.<br><br>Question: Select the primary central focus statement of the entry.", "hasFraction": false, "options": ["A) Hibernation details of grizzlies serve as an active area of physiological muscle study.", "B) Bears eat berries before winter.", "C) Muscle loss is unavoidable.", "D) Heart rate tracking is difficult."], "correct": 0, "explain": "The text explains the specs of hibernation and its relevance to muscle preservation studies. Option A is correct."},
        {"id": "v_rm_3", "type": "Practice: Main Idea", "textBefore": "Passage: Solar panels convert sunlight into electricity via silicon photovoltaic cells. While installation costs remain high, the long-term elimination of carbon emissions makes them an essential element of modern municipal green infrastructure projects.<br><br>Question: What represents the core argument of the passage?", "hasFraction": false, "options": ["A) Silicon is rare.", "B) High installation costs are problematic.", "C) Panels are an essential long-term asset for green infrastructure despite initial costs.", "D) Cities use too much energy."], "correct": 2, "explain": "The text frames panels as crucial infrastructure assets due to emission cuts, balancing out the initial costs. Option C is correct."},
        {"id": "v_rm_4", "type": "Practice: Main Idea", "textBefore": "Passage: The written alphabet of the ancient Maya consisted of over 800 complex hieroglyphic glyphs. Deciphering this text took linguists over a century, as individual signs could represent either a complete word or a singular spoken phonetic syllable unit.<br><br>Question: What is the main point of the text?", "hasFraction": false, "options": ["A) Maya wrote on stone walls.", "B) The complexity of Maya hieroglyphs made decipherment a lengthy, intricate process.", "C) Linguists are very patient.", "D) Phonics is superior to whole language."], "correct": 1, "explain": "The passage outlines the vast array of glyphs to illustrate why translation took over a century. Option B is correct."},
        {"id": "v_rm_5", "type": "Practice: Main Idea", "textBefore": "Passage: Standardized maps use contour line intervals to visualize elevation shifts across a flat 2D page surface. When contour lines are closely packed together, they indicate an incredibly steep cliff slope profile; when widely spaced, they signal a gentle plain gradient.<br><br>Question: Summarize the primary main idea of this description text.", "hasFraction": false, "options": ["A) Maps are hard to read.", "B) Contour intervals translate terrain steepness metrics via line spacing configurations.", "C) Flat pages cannot show mountains accurately.", "D) Hikers get lost without paper grids."], "correct": 1, "explain": "The description walks through how line spacing directly reveals the steepness of terrain. Option B is correct."}
    ],
    "read-support-detail": [
        {"id": "v_rd_1", "type": "Practice: Supporting Detail", "textBefore": "Passage: The Continental Divide trail stretches 3,100 miles from the border of Mexico to the edge of Canada, crossing through five distinct US states.<br><br>Question: According to the passage, how many US states does the trail cross through?", "hasFraction": false, "options": ["A) Three states", "B) Four states", "C) Five states", "D) Six states"], "correct": 2, "explain": "The text states explicitly: 'crossing through five distinct US states'. Option C is correct."},
        {"id": "v_rd_2", "type": "Practice: Supporting Detail", "textBefore": "Passage: Boulder fields on mountain ridges are formed by frost wedging, an environmental process where water slips into fractures and expands by 9 percent as it freezes into ice block configurations.<br><br>Question: By what percentage does water expand when it freezes according to the log text?", "hasFraction": false, "options": ["A) 5 percent", "B) 9 percent", "C) 12 percent", "D) 15 percent"], "correct": 1, "explain": "The text states explicitly: 'expands by 9 percent as it freezes'. Option B is correct."},
        {"id": "v_rd_3", "type": "Practice: Supporting Detail", "textBefore": "Passage: Glacier National Park was established by an act of Congress in the year 1910, following intense logging preservation efforts spearheaded by George Bird Grinnell.<br><br>Question: In what calendar year was the park formally established?", "hasFraction": false, "options": ["A) 1890", "B) 1905", "C) 1910", "D) 1924"], "correct": 2, "explain": "The text explicitly isolates the date as 'the year 1910'. Option C is correct."},
        {"id": "v_rd_4", "type": "Practice: Supporting Detail", "textBefore": "Passage: Mountain goats possess unique hooves with a hard outer shell and a soft, rubbery center pad that provides excellent friction grip on slick stone cliffs.<br><br>Question: What component structure provides the goat's hoof with friction grip?", "hasFraction": false, "options": ["A) A sharp bone spur", "B) A soft, rubbery center pad", "C) A sticky fluid layer", "D) Long curved claws"], "correct": 1, "explain": "The text states a 'soft, rubbery center pad provides excellent friction grip'. Option B is correct."},
        {"id": "v_rd_5", "type": "Practice: Supporting Detail", "textBefore": "Passage: At an elevation checkpoint of 8,000 feet, atmospheric pressure registers at roughly three-quarters of standard sea-level values, impacting water boiling benchmarks.<br><br>Question: What does atmospheric pressure register at an elevation checkpoint of 8,000 feet?", "hasFraction": false, "options": ["A) Half of sea level", "B) Three-quarters of sea level", "C) Double sea level", "D) One-third of sea level"], "correct": 1, "explain": "The text directly reads: 'registers at roughly three-quarters of standard sea-level values'. Option B is correct."}
    ],
    "read-inference": [
        {"id": "v_ri_1", "type": "Practice: Inference", "textBefore": "Passage: The morning expedition team found footprints outside their tent that measured eight inches wide and sank four inches deep into the packed snowbank. No human boot prints matching that dimension shape existed among the crew's gear list inventory logs.<br><br>Question: Based on the facts, it can be logically inferred that:", "hasFraction": false, "options": ["A) A crew member snuck out in large boots.", "B) A large animal or undocumented creature passed near the camp area overnight.", "C) The snow melted rapidly.", "D) The wind blew snow away into shapes."], "correct": 1, "explain": "The massive size and depth of the print, combined with the fact that it doesn't match the crew's gear, implies that a heavy creature passed by. Option B is correct."},
        {"id": "v_ri_2", "type": "Practice: Inference", "textBefore": "Passage: Whenever an approach storm front hits the ridge lines, the local marmot colonies stop foraging for seeds and retreat entirely inside their deep underground rock burrow chambers.<br><br>Question: It can be inferred from the text that marmots perceive approaching storm fronts as:", "hasFraction": false, "options": ["A) A prime time to hunt", "B) An environmental hazard or danger to avoid", "C) A signal to migrate down valleys", "D) An ideal time to play"], "correct": 1, "explain": "Retreating deep underground and stopping foraging indicates they seek safety from an oncoming hazard. Option B is correct."},
        {"id": "v_ri_3", "type": "Practice: Inference", "textBefore": "Passage: Fossilized teeth belonging to marine sharks have been excavated by geologists from shale rock layers near the summit of the Rocky Mountains, thousands of feet above current sea horizons.<br><br>Question: Based on the fossil evidence, it can be logically inferred that the summit rock layers:", "hasFraction": false, "options": ["A) Were carried up by birds", "B) Were once submerged under an ancient ocean before tectonic uplift occurred", "C) Are fake replicas", "D) Formed from volcanic ash flows"], "correct": 1, "explain": "Finding shark teeth in the rock indicates that the material was once part of an ocean bed before being pushed up over time. Option B is correct."},
        {"id": "v_ri_4", "type": "Practice: Inference", "textBefore": "Passage: In the alpine meadows, the population of field mice spikes dramatically when wolf packs are driven out of the valleys by human fencing outfits.<br><br>Question: It can be inferred that wolf packs function contextually as:", "hasFraction": false, "options": ["A) Competitors for mice seeds", "B) Natural predators that keep mice populations in check", "C) Symbiotic partners of field mice", "D) Direct targets of field mice outfits"], "correct": 1, "explain": "A spike in mice when wolves leave indicates that wolves were previously keeping the population down by hunting them. Option B is correct."},
        {"id": "v_ri_5", "type": "Practice: Inference", "textBefore": "Passage: Standard retail hiking boots that perform perfectly on flat woodland park paths often fall apart within a week when subjected to the sharp, abrasive granite scree slopes of high peak ranges.<br><br>Question: The text implies that mountain scree slopes are:", "hasFraction": false, "options": ["A) Smooth and muddy", "B) Highly abrasive and damaging to standard footwear materials", "C) Easy to walk on", "D) Covered in dense soft moss"], "correct": 1, "explain": "Since they tear apart standard footwear, the slopes must be incredibly rough, abrasive, and tough on materials. Option B is correct."}
    ],
    "read-vocab-context": [
        {"id": "v_rc_1", "type": "Practice: Vocab in Context", "textBefore": "Passage: The old prospector remained an enigma to the village. He lived in a remote shack on the mountain face, spoke to no one for decades, and refused to spend any of the gold coins he brought to town.<br><br>Question: As used in the passage, the word 'enigma' most nearly means:", "hasFraction": false, "options": ["A) A well-known hero", "B) A mysterious puzzle or misunderstood person", "C) A loud merchant", "D) A dangerous criminal"], "correct": 1, "explain": "His secretive, isolated lifestyle makes him a mysterious puzzle or enigma to the town. Option B is correct."},
        {"id": "v_rc_2", "type": "Practice: Vocab in Context", "textBefore": "Passage: The alpine river became torrential after the sudden midnight downpour, tearing down old footbridges and sweeping giant logs down its raging current channels.<br><br>Question: As used in the context, the word 'torrential' most nearly means:", "hasFraction": false, "options": ["A) Slow and muddy", "B) Frozen solid", "C) Violently fast and overflowing", "D) Dried up"], "correct": 2, "explain": "Tearing down bridges and sweeping away logs points directly to a violently fast, powerful current. Option C is correct."},
        {"id": "v_rc_3", "type": "Practice: Vocab in Context", "textBefore": "Passage: The explorer's thermal jacket was impervious to the biting alpine winds, keeping him perfectly warm while storm gusts rattled the exterior canvas layers of the cabin.<br><br>Question: As used in the passage, the word 'impervious' means the jacket was:", "hasFraction": false, "options": ["A) Unaffected / Fully resistant", "B) Easily torn apart", "C) Soaked with water", "D) Heavy and tight"], "correct": 0, "explain": "Since it kept him warm against biting winds, the jacket was fully resistant or unaffected by the cold. Option A is correct."},
        {"id": "v_rc_4", "type": "Practice: Vocab in Context", "textBefore": "Passage: The climbing group found the mountain path to be completely unobstructed, allowing them to make rapid progress and arrive at high camp hours ahead of schedule.<br><br>Question: As used in the text, the word 'unobstructed' means the path was:", "hasFraction": false, "options": ["A) Covered in boulder blocks", "B) Clear and free of barriers", "C) Steep and slick", "D) Lost entirely"], "correct": 1, "explain": "Making rapid progress ahead of schedule indicates the path was clear and free of barriers. Option B is correct."},
        {"id": "v_rc_5", "type": "Practice: Vocab in Context", "textBefore": "Passage: The ranger warned that picking the alpine wildflowers would deplete the fragile seed bank reserves required for the field to grow back next spring.<br><br>Question: As used in the sentence, the word 'deplete' means to:", "hasFraction": false, "options": ["A) Expand / Multiply", "B) Empty out / Reduce heavily", "C) Safeguard", "D) Beautify"], "correct": 1, "explain": "Picking flowers removes them, which empties out or heavily reduces the seed bank reserves. Option B is correct."}
    ],
    "read-tone-attitude": [
        {"id": "v_rt_1", "type": "Practice: Tone / Attitude", "textBefore": "Passage: Standing on the absolute edge of the canyon, watching the morning fog lift to reveal a vast sea of ancient green pines under a golden sun, my heart filled with a deep sense of peace. The grandeur of nature makes human worries fade into absolute insignificance.<br><br>Question: The tone of the passage can best be described as:", "hasFraction": false, "options": ["A) Bitter and angry", "B) Bored and indifferent", "C) Reverent and awe-struck", "D) Humorous"], "correct": 2, "explain": "Words like 'grandeur', 'profound peace', and description of nature convey a deeply respectful, awe-struck, or reverent tone. Option C is correct."},
        {"id": "v_rt_2", "type": "Practice: Tone / Attitude", "textBefore": "Passage: The hiking instructions provided by the park service are a complete disaster. They list trails that closed a decade ago and omit critical warnings about seasonal mudslides that could injure backpackers.<br><br>Question: The author's attitude toward the instructions is:", "hasFraction": false, "options": ["A) Highly satisfied", "B) Infuriated / Highly critical", "C) Neutral", "D) Appreciative"], "correct": 1, "explain": "Calling them a 'complete disaster' and noting omitted hazards signals a highly critical and frustrated stance. Option B is correct."},
        {"id": "v_rt_3", "type": "Practice: Tone / Attitude", "textBefore": "Passage: To prepare for a mountain trek, one must check weather channels, pack a map, and bring 2 liters of water per person. These standard baseline steps ensure safety.<br><br>Question: The tone of this passage is best described as:", "hasFraction": false, "options": ["A) Emotional", "B) Matter-of-fact / Instructive", "C) Sarcastic", "D) Fearful"], "correct": 1, "explain": "The text lists practical rules without personal bias or flare, making it matter-of-fact and instructive. Option B is correct."},
        {"id": "v_rt_4", "type": "Practice: Tone / Attitude", "textBefore": "Passage: Oh great, another weekend where it rains across the entire mountain range right when my vacation starts. Absolutely perfect. I guess I'll spend my time starring at a damp motel wall instead of climbing peaks.<br><br>Question: The author's emotional tone here is heavily:", "hasFraction": false, "options": ["A) Sarcastic / Cynical", "B) Excited", "C) Professional", "D) Scientific"], "correct": 0, "explain": "Saying 'Oh great' and 'Absolutely perfect' about bad luck is classic sarcasm. Option A is correct."},
        {"id": "v_rt_5", "type": "Practice: Tone / Attitude", "textBefore": "Passage: The reintroduction of wolves to the valleys is an inspiring victory for conservationists. Watching these majestic predators roam free across their ancestral home brings hope for the restoration of wild ecosystems.<br><br>Question: The author's stance on wolf reintroduction is:", "hasFraction": false, "options": ["A) Frightened", "B) Opposed", "C) Enthusiastic / Supportive", "D) Scientific"], "correct": 2, "explain": "Using words like 'inspiring victory', 'majestic', and 'hope' shows strong enthusiastic support. Option C is correct."}
    ],
    "read-author-purpose": [
        {"id": "v_rp_1", "type": "Practice: Author's Purpose", "textBefore": "Passage: High camp tents utilize unique geodesic cross-pole frame designs. Unlike square pop-up backyard canopies, these structural intersecting triangles distribute wind loads evenly, preventing the shelter from snapping under 60 mph mountain gusts.<br><br>Question: Why does the author mention 'backyard canopies'?", "hasFraction": false, "options": ["A) To explain where to buy tents", "B) To provide a contrasting example highlighting the strength of geodesic frames", "C) To complain about cheap gear", "D) To recommend backyard camping options"], "correct": 1, "explain": "The author contrasts backyard canopies with geodesic frames to highlight the superior wind resistance and strength of the latter. Option B is correct."},
        {"id": "v_rp_2", "type": "Practice: Author's Purpose", "textBefore": "Passage: Dehydration sets in rapidly at high altitudes. Hikers often do not feel thirsty due to cold mountain air, leading them to neglect their water bottles until severe headaches or dizziness manifest.<br><br>Question: The primary purpose of this passage is to:", "hasFraction": false, "options": ["A) Sell specialized water flasks", "B) Warn hikers about hidden risks of high-altitude dehydration", "C) Describe mountain weather patterns", "D) Explain how to cure severe headaches"], "correct": 1, "explain": "The passage highlights the hidden danger of dehydration due to not feeling thirsty in the cold, acting as a warning. Option B is correct."},
        {"id": "v_rp_3", "type": "Practice: Author's Purpose", "textBefore": "Passage: Wild black bears are inherently fearful of humans and will typically flee if they hear noise. Hiking parties should clap their hands or talk loudly while passing through thick berry patches to avoid startling an animal at close range.<br><br>Question: The author includes the second sentence primarily to:", "hasFraction": false, "options": ["A) Teach hikers how to scare away birds", "B) Provide a practical safety instruction to prevent accidental bear encounters", "C) Describe bear feeding habits", "D) Express dislike for berry fields"], "correct": 1, "explain": "The second line uses the fact from the first sentence to offer a practical safety tip for hikers. Option B is correct."},
        {"id": "v_rp_4", "type": "Practice: Author's Purpose", "textBefore": "Passage: The invention of synthetic Gore-Tex fabric in 1969 revolutionized mountaineering. Before its creation, climbers relied on heavy waxed cotton canvas layers that absorbed sweat and froze solid during long ice climbs.<br><br>Question: Why does the author describe 'waxed cotton canvas layers'?", "hasFraction": false, "options": ["A) To explain how old fabrics were manufactured", "B) To illustrate the limitations of old gear and emphasize the revolutionary nature of Gore-Tex", "C) To encourage climbers to use vintage gear items", "D) To argue that cotton canvas is warmer"], "correct": 1, "explain": "Describing the old gear highlights its flaws, demonstrating how revolutionary the new fabric truly was. Option B is correct."},
        {"id": "v_rp_5", "type": "Practice: Author's Purpose", "textBefore": "Passage: Tree rings, or dendrochronology logs, provide an exact historical archive of alpine climates. An exceptionally wide ring layer indicates a warm, rainy growing season, while a thin pinched line reveals a severe drought year.<br><br>Question: The author details wide and thin rings primarily to explain:", "hasFraction": false, "options": ["A) How trees absorb ground nutrients", "B) How ring patterns physically record specific seasonal weather shifts", "C) Which tree types make the best timber logs", "D) How old a mountain forest is"], "correct": 1, "explain": "The examples show exactly how variations in the rings reveal past weather shifts, explaining the scientific process. Option B is correct."}
    ],
    "math-num-fractions-add": [
        {"id": "vg_num_1", "type": "Practice: Fractions", "textBefore": "Add the terms: 1/4 + 2/4", "hasFraction": false, "options": ["A) 3/4", "B) 3/8", "C) 1/2", "D) 1"], "correct": 0, "explain": "1/4 + 2/4 = 3/4."},
        {"id": "vg_num_2", "type": "Practice: Fractions", "textBefore": "Add the terms: 2/7 + 3/7", "hasFraction": false, "options": ["A) 5/14", "B) 5/7", "C) 1/7", "D) 6/7"], "correct": 1, "explain": "2/7 + 3/7 = 5/7."},
        {"id": "vg_num_3", "type": "Practice: Fractions", "textBefore": "Add the terms: 4/9 + 1/9", "hasFraction": false, "options": ["A) 5/18", "B) 5/9", "C) 3/9", "D) 1/3"], "correct": 1, "explain": "4/9 + 1/9 = 5/9."},
        {"id": "vg_num_4", "type": "Practice: Fractions", "textBefore": "Add the terms: 3/8 + 2/8", "hasFraction": false, "options": ["A) 5/16", "B) 5/8", "C) 1/2", "D) 7/8"], "correct": 1, "explain": "3/8 + 2/8 = 5/8."},
        {"id": "vg_num_5", "type": "Practice: Fractions", "textBefore": "Add the terms: 1/5 + 1/5", "hasFraction": false, "options": ["A) 2/10", "B) 2/5", "C) 1/5", "D) 4/5"], "correct": 1, "explain": "1/5 + 1/5 = 2/5."}
    ],
    "math-alg-simplify": [
        {"id": "vg_alg_1", "type": "Practice: Algebra", "textBefore": "Simplify: 4x + 2x - x", "hasFraction": false, "options": ["A) 5x", "B) 6x", "C) 7x", "D) 4x"], "correct": 0, "explain": "4 + 2 - 1 = 5x."},
        {"id": "vg_alg_2", "type": "Practice: Algebra", "textBefore": "Simplify: 5y - 2y + 3y", "hasFraction": false, "options": ["A) 4y", "B) 5y", "C) 6y", "D) 7y"], "correct": 2, "explain": "5 - 2 + 3 = 6y."},
        {"id": "vg_alg_3", "type": "Practice: Algebra", "textBefore": "Simplify: 3a + 3a - 2a + 4", "hasFraction": false, "options": ["A) 4a + 4", "B) 6a", "C) 8a - 4", "D) 4a"], "correct": 0, "explain": "3 + 3 - 2 = 4a + 4."},
        {"id": "vg_alg_4", "type": "Practice: Algebra", "textBefore": "Simplify: 7b - b - 2b", "hasFraction": false, "options": ["A) 4b", "B) 5b", "C) 6b", "D) 3b"], "correct": 0, "explain": "7 - 1 - 2 = 4b."},
        {"id": "vg_alg_5", "type": "Practice: Algebra", "textBefore": "Simplify: 2x + 8x - 5x + 1", "hasFraction": false, "options": ["A) 5x + 1", "B) 10x", "C) 6x + 1", "D) 5x"], "correct": 0, "explain": "2 + 8 - 5 = 5x + 1."}
    ],
    "math-geo-perimeter": [
        {"id": "vg_geo_1", "type": "Practice: Geometry", "textBefore": "Perimeter of rectangle with length 5 and width 3:", "hasFraction": false, "options": ["A) 8", "B) 15", "C) 16", "D) 20"], "correct": 2, "explain": "2 * (5 + 3) = 16."},
        {"id": "vg_geo_2", "type": "Practice: Geometry", "textBefore": "Perimeter of rectangle with length 10 and width 4:", "hasFraction": false, "options": ["A) 14", "B) 28", "C) 40", "D) 20"], "correct": 1, "explain": "2 * (10 + 4) = 28."},
        {"id": "vg_geo_3", "type": "Practice: Geometry", "textBefore": "Perimeter of rectangle with length 6 and width 2:", "hasFraction": false, "options": ["A) 8", "B) 12", "C) 16", "D) 24"], "correct": 2, "explain": "2 * (6 + 2) = 16."},
        {"id": "vg_geo_4", "type": "Practice: Geometry", "textBefore": "Perimeter of rectangle with length 7 and width 5:", "hasFraction": false, "options": ["A) 12", "B) 24", "C) 35", "D) 48"], "correct": 1, "explain": "2 * (7 + 5) = 24."},
        {"id": "vg_geo_5", "type": "Practice: Geometry", "textBefore": "Perimeter of rectangle with length 9 and width 1:", "hasFraction": false, "options": ["A) 10", "B) 18", "C) 20", "D) 30"], "correct": 2, "explain": "2 * (9 + 1) = 20."}
    ],
    "math-stat-range": [
        {"id": "vg_sta_1", "type": "Practice: Data Analysis", "textBefore": "Range of dataset: 5, 10, 2, 8", "hasFraction": false, "options": ["A) 5", "B) 8", "C) 10", "D) 2"], "correct": 1, "explain": "10 - 2 = 8."},
        {"id": "vg_sta_2", "type": "Practice: Data Analysis", "textBefore": "Range of dataset: 20, 1, 15, 30", "hasFraction": false, "options": ["A) 15", "B) 20", "C) 29", "D) 30"], "correct": 2, "explain": "30 - 1 = 29."},
        {"id": "vg_sta_3", "type": "Practice: Data Analysis", "textBefore": "Range of dataset: 7, 7, 7, 12", "hasFraction": false, "options": ["A) 0", "B) 5", "C) 7", "D) 12"], "correct": 1, "explain": "12 - 7 = 5."},
        {"id": "vg_sta_4", "type": "Practice: Data Analysis", "textBefore": "Range of dataset: 14, 22, 5, 19", "hasFraction": false, "options": ["A) 14", "B) 17", "C) 22", "D) 5"], "correct": 1, "explain": "22 - 5 = 17."},
        {"id": "vg_sta_5", "type": "Practice: Data Analysis", "textBefore": "Range of dataset: 100, 50, 20, 80", "hasFraction": false,"options": ["A) 50", "B)60", "C)80", "D)100"], "correct":2,"explain":"100-20=80."}
    ],
    "math-prob-cards": [
        {"id": "vg_prb_1", "type": "Practice: Probability", "textBefore": "Total items = 5. Favorables = 1. Probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "5"}, "textAfter": "", "options": ["A) 1/5", "B) 2/5", "C) 3/5", "D) 4/5"], "correct": 0, "explain": "1 out of 5 is 1/5."},
        {"id": "vg_prb_2", "type": "Practice: Probability", "textBefore": "Total items = 6. Favorables = 2. Reduced probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "3"}, "textAfter": "", "options": ["A) 1/6", "B) 1/3", "C) 1/2", "D) 2/3"], "correct": 1, "explain": "2/6 reduces to 1/3."},
        {"id": "vg_prb_3", "type": "Practice: Probability", "textBefore": "Total items = 8. Favorables = 2. Reduced probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "4"}, "textAfter": "", "options": ["A) 1/8", "B) 1/4", "C) 1/2", "D) 3/4"], "correct": 1, "explain": "2/8 reduces to 1/4."},
        {"id": "vg_prb_4", "type": "Practice: Probability", "textBefore": "Total items = 10. Favorables = 4. Reduced probability?", "hasFraction": true, "fracData": {"top": "2", "bottom": "5"}, "textAfter": "", "options": ["A) 1/5", "B) 2/5", "C) 3/5", "D) 4/10"], "correct": 1, "explain": "4/10 reduces to 2/5."},
        {"id": "vg_prb_5", "type": "Practice: Probability", "textBefore": "Total items = 12. Favorables = 2. Reduced probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "6"}, "textAfter": "", "options": ["A) 1/12", "B) 1/6", "C) 1/2", "D) 5/6"], "correct": 1, "explain": "2/12 reduces to 1/6."}
    ],
    "math-word-money": [
        {"id": "vg_wrd_1", "type": "Practice: Word Problems", "textBefore": "Buy 3 items for $5 each. Pay with $20. Change?", "hasFraction": false, "options": ["A) $5", "B) $10", "C) $15", "D) $2"], "correct": 0, "explain": "$20 - (3 * $5) = $5."},
        {"id": "vg_wrd_2", "type": "Practice: Word Problems", "textBefore": "Buy 2 items for $8 each. Pay with $20. Change?", "hasFraction": false, "options": ["A) $2", "B) $4", "C) $16", "D) $6"], "correct": 1, "explain": "$20 - (2 * $8) = $4."},
        {"id": "vg_wrd_3", "type": "Practice: Word Problems", "textBefore": "Buy 4 items for $10 each. Pay with $50. Change?", "hasFraction": false, "options": ["A) $10", "B) $40", "C) $5", "D) $20"], "correct": 0, "explain": "$50 - (4 * $10) = $10."},
        {"id": "vg_wrd_4", "type": "Practice: Word Problems", "textBefore": "Buy 5 items for $3 each. Pay with $20. Change?", "hasFraction": false, "options": ["A) $3", "B) $5", "C) $15", "D) $10"], "correct": 1, "explain": "$20 - (5 * $3) = $5."},
        {"id": "vg_wrd_5", "type": "Practice: Word Problems", "textBefore": "Buy 1 item for $15 each. Pay with $50. Change?", "hasFraction": false, "options": ["A) $35", "B) $25", "C) $15", "D) $45"], "correct": 0, "explain": "$50 - $15 = $35."}
    ],
    "math-seq-addition": [
        {"id": "vg_sq_1", "type": "Practice: Sequences", "textBefore": "Next item: 2, 4, 6, 8, ___", "hasFraction": false, "options": ["A) 9", "B) 10", "C) 11", "D) 12"], "correct": 1, "explain": "Pattern adds 2. 8 + 2 = 10."},
        {"id": "vg_sq_2", "type": "Practice: Sequences", "textBefore": "Next item: 5, 10, 15, 20, ___", "hasFraction": false, "options": ["A) 22", "B) 24", "C) 25", "D) 30"], "correct": 2, "explain": "Pattern adds 5. 20 + 5 = 25."},
        {"id": "vg_sq_3", "type": "Practice: Sequences", "textBefore": "Next item: 10, 20, 30, 40, ___", "hasFraction": false, "options": ["A) 45", "B) 50", "C) 60", "D) 55"], "correct": 1, "explain": "Pattern adds 10. 40 + 10 = 50."},
        {"id": "vg_sq_4", "type": "Practice: Sequences", "textBefore": "Next item: 1, 4, 7, 10, ___", "hasFraction": false, "options": ["A) 11", "B) 12", "C) 13", "D) 14"], "correct": 2, "explain": "Pattern adds 3. 10 + 3 = 13."},
        {"id": "vg_sq_5", "type": "Practice: Sequences", "textBefore": "Next item: 3, 7, 11, 15, ___", "hasFraction": false, "options": ["A) 17", "B) 18", "C) 19", "D) 20"], "correct": 2, "explain": "Pattern adds 4. 15 + 4 = 19."}
    ],
    "verb-syn-nouns-basic": [
        {"id": "vg_sv_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: HOME", "hasFraction": false, "options": ["A) Office", "B) Dwelling", "C) Store", "D) Street"], "correct": 1, "explain": "Home means dwelling."},
        {"id": "vg_sv_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: HOUSE", "hasFraction": false, "options": ["A) Cabin", "B) Dwelling", "C) Hotel", "D) Safe"], "correct": 1, "explain": "House means dwelling."},
        {"id": "vg_sv_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: HABITAT", "hasFraction": false, "options": ["A) Cage", "B) Dwelling / Environment", "C) Outer space", "D) Lab"], "correct": 1, "explain": "Habitat is a natural dwelling place."},
        {"id": "vg_sv_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: QUARTERS", "hasFraction": false, "options": ["A) Money", "B) Dwelling / Rooms", "C) Games", "D) Halves"], "correct": 1, "explain": "Quarters means living rooms or dwelling."},
        {"id": "vg_sv_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: ABODE", "hasFraction": false, "options": ["A) Road", "B) Dwelling", "C) Bridge", "D) Castle"], "correct": 1, "explain": "Abode means dwelling."}
    ],
    "verb-syn-modifiers": [
        {"id": "vg_sm_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: GREEN (flora)", "hasFraction": false, "options": ["A) Yellow", "B) Lush / Verdant", "C) Arid", "D) Blue"], "correct": 1, "explain": "Green fields are lush or verdant."},
        {"id": "vg_sm_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: OVERGROWN", "hasFraction": false, "options": ["A) Sparse", "B) Lush", "C) Dead", "D) Clean"], "correct": 1, "explain": "Overgrown flora can be described as lush."},
        {"id": "vg_sm_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: VERDANT", "hasFraction": false, "options": ["A) Dry", "B) Lush / Green", "C) Rocky", "D) Cold"], "correct": 1, "explain": "Verdant means green with grass, or lush."},
        {"id": "vg_sm_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: LUXURIANT", "hasFraction": false, "options": ["A) Expensive", "B) Lush / Rich growth", "C) Tiny", "D) Weak"], "correct": 1, "explain": "Luxuriant vegetation implies lush, rich growth."},
        {"id": "vg_sm_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: TEEMING (plant life)", "hasFraction": false, "options": ["A) Empty", "B) Lush / Full", "C) Quiet", "D) Dark"], "correct": 1, "explain": "Teeming plant life matches rich, lush conditions."}
    ],
    "verb-ana-function": [
        {"id": "vg_af_1", "type": "Practice: Analogies", "textBefore": "KNIFE : CUT :: _________ : _________", "hasFraction": false, "options": ["A) Pen : Write", "B) Spoon : Eat", "C) Axe : Drop", "D) Saw : Chop"], "correct": 0, "explain": "Knife functions to cut; pen functions to write."},
        {"id": "vg_af_2", "type": "Practice: Analogies", "textBefore": "HAMMER : STRIKE :: _________ : _________", "hasFraction": false, "options": ["A) Nail : Hold", "B) Screwdriver : Twist", "C) Ruler : Measure", "D) Level : Flat"], "correct": 1, "explain": "Hammer strikes; screwdriver twists."},
        {"id": "vg_af_3", "type": "Practice: Analogies", "textBefore": "KEY : LOCK :: _________ : _________", "hasFraction": false, "options": ["A) Door : Close", "B) Switch : Light", "C) Code : Secure", "D) Bolt : Turn"], "correct": 1, "explain": "Key runs a lock; switch runs a light."},
        {"id": "vg_af_4", "type": "Practice: Analogies", "textBefore": "BROOM : SWEEP :: _________ : _________", "hasFraction": false, "options": ["A) Dustpan : Catch", "B) Mop : Wash", "C) Shovel : Dig", "D) Rake : Clean"], "correct": 2, "explain": "Broom sweeps; shovel digs."},
        {"id": "vg_af_5", "type": "Practice: Analogies", "textBefore": "SHIELD : PROTECT :: _________ : _________", "hasFraction": false, "options": ["A) Sword : Fight", "B) Helmet : Defend", "C) Anchor : Hold", "D) Sail : Move"], "correct": 2, "explain": "Shield protects; anchor holds."}
    ],
    "verb-ana-workplace": [
        {"id": "vg_aw_1", "type": "Practice: Analogies", "textBefore": "TEACHER : SCHOOL :: _________ : _________", "hasFraction": false, "options": ["A) Student : Class", "B) Chef : Kitchen", "C) Book : Desk", "D) Paper : Pen"], "correct": 1, "explain": "Teacher works in a school; chef works in a kitchen."},
        {"id": "vg_aw_2", "type": "Practice: Analogies", "textBefore": "DOCTOR : HOSPITAL :: _________ : _________", "hasFraction": false, "options": ["A) Nurse : Bed", "B) Scientist : Lab", "C) Medicine : Patient", "D) Desk : Chair"], "correct": 1, "explain": "Doctor works in a hospital; scientist works in a lab."},
        {"id": "vg_aw_3", "type": "Practice: Analogies", "textBefore": "ACTOR : THEATER :: _________ : _________", "hasFraction": false, "options": ["A) Script : Stage", "B) Musician : Concert hall", "C) Movie : Screen", "D) Singer : Mic"], "correct": 1, "explain": "Actor performs in a theater; musician in a concert hall."},
        {"id": "vg_aw_4", "type": "Practice: Analogies", "textBefore": "ARTIST : STUDIO :: _________ : _________", "hasFraction": false, "options": ["A) Paint : Canvas", "B) Lawyer : Courtroom", "C) Judge : Gavel", "D) Desk : Office"], "correct": 1, "explain": "Artist works in a studio; lawyer in a courtroom."},
        {"id": "vg_aw_5", "type": "Practice: Analogies", "textBefore": "ASTRONAUT : SPACE :: _________ : _________", "hasFraction": false, "options": ["A) Rocket : Moon", "B) Diver : Ocean", "C) Fish : Water", "D) Star : Sky"], "correct": 1, "explain": "Astronaut explores space; diver explores the ocean."}
    ],
    "verb-ana-synonyms": [
        {"id": "vg_as_1", "type": "Practice: Analogies", "textBefore": "FAST : QUICK :: _________ : _________", "hasFraction": false, "options": ["A) Slow : Rapid", "B) Smart : Clever", "C) High : Low", "D) Big : Small"], "correct": 1, "explain": "Fast and quick are synonyms; smart and clever are synonyms."},
        {"id": "vg_as_2", "type": "Practice: Analogies", "textBefore": "START : BEGIN :: _________ : _________", "hasFraction": false, "options": ["A) Stop : Halt", "B) Open : Close", "C) Run : Jump", "D) Create : Break"], "correct": 0, "explain": "Start and begin are synonyms; stop and halt are synonyms."},
        {"id": "vg_as_3", "type": "Practice: Analogies", "textBefore": "SCARED : FRIGHTENED :: _________ : _________", "hasFraction": false, "options": ["A) Brave : Bold", "B) Angry : Calm", "C) Happy : Cry", "D) Safe : Risk"], "correct": 0, "explain": "Scared and frightened are synonyms; brave and bold are synonyms."},
        {"id": "vg_as_4", "type": "Practice: Analogies", "textBefore": "QUIET : SILENT :: _________ : _________", "hasFraction": false, "options": ["A) Loud : Noisy", "B) Sound : Clear", "C) Talk : Listen", "D) Voice : Sing"], "correct": 0, "explain": "Quiet and silent are synonyms; loud and noisy are synonyms."},
        {"id": "vg_as_5", "type": "Practice: Analogies", "textBefore": "WEALTHY : RICH :: _________ : _________", "hasFraction": false, "options": ["A) Poor : Indigent", "B) Money : Bank", "C) Cash : Gold", "D) Buy : Sell"], "correct": 0, "explain": "Wealthy and rich are synonyms; poor and indigent are synonyms."}
    ],
    "verb-syn-verbs-basic": [
        {"id": "vg_vb_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: GRASP (mental)", "hasFraction": false, "options": ["A) Lose", "B) Understand", "C) Throw", "D) Write"], "correct": 1, "explain": "To grasp a point means to understand it."},
        {"id": "vg_vb_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: FATHOM", "hasFraction": false, "options": ["A) Measure", "B) Understand", "C) Deep", "D) Miss"], "correct": 1, "explain": "To fathom a riddle means to understand it."},
        {"id": "vg_vb_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: RECOGNIZE", "hasFraction": false, "options": ["A) Forget", "B) Understand / Identify", "C) Draw", "D) Call"], "correct": 1, "explain": "To recognize is to identify or understand context."},
        {"id": "vg_vb_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: APPREHEND (concept)", "hasFraction": false, "options": ["A) Catch", "B) Understand", "C) Fear", "D) Drop"], "correct": 1, "explain": "Apprehending a concept means understanding it."},
        {"id": "vg_vb_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: DISCERN", "hasFraction": false, "options": ["A) Blind", "B) Understand / See clearly", "C) Mix up", "D) Lose"], "correct": 1, "explain": "To discern is to see clearly or understand."}
    ],
    "verb-ana-category": [
        {"id": "vg_ac_1", "type": "Practice: Analogies", "textBefore": "OAK : TREE :: _________ : _________", "hasFraction": false, "options": ["A) Rose : Flower", "B) Leaf : Branch", "C) Pine : Cone", "D) Root : Dirt"], "correct": 0, "explain": "Oak is a tree type; rose is a flower type."},
        {"id": "vg_ac_2", "type": "Practice: Analogies", "textBefore": "SPARROW : BIRD :: _________ : _________", "hasFraction": false, "options": ["A) Trout : Fish", "B) Wing : Feather", "C) Lake : River", "D) Sky : Cloud"], "correct": 0, "explain": "Sparrow is a bird; trout is a fish."},
        {"id": "vg_ac_3", "type": "Practice: Analogies", "textBefore": "APPLE : FRUIT :: _________ : _________", "hasFraction": false, "options": ["A) Carrot : Vegetable", "B) Seed : Core", "C) Juice : Sweet", "D) Banana : Peel"], "correct": 0, "explain": "Apple is a fruit; carrot is a vegetable."},
        {"id": "vg_ac_4", "type": "Practice: Analogies", "textBefore": "ANT : INSECT :: _________ : _________", "hasFraction": false, "options": ["A) Spider : Bug", "B) Frog : Amphibian", "C) Toad : Swamp", "D) Fly : Wing"], "correct": 1, "explain": "Ant is an insect; frog is an amphibian."},
        {"id": "vg_ac_5", "type": "Practice: Analogies", "textBefore": "HONDA : CAR :: _________ : _________", "hasFraction": false, "options": ["A) Tire : Rim", "B) Boeing : Plane", "C) Engine : Fuel", "D) Track : Train"], "correct": 1, "explain": "Honda is a car brand; Boeing is a plane maker."}
    ],
    "read-grass-main": [
        {"id": "vg_rm_1", "type": "Practice: Main Idea", "textBefore": "Passage: Grass roots hold the soil down securely. When heavy rain hits, the anchored soil layers don't wash down streams.<br><br>Question: Main thesis?", "hasFraction": false, "options": ["A) Rains fill streams.", "B) Grass roots hold soil down securely against rain erosion.", "C) Stalks grow high.", "D) Mud is messy."], "correct": 1, "explain": "The focus is roots protecting soil layers from rain wash."},
        {"id": "vg_rm_2", "type": "Practice: Main Idea", "textBefore": "Passage: Flat prairie plains receive less than 20 inches of rainfall per year, making it impossible for large tree species to develop forests.<br><br>Question: Main theme?", "hasFraction": false, "options": ["A) Rainfall limits tree growth on prairies.", "B) Forests are dark.", "C) Prairies are flat.", "D) Rivers are wide."], "correct": 0, "explain": "Low rainfall prevents tree forest groups from forming."},
        {"id": "vg_rm_3", "type": "Practice: Main Idea", "textBefore": "Passage: Burrowing owls do not dig their own holes; they move into abandoned tunnels left behind by prairie dogs.<br><br>Question: Main point?", "hasFraction": false, "options": ["A) Prairie dogs are fast.", "B) Tunnels are cold.", "C) Burrowing owls live in abandoned prairie dog holes.", "D) Owls fly high."], "correct": 2, "explain": "The passage details the housing dependency of the owls."},
        {"id": "vg_rm_4", "type": "Practice: Main Idea", "textBefore": "Passage: Wild wheat grasses dominate the central plains because they can survive winter freezes that kill off soft tropical flora.<br><br>Question: Main idea?", "hasFraction": false, "options": ["A) Freezes happen.", "B) Central wheat grass survives winter freezes that kill tropical plants.", "C) Tropical plants are bright.", "D) Farms grow grain."], "correct": 1, "explain": "Focuses on the cold resistance advantage of wheat grasses."},
        {"id": "vg_rm_5", "type": "Practice: Main Idea", "textBefore": "Passage: Cheetahs rely on the tall camouflage shield of golden savanna grass to creep within striking distance of gazelles.<br><br>Question: Core theme?", "hasFraction": false, "options": ["A) Gazelles run fast.", "B) Savanna grass helps cheetahs camouflage while hunting.", "C) Golden is a pretty color.", "D) Savannas have trees."], "correct": 1, "explain": "Details how grass length helps predators catch prey."}
    ],
    "read-grass-detail": [
        {"id": "vg_rd_1", "type": "Practice: Details", "textBefore": "Passage: A single grass patch can sprout 50 seeds per week.", "hasFraction": false, "options": ["A) 10 seeds", "B) 30 seeds", "C) 50 seeds", "D) 70 seeds"], "correct": 2, "explain": "Explicitly states 50 seeds."},
        {"id": "vg_rd_2", "type": "Practice: Details", "textBefore": "Passage: Meadow mice construct nests that sit 2 inches underground.", "hasFraction": false, "options": ["A) 1 inch", "B) 2 inches", "C) 5 inches", "D) 10 inches"], "correct": 1, "explain": "Explicitly reads 2 inches underground."},
        {"id": "vg_rd_3", "type": "Practice: Details", "textBefore": "Passage: Prairie wild sunflowers bloom for exactly 4 weeks in July.", "hasFraction": false, "options": ["A) 2 weeks", "B) 4 weeks", "C) 6 weeks", "D) 8 weeks"], "correct": 1, "explain": "Explicitly says 4 weeks."},
        {"id": "vg_rd_4", "type": "Practice: Details", "textBefore": "Passage: Savannah grass fires can travel at a rate of 10 miles per hour.", "hasFraction": false, "options": ["A) 5 mph", "B) 10 mph", "C) 15 mph", "D) 20 mph"], "correct": 1, "explain": "Explicitly hits 10 mph."},
        {"id": "vg_rd_5", "type": "Practice: Details", "textBefore": "Passage: A badger burrow system can extend across a span of 30 feet.", "hasFraction": false, "options": ["A) 10 feet", "B) 20 feet", "C) 30 feet", "D) 40 feet"], "correct": 2, "explain": "Text explicitly isolates 30 feet."}
    ],
    "read-grass-inference": [
        {"id": "vg_ri_1", "type": "Practice: Inference", "textBefore": "Passage: When cattle herds are packed onto a single field for too long, the grass blades turn to dust and the topsoil blows away.", "hasFraction": false, "options": ["A) Cattle help grass grow.", "B) Overgrazing cattle fields causes severe soil erosion structures.", "C) Dust is good for grass.", "D) Fields are always green."], "correct": 1, "explain": "Leaving cattle out too long turns grass to dust and soil blows away, implying erosion values."},
        {"id": "vg_ri_2", "type": "Practice: Inference", "textBefore": "Passage: In fields where all wild snakes are removed by traps, the local rodent numbers increase until they chew up all crops.", "hasFraction": false, "options": ["A) Snakes protect crops by hunting rodents.", "B) Rodents like traps.", "C) Crops grow better without snakes.", "D) Fields stay empty."], "correct": 0, "explain": "Since rodent numbers surge and eat crops when snakes leave, snakes were protecting crops by hunting rodents."},
        {"id": "vg_ri_3", "type": "Practice: Inference", "textBefore": "Passage: Prairie wildflowers close up their petal layers completely whenever solar ray intensity values drop at twilight.", "hasFraction": false, "options": ["A) Wildflowers open at night.", "B) Wildflowers react to shifts in daylight levels.", "C) Twilight is cold.", "D) Flowers never move."], "correct": 1, "explain": "Closing petals when light drops means they respond directly to changes in light level."},
        {"id": "vg_ri_4", "type": "Practice: Inference", "textBefore": "Passage: Hawks circle high over fields that have just been mowed short by farming outfits, diving down regularly onto bare ground paths.", "hasFraction": false, "options": ["A) Mowing makes it easier for hawks to spot small ground prey.", "B) Hawks dislike long grass blades.", "C) Farmers feed the birds.", "D) Hawks nest on mowed plains."], "correct": 0, "explain": "Short grass gives no shelter, allowing high-flying hawks to catch prey easily."},
        {"id": "vg_ri_5", "type": "Practice: Inference", "textBefore": "Passage: Soft-leaved tropical vine plants freeze solid and turn black during the first autumn night frost on the northern plains.", "hasFraction": false, "options": ["A) Northern plains are always hot.", "B) Soft tropical flora lacks defense adaptations against freezing temperatures.", "C) Vines survive winter well.", "D) Frost happens in summer."], "correct": 1, "explain": "Turning black and freezing shows they cannot handle cold temperatures."}
    ],
    "read-grass-vocab": [
        {"id": "vg_rc_1", "type": "Practice: Vocab Context", "textBefore": "Passage: The river was ephemeral, drying into sandy tracks by mid-July.", "hasFraction": false, "options": ["A) Permanent", "B) Temporary / Short-lived", "C) Deep", "D) Frozen"], "correct": 1, "explain": "Drying up by July means it was temporary or short-lived."},
        {"id": "vg_rc_2", "type": "Practice: Vocab Context", "textBefore": "Passage: The grass field was resilient, bouncing back green weeks after the fire.", "hasFraction: false": false, "options": ["A) Weak", "B) Strong / Quick to recover", "C) Dead", "D) Dry"], "correct": 1, "explain": "Bouncing back green after a fire proves it was quick to recover or resilient."},
        {"id": "vg_rc_3", "type": "Practice: Vocab Context", "textBefore": "Passage: The hawk had keen vision, spotting a tiny mouse from a mile high.", "hasFraction": false, "options": ["A) Poor", "B) Sharp / Sharp-sighted", "C) Blind", "D) Night"], "correct": 1, "explain": "Spotting a mouse from a mile high requires exceptionally sharp sight."},
        {"id": "vg_rc_4", "type": "Practice: Vocab Context", "textBefore": "Passage: The plains expanded in a vast horizontal line, stretching out as far as the eye could see.", "hasFraction": false, "options": ["A) Small", "B) Immense / Large-scale", "C) Blocked", "D) High"], "correct": 1, "explain": "Stretching out further than the eye can see means it was immense or large-scale."},
        {"id": "vg_rc_5", "type": "Practice: Vocab Context", "textBefore": "Passage: The coyote was stealthy, slipping through brush paths without making a single rustle.", "hasFraction": false, "options": ["A) Loud", "B) Silent / Sneaky", "C) Slow", "D) Heavy"], "correct": 1, "explain": "Moving through brush paths without making a sound means being sneaky or silent."}
    ],
    "read-grass-tone": [
        {"id": "vg_rt_1", "type": "Practice: Tone", "textBefore": "Passage: Watching the sunset across the wild grasslands fills one with an unforgettable, tranquil peace.", "hasFraction": false, "options": ["A) Mad", "B) Peaceful / Serene", "C) Sarcastic", "D) Technical"], "correct": 1, "explain": "The text uses peaceful and serene imagery."},
        {"id": "vg_rt_2", "type": "Practice: Tone", "textBefore": "Passage: Hunters illegally trapping the endangered prairie ferrets should face severe fine structures and jail frames.", "hasFraction": false, "options": ["A) Happy", "B) Indignant / Angry", "C) Indifferent", "D) Joyful"], "correct": 1, "explain": "Demanding jail and severe fines for illegal hunting shows an angry, indignant tone."},
        {"id": "vg_rt_3", "type": "Practice: Tone", "textBefore": "Passage: The local grass field measures 40 acres wide and contains 4 distinct soil types.", "hasFraction": false, "options": ["A) Emotional", "B) Objective / Factual", "C) Sarcastic", "D) Artistic"], "correct": 1, "explain": "The statement lists plain geographical measurements, making it objective and factual."},
        {"id": "vg_rt_4", "type": "Practice: Tone", "textBefore": "Passage: Great, another developer wants to build a giant concrete mall over our last wild prairie preserve. Wonderful idea.", "hasFraction": false, "options": ["A) Excited", "B) Sarcastic / Critical", "C) Scientific", "D) Proud"], "correct": 1, "explain": "Calling the destruction of a nature preserve a 'wonderful idea' is heavily sarcastic."},
        {"id": "vg_rt_5", "type": "Practice: Tone", "textBefore": "Passage: It is a stunning joy to welcome the return of green wildflowers after a long, dark winter.", "hasFraction": false, "options": ["A) Gloomy", "B) Joyful / Celebratory", "C) Bored", "D) Cold"], "correct": 1, "explain": "Using words like 'stunning joy' sets a clear joyful, celebratory tone."}
    ],
    "read-grass-purpose": [
        {"id": "vg_rp_1", "type": "Practice: Purpose", "textBefore": "Passage: Badgers are powerful diggers. For example, they can clear a 10-foot sand block cave tunnel within minutes to capture gophers.", "hasFraction": false, "options": ["A) Sell gear", "B) Illustrate badgers' digging strength with an example", "C) Describe gopher speed", "D) Encourage sand clearing"], "correct": 1, "explain": "The tunnel stat functions as a specific example to support the point that badgers are powerful diggers."},
        {"id": "vg_rp_2", "type": "Practice: Purpose", "textBefore": "Passage: Wild grass fields trap vast quantities of global carbon within their deep underground root systems, working alongside rainforests to reduce atmosphere metrics.", "hasFraction": false, "options": ["A) Explain grass field carbon storage functions", "B) List timber values", "C) Teach farming steps", "D) Sell solar panels"], "correct": 0, "explain": "The paragraph explains the ecological carbon storage benefits of grass root networks."},
        {"id": "vg_rp_3", "type": "Practice: Purpose", "textBefore": "Passage: Prairie dogs keep alert watch guards on high dirt mounts. When hawks appear, guards bark to signal the community to dive underground safely.", "hasFraction": false, "options": ["A) Explain prairie dog colony watch warning systems", "B) Study hawk feathers", "C) Describe mount heights", "D) Complain about noise"], "correct": 0, "explain": "The text clarifies how watch guards warn the colony about predators."},
        {"id": "vg_rp_4", "type": "Practice: Purpose", "textBefore": "Passage: Overgrazing a pasture completely strips the ground surface, allowing rain to run off in mud sheets instead of soaking into aquifers.", "hasFraction": false, "options": ["A) Encourage farming expansions", "B) Warn about the environmental damage of overgrazing a pasture", "C) Describe aquifer depths", "D) Recommend mud play"], "correct": 1, "explain": "The passage highlights the risks of stripping pastures to warn against overgrazing fields."},
        {"id": "vg_rp_5", "type": "Practice: Purpose", "textBefore": "Passage: Standard lawn turf grasses require human watering networks to survive summer heat. Native prairie wheatgrass, however, features long roots that tap deep moisture layers naturally.", "hasFraction": false, "options": ["A) Contrast lawn turf with hardy native prairie wheatgrass roots", "B) Teach lawn mowing steps", "C) Describe sprinkler setups", "D) Recommend buying turf rolls"], "correct": 0, "explain": "The comparison highlights the superior root systems of native prairie wheatgrass over standard lawn turf."}
    ],
    "marsh-math-percent": [
        {"id": "vm_pct_1", "type": "Practice: Percents", "textBefore": "What is 20% of 50?", "hasFraction": false, "options": ["A) 5", "B) 10", "C) 15", "D) 20"], "correct": 1, "explain": "0.20 * 50 = 10."},
        {"id": "vm_pct_2", "type": "Practice: Percents", "textBefore": "What is 40% of 80?", "hasFraction": false, "options": ["A) 16", "B) 24", "C) 32", "D) 40"], "correct": 2, "explain": "0.40 * 80 = 32."},
        {"id": "vm_pct_3", "type": "Practice: Percents", "textBefore": "What is 10% of 120?", "hasFraction": false, "options": ["A) 6", "B) 12", "C) 18", "D) 24"], "correct": 1, "explain": "0.10 * 120 = 12."},
        {"id": "vm_pct_4", "type": "Practice: Percents", "textBefore": "What is 75% of 40?", "hasFraction": false, "options": ["A) 20", "B) 25", "C) 30", "D) 35"], "correct": 2, "explain": "0.75 * 40 = 30."},
        {"id": "vm_pct_5", "type": "Practice: Percents", "textBefore": "What is 50% of 90?", "hasFraction": false, "options": ["A) 35", "B) 40", "C) 45", "D) 50"], "correct": 2, "explain": "0.50 * 90 = 45."}
    ],
    "marsh-math-algebra": [
        {"id": "vm_alg_1", "type": "Practice: Algebra", "textBefore": "Solve for x: 2x + 10 = 20", "hasFraction": false, "options": ["A) 3", "B) 5", "C) 7", "D) 10"], "correct": 1, "explain": "2x = 10 -> x = 5."},
        {"id": "vm_alg_2", "type": "Practice: Algebra", "textBefore": "Solve for y: 3y - 5 = 10", "hasFraction": false, "options": ["A) 3", "B) 4", "C) 5", "D) 6"], "correct": 2, "explain": "3y = 15 -> y = 5."},
        {"id": "vm_alg_3", "type": "Practice: Algebra", "textBefore": "Solve for a: 4a + 2 = 14", "hasFraction": false, "options": ["A) 2", "B) 3", "C) 4", "D) 5"], "correct": 1, "explain": "4a = 12 -> a = 3."},
        {"id": "vm_alg_4", "type": "Practice: Algebra", "textBefore": "Solve for c: 5c - 8 = 22", "hasFraction": false, "options": ["A) 4", "B) 5", "C) 6", "D) 7"], "correct": 2, "explain": "5c = 30 -> c = 6."},
        {"id": "vm_alg_5", "type": "Practice: Algebra", "textBefore": "Solve for h: 6h + 4 = 40", "hasFraction": false, "options": ["A) 4", "B) 5", "C) 6", "D) 7"], "correct": 2, "explain": "6h = 36 -> h = 6."}
    ],
    "marsh-math-slope": [
        {"id": "vm_slp_1", "type": "Practice: Slope", "textBefore": "Find the slope between points (1, 2) and (3, 8):", "hasFraction": false, "options": ["A) 2", "B) 3", "C) 4", "D) 5"], "correct": 1, "explain": "(8 - 2) / (3 - 1) = 6 / 2 = 3."},
        {"id": "vm_slp_2", "type": "Practice: Slope", "textBefore": "Find the slope between points (0, 0) and (2, 10):", "hasFraction": false, "options": ["A) 2", "B) 4", "C) 5", "D) 6"], "correct": 2, "explain": "(10 - 0) / (2 - 0) = 10 / 2 = 5."},
        {"id": "vm_slp_3", "type": "Practice: Slope", "textBefore": "Find the slope between points (2, 5) and (4, 13):", "hasFraction": false, "options": ["A) 3", "B) 4", "C) 5", "D) 6"], "correct": 1, "explain": "(13 - 5) / (4 - 2) = 8 / 2 = 4."},
        {"id": "vm_slp_4", "type": "Practice: Slope", "textBefore": "Find the slope between points (1, 1) and (4, 7):", "hasFraction": false, "options": ["A) 1", "B) 2", "C) 3", "D) 4"], "correct": 1, "explain": "(7 - 1) / (4 - 1) = 6 / 3 = 2."},
        {"id": "vm_slp_5", "type": "Practice: Slope", "textBefore": "Find the slope between points (3, 6) and (6, 15):", "hasFraction": false, "options": ["A) 2", "B) 3", "C) 4", "D) 5"], "correct": 1, "explain": "(15 - 6) / (6 - 3) = 9 / 3 = 3."}
    ],
    "marsh-math-median": [
        {"id": "vm_med_1", "type": "Practice: Median", "textBefore": "Median of data: 1, 5, 3", "hasFraction": false, "options": ["A) 1", "B) 3", "C) 5", "D) 4"], "correct": 1, "explain": "Ordered: 1, 3, 5. Middle is 3."},
        {"id": "vm_med_2", "type": "Practice: Median", "textBefore": "Median of data: 10, 40, 20, 50, 30", "hasFraction": false, "options": ["A) 20", "B) 30", "C) 40", "D) 25"], "correct": 1, "explain": "Ordered: 10, 20, 30, 40, 50. Middle is 30."},
        {"id": "vm_med_3", "type": "Practice: Median", "textBefore": "Median of data: 7, 2, 9, 12, 5", "hasFraction": false, "options": ["A) 5", "B) 7", "C) 9", "D) 6"], "correct": 1, "explain": "Ordered: 2, 5, 7, 9, 12. Middle is 7."},
        {"id": "vm_med_4", "type": "Practice: Median", "textBefore": "Median of data: 14, 6, 19, 2, 11", "hasFraction": false, "options": ["A) 6", "B) 11", "C) 14", "D) 12"], "correct": 1, "explain": "Ordered: 2, 6, 11, 14, 19. Middle is 11."},
        {"id": "vm_med_5", "type": "Practice: Median", "textBefore": "Median of data: 100, 5, 50, 25, 75", "hasFraction": false, "options": ["A) 25", "B) 50", "C) 75", "D) 60"], "correct": 1, "explain": "Ordered: 5, 25, 50, 75, 100. Middle is 50."}
    ],
    "marsh-math-prob-compound": [
        {"id": "vm_prc_1", "type": "Practice: Probability", "textBefore": "Probability of Event A = 1/2. Event B = 1/2. Compound probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "4"}, "textAfter": "", "options": ["A) 1/4", "B) 1/2", "C) 3/4", "D) 1"], "correct": 0, "explain": "1/2 * 1/2 = 1/4."},
        {"id": "vm_prc_2", "type": "Practice: Probability", "textBefore": "Probability of Event A = 1/3. Event B = 1/3. Compound probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "9"}, "textAfter": "", "options": ["A) 1/3", "B) 1/6", "C) 1/9", "D) 2/3"], "correct": 2, "explain": "1/3 * 1/3 = 1/9."},
        {"id": "vm_prc_3", "type": "Practice: Probability", "textBefore": "Probability of Event A = 1/2. Event B = 1/4. Compound probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "8"}, "textAfter": "", "options": ["A) 1/6", "B) 1/8", "C) 3/8", "D) 1/2"], "correct": 1, "explain": "1/2 * 1/4 = 1/8."},
        {"id": "vm_prc_4", "type": "Practice: Probability", "textBefore": "Probability of Event A = 1/5. Event B = 1/2. Compound probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "10"}, "textAfter": "", "options": ["A) 1/7", "B) 1/10", "C) 3/10", "D) 2/5"], "correct": 1, "explain": "1/5 * 1/2 = 1/10."},
        {"id": "vm_prc_5", "type": "Practice: Probability", "textBefore": "Probability of Event A = 1/4. Event B = 1/3. Compound probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "12"}, "textAfter": "", "options": ["A) 1/7", "B) 1/12", "C) 5/12", "D) 1/2"], "correct": 1, "explain": "1/4 * 1/3 = 1/12."}
    ],
    "marsh-math-rates": [
        {"id": "vm_wkr_1", "type": "Practice: Rates", "textBefore": "A device clears 10 gallons per minute. Time to clear 300 gallons?", "hasFraction": false, "options": ["A) 15 mins", "B) 20 mins", "C) 30 mins", "D) 40 mins"], "correct": 2, "explain": "300 / 10 = 30 minutes."},
        {"id": "vm_wkr_2", "type": "Practice: Rates", "textBefore": "A device clears 20 gallons per minute. Time to clear 1,200 gallons in hours?", "hasFraction": false, "options": ["A) 1 hour", "B) 2 hours", "C) 3 hours", "D) 4 hours"], "correct": 0, "explain": "1,200 / 20 = 60 minutes = 1 hour."},
        {"id": "vm_wkr_3", "type": "Practice: Rates", "textBefore": "A device clears 50 gallons per minute. Time to clear 3,000 gallons in hours?", "hasFraction": false, "options": ["A) 1 hour", "B) 1.5 hours", "C) 2 hours", "D) 2.5 hours"], "correct": 0, "explain": "3,000 / 50 = 60 minutes = 1 hour."},
        {"id": "vm_wkr_4", "type": "Practice: Rates", "textBefore": "A device clears 30 gallons per minute. Time to clear 1,800 gallons in hours?", "hasFraction": false, "options": ["A) 1 hour", "B) 2 hours", "C) 3 hours", "D) 4 hours"], "correct": 0, "explain": "1,800 / 30 = 60 minutes = 1 hour."},
        {"id": "vm_wkr_5", "type": "Practice: Rates", "textBefore": "A device clears 100 gallons per minute. Time to clear 6,000 gallons in hours?", "hasFraction": false, "options": ["A) 1 hour", "B) 2 hours", "C) 3 hours", "D) 4 hours"], "correct": 0, "explain": "6,000 / 100 = 60 minutes = 1 hour."}
    ],
    "marsh-math-logic": [
        {"id": "vm_log_1", "type": "Practice: Logic Series", "textBefore": "If A is taller than B, and B is taller than C, who is the shortest?", "hasFraction": false, "options": ["A) A", "B) B", "C) C", "D) Equal"], "correct": 2, "explain": "A > B > C, so C is shortest."},
        {"id": "vm_log_2", "type": "Practice: Logic Series", "textBefore": "Four cars line up. Blue is first. Red is next to Blue. Green is last. Position of Yellow?", "hasFraction": false, "options": ["A) First", "B) Second", "C) Third", "D) Last"], "correct": 2, "explain": "Blue (1st), Red (2nd), Yellow (3rd), Green (4th)."},
        {"id": "vm_log_3", "type": "Practice: Logic Series", "textBefore": "Tom is older than Sam. Sam is older than Tim. Who is the oldest?", "hasFraction": false, "options": ["A) Tom", "B) Sam", "C) Tim", "D) Equal"], "correct": 0, "explain": "Tom > Sam > Tim, so Tom is oldest."},
        {"id": "vm_log_4", "type": "Practice: Logic Series", "textBefore": "A box contains a fruit token. Apple is heavier than Pear. Pear is heavier than Lime. Lightest?", "hasFraction": false, "options": ["A) Apple", "B) Pear", "C) Lime", "D) Equal"], "correct": 2, "explain": "Apple > Pear > Lime, so Lime is lightest."},
        {"id": "vm_log_5", "type": "Practice: Logic Series", "textBefore": "Four friends sit inline. Jane is far right. Mary is far left. Todd sits next to Mary. Where sits Alex?", "hasFraction": false, "options": ["A) Far left", "B) Far right", "C) Second from left", "D) Third from left"], "correct": 3, "explain": "Mary (1st), Todd (2nd), Alex (3rd), Jane (4th)."}
    ],
    "marsh-verb-syn-noun": [
        {"id": "vm_syn_n1", "type": "Practice: Synonyms", "textBefore": "Synonym for: ASYLUM", "hasFraction": false, "options": ["A) School", "B) Refuge", "C) Prison", "D) Store"], "correct": 1, "explain": "Asylum means a place of safety or refuge."},
        {"id": "vm_syn_n2", "type": "Practice: Synonyms", "textBefore": "Synonym for: SHELTER", "hasFraction": false, "options": ["A) Office", "B) Refuge", "C) Field", "D) Plain"], "correct": 1, "explain": "Shelter serves as a refuge."},
        {"id": "vm_syn_n3", "type": "Practice: Synonyms", "textBefore": "Synonym for: HAVEN", "hasFraction": false, "options": ["A) Storm", "B) Refuge", "C) Valley", "D) Dock"], "correct": 1, "explain": "Haven means a safe harbor or refuge."},
        {"id": "vm_syn_n4", "type": "Practice: Synonyms", "textBefore": "Synonym for: HARBOR (noun)", "hasFraction": false, "options": ["A) Ship", "B) Refuge", "C) Sea", "D) Anchor"], "correct": 1, "explain": "Harbor acts as a safe haven or refuge."},
        {"id": "vm_syn_n5", "type": "Practice: Synonyms", "textBefore": "Synonym for: RETREAT (noun)", "hasFraction": false, "options": ["A) Advance", "B) Refuge", "C) Signal", "D) Ground"], "correct": 1, "explain": "A retreat is a quiet, safe place or refuge."}
    ],
    "marsh-verb-syn-verb": [
        {"id": "vm_syn_v1", "type": "Practice: Synonyms", "textBefore": "Synonym for: FUSE (verb)", "hasFraction": false, "options": ["A) Divide", "B) Blend", "C) Break", "D) Stop"], "correct": 1, "explain": "To fuse elements means to blend or combine them."},
        {"id": "vm_syn_v2", "type": "Practice: Synonyms", "textBefore": "Synonym for: AMALGAMATE", "hasFraction": false, "options": ["A) Scatter", "B) Blend / Unite", "C) Paint", "D) Melt"], "correct": 1, "explain": "Amalgamate means to blend or unite fields into a whole."},
        {"id": "vm_syn_v3", "type": "Practice: Synonyms", "textBefore": "Synonym for: COALESCE", "hasFraction": false, "options": ["A) Freeze", "B) Blend / Grow together", "C) Invert", "D) Dissolve"], "correct": 1, "explain": "Coalesce means to grow together or blend into a single mass."},
        {"id": "vm_syn_v4", "type": "Practice: Synonyms", "textBefore": "Synonym for: MINGLE", "hasFraction": false, "options": ["A) Isolate", "B) Blend / Mix", "C) Dance", "D) Sing"], "correct": 1, "explain": "Mingle means to mix or blend values."},
        {"id": "vm_syn_v5", "type": "Practice: Synonyms", "textBefore": "Synonym for: INTEGRATE", "hasFraction": false, "options": ["A) Remove", "B) Blend / Coordinate", "C) Count", "D) Divide"], "correct": 1, "explain": "Integrate means to combine parts into a whole; to blend."}
    ],
    "marsh-verb-ana-source": [
        {"id": "vm_vbs_1", "type": "Practice: Analogies", "textBefore": "ASH : FIRE :: _________ : _________", "hasFraction": false, "options": ["A) Smoke : Flame", "B) Ice : Cold", "C) Steam : Boiling water", "D) Fuel : Tank"], "correct": 2, "explain": "Ash is a byproduct sourced from fire; steam is sourced from boiling water."},
        {"id": "vm_vbs_2", "type": "Practice: Analogies", "textBefore": "SAP : TREE :: _________ : _________", "hasFraction": false, "options": ["A) Leaf : Plant", "B) Blood : Animal", "C) Water : River", "D) Rock : Soil"], "correct": 1, "explain": "Sap is an internal biological fluid product sourced from a tree; blood is from an animal."},
        {"id": "vm_vbs_3", "type": "Practice: Analogies", "textBefore": "OIL : SEED :: _________ : _________", "hasFraction": false, "options": ["A) Juice : Fruit", "B) Shell : Nut", "C) Leaf : Stem", "D) Root : Ground"], "correct": 0, "explain": "Oil is extracted or sourced from a seed; juice is extracted from fruit."},
        {"id": "vm_vbs_4", "type": "Practice: Analogies", "textBefore": "WINE : GRAPE :: _________ : _________", "hasFraction": false, "options": ["A) Cider : Apple", "B) Beer : Glass", "C) Milk : Cheese", "D) Bread : Wheat"], "correct": 0, "explain": "Wine is a fluid product sourced entirely from grapes; cider is from apples."},
        {"id": "vm_vbs_5", "type": "Practice: Analogies", "textBefore": "HONEY : BEE :: _________ : _________", "hasFraction": false, "options": ["A) Wax : Candle", "B) Milk : Cow", "C) Web : Spider", "D) Nest : Bird"], "correct": 1, "explain": "Honey is a food asset product sourced from a bee; milk is sourced from a cow."}
    ],
    "marsh-verb-ana-attribute": [
        {"id": "vm_vba_1", "type": "Practice: Analogies", "textBefore": "ICE : FREEZING :: _________ : _________", "hasFraction": false, "options": ["A) Fire : Hot", "B) Steam : White", "C) Water : Wet", "D) Rock : Hard"], "correct": 0, "explain": "Ice is fundamentally defined by being freezing; fire is fundamentally hot."},
        {"id": "vm_vba_2", "type": "Practice: Analogies", "textBefore": "SILK : SMOOTH :: _________ : _________", "hasFraction": false, "options": ["A) Cotton : White", "B) Burlap : Rough", "C) Wool : Heavy", "D) Iron : Gray"], "correct": 1, "explain": "Silk is inherently smooth; burlap is inherently rough."},
        {"id": "vm_vba_3", "type": "Practice: Analogies", "textBefore": "DESERT : ARID :: _________ : _________", "hasFraction": false, "options": ["A) Mountain : High", "B) Forest : Green", "C) Swamp : Waterlogged", "D) Plain : Flat"], "correct": 2, "explain": "A desert is defined by being dry/arid; a swamp is defined by being waterlogged."},
        {"id": "vm_vba_4", "type": "Practice: Analogies", "textBefore": "FEATHER : LIGHT :: _________ : _________", "hasFraction": false, "options": ["A) Lead : Heavy", "B) Stone : Gray", "C) Pillow : Soft", "D) Paper : Thin"], "correct": 0, "explain": "A feather is an archetypal item defined as light; lead is defined as heavy."},
        {"id": "vm_vba_5", "type": "Practice: Analogies", "textBefore": "MIRROR : REFLECTIVE :: _________ : _________", "hasFraction": false, "options": ["A) Lens : Clear", "B) Glass : Transparent", "C) Window : Open", "D) Prism : Colorful"], "correct": 1, "explain": "A mirror is defined as reflective; glass is fundamentally transparent."}
    ],
    "marsh-verb-ana-result": [
        {"id": "vm_vbr_1", "type": "Practice: Analogies", "textBefore": "MELT : LIQUID :: _________ : _________", "hasFraction": false, "options": ["A) Freeze : Solid", "B) Boil : Gas", "C) Burn : Ash", "D) Break : Pieces"], "correct": 0, "explain": "Melting results in a liquid state; freezing results in a solid state."},
        {"id": "vm_vbr_2", "type": "Practice: Analogies", "textBefore": "CONDENSE : FLUID :: _________ : _________", "hasFraction": false, "options": ["A) Evaporate : Vapor", "B) Dissolve : Solution", "C) Shatter : Shards", "D) Combine : Mix"], "correct": 0, "explain": "Condensation results in a fluid state; evaporation results in a vapor state."},
        {"id": "vm_vbr_3", "type": "Practice: Analogies", "textBefore": "EVAPORATE : DRY :: _________ : _________", "hasFraction": false, "options": ["A) Flood : Wet", "B) Freeze : Cold", "C) Heat : Warm", "D) Cool : Chilly"], "correct": 0, "explain": "Evaporation results in a dry state; flooding results in a wet state."},
        {"id": "vm_vbr_4", "type": "Practice: Analogies", "textBefore": "DECAY : ROTTEN :: _________ : _________", "hasFraction": false, "options": ["A) Grow : Tall", "B) Age : Old", "C) Rust : Coroded", "D) Fade : Dim"], "correct": 2, "explain": "Decay results in a rotten condition; rust results in a corroded condition."},
        {"id": "vm_vbr_5", "type": "Practice: Analogies", "textBefore": "COMPRESS : DENSE :: _________ : _________", "hasFraction": false, "options": ["A) Stretch : Thin", "B) Expand : Large", "C) Twist : Tight", "D) Flatten : Wide"], "correct": 0, "explain": "Compression results in a denser state; stretching results in a thinner state."}
    ],
    "marsh-verb-syn-complex": [
        {"id": "vm_syc_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: VAGUE", "hasFraction": false, "options": ["A) Clear", "B) Unclear / Obscure", "C) Sharp", "D) Direct"], "correct": 1, "explain": "Vague means uncertain or unclear."},
        {"id": "vm_syc_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: AMBIGUOUS", "hasFraction": false, "options": ["A) Definite", "B) Unclear / Obscure", "C) Loud", "D) Double"], "correct": 1, "explain": "Ambiguous statements are open to interpretation, making them unclear."},
        {"id": "vm_syc_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: EQUIVOCAL", "hasFraction": false, "options": ["A) Balanced", "B) Unclear / Obscure", "C) False", "D) Fair"], "correct": 1, "explain": "Equivocal values are ambiguous or unclear."},
        {"id": "vm_syc_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: CRYPTIC", "hasFraction": false, "options": ["A) Ancient", "B) Unclear / Obscure", "C) Safe", "D) Written"], "correct": 1, "explain": "Cryptic messages have hidden, unclear meanings."},
        {"id": "vm_syc_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: NEBULOUS", "hasFraction": false, "options": ["A) Bright", "B) Unclear / Obscure", "C) Round", "D) Starry"], "correct": 1, "explain": "Nebulous values lack distinct format limits, making them unclear."}
    ],
    "marsh-verb-ana-antonym": [
        {"id": "vm_vban_1", "type": "Practice: Analogies", "textBefore": "DARK : LIGHT :: _________ : _________", "hasFraction": false, "options": ["A) Dim : Pale", "B) Heavy : Light", "C) High : Low", "D) Cold : Hot"], "correct": 3, "explain": "Dark and light are direct antonyms; cold and hot are direct antonyms."},
        {"id": "vm_vban_2", "type": "Practice: Analogies", "textBefore": "STAGNANT : FLOWING :: _________ : _________", "hasFraction": false, "options": ["A) Still : Moving", "B) Frozen : Cold", "C) Dry : Arid", "D) Wide : Long"], "correct": 0, "explain": "Stagnant and flowing describe opposites of water velocity; still and moving describe general kinetic opposites."},
        {"id": "vm_vban_3", "type": "Practice: Analogies", "textBefore": "SHALLOW : DEEP :: _________ : _________", "hasFraction": false, "options": ["A) Narrow : Wide", "B) Tall : High", "C) Flat : Plain", "D) Small : Tiny"], "correct": 0, "explain": "Shallow/deep are vertical spatial opposites; narrow/wide are horizontal opposites."},
        {"id": "vm_vban_4", "type": "Practice: Analogies", "textBefore": "BARREN : FERTILE :: _________ : _________", "hasFraction": false, "options": ["A) Arid : Lush", "B) Empty : Vacant", "C) High : Steep", "D) Cold : Snowy"], "correct": 0, "explain": "Barren/fertile represent antonyms of growth capacity; arid/lush are direct environmental opposites."},
        {"id": "vm_vban_5", "type": "Practice: Analogies", "textBefore": "HAZARDOUS : SAFE :: _________ : _________", "hasFraction": false, "options": ["A) Perilous : Risky", "B) Difficult : Easy", "C) Hard : Solid", "D) Loud : Noisy"], "correct": 1, "explain": "Hazardous and safe are antonyms; difficult and easy are direct behavioral antonyms."}
    ],
    "marsh-read-main": [
        {"id": "vm_rmm_1", "type": "Practice: Main Idea", "textBefore": "Passage: Tidal wetlands sponge up surge water layers safely, slowing them down before they hit town grids.<br><br>Question: Primary claim?", "hasFraction": false, "options": ["A) Tides shift daily.", "B) Wetlands sponge up floodwater safely to protect town grids.", "C) Concrete walls are better.", "D) Water is heavy."], "correct": 1, "explain": "Focuses on the water absorption protective service of wetlands."},
        {"id": "vm_rmm_2", "type": "Practice: Main Idea", "textBefore": "Passage: Brackish marsh ecosystems contain unique mixtures of salt and fresh water, allowing specialised crustacean species to nurseries safely outside ocean reach.<br><br>Question: Main purpose?", "hasFraction": false, "options": ["A) Salt water is toxic.", "B) Brackish mixes create ideal safe nursery hubs for crustaceans.", "C) Oceans have waves.", "D) Crabs molt regularly."], "correct": 1, "explain": "Details how brackish conditions generate safe nurseries."},
        {"id": "vm_rmm_3", "type": "Practice: Main Idea", "textBefore": "Passage: Swamp irises possess thick hollow root tracks that draw oxygen directly from structural air pockets to feed cells underwater.<br><br>Question: Core focus?", "hasFraction": false, "options": ["A) Irises have pretty petals.", "B) Hollow roots allow swamp irises to secure oxygen underwater.", "C) Air is light.", "D) Waterlogged mud lacks gas fields."], "correct": 1, "explain": "Details the structural adaptation used by irises to survive underwater without drowning."},
        {"id": "vm_rmm_4", "type": "Practice: Main Idea", "textBefore": "Passage: Silt sediment drops rapidly out of water layers when river paths smash into tangled marsh reed beds, purifying baseline currents.<br><br>Question: Main point?", "hasFraction": false, "options": ["A) Rivers run fast.", "B) Reed beds purify currents by trapping dropping silt sediment.", "C) Sand settles first.", "D) Mud stains walls."], "correct": 1, "explain": "Outlines the water purification mechanism of marsh reeds."},
        {"id": "vm_rmm_5", "type": "Practice: Main Idea", "textBefore": "Passage: Local dragonflies act as alpha predators across marsh pools, keeping mosquito counts down by devouring hundreds of larvae daily.<br><br>Question: Primary focus?", "hasFraction": false, "options": ["A) Mosquitoes bite.", "B) Dragonflies control marsh mosquito populations by hunting larvae.", "C) Larvae swim slowly.", "D) Pools are stagnant."], "correct": 1, "explain": "Identifies the ecological pest control role of dragonflies."}
    ],
    "marsh-read-detail": [
        {"id": "vm_rdd_1", "type": "Practice: Details", "textBefore": "Passage: A single alligator nest requires 15 pounds of wet moss.", "hasFraction": false, "options": ["A) 5 lbs", "B) 10 lbs", "C) 15 lbs", "D) 20 lbs"], "correct": 2, "explain": "Explicitly reads 15 pounds."},
        {"id": "vm_rdd_2", "type": "Practice: Details", "textBefore": "Passage: Blue herons hunt across pooling paths that measure 1 foot deep.", "hasFraction": false, "options": ["A) 1 foot", "B) 2 feet", "C) 3 feet", "D) 4 feet"], "correct": 0, "explain": "Explicitly notes 1 foot deep."},
        {"id": "vm_rdd_3", "type": "Practice: Details", "textBefore": "Passage: Marsh peat beds grow at a slow pace of exactly 1 inch per century.", "hasFraction": false, "options": ["A) 1 inch", "B) 5 inches", "C) 10 inches", "D) 12 inches"], "correct": 0, "explain": "Explicitly reads 1 inch per century."},
        {"id": "vm_rdd_4", "type": "Practice: Details", "textBefore": "Passage: Swampland willow trees can absorb 40 gallons of water daily.", "hasFraction": false, "options": ["A) 10 gals", "B) 20 gals", "C) 40 gals", "D) 80 gals"], "correct": 2, "explain": "Explicitly states 40 gallons."},
        {"id": "vm_rdd_5", "type": "Practice: Details", "textBefore": "Passage: Local water salinity trackers register an index level of 12 units near the delta.", "hasFraction": false, "options": ["A) 4 units", "B) 8 units", "C) 12 units", "D) 16 units"], "correct": 2, "explain": "Explicitly numbers index at 12 units."}
    ],
    "marsh-read-inference": [
        {"id": "vm_rin_1", "type": "Practice: Inference", "textBefore": "Passage: When oil runoff films cover the surface layer of stagnant marsh pools, the native diving beetles vanish within days.", "hasFraction": false, "options": ["A) Beetles eat oil chemicals.", "B) Surface oil films block beetles from accessing vital air or escaping water boundaries.", "C) Oil helps beetles swim fast.", "D) Pools grow larger with runoff."], "correct": 1, "explain": "Diving beetles need clear surface boundaries to grab atmospheric air; an oil film prevents this, causing them to disappear."},
        {"id": "vm_rin_2", "type": "Practice: Inference", "textBefore": "Passage: Marshlands that lose all heron predators see a rapid explosion in crawfish counts until all underwater reed stalks are entirely stripped bare.", "hasFraction": false, "options": ["A) Herons eat crawfish to keep the aquatic plant balance stable.", "B) Crawfish hunt herons.", "C) Reeds grow better with crawfish clusters.", "D) Swamps stay empty without herons."], "correct": 0, "explain": "Herons control crawfish populations; without herons, crawfish run wild and destroy the plants, showing the predatory balance."},
        {"id": "vm_rin_3", "type": "Practice: Inference", "textBefore": "Passage: Swamp lilies fail to cultivate seeds if water transparency indices drop below half value due to continuous boat wake churning.", "hasFraction": false, "options": ["A) Lilies thrive in muddy water.", "B) Churning mud blocks the sunlight lilies require to photosynthesize and generate seeds.", "C) Boat wakes push seeds down.", "D) Lilies do not need light currents."], "correct": 1, "explain": "Dropped water clarity blocks sunlight, causing seed failure, which implies a reliance on solar radiation currents."},
        {"id": "vm_rin_4", "type": "Practice: Inference", "textBefore": "Passage: Swamp harpy owls hunt purely via sonic tracking, mapping out frog sound vectors across pitch black midnight canopy lines.", "hasFraction": false, "options": ["A) Owls see well in daylight.", "B) High night vision is not required for these owls to track prey audio footprints.", "C) Frogs avoid singing at night.", "D) Midnight canopies are bright."], "correct": 1, "explain": "Since they hunt using sonic tracking in pitch black conditions, physical sight is secondary to auditory location skills."},
        {"id": "vm_rin_5", "type": "Practice: Inference", "textBefore": "Passage: Soft moss beds that carpet marsh lines rot away completely if water parameters shift from acidic to basic ranges.", "hasFraction": false, "options": ["A) Moss loves basic water fields.", "B) Moss relies on precise acidic water thresholds to survive.", "C) Rotting moss cleans water lines.", "D) Water parameters never shift."], "correct": 1, "explain": "Rotting away when water shifts to basic proves the moss needs an acidic environment to survive."}
    ],
    "marsh-read-tone": [
        {"id": "vm_rto_1", "type": "Practice: Tone", "textBefore": "Passage: The silent swamp morning, painted with golden light filtering through gray moss drapes, was a masterpiece of absolute peace.", "hasFraction": false, "options": ["A) Angry", "B) Peaceful / Serene", "C) Humorous", "D) Cold"], "correct": 1, "explain": "The descriptive imagery sets a peaceful, serene tone."},
        {"id": "mr_rto_2", "type": "Practice: Tone", "textBefore": "Passage: Throwing plastic chemical barrels directly into our municipal wetlands is a disgusting crime that threatens human health and displays absolute moral failure.", "hasFraction": false, "options": ["A) Happy", "B) Indignant / Furious", "C) Objective", "D) Sarcastic"], "correct": 1, "explain": "Strong terms like 'disgusting crime' and 'moral failure' project an angry, indignant tone."},
        {"id": "mr_rto_3", "type": "Practice: Tone", "textBefore": "Passage: This coastal wetland array spans 15 miles and houses approximately 400 alligator profiles.", "hasFraction": false, "options": ["A) Emotional", "B) Objective / Descriptive", "C) Sarcastic", "D) Playful"], "correct": 1, "explain": "The passage states numeric measurements without bias, making it objective and descriptive."},
        {"id": "mr_rto_4", "type": "Practice: Tone", "textBefore": "Passage: Oh fantastic, another luxury condo plan that requires destroying a century-old swamp preserve. Just what our world needs: more concrete blocks.", "hasFraction": false, "options": ["A) Proud", "B) Sarcastic / Cynical", "C) Joyful", "D) Academic"], "correct": 1, "explain": "Calling a condo development over a nature preserve 'fantastic' is a sarcastic tone mask."},
        {"id": "mr_rto_5", "type": "Practice: Tone", "textBefore": "Passage: It is a stunning triumph for conservation that the rare marsh orchid was found blooming across the lower basin after decades of absence.", "hasFraction": false, "options": ["A) Depressed", "B) Celebratory / Joyful", "C) Neutral", "D) Scientific"], "correct": 1, "explain": "Phrases like 'stunning triumph' and 'blooming joy' express a celebratory, joyful tone."}
    ],
    "marsh-read-purpose": [
        {"id": "vm_rpu_1", "type": "Practice: Purpose", "textBefore": "Passage: Wetlands clean water lines. For example, a single acre of marsh reeds can strip out 5 pounds of heavy nitrate fertilizers within a week.", "hasFraction": false, "options": ["A) Sell plants", "B) Illustrate water cleaning capacity with a specific data example", "C) Describe fertilizer types", "D) Encourage farming expansions"], "correct": 1, "explain": "The nitrate data point functions explicitly as an example to back up the claim that wetlands clean water lines."},
        {"id": "vm_rpu_2", "type": "Practice: Purpose", "textBefore": "Passage: Mangrove stilt roots hold sediment lines steady, preventing heavy tropical storm waves from breaking down coastal borders.", "hasFraction": false, "options": ["A) Explain mangrove structural erosion defense services", "B) Sell boats", "C) Teach fishing skills", "D) Describe wave heights"], "correct": 0, "explain": "The passage details how mangrove roots prevent erosion to explain their protective ecological role."},
        {"id": "vm_rpu_3", "type": "Practice: Purpose", "textBefore": "Passage: Swamp bugs skin layers contain specialized oil barriers that block moisture evaporation, keeping them hydrated in hot swamp heat channels.", "hasFraction": false, "options": ["A) Explain insect hydration defense layers", "B) Study bug eyes", "C) Describe heat scales", "D) Sell oil packs"], "correct": 0, "explain": "The description highlights the function of the oil barrier to explain insect hydration defenses."},
        {"id": "vm_rpu_4", "type": "Practice: Purpose", "textBefore": "Passage: Constructing solid roads across a marsh splits the water current flow, turning one side into a stagnant pool and drying out the other.", "hasFraction": false, "options": ["A) Recommend road expansions", "B) Warn about the environmental damage of splitting wetland currents with roads", "C) Describe pool depths", "D) Promote trucking lines"], "correct": 1, "explain": "The text lists the negative changes caused by road building to warn against splitting marsh water flows."},
        {"id": "vm_rpu_5", "type": "Practice: Purpose", "textBefore": "Passage: Standard river valleys wash soil away rapidly. A waterlogged delta marsh, however, acts as a sediment trap, accumulating layer upon layer of new nutrient ground over time.", "hasFraction": false, "options": ["A) Contrast standard river erosion with delta marsh sediment accumulation", "B) Teach boat navigation paths", "C) Describe sand grain types", "D) Recommend farming delta mud"], "correct": 0, "explain": "The comparison highlights the sediment trapping advantage of delta marshes over eroding river valleys."}
    ],
    "marsh-read-vocab": [
        {"id": "vm_rcv_1", "type": "Practice: Vocab Context", "textBefore": "Passage: The marsh was brackish, tasting of salt currents near the ocean outlet.", "hasFraction": false, "options": ["A) Pure and sweet", "B) Slightly salty / Mixed", "C) Frozen", "D) Boiling"], "correct": 1, "explain": "Brackish water contains a mix of salt and fresh currents near ocean outlets."},
{
    id: "vm_rcv_2", 
    type: "Practice: Vocab Context", 
    textBefore: "Passage: The swamp soil was waterlogged, squelching underfoot and oozing dark mud over boot layers.", 
    hasFraction: false, 
    options: ["A) Bone dry", "B) Completely saturated with water", "C) Rocky and solid", "D) Sandy"], 
    correct: 1, 
    explain: "Squelching underfoot and oozing mud proves the ground is saturated or waterlogged."
},
        {"id": "vm_rcv_3", "type": "Practice: Vocab Context", "textBefore": "Passage: The fog was pervasive, drifting into every single valley fracture and hiding paths entirely.", "hasFraction": false, "options": ["A) Rare", "B) Widespread / All-encompassing", "C) High", "D) Thin"], "correct": 1, "explain": "Drifting into every single fracture means it was widespread or pervasive."},
        {"id": "vm_rcv_4", "type": "Practice: Vocab Context", "textBefore": "Passage: The swamp current was sluggish, taking hours to drift a fallen leaf down a short channel.", "hasFraction": false, "options": ["A) Rapid and raging", "B) Slow-moving / Inactive", "C) Frozen solid", "D) Deep"], "correct": 1, "explain": "Taking hours to move a leaf a short distance proves the flow was slow-moving or sluggish."},
        {"id": "vm_rcv_5", "type": "Practice: Vocab Context", "textBefore": "Passage: The marsh flora experienced a blight, leaving withering stalks and dying root systems across the delta.", "hasFraction": false, "options": ["A) Growth surge", "B) Plant disease / Destructive force", "C) Harvest", "D) Bloom"], "correct": 1, "explain": "Withering stalks and dying root systems point to a plant disease or blight."}
    ],
    "volcano-math-exponents": [
        {"id": "vv_exp_1", "type": "Practice: Exponents", "textBefore": "Simplify the expression: 2^2 * 2^3", "hasFraction": false, "options": ["A) 2^5 (32)", "B) 2^6 (64)", "C) 4^5", "D) 4^6"], "correct": 0, "explain": "When multiplying identical bases, add the exponents: 2^(2+3) = 2^5 = 32."},
        {"id": "vv_exp_2", "type": "Practice: Exponents", "textBefore": "Evaluate the exponential value: 5^3", "hasFraction": false, "options": ["A) 15", "B) 25", "C) 75", "D) 125"], "correct": 3, "explain": "5 * 5 * 5 = 125."},
        {"id": "vv_exp_3", "type": "Practice: Exponents", "textBefore": "Simplify the expression: 3^5 / 3^3", "hasFraction": false, "options": ["A) 3^2 (9)", "B) 3^8", "C) 1^2", "D) 9"], "correct": 0, "explain": "When dividing identical bases, subtract the exponents: 3^(5-3) = 3^2 = 9."},
        {"id": "vv_exp_4", "type": "Practice: Exponents", "textBefore": "Evaluate the value: 10^4", "hasFraction": false, "options": ["A) 40", "B) 100", "C) 1,000", "D) 10,000"], "correct": 3, "explain": "10 raised to the 4th power is 10,000."},
        {"id": "vv_exp_5", "type": "Practice: Exponents", "textBefore": "Evaluate the structural expression: (2^2)^3", "hasFraction": false, "options": ["A) 2^5", "B) 2^6 (64)", "C) 4^2", "D) 4^3"], "correct": 1, "explain": "Multiply power layers together: 2^(2*3) = 2^6 = 64."}
    ],
    "volcano-math-algebra-simplify": [
        {"id": "vv_alg_1", "type": "Practice: Algebra", "textBefore": "Simplify the expression: 2(x + 3) + 3(x - 1)", "hasFraction": false, "options": ["A) 5x + 3", "B) 5x + 5", "C) 6x + 3", "D) 5x + 6"], "correct": 0, "explain": "(2x + 6) + (3x - 3) = 5x + 3."},
        {"id": "vv_alg_2", "type": "Practice: Algebra", "textBefore": "Simplify the expression: 4(y - 2) - 2(y - 4)", "hasFraction": false, "options": ["A) 2y", "B) 2y - 16", "C) 2y + 8", "D) 6y"], "correct": 0, "explain": "(4y - 8) - (2y - 8) = 4y - 2y - 8 + 8 = 2y."},
        {"id": "vv_alg_3", "type": "Practice: Algebra", "textBefore": "Simplify the expression: 5(a + 2) + 2(3 - a)", "hasFraction": false, "options": ["A) 3a + 16", "B) 3a + 4", "C) 7a + 16", "D) 3a + 12"], "correct": 0, "explain": "(5a + 10) + (6 - 2a) = 3a + 16."},
        {"id": "vv_alg_4", "type": "Practice: Algebra", "textBefore": "Simplify the expression: 3(3b - 1) - 4(2b - 2)", "hasFraction": false, "options": ["A) b + 5", "B) b - 11", "C) b - 5", "D) 17b + 5"], "correct": 0, "explain": "(9b - 3) - (8b - 8) = 9b - 8b - 3 + 8 = b + 5."},
        {"id": "vv_alg_5", "type": "Practice: Algebra", "textBefore": "Simplify the expression: 2(4x + 5) - 3(x + 2)", "hasFraction": false, "options": ["A) 5x + 4", "B) 5x + 16", "C) 11x + 4", "D) 5x + 2"], "correct": 0, "explain": "(8x + 10) - (3x + 6) = 5x + 4."}
    ],
    "volcano-math-volume": [
        {"id": "vv_vol_1", "type": "Practice: Volume", "textBefore": "Find the volume of a cylinder with radius 2 meters and height 5 meters. (Use 3.14 for pi)", "hasFraction": false, "options": ["A) 31.4 m^3", "B) 62.8 m^3", "C) 125.6 m^3", "D) 20 m^3"], "correct": 1, "explain": "Volume = 3.14 * (2^2) * 5 = 3.14 * 4 * 5 = 62.8 cubic meters."},
        {"id": "vv_vol_2", "type": "Practice: Volume", "textBefore": "Find the volume of a cylinder with radius 1 meter and height 10 meters. (Use 3.14 for pi)", "hasFraction": false, "options": ["A) 3.14 m^3", "B) 31.4 m^3", "C) 314 m^3", "D) 10 m^3"], "correct": 1, "explain": "Volume = 3.14 * (1^2) * 10 = 31.4 cubic meters."},
        {"id": "vv_vol_3", "type": "Practice: Volume", "textBefore": "Find the volume of a cylinder with radius 3 meters and height 2 meters. (Use 3.14 for pi)", "hasFraction": false, "options": ["A) 18.84 m^3", "B) 56.52 m^3", "C) 28.26 m^3", "D) 12 m^3"], "correct": 1, "explain": "Volume = 3.14 * (3^2) * 2 = 3.14 * 9 * 2 = 56.52 cubic meters."},
        {"id": "vv_vol_4", "type": "Practice: Volume", "textBefore": "Find the volume of a cylinder with radius 5 meters and height 4 meters. (Use 3.14 for pi)", "hasFraction": false, "options": ["A) 62.8 m^3", "B) 314 m^3", "C) 125.6 m^3", "D) 100 m^3"], "correct": 1, "explain": "Volume = 3.14 * (5^2) * 4 = 3.14 * 25 * 4 = 314 cubic meters."},
        {"id": "vv_vol_5", "type": "Practice: Volume", "textBefore": "Find the volume of a cylinder with radius 2 meters and height 10 meters. (Use 3.14 for pi)", "hasFraction": false, "options": ["A) 62.8 m^3", "B) 125.6 m^3", "C) 251.2 m^3", "D) 40 m^3"], "correct": 1, "explain": "Volume = 3.14 * (2^2) * 10 = 3.14 * 4 * 10 = 125.6 cubic meters."}
    ],
    "volcano-math-stat-range": [
        {"id": "vv_sta_1", "type": "Practice: Statistics", "textBefore": "Find the range of the numbers: 1.5, 4.8, 2.2, 5.9", "hasFraction": false, "options": ["A) 3.3", "B) 4.4", "C) 2.2", "D) 5.9"], "correct": 1, "explain": "5.9 - 1.5 = 4.4."},
        {"id": "vv_sta_2", "type": "Practice: Statistics", "textBefore": "Find the range of the numbers: 10.2, 14.5, 9.1, 11.3", "hasFraction": false, "options": ["A) 4.3", "B) 5.4", "C) 2.2", "D) 3.1"], "correct": 1, "explain": "14.5 - 9.1 = 5.4."},
        {"id": "vv_sta_3", "type": "Practice: Statistics", "textBefore": "Find the range of the numbers: 0.3, 2.7, 1.1, 3.5", "hasFraction": false, "options": ["A) 2.4", "B) 3.2", "C) 1.6", "D) 2.7"], "correct": 1, "explain": "3.5 - 0.3 = 3.2."},
        {"id": "vv_sta_4", "type": "Practice: Statistics", "textBefore": "Find the range of the numbers: 22.1, 25.4, 21.0, 29.9", "hasFraction": false, "options": ["A) 4.4", "B) 7.8", "C) 8.9", "D) 3.3"], "correct": 2, "explain": "29.9 - 21.0 = 8.9."},
        {"id": "vv_sta_5", "type": "Practice: Statistics", "textBefore": "Find the range of the numbers: 6.0, 6.5, 5.1, 7.8", "hasFraction": false, "options": ["A) 1.8", "B) 2.2", "C) 2.7", "D) 1.5"], "correct": 2, "explain": "7.8 - 5.1 = 2.7."}
    ],
    "volcano-math-probability": [
        {"id": "vv_prb_1", "type": "Practice: Probability", "textBefore": "Total objects = 10. Target count = 2. Reduced fraction probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "5"}, "textAfter": "", "options": ["A) 1/10", "B) 1/5", "C) 2/5", "D) 1/2"], "correct": 1, "explain": "2/10 reduces directly to 1/5."},
        {"id": "vv_prb_2", "type": "Practice: Probability", "textBefore": "Total objects = 12. Target count = 3. Reduced fraction probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "4"}, "textAfter": "", "options": ["A) 1/12", "B) 1/4", "C) 1/3", "D) 1/2"], "correct": 1, "explain": "3/12 reduces directly to 1/4."},
        {"id": "vv_prb_3", "type": "Practice: Probability", "textBefore": "Total objects = 15. Target count = 5. Reduced fraction probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "3"}, "textAfter": "", "options": ["A) 1/15", "B) 1/5", "C) 1/3", "D) 2/5"], "correct": 2, "explain": "5/15 reduces directly to 1/3."},
        {"id": "vv_prb_4", "type": "Practice: Probability", "textBefore": "Total objects = 20. Target count = 4. Reduced fraction probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "5"}, "textAfter": "", "options": ["A) 1/20", "B) 1/5", "C) 2/5", "D) 1/4"], "correct": 1, "explain": "4/20 reduces directly to 1/5."},
        {"id": "vv_prb_5", "type": "Practice: Probability", "textBefore": "Total objects = 30. Target count = 5. Reduced fraction probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "6"}, "textAfter": "", "options": ["A) 1/30", "B) 1/6", "C) 1/5", "D) 1/3"], "correct": 1, "explain": "5/30 reduces directly to 1/6."}
    ],
    "volcano-math-word-rates": [
        {"id": "vv_wrd_1", "type": "Practice: Work Rates", "textBefore": "A device cuts 10 inches every 15 minutes. How many total inches in 1 hour?", "hasFraction": false, "options": ["A) 30 inches", "B) 40 inches", "C) 50 inches", "D) 60 inches"], "correct": 1, "explain": "1 hour has four 15-minute blocks. 4 * 10 = 40 inches."},
        {"id": "vv_wrd_2", "type": "Practice: Work Rates", "textBefore": "A device cuts 20 inches every 30 minutes. How many total FEET in 3 hours?", "hasFraction": false, "options": ["A) 5 feet", "B) 10 feet", "C) 12 feet", "D) 15 feet"], "correct": 0, "explain": "3 hours has six 30-minute blocks. 6 * 20 = 120 inches. 120 / 12 = 10 feet."},
        {"id": "vv_wrd_3", "type": "Practice: Work Rates", "textBefore": "A device cuts 5 inches every 10 minutes. How many total inches in 2 hours?", "hasFraction": false, "options": ["A) 40 inches", "B) 50 inches", "C) 60 inches", "D) 80 inches"], "correct": 2, "explain": "2 hours = 120 minutes. 12 blocks * 5 = 60 inches."},
        {"id": "vv_wrd_4", "type": "Practice: Work Rates", "textBefore": "A drill cuts 12 inches every 20 minutes. How many total FEET in 5 hours?", "hasFraction": false, "options": ["A) 10 feet", "B) 15 feet", "C) 20 feet", "D) 25 feet"], "correct": 1, "explain": "5 hours has fifteen 20-minute blocks. 15 * 12 = 180 inches. 180 / 12 = 15 feet."},
        {"id": "vv_wrd_5", "type": "Practice: Work Rates", "textBefore": "A drill cuts 8 inches every 15 minutes. How many total inches in 3 hours?", "hasFraction": false, "options": ["A) 72 inches", "B) 84 inches", "C) 96 inches", "D) 108 inches"], "correct": 2, "explain": "3 hours has twelve 15-minute blocks. 12 * 8 = 96 inches."}
    ],
    "volcano-math-sequences": [
        {"id": "vv_seq_1", "type": "Practice: Sequences", "textBefore": "Next number in pattern: 50, 48, 44, 36, ___", "hasFraction": false, "options": ["A) 20", "B) 24", "C) 28", "D) 32"], "correct": 0, "explain": "Subtract doubling values: -2, -4, -8. Next operation is 36 - 16 = 20."},
        {"id": "vv_seq_2", "type": "Practice: Sequences", "textBefore": "Next number in pattern: 200, 195, 185, 165, ___", "hasFraction": false, "options": ["A) 115", "B) 125", "C) 135", "D) 145"], "correct": 1, "explain": "Subtract doubling values: -5, -10, -20. Next is 165 - 40 = 125."},
        {"id": "vv_seq_3", "type": "Practice: Sequences", "textBefore": "Next number in pattern: 10, 9, 7, 3, ___", "hasFraction": false, "options": ["A) -5", "B) -3", "C) -1", "D) 0"], "correct": 0, "explain": "Subtract doubling values: -1, -2, -4. Next is 3 - 8 = -5."},
        {"id": "vv_seq_4", "type": "Practice: Sequences", "textBefore": "Next number in pattern: 80, 77, 71, 59, ___", "hasFraction": false, "options": ["A) 35", "B) 41", "C) 47", "D) 53"], "correct": 0, "explain": "Subtract doubling values: -3, -6, -12. Next is 59 - 24 = 35."},
        {"id": "vv_seq_5", "type": "Practice: Sequences", "textBefore": "Next number in pattern: 300, 290, 270, 230, ___", "hasFraction": false, "options": ["A) 130", "B) 150", "C) 170", "D) 190"], "correct": 1, "explain": "Subtract doubling values: -10, -20, -40. Next is 230 - 80 = 150."}
    ],
    "volcano-verb-synonyms": [
        {"id": "vv_syn_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: DESTROY", "hasFraction": false, "options": ["A) Build", "B) Obliterate", "C) Maintain", "D) Protect"], "correct": 1, "explain": "To destroy utterly means to obliterate."},
        {"id": "vv_syn_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: DEMOLISH", "hasFraction": false, "options": ["A) Form", "B) Obliterate", "C) Repair", "D) Guard"], "correct": 1, "explain": "Demolish means to destroy or obliterate structures."},
        {"id": "vv_syn_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: ERASE", "hasFraction": false, "options": ["A) Draw", "B) Obliterate / Wipe out", "C) Save", "D) Highlight"], "correct": 1, "explain": "To wipe out completely is to erase or obliterate."},
        {"id": "vv_syn_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: EXTIRPATE", "hasFraction": false, "options": ["A) Implant", "B) Obliterate / Root out", "C) Cherish", "D) Create"], "correct": 1, "explain": "Extirpate means to root out and destroy completely; to obliterate."},
        {"id": "vv_syn_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: DEVASTATE", "hasFraction": false, "options": ["A) Comfort", "B) Obliterate / Ruin", "C) Construct", "D) Fertilize"], "correct": 1, "explain": "Devastate means to lay waste or obliterate a location."}
    ],
    "volcano-verb-modifiers": [
        {"id": "vv_mod_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: INACTIVE", "hasFraction": false, "options": ["A) Energetic", "B) Dormant", "C) Alert", "D) Fresh"], "correct": 1, "explain": "Inactive states match dormant profiles."},
        {"id": "vv_mod_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: LATENT", "hasFraction": false, "options": ["A) Revealed", "B) Dormant / Hidden", "C) Active", "D) Heavy"], "correct": 1, "explain": "Latent capacity implies dormant or unrevealed forces."},
        {"id": "vv_mod_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: HIBERNATING", "hasFraction": false, "options": ["A) Hunting", "B) Dormant / Asleep", "C) Migrating", "D) Feeding"], "correct": 1, "explain": "Hibernating profiles represent an seasonally dormant state."},
        {"id": "vv_mod_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: PASSIVE", "hasFraction": false, "options": ["A) Aggressive", "B) Dormant / Inactive", "C) Dynamic", "D) Loud"], "correct": 1, "explain": "Passive behaviors align with inactive or dormant metrics."},
        {"id": "vv_mod_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: TORPID", "hasFraction": false, "options": ["A) Fast", "B) Dormant / Sluggish", "C) Boiling", "D) Sharp"], "correct": 1, "explain": "Torpid means mentally or physically inactive, matching dormant."}
    ],
    "volcano-verb-ana-matter": [
        {"id": "vv_mat_1", "type": "Practice: Analogies", "textBefore": "BLOOD : ANIMAL :: _________ : _________", "hasFraction": false, "options": ["A) Sap : Tree", "B) Water : Well", "C) Juice : Glass", "D) Ink : Pen"], "correct": 0, "explain": "Blood circulates internally to support an animal; sap circulates to support a tree."},
        {"id": "vv_mat_2", "type": "Practice: Analogies", "textBefore": "OIL : MOTOR :: _________ : _________", "hasFraction": false, "options": ["A) Sap : Tree", "B) Fuel : Tank", "C) Water : Pipe", "D) Air : Balloon"], "correct": 0, "explain": "Oil operates internally to lubricate a motor; sap operates internally within a tree."},
        {"id": "vv_mat_3", "type": "Practice: Analogies", "textBefore": "WATER : PIPE :: _________ : _________", "hasFraction": false, "options": ["A) Sap : Tree (veins)", "B) Wire : Current", "C) Coal : Train", "D) Gas : Vent"], "correct": 0, "explain": "Water travels through pipes; sap travels internally through tree channel arrays."},
        {"id": "vv_mat_4", "type": "Practice: Analogies", "textBefore": "JUICE : ORANGE :: _________ : _________", "hasFraction": false, "options": ["A) Sap : Tree", "B) Seed : Apple", "C) Peel : Banana", "D) Core : Pear"], "correct": 0, "explain": "Juice is the natural fluid inside an orange; sap is the fluid inside a tree."},
        {"id": "vv_mat_5", "type": "Practice: Analogies", "textBefore": "FLUID : CELL :: _________ : _________", "hasFraction": false, "options": ["A) Sap : Tree", "B) Bone : Body", "C) Skin : Face", "D) Hair : Head"], "correct": 0, "explain": "Fluid expands the interior of a cell; sap fills the active biological pathways of a tree."}
    ],
    "volcano-verb-ana-degree": [
        {"id": "vv_deg_1", "type": "Practice: Analogies", "textBefore": "COOL : FREEZING :: _________ : _________", "hasFraction": false, "options": ["A) Warm : Scorching", "B) Dry : Arid", "C) High : Steep", "D) Wet : Damp"], "correct": 0, "explain": "Freezing is the extreme endpoint of cool; scorching is the extreme of warm."},
        {"id": "vv_deg_2", "type": "Practice: Analogies", "textBefore": "TIRED : EXHAUSTED :: _________ : _________", "hasFraction": false, "options": ["A) Pleased : Ecstatic", "B) Sad : Blue", "C) Mad : Annoyed", "D) Fast : Quick"], "correct": 0, "explain": "Exexhausted is an extreme tier of tired; ecstatic is an extreme tier of pleased."},
        {"id": "vv_deg_3", "type": "Practice: Analogies", "textBefore": "SMALL : MICROSCOPIC :: _________ : _________", "hasFraction": false, "options": ["A) Large : Colossal", "B) Wide : Long", "C) Heavy : Solid", "D) Thin : Fine"], "correct": 0, "explain": "Microscopic represents extreme smallness; colossal represents extreme largeness."},
        {"id": "vv_deg_4", "type": "Practice: Analogies", "textBefore": "DISLIKE : LOATHE :: _________ : _________", "hasFraction": false, "options": ["A) Like : Adore", "B) Wish : Want", "C) Fear : Avoid", "D) Think : Speak"], "correct": 0, "explain": "Loathe is an extreme degree of dislike; adore is an extreme degree of liking."},
        {"id": "vv_deg_5", "type": "Practice: Analogies", "textBefore": "HINT : COMMAND :: _________ : _________", "hasFraction": false, "options": ["A) Spark : Inferno", "B) Wave : Current", "C) Wind : Gale", "D) Rain : Flood"], "correct": 0, "explain": "A command is an absolute, extreme application over a hint; an inferno is an extreme endpoint scaling over a spark."}
    ],
    "volcano-verb-ana-instrument": [
        {"id": "vv_ins_1", "type": "Practice: Analogies", "textBefore": "HEAT : THERMOMETER :: _________ : _________", "hasFraction": false, "options": ["A) Weight : Scale", "B) Speed : Clock", "C) Compass : Direction", "D) Map : Miles"], "correct": 0, "explain": "Heat force is measured by a thermometer; weight force is evaluated by a scale."},
        {"id": "vv_ins_2", "type": "Practice: Analogies", "textBefore": "PRESSURE : BAROMETER :: _________ : _________", "hasFraction": false, "options": ["A) Weight : Scale", "B) Height : Ruler", "C) Time : Watch", "D) Distance : Odometer"], "correct": 0, "explain": "Barometers gauge air pressure forces; scales gauge weight masses forces."},
        {"id": "vv_ins_3", "type": "Practice: Analogies", "textBefore": "SPEED : SPEEDOMETER :: _________ : _________", "hasFraction": false, "options": ["A) Weight : Scale", "B) Sound : Decibel", "C) Angle : Protractor", "D) Depth : Line"], "correct": 0, "explain": "Speedometers register kinetic velocity speed; scales register weight profiles."},
        {"id": "vv_ins_4", "type": "Practice: Analogies", "textBefore": "ALTITUDE : ALTIMETER :: _________ : _________", "hasFraction": false, "options": ["A) Weight : Scale", "B) Grade : Level", "C) Current : Ammeter", "D) Light : Meter"], "correct": 0, "explain": "Altimeters log geometric elevation altitude; scales evaluate weight metrics."},
        {"id": "vv_ins_5", "type": "Practice: Analogies", "textBefore": "ELECTRICITY : AMMETER :: _________ : _________", "hasFraction": false, "options": ["A) Weight : Scale", "B) Power : Watt", "C) Force : Gauge", "D) Energy : Vault"], "correct": 0, "explain": "Ammeters track active current loops electricity; scales track solid weights."}
    ],
    "volcano-verb-syn-complex": [
        {"id": "vv_vlc_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: UNSTABLE", "hasFraction": false, "options": ["A) Rigid", "B) Volatile", "C) Heavy", "D) Closed"], "correct": 1, "explain": "Volatile positions are highly unstable and subject to sudden changes."},
        {"id": "vv_vlc_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: CAPRICIOUS", "hasFraction": false, "options": ["A) Fixed", "B) Volatile / Fickle", "C) Silent", "D) Gentle"], "correct": 1, "explain": "Capricious traits align with unpredictable, volatile conditions."},
        {"id": "vv_vlc_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: ERATIC", "hasFraction": false, "options": ["A) Rhythmic", "B) Volatile / Irregular", "C) Safe", "D) Slow"], "correct": 1, "explain": "Erratic actions translate to unstable, volatile behavior sequences."},
        {"id": "vv_vlc_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: EXPLOSIVE", "hasFraction": false, "options": ["A) Inert", "B) Volatile", "C) Small", "D) Solid"], "correct": 1, "explain": "Explosive risk maps contextually to volatile material environments."},
        {"id": "vv_vlc_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: MERCURIAL", "hasFraction": false, "options": ["A) Constant", "B) Volatile / Changeable", "C) Heavy", "D) Frozen"], "correct": 1, "explain": "Mercurial means subject to sudden unpredictable shifts; volatile."}
    ],
    "volcano-verb-ana-antonym": [
        {"id": "vv_ant_1", "type": "Practice: Analogies", "textBefore": "START : FINISH :: _________ : _________", "hasFraction": false, "options": ["A) Open : Close", "B) Begin : Launch", "C) Move : Sprint", "D) Build : Create"], "correct": 0, "explain": "Start and finish are endpoints opposites; open and close are opposites."},
        {"id": "vv_ant_2", "type": "Practice: Analogies", "textBefore": "CREATE : DESTROY :: _________ : _________", "hasFraction": false, "options": ["A) Make : Form", "B) Initiate : Conclude", "C) Add : Multiply", "D) Rise : Climb"], "correct": 1, "explain": "Create and destroy are conceptual antonyms actions; initiate and conclude are opposites."},
        {"id": "vv_ant_3", "type": "Practice: Analogies", "textBefore": "RISE : FALL :: _________ : _________", "hasFraction": false, "options": ["A) Ascend : Descend", "B) Stand : Wait", "C) Jump : Soar", "D) Walk : Run"], "correct": 0, "explain": "Rise and fall describe directional motion opposites; ascend and descend are vertical opposites."},
        {"id": "vv_ant_4", "type": "Practice: Analogies", "textBefore": "EXPAND : CONTRACT :: _________ : _________", "hasFraction": false, "options": ["A) Grow : Shrink", "B) Build : Design", "C) Open : Unlock", "D) Freeze : Cold"], "correct": 0, "explain": "To expand and contract are physical spatial volume antonyms; grow and shrink are direct opposites."},
        {"id": "vv_ant_5", "type": "Practice: Analogies", "textBefore": "HEAT : COOL :: _________ : _________", "hasFraction": false, "options": ["A) Warm : Hot", "B) Melt : Freeze", "C) Boil : Vaporize", "D) Damp : Wet"], "correct": 1, "explain": "To heat and to cool are operational opposites shifts; melting and freezing are phase shifts antonyms."}
    ],
    "volcano-read-main": [
        {"id": "vv_rmn_1", "type": "Practice: Main Idea", "textBefore": "Passage: Basalt flows construct wide shield volcanoes with gentle slopes rather than steep conical peaks because low-silica magma travels far before freezing.<br><br>Question: Main argument?", "hasFraction": false, "options": ["A) Silica is rare.", "B) Low-silica magma fluidity builds wide shield volcano shapes instead of sharp cones.", "C) Peaks are dangerous.", "D) Ocean beds contain basalt sheets."], "correct": 1, "explain": "The text explains how the low-silica consistency directly results in wide shield contours."},
        {"id": "vv_rmn_2", "type": "Practice: Main Idea", "textBefore": "Passage: Ash clouds thrown up by geological events block incoming solar rays, driving down baseline global temperature metrics for consecutive seasons.<br><br>Question: Primary focus?", "hasFraction": false, "options": ["A) Clouds are dark.", "B) Volcanic ash plumes disrupt global climates by blocking sunlight.", "C) Summer is warm.", "D) Fuel models need calibration."], "correct": 1, "explain": "Outlines how ash insulation results in global seasonal cooling cycles."},
        {"id": "vv_rmn_3", "type": "Practice: Main Idea", "textBefore": "Passage: Magma storage pools deep beneath Yellowstone are monitored via GPS sensors to track ground distortion patterns tracking magma inflation cycles.<br><br>Question: Central point?", "hasFraction": false, "options": ["A) GPS systems are expensive.", "B) Researchers use sensors to monitor inflation cycles in underground magma pools.", "C) Geysers throw boiling water.", "D) Maps require flat axes."], "correct": 1, "explain": "The entry catalogs the use of digital tracking systems to record underground pool displacement metrics."},
        {"id": "vv_rmn_4", "type": "Practice: Main Idea", "textBefore": "Passage: Geothermal vents support specialized extremophile bacteria that thrive inside boiling, highly acidic deep pool channels without requiring oxygen elements.<br><br>Question: Core claim?", "hasFraction": false, "options": ["A) Acid destroys cells.", "B) Extremophile bacteria adapt to survive inside boiling, toxic geothermal vent environments.", "C) Oxygen is vital for all life.", "D) Water boils at 100 degrees."], "correct": 1, "explain": "Focuses on the custom biological endurance adaptations of vent bacteria groups."},
        {"id": "vv_rmn_5", "type": "Practice: Main Idea", "textBefore": "Passage: Obsidian glass occurs when volcanic lava cools instantaneously upon hitting surface glacier packs, halting mineral crystal cell generation blocks.<br><br>Question: Summary?", "hasFraction": false, "options": ["A) Glass cuts boots easily.", "B) Instantaneous cooling creates crystal-free obsidian glass.", "C) Glaciers melt in summer.", "D) Crystals are transparent structural shapes."], "correct": 1, "explain": "Focuses on the rapid thermal freezing process that results in obsidian glass formation."}
    ],
    "volcano-read-detail": [
        {"id": "vv_rde_1", "type": "Practice: Details", "textBefore": "Passage: A specific caldera line measures 24 miles wide.", "hasFraction": false, "options": ["A) 12 miles", "B) 24 miles", "C) 36 miles", "D) 48 miles"], "correct": 1, "explain": "Explicitly reads 24 miles wide."},
        {"id": "vv_rde_2", "type": "Practice: Details", "textBefore": "Passage: Thermal sensors log a vent pool temperature of 400 degrees Celsius.", "hasFraction": false, "options": ["A) 100 deg", "B) 200 deg", "C) 400 deg", "D) 800 deg"], "correct": 2, "explain": "Explicitly states 400 degrees Celsius."},
        {"id": "vv_rde_3", "type": "Practice: Details", "textBefore": "Passage: The historic eruption ash layer deposits register a depth index of 8 inches.", "hasFraction": false, "options": ["A) 4 inches", "B) 6 inches", "C) 8 inches", "D) 12 inches"], "correct": 2, "explain": "Text explicitly measures depth at 8 inches."},
        {"id": "vv_rde_4", "type": "Practice: Details", "textBefore": "Passage: Lava rock pipelines channel flows across an expanse measuring 15 miles long.", "hasFraction": false, "options": ["A) 5 miles", "B) 10 miles", "C) 15 miles", "D) 25 miles"], "correct": 2, "explain": "Explicitly numbers distance at 15 miles."},
        {"id": "vv_rde_5", "type": "Practice: Details", "textBefore": "Passage: Local monitoring stations log an absolute baseline total count of 50 tremors weekly.", "hasFraction": false, "options": ["A) 25", "B) 50", "C) 75", "D) 100"], "correct": 1, "explain": "Text explicitly isolates count tracking at 50 tremors."}
    ],
    "volcano-read-inference": [
        {"id": "vv_rif_1", "type": "Practice: Inference", "textBefore": "Passage: When internal pressure valves inside a dome volcano lock solid due to hardened cooling obsidian block plugs, the subsequent eruption results in highly catastrophic fragmentation blasts.", "hasFraction": false, "options": ["A) Obsidian plugs clean vent systems safely.", "B) Trapped internal volcanic gasses compress heavily until they experience explosive containment failures.", "C) Hardened plugs reduce hazard scales.", "D) Volcanoes explode every winter season regularly."], "correct": 1, "explain": "Hardened rock trapping internal components forces gasses to compress heavily until they violently explode, causing fragmentation blasts."},
        {"id": "vv_rif_2", "type": "Practice: Inference", "textBefore": "Passage: Regions logging continuous swarms of deep micro-tremors see a geometric increase in vent gas temperatures weeks before thermal flows break through the crust.", "hasFraction": false, "options": ["A) Tremors cool down rock formations.", "B) Deep micro-tremors signal the physical movement and upward migration of molten material lines.", "C) Vent gasses are disconnected from magma activity.", "D) Crust boundaries stay solid under micro-shocks."], "correct": 1, "explain": "Rising friction indicators combined with spiking vent temperatures imply that deep magma is moving upward toward the surface."},
        {"id": "vv_rif_3", "type": "Practice: Inference", "textBefore": "Passage: Pumice stones possess porous, pocket-filled foam structures that allow whole boulders to float across crater lakes after an explosive blast.", "hasFraction": false, "options": ["A) Pumice is heavy like solid iron.", "B) The extensive network of internal air pockets makes pumice less dense than the surrounding lake water.", "C) Crater lakes are packed with high-salinity brine.", "D) Blasts reduce stone weights metrics temporarily."], "correct": 1, "explain": "Floating on water implies that the pocket-filled foam architecture keeps the stone's net density lower than water's density."},
        {"id": "vv_rif_4", "type": "Practice: Inference", "textBefore": "Passage: Vegetation zones surrounding active sulfur fumarole fields turn white and drop leaves even during prime rainy growing seasons.", "hasFraction": false, "options": ["A) Rain clouds contain sulfur powder naturally.", "B) Fumarole toxic chemical exhaust lines disrupt chlorophyll production in local flora cells.", "C) Plants love sulfur exposure lines.", "D) Growing seasons fail globally due to fumarole fields metrics."], "correct": 1, "explain": "Turning white during rainy seasons indicates that toxic gases from the vents are actively poisoning the plants' life functions."},
        {"id": "vv_rif_5", "type": "Practice: Inference", "textBefore": "Passage: Geothermal drill pipes lined with pure industrial titanium pit and corrode within a month of deployment inside deep magmatic well lines.", "hasFraction": false, "options": ["A) Magmatic fluids are mild.", "B) Deep magmatic wells contain highly corrosive chemical compounds and intense thermal currents.", "C) Titanium is a weak material standard.", "D) Drill pipe systems corrode due to air contact shifts underground."], "correct": 1, "explain": "Destroying tough industrial titanium within a month proves that the internal well environments are incredibly corrosive and hot."}
    ],
    "volcano-read-vocab": [
        {"id": "vv_rcv_1", "type": "Practice: Vocab Context", "textBefore": "Passage: The lava flow was incandescent, glowing with a brilliant orange brilliance that illuminated the entire mountain range valley path.", "hasFraction: false": false, "options": ["A) Cold and black", "B) Glowing with intense heat / Luminous", "C) Frozen solid", "D) Invisible"], "correct": 1, "explain": "Glowing with a orange brilliance that lights up a valley proves the material is luminous or incandescent from heat."},
        {"id": "vv_rcv_2", "type": "Practice: Vocab Context", "textBefore": "Passage: The ash cloud was monolithic, forming a single unbroken mountain wall of gray smoke that blocked out the sky for miles.", "hasFraction": false, "options": ["A) Tiny and scattered", "B) Massive, uniform, and unbroken", "C) Moving rapidly", "D) Colorful and bright"], "correct": 1, "explain": "Forming a single unbroken mountain wall that covers miles defines a monolithic structure."},
        {"id": "vv_rcv_3", "type": "Practice: Vocab Context", "textBefore": "Passage: The magma conduit was subterranean, carving channels thousands of feet beneath the surface crust layers before finding an exit vent.", "hasFraction": false, "options": ["A) Floating in air", "B) Underground / Beneath the surface", "C) Visible on hills", "D) Ocean-dwelling"], "correct": 1, "explain": "Carving channels thousands of feet beneath the surface crust explicitly defines a subterranean path."},
        {"id": "vv_rcv_4", "type": "Practice: Vocab Context", "textBefore": "Passage: The volcano experienced a cataclysmic collapse, blasting away its entire upper peak and altering the geographic profile of the region in seconds.", "hasFraction": false, "options": ["A) Mild and slow", "B) Violently destructive / Disastrous", "C) Invisible and quiet", "D) Constructive"], "correct": 1, "explain": "Blasting away an entire mountain peak in seconds points directly to a violently destructive or cataclysmic event."},
        {"id": "vv_rcv_5", "type": "Practice: Vocab Context", "textBefore": "Passage: The sulfur gas concentration was pungent, biting the throats of researchers and leaving a sharp odor of rotten eggs across the camp site lanes.", "hasFraction": false, "options": ["A) Sweet and pleasant", "B) Sharp, stinging, or strongly scented", "C) Odorless and mild", "D) Frozen cold"], "correct": 1, "explain": "Biting the throat and carrying a sharp smell of rotten eggs defines a highly pungent gas trace."}
    ],
    "volcano-read-tone": [
        {"id": "vv_rtn_1", "type": "Practice: Tone", "textBefore": "Passage: The fiery fountains, roaring like primordial beasts while casting towers of crimson gold into the velvet midnight sky, formed a terrifyingly beautiful portrait of creation.", "hasFraction": false, "options": ["A) Sarcastic", "B) Dramatic and awe-inspired", "C) Analytical and dry", "D) Indifferent"], "correct": 1, "explain": "Phrases like 'roaring like primordial beasts' and 'terrifyingly beautiful' establish a dramatic, awe-inspired tone."},
        {"id": "vv_rtn_2", "type": "Practice: Tone", "textBefore": "Passage: The complete failure of local civil agencies to maintain active warning sirens near the hazardous mudslide channels is a criminal act of civil negligence.", "hasFraction": false, "options": ["A) Positive", "B) Indignant / Highly critical", "C) Objective", "D) Neutral"], "correct": 1, "explain": "Demanding accountability and calling behavior a 'criminal act of negligence' signals an angry, indignant tone."},
        {"id": "vv_rtn_3", "type": "Practice: Tone", "textBefore": "Passage: This volcanic dome is composed of approximately 65% dacite rock and registers 4 main vent exits.", "hasFraction": false, "options": ["A) Artistic", "B) Objective / Technical", "C) Sarcastic", "D) Joyful"], "correct": 1, "explain": "The statement presents rock percentages and vent counts without personal flair, making it technical and objective."},
        {"id": "vv_rtn_4", "type": "Practice: Tone", "textBefore": "Passage: Oh brilliant, the trail map forgot to mention that the paths are covered in boiling sulfur puddles. Thanks for the heads up, park service.", "hasFraction": false, "options": ["A) Supportive", "B) Sarcastic / Mocking", "C) Academic", "D) Scientific"], "correct": 1, "explain": "Saying 'Oh brilliant' and sarcastically thanking the service for missing a dangerous hazard is a classic mocking tone marker."},
        {"id": "vv_rtn_5", "type": "Practice: Tone", "textBefore": "Passage: It is an inspiring triumph for geological science that the predictive eruption tracking model saved thousands of lives across the lower valley plains.", "hasFraction": false, "options": ["A) Sad", "B) Celebratory / Enthusiastic", "C) Unconcerned", "D) Dark"], "correct": 1, "explain": "Phrases like 'inspiring triumph' and noting saved lives reflect a celebratory and enthusiastic tone."}
    ],
    "volcano-read-purpose": [
        {"id": "vv_rpp_1", "type": "Practice: Purpose", "textBefore": "Passage: Volcanoes yield valuable minerals. For example, open sulfur vents across the high ridges precipitate tons of pure industrial crystals daily.", "hasFraction": false, "options": ["A) Sell gear", "B) Demonstrate mineral value extraction with a specific case example", "C) Describe crystals shapes", "D) Encourage high climbing expansions"], "correct": 1, "explain": "The sulfur text serves as a concrete example to back up the claim that volcanoes provide valuable minerals."},
        {"id": "vv_rpp_2", "type": "Practice: Purpose", "textBefore": "Passage: Volcanic ash clouds mirror sunlight waves back into outer space, acting as an atmospheric layer shield that reduces total thermal absorption scales.", "hasFraction": false, "options": ["A) Explain ash clouds solar radiation reflection functions", "B) Sell umbrellas", "C) Teach flight patterns path controls", "D) Describe sun spot sizes"], "correct": 0, "explain": "The paragraph explains the mechanics of ash clouds reflecting solar rays to illustrate their cooling effect on the atmosphere."},
        {"id": "vv_rpp_3", "type": "Practice: Purpose", "textBefore": "Passage: Magma vents maintain precise exit channel sizes. When internal mineral tracks narrow due to quick crystallization events, the flow speed spikes to clear the path lines.", "hasFraction": false, "options": ["A) Explain magmatic fluid acceleration triggers", "B) Study crystal weights", "C) Describe pipe scales", "D) Sell speed dials"], "correct": 0, "explain": "The text describes the process of crystallization narrowing channels to explain what triggers magmatic acceleration."},
        {"id": "vv_rpp_4", "type": "Practice: Purpose", "textBefore": "Passage: Diverting active lava streams with concrete blocks often backfires, causing the pressurized molten fluid to pool and burst through lateral side cracks unpredictably.", "hasFraction": false, "options": ["A) Promote concrete manufacturing", "B) Warn about the unpredictable hazards of manual lava diversion attempts", "C) Describe fluid weights parameters", "D) Recommend city expansions lines"], "correct": 1, "explain": "The text lists the dangers of bursting side cracks to explicitly warn against attempting to manually divert lava streams."},
        {"id": "vv_rpp_5", "type": "Practice: Purpose", "textBefore": "Passage: Standard land ridges erode steadily under wind metrics. A active volcanic cone, however, operates as a terrain generator, adding fresh layers of basalt stone over existing contours with every eruption cycle.", "hasFraction": false, "options": ["A) Contrast standard ridge erosion with active volcanic terrain generation properties", "B) Teach compass navigation grids", "C) Describe ash particle metrics", "D) Recommend mining basalt layers"], "correct": 0, "explain": "The comparison contrasts eroding landforms with active volcanic cones to highlight the unique terrain-generating behavior of the latter."}
    ],
    "ocean-math-complex-frac": [
        {"id": "vo_cfr_1", "type": "Practice: Complex Fractions", "textBefore: ": "Simplify: ", "hasFraction": true, "fracData": {"top": "1/2", "bottom": "1/4"}, "textAfter": "", "options": ["A) 1/8", "B) 1/2", "C) 2", "D) 4"], "correct": 2, "explain": "(1/2) * (4/1) = 4/2 = 2."},
        {"id": "vo_cfr_2", "type": "Practice: Complex Fractions", "textBefore: ": "Simplify: ", "hasFraction": true, "fracData": {"top": "2/3", "bottom": "4/9"}, "textAfter": "", "options": ["A) 8/27", "B) 3/2", "C) 2/3", "D) 1"], "correct": 1, "explain": "(2/3) * (9/4) = 18/12 = 3/2."},
        {"id": "vo_cfr_3", "type": "Practice: Complex Fractions", "textBefore: ": "Simplify: ", "hasFraction": true, "fracData": {"top": "5/6", "bottom": "5/12"}, "textAfter": "", "options": ["A) 25/72", "B) 1/2", "C) 2", "D) 12/6"], "correct": 2, "explain": "(5/6) * (12/5) = 60/30 = 2."},
        {"id": "vo_cfr_4", "type": "Practice: Complex Fractions", "textBefore: ": "Simplify: ", "hasFraction": true, "fracData": {"top": "3/5", "bottom": "9/10"}, "textAfter": "", "options": ["A) 27/50", "B) 2/3", "C) 3/2", "D) 1/3"], "correct": 1, "explain": "(3/5) * (10/9) = 30/45 = 2/3."},
        {"id": "vo_cfr_5", "type": "Practice: Complex Fractions", "textBefore: ": "Simplify: ", "hasFraction": true, "fracData": {"top": "1/3", "bottom": "1/6"}, "textAfter": "", "options": ["A) 1/18", "B) 1/2", "C) 2", "D) 3"], "correct": 2, "explain": "(1/3) * (6/1) = 6/3 = 2."}
    ],
    "ocean-math-algebra-factoring": [
        {"id": "vo_fac_1", "type": "Practice: Factoring", "textBefore": "Factor the quadratic expression: x^2 - 5x + 6", "hasFraction": false, "options": ["A) (x - 2)(x - 3)", "B) (x - 1)(x - 6)", "C) (x + 2)(x + 3)", "D) (x - 5)(x + 1)"], "correct": 0, "explain": "(-2) * (-3) = 6 and (-2) + (-3) = -5, matching (x - 2)(x - 3)."},
        {"id": "vo_fac_2", "type": "Practice: Factoring", "textBefore": "Factor the quadratic expression: x^2 - 7x + 12", "hasFraction": false, "options": ["A) (x - 1)(x - 12)", "B) (x - 2)(x - 5)", "C) (x - 3)(x - 4)", "自由D) (x + 3)(x + 4)"], "correct": 2, "explain": "(-3) * (-4) = 12 and (-3) + (-4) = -7, matching (x - 3)(x - 4)."},
        {"id": "vo_fac_3", "type": "Practice: Factoring", "textBefore": "Factor the quadratic expression: x^2 - 8x + 15", "hasFraction": false, "options": ["A) (x - 2)(x - 6)", "B) (x - 3)(x - 5)", "C) (x + 3)(x + 5)", "D) (x - 1)(x - 15)"], "correct": 1, "explain": "(-3) * (-5) = 15 and (-3) + (-5) = -8, matching (x - 3)(x - 5)."},
        {"id": "vo_fac_4", "type": "Practice: Factoring", "textBefore": "Factor the quadratic expression: x^2 - 6x + 8", "hasFraction": false, "options": ["A) (x - 1)(x - 8)", "B) (x - 2)(x - 4)", "C) (x + 2)(x + 4)", "D) (x - 3)(x - 3)"], "correct": 1, "explain": "(-2) * (-4) = 8 and (-2) + (-4) = -6, matching (x - 2)(x - 4)."},
        {"id": "vo_fac_5", "type": "Practice: Factoring", "textBefore": "Factor the quadratic expression: x^2 - 11x + 24", "hasFraction": false, "options": ["A) (x - 2)(x - 9)", "B) (x - 3)(x - 8)", "C) (x + 3)(x + 8)", "D) (x - 4)(x - 6)"], "correct": 1, "explain": "(-3) * (-8) = 24 and (-3) + (-8) = -11, matching (x - 3)(x - 8)."}
    ],
    "ocean-math-coordinate-mid": [
        {"id": "vo_mid_1", "type": "Practice: Midpoints", "textBefore": "Find the midpoint between coordinates (0, 0) and (6, 8):", "hasFraction": false, "options": ["A) (3, 4)", "B) (4, 3)", "C) (2, 4)", "D) (3, 3)"], "correct": 0, "explain": "((0+6)/2, (0+8)/2) = (3, 4)."},
        {"id": "vo_mid_2", "type": "Practice: Midpoints", "textBefore": "Find the midpoint between coordinates (2, 4) and (8, 10):", "hasFraction": false, "options": ["A) (4, 6)", "B) (5, 7)", "C) (6, 7)", "D) (5, 6)"], "correct": 1, "explain": "((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5, 7)."},
        {"id": "vo_mid_3", "type": "Practice: Midpoints", "textBefore": "Find the midpoint between coordinates (-4, 2) and (4, 6):", "hasFraction": false, "options": ["A) (0, 4)", "B) (0, 2)", "C) (2, 4)", "D) (1, 3)"], "correct": 0, "explain": "((-4+4)/2, (2+6)/2) = (0, 8/2) = (0, 4)."},
        {"id": "vo_mid_4", "type": "Practice: Midpoints", "textBefore": "Find the midpoint between coordinates (1, -3) and (7, 3):", "hasFraction": false, "options": ["A) (4, 0)", "B) (3, 0)", "C) (4, 1)", "D) (3, 1)"], "correct": 0, "explain": "((1+7)/2, (-3+3)/2) = (8/2, 0/2) = (4, 0)."},
        {"id": "vo_mid_5", "type": "Practice: Midpoints", "textBefore": "Find the midpoint between coordinates (-2, -4) and (4, 4):", "hasFraction": false, "options": ["A) (1, 0)", "B) (2, 0)", "C) (1, 1)", "D) (0, 0)"], "correct": 0, "explain": "((-2+4)/2, (-4+4)/2) = (2/2, 0/2) = (1, 0)."}
    ],
    "ocean-math-statistics": [
        {"id": "vo_sta_1", "type": "Practice: Data Analysis", "textBefore": "Range of the dataset: -2.5, 3.5, 0.5, -1.0", "hasFraction": false, "options": ["A) 4.0", "B) 5.0", "C) 6.0", "D) 7.0"], "correct": 2, "explain": "Maximum is 3.5. Minimum is -2.5. 3.5 - (-2.5) = 6.0."},
        {"id": "vo_sta_2", "type": "Practice: Data Analysis", "textBefore": "Range of the dataset: -5.0, -1.2, -0.8, -4.2", "hasFraction": false, "options": ["A) 3.4", "B) 4.2", "C) 5.0", "D) 3.8"], "correct": 1, "explain": "-0.8 - (-5.0) = -0.8 + 5.0 = 4.2."},
        {"id": "vo_sta_3", "type": "Practice: Data Analysis", "textBefore": "Range of the dataset: 1.2, 2.4, -0.6, 3.0", "hasFraction": false, "options": ["A) 2.4", "B) 3.0", "C) 3.6", "D) 4.2"], "correct": 2, "explain": "3.0 - (-0.6) = 3.6."},
        {"id": "vo_sta_4", "type": "Practice: Data Analysis", "textBefore": "Range of the dataset: -1.5, -1.5, 2.5, 4.0", "hasFraction": false, "options": ["A) 4.0", "B) 5.5", "C) 2.5", "D) 6.0"], "correct": 1, "explain": "4.0 - (-1.5) = 5.5."},
        {"id": "vo_sta_5", "type": "Practice: Data Analysis", "textBefore": "Range of the dataset: 0, -3.5, 3.5, -1.5", "hasFraction": false, "options": ["A) 3.5", "B) 5.0", "C) 7.0", "D) 8.5"], "correct": 2, "explain": "3.5 - (-3.5) = 7.0."}
    ],
    "ocean-math-probability": [
        {"id": "vo_prb_1", "type": "Practice: Compound Probability", "textBefore": "Prob A = 1/2. Prob B = 1/10. Combined independent probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "20"}, "textAfter": "", "options": ["A) 1/12", "B) 1/20", "C) 3/20", "D) 1/5"], "correct": 1, "explain": "(1/2) * (1/10) = 1/20."},
        {"id": "vo_prb_2", "type": "Practice: Compound Probability", "textBefore": "Prob A = 1/3. Prob B = 1/10. Combined independent probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "30"}, "textAfter": "", "options": ["A) 1/13", "B) 1/30", "C) 2/15", "D) 1/10"], "correct": 1, "explain": "(1/3) * (1/10) = 1/30."},
        {"id": "vo_prb_3", "type": "Practice: Compound Probability", "textBefore": "Prob A = 1/4. Prob B = 1/5. Combined independent probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "20"}, "textAfter": "", "options": ["A) 1/9", "B) 1/20", "C) 9/20", "D) 1/4"], "correct": 1, "explain": "(1/4) * (1/5) = 1/20."},
        {"id": "vo_prb_4", "type": "Practice: Compound Probability", "textBefore": "Prob A = 1/5. Prob B = 1/10. Combined independent probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "50"}, "textAfter": "", "options": ["A) 1/15", "B) 1/50", "C) 3/50", "D) 1/25"], "correct": 1, "explain": "(1/5) * (1/10) = 1/50."},
        {"id": "vo_prb_5", "type": "Practice: Compound Probability", "textBefore": "Prob A = 1/2. Prob B = 1/50. Combined independent probability?", "hasFraction": true, "fracData": {"top": "1", "bottom": "100"}, "textAfter": "", "options": ["A) 1/52", "B) 1/100", "C) 3/100", "D) 1/50"], "correct": 1, "explain": "(1/2) * (1/50) = 1/100."}
    ],
    "ocean-math-word-problems": [
        {"id": "vo_wrd_1", "type": "Practice: Rate-Distance", "textBefore": "Hull Speed = 15 mph. Headcurrent = 5 mph. Distance in 2 hours?", "hasFraction": false, "options": ["A) 10 miles", "B) 20 miles", "C) 30 miles", "D) 40 miles"], "correct": 1, "explain": "Net speed = 15 - 5 = 10 mph. 10 mph * 2 hours = 20 miles."},
        {"id": "vo_wrd_2", "type": "Practice: Rate-Distance", "textBefore": "Hull Speed = 30 mph. Headcurrent = 10 mph. Distance in 30 minutes?", "hasFraction": false, "options": ["A) 10 miles", "B) 20 miles", "C) 5 miles", "D) 15 miles"], "correct": 0, "explain": "Net speed = 30 - 10 = 20 mph. 30 minutes = 0.5 hours. 20 * 0.5 = 10 miles."},
        {"id": "vo_wrd_3", "type": "Practice: Rate-Distance", "textBefore": "Hull Speed = 12 mph. Headcurrent = 2 mph. Distance in 3 hours?", "hasFraction": false, "options": ["A) 24 miles", "B) 30 miles", "C) 36 miles", "D) 42 miles"], "correct": 1, "explain": "Net speed = 12 - 2 = 10 mph. 10 mph * 3 hours = 30 miles."},
        {"id": "vo_wrd_4", "type": "Practice: Rate-Distance", "textBefore": "Hull Speed = 25 mph. Headcurrent = 5 mph. Distance in 15 minutes?", "hasFraction": false, "options": ["A) 5 miles", "B) 10 miles", "C) 15 miles", "D) 20 miles"], "correct": 0, "explain": "Net speed = 25 - 5 = 20 mph. 15 mins = 1/4 hour. 20 * (1/4) = 5 miles."},
        {"id": "vo_wrd_5", "type": "Practice: Rate-Distance", "textBefore": "Hull Speed = 18 mph. Headcurrent = 3 mph. Distance in 4 hours?", "hasFraction": false, "options": ["A) 45 miles", "B) 60 miles", "C) 72 miles", "D) 30 miles"], "correct": 0, "explain": "Net speed = 18 - 3 = 15 mph. 15 mph * 4 hours = 45 miles."}
    ],
    "ocean-math-sequences": [
        {"id": "vo_seq_1", "type": "Practice: Sequences", "textBefore": "Next item: 2, 4, 8, 14, 22, ___", "hasFraction": false, "options": ["A) 30", "B) 32", "C) 34", "D) 36"], "correct": 1, "explain": "Increments increase by 2 each step: +2, +4, +6, +8. Next is +10. 22 + 10 = 32."},
        {"id": "vo_seq_2", "type": "Practice: Sequences", "textBefore": "Next item: 5, 6, 8, 11, 15, ___", "hasFraction": false, "options": ["A) 19", "B) 20", "C) 21", "D) 22"], "correct": 1, "explain": "Increments increase by 1 each step: +1, +2, +3, +4. Next is +5. 15 + 5 = 20."},
        {"id": "vo_seq_3", "type": "Practice: Sequences", "textBefore": "Next item: 10, 12, 16, 22, 30, ___", "hasFraction": false, "options": ["A) 38", "B) 40", "C) 42", "D) 44"], "correct": 1, "explain": "Increments increase by 2 each step: +2, +4, +6, +8. Next is +10. 30 + 10 = 40."},
        {"id": "vo_seq_4", "type": "Practice: Sequences", "textBefore": "Next item: 0, 3, 8, 15, 24, ___", "hasFraction": false, "options": ["A) 33", "B) 35", "C) 37", "D) 39"], "correct": 1, "explain": "Increments expand by consecutive odd integers: +3, +5, +7, +9. Next is +11. 24 + 11 = 35."},
        {"id": "vo_seq_5", "type": "Practice: Sequences", "textBefore": "Next item: 100, 98, 94, 88, 80, ___", "hasFraction": false, "options": ["A) 72", "B) 70", "C) 68", "D) 60"], "correct": 1, "explain": "Negative increments expand by multiples of 2: -2, -4, -6, -8. Next is -10. 80 - 10 = 70."}
    ],
    "ocean-verb-synonyms": [
        {"id": "vo_syn_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: ENTHRALL", "hasFraction": false, "options": ["A) Release", "B) Captivate", "C) Project", "D) Annoy"], "correct": 1, "explain": "Enthrall means to capture the attention of; to captivate."},
        {"id": "vo_syn_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: FASCINATE", "hasFraction": false, "options": ["A) Repel", "B) Captivate", "C) Move", "D) Call"], "correct": 1, "explain": "Fascinate means to strongly attract; to captivate."},
        {"id": "vo_syn_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: CHARM", "hasFraction": false, "options": ["A) Disgust", "B) Captivate", "C) Direct", "D) Break"], "correct": 1, "explain": "To charm someone means to attract or captivate them."},
        {"id": "vo_syn_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: BEWITCH", "hasFraction": false, "options": ["A) Warn", "B) Captivate", "C) Cure", "D) Forget"], "correct": 1, "explain": "Bewitch means to cast a spell over or deeply captivate someone."},
        {"id": "vo_syn_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: MESMERIZE", "hasFraction": false, "options": ["A) Wake", "B) Captivate", "C) Hurt", "D) Lose"], "correct": 1, "explain": "Mesmerize means to hold the absolute attention of someone; to captivate."}
    ],
    "ocean-verb-modifiers": [
        {"id": "vo_mod_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: SERENE", "hasFraction": false, "options": ["A) Loud", "B) Placid", "C) Wild", "D) Heavy"], "correct": 1, "explain": "Serene means calm, quiet, and undisturbed; placid."},
        {"id": "vo_mod_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: TRANQUIL", "hasFraction": false, "options": ["A) Violent", "B) Placid", "C) Bright", "D) Deep"], "correct": 1, "explain": "Tranquil states represent placid or peaceful profiles."},
        {"id": "vo_mod_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: UNRUFFLED", "hasFraction": false, "options": ["A) Shaken", "B) Placid", "C) Torn", "D) Quick"], "correct": 1, "explain": "Unruffled surface boundaries stay quiet and placid."},
        {"id": "vo_mod_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: HALCYON", "hasFraction": false, "options": ["A) Stormy", "B) Placid / Peaceful", "C) Ancient", "D) Golden"], "correct": 1, "explain": "Halcyon days are calm, peaceful, and placid."},
        {"id": "vo_mod_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: UNTROUBLED", "hasFraction": false, "options": ["A) Anxious", "B) Placid", "C) Difficult", "D) Blind"], "correct": 1, "explain": "Untroubled conditions are completely serene and placid."}
    ],
    "ocean-verb-ana-target": [
        {"id": "vo_vbt_1", "type": "Practice: Analogies", "textBefore": "THERMOMETER : TEMPERATURE :: _________ : _________", "hasFraction": false, "options": ["A) Scale : Weight", "B) Clock : Night", "C) Compass : North", "D) Ruler : Flat"], "correct": 0, "explain": "A thermometer measures temperature; a scale measures weight."},
        {"id": "vo_vbt_2", "type": "Practice: Analogies", "textBefore": "ODOMETER : DISTANCE :: _________ : _________", "hasFraction": false, "options": ["A) Scale : Heavy", "B) Watch : Time", "C) Compass : Map", "D) Level : Line"], "correct": 1, "explain": "An odometer tracks distance traveled; a watch tracks time elapsed."},
        {"id": "vo_vbt_3", "type": "Practice: Analogies", "textBefore": "PROTRACTOR : ANGLE :: _________ : _________", "hasFraction": false, "options": ["A) Ruler : Length", "B) Balance : Gold", "C) Compass : Direction", "D) Clock : Alarm"], "correct": 0, "explain": "A protractor is built to measure geometric angles; a ruler measures length dimensions."},
        {"id": "vo_vbt_4", "type": "Practice: Analogies", "textBefore": "SPEEDOMETER : SPEED :: _________ : _________", "hasFraction": false, "options": ["A) Gauge : Pressure", "B) Chronometer : Accurate", "C) Map : Scale", "D) Level : Flat"], "correct": 0, "explain": "A speedometer quantifies speed; a pressure gauge quantifies pressure forces."},
        {"id": "vo_vbt_5", "type": "Practice: Analogies", "textBefore": "ALTIMETER : ALTITUDE :: _________ : _________", "hasFraction": false, "options": ["A) Thermometer : Hot", "B) Barometer : Pressure", "C) Compass : Magnet", "D) Clock : Watch"], "correct": 1, "explain": "An altimeter evaluates altitude profiles; a barometer evaluates air pressure forces."}
    ],
    "ocean-verb-ana-partwhole": [
        {"id": "vo_vbp_1", "type": "Practice: Analogies", "textBefore": "ISLAND : ARCHIPELAGO :: _________ : _________", "hasFraction": false, "options": ["A) Star : Galaxy", "B) Tree : Forest", "C) State : Nation", "D) All of the above"], "correct": 3, "explain": "All choices reflect parts compiling into a unified whole structural layout."},
        {"id": "vo_vbp_2", "type": "Practice: Analogies", "textBefore": "TREE : FOREST :: _________ : _________", "hasFraction": false, "options": ["A) Leaf : Plant", "B) Fish : School", "C) Wave : Ocean", "D) Rock : Cliff"], "correct": 1, "explain": "Multiple trees comprise a whole forest; multiple fish comprise an integrated whole school array."},
        {"id": "vo_vbp_3", "type": "Practice: Analogies", "textBefore": "STAR : GALAXY :: _________ : _________", "hasFraction": false, "options": ["A) Planet : System", "B) Grain : Sand dune", "C) Moon : Orbit", "D) Light : Sun"], "correct": 1, "explain": "A single star is an atomic component part of a galaxy; a single grain of sand is a component part of a dune whole."},
        {"id": "vo_vbp_4", "type": "Practice: Analogies", "textBefore": "PLAYER : TEAM :: _________ : _________", "hasFraction": false, "options": ["A) Coach : Game", "B) Musician : Orchestra", "C) Actor : Script", "D) Fan : Stadium"], "correct": 1, "explain": "A player is an component part of a team whole; a musician is a component part of an orchestra whole."},
        {"id": "vo_vbp_5", "type": "Practice: Analogies", "textBefore": "ROOM : HOUSE :: _________ : _________", "hasFraction": false, "options": ["A) Door : Lock", "B) Page : Book", "C) Roof : Sky", "D) Wall : Paint"], "correct": 1, "explain": "Rooms assemble to form a whole house layout; pages assemble to form a whole book structure."}
    ],
    "ocean-verb-ana-result": [
        {"id": "vo_vbr_1", "type": "Practice: Analogies", "textBefore": "DEHYDRATE : ARID :: _________ : _________", "hasFraction": false, "options": ["A) Freeze : Solid", "B) Burn : Ash", "C) Soak : Wet", "D) Clean : Pure"], "correct": 0, "explain": "Dehydration results in an extremely arid state; freezing results in a solid state."},
        {"id": "vo_vbr_2", "type": "Practice: Analogies", "textBefore": "EVAPORATE : VANISHED :: _________ : _________", "hasFraction": false, "options": ["A) Shatter : Broken", "B) Melt : Hot", "C) Freeze : Ice", "D) Condense : Cold"], "correct": 0, "explain": "Evaporation results in water being gone or vanished; shattering results in an item being broken."},
        {"id": "vo_vbr_3", "type": "Practice: Analogies", "textBefore": "IGNITE : BURNING :: _________ : _________", "hasFraction": false, "options": ["A) Submerge : Underwater", "B) Heat : Boiling", "C) Cool : Frozen", "D) Paint : Wet"], "correct": 0, "explain": "Ignition results in a burning state; submersion results in an item being completely underwater."},
        {"id": "vo_vbr_4", "type": "Practice: Analogies", "textBefore": "FREEZE : CONGEALED :: _________ : _________", "hasFraction": false, "options": ["A) Boil : Gaseous", "B) Melt : Liquid", "C) Compress : Dense", "D) All of the above"], "correct": 3, "explain": "All choices accurately pair an operational action to its ultimate resulting physical state description metrics."},
        {"id": "vo_vbr_5", "type": "Practice: Analogies", "textBefore": "PURIFY : STERILE :: _________ : _________", "hasFraction": false, "options": ["A) Wash : Clean", "B) Polish : Shiny", "C) Fortify : Strong", "D) Dilute : Weakened"], "correct": 3, "explain": "Purification carried to its extreme result leaves a sterile baseline; dilution carried out leaves a weakened solution profile."}
    ],
    "ocean-verb-syn-complex": [
        {"id": "vo_vsc_1", "type": "Practice: Synonyms", "textBefore": "Synonym for: MALLEABILITY", "hasFraction": false, "options": ["A) Stiffness", "B) Fluidity / Flexibility", "C) Fragility", "D) Weight"], "correct": 1, "explain": "Malleability implies structural flexibility, adaptability, or physical fluidity characteristics."},
        {"id": "vo_vsc_2", "type": "Practice: Synonyms", "textBefore": "Synonym for: PLIABILITY", "hasFraction": false, "options": ["A) Hardness", "B) Fluidity / Elasticity", "C) Transparency", "D) Height"], "correct": 1, "explain": "Pliable materials display elasticity, tracking high structural fluidity metrics."},
        {"id": "vo_vsc_3", "type": "Practice: Synonyms", "textBefore": "Synonym for: VERSATILITY", "hasFraction": false, "options": ["A) Constancy", "B) Fluidity / Multi-talented", "C) Failure", "D) Age"], "correct": 1, "explain": "Versatility reflects adaptability or cognitive fluidity shifts properties."},
        {"id": "vo_vsc_4", "type": "Practice: Synonyms", "textBefore": "Synonym for: ELASTICITY", "hasFraction": false, "options": ["A) Brittleness", "B) Fluidity / Flexibility", "C) Solidity", "D) Dark"], "correct": 1, "explain": "Elasticity maps to high flexibility indexes, reflecting structural fluid dynamics."},
        {"id": "vo_vsc_5", "type": "Practice: Synonyms", "textBefore": "Synonym for: RESILIENCE (structural)", "hasFraction": false, "options": ["A) Weakness", "B) Fluidity / Springiness", "C) Ruin", "D) Inversion"], "correct": 1, "explain": "Resilience in mechanics describes structural rebound flexibility or springiness fluid actions."}
    ],
    "ocean-verb-ana-antonym": [
        {"id": "vo_van_1", "type": "Practice: Analogies", "textBefore": "MUTABLE : IMMUTABLE :: _________ : _________", "hasFraction": false, "options": ["A) Volatile : Stable", "B) Heavy : Solid", "C) Clear : Lucid", "D) Hot : Boiling"], "correct": 0, "explain": "Mutable/immutable are absolute antonyms; volatile and stable are direct antonyms of behavior parameters."},
        {"id": "vo_van_2", "type": "Practice: Analogies", "textBefore": "TRANSIENT : ENDURING :: _________ : _________", "hasFraction": false, "options": ["A) Fleeting : Brief", "B) Obsolete : Current", "C) Weak : Broken", "D) Heavy : Massive"], "correct": 1, "explain": "Transient (temporary) and enduring are antonyms; obsolete and current are direct antonyms."},
        {"id": "vo_van_3", "type": "Practice: Analogies", "textBefore": "CAPRICIOUS : STEADFAST :: _________ : _________", "hasFraction": false, "options": ["A) Fickle : Constant", "B) Loud : Vocal", "C) Safe : Secure", "D) Fast : Raging"], "correct": 0, "explain": "Capricious and steadfast are behavioral antonyms; fickle and constant are direct antonyms."},
        {"id": "vo_van_4", "type": "Practice: Analogies", "textBefore": "MERCURIAL : INVARIABLE :: _________ : _________", "hasFraction": false, "options": ["A) Volatile : Constant", "B) Bright : Luminous", "C) Soft : Fine", "D) Deep : Abyssal"], "correct": 0, "explain": "Mercurial (highly changeable) and invariable are antonyms; volatile and constant are direct antonyms."},
        {"id": "vo_van_5", "type": "Practice: Analogies", "textBefore": "TEMPORARY : PERMANENT :: _________ : _________", "hasFraction": false, "options": ["A) Brief : Long-standing", "B) Tiny : Minute", "C) Solid : Rigid", "D) Clear : Pure"], "correct": 0, "explain": "Temporary and permanent are antonyms; brief and long-standing are direct temporal antonyms."}
    ],
    "ocean-read-main": [
        {"id": "vo_rom_1", "type": "Practice: Main Idea", "textBefore": "Passage: Ocean gyres accumulate massive floating plastic fields because rotational circular currents concentrate surface debris into zero-velocity center columns over decades.<br><br>Question: Main argument?", "hasFraction": false, "options": ["A) Plastic sinks rapidly.", "B) Rotational gyre currents naturally concentrate plastic garbage fields into centralized columns over time.", "C) Oceans contain deep rift zones.", "D) Sonar waves track currents fields parameters."], "correct": 1, "explain": "The text frames the gyres' rotational movements as the primary mechanism concentrating trash fields over time."},
        {"id": "vo_rom_2", "type": "Practice: Main Idea", "textBefore": "Passage: Phytoplankton communities generate more than half of the planet's atmospheric oxygen via solar cell photosynthesis layers inside photic waters.<br><br>Question: Central focus?", "hasFraction": false, "options": ["A) Oxygen is rare in space.", "B) Phytoplankton inside photic water layers produce over half of global atmospheric oxygen cycles.", "C) Photic waves carry salt particles.", "D) Coral reefs bleach in summer seasons regularly."], "correct": 1, "explain": "Focuses on the massive global oxygen production role of photic zone phytoplankton networks."},
        {"id": "vo_rom_3", "type": "Practice: Main Idea", "textBefore": "Passage: Whale falls generate localized biological oases on the barren plain floors, feeding deep organisms for decades via decaying lipid marrow reserves.<br><br>Question: Summary?", "hasFraction": false, "options": ["A) Barren plains are empty.", "B) Decaying whale fall carcasses sustain localized biological ecosystems on deep trench floors for decades.", "C) Lipids dissolve fast in cold temperatures.", "D) Sonar grids log whale positions tracks."], "correct": 1, "explain": "The text documents how falling carcasses function as long-term resource oases for bottom-dwelling species."},
        {"id": "vo_rom_4", "type": "Practice: Main Idea", "textBefore": "Passage: Cold brine streams sink straight to the ocean bottom because freeze-exclusion processes dump massive salt fractions into remaining fluid tracking currents, spiking density coefficients.<br><br>Question: Main point?", "hasFraction": false, "options": ["A) Salt prevents freezing.", "B) High-salinity freeze exclusion currents spike density metrics, forcing cold brine streams to plunge down to the ocean floor.", "C) Brine pools are warm.", "D) Currents fade near deltas boundaries."], "correct": 1, "explain": "Explains the physics and chemical density changes that force brine streams to plunge straight down to the sea floor."},
        {"id": "vo_rom_5", "type": "Practice: Main Idea", "textBefore": "Passage: Deep benthic trenches lock up immense volumes of tectonic carbon when oceanic subduction faults force mud arrays down underneath continental mantles layers.<br><br>Question: Core claim?", "hasFraction": false, "options": ["A) Mud models require recalibration.", "B) Subduction fault movements force carbon-rich mud arrays down to trap tectonic carbon underneath continental mantles.", "C) Continents float high.", "D) Faults stay quiet in winter segments lines."], "correct": 1, "explain": "Outlines the tectonic capture process that traps carbon down beneath the continental mantle layer."}
    ],
    "ocean-read-detail": [
        {"id": "vo_rod_1", "type": "Practice: Details", "textBefore": "Passage: A specific benthic rift spans a width measuring 31 miles long.", "hasFraction": false, "options": ["A) 15 miles", "B) 31 miles", "C) 45 miles", "D) 60 miles"], "correct": 1, "explain": "Explicitly numbers tracking scale at 31 miles long."},
        {"id": "vo_rod_2", "type": "Practice: Details", "textBefore": "Passage: Sonar grids record an absolute trench depth limit coordinate of 11,000 meters.", "hasFraction": false, "options": ["A) 5,000 m", "B) 8,000 m", "C) 11,000 m", "D) 15,000 m"], "correct": 2, "explain": "Explicitly maps depth benchmark boundary at 11,000 meters."},
        {"id": "vo_rod_3", "type": "Practice: Details", "textBefore": "Passage: Hydrothermal chimneys grow structural layers at a rate of 2 inches monthly under heavy flow cycles.", "hasFraction": false, "options": ["A) 1 inch", "B) 2 inches", "C) 4 inches", "D) 6 inches"], "correct": 1, "explain": "Explicitly states 2 inches growth rate monthly."},
        {"id": "vo_rod_4", "type": "Practice: Details", "textBefore": "Passage: Abyssal plain submersibles log a steady ambient temperature index mapping exactly 1 degree Celsius.", "hasFraction": false, "options": ["A) 1 deg", "B) 4 deg", "C) 8 deg", "D) 12 deg"], "correct": 0, "explain": "Explicitly isolates baseline temperature at 1 degree Celsius."},
        {"id": "vo_rod_5", "type": "Practice: Details", "textBefore": "Passage: Trench exploratory logging cruises completed an absolute total tally count of 40 descents over three seasons.", "hasFraction": false, "options": ["A) 20", "B) 30", "C) 40", "D) 50"], "correct": 2, "explain": "Explicitly limits tally metrics sum to 40 descents."}
    ],
    "ocean-read-inference": [
        {"id": "vo_roi_1", "type": "Practice: Inference", "textBefore": "Passage: When sound navigation channels inside deep water layers distort due to sudden changes in core temperature indices, modern submarine tracking systems completely lose audio locks on distant fleet arrays.", "hasFraction": false, "options": ["A) Submarines communicate via radio waves underwater.", "B) Underwater sound wave propagation paths rely heavily on consistent water temperature layers to travel long distances without breaking up.", "C) Temperature tracking is disconnected from sonar data.", "D) Distortion values drop in deep trenches automatically."], "correct": 1, "explain": "Because sudden shifts in water temperature disrupt audio locks on distant fleets, long-range sonar tracking requires stable water layers to function without distortion."},
        {"id": "vo_roi_2", "type": "Practice: Inference", "textBefore": "Passage: Deep benthic crabs that lose access to neighboring volcanic vent sulfur streams experience rapid full muscle deterioration cycles despite high concentrations of falling surface organic particles.", "hasFraction": false, "options": ["A) Surface debris serves as the primary food index.", "B) Benthic crabs depend on the sulfur-driven chemosynthetic vent networks to sustain vital metabolic functions.", "C) Crabs migrate to shallow waters in winter.", "D) Volcanic gasses are toxic to crabs cells metrics."], "correct": 1, "explain": "Suffering muscle decay when sulfur streams leave despite surface debris shows that these crabs rely on the vent ecosystems to survive."},
        {"id": "vo_roi_3", "type": "Practice: Inference", "textBefore": "Passage: Deep-sea glass sponges construct intricate crystalline skeletons from dissolved silica that resist fracturing even when exposed to crushing pressures at depth.", "hasFraction": false, "options": ["A) Silica is a highly fragile, soft organic chemical compound element.", "B) Crystalline silica skeletons offer unique, high-strength structural reinforcement configurations that withstand immense depth pressures.", "C) Sponges dissolve in shallow water.", "D) Depth pressures decrease near volcanic vents indices."], "correct": 1, "explain": "Withstanding immense deep-sea pressures without fracturing proves that their structural silica skeletons offer extreme reinforcement and strength."},
        {"id": "vo_roi_4", "type": "Practice: Inference", "textBefore": "Passage: Abyssal anglerfish possess highly reduced bone structures and minimal muscular networks, spending hours hovering almost motionless in dark midwater zones.", "hasFraction": false, "options": ["A) Anglerfish are highly active sprint predators.", "B) Minimizing muscle tissue and motion conserves vital metabolic energy in food-scarce deep water systems.", "C) Motionless states attract massive predators columns.", "D) Anglerfish bone density increases with depth constraints."], "correct": 1, "explain": "Reducing bone and muscle tissue to stay motionless implies an energy-conservation adaptation to survive in a low-food environment."},
        {"id": "vo_roi_5", "type": "Practice: Inference", "textBefore": "Passage: Deep water layers sampled near oceanic trenches show completely zero traces of agricultural plasticizers, unlike surface currents that carry significant industrial plastic concentrations.", "hasFraction": false, "options": ["A) Surface currents stay isolated from trench waters.", "B) Trench depths remain shielded from immediate surface chemical contamination due to slower vertical circulation currents.", "C) Plastic structures evaporate in cold temperatures frames.", "D) Trenches are packed with chemical filtering algae rows."], "correct": 1, "explain": "The total absence of plastic chemicals in deep trenches, compared to surface waters, implies that slower vertical circulation guards deep-sea environments from immediate surface contamination."}
    ],
    "ocean-read-purp": [
        {"id": "vo_rpp_1", "type": "Practice: Purpose", "textBefore": "Passage: Deep trenches harbor life. For example, specialized amphipods thrive at the absolute bottom of the Mariana Rift, processing wooden organic debris sheets falling from surface ships.", "hasFraction": false, "options": ["A) Sell boats", "B) Illustrate deep trench survival capacity with a specific biological example", "C) Describe wooden decay rates", "D) Encourage deep shipping lanes expansions"], "correct": 1, "explain": "The amphipod details serve as a concrete example to back up the claim that deep ocean trenches harbor unique life forms."},
        {"id": "vo_rpp_2", "type": "Practice: Purpose", "textBefore": "Passage: Subsurface internal waves displace deep thermal layers vertically, mixing vital nutrient currents upward without breaking surface boundaries layers configurations.", "hasFraction": false, "options": ["A) Explain internal wave water mixing and nutrient transport functions", "B) Sell surf boards", "C) Teach shipping navigation tracks", "D) Describe wave crest limits"], "correct": 0, "explain": "The paragraph explains the mechanics of subsurface internal waves to illustrate how they transport nutrients upward without breaking the surface line."},
        {"id": "vo_rpp_3", "type": "Practice: Purpose", "textBefore": "Passage: Deepwater tracking channels utilize precise acoustic frequencies. When localized salinity matrices shift due to ice melt events, the audio signal speed changes, alerting centers to climatic changes.", "hasFraction": false, "options": ["A) Explain acoustic tracking alterations as climate shift indicators", "B) Study ice crystals weights", "C) Describe pipe scales", "D) Sell hydrophones keys"], "correct": 0, "explain": "The text documents how salinity shifts alter acoustic speeds to explain how underwater audio data acts as a climate tracking tool."},
        {"id": "vo_rpp_4", "type": "Practice: Purpose", "textBefore": "Passage: Dumping heavy solid waste blocks into ocean trenches often fails as a containment strategy, as subduction currents push materials back up via lateral tectonic fractures over deep time scales.", "hasFraction": false, "options": ["A) Promote industrial trash lines", "B) Warn about the long-term containment failures and hazards of trench waste dumping attempts", "C) Describe mud weights scales", "D) Recommend shipping lanes expansions lines"], "correct": 1, "explain": "The warning details how subduction currents push waste back up over time to strongly caution against using trenches as dumping grounds."},
        {"id": "vo_rpp_5", "type": "Practice: Purpose", "textBefore": "Passage: Standard surface currents change paths rapidly under wind variations. A deep thermohaline conveyor belt, however, operates as a global climate engine, maintaining stable thermal distribution patterns across centuries.", "hasFraction": false, "options": ["A) Contrast volatile surface currents with the long-term stability of the deep thermohaline conveyor belt system", "B) Teach grid compass tracking parameters", "C) Describe surface waves heights scales", "D) Recommend harvesting deep salt layers"], "correct": 0, "explain": "The comparison highlights the superior long-term stability of the deep thermohaline conveyor belt system over volatile surface currents."}
    ]
};