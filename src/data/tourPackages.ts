export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  destination: string;
  duration: string;
  startingPrice: string;
  originalPrice: string;
  discountBadge?: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: { day: string; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  pickupLocations: string[];
  bestTimeToVisit: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "pkg-araku-vizag",
    slug: "araku-valley-from-visakhapatnam",
    title: "Araku Valley Tour Package from Visakhapatnam",
    subtitle: "Complete 1-Day & 2-Day Nature, Coffee Plantation & Borra Caves Experience",
    metaTitle: "Araku Valley Tour Package from Visakhapatnam | Since T20 Travel Services",
    metaDescription: "Book Araku Valley Tour Package from Visakhapatnam. Visit Borra Caves, Katiki Waterfalls, Coffee Plantations, Tribal Museum, Chaparai & Padmapuram Gardens. Instant Taxi & Hotel Booking.",
    keywords: "Araku Valley Tour Package from Visakhapatnam, Araku Valley Tourism, Araku Valley Travel Services, Araku Taxi Booking, Vizag to Araku Tour, Araku Valley One Day Trip, Araku Valley Weekend Trip, Best Places to Visit in Araku Valley, Araku Tourist Places, Araku Hotel Booking, Araku Camping",
    destination: "Araku Valley & Visakhapatnam",
    duration: "1 Day / 2 Days 1 Night",
    startingPrice: "₹1,499",
    originalPrice: "₹2,499",
    discountBadge: "Popular Weekend Trip",
    heroImage: "/hero-bg-araku.png",
    galleryImages: [
      "/hero-bg-araku.png",
      "/hero-visual-31.png",
      "/hero-full-graphic.png"
    ],
    overview: "Experience the majestic Eastern Ghats with our signature Araku Valley Tour Package from Visakhapatnam. Enjoy breathtaking mountain vistas, visit million-year-old Borra Caves, sample fresh Araku organic coffee, splash at Chaparai Water Cascades, and explore rich tribal heritage.",
    highlights: [
      "Scenic Vista Train/Road Journey from Visakhapatnam through 84 tunnels & bridges",
      "Guided Exploration of Borra Caves & Katiki Waterfalls",
      "Araku Coffee Plantation Walk & Tasting Session",
      "Tribal Museum & Dhimsa Dance Cultural Showcase",
      "Chaparai Water Cascades & Padmapuram Botanical Gardens",
      "Private AC Car / Taxi with Experienced Local Driver"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Visakhapatnam to Araku Valley Sightseeing",
        desc: "Morning pickup from Visakhapatnam Railway Station / Hotel. Scenic drive via Ananthagiri Coffee Plantations. Visit Borra Caves, Katiki Waterfalls (optional jeep trek), and Galikonda Viewpoint. Evening check-in at Araku Resort/Hotel followed by campfire & local Bamboo Chicken dinner."
      },
      {
        day: "Day 2",
        title: "Araku Local Attractions & Return to Vizag",
        desc: "Morning visit to Tribal Museum, Art Gallery, and Padmapuram Botanical Gardens. Explore Chaparai Water Stream and Araku Chocolate & Coffee outlets. Return back to Visakhapatnam by evening with unforgettable hill station memories."
      }
    ],
    inclusions: [
      "Private Vehicle Pick up & Drop from Visakhapatnam",
      "Clean & Comfortable Hotel / Resort Accommodation",
      "Fuel Charges, Toll Fees & Parking Allowance",
      "Experienced Local Driver cum Tourist Guide",
      "Complimentary Morning Coffee & Mineral Water"
    ],
    exclusions: [
      "Entry tickets to Monuments & Museums",
      "Personal Expenses & Meals not specified",
      "Jeep ride charges for Katiki Waterfalls"
    ],
    faqs: [
      {
        question: "How far is Araku Valley from Visakhapatnam?",
        answer: "Araku Valley is approximately 115 km from Visakhapatnam city center and takes about 3 to 3.5 hours by car or scenic train ride."
      },
      {
        question: "Can we customize the Vizag to Araku tour package for 1 day?",
        answer: "Yes, Since T20 Services offers both 1-Day Express Sightseeing Taxi packages and 2-Day relaxed luxury resort packages."
      },
      {
        question: "Is taxi service included in the tour package?",
        answer: "Yes, dedicated private AC sedan/SUV taxi with professional local drivers is included with doorstep pickup in Vizag."
      }
    ],
    pickupLocations: ["Visakhapatnam Railway Station", "Vizag Airport (VTZ)", "Gajuwaka", "Beach Road Vizag", "Paderu"],
    bestTimeToVisit: "September to March (Winter & Post-Monsoon)"
  },
  {
    id: "pkg-vanajangi-sunrise",
    slug: "vanajangi-sunrise-tour",
    title: "Vanajangi Sunrise Tour Package",
    subtitle: "Cloud Ocean Trekking, Overnight Tent Camping & Magical Sunrise",
    metaTitle: "Vanajangi Sunrise Tour Package & Tent Booking | Since T20 Services",
    metaDescription: "Book Vanajangi Sunrise Tour Package & Tent Camping. Experience the world-famous Ocean of Clouds in Vanajangi Hills near Paderu & Araku. Includes Vizag/Paderu Pickup & Camping Tents.",
    keywords: "Vanajangi Sunrise Tour Package, Vanajangi Tourism, Vanajangi Camping, Vanajangi Tent Booking, Vanajangi Travel, Vanajangi Trip from Visakhapatnam, Vanajangi Trip from Araku, Vanajangi Hotel Booking, Vanajangi Homestay, Ocean of Clouds Vanajangi, Paderu to Vanajangi Taxi",
    destination: "Vanajangi Hills (Paderu / ASR District)",
    duration: "1 Night / 1 Day",
    startingPrice: "₹1,199",
    originalPrice: "₹1,999",
    discountBadge: "Top Trending Camping Trip",
    heroImage: "/hero-bg-araku.png",
    galleryImages: [
      "/hero-bg-araku.png",
      "/hero-visual-31.png"
    ],
    overview: "Vanajangi Hills, located near Paderu in Alluri Sitharama Raju District, is famous across South India for its mesmerizing 'Ocean of Clouds' sunrise at 3,400 ft altitude. Wake up above dense white clouds floating over verdant mountain valleys with our complete camping and sunrise package.",
    highlights: [
      "Overnight Mountain Hilltop Tent Camping with Campfire & Music",
      "Spectacular 5:30 AM Sunrise View over the Cloud Ocean (Meghalaya of AP)",
      "Guided Early Morning Trek to Vanajangi Sunrise Point",
      "Traditional Paderu Tribal BBQ / Bamboo Chicken Dinner",
      "Seamless Taxi Pickup from Visakhapatnam, Araku, or Paderu Town"
    ],
    itinerary: [
      {
        day: "Evening",
        title: "Departure & Base Camp Arrival",
        desc: "Pickup from Visakhapatnam / Araku / Paderu. Arrive at Vanajangi Base Camp in the evening. Tent setup, bonfire, stargazing, and delicious local tribal dinner."
      },
      {
        day: "Early Morning",
        title: "Sunrise Trek & Cloud Ocean Spectacle",
        desc: "3:30 AM wakeup call. Easy 45-minute trek to the summit sunrise viewpoint. Witness breathtaking golden sun rising above endless white cloud waves. Photography time & breakfast. Drop back by afternoon."
      }
    ],
    inclusions: [
      "High-Quality Waterproof Camping Tents & Sleeping Gear",
      "Campfire with Evening Tea/Snacks & Hot Dinner",
      "Guided Summit Trek with Safety Escort",
      "Pickup & Drop Taxi Transfers (Optional Add-on)"
    ],
    exclusions: [
      "Personal footwear / trekking poles",
      "Heavy warm jackets (please carry winter wear)"
    ],
    faqs: [
      {
        question: "When is the best time to see clouds in Vanajangi?",
        answer: "October to February offers peak cloud ocean formation between 5:30 AM and 7:30 AM."
      },
      {
        question: "Is tent camping safe in Vanajangi for families and couples?",
        answer: "Yes, Since T20 Services provides secure family-friendly and couple-friendly camping sites with on-site caretakers, lights, and clean washroom access."
      }
    ],
    pickupLocations: ["Visakhapatnam", "Paderu Town", "Araku Valley", "Anakapalli"],
    bestTimeToVisit: "October to February"
  },
  {
    id: "pkg-maredumilli-nature",
    slug: "maredumilli-nature-tour",
    title: "Maredumilli Nature & Forest Tour Package",
    subtitle: "Eco Tourism, Jungle Resort Booking, Waterfalls & Tribal Heritage",
    metaTitle: "Maredumilli Nature Tour Package & Resort Booking | Since T20 Services",
    metaDescription: "Book Maredumilli Nature Tour Package. Explore dense eco-tourism forests, Amruthadhara & Jalatarangini Waterfalls, Rampa Waterfalls, Jungle Resorts & Bamboo Chicken.",
    keywords: "Maredumilli Nature Tour Package, Maredumilli Tourism, Maredumilli Resorts, Maredumilli Resort Booking, Maredumilli Tent Booking, Maredumilli Camping, Maredumilli Hotels, Maredumilli Waterfalls, Maredumilli Forest Tourism, Maredumilli Weekend Trip, Maredumilli Family Trip",
    destination: "Maredumilli Eco-Tourism Zone",
    duration: "2 Days / 1 Night",
    startingPrice: "₹2,499",
    originalPrice: "₹3,999",
    discountBadge: "Forest Eco-Retreat",
    heroImage: "/hero-bg-30.png",
    galleryImages: [
      "/hero-bg-30.png",
      "/hero-visual-31.png"
    ],
    overview: "Immerse yourself in lush tropical rainforests at Maredumilli, Andhra Pradesh's premier eco-tourism destination. Visit gushing jungle waterfalls, stay in nature eco-resorts, taste authentic Bongu La Kozhi (Bamboo Chicken), and reconnect with nature.",
    highlights: [
      "Jalatarangini, Swarnadhara & Amruthadhara Waterfalls Excursion",
      "Jungle Resort Stay / Forest Eco-Cottage Booking",
      "Valamuru River Bathing & Manyam Viewpoint",
      "Authentic Maredumilli Bamboo Chicken & Tribal Cuisine",
      "Rampa Waterfalls & Ancient Temple Visit in Rajahmundry/Rampachodavaram route"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Forest Eco Park & Waterfalls Exploration",
        desc: "Morning arrival in Maredumilli. Check-in to forest resort. Visit Jalatarangini Waterfalls and Madanapuram Eco Park. Evening bon-fire and jungle dining."
      },
      {
        day: "Day 2",
        title: "Amruthadhara Waterfalls & Manyam Viewpoint",
        desc: "Morning nature trek to Amruthadhara Waterfalls and Manyam Viewpoint. Visit local handicraft centers and return transfer."
      }
    ],
    inclusions: [
      "Forest Eco Resort / Cottage Accommodation",
      "All Sightseeing Transfers in Private Vehicle",
      "Campfire with Traditional Bamboo Chicken",
      "All Road Permits & Taxes"
    ],
    exclusions: [
      "Camera fees at eco parks",
      "Personal shopping expenses"
    ],
    faqs: [
      {
        question: "Where is Maredumilli located?",
        answer: "Maredumilli is located in East Godavari / Alluri Sitharama Raju district, around 85 km from Rajahmundry and 220 km from Visakhapatnam."
      },
      {
        question: "Can Since T20 Services arrange resort bookings in Maredumilli?",
        answer: "Yes, we provide instant resort, hotel, homestay, and forest tent camping bookings in Maredumilli with best price guarantees."
      }
    ],
    pickupLocations: ["Rajahmundry", "Visakhapatnam", "Kakinada", "Rampachodavaram"],
    bestTimeToVisit: "August to March"
  },
  {
    id: "pkg-deomali-trekking",
    slug: "deomali-trekking-camping",
    title: "Deomali Trekking & Camping Package",
    subtitle: "Conquer Highest Peak of Eastern Ghats (1,672m) with Mountain Camping",
    metaTitle: "Deomali Trekking & Camping Package | Highest Peak Eastern Ghats",
    metaDescription: "Book Deomali Trekking & Camping Package. Conquer Deomali Peak (1672m) near Koraput & Araku. Mountain top tent camping, sunset/sunrise views, taxi & guide included.",
    keywords: "Deomali Trekking Package, Deomali Camping, Deomali Tourism, Deomali Travel, Deomali Tour Package, Deomali Tent Booking, Deomali Tourist Places, Deomali Trip, Deomali Hotel Booking, Deomali Homestay, Visakhapatnam to Deomali Trip",
    destination: "Deomali Peak (Koraput / Araku Border)",
    duration: "2 Days / 1 Night",
    startingPrice: "₹1,999",
    originalPrice: "₹3,499",
    discountBadge: "High Altitude Adventure",
    heroImage: "/hero-bg-araku.png",
    galleryImages: [
      "/hero-bg-araku.png",
      "/hero-full-graphic.png"
    ],
    overview: "Deomali is the highest peak in the Eastern Ghats at an elevation of 1,672 meters. Situated close to the Araku Valley & Koraput border, Deomali offers rolling green hills, cloud-kissed peaks, cold mountain breezes, and unforgettable starry night camping.",
    highlights: [
      "Conquer Deomali Peak (1,672 meters altitude)",
      "Panoramic 360-Degree Mountain Ridge Trekking",
      "Stargazing Tent Camping with Mountain Bonfire",
      "Combine with Araku Valley & Rani Duduma Waterfalls",
      "Complete Pickup & Drop Taxi Support from Vizag / Araku"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Araku / Vizag to Deomali Base Camp Trek",
        desc: "Morning pickup from Vizag/Araku. Drive up the scenic Deomali mountain winding roads. Afternoon ridge trekking and sunset viewing at the summit peak. Overnight tent camping with warm campfire."
      },
      {
        day: "Day 2",
        title: "Sunrise & Rani Duduma Waterfalls",
        desc: "Early sunrise over the Eastern Ghats ridge. Breakfast at camp. Visit nearby Rani Duduma waterfalls and tribal villages before drop off."
      }
    ],
    inclusions: [
      "High Altitude Waterproof Dome Tents & Thermal Sleeping Bags",
      "Guide cum Trekking Escort",
      "Dinner & Morning Breakfast",
      "Roundtrip Taxi Transportation"
    ],
    exclusions: [
      "Personal hiking equipment",
      "Additional snacks"
    ],
    faqs: [
      {
        question: "Is Deomali accessible from Araku Valley?",
        answer: "Yes! Deomali is about 90 km from Araku Valley, making it an ideal extension for adventure travellers visiting Araku."
      }
    ],
    pickupLocations: ["Araku Valley", "Visakhapatnam", "Paderu", "Koraput"],
    bestTimeToVisit: "September to March"
  },
  {
    id: "pkg-araku-vanajangi-deomali",
    slug: "araku-vanajangi-deomali-combo",
    title: "Araku + Vanajangi + Deomali Tour Package",
    subtitle: "Ultimate 3-in-1 Mountain Adventure, Cloud Ocean & Peak Expedition",
    metaTitle: "Araku + Vanajangi + Deomali Combo Tour Package | Since T20 Services",
    metaDescription: "Book 3-in-1 Araku + Vanajangi + Deomali Tour Package. Experience Araku Valley waterfalls, Vanajangi cloud ocean sunrise, and Deomali highest peak camping in one trip.",
    keywords: "Araku Vanajangi Deomali Tour Package, Multi destination Tour Package, Araku Valley Tourism, Vanajangi Sunrise, Deomali Trekking, Araku Taxi Booking, Vizag to Deomali Trip, Vizag to Vanajangi Trip, Weekend Camping Packages",
    destination: "Araku, Vanajangi & Deomali Peak",
    duration: "3 Days / 2 Nights",
    startingPrice: "₹3,499",
    originalPrice: "₹5,499",
    discountBadge: "Ultimate Mega Combo",
    heroImage: "/hero-bg-custom.png",
    galleryImages: [
      "/hero-bg-custom.png",
      "/hero-visual-31.png"
    ],
    overview: "Our flagship multi-destination expedition covers all three crowns of the Eastern Ghats: Araku Valley's famous caves and coffee gardens, Vanajangi's magical sunrise cloud ocean, and Deomali's soaring 1,672m peak.",
    highlights: [
      "Day 1: Full Araku Valley Sightseeing (Borra Caves, Coffee Gardens, Chaparai)",
      "Day 2: Vanajangi Cloud Ocean Sunrise Trek & Camping Experience",
      "Day 3: Deomali Peak Summit Trek & Panoramic Viewpoints",
      "Dedicated 3-Day Taxi Vehicle with Experienced Mountain Driver",
      "Flexible Stay Options (Hotels, Resorts, or Mountain Tents)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Vizag to Araku Valley Sightseeing",
        desc: "Pickup from Visakhapatnam. Scenic drive to Araku visiting Borra Caves, Ananthagiri, and Tribal Museum. Night stay in Araku Hotel/Resort."
      },
      {
        day: "Day 2",
        title: "Araku to Vanajangi Base Camp & Sunset",
        desc: "Morning Chaparai visit. Drive to Vanajangi base camp near Paderu. Setup tents, bonfire, and traditional tribal dinner."
      },
      {
        day: "Day 3",
        title: "Vanajangi Cloud Ocean Sunrise & Deomali Summit",
        desc: "Early morning Vanajangi sunrise cloud spectacle. Drive towards Deomali peak summit. Exploration and evening drop back to Vizag/Araku."
      }
    ],
    inclusions: [
      "All 3 Days Dedicated Private Taxi (Sedan / Ertiga / Innova)",
      "1 Night Resort Stay in Araku + 1 Night Camping in Vanajangi",
      "Driver Expenses, Tolls, Fuel & Taxes",
      "Bonfire & Meals as per itinerary"
    ],
    exclusions: [
      "Monuments entry fees",
      "Personal items"
    ],
    faqs: [
      {
        question: "Can we start this tour from Visakhapatnam?",
        answer: "Yes, we provide pickup and drop directly from Visakhapatnam Railway Station, Airport, or Hotels."
      }
    ],
    pickupLocations: ["Visakhapatnam", "Araku", "Paderu", "Anakapalli"],
    bestTimeToVisit: "October to March"
  },
  {
    id: "pkg-araku-vanajangi-paderu",
    slug: "araku-vanajangi-paderu-combo",
    title: "Araku + Vanajangi + Paderu Tour Package",
    subtitle: "Explore Agency Capital Paderu, Vanajangi Sunrise & Araku Valleys",
    metaTitle: "Araku + Vanajangi + Paderu Tour Package | Since T20 Services",
    metaDescription: "Book Araku + Vanajangi + Paderu Tour Package. Explore Alluri Sitharama Raju district capital Paderu, Modamamba Temple, Vanajangi cloud sunrise, and Araku Valley.",
    keywords: "Araku Vanajangi Paderu Tour Package, Paderu Tourism, Services in Paderu, Vanajangi Sunrise, Araku Valley Tour Packages, Paderu Taxi Booking, Vizag to Paderu Taxi, Paderu to Araku Taxi, ASR District Tourism",
    destination: "Araku Valley, Vanajangi & Paderu (ASR District)",
    duration: "2 Days / 1 Night",
    startingPrice: "₹2,299",
    originalPrice: "₹3,799",
    discountBadge: "Cultural & Nature Special",
    heroImage: "/hero-bg-araku.png",
    galleryImages: [
      "/hero-bg-araku.png",
      "/hero-bg-30.png"
    ],
    overview: "Discover the heart of Alluri Sitharama Raju District! Explore Paderu town, visit the holy Modamamba Temple, witness the cloud ocean in Vanajangi, and experience Araku Valley's natural wonders.",
    highlights: [
      "Paderu Town Sightseeing & Famous Modamamba Temple Darshan",
      "Vanajangi Hill Cloud Ocean Sunrise Trek & Tent Camping",
      "Araku Valley Borra Caves & Coffee Plantation Tour",
      "Local Tribal Market Visit & Coffee Tasting in Paderu/Araku",
      "Doorstep Taxi Service from Vizag / Paderu"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Vizag to Paderu & Vanajangi Night Camp",
        desc: "Pickup from Vizag. Drive through Ghat road to Paderu. Visit Modamamba Ammavari Temple and local agency markets. Proceed to Vanajangi for evening camp & bonfire."
      },
      {
        day: "Day 2",
        title: "Vanajangi Cloud Sunrise to Araku Sightseeing",
        desc: "Witness Vanajangi sunrise at 5:30 AM. Drive to Araku Valley. Visit Borra Caves, Tribal Museum, and Chaparai. Drop at Vizag/Araku by evening."
      }
    ],
    inclusions: [
      "Private AC Taxi for Full Trip",
      "Vanajangi Tent Camping Gear & Setup",
      "Modamamba Temple Visit Assistance",
      "Fuel, Driver Allowance & Parking"
    ],
    exclusions: [
      "Temple puja special pass fees",
      "Personal food purchases"
    ],
    faqs: [
      {
        question: "Is Paderu close to Vanajangi?",
        answer: "Yes, Vanajangi Hills is located just 6 km from Paderu town center."
      }
    ],
    pickupLocations: ["Visakhapatnam", "Paderu", "Araku Valley"],
    bestTimeToVisit: "September to March"
  },
  {
    id: "pkg-visakhapatnam-araku-vanajangi",
    slug: "visakhapatnam-araku-vanajangi-combo",
    title: "Visakhapatnam + Araku + Vanajangi Tour Package",
    subtitle: "Complete City, Coastal Beaches, Hill Station & Cloud Ocean Vacation",
    metaTitle: "Visakhapatnam + Araku + Vanajangi Tour Package | 4 Days Complete Tour",
    metaDescription: "Book Visakhapatnam + Araku + Vanajangi Tour Package. Cover Vizag Beach Road, Submarine Museum, Kailasagiri, Araku Borra Caves & Vanajangi Cloud Sunrise.",
    keywords: "Visakhapatnam Araku Vanajangi Tour Package, Visakhapatnam Tourism, Visakhapatnam Tour Packages, Vizag to Araku Tour, Vizag to Vanajangi Trip, Visakhapatnam Taxi Booking, Visakhapatnam Hotel Booking, Visakhapatnam Weekend Trips",
    destination: "Visakhapatnam, Araku Valley & Vanajangi",
    duration: "4 Days / 3 Nights",
    startingPrice: "₹4,999",
    originalPrice: "₹7,999",
    discountBadge: "Bestseller Family Vacation",
    heroImage: "/hero-bg-custom.png",
    galleryImages: [
      "/hero-bg-custom.png",
      "/hero-bg-araku.png",
      "/hero-visual-31.png"
    ],
    overview: "The ultimate Andhra Pradesh vacation! Experience the coastal charm of Visakhapatnam (Rishikonda Beach, Submarine Museum, Kailasagiri), combined with Araku Valley hill station, Borra Caves, and the miraculous Vanajangi Cloud Ocean Sunrise.",
    highlights: [
      "Day 1: Visakhapatnam City Tour (Rishikonda Beach, INS Kursura Submarine Museum, Kailasagiri Ropeway, Simhachalam Temple)",
      "Day 2: Vizag to Araku Valley Scenic Journey & Resort Stay",
      "Day 3: Araku Coffee Gardens & Vanajangi Overnight Cloud Camping",
      "Day 4: Vanajangi Sunrise Spectacle & Drop to Vizag Airport / Station",
      "Luxury Vehicle Support (Etios, Dzire, Ertiga, Innova, Tempo Traveller)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Visakhapatnam City & Coastal Sightseeing",
        desc: "Pickup from Vizag Airport / Railway Station. Check-in to hotel. Visit Simhachalam Temple, Kailasagiri Hilltop, Submarine Museum, Aircraft Museum, and RK Beach."
      },
      {
        day: "Day 2",
        title: "Vizag to Araku Valley Hill Station",
        desc: "Morning train/road journey to Araku Valley. Visit Tatipudi Reservoir, Ananthagiri Waterfalls, Borra Caves. Overnight stay in Araku."
      },
      {
        day: "Day 3",
        title: "Araku to Vanajangi Cloud Camping Base",
        desc: "Explore Tribal Museum, Chaparai, and Coffee plantations. Drive to Vanajangi for evening camp setup, bonfire, and stargazing."
      },
      {
        day: "Day 4",
        title: "Vanajangi Cloud Ocean Sunrise & Return",
        desc: "Watch golden sunrise over white cloud oceans. Morning breakfast and return transfer to Visakhapatnam station/airport."
      }
    ],
    inclusions: [
      "3 Nights Accommodation (1 Night Vizag + 1 Night Araku + 1 Night Camping)",
      "Dedicated Private Car for 4 Days",
      "Breakfast at Hotels",
      "Driver Allowance, Tolls, Taxes & Parking"
    ],
    exclusions: [
      "Ropeway & Museum entry tickets",
      "Lunch & Dinners unless specified"
    ],
    faqs: [
      {
        question: "Is this package suitable for families with children and senior citizens?",
        answer: "Yes! We customize hotel stay options and comfortable vehicle choices for family comfort."
      }
    ],
    pickupLocations: ["Visakhapatnam Airport", "Vizag Railway Station", "Vizag City Hotels"],
    bestTimeToVisit: "October to March"
  }
];
