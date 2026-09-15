/**
 * HREEM AURA ACADEMY — Application Controller, E-Commerce Cart Engine & Router
 */

// Comprehensive 25 Course Dataset with full detail metadata and subject-matched images
const COURSES_DATA = [
  { slug: 'lal-kitab', title: 'Lal Kitab', cat: 'numerology', icon: 'fa-book-quran', badge: 'POPULAR', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80', desc: 'Ancient astrological science of quick remedies, planetary analysis, and practical solutions.', fullDesc: 'Lal Kitab is a unique set of books on palmistry and astrology. It introduces a brand new style of horoscope analysis with quick, effective, and non-cumbersome remedies.' },
  { slug: 'vastu', title: 'Vastu', cat: 'vastu', icon: 'fa-compass-drafting', badge: 'MASTER', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', desc: 'Harmonize residential and commercial living spaces for health, wealth, and spiritual peace.', fullDesc: 'Vastu Shastra is the traditional Indian system of architecture. This course covers spatial geometry, directional energies, five element balance, and non-demolition corrective remedies.' },
  { slug: 'mobile-numerology', title: 'Mobile Numerology', cat: 'numerology', icon: 'fa-mobile-screen-button', badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', desc: 'Align your personal mobile phone number frequency with wealth and career growth luck.', fullDesc: 'Your mobile phone number is an active daily acoustic and electromagnetic frequency magnet. Learn how to calculate, choose, and correct your mobile number for prosperity.' },
  { slug: 'mobile-yantra', title: 'Mobile Yantra', cat: 'remedies', icon: 'fa-kaaba', badge: 'REMEDY', image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80', desc: 'Sacred geometric digital yantras for mobile wallpaper activation and energy shield protection.', fullDesc: 'Discover the power of sacred geometry applied to modern digital screens. Consecrate mobile yantras to protect your aura and attract favorable synchronicities.' },
  { slug: 'money-magic-wallet', title: 'Money Magic Wallet', cat: 'remedies', icon: 'fa-wallet', badge: 'PROSPERITY', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80', desc: 'Secrets of magnetizing money through wallet consecration, color frequencies, and sacred herbs.', fullDesc: 'Transform your wallet into an active money attractor. Learn color vibrational alignment, sacred herbal inserts, and energetic wallet discipline.' },
  { slug: 'akshat-kalash', title: 'Akshat Kalash', cat: 'remedies', icon: 'fa-jar', badge: 'SACRED', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80', desc: 'Vedic pot ritual activation for household wealth retention and continuous divine grace.', fullDesc: 'Akshat Kalash is an ancient consecration ritual using energized rice, copper, and sacred herbs to stabilize wealth and invoke Goddess Lakshmi in your home.' },
  { slug: 'coin-currency-prediction', title: 'Coin Currency Prediction', cat: 'divination', icon: 'fa-coins', badge: 'ADVANCED', image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80', desc: 'Intuitive forecasting techniques using ancient currency symbols and planetary energies.', fullDesc: 'Master the art of coin divination for intuitive guidance on financial decisions, business partnerships, and market timing.' },
  { slug: 'color-therapy', title: 'Color Therapy', cat: 'healing', icon: 'fa-palette', badge: 'HEALING', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80', desc: 'Balance chakra energy channels using specialized color frequency wavelengths and clothing.', fullDesc: 'Color therapy (Chromotherapy) uses light and color to balance energy wherever our bodies are lacking, whether physically, emotionally, or spiritually.' },
  { slug: 'crystal-therapy', title: 'Crystal Therapy', cat: 'remedies', icon: 'fa-gem', badge: 'POPULAR', image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=600&q=80', desc: 'Harness high-vibrational gemstone grids for aura shield, stress reduction, and healing.', fullDesc: 'Comprehensive guide to selecting, cleansing, energizing, and programming crystals for body layouts, home grids, and wearable aura shields.' },
  { slug: 'ganesha-blessing-cards', title: 'Ganesha Blessing Cards', cat: 'divination', icon: 'fa-square-poll-vertical', badge: 'DIVINE', image: 'https://images.unsplash.com/photo-1567591370501-f25b3a4a034d?auto=format&fit=crop&w=600&q=80', desc: 'Divine oracle card reading techniques to invoke Lord Ganesha for removing life obstacles.', fullDesc: 'Learn how to read and interpret sacred Lord Ganesha oracle cards for obstacle removal, new beginnings, and daily divine guidance.' },
  { slug: 'house-numerology', title: 'House Numerology', cat: 'numerology', icon: 'fa-house-chimney-window', badge: 'VASTU', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80', desc: 'Evaluate house number vibrations to ensure harmony, family happiness, and abundance.', fullDesc: 'Every home carries a numerical vibration that influences resident relationships, peace, and financial stability. Learn how to calculate and remedy house numbers.' },
  { slug: 'money-reiki', title: 'Money Reiki', cat: 'healing', icon: 'fa-sack-dollar', badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80', desc: 'High-frequency Reiki energy attunement specifically engineered for clearing money blocks.', fullDesc: 'Money Reiki focuses specifically on the Spiritual Energy of Money. Learn attunements, symbols, and distance healing to clear financial karma and negative beliefs.' },
  { slug: 'mojo-bag', title: 'Mojo Bag', cat: 'remedies', icon: 'fa-bag-shopping', badge: 'TALISMAN', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80', desc: 'Creation and consecration of personalized talismanic pouch remedies for luck and shielding.', fullDesc: 'A Mojo Bag is a prayer in a bag—a personalized talisman pouch filled with botanical, mineral, and symbolic items consecrated for protection, luck, or love.' },
  { slug: 'maha-remedy', title: 'Maha Remedy', cat: 'remedies', icon: 'fa-sun', badge: 'MASTER', image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=80', desc: 'Master level Vedic remedies combining herbs, yantras, and mantras for rapid life transformation.', fullDesc: 'The ultimate synthesis of Vedic remedies. Combines herbology, yantra activation, mantra recitation, and planetary timing for intense situation resolution.' },
  { slug: 'reiki-grand-master', title: 'Reiki Grand Master', cat: 'healing', icon: 'fa-crown', badge: 'GRAND MASTER', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80', desc: 'Complete mastership in Usui Reiki, attunement passing, distance healing, and teacher level training.', fullDesc: 'The highest level of Usui Reiki training. Master the attunement processes, advanced secret symbols, student training methodologies, and deep spiritual mastery.' },
  { slug: 'rudraksha', title: 'Rudraksha', cat: 'remedies', icon: 'fa-circle-dot', badge: 'SACRED', image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=600&q=80', desc: 'Mystical science of 1 to 14 Mukhi Rudraksha selection, purification, and aura alignment.', fullDesc: 'Discover the electromagnetic power of sacred Rudraksha beads. Learn mukhi classifications, planetary associations, wearing rules, and authentic testing.' },
  { slug: 'runes-prediction', title: 'Runes Prediction', cat: 'divination', icon: 'fa-scroll', badge: 'DIVINATION', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', desc: 'Ancient Nordic symbols divination for intuitive insight, protection, and decision making.', fullDesc: 'Explore Elder Futhark rune casting. Learn the esoteric meanings of all 24 runes, casting layouts, and how to combine rune wisdom with personal intuition.' },
  { slug: 'shiv-sharva', title: 'Shiv Sharva', cat: 'healing', icon: 'fa-om', badge: 'DIVINE', image: 'https://images.unsplash.com/photo-1608976328227-31362e5b029e?auto=format&fit=crop&w=600&q=80', desc: 'Lord Shiva divine energy invocation practices for deep spiritual transcendence and karmic cleansing.', fullDesc: 'Sacred meditative and mantra practices dedicated to Lord Shiva for destroying negative karmic patterns, physical healing, and ultimate spiritual liberation.' },
  { slug: 'tarot-card', title: 'Tarot Card', cat: 'divination', icon: 'fa-layer-group', badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?auto=format&fit=crop&w=600&q=80', desc: 'Intuitive 78-card archetypal divination masterclass for revealing past, present, and future.', fullDesc: 'Complete masterclass covering Major and Minor Arcana, court cards, intuitive interpretation, client consultation ethics, and multi-card spreads.' },
  { slug: 'vehicle-numerology', title: 'Vehicle Numerology', cat: 'numerology', icon: 'fa-car-side', badge: 'NEW', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', desc: 'Discover the relationship between vehicle numbers, numerological vibrations and personal energy through practical numerology guidance.', fullDesc: 'Your vehicle number plate carries continuous motion energy. Learn how vehicle numbers affect safety, travel ease, breakdowns, and personal wealth alignment.' },
  { slug: 'vision-board', title: 'Vision Board', cat: 'remedies', icon: 'fa-chart-pie', badge: 'MANIFESTATION', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80', desc: 'Subconscious mind programming and sacred geometry manifestation vision board creation.', fullDesc: 'Combine modern neuro-plasticity principles with sacred geometry and elemental placement to build high-potency manifestation vision boards that yield results.' },
  { slug: 'matichi-matki-rituals', title: 'Matichi Matki Rituals', cat: 'remedies', icon: 'fa-vessel-filled', badge: 'RITUAL', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80', desc: 'Traditional earthen pot remedies for absorbing household negative energy and debt relief.', fullDesc: 'Sacred earthen pot (matki) rituals rooted in traditional rural remedies for absorbing family strife, neutralizing evil eye, and stabilizing financial debt.' },
  { slug: 'vastu-reiki', title: 'Vastu Reiki', cat: 'healing', icon: 'fa-house-signal', badge: 'VASTU HEALING', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', desc: 'Infusing spatial structures with distance Reiki energy for clearing land doshas.', fullDesc: 'A powerful hybrid practice using high-vibrational Reiki energy to cleanse residential and commercial space land memory, structural stress, and earth energies.' },
  { slug: 'bath-salt-making', title: 'Bath Salt Making', cat: 'remedies', icon: 'fa-shower', badge: 'AURA CLEANSE', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Crafting custom herbal and crystal-infused aura cleansing bath salts for stress release.', fullDesc: 'Learn the formulation of ritual bath salts using Himalayan pink salt, essential oils, dried herbs, and crystal charges for aura cleansing and psychic relief.' },
  { slug: 'digital-marketing-course', title: 'Digital Marketing Course', cat: 'numerology', icon: 'fa-bullhorn', badge: 'BUSINESS', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', desc: 'Grow your spiritual practice, consultation business, and social media presence effectively.', fullDesc: 'A tailored course specifically for spiritual healers, astrologers, and tarot readers to build their online brand, social media, website presence, and client funnel.' }
];

// Structured 3D Services Dataset
const SERVICES_DATA = [
  {
    id: 'srv-vastu',
    category: 'consultation',
    title: 'Vastu Energy Audit & Spatial Correction',
    titleMr: 'वास्तू ऊर्जा ऑडीट व तोडफोड विरहित उपाय',
    icon: 'fa-compass-drafting',
    bgClass: 'vastu-bg',
    badge: 'RESIDENTIAL & COMMERCIAL',
    desc: 'Comprehensive directional checking, 5-element balancing, Brahmasthan audit, and non-demolition remedial correction.',
    descMr: 'तोडफोड न करता घर, दुकान व ऑफिसमधील वास्तू दोष दूर करून प्रगती व शांती आणणारा वास्तू सल्ला.',
    features: ['Directional Compass Checking', 'Brahmasthan Energy Alignment', 'Non-Demolition Remedies', 'Geopathic Stress Check'],
    price: '1-on-1 Consultation'
  },
  {
    id: 'srv-tarot',
    category: 'consultation',
    title: 'Archetypal Tarot Reading & Life Guidance',
    titleMr: 'टॅरो कार्ड रीडिंग व भविष्य मार्गदर्शन',
    icon: 'fa-layer-group',
    bgClass: 'divination-bg',
    badge: 'CAREER, LOVE & FINANCE',
    desc: 'Intuitive 78-card archetypal spreads to illuminate upcoming career choices, relationship alignment, and spiritual guidance.',
    descMr: 'टॅरो कार्ड्सच्या माध्यमातून तुमच्या भविष्यातील निर्णय, करिअर आणि नात्यांविषयी सखोल मार्गदर्शन.',
    features: ['Detailed 78-Card Spread', 'Relationship & Marriage Guidance', 'Business & Career Outlook', 'Actionable Remedies'],
    price: 'Personal Session'
  },
  {
    id: 'srv-numerology',
    category: 'consultation',
    title: 'Name & Mobile Numerology Consultation',
    titleMr: 'नाम व मोबाईल अंकशास्त्र सल्ला',
    icon: 'fa-arrow-down-1-9',
    bgClass: 'numerology-bg',
    badge: 'WEALTH & FREQUENCY',
    desc: 'Name vibration alignment, mobile number calculation, date of birth grid analysis, and business name luck correction.',
    descMr: 'तुमचे नाव, मोबाईल नंबर आणि जन्मतारीख यांच्यातील सुसंवाद साधून आर्थिक व व्यावसायिक यश मिळवा.',
    features: ['Name Frequency Correction', 'Mobile Number Analysis', 'Lucky Number Grid', 'Business Name Alignment'],
    price: 'Personal Consultation'
  },
  {
    id: 'srv-lalkitab',
    category: 'consultation',
    title: 'Lal Kitab Astrological Consultation',
    titleMr: 'लाल किताब ज्योतिष सल्ला व तात्काळ उपाय',
    icon: 'fa-book-quran',
    bgClass: 'lalkitab-bg',
    badge: 'KARMIC REMEDIES',
    desc: 'Astrological diagnosis of planetary debts, karmic flaws, and fast-acting practical prescriptions for rapid relief.',
    descMr: 'ग्रहांच्या त्रासावर लाल किताबानुसार सोपे, जलद आणि प्रभावी उपाय जे त्वरित सकारात्मक परिणाम देतात.',
    features: ['Planetary Debt Diagnosis', 'Fast-acting Remedies', 'Household Ritual Prescriptions', 'Personalized Horoscope Analysis'],
    price: 'Horoscope Session'
  },
  {
    id: 'srv-reiki',
    category: 'healing',
    title: 'Reiki Energy & Distance Healing Session',
    titleMr: 'रेकी ऊर्जा व डिस्टन्स हीलिंग सत्र',
    icon: 'fa-hands-holding-circle',
    bgClass: 'healing-bg',
    badge: 'REIKI GRAND MASTER',
    desc: 'Deep energetic purification, aura cleansing, chakra balance, and distance healing for physical and emotional wellbeing.',
    descMr: 'डॉ. वैशाली बुटे यांच्या प्रत्यक्ष किंवा डिस्टन्स रेकीद्वारे आजार, ताणतणाव आणि नकारात्मक ऊर्जेचे निरसन.',
    features: ['Aura Cleansing & Shielding', 'Chakra Balancing', 'Distance Energy Transfer', 'Emotional Blockage Release'],
    price: 'Healing Session'
  },
  {
    id: 'srv-crystal',
    category: 'healing',
    title: 'Crystal Therapy & Aura Alignment',
    titleMr: 'क्रिस्टल थेरपी व ऑरा संतुलन',
    icon: 'fa-gem',
    bgClass: 'crystal-bg',
    badge: 'HIGH-VIBRATION CRYSTALS',
    desc: 'Targeted crystal layout sessions to clear psychic fatigue, revitalize life force, and amplify positive intentions.',
    descMr: 'अभिमंत्रित क्रिस्टल्सच्या साहाय्याने ऑरा शुद्धीकरण आणि शरीरातील ऊर्जा केंद्रांचे संतुलन.',
    features: ['Custom Crystal Grid Placement', 'Psychic Shielding', 'Stress & Anxiety Relief', 'Consecrated Crystal Selection'],
    price: 'Therapy Session'
  },
  {
    id: 'srv-angel',
    category: 'healing',
    title: 'Angel Therapy & Divine Invocation',
    titleMr: 'एंजेल थेरपी व दिव्य देवदूत मार्गदर्शन',
    icon: 'fa-feather-pointed',
    bgClass: 'healing-bg',
    badge: 'ANGELIC MESSAGES',
    desc: 'Connecting with angelic realms for divine protection, cord cutting, karmic healing, and angel oracle messages.',
    descMr: 'देवदूतांच्या ऊर्जेशी जोडून वैयक्तिक संकटमुक्ती, आत्मिक शांतता आणि दिव्य संदेश प्राप्त करा.',
    features: ['Angelic Cord Cutting', 'Divine Protection Shield', 'Angel Oracle Messages', 'Peace & Anxiety Healing'],
    price: 'Divine Session'
  },
  {
    id: 'srv-training',
    category: 'remedies',
    title: 'Live Certified Masterclasses & Mentorship',
    titleMr: 'थेट ऑनलाईन प्रमाणित मास्टरक्लास व मार्गदर्शन',
    icon: 'fa-award',
    bgClass: 'vastu-bg',
    badge: 'HREEM AURA CERTIFIED',
    desc: 'Direct video masterclasses in Reiki, Vastu, Numerology, and Tarot with lifetime student mentorship and certification.',
    descMr: 'डॉ. वैशाली बुटे यांच्याकडून थेट ऑनलाईन प्रशिक्षण घ्या आणि ह्रीं ऑरा अकॅडमीचे प्रमाणपत्र मिळवा.',
    features: ['Live Interactive Masterclass', 'Detailed Study PDF Manuals', 'ISO & MSME Recognized Cert', 'Lifetime Mentorship Group'],
    price: 'Certification Program'
  }
];

// Physical Products Data Structure with Prices & Variations
const PRODUCTS_DATA = [
  {
    "id": "prod-all-rashi-collection",
    "slug": "complete-12-rashi-energetics-collection",
    "name": "Complete 12 Rashi Sacred Bracelet Collection",
    "nameMr": "सर्व १२ राशी अभिमंत्रित ब्रेसलेट संग्रह",
    "price": 15999,
    "priceDisplay": "₹15,999",
    "priceDisplayMr": "₹१५,९९९",
    "image": "assets/images/bracelets/all_rashi_featured.png",
    "category": "rashi",
    "badge": "12 RASHI SET",
    "orbClass": "glow-gold",
    "desc": "Complete sacred collection of all 12 energised Rashi bracelets handcrafted with authentic natural stones and consecrated by Dr. Vaishali Bute.",
    "descMr": "डॉ. वैशाली बुटे यांनी अभिमंत्रित केलेल्या संपूर्ण १२ राशींच्या ब्रेसलेटचा विशेष संग्रह. घर, कार्यालय आणि संपूर्ण कुटुंबासाठी अत्यंत प्रभावी.",
    "features": [
        "Includes All 12 Rashi Bracelets",
        "Personalized Consecration",
        "Aura Protection Shield",
        "Luxury Velvet Presentation Box"
    ],
    "usage": "Keep in your sacred altar, Vastu energetic center, or wear matching daily zodiac alignments.",
    "care": "Cleanse once a month under moonlight or with sage incense. Avoid chemical detergents.",
    "variants": [
        {
            "name": "Complete 12-Piece Collection Box",
            "price": 15999
        }
    ]
},
  // 12 Rashi Bracelets
  {
    id: 'prod-aries',
    slug: 'mesha-aries-rashi-bracelet',
    name: 'Mesha (Aries) Rashi Bracelet',
    nameMr: 'मेष राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/aries.png',
    category: 'rashi',
    badge: 'ARIES / MESHA',
    orbClass: 'glow-red',
    desc: 'Hand-strung energized gemstone bracelet designed for Aries born individuals to enhance Mars energy, vitality, and career courage.',
    descMr: 'मेष राशीच्या व्यक्तींसाठी मंगळ ग्रहाचे तेज आणि धैर्य वाढवण्यासाठी डॉ. वैशाली बुटे यांनी अभिमंत्रित केलेले विशेष राशी ब्रेसलेट.',
    features: ['100% Authentic Gemstones', 'Energized by Dr. Vaishali Bute', 'Stretchable Elastic Band', 'Aura Protection Shield'],
    usage: 'Wear on your right wrist on Tuesday morning after offering morning prayers.',
    care: 'Cleanse once a month under moonlight or with sage incense. Avoid chemical detergents.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-taurus',
    slug: 'vrishabha-taurus-rashi-bracelet',
    name: 'Vrishabha (Taurus) Rashi Bracelet',
    nameMr: 'वृषभ राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/taurus.png',
    category: 'rashi',
    badge: 'TAURUS / VRISHABHA',
    orbClass: 'glow-green',
    desc: 'Attracts luxury, relationship stability, material abundance, and strengthens Venusian energy flow.',
    descMr: 'शुक्र ग्रहाची कृपा, आकर्षण, आर्थिक स्थिरता आणि नात्यांमधील गोडवा वाढवणारे वृषभ राशी ब्रेसलेट.',
    features: ['Natural Green & Pink Quartz', 'Venusian Energy Consecration', 'Durable Stretch Cord'],
    usage: 'Wear on Friday morning after cleansing with holy water or raw milk.',
    care: 'Recharge under full moonlight. Keep away from harsh chemicals.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-gemini',
    slug: 'mithuna-gemini-rashi-bracelet',
    name: 'Mithuna (Gemini) Rashi Bracelet',
    nameMr: 'मिथुन राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/gemini.png',
    category: 'rashi',
    badge: 'GEMINI / MITHUNA',
    orbClass: 'glow-gold',
    desc: 'Enhances communication skills, business intellect, sharpness, and pacifies Mercury transits.',
    descMr: 'बुध ग्रहाची बुद्धिमत्ता, संवादकौशल्य आणि व्यापारातील यश वाढवणारे मिथुन राशी ब्रेसलेट.',
    features: ['Natural Aventurine & Citrine', 'Mercury Mantra Activation', 'Comfort Fit'],
    usage: 'Wear on Wednesday morning after morning meditation.',
    care: 'Cleanse with running water and charge with morning sunlight.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-cancer',
    slug: 'karka-cancer-rashi-bracelet',
    name: 'Karka (Cancer) Rashi Bracelet',
    nameMr: 'कर्क राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/cancer.png',
    category: 'rashi',
    badge: 'CANCER / KARKA',
    orbClass: 'glow-silver',
    desc: 'Soothes emotional volatility, promotes deep mental peace, intuition, and balances Lunar frequency.',
    descMr: 'चंद्र ग्रहाचे मानसिक स्वास्थ्य, शांतता आणि भावनिक स्थैर्य प्रदान करणारे कर्क राशी ब्रेसलेट.',
    features: ['Natural Moonstone & Selenite', 'Lunar Energy Charging', 'Premium Polish'],
    usage: 'Wear on Monday morning facing East.',
    care: 'Recharge under Monday moonlight or Selenite plate.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-leo',
    slug: 'simha-leo-rashi-bracelet',
    name: 'Simha (Leo) Rashi Bracelet',
    nameMr: 'सिंह राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/leo.png',
    category: 'rashi',
    badge: 'LEO / SIMHA',
    orbClass: 'glow-gold',
    desc: 'Magnifies leadership, magnetic charisma, confidence, authority, and invokes Solar blessings.',
    descMr: 'सूर्य ग्रहाचे तेज, नेतृत्वगुण, आत्मविश्वास आणि राजयोग प्रदान करणारे सिंह राशी ब्रेसलेट.',
    features: ['Sunstone & Tiger Eye Beads', 'Solar Mantra Consecration', 'Unisex Luxury Design'],
    usage: 'Wear on Sunday morning during sunrise.',
    care: 'Recharge in early morning gentle sunlight for 30 minutes.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-virgo',
    slug: 'kanya-virgo-rashi-bracelet',
    name: 'Kanya (Virgo) Rashi Bracelet',
    nameMr: 'कन्या राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/virgo.png',
    category: 'rashi',
    badge: 'VIRGO / KANYA',
    orbClass: 'glow-green',
    desc: 'Sharpens analytical clarity, health wellness, wealth management, and clears Mercury blockages.',
    descMr: 'उत्तम आरोग्य, आर्थिक शिस्त आणि बौद्धिक प्रगती देणारे कन्या राशी ब्रेसलेट.',
    features: ['Green Jade & Moss Agate', 'Vedic Consecration', 'Flexible Fit'],
    usage: 'Wear on Wednesday morning.',
    care: 'Cleanse with fresh water.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-libra',
    slug: 'tula-libra-rashi-bracelet',
    name: 'Tula (Libra) Rashi Bracelet',
    nameMr: 'तुळ राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/libra.png',
    category: 'rashi',
    badge: 'LIBRA / TULA',
    orbClass: 'glow-pink',
    desc: 'Harmonizes partnerships, marital happiness, aesthetic refinement, and Venusian prosperity.',
    descMr: 'नात्यांमधील गोडवा, वैवाहिक सुख आणि आर्थिक आकर्षण वाढवणारे तुळ राशी ब्रेसलेट.',
    features: ['Rose Quartz & Opalite', 'Venus Attunement', 'Handcrafted Quality'],
    usage: 'Wear on Friday morning.',
    care: 'Keep in velvet box when not in use.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-scorpio',
    slug: 'vrishchika-scorpio-rashi-bracelet',
    name: 'Vrishchika (Scorpio) Rashi Bracelet',
    nameMr: 'वृश्चिक राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/scorpio.png',
    category: 'rashi',
    badge: 'SCORPIO / VRISHCHIKA',
    orbClass: 'glow-darkred',
    desc: 'Unlocks intuitive transformation, shields against hidden evil eye, and strengthens aura.',
    descMr: 'गुप्त शत्रूंपासून संरक्षण, तीव्र निर्णयक्षमता आणि सुरक्षितता देणारे वृश्चिक राशी ब्रेसलेट.',
    features: ['Red Jasper & Obsidian', 'Aura Shield Activation', 'High Elastic Cord'],
    usage: 'Wear on Tuesday morning.',
    care: 'Smudge with incense smoke regularly.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-sagittarius',
    slug: 'dhanu-sagittarius-rashi-bracelet',
    name: 'Dhanu (Sagittarius) Rashi Bracelet',
    nameMr: 'धनु राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/sagittarius.png',
    category: 'rashi',
    badge: 'SAGITTARIUS / DHANU',
    orbClass: 'glow-yellow',
    desc: 'Expands spiritual wisdom, luck, travel safety, and invokes Guru Jupiter grace.',
    descMr: 'गुरु ग्रहाची कृपा, उच्च शिक्षण, नशीब आणि समृद्धी देणारे धनु राशी ब्रेसलेट.',
    features: ['Yellow Aventurine & Citrine', 'Guru Jupiter Blessings', 'Unisex Elastic'],
    usage: 'Wear on Thursday morning.',
    care: 'Keep clean and recharge under sunlight.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-capricorn',
    slug: 'makara-capricorn-rashi-bracelet',
    name: 'Makara (Capricorn) Rashi Bracelet',
    nameMr: 'मकर राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/capricorn_highres.png',
    category: 'rashi',
    badge: 'CAPRICORN / MAKARA',
    orbClass: 'glow-blue',
    desc: 'Drives career endurance, discipline, financial security, and neutralizes Saturnian delays.',
    descMr: 'शनि ग्रहाचे पाठबळ, कामात सातत्य आणि करिअरमधील अडथळे दूर करणारे मकर राशी ब्रेसलेट.',
    features: ['Blue Tiger Eye & Lapis', 'Saturn Pacification Mantra', 'Sturdy Construction'],
    usage: 'Wear on Saturday morning or evening.',
    care: 'Avoid direct chemical contact.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-aquarius',
    slug: 'kumbha-aquarius-rashi-bracelet',
    name: 'Kumbha (Aquarius) Rashi Bracelet',
    nameMr: 'कुंभ राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/aquarius_highres.png',
    category: 'rashi',
    badge: 'AQUARIUS / KUMBHA',
    orbClass: 'glow-violet',
    desc: 'Fosters innovative thinking, social influence, wealth accumulation, and balances Rahu/Saturn.',
    descMr: 'नाविन्यपूर्ण विचार, सामाजिक प्रतिष्ठा आणि आर्थिक यश देणारे कुंभ राशी ब्रेसलेट.',
    features: ['Amethyst & Sodalite Beads', 'Rahu-Saturn Harmony Charge', 'Stretch Band'],
    usage: 'Wear on Saturday morning.',
    care: 'Recharge with Selenite plate.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },
  {
    id: 'prod-pisces',
    slug: 'meena-pisces-rashi-bracelet',
    name: 'Meena (Pisces) Rashi Bracelet',
    nameMr: 'मीन राशी अभिमंत्रित ब्रेसलेट',
    price: 1499,
    priceDisplay: '₹1,499',
    priceDisplayMr: '₹१,४९९',
    image: 'assets/images/bracelets/pisces.png',
    category: 'rashi',
    badge: 'PISCES / MEENA',
    orbClass: 'glow-cyan',
    desc: 'Awakens spiritual enlightenment, artistic creativity, emotional serenity, and Jupiterian luck.',
    descMr: 'आत्मिक शांतता, कलात्मक प्रगती आणि ईश्वरी कृपा प्रदान करणारे मीन राशी ब्रेसलेट.',
    features: ['Aquamarine & Fluorite', 'Guru Jupiter Activation', 'Gentle Comfort Fit'],
    usage: 'Wear on Thursday morning.',
    care: 'Cleanse under gentle running water.',
    variants: [
      { name: 'Standard (8mm Beads)', price: 1499 },
      { name: 'Large (10mm Beads)', price: 1799 }
    ]
  },

  // Healing Crystals & Remedies
  {
    id: 'prod-pyrite',
    slug: 'natural-pyrite-cluster',
    name: 'Natural Pyrite Cluster ("Fool\'s Gold")',
    nameMr: 'नैसर्गिक पायराईट क्लस्टर (पैशांचा लोहचुंबक)',
    price: 1850,
    priceDisplay: '₹1,850',
    priceDisplayMr: '₹१,८५०',
    image: 'assets/images/bracelets/aries.png',
    category: 'crystals',
    badge: 'WEALTH MAGNET',
    orbClass: 'glow-gold',
    desc: 'The ultimate wealth magnet crystal cluster. Place in your cash locker, office desk, or wealth corner to attract continuous cash flow.',
    descMr: 'आर्थिक यश आणि पैशांचा ओघ वाढवणारा नैसर्गिक पायराईट क्रिस्टल. ऑफिस डेस्क किंवा तिजोरीत ठेवण्यासाठी उत्तम.',
    features: ['100% Natural Raw Pyrite Specimen', 'Consecrated for Lakshmi Activation', 'Heavy Metallic Gold Luster'],
    usage: 'Keep on your cash desk, office table, or North-East wealth direction.',
    care: 'Dust gently with dry cloth. Keep dry.',
    variants: [
      { name: 'Medium Specimen (~200g)', price: 1850 },
      { name: 'Large Specimen (~400g)', price: 2800 }
    ]
  },
  {
    id: 'prod-amethyst',
    slug: 'amethyst-raw-geode',
    name: 'Amethyst Raw Geode & Healing Sphere',
    nameMr: 'अ‍ॅमेथिस्ट रॉ जिओड व हीलिंग स्फेअर',
    price: 2100,
    priceDisplay: '₹2,100',
    priceDisplayMr: '₹२,१००',
    image: 'assets/images/bracelets/aquarius.png',
    category: 'crystals',
    badge: 'INTUITION & CALM',
    orbClass: 'glow-violet',
    desc: 'Opens Third Eye Chakra, reduces stress and anxiety, promotes peaceful sleep and intuitive meditation.',
    descMr: 'मानसिक ताणतणाव दूर करून गाढ झोप आणि मनःशांती देणारा जांभळा अ‍ॅमेथिस्ट क्रिस्टल.',
    features: ['Natural Deep Violet Crystals', 'Third Eye Chakra Charging', 'Decorative Healing Piece'],
    usage: 'Place on bedroom side table or meditation room altar.',
    care: 'Cleanse with sage smoke or under moonlight.',
    variants: [
      { name: 'Standard Cluster', price: 2100 },
      { name: 'Polished Sphere', price: 2600 }
    ]
  },
  {
    id: 'prod-rosequartz',
    slug: 'rose-quartz-heart-crystal',
    name: 'Rose Quartz Heart Crystal',
    nameMr: 'रोज क्वार्ट्ज हार्ट क्रिस्टल',
    price: 1250,
    priceDisplay: '₹1,250',
    priceDisplayMr: '₹१,२५०',
    image: 'assets/images/bracelets/libra.png',
    category: 'crystals',
    badge: 'LOVE & HARMONY',
    orbClass: 'glow-pink',
    desc: 'The crystal of unconditional love and harmony. Heals emotional wounds, strengthens relationships, and attracts love.',
    descMr: 'प्रेमाचे आणि नात्यांमधील गोडव्याचे प्रतीक असलेला नैसर्गिक गुलाबी क्वार्ट्ज क्रिस्टल.',
    features: ['Hand-carved Heart Shape', 'Heart Chakra Resonance', 'Gift Ready Packaging'],
    usage: 'Keep in bedroom or carry in pocket.',
    care: 'Wash gently with clean water.',
    variants: [
      { name: 'Single Heart (approx 50mm)', price: 1250 }
    ]
  },
  {
    id: 'prod-lalkitab-grid',
    slug: 'lal-kitab-crystal-grid',
    name: 'Lal Kitab Consecrated Crystal Grid',
    nameMr: 'लाल किताब मंत्रसिद्ध क्रिस्टल ग्रिड',
    price: 3500,
    priceDisplay: '₹3,500',
    priceDisplayMr: '₹३,५००',
    image: 'assets/images/bracelets/sagittarius.png',
    category: 'lalkitab',
    badge: 'LAL KITAB REMEDY',
    orbClass: 'glow-orange',
    desc: 'Custom Lal Kitab remedial crystal set consecrated according to planetary debt calculations.',
    descMr: 'लाल किताबानुसार ग्रहांचे दोष दूर करण्यासाठी डॉ. वैशाली बुटे यांनी तयार केलेली क्रिस्टल ग्रिड.',
    features: ['Custom Selected Planetary Stones', 'Consecrated Yantra Plate', 'Detailed Manual Included'],
    usage: 'Place on home altar facing East during auspicious Muhurat.',
    care: 'Follow included ritual guidelines.',
    variants: [
      { name: 'Standard Kit', price: 3500 }
    ]
  },
  {
    id: 'prod-vastu-pyramid',
    slug: 'vastu-energy-crystal-pyramid',
    name: 'Vastu Energy Crystal Pyramid',
    nameMr: 'वास्तू ऊर्जा क्रिस्टल पिरामिड',
    price: 2400,
    priceDisplay: '₹2,400',
    priceDisplayMr: '₹२,४००',
    image: 'assets/images/bracelets/capricorn.png',
    category: 'vastu',
    badge: 'VASTU CORRECTION',
    orbClass: 'glow-cyan',
    desc: 'Precision crafted crystal pyramid for residential and commercial space energy auditing and directional correction without demolition.',
    descMr: 'कोणतीही तोडफोड न करता वास्तू दोष निवारण करणारा उच्च-ऊर्जा क्रिस्टल पिरामिड.',
    features: ['Optical Grade Crystal Glass', 'Golden Sacred Geometry Grid', 'North-East Wealth Zone Activator'],
    usage: 'Place in center of hall (Brahmasthan) or North-East corner.',
    care: 'Wipe with microfiber cloth.',
    variants: [
      { name: '75mm Base Pyramid', price: 2400 },
      { name: '100mm Base Pyramid', price: 3200 }
    ]
  },
  {
    id: 'prod-tourmaline',
    slug: 'black-tourmaline-raw-shield',
    name: 'Black Tourmaline Raw Shield Stone',
    nameMr: 'ब्लॅक तूरमलीन संरक्षण शिळा',
    price: 1100,
    priceDisplay: '₹1,100',
    priceDisplayMr: '₹१,१००',
    image: 'assets/images/bracelets/scorpio.png',
    category: 'crystals',
    badge: 'PSYCHIC SHIELD',
    orbClass: 'glow-dark',
    desc: 'Powerful protection stone against negative energies, evil eye (Nazar), jealousy, and electronic EMF radiation.',
    descMr: 'वाईट नजर, नकारात्मक ऊर्जा आणि रेडिएशनपासून संरक्षण देणारा काळा तूरमलीन क्रिस्टल.',
    features: ['Raw Natural Specimen', 'High EMF Absorbing Capacity', 'Aura Grounding Stone'],
    usage: 'Place near main entrance door or computer desk.',
    care: 'Cleanse with dry salt once a fortnight.',
    variants: [
      { name: 'Medium Piece (~150g)', price: 1100 },
      { name: 'Large Piece (~300g)', price: 1750 }
    ]
  }
];

// Shopping Cart State Engine
let cartState = JSON.parse(localStorage.getItem('hreem_cart_v2')) || [];

function saveCart() {
  localStorage.setItem('hreem_cart_v2', JSON.stringify(cartState));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, quantity = 1, variantIndex = 0) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants && product.variants[variantIndex] ? product.variants[variantIndex] : null;
  const unitPrice = variant ? variant.price : (product.price || 0);
  const variantName = variant ? variant.name : '';

  const existingIndex = cartState.findIndex(item => item.id === productId && item.variantName === variantName);
  if (existingIndex > -1) {
    cartState[existingIndex].quantity += quantity;
  } else {
    cartState.push({
      id: product.id,
      slug: product.slug,
      name: product.name,
      nameMr: product.nameMr,
      image: product.image,
      unitPrice: unitPrice,
      quantity: quantity,
      variantName: variantName
    });
  }

  saveCart();
  openCartDrawer();
  const prodName = currentLanguage === 'mr' ? product.nameMr : product.name;
  showToast(`${prodName} ${getTranslation('cart.added', 'added to cart!')}`);
}

function updateCartQuantity(index, delta) {
  if (cartState[index]) {
    cartState[index].quantity += delta;
    if (cartState[index].quantity <= 0) {
      cartState.splice(index, 1);
    }
    saveCart();
  }
}

function removeFromCart(index) {
  if (cartState[index]) {
    cartState.splice(index, 1);
    saveCart();
  }
}

function calculateCartTotals() {
  let totalAmount = 0;
  cartState.forEach(item => {
    item.subtotal = item.unitPrice * item.quantity;
    totalAmount += item.subtotal;
  });
  return {
    itemCount: cartState.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: totalAmount
  };
}

function formatINR(num) {
  if (!num && num !== 0) return 'PRICE TO BE UPDATED';
  if (currentLanguage === 'mr') {
    const formatted = num.toLocaleString('en-IN');
    const devanagariDigits = {'0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९'};
    const devNum = formatted.replace(/[0-9]/g, match => devanagariDigits[match]);
    return `₹${devNum}`;
  }
  return `₹${num.toLocaleString('en-IN')}`;
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const totals = calculateCartTotals();
  if (badge) {
    badge.textContent = currentLanguage === 'mr' ? formatDevanagariNum(totals.itemCount) : totals.itemCount;
    if (totals.itemCount > 0) {
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

function formatDevanagariNum(num) {
  const devanagariDigits = {'0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९'};
  return String(num).replace(/[0-9]/g, match => devanagariDigits[match]);
}

// Render 3D Services Showcase
function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(s => {
    const title = currentLanguage === 'mr' ? s.titleMr : s.title;
    const desc = currentLanguage === 'mr' ? s.descMr : s.desc;

    return `
      <div class="service-card glass-card" data-category="${s.category}" data-id="${s.id}">
        <div>
          <div class="service-image-box ${s.bgClass}">
            <span class="service-tag-badge"><i class="fa-solid ${s.icon}"></i> ${s.badge}</span>
            <div class="service-icon-frame">
              <i class="fa-solid ${s.icon}"></i>
            </div>
          </div>
          <h3 class="service-title">${title}</h3>
          <p class="service-desc">${desc}</p>
          <ul class="service-features-list">
            ${s.features.map(f => `<li class="service-feature-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>${f}</span></li>`).join('')}
          </ul>
        </div>
        <div class="service-footer">
          <span class="service-price">${s.price}</span>
          <button class="btn btn-gold btn-sm open-booking-modal-with-service" data-service="${title}">
            <i class="fa-brands fa-whatsapp"></i> ${getTranslation('nav.book', 'BOOK CONSULTATION')}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Bind click event for service booking buttons
  document.querySelectorAll('.open-booking-modal-with-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sName = btn.getAttribute('data-service');
      openModalWithService(sName);
    });
  });

  init3DTiltEffect();
}

// Service Filtering Event Listeners
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('srv-filter-btn')) {
    document.querySelectorAll('.srv-filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.getAttribute('data-srv-filter');
    if (filter === 'all') {
      renderServices(SERVICES_DATA);
    } else {
      const filtered = SERVICES_DATA.filter(item => item.category === filter);
      renderServices(filtered);
    }
  }
});

// Render Products Grid Dynamically
function renderProducts(products) {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = products.map(p => {
    const title = currentLanguage === 'mr' ? p.nameMr : p.name;
    const desc = currentLanguage === 'mr' ? p.descMr : p.desc;
    const priceStr = formatINR(p.price);

    return `
      <div class="product-card glass-card" data-category="${p.category}" data-id="${p.id}">
        <div class="product-image-wrapper">
          <img src="${p.image}" alt="${title}" class="product-img">
          <span class="product-badge"><i class="fa-solid fa-gem"></i> ${p.badge}</span>
          <div class="product-visual-orb ${p.orbClass}"></div>
        </div>
        <div class="product-info">
          <h3 class="product-title">${title}</h3>
          <div class="product-price-box">
            <span class="price-label">${getTranslation('products.price_label', 'PRICE')}:</span>
            <span class="price-val text-gold-gradient">${priceStr}</span>
          </div>
          <p class="product-desc">${desc}</p>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button class="btn btn-gold btn-sm add-to-cart-btn" data-id="${p.id}" style="flex:1;">
              <i class="fa-solid fa-cart-plus"></i> ${getTranslation('products.add_to_cart', 'ADD TO CART')}
            </button>
            <button class="btn btn-outline btn-sm view-product-detail-btn" data-id="${p.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  init3DTiltEffect();
}

// Render Shopping Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');

  if (!container) return;

  const totals = calculateCartTotals();

  if (cartState.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-basket-shopping text-subtle-gold" style="font-size:3rem; margin-bottom:1rem;"></i>
        <p>${getTranslation('cart.empty', 'Your shopping cart is currently empty.')}</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatINR(0);
    if (totalEl) totalEl.textContent = formatINR(0);
    return;
  }

  container.innerHTML = cartState.map((item, index) => {
    const title = currentLanguage === 'mr' ? (item.nameMr || item.name) : item.name;
    const unitPriceStr = formatINR(item.unitPrice);
    const subtotalStr = formatINR(item.unitPrice * item.quantity);

    return `
      <div class="cart-item-row glass-card">
        <img src="${item.image}" alt="${title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${title}</h4>
          ${item.variantName ? `<span class="cart-item-variant">${item.variantName}</span>` : ''}
          <div class="cart-item-price">${getTranslation('cart.unit_price', 'Price')}: ${unitPriceStr}</div>
          <div class="cart-item-controls">
            <div class="qty-control-box">
              <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">−</button>
              <span class="qty-num">${currentLanguage === 'mr' ? formatDevanagariNum(item.quantity) : item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
            </div>
            <button class="cart-remove-btn" onclick="removeFromCart(${index})" title="${getTranslation('cart.remove', 'Remove')}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div class="cart-item-subtotal">
          ${subtotalStr}
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatINR(totals.totalAmount);
  if (totalEl) totalEl.textContent = formatINR(totals.totalAmount);
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    renderCartDrawer();
    drawer.classList.add('open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

// Product Detail Modal Controller
function openProductDetailModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-detail-content');
  if (!modal || !content) return;

  const title = currentLanguage === 'mr' ? product.nameMr : product.name;
  const desc = currentLanguage === 'mr' ? product.descMr : product.desc;
  const priceStr = formatINR(product.price);

  content.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-visual">
        <img src="${product.image}" alt="${title}" class="product-detail-img">
        <span class="product-badge" style="position:absolute; top:1rem; left:1rem;"><i class="fa-solid fa-gem"></i> ${product.badge}</span>
      </div>

      <div class="product-detail-info">
        <h2 class="product-detail-title">${title}</h2>
        <div class="product-detail-price-box">
          <span class="price-label">${getTranslation('products.price_label', 'PRICE')}:</span>
          <span class="price-val text-gold-gradient" style="font-size:1.8rem; font-weight:700;">${priceStr}</span>
        </div>
        <p class="product-detail-desc">${desc}</p>

        ${product.variants && product.variants.length > 0 ? `
          <div class="variant-select-box">
            <label class="form-label">Select Option / Size:</label>
            <select id="modal-product-variant" class="form-select">
              ${product.variants.map((v, idx) => `
                <option value="${idx}">${v.name} — ${formatINR(v.price)}</option>
              `).join('')}
            </select>
          </div>
        ` : ''}

        <div class="product-section-block">
          <h4 class="product-section-heading"><i class="fa-solid fa-sparkles text-subtle-gold"></i> Key Benefits & Features</h4>
          <ul class="feature-list">
            ${product.features.map(f => `<li><i class="fa-solid fa-circle-check text-subtle-gold"></i> ${f}</li>`).join('')}
          </ul>
        </div>

        <div class="product-section-block">
          <h4 class="product-section-heading"><i class="fa-solid fa-hand-holding-hand text-subtle-gold"></i> How To Use / Wear</h4>
          <p class="usage-text">${product.usage}</p>
        </div>

        <div class="product-section-block">
          <h4 class="product-section-heading"><i class="fa-solid fa-shield-cat text-subtle-gold"></i> Care & Cleansing</h4>
          <p class="usage-text">${product.care}</p>
        </div>

        <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
          <button class="btn btn-gold modal-add-cart-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i> ${getTranslation('products.add_to_cart', 'ADD TO CART')}
          </button>
          <a href="https://wa.me/919552122933?text=Hello%20HREEM%20AURA%20ACADEMY,%20I%20would%20like%20to%20enquire%20about%20the%20product:%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-outline">
            <i class="fa-brands fa-whatsapp"></i> ${getTranslation('products.inquire_wa', 'INQUIRE ON WHATSAPP')}
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');

  const addBtn = content.querySelector('.modal-add-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const variantSelect = document.getElementById('modal-product-variant');
      const vIndex = variantSelect ? parseInt(variantSelect.value, 10) : 0;
      addToCart(product.id, 1, vIndex);
      modal.classList.remove('open');
    });
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCourses(COURSES_DATA);
  renderProducts(PRODUCTS_DATA);
  renderTestimonials();
  updateCartBadge();
  initNavbarScroll();
  initMobileMenu();
  init3DTiltEffect();
  initGSAPAnimations();
  initModals();
  initFormHandlers();
  initProductFiltering();
  initProductEvents();
  initCartEvents();
  initScrollSpy();
  initCourseDetailRouter();

  renderServices(SERVICES_DATA);

  // Re-render components when language toggling occurs
  window.addEventListener('languageChanged', () => {
    renderCourses(COURSES_DATA);
    renderProducts(PRODUCTS_DATA);
    renderServices(SERVICES_DATA);
    renderTestimonials();
    updateCartBadge();
    renderCartDrawer();
  });
});

// Bind Product Grid & Modal Click Listeners
function initProductEvents() {
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.getAttribute('data-id');
      addToCart(id, 1, 0);
      return;
    }

    const detailBtn = e.target.closest('.view-product-detail-btn');
    if (detailBtn) {
      e.preventDefault();
      const id = detailBtn.getAttribute('data-id');
      openProductDetailModal(id);
      return;
    }
  });

  const modal = document.getElementById('product-detail-modal');
  const closeBtn = document.getElementById('product-detail-close');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }
}

// Bind Shopping Cart Drawer Events & WhatsApp Checkout
function initCartEvents() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const openCartMobile = document.getElementById('mobile-cart-btn');
  const closeCartBtn = document.getElementById('cart-close-btn');
  const continueBtn = document.getElementById('cart-continue-btn');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (openCartMobile) openCartMobile.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (continueBtn) continueBtn.addEventListener('click', closeCartDrawer);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartState.length === 0) {
        showToast(getTranslation('cart.empty', 'Your cart is empty!'));
        return;
      }

      const totals = calculateCartTotals();
      let orderListText = cartState.map((item, idx) => {
        const title = currentLanguage === 'mr' ? (item.nameMr || item.name) : item.name;
        const sub = formatINR(item.unitPrice * item.quantity);
        return `${idx + 1}. ${title}${item.variantName ? ` (${item.variantName})` : ''}\n   Qty: ${item.quantity} × ${formatINR(item.unitPrice)} = ${sub}`;
      }).join('\n\n');

      const msg = `Hello HREEM AURA ACADEMY,\n\nI would like to place an order / enquire for the following items:\n\n${orderListText}\n\n------------------------\n*Total Cart Value:* ${formatINR(totals.totalAmount)}\n\nPlease confirm availability and payment/delivery details.`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(msg)}`;

      showToast('Opening WhatsApp for Order Checkout...');
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);
    });
  }
}

// Render 25 Courses into Grid
function renderCourses(courses) {
  const container = document.getElementById('courses-container');
  if (!container) return;

  container.innerHTML = courses.map(course => `
    <div class="course-card glass-card" data-category="${course.cat}" data-slug="${course.slug}">
      <div class="course-thumb-box">
        <img src="${course.image}" alt="${course.title}" class="course-thumb-img" loading="lazy">
        <div class="course-thumb-overlay"></div>
        <span class="course-badge"><i class="fa-solid ${course.icon}"></i> ${course.badge}</span>
      </div>
      <div class="course-card-body">
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.desc}</p>
        <div class="course-footer">
          <span class="course-action">${getTranslation('courses.view_details', 'VIEW DETAILS')} <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind click listeners to open Course Detail Page
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-slug');
      openCourseDetail(slug);
    });
  });

  init3DTiltEffect();
}

// Course Detail Page Router & Modal Controller
function initCourseDetailRouter() {
  const modal = document.getElementById('course-detail-modal');
  const closeBtn = document.getElementById('course-detail-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      history.pushState('', document.title, window.location.pathname + window.location.search);
    });
  }

  window.addEventListener('hashchange', checkHashRoute);
  checkHashRoute();
}

function checkHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#course/')) {
    const slug = hash.replace('#course/', '');
    openCourseDetail(slug, false);
  }
}

function openCourseDetail(slug, updateHash = true) {
  const course = COURSES_DATA.find(c => c.slug === slug);
  if (!course) return;

  if (updateHash) {
    window.location.hash = `course/${slug}`;
  }

  const modal = document.getElementById('course-detail-modal');
  const content = document.getElementById('course-detail-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="course-detail-banner-box">
      <img src="${course.image}" alt="${course.title}" class="course-detail-banner-img">
      <div class="course-detail-banner-overlay"></div>
      <div class="course-hero-badge" style="position:absolute; top:1.25rem; left:1.25rem; z-index:2;"><i class="fa-solid ${course.icon}"></i> ${course.badge}</div>
    </div>
    <h2 class="course-detail-title" style="margin-top:1.5rem;">${course.title}</h2>
    <p class="course-detail-intro">${course.desc}</p>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-book-open text-subtle-gold"></i> About This Course</h3>
      <p class="about-text">${course.fullDesc}</p>
    </div>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-lightbulb text-subtle-gold"></i> What You Will Learn</h3>
      <div class="learn-grid">
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Fundamentals & Core Philosophy</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Core Concepts & Principles</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Practical Hands-on Techniques</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Real-world Applications & Case Studies</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Advanced Remedies & Consecrations</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Practical Mastery & Client Guidance</span></div>
      </div>
    </div>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-list-check text-subtle-gold"></i> Course Details & Format</h3>
      <div class="course-meta-grid">
        <div class="meta-box"><div class="meta-label">Mode</div><div class="meta-val">Live Online & Video</div></div>
        <div class="meta-box"><div class="meta-label">Duration</div><div class="meta-val">Flexible / Intensive</div></div>
        <div class="meta-box"><div class="meta-label">Language</div><div class="meta-val">Hindi / English</div></div>
        <div class="meta-box"><div class="meta-label">Certification</div><div class="meta-val">Certified by Hreem Aura Academy</div></div>
      </div>
    </div>

    <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
      <a href="https://wa.me/919552122933?text=Hello%20HREEM%20AURA%20ACADEMY,%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(course.title)}%20course." target="_blank" class="btn btn-gold">
        <i class="fa-brands fa-whatsapp"></i> WHATSAPP US TO ENQUIRE
      </a>
      <button class="btn btn-outline open-booking-modal-with-course" data-course="${course.title}">
        <i class="fa-solid fa-calendar-check"></i> BOOK CONSULTATION
      </button>
    </div>
  `;

  modal.classList.add('open');

  const bookBtn = content.querySelector('.open-booking-modal-with-course');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      openModalWithService(course.title);
    });
  }
}

// Course Category Filtering
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.getAttribute('data-filter');
    if (filter === 'all') {
      renderCourses(COURSES_DATA);
    } else {
      const filtered = COURSES_DATA.filter(item => item.cat === filter);
      renderCourses(filtered);
    }
  }
});

// Product Category Filtering System
function initProductFiltering() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('prod-filter-btn')) {
      document.querySelectorAll('.prod-filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      const filter = e.target.getAttribute('data-prod-filter');
      if (filter === 'all') {
        renderProducts(PRODUCTS_DATA);
      } else {
        const filtered = PRODUCTS_DATA.filter(p => p.category === filter);
        renderProducts(filtered);
      }
    }
  });
}

// 3D Card Tilt Micro-Interactions
function init3DTiltEffect() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Navbar Scroll Effect & ScrollSpy
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Active Navigation Link Highlighting on Scroll (ScrollSpy)
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-menu-link');
  const sections = document.querySelectorAll('section[id]');

  const onScrollSpy = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScrollSpy);
  onScrollSpy();
}

// Mobile Menu
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const close = document.getElementById('mobile-close');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.add('open'));
  }
  if (close && menu) {
    close.addEventListener('click', () => menu.classList.remove('open'));
  }

  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// Editable Testimonial Data Structure with Language & Field Support
const TESTIMONIALS_DATA = [
  {
    language: 'en',
    name: 'Rajesh Patel',
    testimonial: 'Learning Money Reiki and Mobile Numerology from Dr. Vaishali Bute completely transformed my business financial trajectory within 30 days! Her remedies are incredibly fast and potent.',
    course: 'Money Reiki & Mobile Numerology Master',
    location: 'Mumbai, Maharashtra',
    stars: 5,
    verified: 'VERIFIED STUDENT'
  },
  {
    language: 'mr',
    name: 'आनंद देशपांडे',
    testimonial: 'डॉ. वैशाली बुटे यांच्याकडून मनि रेकी आणि वास्तूचे मार्गदर्शन घेतल्यानंतर माझ्या व्यवसायात आणि घरात अतिशय सकारात्मक बदल झाले आहेत. त्यांच्या उपचारांमुळे मनाला असीम शांतता आणि प्रगती मिळाली.',
    course: 'मनि रेकी व वास्तू सल्ला',
    location: 'पुणे, महाराष्ट्र',
    stars: 5,
    verified: 'प्रमाणित विद्यार्थी'
  },
  {
    language: 'en',
    name: 'Sunita Sharma',
    testimonial: 'The Vastu consultation for my house cleared years of unexplained energetic heaviness. My family feels peaceful, vibrant, and prosperous. Dr. Vaishali is truly a gifted master.',
    course: 'Vastu Energy Audit & Chakra Healing',
    location: 'Delhi NCR',
    stars: 5,
    verified: 'VERIFIED CLIENT'
  },
  {
    language: 'mr',
    name: 'प्रिया कुलकर्णी',
    testimonial: 'मोबाईल न्युमरोलॉजी आणि लकी नंबर निवडीनंतर मला कामाच्या ठिकाणी नवीन संधी आणि आर्थिक लाभ मिळाला. ह्रीं ऑरा अकॅडमीचे मार्गदर्शन खरोखरच जीवन बदलणारे आहे.',
    course: 'मोबाईल न्युमरोलॉजी मास्टरक्लास',
    location: 'नागपूर, महाराष्ट्र',
    stars: 5,
    verified: 'प्रमाणित विद्यार्थी'
  },
  {
    language: 'en',
    name: 'Dr. Amit Malhotra',
    testimonial: 'As a medical practitioner, I was amazed by Dr. Vaishali Bute’s Reiki Grand Master attunements. The energetic alignment felt instantaneous and deeply grounding.',
    course: 'Reiki Grand Master Masterclass',
    location: 'Bengaluru, Karnataka',
    stars: 5,
    verified: 'REIKI MASTER'
  }
];

let testimonialCarouselInterval = null;
let currentTestimonialIndex = 0;

function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  const dotsContainer = document.getElementById('testimonial-dots');
  if (!container) return;

  // Filter or list testimonials based on current language preference first
  const list = TESTIMONIALS_DATA.filter(t => t.language === currentLanguage).length > 0
    ? TESTIMONIALS_DATA.filter(t => t.language === currentLanguage)
    : TESTIMONIALS_DATA;

  container.innerHTML = list.map((item, index) => {
    const initials = item.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return `
      <div class="testimonial-card-3d ${index === 0 ? 'active' : ''}" data-index="${index}">
        <div>
          <div class="testimonial-top-row">
            <div class="testimonial-stars">
              ${Array(item.stars || 5).fill('<i class="fa-solid fa-star"></i>').join('')}
            </div>
            <span class="verified-badge"><i class="fa-solid fa-circle-check"></i> ${item.verified}</span>
          </div>
          <p class="testimonial-quote-text">${item.testimonial}</p>
        </div>

        <div class="testimonial-author-box">
          <div class="author-avatar-frame">${initials}</div>
          <div class="author-info-details">
            <h4 class="author-name-title">${item.name}</h4>
            <span class="author-course-tag">${item.course} ${item.location ? `• ${item.location}` : ''}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = list.map((_, idx) => `
      <span class="dot-indicator ${idx === 0 ? 'active' : ''}" data-dot="${idx}"></span>
    `).join('');
  }

  initTestimonialsCarousel3D(list.length);
}

// Testimonials 3D Stage Carousel Engine
function initTestimonialsCarousel3D(totalCount) {
  if (totalCount === 0) return;
  const cards = document.querySelectorAll('.testimonial-card-3d');
  const dots = document.querySelectorAll('.dot-indicator');
  currentTestimonialIndex = 0;

  const updateStage = (index) => {
    cards.forEach((card, idx) => {
      card.classList.remove('active', 'prev', 'next');
      if (idx === index) {
        card.classList.add('active');
      } else if (idx === (index - 1 + totalCount) % totalCount) {
        card.classList.add('prev');
      } else if (idx === (index + 1) % totalCount) {
        card.classList.add('next');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === index) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  };

  const nextBtn = document.getElementById('next-testimonial');
  const prevBtn = document.getElementById('prev-testimonial');

  if (nextBtn) {
    nextBtn.onclick = () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % totalCount;
      updateStage(currentTestimonialIndex);
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + totalCount) % totalCount;
      updateStage(currentTestimonialIndex);
    };
  }

  dots.forEach(dot => {
    dot.onclick = () => {
      const idx = parseInt(dot.getAttribute('data-dot'), 10);
      currentTestimonialIndex = idx;
      updateStage(currentTestimonialIndex);
    };
  });

  if (testimonialCarouselInterval) clearInterval(testimonialCarouselInterval);
  testimonialCarouselInterval = setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalCount;
    updateStage(currentTestimonialIndex);
  }, 6500);

  updateStage(0);
}

// GSAP ScrollTrigger Animations
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.section-tag, .section-title, .section-subtitle').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  gsap.from('.about-image-wrapper', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%'
    },
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });

  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });
}

