import {
  SiteSettings,
  FounderModule,
  MissionVisionValues,
  ServiceModule,
  PackageModule,
  TestimonialModule,
  GalleryItem,
  FAQItem,
  JourneyMilestone,
  CommunityStats,
} from "@/lib/wordpress/types";

export const siteSettingsData: SiteSettings = {
  brandName: "PATH OF STORIES",
  tagline: "Every Journey Tells A Story",
  contactEmail: "stories@pathofstories.com",
  contactPhone: "+1 (800) 845-7867",
  address: "742 Wilderness Ridge Road, Boulder, CO 80302",
  operatingHours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
  socialLinks: {
    instagram: "https://instagram.com/pathofstories",
    facebook: "https://facebook.com/pathofstories",
    youtube: "https://youtube.com/pathofstories",
    linkedin: "https://linkedin.com/company/pathofstories",
    pinterest: "https://pinterest.com/pathofstories",
  },
  seo: {
    title: "PATH OF STORIES | Every Journey Tells A Story",
    metaDesc:
      "A premium storytelling brand experience. Human-led nature expeditions and small-group journeys crafted around connection, community, and timeless memories.",
    keywords: [
      "Path of Stories",
      "Storytelling Travel",
      "Nature Expeditions",
      "Authentic Travel",
      "Small Group Travel",
    ],
  },
};

export const foundersData: FounderModule[] = [
  {
    id: "founder-1",
    name: "Arjun Dev",
    role: "Co-Founder & Expedition Lead",
    bio: "After spending over a decade guiding mountain traverses across four continents, Arjun realized that modern travel had lost its soul to fast-paced itineraries and social media checklists. He co-founded Path of Stories to revive unhurried, intentional exploration.",
    storyQuote:
      "A true journey isn't measured in miles conquered, but in the quiet moments where strangers become lifelong keepers of a shared memory.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "founder-2",
    name: "Maya Lin",
    role: "Co-Founder & Creative Director",
    bio: "An award-winning documentary photographer and environmental storyteller, Maya believes that nature has a language of its own. She designs every journey to foster deep stillness, artistic reverence, and local community stewardship.",
    storyQuote:
      "We don't create travel itineraries. We curate chapters of a story you will recount for the rest of your life.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
  },
];

export const missionVisionValuesData: MissionVisionValues = {
  mission: {
    title: "Our Mission",
    description:
      "To replace commercial travel consumption with human-centered storytelling. We build small-group wilderness journeys that honor nature, nurture authentic community, and forge profound personal transformation.",
    points: [
      "Story Before Sales: We prioritize rich narrative depth over commercial booking volume.",
      "Connection Before Conversion: Relationships with local hosts and fellow travellers come first.",
      "Micro-Group Dynamics: Capped strictly at 8 to 10 participants to preserve intimacy.",
      "Deep Ecological Reverence: Zero-footprint protocols and active habitat support.",
    ],
  },
  vision: {
    title: "Our Vision",
    description:
      "A world where travel is no longer an escape from life, but a deep return to what makes us human. We envision a global community bound together by shared fireside stories, untouched landscapes, and enduring friendships.",
    quote:
      "When you travel with reverence, every valley becomes a sanctuary, every path a chapter, and every companion a lifelong friend.",
  },
  values: [
    {
      title: "Authentic Human Connection",
      description:
        "We foster real, unscripted human encounters where travellers and local hosts bond over shared meals and ancestral lore.",
      icon: "users",
    },
    {
      title: "Unhurried Rhythm",
      description:
        "We reject rushed multi-city sprints. We stay long enough in each landscape to hear its subtle breath and observe its quiet wisdom.",
      icon: "clock",
    },
    {
      title: "Nature Reverence",
      description:
        "Every footstep is guided by Leave-No-Trace principles. We actively contribute to local conservation funds and community schools.",
      icon: "leaf",
    },
    {
      title: "Editorial Excellence",
      description:
        "From our handcrafted field journals to our curated photography, every touchpoint reflects timeless luxury and artistic intent.",
      icon: "compass",
    },
  ],
  whyWeExist: {
    title: "Why Path Of Stories Exists",
    leadParagraph:
      "We started Path of Stories because we were weary of a travel industry that treated breathtaking wild places like photo backdrops for mass tourism.",
    bodyParagraphs: [
      "In a hyper-connected world, we have never felt more disconnected from nature and each other. Most travel platforms sell logistics: plane seats, hotel nights, and bus tours. But nobody remembers a hotel check-in time. What stays with us forever is the midnight bonfire beneath a canopy of stars, the quiet wisdom of a shepherd, or the shared silence at a mountain summit.",
      "Path of Stories was born out of a desire to create something different: a sanctuary for intentional travellers who value depth over speed, connection over noise, and story over transaction.",
    ],
  },
};