// Modal Dialog Handlers
function initModals() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}

function openModalWithService(serviceName) {
  const modal = document.getElementById('booking-modal');
  const select = document.getElementById('service-select');
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
  }
  if (modal) modal.classList.add('open');
}

// Form Handlers & WhatsApp Inquiry Redirection
function initFormHandlers() {
  const mainForm = document.getElementById('main-contact-form');
  const modalForm = document.getElementById('modal-form');
  let selectedIntent = 'Personal Consultation';

  // Intent pills toggle handler
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('intent-pill')) {
      document.querySelectorAll('.intent-pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      selectedIntent = e.target.getAttribute('data-intent') || 'Personal Consultation';
    }
  });

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('full-name')?.value || '';
      const phone = document.getElementById('phone')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const msg = document.getElementById('message')?.value || '';

      const waMessage = `Hello HREEM AURA ACADEMY,\n\nI would like to book a consultation.\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Inquiry Focus:* ${selectedIntent}\n*Message/Query:* ${msg}`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(waMessage)}`;

      showToast('Redirecting to WhatsApp for instant consultation booking...');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        mainForm.reset();
      }, 800);
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = modalForm.querySelectorAll('.form-input');
      const name = inputs[0]?.value || '';
      const phone = inputs[1]?.value || '';
      const datetime = inputs[2]?.value || '';

      const waMessage = `Hello HREEM AURA ACADEMY,\n\nI would like to book a consultation session.\n*Name:* ${name}\n*Phone/WhatsApp:* ${phone}\n*Preferred Date/Time:* ${datetime}`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(waMessage)}`;

      showToast('Booking Request Received! Opening WhatsApp...');
      document.getElementById('booking-modal').classList.remove('open');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        modalForm.reset();
      }, 800);
    });
  }
}

// Notification Toast Utility
function showToast(message) {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1.25rem 2rem;
      background: rgba(18, 2, 5, 0.95);
      border: 1px solid var(--gold-primary);
      border-radius: 16px;
      color: var(--cream);
      font-family: var(--font-heading);
      box-shadow: 0 15px 35px rgba(0,0,0,0.8), 0 0 20px var(--gold-glow);
      z-index: 3000;
      transition: all 0.4s ease;
      transform: translateY(100px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-subtle-gold"></i> ${message}`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 4500);
}