export const servicesData: ServiceModule[] = [
  {
    id: "service-1",
    title: "Small-Group Alpine Expeditions",
    slug: "small-group-alpine-expeditions",
    featuredImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    bannerImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    shortDescription:
      "Intimate high-altitude mountain traverses capped at 8 participants, guided by master mountaineers and local storytellers.",
    longDescription:
      "Our Small-Group Alpine Expeditions take you off the beaten track and onto remote high-alpine ridges. Designed for lovers of mountain solitude, these journeys balance physical challenge with luxurious fireside comfort, artisanal field dining, and nightly stargazing sessions.",
    iconName: "mountain",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=85",
    ],
    features: [
      "Strict 8-person participant limit",
      "Professional mountain guides & paramedic support",
      "Handcrafted organic field dining",
      "Included documentary photography package",
      "Custom gear preparation consultation",
    ],
    buttonText: "Explore Alpine Journeys",
    buttonLink: "/services#packages",
    status: "published",
    sortingOrder: 1,
    seo: {
      title: "Small-Group Alpine Expeditions | Path of Stories",
      metaDesc:
        "High-altitude mountain traverses with small groups. Human-led storytelling expeditions in pristine alpine ridges.",
    },
  },
  {
    id: "service-2",
    title: "Solitude & Creative Wilderness Retreats",
    slug: "solitude-creative-wilderness-retreats",
    featuredImage:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
    bannerImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
    shortDescription:
      "Digital detox retreats in secluded cabins and fjords, tailored for writers, photographers, and thinkers seeking stillness.",
    longDescription:
      "Immerse yourself in deep creative focus amidst pristine natural solitude. Our retreats combine private wooden cabins, morning mindfulness sessions by glacial waters, and evening creative salons where ideas flow without the noise of notifications.",
    iconName: "feather",
    gallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    ],
    features: [
      "100% Digital Detox environment",
      "Private architectural forest cabins",
      "Daily creative writing & photography workshops",
      "Farm-to-table organic meals",
      "Silent nature walks & soundscapes",
    ],
    buttonText: "Discover Retreats",
    buttonLink: "/services#packages",
    status: "published",
    sortingOrder: 2,
    seo: {
      title: "Solitude & Creative Wilderness Retreats | Path of Stories",
      metaDesc:
        "Unplug and reconnect with your creative spirit in secluded wilderness cabins and fjords.",
    },
  },
  {
    id: "service-3",
    title: "Cultural Heritage & Storytelling Encounters",
    slug: "cultural-heritage-encounters",
    featuredImage:
      "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=1200&q=85",
    bannerImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    shortDescription:
      "Deep cultural immersions living alongside indigenous elders, nomadic herders, and traditional artisans.",
    longDescription:
      "Step inside ancient living traditions. We partner directly with indigenous custodians to host small gatherings where oral histories, traditional craft, and ancient culinary heritage are shared around hearth fires.",
    iconName: "heart",
    gallery: [
      "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1476514525535-ce74f45814d0?auto=format&fit=crop&w=1200&q=85",
    ],
    features: [
      "Direct profit-sharing with indigenous hosts",
      "Authentic home stays & heritage lodges",
      "Private storytelling sessions with village elders",
      "Hands-on traditional craft workshops",
      "Ethical, non-intrusive cultural protocol",
    ],
    buttonText: "Explore Heritage Encounters",
    buttonLink: "/services#packages",
    status: "published",
    sortingOrder: 3,
    seo: {
      title: "Cultural Heritage Encounters | Path of Stories",
      metaDesc:
        "Immerse in living traditions alongside local indigenous elders and storytellers.",
    },
  },
];

export const packagesData: PackageModule[] = [
  {
    id: "pkg-1",
    packageName: "Silent Ridge: High Himalayan Traverse",
    slug: "silent-ridge-himalayan-traverse",
    destination: "Ladakh & Zanskar Ridge, Himalayas",
    duration: "9 Days / 8 Nights",
    price: "$3,450",
    offerPrice: "$3,150",
    maxParticipants: 8,
    difficulty: "Challenging",
    packageGallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    ],
    highlights: [
      "Traverse uncharted 4,500m mountain passes far from tourist trekking routes",
      "Overnight camps beneath the brightest star-filled skies in Asia",
      "Fireside tea and oral folklore with local Zanskari nomadic herders",
      "High-altitude silent walking meditations every morning",
    ],
    included: [
      "All luxury wilderness camping accommodations",
      "Private chef & organic camp dining",
      "Mountaineering guides & satellite safety equipment",
      "Permits, conservation fees, and airport transfers",
      "Custom leather field journal & photography pack",
    ],
    excluded: [
      "International airfare to Leh",
      "Personal trekking boots & sleeping bags",
      "Travel insurance (mandatory)",
    ],
    schedule: [
      {
        day: "Day 1-2",
        title: "Acclimatization & Fireside Orientation in Leh",
        description:
          "Gather at our heritage stone lodge in Leh. Meet your fellow storytellers, acclimatize slowly, and share our opening evening meal.",
      },
      {
        day: "Day 3-5",
        title: "Ascent into the Zanskar Silent Sanctuary",
        description:
          "Begin our trek into remote mountain valleys. Cross crystal river crossings and set up luxury tented camps along silent glacial streams.",
      },
      {
        day: "Day 6-7",
        title: "The High Pass & Stargazing Camp",
        description:
          "Summit the 4,800m Silent Ridge pass at dawn. Celebrate with warm herbal infusions and spend the evening learning Himalayan star lore.",
      },
      {
        day: "Day 8-9",
        title: "Descent & Celebration Circle",
        description:
          "Descend into the valley of monasteries. Closing reflections circle around the hearth before return transfers to Leh.",
      },
    ],
    mapLocation: {
      lat: 34.1526,
      lng: 77.5771,
      locationName: "Zanskar Valley, Ladakh",
      region: "Himalayas",
    },
    faqs: [
      {
        question: "What physical fitness level is required?",
        answer:
          "A good level of cardio fitness is required as we walk 5-7 hours daily at high altitude. Pre-trip training guides will be provided.",
      },
      {
        question: "How small are the group sizes?",
        answer:
          "We cap this expedition strictly at 8 travellers to maintain an intimate, unhurried atmosphere.",
      },
    ],
    bookingButton: {
      label: "Reserve Your Spot",
      url: "/contact?package=silent-ridge",
    },
    status: "published",
    featuredPackage: true,
    sortingOrder: 1,
  },
  {
    id: "pkg-2",
    packageName: "Nordic Fjords & Aurora Solitude",
    slug: "nordic-fjords-aurora-solitude",
    destination: "Lofoten Islands & Senja, Norway",
    duration: "7 Days / 6 Nights",
    price: "$4,200",
    offerPrice: "$3,850",
    maxParticipants: 6,
    difficulty: "Gentle",
    packageGallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=85",
    ],
    highlights: [
      "Private seaside wooden rorbuer cabins overlooking fjord waters",
      "Nightly Northern Lights photography sessions with documentary pros",
      "Traditional Scandinavian sauna & Arctic fjord cold plunge",
      "Storytelling by candlelit fires in historic fishing hamlets",
    ],
    included: [
      "Private luxury fjord cabin lodging",
      "All meals featuring local Arctic seafood and wild berries",
      "Private Mercedes Sprinter transport across Lofoten",
      "Sauna access & photography masterclasses",
    ],
    excluded: ["Flights to Harstad/Narvik (EVE)", "Alcoholic beverages"],
    schedule: [
      {
        day: "Day 1-2",
        title: "Fjord Arrival & Aurora Welcome",
        description:
          "Check into private waterfront cabins. Evening intro to Northern Lights forecasting and quiet fjord walk.",
      },
      {
        day: "Day 3-5",
        title: "Coastal Explorations & Sea Kayaking",
        description:
          "Paddle through glassy fjords surrounded by towering sea mountains. Evening sauna & fireside storytelling.",
      },
      {
        day: "Day 6-7",
        title: "Senja Ridge Trail & Farewell Circle",
        description:
          "Hike the gentle panoramic crest of Senja for sunset vistas before our final Nordic banquet.",
      },
    ],
    mapLocation: {
      lat: 68.2358,
      lng: 14.5684,
      locationName: "Lofoten Archipelago",
      region: "Norway",
    },
    faqs: [
      {
        question: "Will we definitely see the Northern Lights?",
        answer:
          "While weather depends on nature, our location and timing are optimized for peak Aurora activity during clear Arctic nights.",
      },
    ],
    bookingButton: {
      label: "Inquire For Nordic Journey",
      url: "/contact?package=nordic-fjords",
    },
    status: "published",
    featuredPackage: true,
    sortingOrder: 2,
  },
  {
    id: "pkg-3",
    packageName: "Canopy & Cloud Forest Secret Trails",
    slug: "canopy-cloud-forest-secret-trails",
    destination: "Western Ghats Rainforest, India",
    duration: "6 Days / 5 Nights",
    price: "$2,100",
    offerPrice: "$1,890",
    maxParticipants: 10,
    difficulty: "Moderate",
    packageGallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=1200&q=85",
    ],
    highlights: [
      "Guided walk through ancient bio-diverse cloud forests and moss canopies",
      "Stay at a restored heritage tea plantation bungalow built in 1912",
      "Bioluminescent nocturnal rainforest night walks with naturalists",
      "Artisanal coffee tasting & wild spice foraging with local farmers",
    ],
    included: [
      "Heritage bungalow stay & eco-tent lodges",
      "All organic farm-to-table meals & fresh juices",
      "Expert naturalist guides & leech-proof gaiters",
      "Forest sanctuary conservation contribution",
    ],
    excluded: ["Domestic transport to Cochin/Coimbatore", "Personal tips"],
    schedule: [
      {
        day: "Day 1-2",
        title: "Mist & Spice Valley Arrival",
        description:
          "Arrive at our plantation sanctuary amidst green coffee slopes. Evening rainforest soundscape listening circle.",
      },
      {
        day: "Day 3-4",
        title: "Deep Canopy Trek & Bioluminescence",
        description:
          "Journey into protected forest reserves. Experience nocturnal bioluminescent fungi beneath the jungle canopy.",
      },
      {
        day: "Day 5-6",
        title: "Waterfall Meditation & Departure",
        description:
          "Morning waterfall dip and plantation coffee workshop before closing reflection session.",
      },
    ],
    mapLocation: {
      lat: 10.1518,
      lng: 77.0598,
      locationName: "Western Ghats Cloud Forest",
      region: "India",
    },
    faqs: [
      {
        question: "Is this journey safe for solo travellers?",
        answer:
          "Absolutely. Over 60% of our travellers join as solo individuals and leave as part of a close-knit community.",
      },
    ],
    bookingButton: {
      label: "Reserve Rainforest Trail",
      url: "/contact?package=canopy-forest",
    },
    status: "published",
    featuredPackage: true,
    sortingOrder: 3,
  },
];

export const testimonialsData: TestimonialModule[] = [
  {
    id: "t-1",
    authorName: "Elena Rostova",
    authorLocation: "Zurich, Switzerland",
    journeyName: "Silent Ridge Himalayan Traverse",
    quote:
      "I came expecting a mountain trek. I left with eight lifelong friends and a quiet inner stillness I hadn't felt in over fifteen years.",
    fullStory:
      "In a world where every tour agency tries to sell you luxury hotels and rushed selfie spots, Path of Stories felt like an oasis of authenticity. Sitting by the campfire at 4,000 meters listening to Arjun share ancient Himalayan legends while looking at galaxies of stars—it shifted my entire perspective on how I want to live and travel.",
    rating: 5,
    authorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    videoThumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "October 2025",
  },
  {
    id: "t-2",
    authorName: "Marcus Vance",
    authorLocation: "Seattle, USA",
    journeyName: "Nordic Fjords & Aurora Solitude",
    quote:
      "Path of Stories doesn't just show you landscapes; they teach you how to listen to them.",
    fullStory:
      "As a designer, I was burnt out by constant screen time and agency deadlines. Maya and the team created a space where we could unplug completely without feeling forced. Sitting in a seaside wooden cabin watching the Northern Lights dance over Norwegian fjords gave me back my creative spark.",
    rating: 5,
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    videoThumbnail:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "January 2026",
  },
  {
    id: "t-3",
    authorName: "Dr. Sarah Jenkins",
    authorLocation: "Melbourne, Australia",
    journeyName: "Canopy & Cloud Forest Trail",
    quote:
      "Connection before conversion isn't just a tagline for them—it is the living core of every single detail.",
    fullStory:
      "From the handcrafted welcome journal to the incredible farm-to-table meals cooked by local families, every moment was infused with respect and warmth. I have never experienced a travel brand that cared so deeply about human relationships.",
    rating: 5,
    authorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    date: "November 2025",
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "High Altitude Silence",
    location: "Zanskar Crest, 4,600m",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "landscape",
    storySnippet: "Dawn light breaking over the untouched peaks of Silent Ridge.",
    photographer: "Maya Lin",
  },
  {
    id: "g-2",
    title: "Fjord Reflection",
    location: "Senja Fjord, Norway",
    imageUrl:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "portrait",
    storySnippet: "Glassy Arctic waters reflecting the midnight glow.",
    photographer: "Marcus Vance",
  },
  {
    id: "g-3",
    title: "Campfire Lore",
    location: "Ladakh Wilderness Base",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "landscape",
    storySnippet: "Sharing herbal chai and oral histories under a stellar canopy.",
    photographer: "Arjun Dev",
  },
  {
    id: "g-4",
    title: "Rainforest Canopy",
    location: "Western Ghats Reserve",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "portrait",
    storySnippet: "Ancient moss-draped trees holding secrets of centuries.",
    photographer: "Dr. Sarah Jenkins",
  },
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How does Path of Stories differ from standard travel agencies?",
    answer:
      "We do not sell commercial tours or checklist vacations. We design small-group, human-centered storytelling expeditions capped at 8 to 10 participants. Every journey prioritizes deep connection, unhurried pacing, zero-footprint ecology, and authentic local host relationships.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Can I join a journey as a solo traveller?",
    answer:
      "Yes! Over 60% of our travellers join individually. Because our groups are small and our ethos is built on community, solo travellers quickly feel like part of a welcoming family.",
  },
  {
    id: "faq-3",
    category: "Preparation",
    question: "What physical fitness level is expected?",
    answer:
      "Each package is clearly rated from Gentle to Challenging. We provide personalized fitness preparation guides and gear consultations weeks before departure.",
  },
  {
    id: "faq-4",
    category: "Safety & Ethics",
    question: "How do you ensure zero ecological impact?",
    answer:
      "We enforce strict Leave-No-Trace protocols, carry out all waste, partner exclusively with local eco-lodges, and donate a portion of every seat directly to local wilderness conservation funds.",
  },
];

export const journeyMilestonesData: JourneyMilestone[] = [
  {
    year: "2019",
    title: "The Mountain Pact",
    description:
      "Arjun and Maya meet on a high pass in the Himalayas and vow to build a travel brand that honors nature and human intimacy over profits.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2021",
    title: "First 10 Expeditions",
    description:
      "Launched our inaugural Silent Ridge traverses in small groups of 6, establishing our signature fireside storytelling format.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2023",
    title: "Nordic & Rainforest Expansion",
    description:
      "Expanded into Scandinavia and Asian cloud forest reserves, partnering directly with local indigenous custodians.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2026",
    title: "Global Story Community",
    description:
      "Over 140 journeys completed, 3,200+ storytellers connected, and 12,000+ native trees planted across our trail corridors.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
];

export const communityStatsData: CommunityStats = {
  journeysCompleted: 142,
  countriesExplored: 18,
  communityMembers: 3250,
  storiesShared: 8900,
  treesPlanted: 12400,
};
